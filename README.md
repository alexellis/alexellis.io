# Alex Ellis - Personal Website

This is the personal website of Alex Ellis, built with Next.js and Tailwind CSS.

## Running Locally with npm

### Prerequisites
- Node.js 18+ 
- npm

### Installation and Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Running with Docker

### Option 1: Using Docker Compose (Recommended)

1. Build and run the application:
```bash
docker-compose up --build
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using Docker directly

1. Build the Docker image:
```bash
docker build -t alexellis-website .
```

2. Run the container:
```bash
docker run -p 3000:3000 alexellis-website
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploying to GitHub Pages

This site is configured for static export and can be deployed to GitHub Pages.

### Automatic Deployment

1. Push your code to the `main` branch
2. Go to your repository Settings → Pages
3. Set the source to "GitHub Actions"
4. The site will automatically deploy on every push to main

### Manual Deployment

1. Build the static site:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory
3. Upload the contents of `out/` to your GitHub Pages hosting

## Development

The website is built with:
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Project Structure

```
alexellis.io/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
└── .github/workflows/  # GitHub Actions workflows
``` 