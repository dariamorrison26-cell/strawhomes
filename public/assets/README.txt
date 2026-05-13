Place these three image files in this folder (/public/assets/):

1. strawhomes-logo.png
   - The blue "S|H strawhomes" logo (kept blue #154270, transparent background recommended)
   - Referenced by: src/components/Header.jsx
   - Also used as favicon in index.html

2. richard-morrison.jpg
   - The provided portrait of Richard Morrison (the brick-wall photo)
   - Aspect ratio close to 4:5 works best
   - Referenced by: src/components/ProfileCard.jsx

3. hero-daytime-home.jpg
   - A daytime luxury real estate photo for the hero background
   - Wide / landscape orientation, high resolution (>= 2400px wide)
   - Subject placed slightly right of center so the left side stays readable
   - Referenced by: src/components/HeroSection.jsx

The components include onError fallbacks so the page won't crash if any asset is
missing — the area will simply render blank/with the overlay gradient.
