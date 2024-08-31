const DOM = document.getElementById('form-container');

const signInForm = DOM.querySelector('.sign-in');
const goSignUp = signInForm.querySelector('a');

const signUpForm = DOM.querySelector('.sign-up');
const goSignIn = signUpForm.querySelector('a');
const cover = DOM.querySelector('.cover');

// console.log(signButton);

goSignUp.addEventListener('click', function(event) {
    event.preventDefault();
    let moveSignIn = signInForm.style;
    moveSignIn.transitionDelay = '0s';
    moveSignIn.transform = 'translateY(120%)'; 
    
    let showSignUp = signUpForm.style;
    showSignUp.transform = 'translateX(0)';
    showSignUp.transitionDelay = '0.5s';

    let toggleCover = cover.querySelector('.sign-in-img').style;
    toggleCover.transform = 'translateY(200%)';

    let toggleCover2 = cover.querySelector('.sign-up-img').style;
    toggleCover2.transform = 'translateY(-100%)';
});
goSignIn.addEventListener('click', function(event) {
    event.preventDefault();
    let moveSignUp = signUpForm.style;
    moveSignUp.transitionDelay = '0s';
    moveSignUp.transform = 'translateX(-120%)';
    
    let showSignIn = signInForm.style;
    showSignIn.transform = 'translateY(0)';
    showSignIn.transitionDelay = '0.7s';


    let toggleCover = cover.querySelector('.sign-in-img').style;
    toggleCover.transform = 'translateY(0)';

    let toggleCover2 = cover.querySelector('.sign-up-img').style;
    toggleCover2.transform = 'translateY(-201%)';
});