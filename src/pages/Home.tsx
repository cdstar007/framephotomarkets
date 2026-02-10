import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react';
import PhotoCard from '../components/PhotoCard';
import { photos } from '../data/mockData';

export default function Home() {
  const featuredPhotos = photos.slice(0, 6);
  const trendingPhotos = photos.slice(6, 12);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              專為電子相框設計的照片市場
            </h1>
            <p className="text-xl mb-8 text-indigo-100">
              探索高品質照片，豐富您的電子相框展示體驗
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/market"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition flex items-center space-x-2"
              >
                <span>瀏覽照片市場</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/creators"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition"
              >
                成為創作者
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-indigo-100">精選照片庫</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-indigo-100">專業創作者</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4.8</h3>
              <p className="text-indigo-100">平均評分</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">精選推薦</h2>
            <p className="text-gray-600 mt-2">為您挑選的優質照片</p>
          </div>
          <Link
            to="/market"
            className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-1"
          >
            <span>查看全部</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">熱門趨勢</h2>
              <p className="text-gray-600 mt-2">最受歡迎的照片作品</p>
            </div>
            <Link
              to="/market"
              className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center space-x-1"
            >
              <span>查看全部</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPhotos.map(photo => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼選擇 FrameMarket？</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我們專注於為電子相框使用者提供最佳的照片購買體驗
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">高品質內容</h3>
            <p className="text-gray-600">
              所有照片均經過嚴格篩選，確保高解析度和優質的視覺效果
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">專業創作者</h3>
            <p className="text-gray-600">
              來自全球的專業攝影師和藝術家，為您帶來獨特的視覺體驗
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">靈活授權</h3>
            <p className="text-gray-600">
              提供個人使用和商業使用等多種授權選項，滿足不同需求
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
