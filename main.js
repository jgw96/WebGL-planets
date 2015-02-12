var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );

				camera.position.x = 200;
				camera.position.y = 100;
				camera.position.z = 200;

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );


      var controls = new THREE.OrbitControls( camera, renderer.domElement );



      //sun
      var geometry2= new THREE.SphereGeometry(2.5,32,32);
      var material2= new THREE.MeshPhongMaterial();
      material2.map=THREE.ImageUtils.loadTexture("textures/sunmap.jpg");
      var sun= new THREE.Mesh(geometry2,material2);
      sun.position.x=-7;
      scene.add(sun);

      //earth
      var geometry = new THREE.SphereGeometry(1, 32, 32);
      var material = new THREE.MeshPhongMaterial();
      material.map = THREE.ImageUtils.loadTexture('textures/earth.jpg');
      var earthMesh = new THREE.Mesh(geometry, material);
      earthMesh.position.x=4.5;
      scene.add(earthMesh);

      //mercury
      var geometry3= new THREE.SphereGeometry(1,32,32);
      var material3= new THREE.MeshPhongMaterial();
      material3.map=THREE.ImageUtils.loadTexture("textures/mercurymap.jpg");
      var mercury= new THREE.Mesh(geometry3,material3);
      mercury.position.x=-2;
      scene.add(mercury);

      //venus
      var geometry4= new THREE.SphereGeometry(1,32,32);
      var material4= new THREE.MeshPhongMaterial();
      material4.map=THREE.ImageUtils.loadTexture("textures/venusmap.jpg");
      var venus= new THREE.Mesh(geometry4,material4);
      venus.position.x=1;
      scene.add(venus);

      //mars
      var geometry5= new THREE.SphereGeometry(1,32,32);
      var material5= new THREE.MeshPhongMaterial();
      material5.map=THREE.ImageUtils.loadTexture("textures/mars_1k_color.jpg");
      var mars= new THREE.Mesh(geometry5,material5);
      mars.position.x=7.5;
      scene.add(mars);

      //jupiter
      var geometry6= new THREE.SphereGeometry(1.5,32,32);
      var material6= new THREE.MeshPhongMaterial();
      material6.map=THREE.ImageUtils.loadTexture("textures/jupiter2_1k.jpg");
      var jupiter= new THREE.Mesh(geometry6,material6);
      jupiter.position.x=11;
      scene.add(jupiter);

      //saturn
      var geometry7= new THREE.SphereGeometry(1,32,32);
      var material7= new THREE.MeshPhongMaterial();
      material7.map=THREE.ImageUtils.loadTexture("textures/saturnmap.jpg");
      var saturn= new THREE.Mesh(geometry7,material7);
      saturn.position.x=14;
      scene.add(saturn);

      //uranus
      var geometry8= new THREE.SphereGeometry(1,32,32);
      var material8= new THREE.MeshPhongMaterial();
      material8.map=THREE.ImageUtils.loadTexture("textures/uranusmap.jpg");
      var uranus= new THREE.Mesh(geometry8,material8);
      uranus.position.x=17;
      scene.add(uranus);

      //neptune
      var geometry9= new THREE.SphereGeometry(1,32,32);
      var material9= new THREE.MeshPhongMaterial();
      material9.map=THREE.ImageUtils.loadTexture("textures/neptunemap.jpg");
      var neptune= new THREE.Mesh(geometry9,material9);
      neptune.position.x=20;
      scene.add(neptune);



	    var light = new THREE.DirectionalLight( 0xffffff );
      light.position.set( 1, 1, 1 ).normalize();
      scene.add(light);


      var hemLight = new THREE.HemisphereLight(0xffe5bb, 0xFFBF00, .2);
      scene.add(hemLight);



			 camera.position.z = 6;

			 var render = function () {
				requestAnimationFrame( render );

				earthMesh.rotation.y +=-0.01;
				sun.rotation.y+=-0.01;
				mercury.rotation.y+=-0.01;
				venus.rotation.y+=-0.01;
				mars.rotation.y+=-0.01;
				jupiter.rotation.y+=-0.01;
				saturn.rotation.y+=-0.01;
				uranus.rotation.y+=-0.01;
				neptune.rotation.y+=-0.01;



        controls.update();
				renderer.render(scene, camera);
			};

			render();


