# Ecommerce - GadgetHub

## Introduction

GadgetHub is an Ecommerce store built using the MERN Stack (MongoDB, Express, React.js, Node.js). It features user management and allows users to buy products using Cash on Delivery (COD) or online methods like Stripe.

## Installation and Setup

1. Clone the repository: `git clone https://github.com/yourusername/yourrepository.git`
2. Navigate into the directory: `cd yourrepository`
3. Install the dependencies: `npm install`
4. Start the MongoDB service: `service mongod start` (This may vary depending on your operating system)
5. Create a `.env` file in the root directory and fill it with necessary environment variables (e.g., `DB_CONNECTION_STRING`, `JWT_SECRET`).
6. Start the server: `npm start`


## Test User Credentials

For testing purposes, you can use the following user credentials:

- Username: testuser@gmail.com
- Password: 12345

## Demo Payment Card Details

For testing the payment process, you can use the following demo card details:

- Card Number: 4242 4242 4242 4242
- Expiry Date: 04/24
- CVV: 242
- ZIP: 42424

## Features

**User Management**: Enables user registration, login, and profile management.

**JWT Authentication**: Provides secure, stateless authentication using JSON Web Tokens.

**Secure Routes**: Ensures only authenticated users can access certain application areas.

**Admin Dashboard**: Allows administrators to perform CRUD operations on products, orders, categories, and users.

**Pagination**: Facilitates navigation through the product,users,categories,orders catalog page by page.

**Product Catalog**: Displays all available products.

**Product Details**: Provides detailed information about a specific product when selected.

**Shopping Cart**: Allows users to add products to a cart and modify its contents before checkout.

**Checkout Process**: Guides users through the order placement process.

**Payment**: Supports Cash on Delivery (COD) and Stripe for online payments.

## Usage

1. Open your browser and navigate to `http://localhost:3000` (or whatever port you've set your server to run on).
2. Register a new user account or log in to an existing one.
3. Browse the product catalog and add items to your shopping cart.
4. Proceed to checkout and place your order.

## Contributing

We welcome contributions from everyone. Here are some ways you can contribute:

1. Report bugs: If you find a bug, please create an issue in our GitHub repository.
2. Suggest enhancements: If you have an idea for a new feature or an improvement, please create an issue to discuss it.
3. Submit pull requests: If you've fixed a bug or implemented a new feature, you can submit a pull request. Please make sure your code follows our coding standards and include tests if applicable.

Before contributing, please make sure to read and follow our Code of Conduct.

Thank you for your interest in contributing to GadgetHub !
!

