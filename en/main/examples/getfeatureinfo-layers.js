(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{427:function(e,t,r){"use strict";r.r(t);var a=r(137),n=r(122),o=r(12),s=r(16),u=r(0),i=function(e){function t(t){e.call(this);var r=t||{};this.featureNS_="http://mapserver.gis.umn.edu/mapserver",this.gmlFormat_=new a.a,this.layers_=r.layers?r.layers:null}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getLayers=function(){return this.layers_},t.prototype.setLayers=function(e){this.layers_=e},t.prototype.readFeatures_=function(e,t){e.setAttribute("namespaceURI",this.featureNS_);var r=e.localName,a=[];if(0===e.childNodes.length)return a;if("msGMLOutput"==r)for(var n=0,o=e.childNodes.length;n<o;n++){var i=e.childNodes[n];if(i.nodeType===Node.ELEMENT_NODE){var l=i,c=t[0],h=l.localName.replace("_layer","");if(!this.layers_||Object(s.f)(this.layers_,h)){var m=h+"_feature";c.featureType=m,c.featureNS=this.featureNS_;var p={};p[m]=Object(u.j)(this.gmlFormat_.readFeatureElement,this.gmlFormat_);var d=Object(u.r)([c.featureNS,null],p);l.setAttribute("namespaceURI",this.featureNS_);var f=Object(u.u)([],d,l,t,this.gmlFormat_);f&&Object(s.c)(a,f)}}}if("FeatureCollection"==r){var _=Object(u.u)([],this.gmlFormat_.FEATURE_COLLECTION_PARSERS,e,[{}],this.gmlFormat_);_&&(a=_)}return a},t.prototype.readFeaturesFromNode=function(e,t){var r={};return t&&Object(o.a)(r,this.getReadOptions(e,t)),this.readFeatures_(e,[r])},t}(n.a);fetch("data/wmsgetfeatureinfo/osm-restaurant-hotel.xml").then((function(e){return e.text()})).then((function(e){var t=(new i).readFeatures(e);document.getElementById("all").innerText=t.length.toString();var r=new i({layers:["hotel"]}).readFeatures(e);document.getElementById("hotel").innerText=r.length.toString();var a=new i({layers:["restaurant"]}).readFeatures(e);document.getElementById("restaurant").innerText=a.length.toString()}))}},[[427,0]]]);
//# sourceMappingURL=getfeatureinfo-layers.js.map