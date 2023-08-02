// Mute button js code

// document.addEventListener('DOMContentLoaded', function() {
//     var video = document.querySelector('.video1 video');
//     var muteToggle = document.getElementById('mute-toggle');

//     muteToggle.addEventListener('click', function() {
//         if (video.muted) {
//             video.muted = false;
//             muteToggle.innerHTML = 'Mute';
//         } else {
//             video.muted = true;
//             muteToggle.innerHTML = 'Unmute';
//         }
//     });
// });


// JavaScript code
document.addEventListener("click", function(event) {
  var dropdownContent = document.querySelector(".dropdown-content");
  var accountLink = document.querySelector(".account-link");

  if (dropdownContent.style.display === "block" && !accountLink.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});


