document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const name = document.getElementById("userName").value;  // Get the name entered by the user
    const formData = new FormData(this);  // Get all form data

    // Display the welcome message
    const welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `धन्यवाद, ${name}! सर्भेमा सहभागी हुनु भएकोमा धेरै धेरै धन्यवाद। यो डाटा सुरक्षित रहनेछ।`;

    // Send the form data to Formspree
    fetch("https://formspree.io/f/xnqekgaa", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
    .then((response) => {
        if (response.ok) {
            welcomeMessage.textContent += " तपाईंको जवाफ सफलतापूर्वक पठाइयो।";
        } else {
            welcomeMessage.textContent += " क्षमा गर्नुहोस्, केही समस्या भयो। कृपया पुनः प्रयास गर्नुहोस्।";
        }
    })
    .catch(() => {
        welcomeMessage.textContent += " क्षमा गर्नुहोस्, केही समस्या भयो। कृपया पुनः प्रयास गर्नुहोस्।";
    });
});