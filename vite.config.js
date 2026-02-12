import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { env } from "node:process";

const repoName = env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubActions = env.GITHUB_ACTIONS === "true";

export default defineConfig({
  plugins: [react()],
  // Use repo subpath only when building on GitHub Actions for Pages deploys.
  base: isGitHubActions && repoName ? `/${repoName}/` : "/",
});
