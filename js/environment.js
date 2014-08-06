var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	init: function(){


		var sphere = new THREE.Mesh(
			new THREE.SphereGeometry(100, 100, 100),
			new THREE.MeshBasicMaterial({
			    map: THREE.ImageUtils.loadTexture("../pano.png"),
			    side:1
			})
		);

		sphere.rotation.y = 90  * (Math.PI/180);

		Config.scene.add(sphere);

		
	}
 
};



$(function() {

    Environment.init();
 
});