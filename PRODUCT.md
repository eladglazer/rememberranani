# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output, no front-end framework), deployed to GitHub Pages from the public repo `eladglazer/rememberranani` by GitHub Actions. Firebase Firestore stays as the store for candles and the Book of Memories. Confirmed by the user, 2026-10-31.

## Users

Primary: Ranani's family and friends, in Israel and Brazil, returning to remember him. They come on dates that matter (his yahrzeit, October 7th, his birthday) or when they miss him; they read his story, light a candle, leave or read messages, and share the link. Most arrive on a phone from a WhatsApp or Instagram link.

Secondary: people who never met him, arriving through October 7th remembrance or a shared link. They are welcome, and the story must make sense to them, but when needs conflict, family and friends come first.

Maintainer: Elad, Ranani's brother. He updates content and approves messages himself.

## Product Purpose

A permanent memorial for Ranani Niedzielski Glazer (born October 1999, Porto Alegre; murdered at the Nova festival near Kibbutz Re'im on October 7th, 2023). It keeps his story, his photos and the words of the people who loved him in one place that stays online and unchanged in spirit for decades.

Success: family and friends can always find it, it works on any phone, it feels worthy of him, and it needs almost no upkeep to stay that way.

## Positioning

This is one family's memorial for one person, told in their words and in the three languages of his life (Portuguese, Hebrew, English). It is not a news site, a campaign or a collective October 7th archive.

## Operating Context

- Visitors light a candle (one per browser) and the shared count rises; 108 candles were lit as of 2026-10-31.
- Visitors leave messages in the Book of Memories. Each message stays hidden until Elad approves it in the Firebase console. Nothing visitor-written appears unreviewed.
- Language follows the visitor's browser (Hebrew, Portuguese, otherwise English), and visitors can always switch. Hebrew pages are right-to-left.
- Remembrance dates shown: the yahrzeit on 22 Tishrei (the Hebrew date of October 7th, 2023, Simchat Torah 5784) and October 7th itself. The Hebrew date is recalculated every year.
- Content changes go through the GitHub repo: edit, pull request, CI checks, merge, automatic deploy.

## Capabilities and Constraints

- Existing: life story in sections (Childhood, Military, Talents, October 7th, farewell), quotes from his father and his brother Reuven, candle counter, messages, background song, three languages.
- Planned (from the 2026-10-31 plan): life timeline, photo gallery, moderated Book of Memories, remembrance dates.
- The song plays only when a visitor starts it. Elad chose to keep it.
- Visitor-written text is always rendered as plain text, never HTML.
- The existing 108 candles and the existing messages carry over unchanged.
- The domain rememberranani.com is registered at Hostinger and must be kept renewed. Hosting there is paid until 2029-09-13 and remains the fallback until GitHub Pages is verified.
- Open, not yet decided: his exact birthday (only "October 1999" is recorded); exact years for the timeline steps (the story gives ages, not years); which additional photos go in the gallery.

## Brand Commitments

- Name: "Remember Ranani"; hashtag #RememberRanani.
- Line: "We'll dance again." Closing words: "May his memory be a blessing — forever dancing under the stars."
- Voice: warm, plain and dignified. His story is told in the family's own words, and future copy must not dramatise, editorialise or invent.
- Family names as written: parents Tatiana and David Ronen; brothers Reuven, Elad, Aharon, Avishai, Aryeh and Baruch. He was "Nani" to his father.

## Evidence on Hand

- Story text in English, Portuguese and Hebrew: `locales/{en,pt,he}/translation.json`.
- Photos: `images/baby.jpg`, `gremio.jpg`, `army.jpg`, `drums.jpg`, `reim.jpg`, `goodbye.jpg`, `hero.jpg`, `hero.png`.
- Quotes from his father (David Ronen Glazer) and his brother Reuven, which are also the two existing messages in Firestore.
- Song: `music/noiact.mp3`.
- Do not fabricate quotes, messages, dates, photos, captions or biographical details. Anything not in these files comes from the family.

## Product Principles

1. Family first: when a choice serves strangers at the expense of the people who knew him, choose the family.
2. Permanence over novelty: prefer what will still work untouched in twenty years. Fewer dependencies, no accounts or tokens that can expire, and content kept in plain files in git.
3. Nothing unreviewed: no visitor-written words reach the page without Elad's approval.
4. Every phone, every language: the site works fully on a phone and reads correctly in Hebrew, Portuguese and English.
5. His story in the family's words: the site presents what the family wrote; it does not add to it.

## Accessibility & Inclusion

- Target WCAG 2.2 AA (proposed in the 2026-10-31 plan; not separately confirmed).
- Full right-to-left support for Hebrew.
- Keyboard and screen-reader access for the candle, messages, gallery and player.
- Visitors span ages from grandparents to young friends, on slow mobile connections in Brazil and Israel. Pages must stay light and readable at large text sizes.
- Respect reduced-motion preferences.
