import React from 'react';
import { AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  type: 'success' | 'error';
  message: string;
}

export function StatusMessage({ type, message }: StatusMessageProps) {
  const styles = {
    success: {
      bg: 'bg-green-50',
      icon: 'text-green-400',
      text: 'text-green-800'
    },
    error: {
      bg: 'bg-red-50',
      icon: 'text-red-400',
      text: 'text-red-800'
    }
  };

  const currentStyle = styles[type];

  return (
    <div className={`mt-4 p-4 ${currentStyle.bg} rounded-md`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertCircle className={`h-5 w-5 ${currentStyle.icon}`} />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${currentStyle.text}`}>
            {message}
          </h3>
        </div>
      </div>
    </div>
  );
}