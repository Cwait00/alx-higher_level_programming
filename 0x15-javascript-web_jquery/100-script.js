// Ensure the script is executed only after the DOM has loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the <header> element using document.querySelector
    var headerElement = document.querySelector('header');

    // Update the text color of the <header> element to red (#FF0000)
    headerElement.style.color = '#FF0000';
});
