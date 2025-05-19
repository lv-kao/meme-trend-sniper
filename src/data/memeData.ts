export type MemeTrend = {
  id: string;
  platform: 'TikTok' | 'Instagram' | 'Twitter' | 'YouTube';
  title: string;
  views: number;
  likes: number;
  shares: number;
  growthRate: number;
  hashtags: string[];
  viralPotential: number;
  thumbnailUrl: string;
  dateCollected: string;
  uploadTime?: string;
  viewCount1h?: number;
  viewCount3h?: number;
  velocity?: number;
  isViral?: boolean;
};

export const trendingMemeData: MemeTrend[] = [
  {
    id: '1',
    platform: 'TikTok',
    title: "POV: AI girlfriend just dumped me for a GPU miner 🤖💔⛏️",
    views: 2400000,
    likes: 340000,
    shares: 75000,
    growthRate: 237,
    hashtags: ['AI', 'crypto', 'GPUmining', 'relationships'],
    viralPotential: 94,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T15:30:00Z',
    uploadTime: '2025-05-18 12:30:00',
    viewCount1h: 85000,
    viewCount3h: 240000,
    velocity: 77500,
    isViral: true
  },
  {
    id: '2',
    platform: 'Instagram',
    title: "This dog just predicted the next meme coin $BARK 🐶📈",
    views: 1200000,
    likes: 190000,
    shares: 42000,
    growthRate: 176,
    hashtags: ['memecoin', 'crypto', 'dogwifhat', 'BARK'],
    viralPotential: 87,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T14:45:00Z',
    uploadTime: '2025-05-18 11:45:00',
    viewCount1h: 45000,
    viewCount3h: 120000,
    velocity: 37500,
    isViral: false
  },
  {
    id: '3',
    platform: 'Twitter',
    title: "Gen Z don't invest in stocks... they invest in $LOAF 🥖🚀",
    views: 850000,
    likes: 123000,
    shares: 32000,
    growthRate: 156,
    hashtags: ['GenZ', 'LOAF', 'BreadFi', 'memecoin'],
    viralPotential: 82,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T12:20:00Z',
    uploadTime: '2025-05-18 09:20:00',
    viewCount1h: 30000,
    viewCount3h: 85000,
    velocity: 27500,
    isViral: false
  },
  {
    id: '4',
    platform: 'TikTok',
    title: "Grandma just made 10x flipping $RETRO on Base 😂📼🔥",
    views: 3100000,
    likes: 420000,
    shares: 89000,
    growthRate: 298,
    hashtags: ['Base', 'RETRO', 'memecoin', 'crypto'],
    viralPotential: 97,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T10:15:00Z',
    uploadTime: '2025-05-18 07:15:00',
    viewCount1h: 90000,
    viewCount3h: 310000,
    velocity: 110000,
    isViral: true
  },
  {
    id: '5',
    platform: 'YouTube',
    title: "Don't buy $BTC. Buy $GOBLIN. You'll thank me later 👺💸",
    views: 780000,
    likes: 98000,
    shares: 25000,
    growthRate: 112,
    hashtags: ['GOBLIN', 'BTC', 'memecoin', 'crypto'],
    viralPotential: 73,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T09:45:00Z',
    uploadTime: '2025-05-18 06:45:00',
    viewCount1h: 25000,
    viewCount3h: 78000,
    velocity: 26500,
    isViral: false
  }
];

export type CoinTemplate = {
  id: string;
  name: string;
  ticker: string;
  description: string;
  baseOnMeme: string;
  tokenomics: {
    totalSupply: string;
    taxFee: number;
    liquidityFee: number;
  };
  complexityLevel: 'Basic' | 'Standard' | 'Advanced';
};

export const contractTemplates: CoinTemplate[] = [
  {
    id: 'template1',
    name: 'DogWifHat Clone',
    ticker: 'WIF',
    description: 'A simple ERC-20 token with basic tokenomics based on the popular dog meme',
    baseOnMeme: 'DogWifHat',
    tokenomics: {
      totalSupply: '1,000,000,000',
      taxFee: 2,
      liquidityFee: 3,
    },
    complexityLevel: 'Basic',
  },
  {
    id: 'template2',
    name: 'PEPE Advanced',
    ticker: 'PEPE',
    description: 'An ERC-20 token with reflection mechanisms and auto-LP acquisition',
    baseOnMeme: 'Pepe the Frog',
    tokenomics: {
      totalSupply: '420,690,000,000',
      taxFee: 3,
      liquidityFee: 5,
    },
    complexityLevel: 'Advanced',
  },
  {
    id: 'template3',
    name: 'CatMemeCoin',
    ticker: 'KITTY',
    description: 'Standard ERC-20 implementation with transaction fee and burn mechanism',
    baseOnMeme: 'Viral Cat Videos',
    tokenomics: {
      totalSupply: '9,000,000,000',
      taxFee: 1,
      liquidityFee: 2,
    },
    complexityLevel: 'Standard',
  }
];

export const trendingData = [
  { date: '2025-05-12', views: 120000, likes: 25000, shares: 8000 },
  { date: '2025-05-13', views: 180000, likes: 38000, shares: 12000 },
  { date: '2025-05-14', views: 230000, likes: 42000, shares: 15000 },
  { date: '2025-05-15', views: 320000, likes: 65000, shares: 22000 },
  { date: '2025-05-16', views: 550000, likes: 110000, shares: 35000 },
  { date: '2025-05-17', views: 980000, likes: 230000, shares: 68000 },
  { date: '2025-05-18', views: 2400000, likes: 340000, shares: 75000 },
];

export type PredictionModel = {
  id: string;
  title: string;
  platform: string;
  currentViews: number;
  projectedViews: number;
  velocity: number;
  timeRemaining: string;
  hashtags: string[];
  viralPotential: number;
  isViral: boolean;
};

export const predictionModels: PredictionModel[] = [
  {
    id: 'pred1',
    title: 'This AI-Generated Catdog Is Going Viral 🐱🐶',
    platform: 'TikTok',
    currentViews: 450000,
    projectedViews: 2500000,
    velocity: 85000,
    timeRemaining: '2h to peak',
    hashtags: ['AI', 'Catdog', 'Viral', 'NewMeme'],
    viralPotential: 95,
    isViral: true
  },
  {
    id: 'pred2',
    title: 'When Gen Z Explains Crypto to Boomers',
    platform: 'Instagram',
    currentViews: 380000,
    projectedViews: 1100000,
    velocity: 45000,
    timeRemaining: '4h to peak',
    hashtags: ['GenZ', 'Crypto', 'Boomers'],
    viralPotential: 87,
    isViral: true
  },
  {
    id: 'pred3',
    title: 'POV: Your Altcoin Just Got Listed On Binance',
    platform: 'Twitter',
    currentViews: 280000,
    projectedViews: 920000,
    velocity: 30000,
    timeRemaining: '6h to peak',
    hashtags: ['Binance', 'Altcoin', 'Pump'],
    viralPotential: 82,
    isViral: false
  },
  {
    id: 'pred4',
    title: 'The Rock Reveals His Crypto Portfolio (Reaction)',
    platform: 'YouTube',
    currentViews: 175000,
    projectedViews: 780000,
    velocity: 28000,
    timeRemaining: '5h to peak',
    hashtags: ['TheRock', 'Celebrity', 'CryptoPortfolio'],
    viralPotential: 78,
    isViral: false
  }
];
