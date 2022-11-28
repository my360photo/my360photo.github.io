// Garden Gnome Software - Skin
// Object2VR 3.1.10/10788
// Filename: simplex_v6.ggsk
// Generated Mon Nov 28 13:15:49 2022

function object2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._show_controller_button=document.createElement('div');
		this._show_controller_button.ggId="show_controller_button";
		this._show_controller_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._show_controller_button.ggVisible=true;
		this._show_controller_button.className='ggskin ggskin_svg';
		this._show_controller_button.ggType='svg';
		this._show_controller_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(1 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(23 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  23px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._show_controller_button.setAttribute('style',hs);
		this._show_controller_button__img=document.createElement('img');
		this._show_controller_button__img.className='ggskin ggskin_svg';
		this._show_controller_button__img.setAttribute('src',basePath + './show_controller_button.svg');
		this._show_controller_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._show_controller_button__img['ondragstart']=function() { return false; };
		this._show_controller_button.appendChild(this._show_controller_button__img);
		this._show_controller_button.onmouseover=function () {
			me._show_controller_button__img.src=basePath + './show_controller_button__o.svg';
		}
		this._show_controller_button.onmouseout=function () {
			me._show_controller_button__img.src=basePath + './show_controller_button.svg';
		}
		this._tt_show_controller=document.createElement('div');
		this._tt_show_controller__text=document.createElement('div');
		this._tt_show_controller.className='ggskin ggskin_textdiv';
		this._tt_show_controller.ggTextDiv=this._tt_show_controller__text;
		this._tt_show_controller.ggId="tt_show_controller";
		this._tt_show_controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_show_controller.ggVisible=false;
		this._tt_show_controller.className='ggskin ggskin_text';
		this._tt_show_controller.ggType='text';
		this._tt_show_controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_show_controller.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 118px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_show_controller__text.setAttribute('style',hs);
		this._tt_show_controller.ggTextDiv.innerHTML="Show Controller";
		this._tt_show_controller.appendChild(this._tt_show_controller__text);
		this._show_controller_button.appendChild(this._tt_show_controller);
		this.divSkin.appendChild(this._show_controller_button);
		this._loading_multires=document.createElement('div');
		this._loading_multires.ggId="loading_multires";
		this._loading_multires.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_multires.ggVisible=false;
		this._loading_multires.className='ggskin ggskin_svg';
		this._loading_multires.ggType='svg';
		this._loading_multires.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(6 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 6px;';
		hs+='top:  6px;';
		hs+='width: 25px;';
		hs+='height: 7px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._loading_multires.setAttribute('style',hs);
		this._loading_multires__img=document.createElement('img');
		this._loading_multires__img.className='ggskin ggskin_svg';
		this._loading_multires__img.setAttribute('src',basePath + './loading_multires.svg');
		this._loading_multires__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 7px;-webkit-user-drag:none;');
		this._loading_multires__img['ondragstart']=function() { return false; };
		this._loading_multires.appendChild(this._loading_multires__img);
		this.divSkin.appendChild(this._loading_multires);
		this._screentint=document.createElement('div');
		this._screentint.ggId="screentint";
		this._screentint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint.ggVisible=true;
		this._screentint.className='ggskin ggskin_rectangle';
		this._screentint.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		this._screentint.setAttribute('style',hs);
		this.divSkin.appendChild(this._screentint);
		this._controller=document.createElement('div');
		this._controller.ggId="controller";
		this._controller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller.ggVisible=true;
		this._controller.className='ggskin ggskin_container';
		this._controller.ggType='container';
		this._controller.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(23 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  23px;';
		hs+='width: 288px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._controller.setAttribute('style',hs);
		this._controller_slider=document.createElement('div');
		this._controller_slider.ggId="controller_slider";
		this._controller_slider.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._controller_slider.ggVisible=true;
		this._controller_slider.className='ggskin ggskin_container';
		this._controller_slider.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._controller_slider.setAttribute('style',hs);
		this._enter_vr=document.createElement('div');
		this._enter_vr.ggId="enter_vr";
		this._enter_vr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._enter_vr.ggVisible=false;
		this._enter_vr.className='ggskin ggskin_svg';
		this._enter_vr.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._enter_vr.setAttribute('style',hs);
		this._enter_vr__img=document.createElement('img');
		this._enter_vr__img.className='ggskin ggskin_svg';
		this._enter_vr__img.setAttribute('src',basePath + './enter_vr.svg');
		this._enter_vr__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._enter_vr__img['ondragstart']=function() { return false; };
		this._enter_vr.appendChild(this._enter_vr__img);
		this._enter_vr.onmouseover=function () {
			me._enter_vr__img.src=basePath + './enter_vr__o.svg';
		}
		this._enter_vr.onmouseout=function () {
			me._enter_vr__img.src=basePath + './enter_vr.svg';
		}
		this._tt_enter_vr=document.createElement('div');
		this._tt_enter_vr__text=document.createElement('div');
		this._tt_enter_vr.className='ggskin ggskin_textdiv';
		this._tt_enter_vr.ggTextDiv=this._tt_enter_vr__text;
		this._tt_enter_vr.ggId="tt_enter_vr";
		this._tt_enter_vr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_enter_vr.ggVisible=false;
		this._tt_enter_vr.className='ggskin ggskin_text';
		this._tt_enter_vr.ggType='text';
		this._tt_enter_vr.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_enter_vr.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_enter_vr__text.setAttribute('style',hs);
		this._tt_enter_vr.ggTextDiv.innerHTML="Enter VR";
		this._tt_enter_vr.appendChild(this._tt_enter_vr__text);
		this._enter_vr.appendChild(this._tt_enter_vr);
		this._controller_slider.appendChild(this._enter_vr);
		this._fullscreen_buttons=document.createElement('div');
		this._fullscreen_buttons.ggId="fullscreen_buttons";
		this._fullscreen_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_buttons.ggVisible=false;
		this._fullscreen_buttons.className='ggskin ggskin_container';
		this._fullscreen_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 224px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._fullscreen_buttons.setAttribute('style',hs);
		this._fullscreen_buttons.onclick=function () {
			me.player.toggleFullscreen();
		}
		this._fullscreen=document.createElement('div');
		this._fullscreen.ggId="fullscreen";
		this._fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen.ggVisible=true;
		this._fullscreen.className='ggskin ggskin_svg';
		this._fullscreen.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._fullscreen.setAttribute('style',hs);
		this._fullscreen__img=document.createElement('img');
		this._fullscreen__img.className='ggskin ggskin_svg';
		this._fullscreen__img.setAttribute('src',basePath + './fullscreen.svg');
		this._fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen__img['ondragstart']=function() { return false; };
		this._fullscreen.appendChild(this._fullscreen__img);
		this._fullscreen.onmouseover=function () {
			me._fullscreen__img.src=basePath + './fullscreen__o.svg';
		}
		this._fullscreen.onmouseout=function () {
			me._fullscreen__img.src=basePath + './fullscreen.svg';
		}
		this._fullscreen_buttons.appendChild(this._fullscreen);
		this._fullscreen_off=document.createElement('div');
		this._fullscreen_off.ggId="fullscreen_off";
		this._fullscreen_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fullscreen_off.ggVisible=true;
		this._fullscreen_off.className='ggskin ggskin_svg';
		this._fullscreen_off.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._fullscreen_off.setAttribute('style',hs);
		this._fullscreen_off__img=document.createElement('img');
		this._fullscreen_off__img.className='ggskin ggskin_svg';
		this._fullscreen_off__img.setAttribute('src',basePath + './fullscreen_off.svg');
		this._fullscreen_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._fullscreen_off__img['ondragstart']=function() { return false; };
		this._fullscreen_off.appendChild(this._fullscreen_off__img);
		this._fullscreen_off.onmouseover=function () {
			me._fullscreen_off__img.src=basePath + './fullscreen_off__o.svg';
		}
		this._fullscreen_off.onmouseout=function () {
			me._fullscreen_off__img.src=basePath + './fullscreen_off.svg';
		}
		this._fullscreen_buttons.appendChild(this._fullscreen_off);
		this._tt_fullscreen=document.createElement('div');
		this._tt_fullscreen__text=document.createElement('div');
		this._tt_fullscreen.className='ggskin ggskin_textdiv';
		this._tt_fullscreen.ggTextDiv=this._tt_fullscreen__text;
		this._tt_fullscreen.ggId="tt_fullscreen";
		this._tt_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_fullscreen.ggVisible=false;
		this._tt_fullscreen.className='ggskin ggskin_text';
		this._tt_fullscreen.ggType='text';
		this._tt_fullscreen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_fullscreen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_fullscreen__text.setAttribute('style',hs);
		this._tt_fullscreen.ggTextDiv.innerHTML="";
		this._tt_fullscreen.appendChild(this._tt_fullscreen__text);
		this._fullscreen_buttons.appendChild(this._tt_fullscreen);
		this._controller_slider.appendChild(this._fullscreen_buttons);
		this._gyro=document.createElement('div');
		this._gyro.ggId="gyro";
		this._gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro.ggVisible=false;
		this._gyro.className='ggskin ggskin_container';
		this._gyro.ggType='container';
		hs ='position:absolute;';
		hs+='left: 192px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._gyro.setAttribute('style',hs);
		this._gyro.onclick=function () {
			me.player.stopAutorotate();
		}
		this._gyro_on=document.createElement('div');
		this._gyro_on.ggId="gyro_on";
		this._gyro_on.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_on.ggVisible=true;
		this._gyro_on.className='ggskin ggskin_svg';
		this._gyro_on.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._gyro_on.setAttribute('style',hs);
		this._gyro_on__img=document.createElement('img');
		this._gyro_on__img.className='ggskin ggskin_svg';
		this._gyro_on__img.setAttribute('src',basePath + './gyro_on.svg');
		this._gyro_on__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._gyro_on__img['ondragstart']=function() { return false; };
		this._gyro_on.appendChild(this._gyro_on__img);
		this._gyro_on.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_off.style[domTransition]='none';
			} else {
				me._gyro_off.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
		}
		this._gyro_on.onmouseover=function () {
			me._gyro_on__img.src=basePath + './gyro_on__o.svg';
		}
		this._gyro_on.onmouseout=function () {
			me._gyro_on__img.src=basePath + './gyro_on.svg';
		}
		this._gyro.appendChild(this._gyro_on);
		this._gyro_off=document.createElement('div');
		this._gyro_off.ggId="gyro_off";
		this._gyro_off.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._gyro_off.ggVisible=true;
		this._gyro_off.className='ggskin ggskin_svg';
		this._gyro_off.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._gyro_off.setAttribute('style',hs);
		this._gyro_off__img=document.createElement('img');
		this._gyro_off__img.className='ggskin ggskin_svg';
		this._gyro_off__img.setAttribute('src',basePath + './gyro_off.svg');
		this._gyro_off__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._gyro_off__img['ondragstart']=function() { return false; };
		this._gyro_off.appendChild(this._gyro_off__img);
		this._gyro_off.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._gyro_on.style[domTransition]='none';
			} else {
				me._gyro_on.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		this._gyro_off.onmouseover=function () {
			me._gyro_off__img.src=basePath + './gyro_off__o.svg';
		}
		this._gyro_off.onmouseout=function () {
			me._gyro_off__img.src=basePath + './gyro_off.svg';
		}
		this._gyro.appendChild(this._gyro_off);
		this._tt_gyro=document.createElement('div');
		this._tt_gyro__text=document.createElement('div');
		this._tt_gyro.className='ggskin ggskin_textdiv';
		this._tt_gyro.ggTextDiv=this._tt_gyro__text;
		this._tt_gyro.ggId="tt_gyro";
		this._tt_gyro.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_gyro.ggVisible=false;
		this._tt_gyro.className='ggskin ggskin_text';
		this._tt_gyro.ggType='text';
		this._tt_gyro.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_gyro.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_gyro__text.setAttribute('style',hs);
		this._tt_gyro.ggTextDiv.innerHTML="";
		this._tt_gyro.appendChild(this._tt_gyro__text);
		this._gyro.appendChild(this._tt_gyro);
		this._controller_slider.appendChild(this._gyro);
		this._projection_buttons=document.createElement('div');
		this._projection_buttons.ggId="projection_buttons";
		this._projection_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._projection_buttons.ggVisible=false;
		this._projection_buttons.className='ggskin ggskin_container';
		this._projection_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 160px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._projection_buttons.setAttribute('style',hs);
		this._stereographic=document.createElement('div');
		this._stereographic.ggId="stereographic";
		this._stereographic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stereographic.ggVisible=true;
		this._stereographic.className='ggskin ggskin_svg';
		this._stereographic.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._stereographic.setAttribute('style',hs);
		this._stereographic__img=document.createElement('img');
		this._stereographic__img.className='ggskin ggskin_svg';
		this._stereographic__img.setAttribute('src',basePath + './stereographic.svg');
		this._stereographic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._stereographic__img['ondragstart']=function() { return false; };
		this._stereographic.appendChild(this._stereographic__img);
		this._stereographic.onmouseover=function () {
			me._stereographic__img.src=basePath + './stereographic__o.svg';
		}
		this._stereographic.onmouseout=function () {
			me._stereographic__img.src=basePath + './stereographic.svg';
		}
		this._projection_buttons.appendChild(this._stereographic);
		this._tt_projection=document.createElement('div');
		this._tt_projection__text=document.createElement('div');
		this._tt_projection.className='ggskin ggskin_textdiv';
		this._tt_projection.ggTextDiv=this._tt_projection__text;
		this._tt_projection.ggId="tt_projection";
		this._tt_projection.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_projection.ggVisible=false;
		this._tt_projection.className='ggskin ggskin_text';
		this._tt_projection.ggType='text';
		this._tt_projection.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_projection.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_projection__text.setAttribute('style',hs);
		this._tt_projection.ggTextDiv.innerHTML="";
		this._tt_projection.appendChild(this._tt_projection__text);
		this._projection_buttons.appendChild(this._tt_projection);
		this._controller_slider.appendChild(this._projection_buttons);
		this._thumbnail=document.createElement('div');
		this._thumbnail.ggId="thumbnail";
		this._thumbnail.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail.ggVisible=false;
		this._thumbnail.className='ggskin ggskin_container';
		this._thumbnail.ggType='container';
		hs ='position:absolute;';
		hs+='left: 128px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._thumbnail.setAttribute('style',hs);
		this._thumbnail_show_button_show=document.createElement('div');
		this._thumbnail_show_button_show.ggId="thumbnail_show_button_show";
		this._thumbnail_show_button_show.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._thumbnail_show_button_show.ggVisible=true;
		this._thumbnail_show_button_show.className='ggskin ggskin_svg';
		this._thumbnail_show_button_show.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._thumbnail_show_button_show.setAttribute('style',hs);
		this._thumbnail_show_button_show__img=document.createElement('img');
		this._thumbnail_show_button_show__img.className='ggskin ggskin_svg';
		this._thumbnail_show_button_show__img.setAttribute('src',basePath + './thumbnail_show_button_show.svg');
		this._thumbnail_show_button_show__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._thumbnail_show_button_show__img['ondragstart']=function() { return false; };
		this._thumbnail_show_button_show.appendChild(this._thumbnail_show_button_show__img);
		this._thumbnail_show_button_show.onmouseover=function () {
			me._thumbnail_show_button_show__img.src=basePath + './thumbnail_show_button_show__o.svg';
		}
		this._thumbnail_show_button_show.onmouseout=function () {
			me._thumbnail_show_button_show__img.src=basePath + './thumbnail_show_button_show.svg';
		}
		this._thumbnail.appendChild(this._thumbnail_show_button_show);
		this._tt_thumbnail_open=document.createElement('div');
		this._tt_thumbnail_open__text=document.createElement('div');
		this._tt_thumbnail_open.className='ggskin ggskin_textdiv';
		this._tt_thumbnail_open.ggTextDiv=this._tt_thumbnail_open__text;
		this._tt_thumbnail_open.ggId="tt_thumbnail_open";
		this._tt_thumbnail_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_thumbnail_open.ggVisible=false;
		this._tt_thumbnail_open.className='ggskin ggskin_text';
		this._tt_thumbnail_open.ggType='text';
		this._tt_thumbnail_open.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_thumbnail_open.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_thumbnail_open__text.setAttribute('style',hs);
		this._tt_thumbnail_open.ggTextDiv.innerHTML="";
		this._tt_thumbnail_open.appendChild(this._tt_thumbnail_open__text);
		this._thumbnail.appendChild(this._tt_thumbnail_open);
		this._controller_slider.appendChild(this._thumbnail);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=false;
		this._info.className='ggskin ggskin_svg';
		this._info.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 96px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._info.setAttribute('style',hs);
		this._info__img=document.createElement('img');
		this._info__img.className='ggskin ggskin_svg';
		this._info__img.setAttribute('src',basePath + './info.svg');
		this._info__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._info__img['ondragstart']=function() { return false; };
		this._info.appendChild(this._info__img);
		this._info.onmouseover=function () {
			me._info__img.src=basePath + './info__o.svg';
		}
		this._info.onmouseout=function () {
			me._info__img.src=basePath + './info.svg';
		}
		this._tt_userdata=document.createElement('div');
		this._tt_userdata__text=document.createElement('div');
		this._tt_userdata.className='ggskin ggskin_textdiv';
		this._tt_userdata.ggTextDiv=this._tt_userdata__text;
		this._tt_userdata.ggId="tt_userdata";
		this._tt_userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_userdata.ggVisible=false;
		this._tt_userdata.className='ggskin ggskin_text';
		this._tt_userdata.ggType='text';
		this._tt_userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_userdata.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_userdata__text.setAttribute('style',hs);
		this._tt_userdata.ggTextDiv.innerHTML="Show User Data";
		this._tt_userdata.appendChild(this._tt_userdata__text);
		this._info.appendChild(this._tt_userdata);
		this._controller_slider.appendChild(this._info);
		this._autorotate_buttons=document.createElement('div');
		this._autorotate_buttons.ggId="autorotate_buttons";
		this._autorotate_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate_buttons.ggVisible=false;
		this._autorotate_buttons.className='ggskin ggskin_container';
		this._autorotate_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 64px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._autorotate_buttons.setAttribute('style',hs);
		this._autorotate_buttons.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._autorotate_start=document.createElement('div');
		this._autorotate_start.ggId="autorotate_start";
		this._autorotate_start.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate_start.ggVisible=true;
		this._autorotate_start.className='ggskin ggskin_svg';
		this._autorotate_start.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._autorotate_start.setAttribute('style',hs);
		this._autorotate_start__img=document.createElement('img');
		this._autorotate_start__img.className='ggskin ggskin_svg';
		this._autorotate_start__img.setAttribute('src',basePath + './autorotate_start.svg');
		this._autorotate_start__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate_start__img['ondragstart']=function() { return false; };
		this._autorotate_start.appendChild(this._autorotate_start__img);
		this._autorotate_start.onmouseover=function () {
			me._autorotate_start__img.src=basePath + './autorotate_start__o.svg';
		}
		this._autorotate_start.onmouseout=function () {
			me._autorotate_start__img.src=basePath + './autorotate_start.svg';
		}
		this._autorotate_buttons.appendChild(this._autorotate_start);
		this._autorotate_stop=document.createElement('div');
		this._autorotate_stop.ggId="autorotate_stop";
		this._autorotate_stop.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._autorotate_stop.ggVisible=true;
		this._autorotate_stop.className='ggskin ggskin_svg';
		this._autorotate_stop.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._autorotate_stop.setAttribute('style',hs);
		this._autorotate_stop__img=document.createElement('img');
		this._autorotate_stop__img.className='ggskin ggskin_svg';
		this._autorotate_stop__img.setAttribute('src',basePath + './autorotate_stop.svg');
		this._autorotate_stop__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._autorotate_stop__img['ondragstart']=function() { return false; };
		this._autorotate_stop.appendChild(this._autorotate_stop__img);
		this._autorotate_stop.onmouseover=function () {
			me._autorotate_stop__img.src=basePath + './autorotate_stop__o.svg';
		}
		this._autorotate_stop.onmouseout=function () {
			me._autorotate_stop__img.src=basePath + './autorotate_stop.svg';
		}
		this._autorotate_buttons.appendChild(this._autorotate_stop);
		this._tt_rotate=document.createElement('div');
		this._tt_rotate__text=document.createElement('div');
		this._tt_rotate.className='ggskin ggskin_textdiv';
		this._tt_rotate.ggTextDiv=this._tt_rotate__text;
		this._tt_rotate.ggId="tt_rotate";
		this._tt_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_rotate.ggVisible=false;
		this._tt_rotate.className='ggskin ggskin_text';
		this._tt_rotate.ggType='text';
		this._tt_rotate.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_rotate.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_rotate__text.setAttribute('style',hs);
		this._tt_rotate.ggTextDiv.innerHTML="";
		this._tt_rotate.appendChild(this._tt_rotate__text);
		this._autorotate_buttons.appendChild(this._tt_rotate);
		this._controller_slider.appendChild(this._autorotate_buttons);
		this._zoomout=document.createElement('div');
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=false;
		this._zoomout.className='ggskin ggskin_svg';
		this._zoomout.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 32px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + './zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout.onmouseover=function () {
			me._zoomout__img.src=basePath + './zoomout__o.svg';
		}
		this._zoomout.onmouseout=function () {
			me._zoomout__img.src=basePath + './zoomout.svg';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function () {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function () {
			me.elementMouseDown['zoomout']=false;
		}
		this._tt_zoomout=document.createElement('div');
		this._tt_zoomout__text=document.createElement('div');
		this._tt_zoomout.className='ggskin ggskin_textdiv';
		this._tt_zoomout.ggTextDiv=this._tt_zoomout__text;
		this._tt_zoomout.ggId="tt_zoomout";
		this._tt_zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomout.ggVisible=false;
		this._tt_zoomout.className='ggskin ggskin_text';
		this._tt_zoomout.ggType='text';
		this._tt_zoomout.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomout.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomout__text.setAttribute('style',hs);
		this._tt_zoomout.ggTextDiv.innerHTML="Zoom Out";
		this._tt_zoomout.appendChild(this._tt_zoomout__text);
		this._zoomout.appendChild(this._tt_zoomout);
		this._controller_slider.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=false;
		this._zoomin.className='ggskin ggskin_svg';
		this._zoomin.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + './zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin.onmouseover=function () {
			me._zoomin__img.src=basePath + './zoomin__o.svg';
		}
		this._zoomin.onmouseout=function () {
			me._zoomin__img.src=basePath + './zoomin.svg';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function () {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function () {
			me.elementMouseDown['zoomin']=false;
		}
		this._tt_zoomin=document.createElement('div');
		this._tt_zoomin__text=document.createElement('div');
		this._tt_zoomin.className='ggskin ggskin_textdiv';
		this._tt_zoomin.ggTextDiv=this._tt_zoomin__text;
		this._tt_zoomin.ggId="tt_zoomin";
		this._tt_zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zoomin.ggVisible=false;
		this._tt_zoomin.className='ggskin ggskin_text';
		this._tt_zoomin.ggType='text';
		this._tt_zoomin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
			}
			this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  32px;';
		hs+='width: 98px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._tt_zoomin.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zoomin__text.setAttribute('style',hs);
		this._tt_zoomin.ggTextDiv.innerHTML="Zoom In";
		this._tt_zoomin.appendChild(this._tt_zoomin__text);
		this._zoomin.appendChild(this._tt_zoomin);
		this._controller_slider.appendChild(this._zoomin);
		this._key_up=document.createElement('div');
		this._key_up.ggId="key_up";
		this._key_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._key_up.ggVisible=true;
		this._key_up.className='ggskin ggskin_container';
		this._key_up.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._key_up.setAttribute('style',hs);
		this._key_up.onmouseout=function () {
			me.elementMouseDown['key_up']=false;
		}
		this._key_up.onmousedown=function () {
			me.elementMouseDown['key_up']=true;
		}
		this._key_up.onmouseup=function () {
			me.elementMouseDown['key_up']=false;
		}
		this._key_up.ontouchend=function () {
			me.elementMouseDown['key_up']=false;
		}
		this._controller_slider.appendChild(this._key_up);
		this._key_down=document.createElement('div');
		this._key_down.ggId="key_down";
		this._key_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._key_down.ggVisible=true;
		this._key_down.className='ggskin ggskin_container';
		this._key_down.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._key_down.setAttribute('style',hs);
		this._key_down.onmouseout=function () {
			me.elementMouseDown['key_down']=false;
		}
		this._key_down.onmousedown=function () {
			me.elementMouseDown['key_down']=true;
		}
		this._key_down.onmouseup=function () {
			me.elementMouseDown['key_down']=false;
		}
		this._key_down.ontouchend=function () {
			me.elementMouseDown['key_down']=false;
		}
		this._controller_slider.appendChild(this._key_down);
		this._key_left=document.createElement('div');
		this._key_left.ggId="key_left";
		this._key_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._key_left.ggVisible=true;
		this._key_left.className='ggskin ggskin_container';
		this._key_left.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._key_left.setAttribute('style',hs);
		this._key_left.onmouseout=function () {
			me.elementMouseDown['key_left']=false;
		}
		this._key_left.onmousedown=function () {
			me.elementMouseDown['key_left']=true;
		}
		this._key_left.onmouseup=function () {
			me.elementMouseDown['key_left']=false;
		}
		this._key_left.ontouchend=function () {
			me.elementMouseDown['key_left']=false;
		}
		this._controller_slider.appendChild(this._key_left);
		this._key_right=document.createElement('div');
		this._key_right.ggId="key_right";
		this._key_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._key_right.ggVisible=true;
		this._key_right.className='ggskin ggskin_container';
		this._key_right.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._key_right.setAttribute('style',hs);
		this._key_right.onmouseout=function () {
			me.elementMouseDown['key_right']=false;
		}
		this._key_right.onmousedown=function () {
			me.elementMouseDown['key_right']=true;
		}
		this._key_right.onmouseup=function () {
			me.elementMouseDown['key_right']=false;
		}
		this._key_right.ontouchend=function () {
			me.elementMouseDown['key_right']=false;
		}
		this._controller_slider.appendChild(this._key_right);
		this._controller.appendChild(this._controller_slider);
		this.divSkin.appendChild(this._controller);
		this._loading=document.createElement('div');
		this._loading.ggId="loading";
		this._loading.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading.ggVisible=false;
		this._loading.className='ggskin ggskin_container';
		this._loading.ggType='container';
		this._loading.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 210px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._loading.setAttribute('style',hs);
		this._loadingbg=document.createElement('div');
		this._loadingbg.ggId="loadingbg";
		this._loadingbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbg.ggVisible=true;
		this._loadingbg.className='ggskin ggskin_rectangle';
		this._loadingbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 208px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._loadingbg.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbg);
		this._loadingtext=document.createElement('div');
		this._loadingtext__text=document.createElement('div');
		this._loadingtext.className='ggskin ggskin_textdiv';
		this._loadingtext.ggTextDiv=this._loadingtext__text;
		this._loadingtext.ggId="loadingtext";
		this._loadingtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingtext.ggVisible=true;
		this._loadingtext.className='ggskin ggskin_text';
		this._loadingtext.ggType='text';
		this._loadingtext.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (176-this.ggTextDiv.offsetWidth)*0) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 16px;';
		hs+='top:  13px;';
		hs+='width: 176px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._loadingtext.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._loadingtext__text.setAttribute('style',hs);
		this._loadingtext.ggUpdateText=function() {
			var hs="Loading... $(p)%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		this.ggUpdatePosition();
		}
		this._loadingtext.ggUpdateText();
		this._loadingtext.appendChild(this._loadingtext__text);
		this._loading.appendChild(this._loadingtext);
		this._loadingbar=document.createElement('div');
		this._loadingbar.ggId="loadingbar";
		this._loadingbar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loadingbar.ggVisible=true;
		this._loadingbar.className='ggskin ggskin_rectangle';
		this._loadingbar.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 14px;';
		hs+='top:  36px;';
		hs+='width: 182px;';
		hs+='height: 13px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #ffffff;';
		hs+='border: 0px solid #808080;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		this._loadingbar.setAttribute('style',hs);
		this._loading.appendChild(this._loadingbar);
		this.divSkin.appendChild(this._loading);
		this._web_page=document.createElement('div');
		this._web_page__text=document.createElement('div');
		this._web_page.className='ggskin ggskin_textdiv';
		this._web_page.ggTextDiv=this._web_page__text;
		this._web_page.ggId="web_page";
		this._web_page.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._web_page.ggVisible=false;
		this._web_page.className='ggskin ggskin_text';
		this._web_page.ggType='text';
		this._web_page.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 88px;';
		hs+='height: 90px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+='visibility: hidden;';
		this._web_page.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 88px;';
		hs+='height: 90px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._web_page__text.setAttribute('style',hs);
		this._web_page.ggTextDiv.innerHTML="";
		this._web_page.appendChild(this._web_page__text);
		this.divSkin.appendChild(this._web_page);
		this._userdata=document.createElement('div');
		this._userdata.ggId="userdata";
		this._userdata.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata.ggVisible=false;
		this._userdata.className='ggskin ggskin_container';
		this._userdata.ggType='container';
		this._userdata.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._userdata.setAttribute('style',hs);
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId="userdatabg";
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		this._userdatabg.className='ggskin ggskin_rectangle';
		this._userdatabg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 239px;';
		hs+='height: 139px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 1px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabg.setAttribute('style',hs);
		this._userdata.appendChild(this._userdatabg);
		this._userdata_title=document.createElement('div');
		this._userdata_title__text=document.createElement('div');
		this._userdata_title.className='ggskin ggskin_textdiv';
		this._userdata_title.ggTextDiv=this._userdata_title__text;
		this._userdata_title.ggId="userdata_title";
		this._userdata_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_title.ggVisible=true;
		this._userdata_title.className='ggskin ggskin_text';
		this._userdata_title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._userdata_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._userdata_title__text.setAttribute('style',hs);
		this._userdata_title.ggUpdateText=function() {
			var hs="$(ut)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._userdata_title.ggUpdateText();
		this._userdata_title.appendChild(this._userdata_title__text);
		this._userdata.appendChild(this._userdata_title);
		this._userdata_description=document.createElement('div');
		this._userdata_description__text=document.createElement('div');
		this._userdata_description.className='ggskin ggskin_textdiv';
		this._userdata_description.ggTextDiv=this._userdata_description__text;
		this._userdata_description.ggId="userdata_description";
		this._userdata_description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_description.ggVisible=true;
		this._userdata_description.className='ggskin ggskin_text';
		this._userdata_description.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  30px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._userdata_description.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._userdata_description__text.setAttribute('style',hs);
		this._userdata_description.ggUpdateText=function() {
			var hs="$(ud)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._userdata_description.ggUpdateText();
		this._userdata_description.appendChild(this._userdata_description__text);
		this._userdata.appendChild(this._userdata_description);
		this._userdata_author=document.createElement('div');
		this._userdata_author__text=document.createElement('div');
		this._userdata_author.className='ggskin ggskin_textdiv';
		this._userdata_author.ggTextDiv=this._userdata_author__text;
		this._userdata_author.ggId="userdata_author";
		this._userdata_author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_author.ggVisible=true;
		this._userdata_author.className='ggskin ggskin_text';
		this._userdata_author.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  50px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._userdata_author.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._userdata_author__text.setAttribute('style',hs);
		this._userdata_author.ggUpdateText=function() {
			var hs="$(ua)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._userdata_author.ggUpdateText();
		this._userdata_author.appendChild(this._userdata_author__text);
		this._userdata.appendChild(this._userdata_author);
		this._userdata_datetime=document.createElement('div');
		this._userdata_datetime__text=document.createElement('div');
		this._userdata_datetime.className='ggskin ggskin_textdiv';
		this._userdata_datetime.ggTextDiv=this._userdata_datetime__text;
		this._userdata_datetime.ggId="userdata_datetime";
		this._userdata_datetime.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_datetime.ggVisible=true;
		this._userdata_datetime.className='ggskin ggskin_text';
		this._userdata_datetime.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  70px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._userdata_datetime.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._userdata_datetime__text.setAttribute('style',hs);
		this._userdata_datetime.ggUpdateText=function() {
			var hs="$(ue)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._userdata_datetime.ggUpdateText();
		this._userdata_datetime.appendChild(this._userdata_datetime__text);
		this._userdata.appendChild(this._userdata_datetime);
		this._userdata_copyright=document.createElement('div');
		this._userdata_copyright__text=document.createElement('div');
		this._userdata_copyright.className='ggskin ggskin_textdiv';
		this._userdata_copyright.ggTextDiv=this._userdata_copyright__text;
		this._userdata_copyright.ggId="userdata_copyright";
		this._userdata_copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_copyright.ggVisible=true;
		this._userdata_copyright.className='ggskin ggskin_text';
		this._userdata_copyright.ggType='text';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._userdata_copyright.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 218px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._userdata_copyright__text.setAttribute('style',hs);
		this._userdata_copyright.ggUpdateText=function() {
			var hs="&#169; $(uc)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._userdata_copyright.ggUpdateText();
		this._userdata_copyright.appendChild(this._userdata_copyright__text);
		this._userdata.appendChild(this._userdata_copyright);
		this._userdata_close=document.createElement('div');
		this._userdata_close.ggId="userdata_close";
		this._userdata_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdata_close.ggVisible=true;
		this._userdata_close.className='ggskin ggskin_svg';
		this._userdata_close.ggType='svg';
		this._userdata_close.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(2 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  4px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._userdata_close.setAttribute('style',hs);
		this._userdata_close__img=document.createElement('img');
		this._userdata_close__img.className='ggskin ggskin_svg';
		this._userdata_close__img.setAttribute('src',basePath + './userdata_close.svg');
		this._userdata_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._userdata_close__img['ondragstart']=function() { return false; };
		this._userdata_close.appendChild(this._userdata_close__img);
		this._userdata_close.onmouseover=function () {
			me._userdata_close__img.src=basePath + './userdata_close__o.svg';
		}
		this._userdata_close.onmouseout=function () {
			me._userdata_close__img.src=basePath + './userdata_close.svg';
		}
		this._userdata.appendChild(this._userdata_close);
		this.divSkin.appendChild(this._userdata);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container';
		this._information.ggType='container';
		this._information.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 250px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._information.setAttribute('style',hs);
		this._informationbg=document.createElement('div');
		this._informationbg.ggId="informationbg";
		this._informationbg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._informationbg.ggVisible=true;
		this._informationbg.className='ggskin ggskin_rectangle';
		this._informationbg.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 298px;';
		hs+='height: 248px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.509804);';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._informationbg.setAttribute('style',hs);
		this._information.appendChild(this._informationbg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text';
		this._info_text_body.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  45px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_text_body.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body.ggUpdateText=function() {
			var hs="$(hd)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._info_text_body.ggUpdateText();
		this._info_text_body.appendChild(this._info_text_body__text);
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text';
		this._info_title.ggType='text';
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  15px;';
		hs+='width: 243px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_title.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 243px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title.ggUpdateText=function() {
			var hs="$(hs)";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
			}
		}
		this._info_title.ggUpdateText();
		this._info_title.appendChild(this._info_title__text);
		this._information.appendChild(this._info_title);
		this._ht_info_close=document.createElement('div');
		this._ht_info_close.ggId="ht_info_close";
		this._ht_info_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_info_close.ggVisible=true;
		this._ht_info_close.className='ggskin ggskin_svg';
		this._ht_info_close.ggType='svg';
		this._ht_info_close.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(1 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 1px;';
		hs+='top:  4px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ht_info_close.setAttribute('style',hs);
		this._ht_info_close__img=document.createElement('img');
		this._ht_info_close__img.className='ggskin ggskin_svg';
		this._ht_info_close__img.setAttribute('src',basePath + './ht_info_close.svg');
		this._ht_info_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._ht_info_close__img['ondragstart']=function() { return false; };
		this._ht_info_close.appendChild(this._ht_info_close__img);
		this._ht_info_close.onmouseover=function () {
			me._ht_info_close__img.src=basePath + './ht_info_close__o.svg';
		}
		this._ht_info_close.onmouseout=function () {
			me._ht_info_close__img.src=basePath + './ht_info_close.svg';
		}
		this._information.appendChild(this._ht_info_close);
		this.divSkin.appendChild(this._information);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container';
		this._image_popup.ggType='container';
		this._image_popup.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._image_popup.setAttribute('style',hs);
		this._loading_image=document.createElement('div');
		this._loading_image.ggId="loading_image";
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg';
		this._loading_image.ggType='svg';
		this._loading_image.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + './loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=false;
		this._popup_image.className='ggskin ggskin_external';
		this._popup_image.ggType='external';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._popup_image__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._popup_image__img);
		this._popup_image.appendChild(this._popup_image__img);
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._video_popup_file=document.createElement('div');
		this._video_popup_file.ggId="video_popup_file";
		this._video_popup_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_file.ggVisible=false;
		this._video_popup_file.className='ggskin ggskin_container';
		this._video_popup_file.ggType='container';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  10px;';
		hs+='width: 80px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_file.setAttribute('style',hs);
		this._loading_video_file=document.createElement('div');
		this._loading_video_file.ggId="loading_video_file";
		this._loading_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_file.ggVisible=true;
		this._loading_video_file.className='ggskin ggskin_svg';
		this._loading_video_file.ggType='svg';
		this._loading_video_file.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_video_file.setAttribute('style',hs);
		this._loading_video_file__img=document.createElement('img');
		this._loading_video_file__img.className='ggskin ggskin_svg';
		this._loading_video_file__img.setAttribute('src',basePath + './loading_video_file.svg');
		this._loading_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._loading_video_file__img['ondragstart']=function() { return false; };
		this._loading_video_file.appendChild(this._loading_video_file__img);
		this._video_popup_file.appendChild(this._loading_video_file);
		this.divSkin.appendChild(this._video_popup_file);
		this._video_popup_controls_file=document.createElement('div');
		this._video_popup_controls_file.ggId="video_popup_controls_file";
		this._video_popup_controls_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_file.ggVisible=false;
		this._video_popup_controls_file.className='ggskin ggskin_container';
		this._video_popup_controls_file.ggType='container';
		this._video_popup_controls_file.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(10 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 284px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_controls_file.setAttribute('style',hs);
		this._ht_video_play_file=document.createElement('div');
		this._ht_video_play_file.ggId="ht_video_play_file";
		this._ht_video_play_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_file.ggVisible=false;
		this._ht_video_play_file.className='ggskin ggskin_svg';
		this._ht_video_play_file.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 259px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._ht_video_play_file.setAttribute('style',hs);
		this._ht_video_play_file__img=document.createElement('img');
		this._ht_video_play_file__img.className='ggskin ggskin_svg';
		this._ht_video_play_file__img.setAttribute('src',basePath + './ht_video_play_file.svg');
		this._ht_video_play_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._ht_video_play_file__img['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__img);
		this._ht_video_play_file.onclick=function () {
			me.player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='inherit';
			me._ht_video_pause_file.ggVisible=true;
		}
		this._ht_video_play_file.onmouseover=function () {
			me._ht_video_play_file__img.src=basePath + './ht_video_play_file__o.svg';
		}
		this._ht_video_play_file.onmouseout=function () {
			me._ht_video_play_file__img.src=basePath + './ht_video_play_file.svg';
		}
		this._video_popup_controls_file.appendChild(this._ht_video_play_file);
		this._ht_video_pause_file=document.createElement('div');
		this._ht_video_pause_file.ggId="ht_video_pause_file";
		this._ht_video_pause_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_file.ggVisible=true;
		this._ht_video_pause_file.className='ggskin ggskin_svg';
		this._ht_video_pause_file.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 259px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ht_video_pause_file.setAttribute('style',hs);
		this._ht_video_pause_file__img=document.createElement('img');
		this._ht_video_pause_file__img.className='ggskin ggskin_svg';
		this._ht_video_pause_file__img.setAttribute('src',basePath + './ht_video_pause_file.svg');
		this._ht_video_pause_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._ht_video_pause_file__img['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__img);
		this._ht_video_pause_file.onclick=function () {
			me.player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='inherit';
			me._ht_video_play_file.ggVisible=true;
		}
		this._ht_video_pause_file.onmouseover=function () {
			me._ht_video_pause_file__img.src=basePath + './ht_video_pause_file__o.svg';
		}
		this._ht_video_pause_file.onmouseout=function () {
			me._ht_video_pause_file__img.src=basePath + './ht_video_pause_file.svg';
		}
		this._video_popup_controls_file.appendChild(this._ht_video_pause_file);
		this.divSkin.appendChild(this._video_popup_controls_file);
		this._video_popup_url=document.createElement('div');
		this._video_popup_url.ggId="video_popup_url";
		this._video_popup_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_url.ggVisible=false;
		this._video_popup_url.className='ggskin ggskin_container';
		this._video_popup_url.ggType='container';
		this._video_popup_url.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_url.setAttribute('style',hs);
		this._loading_video_url=document.createElement('div');
		this._loading_video_url.ggId="loading_video_url";
		this._loading_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_url.ggVisible=true;
		this._loading_video_url.className='ggskin ggskin_svg';
		this._loading_video_url.ggType='svg';
		this._loading_video_url.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_video_url.setAttribute('style',hs);
		this._loading_video_url__img=document.createElement('img');
		this._loading_video_url__img.className='ggskin ggskin_svg';
		this._loading_video_url__img.setAttribute('src',basePath + './loading_video_url.svg');
		this._loading_video_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._loading_video_url__img['ondragstart']=function() { return false; };
		this._loading_video_url.appendChild(this._loading_video_url__img);
		this._video_popup_url.appendChild(this._loading_video_url);
		this.divSkin.appendChild(this._video_popup_url);
		this._video_popup_controls_url=document.createElement('div');
		this._video_popup_controls_url.ggId="video_popup_controls_url";
		this._video_popup_controls_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_url.ggVisible=false;
		this._video_popup_controls_url.className='ggskin ggskin_container';
		this._video_popup_controls_url.ggType='container';
		this._video_popup_controls_url.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(10 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  10px;';
		hs+='width: 284px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_controls_url.setAttribute('style',hs);
		this._ht_video_play_url=document.createElement('div');
		this._ht_video_play_url.ggId="ht_video_play_url";
		this._ht_video_play_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_url.ggVisible=false;
		this._ht_video_play_url.className='ggskin ggskin_svg';
		this._ht_video_play_url.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 259px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._ht_video_play_url.setAttribute('style',hs);
		this._ht_video_play_url__img=document.createElement('img');
		this._ht_video_play_url__img.className='ggskin ggskin_svg';
		this._ht_video_play_url__img.setAttribute('src',basePath + './ht_video_play_url.svg');
		this._ht_video_play_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._ht_video_play_url__img['ondragstart']=function() { return false; };
		this._ht_video_play_url.appendChild(this._ht_video_play_url__img);
		this._ht_video_play_url.onclick=function () {
			me.player.playSound("popup_video_url","1");
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='inherit';
			me._ht_video_pause_url.ggVisible=true;
		}
		this._ht_video_play_url.onmouseover=function () {
			me._ht_video_play_url__img.src=basePath + './ht_video_play_url__o.svg';
		}
		this._ht_video_play_url.onmouseout=function () {
			me._ht_video_play_url__img.src=basePath + './ht_video_play_url.svg';
		}
		this._video_popup_controls_url.appendChild(this._ht_video_play_url);
		this._ht_video_pause_url=document.createElement('div');
		this._ht_video_pause_url.ggId="ht_video_pause_url";
		this._ht_video_pause_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_url.ggVisible=true;
		this._ht_video_pause_url.className='ggskin ggskin_svg';
		this._ht_video_pause_url.ggType='svg';
		hs ='position:absolute;';
		hs+='left: 259px;';
		hs+='top:  0px;';
		hs+='width: 25px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ht_video_pause_url.setAttribute('style',hs);
		this._ht_video_pause_url__img=document.createElement('img');
		this._ht_video_pause_url__img.className='ggskin ggskin_svg';
		this._ht_video_pause_url__img.setAttribute('src',basePath + './ht_video_pause_url.svg');
		this._ht_video_pause_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 25px;height: 25px;-webkit-user-drag:none;');
		this._ht_video_pause_url__img['ondragstart']=function() { return false; };
		this._ht_video_pause_url.appendChild(this._ht_video_pause_url__img);
		this._ht_video_pause_url.onclick=function () {
			me.player.pauseSound("popup_video_url");
			me._ht_video_pause_url.style[domTransition]='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style[domTransition]='none';
			me._ht_video_play_url.style.visibility='inherit';
			me._ht_video_play_url.ggVisible=true;
		}
		this._ht_video_pause_url.onmouseover=function () {
			me._ht_video_pause_url__img.src=basePath + './ht_video_pause_url__o.svg';
		}
		this._ht_video_pause_url.onmouseout=function () {
			me._ht_video_pause_url__img.src=basePath + './ht_video_pause_url.svg';
		}
		this._video_popup_controls_url.appendChild(this._ht_video_pause_url);
		this.divSkin.appendChild(this._video_popup_controls_url);
		this._video_popup_vimeo=document.createElement('div');
		this._video_popup_vimeo.ggId="video_popup_vimeo";
		this._video_popup_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_vimeo.ggVisible=false;
		this._video_popup_vimeo.className='ggskin ggskin_container';
		this._video_popup_vimeo.ggType='container';
		this._video_popup_vimeo.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_vimeo.setAttribute('style',hs);
		this._loading_video_vimeo=document.createElement('div');
		this._loading_video_vimeo.ggId="loading_video_vimeo";
		this._loading_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_vimeo.ggVisible=true;
		this._loading_video_vimeo.className='ggskin ggskin_svg';
		this._loading_video_vimeo.ggType='svg';
		this._loading_video_vimeo.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_video_vimeo.setAttribute('style',hs);
		this._loading_video_vimeo__img=document.createElement('img');
		this._loading_video_vimeo__img.className='ggskin ggskin_svg';
		this._loading_video_vimeo__img.setAttribute('src',basePath + './loading_video_vimeo.svg');
		this._loading_video_vimeo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._loading_video_vimeo__img['ondragstart']=function() { return false; };
		this._loading_video_vimeo.appendChild(this._loading_video_vimeo__img);
		this._video_popup_vimeo.appendChild(this._loading_video_vimeo);
		this.divSkin.appendChild(this._video_popup_vimeo);
		this._video_popup_youtube=document.createElement('div');
		this._video_popup_youtube.ggId="video_popup_youtube";
		this._video_popup_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_youtube.ggVisible=false;
		this._video_popup_youtube.className='ggskin ggskin_container';
		this._video_popup_youtube.ggType='container';
		this._video_popup_youtube.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._video_popup_youtube.setAttribute('style',hs);
		this._loading_video_youtube=document.createElement('div');
		this._loading_video_youtube.ggId="loading_video_youtube";
		this._loading_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_youtube.ggVisible=true;
		this._loading_video_youtube.className='ggskin ggskin_svg';
		this._loading_video_youtube.ggType='svg';
		this._loading_video_youtube.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loading_video_youtube.setAttribute('style',hs);
		this._loading_video_youtube__img=document.createElement('img');
		this._loading_video_youtube__img.className='ggskin ggskin_svg';
		this._loading_video_youtube__img.setAttribute('src',basePath + './loading_video_youtube.svg');
		this._loading_video_youtube__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;-webkit-user-drag:none;');
		this._loading_video_youtube__img['ondragstart']=function() { return false; };
		this._loading_video_youtube.appendChild(this._loading_video_youtube__img);
		this._video_popup_youtube.appendChild(this._loading_video_youtube);
		this.divSkin.appendChild(this._video_popup_youtube);
		this._close=document.createElement('div');
		this._close.ggId="close";
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=false;
		this._close.className='ggskin ggskin_svg';
		this._close.ggType='svg';
		this._close.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(5 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  5px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._close.setAttribute('style',hs);
		this._close__img=document.createElement('img');
		this._close__img.className='ggskin ggskin_svg';
		this._close__img.setAttribute('src',basePath + './close.svg');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
		this._close__img['ondragstart']=function() { return false; };
		this._close.appendChild(this._close__img);
		this._close.onclick=function () {
			me._web_page.ggText="";
			me._web_page.ggTextDiv.innerHTML=me._web_page.ggText;
			if (me._web_page.ggUpdateText) {
				me._web_page.ggUpdateText=function() {
					var hs="";
					if (hs!=me._web_page.ggText) {
						me._web_page.ggText=hs;
						me._web_page.ggTextDiv.innerHTML=hs;
					}
				}
			}
		}
		this._close.onmouseover=function () {
			me._close__img.src=basePath + './close__o.svg';
		}
		this._close.onmouseout=function () {
			me._close__img.src=basePath + './close.svg';
		}
		this.divSkin.appendChild(this._close);
		this._do_not_modify_skin=document.createElement('div');
		this._do_not_modify_skin.ggId="do_not_modify_skin";
		this._do_not_modify_skin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_not_modify_skin.ggVisible=false;
		this._do_not_modify_skin.className='ggskin ggskin_rectangle';
		this._do_not_modify_skin.ggType='rectangle';
		this._do_not_modify_skin.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='background: #404549;';
		hs+='border: 0px solid #000000;';
		this._do_not_modify_skin.setAttribute('style',hs);
		this._do_not_modify_skin_text=document.createElement('div');
		this._do_not_modify_skin_text__text=document.createElement('div');
		this._do_not_modify_skin_text.className='ggskin ggskin_textdiv';
		this._do_not_modify_skin_text.ggTextDiv=this._do_not_modify_skin_text__text;
		this._do_not_modify_skin_text.ggId="do_not_modify_skin_text";
		this._do_not_modify_skin_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_not_modify_skin_text.ggVisible=false;
		this._do_not_modify_skin_text.className='ggskin ggskin_text';
		this._do_not_modify_skin_text.ggType='text';
		this._do_not_modify_skin_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 203px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._do_not_modify_skin_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 203px;';
		hs+='height: 60px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._do_not_modify_skin_text__text.setAttribute('style',hs);
		this._do_not_modify_skin_text.ggTextDiv.innerHTML=" Please use the skin <br\/> configuration button<br\/> to modify the skin.";
		this._do_not_modify_skin_text.appendChild(this._do_not_modify_skin_text__text);
		this._do_not_modify_skin.appendChild(this._do_not_modify_skin_text);
		this._config_button=document.createElement('div');
		this._config_button.ggId="config_button";
		this._config_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._config_button.ggVisible=false;
		this._config_button.className='ggskin ggskin_image';
		this._config_button.ggType='image';
		this._config_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(80 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 29px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._config_button.setAttribute('style',hs);
		this._config_button__img=document.createElement('img');
		this._config_button__img.className='ggskin ggskin_image';
		this._config_button__img.setAttribute('src',basePath + './config_button.jpg');
		this._config_button__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._config_button__img.className='ggskin ggskin_image';
		this._config_button__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._config_button__img);
		this._config_button.appendChild(this._config_button__img);
		this._do_not_modify_skin.appendChild(this._config_button);
		this.divSkin.appendChild(this._do_not_modify_skin);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-0.5,true);
		}
		if (me.elementMouseDown['key_up']) {
			me.player.changeTiltLog(0.5,true);
		}
		if (me.elementMouseDown['key_down']) {
			me.player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['key_left']) {
			me.player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['key_right']) {
			me.player.changePanLog(-0.5,true);
		}
		this._loadingtext.ggUpdateText();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		this._userdata_title.ggUpdateText();
		this._userdata_description.ggUpdateText();
		this._userdata_author.ggUpdateText();
		this._userdata_datetime.ggUpdateText();
		this._userdata_copyright.ggUpdateText();
		this._info_text_body.ggUpdateText();
		this._info_title.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_video_youtube') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_youtube";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_video_youtube_image=document.createElement('div');
			this._ht_video_youtube_image.ggId="ht_video_youtube_image";
			this._ht_video_youtube_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_youtube_image.ggVisible=true;
			this._ht_video_youtube_image.className='ggskin ggskin_svg';
			this._ht_video_youtube_image.ggType='svg';
			this._ht_video_youtube_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_youtube_image.setAttribute('style',hs);
			this._ht_video_youtube_image__img=document.createElement('img');
			this._ht_video_youtube_image__img.className='ggskin ggskin_svg';
			this._ht_video_youtube_image__img.setAttribute('src',basePath + './ht_video_youtube_image.svg');
			this._ht_video_youtube_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_video_youtube_image__img['ondragstart']=function() { return false; };
			this._ht_video_youtube_image.appendChild(this._ht_video_youtube_image__img);
			this._ht_video_youtube_image.onmouseover=function () {
				me._ht_video_youtube_image__img.src=basePath + './ht_video_youtube_image__o.svg';
			}
			this._ht_video_youtube_image.onmouseout=function () {
				me._ht_video_youtube_image__img.src=basePath + './ht_video_youtube_image.svg';
			}
			this.__div.appendChild(this._ht_video_youtube_image);
			this._tt_ht_video_youtube=document.createElement('div');
			this._tt_ht_video_youtube__text=document.createElement('div');
			this._tt_ht_video_youtube.className='ggskin ggskin_textdiv';
			this._tt_ht_video_youtube.ggTextDiv=this._tt_ht_video_youtube__text;
			this._tt_ht_video_youtube.ggId="tt_ht_video_youtube";
			this._tt_ht_video_youtube.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_youtube.ggVisible=false;
			this._tt_ht_video_youtube.className='ggskin ggskin_text';
			this._tt_ht_video_youtube.ggType='text';
			this._tt_ht_video_youtube.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_video_youtube.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_youtube__text.setAttribute('style',hs);
			this._tt_ht_video_youtube.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_video_youtube.ggUpdateText();
			this._tt_ht_video_youtube.appendChild(this._tt_ht_video_youtube__text);
			this.__div.appendChild(this._tt_ht_video_youtube);
			this._ht_video_youtube_customimage=document.createElement('div');
			this._ht_video_youtube_customimage.ggId="ht_video_youtube_CustomImage";
			this._ht_video_youtube_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_youtube_customimage.ggVisible=true;
			this._ht_video_youtube_customimage.className='ggskin ggskin_external';
			this._ht_video_youtube_customimage.ggType='external';
			this._ht_video_youtube_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_youtube_customimage.setAttribute('style',hs);
			this._ht_video_youtube_customimage__img=document.createElement('img');
			this._ht_video_youtube_customimage__img.className='ggskin ggskin_external';
			this._ht_video_youtube_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_video_youtube_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_video_youtube_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_video_youtube_customimage__img);
			this._ht_video_youtube_customimage.appendChild(this._ht_video_youtube_customimage__img);
			this.__div.appendChild(this._ht_video_youtube_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_video_youtube.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_vimeo') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_vimeo";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_video_vimeo_image=document.createElement('div');
			this._ht_video_vimeo_image.ggId="ht_video_vimeo_image";
			this._ht_video_vimeo_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_vimeo_image.ggVisible=true;
			this._ht_video_vimeo_image.className='ggskin ggskin_svg';
			this._ht_video_vimeo_image.ggType='svg';
			this._ht_video_vimeo_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_vimeo_image.setAttribute('style',hs);
			this._ht_video_vimeo_image__img=document.createElement('img');
			this._ht_video_vimeo_image__img.className='ggskin ggskin_svg';
			this._ht_video_vimeo_image__img.setAttribute('src',basePath + './ht_video_vimeo_image.svg');
			this._ht_video_vimeo_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_video_vimeo_image__img['ondragstart']=function() { return false; };
			this._ht_video_vimeo_image.appendChild(this._ht_video_vimeo_image__img);
			this._ht_video_vimeo_image.onmouseover=function () {
				me._ht_video_vimeo_image__img.src=basePath + './ht_video_vimeo_image__o.svg';
			}
			this._ht_video_vimeo_image.onmouseout=function () {
				me._ht_video_vimeo_image__img.src=basePath + './ht_video_vimeo_image.svg';
			}
			this.__div.appendChild(this._ht_video_vimeo_image);
			this._tt_ht_video_vimeo=document.createElement('div');
			this._tt_ht_video_vimeo__text=document.createElement('div');
			this._tt_ht_video_vimeo.className='ggskin ggskin_textdiv';
			this._tt_ht_video_vimeo.ggTextDiv=this._tt_ht_video_vimeo__text;
			this._tt_ht_video_vimeo.ggId="tt_ht_video_vimeo";
			this._tt_ht_video_vimeo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_vimeo.ggVisible=false;
			this._tt_ht_video_vimeo.className='ggskin ggskin_text';
			this._tt_ht_video_vimeo.ggType='text';
			this._tt_ht_video_vimeo.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_video_vimeo.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_vimeo__text.setAttribute('style',hs);
			this._tt_ht_video_vimeo.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_video_vimeo.ggUpdateText();
			this._tt_ht_video_vimeo.appendChild(this._tt_ht_video_vimeo__text);
			this.__div.appendChild(this._tt_ht_video_vimeo);
			this._ht_video_vimeo_customimage=document.createElement('div');
			this._ht_video_vimeo_customimage.ggId="ht_video_vimeo_CustomImage";
			this._ht_video_vimeo_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_vimeo_customimage.ggVisible=true;
			this._ht_video_vimeo_customimage.className='ggskin ggskin_external';
			this._ht_video_vimeo_customimage.ggType='external';
			this._ht_video_vimeo_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_vimeo_customimage.setAttribute('style',hs);
			this._ht_video_vimeo_customimage__img=document.createElement('img');
			this._ht_video_vimeo_customimage__img.className='ggskin ggskin_external';
			this._ht_video_vimeo_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_video_vimeo_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_video_vimeo_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_video_vimeo_customimage__img);
			this._ht_video_vimeo_customimage.appendChild(this._ht_video_vimeo_customimage__img);
			this.__div.appendChild(this._ht_video_vimeo_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_video_vimeo.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_url') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.playSound("popup_video_url","1");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_video_url_image=document.createElement('div');
			this._ht_video_url_image.ggId="ht_video_url_image";
			this._ht_video_url_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_url_image.ggVisible=true;
			this._ht_video_url_image.className='ggskin ggskin_svg';
			this._ht_video_url_image.ggType='svg';
			this._ht_video_url_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_url_image.setAttribute('style',hs);
			this._ht_video_url_image__img=document.createElement('img');
			this._ht_video_url_image__img.className='ggskin ggskin_svg';
			this._ht_video_url_image__img.setAttribute('src',basePath + './ht_video_url_image.svg');
			this._ht_video_url_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_video_url_image__img['ondragstart']=function() { return false; };
			this._ht_video_url_image.appendChild(this._ht_video_url_image__img);
			this._ht_video_url_image.onmouseover=function () {
				me._ht_video_url_image__img.src=basePath + './ht_video_url_image__o.svg';
			}
			this._ht_video_url_image.onmouseout=function () {
				me._ht_video_url_image__img.src=basePath + './ht_video_url_image.svg';
			}
			this.__div.appendChild(this._ht_video_url_image);
			this._tt_ht_video_url=document.createElement('div');
			this._tt_ht_video_url__text=document.createElement('div');
			this._tt_ht_video_url.className='ggskin ggskin_textdiv';
			this._tt_ht_video_url.ggTextDiv=this._tt_ht_video_url__text;
			this._tt_ht_video_url.ggId="tt_ht_video_url";
			this._tt_ht_video_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_url.ggVisible=false;
			this._tt_ht_video_url.className='ggskin ggskin_text';
			this._tt_ht_video_url.ggType='text';
			this._tt_ht_video_url.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_video_url.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_url__text.setAttribute('style',hs);
			this._tt_ht_video_url.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_video_url.ggUpdateText();
			this._tt_ht_video_url.appendChild(this._tt_ht_video_url__text);
			this.__div.appendChild(this._tt_ht_video_url);
			this._ht_video_url_customimage=document.createElement('div');
			this._ht_video_url_customimage.ggId="ht_video_url_CustomImage";
			this._ht_video_url_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_url_customimage.ggVisible=true;
			this._ht_video_url_customimage.className='ggskin ggskin_external';
			this._ht_video_url_customimage.ggType='external';
			this._ht_video_url_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_url_customimage.setAttribute('style',hs);
			this._ht_video_url_customimage__img=document.createElement('img');
			this._ht_video_url_customimage__img.className='ggskin ggskin_external';
			this._ht_video_url_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_video_url_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_video_url_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_video_url_customimage__img);
			this._ht_video_url_customimage.appendChild(this._ht_video_url_customimage__img);
			this.__div.appendChild(this._ht_video_url_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_video_url.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_video_file') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_file";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.playSound("popup_video_file","1");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_video_file_image=document.createElement('div');
			this._ht_video_file_image.ggId="ht_video_file_image";
			this._ht_video_file_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_file_image.ggVisible=true;
			this._ht_video_file_image.className='ggskin ggskin_svg';
			this._ht_video_file_image.ggType='svg';
			this._ht_video_file_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_file_image.setAttribute('style',hs);
			this._ht_video_file_image__img=document.createElement('img');
			this._ht_video_file_image__img.className='ggskin ggskin_svg';
			this._ht_video_file_image__img.setAttribute('src',basePath + './ht_video_file_image.svg');
			this._ht_video_file_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_video_file_image__img['ondragstart']=function() { return false; };
			this._ht_video_file_image.appendChild(this._ht_video_file_image__img);
			this._ht_video_file_image.onmouseover=function () {
				me._ht_video_file_image__img.src=basePath + './ht_video_file_image__o.svg';
			}
			this._ht_video_file_image.onmouseout=function () {
				me._ht_video_file_image__img.src=basePath + './ht_video_file_image.svg';
			}
			this.__div.appendChild(this._ht_video_file_image);
			this._tt_ht_video_file=document.createElement('div');
			this._tt_ht_video_file__text=document.createElement('div');
			this._tt_ht_video_file.className='ggskin ggskin_textdiv';
			this._tt_ht_video_file.ggTextDiv=this._tt_ht_video_file__text;
			this._tt_ht_video_file.ggId="tt_ht_video_file";
			this._tt_ht_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_file.ggVisible=false;
			this._tt_ht_video_file.className='ggskin ggskin_text';
			this._tt_ht_video_file.ggType='text';
			this._tt_ht_video_file.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_video_file.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_file__text.setAttribute('style',hs);
			this._tt_ht_video_file.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_video_file.ggUpdateText();
			this._tt_ht_video_file.appendChild(this._tt_ht_video_file__text);
			this.__div.appendChild(this._tt_ht_video_file);
			this._ht_video_file_customimage=document.createElement('div');
			this._ht_video_file_customimage.ggId="ht_video_file_CustomImage";
			this._ht_video_file_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_video_file_customimage.ggVisible=true;
			this._ht_video_file_customimage.className='ggskin ggskin_external';
			this._ht_video_file_customimage.ggType='external';
			this._ht_video_file_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_video_file_customimage.setAttribute('style',hs);
			this._ht_video_file_customimage__img=document.createElement('img');
			this._ht_video_file_customimage__img.className='ggskin ggskin_external';
			this._ht_video_file_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_video_file_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_video_file_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_video_file_customimage__img);
			this._ht_video_file_customimage.appendChild(this._ht_video_file_customimage__img);
			this.__div.appendChild(this._ht_video_file_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_video_file.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._popup_image.ggText="$(r)$(hu)";
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				if (me.skin._popup_image.ggUpdateText) {
					me.skin._popup_image.ggUpdateText=function() {
						var hs="$(r)$(hu)";
						if (hs!=me.skin._popup_image.ggText) {
							me.skin._popup_image.ggText=hs;
							me.skin._popup_image__img.src=hs;
						}
					}
				}
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_image_image=document.createElement('div');
			this._ht_image_image.ggId="ht_image_image";
			this._ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_image.ggVisible=true;
			this._ht_image_image.className='ggskin ggskin_svg';
			this._ht_image_image.ggType='svg';
			this._ht_image_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_image_image.setAttribute('style',hs);
			this._ht_image_image__img=document.createElement('img');
			this._ht_image_image__img.className='ggskin ggskin_svg';
			this._ht_image_image__img.setAttribute('src',basePath + './ht_image_image.svg');
			this._ht_image_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_image_image__img['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__img);
			this._ht_image_image.onmouseover=function () {
				me._ht_image_image__img.src=basePath + './ht_image_image__o.svg';
			}
			this._ht_image_image.onmouseout=function () {
				me._ht_image_image__img.src=basePath + './ht_image_image.svg';
			}
			this.__div.appendChild(this._ht_image_image);
			this._tt_ht_image=document.createElement('div');
			this._tt_ht_image__text=document.createElement('div');
			this._tt_ht_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image.ggTextDiv=this._tt_ht_image__text;
			this._tt_ht_image.ggId="tt_ht_image";
			this._tt_ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image.ggVisible=false;
			this._tt_ht_image.className='ggskin ggskin_text';
			this._tt_ht_image.ggType='text';
			this._tt_ht_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_image.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_image__text.setAttribute('style',hs);
			this._tt_ht_image.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_image.ggUpdateText();
			this._tt_ht_image.appendChild(this._tt_ht_image__text);
			this.__div.appendChild(this._tt_ht_image);
			this._ht_image_customimage=document.createElement('div');
			this._ht_image_customimage.ggId="ht_image_CustomImage";
			this._ht_image_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_image_customimage.ggVisible=true;
			this._ht_image_customimage.className='ggskin ggskin_external';
			this._ht_image_customimage.ggType='external';
			this._ht_image_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_image_customimage.setAttribute('style',hs);
			this._ht_image_customimage__img=document.createElement('img');
			this._ht_image_customimage__img.className='ggskin ggskin_external';
			this._ht_image_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_image_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_image_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_image_customimage__img);
			this._ht_image_customimage.appendChild(this._ht_image_customimage__img);
			this.__div.appendChild(this._ht_image_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_image.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._info_title.ggText="$(hs)";
				me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="$(hs)";
						if (hs!=me.skin._info_title.ggText) {
							me.skin._info_title.ggText=hs;
							me.skin._info_title.ggTextDiv.innerHTML=hs;
						}
					}
				}
				me.skin._info_text_body.ggText="$(hd)";
				me.skin._info_text_body.ggTextDiv.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs="$(hd)";
						if (hs!=me.skin._info_text_body.ggText) {
							me.skin._info_text_body.ggText=hs;
							me.skin._info_text_body.ggTextDiv.innerHTML=hs;
						}
					}
				}
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg';
			this._ht_info_image.ggType='svg';
			this._ht_info_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + './ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image.onmouseover=function () {
				me._ht_info_image__img.src=basePath + './ht_info_image__o.svg';
			}
			this._ht_info_image.onmouseout=function () {
				me._ht_info_image__img.src=basePath + './ht_info_image.svg';
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text';
			this._tt_information.ggType='text';
			this._tt_information.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_information.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_information.ggUpdateText();
			this._tt_information.appendChild(this._tt_information__text);
			this.__div.appendChild(this._tt_information);
			this._ht_info_customimage=document.createElement('div');
			this._ht_info_customimage.ggId="ht_info_CustomImage";
			this._ht_info_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_customimage.ggVisible=true;
			this._ht_info_customimage.className='ggskin ggskin_external';
			this._ht_info_customimage.ggType='external';
			this._ht_info_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_info_customimage.setAttribute('style',hs);
			this._ht_info_customimage__img=document.createElement('img');
			this._ht_info_customimage__img.className='ggskin ggskin_external';
			this._ht_info_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_info_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_info_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_info_customimage__img);
			this._ht_info_customimage.appendChild(this._ht_info_customimage__img);
			this.__div.appendChild(this._ht_info_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_information.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 100px;';
			hs+='top:  140px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId="hsimage";
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			this._hsimage.className='ggskin ggskin_svg';
			this._hsimage.ggType='svg';
			this._hsimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.className='ggskin ggskin_svg';
			this._hsimage__img.setAttribute('src',basePath + './hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._hsimage__img['ondragstart']=function() { return false; };
			this._hsimage.appendChild(this._hsimage__img);
			this.__div.appendChild(this._hsimage);
			this._hotspot_preview=document.createElement('div');
			this._hotspot_preview.ggId="hotspot_preview";
			this._hotspot_preview.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_preview.ggVisible=false;
			this._hotspot_preview.className='ggskin ggskin_container';
			this._hotspot_preview.ggType='container';
			this._hotspot_preview.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  -130px;';
			hs+='width: 153px;';
			hs+='height: 103px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._hotspot_preview.setAttribute('style',hs);
			this._preview_picture_frame_=document.createElement('div');
			this._preview_picture_frame_.ggId="preview_picture_frame ";
			this._preview_picture_frame_.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._preview_picture_frame_.ggVisible=true;
			this._preview_picture_frame_.className='ggskin ggskin_rectangle';
			this._preview_picture_frame_.ggType='rectangle';
			this._preview_picture_frame_.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(-1 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  -1px;';
			hs+='width: 148px;';
			hs+='height: 98px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.784314);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			this._preview_picture_frame_.setAttribute('style',hs);
			this._hotspot_preview.appendChild(this._preview_picture_frame_);
			this._ht_tooltip=document.createElement('div');
			this._ht_tooltip__text=document.createElement('div');
			this._ht_tooltip.className='ggskin ggskin_textdiv';
			this._ht_tooltip.ggTextDiv=this._ht_tooltip__text;
			this._ht_tooltip.ggId="ht_tooltip";
			this._ht_tooltip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_tooltip.ggVisible=true;
			this._ht_tooltip.className='ggskin ggskin_text';
			this._ht_tooltip.ggType='text';
			this._ht_tooltip.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(6 + h) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  6px;';
			hs+='width: 138px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 100%;';
			hs+='visibility: inherit;';
			this._ht_tooltip.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 138px;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.392157);';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._ht_tooltip__text.setAttribute('style',hs);
			this._ht_tooltip.ggTextDiv.innerHTML=me.hotspot.title;
			this._ht_tooltip.appendChild(this._ht_tooltip__text);
			this._hotspot_preview.appendChild(this._ht_tooltip);
			this._ht_checkmark_tick=document.createElement('div');
			this._ht_checkmark_tick.ggId="ht_checkmark_tick";
			this._ht_checkmark_tick.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_checkmark_tick.ggVisible=false;
			this._ht_checkmark_tick.className='ggskin ggskin_svg';
			this._ht_checkmark_tick.ggType='svg';
			this._ht_checkmark_tick.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(4 + w) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 4px;';
			hs+='top:  4px;';
			hs+='width: 30px;';
			hs+='height: 30px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._ht_checkmark_tick.setAttribute('style',hs);
			this._ht_checkmark_tick__img=document.createElement('img');
			this._ht_checkmark_tick__img.className='ggskin ggskin_svg';
			this._ht_checkmark_tick__img.setAttribute('src',basePath + './ht_checkmark_tick.svg');
			this._ht_checkmark_tick__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 30px;height: 30px;-webkit-user-drag:none;');
			this._ht_checkmark_tick__img['ondragstart']=function() { return false; };
			this._ht_checkmark_tick.appendChild(this._ht_checkmark_tick__img);
			this._hotspot_preview.appendChild(this._ht_checkmark_tick);
			this.__div.appendChild(this._hotspot_preview);
			this._tt_ht_node=document.createElement('div');
			this._tt_ht_node__text=document.createElement('div');
			this._tt_ht_node.className='ggskin ggskin_textdiv';
			this._tt_ht_node.ggTextDiv=this._tt_ht_node__text;
			this._tt_ht_node.ggId="tt_ht_node";
			this._tt_ht_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_node.ggVisible=false;
			this._tt_ht_node.className='ggskin ggskin_text';
			this._tt_ht_node.ggType='text';
			this._tt_ht_node.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_node.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_node__text.setAttribute('style',hs);
			this._tt_ht_node.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_node.ggUpdateText();
			this._tt_ht_node.appendChild(this._tt_ht_node__text);
			this.__div.appendChild(this._tt_ht_node);
			this._ht_node_customimage=document.createElement('div');
			this._ht_node_customimage.ggId="ht_node_CustomImage";
			this._ht_node_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_node_customimage.ggVisible=true;
			this._ht_node_customimage.className='ggskin ggskin_external';
			this._ht_node_customimage.ggType='external';
			this._ht_node_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_node_customimage.setAttribute('style',hs);
			this._ht_node_customimage__img=document.createElement('img');
			this._ht_node_customimage__img.className='ggskin ggskin_external';
			this._ht_node_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_node_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_node_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_node_customimage__img);
			this._ht_node_customimage.appendChild(this._ht_node_customimage__img);
			this.__div.appendChild(this._ht_node_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_node.ggUpdateText();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_url";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 250px;';
			hs+='top:  50px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._web_page.ggText="<iframe src=\"$(hu)\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
				me.skin._web_page.ggTextDiv.innerHTML=me.skin._web_page.ggText;
				if (me.skin._web_page.ggUpdateText) {
					me.skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\"$(hu)\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>";
						if (hs!=me.skin._web_page.ggText) {
							me.skin._web_page.ggText=hs;
							me.skin._web_page.ggTextDiv.innerHTML=hs;
						}
					}
				}
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._ht_url_image=document.createElement('div');
			this._ht_url_image.ggId="ht_url_image";
			this._ht_url_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_url_image.ggVisible=true;
			this._ht_url_image.className='ggskin ggskin_svg';
			this._ht_url_image.ggType='svg';
			this._ht_url_image.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_url_image.setAttribute('style',hs);
			this._ht_url_image__img=document.createElement('img');
			this._ht_url_image__img.className='ggskin ggskin_svg';
			this._ht_url_image__img.setAttribute('src',basePath + './ht_url_image.svg');
			this._ht_url_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;-webkit-user-drag:none;');
			this._ht_url_image__img['ondragstart']=function() { return false; };
			this._ht_url_image.appendChild(this._ht_url_image__img);
			this._ht_url_image.onmouseover=function () {
				me._ht_url_image__img.src=basePath + './ht_url_image__o.svg';
			}
			this._ht_url_image.onmouseout=function () {
				me._ht_url_image__img.src=basePath + './ht_url_image.svg';
			}
			this.__div.appendChild(this._ht_url_image);
			this._tt_ht_url=document.createElement('div');
			this._tt_ht_url__text=document.createElement('div');
			this._tt_ht_url.className='ggskin ggskin_textdiv';
			this._tt_ht_url.ggTextDiv=this._tt_ht_url__text;
			this._tt_ht_url.ggId="tt_ht_url";
			this._tt_ht_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_url.ggVisible=false;
			this._tt_ht_url.className='ggskin ggskin_text';
			this._tt_ht_url.ggType='text';
			this._tt_ht_url.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
				}
				this.ggTextDiv.style.left=Math.floor(0 + (98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  24px;';
			hs+='width: 98px;';
			hs+='height: 20px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._tt_ht_url.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='border: 0px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._tt_ht_url__text.setAttribute('style',hs);
			this._tt_ht_url.ggUpdateText=function() {
				var hs="$(hs)";
				if (hs!=this.ggText) {
					this.ggText=hs;
					this.ggTextDiv.innerHTML=hs;
				}
			this.ggUpdatePosition();
			}
			this._tt_ht_url.ggUpdateText();
			this._tt_ht_url.appendChild(this._tt_ht_url__text);
			this.__div.appendChild(this._tt_ht_url);
			this._ht_url_customimage=document.createElement('div');
			this._ht_url_customimage.ggId="ht_url_CustomImage";
			this._ht_url_customimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_url_customimage.ggVisible=true;
			this._ht_url_customimage.className='ggskin ggskin_external';
			this._ht_url_customimage.ggType='external';
			this._ht_url_customimage.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(0 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 50px;';
			hs+='height: 50px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._ht_url_customimage.setAttribute('style',hs);
			this._ht_url_customimage__img=document.createElement('img');
			this._ht_url_customimage__img.className='ggskin ggskin_external';
			this._ht_url_customimage__img.setAttribute('src',basePath + '_custom');
			this._ht_url_customimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._ht_url_customimage__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_url_customimage__img);
			this._ht_url_customimage.appendChild(this._ht_url_customimage__img);
			this.__div.appendChild(this._ht_url_customimage);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				this._tt_ht_url.ggUpdateText();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};