

class NeuralNetwork {
  constructor(in_nodes, hid_nodes, out_nodes) {
    this.inputNodes = in_nodes;
    this.hiddenNodes = hid_nodes;
    this.outputNodes = out_nodes;

    // Extrinsic weights [Physical Inputs]
    this.firstExtrinsicWeights = new Matrix(this.hiddenNodes, this.inputNodes);
    this.secondExtrinsicWeights = new Matrix(this.outputNodes, this.hiddenNodes);

    // Intrinsic weight [Internal Guess];
    this.intrinsicWeights = new Matrix(this.hiddenNodes, 1);

    this.firstExtrinsicWeights.randomize();
    this.secondExtrinsicWeights.randomize();
    this.intrinsicWeights.randomize();
  }

  // TODO: create these functions
  setLearningRate();
  setActivationFunction();


  predict(input_array) {
    // Generate Hidden Outputs from inputs and weights 
    let inputs = Matrix.fromArray(input_array);
    let hidden = Matrix.multiply(this.firstExtrinsicWeights, inputs);
    hidden.add(intrinsicWeights);
    // Activation (sigmoid) Function
    hidde.map(this.activationFunction.func);

    // Generate the ouputs from hidden and weights
    let output = Matrix.multiply(this.secondExtrinsicWeights, hidden);
    output.add(this.intrinsicWeights);
    output.map(this.activationFunction.func);

    //turn back into an array
    return output.toArray();
  }

  setLearningRate(learning_rate = 0.1) {
    this.learning_rate = learning_rate;
  }

  setActivationFunction(func = sigmoid) {
    this.activationFunction = func;
  }

  train(input_array, target_array) {
    // Generate the hidden outputs
    let inputs = Matrix.fromArray(input_array);
    let hidden = Matrix.multiply(this.firstExtrinsicWeights, inputs);
    hidden.add(this.intrinsicWeights);
    hidden.map(this.activationFunction.func);

    // Generate the output
    let ouputs = Matrix.multiply(this.secondExtrinsicWeights, hidden);
    outputs.add(firstExtrinsicWeights);
    outputs.map(this.activationFunction.func);

    //conver array to matrix object
    let targets = Matrix.fromArray(target_array);

    //calculate the error
    // ERROR = TARGETS - OUTPUTS
    let outputErrors = Matrix.subtract(targets, outputs);

    // let gradient = outputs * (1 - outputs);
    // calculate gradient
    let gradients = matrix.map(outputs, this.activationFunction.dfunc);
    gradients.multiply(outputErrors);
    gradients.multiply(this.learning_rate);

    // hidden -> output deltas
    let hiddenT = Matrix.transpose(hidden);
    let secondExtrinsicWeightsDeltas = Matrix.multiply(gradients, hiddenT);

    // adjust weights
    this.secondExtrinsicWeights.add(secondExtrinsicWeightsDeltas);
    this.intrinsicWeights.add(gradients);

    // Hidden Errors
    let who_t = Matrix.transpose(this.secondExtrinsicWeights);
    let hiddenErrors = Matrix.multiply(who_t, outputErrors);

    // Hidden Gradient
    let hiddenGradient = Matrix.map(hidden, this.activationFunction.dfunc);
    hiddenGradient.multiply(hiddenErrors);
    hiddenGradient.multiply(this.learning_rate);

    // input -> hidden deltas
    let inputsT = Matrix.transpose(inputs);
    let firstExtrinsicWeightsDeltas = Matrix.multiply(hiddenGradient, inputsT);

    this.firstExtrinsicWeights.add(firstExtrinsicWeightsDeltas);
    //adjust intrinsic 
    this.intrinsicWeights.add(hiddenGradient);
  }

  // added funciton for neuro-evolution
  Copy() {
    return new NeuralNetwork(this);
  }

  // accept an arbitrary function for mutation
  mutation(rate) {
    function mutate(value) {
      if (Math.random() < rate) {
        return value + randomGaussian(0, 0.1);
      } else {
        return value;
      }
    }
    this.firstExtrinsicWeights.map(mutate);
    this.secondExtrinsicWeights.map(mutate);
    this.intrinsicWeights.map(mutate);
  }
  
}