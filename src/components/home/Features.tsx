import React from 'react';
import { Brain, Clock, Shield, Award } from 'lucide-react';

const features = [
  {
    name: 'Advanced AI Technology',
    description: 'Powered by state-of-the-art deep learning models trained on extensive OCT datasets.',
    icon: Brain,
  },
  {
    name: 'Rapid Analysis',
    description: 'Get instant results with our high-performance image processing system.',
    icon: Clock,
  },
  {
    name: 'Secure & Private',
    description: 'Your data is protected with enterprise-grade security and encryption.',
    icon: Shield,
  },
  {
    name: 'Clinically Validated',
    description: 'Tested and validated by leading ophthalmologists worldwide.',
    icon: Award,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose OctAI?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform combines cutting-edge technology with clinical expertise to deliver accurate and reliable OCT analysis.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}