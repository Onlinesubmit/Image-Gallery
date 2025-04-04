function changeColor(event) {
    event.target.style.color = 'red'; // Change color on mouse over
}

// Function to reset the color of the navigation links on mouse out
function resetColor(event) {
    event.target.style.color = 'beige'; // Reset color on mouse out
}

// Add event listeners to all navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a'); // Select all navigation links

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', changeColor); // Change color on mouse over
        link.addEventListener('mouseout', resetColor); // Reset color on mouse out
    });
});