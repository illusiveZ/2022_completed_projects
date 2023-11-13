const button = document.getElementById("button");
var disabled = false;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cx = ctx.canvas.width / 2;
let cy = ctx.canvas.height / 2;

// add Confetti/Sequince objects to arrays to draw them
let confetti = [];
let sequins = [];

// ammount to add on each button press
const confettiCount = 250;
const sequinCount = 100;

// "physics" variables
const gravityConfetti = 0.25;
const gravitySequins = 0.35;
const dragConfetti = 0.075;
const dragSequins = 0.075;
const terminalVelocity = 3;

// colours, back side is darker for confetti flipping
const colours = [
  { front: "#54ABEB", back: "#2695E6" }, // Purple
  { front: "#EB54AB", back: "#E62695" }, // Light Blue
  { front: "#ABEB54", back: "#95E626" }, // Darker Blue
];

// helper function to pick a random number within a range
randomRange = (min, max) => Math.random() * (max - min) + min;

// helper function to get initial velocities for confetti
// this weighted spread helps the confetti look more realistic
initConfettoVelocity = (xRange, yRange) => {
  const x = randomRange(xRange[0], xRange[1]);
  const range = yRange[1] - yRange[0] + 1;
  let y =
    yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
  if (y >= yRange[1] - 1) {
    // Occasional confetto goes higher than the max
    y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
  }
  return { x: x, y: -y };
};

// Confetto Class
function Confetto() {
  this.randomModifier = randomRange(0, 99);
  this.colour = colours[Math.floor(randomRange(0, colours.length))];
  this.dimensions = {
    x: randomRange(5, 9),
    y: randomRange(8, 15),
  };
  this.position = {
    x: randomRange(
      canvas.width / 2 - button.offsetWidth / 4,
      canvas.width / 2 + button.offsetWidth / 4
    ),
    y: randomRange(
      canvas.height / 2 + button.offsetHeight / 2 + 8,
      canvas.height / 2 + 1.5 * button.offsetHeight - 8
    ),
  };
  this.rotation = randomRange(0, 2 * Math.PI);
  this.scale = {
    x: 1,
    y: 1,
  };
  this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
}
Confetto.prototype.update = function () {
  // apply forces to velocity
  this.velocity.x -= this.velocity.x * dragConfetti;
  this.velocity.y = Math.min(
    this.velocity.y + gravityConfetti,
    terminalVelocity
  );
  this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

  // set position
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;

  // spin confetto by scaling y and set the colour, .09 just slows cosine frequency
  this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
};

// Sequin Class
function Sequin() {
  (this.colour = colours[Math.floor(randomRange(0, colours.length))].back),
    (this.radius = randomRange(1, 2)),
    (this.position = {
      x: randomRange(
        canvas.width / 2 - button.offsetWidth / 3,
        canvas.width / 2 + button.offsetWidth / 3
      ),
      y: randomRange(
        canvas.height / 2 + button.offsetHeight / 2 + 8,
        canvas.height / 2 + 1.5 * button.offsetHeight - 8
      ),
    }),
    (this.velocity = {
      x: randomRange(-6, 6),
      y: randomRange(-8, -12),
    });
}
Sequin.prototype.update = function () {
  // apply forces to velocity
  this.velocity.x -= this.velocity.x * dragSequins;
  this.velocity.y = this.velocity.y + gravitySequins;

  // set position
  this.position.x += this.velocity.x;
  this.position.y += this.velocity.y;
};

// add elements to arrays to be drawn
initBurst = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push(new Confetto());
  }
  for (let i = 0; i < sequinCount; i++) {
    sequins.push(new Sequin());
  }
};

// draws the elements on the canvas
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // update confetto "physics" values
    confetto.update();

    // get front or back fill colour
    ctx.fillStyle =
      confetto.scale.y > 0 ? confetto.colour.front : confetto.colour.back;

    // draw confetto
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // clear rectangle where button cuts off
    if (confetto.velocity.y < 0) {
      ctx.clearRect(
        canvas.width / 2 - button.offsetWidth / 2,
        canvas.height / 2 + button.offsetHeight / 2,
        button.offsetWidth,
        button.offsetHeight
      );
    }
  });

  sequins.forEach((sequin, index) => {
    // move canvas to position
    ctx.translate(sequin.position.x, sequin.position.y);

    // update sequin "physics" values
    sequin.update();

    // set the colour
    ctx.fillStyle = sequin.colour;

    // draw sequin
    ctx.beginPath();
    ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
    ctx.fill();

    // reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // clear rectangle where button cuts off
    if (sequin.velocity.y < 0) {
      ctx.clearRect(
        canvas.width / 2 - button.offsetWidth / 2,
        canvas.height / 2 + button.offsetHeight / 2,
        button.offsetWidth,
        button.offsetHeight
      );
    }
  });

  // remove confetti and sequins that fall off the screen
  // must be done in seperate loops to avoid noticeable flickering
  confetti.forEach((confetto, index) => {
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);
  });
  sequins.forEach((sequin, index) => {
    if (sequin.position.y >= canvas.height) sequins.splice(index, 1);
  });

  window.requestAnimationFrame(render);
};

// cycle through button states when clicked
clickButton = () => {
  if (!disabled) {
    disabled = true;
    // Loading stage
    button.classList.add("loading");
    button.classList.remove("ready");
    setTimeout(() => {
      // Completed stage
      button.classList.add("complete");
      button.classList.remove("loading");
      setTimeout(() => {
        window.initBurst();
        setTimeout(() => {
          // Reset button so user can select it again
          disabled = false;
          button.classList.add("ready");
          button.classList.remove("complete");
        }, 4000);
      }, 320);
    }, 1800);
  }
};

// re-init canvas if the window size changes
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

// resize listenter
window.addEventListener("resize", () => {
  resizeCanvas();
});

// click button on spacebar or return keypress
document.body.onkeyup = (e) => {
  if (e.keyCode == 13 || e.keyCode == 32) {
    clickButton();
  }
};

// Set up button text transition timings on page load
textElements = button.querySelectorAll(".button-text");
textElements.forEach((element) => {
  characters = element.innerText.split("");
  let characterHTML = "";
  characters.forEach((letter, index) => {
    characterHTML += `<span class="char${index}" style="--d:${
      index * 30
    }ms; --dr:${(characters.length - index - 1) * 30}ms;">${letter}</span>`;
  });
  element.innerHTML = characterHTML;
});

// kick off the render loop
render();
