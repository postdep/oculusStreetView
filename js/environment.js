var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	depthMap: null,

	grayScaleArray: [],

	imgWidth: 0,

	imgHeight: 0,



	init: function(){


		var sphere = new THREE.Mesh(
			new THREE.SphereGeometry(100, 100, 100),
			new THREE.MeshBasicMaterial({
			    map: THREE.ImageUtils.loadTexture("../pano.png"),
			    side:1
			})
		);

		sphere.rotation.y = 90  * (Math.PI/180);

		sphere.name = "sphere";

		Config.scene.add(sphere);

		this.getDepthData();



		
	},

	getDepthData: function(){


		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');
		var img = document.getElementById('depth');
		this.imgWidth = img.width;
		this.imgHeight = img.height;
		context.drawImage(img, 0, 0, this.imgWidth , this.imgHeight );
		this.depthMap = context.getImageData(0, 0, this.imgWidth, this.imgHeight);
		this.convertToGray();
	},

	convertToGray: function(){

		 for(var y = 0; y < Environment.depthMap.height; y++) {
	      for(var x = 0; x < Environment.depthMap.width; x++) {
	         // Get the index of the first byte of the pixel.
	         var startIdx = (y * 4 * Environment.depthMap.width) + (x * 4);

	         // Get the RGB values.
	         var red = Environment.depthMap.data[startIdx];
	         var green = Environment.depthMap.data[startIdx + 1];
	         var blue = Environment.depthMap.data[startIdx + 2];

	         // Convert to grayscale.  An explanation of the ratios
	         // can be found here: http://en.wikipedia.org/wiki/Grayscale
	         var grayScale = (red * 0.3) + (green * 0.59) + (blue * .11);
	         Environment.grayScaleArray.push(grayScale);
	        }
	       }
	    this.displace();
	},

	displace: function(){

		sphere = Config.scene.getObjectByName("sphere");

		uvArray = sphere.geometry.faceVertexUvs[0];

		faceArray = sphere.geometry.faces;


		for (x=0; x<uvArray.length; x++){

			for (y=0; y<2; y++){

				xcoord = uvArray[x][y].x * this.imgWidth;
				ycoord = uvArray[x][y].y * this.imgWidth;

				displaceValue = Environment.grayScaleArray[xcoord*ycoord];
				faceArray[x].normal.multiplyScalar(displaceValue);

			}

		}

		sphere.geometry.verticesNeedUpdate = true;


	}
 
};



$(function() {

    Environment.init();
 
});