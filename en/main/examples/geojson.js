(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{281:function(e,t,o){"use strict";o.r(t);var n=o(190),r=o(22),a=o(31),i=o(3),l=o(2),w=o(52),c=o(15),y=o(10),s=o(21),g=o(11),u=o(9),p=o(19),d=o(5),m=new w.a({radius:5,fill:null,stroke:new c.a({color:"red",width:1})}),f={Point:new y.c({image:m}),LineString:new y.c({stroke:new c.a({color:"green",width:1})}),MultiLineString:new y.c({stroke:new c.a({color:"green",width:1})}),MultiPoint:new y.c({image:m}),MultiPolygon:new y.c({stroke:new c.a({color:"yellow",width:1}),fill:new s.a({color:"rgba(255, 255, 0, 0.1)"})}),Polygon:new y.c({stroke:new c.a({color:"blue",lineDash:[4],width:3}),fill:new s.a({color:"rgba(0, 0, 255, 0.1)"})}),GeometryCollection:new y.c({stroke:new c.a({color:"magenta",width:2}),fill:new s.a({color:"magenta"}),image:new w.a({radius:10,fill:null,stroke:new c.a({color:"magenta"})})}),Circle:new y.c({stroke:new c.a({color:"red",width:2}),fill:new s.a({color:"rgba(255,0,0,0.2)"})})},k=new g.a({features:(new a.a).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,2e6],[8e6,-2e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[1e6,-75e4],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6]]],[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6]]]}]}}]})});k.addFeature(new r.a(new n.a([5e6,7e6],1e6)));var F=new p.a({source:k,style:function(e){return f[e.getGeometry().getType()]}});new i.a({layers:[new d.a({source:new u.b}),F],target:"map",view:new l.a({center:[0,0],zoom:2})})}},[[281,0]]]);
//# sourceMappingURL=geojson.js.map