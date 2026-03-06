# NextStore – Next.js E-commerce Application

NextStore is a simple e-commerce web application built with **Next.js (App Router)** and **NextAuth.js authentication**.  
The project demonstrates **public pages, protected dashboard pages, authentication, product management, and responsive UI**.

This project was built as part of a **Next.js development task** focusing on UI, protected routes, and authentication.

---

# Live Demo

Vercel Deployment:  
https://your-vercel-link.vercel.app


---

# Admin Login

Admin credentials for testing:

Email:

dip@gmail.com


Password:

dip@gmail.com


Admin can:

- Add products
- Manage products
- Delete products

---

# Features

## Public Pages

### Landing Page
- Sticky responsive Navbar
- Hero section
- Product showcase
- Clean UI design
- Footer

### Product List Page
- Search products
- Pagination
- Responsive product grid
- Product cards with:
  - Image
  - Title
  - Short description
  - Price
  - View details button

### Product Details Page
- Large product image
- Product title
- Full description
- Price information
- Add to cart button

---

# Authentication

Authentication implemented using **NextAuth.js**

Login methods:

- Google Login
- Email & Password Login
- User registration

After login users can access protected pages.

---

# Protected Pages

## Dashboard

Different dashboards for **Admin and User**.

### User Dashboard
- View cart
- View profile
- Logout

### Admin Dashboard
- Add Product
- Manage Products
- View profile
- Logout

---

# Add Product Page (Protected)

Only accessible to admin.

Form fields:

- Title
- Short Description
- Full Description
- Price
- Category
- Image URL

Product is saved to localStorage and displayed on product list.

---

# Manage Products Page (Protected)

Admin can:

- View all products
- Delete products

Products are displayed in a clean responsive layout.

---

# Cart System

Users can:

- Add products to cart
- View cart items
- See total price
- Place order

Order confirmation message is displayed.

---

# Technologies Used

Frontend Framework

- Next.js (App Router)

Authentication

- NextAuth.js

UI & Styling

- Tailwind CSS

Animations

- Framer Motion
- AOS

Icons

- React Icons

Notifications

- React Hot Toast

Image Upload

- ImgBB API

Deployment

- Vercel

---

# Project Structure


src
├ app
│ ├ login
│ ├ register
│ ├ products
│ ├ dashboard
│ │ ├ add-product
│ │ ├ manage-products
│ │ └ cart
│ └ layout.js
│
├ components
│ ├ Navbar
│ ├ Footer
│ └ Providers
│
└ data
└ products.json


---

# Installation & Setup

Clone the repository


git clone https://github.com/your-username/next-ecommerce.git


Go to project folder


cd next-ecommerce


Install dependencies


npm install


Run development server


npm run dev


Open browser


http://localhost:3000


---

# Environment Variables

If using Google login, create `.env.local` file.


GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000


---

# UI Features

- Responsive design
- Hover animations
- Smooth transitions
- Clean layout
- Consistent color palette
- Mobile friendly

---

# Future Improvements

- Database integration (MongoDB)
- Product ratings
- Payment gateway
- Order history
- Admin analytics

---

# Author

Dipta Acharjee

BSc in CSE  
Daffodil International University

---

# License

This project is created for learning purposes.