var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000),
	scene: new THREE.Scene(),
	renderer: null,
	oculus: true,
	animate: null,
	bodyAngle: 45,
	vector: new THREE.Vector3(),
	root_object: 0,
	root_helper_object: 0,
	tracker_map: null,
	tracker_marker_div: null,
	point_size: .7,
	point_cloud_material: null,
	show_map: true,
	show_pano: false,
	show_depth: false,
	default_lat: 40.75854, 
	default_lng: -73.985118,
	cur_lat: 40.75854,
	cur_lng: -73.985118,
	
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
	    // controls = new THREE.FlyControls(this.camera);
     //  	controls.dragToLook = "true";
	   


        this.controls = new THREE.DeviceOrientationControls(Config.camera, true);
        this.controls.connect();
        


       
	    
	    point_cloud_material = new THREE.PointCloudMaterial({
	        size: Config.point_size,
	        vertexColors: true,
	        sizeAttenuation: true,
	        fog: true
	    });

	    //set up the oculus rift config
        // this.effect = new THREE.OculusRiftEffect(this.renderer, {worldScale: 100});
        // this.effect.setSize(window.innerWidth,window.innerHeight);

      	// rotate a THREE.js object based on the orientation of the Oculus Rift

	
	},

	
	render: function() {

		this.controls.update(1);
		this.renderer.render( this.scene, this.camera );
		// this.effect.render(this.scene, this.camera);

	}
	
		
};

