(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{311:function(e,a,n){"use strict";n.r(a);var t=n(22),r=n(3),s=n(25),o=n(19),i=n(11),w=n(2),l=n(15),u=n(10),c=n(112),d=n(21),g=new l.a({color:"black",width:1}),p={square:new u.c({image:new c.a({fill:new d.a({color:"blue"}),stroke:g,points:4,radius:80,angle:Math.PI/4})}),triangle:new u.c({image:new c.a({fill:new d.a({color:"red"}),stroke:g,points:3,radius:80,rotation:Math.PI/4,angle:0})}),star:new u.c({image:new c.a({fill:new d.a({color:"green"}),stroke:g,points:5,radius:80,radius2:4,angle:0})})};function v(e,a,n){var r=new t.a(new s.a(e));r.setStyle(a);var w=new i.a({features:[r]}),l=new o.a({source:w});return l.setZIndex(n),l}var f=v([40,40],p.star),h=v([0,0],p.square,1),m=v([0,40],p.triangle,0),I=[];I.push(h),I.push(m);var k=new r.a({layers:I,target:"map",view:new w.a({center:[0,0],zoom:18})});function b(e,a){var n=document.getElementById("idx"+e);n.onchange=function(){a.setZIndex(parseInt(this.value,10)||0)},n.value=String(a.getZIndex())}f.setMap(k),b(1,h),b(2,m)}},[[311,0]]]);
//# sourceMappingURL=layer-z-index.js.map