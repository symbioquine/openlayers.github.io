(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{248:function(e,n,a){"use strict";a.r(n);for(var t=a(20),r=a(3),o=a(25),w=a(2),s=a(10),c=a(50),i=a(15),u=a(21),f=a(67),l=a(11),d=a(236),p=a(9),v=a(19),m=a(5),g=document.getElementById("distance"),h=new Array(2e4),y=45e5,b=0;b<2e4;++b){var k=[2*y*Math.random()-y,2*y*Math.random()-y];h[b]=new t.a(new o.a(k))}var I=new l.a({features:h}),x=new d.a({distance:parseInt(g.value,10),source:I}),C={},E=new v.a({source:x,style:function(e){var n=e.get("features").length,a=C[n];return a||(a=new s.c({image:new c.a({radius:10,stroke:new i.a({color:"#fff"}),fill:new u.a({color:"#3399CC"})}),text:new f.a({text:n.toString(),fill:new u.a({color:"#fff"})})}),C[n]=a),a}}),J=new m.a({source:new p.b});new r.a({layers:[J,E],target:"map",view:new w.a({center:[0,0],zoom:2})});g.addEventListener("input",(function(){x.setDistance(parseInt(g.value,10))}))}},[[248,0]]]);
//# sourceMappingURL=cluster.js.map