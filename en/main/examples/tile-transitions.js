(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{377:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(5),i=a(2),o=a(27),s='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',p="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=get_your_own_D6rA4zTHduk6KOKTXzGB",w=new n.a({source:new o.a({url:p,tileSize:512,attributions:s})}),c=new n.a({source:new o.a({url:p,transition:0,tileSize:512,attributions:s}),visible:!1});new r.a({layers:[w,c],target:"map",view:new i.a({center:[0,0],zoom:2,maxZoom:11})});document.getElementById("transition").addEventListener("change",(function(e){var t=e.target.checked;w.setVisible(t),c.setVisible(!t)}))}},[[377,0]]]);
//# sourceMappingURL=tile-transitions.js.map