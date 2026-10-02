# Nexora — Student & Career Counselling Website

Premium, modern, launch-ready single-page website for a student and career counselling practice.

## Brand
- **Name:** Nexora
- **Tagline:** Navigate Your Next.
- **Positioning:** Student Counselling · Career Guidance · Education Planning · Future Pathways

## Files
- `index.html` — Full page structure and content
- `styles.css` — Design system and responsive styles
- `script.js` — Interactions (menu, forms, scroll)

## Quick customisation checklist

### 1. Counsellor profile
Search for `[Counsellor Name]` and the credential placeholders in the “Meet Your Counsellor” section. Replace with real name, photo, qualifications, experience and a short biography.

### 2. Contact details
- Replace every `971XXXXXXXXX` with the real WhatsApp / phone number (in HTML and any future links).
- Update the location placeholder in the contact aside.

### 3. Images
- Hero and counsellor images use Unsplash placeholders. Replace the `src` URLs with your own professional photos.
- Remove the “Replace with professional photo” overlay once a real image is in place.

### 4. Testimonials
The three cards are clearly marked as placeholders. Replace only with genuine client feedback.

### 5. Forms
The contact and lead-magnet forms currently show a success alert and log to the console. Connect them to:
- Formspree, Basin, Netlify Forms, or your CRM
- Or a simple serverless function / email service

### 6. Lead magnet
Create the PDF “Parent’s Guide to Choosing the Right Career Path for Your Child” and wire the download form to deliver it (email sequence or direct link).

### 7. SEO & analytics
- Page title and meta description are already optimised for Dubai / UAE student & career counselling searches.
- Add Google Analytics / Search Console when ready.
- Consider a dedicated domain and hosting (Netlify, Vercel, or traditional hosting).

### 8. Legal pages
Link Privacy Policy, Terms & Conditions and Disclaimer to real pages (or expand the current anchors into full content).

## Design system
- **Navy** `#1a365d` — trust
- **Teal** `#4fd1c5` / `#319795` — calm accent
- **Warm neutrals** — soft backgrounds
- Typography: Playfair Display (headings) + Inter (body)
- Fully responsive, mobile-first

## Future scalability
The structure is ready for:
- Online booking (Calendly / custom)
- Payment gateway
- Blog / CMS (add a `/blog` route or headless CMS)
- Online assessments
- Newsletter
- WhatsApp Business API
- Google Analytics & Search Console

## Local preview
Open `index.html` in a browser, or run a simple local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

---

Built to feel like a trusted education consultancy and student counselling practice — professional, warm and student-centred.
