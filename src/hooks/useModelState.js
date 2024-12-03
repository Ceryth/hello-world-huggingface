// src/hooks/useModelState.js
import { useState, useEffect } from 'react';
import { loadModel, predictFromModel } from '../utils/modelUtils';

const useModelState = (modelUrl, input) => {
  const [output, setOutput] = useState("Loading...");

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const model = await loadModel(modelUrl);
        const prediction = await predictFromModel(model, input);
        setOutput(prediction);
      } catch (error) {
        console.error("Error in prediction:", error);
        setOutput("Error loading model");
      }
    };

    fetchPrediction();
  }, [modelUrl, input]);

  return output;
};

export default useModelState;
