export interface OctAnalysisResult {
  predictions: Array<{
    class: string;
    confidence: number;
    bbox: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  }>;
  image: {
    width: number;
    height: number;
  };
}

export interface AnalysisError {
  message: string;
  code?: string;
}