const name = document.querySelector('#username');
const greetMeBtn = document.querySelector('.greet-btn');
const greetingOutput = document.querySelector('.greeting');

greetMeBtn.addEventListener('click', (event) => {
    greetingOutput.innerText = `Hello ${name.value}`;
});

/* saving the scroll position */


window.addEventListener('scroll', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
});


window.addEventListener('load', () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition), 10);
    }
});

/* for the slider*/
const slider = document.getElementById("price");
const output = document.querySelector(".price-output");

slider.addEventListener("input", function () {
    output.textContent = this.value;
});

output.textContent = slider.value;
//second slider

const slider_invite = document.getElementById('max-invite');
const output_invite = document.querySelector('.invite-output');

slider_invite.addEventListener('input', function () {
    output_invite.textContent = this.value;
});

output_invite.textContent = slider_invite.value;
