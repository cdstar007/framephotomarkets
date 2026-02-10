import { Link } from 'react-router-dom';
import { ShoppingCart, Star, Download } from 'lucide-react';
import type { Photo } from '../types';
import { useCart } from '../contexts/CartContext';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <div className="relative overflow-hidden">
        <Link to={`/photo/${photo.id}`}>
          <img
            src={photo.thumbnail}
            alt={photo.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{photo.rating}</span>
        </div>
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center space-x-1 text-sm">
          <Download className="w-4 h-4 text-gray-600" />
          <span className="text-gray-600">{photo.downloads}</span>
        </div>
      </div>

      <div className="p-4">
        <Link to={`/photo/${photo.id}`}>
          <h3 className="font-semibold text-lg text-gray-900 hover:text-indigo-600 transition line-clamp-1">
            {photo.title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{photo.description}</p>

        <div className="flex items-center mt-3 space-x-2">
          <img
            src={photo.creator.avatar}
            alt={photo.creator.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600">{photo.creator.name}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">${photo.price}</span>
            <span className="text-xs text-gray-500">
              {photo.license === 'personal' ? '個人' : '商業'}
            </span>
          </div>
          <button
            onClick={() => addToCart(photo)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>加入購物車</span>
          </button>
        </div>
      </div>
    </div>
  );
}
