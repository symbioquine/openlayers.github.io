(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{262:function(e,n,a){"use strict";a.r(n);var o,t=a(66),c=a(3),w=a(2),r=a(9),u=a(11),i=a(5),p=a(19),s=new i.a({source:new r.b}),d=new u.a({wrapX:!1}),m=new p.a({source:d}),v=new c.a({layers:[s,m],target:"map",view:new w.a({center:[-11e6,46e5],zoom:4})}),f=document.getElementById("type");function l(){"None"!==f.value&&(o=new t.c({source:d,type:f.value,freehand:!0}),v.addInteraction(o))}f.onchange=function(){v.removeInteraction(o),l()},l()}},[[262,0]]]);
//# sourceMappingURL=draw-freehand.js.map