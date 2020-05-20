// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById("modal")  
modal.setAttribute('class', 'hidden')


const hearts = document.querySelectorAll('li.like > span.like-glyph')
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', postLike);
};

function postLike() {
  mimicServerCall()
    .then(response => console.log(response))
    .then(() => {
      if (this.textContent == EMPTY_HEART) {
        this.classList.add('activated-heart')
        this.textContent = FULL_HEART
      }
      else {
        this.className = 'like-glyh'
        this.textContent = FULL_HEART
      }
    })
    .catch(error => serverError(error))
}

function serverError(error) {
  console.log(error)
  hiddenModal()
  document.querySelector('#modal-message').innerHTML = error
  setTimeout(hiddenModal, 5000)
}

function hiddenModal () {
  if (modal.className == 'hidden') {
    modal.className = ''
  } 
  else {
    modal.className = 'hidden'
  }
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
