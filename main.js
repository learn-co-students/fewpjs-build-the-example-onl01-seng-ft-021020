// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

  //removing modal error on load
const modalError = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
hiddenModal();

function hiddenModal() {
  modalError.classList.add("hidden");
}
document.addEventListener("DOMContentLoaded", () => {

  //delegating events to document
  document.addEventListener("click", (event) => {
    if (event.target.className.includes("like-glyph")) {
      var heart = event.target;
      mimicServerCall()
        .then((response) => {
          updateHeart(heart);
        })
        .catch((error) => {
          modalMessage.innerText = error;
          modalError.classList.remove("hidden");
          setTimeout(hiddenModal, 5000);
        });
    }
  });
});

function updateHeart(heart) {
  if (heart.innerHTML == EMPTY_HEART) {
    heart.classList.add("activated-heart");
    heart.innerHTML = FULL_HEART;
  } else {
    heart.classList.remove("activated-heart");
    heart.innerHTML = EMPTY_HEART;
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
