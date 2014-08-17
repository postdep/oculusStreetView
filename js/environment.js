var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	canRotate: true,

	init: function(){

		//row 0
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 800), new THREE.MeshPhongMaterial());
		cube.position.set(-700,-450,700);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 500), new THREE.MeshPhongMaterial());
		cube.position.set(350,-450,400);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 800), new THREE.MeshPhongMaterial());
		cube.position.set(700,-450,350);
		Config.scene.add(cube);

		//row 1
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-700,-300,500);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,-300,390);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(0,-300,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(700,-300,350);
		Config.scene.add(cube);

		//row 2
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-700,-150,300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 600), new THREE.MeshPhongMaterial());
		cube.position.set(0,-150,310);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(350,-150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 400), new THREE.MeshPhongMaterial());
		cube.position.set(700,-150,10);
		Config.scene.add(cube);

		
		//row 3
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 400), new THREE.MeshPhongMaterial());
		cube.position.set(-700,0,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(0,0,220);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(350,0,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 700), new THREE.MeshPhongMaterial());
		cube.position.set(700,0,-220);
		Config.scene.add(cube);

		//row 4
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-700,150,-50);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,150,150);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(0,150,10);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(350,150,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 500), new THREE.MeshPhongMaterial());
		cube.position.set(700,150,-150);
		Config.scene.add(cube);

		//row 5
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 700), new THREE.MeshPhongMaterial());
		cube.position.set(-700,300,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 500), new THREE.MeshPhongMaterial());
		cube.position.set(0,300,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(350,300,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 500), new THREE.MeshPhongMaterial());
		cube.position.set(700,300,0);
		Config.scene.add(cube);

		//row 6
		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 800), new THREE.MeshPhongMaterial());
		cube.position.set(-700,450,100);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(-350,450,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(0,450,0);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 300), new THREE.MeshPhongMaterial());
		cube.position.set(350,450,-300);
		Config.scene.add(cube);

		var cube = new THREE.Mesh(new THREE.CubeGeometry(350, 150, 500), new THREE.MeshPhongMaterial());
		cube.position.set(700,450,0);
		Config.scene.add(cube);

		var loader = new THREE.JSONLoader();
	    loader.load( "startCity.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( materials ) );
	      	mesh.position={x:0, y:200, z:-700};
	      	mesh.scale={x:130, y:100, z:100};
	      	// mesh.rotation.y = 45 * Math.PI/180;
	      	mesh.name = 'startCity';
	      	Config.scene.add(mesh);

		});


		this.loadModels();		
		  
	},

	loadModels: function(){

		var cube = new THREE.Mesh(new THREE.CubeGeometry(280,150,200), new THREE.MeshPhongMaterial());
		cube.position.set(0,0,0);
		Config.scene.add(cube);


		var loader = new THREE.JSONLoader();
	    loader.load( "room.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( materials ) );
	      	mesh.position={x:0, y:0, z:0};
	      	mesh.scale={x:40, y:40, z:40};
	      	mesh.rotation.x = 90 * Math.PI/180;
	      	mesh.rotation.y = 180 * Math.PI/180;
	      	mesh.visible = false;
	      	mesh.name = 'room1';
	      	Config.scene.add(mesh);

	      	mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( materials ) );
	      	mesh.position={x:0, y:150, z:0};
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


	    });

	    this.renderCities();

	},

	zoom: function(){

		$("#enter").fadeOut();
		this.canRotate = false;
		room1 = Config.scene.getObjectByName('room1');
		room1.visible = true;
		
		TweenLite.to(Config.camera.position,3, {x:0, y:0, z:50,  ease:Cubic.easeOut, onComplete:Environment.changeControls});
		
		light = Config.scene.getObjectByName("ambi");
		TweenLite.to(light.color,7, {r:.3, g:.3, b:.3,  ease:Cubic.easeOut, onComplete:Environment.changeControls});		


	},

	changeControls: function(){

		// Config.controls = new THREE.FlyControls(Config.camera);
		// Config.controls.dragToLook = true;

		Config.controls = new THREE.DeviceOrientationControls(Config.camera);
		Config.controls.connect();
		

	},

	renderCities: function(){

		var loader = new THREE.JSONLoader();
	    loader.load( "city.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( materials ) );
	      	mesh.position={x:0, y:0, z:3000};
	      	mesh.scale={x:100, y:100, z:100};
	      	// mesh.rotation.y = 45 * Math.PI/180;
	      	mesh.name = 'city';
	      	Config.scene.add(mesh);

		});

		loader.load( "city2.js", function(geometry, materials){
	      	mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( materials ) );
	      	mesh.position={x:3500, y:0, z:2000};
	      	mesh.scale={x:100, y:100, z:100};
	      	mesh.rotation.x = 180 * Math.PI/180;
	      	mesh.rotation.y = 90 * Math.PI/180;
	      	mesh.name = 'city';
	      	Config.scene.add(mesh);

		});
 	}
};



$(function() {

    Environment.init();
 
});