// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Make a GET request to fetch movie data from the URL
    $.get('https://swapi-api.alx-tools.com/api/films/?format=json', function(data) {
        // Extract movie titles from the response data
        var movies = data.results;

        // Iterate over the movie titles and append them to the UL#list_movies element
        $.each(movies, function(index, movie) {
            // Create a new <li> element for each movie title
            var listItem = $('<li></li>').text(movie.title);

            // Append the <li> element to the UL#list_movies element
            $('#list_movies').append(listItem);
        });
    });
});
