(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{396:function(e,t,n){"use strict";n.r(t);var o=n(3),r=n(2),a=n(5),s=n(68),w=n(107),c=n(9),g=new w.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"topp:states"},ratio:1,serverType:"geoserver"}),i=function(e){var t=g.getLegendUrl(e);document.getElementById("legend").src=t},u=[new a.a({source:new c.b}),new s.a({extent:[-13884991,2870341,-7455066,6338219],source:g})],p=new o.a({layers:u,target:"map",view:new r.a({center:[-10997148,4569099],zoom:4})}),l=p.getView().getResolution();i(l),p.getView().on("change:resolution",(function(e){var t=e.target.getResolution();i(t)}))}},[[396,0]]]);
//# sourceMappingURL=wms-getlegendgraphic.js.map