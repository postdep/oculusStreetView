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

	    var pointLight = new THREE.PointLight(0xffffff, 10, 1000);
	    pointLight.position.set( 50, 50, -50 );
	    this.scene.add(pointLight);
	    controls = new THREE.DeviceOrientationControls(this.camera, true);
        controls.connect();
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
	
	},

	
	render: function() {

		controls.update(1);
		this.renderer.render( this.scene, this.camera );

	}
	
		
};

