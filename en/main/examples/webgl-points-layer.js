(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{393:function(e,t,o){"use strict";o.r(t);var i,n,a=o(31),l=o(3),r=o(9),s=o(5),c=o(11),y=o(2),p=o(172),d=new c.a({url:"data/geojson/world-cities.geojson",format:new a.a}),f={icons:{symbol:{symbolType:"image",src:"data/icon.png",size:[18,28],color:"lightyellow",rotateWithView:!1,offset:[0,9]}},triangles:{symbol:{symbolType:"triangle",size:18,color:["interpolate",["linear"],["get","population"],2e4,"#5aca5b",3e5,"#ff6a19"],rotateWithView:!0}},"triangles-latitude":{symbol:{symbolType:"triangle",size:["interpolate",["linear"],["get","population"],4e4,12,2e6,24],color:["interpolate",["linear"],["get","latitude"],-60,"#ff14c3",-20,"#ff621d",20,"#ffed02",60,"#00ff67"],offset:[0,0],opacity:.95}},circles:{symbol:{symbolType:"circle",size:["interpolate",["linear"],["get","population"],4e4,8,2e6,28],color:"#006688",rotateWithView:!1,offset:[0,0],opacity:["interpolate",["linear"],["get","population"],4e4,.6,2e6,.92]}},"circles-zoom":{symbol:{symbolType:"circle",size:["interpolate",["exponential",2.5],["zoom"],2,1,14,32],color:"#240572",offset:[0,0],opacity:.95}},"rotating-bars":{symbol:{symbolType:"square",rotation:["*",["time"],.1],size:["array",4,["interpolate",["linear"],["get","population"],2e4,4,3e5,28]],color:["interpolate",["linear"],["get","population"],2e4,"#ffdc00",3e5,"#ff5b19"],offset:["array",0,["interpolate",["linear"],["get","population"],2e4,2,3e5,14]]}}},m=new l.a({layers:[new s.a({source:new r.b})],target:document.getElementById("map"),view:new y.a({center:[0,0],zoom:2})});function u(e){var t=n;n=new p.a({source:d,style:e,disableHitDetection:!0}),m.addLayer(n),t&&(m.removeLayer(t),t.dispose()),i=e}var g=document.getElementById("style-valid"),w=document.getElementById("style-invalid");function b(e){var t="string"==typeof e;g.style.display=null===e?"initial":"none",w.firstElementChild.innerText=t?e:"",w.style.display=t?"initial":"none"}var v=document.getElementById("style-editor");v.addEventListener("input",(function(){var e=v.value;try{var t=JSON.parse(e);JSON.stringify(t)!==JSON.stringify(i)&&u(t),b(null)}catch(e){b(e.message)}}));var h=document.getElementById("style-select");function z(){var e=h.value,t=f[e];v.value=JSON.stringify(t,null,2);try{u(t),b()}catch(e){b(e.message)}}h.value="circles",z(),h.addEventListener("change",z),function e(){m.render(),window.requestAnimationFrame(e)}()}},[[393,0]]]);
//# sourceMappingURL=webgl-points-layer.js.map