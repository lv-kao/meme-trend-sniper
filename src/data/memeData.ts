
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
};

export const trendingMemeData: MemeTrend[] = [
  {
    id: '1',
    platform: 'TikTok',
    title: 'When Crypto Bros Explain Their 100x Gem 💎',
    views: 2400000,
    likes: 340000,
    shares: 75000,
    growthRate: 237,
    hashtags: ['crypto', 'altcoin', 'memecoin', 'dogwifhat'],
    viralPotential: 94,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T15:30:00Z'
  },
  {
    id: '2',
    platform: 'Instagram',
    title: 'POV: Your Shitcoin Just Pumped 🚀🚀',
    views: 1200000,
    likes: 190000,
    shares: 42000,
    growthRate: 176,
    hashtags: ['memecoin', 'crypto', 'moonshot', 'PEPE'],
    viralPotential: 87,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T14:45:00Z'
  },
  {
    id: '3',
    platform: 'Twitter',
    title: 'Bears fighting for their lives against the meme coin rally',
    views: 850000,
    likes: 123000,
    shares: 32000,
    growthRate: 156,
    hashtags: ['Wojak', 'Bears', 'BullMarket', 'memecoin'],
    viralPotential: 82,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T12:20:00Z'
  },
  {
    id: '4',
    platform: 'TikTok',
    title: 'This cat meme just sold as an NFT for $500k 😱',
    views: 3100000,
    likes: 420000,
    shares: 89000,
    growthRate: 298,
    hashtags: ['NFT', 'CryptoCat', 'memecoin', 'ETH'],
    viralPotential: 97,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T10:15:00Z'
  },
  {
    id: '5',
    platform: 'YouTube',
    title: 'How Crypto Whales ACTUALLY Trade (Animated)',
    views: 780000,
    likes: 98000,
    shares: 25000,
    growthRate: 112,
    hashtags: ['Animated', 'CryptoWhale', 'Trading', 'memecoin'],
    viralPotential: 73,
    thumbnailUrl: 'https://placeholder.svg',
    dateCollected: '2025-05-18T09:45:00Z'
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
