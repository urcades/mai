> [!TIP]
> This website is built with the Astro web framework, and it's served via Vercel.

# Astro Website Project

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

This starts the local development server at `http://localhost:4321` (by default). The page will automatically reload if you make changes to the code.

Other useful commands:

- `npm run build`: Build the site for production
- `npm run preview`: Preview the production build locally

## Project Structure

Astro follows a file-based routing system with a specific directory organization:

- `/src/`: Contains the source code of your project
  - `/src/pages/`: Each `.astro`, `.md`, or `.mdx` file becomes a route based on its filename
  - `/src/layouts/`: Reusable page templates and layouts
  - `/src/components/`: UI components (can be in Astro, React, Vue, etc.)
  - `/src/content/`: Where content collections are stored (for blog posts, etc.)
  - `/src/assets/`: Static assets like images
- `/public/`: Files here are served as-is (favicons, robots.txt, etc.)
- `/astro.config.mjs`: Astro configuration file
- `/.astro/`: Build artifacts (do not edit)

### How Astro Works

Astro is a static site generator that lets you use various UI frameworks together. Key concepts:

- **File-Based Routing**: Files in `/pages/` automatically become URLs
- **Component Islands**: Interactive UI elements can be built in React, Vue, Svelte, etc.
- **Content Collections**: Built-in system for managing content (like blog posts)
- **Partial Hydration**: Only the interactive components use JavaScript in the browser

## Deployment

This site is deployed using Vercel. Here's how it works:

1. When code is pushed to the main branch, Vercel automatically triggers a new build
2. Vercel runs `npm run build` to generate the static site
3. The built files are deployed to Vercel's global CDN

Vercel's integration analyzes the project, detects it's an Astro site, and applies the optimal build settings automatically. The deployment process is fully automated, requiring no manual intervention.

### Environment Variables

If your project uses environment variables, make sure to add them in the Vercel dashboard under Project Settings > Environment Variables.
