document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const messageInput = document.querySelector('#messageInput');
    const submitBtn = document.querySelector('#submitBtn');
    const displayRepo = document.querySelector('#displayRepo');

    if (!nameInput) console.warn('No element with id="nameInput" found. Check your HTML.');
    if (!emailInput) console.warn('No element with id="emailInput" found. Check your HTML.');
    if (!messageInput) console.warn('No element with id="messageInput" found. Check your HTML.');
    if (!submitBtn) console.warn('No element with id="submitBtn" found. Check your HTML.');
    if (!displayRepo) console.warn('No element with id="displayRepo" found. Check your HTML.');

    // Without this guard, missing elements only log a warning but execution continues.
    // Any missing element will cause a TypeError when the code below tries to call
    // .addEventListener() or access .style on null — crashing the entire script silently.
    // Returning early here stops that crash and lets the warn above tell you exactly what's missing.
    if (!nameInput || !emailInput || !messageInput || !submitBtn || !displayRepo) 
    return;

    dontShowRepo();

    function dontShowRepo() {
        try {
            displayRepo.style.visibility = "hidden";
            displayRepo.style.backgroundColor = "transparent";            
        } catch (error) {
            console.error('Error hiding displayRepo:', error);            
        }     
            
    }

    function showRepo() {
        try {
            displayRepo.style.visibility = "visible";
            displayRepo.style.backgroundColor = "rgba(0, 0, 0, 0.471)";
        } catch (error) {
            console.error('Error showing displayRepo:', error);
        }
        
    }

   
    
    document.addEventListener('click', (e) => {
        if (e.target.id === 'clearDisplayBtn') {
            dontShowRepo();
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
        }
    });

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();    

        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }        
        showRepo();
        displayRepo.innerHTML = `
            <h3>Submitted Information:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
            <button id="clearDisplayBtn">Clear Display</button>
        `;
        
        // Here you would typically send the data to a server, for example:
        /*
        fetch('https://your-server-endpoint.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error sending to server:', error);
        });
        */
        // Show a less intrusive notification
        let notification = document.createElement('div');
        notification.textContent = 'Message sent successfully!';
        notification.style.background = '#4caf50';
        notification.style.color = '#fff';
        notification.style.padding = '10px';
        notification.style.marginTop = '10px';
        notification.style.borderRadius = '4px';
        notification.style.textAlign = 'center';
        notification.style.transition = 'opacity 0.5s';
        notification.style.opacity = '1';
        submitBtn.parentNode.insertBefore(notification, submitBtn.nextSibling);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 2000);
    }); // End of submitBtn click handler

    // You can add more event listeners or functions below

});