(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{382:function(e,t,r){"use strict";r.r(t);var a=r(31),n=r(3),o=r(2),s=r(11),u=r(9),w=r(19),c=r(5),d=r(4),i=new s.a;fetch("data/geojson/roads-seoul.geojson").then((function(e){return e.json()})).then((function(e){for(var t=new a.a,r=t.readFeatures(e)[0],n=t.writeFeatureObject(r),o=turf.lineDistance(n,"kilometers"),s=1;s<=o/.2;s++){var u=turf.along(n,.2*s,"kilometers"),w=t.readFeature(u);w.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(w)}r.getGeometry().transform("EPSG:4326","EPSG:3857"),i.addFeature(r)}));var m=new w.a({source:i}),f=new c.a({source:new u.b});new n.a({layers:[f,m],target:document.getElementById("map"),view:new o.a({center:Object(d.g)([126.980366,37.52654]),zoom:15})})}},[[382,0]]]);
//# sourceMappingURL=turf.js.map