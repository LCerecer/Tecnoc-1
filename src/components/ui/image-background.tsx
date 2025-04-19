import React from 'react';

export function ImageBackground() {
  return (
    <div className="relative w-full min-h-screen p-5 md:p-8">
      <div 
        className="absolute inset-0 m-5 md:m-8 rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dy089iwsg/image/upload/v1745091813/1_ejelxa.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/10" /> {/* Subtle overlay for better text legibility */}
      </div>
      <div className="relative z-10 container mx-auto">
        {/* Content can be added here */}
      </div>
    </div>
  );
}