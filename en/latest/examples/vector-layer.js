(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{396:function(e,n,t){"use strict";t.r(n);var o,r=t(3),a=t(2),i=t(30),c=t(21),w=t(11),l=t(10),s=t(20),f=t(16),u=t(69),g=new l.c({fill:new s.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.a({color:"#319FD3",width:1}),text:new u.a({font:"12px Calibri,sans-serif",fill:new s.a({color:"#000"}),stroke:new f.a({color:"#fff",width:3})})}),d=new c.a({source:new w.a({url:"data/geojson/countries.geojson",format:new i.a}),style:function(e){return g.getText().setText(e.get("name")),g}}),p=new r.a({layers:[d],target:"map",view:new a.a({center:[0,0],zoom:1})}),m=new l.c({stroke:new f.a({color:"#f00",width:1}),fill:new s.a({color:"rgba(255,0,0,0.1)"}),text:new u.a({font:"12px Calibri,sans-serif",fill:new s.a({color:"#000"}),stroke:new f.a({color:"#f00",width:3})})}),x=new c.a({source:new w.a,map:p,style:function(e){return m.getText().setText(e.get("name")),m}}),v=function(e){var n=p.forEachFeatureAtPixel(e,(function(e){return e})),t=document.getElementById("info");t.innerHTML=n?n.getId()+": "+n.get("name"):"&nbsp;",n!==o&&(o&&x.getSource().removeFeature(o),n&&x.getSource().addFeature(n),o=n)};p.on("pointermove",(function(e){if(!e.dragging){var n=p.getEventPixel(e.originalEvent);v(n)}})),p.on("click",(function(e){v(e.pixel)}))}},[[396,0]]]);
//# sourceMappingURL=vector-layer.js.map