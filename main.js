// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const likeButtons = document.querySelectorAll('li.like > span.like-glyph')
const modal = document.getElementById('modal')

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', handleLike);
};
  

function handleLike() {
  mimicServerCall()
    .then(response => console.log(response))
    .then(() => {
      this.classList.add('activated-heart')
      this.textContent = FULL_HEART
    })
    .catch(error => handleError(error))
}

function handleError(error) {
  console.log(error)
  hideModal()
  document.querySelector('#modal-message').innerHTML = error
  setTimeout(hideModal, 5000)
}

function hideModal() {
  (modal.className == 'hidden') ? (modal.className = '') : (modal.className = 'hidden') 
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
