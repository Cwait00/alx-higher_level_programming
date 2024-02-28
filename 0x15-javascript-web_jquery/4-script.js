// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the DIV#toggle_header element using the jQuery API
    var toggleHeaderElement = $('#toggle_header');

    // Add a click event listener to the DIV#toggle_header element
    toggleHeaderElement.click(function() {
        // Select the <header> element using the jQuery API
        var headerElement = $('header');

        // Check if the header has the class 'red'
        if (headerElement.hasClass('red')) {
            // Toggle class: remove 'red', add 'green'
            headerElement.removeClass('red').addClass('green');
        } else {
            // Toggle class: remove 'green', add 'red'
            headerElement.removeClass('green').addClass('red');
        }
    });
});
