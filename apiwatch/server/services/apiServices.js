const axios = require('axios');

async function runTests(testCase) {
  const results = [];
    try {
      const response = await axios(testCase);
      results.push({ testCase, status: response.status });
    } catch (error) {
      results.push({ testCase, status: 'error', message: error.message });
    }
  console.log("=====",results,testCase)
  return results;
}

module.exports = { runTests };
