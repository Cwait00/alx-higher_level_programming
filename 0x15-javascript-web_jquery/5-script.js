// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Select the DIV#add_item element using the jQuery API
    var addItemElement = $('#add_item');

    // Add a click event listener to the DIV#add_item element
    addItemElement.click(function() {
        // Create a new <li> element
        var newItem = $('<li></li>').text('Item');

        // Append the new <li> element to the <ul> with class 'my_list'
        $('ul.my_list').append(newItem);
    });
});
