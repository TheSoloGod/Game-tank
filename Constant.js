const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";
const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_DEFAULT = ORIENTATION_UP;

const IMAGE_TANK_SIZE = 64;
const TANK_SPEED = 10;

const MY_TANK_COLOR = "yellow";
const MY_TANK_HP = 100;
const MY_TANK_ARMOR = 50;

const ENEMY_COLOR = "green";
const ENEMY_HP = 50;
const ENEMY_ARMOR = 10;

const BACKGROUND_DEFAULT_COLOR = "black";

const BULLET_DEFAULT_RADIUS = 2;
const BULLET_DEFAULT_SPEED = 20;
const BULLET_DEFAULT_DAMAGE = 100;
const BULLET_DEFAULT_COLOR = "white";

const SCORE_DEFAULT = 0;
const SCORE_DEFAULT_COLOR = "white";
const FONT = "bold 25px verdana, sans-serif";

const REVERSE = -1;
const NONREVERSE = 1;

const TIME_SETINTERVAL_DEFAULT = 100;

let dataTank = [[200, 200, TANK_SPEED, MY_TANK_HP, MY_TANK_ARMOR, MY_TANK_COLOR],
                [0, 100, TANK_SPEED, ENEMY_HP, ENEMY_ARMOR, ENEMY_COLOR],
                [100, canvas.height-IMAGE_TANK_SIZE, TANK_SPEED, ENEMY_HP,  ENEMY_ARMOR, ENEMY_COLOR],
                [canvas.width-IMAGE_TANK_SIZE, 400, TANK_SPEED, ENEMY_HP,  ENEMY_ARMOR, ENEMY_COLOR],
                [400, 0, TANK_SPEED, ENEMY_HP, ENEMY_ARMOR, ENEMY_COLOR]];
