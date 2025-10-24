# Pirates O-Phase Website

Static HTML/CSS/JS website for the Pirates O-Phasengruppe at KIT.

## Structure

- `index.html` - Homepage (5.4KB)
- `crew.html` - Crew member showcase (25KB)
- `schedule.html` - Weekly schedule (4.8KB)
- `log.html` - Photo logbook (placeholder, 3.5KB)
- `imprint.html` - Legal information (3.6KB)
- `404.html` - Custom error page (1.1KB)
- `styles.css` - Consolidated stylesheet (5.7KB)
- `robots.txt` - SEO robots file
- `sitemap.xml` - SEO sitemap

## Features

- Parallax menu animation using Parallax.js
- Responsive design with mobile detection
- Static crew member grid with frames and name tags
- Schedule images
- Sponsoring links
- Font optimization with `font-display: swap`
- Image loading optimization
- SEO-friendly structure

## Dependencies

- Parallax.js (loaded from CDN)
- Custom CSS with pirate theme
- Font: "Pieces of Eight"

## Performance

- Total HTML/CSS/JS: ~52KB
- Images: ~10MB (crew photos, schedule images, etc.)
- Much lighter than the previous Next.js setup (~500KB+ bundle)
- Optimized font loading
- Lazy loading for non-critical images

## Deployment

Simply upload all files to a web server. No build process required.

## SEO Features

- Semantic HTML structure
- Meta tags and descriptions
- Custom 404 page
- Robots.txt and sitemap.xml
- Theme color for mobile browsers