import { useState } from 'react';
import { User, ShoppingBag, Download, Heart, Settings, CreditCard, Bell, Shield } from 'lucide-react';
import { photos } from '../data/mockData';

export default function Profile() {
  const [activeTab, setActiveTab] = useState<'purchases' | 'favorites' | 'settings'>('purchases');

  const purchasedPhotos = photos.slice(0, 4);
  const favoritePhotos = photos.slice(4, 8);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-indigo-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">王小明</h1>
              <p className="text-indigo-100">xiaoming@example.com</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm">已購照片：12 張</span>
                <span className="text-sm">收藏：8 張</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('purchases')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'purchases'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>已購照片</span>
                </button>
                <button
                  onClick={() => setActiveTab('favorites')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'favorites'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span>收藏</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'settings'
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span>設定</span>
                </button>
              </nav>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 mt-6">
              <h3 className="font-semibold text-gray-900 mb-4">我的裝置</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">客廳相框</p>
                    <p className="text-sm text-gray-600">已連線</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">臥室相框</p>
                    <p className="text-sm text-gray-600">已連線</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <button className="w-full mt-4 text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                + 新增裝置
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'purchases' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">已購照片</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {purchasedPhotos.map(photo => (
                    <div key={photo.id} className="group relative">
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                        <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>下載</span>
                        </button>
                      </div>
                      <div className="mt-3">
                        <h3 className="font-semibold text-gray-900">{photo.title}</h3>
                        <p className="text-sm text-gray-600">{photo.creator.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'favorites' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">收藏</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoritePhotos.map(photo => (
                    <div key={photo.id} className="group">
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="mt-3">
                        <h3 className="font-semibold text-gray-900">{photo.title}</h3>
                        <p className="text-sm text-gray-600">${photo.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">帳戶設定</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        姓名
                      </label>
                      <input
                        type="text"
                        defaultValue="王小明"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        電子郵件
                      </label>
                      <input
                        type="email"
                        defaultValue="xiaoming@example.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                    <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
                      儲存變更
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">付款方式</h2>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="font-medium text-gray-900">**** **** **** 4242</p>
                        <p className="text-sm text-gray-600">到期日：12/25</p>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                      編輯
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">通知設定</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">新照片上架通知</span>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <ShoppingBag className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">訂單更新通知</span>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-gray-600" />
                        <span className="text-gray-900">安全警示</span>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
