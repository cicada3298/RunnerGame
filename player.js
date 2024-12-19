export class Player{
    constructor(game){  //javascript objects are reference datatypes;  
        this.game = game; //when an entire 'Game' object is passed, it is not a copy, but a pointer to it
        this.height = 91.3;
        this.width = 100;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById('player');
        this.speed = 0;
        this.maxSpeed = 10;
    }
    update(input){
        this.x += this.speed;
        if(input.includes('ArrowRight')) this.speed = this.maxSpeed;
        else if (input.includes('ArrowLeft'))this.speed = -this.maxSpeed;
        else this.speed = 0;
        if(this.x < 0)this.x = 0;
        if(this.x > this.game.width - this.width)this.x = this.game.width - this.width;
        //verical movement
        if(input.includes('ArrowUp') && this.onGround())this.vy -= 20;
        this.y += this.vy;
        if(!this.onGround())this.vy += this.weight;
        else this.vy = 0;
    }
    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        //context.drawImage(this.image, sx, sy, sw, sh, this.x, this.y, this.width, this.height);
        //drawimage is used to draw an image from a source to a destination in a web page
        //sx -> start x coord in source frame, sy -> start y coord in source frame
        //sw -> source width sh -> height, these four select the frame from source image
    }
    onGround(){
        return this.y > this.game.height - this.height;
    }
}