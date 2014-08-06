var Logic = Logic || {};
Logic.window = window;

var Logic =  {

//this is just an example of simple logic, and where to put it.

	//you can define scene logic here
	rotate: function(){
		if(Config.scene.children[2]){
			Config.scene.children[2].rotation.y+=.0005;	
		}	
	}
	

};