var Config = Config || {};
Config.window = window;

var Config =  {
	
	
	camera: new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 20000),
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
 
      this.camera.position.z = 800;
      this.camera.position.x = 700;
      this.camera.position.y = 450;


      var light = new THREE.PointLight(0xffffff, .3,10000);
	  light.position.set(0,500,700);
	  this.scene.add(light);



	  var ambientLight = new THREE.AmbientLight(0xa5a5a5);
	  ambientLight.name = "ambi";
  	  this.scene.add(ambientLight);

      Config.controls = new THREE.OrbitControls(this.camera);


	   
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

		Config.controls.update(1);
		this.renderer.render( this.scene, this.camera );
		
		

	}
	
		
};

