(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{425:function(t,e,n){"use strict";n.r(e);var i=n(107),o=n(3),a=n(62),r=n(11),s=n(2),u=n(19),l=n(218),d=n(12),f=n(13),_=n(33),v=n(37),c="blur",g="gradient",h="radius",p=["#00f","#0ff","#0f0","#ff0","#f00"];var x=function(t){function e(e){var n=e||{},i=Object(d.a)({},n);delete i.gradient,delete i.radius,delete i.blur,delete i.weight,t.call(this,i),this.gradient_=null,this.addEventListener(Object(v.b)(g),this.handleGradientChanged_),this.setGradient(n.gradient?n.gradient:p),this.setBlur(void 0!==n.blur?n.blur:15),this.setRadius(void 0!==n.radius?n.radius:8);var o=n.weight?n.weight:"weight";this.weightFunction_="string"==typeof o?function(t){return t.get(o)}:o,this.setRenderOrder(null)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getBlur=function(){return this.get(c)},e.prototype.getGradient=function(){return this.get(g)},e.prototype.getRadius=function(){return this.get(h)},e.prototype.handleGradientChanged_=function(){this.gradient_=function(t){for(var e=1,n=256,i=Object(_.a)(e,n),o=i.createLinearGradient(0,0,e,n),a=1/(t.length-1),r=0,s=t.length;r<s;++r)o.addColorStop(r*a,t[r]);return i.fillStyle=o,i.fillRect(0,0,e,n),i.canvas}(this.getGradient())},e.prototype.setBlur=function(t){this.set(c,t)},e.prototype.setGradient=function(t){this.set(g,t)},e.prototype.setRadius=function(t){this.set(h,t)},e.prototype.createRenderer=function(){return new l.a(this,{className:this.getClassName(),attributes:[{name:"weight",callback:function(t){var e=this.weightFunction_(t);return void 0!==e?Object(f.a)(e,0,1):1}.bind(this)}],vertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",hitVertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",hitFragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",uniforms:{u_size:function(){return 2*(this.get(h)+this.get(c))}.bind(this),u_blurSlope:function(){return this.get(h)/Math.max(1,this.get(c))}.bind(this)},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:function(){return this.gradient_}.bind(this)}}]})},e.prototype.renderDeclutter=function(){},e}(u.a),m=n(5),b=document.getElementById("blur"),C=document.getElementById("radius"),w=new x({source:new r.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new i.a({extractStyles:!1})}),blur:parseInt(b.value,10),radius:parseInt(C.value,10),weight:function(t){var e=t.get("name");return parseFloat(e.substr(2))-5}}),y=new m.a({source:new a.a({layer:"toner"})});new o.a({layers:[y,w],target:"map",view:new s.a({center:[0,0],zoom:2})});var S=function(){w.setBlur(parseInt(b.value,10))};b.addEventListener("input",S),b.addEventListener("change",S);var M=function(){w.setRadius(parseInt(C.value,10))};C.addEventListener("input",M),C.addEventListener("change",M)}},[[425,0]]]);
//# sourceMappingURL=heatmap-earthquakes.js.map