// Fade-in effect for landing text
window.addEventListener('load', () => {
  document.getElementById('heading2').classList.add('fade-in');
});

// Typewriter effect
const texts = ["Student", "Developer", "Innovator", "Quick Learner", "Bold Speaker"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.getElementById('typewriter').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000); // pause before next word
  } else {
    setTimeout(type, 150);
  }
}

type();


document.querySelector("#lkdin-btn").onclick = () => {
  window.open("https://www.linkedin.com/in/sanskar-madake-945839358", "_blank");
};

document.querySelector("#resume-btn").onclick = () => {
  window.open("s_RESUME.pdf", "_blank");
};

//projects
document.querySelector("#proj1-btn").onclick = () => {
  window.open("https://imfocused.github.io/TicTacToe/", "_blank");
}
document.querySelector("#proj2-btn").onclick = () => {
  window.open("https://imfocused.github.io/RockPaperScissors-Game/", "_blank");
}
document.querySelector("#proj3-btn").onclick = () => {
  window.open("https://imfocused.github.io/CurrencyConverter/", "_blank");
}
document.querySelector("#view-more-a").onclick = () => {
  window.open("https://github.com/SanskarMadake", "_blank");
}

// certificates
document.querySelector("#certi1").onclick = () => {
  window.open("Certificate_MICROSOFT_EY.pdf", "_blank");
}
document.querySelector("#certi2").onclick = () => {
  window.open("S_Fundamentals of Web apps.pdf", "_blank");
}
document.querySelector("#certi3").onclick = () => {
  window.open("The Github Blog_Github_com.pdf", "_blank");
}
document.querySelector("#certi4").onclick = () => {
  window.open("Website testing and Deployment.pdf", "_blank");
}
document.querySelector("#certi5").onclick = () => {
  window.open("Web Development Basics.pdf", "_blank");
}
document.querySelector("#view-more-certi").onclick = () => {
  window.open("https://www.linkedin.com/in/sanskar-madake-945839358", "_blank");
}



const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted!");
  console.log("Name:", document.getElementById("name").value);
  console.log("Email:", document.getElementById("email").value);
  console.log("Message:", document.getElementById("message").value);

  successMessage.style.display = "block";
  form.reset();
});