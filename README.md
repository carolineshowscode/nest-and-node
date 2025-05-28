# 🛍️ Nest & Node — Homegoods E-commerce Application

A feature-flag-enabled, full-stack demo e-commerce application built with:

- **Next.js App Router + TypeScript**
- **Neon (PostgreSQL)**
- **Optimizely (Feature Flags)**
- **Deployed via Vercel**

This project showcases a lifestyle e-commerce store for homegoods, with Optimizely-powered experimentation and full frontend/backend integration.

---

## 📁 Project Structure

```
.
├── public/
│   └── images/               # Static product images (.jpeg)
├── src/
│   ├── app/                  # App Router structure
│   │   ├── layout.tsx        # Layout with <Header /> and <Footer />
│   │   ├── page.tsx          # Home page
│   │   ├── cart/             # Cart route
│   │   └── api/
│   │       ├── products/     # Serverless route to fetch products
│   │       └── feature-flags/route.ts
│   ├── components/
│   │   ├── Header.tsx        # Shared top navigation
│   │   ├── Footer.tsx        # Shared footer
│   │   └── ProductCard.tsx   # UI card for displaying product info
│   └── styles/
│       ├── Header.module.scss
│       ├── Footer.module.scss
│       ├── Home.module.scss
│       ├── ProductCard.module.scss
│       └── globals.css
├── .env.local                # Environment variables
├── package.json
├── tsconfig.json
├── README.md
```

---

## 🧪 Feature Flags (via Optimizely)

This app supports backend feature flags such as:

- 'rebrand' - delivers new styling to mobile users only

---

## 🛠️ Setup Instructions

### 1. Clone the project

```bash
git clone https://github.com/your-username/nest-and-node.git
cd nest-and-node
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add `.env.local`

```env
DATABASE_URL=your_neon_connection_string
OPTIMIZELY_SDK_KEY=your_optimizely_sdk_key
```

### 4. Set up Neon DB

In the Neon dashboard or SQL editor:

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT
);
```

### 5. Add demo products

```sql
INSERT INTO products (name, price, image_url, description) VALUES
('Handcrafted Ceramic Mug', 18.00, '/images/mug.jpeg', 'Warm-toned ceramic mug perfect for cozy mornings.'),
('Woven Cotton Throw Blanket', 64.00, '/images/throw.jpeg', 'Soft, oversized throw with hand-tied fringe.'),
('Glass Taper Candle Holder', 22.00, '/images/candleholder.jpeg', 'Elegant candle holder with subtle vintage texture.'),
('Rattan Storage Basket', 45.00, '/images/basket.jpeg', 'Natural woven basket ideal for chic storage.'),
('Brass Wall Mirror', 129.00, '/images/mirror.jpeg', 'Minimalist round mirror framed in warm brass.');
```

### 6. Run the app

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📦 Deployment

- **Frontend & Backend**: Deployed together via [Vercel](https://vercel.com/)
- **Database**: [Neon.tech](https://neon.tech/) — serverless PostgreSQL

---
