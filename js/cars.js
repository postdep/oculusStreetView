var Cars = Cars || {};
Cars.window = window;

var Cars =  {

	array:[],

	array2:[],

	numCars: 40,

	init: function(){

		for( i=0; i<this.numCars; i++){

			var cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 100), new THREE.MeshPhongMaterial());
			cube.position.set(2000,800,i * 400 + Math.floor(Math.random()*5000));
			Cars.array.push(cube);
			Config.scene.add(cube);

			var cube = new THREE.Mesh(new THREE.CubeGeometry(100, 50, 50), new THREE.MeshPhongMaterial());
			cube.position.set(i * 400 + Math.floor(Math.random()*5000)-4000,1200, 300);
			Cars.array2.push(cube);
			Config.scene.add(cube);

		}

		

	},

	move: function(){

		for( i=0; i<this.array.length; i++){

			if(Cars.array[i].position.z < -4000){

				Cars.array[i].position.z = 10000;
			}

			if(Cars.array[i]){

				Cars.array[i].position.z-=15;

			}

			//second array

			if(Cars.array2[i].position.x > 10000){

				Cars.array2[i].position.x = -8000;
			}

			if(Cars.array2[i]){

				Cars.array2[i].position.x+=15;

			}

		}


	},
	

 
};

$(function() {

    Cars.init();
 
})