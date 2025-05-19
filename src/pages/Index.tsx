
import React from 'react';
import Navbar from '@/components/Navbar';
import TrendingMemes from '@/components/TrendingMemes';
import PredictionGrid from '@/components/PredictionCard';
import TrendChart from '@/components/TrendChart';
import ContractGenerator from '@/components/ContractGenerator';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowUp, 
  TrendingUp, 
  BarChart3
} from 'lucide-react';
import { predictionModels } from '@/data/memeData';

const Index = () => {
  // Calculate key metrics
  const viralPredictions = predictionModels.filter(pred => pred.isViral).length;
  const totalPredictions = predictionModels.length;
  const averageViralPotential = Math.round(
    predictionModels.reduce((acc, curr) => acc + curr.viralPotential, 0) / totalPredictions
  );
  const highestVelocity = Math.max(...predictionModels.map(pred => pred.velocity));
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* Dashboard Overview */}
        <section className="mb-8">
          <h1 className="text-3xl font-bold mb-6">
            <span className="gradient-text">Dashboard Overview</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Key Metrics Cards */}
            <Card className="bg-muted/50 border-border/50 hover:border-primary/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Viral Predictions</div>
                  <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">{viralPredictions}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <span className="text-trendingGreen flex items-center">
                    <ArrowUp className="h-3 w-3 mr-1" /> 
                    {Math.round((viralPredictions / totalPredictions) * 100)}% of total
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50 border-border/50 hover:border-secondary/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Avg Viral Potential</div>
                  <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-secondary" />
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">{averageViralPotential}%</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <span className="text-secondary flex items-center">
                    Based on {totalPredictions} predictions
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50 border-border/50 hover:border-trendingGreen/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Highest Velocity</div>
                  <div className="h-8 w-8 bg-trendingGreen/20 rounded-full flex items-center justify-center">
                    <ArrowUp className="h-4 w-4 text-trendingGreen" />
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">{(highestVelocity/1000).toFixed(1)}k</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <span className="text-trendingGreen flex items-center">
                    views/hour growth rate
                  </span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/50 border-border/50 hover:border-trendingRed/30 transition-all">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">Trading Opportunities</div>
                  <div className="h-8 w-8 bg-trendingRed/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-trendingRed" />
                  </div>
                </div>
                <div className="mt-2 text-3xl font-bold">{viralPredictions * 2}</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  <span className="text-trendingRed flex items-center">
                    Potential profitable trades
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Trend Chart */}
        <section id="dashboard" className="py-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Trend Analysis</h2>
          </div>
          <TrendChart title="Viral Trend Analysis" />
        </section>
        
        {/* Trending Memes Section */}
        <section id="trends" className="py-8">
          <TrendingMemes />
        </section>
        
        {/* Prediction Section */}
        <section id="predictions" className="py-8">
          <PredictionGrid />
        </section>
        
        {/* Contract Generator Section */}
        <section id="generator" className="py-8">
          <ContractGenerator />
        </section>
      </div>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Meme Trend Sniper. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
