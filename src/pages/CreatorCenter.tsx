import { useState } from 'react';
import { Upload, Image as ImageIcon, TrendingUp, DollarSign, Users, Plus, Edit, Trash2 } from 'lucide-react';
import { photos, creators } from '../data/mockData';

export default function CreatorCenter() {
  const [activeTab, setActiveTab] = useState<'photos' | 'earnings' | 'profile'>('photos');
  const creator = creators[0];

  const stats = [
    { label: '總照片數', value: creator.totalPhotos, icon: ImageIcon },
    { label: '總下載次', value: '3,456', icon: TrendingUp },
    { label: '總收益', value: '$1,234.56', icon: DollarSign },
    { label: '粉絲數', value: creator.followers, icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
            <div>
              <h1 className="text-3xl font-bold">{creator.name}</h1>
              <p className="text-purple-100 mt-1">{creator.bio}</p>
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-sm">創作者等級：黃金會員</span>
                <span className="text-sm">加入時間：2023年1月</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <stat.icon className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('photos')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'photos'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <ImageIcon className="w-5 h-5" />
                  <span>我的照片</span>
                </button>
                <button
                  onClick={() => setActiveTab('earnings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'earnings'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                  <span>收益管理</span>
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                    activeTab === 'profile'
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Users className="w-5 h-5" />
                  <span>個人檔案</span>
                </button>
              </nav>
            </div>

            <button className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition flex items-center justify-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>上傳新照片</span>
            </button>
          </div>

          <div className="lg:col-span-3">
            {activeTab === 'photos' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">我的照片</h2>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>上傳照片</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {photos.slice(0, 5).map(photo => (
                    <div
                      key={photo.id}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                    >
                      <img
                        src={photo.thumbnail}
                        alt={photo.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{photo.title}</h3>
                        <p className="text-sm text-gray-600">{photo.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <span className="text-gray-500">價格：${photo.price}</span>
                          <span className="text-gray-500">下載：{photo.downloads}</span>
                          <span className="text-gray-500">評分：{photo.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          已上架
                        </span>
                        <button className="p-2 text-gray-400 hover:text-purple-600 transition">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-600 transition">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'earnings' && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">收益概覽</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600">本月收益</p>
                      <p className="text-3xl font-bold text-purple-600 mt-2">$234.50</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-gray-600">可提領金額</p>
                      <p className="text-3xl font-bold text-green-600 mt-2">$1,234.56</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">總收益</p>
                      <p className="text-3xl font-bold text-blue-600 mt-2">$5,678.90</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">收益明細</h2>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      匯出報表
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">日期</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">照片</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">金額</th>
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">狀態</th>
                        </tr>
                      </thead>
                      <tbody>
                        {photos.slice(0, 5).map(photo => (
                          <tr key={photo.id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4 text-sm text-gray-900">{photo.createdAt}</td>
                            <td className="py-3 px-4 text-sm text-gray-900">{photo.title}</td>
                            <td className="py-3 px-4 text-sm text-green-600 font-medium">
                              ${(photo.price * 0.7).toFixed(2)}
                            </td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                已結算
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">提領設定</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        銀行帳號
                      </label>
                      <input
                        type="text"
                        defaultValue="**** **** **** 1234"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        稅務識別碼
                      </label>
                      <input
                        type="text"
                        defaultValue="123456789"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                      申請提領
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">個人檔案</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      顯示名稱
                    </label>
                    <input
                      type="text"
                      defaultValue={creator.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      個人簡介
                    </label>
                    <textarea
                      defaultValue={creator.bio}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      社群媒體連結
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="Instagram"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Facebook"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Twitter"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
                    儲存變更
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
