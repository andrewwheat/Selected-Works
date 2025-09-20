# Andrew Portfolio — Starter
Steps to publish on GitHub Pages.

## 1) Create a GitHub repo
- Go to https://github.com → create account → click **New**.
- Name: `andrew-portfolio` → **Public** → **Create repository**.

## 2) Upload files
- Click **Add file → Upload files**.
- Drag **all files and folders from this zip**.
- Click **Commit changes**.

## 3) Enable GitHub Pages
- Repo → **Settings** → **Pages** → Source: **Deploy from a branch**.
- Branch: `main` (or `master`), Folder: `/ (root)` → **Save**.
- Your site will be at `https://YOUR-USER.github.io/andrew-portfolio/`.

## 4) Add your images
- Upload into `/images/<project>/...` then update `/data/projects.json`.
- Use relative paths like `./images/food-pantry/cover.jpg`.

## 5) Edit content
- Open `/data/projects.json` in GitHub’s editor and change titles, years, description, and image paths.
