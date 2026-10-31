---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/he/index.astro","src/pages/pt/index.astro"]
---

## Scope

The memorial home page in three languages (/, /he/, /pt/). Visitor mode: Experience (Ranani leads from the first viewport). Audience, job and constraints: see PRODUCT.md.

## Direction contract

THESIS: His memorial is a star atlas of the sky he danced under. The family's own line, "forever dancing under the stars", becomes the structure: every candle a visitor lights adds one star to his chart. It refuses the category default of a black memorial page with a candle, and of a cream book page.

OWN-WORLD: Dusk chart-blue sky plates (never night-black) set into a cool chalk paper ground. Chalk-white stars on a fixed magnitude ramp; hairline chart rules with diamond terminals framing every plate; candle amber marks the one live object (never red). A serif carries his name in a large italic and the family's story; a clean sans in tabular figures sets dates and counts, like coordinates. Photographs sit as framed atlas plates, with a caption line giving place and age.

STORY: The visitor meets Ranani, reads his life in order from Porto Alegre to Tel Regev, sees his remembrance dates, lights a candle and watches its star join the 108 already there, then reads or leaves words in the Book of Memories.

FIRST VIEWPORT: A full-width dusk-blue sky plate. His rooftop portrait is framed as a chart plate with corner diamonds, about 45% of the width on desktop and the full width at the top on phones. "Ranani" is set in large italic serif, with "Niedzielski Glazer" beneath, the dates October 1999 – 7 October 2023 in tabular sans, and "We'll dance again." Faint declination hairlines and dim stars sit behind. The language links sit top right as words, not flags.

FORM: Star atlas chart (catalog challenger notation-diagram-systems-star-atlas, chosen by the user over the assigned Tricolor Scarf). seed:99421ce9f3dd9824. Signature interaction: lighting the candle makes a new star fade and glow into its fixed slot on his chart, ringed in amber as "your star", while the count changes in place. Raises carried from the declined hand: permanent marks (a lit candle never toggles off); fixed slots (counts and dates change in place); one image owns each chapter; gravity order (one column in life order). Motion grammar: images fade in on load; in-page links scroll smoothly; the star birth is the one authored moment. No scroll reveals.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Years for aliyah and army service (the story gives ages only); captions use ages.
- Additional gallery photos from the family (gallery deferred until they arrive).
- Firestore rules and the migration of existing messages to `status: approved` must happen before launch.
- New interface strings in Hebrew and Portuguese need a family read-through.
