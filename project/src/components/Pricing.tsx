import React from 'react';
import PricingCard from './PricingCard';

const pricingData = [
  {
    name: 'Essentials',
    price: 0,
    features: [
      'Basic text translation',
      'Voice input & output',
      'File upload support',
      'Mobile-friendly interface',
      'Basic language pair support'
    ]
  },
  {
    name: 'Pro',
    price: 4,
    features: [
      'All Essentials features',
      'Contextual accuracy',
      'Real-time dialogue mode',
      'Offline access',
      'Smart translation suggestions',
      'Customizable tone & formality'
    ]
  },
  {
    name: 'Plus',
    price: 9,
    isPopular: true,
    features: [
      'All Pro features',
      'Pronunciation assistance',
      'Multi-voice translation',
      'Collaborative projects',
      'Language learning tools',
      'Advanced file format support'
    ]
  },
  {
    name: 'Premium',
    price: 14,
    features: [
      'All Plus features',
      'API integration',
      'AR translation',
      'Emergency translation mode',
      'Advanced security features',
      'Priority support'
    ]
  },
  {
    name: 'Elite',
    price: 19,
    features: [
      'All Premium features',
      'VR compatibility',
      'Gesture recognition',
      'Neural translation models',
      'Industry-specific models',
      'Custom AI tuning'
    ]
  }
];

export default function Pricing() {
  const handleSubscribe = (tier: string) => {
    // TODO: Implement payment processing
    console.log(`Subscribing to ${tier}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600">
            Get 20% off with annual billing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {pricingData.map((tier) => (
            <PricingCard
              key={tier.name}
              name={tier.name}
              price={tier.price}
              features={tier.features}
              isPopular={tier.isPopular}
              onSubscribe={() => handleSubscribe(tier.name)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600">
          <p>All plans include:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <span>24/7 Support</span>
            <span>99.9% Uptime</span>
            <span>SSL Security</span>
            <span>Regular Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}