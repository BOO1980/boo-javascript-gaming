import BaseScene from "./BaseScene";

class ScoreScene extends BaseScene{
    constructor(config) {
        super('ScoreScene', {...config, canGoBack:true});
    }

    create() {
        super.create();
        const bestScore = localStorage.getItem('bestScore');
        this.add.text(...this.screenCentre, `Best Score:: ${bestScore}`, this.fontOptions).setOrigin(0.5,1);
    }

    createScore(){
        super.createScore();
    }

}
export default ScoreScene
