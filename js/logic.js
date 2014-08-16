var Logic = Logic || {};
Logic.window = window;

var Logic =  {

	firstMove:false,

	move: function(){

		if(!Logic.firstMove){

			TweenLite.to(Config.camera.position,3, {y: 150,  ease:Cubic.easeIn, onComplete: Logic.fadeRoom1});
			Logic.firstMove = true;
			room2 = Config.scene.getObjectByName('room2');
			room2.visible = true;


		} else {

			TweenLite.to(Config.camera.position,3, {x: 300,  ease:Cubic.easeIn,onComplete: Logic.fadeRoom2});
			room1 = Config.scene.getObjectByName('room1');
			room1.visible = true;
		}

	},

	fadeRoom1: function(){

		room1 = Config.scene.getObjectByName('room1');
		room1.visible = false;
		room1.position.x = 280;
		room1.position.y = 150;
		room1.position.z = 0;
	},

	fadeRoom2: function(){

		room2 = Config.scene.getObjectByName('room2');
		room2.visible = false;
	},


 
};

