#!/usr/bin/node

const request = require('request');

// Get movie ID from command line arguments
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Function to fetch characters from the API and print them
function fetchAndPrintCharacters(apiUrl) {
    request(apiUrl, function (error, response, body) {
        if (error) {
            console.error('Error:', error);
        } else {
            const film = JSON.parse(body);
            console.log(`Characters from ${film.title}:`);
            film.characters.forEach(characterUrl => {
                request(characterUrl, function (error, response, body) {
                    if (error) {
                        console.error('Error:', error);
                    } else {
                        const characterData = JSON.parse(body);
                        console.log(characterData.name);
                    }
                });
            });
        }
    });
}

// Call the function to fetch and print characters
fetchAndPrintCharacters(apiUrl);
