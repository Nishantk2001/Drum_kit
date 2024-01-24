function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  e.target.classList.remove("playing");
}

// Function to show the popup
function showPopup() {
  const popup = document.getElementById("popupBox");
  popup.style.display = "block";
  // Automatically close the popup after 2 seconds
  setTimeout(function () {
    popup.style.display = "none";
  }, 3000);
}

// Event listener for clicks anywhere on the screen
document.addEventListener("click", showPopup);
