// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the DIV#red_header element using the jQuery API
    var redHeaderElement = $('div#red_header');

    // Add a click event listener to the DIV#red_header element
    redHeaderElement.click(function() {
        // Select the <header> element using the jQuery API
        var headerElement = $('header');

        // Update the text color of the <header> element to red (#FF0000)
        headerElement.css('color', '#FF0000');
    });
});
