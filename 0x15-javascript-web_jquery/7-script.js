// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Make a GET request to fetch character data from the URL
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
        // Extract the character name from the response data
        var characterName = data.name;

        // Select the DIV#character element using the jQuery API and
	    // update its content with the character name
        $('#character').text(characterName);
    });
});
