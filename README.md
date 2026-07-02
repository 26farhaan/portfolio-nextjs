# Portfolio

Personal portfolio website of Mohamad Farhan, live at [mohamadfarhan.space](https://www.mohamadfarhan.space).

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack) with [React 19](https://react.dev) and TypeScript
- [Mantine 8](https://mantine.dev) for the UI components and theming
- [next-intl](https://next-intl.dev) for internationalization — available in English and Indonesian
- [Motion](https://motion.dev) for animations
- [TanStack Query](https://tanstack.com/query) and [SWR](https://swr.vercel.app) for data fetching

## Getting Started

This project uses [pnpm](https://pnpm.io) as its package manager.

```bash
# install dependencies
pnpm install

# start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start the development server (Turbopack) |
| `pnpm build`        | Create a production build                |
| `pnpm start`        | Serve the production build               |
| `pnpm lint`         | Lint the source files with ESLint        |
| `pnpm lint:fix`     | Lint and auto-fix issues                 |
| `pnpm format`       | Format the codebase with Prettier        |
| `pnpm format:check` | Check formatting without writing         |

## Code Quality

Commits are guarded by [Husky](https://typicode.github.io/husky) git hooks:

- **pre-commit** — [lint-staged](https://github.com/lint-staged/lint-staged) runs ESLint and Prettier on staged files
- **commit-msg** — [commitlint](https://commitlint.js.org) enforces conventional commit messages
