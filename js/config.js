var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000),
	scene: new THREE.Scene(),
	renderer: new THREE.WebGLRenderer(),
	oculus: true,
	animate: null,
	
	init: function() {


	    this.renderer.setSize(window.innerWidth, window.innerHeight);
	    this.renderer.setClearColor( 0xFFFFFF, 1);
	    document.body.appendChild(this.renderer.domElement);
	    this.scene = new THREE.Scene();
	    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
	    this.camera.position.x = 2.499999999999999;
	    this.camera.position.y = 1.6095720923476355;
	    this.camera.position.z = -3.3228371294452006;
	    this.camera.rotation.x = -1.6899859168778937;

	    var pointLight = new THREE.PointLight(0xffffff, 10, 1000);
	    pointLight.position.set( 50, 50, -50 );
	    this.scene.add(pointLight);
	    // controls = new THREE.DeviceOrientationControls(this.camera, true);
     //    controls.connect();
     	controls = new THREE.FlyControls(this.camera);
     	controls.dragToLook = true;
	   
	    




      	
	
	},

	
	render: function() {

		controls.update(1);
		this.renderer.render( this.scene, this.camera );

	}
	
		
};

