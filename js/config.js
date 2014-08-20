var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000),
	scene: new THREE.Scene(),
	renderer: new THREE.WebGLRenderer(),
	vector: new THREE.Vector3(),
	root_object: 0,
	root_helper_object: 0,
	tracker_map: null,
	tracker_marker_div: null,
	svs: new google.maps.StreetViewService(),
	geo_coder: new google.maps.Geocoder(),
	point_size: .7,
	point_cloud_material: null,
	show_map: true,
	show_pano: false,
	show_depth: false,
	default_lat: 40.759679, 
	default_lng: -73.984313,
	cur_lat: 40.759679,
	cur_lng: -73.984313,


	init: function() {

	    this.renderer = new THREE.WebGLRenderer({
	        antialias: true
	    });
	    this.renderer.setSize(window.innerWidth, window.innerHeight);
	    document.body.appendChild(this.renderer.domElement);
	    this.scene = new THREE.Scene();
	    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	    this.camera.x = 0;
	    this.camera.y = -30;
	    this.camera.z = 0;

	    var ambient_light = new THREE.AmbientLight(0xcccccc);
	    this.scene.add(ambient_light);
	    // controls = new THREE.DeviceOrientationControls(this.camera, true);
     //    controls.connect();

        controls = new THREE.FlyControls(this.camera);
        controls.dragToLook = true;
	   
	    
	    point_cloud_material = new THREE.PointCloudMaterial({
	        size: Config.point_size,
	        vertexColors: true,
	        sizeAttenuation: true,
	        fog: true
	    });

	    this.clock = new THREE.Clock();	

		var loader = new THREE.ColladaLoader();
		loader.options.convertUpAxis = true;
		loader.load( 'js/monster.dae', function ( collada ) {

			this.dae = collada.scene;

			this.dae.traverse( function ( child ) {

				if ( child instanceof THREE.SkinnedMesh ) {

					var animation = new THREE.Animation( child, child.geometry.animation );
					animation.play();

				}

			} );

			this.dae.scale.x = this.dae.scale.y = this.dae.scale.z = .02;
			this.dae.rotation.y = 30 * Math.PI/180;
			this.dae.position.x = -150;
			this.dae.position.z = 100;
			this.dae.position.y = -5;
			this.dae.name = "monster";
			this.dae.updateMatrix();

			Config.scene.add(dae);
			Config.animate();

		} );



      	
	
	},

	
	render: function() {

		controls.update(1);
		this.renderer.render( this.scene, this.camera );

	},

	animate: function(){

		requestAnimationFrame( Config.animate );

		var delta = Config.clock.getDelta()/4;

		// animate Collada model

		THREE.AnimationHandler.update( delta );


		Config.render();
		Logic.move();

	}
	
		
};

