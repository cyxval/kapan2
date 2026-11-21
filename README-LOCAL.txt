FOOD COURT KAPAN — UPDATED WEBSITE PROJECT

Requirements:
- Node.js 20+ (recommended)
- Bun (https://bun.sh)

Run locally:
1. Extract this ZIP.
2. Open a terminal in the project folder (the folder containing package.json).
3. Run: bun install
4. Run: bun run dev
5. Open the local URL printed in the terminal.

Production checks:
- bun run typecheck
- bun run build

Deployment:
- The project is configured for Cloudflare Workers with the existing Wrangler setup.
- In Cloudflare Build settings use:
  Build command: bun run build
  Deploy command: bunx wrangler deploy
  Root directory: /

Design update:
- Reworked the homepage into an editorial restaurant experience.
- Full-screen hero using the real Food Court Kapan food photography.
- Redesigned story, menu inquiry, gallery, visit/contact and footer sections.
- Responsive layout for desktop and mobile.
- Existing real photos and restaurant contact details retained.

Business details:
- Food Court Kapan
- 37/6 Shahumyan St, Kapan 3301, Armenia
- Phone: 094 777300
- Instagram: https://www.instagram.com/food_court__kapan

Important:
- No menu items, prices, or opening hours were invented because they were not provided.
- This archive contains source code and configuration, not node_modules or deployment credentials.
