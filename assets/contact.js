document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send the data using EmailJS
    emailjs.send("service_D0Mshj", "template_nggvnqb", formData)
        .then(function(response) {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('There was an error sending your message. Please try again.');
            console.error('Error:', error);
        });

});

