// Make a GET request to fetch the translation of "hello" from the URL
$.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
    // Extract the translation of "hello" from the response data
    var helloTranslation = data.hello;

    // Select the DIV#hello element using the jQuery API and update its content with the translation
    $('#hello').text(helloTranslation);
});
