
import React from 'react';
import { CircleDashed } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2] flex items-center justify-center overflow-hidden">
      <div className="relative">
        <div className="absolute inset-0 bg-red-200 rounded-full opacity-50 animate-ping"></div>
        <CircleDashed 
          size={400} 
          className="text-red-500 relative z-10 animate-pulse" 
          strokeWidth={1} 
        />
      </div>
    </div>
  );
};

export default Index;
