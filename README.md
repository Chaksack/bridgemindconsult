# BridgeMind Consult — Coming Soon (Nuxt 4)

Minimal "Coming Soon" site built with Nuxt 4 + Tailwind CSS. The homepage includes a contact form that sends emails to bridgemindconsult@gmail.com via SMTP.

## Pages

- `/` Coming Soon with contact form (sends email)
- `/contact` Original demo contact page (kept for reference)

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Environment variables (SMTP)

To enable email sending from the contact form, configure SMTP credentials via environment variables. You can place them in a `.env` file at the project root.

Required variables:

- `NUXT_SMTP_HOST` — SMTP server host (e.g., smtp.sendgrid.net)
- `NUXT_SMTP_PORT` — SMTP server port (e.g., 587)
- `NUXT_SMTP_USER` — SMTP username
- `NUXT_SMTP_PASS` — SMTP password
- `NUXT_SMTP_SECURE` — `true` to use TLS on port 465, otherwise `false`

Example `.env`:

```
NUXT_SMTP_HOST=smtp.example.com
NUXT_SMTP_PORT=587
NUXT_SMTP_USER=apikey_or_username
NUXT_SMTP_PASS=secret_password
NUXT_SMTP_SECURE=false
```

The recipient is hardcoded to bridgemindconsult@gmail.com as requested. The form will respond with an error if SMTP variables are not configured.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
