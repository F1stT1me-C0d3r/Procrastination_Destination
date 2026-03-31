document.addEventListener("DOMContentLoaded", function() {
    const popUp = document.getElementById("popUp");
    const bagyClick = document.getElementById("bagyClick");
    const shfyClick = document.getElementById("shfyClick");
    const comenClick = document.getElementById("comenClick");
    const satierClick = document.getElementById("satierClick");

    function openPopUp() {
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
        popUp.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    }

    bagyClick.addEventListener("click", () => {
        openPopUp();
        popUp.innerHTML = "<h4>E’Vill Bagy</h4><p>Mr. Bagy serves as Horizon’s Director of Corporate Affairs, where he oversees the company’s relationships with external stakeholders, strengthens its public and regulatory engagement, and ensures that Horizon’s governance practices reflect the highest standards of transparency and accountability. In this role, he plays a central part in aligning the organization’s long‑term strategic goals with its public commitments, helping to position Horizon as a responsible, forward‑looking leader within its industry.</p><button id=’closeBtn’ class=’buttonID’>Close</button>";
    });
    shfyClick.addEventListener("click", () => {
        openPopUp();
        popUp.innerHTML = "<h4>Shf’yeir Vandou</h4><p>Mrs. Vandou, recently married to Director Satier Vandou, is a skilled public and media relations specialist who plays a key role in advancing the organization’s communication strategy. She supports Horizon’s corporate messaging across multiple channels, helps shape the company’s public narrative, and works closely with leadership to strengthen the organization’s visibility among stakeholders, partners, and the broader community. Through her expertise in media outreach and strategic communication, she contributes to building a cohesive and credible public presence for the organization.</p><button id=’closeBtn’ class=’buttonID’>Close</button>";
    });
    comenClick.addEventListener("click", () => {
        openPopUp();
        popUp.innerHTML = "<h4>Comen Asurmonny</h4><p>Mr. Comen Asurmonny serves as the Director of Trade and External Relations, where he leads the organization’s strategic trade initiatives, cultivates high‑value partnerships, and oversees coordination with national and international institutions. In this capacity, he guides Horizon’s efforts to strengthen its presence in key markets, advance collaborative opportunities, and ensure that its external engagements align with broader organizational priorities. Through his leadership, the company is able to navigate complex trade environments, build durable alliances, and position itself as a proactive and influential participant in regional and global economic networks.</p><button id=’closeBtn’ class=’buttonID’>Close</button>";
    });
    satierClick.addEventListener("click", () => {
        openPopUp();
        popUp.innerHTML = "<h4>Satier Vandou</h4><p>Mr. Satier Vandou serves as the Director of Media Relations, where he oversees the organization’s strategic communication initiatives and leads its public engagement efforts. In this capacity, he manages all media outreach strategies, ensuring that Horizon’s messaging is clear, consistent, and aligned with its broader organizational goals. He works closely with senior leadership to shape the company’s public narrative, build strong relationships with media partners, and enhance the organization’s visibility across traditional and digital platforms. Through his guidance, Horizon is able to communicate effectively with stakeholders, respond proactively to emerging issues, and maintain a credible and influential presence in the public sphere.</p><button id=’closeBtn’ class=’buttonID’>Close</button>";
    });

    popUp.addEventListener("click", (e) => {
        if (e.target.id === "closeBtn") {
            popUp.style.display = "none";
            popUp.innerHTML = "";
        }
    });  
});    