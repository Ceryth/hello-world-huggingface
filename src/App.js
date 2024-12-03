// src/components/App.js
import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const App = () => {
  const [message, setMessage] = useState("Loading...");
  const donationAddress = "0xb11cE69dd74B263c9FEC3f2fa9ad47a170Fe9ec5e";

  useEffect(() => {
    const generateMessage = async () => {
      try {
        // Load TensorFlow model (modify the URL to your model)
        const model = await tf.loadLayersModel(
          "https://storage.googleapis.com/tfjs-models/tfjs/iris_v1/model.json"
        );

        // Create example input for the model
        const inputTensor = tf.tensor2d([[5.1, 3.5, 1.4, 0.2]]);
        const prediction = model.predict(inputTensor);
        const outputData = prediction.arraySync()[0];

        // Format the output as a message
        const outputMessage = `Lucky Number ${outputData}`;
        setMessage(outputMessage || "Hello, World!");
      } catch (error) {
        console.error("Error generating message:", error);
        setMessage("Hello, World! (Fallback)");
      }
    };

    generateMessage();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{message}</h1>
      <p>
        If you enjoy this project, consider donating Ethereum: <br />
        <strong>{donationAddress}</strong>
      </p>
    </div>
  );
};

export default App;
