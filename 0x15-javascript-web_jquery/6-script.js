// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the DIV#update_header element using the jQuery API
    var updateHeaderElement = $('#update_header');

    // Add a click event listener to the DIV#update_header element
    updateHeaderElement.click(function() {
        // Select the <header> element using the jQuery API
        var headerElement = $('header');

        // Update the text content of the <header> element
        headerElement.text('New Header!!!');
    });
});
