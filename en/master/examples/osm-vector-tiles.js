(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{334:function(e,a,r){"use strict";r.r(a);var t=r(3),n=r(2),o=r(174),i=r(98),l=r(4),s=r(92),c=r(10),w=r(20),u=r(16),d={},p={major_road:"#776",minor_road:"#ccb",highway:"#f39"},y=new c.c({fill:new w.a({color:"#666",opacity:.4}),stroke:new u.a({color:"#444",width:1})}),m=new c.c({fill:new w.a({color:"#9db9e8"})});new t.a({layers:[new i.a({source:new s.a({attributions:"&copy; OpenStreetMap contributors, Who’s On First, Natural Earth, and openstreetmapdata.com",format:new o.a({layerName:"layer",layers:["water","roads","buildings"]}),maxZoom:19,url:"https://tile.nextzen.org/tilezen/vector/v1/all/{z}/{x}/{y}.topojson?api_key=uZNs91nMR-muUTP99MyBSg"}),style:function(e,a){switch(e.get("layer")){case"water":return m;case"roads":return function(e){var a,r,t=e.get("kind"),n=e.get("railway"),o=e.get("sort_key"),i=t+"/"+n+"/"+o,l=d[i];l||(n?(a="#7de",r=1):(a=p[t],r="highway"==t?1.5:1),l=new c.c({stroke:new u.a({color:a,width:r}),zIndex:o}),d[i]=l);return l}(e);case"buildings":return a<10?y:null;default:return null}}})],target:"map",view:new n.a({center:Object(l.f)([-74.0064,40.7142]),maxZoom:19,zoom:15})})}},[[334,0]]]);
//# sourceMappingURL=osm-vector-tiles.js.map