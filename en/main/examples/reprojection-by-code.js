(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{350:function(e,n,t){"use strict";t.r(n);var o=t(174),r=t(3),a=t(9),c=t(15),i=t(89),l=t(5),s=t(2),u=t(63),d=t(1),g=t(4),f=t(107),h=new o.a({strokeStyle:new c.a({color:"rgba(255,120,0,0.9)",width:2,lineDash:[.5,4]}),showLabels:!0,visible:!1,wrapX:!1}),w=new r.a({layers:[new l.a({source:new a.b}),h],target:"map",view:new s.a({projection:"EPSG:3857",center:[0,0],zoom:1})}),p=document.getElementById("epsg-query"),v=document.getElementById("epsg-search"),m=document.getElementById("epsg-result"),b=document.getElementById("render-edges"),E=document.getElementById("show-graticule");function j(e,n,t,o){if(null===e||null===n||null===t||null===o)return m.innerHTML="Nothing usable found, using EPSG:3857...",void w.setView(new s.a({projection:"EPSG:3857",center:[0,0],zoom:1}));m.innerHTML="("+e+") "+n;var r="EPSG:"+e;u.a.defs(r,t),Object(f.a)(u.a);var a=Object(g.j)(r),c=Object(g.l)("EPSG:4326",a),i=[o[1],o[2],o[3],o[0]];a.setWorldExtent(i),o[1]>o[3]&&(i=[o[1],o[2],o[3]+360,o[0]]);var l=Object(d.a)(i,c,void 0,8);a.setExtent(l);var h=new s.a({projection:a});w.setView(h),h.fit(l)}v.onclick=function(e){var n;n=p.value,m.innerHTML="Searching ...",fetch("https://epsg.io/?format=json&q="+n).then((function(e){return e.json()})).then((function(e){var n=e.results;if(n&&n.length>0)for(var t=0,o=n.length;t<o;t++){var r=n[t];if(r){var a=r.code,c=r.name,i=r.proj4,l=r.bbox;if(a&&a.length>0&&i&&i.length>0&&l&&4==l.length)return void j(a,c,i,l)}}j(null,null,null,null)})),e.preventDefault()},b.onchange=function(){w.getLayers().forEach((function(e){if(e instanceof l.a){var n=e.getSource();n instanceof i.a&&n.setRenderReprojectionEdges(b.checked)}}))},E.onchange=function(){h.setVisible(E.checked)}}},[[350,0]]]);
//# sourceMappingURL=reprojection-by-code.js.map