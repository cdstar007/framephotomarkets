import { Link } from 'react-router-dom';
import { ArrowRight, Star, Image as ImageIcon, TrendingUp } from 'lucide-react';
import { creators, photos } from '../data/mockData';

export default function Creators() {
  const topCreators = creators.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">探索優秀創作者</h1>
            <p className="text-xl mb-8 text-purple-100">
              來自全球的專業攝影師和藝術家，為您帶來獨特的視覺體驗
            </p>
            <Link
              to="/market"
              className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
            >
              <span>瀏覽所有照片</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-purple-100">專業創作者</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10,000+</h3>
              <p className="text-purple-100">精選照片</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">4.9</h3>
              <p className="text-purple-100">平均評分</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">熱門創作者</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topCreators.map(creator => {
            const creatorPhotos = photos.filter(p => p.creator.id === creator.id);
            return (
              <div
                key={creator.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-3 gap-1 h-32">
                  {creatorPhotos.slice(0, 3).map((photo, index) => (
                    <img
                      key={photo.id}
                      src={photo.thumbnail}
                      alt={photo.title}
                      className={`w-full h-full object-cover ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
                    />
                  ))}
                </div>

                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{creator.name}</h3>
                      <p className="text-sm text-gray-600">{creator.totalPhotos} 張照片</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">{creator.bio}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <ImageIcon className="w-4 h-4" />
                      <span>{creator.followers} 粉絲</span>
                    </div>
                  </div>

                  <Link
                    to={`/creator/${creator.id}`}
                    className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-center block font-medium"
                  >
                    查看作品集
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">成為創作者</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              加入我們的創作者社群，分享您的作品，獲得收益
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ImageIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">上傳作品</h3>
              <p className="text-gray-600">
                簡單易用的上傳工具，支援批次上傳和拖拽功能
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">獲得收益</h3>
              <p className="text-gray-600">
                每次銷售獲得 70-80% 的收益，每月結算提領
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">建立品牌</h3>
              <p className="text-gray-600">
                展示您的作品集，吸引粉絲，建立個人品牌
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/creator-center"
              className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              立即申請成為創作者
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
