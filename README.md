# GuideMePhD.com

This repository contains the source code for [guidemephd.com](https://guidemephd.com).

The site is built using React and Vite, and it is automatically deployed to GitHub Pages via GitHub Actions whenever code is pushed to the `main` branch.

## 🛠 Prerequisites

Before starting, ensure you have a modern version of Node.js installed.

**Required:** Node.js version 18 or 20+.

Check version:
```bash
node -v
```

If you are on an older version (e.g., v12 or v14), the dev server will fail. Use `nvm` to update:

```bash
nvm install 20
nvm use 20
```

## 🚀 Getting Started

Clone the repository (if you haven't already):

```bash
git clone https://github.com/gavinf97/guidemephd-static.git
cd guidemephd-static
```

Install dependencies: Run this once to download the required libraries:

```bash
npm install
```

## 💻 Local Development

To work on the website and see your changes in real-time:

Start the development server:

```bash
npm run dev
```

**Open your browser:** The terminal will show a local URL (usually `http://localhost:5173`). Open this link to view the site.

**Edit files:**
- Main content is located in the `src` folder.
- Any changes you save will instantly update in the browser (Hot Module Replacement).

**Linting:**
To check for code quality issues:
```bash
npm run lint
```

## 🚢 Deployment

You do not need to manually build the site or move files around. The deployment process is fully automated.

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Describe your changes here"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin main
   ```

**Done!**

- GitHub detects the push.
- A GitHub Action automatically starts up.
- It builds the React application and updates the live site at guidemephd.com.

*Note: Updates usually take 1-2 minutes to appear live.*

## ⚠️ Important Notes

- **Do not run `npm run build` locally:** You don't need to. GitHub handles the building process in the cloud to ensure consistency.
- **Environment:** If the deployment fails, check the "Actions" tab in GitHub for logs. Ensure the `github-pages` environment in Settings isn't blocked.

## 📂 Project Structure

- `/src`: Contains the React components and source code.
- `/public`: Static assets (images, favicon) that don't need processing.
  - `CNAME`: Configures the custom domain (guidemephd.com).
- `.github/workflows`: Contains the configuration for the auto-deployment script.
