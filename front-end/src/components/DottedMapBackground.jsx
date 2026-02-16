import React from 'react';
import { DottedMap } from './DottedMap';

const DottedMapBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center opacity-30">
      <DottedMap
        width={120}       
        height={60}       
        mapSamples={6000} 
        dotRadius={0.22}
        dotColor="#525252" 
        markerColor="#ffffff"
        stagger={true}
        markers={[
           { lat: -1.94, lng: 29.87, size: 0.8 } 
        ]}
        className="w-full max-w-7xl h-auto mt-10"
      />
      
      {/* Interactive Rwanda Marker */}
      <a 
        href="https://www.google.com/maps/place/Kigali,+Rwanda"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[63%] left-[53%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer z-50 group"
        title="Locate: Kigali, Rwanda"
      >
         {/* Ping Animation */}
         <div className="relative flex items-center justify-center w-6 h-6">
            <div className="absolute w-full h-full bg-white/30 rounded-full animate-ping"></div>
            <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] group-hover:scale-150 transition-transform duration-300"></div>
         </div>
      </a>
    </div>
  );
};

export default DottedMapBackground;