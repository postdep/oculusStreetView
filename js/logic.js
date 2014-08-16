var Logic = Logic || {};
Logic.window = window;

var Logic =  {

	step:0,

	move: function(){

		switch(Logic.step){

			case 0:
				TweenLite.to(Config.camera.position,3, {y: 150,  ease:Cubic.easeIn, onComplete: Logic.fadeRoom1});
				Logic.firstMove = true;
				room2 = Config.scene.getObjectByName('room2');
				room2.visible = true;
				Logic.step += 1;
				break

			case 1:
				TweenLite.to(Config.camera.position,3, {x: 300,  ease:Cubic.easeIn,onComplete: Logic.fadeRoom2});
				room1 = Config.scene.getObjectByName('room1');
				room1.visible = true;
				Logic.step += 1;
				break;

			case 2:
				TweenLite.to(Config.camera.position,3, {z: 3000,  ease:Cubic.easeIn,onComplete: Logic.room1Start});
				Logic.step += 1;
				break;

			case 3:
				TweenLite.to(Config.camera.position,3, {x:0, y:0, z: 50,  ease:Cubic.easeIn});
				Logic.step = 0;
				break;
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

	room1Start: function(){
		room1 = Config.scene.getObjectByName('room1');
		room1.visible = true;
		room1.position.x = 0;
		room1.position.y = 0;
		room1.position.z = 0;
	}

 
};

