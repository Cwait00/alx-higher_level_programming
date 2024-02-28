// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Event listener for the Translate button click
    $('#btn_translate').click(function() {
        // Get the language code entered by the user
        var languageCode = $('#language_code').val();

        // Make a GET request to fetch the translation from the API
        $.get('https://www.fourtonfish.com/hellosalut/hello/',
		{ lang: languageCode }, function(data) {
            // Extract the translation from the response data
            var translation = data.hello;

            // Display the translation in the DIV#hello element
            $('#hello').text(translation);
        });
    });
});
