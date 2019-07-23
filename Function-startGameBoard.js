let gameBoard = new GameBoard();
let allTank = [];
let allBullet = [];
gameBoard.buildTank();

setInterval(function (){
    gameBoard.clearRect();
    gameBoard.drawBackGround();
    gameBoard.autoMoveEnemyTank();
    gameBoard.checkOutMap();
    gameBoard.drawAllTank();
    gameBoard.setMoveBullet();
    gameBoard.drawAllBullet();
    gameBoard.count++;
    gameBoard.drawScore();
}, TIME_SETINTERVAL_DEFAULT);


