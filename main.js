const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const imageElement = document.getElementById('image');

card1.addEventListener('click', function () {
    card1.classList.toggle('is-flipped');
});

card2.addEventListener('click', function () {
    card2.classList.toggle('is-flipped');
});

card3.addEventListener('click', function () {
    card3.classList.toggle('is-flipped');
});

var imageIndex = 0;
var imageOptions = ["img/cl.gif", "img/rt_edu.gif", "img/sd.gif"];

function changeContent() {
    // Toggle "is-flipped" class for all three cards
    card1.classList.toggle('is-flipped');
    card2.classList.toggle('is-flipped');
    card3.classList.toggle('is-flipped');

    // Change content for card1
    var card1Front = document.querySelector('.card1 .front');
    var card1Back = document.querySelector('.card1 .back');
    card1Front.innerHTML = 'Stranger Danger'; // Add your new content for the front of card1 here
    card1Back.innerHTML = 'Kids can stay safe by remembering a few simple things: always tell a trusted adult if someone makes them uncomfortable, say "no" if something feels wrong, and remember that their body is private.'; // Add your new content for the back of card1 here

    // Change content for card2
    var card2Front = document.querySelector('.card2 .front');
    var card2Back = document.querySelector('.card2 .back');
    card2Front.innerHTML = ''; // Add your new content for the front of card2 here
    card2Back.innerHTML = ''; // Add your new content for the back of card2 here

    // Change content for card3
    var card3Front = document.querySelector('.card3 .front');
    var card3Back = document.querySelector('.card3 .back');
    card3Front.innerHTML = ''; // Add your new content for the front of card3 here
    card3Back.innerHTML = ''; // Add your new content for the back of card3 here

    // Change the image
    imageElement.src = imageOptions[imageIndex];
    imageIndex = (imageIndex + 1) % imageOptions.length;

    // Optionally, you can add additional styling or logic here if needed
}