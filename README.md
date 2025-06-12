## STORE PROJECT

A modern **CRUD web application** built with **Next.js**, **Zustand**, and **Tailwind CSS**, showcasing clean architecture, reusable components, and responsive design.  
It allows users to **create**, **read**, **update** (soon), and **delete** products using a public API.

This project started as a small one, but as it grew I decided that it would be a great idea to further **scale** it into a full stack application. I tried to apply modern best practices while keeping in mind clean code.

✨ Features

- 🔍 View, filter, and paginate products
- ➕ Add new products (with validation)
- ❌ Remove products from the store (in progress)
- 🔎 Search products by title
- ⏭ Pagination system (with "Next"/"First" toggle)
- 🧠 Zustand for state management (with persistence)
- ✅ Form validation using Zod + React Hook Form
- 🎞 Smooth animations using Framer Motion
- 🌐 Deployed on Vercel

## TECH STACK

| Purpose          | Tech                          |
| ---------------- | ----------------------------- |
| Framework        | **Next.js**                   |
| State Management | **Zustand**                   |
| Form Handling    | **React Hook Form** + **Zod** |
| Styling          | **Tailwind CSS**              |
| Animations       | **Framer Motion**             |

## 📁 PROJECT STRUCTURE

```text
📦 project-root
├───public
│       addproductbackground.mp4
│       addproducthero.jpg
│       background.mp4
│       myproductsbackground.mp4
│       placeholder.png
│
└───src
    └───app
        │   favicon.ico
        │   globals.css
        │   layout.tsx
        │   page.tsx
        │
        ├───components
        │   ├───addproduct
        │   │       Form.tsx
        │   │       FormInput.tsx
        │   │       ImagePreview.tsx
        │   │
        │   ├───home
        │   │       Hero.tsx
        │   │
        │   ├───layout
        │   │       Footer.tsx
        │   │       Header.tsx
        │   │
        │   ├───myproducts
        │   │       List.tsx
        │   │       Product.tsx
        │   │
        │   ├───products
        │   │   └───productpage
        │   │           Card.tsx
        │   │           ErrorPage.tsx
        │   │           FilterOptions.tsx
        │   │           index.tsx
        │   │           List.tsx
        │   │           NextPage.tsx
        │   │           Title.tsx
        │   │
        │   ├───sidebar
        │   │       Menu.tsx
        │   │       MenuItem.tsx
        │   │       SidebarContainer.tsx
        │   │
        │   └───ui
        │           Button.tsx
        │           Hero.tsx
        │           Modal.tsx
        │           NotFound.tsx
        │           Search.tsx
        │           ThemeToggle.tsx
        │
        ├───hooks
        │       useFilteredProducts.tsx
        │       useModal.tsx
        │
        ├───products
        │   ├───addproduct
        │   │       page.tsx
        │   │
        │   ├───myproducts
        │   │       page.tsx
        │   │
        │   └───[slug]
        │           page.tsx
        │
        ├───store
        │       useProductStore.ts
        │       useSearchStore.ts
        │
        └───types
                Form.ts
                Page.ts
                Products.ts
```

## HOW TO RUN LOCALLY

```bash
git clone https://github.com/PaulXedLo/store-project.git
cd store-project
npm install
npm run dev
```

## 🗒️ NOTES

- Product data is fetched from https://fakestoreapi.com/products
- Newly added products are POSTed to the same API but kept in local state after
- Pagination resets when reaching end of list
- Product ID is generated on submit using Date.now()

## 🚀 DEPLOYMENT

This project is deployed live on Vercel https://store-project-kappa.vercel.app/
