## AFRAME Material Collection.

```HTML
<!doctype html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/shaneharris/CanvasInput/master/CanvasInput.js"></script>
    <script src="./dist/app.js"> </script>
    <meta name="mobile-web-app-capable" content="yes">
</head>
<body>

<a-scene shadow="type: pcfsoft">
    <a-assets>
        <canvas id="textCanvas"></canvas>
    </a-assets>
    <a-entity id="camera" camera look-controls wasd-controls>
        <a-entity id="cursor" cursor="rayOrigin: mouse" ui-mouse-move
                  raycaster="far: 30; objects: .intersectable;"></a-entity>
    </a-entity>

    <a-entity light="type: ambient; intensity: 0.5;"></a-entity>
    <a-entity light="type: directional;
                   castShadow: true;
                   intensity: 0.8;
                   shadowMapWidth:2048;
                   shadowMapHeight:2048;
                   shadowBias:0.001"
              position="0 0 3"></a-entity>
    <a-sky color="#efefef"></a-sky>
    <a-entity ui-yoga-properties>

    </a-entity>

    <a-entity position="0 0 -2" id="uiPanel" class="intersectable">

        <!-- Scroll Pane -->
        <a-text font="roboto" baseLine="bottom" value="Aframe Material Collection"
                position="-2.8 1.2 0.01" color="#212121" wrap-count="25" width="2.5" height="0.5"></a-text>

        <a-ui-scroll-pane position="0 -0.2 0">
            <a-entity class="container">
                <!--Introduction-->
                <a-entity width="4" height="1.4">
                    <a-text font="roboto" baseLine="center" value="Introduction"
                            color="#212121" anchor="center" wrap-count="40" width="4" height="0.3"></a-text>

                    <a-text font="roboto" baseLine="bottom" value="Here we have some material UI based primitives and components for use in your aframe projects."
                            anchor="center" color="#515151" wrap-count="80" width="4.8" height="0.3"></a-text>

                    <a-text id="getwidth" font="roboto" baseLine="center" anchor="center" value="Scroll Pane"
                            color="#212121" wrap-count="54" width="4" height="0.2"></a-text>

                    <a-text font="roboto" baseLine="center" value="All of these primitive elements are enclosed inside a scroll pane. Elements out of view are automatically clipped."
                            anchor="center" color="#515151" wrap-count="80" width="4.8" height="0.2"></a-text>
                </a-entity>

                <!-- Left Panel -->
                <a-entity width="2.18">

                    <!--Ripple-->
                    <a-entity width="1.8">

                        <a-text font="roboto" baseLine="bottom" value="Ripple"
                                position="-1.1 0 0.01" color="#212121" anchor="center" wrap-count="25" width="1.8" height="0.4"></a-text>

                        <a-plane shader="flat" width="0.5" height="0.4" class="intersectable"
                                 color="#673ab7" ui-ripple="size:0.5 0.4;clampToSquare:true;zIndex:0.001;color:white;"></a-plane>

                        <a-triangle shader="flat" side="double" vertex-a="0 0.15 0" vertex-b="-0.15 -0.15 0" vertex-c="0.15 -0.15 0" class="intersectable"
                                    shadow="receive:false" color="#ec407a" ui-ripple="size:0.3 0.3;zIndex:-0.001;color:#f48fb1"  width="0.5" height="0.4"></a-triangle>
                    </a-entity>

                    <!-- Buttons -->
                    <a-entity position="0 -2 0" width="1.8">

                        <a-text font="roboto" baseLine="center" value="Buttons"
                                position="-1.1 0 0.01" color="#212121" anchor="center" wrap-count="25" width="1.8" height="0.2"></a-text>

                        <!--Button-->
                        <a-ui-button text-value="Button" shadow="receive:false" class="intersectable"></a-ui-button>

                        <!--Flat Button-->
                        <a-ui-button text-value="Flat Button" class="intersectable" transparent="true"
                                     font-color="#009688" color="white" ripple-color="#009688"></a-ui-button>

                        <!--Disabled Button-->
                        <a-ui-button text-value="Disabled" disabled="true" class="intersectable" transparent="true"
                                     font-color="#cfcfcf" color="#efefef" ripple-color="#cfcfcf"></a-ui-button>

                        <a-text font="roboto" baseLine="center" value="Floating Action Buttons"
                                color="#212121" anchor="center" wrap-count="25" width="1.8" height="0.3"></a-text>

                        <!--Floating Action Button-->
                        <a-ui-fab-button shadow="receive:false"
                                         class="intersectable" color="#f44336"></a-ui-fab-button>

                        <!--Floating Action Button Small-->
                        <a-ui-fab-button-small shadow="receive:false"
                                               class="intersectable" color="#2196f3"></a-ui-fab-button-small>

                        <!--Floating Action Button Disabled-->
                        <a-ui-fab-button-small disabled="true" class="intersectable"
                                               shadow="receive:false" color="#cfcfcf" ripple-color="#cfcfcf"></a-ui-fab-button-small>

                    </a-entity>

                </a-entity>

                <!-- Right Panel -->
                <a-entity width="2.18">

                    <!--Text Input-->
                    <a-entity width="1.8">
                        <a-text font="roboto" baseLine="center" anchor="center" value="Text"
                                color="#212121" wrap-count="25" width="1.8" height="0.2"></a-text>

                        <a-ui-text-input width="1.8" height="0.3" value="something"></a-ui-text-input>
                    </a-entity>

                    <!--Number Input-->
                    <a-entity width="1.8">
                        <a-text font="roboto" baseLine="center" anchor="center" value="Number"
                                color="#212121" wrap-count="25" width="1.8" height="0.2"></a-text>

                        <a-ui-number-input width="1.8" height="0.3" ui-yoga="margin:0"></a-ui-number-input>
                    </a-entity>

                    <!--Int Input-->
                    <a-entity width="1.8">
                        <a-text font="roboto" baseLine="center" anchor="center" value="Integer"
                                color="#212121" wrap-count="25" width="1.8" height="0.2"></a-text>

                        <a-ui-int-input width="1.8" height="0.3" ui-yoga="margin:0"></a-ui-int-input>
                    </a-entity>

                    <!--Switch-->
                    <a-entity width="1.8">

                        <a-text font="roboto" baseLine="center" anchor="center" value="Switch"
                                color="#212121" wrap-count="25" width="1.8" height="0.3"></a-text>
                        <a-ui-switch class="intersectable"></a-ui-switch>

                        <a-ui-switch disabled="true"  class="intersectable"></a-ui-switch>

                    </a-entity>

                    <a-text font="roboto" baseLine="center" anchor="center" value="Checkbox"
                            color="#212121" wrap-count="25" width="1.8" height="0.2"></a-text>

                    <!--Checkbox-->
                    <a-entity width="1.8">
                        <a-ui-checkbox class="intersectable" ></a-ui-checkbox>

                        <a-ui-checkbox class="intersectable" value="true" ></a-ui-checkbox>

                        <a-ui-checkbox class="intersectable" indeterminate="true" ></a-ui-checkbox>

                        <a-ui-checkbox class="intersectable" disabled="true" ></a-ui-checkbox>
                    </a-entity>

                    <!--Radio Group-->
                    <a-entity width="1.8">
                        <a-text font="roboto" baseLine="center" anchor="center" value="Radio"
                                color="#212121" wrap-count="25" width="1.8" height="0.2"></a-text>
                        <a-ui-radio class="intersectable"></a-ui-radio>
                        <a-ui-radio selected="true" class="intersectable"></a-ui-radio>
                        <a-ui-radio class="intersectable"></a-ui-radio>
                        <a-ui-radio disabled="true" class="intersectable"></a-ui-radio>
                    </a-entity>




                </a-entity>

            </a-entity>
        </a-ui-scroll-pane>
    </a-entity>
</a-scene>
</body>
</html>


```
