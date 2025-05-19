
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { contractTemplates, CoinTemplate } from '@/data/memeData';
import { toast } from '@/components/ui/use-toast';

const ContractTemplate = ({ template }: { template: CoinTemplate }) => {
  return (
    <Card className="border border-border/50 hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>{template.name}</CardTitle>
          <div className="px-2 py-1 rounded-md bg-muted text-xs font-medium">
            {template.complexityLevel}
          </div>
        </div>
        <CardDescription>Based on: {template.baseOnMeme}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label>Ticker</Label>
            <div className="bg-muted p-2 rounded-md text-sm">${template.ticker}</div>
          </div>
          <div>
            <Label>Description</Label>
            <div className="bg-muted p-2 rounded-md text-sm">{template.description}</div>
          </div>
          <div>
            <Label>Tokenomics</Label>
            <div className="bg-muted p-2 rounded-md text-sm space-y-1">
              <div>Total Supply: {template.tokenomics.totalSupply}</div>
              <div>Tax Fee: {template.tokenomics.taxFee}%</div>
              <div>Liquidity Fee: {template.tokenomics.liquidityFee}%</div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => toast({ 
            title: "Template Selected", 
            description: `You've selected the ${template.name} template.` 
          })}>
          Use Template
        </Button>
      </CardFooter>
    </Card>
  );
};

const ContractGenerator = () => {
  const [customName, setCustomName] = useState('');
  const [customSymbol, setCustomSymbol] = useState('');
  const [customSupply, setCustomSupply] = useState('');
  
  const handleGenerateContract = () => {
    toast({
      title: "Contract Generated",
      description: `Your custom contract ${customName} (${customSymbol}) has been generated and is ready for deployment.`
    });
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contract Generator</h2>
      <Tabs defaultValue="templates">
        <TabsList className="mb-6">
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="custom">Custom Contract</TabsTrigger>
        </TabsList>
        
        <TabsContent value="templates">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractTemplates.map((template) => (
              <ContractTemplate key={template.id} template={template} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Custom Contract Generator</CardTitle>
              <CardDescription>Create a custom meme coin contract from scratch</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Token Name</Label>
                    <Input
                      id="name"
                      placeholder="e.g. Doge AI"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="symbol">Token Symbol</Label>
                    <Input
                      id="symbol"
                      placeholder="e.g. DOGEAI"
                      value={customSymbol}
                      onChange={(e) => setCustomSymbol(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supply">Total Supply</Label>
                    <Input
                      id="supply"
                      placeholder="e.g. 1000000000"
                      value={customSupply}
                      onChange={(e) => setCustomSupply(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="p-4 bg-muted rounded-md">
                  <div className="text-sm text-muted-foreground">
                    <p className="mb-2 font-medium">Preview:</p>
                    <pre className="overflow-auto p-2 bg-background rounded">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ${customName || 'YourToken'} {
    string public name = "${customName || 'YourToken'}";
    string public symbol = "${customSymbol || 'YTK'}";
    uint8 public decimals = 18;
    uint256 public totalSupply = ${customSupply || '1000000000'} * (10 ** uint256(decimals));
    
    // More contract code will be generated...
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleGenerateContract}>
                Generate Contract
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContractGenerator;
