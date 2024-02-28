// Ensure the script is executed only after the DOM has loaded
$(document).ready(function() {
    // Event listener for adding item
    $('#add_item').click(function() {
        // Create a new <li> element with text "Item"
        var newItem = $('<li>Item</li>');

        // Append the new <li> element to the UL.my_list
        $('ul.my_list').append(newItem);
    });

    // Event listener for removing item
    $('#remove_item').click(function() {
        // Select the last <li> element in the UL.my_list and remove it
        $('ul.my_list li:last-child').remove();
    });

    // Event listener for clearing the list
    $('#clear_list').click(function() {
        // Empty the UL.my_list by removing all its children
        $('ul.my_list').empty();
    });
});
