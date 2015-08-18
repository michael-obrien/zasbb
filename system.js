// Define the system topology here. The topolgy should reference
// containers defined in definitions/services.js

exports.name = 'zasbb';
exports.namespace = 'zasbb';
exports.id = 'c83ad36a-185d-4845-b6ca-11ef185ac009';

exports.topology = {
  development: {
    root: ['dir', 'mpost', 'gthread', 'glayout', 'gtlist', 'gnews', 'web']
  },
  process: {
    root: ['dir', 'mpost', 'gthread', 'glayout', 'gtlist', 'gnews', 'web']
  }
};
