(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{312:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(9),r=n(5),i=n(2),p=n(27),c=n(49),s=new r.a({source:new a.b}),w=new r.a({source:new p.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),l=new o.a({layers:[s,w],target:"map",view:new i.a({center:[0,0],zoom:2})}),u=document.getElementById("swipe");w.on("prerender",(function(e){var t=e.context,n=l.getSize(),o=n[0]*(u.value/100),a=Object(c.a)(e,[o,0]),r=Object(c.a)(e,[n[0],0]),i=Object(c.a)(e,[o,n[1]]),p=Object(c.a)(e,n);t.save(),t.beginPath(),t.moveTo(a[0],a[1]),t.lineTo(i[0],i[1]),t.lineTo(p[0],p[1]),t.lineTo(r[0],r[1]),t.closePath(),t.clip()})),w.on("postrender",(function(e){e.context.restore()})),u.addEventListener("input",(function(){l.render()}),!1)}},[[312,0]]]);
//# sourceMappingURL=layer-swipe.js.map