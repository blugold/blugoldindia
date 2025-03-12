// Get DOM elements
const modal = document.getElementById("popup-modal");
const closeModal = document.querySelector(".close-modal");
const form = document.getElementById("quote-form");
const loadingSpinner = document.getElementById("loading-spinner");

// Function to show the modal
function showModal(message) {
    document.getElementById("modal-message").innerText = message;
    modal.style.display = "flex"; // Show the modal
}

// Function to hide the modal
function hideModal() {
    modal.style.display = "none"; // Hide the modal
}

// Close the modal when the close button is clicked
closeModal.addEventListener("click", hideModal);

// Close the modal when clicking outside the modal
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        hideModal();
    }
});

// Handle form submission
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Show loading spinner
    loadingSpinner.style.display = "block";

    // Get form data
    const formData = new FormData(this);

    // Send data using Fetch API
    fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                showModal("Message received! We will contact you soon."); // Show success modal
                form.reset(); // Clear the form
            } else {
                showModal("Oops! Something went wrong. Please try again."); // Show error modal
            }
        })
        .catch((error) => {
            showModal("Oops! Something went wrong. Please try again."); // Show error modal
        })
        .finally(() => {
            loadingSpinner.style.display = "none"; // Hide loading spinner
        });
});