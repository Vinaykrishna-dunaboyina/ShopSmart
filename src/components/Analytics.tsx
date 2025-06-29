import React from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

const Analytics: React.FC = () => {
  // Mock analytics data
  const salesData = [
    { month: 'Jan', sales: 4500 },
    { month: 'Feb', sales: 5200 },
    { month: 'Mar', sales: 4800 },
    { month: 'Apr', sales: 6100 },
    { month: 'May', sales: 7200 },
    { month: 'Jun', sales: 6800 },
  ];

  const popularProducts = [
    { name: 'Organic Bananas', sales: 245, revenue: 735 },
    { name: 'Farm Fresh Eggs', sales: 189, revenue: 943 },
    { name: 'Whole Milk', sales: 167, revenue: 633 },
    { name: 'Artisan Bread', sales: 134, revenue: 803 },
    { name: 'Greek Yogurt', sales: 98, revenue: 538 },
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$34,250</p>
              <p className="text-sm text-purple-600">+12% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-semibold text-gray-900">1,247</p>
              <p className="text-sm text-purple-600">+8% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">New Customers</p>
              <p className="text-2xl font-semibold text-gray-900">89</p>
              <p className="text-sm text-purple-600">+15% from last month</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-semibold text-gray-900">$27.48</p>
              <p className="text-sm text-purple-600">+5% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">Monthly Sales</h3>
        <div className="h-64 flex items-end space-x-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-purple-500 rounded-t"
                style={{ height: `${(data.sales / 8000) * 100}%` }}
              ></div>
              <p className="text-sm text-gray-600 mt-2">{data.month}</p>
              <p className="text-xs text-gray-500">${data.sales}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Products */}
      <div className="bg-white p-6 rounded-lg shadow border">
        <h3 className="text-lg font-semibold mb-4">Most Popular Products</h3>
        <div className="space-y-4">
          {popularProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">{product.sales} units sold</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${product.revenue}</p>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
