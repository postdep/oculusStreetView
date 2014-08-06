var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000),
	scene: new THREE.Scene(),
	renderer: new THREE.WebGLRenderer(),
	oculus: true,
	animate: null,
	bodyAngle: 45,
	
	init: function() {

	  //basic three.js configs: Here is where you can set up the initial settings for the environment
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor( 0xFFFFFF, 1);

      document.body.appendChild(this.renderer.domElement);
 
      this.camera.position.z = 200;
      // this.camera.position.y = 50;

      var light = new THREE.PointLight(0xffffcc);
	  light.position.set(0,500,0);
	  light.intensity=2;
	  this.scene.add(light);

	  var ambientLight = new THREE.AmbientLight(0x000044);
  	  this.scene.add(ambientLight);

      controls = new THREE.FlyControls(this.camera);
      controls.dragToLook = "true";					

	
	},

	
	render: function() {

		controls.update(1);
		this.renderer.render( this.scene, this.camera );
		// Logic.rotate();

	}
	
		
};

