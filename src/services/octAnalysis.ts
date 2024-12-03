import { InferenceHTTPClient } from '@roboflow/inference-sdk';
import { OctAnalysisResult, AnalysisError } from '../types/oct';

const CLIENT = new InferenceHTTPClient({
  api_url: "https://detect.roboflow.com",
  api_key: "3ZCeCuVlxdGI5HGgvyL3"
});

export async function analyzeOctImage(imageFile: File): Promise<OctAnalysisResult> {
  try {
    const base64Image = await fileToBase64(imageFile);
    const result = await CLIENT.infer(base64Image, "oct_images-putms/1");
    return result as OctAnalysisResult;
  } catch (error) {
    console.error('Analysis error:', error);
    const analysisError: AnalysisError = {
      message: error instanceof Error ? error.message : 'Failed to analyze image',
      code: error instanceof Error ? error.name : 'UNKNOWN_ERROR'
    };
    throw analysisError;
  }
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String.split(',')[1]);
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}