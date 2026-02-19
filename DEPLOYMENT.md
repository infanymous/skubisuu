# Deployment + change management (Sanity → GitHub Actions → Hostinger)

This repo is configured for **static export** using Next.js (`output: 'export'`). A publish in Sanity triggers a GitHub Actions workflow, which builds the site and uploads the generated `out/` folder to Hostinger.

## 1) Prereqs

- A Hostinger account with **SFTP** access (host, username, password, remote directory).
- A GitHub repo containing this code.
- A Sanity Studio project (already present under `cms/`).

## 2) GitHub Actions workflow

Workflow file: `.github/workflows/deploy-hostinger.yml`

It supports two triggers:

- **Code changes**: `push` to `main`
- **Manual**: `workflow_dispatch` (Run workflow button)
- **Webhook-driven**: `repository_dispatch` with `event_type: sanity_publish`

## 3) GitHub Secrets to add

In your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

### Hostinger (required)

- `HOSTINGER_SFTP_HOST` — e.g. `sftp.hostinger.com`
- `HOSTINGER_SFTP_PORT` — optional, defaults to `22`
- `HOSTINGER_SFTP_USERNAME`
- `HOSTINGER_SFTP_PASSWORD`
- `HOSTINGER_SFTP_REMOTE_DIR` — e.g. `public_html` (or the directory Hostinger serves)

### Site (recommended)

- `SITE_URL` — full public URL, e.g. `https://example.com`

### Sanity (recommended)

These values are *public identifiers* but keeping them in Secrets is fine.

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `SANITY_API_VERSION` — optional (defaults to `2024-01-01` in code)

## 4) Sanity webhook → GitHub Actions trigger

Sanity should fire a webhook on **Publish**.

There are two common GitHub API endpoints you can call. This repo is wired for **repository_dispatch** because it’s simple and doesn’t require choosing a workflow file name.

### Option A (recommended): `repository_dispatch`

**URL**

`https://api.github.com/repos/<OWNER>/<REPO>/dispatches`

**Method**: `POST`

**Headers**

- `Authorization: Bearer <GITHUB_PAT>`
- `Accept: application/vnd.github+json`
- `Content-Type: application/json`

**Body**

```json
{
  "event_type": "sanity_publish"
}
```

### Option B: `workflow_dispatch`

**URL**

`https://api.github.com/repos/<OWNER>/<REPO>/actions/workflows/deploy-hostinger.yml/dispatches`

**Body**

```json
{
  "ref": "main"
}
```

## 5) GitHub PAT requirements

Create a token that can call GitHub’s API.

- Prefer a **fine-grained PAT** limited to this single repo.
- Minimum permissions are typically:
  - **Actions**: Read & write (to dispatch workflows)
  - **Contents**: Read (to access repo)

Store the PAT in Sanity’s webhook configuration (or use a relay function if you don’t want to put the PAT in Sanity).

## 6) Local env (optional)

See `.env.example` for typical variables.

## 7) What gets deployed

- `npm ci`
- `npm run build` → produces `out/`
- Workflow mirrors `out/` to Hostinger using SFTP with `--delete` (remote files not present in `out/` are removed).
