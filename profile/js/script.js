// Wait for the entire HTML document to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the form and the message element
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('form-message');

    // Add an event listener for the form's submit event
    contactForm.addEventListener('submit', (event) => {
        // Prevent the default form submission (which reloads the page)
        event.preventDefault();

        // Clear any previous messages
        formMessage.textContent = '';
        formMessage.className = 'form-status';

        // Get the values from the form fields and trim whitespace
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // --- Validation Logic ---
        if (name === '' || email === '' || message === '') {
            // If any field is empty, show an error
            showFormMessage('Please fill out all fields.', 'error');
            return; // Stop the function
        }

        if (!isValidEmail(email)) {
            // If the email is not valid, show an error
            showFormMessage('Please enter a valid email address.', 'error');
            return; // Stop the function
        }

        // --- Success Logic ---
        // If all validation passes, show a success message
        showFormMessage('Thank you! Your message has been sent.', 'success');

        // Reset the form fields after successful submission
        contactForm.reset();
    });

    /**
     * Helper function to display a message to the user.
     * @param {string} message - The message to display.
     * @param {string} type - 'success' or 'error' to control styling.
     */
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.classList.add(type);
    }

    /**
     * Helper function to validate an email address using a simple pattern.
     * @param {string} email - The email address to validate.
     * @returns {boolean} - True if the email is valid, false otherwise.
     */
    function isValidEmail(email) {
        // A simple regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});