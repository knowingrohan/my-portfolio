import React from 'react';


// const words = ["CSS3", "HTML5", "Javascript"];
// let i = 0;
// let timer;

// function typingEffect() {
//     let word = words[i].split("");
//     var loopTyping = function () {
//         if (word.length > 0) {
//             document.getElementById('word').innerHTML += word.shift();
//         } else {
//             deletingEffect();
//             return false;
//         };
//         timer = setTimeout(loopTyping, 80);
//     };
//     loopTyping();
// };

// function deletingEffect() {
//     let word = words[i].split("");
//     var loopDeleting = function () {
//         if (word.length > 0) {
//             word.pop();
//             document.getElementById('word').innerHTML = word.join("");
//         } else {
//             if (words.length > (i + 1)) {
//                 i++;
//             } else {
//                 i = 0;
//             };
//             typingEffect();
//             return false;
//         };
//         timer = setTimeout(loopDeleting, 200);
//     };
//     loopDeleting();
// };

const AnimatedText = () => {
    return (
        <div class="flex">
            <p class="header-sub-title" id="word"></p>
            <p class="header-sub-title blink">|</p>
        </div>
    );
};

export default AnimatedText;