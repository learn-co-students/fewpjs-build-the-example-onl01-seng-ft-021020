// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", checkLikeClick);
})

function checkLikeClick(event) {
    if (event.target.className === "like-glyph") {
        changeHeart(event);
    }
}

function changeHeart(event) {
    mimicServerCall()
    .then(() => {
        console.log("success")
        if (event.target.innerText === EMPTY_HEART) {
            console.log("clicked empty heart")
            event.target.innerText = FULL_HEART
            event.target.classList.add("activated-heart")
        }
        else {
            console.log("clicked full heart")
            event.target.innerText = EMPTY_HEART
            event.target.classList.remove("activated-heart")
        }
    })
    .catch(() => {
        console.log("failure")
        displayErrorMessage();
    })
}

function displayErrorMessage() {
    let errorElement = document.getElementById("modal")
    errorElement.classList.remove("hidden");
    setTimeout(() => {
        errorElement.className = "hidden";
    }, 5000);
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
