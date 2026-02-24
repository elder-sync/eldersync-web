# ElderSync Web

PWA frontend for ElderSync - AI-powered care coordination for aging parents.

## Tech Stack

- **React 18** + TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **PWA** - Progressive Web App (coming soon)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.tsx          # Main app component (landing page)
├── main.tsx         # Entry point
├── index.css        # Global styles + Tailwind
└── vite-env.d.ts    # TypeScript definitions
```

## Deployment

### Vercel (Recommended)

1. Connect repo to Vercel
2. Deploy automatically on push to `main`

### Manual

```bash
npm run build
# Deploy `dist/` folder to any static host
```

## Environment Variables

```env
VITE_API_URL=https://api.eldersync.com  # Backend API (future)
```

## Related Repos

- [eldersync](https://github.com/elder-sync/eldersync) - Planning & documentation
- [eldersync-api](https://github.com/elder-sync/eldersync-api) - Backend API

---

Made with ❤️ in Singapore
