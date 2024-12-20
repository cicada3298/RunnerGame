const states = {
    SITTING : 0,
    RUNNING : 1,
    JUMPING : 2,
    FALLING : 3
}

class State { 
    constructor(state){
        this.state = state;
    }
}

export class Sitting extends State {
    constructor(player){
        super("SITTING");
        this.player = player;
    }
    enter(){  //defines the entry of the hero in the state
        this.player.frameY = 5;
    }
    handleInput(input){  //different inputs when hero is in the state
        if(input.includes('ArrowLeft') || input.includes('ArrowRight')){
            this.player.setState(states.RUNNING);
        }
    }
}

export class Running extends State {
    constructor(player){
        super("RUNNING");
        this.player = player;
    }
    enter(){  //defines the entry of the hero in the state
        this.player.frameY = 3;
    }
    handleInput(input){  //different inputs when hero is in the state
        if(input.includes('ArrowDown')){
            this.player.setState(states.SITTING);
        }else if(input.includes('ArrowUp')){
            this.player.setState(states.JUMPING);
        }
    }
}

export class Jumping extends State {
    constructor(player){
        super("JUMPING");
        this.player = player;
    }
    enter(){  //defines the entry of the hero in the state
        if(this.player.onGround())this.player.vy -= 30;
        this.player.frameY = 1;
    }
    handleInput(input){  //different inputs when hero is in the state
        if(this.player.vy > this.player.weight){
            this.player.setState(states.FALLING);
        }
    }
}