
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp } from 'lucide-react';

type PredictionCardProps = {
  title: string;
  platform: string;
  viralPotential: number;
  timeRemaining: string;
  hashtags: string[];
};

const PredictionCard = ({
  title,
  platform,
  viralPotential,
  timeRemaining,
  hashtags
}: PredictionCardProps) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:border-secondary/70 transition-all duration-300">
      <div className={`h-2 ${viralPotential > 90 ? 'bg-trendingGreen' : viralPotential > 75 ? 'bg-secondary' : 'bg-trendingRed'}`}></div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-muted">
            {platform}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>{timeRemaining}</span>
          </div>
        </div>
        <CardTitle className="mt-3 line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-1 flex justify-between text-sm">
          <span>Viral Potential</span>
          <span className="font-bold text-secondary">{viralPotential}%</span>
        </div>
        <Progress value={viralPotential} className="h-2" />
        
        <div className="mt-4 flex flex-wrap gap-2">
          {hashtags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-muted text-muted-foreground">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm" className="w-[48%]">
          View Details
        </Button>
        <Button size="sm" className="w-[48%] bg-secondary hover:bg-secondary/90">
          <TrendingUp className="mr-1 h-4 w-4" />
          Track
        </Button>
      </CardFooter>
    </Card>
  );
};

const PredictionGrid = () => {
  const predictions = [
    {
      id: 'pred1',
      title: 'This AI-Generated Catdog Is Going Viral 🐱🐶',
      platform: 'TikTok',
      viralPotential: 95,
      timeRemaining: '2h to peak',
      hashtags: ['AI', 'Catdog', 'Viral', 'NewMeme']
    },
    {
      id: 'pred2',
      title: 'When Gen Z Explains Crypto to Boomers',
      platform: 'Instagram',
      viralPotential: 87,
      timeRemaining: '4h to peak',
      hashtags: ['GenZ', 'Crypto', 'Boomers']
    },
    {
      id: 'pred3',
      title: 'POV: Your Altcoin Just Got Listed On Binance',
      platform: 'Twitter',
      viralPotential: 82,
      timeRemaining: '6h to peak',
      hashtags: ['Binance', 'Altcoin', 'Pump']
    },
    {
      id: 'pred4',
      title: 'The Rock Reveals His Crypto Portfolio (Reaction)',
      platform: 'YouTube',
      viralPotential: 78,
      timeRemaining: '5h to peak',
      hashtags: ['TheRock', 'Celebrity', 'CryptoPortfolio']
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Viral Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {predictions.map((pred) => (
          <PredictionCard
            key={pred.id}
            title={pred.title}
            platform={pred.platform}
            viralPotential={pred.viralPotential}
            timeRemaining={pred.timeRemaining}
            hashtags={pred.hashtags}
          />
        ))}
      </div>
    </div>
  );
};

export default PredictionGrid;
