/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = {"name":"aframe-material-collection","version":"0.2.10","description":"Material UI based primitives and components for use in your aframe projects.","homepage":"https://github.com/shaneharris/aframe-material-collection","keywords":["AFRAME","UI","Material"],"scripts":{"start":"webpack-dev-server --mode development","build":"webpack --mode production"},"repository":{"type":"git","url":"git@github.com:shaneharris/aframe-material-collection.git"},"bugs":{"url":"https://github.com/shaneharris/aframe-material-collection/issues"},"devDependencies":{"uglifyjs-webpack-plugin":"^1.2.7","webpack":"^4.16.1","webpack-cli":"^3.1.0","webpack-dev-server":"^3.1.4"},"author":"Shane Harris","license":"MIT","dependencies":{}};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive('a-ui-button', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'plane',
            width: 0.5,
            height: 0.175
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-rounded":{borderRadius:0.0025},
        "ui-ripple":{size:{x:0.5,y:0.175},clampToSquare:true,zIndex:0.001},
        text:{
            font:'roboto',
            align:'center',
            zOffset:0.002,
            wrapCount:10,
            alphaTest:0.4
        }
    },
    mappings: {
        height: 'geometry.height',
        width: 'geometry.width',
        color: 'material.color',
        transparent: 'material.transparent',
        "font-color":'text.color',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        "text-value": 'text.value',
        "wrap-count":'text.wrapCount',
        disabled:'ui-btn.disabled'
    }
}));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Floating Action Button Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-fab-button
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive('a-ui-fab-button', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'circle',
            radius: 0.1,
            segments:6
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-ripple":{size:{x:0.1,y:0.1},zIndex:0.002,fadeDelay:300,duration:500},
        "ui-icon":{size:{x:0.105,y:0.105}}
    },
    mappings: {
        radius: 'geometry.radius',
        color: 'material.color',
        transparent: 'material.transparent',
        src: 'ui-icon.src',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        disabled:'ui-btn.disabled'
    }
}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Floating Action Button Small Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-fab-button-small
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-fab-button-small', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        geometry: {
            primitive: 'circle',
            radius: 0.075,
            segments:6
        },
        material: {
            color: '#009688',
            shader: 'flat',
        },
        "ui-btn":{},
        "ui-ripple":{size:{x:0.125,y:0.125},zIndex:-0.001,color:'#ff0000'},
        "ui-icon":{size:{x:0.075,y:0.075}, src:'icons/sort_white_64dp.png'}
    },
    mappings: {
        radius: 'geometry.radius',
        color: 'material.color',
        transparent: 'material.transparent',
        src: 'ui-icon.src',
        "ripple-color":'ui-ripple.color',
        "ripple-size":'ui-ripple.size',
        "ripple-z-index":'ui-ripple.zIndex',
        disabled:'ui-btn.disabled'
    }
}));

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Switch Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-switch
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-switch', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-switch":{}
    },
    mappings: {
        value: 'ui-switch.value',
        disabled: 'ui-switch.disabled',
    }
}));

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Checkbox Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerPrimitive('a-ui-checkbox', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-checkbox":{

        },
        "ui-ripple":{
            size:{x:0.1,y:0.1},
            zIndex:-0.001,
            color:'#afafaf'
        }
    },
    mappings: {
        value: 'ui-checkbox.value',
        disabled: 'ui-checkbox.disabled',
        indeterminate:'ui-checkbox.indeterminate'
    }
}));

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Radio Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-radio
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-radio', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-radio":{},
        "geometry":{
            primitive:'ring',
            radiusInner:0.0575,
            radiusOuter:0.0675,
            segmentsTheta:6
        },
        "material":{
            shader:'flat',
            color:'#afafaf'
        },
        "ui-ripple":{
            size:{x:0.1,y:0.1},
            zIndex:-0.001,
            color:'#afafaf'
        }
    },
    mappings: {
        color:'ui-radio.selectedColor',
        value: 'ui-radio.value',
        selected: 'ui-radio.selected',
        disabled: 'ui-radio.disabled',
    }
}));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Text Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-text-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-text-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            placeHolder:'Text...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Number Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-number-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-number-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'number',
            placeHolder:'Number...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Integer Input Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-int-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-int-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'int',
            placeHolder:'Whole Number...'
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 *  Password Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-password-input
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-password-input', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-text":{
            type:'password',
            placeHolder:''
        },
        "ui-double-click":{}
    },
    mappings: {
        width:"ui-text.width",
        height:"ui-text.height",
        value:"ui-text.value",
        "place-holder":"ui-text.placeHolder"
    }
}));

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Scroll Pane Primitive for aframe-material-collection.
 * @namespace aframe-material-collection
 * @primitive a-ui-scroll-pane
 * @author Shane Harris
 */
module.exports = AFRAME.registerPrimitive('a-ui-scroll-pane', AFRAME.utils.extendDeep({}, AFRAME.primitives.getMeshMixin(), {
    defaultComponents: {
        "ui-scroll-pane":{

        }
    },
    mappings: {
        width:"ui-scroll-pane.width",
        height:"ui-scroll-pane.height",
        "scroll-z-offset":"ui-scroll-pane.scrollZOffset",
        "handle-color":"ui-scroll-pane.scrollHandleColor",
        "scroll-padding":"ui-scroll-pane.scrollPadding"
    }
}));

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Text input component Component for aframe-material-collection. Includes support for number/int only input.
 * @namespace aframe-material-collection
 * @component ui-text
 * @author Shane Harris
 */

