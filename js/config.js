var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000),
	scene: new THREE.Scene(),
	renderer: new THREE.WebGLRenderer(),
	oculus: true,
	animate: null,
	
	init: function() {


	  this.renderer.setSize(window.innerWidth, window.innerHeight);
	  this.renderer.setClearColor( 0xFFFFFF, 1);
	  document.body.appendChild(this.renderer.domElement);

	    //basic three.js configs: Here is where you can set up the initial settings for the environment
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setClearColor( 0xF7F7F7, 1);

      document.body.appendChild(this.renderer.domElement);
 
      this.camera.position.z = 1500;
      this.camera.position.x = 1500;
      this.camera.position.y = 200;
      // this.camera.rotation.y = 45 * Math.PI/180;
      // this.camera.rotation.z = 10 * Math.PI/180;
      // this.camera.rotation.x = -70 * Math.PI/180;

      var light = new THREE.PointLight(0xffffff, .3,10000);
	  light.position.set(0,0,500);
	  this.scene.add(light);

	  // var light2 = new THREE.PointLight(0xffffff, .8,1000);
	  // light2.position.set(-400,500,200);
	  // this.scene.add(light2);

	  var ambientLight = new THREE.AmbientLight(0xa5a5a5);
  	  this.scene.add(ambientLight);

      controls = new THREE.OrbitControls(this.camera);



	    // controls = new THREE.DeviceOrientationControls(this.camera, true);
     //    controls.connect();
     	// controls = new THREE.FlyControls(this.camera);
     	// controls.dragToLook = true;
	   
	    //hammertime code
	    var myElement = document.getElementById('overlay');

		// We create a manager object, which is the same as Hammer(), but without the presetted recognizers. 
		var mc = new Hammer.Manager(myElement);


		// Tap recognizer with minimal 2 taps
		mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
		// Single tap recognizer
		mc.add( new Hammer.Tap({ event: 'singletap' }) );


		// we want to recognize this simulatenous, so a quadrupletap will be detected even while a tap has been recognized.
		mc.get('doubletap').recognizeWith('singletap');
		// we only want to trigger a tap, when we don't have detected a doubletap
		mc.get('singletap').requireFailure('doubletap');

		mc.on("doubletap", function(ev) {
		    Logic.move();
		}); 

		$("#default").click(function(){Logic.move()});

		$("#enter").click(function(){Environment.zoom()});	
	
	},

	
	render: function() {

		controls.update(1);
		this.renderer.render( this.scene, this.camera );
		
		

	}
	
		
};

