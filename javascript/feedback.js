document.addEventListener("DOMContentLoaded", function() {
    // Form submission event listener
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Simulate form submission
        let formData = new FormData(this);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "submit.php"); // Change the action URL to your PHP file
        xhr.send(formData);

        // Reset form fields after submission (optional)
        this.reset();
    });
});
