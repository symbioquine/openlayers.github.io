(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{264:function(e,a,t){"use strict";t.r(a);var n,r=t(107),o=t(3),w=t(32),c=t(62),s=t(11),i=t(2),l=t(10),m=t(21),u=t(15),p=t(79),g=t(19),b=t(5),d=t(49),f=[[0,0],[4,2],[6,0],[10,5],[6,3],[4,5],[0,0]],k=function(e){return[e[0]*n,e[1]*n]},v={},y=new g.a({source:new s.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new r.a({extractStyles:!1})}),style:function(e){var a=e.get("name"),t=parseFloat(a.substr(2)),r=parseInt(10+40*(t-5),10);n=r/10;var o=v[r];if(!o){var c=document.createElement("canvas"),s=Object(d.c)(c.getContext("2d"),{size:[r,r],pixelRatio:1});s.setStyle(new l.c({fill:new m.a({color:"rgba(255, 153, 0, 0.4)"}),stroke:new u.a({color:"rgba(255, 204, 0, 0.2)",width:2})})),s.drawGeometry(new w.b([f.map(k)])),o=new l.c({image:new p.a({img:c,imgSize:[r,r],rotation:1.2})}),v[r]=o}return o}}),h=new b.a({source:new c.a({layer:"toner"})});new o.a({layers:[h,y],target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[264,0]]]);
//# sourceMappingURL=earthquake-custom-symbol.js.map