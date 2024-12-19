export class InputHandler{
    constructor(){
        this.keys = [];  //includes the keys pressed, remove the ones not
        window.addEventListener('keydown',e => {
            console.log(e.key);
            
        })
    }
}