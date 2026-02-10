import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              FrameMarket
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">
                首頁
              </Link>
              <Link to="/market" className="text-gray-700 hover:text-indigo-600 transition">
                照片市場
              </Link>
              <Link to="/creators" className="text-gray-700 hover:text-indigo-600 transition">
                創作者
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜尋照片..."
                className="bg-transparent border-none outline-none ml-2 w-48"
              />
            </div>

            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-indigo-600 transition">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/profile" className="p-2 text-gray-700 hover:text-indigo-600 transition">
              <User className="w-6 h-6" />
            </Link>

            <button className="md:hidden p-2 text-gray-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
