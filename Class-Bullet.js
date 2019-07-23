let Bullet = function (x, y, radius, speed, damage, color, tank) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.damage = damage;
    this.color = color;
    this.tank = tank;
    this.orientation = tank.orientation;
    this.isCollision = false;

    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");

    this.fillStyle = function () {
        this.ctx.fillStyle = BULLET_DEFAULT_COLOR;
        this.ctx.fill();
    };

    this.drawBullet = function () {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        this.fillStyle();
    };
    this.checkCollision = function () {
        if(this.tank == allTank[0]){
            for (let i=1; i<allTank.length; i++){
                if(allTank[i].x < this.x && this.x < allTank[i].x + IMAGE_TANK_SIZE
                && allTank[i].y < this.y && this.y < allTank[i].y + IMAGE_TANK_SIZE){
                    this.isCollision = true;
                    this.disapear();
                    allTank[i].takeDamage(this);
                }
            }
        }else {
            if(allTank[0].x < this.x && this.x < allTank[0].x + IMAGE_TANK_SIZE
            && allTank[0].y < this.y && this.y < allTank[0].y + IMAGE_TANK_SIZE){
                this.isCollision = true;
                this.disapear();
                allTank[0].takeDamage(this);
            }
        }
    };

    this.disapear = function () {
        for (let i=0; i<allBullet.length; i++){
            if(allBullet[i].isCollision == true
            || allBullet[i].x < 0
            || allBullet[i].x > this.canvas.width
            || allBullet[i].y < 0
            || allBullet[i].y > this.canvas.height){
                allBullet.splice(i, 1);
            }
        }
    };
};