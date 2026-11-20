
const SERVER_IP = "play.limburgsmp.eu:38008";

const DISCORD_INVITE = "https://discord.gg/rsN8jVzD22";

function copyIP() {
    navigator.clipboard.writeText(SERVER_IP)
        .then(() => {
            alert("Server IP gekopieerd: " + SERVER_IP);
        })
        .catch(() => {
            alert("Kopiëren is niet gelukt. IP: " + SERVER_IP);
        });
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".nav-links").classList.remove("active");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();

const discordButton = document.getElementById("discord-link");

discordButton.href = DISCORD_INVITE;
discordButton.target = "_blank";
discordButton.rel = "noopener noreferrer";

function copyServerIP(ip) {
    navigator.clipboard.writeText(ip)
        .then(() => {
            alert("Server IP gekopieerd: " + ip);
        })
        .catch(() => {
            alert("Kopiëren mislukt. Server IP: " + ip);
        });
}
