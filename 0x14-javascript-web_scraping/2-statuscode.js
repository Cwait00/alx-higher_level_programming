#!/usr/bin/node

const axios = require('axios');

// Check if the correct number of arguments are provided
if (process.argv.length !== 3) {
  console.error('Usage: ./2-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Make a GET request to the provided URL
axios.get(url)
  .then(response => {
    console.log(`code: ${response.status}`);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
