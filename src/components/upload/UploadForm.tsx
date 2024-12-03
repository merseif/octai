import React, { useState } from 'react';
import { Loader } from 'lucide-react';
import { analyzeOctImage } from '../../services/octAnalysis';
import { FileDropzone } from './FileDropzone';
import { AnalysisResult } from './AnalysisResult';
import { StatusMessage } from '../shared/StatusMessage';
import { OctAnalysisResult, AnalysisError } from '../../types/oct';

export function UploadForm() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OctAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files?.[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files?.[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setResult(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);
    try {
      const analysisResult = await analyzeOctImage(file);
      setResult(analysisResult);
    } catch (err) {
      const analysisError = err as AnalysisError;
      setError(analysisError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Upload OCT Image</h1>
        <p className="mt-2 text-gray-600">Upload your OCT image for instant analysis</p>
      </div>

      <FileDropzone
        dragActive={dragActive}
        onDrag={handleDrag}
        onDrop={handleDrop}
        onChange={handleChange}
      />

      {file && (
        <StatusMessage
          type="success"
          message={`File selected: ${file.name}`}
        />
      )}

      {error && (
        <StatusMessage
          type="error"
          message={error}
        />
      )}

      {result && <AnalysisResult result={result} />}

      <div className="mt-6">
        <button
          type="button"
          disabled={!file || loading}
          onClick={handleAnalyze}
          className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            file && !loading ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>
              <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Analyzing...
            </>
          ) : (
            'Analyze Image'
          )}
        </button>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-medium text-gray-900">Guidelines</h3>
        <ul className="mt-4 space-y-3 text-sm text-gray-600">
          <li>• Image must be a clear OCT scan</li>
          <li>• Supported formats: JPEG, PNG</li>
          <li>• Maximum file size: 10MB</li>
          <li>• Higher resolution images yield better results</li>
        </ul>
      </div>
    </div>
  );
}