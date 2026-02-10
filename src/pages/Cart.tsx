import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">購物車是空的</h2>
            <p className="text-gray-600 mb-8">快去照片市場探索精選照片吧！</p>
            <Link
              to="/market"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              瀏覽照片市場
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">購物車</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.photo.id}
                className="bg-white rounded-xl shadow-md p-4 flex items-center space-x-4"
              >
                <img
                  src={item.photo.thumbnail}
                  alt={item.photo.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <Link
                    to={`/photo/${item.photo.id}`}
                    className="font-semibold text-gray-900 hover:text-indigo-600 transition"
                  >
                    {item.photo.title}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{item.photo.creator.name}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="text-sm text-gray-500">
                      {item.photo.license === 'personal' ? '個人授權' : '商業授權'}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-sm text-gray-500">{item.photo.resolution}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.photo.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.photo.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-indigo-600">
                    ${(item.photo.price * item.quantity).toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${item.photo.price} / 張
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.photo.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-4">訂單摘要</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>商品數量</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)} 張</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>小計</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>手續費</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>總計</span>
                  <span className="text-indigo-600">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center space-x-2 mb-3">
                <CreditCard className="w-5 h-5" />
                <span>前往結帳</span>
              </button>

              <button
                onClick={clearCart}
                className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition"
              >
                清空購物車
              </button>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  購買後即可立即下載高解析度照片，並推送到您的電子相框設備。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
