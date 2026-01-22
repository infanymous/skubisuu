# My Company Website

## Overview
This project is a modern company website built using Next.js, featuring a clean and responsive design. The website includes a navigation bar with links to four main pages: Home, About Us, Contact, and Gallery. The primary colors used in the design are white, yellow, and red, creating a vibrant and engaging user experience.

## Project Structure
The project is organized as follows:

```
my-company-website
├── src
│   ├── app
│   │   ├── about
│   │   │   └── page.tsx        # About Us page component
│   │   ├── contact
│   │   │   └── page.tsx        # Contact page component
│   │   ├── gallery
│   │   │   └── page.tsx        # Gallery page component
│   │   ├── globals.css          # Global CSS styles
│   │   ├── layout.tsx           # Main layout component
│   │   └── page.tsx             # Home page component
│   ├── components
│   │   ├── Navbar.tsx           # Navigation bar component
│   │   └── Footer.tsx           # Footer component
│   ├── lib
│   │   └── cms
│   │       ├── client.ts        # CMS client configuration
│   │       └── queries.ts       # CMS data fetching queries
│   └── types
│       └── index.ts             # TypeScript types and interfaces
├── cms
│   ├── schema
│   │   ├── about.ts             # CMS schema for About Us
│   │   ├── contact.ts           # CMS schema for Contact
│   │   ├── gallery.ts           # CMS schema for Gallery
│   │   ├── home.ts              # CMS schema for Home
│   │   └── index.ts             # Exports all CMS schemas
│   ├── sanity.config.ts         # Sanity CMS configuration
│   └── sanity.cli.ts            # CLI commands for Sanity CMS
├── public
│   └── robots.txt               # Robots.txt for SEO
├── .env.example                  # Example environment variables
├── .gitignore                    # Git ignore file
├── next.config.js               # Next.js configuration
├── package.json                  # NPM configuration
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-company-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Set up environment variables:**
   Copy the `.env.example` file to `.env` and fill in the required values.

4. **Run the development server:**
   ```
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:3000` to view the website.

## Usage Guidelines
- The website is designed to be easily customizable through a CMS. Content for each page can be managed without technical knowledge.
- The navigation bar allows users to easily access different sections of the website.
- Ensure to follow best practices for SEO and accessibility when adding new content.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.