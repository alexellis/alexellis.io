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
└── docker-compose.yml  # Docker Compose configuration
``` 