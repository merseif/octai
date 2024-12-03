import React from 'react';
import { Upload } from 'lucide-react';

interface FileDropzoneProps {
  dragActive: boolean;
  onDrag: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FileDropzone({ dragActive, onDrag, onDrop, onChange }: FileDropzoneProps) {
  return (
    <div
      className={`relative border-2 border-dashed rounded-lg p-12 text-center ${
        dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onDragEnter={onDrag}
      onDragLeave={onDrag}
      onDragOver={onDrag}
      onDrop={onDrop}
    >
      <input
        type="file"
        className="hidden"
        id="file-upload"
        accept="image/*"
        onChange={onChange}
      />
      
      <div className="space-y-4">
        <div className="flex justify-center">
          <Upload className="h-12 w-12 text-gray-400" />
        </div>
        <div className="text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500"
          >
            <span>Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={onChange}
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
      </div>
    </div>
  );
}