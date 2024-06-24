document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });

    // Image Upload Preview
    const fileInput = document.getElementById('fileInput');
    const previewContainer = document.querySelector('.preview');

    fileInput.addEventListener('change', function () {
        previewContainer.innerHTML = ''; // Clear previous previews

        const files = fileInput.files;
        for (const file of files) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imgElement = document.createElement('img');
                imgElement.src = e.target.result;
                imgElement.classList.add('preview-image');
                previewContainer.appendChild(imgElement);
            };

            reader.readAsDataURL(file);
        }
    });

    // Product Search Functionality
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const products = document.querySelectorAll(".product-card");

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        products.forEach(function (product) {
            const productName = product.querySelector(".product-name").textContent.toLowerCase();

            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    searchButton.addEventListener("click", performSearch);

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Example of adding user statuses dynamically
    const users = document.querySelectorAll('.user');
    users.forEach(user => {
        const isOnline = user.getAttribute('data-online') === 'true';
        const statusDot = user.querySelector('.status-dot');
        if (isOnline) {
            statusDot.classList.add('online');
            statusDot.classList.remove('offline');
        } else {
            statusDot.classList.add('offline');
            statusDot.classList.remove('online');
        }

        // Handle user click
        user.addEventListener('click', () => {
            const username = user.getAttribute('data-username');
            selectUser(username);
        });
    });

    // Function to select a user (currently basic)
    function selectUser(username) {
        // Highlight the selected user (optional)
        // Implement logic to display messages for the selected user (optional)
    }

    // Function to send a message
    document.getElementById('chat-send-button').addEventListener('click', sendMessage);
    document.getElementById('chat-input-field').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        var inputField = document.getElementById('chat-input-field');
        var message = inputField.value.trim();
        if (message) {
            var chatBox = document.getElementById('chat-box');
            var newMessage = document.createElement('p');
            newMessage.textContent = message;

            // Add classes for message styling based on sender
            if (Math.random() < 0.5) {
                // Example: own message (randomly assigned)
                newMessage.classList.add('own-message');
                newMessage.innerHTML = `<strong>You:</strong> ${message}`;
            } else {
                // Example: other's message
                newMessage.innerHTML = `<img src="images/user1.png" class="message-user-img"> <strong>User 1:</strong> ${message}`;
            }

            chatBox.appendChild(newMessage);
            inputField.value = '';
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }
});

// JavaScript for image preview
const input = document.getElementById('product-image');
const preview = document.getElementById('preview');

input.addEventListener('change', function() {
    preview.innerHTML = ''; // Clear previous previews

    const files = this.files;
    if (files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.classList.add('preview-image');
                    preview.appendChild(img);
                };
                reader.readAsDataURL(file);
            }
        });
    }
});
