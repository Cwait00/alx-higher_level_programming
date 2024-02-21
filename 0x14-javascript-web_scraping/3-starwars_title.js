#!/usr/bin/node

const request = require('request');

const movieID = process.argv[2];

const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    const movieData = JSON.parse(body);
    console.log(movieData.title);
  }
});
