// Initialize EmailJS with your public key
(function(){
    emailjs.init("l4ie0_7G4uiVGZh-x"); // Your EmailJS public key
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;

    // Send the email using EmailJS
    emailjs.sendForm('service_vviyf3q', 'template_lpk3gvt', form)
        .then(function(response) {
            document.getElementById('response').innerHTML = "Message sent successfully!";
            console.log('SUCCESS!', response.status, response.text);
            form.reset(); // Reset form fields after submission
        }, function(error) {
            document.getElementById('response').innerHTML = "Failed to send message. Please try again.";
            console.log('FAILED...', error);
        });
});
