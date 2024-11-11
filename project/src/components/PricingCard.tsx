import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  onSubscribe: () => void;
}

export default function PricingCard({ name, price, features, isPopular, onSubscribe }: PricingCardProps) {
  const annualPrice = Math.floor(price * 12 * 0.8);
  
  return (
    <div className={`relative bg-white rounded-2xl p-8 border transition-shadow hover:shadow-xl ${
      isPopular ? 'border-indigo-600 shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      
      <div className="mb-6">
        {price === 0 ? (
          <span className="text-4xl font-bold">Free</span>
        ) : (
          <div>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">${price}</span>
              <span className="text-gray-600 ml-2">/month</span>
            </div>
            <p className="text-sm text-indigo-600 mt-1">
              ${annualPrice}/year when billed annually (20% off)
            </p>
          </div>
        )}
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={onSubscribe}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          isPopular
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {price === 0 ? 'Get Started' : 'Subscribe Now'}
      </button>
    </div>
  );
}