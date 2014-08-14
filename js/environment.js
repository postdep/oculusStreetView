var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	canRotate: true,

	init: function(){

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-700,-300,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-350,-300,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(0,-300,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(350,-300,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(700,-300,300);
		Config.scene.add(cube);

		//row 2
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-700,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-350,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(0,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(350,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(700,-150,150);
		Config.scene.add(cube);

		
		//row 3
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-700,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-350,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(0,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(350,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(700,0,0);
		Config.scene.add(cube);

		//row 4
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-700,150,-150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-350,150,-150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(0,150,-150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(350,150,-150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(700,150,-150);
		Config.scene.add(cube);

		//row 5
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-700,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(-350,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(0,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(350,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshLambertMaterial());
		cube.position.set(700,300,-300);
		Config.scene.add(cube);

		this.randomize();

	
		  
	},

	randomize: function(){

		for (object in Config.scene.children){

			if(!(Config.scene.children[object]  instanceof THREE.PointLight) && !(Config.scene.children[object] instanceof THREE.AmbientLight)){
			
				Config.scene.children[object].position.z = Config.scene.children[object].position.z + Math.floor(Math.random() * 700) - 350;
				
			}
		}
		this.loadModels();
	},

	loadModels: function(){

		var cube = new THREE.Mesh(new THREE.CubeGeometry(280,150,200), new THREE.MeshLambertMaterial());
		cube.position.set(0,0,0);
		Config.scene.add(cube);


		var loader = new THREE.JSONLoader();
	    loader.load( "room.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.position={x:0, y:0, z:0};
	      	mesh.scale={x:40, y:40, z:40};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.visible = false;
	      	mesh.name = 'room1';
	      	Config.scene.add(mesh);

	      	mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	mesh.position={x:0, y:120, z:0};
	      	mesh.scale={x:40, y:40, z:40};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.visible = false;
	      	mesh.name = 'room2';
	      	Config.scene.add(mesh);

	      	console.log('done');
	      	$('#intro').fadeOut(function(){

	      		$('#enter').css("display", "table-cell");
	      	});

	      	

	      	// mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	// mesh.position={x:-70, y:-30, z:-200};
	      	// mesh.scale={x:50, y:50, z:50};
	      	// mesh.rotation.x = 90 * Math.PI/180;
	      	// mesh.rotation.y = 180 * Math.PI/180;
	      	// mesh.name = 'room2';
	      	// mesh.visible = false;
	      	// Config.scene.add(mesh);

	      	// mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
	      	// mesh.position={x:270, y:-30, z:-200};
	      	// mesh.scale={x:50, y:50, z:50};
	      	// mesh.rotation.x = 90 * Math.PI/180;
	      	// mesh.rotation.y = 180 * Math.PI/180;
	      	// mesh.name = 'room3';
	      	// mesh.visible = false;
	      	// Config.scene.add(mesh);

	      	// mesh.material.materials[0].side = 0;
	    });

	},

	zoom: function(){

		this.canRotate = false;
		room1 = Config.scene.getObjectByName('room1');
		room1.visible = true;
		
		TweenLite.to(Config.camera.position,3, {x:0, y:0, z:50,  ease:Cubic.easeOut, onComplete:Environment.addAmbient});
		// TweenLite.to(Config.camera.rotation,3, {x:0, y:0, z:0,  ease:Cubic.easeOut});
		
		


	},

	addAmbient: function(){

		controls = new THREE.DeviceOrientationControls(Config.camera);
		controls.connect();
		var ambientLight = new THREE.AmbientLight(0xffffff);
      	Config.scene.add(ambientLight);

	}
 
};



$(function() {

    Environment.init();
 
});