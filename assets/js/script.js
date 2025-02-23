//Band data
const bandData = [
    {
        id: 1,
        bandName: 'Ashen Reach',
        songTitle: 'The Dark',
        bandOrigin: 'Liverpool',
        youtubeVideo:'https://www.youtube.com/embed/Pi98-q1l8dI',
    },
    {
        id: 2,
        bandName: 'Asomvel',
        songTitle: 'Louder & Louder',
        bandOrigin: 'Yorkshire',
        youtubeVideo: 'https://www.youtube.com/embed/vXKfKsNQM8w',
    },
    {
        id: 3,
        bandName: 'Austin Gold',
        songTitle: 'Never End',
        bandOrigin: 'Peterborough',
        youtubeVideo: 'https://www.youtube.com/embed/BsvhmZBz6MQ',
    },
    {
        id: 4,
        bandName: 'Beth Blade and the Beautiful Disasters',
        songTitle: 'Jack and Coke',
        bandOrigin: 'Cardiff',
        youtubeVideo: 'https://www.youtube.com/embed/SXOw4c5H0uo?list=RDEMMmMngZqCY7I8vc7m4eozLw',
    },
    {
        id: 5,
        bandName: 'Big Iron',
        songTitle: 'River runs dry',
        bandOrigin: 'Edinburgh',
        youtubeVideo: 'https://www.youtube.com/embed/JTe3aUAu1VU',
    },
    {
        id: 6,
        bandName: 'Black Lakes',
        songTitle: 'White cliffs',
        bandOrigin: 'South Wales',
        youtubeVideo: 'https://www.youtube.com/embed/YeEvtq1i0Fk',
    },
    {
        id: 7,
        bandName: 'Blind Tiger',
        songTitle: 'In the future',
        bandOrigin: 'Norwich',
        youtubeVideo: 'https://www.youtube.com/embed/XLlM3NzrcKU',
    },
    {
        id: 8,
        bandName: 'Bobbie Dazzle',
        songTitle: 'Lady on fire',
        bandOrigin: 'London',
        youtubeVideo: 'https://www.youtube.com/embed/wag79aYvTbI',
    },
    {
        id: 9,
        bandName: 'Continental Lovers',
        songTitle: 'Connection',
        bandOrigin: 'Nottingham',
        youtubeVideo: 'https://www.youtube.com/embed/9UIbFRh4K80',
    },
    {
        id: 10,
        bandName: 'Crashed Out',
        songTitle: 'Against all odds',
        bandOrigin: 'Jarrow',
        youtubeVideo: 'https://www.youtube.com/embed/M0lHUqUI57A',
    },
    {
        id: 11,
        bandName: 'Daylight Robbery',
        songTitle: 'GODZ',
        bandOrigin: 'Birmingham',
        youtubeVideo: 'https://www.youtube.com/embed/Obrf7RKKwqo',
    },
    {
        id: 12,
        bandName: 'Dead Fire',
        songTitle: 'Pro[pain]',
        bandOrigin: 'Aberdeen',
        youtubeVideo: 'https://www.youtube.com/embed/OlEXGFBmB-E',
    },
    {
        id: 13,
        bandName: 'Dead Reynolds',
        songTitle: 'Hurricane',
        bandOrigin: 'East Anglia',
        youtubeVideo: 'https://www.youtube.com/embed/25yrqCvdAIY',
    },
    {
        id: 14,
        bandName: 'Dendera',
        songTitle: 'Claim our throne',
        bandOrigin: 'Portsmouth',
        youtubeVideo: 'https://www.youtube.com/embed/V0bk7cdBsKI',
    },
    {
        id: 15,
        bandName: 'Drones',
        songTitle: 'Please vacate the planet',
        bandOrigin: 'Manchester',
        youtubeVideo: 'https://www.youtube.com/embed/bz3r_2dAy1k',
    },
    {
        id: 16,
        bandName: 'Falling Red',
        songTitle: 'We escape a cult',
        bandOrigin: 'Carlisle',
        youtubeVideo: 'https://www.youtube.com/embed/kFBZCCW2zDQ',
    },
    {
        id: 17,
        bandName: 'Heart Break Remedy',
        songTitle: 'Tequila Butterfly',
        bandOrigin: 'Lake District',
        youtubeVideo: 'https://www.youtube.com/embed/WcWDgZlIXHs',
    },
    {
        id: 18,
        bandName: 'Jayler',
        songTitle: 'Lovemaker',
        bandOrigin: 'West Midlands',
        youtubeVideo: 'https://www.youtube.com/embed/X4_O0nQL3eM',
    },
    {
        id: 19,
        bandName: 'Jehenna',
        songTitle: 'Hollow',
        bandOrigin: 'Norfolk',
        youtubeVideo: 'https://www.youtube.com/embed/eQOum5Bso98',
    },
    {
        id: 20,
        bandName: 'Juliets Not Dead',
        songTitle: 'Open fire',
        bandOrigin: 'North East',
        youtubeVideo: 'https://www.youtube.com/embed/BlT9UiVRpLo?list=RDEMd_tIh37eMGwnpuWuum3Shg',
    },
    {
        id: 21,
        bandName: 'Kite Thief',
        songTitle: 'Judge Judy & Executioner',
        bandOrigin: 'Bristol',
        youtubeVideo: 'https://www.youtube.com/embed/SufnjUd2Uco',
    },
    {
        id: 22,
        bandName: 'Knock out Kaine',
        songTitle: 'Set the night on fire',
        bandOrigin: 'Lincoln',
        youtubeVideo: 'https://www.youtube.com/embed/0FmmP26DxL8',
    },
    {
        id: 23,
        bandName: 'Lavire',
        songTitle: 'Fall from grace',
        bandOrigin: 'Lincoln',
        youtubeVideo: 'https://www.youtube.com/embed/IqRTgAHla1g',
    },
    {
        id: 24,
        bandName: 'Lesbian Death Bed',
        songTitle: 'Rhythm of the kill',
        bandOrigin: 'Stoke-on-Trent',
        youtubeVideo: 'https://www.youtube.com/embed/lvy8ciNFzkg',
    },
    {
        id: 25,
        bandName: 'King Kraken',
        songTitle: 'Berserker',
        bandOrigin: 'South Wales',
        youtubeVideo: 'https://www.youtube.com/embed/rpXLsW39BtM',
    },
    {
        id: 26,
        bandName: 'Manors',
        songTitle: 'Addicted',
        bandOrigin: 'Newcastle',
        youtubeVideo: 'https://www.youtube.com/embed/14gD_thmn3U',
    },
    {
        id: 27,
        bandName: 'Marisa and the Moths',
        songTitle: 'Get it off my chest',
        bandOrigin: 'Reading',
        youtubeVideo: 'https://www.youtube.com/embed/meViE35XsQA',
    },
    {
        id: 28,
        bandName: 'Mint',
        songTitle: 'M180',
        bandOrigin: 'Grimsby',
        youtubeVideo: 'https://www.youtube.com/embed/9wyjjGdSKWM',
    },
    {
        id: 29,
        bandName: 'Muddi Brooke',
        songTitle: 'ADHD',
        bandOrigin: 'Derby',
        youtubeVideo: 'https://www.youtube.com/embed/u62MIhfOrhI',
    },
    {
        id: 30,
        bandName: 'Old Glory and the Black Riviera',
        songTitle: 'Where did I go wrong',
        bandOrigin: 'Stoke-on-Trent',
        youtubeVideo: 'https://www.youtube.com/embed/xNfpQUBNtJw',
    },
    {
        id: 31,
        bandName: 'Oli Brown and the Dead Collective',
        songTitle: 'Sinking ship',
        bandOrigin: 'England',
        youtubeVideo: 'https://www.youtube.com/embed/as8EpD6kBLs?list=RDEMsWe54CC384TnUSl0BXolCg',
    },
    {
        id: 32,
        bandName: 'Phoenix Lake',
        songTitle: 'Faithless',
        bandOrigin: 'Nottingham',
        youtubeVideo: 'https://www.youtube.com/embed/dG7tPE54zvQ',
    },
    {
        id: 33,
        bandName: 'Pryma',
        songTitle: 'Dead to me',
        bandOrigin: 'Canterbury',
        youtubeVideo: 'https://www.youtube.com/embed/rO2nlkJjlCg',
    },
    {
        id: 34,
        bandName: 'Reckoner',
        songTitle: 'Artificial living',
        bandOrigin: 'Midlands',
        youtubeVideo: 'https://www.youtube.com/embed/uEmMvtuQiTc',
    },
    {
        id: 35,
        bandName: 'Silveroller',
        songTitle: 'Hold',
        bandOrigin: 'England',
        youtubeVideo: 'https://www.youtube.com/embed/msLN4XxtPXw',
    },
    {
        id: 36,
        bandName: 'SKAM',
        songTitle: 'Rising fever',
        bandOrigin: 'Leicester',
        youtubeVideo: 'https://www.youtube.com/embed/PCHplCh4r-U',
    },
    {
        id: 37,
        bandName: 'Skarlett Riot',
        songTitle: 'Warrior',
        bandOrigin: 'Scunthorpe',
        youtubeVideo: 'https://www.youtube.com/embed/tPKyzZjxNk8?list=RDEMqUaa8bVWl2wS2C02gbvqjA',
    },
    {
        id: 38,
        bandName: 'South of Salem',
        songTitle: 'Static',
        bandOrigin: 'Bournemouth',
        youtubeVideo: 'https://www.youtube.com/embed/f1e7aOkIuE4',
    },
    {
        id: 39,
        bandName: 'Syteria',
        songTitle: 'Monsters',
        bandOrigin: 'Leeds',
        youtubeVideo: 'https://www.youtube.com/embed/f_C3giO0P6g',
    },
    {
        id: 40,
        bandName: 'Tailgunner',
        songTitle: 'Guns for hire',
        bandOrigin: 'British',
        youtubeVideo: 'https://www.youtube.com/embed/j2TkDinQsv4',
    },
    {
        id: 41,
        bandName: 'The House We Built',
        songTitle: 'Dead mans shoes',
        bandOrigin: 'Scarborough',
        youtubeVideo: 'https://www.youtube.com/embed/K057ctlcijE',
    },
    {
        id: 42,
        bandName: 'Thieves of Liberty',
        songTitle: 'Shangri-La',
        bandOrigin: 'Sunderland',
        youtubeVideo: 'https://www.youtube.com/embed/MRnqURoug-I',
    },
    {
        id: 43,
        bandName: 'Ward XVI',
        songTitle: 'Imago',
        bandOrigin: 'Preston',
        youtubeVideo: 'https://www.youtube.com/embed/6rR7LVoG_dQ?list=RDEMaYlhfFqiov2OPLtFV6Rung',
    },
    {
        id: 44,
        bandName: 'White Tyger',
        songTitle: 'This is the life',
        bandOrigin: 'West Midlands',
        youtubeVideo: 'https://www.youtube.com/embed/Adiqr0TV2ik',
    },
];

