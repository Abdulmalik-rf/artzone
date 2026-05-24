import base64
import os

script_dir = os.path.dirname(os.path.abspath(__file__))
logo_path = os.path.join(script_dir, '..', 'logo.png')

with open(logo_path, 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode('utf-8')

logo_uri = f"data:image/png;base64,{logo_b64}"

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 380" width="1400" height="380">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7b2fa0"/>
      <stop offset="50%" stop-color="#6a2b8e"/>
      <stop offset="100%" stop-color="#421963"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f9a825"/>
      <stop offset="100%" stop-color="#ff6f00"/>
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="50%" r="40%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="40%" r="35%">
      <stop offset="0%" stop-color="#f9a825" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="transparent" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1.2" fill="white" opacity="0.08"/>
    </pattern>
    <linearGradient id="boxFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f5f0f8"/>
      <stop offset="100%" stop-color="#d4c6de"/>
    </linearGradient>
    <linearGradient id="boxSide" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d4c6de"/>
      <stop offset="100%" stop-color="#baa8c9"/>
    </linearGradient>
    <linearGradient id="boxTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#e8e0ed"/>
    </linearGradient>
    <linearGradient id="bookCover" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#ece6f0"/>
    </linearGradient>
    <linearGradient id="bookSpine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#c9b8d6"/>
      <stop offset="100%" stop-color="#b09cc0"/>
    </linearGradient>
    <linearGradient id="bookPages" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fff9e6"/>
      <stop offset="100%" stop-color="#f0e6d0"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="15" flood-color="#2a0845" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1400" height="380" fill="url(#bg)"/>
  <rect width="1400" height="380" fill="url(#dots)"/>
  <rect width="1400" height="380" fill="url(#glow1)"/>
  <rect width="1400" height="380" fill="url(#glow2)"/>
  <circle cx="1300" cy="-30" r="180" fill="white" opacity="0.03"/>
  <circle cx="1300" cy="-30" r="130" fill="white" opacity="0.02"/>
  <g transform="translate(750, 320) rotate(45)" opacity="0.05"><rect width="30" height="30" rx="4" fill="white"/></g>
  <g transform="translate(1350, 100) rotate(45)" opacity="0.04"><rect width="20" height="20" rx="3" fill="white"/></g>

  <!-- BOOK -->
  <g transform="translate(820, 75)" filter="url(#shadow)">
    <ellipse cx="130" cy="280" rx="100" ry="12" fill="#1a0530" opacity="0.3"/>
    <!-- Pages -->
    <g transform="skewY(-2)">
      <rect x="18" y="38" width="220" height="240" rx="3" fill="url(#bookPages)" stroke="#d4c090" stroke-width="0.5"/>
      <line x1="22" y1="44" x2="22" y2="274" stroke="#d4c090" stroke-width="0.5"/>
      <line x1="25" y1="44" x2="25" y2="274" stroke="#d4c090" stroke-width="0.3"/>
    </g>
    <!-- Spine -->
    <g transform="skewY(-2)">
      <rect x="0" y="30" width="20" height="248" rx="3" fill="url(#bookSpine)" stroke="#a08ab5" stroke-width="0.5"/>
      <line x1="5" y1="50" x2="15" y2="50" stroke="#9580a8" stroke-width="0.8"/>
      <line x1="5" y1="260" x2="15" y2="260" stroke="#9580a8" stroke-width="0.8"/>
    </g>
    <!-- Cover -->
    <g transform="skewY(-2)">
      <rect x="18" y="30" width="220" height="248" rx="4" fill="url(#bookCover)" stroke="#c4b5d1" stroke-width="1"/>
      <rect x="32" y="46" width="192" height="216" rx="3" fill="none" stroke="#d8cce2" stroke-width="1.2"/>
      <!-- Real logo on book -->
      <image href="{logo_uri}" x="53" y="52" width="150" height="170" preserveAspectRatio="xMidYMid meet"/>
      <line x1="78" y1="230" x2="178" y2="230" stroke="#c4b5d1" stroke-width="0.8"/>
      <text x="128" y="248" text-anchor="middle" font-family="Outfit, Segoe UI, sans-serif" font-size="8" font-weight="400" fill="#9585a5">Your Vision, Our Prints</text>
    </g>
  </g>

  <!-- BOX -->
  <g transform="translate(1020, 60)" filter="url(#shadow)">
    <ellipse cx="140" cy="310" rx="120" ry="14" fill="#1a0530" opacity="0.3"/>
    <!-- Right side -->
    <polygon points="165,55 300,110 300,290 165,235" fill="url(#boxSide)" stroke="#b8a5c8" stroke-width="1"/>
    <polygon points="165,55 300,110 300,290 165,235" fill="#6a2b8e" opacity="0.08"/>
    <!-- Front face -->
    <polygon points="0,110 165,55 165,235 0,290" fill="url(#boxFront)" stroke="#c4b5d1" stroke-width="1"/>
    <!-- Top face -->
    <polygon points="0,110 135,55 300,110 165,55" fill="url(#boxTop)" stroke="#c4b5d1" stroke-width="1"/>
    <polygon points="0,110 135,55 300,110 165,55" fill="white" opacity="0.15"/>
    <line x1="150" y1="55" x2="150" y2="110" stroke="#c4b5d1" stroke-width="0.8" opacity="0.5"/>
    <!-- Real logo on box -->
    <image href="{logo_uri}" x="20" y="110" width="130" height="130" preserveAspectRatio="xMidYMid meet"/>
    <!-- Tape -->
    <rect x="120" y="48" width="60" height="18" rx="2" fill="#f5e6a3" opacity="0.5" transform="rotate(2, 150, 57)"/>
  </g>

  <!-- Sparkles -->
  <g opacity="0.4">
    <circle cx="780" cy="60" r="3" fill="#f9a825"/>
    <circle cx="800" cy="340" r="2" fill="#f9a825"/>
    <circle cx="1360" cy="80" r="2.5" fill="white"/>
    <circle cx="1340" cy="300" r="2" fill="white"/>
    <circle cx="900" cy="200" r="1.5" fill="#f9a825"/>
  </g>

  <line x1="80" y1="320" x2="380" y2="320" stroke="url(#accent)" stroke-width="3" stroke-linecap="round" opacity="0.6"/>

  <!-- LEFT SIDE TEXT -->
  <g transform="translate(80, 55)">
    <rect width="160" height="34" rx="17" fill="url(#accent)" opacity="0.9"/>
    <text x="80" y="23" text-anchor="middle" font-family="Outfit, Segoe UI, sans-serif" font-size="14" font-weight="700" fill="white" letter-spacing="1.5">APRIL SPECIAL</text>
  </g>
  <text x="80" y="148" font-family="Outfit, Segoe UI, sans-serif" font-size="52" font-weight="800" fill="white" letter-spacing="-0.5">Premium Prints</text>
  <text x="80" y="210" font-family="Outfit, Segoe UI, sans-serif" font-size="48" font-weight="800" fill="url(#accent)">Up to 30% OFF</text>
  <text x="80" y="260" font-family="Outfit, Segoe UI, sans-serif" font-size="18" font-weight="400" fill="white" opacity="0.8">Business cards, flyers, posters &amp; more.</text>
  <text x="80" y="288" font-family="Outfit, Segoe UI, sans-serif" font-size="18" font-weight="400" fill="white" opacity="0.8">Elevate your brand this April.</text>
  <g transform="translate(80, 330)">
    <rect width="170" height="44" rx="22" fill="white"/>
    <text x="85" y="29" text-anchor="middle" font-family="Outfit, Segoe UI, sans-serif" font-size="16" font-weight="700" fill="#6a2b8e">Shop Now</text>
    <text x="145" y="29" font-family="Outfit, Segoe UI, sans-serif" font-size="16" fill="#6a2b8e">&#8594;</text>
  </g>
</svg>'''

output_path = os.path.join(script_dir, 'april-sale.svg')
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(svg)

print(f"Done - {len(svg)} bytes written to {output_path}")
