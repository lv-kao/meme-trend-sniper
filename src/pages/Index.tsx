
import React from 'react';
import Navbar from '@/components/Navbar';
import TrendingMemes from '@/components/TrendingMemes';
import PredictionGrid from '@/components/PredictionCard';
import TrendChart from '@/components/TrendChart';
import ContractGenerator from '@/components/ContractGenerator';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-20">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Meme Trend Sniper</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track viral meme trends, predict their growth, and generate meme coin contracts to capitalize on the next big thing.
          </p>
          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center">
            <Card className="w-full md:w-1/3 card-gradient border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">237%</div>
                  <div className="text-sm text-muted-foreground">Average Growth Rate</div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3 card-gradient border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">82%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </div>
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3 card-gradient border-border/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-trendingRed mb-2">5.2M</div>
                  <div className="text-sm text-muted-foreground">Memes Analyzed</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Dashboard Section */}
        <section id="dashboard" className="py-12">
          <TrendChart title="Viral Trend Analysis" />
        </section>
        
        {/* Trending Memes Section */}
        <section id="trends" className="py-12">
          <TrendingMemes />
        </section>
        
        {/* Prediction Section */}
        <section id="predictions" className="py-12">
          <PredictionGrid />
        </section>
        
        {/* Contract Generator Section */}
        <section id="generator" className="py-12">
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
