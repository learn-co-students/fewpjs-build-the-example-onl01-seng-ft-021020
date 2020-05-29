// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorModal = document.getElementById("modal")
let likeButtons = document.getElementsByClassName("like")


errorModal.className = "hidden"

for (const element of likeButtons) {
  element.addEventListener('click', (event) => {
    let likeGlyph = element.getElementsByClassName("like-glyph")[0]
    if (likeGlyph.innerText === EMPTY_HEART) {
    likeGlyph.innerText = FULL_HEART
    } else {
      likeGlyph.innerText = EMPTY_HEART
    }
  })
}

document.addEventListener('DOMContentLoaded', (event) =>{
  errorModal.className = "hidden"
})



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
