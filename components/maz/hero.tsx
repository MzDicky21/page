import React from 'react';

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
  overlay?: boolean;
  backgroundImage?: string;
  minHeight?: string;
}

export const Mhero: React.FC<HeroProps> = ({
  className = '',
  children,
  overlay = false,
  backgroundImage,
  minHeight = 'min-h-screen'
}) => {
  return (
    <div
      className={`hero ${minHeight} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {overlay && (
        <div className="hero-overlay bg-black bg-opacity-60"></div>
      )}
      <div className="hero-content text-center z-10">
        {children}
      </div>
    </div>
  );
};

interface HeroContentProps {
  children: React.ReactNode;
  className?: string;
}

export const MheroContent: React.FC<HeroContentProps> = ({ children, className = '' }) => (
  <div className={`max-w-md ${className}`}>
    {children}
  </div>
);


<code>{`// Simple Hero
<div className="min-h-screen bg-blue-600 
                flex items-center justify-center">
  <div className="text-center text-white px-6">
    <h1 className="text-7xl font-bold mb-6">Your Title</h1>
    <p className="text-2xl mb-8">Your subtitle</p>
    <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg">
      Get Started
    </button>
  </div>
</div>

// Hero with Background Image
<div className="min-h-screen" style={{
  backgroundImage: 'url(...)',
  backgroundSize: 'cover'
}}>
  <div className="text-center text-white">
    <h1>Your Title</h1>
  </div>
</div>

// Split Content Hero
<div className="min-h-screen bg-white">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
    <div>
      <h1>Your Title</h1>
      <p>Your description</p>
    </div>
    <div>
      {/* Image or content */}
    </div>
  </div>
</div>`}</code>
