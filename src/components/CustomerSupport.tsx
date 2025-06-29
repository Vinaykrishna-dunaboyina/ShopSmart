import React, { useState } from 'react';
import { MessageCircle, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface Ticket {
  id: string;
  customer: string;
  subject: string;
  status: 'open' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  date: string;
  message: string;
}

const CustomerSupport: React.FC = () => {
  const [tickets] = useState<Ticket[]>([
    {
      id: 'TKT-001',
      customer: 'John Doe',
      subject: 'Order delivery issue',
      status: 'open',
      priority: 'high',
      date: '2024-01-20',
      message: 'My order was supposed to be delivered yesterday but I haven\'t received it yet.'
    },
    {
      id: 'TKT-002',
      customer: 'Jane Smith',
      subject: 'Product quality concern',
      status: 'in-progress',
      priority: 'medium',
      date: '2024-01-19',
      message: 'The bananas I received were overripe. Can I get a replacement?'
    },
    {
      id: 'TKT-003',
      customer: 'Mike Johnson',
      subject: 'Refund request',
      status: 'resolved',
      priority: 'low',
      date: '2024-01-18',
      message: 'I need to return some items from my last order.'
    }
  ]);

  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [response, setResponse] = useState('');

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'open':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSendResponse = () => {
    if (response.trim()) {
      alert('Response sent successfully!');
      setResponse('');
      setSelectedTicket(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Tickets List */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow border">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Support Tickets</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-6 hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getStatusIcon(ticket.status)}
                      <h3 className="font-medium">{ticket.subject}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{ticket.customer} • {ticket.id}</p>
                    <p className="text-sm text-gray-500 line-clamp-2">{ticket.message}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(ticket.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticket Details */}
      <div>
        {selectedTicket ? (
          <div className="bg-white rounded-lg shadow border p-6">
            <div className="flex items-center space-x-2 mb-4">
              {getStatusIcon(selectedTicket.status)}
              <h3 className="font-semibold">{selectedTicket.subject}</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-700">Customer</p>
                <p className="text-sm text-gray-900">{selectedTicket.customer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Ticket ID</p>
                <p className="text-sm text-gray-900">{selectedTicket.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Priority</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(selectedTicket.priority)}`}>
                  {selectedTicket.priority}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Message</p>
                <p className="text-sm text-gray-900">{selectedTicket.message}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Response
                </label>
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Type your response here..."
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleSendResponse}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Send Response
                </button>
                <select className="px-3 py-2 border border-gray-300 rounded">
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow border p-6 text-center">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Select a ticket to view details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSupport;