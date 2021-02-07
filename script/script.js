window.onload = () => {

  console.log("hey1");

  const canvas = document.querySelector('#renderCanvas');

  // Create Engine 
  const engine = new BABYLON.Engine(canvas);

  // Create Scene 
  const scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3.FromHexString('#ffffff');
  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 2, new BABYLON.Vector3(0, 0, 0), scene); camera.attachControl(canvas, true);
  var hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);


  BABYLON.SceneLoader.ImportMesh("", "https://raw.githubusercontent.com/emmanuel2612/iphoneconfig/main/",
    "scene.gltf", scene, (meshes) => {

      for (var i = 0; i < meshes.length; i++) {
      //  console.log(meshes[i].name); 
        meshes[i].scaling = new BABYLON.Vector3(2.5, 2.5, 2.5);

      };

    });


  // Render the scene 
  const renderLoop = () => {
    scene.render();
  };

  engine.runRenderLoop(renderLoop);


  // Watch for browser/canvas resize events
  window.addEventListener("resize", function () {
    engine.resize();
  });


}