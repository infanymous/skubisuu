import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'yourProjectId', // Replace with your actual project ID
    dataset: 'production', // Replace with your actual dataset name
  },
});