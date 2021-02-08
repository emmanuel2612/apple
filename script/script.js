window.onload = () => {

  console.log("hey1");

  const canvas = document.querySelector('#renderCanvas');


        var engine = null;
        var scene = null;
        var sceneToRender = null;
        var createDefaultEngine = function() { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true,  disableWebGL2Support: false}); };
        // You have to create a function called createScene. This function must return a BABYLON.Scene object
// You can reference the following variables: engine, canvas
// You must at least define a camera

var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("textures/environment.env", scene);

    scene.clearColor = new BABYLON.Color3.FromHexString('#ffffff');
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 3, 20, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);

    //var hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);

    BABYLON.SceneLoader.Append("https://raw.githubusercontent.com/emmanuel2612/iphoneconfig/main/",
        "scene.gltf", scene, (meshes) => {

            for (var i = 0; i < meshes.length; i++) {
                console.log(meshes[i].name);
                meshes[i].scaling = new BABYLON.Vector3(8, 8, 8);

            };

            scene.createDefaultCamera(true, true, true);
        });

    return scene;
};
                var engine;
                var scene;
                initFunction = async function() {               
                    var asyncEngineCreation = async function() {
                        try {
                        return createDefaultEngine();
                        } catch(e) {
                        console.log("the available createEngine function failed. Creating the default engine instead");
                        return createDefaultEngine();
                        }
                    }

                    engine = await asyncEngineCreation();
        if (!engine) throw 'engine should not be null.';
        scene = createScene();};
        initFunction().then(() => {sceneToRender = scene        
            engine.runRenderLoop(function () {
                if (sceneToRender && sceneToRender.activeCamera) {
                    sceneToRender.render();
                }
            });
        });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });


}