(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{293:function(e,t,o){"use strict";o.r(t);var n=o(24),r=o(3),a=o(2),i=o(30),l=o(185),w=o(21),c=o(5),y=o(11),s=o(9),g=o(48),u=o(16),p=o(10),d=o(20),m=new g.a({radius:5,fill:null,stroke:new u.a({color:"red",width:1})}),f={Point:new p.c({image:m}),LineString:new p.c({stroke:new u.a({color:"green",width:1})}),MultiLineString:new p.c({stroke:new u.a({color:"green",width:1})}),MultiPoint:new p.c({image:m}),MultiPolygon:new p.c({stroke:new u.a({color:"yellow",width:1}),fill:new d.a({color:"rgba(255, 255, 0, 0.1)"})}),Polygon:new p.c({stroke:new u.a({color:"blue",lineDash:[4],width:3}),fill:new d.a({color:"rgba(0, 0, 255, 0.1)"})}),GeometryCollection:new p.c({stroke:new u.a({color:"magenta",width:2}),fill:new d.a({color:"magenta"}),image:new g.a({radius:10,fill:null,stroke:new u.a({color:"magenta"})})}),Circle:new p.c({stroke:new u.a({color:"red",width:2}),fill:new d.a({color:"rgba(255,0,0,0.2)"})})},k=new y.a({features:(new i.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,2e6],[8e6,-2e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[1e6,-75e4],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6]]],[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6]]]}]}}]})});k.addFeature(new n.a(new l.a([5e6,7e6],1e6)));var F=new w.a({source:k,style:function(e){return f[e.getGeometry().getType()]}});new r.a({layers:[new c.a({source:new s.b}),F],target:"map",view:new a.a({center:[0,0],zoom:2})})}},[[293,0]]]);
//# sourceMappingURL=geojson.js.map