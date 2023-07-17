import Phaser from "phaser";

import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import PreloadScene from "./scenes/PreloadScene";

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH*0.1, y: HEIGHT/2}
const PAUSE_BUTTON_POSITION = {x: WIDTH-10, y: HEIGHT-10}

const SHARED_CONFIG ={
	width: WIDTH,
	height: HEIGHT,
	startPosition: BIRD_POSITION,
	pauseButtonPosition: PAUSE_BUTTON_POSITION
}
const config = {
	type: Phaser.AUTO, //default browser is webGL (web graphics library)
	...SHARED_CONFIG,
	physics: {
		default: "arcade", // Arcade physics plugin, manages physics simulation
		arcade: {
			debug: true,
		},
	},
	scene: [PreloadScene, new MenuScene(SHARED_CONFIG), new PlayScene(SHARED_CONFIG)]
};

//loading assets, such as images, music, animations
function preload() {
	this.load.image("sky", "assets/sky.png");
	this.load.image("bird", "assets/bird.png");
	this.load.image("pauseButton", "assets/pauseButton.png");
}

new Phaser.Game(config);
