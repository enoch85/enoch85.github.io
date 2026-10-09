# Daniel Hansson - CV Website

## Tech Stack

- Next.js 16.4.0
- React 19.3.0
- TypeScript 6.0.3
- Tailwind CSS 4.3.3
- ESLint 9.39.5
- Node.js 26.x (shared by local development and CI through `.node-version`)
- GitHub Pages
- CV generator: Python 3.14.8, python-docx 1.2.0, deep-translator 1.11.4

TypeScript and ESLint use the newest releases supported by Next.js's lint
plugins. Python uses the latest stable version available to GitHub Actions.

## Dependency updates and deployment

Dependabot checks npm, the CV generator's Python requirements, and GitHub Actions
weekly on Mondays at 06:00 Europe/Stockholm. Version updates have a three-day
release cooldown; security updates bypass it. Minor and patch updates are grouped,
validated with a site build and Python dependency installation, approved by
GitHub Actions, and queued for automatic squash merging. Major updates are opened
separately for manual review.

In GitHub repository settings, **Allow auto-merge** and **Allow GitHub Actions
to create and approve pull requests** must be enabled (both are already enabled
for this repository). After validation and Dependabot commit verification, the
workflow approves minor and patch updates and enables auto-merge. Auto-merge
respects required checks and reviews; additional required reviewers still need
to approve. Require the `validate` check for dependency PRs if branch rules are
configured.

The Lint workflow runs `npm run lint` for every pull request and pushes to `main`.
Its `ESLint` check is required for merging into `main`. Every PR also runs the
site build and Python dependency validation before Dependabot approval can run.

After a Dependabot PR merges into `main`, the site rebuilds and deploys to GitHub
Pages no sooner than 30 minutes after the merge. A completion trigger handles
workflow-token merges, with a five-minute scheduled fallback for delayed merges
and failed deployments. GitHub scheduling can add further delay. Ordinary pushes
and manual deployments use the same workflow. Superseded commits are skipped.