if (typeof CanvasInput === 'undefined') {
    throw 'aframe-material-collection requires CanvasInput to be loaded first - <script src="https://cdn.rawgit.com/shaneharris/CanvasInput/master/CanvasInput.js"></script>';
}
module.exports = AFRAME.registerComponent('ui-text', {
    schema: {
        width:{type:'number',default:0.5},
        height:{type:'number',default:0.1},
        value: {default: ''},
        type: {default: 'text'},
        lineFocusColor: {default: '#009688'},
        lineBlurColor: {default: '#cfcfcf'},
        disabledColor: {default: '#afafaf'},
        disabled: {type: 'boolean', default: false},
        fontFamily: {default: 'Roboto'},
        fontColor: {default: '#4f4f4f'},
        placeHolder: {default: 'Text...'}
    },
    init(){

        // Setup text input box.
        this.backing = document.createElement('a-plane');
        this.backing.setAttribute('width',this.data.width);
        this.backing.setAttribute('height',this.data.height);
        this.backing.setAttribute('class','no-yoga-layout');
        this.backing.setAttribute('opacity',0);
        this.backing.setAttribute('scale','1 1 0');
        this.el.appendChild(this.backing);
        this.textMaterial = new THREE.MeshBasicMaterial();
        this.textPlane = new THREE.Mesh(new THREE.PlaneGeometry(this.data.width,this.data.height),this.textMaterial);
        this.el.object3D.add(this.textPlane);
        this.textPlane.position.set(0,0,0.0001);

        // Add under line for showing focus state.
        this.underLine = document.createElement('a-plane');
        this.underLine.setAttribute('width',this.data.width-0.05);
        this.underLine.setAttribute('height',0.005);
        this.underLine.setAttribute('position','0 -0.05 0.001');
        this.underLine.setAttribute('class','no-yoga-layout');
        this.underLine.setAttribute('shader','flat');
        this.underLine.setAttribute('color',this.data.disabled?this.data.disabledColor:this.data.lineBlurColor);
        this.el.appendChild(this.underLine);
        // Handle click to focus the input text.
        this.el.addEventListener('click',e=>this.focus());
        // Double click to select all text.
        this.el.addEventListener('dblclick',e=>this.select());
        // Handle the blur event for setting the input value.
        this.blurHandler = ()=>this.blur();
        this.setValue();
    },
    tick(){
        // If this element is focused then render the canvas input.
        if(!this.is_focussed)return;
        this.el.sceneEl.canvas_input.render();
        this.textMaterial.map.needsUpdate = true;
    },
    numberOnly(e,is_float){
        // Stolen from stack overflow.
        if ([46, 8, 9, 27, 13, 110].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode === 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode === 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Regex to allow float/int input - float inpit allows "0." for as you type numbers - need to remove on blur.
        // TODO: Need to remove trailing dot on blur to make a valid number.
        if(!((is_float?/^\d*((\.)|(\.\d+))?$/g:/^\d*?$/g).test(this.el.sceneEl.canvas_input.value()+e.key))){
            e.preventDefault();
        }
    },
    floatOnly(e){
        return this.numberOnly(e,true);
    },
    setValue(){
        this.setupCanvasInput();
        this.el.sceneEl.canvas_input.render();
        // Grap a frame from the canvas input wiith the current input value for displaying when not in focus.
        let image = new Image();
        image.src = this.el.sceneEl.canvas_input.renderCanvas().toDataURL("image/png");
        let texture = new THREE.Texture(image);
        texture.needsUpdate = true;
        texture.minFilter = THREE.LinearFilter;
        // texture.wrapS = THREE.ClampToEdgeWrapping;
        // texture.wrapT = THREE.ClampToEdgeWrapping;
        // texture.repeat.set(1,1.4);
        // texture.offset.set(0,-0.2);
        this.textMaterial = new THREE.MeshBasicMaterial({map:texture});
        this.textPlane.material = this.textMaterial;
        // Update clipping planes for the new material.
        this.setClippingPlanes();

    },
    select(){
        // Select the text on double click.
        this.el.sceneEl.canvas_input.selectText();
    },
    focus(){
        // Reset the global canvas input to this current inputs settings.
        this.resetCanvasInput();
        this.el.sceneEl.canvas_input.focus();
        this.el.sceneEl.canvas_input.onkeydown(e=>{
            // Prevent input for integer and float only.
            if(this.data.type==="number"){
                this.floatOnly(e);
            }else if(this.data.type==="int"){
                this.numberOnly(e);
            }
        });
        if(this.data.value === this.data.placeHolder){
            // reset value if the same as placeholder.
            this.el.sceneEl.canvas_input.value('');
        }
        // Set the current input to the input canvas texture.
        this.textMaterial = new THREE.MeshBasicMaterial({map:new THREE.Texture(this.el.sceneEl.canvas_input.renderCanvas())});
        this.textPlane.material = this.textMaterial;
        // Update clipping planes for new material.
        this.setClippingPlanes();
        // Set the underline to the focussed state.
        this.underLine.setAttribute('color',this.data.lineFocusColor);
        this.textMaterial.map.minFilter = THREE.LinearFilter;
        // this.textMaterial.map.wrapS = THREE.ClampToEdgeWrapping;
        // this.textMaterial.map.wrapT = THREE.ClampToEdgeWrapping;
        // this.textMaterial.map.repeat.set(1,1.4);
        // this.textMaterial.map.offset.set(0,-0.2);
        // Set focused flag
        this.is_focussed = true;
        // Add mouse down event handler for blur event to the render dom element.
        this.el.sceneEl.renderer.domElement.addEventListener('mousedown',this.blurHandler);
    },
    setClippingPlanes(){
        // If content clips are set for the scroll plane, then set them to the current material and set clipping enabled.
        if(this.el._content_clips){
            this.textMaterial.clippingPlanes = this.el._content_clips;
            this.textMaterial.clipShadows = true;
        }
    },
    blur(){
        // Clicked off the input text field.
        this.is_focussed = false;
        this.el.sceneEl.renderer.domElement.removeEventListener('mousedown',this.blurHandler);
        let new_value = this.el.sceneEl.canvas_input.value();
        // Update the current valuue.
        this.data.value = new_value;
        // Reset the under line color to blur state.
        this.underLine.setAttribute('color',this.data.lineBlurColor);
        // Blur the canvas element to grab a frame without the carret.
        this.el.sceneEl.canvas_input.blur();
        // Set the input current value image.
        this.setValue();
    },
    resetCanvasInput(){
        // Set the canvas input to this current inputs settings.
        if(this.el.sceneEl.canvas_input) {
            this.el.sceneEl.canvas_input.width((this.data.width - 0.1) * 300);
            this.el.sceneEl.canvas_input.fontFamily(this.data.fontFamily);
            this.el.sceneEl.canvas_input.fontColor(this.data.fontColor);
            this.el.sceneEl.canvas_input.placeHolder(this.data.placeHolder);
            this.el.sceneEl.canvas_input.value(this.data.value);
            this.el.sceneEl.canvas_input.borderWidth(0);
        }
    },
    updateSchema(){
        if(this.data){
            // Reset the current settings if changed programatically.
            this.resetCanvasInput();
        }
    },
    setupCanvasInput(){
        // Setup the input canvas if not already setup
        let canvas = document.getElementById('textCanvas');
        canvas.width = (this.data.width)*300;
        this.resetCanvasInput();
        if(this.el.sceneEl.canvas_input){
            return;
        }
        canvas.height = 45;
        let input_settings = {
            canvas:canvas,
            fontSize:18,
            fontFamily: this.data.fontFamily,
            fontColor: this.data.fontColor,
            width:(this.data.width-0.1)*300,
            padding: 12,
            borderWidth: 0,
            borderRadius:0,
            backgroundColor: '#fff',
            placeHolder:this.data.placeHolder,
            placeHolderColor:'#cfcfcf',
            boxShadow: '0px 0px 0px #fff',
            innerShadow:'0px 0px 0px rgba(255,255,255, 1)',
            value:this.data.value
        };
        this.el.sceneEl.canvas_input = new CanvasInput(input_settings);
    }
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Button base Component for aframe-material-collection. This is used as the base component for all the button primitives.
 * @namespace aframe-material-collection
 * @component ui-btn
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-btn', {
    schema:{
        duration:{type:'int',default:250},
        hoverHeight:{type:'number',default:0.01},
        activeHeight:{type:'number',default:-0.001},
        disabled:{type:'boolean',default:false}
    },
    updateSchema(){
      // TODO: handle updates to the button state, disabled flag here.
    },
    init() {
        // Store the current button z value for animating mouse events
        this.defaultZ = this.el.object3D.position.z;
        // register input events for interaction
        if(!this.data.disabled){
            this.el.addEventListener('mouseenter', e=>this.mouseEnter(e));
            this.el.addEventListener('mousedown', e=>this.mouseDown(e));
            this.el.addEventListener('mouseup', e=>this.mouseUp(e));
            this.el.addEventListener('mouseleave', e=>this.mouseLeave(e));
        }
    },
    mouseEnter(e){
        const _this = this;
        // Lift the button up for hover animation
        this.tween(this.defaultZ,this.defaultZ+this.data.hoverHeight,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ+_this.data.hoverHeight;
        });
        // Propagate event on parent element.
        this.el.emit('ui-mouse-enter',e);
    },
    mouseLeave(e){
        // Ignore mouse leave event if the button was clicked - mouse up already resets to default state.
        if(this.is_clicked){
            return this.is_clicked = false;
        }
        // Reset button state from hover
        this.resetAnimation(this.defaultZ+this.data.hoverHeight);
        // Propagate event on parent element.
        this.el.emit('ui-mouse-leave',e);
    },
    mouseUp(e){
        this.is_clicked = true;
        // Reset button state from pressed
        this.resetAnimation(this.defaultZ+this.data.activeHeight);
        this.el.emit('ui-mouse-up',e);
    },
    mouseDown(e){
        const _this = this;
        // Press state animation from hovered
        this.tween(this.defaultZ+this.data.hoverHeight,this.defaultZ+this.data.activeHeight,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ+_this.data.activeHeight;
        });
        // Propagate event on parent element.
        this.el.emit('ui-mouse-down',e);
    },
    resetAnimation(start_z){
        let _this = this;
        this.tween(start_z,this.defaultZ,function(){
            _this.el.object3D.position.z = this.x;
        },function(){
            _this.el.object3D.position.z = _this.defaultZ;
        })
    },
    tween(from,to,callback,complete){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        return new TWEEN.Tween({x:from})
            .to({ x: to}, this.data.duration)
            .onUpdate(callback)
            .onComplete(function(){
                // Stop changes
                UI.utils.stoppedChanging(_this.el.object3D.uuid);
                return complete.call(this);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * A component to load an icon and set some defaults for positioning and transparency.
 * @namespace aframe-material-collection
 * @component ui-icon
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-icon', {
    schema: {
        src: {default: 'icons/send_white_64dp.png'},
        size:{type:'vec2',default:{x:0.1,y:0.1}},
        zIndex:{type:'number',default:0.003},
        color:{default:'#fff'}
    },
    init() {
        this.icon = new THREE.Mesh(new THREE.PlaneGeometry(this.data.size.x,this.data.size.y),new THREE.MeshBasicMaterial({color:this.data.color,alphaTest:0.4,transparent:true,map:new THREE.TextureLoader().load(this.data.src)}));
        this.icon.position.set(0,0,this.data.zIndex);
        this.el.object3D.add(this.icon);
    }
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Rounded corners Component for aframe-material-collection. Expects an a-plane entity.
 * @namespace aframe-material-collection
 * @component ui-rounded
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-rounded', {
    schema: {
        borderRadius: {type: 'number', default: 0.01},
        curveSegments:{type: 'int', default: 1},
    },
    init() {
        let mesh = this.el.getObject3D('mesh');
        let roundedRectShape = new THREE.Shape();
        // Draw the Rounded rectangle shape centered in the object - from three.js shapes example.
        ( function roundedRect( ctx, x, y, width, height, radius ) {
            ctx.moveTo( x, y + radius );
            ctx.lineTo( x, y + height - radius );
            ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
            ctx.lineTo( x + width - radius, y + height );
            ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
            ctx.lineTo( x + width, y + radius );
            ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
            ctx.lineTo( x + radius, y );
            ctx.quadraticCurveTo( x, y, x, y + radius );
        } )( roundedRectShape, -mesh.geometry.metadata.parameters.width/2, -mesh.geometry.metadata.parameters.height/2, mesh.geometry.metadata.parameters.width, mesh.geometry.metadata.parameters.height, this.data.borderRadius );
        // Update the geometry.
        mesh.geometry = new THREE.ShapeGeometry(roundedRectShape,this.data.curveSegments);
        // Emit rounded-loaded event once the geometry has been updated.
        this.el.emit('rounded-loaded', null, false);
    }
});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Ripple Component for aframe-material-collection. Add a ripple to an entity with options for controlling
 * clamping the animation and offsetting the ripple z position to place on top or bottom
 * @namespace aframe-material-collection
 * @component ui-ripple
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-ripple',{
    schema:{
        color: {default: '#fff'},
        duration:{type:'int',default:1000},
        fadeDuration:{type:'int',default:750},
        fadeDelay:{type:'int',default:250},
        clampToSquare:{type:'boolean',default:false},
        size:{type:'vec2',default:{x:1,y:1}},
        zIndex:{type:'number',default:-0.001},
        segments:{type:'int',default:6}
    },
    init(){
        // Setup circle geometry for ripple effect
        this.rippleGeometry = new THREE.CircleGeometry(Math.max(this.data.size.x,this.data.size.y),this.data.segments);
        this.ripple = new THREE.Mesh(this.rippleGeometry.clone(),new THREE.MeshBasicMaterial({color:this.data.color,transparent:true, opacity:0.4,alphaTest:0.1}));
        this.ripple.scale.set(0.00001,0.00001,0.00001);
        this.el.object3D.add(this.ripple);
        this.el.addEventListener('mousedown',this.click.bind(this));
        this.ripple.position.set(0,0,this.data.zIndex);
        // Set clipping planes if clamping to square
        if(this.data.clampToSquare){

            this.content_clips = [
                new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), (this.data.size.y/2) ),
                new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), (this.data.size.y/2) ),
                new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), (this.data.size.x/2) ),
                new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), (this.data.size.x/2) )
            ];
        }
    },
    click(e){
        if(this.isRippling){
            // Throttle clicks.
            return e.preventDefault();
        }
        this.isRippling = true;
        // Set clipping planes if clamping to square
        if(this.data.clampToSquare){
            this.setRippleClips(this.ripple.material);
        }
        // Animate the size of the circle ripple from the center of the entity.
        this.tweenSize(this.ripple.geometry);
        // Fade the circle out as it ripples.
        this.tweenOpacity(this.ripple.material);
    },
    setRippleClips(){
        // update content clips world positions from this current element.
        this.content_clips[0].set(new THREE.Vector3( 0, 1, 0 ), (this.data.size.y/2));
        this.content_clips[1].set(new THREE.Vector3( 0, -1, 0 ), (this.data.size.y/2));
        this.content_clips[2].set(new THREE.Vector3( -1, 0, 0 ), (this.data.size.x/2));
        this.content_clips[3].set(new THREE.Vector3( 1, 0, 0 ), (this.data.size.x/2));
        //this.el.sceneEl.object3D.updateMatrixWorld();
        this.content_clips[0].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[1].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[2].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[3].applyMatrix4(this.el.object3D.matrixWorld);
        this.ripple.material.clippingPlanes = this.el._content_clips?this.el._content_clips.concat(this.content_clips):this.content_clips;
        this.ripple.material.clipShadows = true;
        this.ripple.material.needsUpdate = true;
    },
    tweenSize(geometry){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,_this.ripple.uuid);
        new TWEEN.Tween({x:0.00001})
            .to({ x: 1}, this.data.duration)
            .onUpdate(function(){
                _this.ripple.scale.set(this.x,this.x,this.x);
            })
            .onComplete(()=>{
                _this.ripple.scale.set(0.00001,0.00001,0.00001);
                // Reset throttle flag.
                this.isRippling = false;
                // Stop changes
                UI.utils.stoppedChanging(_this.ripple.uuid);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    },
    tweenOpacity(material){
        new TWEEN.Tween({x:0.4})
            .to({ x: 0}, this.data.fadeDuration)
            .delay(this.data.fadeDelay)
            .onUpdate(function(){
                material.opacity = this.x;
            })
            .onComplete(()=>{
                material.opacity = 0.4;
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN,THREE */
/**
 * Switch Component for aframe-material-collection. Includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-switch
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-switch', {
    schema: {
        value: {type:'boolean',default: false},
        disabled:{type:'boolean',default: false},
        progressColor:{default:'#4db6ac'},
        handleColor:{default:'#009688'},
        handleDisabledColor:{default:'#afafaf'},
        railColor:{default:'#fff'},
        switchDuration:{type:'int',default: 350},
        handleZIndex:{type:'number',default:0.01},
        intersectableClass: {default: 'intersectable'},
    },
    updateSchema(){
        if(this.data){
            if(this.data.disabled){
                if(this.data.value){
                    this.data.value=false;
                    this.click();
                }
            }else{
                this.click();
            }
            this.setDisabled();
        }
    },
    init() {
        this.width = 0.3;
        this.height = 0.1;
        // Setup handle circle entity.
        this.handleEl = document.createElement('a-circle');
        this.handleEl.setAttribute('radius',0.055);
        this.handleEl.setAttribute('color',this.data.handleColor);
        this.handleEl.setAttribute('shader','flat');
        this.handleEl.setAttribute('ui-ripple','size:0.1 0.1;color:#999;fadeDelay:300;duration:500');
        this.handleEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.handleEl.setAttribute('position','-0.05 0 '+this.data.handleZIndex);
        this.handleEl.setAttribute('segments',6);
        this.el.appendChild(this.handleEl);

        // Setup rail entity.
        this.railEl = document.createElement('a-plane');
        this.railEl.setAttribute('width','0.15');
        this.railEl.setAttribute('height','0.05');
        this.railEl.setAttribute('ui-rounded','borderRadius:0.025');
        this.railEl.setAttribute('color',this.data.railColor);
        this.railEl.setAttribute('class',this.data.intersectableClass+' no-yoga-layout');
        this.el.appendChild(this.railEl);
        // Wait for the rounded edge on the rail to load to clone the geometry for the
        // selected progress bar part of the rail
        this.railEl.addEventListener('rounded-loaded',()=>this.getRailObject(this.railEl.object3D));
        this.clickHandler = e=>{
            this.data.value = !this.data.value;
            this.click();
        };
        this.setDisabled();
    },
    setDisabled(){
        // Add / Remove click handlers based on disabled state.
        if(this.data.disabled){
            this.handleEl.removeEventListener('click',this.clickHandler);
            this.handleEl.setAttribute('color',this.data.handleDisabledColor);
        }else{
            this.handleEl.addEventListener('click',this.clickHandler);
            this.handleEl.setAttribute('color',this.data.handleColor);
        }
    },
    click(){
        // Animate the switch handle and the progress bar.
        this.tweenHandle();
        this.tweenProgress();
    },
    getRailObject(object){
        // Get the rounded shape geomtery.
        object.traverse(child=>{
            if(child.geometry&&child.geometry.type==="ShapeGeometry"){
                this.progress = new THREE.Mesh(child.geometry.clone(),new THREE.MeshBasicMaterial({color:this.data.progressColor}));
                this.progress.position.set(-0.075,0,0.001);
                this.progress.scale.set(0.00001,1,1);
                this.el.object3D.add(this.progress);
            }
        });
    },
    tweenProgress(){
        if(this.progress){
            new TWEEN.Tween(this.progress.position)
                .to(new THREE.Vector3(this.data.value?0:-0.075,0,0.001), this.data.switchDuration)
                .easing(TWEEN.Easing.Exponential.Out).start();
            new TWEEN.Tween(this.progress.scale)
                .to(new THREE.Vector3(this.data.value?1:0.00001,1,1), this.data.switchDuration)
                .easing(TWEEN.Easing.Exponential.Out).start();
        }
    },
    tweenHandle(){
        if(this.handleEl){
            // Start changes
            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
            new TWEEN.Tween(this.handleEl.object3D.position)
                .to(new THREE.Vector3(this.data.value?0.05:-0.05,0,this.data.handleZIndex), this.data.switchDuration)
                .onComplete(()=>{
                    // Stop changes
                    UI.utils.stoppedChanging(this.el.object3D.uuid);
                })
                .easing(TWEEN.Easing.Exponential.Out).start();
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Scroll Pane for aframe-material-collection. Expects
 * @namespace aframe-material-collection
 * @component ui-scroll-pane
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-scroll-pane', {
    schema: {
        height:{type:'number',default:1.2},
        width:{type:'number',default:2.5},
        scrollPadding:{type:'number',default:0.1},
        scrollZOffset:{type:'number',default:0},
        scrollHandleColor:{default:'#009688'}
    },
    init() {
        // Setup scroll bar and panel backing.
        this.setupElements();
        // Grab content container.
        this.container = this.el.querySelector('.container');
        if(typeof this.container === 'undefined'){
            throw 'ui-scroll-pane needs an entity inside it with the class "container" - <a-entity class="container"></a-entity>';
        }
        // Setup scroll bar.
        this.scrollBarWidth = this.rail.getAttribute('width');
        this.container.setAttribute('position',(-this.data.width/2)+' '+((this.data.height/2))+' 0');
        this.rail.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' 0 '+(this.data.scrollZOffset+0.0002));
        this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' 0 '+(this.data.scrollZOffset+0.0005));
        this.el.sceneEl.renderer.localClippingEnabled = true;
        // Setup content clips.
        this.content_clips = [
            new THREE.Plane( new THREE.Vector3( 0, 1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( 0, -1, 0 ), (this.data.height/2) ),
            new THREE.Plane( new THREE.Vector3( -1, 0, 0 ), (this.data.width/2) ),
            new THREE.Plane( new THREE.Vector3( 1, 0, 0 ), (this.data.width/2) )
        ];
        // Get camera element for pause/play for scroll bar dragging.
        let camera = document.getElementById('camera');
        // Setup mouse move handler for scrolling and updating scroll handle.
        let mousemove = e=>this.mouseMove(e);
        // Start scroll
        this.handle.addEventListener('mousedown',e=>{
            // Pause look controls to allow scrolling
            if(camera.components["look-controls"])camera.components["look-controls"].pause();
            this.isDragging = true;
            // Store the start point offset
            this.handlePos = this.handle.object3D.worldToLocal(e.detail.intersection.point).y;
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
            // Start changes
            UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        });
        // End scroll
        this.el.sceneEl.addEventListener('mouseup',e=>{
            if(this.isDragging){
                this.backgroundPanel.removeEventListener('ui-mousemove',mousemove);
                // Play look controls once scrolling is finished
                if(camera.components["look-controls"])camera.components["look-controls"].play();
                this.isDragging = false;
                // Stop changes
                UI.utils.stoppedChanging(this.el.object3D.uuid);
            }
        });
        // Handle clicks on rail to scroll
        this.rail.addEventListener('mousedown',e=>{
            // Pause look controls
            camera.components["look-controls"].pause();
            this.isDragging = true;
            // Scroll immediately and register mouse move events.
            this.scroll(this.rail.object3D.worldToLocal(e.detail.intersection.point).y);
            this.backgroundPanel.addEventListener('ui-mousemove',mousemove);
        });

        // Setup content clips after the scene is loaded to be able to access all entity materials
        this.el.sceneEl.addEventListener('loaded',()=>{
            // update content clips world positions from this current element.
            this.el.sceneEl.object3D.updateMatrixWorld();
            this.updateContentClips();
            this.updateContent();
            this.el.emit('scroll-pane-loaded');
        });
        this.setupMouseWheelScroll();
    },
    updateContentClips(){
        this.content_clips[0].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[1].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[2].applyMatrix4(this.el.object3D.matrixWorld);
        this.content_clips[3].applyMatrix4(this.el.object3D.matrixWorld);
    },
    updateContent(){
        this.setChildClips();
        if(typeof Yoga !== 'undefined')this.initialiseYoga(this.container,this.data.width*100);
        this.container.yoga_node.calculateLayout(this.data.width*100, 'auto', Yoga.DIRECTION_LTR);
        this.content_height = Number.NEGATIVE_INFINITY;
        if(typeof Yoga !== 'undefined')this.updateYoga(this.container);
        this.handleSize = THREE.Math.clamp((this.data.height/this.content_height),0.1,1);
        this.handle.setAttribute('height',this.data.height*this.handleSize);
        this.handle.setAttribute('width',this.handleSize===1?0.00000001:0.1);
        this.rail.setAttribute('width',this.handleSize===1?0.00000001:0.1);
        this.rail.setAttribute('color',this.handleSize===1?'#efefef':'#fff');
        this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' '+(this.data.height-(this.data.height*this.handleSize))/2+' '+(this.data.scrollZOffset+0.0005));
    },
    mouseMove(e){
        if(this.isDragging){
            let pos = this.backgroundPanel.object3D.worldToLocal(e.detail.intersection.point);
            this.scroll(pos.y-this.handlePos);
        }
    },
    scroll(positionY){
        let min = (-this.data.height/2)+(this.data.height*this.handleSize)/2;
        let max = (this.data.height/2)-(this.data.height*this.handleSize)/2;
        // Set scroll position with start point offset.
        let scroll_pos = THREE.Math.clamp(positionY,min,max);
        let scroll_perc = 1-((scroll_pos-min)/(max-min));
        this.container.object3D.position.y = ((this.content_height-this.data.height)*scroll_perc)+(this.data.height/2);
        this.handle.setAttribute('position',((this.data.width/2)+this.data.scrollPadding)+' '+scroll_pos+' '+(this.data.scrollZOffset+0.0005));
    },
    setupMouseWheelScroll(){
        this.el.addEventListener('ui-mousewheel',e=>{
            if(this.handleSize!==1){
                // Start changes
                UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
                this.scroll(this.handle.getAttribute('position').y+(-e.detail.evt.deltaY/800));
                // Stop changes
                UI.utils.stoppedChanging(this.el.object3D.uuid);
            }
        });
    },
    setupElements(){
        // Setup background with mouse input to catch mouse move events when not exactly over the scroll bar.
        this.backgroundPanel = document.createElement('a-plane');
        this.backgroundPanel.setAttribute('class','background intersectable');
        this.backgroundPanel.setAttribute('width',this.data.width+1);
        this.backgroundPanel.setAttribute('height',this.data.height+1);
        this.backgroundPanel.setAttribute('position','0 0 -0.013');
        this.backgroundPanel.setAttribute('visible',false);

        this.el.appendChild(this.backgroundPanel);

        // Add scroll bar rail.
        this.rail = document.createElement('a-plane');
        this.rail.setAttribute('class','rail');
        this.rail.setAttribute('width',0.1);
        this.rail.setAttribute('height',this.data.height);
        this.rail.setAttribute('shader','flat');
        this.el.appendChild(this.rail);

        // Add scroll bar handle.
        this.handle = document.createElement('a-plane');
        this.handle.setAttribute('class','handle intersectable');
        this.handle.setAttribute('width',0.1);
        this.handle.setAttribute('height',this.data.height);
        this.handle.setAttribute('color',this.data.scrollHandleColor);
        this.handle.setAttribute('shader','flat');
        this.el.appendChild(this.handle);
    },
    setupYogaNode(node,width,height,properties){
        // Parse yoga properties and call the yoga methods to setup this layout node.
        if(!properties.hasOwnProperty('setWidth'))node.setWidth(width);
        if(!properties.hasOwnProperty('setHeight'))node.setHeight(height);
        for(let method in properties){
            if(properties.hasOwnProperty(method)&&method.indexOf('Edge')===-1){
                if(["setMarginLeft","setMarginPercentLeft","setPaddingLeft","setBorderLeft","setPositionLeft","setPositionPercentLeft"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_LEFT,properties[method]);
                }else if(["setMarginRight","setMarginPercentRight","setPaddingRight","setBorderRight","setPositionRight","setPositionPercentRight"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_RIGHT,properties[method]);
                }else if(["setMarginTop","setMarginPercentTop","setPaddingTop","setBorderTop","setPositionTop","setPositionPercentTop"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_TOP,properties[method]);
                }else if(["setMarginBottom","setMarginPercentBottom","setPaddingBottom","setBorderBottom","setPositionBottom","setPositionPercentBottom"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_BOTTOM,properties[method]);
                }else if(["setMargin","setMarginPercent","setPadding","setBorder","setPosition","setPositionPercent"]
                    .indexOf(method)>-1){
                    node[method](Yoga.EDGE_ALL,properties[method]);
                }else if(method.indexOf('setMarginAuto')>-1){
                    let side = method.replace('setMarginAuto','');
                    switch(side){
                        case "":
                            node[method](Yoga.EDGE_ALL);
                            break;
                        case "Left":
                            node[method](Yoga.EDGE_LEFT);
                            break;
                        case "Right":
                            node[method](Yoga.EDGE_RIGHT);
                            break;
                        case "Top":
                            node[method](Yoga.EDGE_TOP);
                            break;
                        case "Bottom":
                            node[method](Yoga.EDGE_BOTTOM);
                            break;
                    }
                }else if(["setWidthAuto","setHeightAuto"]
                .indexOf(method)>-1) {
                    node[method]();
                }else{
                    node[method](properties[method]);
                }
            }
        }
    },
    initialiseYoga(parent){
        // Traverse the tree and setup Yoga layout nodes with default settings
        // or settings specified in the elements yoga properties component.
        parent = parent||this.container;
        // Automatically detect the entity width / height by the element tagname.
        let width = 0,height = 0;
        switch(parent.tagName){
            case "A-TEXT":
            case "A-TRIANGLE":
            case "A-UI-TEXT-INPUT":
            case "A-UI-NUMBER-INPUT":
            case "A-UI-INT-INPUT":
            case "A-UI-PASSWORD-INPUT":
                width = parent.getAttribute('width');
                height = parent.getAttribute('height');
                break;
            case "A-UI-BUTTON":
            case "A-PLANE":
            case "A-ENTITY":
                width = Number(parent.components.geometry?parent.components.geometry.data.width:parent.getAttribute('width'));
                height = Number(parent.components.geometry?parent.components.geometry.data.height:parent.getAttribute('height'));
                break;
            case "A-UI-FAB-BUTTON":
            case "A-UI-FAB-BUTTON-SMALL":
            case "A-CIRCLE":
                width = Number(parent.components.geometry?parent.components.geometry.data.radius*2:(parent.getAttribute('radius')||0)*2);
                height = width;
                break;
            case "A-RING":
                width = Number(parent.components.geometry?parent.components.geometry.data["radius-outer"]*2:(parent.getAttribute('radius-outer')||0)*2);
                height = width;
                break;
            case "A-UI-SWITCH":
            case "A-UI-CHECKBOX":
            case "A-UI-RADIO":
                let componentName = parent.tagName.substr(2).toLowerCase();
                width = parent.components[componentName].width;
                height = parent.components[componentName].height;
                break;
        }

        if(!parent.yoga_node){
            parent.yoga_node = Yoga.Node.create();
            if(parent.components["ui-yoga"]){
                this.setupYogaNode(parent.yoga_node,width ? width * 100 : 'auto',height ? height * 100 : 'auto',
                    parent.components["ui-yoga"].getProperties());
            }else{
                parent.yoga_node.setWidth(width ? width * 100 : 'auto');
                parent.yoga_node.setHeight(height ? height * 100 : 'auto');
                parent.yoga_node.setJustifyContent(Yoga.JUSTIFY_FLEX_START);
                parent.yoga_node.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
                parent.yoga_node.setAlignContent(Yoga.ALIGN_AUTO);
                parent.yoga_node.setFlexWrap(Yoga.WRAP_WRAP);
            }
            // Add the yoga node to the Yoga tree.
            if(parent.parentElement&&parent.parentElement.yoga_node){
                // Default margin if none set;
                if(!parent.components["ui-yoga"]){
                    parent.yoga_node.setMargin(Yoga.EDGE_RIGHT, 5);
                    parent.yoga_node.setMargin(Yoga.EDGE_BOTTOM, 5);
                }
                parent.parentElement.yoga_node.insertChild(parent.yoga_node,parent.parentElement.yoga_node.getChildCount());
            }else{
                // Default root padding if none set;
                if(!parent.components["ui-yoga"]){
                    parent.yoga_node.setPadding(Yoga.EDGE_ALL,2);
                }
            }
        }
        [].slice.call(parent.children).forEach(child=>{
            if(child.classList.contains('no-yoga-layout')){
                return;
            }
            this.initialiseYoga(child);
        });
    },
    updateYoga(parent){
        // Update the entity positions from the Yoga layout.
        [].slice.call(parent.children).forEach(child=>{
            if(child.classList.contains('no-yoga-layout')){
                return;
            }
            let position;
            if(child.tagName==="A-ENTITY"){
                position = {
                    x:(child.yoga_node.getComputedLeft()/100),
                    y:(child.yoga_node.getComputedTop()/100),
                };
            }else{
                position = {
                    x:(child.yoga_node.getComputedLeft()/100)+(child.yoga_node.getComputedWidth()/200),
                    y:(child.yoga_node.getComputedTop()/100)+(child.yoga_node.getComputedHeight()/200),
                };
            }
            let highest = (child.yoga_node.getComputedTop()/100)+(child.yoga_node.getComputedHeight()/100);
            if(highest>this.content_height){
                this.content_height = highest;
            }
            child.setAttribute('position',position.x+' '+(-position.y)+' '+child.getAttribute('position').z);
            this.updateYoga(child);
        });
    },
    setChildClips(parent){
        // Traverse the entity tree inside the content container and add content clips to each material found.
        parent = parent||this.container;
        [].slice.call(parent.children).forEach(child=>{
            child._content_clips = this.content_clips;
            let traverse = ()=>{
                child.object3D.traverse(object=>{
                    if(object.material){
                        // Add shader chunks to be able to clip shader materials - needed for <a-text> entities.
                        if(object.material.isRawShaderMaterial){
                            object.material.onBeforeCompile = function ( shader ) {
                                let vertexParts = shader.vertexShader.split('\n');
                                let vertexMainIndex = vertexParts.indexOf('void main(void) {');
                                vertexParts.splice(vertexMainIndex,0,'#include <clipping_planes_pars_vertex>');
                                vertexParts.splice(vertexMainIndex+2,0,'#include <begin_vertex>');
                                vertexParts.splice(vertexParts.length-2,0,'#include <project_vertex>');
                                vertexParts.splice(vertexParts.length-2,0,'#include <clipping_planes_vertex>');
                                shader.vertexShader = vertexParts.join('\n');
                                let fragmentParts = shader.fragmentShader.split('\n');
                                let fragmentMainIndex = fragmentParts.indexOf('void main() {');
                                fragmentParts.splice(fragmentMainIndex,0,'#include <clipping_planes_pars_fragment>');
                                fragmentParts.splice(fragmentMainIndex+2,0,'#include <clipping_planes_fragment>');
                                shader.fragmentShader = fragmentParts.join('\n');
                            };
                            object.material.clipping = true;
                        }
                        // Set the content clipping planes.
                        object.material.clippingPlanes = this.content_clips;
                        object.material.clipShadows = true;
                        object.material.needsUpdate = true;
                    }
                });
            };
            if(child.components.text){
                // Wait for the font to load first.
                child.addEventListener('textfontset',()=>{
                    traverse();
                })
            }else{
                traverse();
            }
            // Recurse.
            this.setChildClips(child);
        })
    }
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * A component shim the mouse move event for the AFRAME cursor raycaster.
 * @namespace aframe-material-collection
 * @component ui-mouse-shim
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-mouse-shim', {
    init(){
        if (!this.el.components.raycaster) {
            throw 'ui-mouse-move component needs the raycaster component to be added.'
        }
        // Add support for mouse wheel
        this.el.sceneEl.renderer.domElement.addEventListener( 'mousewheel', this.onMouseWheel.bind(this), false);
    },
    onMouseWheel(e){
        this.emitMouseEvent('ui-mousewheel',e);
    },
    tick() {
       this.emitMouseEvent('ui-mousemove');
    },
    emitMouseEvent(eventType,event){
        // Get current intersections from raycaster component.
        this.el.components.raycaster.intersections.forEach(intersection=>{
            if(intersection.object.el){
                // Emit custom mouse move event ont he intersected element.
                intersection.object.el.emit(eventType,{cursorEl:this.el,intersection:intersection,evt:event})
            }
        });
    }
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

/* global AFRAME */
/**
 * Checkbox A simple component to listen for two click events in quick succession.
 * @namespace aframe-material-collection
 * @component ui-double-click
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-double-click', {
    schema:{
        timeout:{type:'int',default:200}
    },
    init() {
        let last_click = 0;
        // Add click event for listening for two clicks within the specified timespan.
        this.el.addEventListener('click',e=>{
            let now = new Date().getTime();
            if(now-last_click<this.data.timeout){
                this.el.emit('dblclick',e);
                // Reset last click
                last_click = 0;
                e.preventDefault();
            }
            last_click = now;
        })
    }
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Checkbox Component for aframe-material-collection. Includes animation and disabled state.
 * @namespace aframe-material-collection
 * @component ui-checkbox
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-checkbox', {
    schema: {
        value: {type:'boolean',default: false},
        selectedColor: {default: '#009688'},
        unselectedColor: {default: '#7f7f7f'},
        disabledColor: {default: '#afafaf'},
        indeterminate: {type:'boolean',default: false},
        disabled:{type:'boolean',default: false}
    },
    init() {
        this.width = 0.15;
        this.height = 0.15;
        this.container = document.createElement('a-entity');
        this.container.setAttribute('class','no-yoga-layout');
        this.el.appendChild(this.container);
        this.setupLines();
        // Add backing element to make the whole object clickable.
        let backing = document.createElement('a-plane');
        backing.setAttribute('width',0.105);
        backing.setAttribute('height',0.105);
        backing.setAttribute('position','0 0 -0.002');
        backing.setAttribute('shader','flat');
        backing.setAttribute('class','intersectable no-yoga-layout');
        backing.setAttribute('visible',false);
        this.el.appendChild(backing);
        this.clickHandler = ()=>{
            this.data.value = !this.data.value;
            this.click();
        };
        // Setup initial state
        this.setSelected();
        this.setDisabled();
        this.setTransform(1);
    },
    updateSchema(){
        if(this.data){
            this.setDisabled();
            if(this.data.disabled){
                if(this.data.value){
                    this.data.value=false;
                    this.data.indeterminate=false;
                    this.click();
                }
            }else{
                this.click();
            }
        }
    },
    setTransform(x){
        // Adjust position and rotation based on the interpolated value x between 0 and 1.
        // Used to offset the checkbox when in a checked state
        if(this.data.value){
            this.container.setAttribute('rotation',{x:0,y:0,z:-45*x});
            this.container.setAttribute('position',{x:-0.025*x,y:0.05*x,z:0});
        }else{
            this.container.setAttribute('rotation',{x:0,y:0,z:-45+(45*x)});
            this.container.setAttribute('position',{x:0.025-(0.025*x),y:0.05-(0.05*x),z:0});
        }
    },
    click(){
        // Reset indeterminate state on click
        this.data.indeterminate = false;
        // Hide / Show left and top lines for checked state, or right line aswell for intermediate state.
        this.setSelected();
        // run animation
        this.animateSelected()
    },
    animateSelected(){
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.el.object3D.uuid);
        new TWEEN.Tween({x:0})
            .to({ x: 1}, 200)
            .onUpdate(function(){
                _this.setTransform(this.x);
            })
            .onComplete(function(){
                // Stop changes
                UI.utils.stoppedChanging(_this.el.object3D.uuid);
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    },
    setSelected(){
        // Hide / Show lines that make up checkbox based on the current state.
        if(this.data.value){
            this.topLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.leftLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('position','0.025 -0.05 0');
            this.rightLine.setAttribute('position','0.05 0 0');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('height',0.05);
            this.bottomLine.setAttribute('color',this.data.selectedColor);
            this.rightLine.setAttribute('color',this.data.selectedColor);
        }else if(this.data.indeterminate){
            this.topLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.leftLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','0.000001 0.000001 0.000001');
            this.bottomLine.setAttribute('position','0 0 0');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('height',0.1);
            this.bottomLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.unselectedColor);
        }else{
            this.topLine.setAttribute('scale','1 1 1');
            this.leftLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('scale','1 1 1');
            this.rightLine.setAttribute('scale','1 1 1');
            this.bottomLine.setAttribute('height',0.1);
            this.leftLine.setAttribute('position','-0.05 0 0');
            this.rightLine.setAttribute('position','0.05 0 0');
            this.topLine.setAttribute('position','0 0.05 0');
            this.bottomLine.setAttribute('position','0 -0.05 0');
            this.topLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('rotation','0 0 90');
            this.bottomLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.unselectedColor);
        }
    },
    setupLines(){
        // Add four lines to make a square wireframe
        this.leftLine = this.line(true);
        this.rightLine = this.line(true);
        this.topLine = this.line(true);
        this.bottomLine = this.line(true);
        this.container.appendChild(this.topLine);
        this.container.appendChild(this.leftLine);
        this.container.appendChild(this.bottomLine);
        this.container.appendChild(this.rightLine);
    },
    setDisabled(){
        // Check and set the disabled state of the checkbox - add / remove click handler.
        if(this.data.disabled){
            this.el.removeEventListener('click',this.clickHandler);
            this.topLine.setAttribute('color',this.data.disabledColor);
            this.leftLine.setAttribute('color',this.data.disabledColor);
            this.rightLine.setAttribute('color',this.data.disabledColor);
            this.bottomLine.setAttribute('color',this.data.disabledColor);
        }else{
            this.el.addEventListener('click',this.clickHandler);
            this.topLine.setAttribute('color',this.data.unselectedColor);
            this.leftLine.setAttribute('color',this.data.unselectedColor);
            this.rightLine.setAttribute('color',this.data.value?this.data.selectedColor:this.data.unselectedColor);
            this.bottomLine.setAttribute('color',this.data.value?this.data.selectedColor:this.data.unselectedColor);
        }
    },
    line(is_vertical){
        // Create horizontal/vertical line.
        let line = document.createElement('a-plane');
        line.setAttribute('width',is_vertical?0.01:0.105);
        line.setAttribute('height',is_vertical?0.105:0.01);
        line.setAttribute('class','no-yoga-layout');
        line.setAttribute('shader','flat');
        return line;
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/* global AFRAME,TWEEN */
/**
 * Radio Component for aframe-material-collection. Resets other radio buttons siblings and includes a disabled state.
 * @namespace aframe-material-collection
 * @component ui-radio
 * @author Shane Harris
 */

module.exports = AFRAME.registerComponent('ui-radio', {
    schema: {
        value: {default: ''},
        selected:{type: 'boolean', default: false},
        selectedColor: {default: '#009688'},
        selectedRadius: {type:'number',default: 0.045},
        unselectedColor: {default: '#5f5f5f'},
        disabledColor: {default: '#afafaf'},
        disabled: {type: 'boolean', default: false}
    },
    init() {
        this.width = this.data.size||0.15;
        this.height = this.data.size||0.15;
        // Create center circle for checked state.
        this.filled_circle = document.createElement('a-circle');
        this.filled_circle.setAttribute('radius',this.data.selectedRadius);
        this.filled_circle.setAttribute('scale','0 0 0');
        this.filled_circle.setAttribute('color',this.data.disabled?this.data.disabledColor:this.data.selectedColor);
        this.filled_circle.setAttribute('shader','flat');
        this.filled_circle.setAttribute('class','no-yoga-layout');
        this.filled_circle.setAttribute('segments',6);
        this.el.components.material.material.color = new THREE.Color(this.data.disabled?this.data.disabledColor:this.data.unselectedColor);
        this.el.appendChild(this.filled_circle);
        // Create backing for getting click events.
        let backing = document.createElement('a-plane');
        backing.setAttribute('width',0.105);
        backing.setAttribute('height',0.105);
        backing.setAttribute('position','0 0 -0.002');
        backing.setAttribute('class','intersectable no-yoga-layout');
        backing.setAttribute('visible',false);
        backing.setAttribute('shader','flat');
        backing.setAttribute('segments',6);
        this.el.appendChild(backing);
        // Set this if it is checked.
        if(this.data.selected){
            this.click();
        }
        // TODO: need to add play/pause methods for registering/unregistering events.
        if(!this.data.disabled){
            this.el.addEventListener('click',e=>this.click(e));
        }
    },
    deselect(){
        // Deselect this radio with a scale animation on the circle.
        this.el.setAttribute('selected',false);
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.filled_circle.object3D.uuid);
        new TWEEN.Tween({x:1})
            .to({ x: 0.000001}, 200)
            .onUpdate(function(){
                _this.filled_circle.object3D.scale.set(this.x,this.x,this.x);
            })
            .onComplete(()=>{
                // Stop changes
                UI.utils.stoppedChanging(_this.filled_circle.object3D.uuid);
                this.isRippling = false;
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    },
    click(){
        // Get all other radio siblings and reset their state if they are selected.
        [].slice.call(this.el.parentNode.querySelectorAll('a-ring,a-ui-radio')).filter(el=>el!==this.el).forEach(ring=>{
            if(ring.components['ui-radio']&&ring.getAttribute('selected')==="true"){
                ring.components['ui-radio'].deselect();
            }
        });
        // Set this radio's selected state.
        this.el.setAttribute('selected',true);
        // Throttle animations.
        if(this.isSelecting)return;
        this.isSelecting = true;
        let _this = this;
        // Start changes
        UI.utils.isChanging(this.el.sceneEl,this.filled_circle.object3D.uuid);
        new TWEEN.Tween({x:0.000001})
            .to({ x: 1}, 250)
            .onUpdate(function(){
                _this.filled_circle.object3D.scale.set(this.x,this.x,this.x);
            })
            .onComplete(()=>{
                // Stop changes
                UI.utils.stoppedChanging(this.filled_circle.object3D.uuid);
                this.isSelecting = false;
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/* global AFRAME,THREE */
/**
 * Rounded borders Component for aframe-material-collection. Expects an a-plane entity.
 * @namespace aframe-material-collection
 * @component ui-border
 * @author Shane Harris
 */
module.exports = AFRAME.registerComponent('ui-border', {
    schema: {
        borderRadius: {type: 'number', default: 0.01},
        curveSegments:{type: 'int', default: 1},
        borderWidth:{type: 'int', default: 3},
        color:{default:'#aaa'}
    },
    init() {
        let mesh = this.el.getObject3D('mesh');
        let roundedRectShape = new THREE.Shape();
        // Draw the Rounded rectangle shape centered in the object - from three.js shapes example.
        ( function roundedRect( ctx, x, y, width, height, radius ) {
            ctx.moveTo( x, y + radius );
            ctx.lineTo( x, y + height - radius );
            ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
            ctx.lineTo( x + width - radius, y + height );
            ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
            ctx.lineTo( x + width, y + radius );
            ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
            ctx.lineTo( x + radius, y );
            ctx.quadraticCurveTo( x, y, x, y + radius );
        } )( roundedRectShape, -mesh.geometry.metadata.parameters.width/2, -mesh.geometry.metadata.parameters.height/2, mesh.geometry.metadata.parameters.width, mesh.geometry.metadata.parameters.height, this.data.borderRadius );

        roundedRectShape.autoClose = true;
        // Update the geometry.


        //new Line(new BufferGeometry().setFromPoints( roundedRectShape.getPoints() )
        // mesh.geometry = ;
        // mesh.material = ;
        //new BufferGeometry().setFromPoints( roundedRectShape.getPoints() )
        this.el.setObject3D('mesh',new THREE.Line(
                new THREE.BufferGeometry().setFromPoints(roundedRectShape.getPoints()),
                new THREE.LineBasicMaterial( { color: this.data.color, linewidth: 10 } )
            )
        );

    }
});

/***/ }),
/* 24 */
/***/ (function(module, exports) {

/* global AFRAME,Yoga */
/**
 * Yogo Layout Engine mapped to a Component for aframe-material-collection - https://yogalayout.com
 * @namespace aframe-material-collection
 * @component ui-yoga
 * @author Shane Harris
 */

if (typeof Yoga === 'undefined') {
    throw 'ui-yoga component requires the Yoga Layout Engine to be loaded - https://yogalayout.com';
}
// Map yoga enums to frendly names.
// TODO: Need to expose the padding/border/margin side as seperate options to allow for combinations.
module.exports = AFRAME.registerComponent('ui-yoga', {
    schema: {
        alignContent: {default: 'flex-start'},
        alignItems: {default: 'auto'},
        alignSelf: {default: 'auto'},
        display: {default: 'default'},
        flex: {type:'number',default: 1},
        flexDirection: {default: 'row'},
        flexWrap:{default: 'default'},
        aspectRatio: {default: 'default'},
        overflow:{default:'default'},
        justifyContent:{default:'start'},
        border: {type:'int',default: 0},
        borderLeft: {type:'int',default: 0},
        borderRight: {type:'int',default: 0},
        borderTop: {type:'int',default: 0},
        borderBottom: {type:'int',default: 0},
        padding: {type:'int',default: 0},
        paddingLeft: {type:'int',default: 0},
        paddingRight: {type:'int',default: 0},
        paddingTop: {type:'int',default: 0},
        paddingBottom: {type:'int',default: 0},
        margin: {type:'int',default: 0},
        marginLeft: {type:'int',default: 0},
        marginRight: {type:'int',default: 0},
        marginTop: {type:'int',default: 0},
        marginBottom: {type:'int',default: 0},
        marginAuto: {type:'boolean',default: false},
        marginAutoLeft: {type:'boolean',default: false},
        marginAutoRight: {type:'boolean',default: false},
        marginAutoTop: {type:'boolean',default: false},
        marginAutoBottom: {type:'boolean',default: false},
        marginPercent:{type:'number',default: 0},
        marginPercentLeft: {type:'int',default: 0},
        marginPercentRight: {type:'int',default: 0},
        marginPercentTop: {type:'int',default: 0},
        marginPercentBottom: {type:'int',default: 0},
        flexBasis: {default: 'default'},
        flexBasisPercent: {type:'number',default: 0},
        flexGrow:{type:'number',default: 0},
        flexShrink:{type:'number',default: 1},
        maxHeight:{default: 'default'},
        minHeight:{default: 'default'},
        maxWidth:{default: 'default'},
        minWidth:{default: 'default'},
        maxHeightPercent:{default: 'default'},
        minHeightPercent:{default: 'default'},
        maxWidthPercent:{default: 'default'},
        minWidthPercent:{default: 'default'},
        position:{default: 'default'},
        positionLeft: {type:'int',default: 0},
        positionRight: {type:'int',default: 0},
        positionTop: {type:'int',default: 0},
        positionBottom: {type:'int',default: 0},
        positionPercent:{default: 'default'},
        positionPercentLeft: {type:'int',default: 0},
        positionPercentRight: {type:'int',default: 0},
        positionPercentTop: {type:'int',default: 0},
        positionPercentBottom: {type:'int',default: 0},
        width:{default: 'default'},
        height:{default: 'default'},
        widthAuto:{type:'boolean',default: false},
        heightAuto:{type:'boolean',default: false},
        widthPercent:{default: 'default'},
        heightPercent:{default: 'default'},
    },
    init(){
        this.setProperties();
    },
    updateSchema(){
        this.setProperties();
    },
    setProperties(){
        this.properties = this.properties||[];
        this.properties.length = 0;
        // Store the current valid yoga properties;
        for(let name in this.data){
            if(this.data.hasOwnProperty(name)&&
                this.data[name]!=='default'&&this.data[name]){
                let value = this.mapPropertyToEnum(name);
                if(value)this.properties.push({method:'set'+name.charAt(0).toUpperCase() + name.substr(1),value:this.mapPropertyToEnum(name)});
            }
        }
    },
    getProperties(){
        // Get the current yoga properties array as an object
        let propertiesObj = {};
        for(let i = 0;i < this.properties.length;i++){
            propertiesObj[this.properties[i].method] = this.properties[i];
        }
        return propertiesObj;
    },
    mapPropertyToEnum(name){
        // Get the yoga enum for the friendly name.
        switch(true){
            case name.indexOf('align') > -1:
                return this.enums.align[this.data[name]];
            case name.indexOf('Edge') > -1:
                return this.enums.edge[this.data[name]];
            case name === 'flexDirection':
            case name === 'flexWrap':
            case name === 'positionType':
            case name === 'overflow':
            case name === 'display':
            case name === 'justifyContent':
                return this.enums[name][this.data[name]];
            default:
                return this.data[name];
        }
    },
    enums:{
        align:{
            count:Yoga.ALIGN_COUNT,
            auto:Yoga.ALIGN_AUTO,
            "flex-start":Yoga.ALIGN_FLEX_START,
            center:Yoga.ALIGN_CENTER,
            "flex-end":Yoga.ALIGN_FLEX_END,
            stretch:Yoga.ALIGN_STRETCH,
            baseline:Yoga.ALIGN_BASELINE,
            "space-between":Yoga.ALIGN_SPACE_BETWEEN,
            "space-around":Yoga.ALIGN_SPACE_AROUND,
        },
        dimension:{
            count:Yoga.DIMENSION_COUNT,
            width:Yoga.DIMENSION_WIDTH,
            height:Yoga.DIMENSION_HEIGHT,
        },
        direction:{
            count:Yoga.DIRECTION_COUNT,
            inherit:Yoga.DIRECTION_INHERIT,
            ltr:Yoga.DIRECTION_LTR,
            rtl:Yoga.DIRECTION_RTL,
        },
        display:{
            count:Yoga.DISPLAY_COUNT,
            flex:Yoga.DISPLAY_FLEX,
            none:Yoga.DISPLAY_NONE,
        },
        edge:{
            count:Yoga.EDGE_COUNT,
            left:Yoga.EDGE_LEFT,
            top:Yoga.EDGE_TOP,
            right:Yoga.EDGE_RIGHT,
            bottom:Yoga.EDGE_BOTTOM,
            start:Yoga.EDGE_START,
            end:Yoga.EDGE_END,
            horizontal:Yoga.EDGE_HORIZONTAL,
            vertical:Yoga.EDGE_VERTICAL,
            all:Yoga.EDGE_ALL,
        },
        experimental:{
            count:Yoga.EXPERIMENTAL_FEATURE_COUNT,
            "flex-basis":Yoga.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS,
        },
        flexDirection:{
            count:Yoga.FLEX_DIRECTION_COUNT,
            column:Yoga.FLEX_DIRECTION_COLUMN,
            "column-reverse":Yoga.FLEX_DIRECTION_COLUMN_REVERSE,
            row:Yoga.FLEX_DIRECTION_ROW,
            reverse:Yoga.FLEX_DIRECTION_ROW_REVERSE,
        },
        justifyContent:{
            count:Yoga.JUSTIFY_COUNT,
            start:Yoga.JUSTIFY_FLEX_START,
            center:Yoga.JUSTIFY_CENTER,
            end:Yoga.JUSTIFY_FLEX_END,
            between:Yoga.JUSTIFY_SPACE_BETWEEN,
            around:Yoga.JUSTIFY_SPACE_AROUND,
            evenly:Yoga.JUSTIFY_SPACE_EVENLY,
        },
        logLevel:{
            count:Yoga.LOG_LEVEL_COUNT,
            error:Yoga.LOG_LEVEL_ERROR,
            warn:Yoga.LOG_LEVEL_WARN,
            info:Yoga.LOG_LEVEL_INFO,
            debug:Yoga.LOG_LEVEL_DEBUG,
            verbose:Yoga.LOG_LEVEL_VERBOSE,
            fatal:Yoga.LOG_LEVEL_FATAL,
        },
        measureMode:{
            count:Yoga.MEASURE_MODE_COUNT,
            undefined:Yoga.MEASURE_MODE_UNDEFINED,
            exactly:Yoga.MEASURE_MODE_EXACTLY,
            "at-most":Yoga.MEASURE_MODE_AT_MOST,
        },
        nodeType:{
            count:Yoga.NODE_TYPE_COUNT,
            default:Yoga.NODE_TYPE_DEFAULT,
            text:Yoga.NODE_TYPE_TEXT,
        },
        overflow:{
            count:Yoga.OVERFLOW_COUNT,
            visible:Yoga.OVERFLOW_VISIBLE,
            hidden:Yoga.OVERFLOW_HIDDEN,
            scroll:Yoga.OVERFLOW_SCROLL,
        },
        positionType:{
            count:Yoga.POSITION_TYPE_COUNT,
            relative:Yoga.POSITION_TYPE_RELATIVE,
            absolute:Yoga.POSITION_TYPE_ABSOLUTE,
        },
        printOptions:{
            count:Yoga.PRINT_OPTIONS_COUNT,
            layout:Yoga.PRINT_OPTIONS_LAYOUT,
            style:Yoga.PRINT_OPTIONS_STYLE,
            children:Yoga.PRINT_OPTIONS_CHILDREN,
        },
        unit:{
            count:Yoga.UNIT_COUNT,
            undefined:Yoga.UNIT_UNDEFINED,
            point:Yoga.UNIT_POINT,
            percent:Yoga.UNIT_PERCENT,
            auto:Yoga.UNIT_AUTO,
        },
        flexWrap:{
            count:Yoga.WRAP_COUNT,
            "no-wrap":Yoga.WRAP_NO_WRAP,
            wrap:Yoga.WRAP_WRAP,
            "wrap-reverse":Yoga.WRAP_WRAP_REVERSE,
        }
    }
});

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/utils.js
class Utils{
    constructor(){
        this.changesDetected = {};
        this.is_changeing = false;
        AFRAME.registerComponent('ui-is-changing', {
            init() {
                this.el.sceneEl.addEventListener('ui-changing',()=>{
                    console.log('ui-changing');
                });
                this.el.sceneEl.addEventListener('ui-changing-stopped',()=>{
                    console.log('ui-changing-stopped');
                });
            }
        });
    }
    isFirstOrLastChange(){
        let has_none = true;
        for (let o in this.changesDetected) {
            if(!this.is_changeing){
                this.scene.emit('ui-changing');
            }
            has_none = false;
            this.is_changeing = true;
            break;
        }
        if(has_none){
            if(this.is_changeing){
                // with a delay to allow render
                //setTimeout(()=>this.scene.emit('ui-changing-stopped'),150);
                this.scene.emit('ui-changing-stopped')
            }
            this.is_changeing = false;
        }
    }
    isChanging(scene,ref){
        this.scene = this.scene||scene;
        this.changesDetected[ref] = 0;
        this.isFirstOrLastChange();
    }
    stoppedChanging(ref){
        if(ref in this.changesDetected){
            delete this.changesDetected[ref];
        }
        this.isFirstOrLastChange();
    }
}
// CONCATENATED MODULE: ./src/index.js
/* global AFRAME */
/**
 * Application entry point
 * @author Shane Harris
 */


let version = __webpack_require__(0).version;
console.log('aframe-material-collection version '+version);

if (typeof AFRAME === 'undefined') {
    throw 'aframe-material-collection requires AFRAME to be loaded first. - <script src="https://aframe.io/releases/0.8.2/aframe.min.js"></script>';
}
let utils = new Utils();

window.UI = {
    // Utils
    utils:utils,
    // Primitives
    a_ui_button: __webpack_require__(1),
    a_ui_fab_button: __webpack_require__(2),
    a_ui_fab_button_small: __webpack_require__(3),
    a_ui_switch: __webpack_require__(4),
    a_ui_checkbox: __webpack_require__(5),
    a_ui_radio: __webpack_require__(6),
    a_ui_text_input: __webpack_require__(7),
    a_ui_number_input: __webpack_require__(8),
    a_ui_int_input: __webpack_require__(9),
    a_ui_password_input: __webpack_require__(10),
    a_ui_scroll_pane: __webpack_require__(11),

    // Components
    text: __webpack_require__(12),
    btn: __webpack_require__(13),
    icon: __webpack_require__(14),
    rounded: __webpack_require__(15),
    ripple: __webpack_require__(16),
    ui_switch: __webpack_require__(17),
    scroll_pane: __webpack_require__(18),
    mouse_shim: __webpack_require__(19),
    double_click: __webpack_require__(20),
    checkbox: __webpack_require__(21),
    radio: __webpack_require__(22),
    border: __webpack_require__(23),
    yoga_properties: __webpack_require__(24),
};
//module.exports = UI;



/***/ })
/******/ ]);
//# sourceMappingURL=aframe-material-collection.js.map