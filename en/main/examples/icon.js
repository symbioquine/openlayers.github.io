(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{297:function(e,n,t){"use strict";t.r(n);var o=t(20),a=t(3),r=t(83),i=t(25),s=t(64),p=t(11),c=t(2),l=t(10),u=t(79),g=t(19),w=t(5),m=new o.a({geometry:new i.a([0,0]),name:"Null Island",population:4e3,rainfall:500}),v=new l.c({image:new u.a({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:"data/icon.png"})});m.setStyle(v);var d=new p.a({features:[m]}),f=new g.a({source:d}),h=new w.a({source:new s.a({url:"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",crossOrigin:""})}),y=new a.a({layers:[h,f],target:document.getElementById("map"),view:new c.a({center:[0,0],zoom:3})}),x=document.getElementById("popup"),E=new r.a({element:x,positioning:"bottom-center",stopEvent:!1,offset:[0,-50]});y.addOverlay(E),y.on("click",(function(e){var n=y.forEachFeatureAtPixel(e.pixel,(function(e){return e}));if(n){var t=n.getGeometry().getCoordinates();E.setPosition(t),$(x).popover({placement:"top",html:!0,content:n.get("name")}),$(x).popover("show")}else $(x).popover("dispose")})),y.on("pointermove",(function(e){if(e.dragging)$(x).popover("dispose");else{var n=y.getEventPixel(e.originalEvent),t=y.hasFeatureAtPixel(n);y.getTarget().style.cursor=t?"pointer":""}}))}},[[297,0]]]);
//# sourceMappingURL=icon.js.map