import React from 'react';

const features = [
  {
    icon: '🔍',
    title: 'Natural Language Search',
    description: 'Ask questions, get ocean data instantly with AI-powered understanding.',
    bgColor: 'bg-[#39a38d]',
  },
  {
    icon: '🌍',
    title: 'Global Data Coverage',
    description: 'Access real-time data from 2,800+ Argo floats worldwide.',
    bgColor: 'bg-[#1e88e5]',
  },
  {
    icon: '📊',
    title: 'Interactive Visualizations',
    description: 'Charts, maps, and 3D ocean layers for immersive exploration.',
    bgColor: 'bg-[#ff7043]',
  },
  {
    icon: '🧠',
    title: 'AI Insights',
    description: 'Detect anomalies, trends, and historical comparisons automatically.',
    bgColor: 'bg-[#a453f2]',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#0b1120] text-white py-12 px-5 text-center font-sans">
      <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1a233b] rounded-2xl p-8 w-64 max-w-full shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center"
          >
            <div className={`rounded-xl p-3 mb-6 w-14 h-14 flex items-center justify-center ${feature.bgColor}`}>
              <span className="text-3xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;