# Asset sources

- `vinyl-record-vintage.webp`: generated with the built-in imagegen tool for this website, then encoded as WebP with its transparent background preserved. Used for the current vinyl artwork. Generation prompt is below.
- `sleeve-paper-worn.webp`: generated with the built-in imagegen tool, then encoded as WebP. The cover's paper grain, faded ink, and rubbed cream edges are part of this texture. Generation prompt is below.
- `paper-stock.svg`: original procedural fine paper grain used over Side B's clean cream stock. Edge depth is rendered in CSS.
- `vinyl-record.png`: previous artwork, retained as an unused alternative. “Vinyl Record” by Linnaea Mallette, Public Domain Pictures. Source: https://www.publicdomainpictures.net/en/view-image.php?image=296310&picture=vinyl-record . Public domain / CC0, as identified by the source page.
- `../fonts/fraunces-retro.ttf`: Fraunces by the Fraunces Project Authors / Undercase Type, distributed through Google Fonts. https://github.com/google/fonts/tree/main/ofl/fraunces . SIL Open Font License; included at `../fonts/OFL-Fraunces.txt`.
- `../fonts/dm-mono-regular.ttf` and `../fonts/dm-mono-medium.ttf`: DM Mono, distributed through Google Fonts. https://github.com/google/fonts/tree/main/ofl/dmmono . SIL Open Font License; included at `../fonts/OFL-DM-Mono.txt`.
- `../fonts/shrikhand-regular.ttf`: Shrikhand, distributed through Google Fonts. https://github.com/google/fonts/tree/main/ofl/shrikhand . SIL Open Font License; included at `../fonts/OFL-Shrikhand.txt`.

## Vintage vinyl generation prompt

```text
Use case: product-mockup
Asset type: transparent vinyl-record cutout for a burgundy and cream personal website
Primary request: a photorealistic, gently aged black 12-inch vinyl LP photographed straight down
Composition: perfectly circular disc, no perspective tilt, centered on a square canvas with 3% clear padding on each edge, whole disc visible
Materials: authentic fine pressed grooves, subtle concentric track bands, smooth runout area, realistic beveled black rim, a few tiny sleeve scuffs and specks, soft natural imperfections without heavy damage
Lighting: one broad soft window reflection from upper left, subdued satin reflections across the right-hand grooves, deep warm black vinyl with visible physical texture, no harsh white glare
Label: blank aged ivory paper center label, diameter 30% of the disc, exact center, pressed ring and tiny spindle hole, no writing
Background: genuinely transparent, no ground plane and no cast shadow outside the silhouette
Constraints: the single record only, no sleeve, turntable, props, text, logos, watermark, vector illustration, or CGI-plastic look
```

## Worn sleeve paper generation prompt

```text
Use case: product-mockup
Asset type: full-bleed square paper texture for a website's vintage record sleeve
Primary request: a straight-on high-resolution scan of a blank, gently worn 1970s record jacket printed in deep oxblood burgundy (#6c0e1c)
Composition: the entire image is the flat printed cardboard surface; square crop; no surrounding background, object silhouette, or perspective
Materials: visibly tactile uncoated paper fibers and fine mottled print grain, slightly uneven faded red ink, naturally rubbed edges revealing small warm cream flecks, a few delicate short scuffs near the corners
Wear: clear at website scale yet tasteful, strongest along the outermost 2% and corners, tiny scattered ink loss; central area remains predominantly rich dark red with visible paper tooth
Lighting: evenly lit archival scan, no glossy shine or dramatic lighting
Constraints: no words, letters, typography, logos, graphics, rings, circles, record, stains, tears, folds, watermark, or large scratches; no tan background; preserve the dark red and cream palette
```
