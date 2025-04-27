
import React from 'react';
import { CircleDashed } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-800 rounded-full opacity-50 animate-ping"></div>
        <CircleDashed 
          size={400} 
          className="text-black relative z-10 animate-pulse" 
          strokeWidth={1} 
        />
      </div>
    </div>
  );
};

export default Index;
