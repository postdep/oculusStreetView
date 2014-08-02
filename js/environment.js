var Environment = Environment || {};
Environment.window = window;

var Environment =  {

	data: null,

	init: function(){
		
	},

	render_street_view_by_location: function(lat, lng) {
	    Config.svs.getPanoramaByLocation(new google.maps.LatLng(lat, lng), 50,
	        function (data, status) {
	            if (status === google.maps.StreetViewStatus.OK) {
	                Environment.render_street_view_by_id(data.location.pano);
	            } else {
	                console.error("Unable to get location");
	            }
	        });
	},

	render_street_view_by_id: function(pano_id) {
	    var img_canvas_context = 0;
	    var main_rotation = 0;
	    var pano_loader = new GSVPANO.PanoLoader({
	        zoom: 1
	    });
	    var depth_loader = new GSVPANO.PanoDepthLoader();

	    var old_root_object = Config.root_object;
	    var old_root_helper_object = Config.root_helper_object;

	    Config.root_object = new THREE.Object3D();
	    Config.scene.add(Config.root_object);
	    Config.root_helper_object = new THREE.Object3D();
	    Config.scene.add(Config.root_helper_object);
	    Config.svs.getPanoramaById(pano_id,
	        function (data, status) {
	            if (status === google.maps.StreetViewStatus.OK) {
	            	Environment.data = data;
	                pano_loader.load(new google.maps.LatLng(data.location.latLng.k, data.location.latLng.B));
	            } else {
	                console.error("Unable to get starting pano ID ");
	            }
	        });
	    pano_loader.onPanoramaLoad = function () {
	        var pano_container = document.getElementById('pano_container');
	        while (pano_container.firstChild) {
	            pano_container.removeChild(pano_container.firstChild);
	        }
	        pano_container.appendChild(this.canvas);
	        img_canvas_context = this.canvas.getContext('2d');
	        
	        main_rotation = Environment.data.tiles.centerHeading;
	        Config.cur_lat = Environment.data.location.latLng.k;
	        Config.cur_lng = Environment.data.location.latLng.B;
	        // if (Environment.data.links.length > 0) {
	        //     for (var i = 0; i < Environment.data.links.length; ++i) {
	        //         var helper_geometry_base = new THREE.Object3D();
	        //         var helper_shape = new THREE.Shape();
	        //         helper_shape.moveTo(0, 0);
	        //         helper_shape.lineTo(-2, 5);
	        //         helper_shape.lineTo(2, 5);
	        //         helper_shape.lineTo(0, 0);
	        //         var extrudeSettings = {
	        //             amount: 0.25
	        //         };
	        //         extrudeSettings.bevelEnabled = false;
	        //         var helper_geometry = new THREE.ExtrudeGeometry(helper_shape, extrudeSettings);
	        //         var helper_mesh = new THREE.Mesh(helper_geometry, new THREE.MeshNormalMaterial())
	        //         helper_mesh.rotation.x = Math.PI / 2.0;
	        //         helper_mesh.rotation.z = Math.PI / 2.0;
	        //         helper_mesh.position.x = 16;
	        //         helper_mesh.userData = Environment.data.links[i].pano;
	        //         helper_geometry_base.rotation.y = Environment.data.links[i].heading * Math.PI / 180.0;
	        //         helper_geometry_base.add(helper_mesh);
	        //         Config.root_helper_object.add(helper_geometry_base);
	        //         if (Config.old_root_helper_object) {
	        //             Config.scene.remove(old_root_helper_object);
	        //         }
	        //     }
	        // }
	        depth_loader.load(this.panoId);
	    };
	    depth_loader.onDepthLoad = function () {
	        var canvas = document.createElement("canvas");
	        var context = canvas.getContext('2d');
	        canvas.setAttribute('width', this.depthMap.width);
	        canvas.setAttribute('height', this.depthMap.height);
	        var image = context.getImageData(0, 0, this.depthMap.width, this.depthMap.height);
	        for (var y = 0; y < this.depthMap.height; ++y) {
	            for (var x = 0; x < this.depthMap.width; ++x) {
	                var col = this.depthMap.depthMap[y * this.depthMap.width + x] / 50 * 255;
	                image.data[4 * (y * this.depthMap.width + x) + 0] = col;
	                image.data[4 * (y * this.depthMap.width + x) + 1] = col;
	                image.data[4 * (y * this.depthMap.width + x) + 2] = 0.0;
	                image.data[4 * (y * this.depthMap.width + x) + 3] = 255;
	            }
	        }
	        context.putImageData(image, 0, 0);
	        var depth_container = document.getElementById('depth_container');
	        while (depth_container.firstChild) {
	            depth_container.removeChild(depth_container.firstChild);
	        }
	        depth_container.appendChild(canvas);
	        var geometry = new THREE.BufferGeometry();
	        var num_points = this.depthMap.width * this.depthMap.height;
	        var positions = new Float32Array(num_points * 3);
	        var colors = new Float32Array(num_points * 3);
	        var color_data = img_canvas_context.getImageData(0, 0, img_canvas_context.canvas.width, img_canvas_context.canvas.height).data;
	        var n = 0;
	        for (var y = 0; y < this.depthMap.height; ++y) {
	            var lat = (y / this.depthMap.height) * 180.0 - 90.0;
	            var r = Math.cos(lat * Math.PI / 180.0);
	            for (var x = 0; x < this.depthMap.width; ++x) {
	                var depth = parseFloat(this.depthMap.depthMap[y * this.depthMap.width + (this.depthMap.width - x)]);
	                var lng = (1-(x / this.depthMap.width)) * 360.0 - 180.0;
	                var pos = new THREE.Vector3();
	                pos.x = (r * Math.cos(lng * Math.PI / 180.0));
	                pos.y = (Math.sin(lat * Math.PI / 180.0));
	                pos.z = (r * Math.sin(lng * Math.PI / 180.0));
	                pos.multiplyScalar(depth);
	                pos.multiplyScalar(2.0);
	                positions[3 * n + 0] = isNaN(pos.x) ? 0 : pos.x;
	                positions[3 * n + 1] = isNaN(pos.y) ? 0 : pos.y;
	                positions[3 * n + 2] = isNaN(pos.z) ? 0 : pos.z;
	                var normalized_x = (1-x / this.depthMap.width);
	                var normalized_y = y / this.depthMap.height;
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
	        if (Config.old_root_object) {
	            Config.scene.remove(old_root_object);
	        }
	        // clear_input();
	    }
	}
 
};



$(function() {

    Environment.init();
 
});