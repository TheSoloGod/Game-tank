let GameBoard = function () {
    this.score = 0;
    this.count = 0;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.drawBackGround = function () {
        this.ctx.beginPath();
        this.ctx.fillStyle = BACKGROUND_DEFAULT_COLOR;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.drawScore = function () {
        this.ctx.beginPath();
        this.ctx.font = FONT;
        this.ctx.fillStyle = SCORE_DEFAULT_COLOR;
        this.ctx.fillText("Score: " + this.score, 10, 30);
    };

    this.clearRect = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.buildBullet = function (index, orientation, positionX, positionY) {
        if(allTank[index].orientation == orientation){
            let x = allTank[index].x + positionX;
            let y = allTank[index].y + positionY;
            let bullet = new Bullet(x, y, BULLET_DEFAULT_RADIUS, BULLET_DEFAULT_SPEED, BULLET_DEFAULT_DAMAGE, BULLET_DEFAULT_COLOR, allTank[index]);
            allBullet.push(bullet);
        }
    };

    this.buildMyBulletCase = function () {
        switch (allTank[0].orientation) {
            case ORIENTATION_UP:
                this.buildBullet(0, ORIENTATION_UP, IMAGE_TANK_SIZE/2, 0);
                break;
            case ORIENTATION_DOWN:
                this.buildBullet(0, ORIENTATION_DOWN, IMAGE_TANK_SIZE/2, IMAGE_TANK_SIZE);
                break;
            case ORIENTATION_LEFT:
                this.buildBullet(0, ORIENTATION_LEFT, 0, IMAGE_TANK_SIZE/2);
                break;
            case ORIENTATION_RIGHT:
                this.buildBullet(0, ORIENTATION_RIGHT, IMAGE_TANK_SIZE, IMAGE_TANK_SIZE/2);
                break;
        }
    };

    this.setMoveBullet = function () {
        for (let i=0; i<allBullet.length; i++){
            switch (allBullet[i].orientation) {
                case ORIENTATION_UP:
                    allBullet[i].y -= allBullet[i].speed;
                    allBullet[i].checkCollision();
                    break;
                case ORIENTATION_DOWN:
                    allBullet[i].y += allBullet[i].speed;
                    allBullet[i].checkCollision();
                    break;
                case ORIENTATION_LEFT:
                    allBullet[i].x -= allBullet[i].speed;
                    allBullet[i].checkCollision();
                    break;
                case ORIENTATION_RIGHT:
                    allBullet[i].x += allBullet[i].speed;
                    allBullet[i].checkCollision();
                    break;
            }
        }
    };

    this.drawAllBullet = function () {
        for(let i=0; i<allBullet.length; i++){
            allBullet[i].drawBullet();
        }
    };

    this.buildTank = function () {
        for(let i=0; i<dataTank.length; i++){
            let tank = new Tank(dataTank[i][0], dataTank[i][1], dataTank[i][2], dataTank[i][3], dataTank[i][4], dataTank[i][5]);
            allTank.push(tank);
        }
    };

    this.setMoveTank = function (index, orientation, coordinates, reverse) {
        allTank[index].orientation = orientation;
        if(coordinates){
            allTank[index].x += reverse * allTank[index].speed;
        }else {
            allTank[index].y += reverse * allTank[index].speed;
        }
    };

    this.autoMoveEnemyTank = function () {
        if(this.count % 3 ==0){
            this.setMoveTank(1, ORIENTATION_RIGHT, true, NONREVERSE);
            this.buildBullet(1, ORIENTATION_RIGHT, IMAGE_TANK_SIZE, IMAGE_TANK_SIZE/2);

            this.setMoveTank(2, ORIENTATION_UP, false, REVERSE);
            this.buildBullet(2, ORIENTATION_UP, IMAGE_TANK_SIZE/2, 0);

            this.setMoveTank(3, ORIENTATION_LEFT, true, REVERSE);
            this.buildBullet(3, ORIENTATION_LEFT, 0, IMAGE_TANK_SIZE/2);

            this.setMoveTank(4, ORIENTATION_DOWN, false, NONREVERSE);
            this.buildBullet(4, ORIENTATION_DOWN, IMAGE_TANK_SIZE/2, IMAGE_TANK_SIZE);

            this.count = SCORE_DEFAULT;
        }
    };

    this.drawAllTank = function () {
        for(let i=0; i<allTank.length; i++) {
            allTank[i].drawTank();
        }
    };


    this.checkOutMap = function (){
        for (let i=1; i<allTank.length; i++){
            if(allTank[i].x < 0
                || allTank[i].x > canvas.width
                || allTank[i].y < 0
                || allTank[i].y > canvas.height){
                allTank[i].isDisapear = true;
                allTank[i].apear();
            }
        }
    };
    
    this.endGame = function () {
        alert("Game Over");
        allTank[0].x = this.canvas.width;
        allTank[0].y = this.canvas.height;
        for (let i=0; i<allTank.length; i++){
            allTank[i].speed = 0;
        }
    }
};