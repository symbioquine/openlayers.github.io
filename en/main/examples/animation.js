(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{239:function(t,n,e){"use strict";e.r(n);var o=e(3),a=e(9),i=e(5),r=e(2),c=e(58),u=e(4),m=Object(u.g)([-.12755,51.507222]),f=Object(u.g)([37.6178,55.7517]),g=Object(u.g)([28.9744,41.0128]),s=Object(u.g)([12.5,41.9]),d=Object(u.g)([7.4458,46.95]),l=new r.a({center:g,zoom:6});new o.a({target:"map",layers:[new i.a({preload:4,source:new a.b})],view:l});function h(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375}function b(t){return Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1}function w(t,n){document.getElementById(t).addEventListener("click",n)}function p(t,n){var e=2e3,o=l.getZoom(),a=2,i=!1;function r(t){--a,i||0!==a&&t||(i=!0,n(t))}l.animate({center:t,duration:e},r),l.animate({zoom:o-1,duration:1e3},{zoom:o,duration:1e3},r)}w("rotate-left",(function(){l.animate({rotation:l.getRotation()+Math.PI/2})})),w("rotate-right",(function(){l.animate({rotation:l.getRotation()-Math.PI/2})})),w("rotate-around-rome",(function(){var t=l.getRotation();l.animate({rotation:t+Math.PI,anchor:s,easing:c.a},{rotation:t+2*Math.PI,anchor:s,easing:c.b})})),w("pan-to-london",(function(){l.animate({center:m,duration:2e3})})),w("elastic-to-moscow",(function(){l.animate({center:f,duration:2e3,easing:b})})),w("bounce-to-istanbul",(function(){l.animate({center:g,duration:2e3,easing:h})})),w("spin-to-rome",(function(){var t=l.getCenter();l.animate({center:[t[0]+(s[0]-t[0])/2,t[1]+(s[1]-t[1])/2],rotation:Math.PI,easing:c.a},{center:s,rotation:2*Math.PI,easing:c.b})})),w("fly-to-bern",(function(){p(d,(function(){}))})),w("tour",(function(){var t=[m,d,s,f,g],n=-1;!function e(o){o?++n<t.length?setTimeout((function(){p(t[n],e)}),0===n?0:750):alert("Tour complete"):alert("Tour cancelled")}(!0)}))}},[[239,0]]]);
//# sourceMappingURL=animation.js.map