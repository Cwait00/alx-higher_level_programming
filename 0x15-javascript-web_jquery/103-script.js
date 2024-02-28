// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Function to fetch translation when Enter key is pressed
    $('#language_code').keypress(function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.which === 13) {
            fetchTranslation();
        }
    });

    // Event listener for the Translate button click
    $('#btn_translate').click(function() {
        fetchTranslation();
    });

    // Function to fetch translation from API
    function fetchTranslation() {
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
    }
});
