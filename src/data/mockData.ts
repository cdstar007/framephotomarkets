import type { Photo, Creator } from '../types';

// 圖片生成 API 基礎 URL
const IMAGE_API = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';

// 生成圖片 URL
const generateImageUrl = (prompt: string, size: string = 'landscape_4_3') => {
  const encodedPrompt = encodeURIComponent(prompt);
  return `${IMAGE_API}?prompt=${encodedPrompt}&image_size=${size}`;
};

export const creators: Creator[] = [
  {
    id: '1',
    name: '張文華',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    bio: '專業風景攝影師，擅長捕捉自然光影',
    followers: 1250,
    totalPhotos: 89
  },
  {
    id: '2',
    name: '李小美',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    bio: '人像攝影專家，溫暖的視覺故事',
    followers: 890,
    totalPhotos: 56
  },
  {
    id: '3',
    name: '王大偉',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brian',
    bio: '城市建築攝影，現代都市的記錄者',
    followers: 2100,
    totalPhotos: 134
  },
  {
    id: '4',
    name: '陳雅婷',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe',
    bio: '美食攝影師，讓食物說故事',
    followers: 560,
    totalPhotos: 42
  },
  {
    id: '5',
    name: '林志豪',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    bio: '藝術創作攝影，探索視覺邊界',
    followers: 1780,
    totalPhotos: 78
  }
];

