---
name: Remember Ranani
description: A memorial set as a star atlas, dusk chart-blue plates framed into cool chalk paper.
colors:
  candle-amber: "#E3B062"
  ochre-ink: "#7A4E0E"
  dusk-plate: "#22314F"
  dusk-plate-deep: "#1B2842"
  chalk: "#F3F1EA"
  fog: "#A7B3CC"
  chalk-paper: "#F1F3F4"
  paper-mat: "#E4E8EB"
  night-ink: "#19213A"
  slate-ink: "#4A5470"
  hairline: "#C7CAD3"
  strong-rule: "#737B90"
  field-white: "#FFFFFF"
typography:
  display:
    fontFamily: "'Source Serif 4 Variable', 'Frank Ruhl Libre Variable', Georgia, serif"
    fontSize: "clamp(3.75rem, 2rem + 7.5vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Source Serif 4 Variable', 'Frank Ruhl Libre Variable', Georgia, serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.6vw, 2.625rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "'Source Serif 4 Variable', 'Frank Ruhl Libre Variable', Georgia, serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "'Source Serif 4 Variable', 'Frank Ruhl Libre Variable', Georgia, serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Assistant Variable', system-ui, sans-serif"
    fontSize: "0.8125rem"
    letterSpacing: "0.06em"
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  numeral:
    fontFamily: "'Assistant Variable', system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.6vw, 2.625rem)"
    fontWeight: 300
    lineHeight: 1
    fontFeature: "\"tnum\" 1, \"lnum\" 1"
  control:
    fontFamily: "'Assistant Variable', system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)"
rounded:
  none: "0px"
  hairline: "2px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
  gutter: "clamp(16px, 4vw, 48px)"
components:
  button-candle:
    backgroundColor: "transparent"
    textColor: "{colors.candle-amber}"
    typography: "{typography.control}"
    rounded: "{rounded.hairline}"
    padding: "12px 24px"
    height: "48px"
  button-candle-hover:
    backgroundColor: "{colors.candle-amber}"
    textColor: "{colors.dusk-plate}"
  button-candle-lit:
    backgroundColor: "transparent"
    textColor: "{colors.fog}"
  button-ink:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.chalk-paper}"
    typography: "{typography.control}"
    rounded: "{rounded.hairline}"
    padding: "12px 32px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.dusk-plate}"
    textColor: "{colors.chalk-paper}"
  button-player:
    backgroundColor: "{colors.dusk-plate}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.hairline}"
    padding: "8px 16px"
    height: "44px"
  input-field:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.night-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.hairline}"
    padding: "12px 16px"
  plate-paper:
    backgroundColor: "{colors.paper-mat}"
    rounded: "{rounded.none}"
    padding: "8px"
  plate-sky:
    backgroundColor: "{colors.dusk-plate-deep}"
    rounded: "{rounded.none}"
    padding: "8px"
---

# Design System: Remember Ranani

## Overview

**Creative North Star: "The Dusk Star Atlas"**

The page is a star atlas of the sky he danced under. Cool chalk paper carries the reading; framed dusk chart-blue plates carry the sky. The sky never floods the page: it appears only as bounded plates (the opening plate and the candle chart), each set in from its edge by a hairline frame with diamond terminals, the way a printed atlas mounts its charts. Nothing is night-black, nothing is heavy. The family asked for a memorial that is not dark, and the system holds that line through a light paper ground and a dusk (not midnight) blue.

Two voices share the type. A variable serif tells the story and carries his name in a large italic; a clean sans in tabular, lining figures sets everything that behaves like a coordinate: dates, counts, captions, language links, attributions. Stars are chalk-white on a fixed five-step magnitude ramp, placed deterministically so every visitor sees the same sky and a new candle never moves the others. Candle amber is the only warm color, and it belongs to the live candle.

Motion is almost absent. Images fade in once loaded; in-page links scroll smoothly; the star birth is the one authored moment. Nothing reveals on scroll.

**Key Characteristics:**
- Light chalk paper ground with framed dusk-blue sky plates; never night-black.
- Hairline frames with two diamond terminals on opposite corners mark every plate.
- Serif for story, tabular sans for coordinates.
- One warm accent (candle amber) reserved for the live candle object.
- Square plates, 2px corners on controls only.
- One authored motion moment: the star birth.
- Three languages, Hebrew right-to-left and never slanted.

## Colors

A cool, low-chroma atlas palette: chalk paper, slate and night inks, dusk chart-blue, and one warm candle accent.

### Primary
- **Candle Amber** (candle-amber): the live candle object and nothing decorative. The candle button's outline, text and hover fill; the amber ring around "your star"; the "your star" legend; the candle error line; the glow inside the star-birth keyframes. Also the keyboard focus ring on sky surfaces, where night ink would vanish.
- **Ochre Ink** (ochre-ink): a deep, legible amber for paper surfaces. Form error text, the invalid-field border and the text caret in the Book of Memories. It is not a second accent; it exists because candle amber fails contrast on paper.

