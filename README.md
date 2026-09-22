# VELORA – Modern Online Fashion E-Commerce Marketplace

**VELORA** is a full-featured, luxury-inspired fashion e-commerce platform covering Men's, Women's, and Kids' apparel, footwear, ethnic wear, and accessories.

## Quick Start

### 1. Run Everything (Backend + Frontend)
```bash
npm run dev:all
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend REST API**: [http://localhost:5000](http://localhost:5000)

### 2. Independent Commands
- `npm run dev`: Starts the Vite React frontend
- `npm run server`: Starts the Express backend server
- `npm run build`: Validates TypeScript and creates the production build

## Features

- **Customer Website/App**:
  - Hero campaign, flash sale countdown timer, category mega-menus
  - Product Listing Page with faceted filters (Category, Brand, Size, Color, Price Range, Discount, Rating, In-Stock)
  - Product Detail Page with image zoom, size selector, **AI Fit Advisor & Size Guide**, live pincode checker, and reviews with photo uploads
  - "Complete the Look" bundle pairings
  - Shopping Cart with coupon discounts (`VELORA10`, `FIRSTFASHION`, `LUXE20`, `FESTIVE30`) and free shipping progress bar
  - Multi-step Checkout with simulated UPI (QR code), Credit Card (with 3D Secure OTP verification), Net Banking, Wallets, and COD
  - Order tracking with visual progress stepper (`Placed → Confirmed → Packed → Shipped → Out for Delivery → Delivered`)
  - Order cancellation, returns/refund requests, and printable tax invoices
  - Customer account dashboard with saved addresses, wishlist, and notification center

- **Admin Master Console (`/admin/dashboard`)**:
  - Live GMV, revenue, total orders, low-stock inventory alerts
  - Full Product Catalog CRUD (add, edit, stock management, delete)
  - Order fulfillment overrides
  - Customer review moderation & refund approvals

- **Seller / Vendor Hub (`/seller/dashboard`)**:
  - Multi-vendor storefront metrics, sales reports, commission calculation (10% marketplace fee)
  - Add new listings, stock health alerts, settlement schedules

- **Role Switcher**:
  - Use the quick switcher bar at the top of the app to seamlessly preview as **Customer**, **Seller**, or **Admin**.
