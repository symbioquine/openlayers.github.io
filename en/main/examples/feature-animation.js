(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{272:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(3),o=t(25),w=t(2),c=t(10),d=t(52),i=t(15),b=t(9),s=t(11),u=t(5),m=t(19),p=t(57),f=t(4),l=t(49),g=t(115),v=new u.a({source:new b.b({wrapX:!1})}),j=new r.a({layers:[v],target:"map",view:new w.a({center:[0,0],zoom:1,multiWorld:!0})}),y=new s.a({wrapX:!1}),O=new m.a({source:y});j.addLayer(O);y.on("addfeature",(function(e){var a,t,n;a=e.feature,t=(new Date).getTime(),n=v.on("postrender",(function(e){var r=Object(l.b)(e),o=e.frameState,w=a.getGeometry().clone(),b=o.time-t,s=b/3e3,u=25*Object(p.b)(s)+5,m=Object(p.b)(1-s),f=new c.c({image:new d.a({radius:u,stroke:new i.a({color:"rgba(255, 0, 0, "+m+")",width:.25+m})})});r.setStyle(f),r.drawGeometry(w),b>3e3?Object(g.b)(n):j.render()}))})),window.setInterval((function(){var e=360*Math.random()-180,a=180*Math.random()-90,t=new o.a(Object(f.g)([e,a])),r=new n.a(t);y.addFeature(r)}),1e3)}},[[272,0]]]);
//# sourceMappingURL=feature-animation.js.map