### Secondary
- **Dusk Chart-Blue** (dusk-plate): the sky plate ground, the diamond terminal fill on sky, the music player, the hover fill of the ink button, the browser theme color and form accent color.
- **Deep Dusk** (dusk-plate-deep): the mat inside a sky plate (portrait mount, candle chart field), one step deeper than the plate.

### Neutral
- **Chalk** (chalk): text, stars and field stars on sky plates. Slightly warm white, so stars read as chalk, not as screen light.
- **Fog** (fog): secondary text on sky (dates, chart intro, count label, inactive language links, lit candle state) and the diamond terminal outline on sky.
- **Sky Rule** (`rgb(243 241 234 / 0.2)`): the hairline frame, portrait and chart borders, and declination arcs on sky. Chart grid lines run fainter (`rgb(243 241 234 / 0.12)`, dashed `2 7`).
- **Chalk Paper** (chalk-paper): the page ground.
- **Paper Mat** (paper-mat): the mat inside a paper photo plate and the thank-you panel.
- **Night Ink** (night-ink): body text on paper, focus ring on paper, the ink button.
- **Slate Ink** (slate-ink): captions, attributions, form labels, list metadata, footer.
- **Hairline** (hairline): the paper plate border and every list and table rule on paper.
- **Strong Rule** (strong-rule): the diamond terminal outline on paper, the blockquote rule, input borders, the scrollbar thumb.
- **Field White** (field-white): input and textarea fill only, so writing surfaces lift off the paper.

### Named Rules
**The One Live Object Rule.** Candle amber marks the live candle and its consequences (button, "your star" ring, legend, candle error) and focus on sky. "We'll dance again.", the plate diamonds, headings and links are never amber. If amber appears anywhere a visitor cannot light a candle or is not focused, it is wrong.

**The Dusk, Not Night Rule.** The sky is dusk chart-blue, used only as framed plates set into chalk paper. No full-bleed dark sections beyond a plate, no black, no dark mode.

## Typography

**Display Font:** Source Serif 4 Variable (with Frank Ruhl Libre Variable for Hebrew, then Georgia)
**Body Font:** Source Serif 4 Variable (same stack)
**Label/Mono Font:** Assistant Variable (with system-ui), always tabular and lining figures

**Character:** An optical-size serif speaks in the family's voice; a quiet humanist sans reads like the coordinates printed in an atlas margin. Both cover Hebrew.

### Hierarchy
- **Display** (400 italic, clamp(3.75rem → 6rem), 0.95, -0.02em): his given name in the opening plate. Nothing else.
- **Headline** (400, clamp(1.875rem → 2.625rem), 1.15): section and chapter titles, balanced. Chapter titles tighten to -0.01em; the candle section title is italic.
- **Title** (400, clamp(1.25rem → 1.4375rem)): the family name under his given name, "We'll dance again.", quotations (italic, 1.5), the closing line (italic), the Book form heading (italic).
- **Body** (400, clamp(1.0625rem → 1.1875rem), 1.7): story text, kept to a 65ch measure.
- **Label / Coordinate** (sans, 0.8125rem, 0.06em, tabular lining): dates, captions, counts, attributions, language links, footer. Form labels use the same size at 0.02em.
- **Numeral** (sans 300, headline size, line-height 1, tabular): the candle count, held at 4ch minimum width so it changes in place.

### Named Rules
**The Coordinates Rule.** Anything that is a date, a count, a place-caption or a navigation word is set in the sans with tabular lining figures. Story and names are serif.

**The Upright Hebrew Rule.** Hebrew never slants. Every italic role (his name, "We'll dance again.", quotations, the closing line, candle and form headings, signer names, the thank-you note) is set `font-style: normal` under `:lang(he)`. Coordinate letter-spacing also drops to 0 in Hebrew.

**The Place, Not Year Rule.** Captions state place and topic ("Porto Alegre · Grêmio", "At the drums"), never invented years or ages.

## Layout

A single column in life order. Content containers cap at 1120px (chapters, candle section, footer), 1240px for the opening grid, and 760px for the remembrance list and Book. Side padding is a fluid gutter (16px → 48px), never less than 32px inside a sky plate so text clears the frame hairline set 16px in.

At 900px and up, chapters sit on a 12-column grid with a 24px column gap: landscape plates span 8 columns, alternating start and end; portrait-format plates span 5 and the text sits beside them (6 columns, bottom-aligned), still read after the photo. Text otherwise spans columns 3–10. Below 900px everything stacks full width; the opening portrait leads at the top and reaches out to the frame.

