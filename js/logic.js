var Logic = Logic || {};
Logic.window = window;

var Logic =  {
	
	
	move: function(){

		monster = Config.scene.getObjectByName("monster");
		monster.position.x = monster.position.x+.1;
		monster.position.z = monster.position.z-.05;
	}
	
	
	
		
};

