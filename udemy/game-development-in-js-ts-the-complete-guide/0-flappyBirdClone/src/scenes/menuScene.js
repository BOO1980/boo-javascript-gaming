import Phaser from "phaser";

class MenuScene extends Phaser.Scene{
    constructor(config){
        super('MenuScence');
        this.config = config;
    }

    preload(){
        this.load.image('sky','assets/sky.png')
    }
    create(){
        this.createBG();
        //this.scene.start('PlayScene');
    }
    createBG(){
        this.add.image(0, 0, "sky").setOrigin(0, 0);
    }

}

export default MenuScene