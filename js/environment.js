var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	init: function(){
		//this is where you set up all of the meshes of your environment. Just make sure you use Config.Scene.add() 

		  // var cube = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // Config.scene.add(cube);

		  // var cube2 = new THREE.Mesh(new THREE.CubeGeometry(200, 200, 200), new THREE.MeshNormalMaterial());
		  // cube2.position.x = 400;
		  // Config.scene.add(cube2);

		// this section is for loading models. Below is an example of terrain from blender
		var loader = new THREE.JSONLoader();
	    loader.load( "room.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.position={x:-70, y:-30, z:-30};
	      	mesh.scale={x:50, y:50, z:50};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.name = 'room1';
	      	Config.scene.add(mesh);

	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.position={x:-70, y:-30, z:-200};
	      	mesh.scale={x:50, y:50, z:50};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.name = 'room2';
	      	mesh.visible = false;
	      	Config.scene.add(mesh);

	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.position={x:270, y:-30, z:-200};
	      	mesh.scale={x:50, y:50, z:50};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.name = 'room3';
	      	mesh.visible = false;
	      	Config.scene.add(mesh);

	      	// mesh.material.materials[0].side = 0;
	    });
	}
 
};



$(function() {

    Environment.init();
 
});