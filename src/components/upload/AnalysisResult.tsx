import React from 'react';
import { OctAnalysisResult } from '../../types/oct';

interface AnalysisResultProps {
  result: OctAnalysisResult;
}

export function AnalysisResult({ result }: AnalysisResultProps) {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Analysis Results</h3>
      <div className="space-y-4">
        {result.predictions.map((prediction, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">{prediction.class}</span>
              <span className="text-sm text-gray-500">
                {(prediction.confidence * 100).toFixed(2)}% confidence
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              <p>Location: {prediction.bbox.x}, {prediction.bbox.y}</p>
              <p>Size: {prediction.bbox.width}x{prediction.bbox.height}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}