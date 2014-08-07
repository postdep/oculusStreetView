var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	data: null,

	imgWidth: 0,

	imgHeight: 0,

	depthMap: null,

	grayScaleArray: [],

	panoImage: null,

	depthImage: null,

	init: function(){

		this.getDepthData();
		
	},

	getDepthData: function(){

		
		this.depthImage=document.getElementById("depth");

		var depthcanvas = document.createElement("canvas");

	    depth_canvas_context = depthcanvas.getContext('2d');
	   
	    depth_canvas_context.drawImage(this.depthImage, 0, 0);
        
		this.depthMap = depth_canvas_context.getImageData(0, 0, 512 , 256);
		
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

	       this.renderCloud();
	},

	

	renderCloud: function() {
	    var img_canvas_context = 0;
	    var main_rotation = 0;
	  



	    Config.root_object = new THREE.Object3D();
	    Config.scene.add(Config.root_object);


	    this.panoImage=document.getElementById("pano");

	 	var panocanvas = document.createElement("canvas");

	 	img_canvas_context = panocanvas.getContext('2d');

	 	img_canvas_context.drawImage(this.panoImage, 0, 0);


        var geometry = new THREE.BufferGeometry();

        var num_points = 512 * 256;

        var positions = new Float32Array(num_points * 3);

        var colors = new Float32Array(num_points * 3);

        var color_data = img_canvas_context.getImageData(0, 0, 832, 416).data;

        var n = 0;

        for (var y = 0; y < 256; ++y) {

            var lat = (y / 256) * 180.0 - 90.0;
            
            var r = Math.cos(lat * Math.PI / 180.0);
            
            for (var x = 0; x < 512; ++x) {
                var depth = parseFloat(Environment.grayScaleArray[y * 512 + (512 - x)]);
                var lng = (1-(x / 512)) * 360.0 - 180.0;
                var pos = new THREE.Vector3();
                pos.x = (r * Math.cos(lng * Math.PI / 180.0));
                pos.y = (Math.sin(lat * Math.PI / 180.0));
                pos.z = (r * Math.sin(lng * Math.PI / 180.0));
                pos.multiplyScalar(depth);
                pos.multiplyScalar(2.0);
                positions[3 * n + 0] = isNaN(pos.x) ? 0 : pos.x;
                positions[3 * n + 1] = isNaN(pos.y) ? 0 : pos.y;
                positions[3 * n + 2] = isNaN(pos.z) ? 0 : pos.z;
                var normalized_x = (1-x / 512);
                var normalized_y = y / 256;
                var color_canvas_x = parseInt(normalized_x * img_canvas_context.canvas.width);
                var color_canvas_y = parseInt(normalized_y * img_canvas_context.canvas.height);
                var color_index = color_canvas_y * img_canvas_context.canvas.width * 4 + color_canvas_x * 4;
                colors[3 * n + 0] = (color_data[color_index + 0]) / 255.0;
                colors[3 * n + 1] = (color_data[color_index + 1]) / 255.0;
                colors[3 * n + 2] = (color_data[color_index + 2]) / 255.0;
                n++;
            }
        }
        geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.computeBoundingBox();
        var pointcloud = new THREE.PointCloud(geometry, point_cloud_material);
        pointcloud.rotation.y = main_rotation * Math.PI / 180.0;
        pointcloud.rotation.z = 180 * Math.PI / 180.0;
        Config.root_object.add(pointcloud);


	}
 
};



$(function() {

    Environment.init();
 
});