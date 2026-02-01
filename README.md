# Frontend Task

A small product catalog app built with Next.js. You get a homepage with a grid of products and a detail page for each one. Data comes from the [Fake Store API](https://fakestoreapi.com/), so no backend needed.

Tech used: Next.js 16, React 19, TypeScript, Tailwind CSS, and a bit of MUI and Lucide for icons. Errors show up as toast messages so the app feels responsive when something goes wrong.

---

## Getting started

You’ll need Node.js on your machine (v18 or newer is fine).

1. **Clone the repo** (or download it).

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Then open [http://localhost:3000](http://localhost:3000). You should see the product list.

Other useful commands:
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — run ESLint

---

## Project structure

Everything lives under `src/`. Here’s what’s where:

**`src/app/`** — Next.js App Router (routes and layouts)

- `layout.tsx` — Root layout: navbar, main content, footer, and the toast container.
- `page.tsx` — Homepage: breadcrumbs + product grid.
- `loading.tsx` — Global loading UI (skeleton).
- `not-found.tsx` — 404 page.
- `product/[id]/` — Dynamic product detail route.
  - `page.tsx` — Renders the product detail view and passes the `id` from the URL.
  - `loading.tsx` — Loading state for the product page.

**`src/components/`** — All React components

- **`layout/`** — Shell of the app: `navbar.tsx`, `footer.tsx`.
- **`shared/`** — Reusable bits: `breadcrumbs`, `button`, `error` (toast helpers + Toaster), `loader`, `skeletonLoader`.
- **`ui/products/`** — Product list: `productGrid.tsx` (fetches and lists products), `productCard.tsx` (single card with image, title, price, favorite heart).
- **`ui/productDetails/`** — Product page: `productDetailView.tsx` (fetches one product, handles loading/error), `prouductContainer.tsx` (layout and content for the detail view).

**`src/lib/`**

- `api.ts` — Calls to Fake Store API: `getProducts()` and `getProduct(id)` using Axios.

**`src/types/`**

- `product.ts` — TypeScript type for a product (id, title, price, image, etc.).

**`src/styles/`**

- `globals.css` — Global styles and Tailwind.

**`public/`** (at project root)

- `icons/` — SVG icons used in the footer (e.g. social links).

That’s pretty much it. Routes are in `app/`, UI and layout in `components/`, and data fetching in `lib/api.ts`. If you add new pages, follow the same pattern: route in `app/`, components in `components/`, and reuse the shared error toasts when something fails.
