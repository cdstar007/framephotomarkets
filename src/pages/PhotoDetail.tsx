import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Download, Shield, Heart, Share2 } from 'lucide-react';
import { photos } from '../data/mockData';
import { useCart } from '../contexts/CartContext';

export default function PhotoDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const photo = photos.find(p => p.id === id);

  if (!photo) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">找不到照片</h2>
          <Link to="/market" className="text-indigo-600 hover:text-indigo-700">
            返回照片市場
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/market"
          className="inline-flex items-center text-gray-600 hover:text-indigo-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          返回照片市場
        </Link>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <img
                src={photo.fullImage}
                alt={photo.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{photo.title}</h1>
                  <p className="text-gray-600">{photo.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{photo.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <Download className="w-5 h-5" />
                  <span>{photo.downloads} 次下載</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <img
                  src={photo.creator.avatar}
                  alt={photo.creator.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{photo.creator.name}</p>
                  <p className="text-sm text-gray-600">{photo.creator.bio}</p>
                </div>
                <Link
                  to={`/creator/${photo.creator.id}`}
                  className="ml-auto text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  查看更多作品
                </Link>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">標籤</h3>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">照片資訊</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">解析度</span>
                    <span className="font-medium">{photo.resolution}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">授權類型</span>
                    <span className="font-medium">
                      {photo.license === 'personal' ? '個人使用' : '商業使用'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">分類</span>
                    <span className="font-medium">{photo.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">上架日期</span>
                    <span className="font-medium">{photo.createdAt}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-4xl font-bold text-indigo-600">${photo.price}</span>
                    <span className="text-gray-500 ml-2">
                      {photo.license === 'personal' ? '個人授權' : '商業授權'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(photo)}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>加入購物車</span>
                </button>

                <div className="mt-4 flex items-start space-x-2 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p>
                    購買後即可下載高解析度照片，並可無限次推送到您的電子相框設備。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">授權說明</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">個人使用授權</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 個人電子相框展示</li>
                <li>• 家庭分享與展示</li>
                <li>• 非商業用途</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">商業使用授權</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 商業電子相框展示</li>
                <li>• 企業內部使用</li>
                <li>• 行銷與推廣用途</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
