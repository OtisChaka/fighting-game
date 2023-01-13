const gameArea = document.querySelector('#game-area');
const c = gameArea.getContext('2d');
gameArea.width = window.innerWidth;
gameArea.height = window.innerHeight;

let x = 100;
let y = 100;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};
//width then height

//plaform x,y,width,height
const MainPlatformDim = {
  width: 820,
  height: 50,
  pos: {
    x: window.innerWidth / 2 - 800 / 2 + 5,
    y: window.innerHeight - 270,
  },
};
const mainPlatform = new Platform(
  MainPlatformDim.pos.x,
  MainPlatformDim.pos.y,
  MainPlatformDim.width,
  MainPlatformDim.height,
  platformSprite
);

const leftPlatform = new Platform(
  MainPlatformDim.pos.x + 80,
  MainPlatformDim.pos.y - 140,
  150,
  MainPlatformDim.height / 2,
  platformSprite
);

const rightPlatform = new Platform(
  MainPlatformDim.pos.x +
    MainPlatformDim.width -
    MainPlatformDim.width / 4 -
    40,
  MainPlatformDim.pos.y - 140,
  150,
  MainPlatformDim.height / 2,
  platformSprite
);
const centerPlatform = new Platform(
  window.innerWidth / 2 - 200 / 2 + 5,
  MainPlatformDim.pos.y - 275,
  200,
  MainPlatformDim.height / 2,
  platformSprite
);
let platforms = [mainPlatform, leftPlatform, rightPlatform, centerPlatform];

//player, width,height,x,y
const player = new Player(
  30,
  50,
  MainPlatformDim.pos.x,
  MainPlatformDim.pos.y - 100
);

(function Update() {
  window.requestAnimationFrame(Update);
  c.clearRect(0, 0, gameArea.width, gameArea.height);
  c.fillStyle = '#333';
  c.fillRect(0, 0, gameArea.width, gameArea.height);

  player.draw();
  player.update();
  player.move();

  platforms.forEach((platform) => {
    platform.draw();
    platform.checkCol();
  });
})();
window.addEventListener('keydown', (e) => {
  let key = e.code;
  switch (key) {
    case 'Space':
      player.jump();

      break;
    case 'KeyW':
      player.jump();

      break;
    case 'KeyD':
      keys.right.pressed = true;

      break;

    case 'KeyA':
      keys.left.pressed = true;

      break;
  }
});
window.addEventListener('keyup', (e) => {
  let key = e.code;
  switch (key) {
    case 'KeyD':
      keys.right.pressed = false;

      break;

    case 'KeyA':
      keys.left.pressed = false;

      break;
  }
});
console.log(keys.left.pressed);

platformSprite.onload = () => {};
