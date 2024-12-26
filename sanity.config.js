// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "default",
  title: "Sugarcoded Studio",
  projectId: "1299kz2w", // Your actual project ID
  dataset: "production", // Your dataset name
  plugins: [deskTool()],
  schema: {
    types: [], // Add your schemas here
  },
});
