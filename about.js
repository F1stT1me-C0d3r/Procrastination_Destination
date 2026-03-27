document.addEventListener("DOMContentLoaded", function() {
    const popUp = document.getElementById("popUp");
    const bagyClick = document.getElementById("bagyClick");
    const shfyClick = document.getElementById("shfyClick");
    const comenClick = document.getElementById("comenClick");
    const satierClick = document.getElementById("satierClick");

    popUp.addEventListener("click", (e) => {
        if (e.target.id === bagyClick.id || e.target.id === shfyClick.id || e.target.id === comenClick.id || e.target.id === satierClick.id) {
            popUp.style.display = "grid";
            popUp.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            popUp.style.border = "none";
            popUp.style.borderRadius = "10px";
            popUp.style.padding = "20px";
            popUp.style.color = "#fff";
            popUp.style.textAlign = "center";
            popUp.style.fontSize = "1.2em";
            popUp.style.zIndex = "1000";
            popUp.style.position = "fixed";
            popUp.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";}
    });

    babyClick.addEventListener("click", () => {
        popUp.innerHTML = "<h4>E'Vill Bagy</h4><p>Mr. Bagy serves as Horizon’s Director of Corporate Affairs, leading external engagement efforts, guiding corporate governance, and aligning the company’s strategic objectives with its public commitments.</p><button id='closeBtn' class='buttonID'>Close</button>";
    });
    shfyClick.addEventListener("click", () => {
        popUp.innerHTML = "<h4>Shf'yeir Vandou</h4><p>Mrs. Vandou, recently married to Director Satier Vandou, is a public and media relations specialist who supports the organization’s corporate communication efforts and strengthens its external visibility.</p><button id='closeBtn' class='buttonID'>Close</button>";
    });
    comenClick.addEventListener("click", () => {
        popUp.innerHTML = "<h4>Comen Asurmonny</h4><p>Mr. Comen Asurmonny serves as the Director of Trade and External Relations, overseeing the organization’s strategic trade initiatives, partnership development, and inter‑institutional coordination.</p><button id='closeBtn' class='buttonID'>Close</button>";
    }
    satierClick.addEventListener("click", () => {
        popUp.innerHTML = "<h4>Satier Vandou</h4><p>Mr. Satier Vandou serves as the Director of Media Relations, overseeing the organization’s strategic communication initiatives and public engagement efforts. In this role, he manages all media outreach strategies.</p><button id='closeBtn' class='buttonID'>Close</button>";
    });

    popUp.addEventListener("click", (e) => {
        if (e.target.id === "closeBtn") {
            popUp.style.display = "none";
            popUp.innerHTML = "";
        }
    });  
});    