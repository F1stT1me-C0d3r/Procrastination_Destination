document.addEventListener("DOMContentLoaded", function() {
    const popUps = document.querySelectorAll('[id="popUp"]');
    const openBtn = document.querySelectorAll('[id="OpenBtn"]');
    const closeBtns = document.querySelectorAll('[id="closeBtn"]');

    // querySelectorAll never throws — it returns an empty NodeList silently.
    // These warnings surface mismatches between this script and the HTML early,
    // so a typo or renamed element doesn't cause invisible, click-does-nothing bugs.
    if (popUps.length === 0) console.warn('[about.js] No elements with id="popUp" found. Check your HTML.');
    if (openBtn.length === 0) console.warn('[about.js] No elements with id="OpenBtn" found. Popups will not open.');
    if (closeBtns.length === 0) console.warn('[about.js] No elements with id="closeBtn" found. Popups cannot be closed.');

    // IDs are supposed to be unique in HTML. Having more than one element share
    // the same id is invalid and can cause unpredictable behavior across browsers.
    // This warns you to switch to a class attribute instead.
    if (popUps.length > 1) console.warn(`[about.js] ${popUps.length} elements share id="popUp". IDs must be unique — use a class instead.`);

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
            // try/catch here catches any runtime errors thrown inside the click handler
            // (e.g. a popup element being unexpectedly removed from the DOM between page
            // load and the click). Without it, one bad click silently breaks the handler.
            try {
                popUps.forEach(popUp => {
                    popUp.style.visibility = "visible";
                    popUp.style.position = "relative";
                    popUp.style.top = "0";
                    popUp.style.left = "0";
                });
                // Fixed: `bottom` is not a valid scrollBy option — it was silently ignored.
                // Valid options are `top`, `left`, and `behavior`. Using `top` scrolls downward.
                window.scrollBy({ top: window.innerHeight * 1, behavior: 'smooth' });
            } catch (err) {
                console.error('[about.js] Error showing popup:', err);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Same pattern as the open handler — guards against unexpected DOM errors
            // so a failed close doesn't leave the popup stuck open with no way out.
            try {
                displayPopup();
            } catch (err) {
                console.error('[about.js] Error hiding popup:', err);
            }
        });
    });
});
