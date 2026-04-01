document.addEventListener("DOMContentLoaded", function() {
    const popUps = document.querySelectorAll('[id="popUp"]');
    const openBtn = document.querySelectorAll('[id="OpenBtn"]');
    const closeBtns = document.querySelectorAll('[id="closeBtn"]');

    function displayPopup() {
        popUps.forEach(popup => {
            popup.style.visibility = "hidden";
            popup.style.position = "absolute";
            popup.style.top = "-999999px";
            popup.style.left = "-999999px";
        });
    }

    displayPopup();

    openBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            popUps.forEach(popUp => {                
                popUp.style.visibility = "visible";
                popUp.style.position = "relative";
                popUp.style.top = "0";
                popUp.style.left = "0";
                window.scrollBy({ bottom: window.innerHeight * 0.8, behavior: 'smooth' });
            });
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            displayPopup();
        });
    });
});
