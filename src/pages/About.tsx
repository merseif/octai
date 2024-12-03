import React from 'react';
import { Brain, Users, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Transforming eye care through advanced technology and accessible diagnostics
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Brain className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">AI Technology</h3>
              <p className="mt-2 text-base text-gray-500">
                Our advanced AI models are trained on extensive datasets to provide accurate analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Expert Team</h3>
              <p className="mt-2 text-base text-gray-500">
                Led by experienced professionals in AI and ophthalmology.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Global Impact</h3>
              <p className="mt-2 text-base text-gray-500">
                Making eye care accessible to people worldwide through technology.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Technology
          </h3>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-600 leading-relaxed">
              Our OCT analysis platform uses state-of-the-art deep learning models to analyze retinal OCT scans. 
              The system can detect various ocular conditions with high accuracy, providing quick and reliable results 
              to support healthcare professionals in their diagnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}