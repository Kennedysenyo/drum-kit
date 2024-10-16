


const drumButtons = document.querySelectorAll(".drum");
for(i = 0; i < drumButtons.length; i++) {  
  drumButtons[i].addEventListener("click", function () {

    const audio = new Audio();
    switch(this.classList[0]) {
      case "w":
        audio.src = "sounds/crash.mp3";
        audio.play();
        break;
      case "a":
        audio.src = "sounds/kick-bass.mp3";
        audio.play();
        break;
      case "s":
        audio.src = "sounds/snare.mp3";
        audio.play();
        break;
      case "d":
        audio.src = "sounds/tom-1.mp3";
        audio.play();
        break;
      case "j":
        audio.src = "sounds/tom-2.mp3";
        audio.play();
        break;
      case "k":
        audio.src = "sounds/tom-3.mp3";
        audio.play();
        break;
        case "l":
          audio.src = "sounds/tom-4.mp3";
        audio.play();
        break;

      }
  }
);
}