const spec20Processor = require('./spec20Processor');

const specProcessorFactory = spec => {
  console.log(spec)
  console.log(spec.definitions)
  if (spec.swagger === '2.0') {
    return spec20Processor;
  }

  throw new Error(`Unsupported spec ${spec.swagger}`);
};

module.exports = specProcessorFactory;