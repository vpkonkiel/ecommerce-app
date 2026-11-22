# Ecommerce App

A modern ecommerce platform built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Next.js App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Turbopack development and CSS processing
- Lucide React icons
- Responsive navigation, search, and footer components

## Tech Stack

- [Next.js 16](https://nextjs.org)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Bun](https://bun.sh)
- [Lucide React](https://lucide.dev)

## Getting Started

### Prerequisites

Install [Bun](https://bun.sh/docs/installation) or Node.js 20 or newer.

### Installation

Clone the repository and enter the client directory:

```bash
git clone <repository-url>
cd ecommerce-app/client
```

Install dependencies:

```bash
bun install
```

npm, pnpm, and Yarn can also be used, but Bun is the package manager represented by this repository's lockfile.

### Environment Variables

No environment variables are required for the current storefront. If integrations are added later, document them in an `.env.example` file and load values with `NEXT_PUBLIC_` prefixes only when they are safe to expose in the browser.

### Development

Start the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The main page is in `src/app/page.tsx`. Changes to files in `src` are reflected automatically during development.

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Next.js development server with Turbopack |
| `bun run build` | Create an optimized production build |
| `bun run start` | Serve the production build locally |
| `bun run lint` | Run the configured lint command |

## Project Structure

```text
client/
├── public/             # Static assets
├── src/
│   ├── app/            # App Router pages, layout, and global styles
│   └── components/     # Shared UI components
├── next.config.ts      # Next.js and framework configuration
├── package.json        # Scripts and dependencies
└── tsconfig.json       # TypeScript configuration
```

## Production Build

Create and start a local production build:

```bash
bun run build
bun run start
```

The production server is available at [http://localhost:3000](http://localhost:3000) by default.

## Deployment

### Vercel

Vercel is the recommended deployment platform for this Next.js application:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Set the root directory to `client`.
4. Use the detected Next.js build settings.
5. Deploy the project.

### Other Platforms

Any platform that supports Node.js and Next.js can host the application. Configure it to:

- Run `bun install` in the `client` directory
- Run `bun run build`
- Run `bun run start`
- Route incoming traffic to the Next.js server

If a deployment platform requires Node.js instead of Bun, run `npm install`, `npm run build`, and `npm run start` from the `client` directory.

## Contributing

1. Create a feature branch from `main`.
2. Make focused changes and update documentation when needed.
3. Run `bun run lint` and `bun run build` before submitting changes.
4. Open a pull request with a clear description and testing notes.

## License

Add a license for the project before distributing or publishing it publicly.
