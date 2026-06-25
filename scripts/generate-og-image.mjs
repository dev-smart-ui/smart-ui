import sharp from 'sharp';
import { writeFileSync } from 'fs';

const WIDTH = 1200;
const HEIGHT = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0D1117;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#31B76F;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FF8C42;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="20" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bgGrad)"/>

  <!-- Glow circles -->
  <circle cx="200" cy="150" r="300" fill="#31B76F" opacity="0.06" filter="url(#glow)"/>
  <circle cx="1050" cy="500" r="280" fill="#FF8C42" opacity="0.06" filter="url(#glow)"/>

  <!-- Border -->
  <rect x="1" y="1" width="${WIDTH - 2}" height="${HEIGHT - 2}" rx="16" ry="16"
    fill="none" stroke="#31B76F" stroke-width="1.5" opacity="0.4"/>

  <!-- Logo text: smart-ui -->
  <text x="80" y="118" font-family="Arial, sans-serif" font-size="42" font-weight="700"
    fill="url(#textGrad)">smart-ui</text>

  <!-- Main headline -->
  <text x="80" y="250" font-family="Arial, sans-serif" font-size="64" font-weight="800"
    fill="#FFFFFF">We Build Software and</text>
  <text x="80" y="330" font-family="Arial, sans-serif" font-size="64" font-weight="800"
    fill="url(#textGrad)">AI Automation</text>
  <text x="80" y="410" font-family="Arial, sans-serif" font-size="64" font-weight="800"
    fill="#FFFFFF">That Pays for Itself</text>

  <!-- Subtitle -->
  <text x="80" y="490" font-family="Arial, sans-serif" font-size="26" font-weight="400"
    fill="#9CA3AF">European software studio · EU, UK, US, Australia · 315+ projects since 2018</text>

  <!-- Badge -->
  <rect x="80" y="530" width="320" height="50" rx="25" fill="#31B76F" opacity="0.15"
    stroke="#31B76F" stroke-width="1.5"/>
  <text x="240" y="562" font-family="Arial, sans-serif" font-size="20" font-weight="600"
    fill="#31B76F" text-anchor="middle">www.smart-ui.pro</text>
</svg>`;

const svgBuffer = Buffer.from(svg);

await sharp(svgBuffer)
  .png()
  .toFile('public/assets/og-image.png');

console.log('✓ OG image created: public/assets/og-image.png (1200x630)');
