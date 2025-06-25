# Akagera

Akagera is a modern, feature-rich e-commerce platform designed to deliver a seamless and engaging shopping experience. Built with React, TypeScript, Tailwind CSS, and shadcn-ui, Akagera offers robust product management, secure authentication, and a suite of informational and utility pages to enhance user trust and engagement.

## Features

- Home page
- Product listing and detail pages
- Shopping cart and checkout
- User authentication (sign in/sign up)
- Profile management
- Categories and filtering
- Blog & News (updates, tips, product highlights)
- Product comparison
- Returns & refunds policy
- Shipping information
- Gift cards (purchase & redeem)
- Store locator (map-based)
- Careers (open positions)
- Affiliate & referral program
- Newsletter subscription management
- Accessibility information
- 404 Not Found page

## Tech Stack

- [React](https://react.dev/) (with TypeScript)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Supabase](https://supabase.com/) (for authentication and backend integration)

## Project Structure

```
Akagera/
  src/
    components/           # Reusable UI components
    contexts/             # React context providers (Auth, Cart, etc.)
    hooks/                # Custom React hooks
    integrations/         # Third-party integrations (e.g., Supabase)
    lib/                  # Utility functions and data
    pages/                # Main application pages
      About.tsx           # About Akagera
      Accessibility.tsx   # Accessibility features and compliance
      Affiliate.tsx       # Affiliate/referral program info
      Blog.tsx            # Blog/news/updates
      Careers.tsx         # Careers/jobs
      Categories.tsx      # Product categories
      Checkout.tsx        # Checkout process
      Compare.tsx         # Product comparison
      GiftCards.tsx       # Gift cards
      Index.tsx           # Home page
      Newsletter.tsx      # Newsletter management
      NotFound.tsx        # 404 page
      ProductDetail.tsx   # Product details
      Products.tsx        # Product listing
      Profile.tsx         # User profile
      Returns.tsx         # Returns/refunds policy
      ShippingInfo.tsx    # Shipping options and info
      StoreLocator.tsx    # Store locator
    types/                # TypeScript type definitions
    App.tsx               # Main app component
    main.tsx              # App entry point
  public/                 # Static assets
  README.md               # Project documentation
  package.json            # Project metadata and dependencies
  ...
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```sh
# Clone the repository
$ git clone <REPO_URL>
$ cd Akagera

# Install dependencies
$ npm install
# or
$ yarn install
```

### Running the Development Server

```sh
$ npm run dev
# or
$ yarn dev
```

The app will be available at `http://localhost:5173` (or as specified by Vite).

## Usage

- Browse products, add to cart, and proceed to checkout.
- Register or sign in to manage your profile and orders.
- Explore informational pages such as Blog, Returns, Shipping Info, Gift Cards, Store Locator, Careers, Affiliate, Newsletter, and Accessibility.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions, suggestions, or support, please contact the project maintainer at [your-email@example.com].
