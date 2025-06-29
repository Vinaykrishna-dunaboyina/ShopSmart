import React from 'react';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
}

const Orders: React.FC = () => {
  // Mock orders data
  const orders: Order[] = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 47.85,
      items: 5
    },
    {
      id: 'ORD-002',
      date: '2024-01-18',
      status: 'Shipped',
      total: 73.22,
      items: 8
    },
    {
      id: 'ORD-003',
      date: '2024-01-20',
      status: 'Processing',
      total: 34.67,
      items: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
          <a
            href="/products"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Start Shopping
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Order {order.id}</h3>
                  <p className="text-gray-600">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-gray-600">{order.items} items</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">${order.total.toFixed(2)}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 flex space-x-4">
                <button className="text-green-600 hover:text-green-800 font-medium">
                  View Details
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Track Order
                </button>
                {order.status === 'Delivered' && (
                  <button className="text-gray-600 hover:text-gray-800 font-medium">
                    Reorder
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;