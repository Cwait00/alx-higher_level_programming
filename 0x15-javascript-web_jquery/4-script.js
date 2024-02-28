// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the DIV#toggle_header element using the jQuery API
    var toggleHeaderElement = $('#toggle_header');

    // Add a click event listener to the DIV#toggle_header element
    toggleHeaderElement.click(function() {
        // Select the <header> element using the jQuery API
        var headerElement = $('header');

        // Toggle the class of the <header> element between 'red' and 'green'
        headerElement.toggleClass('red green');
    });
});
