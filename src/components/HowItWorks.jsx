import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Ask a Question',
    description: 'Simply type your ocean data query in natural language',
    bgColor: 'bg-[#37b8ea]', // Blue
  },
  {
    number: 2,
    title: 'AI Understands Your Intent',
    description: 'Advanced NLP processes your query and determines data requirements',
    bgColor: 'bg-[#8c6af2]', // Purple
  },
  {
    number: 3,
    title: 'Data Retrieved from ARGO API',
    description: 'Real-time data fetched from global ARGO float network',
    bgColor: 'bg-[#ff8c42]', // Orange
  },
  {
    number: 4,
    title: 'Visualization Generated',
    description: 'Interactive charts, maps, and insights delivered instantly',
    bgColor: 'bg-[#cc42ff]', // Pink/Purple
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#0b1120] text-white py-20 px-4 font-sans">
      <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-6">
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${step.bgColor}`}
            >
              {step.number}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;