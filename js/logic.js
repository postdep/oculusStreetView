var Logic = Logic || {};
Logic.window = window;

var Logic =  {

	firstMove:false,

	move: function(){

		if(!Logic.firstMove){

			TweenLite.to(Config.camera.position,3, {z: -200,  ease:Cubic.easeIn, onComplete: Logic.fadeRoom1});
			Logic.firstMove = true;
			room2 = Config.scene.getObjectByName('room2');
			room2.visible = true;


		} else {

			TweenLite.to(Config.camera.position,3, {x: 300,  ease:Cubic.easeIn,onComplete: Logic.fadeRoom2});
			room3 = Config.scene.getObjectByName('room3');
			room3.visible = true;
		}

	},

	fadeRoom1: function(){

		room1 = Config.scene.getObjectByName('room1');
		room1.visible = false;
	},

	fadeRoom2: function(){

		room2 = Config.scene.getObjectByName('room2');
		room2.visible = false;
	},


 
};

