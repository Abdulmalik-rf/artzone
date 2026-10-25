"""Subset the IBM Plex Sans Arabic "arabic" files to the characters the site uses.

The Fontsource files cover Arabic Supplement / Extended-A, presentation forms
and Arabic math too (~1,300 glyphs, ~44 KB per weight). The site's text needs
only the core Arabic block plus the VEH forms used in «اليوﭬي», so these
subsets are ~30% smaller. All OpenType layout features are kept, so letter
joining, ligatures and diacritics are unchanged.

Output: src/fonts/ibm-plex-sans-arabic-arabic-<weight>-normal.woff2
(referenced by src/styles/fonts.css with the same unicode-range as below).

Re-run after upgrading @fontsource/ibm-plex-sans-arabic, or if new copy needs
characters outside UNICODES:
    pip install fonttools brotli
    python scripts/subset-fonts.py
"""

from pathlib import Path

from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'node_modules/@fontsource/ibm-plex-sans-arabic/files'
OUT = ROOT / 'src/fonts'

# keep in sync with the unicode-range in src/styles/fonts.css
UNICODES = 'U+0600-06FF,U+200C-200F,U+2010-2011,U+FB6A-FB6D'

OUT.mkdir(exist_ok=True)
for weight in (400, 500, 600, 700):
    name = f'ibm-plex-sans-arabic-arabic-{weight}-normal.woff2'
    subset.main([
        str(SRC / name),
        f'--unicodes={UNICODES}',
        '--layout-features=*',
        '--flavor=woff2',
        f'--output-file={OUT / name}',
    ])
    before = (SRC / name).stat().st_size
    after = (OUT / name).stat().st_size
    print(f'{name}: {before / 1024:.1f} KB -> {after / 1024:.1f} KB')
