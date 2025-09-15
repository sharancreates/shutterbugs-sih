import React from 'react';
import worldMapImage from '../assets/image.png'; 

const LiveOceanData = () => {
  return (
    <div className="bg-[#0b1120] text-white py-12 px-5 text-center font-sans">
      <h2 className="text-4xl font-bold mb-12">Live Ocean Data</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-[#1a233b] rounded-2xl p-8 w-[450px] max-w-full shadow-2xl text-left">
          <h3 className="text-xl font-bold mb-6">Real-time ARGO Metrics</h3>
          <div className="flex justify-between flex-wrap gap-4 mb-8">
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-[#66d9ef]">12.4°C</span>
              <span className="text-sm text-gray-400">Avg Temperature</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-[#a6e22e]">34.7‰</span>
              <span className="text-sm text-gray-400">Salinity</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-3xl font-bold text-[#f92672]">2000m</span>
              <span className="text-sm text-gray-400">Depth Range</span>
            </div>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm text-white mr-4">Active Floats</span>
            <div className="flex-grow h-2 bg-[#2b354b] rounded-full overflow-hidden mr-4">
              <div className="h-full bg-[#66d9ef]" style={{ width: '80%' }}></div> 
            </div>
            <span className="text-sm font-bold">3,847</span>
          </div>
        </div>

        <div className="bg-[#1a233b] rounded-2xl p-5 w-[600px] max-w-full shadow-2xl flex justify-center items-center overflow-hidden">
          <img src={worldMapImage} alt="World Map with Data Points" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default LiveOceanData;