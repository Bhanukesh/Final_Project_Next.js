import React from 'react';

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-black shadow-md hover:shadow-xl transition-all duration-300 border border-gray-900">
      <div className="mb-4 flex justify-center">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <svg 
            className="w-6 h-6 text-blue-600" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"  
          >
            <path d={icon} />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;