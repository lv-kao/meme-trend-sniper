
import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import { predictionModels } from '@/data/memeData';

const Navbar = () => {
  // Count viral predictions
  const viralCount = predictionModels.filter(pred => pred.isViral).length;
  
  return (
    <div className="w-full py-4 px-6 border-b border-border bg-background/95 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">MemeSniper</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#dashboard" className="text-foreground/80 hover:text-foreground transition-colors">Dashboard</a>
          <a href="#trends" className="text-foreground/80 hover:text-foreground transition-colors">Trends</a>
          <a href="#predictions" className="text-foreground/80 hover:text-foreground transition-colors">Predictions</a>
          <a href="#generator" className="text-foreground/80 hover:text-foreground transition-colors">Contract Generator</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-trendingGreen rounded-full flex items-center justify-center text-[10px] font-bold text-primary-foreground">{viralCount}</span>
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Connect Wallet</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
