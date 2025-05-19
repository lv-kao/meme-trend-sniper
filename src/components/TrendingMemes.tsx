
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp } from 'lucide-react';
import { MemeTrend, trendingMemeData } from '@/data/memeData';

const TrendingMemeCard = ({ meme }: { meme: MemeTrend }) => {
  return (
    <Card className="card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className={`${meme.platform === 'TikTok' ? 'bg-trendingRed' : meme.platform === 'Instagram' ? 'bg-secondary' : 'bg-primary'} hover:opacity-90`}>
            {meme.platform}
          </Badge>
          <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted">
            <ArrowUp className="h-3 w-3 text-trendingGreen" />
            <span className="text-xs font-medium text-trendingGreen">{meme.growthRate}%</span>
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{meme.title}</CardTitle>
        <CardDescription>
          Viral Potential: <span className="font-bold text-primary">{meme.viralPotential}%</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm text-muted-foreground mb-3">
          <div>Views: {meme.views.toLocaleString()}</div>
          <div>Likes: {meme.likes.toLocaleString()}</div>
        </div>
        <div className="flex flex-wrap gap-2">
          {meme.hashtags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const TrendingMemes = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Trending Memes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingMemeData.map((meme) => (
          <TrendingMemeCard key={meme.id} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default TrendingMemes;
