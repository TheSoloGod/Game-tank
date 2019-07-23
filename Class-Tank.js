let Tank = function (x, y, speed, hp, armor, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.hp = hp;
    this.armor = armor;
    this.color = color;
    this.isAlive = true;
    this.isDisapear = false;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');

    this.takeDamage = function (bullet) {
        if(this.armor > 0){
            this.realDamage = bullet.damage - this.armor;
            if(this.realDamage > 0){
                this.armor = 0;
            }
            this.hp -= this.realDamage;
        }else {
            if(this.hp <= bullet.damage){
                this.hp = 0;
                this.isAlive = false;
                if(this == allTank[0]){
                    gameBoard.endGame();
                    // gameBoard.score = 0;
                }else {
                    gameBoard.score ++;
                    this.disapear();
                    this.apear();
                }
            }else {
                this.hp -= bullet.damage;
            }
        }
    };

    this.orientation = ORIENTATION_DEFAULT;
    this.drawTank = function () {
        this.image = document.getElementById("tank-" + this.orientation + "-" + this.color);
        this.ctx.beginPath();
        this.ctx.drawImage(this.image, this.x, this.y);
    };

    this.disapear = function () {
        if(this.isAlive == false) {
            this.isDisapear = true;
        }
    };

    this.apear = function () {
        if(this.isDisapear){ //clean được
            switch (this.orientation) {
                case ORIENTATION_UP:
                    this.x = random(this.canvas.width-IMAGE_TANK_SIZE, 0);
                    this.y = this.canvas.height-IMAGE_TANK_SIZE;
                    break;
                case ORIENTATION_DOWN:
                    this.x = random(this.canvas.width-IMAGE_TANK_SIZE, 0);
                    this.y = 0;
                    break;
                case ORIENTATION_LEFT:
                    this.x = this.canvas.width-IMAGE_TANK_SIZE;
                    this.y = random(this.canvas.height-IMAGE_TANK_SIZE, 0);
                    break;
                case ORIENTATION_RIGHT:
                    this.x = 0;
                    this.y = random(this.canvas.height-IMAGE_TANK_SIZE, 0);
                    break;
            }
            this.isAlive = true;
            this.hp = ENEMY_HP;
            this.armor = ENEMY_ARMOR;
        }
    };
};