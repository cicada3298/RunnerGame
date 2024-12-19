export class Player{
    constructor(game){  //javascript objects are reference datatypes;  
        this.game = game; //when an entire 'Game' object is passed, it is not a copy, but a pointer to it
        this.height = 91.3;
        this.width = 100;
        this.x = 0;
        this.y = this.game.height - this.height;
        this.image = document.getElementById('player');
    }
    update(){
        //this.x++;
    }
    draw(context){
        context.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        //context.drawImage(this.image, sx, sy, sw, sh, this.x, this.y, this.width, this.height);
        //drawimage is used to draw an image from a source to a destination in a web page
        //sx -> start x coord in source frame, sy -> start y coord in source frame
        //sw -> source width sh -> height, these four select the frame from source image
    }
}