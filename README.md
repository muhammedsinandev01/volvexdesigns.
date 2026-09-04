# Volvex Designs

Marketing site for Volvex Designs — built with Next.js, Tailwind and framer-motion.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Environment variables are read from `.env.local` **at server start**, so restart
the dev server after editing that file or the change won't take effect.

## Project brief form

The contact form posts to `src/app/api/contact/route.ts`, which emails the brief
over SMTP. The route runs on the Node runtime (nodemailer can't run on edge) and
does its own server-side validation — the client checks are for UX only.

### Configuration

Copy `.env.example` to `.env.local` and fill it in:

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` (implicit TLS; the route sets `secure` from this) |
| `SMTP_USER` | The sending Gmail account |
| `SMTP_PASSWORD` | Gmail **app password**, not the account password |
| `CONTACT_TO_EMAIL` | Inbox that receives briefs. Defaults to `SMTP_USER`. |

Create an app password at <https://myaccount.google.com/apppasswords> (requires
2-Step Verification). Gmail displays it in four-character groups — spaces are
fine, the route strips whitespace before authenticating.

`.env.local` is gitignored and **does not ship to your host.** Set the same five
variables in your hosting dashboard (on Vercel: Project → Settings →
Environment Variables) and then **redeploy** — environment changes don't apply
to existing deployments. Missing variables produce
`Email is not configured on the server.` from the API route.

### Finding briefs in Gmail

`CONTACT_TO_EMAIL` is currently the same address as `SMTP_USER`. Mail is
delivered normally, but because the sender and recipient are the same account,
Gmail threads each brief with its own copy in **Sent** and shows the sender as
**"me"** — so briefs look like something you sent yourself and are easy to scroll
past in the inbox.

Set up a filter so they stand out:

1. In Gmail, click **Show search options** (the sliders icon in the search box).
2. In **Subject**, enter `New project brief`.
3. Click **Create filter**.
4. Tick:
   - **Apply the label** → create one called `Project Briefs`
   - **Mark as important**
   - **Never send it to Spam**
5. Click **Create filter**.

Optionally tick **Also apply filter to matching conversations** to label briefs
that already arrived.

The subject line is always `New project brief — {name}`, so the filter catches
every submission. Pointing `CONTACT_TO_EMAIL` at a different mailbox avoids the
"me" threading altogether, if you'd rather do that than filter.

### Replying

Briefs are sent from the site's own account with the enquirer on `Reply-To`, so
hitting reply reaches the person who filled in the form. Gmail rewrites `From`
to the authenticated account, which is why it can't be the enquirer's address.

### Rate limiting

The route keeps submission counts in an in-process `Map` (5 per 10 minutes per
IP). That resets on every cold start, so on serverless hosts it's much weaker
than it looks — move it to Redis/Upstash if the form attracts spam.

## Content

Most copy and data lives in `src/data/`:

| File | Contents |
| --- | --- |
| `site.ts` | Site name, URL, nav items, contact details, socials |
| `content.ts` | Value props, services, process, stats, team, FAQs |
| `projects.ts` | Portfolio entries |
| `services.ts` | Service detail cards |

Nav order in `NAV_ITEMS` should match the section order in `src/app/page.tsx` —
the scroll-spy highlights by position, so a mismatch reads as a bug.

### Images

- Team photos: drop into `public/images/team/`, then set the `photo` field for
  that member in `content.ts`. Cards crop to 4:5, so 800×1000px or larger works
  best. Until then the card shows a portrait placeholder.
- Project screenshots: `public/images/projects/`, set `image` in `projects.ts`.

When replacing an image, **use a new filename**. Browsers and CDNs cache the
optimized derivative, and reusing a filename can keep serving the old picture
long after the file changed.

## Deployment

Build locally with `npm run build` before deploying. Remember the environment
variables above — the site builds fine without them, and the contact form fails
at runtime instead.
