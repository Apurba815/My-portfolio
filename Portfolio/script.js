// Show email on button click
const contactBtn = document.getElementById("contactBtn");
const messageDiv = document.getElementById("message");

contactBtn.addEventListener("click", function() {
    messageDiv.textContent = "You can contact me at: missapurba@example.com";
});
