import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schema';

export default defineConfig({
  name: 'myCompanyWebsite',
  title: 'My Company Website',

  projectId: 'yourProjectId', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset name

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
});