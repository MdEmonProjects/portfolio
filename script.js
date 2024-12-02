//Customize variables
const params = new URLSearchParams(window.location.search);

// Extract values
const cname = params.get("cname");
const bgColor = params.get("bg");
const HeadertextColor = params.get("h");
const bannerColor = params.get("b");
let companyName = ""

// Apply values to CSS dynamically

    //   document.documentElement.style.setProperty('--nav-text-color', '#ffcc00');
    //   document.documentElement.style.setProperty('--hero-text-color', '#00ffcc');

console.log(bgColor);

if (bgColor) document.documentElement.style.setProperty('--bg-color', `#${bgColor}`)
if (HeadertextColor) document.body.style.color = document.documentElement.style.setProperty('--nav-text-color', `#${HeadertextColor}`);
if (bannerColor) document.body.style.color = document.documentElement.style.setProperty('--hero-text-color', `#${HeadertextColor}`);

if (cname) companyName =  decodeURIComponent(cname);

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration
  once: true, // Animation happens only once
});

// Typing Animation
let typed = new Typed("#typed-text", {
  strings: [`<h1>Hello ${companyName ? ", ": ""} ${companyName}</h1> <h2>I'm Md Emon. Welcome to my portfolio!</h2>`],
  loop: false,
  loopCount: Infinity,
  showCursor: false,
  typeSpeed: 50,
  contentType: 'html'
});

// let subtyped = new Typed("#typed-subtext", {
//   strings: ["I'm Md Emon. Welcome to my portfolio!"],
//   startDelay: 4000,
//   typeSpeed: 50,
//   loop: false,
//   loopCount: Infinity,
//   showCursor: false,
// });
// const texts = ["Hello, Business Review and Research Bangladesh", "I'm Md Emon. Welcome to my portfolio!"];
// const subTexts = ["Explore my work", "Let's create something amazing!"];
// const typingSpeed = 100;
// const delayBetweenTexts = 5000;

// let textIndex = 0;
// let subTextIndex = 0;

// function typeText() {
//     const typedText = document.getElementById("typed-text");
//     const typedSubText = document.getElementById("typed-subtext");
//     let i = 0, j = 0;

//     function typeMainText() {
//         if (i < texts[textIndex].length) {
//             typedText.textContent += texts[textIndex].charAt(i);
//             i++;
//             setTimeout(typeMainText, typingSpeed);
//         } else {
//             setTimeout(() => {
//                 typedText.textContent = ""; // Reset
//                 textIndex = (textIndex + 1) % texts.length; // Loop through texts
//                 typeMainText();
//             }, delayBetweenTexts);
//         }
//     }

//     function typeSubText() {
//         if (j < subTexts[subTextIndex].length) {
//             typedSubText.textContent += subTexts[subTextIndex].charAt(j);
//             j++;
//             setTimeout(typeSubText, typingSpeed);
//         } else {
//             setTimeout(() => {
//                 typedSubText.textContent = ""; // Reset
//                 subTextIndex = (subTextIndex + 1) % subTexts.length; // Loop through texts
//                 typeSubText();
//             }, delayBetweenTexts);
//         }
//     }

//     typeMainText();
//     typeSubText();
// }

// window.onload = typeText;
