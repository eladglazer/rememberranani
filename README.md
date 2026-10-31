# Remember Ranani

The memorial site for Ranani Niedzielski Glazer (1999–2023), served at [rememberranani.com](https://rememberranani.com).

A static [Astro](https://astro.build) site in English (`/`), Portuguese (`/pt/`) and Hebrew (`/he/`). Candles and the Book of Memories are stored in Firebase Firestore. Every push to `main` is checked and deployed to GitHub Pages by [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

## Everyday changes

You can make each of these directly on github.com: edit the file, choose "Create a new branch and start a pull request", wait for the green check, then merge. The site updates about two minutes later.

- **Story text and captions:** `src/i18n/en.json`, `pt.json`, `he.json`. Keep the same keys in all three files.
- **Photos:** replace a file in `src/assets/photos/` with the same name. The build resizes it automatically.
- **Design rules:** [DESIGN.md](DESIGN.md). The audience and principles are in [PRODUCT.md](PRODUCT.md).

## Approving messages

New messages arrive hidden. To publish one:

1. Open the [Firebase console](https://console.firebase.google.com/project/ranani-memorial/firestore) → Firestore → `depoiments`.
2. Open the message and change `status` from `pending` to `approved`.

To remove a message, delete its document there. Nobody can edit or delete messages from the website itself.

## Working locally

```bash
npm install
npm run dev          # http://localhost:4321, uses the real database
npm run build        # builds the site into dist/
npm run check        # type and template checks
npm run test:rules   # Firestore rules tests (needs Java 21)
```

To try the candle and the message form without touching real data, start the emulator with `npx firebase emulators:start --only firestore --project ranani-memorial`. Then run the dev server with `PUBLIC_FIRESTORE_EMULATOR=1`.

## Security rules

- `firestore.rules` holds the final rules: only approved messages are readable, and the candle count can only go up by one.
- `firestore.transition.rules` is live now, while the old Hostinger site is still serving. It keeps reads open for the old site.

Both are tested by `npm run test:rules`. To publish a rules file, paste it into Firebase console → Firestore → Rules → Publish.

## Going live (one time)

1. Merge the redesign into `main` and wait for the deploy job to finish.
2. In GitHub → Settings → Pages, set the custom domain to `rememberranani.com`.
3. In Hostinger DNS for rememberranani.com:
   - Set `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153`.
   - Set `AAAA` records to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`.
   - Point `www` as a `CNAME` to `eladglazer.github.io`.
4. Once GitHub shows the domain as verified, tick "Enforce HTTPS".
5. Publish `firestore.rules` in the Firebase console, then delete `firestore.transition.rules` and `firebase.transition.json`.

To roll back, restore the old `A` record (`82.25.96.140`) in Hostinger. Keep the domain on auto-renew.
