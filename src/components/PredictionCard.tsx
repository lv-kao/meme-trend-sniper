
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, ChartLine } from 'lucide-react';

type PredictionCardProps = {
  title: string;
  platform: string;
  viralPotential: number;
  timeRemaining: string;
  hashtags: string[];
  currentViews?: number;
  projectedViews?: number;
  velocity?: number;
  isViral?: boolean;
};

const PredictionCard = ({
  title,
  platform,
  viralPotential,
  timeRemaining,
  hashtags,
  currentViews,
  projectedViews,
  velocity,
  isViral
}: PredictionCardProps) => {
  return (
    <Card className="overflow-hidden border border-border/50 hover:border-secondary/70 transition-all duration-300">
      <div className={`h-2 ${isViral ? 'bg-trendingGreen' : viralPotential > 80 ? 'bg-secondary' : 'bg-trendingRed'}`}></div>
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
        
        {velocity && (
          <div className="mt-4 mb-2">
            <div className="flex justify-between text-sm">
              <span>Growth Velocity</span>
              <span className={`font-bold ${velocity > 50000 ? 'text-trendingGreen' : 'text-muted-foreground'}`}>
                {(velocity / 1000).toFixed(1)}k/hr
              </span>
            </div>
            <Progress value={Math.min((velocity / 120000) * 100, 100)} className="h-2 mt-1" />
          </div>
        )}
        
        {currentViews && projectedViews && (
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
            <div>
              <div>Current Views</div>
              <div className="font-medium text-foreground">{(currentViews / 1000).toFixed(1)}k</div>
            </div>
            <div>
              <div>Projected Views</div>
              <div className="font-medium text-foreground">{(projectedViews / 1000).toFixed(0)}k</div>
            </div>
          </div>
        )}
        
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
          <ChartLine className="mr-1 h-4 w-4" />
          Details
        </Button>
        <Button size="sm" className={`w-[48%] ${isViral ? 'bg-trendingGreen hover:bg-trendingGreen/90' : 'bg-secondary hover:bg-secondary/90'}`}>
          <TrendingUp className="mr-1 h-4 w-4" />
          Track
        </Button>
      </CardFooter>
    </Card>
  );
};

const PredictionGrid = () => {
  // Import the prediction models data
  const { predictionModels } = require('@/data/memeData');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Viral Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {predictionModels.map((pred) => (
          <PredictionCard
            key={pred.id}
            title={pred.title}
            platform={pred.platform}
            viralPotential={pred.viralPotential}
            timeRemaining={pred.timeRemaining}
            hashtags={pred.hashtags}
            currentViews={pred.currentViews}
            projectedViews={pred.projectedViews}
            velocity={pred.velocity}
            isViral={pred.isViral}
          />
        ))}
      </div>
    </div>
  );
};

export default PredictionGrid;