export const photos: Photo[] = [
  {
    id: '1',
    title: '日出時刻的山巒',
    description: '清晨第一縷陽光灑落在連綿的山巒上，金色的光芒與藍色的天空交織，展現大自然的壯麗之美。',
    thumbnail: generateImageUrl('beautiful mountain landscape with sunrise, golden light, blue sky, nature photography', 'landscape_4_3'),
    fullImage: generateImageUrl('beautiful mountain landscape with sunrise, golden light, blue sky, nature photography', 'landscape_16_9'),
    price: 4.99,
    category: 'landscape',
    tags: ['風景', '日出', '山脈', '自然'],
    creator: creators[0],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 342,
    rating: 4.8,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: '湖畔倒影',
    description: '寧靜的湖面如鏡子般倒映著周圍的樹木和天空，創造出對稱而和諧的視覺效果。',
    thumbnail: generateImageUrl('serene lake with perfect reflection of trees and sky, calm water, natural symmetry', 'landscape_4_3'),
    fullImage: generateImageUrl('serene lake with perfect reflection of trees and sky, calm water, natural symmetry', 'landscape_16_9'),
    price: 3.99,
    category: 'nature',
    tags: ['風景', '湖泊', '倒影', '自然'],
    creator: creators[0],
    license: 'commercial',
    resolution: '2560x1440',
    downloads: 567,
    rating: 4.9,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    title: '溫暖的微笑',
    description: '一張充滿溫暖的人像照片，捕捉了真誠微笑的瞬間，展現人性的美好。',
    thumbnail: generateImageUrl('warm portrait photo of person with genuine smile, soft lighting, human emotion', 'portrait_4_3'),
    fullImage: generateImageUrl('warm portrait photo of person with genuine smile, soft lighting, human emotion', 'portrait_4_3'),
    price: 5.99,
    category: 'portrait',
    tags: ['人像', '微笑', '溫暖', '情感'],
    creator: creators[1],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 234,
    rating: 4.7,
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    title: '城市天際線',
    description: '現代都市的壯觀天際線，高樓大廈在夕陽下呈現出金色的輪廓。',
    thumbnail: generateImageUrl('modern city skyline with skyscrapers at sunset, golden hour lighting, urban landscape', 'landscape_4_3'),
    fullImage: generateImageUrl('modern city skyline with skyscrapers at sunset, golden hour lighting, urban landscape', 'landscape_16_9'),
    price: 6.99,
    category: 'urban',
    tags: ['城市', '建築', '天際線', '現代'],
    creator: creators[2],
    license: 'commercial',
    resolution: '3840x2160',
    downloads: 891,
    rating: 4.9,
    createdAt: '2024-02-05'
  },
  {
    id: '5',
    title: '精緻甜點',
    description: '色彩繽紛的精緻甜點，細膩的質感和完美的擺盤，讓人垂涎欲滴。',
    thumbnail: generateImageUrl('colorful精致甜点,细腻质感,完美摆盘,美食摄影', 'square'),
    fullImage: generateImageUrl('colorful精致甜点,细腻质感,完美摆盘,美食摄影', 'square'),
    price: 2.99,
    category: 'food',
    tags: ['美食', '甜點', '色彩', '精緻'],
    creator: creators[3],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 456,
    rating: 4.6,
    createdAt: '2024-02-10'
  },
  {
    id: '6',
    title: '抽象藝術',
    description: '充滿想像力的抽象藝術作品，色彩與形狀的完美融合，激發觀者的創造力。',
    thumbnail: generateImageUrl('imaginative abstract art, colorful shapes, creative expression, modern art', 'square'),
    fullImage: generateImageUrl('imaginative abstract art, colorful shapes, creative expression, modern art', 'square'),
    price: 7.99,
    category: 'art',
    tags: ['藝術', '抽象', '色彩', '創意'],
    creator: creators[4],
    license: 'commercial',
    resolution: '2560x1440',
    downloads: 321,
    rating: 4.8,
    createdAt: '2024-02-15'
  },
  {
    id: '7',
    title: '春日花海',
    description: '春天盛開的花海，五彩斑斕的花朵在微風中搖曳，充滿生命力。',
    thumbnail: generateImageUrl('spring flower field, colorful blooms, gentle breeze, vibrant nature', 'landscape_4_3'),
    fullImage: generateImageUrl('spring flower field, colorful blooms, gentle breeze, vibrant nature', 'landscape_16_9'),
    price: 3.49,
    category: 'nature',
    tags: ['自然', '花卉', '春天', '色彩'],
    creator: creators[0],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 678,
    rating: 4.7,
    createdAt: '2024-02-20'
  },
  {
    id: '8',
    title: '霓虹夜景',
    description: '充滿活力的城市夜景，霓虹燈光在夜空中閃爍，展現都市的繁華。',
    thumbnail: generateImageUrl('vibrant city night view, neon lights, bustling urban scene, modern metropolis', 'landscape_4_3'),
    fullImage: generateImageUrl('vibrant city night view, neon lights, bustling urban scene, modern metropolis', 'landscape_16_9'),
    price: 5.49,
    category: 'urban',
    tags: ['城市', '夜景', '霓虹', '繁華'],
    creator: creators[2],
    license: 'commercial',
    resolution: '2560x1440',
    downloads: 543,
    rating: 4.8,
    createdAt: '2024-02-25'
  },
  {
    id: '9',
    title: '節慶煙火',
    description: '絢麗的煙火在夜空中綻放，照亮整個天空，帶來節日的喜慶氛圍。',
    thumbnail: generateImageUrl('beautiful fireworks display in night sky, vibrant colors, celebration atmosphere', 'landscape_4_3'),
    fullImage: generateImageUrl('beautiful fireworks display in night sky, vibrant colors, celebration atmosphere', 'landscape_16_9'),
    price: 4.49,
    category: 'festival',
    tags: ['節慶', '煙火', '夜晚', '慶祝'],
    creator: creators[4],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 432,
    rating: 4.9,
    createdAt: '2024-03-01'
  },
  {
    id: '10',
    title: '森林小徑',
    description: '穿過茂密森林的小徑，陽光透過樹葉灑下斑駁的光影，充滿神秘感。',
    thumbnail: generateImageUrl('mysterious forest path, sunlight through leaves, dappled light, enchanted woods', 'landscape_4_3'),
    fullImage: generateImageUrl('mysterious forest path, sunlight through leaves, dappled light, enchanted woods', 'landscape_16_9'),
    price: 3.99,
    category: 'nature',
    tags: ['自然', '森林', '小徑', '光影'],
    creator: creators[0],
    license: 'commercial',
    resolution: '2560x1440',
    downloads: 389,
    rating: 4.6,
    createdAt: '2024-03-05'
  },
  {
    id: '11',
    title: '咖啡時光',
    description: '一杯香濃的咖啡搭配精緻的糕點，享受悠閒的下午茶時光。',
    thumbnail: generateImageUrl('cozy coffee time, aromatic coffee cup with pastry, relaxed afternoon tea', 'square'),
    fullImage: generateImageUrl('cozy coffee time, aromatic coffee cup with pastry, relaxed afternoon tea', 'square'),
    price: 2.49,
    category: 'food',
    tags: ['美食', '咖啡', '下午茶', '悠閒'],
    creator: creators[3],
    license: 'personal',
    resolution: '1920x1080',
    downloads: 567,
    rating: 4.5,
    createdAt: '2024-03-10'
  },
  {
    id: '12',
    title: '現代建築',
    description: '充滿設計感的現代建築，簡約的線條和獨特的造型展現建築美學。',
    thumbnail: generateImageUrl('modern architecture building, minimalist design, unique shape, architectural beauty', 'landscape_4_3'),
    fullImage: generateImageUrl('modern architecture building, minimalist design, unique shape, architectural beauty', 'landscape_16_9'),
    price: 5.99,
    category: 'urban',
    tags: ['建築', '現代', '設計', '簡約'],
    creator: creators[2],
    license: 'commercial',
    resolution: '3840x2160',
    downloads: 234,
    rating: 4.7,
    createdAt: '2024-03-15'
  }
];

export const categories = [
  { id: 'all', name: '全部', icon: 'Grid3x3' },
  { id: 'landscape', name: '風景', icon: 'Mountain' },
  { id: 'portrait', name: '人像', icon: 'User' },
  { id: 'art', name: '藝術', icon: 'Palette' },
  { id: 'festival', name: '節慶', icon: 'Sparkles' },
  { id: 'nature', name: '自然', icon: 'Leaf' },
  { id: 'urban', name: '城市', icon: 'Building' },
  { id: 'food', name: '美食', icon: 'Utensils' }
];
