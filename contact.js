document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const messageInput = document.querySelector('#messageInput');
    const submitBtn = document.querySelector('#submitBtn');
    const displayRepo = document.querySelector('#displayRepo');
    
    document.addEventListener('click', (e) => {
        if (e.target.id === 'clearDisplayBtn') {
            displayRepo.innerHTML = '';
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });

    submitBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();    

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        displayRepo.innerHTML = `
            <h3>Submitted Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <button id="clearDisplayBtn">Clear Display</button>
        `;
        
        // Here you would typically send the data to a server
        console.log({ name, email, message });
        alert('Message sent successfully!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    });
});