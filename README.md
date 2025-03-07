# 📖 AlgoReads – Your Gateway to CS & Programming Knowledge 🚀

Welcome to **AlgoReads**, the (fake) online bookstore for (not really) purchasing top-tier computer science classes and literature. Whether you're an aspiring coder or a seasoned dev brushing up on algorithms, AlgoReads has _absolutely nothing_ to sell you—but it sure looks like it does!

This project is my playground for learning and showcasing my **React** skills, complete with user authentication, a dashboard for past orders, and even a snazzy light/dark mode.

## 🎬 Features

✅ **Hero Page** – Because first impressions matter.  
✅ **Products Page** – Where you _think_ you can buy books.  
✅ **Product Details Page** – Dig into that next piece of literature.
✅ **Registration & Login** – Get that real-world app feel (Guest login permitted).  
✅ **Dashboard** – Flex on your past "purchases."  
✅ **Dark Mode** – Because night owls code best.  
✅ **Mock Backend** – Powered by JSON Server, so no real payments, sorry!

## 🛠️ Getting Started

Clone the repo and install dependencies:

```sh
git clone https://github.com/yourusername/algoreads.git
cd algoreads
npm install
```

## 🔥 Run the App

Fire up the project with:

```sh
npm run algoReads
```

This starts both the React app (via Vite) and the mock JSON server on port 8000.

Or, if you're old-school:

```sh
npm run dev      # Start the frontend
npm run json-server  # Start the mock backend
```

## 🏗️ Build for Production

```sh
npm run build

```

## 🔍 Lint Your Code

```sh
npm run lint

```

## 🛒 Mock Backend Details

Using `json-server-auth`, the fake API supports:

- **/products** – Your _not-for-sale_ books
- **/users** – Sign up and log in
- **/orders** – Fake order history
