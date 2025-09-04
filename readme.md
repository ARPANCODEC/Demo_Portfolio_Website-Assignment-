# Portfolio (Built from a Template)

**Base Template:** Bootstrap 5 Starter Template (via CDN)  
**Live Link:** <ADD_YOUR_DEPLOYED_URL_HERE>  
**Pages:** `index.html`, `work.html`, `contact.html`  
**Custom Files:** `assets/css/custom.css`, `assets/js/main.js`

## Evidence for Rubric

### ✅ W3 Validator Compliance
- All pages validate on <https://validator.w3.org/>.  
- Any warnings relate to the Google Maps `<iframe>` (third-party).  
- **Attach screenshots** of each page’s validation result to submission.

### ✅ Responsive
- Mobile → Tablet → Desktop → **Wide (third layout)**.  
- `work.html` switches from a card grid to a **table view** when `min-width: 1200px`.  
- **Attach screenshots** across viewports or include a short demo video.

### ✅ Well-Styled
- Custom design system layered over Bootstrap (see `assets/css/custom.css`).  
- Dark mode via `data-bs-theme`, custom buttons, shadows, spacing, and captions.  
- Focusable skip link for accessibility.

## Template Changes & Accessibility Notes
- **Navigation:** Converted Bootstrap starter navbar; added skip link and ARIA labels.  
- **Carousel:** Disabled auto-start, added manual play/pause with `aria-pressed`, descriptive alt text.  
- **Color & Theme:** Introduced CSS variables and Bootstrap `data-bs-theme` for dark mode.  
- **Forms:** Bootstrap validation + ARIA live region, character counter, clear error messages.  
- **Images:** All project images include meaningful `alt` text.  
- **Third-party Embed:** Google Maps `iframe` uses `title`, `loading="lazy"`, and fallback link.

## The Four (actually 5) “Extras”
1. **Dark Mode Toggle** with persistence (`localStorage`) and `data-bs-theme`.  
2. **Accessible Carousel** (manual by default; user-controlled autoplay).  
3. **Sticky Footer** using `min-vh-100` flex layout.  
4. **Third Layout** (wide-screen table view) on `work.html`.  
5. **Accessible Form Enhancements**: client-side validation + char counter + live status.

## How to Run
1. Open `index.html` in a browser (no build step required).
2. Validate each page with W3C validator (attach screenshots).
3. Deploy to GitHub Pages/Netlify/Vercel and paste the live link above.
