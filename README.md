# ShopSmart - Digital Grocery Store

A modern, responsive grocery shopping web application built with React, TypeScript, and Tailwind CSS.

## Features

### 🛒 Customer Features
- **Homepage**: Featured products, categories, promotions
- **Product Catalog**: Grid/list view with filtering and sorting
- **Product Details**: Detailed product information with reviews
- **Shopping Cart**: Add/remove items with quantity management
- **Checkout Process**: Address input, payment options, order confirmation
- **User Authentication**: Register, login, password reset with session persistence
- **Order History**: Track past orders and their status
- **Responsive Design**: Works on desktop, tablet, and mobile

### ⚙️ Admin Features
- **Dashboard Overview**: Key metrics and recent orders
- **Inventory Management**: Add/edit/delete products with stock tracking
- **Order Management**: View and update order status
- **Customer Support**: Handle customer inquiries and tickets
- **Analytics**: Sales tracking, popular products, revenue graphs
- **User Management**: Role-based access control

### 🔒 Security Features
- JWT-based authentication
- Session persistence
- Role-based access control (customer/admin)
- Input validation and sanitization
- Secure password handling

## Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with responsive design
- **State Management**: React Context API

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopsmart-grocery-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Demo Accounts

For testing purposes, you can use these demo accounts:

- **Customer Account**: any@email.com (any password)
- **Admin Account**: admin@shopsmart.com (any password)
- ## 🎬 Demo Video

[Click here to watch or download the demo](https://github.com/Vinaykrishna-dunaboyina/ShopSmart/releases/download/v1.0/demo.mp4)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Footer, Layout components
│   ├── Analytics.tsx   # Analytics dashboard component
│   ├── CustomerSupport.tsx # Support ticket management
│   ├── InventoryManagement.tsx # Product inventory management
│   ├── PasswordReset.tsx # Password reset functionality
│   └── ProductCard.tsx # Product display component
├── contexts/           # React Context providers
│   ├── AuthContext.tsx # Authentication state management
│   └── CartContext.tsx # Shopping cart state management
├── data/              # Mock data and constants
│   └── mockData.ts    # Sample products and categories
├── pages/             # Page components
│   ├── AdminDashboard.tsx # Admin control panel
│   ├── Cart.tsx       # Shopping cart page
│   ├── Checkout.tsx   # Checkout process
│   ├── Home.tsx       # Homepage
│   ├── Login.tsx      # User login
│   ├── Orders.tsx     # Order history
│   ├── ProductDetail.tsx # Individual product page
│   ├── Products.tsx   # Product catalog
│   ├── Profile.tsx    # User profile management
│   └── Register.tsx   # User registration
├── types/             # TypeScript type definitions
└── App.tsx           # Main application component
```

## Key Features Implementation

### Authentication System
- JWT token simulation with localStorage persistence
- Role-based routing and component access
- Secure login/logout functionality
- Password reset workflow

### Shopping Cart
- Add/remove items with quantity management
- Real-time total calculation
- Persistent cart state across sessions
- Checkout process with order confirmation

### Admin Dashboard
- Comprehensive inventory management
- Order status tracking and updates
- Customer support ticket system
- Sales analytics and reporting
- Low stock alerts and notifications

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive navigation with mobile menu
- Optimized layouts for all screen sizes
- Touch-friendly interface elements

## Development Guidelines

### Code Style
- TypeScript for type safety
- Functional components with React hooks
- Consistent naming conventions
- Modular component architecture

### State Management
- React Context for global state (auth, cart)
- Local state for component-specific data
- Proper state lifting and prop drilling avoidance

### Styling
- Tailwind CSS utility classes
- Consistent color scheme and spacing
- Responsive design patterns
- Accessible UI components

## Future Enhancements

- Real backend API integration
- Payment gateway integration (Stripe/PayPal)
- Real-time notifications
- Advanced search and filtering
- Product reviews and ratings
- Wishlist functionality
- Email notifications
- Advanced analytics and reporting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com]
