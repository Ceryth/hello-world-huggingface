// src/utils/modelUtils.js
import * as tf from '@tensorflow/tfjs';

export const loadModel = async (modelUrl) => {
  const model = await tf.loadLayersModel(modelUrl);
  return model;
};

export const predictFromModel = async (model, input) => {
  const inputTensor = tf.tensor2d([input]);
  const prediction = model.predict(inputTensor);
  return prediction.arraySync();
};
