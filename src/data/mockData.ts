import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fresh Produce',
    icon: '🥬',
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 3
  },
  {
    id: '2',
    name: 'Dairy & Eggs',
    icon: '🥛',
    image: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 3
  },
  {
    id: '3',
    name: 'Meat & Seafood',
    icon: '🥩',
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 2
  },
  {
    id: '4',
    name: 'Bakery',
    icon: '🍞',
    image: 'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1
  },
  {
    id: '5',
    name: 'Pantry Staples',
    icon: '🌾',
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=400',
    productCount: 1
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Organic Bananas',
    description: 'Fresh, organic bananas perfect for snacking or baking. Rich in potassium and natural sweetness.',
    price: 2.99,
    originalPrice: 3.49,
    image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fresh Produce',
    inStock: true,
    rating: 4.8,
    reviewCount: 324,
    unit: 'bunch',
    tags: ['organic', 'fresh', 'healthy']
  },
  {
    id: '2',
    name: 'Fresh Apples',
    description: 'Crisp and sweet red apples. Perfect for snacking, baking, or adding to salads.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fresh Produce',
    inStock: true,
    rating: 4.7,
    reviewCount: 256,
    unit: 'lb',
    tags: ['fresh', 'crisp', 'healthy']
  },
  {
    id: '3',
    name: 'Organic Spinach',
    description: 'Tender, organic baby spinach leaves. Pre-washed and ready to eat. Perfect for salads and smoothies.',
    price: 3.49,
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Fresh Produce',
    inStock: true,
    rating: 4.8,
    reviewCount: 445,
    unit: '5 oz container',
    tags: ['organic', 'pre-washed', 'healthy']
  },
  {
    id: '4',
    name: 'Farm Fresh Eggs',
    description: 'Grade A large eggs from free-range chickens. Perfect for breakfast, baking, and cooking.',
    price: 4.99,
    image: 'https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Dairy & Eggs',
    inStock: true,
    rating: 4.9,
    reviewCount: 567,
    unit: 'dozen',
    tags: ['free-range', 'fresh', 'protein']
  },
  {
    id: '5',
    name: 'Whole Milk',
    description: 'Fresh, pasteurized whole milk from local dairy farms. Rich, creamy taste perfect for cereal and coffee.',
    price: 3.79,
    image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Dairy & Eggs',
    inStock: true,
    rating: 4.7,
    reviewCount: 289,
    unit: 'gallon',
    tags: ['fresh', 'local', 'dairy']
  },
  {
    id: '6',
    name: 'Greek Yogurt',
    description: 'Thick and creamy Greek yogurt packed with protein. Available in vanilla flavor.',
    price: 5.49,
    image: 'https://images.pexels.com/photos/1446318/pexels-photo-1446318.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Dairy & Eggs',
    inStock: true,
    rating: 4.8,
    reviewCount: 378,
    unit: '32 oz container',
    tags: ['protein', 'creamy', 'healthy']
  },
  {
    id: '7',
    name: 'Premium Ground Beef',
    description: '85% lean ground beef from grass-fed cattle. Perfect for burgers, tacos, and pasta dishes.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Meat & Seafood',
    inStock: true,
    rating: 4.6,
    reviewCount: 234,
    unit: 'lb',
    tags: ['grass-fed', 'premium', 'protein']
  },
  {
    id: '8',
    name: 'Fresh Chicken Breast',
    description: 'Boneless, skinless chicken breast. High in protein and perfect for grilling, baking, or stir-frying.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Meat & Seafood',
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    unit: 'lb',
    tags: ['lean', 'protein', 'versatile']
  },
  {
    id: '9',
    name: 'Whole Wheat Bread',
    description: 'Fresh baked whole wheat bread. Soft texture with a hearty, nutty flavor. Perfect for sandwiches.',
    price: 3.99,
    image: 'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Bakery',
    inStock: true,
    rating: 4.5,
    reviewCount: 156,
    unit: 'loaf',
    tags: ['whole-grain', 'fresh', 'healthy']
  },
  {
    id: '10',
    name: 'Jasmine Rice',
    description: 'Premium jasmine rice with a delicate floral aroma and fluffy texture. Perfect for Asian dishes.',
    price: 6.99,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Pantry Staples',
    inStock: true,
    rating: 4.7,
    reviewCount: 189,
    unit: '2 lb bag',
    tags: ['premium', 'aromatic', 'staple']
  }
];

export const featuredProducts = products.slice(0, 6);
export const onSaleProducts = products.filter(product => product.originalPrice);