// Load our saved model from current directory (which will be
// hosted via Firebase Hosting)
async function predict() {
  // Relative URL provided for my-model.json.
  const model = await tf.loadLayersModel('my-model.json');
  // Once model is loaded, let's try using it to make a prediction!
  // Print to developer console for now.
  model.predict(tf.tensor2d([[1337]])).print();
}

predict();