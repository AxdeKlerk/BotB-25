document.getElementById("playBtn").addEventListener("click", function() {
    window.location.href = "play.html";
});

document.querySelectorAll(".btn-play").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Stops default behavior
    });
});
