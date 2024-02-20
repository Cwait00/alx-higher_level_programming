#!/usr/bin/node

// Import required modules
const request = require('request');
const fs = require('fs');

// Function to fetch webpage content and store it in a file
function requestAndStore(url, filePath) {
    // Make a request to the provided URL
    request(url, function(error, response, body) {
        // Handle errors, if any
        if (error) {
            console.error(`Error fetching ${url}:`, error);
            process.exit(1); // Exit with a non-zero status code to indicate failure
        }
        
        // Check if the request was successful
        if (response.statusCode !== 200) {
            console.error(`Failed to fetch ${url}. Status code: ${response.statusCode}`);
            process.exit(1); // Exit with a non-zero status code to indicate failure
        }

        // Write the fetched content to the specified file
        fs.writeFile(filePath, body, 'utf-8', function(err) {
            // Handle write errors, if any
            if (err) {
                console.error(`Error writing to ${filePath}:`, err);
                process.exit(1); // Exit with a non-zero status code to indicate failure
            }
            
            console.log(`Contents of ${url} successfully saved to ${filePath}`);
        });
    });
}

// Check if the correct number of arguments are provided
if (process.argv.length !== 4) {
    console.error('Usage: ./5-request_store.js <URL> <file-path>');
    process.exit(1); // Exit with a non-zero status code to indicate failure
}

// Extract URL and file path from command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Call the function to fetch webpage content and store it in a file
requestAndStore(url, filePath);
