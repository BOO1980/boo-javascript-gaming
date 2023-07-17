import Phaser from "phaser";

class PreloadScene extends Phaser.Scene{
    
    constructor(){
        super(' PreloadScence');
    }

    preload(){
        this.load.image("sky", "assets/sky.png");
        this.load.image("bird", "assets/bird.png");
        this.load.image("pipe", "assets/pipe.png");
        this.load.image("pauseButton", "assets/pause.png");
    }
    create(){
        this.scene.start('MenuScene');
    }
    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0, 0);
    }

}

export default PreloadScene