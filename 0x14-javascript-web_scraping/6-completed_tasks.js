#!/usr/bin/node

// Import the required module
const request = require('request');

// Function to compute the number of completed tasks by user id
function countCompletedTasks(url) {
    // Make a request to the provided API URL
    request(url, function(error, response, body) {
        // Handle errors, if any
        if (error) {
            console.error('Error:', error);
            return;
        }

        // Parse the JSON response
        const todos = JSON.parse(body);

        // Create an object to store the count of completed tasks for each user id
        const completedTasksByUser = {};

        // Iterate through the todos to count completed tasks by user id
        todos.forEach(todo => {
            // Check if the task is completed
            if (todo.completed) {
                // Increment the count of completed tasks for the user id
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the result
        console.log(completedTasksByUser);
    });
}

// Check if the correct number of arguments are provided
if (process.argv.length !== 3) {
    console.error('Usage: ./6-completed_tasks.js <API URL>');
    process.exit(1); // Exit with a non-zero status code to indicate failure
}

// Extract the API URL from the command line argument
const apiUrl = process.argv[2];

// Call the function to compute the number of completed tasks by user id
countCompletedTasks(apiUrl);
