var Logic = Logic || {};
Logic.window = window;

var Logic =  {

	step:0,

	move: function(){

		switch(Logic.step){

			case 0:
				TweenLite.to(Config.camera.position,3, {y: 150,  ease:Cubic.easeIn, onComplete: Logic.fadeRoom1});
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
				TweenLite.to(Config.camera.position,3, {x:150, y:260, z:2100,  ease:Cubic.easeIn,onComplete: Logic.room1Start});
				room2 = Config.scene.getObjectByName('room2');
				room2.visible = true;
				Logic.step += 1;
				break;

			case 3:
				TweenLite.to(Config.camera.position,3, {x:0, y:0, z: 50,  ease:Cubic.easeIn, onComplete: Logic.fadeRoom3});
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
		room2.position.x = 150;
		room2.position.y = 260;
		room2.position.z = 2100;
		room2.rotation.z = 180 * Math.PI/180
	},

	fadeRoom3: function(){

		room2 = Config.scene.getObjectByName('room2');
		room2.visible = false;
		room2.position.x = 0;
		room2.position.y = 150;
		room2.position.z = 0;
		room2.rotation.z = 0 * Math.PI/180
	},


	room1Start: function(){
		room1 = Config.scene.getObjectByName('room1');
		room1.visible = true;
		room1.position.x = 0;
		room1.position.y = 0;
		room1.position.z = 0;

		



	}

 
};

