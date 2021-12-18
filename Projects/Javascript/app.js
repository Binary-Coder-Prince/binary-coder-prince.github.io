score = 0;

var cross = true;

document.onkeydown = function (e) {
  console.log("key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    var character = document.getElementById("gameChar");
    character.classList.add("dinoAnimation");
    setTimeout(() => {
      character.classList.remove("dinoAnimation");
    }, 700);
  }
  if (e.keyCode == 32) {
    var character = document.getElementById("gameChar");
    character.classList.add("dinoAnimation");
    setTimeout(() => {
      character.classList.remove("dinoAnimation");
    }, 700);
  }
  if (e.keyCode == 87) {
    var character = document.getElementById("gameChar");
    character.classList.add("dinoAnimation");
    setTimeout(() => {
      character.classList.remove("dinoAnimation");
    }, 700);
  }
  if (e.keyCode == 39) {
    var character = document.getElementById("gameChar");
    charX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = charX + 60 + "px";
  }
  if (e.keyCode == 68) {
    var character = document.getElementById("gameChar");
    charX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = charX + 60 + "px";
  }
  if (e.keyCode == 37) {
    var character = document.getElementById("gameChar");
    charX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = charX + -60 + "px";
  }
  if (e.keyCode == 65) {
    var character = document.getElementById("gameChar");
    charX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = charX + -60 + "px";
  }
};

var scoreCont = document.querySelector("#score");

setInterval(() => {
  var obstacle = document.querySelector(".obsAnima");
  var character = document.querySelector("#gameChar");
  var gameover = document.querySelector("h1");

  cx = parseInt(
    window.getComputedStyle(character, null).getPropertyValue("left")
  );
  cy = parseInt(
    window.getComputedStyle(character, null).getPropertyValue("top")
  );

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(cx - ox);
  offsetY = Math.abs(cy - oy);

  if (offsetX < 50 && offsetY < 50) {
    gameover.style.display = "block";
    obstacle.classList.remove("obsAnima");
    setTimeout(() => {
      scoreCont.innerHTML = "Score: 0";
    }, 5000);
  } else if (offsetX < 100 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

    setTimeout(() => {
      aniDura = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDura = aniDura - 0.2;
      // obstacle.style.animationDuration = newDura + "s";
    }, 500);
  }
}, 100);

function updateScore(score) {
  scoreCont.innerHTML = "Score: " + score;
}