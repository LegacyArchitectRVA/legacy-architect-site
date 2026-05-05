# Upload Steps

I was blocked from writing directly to GitHub by the GitHub connector permissions, so this pack contains the files to add manually.

## 1. Add Pages CMS config

Upload `.pages.yml` to the root of the `LegacyArchitectRVA/legacy-architect-site` repository.

After it is committed, go to:

https://pagescms.org

Connect GitHub, choose the repository, and the editor will read `.pages.yml`.

## 2. Add design direction

Upload `DESIGN_DIRECTION.md` to the repository root. This preserves the visual standard for the website.

## 3. Optional CSS override

Upload `futuristic-not-scifi.css` to `src/css/futuristic-not-scifi.css` or `css/futuristic-not-scifi.css`, depending on which folder your active site uses.

Then add this line after the existing stylesheet link in the HTML head:

<link rel="stylesheet" href="/css/futuristic-not-scifi.css">

## 4. Cloudflare build settings

For the static builder version, Cloudflare Pages should generally use:

Build command: npm run build
Output directory: dist

If using the single-page HTML version instead:

Build command: leave blank
Output directory: /

## 5. Editing going forward

Use Pages CMS to edit:
- text
- SEO title and meta description
- FAQs
- pricing
- images

Keep Carrd live until the Cloudflare preview looks correct.
