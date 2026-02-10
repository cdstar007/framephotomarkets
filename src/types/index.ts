export interface Photo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  fullImage: string;
  price: number;
  category: string;
  tags: string[];
  creator: Creator;
  license: 'personal' | 'commercial';
  resolution: string;
  downloads: number;
  rating: number;
  createdAt: string;
}

export interface Creator {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  totalPhotos: number;
}

export interface CartItem {
  photo: Photo;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'buyer' | 'creator' | 'admin';
  purchasedPhotos: string[];
  favorites: string[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

export type Category = 'all' | 'landscape' | 'portrait' | 'art' | 'festival' | 'nature' | 'urban' | 'food';