//Function to get 4 randomly selected bands form the above array when clicking the "Go" button
document.getElementById("go").addEventListener("click", function () {
    const selectedBands = getRandomBands(bandData, 4); // Select 4 random bands
    populateCards(selectedBands); // Update existing Bootstrap cards
});

function getRandomBands(bands, count) {
    let shuffled = [...bands].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, count); // Get the first 'count' elements
}

function populateCards(bands) {
    const cardElements = document.querySelectorAll(".card"); //Gets all card elements

    bands.forEach((bandData, index) => {
    if(cardElements[index]) {
        const titleElement = cardElements[index].querySelector(".card-title");
        const songElement = cardElements[index].querySelector(".song-title");
        const originElement = cardElements[index].querySelector(".origin");
        const launchButton = cardElements[index].querySelector(".btn-play");

        if (titleElement) titleElement.textContent = bandData.bandName; //Updates band name
        if (songElement) songElement.textContent = bandData.songTitle; // Updates son title
        if (originElement) originElement.textContent = bandData.bandOrigin; // Updates band origin
        if (launchButton) launchButton.dataset.video = bandData.youtubeVideo; // Updates Video
        }
    }
)};

// Stops the default behavior of the play buttons removing the blue background when clicked
document.querySelectorAll(".btn-play").forEach((button) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        //Get Youtube Video dataset and insert into appended iframe
        const youtubeVideo = document.getElementById("youtube-video");
        const source = event.target.dataset.video;
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", source);
        iframe.setAttribute(
          "allow",
          "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        );
        iframe.setAttribute("id", "video-frame");
        youtubeVideo.appendChild(iframe);
      });
    });

//Reset iframe content when closed
const videoModal = document.getElementById("videoModal");
    if(videoModal) {
    videoModal.addEventListener("hide.bs.modal", function () {
    document.getElementById("video-frame").remove();
  });
}