Photos never enlarge past their natural size (a plate's max-width is the image width plus its mat). The rhythm is a 4px-based scale from 4px to 128px; sections are separated by 96–128px, chapters by 128px. The music player is the only fixed element, bottom inline-end, 16px from the edges.

## Elevation & Depth

The system is flat. There are no box shadows anywhere. Depth comes from tonal mounting: a plate's mat (paper mat on paper, deep dusk on sky) sits inside a 1px border, and the sky plate itself is a tonal field set into paper. The only glow in the system is the amber drop-shadow inside the star-birth keyframes, which resolves to nothing.

### Named Rules
**The Mounted, Not Lifted Rule.** Things are framed, never floated. Separate surfaces with a hairline and a mat, not a shadow.

## Shapes

Plates and frames are square (0px). Interactive controls (candle button, ink button, player, inputs) take a barely softened 2px corner, as does the focus ring. The signature geometry is the diamond terminal: a 7px square rotated 45°, filled with the surrounding ground and outlined 1px (fog on sky, strong rule on paper), sitting on two opposite corners of a hairline frame, offset 4px out. Stars are circles on a fixed magnitude ramp (radii 1.2, 1.6, 2.1, 2.8, 3.6 in a 1000×620 chart, weighted 38/28/18/11/5%). Chart grids are dashed hairlines; declination arcs in the opening plate are solid hairline circles.

## Components

### Buttons
- **Shape:** gently squared (2px), 48px minimum height.
- **Candle (on sky):** transparent with an amber 1px outline and amber sans text plus an inline candle SVG; padding 12px 24px; pushed to the inline end of the count row.
- **Hover / Focus / Active:** hover fills amber with dusk-blue text (fine pointers only); focus is the amber ring; active scales to 0.98. Transitions 200ms calm ease for color, 160ms out-ease for scale.
- **Lit state:** a lit candle never toggles off. The button disables, its label changes, the outline drops to sky rule and the text to fog.
- **Ink (on paper):** night ink fill, paper text, padding 12px 32px; hover turns dusk blue; disabled at 60% opacity while sending.
- **Player:** a small dusk-blue rectangle (44px high), chalk text, sky-rule border, inline SVG play and pause glyphs, coordinate label; amber focus ring; active 0.97.

### Inputs / Fields
- **Style:** field white, 1px strong-rule border, 2px corners, padding 12px 16px, line-height 1.5, ochre-ink caret. Labels above in the sans at 0.8125rem, slate ink.
- **Focus:** the global 2px night-ink ring, offset tightened to 1px.
- **Error:** ochre-ink border on `aria-invalid` and ochre-ink error text.

### Navigation
- **Language links:** written words (English, Português, עברית), never flags, in the coordinate voice. Top inline-end of the opening plate in fog, current language chalk and underlined, hover to chalk. Repeated in the footer in slate ink, current in night ink and underlined.

### Plates (signature)
Every photograph, the portrait and the candle chart is a plate: a mat (8px padding) inside a 1px hairline border, with diamond terminals on two opposite corners. Paper plates use paper mat, hairline border and strong-rule diamonds; sky plates use deep dusk, sky-rule border and fog diamonds. The sky section itself carries an inset frame (16px in) with diamonds top-left and bottom-right. Captions sit 12px below in the coordinate voice. Photos fade in over 450ms once loaded; if the script never marks them loaded, a CSS fallback shows them after 3s; reduced motion removes the fade.

### Star Chart (signature)
A deep-dusk chart field with dashed grid hairlines and chalk stars at deterministic slots. Lighting a candle births one star: it scales from 0.4 and glows amber over 1200ms (out-ease), and an amber 1.5px ring contracts from 2.2× into place over 1400ms after a 200ms delay, marking "your star". The count beside it changes in place. Under reduced motion the star simply appears.

### Lists
Remembrance rows and Book entries are ruled lists: a hairline top border, a hairline under each item, 16–32px block padding. Remembrance rows are two equal columns, label in the coordinate voice. Signer names are italic serif; relation and date in slate ink.

## Do's and Don'ts

### Do:
- **Do** mount every plate (photo, portrait, chart) in a 1px hairline frame with an 8px mat and two diamond terminals on opposite corners.
- **Do** keep the sky to framed dusk-blue (#22314F) plates set into chalk paper (#F1F3F4).
- **Do** set dates, counts, captions and navigation in the Assistant sans with tabular lining figures.
- **Do** reset every italic role to `font-style: normal` under `:lang(he)`, and use logical properties (`inset-inline-*`, `padding-inline-*`) so Hebrew mirrors.
- **Do** keep the star birth the only authored animation, and gate it behind `prefers-reduced-motion: no-preference`.
- **Do** write captions as place and topic.
- **Do** keep touch targets at 44–48px minimum.

### Don't:
- **Don't** use candle amber for anything other than the live candle object and focus on sky: not for "We'll dance again.", not for diamonds, headings or links.
- **Don't** use black, night-black sections or a dark full-page ground.
- **Don't** add box shadows; mount surfaces with hairlines and mats instead.
- **Don't** add scroll reveals or entrance animations beyond the image fade-in.
- **Don't** let Hebrew slant, and don't letter-space Hebrew coordinates.
- **Don't** invent years or ages in captions.
- **Don't** use flags for languages.
- **Don't** enlarge a photo past its natural size.
