// components/FeaturesSection.tsx
import React from 'react';

const features = [
  { title: "Unlimited access to Raw materials & Staples", description: "Coming soon..." },
  { title: "Be the smartest shop of your area", description: "Coming soon..." },
  { title: "Hassle free delivery", description: "Coming soon..." },
  { title: "Get the best quality delivered", description: "Coming soon..." },
];

const FeaturesSection: React.FC = () => (
  <section className="py-12 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-start">
      <h2 className="text-4xl font-black mb-4 text-black">Why Dukkanpe?</h2>
      <p className="text-gray-600 mb-8">
        Access to the best local quality raw materials & ration. Get the delivery on time. Be the
        best local shops, all in your place. We deliver so that you can focus on your business.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 flex flex-col gap-4 p-4 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <img src={`/feature-${index + 1}.png`} alt={feature.title} className="w-full h-auto" />
            <h3 className="font-semibold text-black">{feature.title}</h3>
            <p className="text-gray-500">{feature.description}</p>
            </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
