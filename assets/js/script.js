//Launches the How modal
document.getElementById("playBtn").addEventListener("click", function() {
    window.location.href = "play.html";
});

// Stops the default behavior of the play button
document.querySelectorAll(".btn-play").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Stops default behavior
    });
});

//Band data
const bandData = [
    {
        id: 1,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 2,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 3,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 4,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 5,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 6,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 7,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 8,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 9,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 10,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 11,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 12,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 13,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 14,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 15,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 16,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 17,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 18,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 19,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 20,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 21,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 22,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 23,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 24,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 25,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 26,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 27,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 28,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 29,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 30,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 31,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 32,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 33,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 34,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 35,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 36,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 37,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 38,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 39,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 40,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 41,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 42,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 43,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
    {
        id: 44,
        name: 'The Electric Echoes',
        songTitle: 'Alternative Rock',
        video: 'https://source.unsplash.com/random/400x300/?rock-band-1',
    },
];