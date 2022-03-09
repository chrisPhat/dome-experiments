function setupScene(scene) {
    var boxes = [];

    const domeDiameter = 35 * feetToMeters;
    const eyeHeight    = 10 * feetToMeters;

    // Add lights to the scene
    var light = new THREE.AmbientLight( 0xffffff, 0.3 );
    scene.add(light);
    
    var light = new THREE.PointLight( 0xffffff, 1 );
    light.position.set( 10, 15, 20 );
    scene.add(light);
    
    // Use the same geometry for all subsequent cubes
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    
    // Red cube ahead
    var box = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({color: 0xff0000}));
    box.position.z = -domeDiameter/2;
    box.position.y = eyeHeight;
    scene.add(box);
    boxes.push(box);
    
    document.addEventListener('keydown', (e)=>{
        console.log(e);
        switch(e.code) {
            case 'ArrowUp':
            box.position.y  += 1;
            break;
            case 'ArrowDown' :
            box.position.y -= 1;
            break;
            case 'ArrowLeft' :
            box.position.x -= 1;
            break;
            case 'ArrowRight' :
            box.position.x += 1;
        }
    })

    RendererConfig.animationCallback = function(t) {
        boxes.forEach(
            function(box) {
                box.rotation.x = 4.0 * t;
                box.rotation.y = 2.5 * t;
            }
        );
    }
}
