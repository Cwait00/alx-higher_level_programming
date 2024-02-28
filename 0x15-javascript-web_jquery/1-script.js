// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the <header> element using the jQuery API
    var headerElement = $('header');

    // Update the text color of the <header> element to red (#FF0000)
    headerElement.css('color', '#FF0000');
});
