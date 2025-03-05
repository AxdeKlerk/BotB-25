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
        bandName: 'Blue Nation',
        songTitle: 'Hand me down',
        bandOrigin: 'Birmingham',
        youtubeVideo: 'https://www.youtube.com/embed/5ssdrXSgUQU',
    },
    {
        id: 9,
        bandName: 'Brave Revival',
        songTitle: 'Run and hide',
        bandOrigin: 'Portsmouth',
        youtubeVideo: 'https://www.youtube.com/embed/BwnQs4grmH8',
    },
    {
        id: 10,
        bandName: 'Crooked Revival',
        songTitle: 'Demons',
        bandOrigin: 'Leeds',
        youtubeVideo: 'https://www.youtube.com/embed/XDvW_lqSTRc',
    },
    {
        id: 11,
        bandName: 'Dan Byrne',
        songTitle: 'Death of Me',
        bandOrigin: 'Liverpool',
        youtubeVideo: 'https://www.youtube.com/embed/QPzesx_RwEI',
    },
    {
        id: 12,
        bandName: 'Daylight Robbery',
        songTitle: 'GODZ',
        bandOrigin: 'Birmingham',
        youtubeVideo: 'https://www.youtube.com/embed/Obrf7RKKwqo',
    },
    {
        id: 13,
        bandName: 'Dead Fire',
        songTitle: 'Pro[pain]',
        bandOrigin: 'Aberdeen',
        youtubeVideo: 'https://www.youtube.com/embed/OlEXGFBmB-E',
    },
    {
        id: 14,
        bandName: 'Dead Reynolds',
        songTitle: 'Hurricane',
        bandOrigin: 'East Anglia',
        youtubeVideo: 'https://www.youtube.com/embed/25yrqCvdAIY',
    },
    {
        id: 15,
        bandName: 'Dendera',
        songTitle: 'Claim our throne',
        bandOrigin: 'Portsmouth',
        youtubeVideo: 'https://www.youtube.com/embed/V0bk7cdBsKI',
    },
    {
        id: 16,
        bandName: 'Drones',
        songTitle: 'Please vacate the planet',
        bandOrigin: 'Manchester',
        youtubeVideo: 'https://www.youtube.com/embed/bz3r_2dAy1k',
    },
    {
        id: 17,
        bandName: 'Falling Red',
        songTitle: 'We escape a cult',
        bandOrigin: 'Carlisle',
        youtubeVideo: 'https://www.youtube.com/embed/kFBZCCW2zDQ',
    },
    {
        id: 18,
        bandName: 'Heart Break Remedy',
        songTitle: 'Tequila Butterfly',
        bandOrigin: 'Lake District',
        youtubeVideo: 'https://www.youtube.com/embed/WcWDgZlIXHs',
    },
    {
        id: 19,
        bandName: 'Jayler',
        songTitle: 'Lovemaker',
        bandOrigin: 'West Midlands',
        youtubeVideo: 'https://www.youtube.com/embed/X4_O0nQL3eM',
    },
    {
        id: 20,
        bandName: 'Jehenna',
        songTitle: 'Hollow',
        bandOrigin: 'Norfolk',
        youtubeVideo: 'https://www.youtube.com/embed/eQOum5Bso98',
    },
    {
        id: 21,
        bandName: 'Juliets Not Dead',
        songTitle: 'Open fire',
        bandOrigin: 'North East',
        youtubeVideo: 'https://www.youtube.com/embed/BlT9UiVRpLo?list=RDEMd_tIh37eMGwnpuWuum3Shg',
    },
    {
        id: 22,
        bandName: 'King Kraken',
        songTitle: 'Berserker',
        bandOrigin: 'South Wales',
        youtubeVideo: 'https://www.youtube.com/embed/rpXLsW39BtM',
    },    
    {
        id: 23,
        bandName: 'Kit Trigg',
        songTitle: 'Goin for glory',
        bandOrigin: 'Farnham',
        youtubeVideo: 'https://www.youtube.com/embed/zmxnA2eezfc',
    },
    {
        id: 24,
        bandName: 'Kite Thief',
        songTitle: 'Judge Judy & Executioner',
        bandOrigin: 'Bristol',
        youtubeVideo: 'https://www.youtube.com/embed/SufnjUd2Uco',
    },
    {
        id: 25,
        bandName: 'Lavire',
        songTitle: 'Fall from grace',
        bandOrigin: 'Lincoln',
        youtubeVideo: 'https://www.youtube.com/embed/IqRTgAHla1g',
    },
    {
        id: 26,
        bandName: 'Luke Appleton',
        songTitle: 'Before your eyes',
        bandOrigin: 'Manchester',
        youtubeVideo: 'https://www.youtube.com/embed/WzGj3t6p5U0',
    },
    {
        id: 27,
        bandName: 'Manors',
        songTitle: 'Addicted',
        bandOrigin: 'Newcastle',
        youtubeVideo: 'https://www.youtube.com/embed/14gD_thmn3U',
    },
    {
        id: 28,
        bandName: 'Marisa and the Moths',
        songTitle: 'Get it off my chest',
        bandOrigin: 'Reading',
        youtubeVideo: 'https://www.youtube.com/embed/meViE35XsQA',
    },
    {
        id: 29,
        bandName: 'Mint',
        songTitle: 'M180',
        bandOrigin: 'Grimsby',
        youtubeVideo: 'https://www.youtube.com/embed/9wyjjGdSKWM',
    },
    {
        id: 30,
        bandName: 'Not Now Norman',
        songTitle: 'Who I am',
        bandOrigin: 'Newcastle',
        youtubeVideo: 'https://www.youtube.com/embed/5wGx9IXzDAU',
    },
    {
        id: 31,
        bandName: 'Old Glory and the Black Riviera',
        songTitle: 'Where did I go wrong',
        bandOrigin: 'Stoke-on-Trent',
        youtubeVideo: 'https://www.youtube.com/embed/xNfpQUBNtJw',
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
        bandName: 'Ransom',
        songTitle: 'Strap yourself in',
        bandOrigin: 'London',
        youtubeVideo: 'https://www.youtube.com/embed/W2-j17eSQJM',
    },
    {
        id: 35,
        bandName: 'Reckoner',
        songTitle: 'Artificial living',
        bandOrigin: 'Midlands',
        youtubeVideo: 'https://www.youtube.com/embed/uEmMvtuQiTc',
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
document.addEventListener("DOMContentLoaded", () => {
    const goButton = document.getElementById("go-btn");
    if (goButton) {
        goButton.addEventListener("click", function() {
        const selectedBands = getRandomBands(bandData, 4); // Selects 4 random bands
        populateCardsAndVotes(selectedBands); // Update Bootstrap cards
        });
    }
});

function getRandomBands(bands, count) {
    let shuffled = [...bands].sort(() => 0.5 - Math.random()); // Shuffle array
    return shuffled.slice(0, count); // Get the first 'count' elements
}

function populateCardsAndVotes(bands) {
    const cardElements = document.querySelectorAll(".card"); //Gets all card elements
    const formElements = document.querySelectorAll(".vote"); // Gets all vote elements

    bands.forEach((bandData, index) => {
    if(cardElements[index]) {
        const titleElement = cardElements[index].querySelector(".card-title");
        const songElement = cardElements[index].querySelector(".song-title");
        const originElement = cardElements[index].querySelector(".origin");
        const launchButton = cardElements[index].querySelector(".btn-play");
        const voteBand = formElements[index].querySelector(".band-name");

        if (titleElement) titleElement.textContent = bandData.bandName; //Updates band name
        if (songElement) songElement.textContent = bandData.songTitle; // Updates son title
        if (originElement) originElement.textContent = bandData.bandOrigin; // Updates band origin
        if (launchButton) launchButton.dataset.video = bandData.youtubeVideo; // Updates Video
        if (voteBand) voteBand.textContent = bandData.bandName; //Updates band name in vote form
        }
    }
)};

// Stops the default behavior of the play buttons removing the blue background when clicked
document.querySelectorAll(".btn-play").forEach((button) => {
    button.addEventListener("click", function(event) {
        event.preventDefault();

// Gets Youtube Video dataset and inserts into appended iframe
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

// Form functionality
document.addEventListener("DOMContentLoaded", function () {
    const submitInput = document.getElementById("vote-submit");
    const radioButtons = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const goButton = document.getElementById("go-btn");
    
// Initially disable the radio buttons, vote button and enable the go button
    radioButtons.forEach(radio => radio.disabled = true);
    submitInput.disabled = true;
    goButton.disabled = false;

    if (submitInput) {
        submitInput.disabled = true;
    } else {
        console.error('Element not found');
    }

// Enable the radio buttons when band names are populated and disable the go button
    goButton.addEventListener("click", function() {
        radioButtons.forEach(radio => radio.disabled = false);
        goButton.disabled = true; // Disable goButton after it has been clicked
    });


// Enable voting button when a radio button is clicked
    radioButtons.forEach(radio => {
        radio.addEventListener("change", function () {
            submitInput.disabled = false;
        });
    });
});

// Reset the form after submission
const voteForm = document.getElementById("vote-form");
if (voteForm) {
    voteForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission
    });
}