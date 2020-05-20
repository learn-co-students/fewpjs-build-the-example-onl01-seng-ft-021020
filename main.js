// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hiddenError = document.querySelector("#modal")
const hiddenErrorMessage = document.querySelector("#modal-message")
const hearts = document.querySelectorAll('.like-glyph')

for (let heart of hearts) {
  heart.addEventListener('click', (event) => {
    mimicServerCall()
    .then(() => {
      if (event.target.innerHTML == EMPTY_HEART) {
        event.target.innerHTML = FULL_HEART
        event.target.classList.add('activated-heart')
      }
      else {
        event.target.innerHTML = EMPTY_HEART
        event.target.classList.remove('activated-heart')
      }
    })
    .catch((error) => {
      
      hiddenErrorMessage.innerHTML = `${error}`
      hiddenError.className = ''
      setTimeout(() => hiddenError.className = 'hidden', 5000)
      
    })
  })
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
