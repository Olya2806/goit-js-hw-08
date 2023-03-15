import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form')
const userEmail = document.querySelector('input[type="email"]');
const userText = document.querySelector('textarea[name="message"]');
const localStorageKey = "feedback-form-state";

userEmail.addEventListener('input', onInputChange);
userText.addEventListener('input', onInputChange);
feedbackForm.addEventListener('input', throttle(onInputChange, 500));

function onInputChange() {
    const user = {
        email: userEmail.value,
        message: userText.value
    }
    localStorage.setItem(localStorageKey, JSON.stringify(user))
}

feedbackForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    
    console.log("email:", userEmail.value)
    console.log("message:", userText.value); 

    localStorage.removeItem('feedback-form-state');
  userEmail.value = '';
  userText.value = '';

}

function onLoadingForm() {
    const informationFromStorage = JSON.parse(localStorage.getItem(localStorageKey))
    if (informationFromStorage) {
         userEmail.value = informationFromStorage.email;
         userText.value = informationFromStorage.message;
    }
}
onLoadingForm()