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
        selectedRadius: {type:'number',default: 0.09},
        unselectedColor: {default: '#5f5f5f'},
        disabledColor: {default: '#afafaf'},
        disabled: {type: 'boolean', default: false}
    },
    init() {
        this.width = this.data.size||0.3;
        this.height = this.data.size||0.3;
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
        let backing = document.createElement('a-circle');
        backing.setAttribute('radius',this.data.selectedRadius+0.04);
        // backing.setAttribute('height',0.21);
        backing.setAttribute('position','0 0 -0.002');
        backing.setAttribute('class','intersectable no-yoga-layout');
        backing.setAttribute('transparent',true);
        backing.setAttribute('opacity',0.00001);
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
        new TWEEN.Tween({x:1})
            .to({ x: 0.000001}, 200)
            .onUpdate(function(){
                _this.filled_circle.object3D.scale.set(this.x,this.x,this.x);
                //_this.filled_circle.setAttribute('radius',this.x);
            })
            .onComplete(()=>{
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
        new TWEEN.Tween({x:0.000001})
            .to({ x: 1}, 250)
            .onUpdate(function(){
                _this.filled_circle.object3D.scale.set(this.x,this.x,this.x);
            })
            .onComplete(()=>{
                this.isSelecting = false;
            })
            .easing(TWEEN.Easing.Exponential.Out).start();
    }
});