(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,n,t){e.exports=t.p+"static/media/loading.26ef1cbc.svg"},131:function(e){e.exports={a:"https://react-native-community.github.io/upgrade-helper"}},132:function(e,n,t){e.exports=t.p+"static/media/logo.74ebf3f4.svg"},139:function(e,n,t){e.exports=t(234)},144:function(e,n,t){},160:function(e,n,t){var r={"./":49,"./0.57":95,"./0.57.js":95,"./0.58":96,"./0.58.js":96,"./0.59":97,"./0.59.js":97,"./0.60":98,"./0.60.js":98,"./__mocks__":54,"./__mocks__/":54,"./__mocks__/index":54,"./__mocks__/index.js":54,"./index":49,"./index.js":49};function o(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=160},234:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(9),i=t.n(a),c=(t(144),t(17)),l=t(18),s=t(7),u=t(8),f=t(235),d=t(117),p=t(94),m=t(46),b=t.n(m),g=t(65),v=t(237),h=t(239),j=t(13),O=t.n(j),x=t(118),E=t.n(x),V=t(49),y="react-native-community/rn-diff-purge",w="https://raw.githubusercontent.com/".concat(y,"/master/RELEASES"),C=function(e){var n=e.fromVersion,t=e.toVersion;return"https://raw.githubusercontent.com/".concat(y,"/diffs/diffs/").concat(n,"..").concat(t,".diff")},D=function(e){return e.replace(/RnDiffApp\//,"")},k=function(e){var n=e.fromVersion,t=e.toVersion,r=O.a.valid(O.a.coerce(t));return V.default.filter(function(e){var t=e.version,o=O.a.coerce(t);return-1!==O.a.compare(r,o)&&![0,-1].includes(O.a.compare(o,n))})},N=function(e){var n=e.version;return"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#".concat(n.replace(".",""))},S=t(236);function R(){var e=Object(s.a)(["\n  width: 100%;\n"]);return R=function(){return e},e}function T(){var e=Object(s.a)(["\n  width: 100%;\n"]);return T=function(){return e},e}var P=S.a.Option,_=u.b.div(T()),A=Object(u.b)(S.a)(R()),z=function(e){var n=e.title,t=e.options,r=Object(l.a)(e,["title","options"]);return o.a.createElement(_,null,o.a.createElement("h4",null,n),o.a.createElement(A,Object.assign({size:"large"},r),t.map(function(e){return o.a.createElement(P,{key:e,value:e},e)})))};function L(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  height: auto;\n  overflow: hidden;\n  margin-top: 25px;\n"]);return L=function(){return e},e}function I(){var e=Object(s.a)(["\n  padding-left: 5px;\n"]);return I=function(){return e},e}function K(){var e=Object(s.a)(["\n  padding-right: 5px;\n"]);return K=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return M=function(){return e},e}var F=u.b.div(M()),B=Object(u.b)(z)(K()),U=Object(u.b)(function(e){var n=e.popover,t=Object(l.a)(e,["popover"]);return n?o.a.cloneElement(n,{children:o.a.createElement(z,t)}):o.a.createElement(z,t)})(I()),Y=u.b.div(L()),H=function(e){var n=e.version,t=e.versionToCompare;return 0===O.a.compare(O.a.valid(O.a.coerce(n)),O.a.valid(O.a.coerce(t)))},W=function(e){var n=e.releasedVersions,t=e.toVersion,r=e.latestVersion,o=null!==O.a.prerelease(t),a=null!==O.a.prerelease(r);return n.filter(function(e){return null===O.a.prerelease(e)||o&&H({version:t,versionToCompare:e})||a&&H({version:r,versionToCompare:e})})},G=function(e){var n=e.releasedVersions,t=e.minVersion,r=e.maxVersion;return n.filter(function(e){return e.length>0&&(r&&O.a.lt(e,r)||t&&O.a.gt(e,t))})},J=function(e){var n=e.releasedVersions,t=e.versionToCompare;return n.find(function(e){return O.a.lt(e,t)&&"minor"===O.a.diff(O.a.valid(O.a.coerce(e)),O.a.valid(O.a.coerce(t)))})},X=function(e){var n=e.version,t=e.allVersions,r=e.minVersion;try{return n&&t.includes(n)&&(!r||r&&O.a.gt(n,r))}catch(o){return!1}},$=function(e){var n=e.showDiff,t=Object(r.useState)(!0),a=Object(c.a)(t,2),i=a[0],l=a[1],s=Object(r.useState)([]),u=Object(c.a)(s,2),f=u[0],d=u[1],p=Object(r.useState)([]),m=Object(c.a)(p,2),j=m[0],O=m[1],x=Object(r.useState)([]),V=Object(c.a)(x,2),y=V[0],C=V[1],D=Object(r.useState)(!1),k=Object(c.a)(D,2),N=k[0],S=k[1],R=Object(r.useState)(""),T=Object(c.a)(R,2),P=T[0],_=T[1],A=Object(r.useState)(""),z=Object(c.a)(A,2),L=z[0],I=z[1],K=Object(r.useRef)(null);Object(r.useEffect)(function(){var e=function(){var e=E.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}();!function(){var n=Object(g.a)(b.a.mark(function n(){var t,r,o,a,i,c,s,u,f;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(w);case 2:return t=n.sent,n.next=5,t.text();case 5:r=n.sent.split("\n"),o=X({version:e.fromVersion,allVersions:r}),a=X({version:e.toVersion,allVersions:r,minVersion:e.fromVersion}),i=r[0],c=a?e.toVersion:i,s=W({releasedVersions:r,toVersion:c,latestVersion:i}),d(s),u=o?e.fromVersion:J({releasedVersions:s,versionToCompare:c}),O(G({releasedVersions:s,maxVersion:c})),C(G({releasedVersions:s,minVersion:u})),_(u),I(c),l(!1),S(f=o&&a),f&&K.current.props.onClick();case 21:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}()()},[_,I]),Object(r.useEffect)(function(){i||(O(G({releasedVersions:f,maxVersion:L})),C(G({releasedVersions:f,minVersion:P})))},[i,f,P,L,N]);var M=function(e){var t=e.fromVersion,r=e.toVersion;n({fromVersion:t,toVersion:r}),function(e){var n=e.fromVersion,t=e.toVersion,r=window.location.href.replace(window.location.search,""),o="?from=".concat(n,"&to=").concat(t);window.history.replaceState(null,null,"".concat(r).concat(o))}({fromVersion:P,toVersion:L})};return o.a.createElement(r.Fragment,null,o.a.createElement(F,null,o.a.createElement(B,{title:"What's your current React Native version?",loading:i,value:P,options:j,onChange:function(e){return _(e)}}),o.a.createElement(U,{title:"To which version would you like to upgrade?",loading:i,value:L,options:y,popover:"0.60.1"===L&&o.a.createElement(v.a,{visible:!0,placement:"topLeft",content:"We recommend using the latest 0.60 patch release instead of 0.60.1."}),onChange:function(e){return I(e)}})),o.a.createElement(Y,null,o.a.createElement(h.a,{ref:K,type:"primary",size:"large",onClick:function(){return M({fromVersion:P,toVersion:L})}},"Show me how to upgrade!")))},q=t(70),Q=t(240),Z=t(32),ee=(t(216),t(19)),ne=t(238);function te(){var e=Object(s.a)(["\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n    monospace;\n  font-size: 12px;\n  color: #24292e;\n  line-height: 32px;\n  background-color: #fafbfc;\n  border-bottom: 1px solid #e1e4e8;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  padding: 5px 10px;\n"]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  color: #24292e;\n  margin-right: 2px;\n  font-size: 10px;\n  transform: ",";\n  transition: transform 0.2s ease-in-out;\n  transform-origin: center;\n  line-height: 0;\n  height: auto;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return re=function(){return e},e}function oe(){var e=Object(s.a)(["\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin: 5px 8px 0;\n  &,\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"]);return oe=function(){return e},e}function ae(){var e=Object(s.a)(["\n  color: #24292e;\n  font-size: 12px;\n  border-width: 0;\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return ae=function(){return e},e}function ie(){var e=Object(s.a)(["\n  float: right;\n"]);return ie=function(){return e},e}function ce(){var e=Object(s.a)(["\n  font-size: 10px;\n  margin: 0 5px;\n  color: #f78206;\n"]);return ce=function(){return e},e}var le=Object(u.b)(function(e){return o.a.createElement(ee.a,Object.assign({},e,{type:"right"}))})(ce()),se=function(e){var n=e.oldPath,t=e.newPath,r=e.type,a=D(n),i=D(t);return"delete"===r?o.a.createElement("span",null,a):a!==i&&"add"!==r?o.a.createElement("span",null,a," ",o.a.createElement(le,null)," ",i):o.a.createElement("span",null,i)},ue=function(e){var n=e.type,t=Object(l.a)(e,["type"]);return o.a.createElement(ne.a,Object.assign({},t,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[n]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[n])},fe=function(e){var n=e.visible,t=Object(l.a)(e,["visible"]);return n?o.a.createElement(ne.a,Object.assign({},t,{color:"cyan"}),"BINARY"):null},de=Object(u.b)(function(e){return o.a.createElement("div",e)})(ie()),pe=Object(u.b)(function(e){var n=e.visible,t=e.toVersion,r=e.newPath,a=Object(l.a)(e,["visible","toVersion","newPath"]);return n?o.a.createElement(h.a,Object.assign({},a,{type:"ghost",shape:"circle",icon:"download",onClick:function(){return window.location=function(e){var n=e.version,t=e.path;return"https://github.com/".concat(y,"/raw/release/").concat(n,"/").concat(t)}({version:t,path:r})}})):null})(ae()),me=Object(u.b)(function(e){var n=e.diffKey,t=e.isDiffCompleted,r=e.onCompleteDiff,a=Object(l.a)(e,["diffKey","isDiffCompleted","onCompleteDiff"]);return t?o.a.createElement(v.a,{content:"\u21a9\ufe0f"},o.a.createElement(h.a,Object.assign({},a,{type:"ghost",shape:"circle",icon:"check",onClick:function(){return r(n)}}))):o.a.createElement(h.a,Object.assign({},a,{type:"ghost",shape:"circle",icon:"check",onClick:function(){return r(n)}}))})(oe(),function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),be=Object(u.b)(function(e){var n=e.visible,t=(e.isDiffCollapsed,Object(l.a)(e,["visible","isDiffCollapsed"]));return n?o.a.createElement(h.a,Object.assign({},t,{type:"link",icon:"down"})):null})(re(),function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),ge=Object(u.b)(function(e){var n=e.oldPath,t=e.newPath,a=e.toVersion,i=e.type,c=e.diffKey,s=e.hasDiff,u=e.isDiffCollapsed,f=e.setIsDiffCollapsed,d=e.isDiffCompleted,p=e.onCompleteDiff,m=Object(l.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff"]);return o.a.createElement("div",m,o.a.createElement(be,{visible:s,isDiffCollapsed:u,onClick:function(){return f(!u)}}),o.a.createElement(se,{oldPath:n,newPath:t,type:i})," ",o.a.createElement(ue,{type:i}),o.a.createElement(fe,{visible:!s}),o.a.createElement(de,null,o.a.createElement(r.Fragment,null,o.a.createElement(pe,{visible:!s,toVersion:a,newPath:t}),o.a.createElement(me,{diffKey:c,isDiffCompleted:d,onCompleteDiff:p}))))})(te()),ve=t(61),he=t(22),je=t(127);function Oe(){var e=Object(s.a)(["\n          margin-bottom: 0;\n        "]);return Oe=function(){return e},e}function xe(){var e=Object(s.a)(["\n  font-style: normal;\n  background-color: rgba(27, 31, 35, 0.07);\n  border-radius: 3px;\n  font-size: 85%;\n  margin: 0;\n  padding: 0.2em 0.4em;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  text-decoration: none;\n  color: #045dc1;\n"]);return Ee=function(){return e},e}var Ve=Object(u.b)(function(e){return o.a.createElement("a",Object.assign({target:"_blank"},e,{rel:"noopener"}))})(Ee()),ye=u.b.em(xe()),we=function(e){var n=e.forceBlock,t=e.options,r=void 0===t?{}:t,a=Object(l.a)(e,["forceBlock","options"]);return o.a.createElement(je.a,Object.assign({},a,{options:Object(he.a)({},r,{forceBlock:n,overrides:Object(he.a)({},r.overrides,{a:Ve,em:ye,code:ye,p:u.b.p(Oe())})})}))};function Ce(){var e=Object(s.a)(["\n  height: 16px;\n  width: 16px;\n  position: absolute;\n  top: 1px;\n  left: -10px;\n  font-size: 8px;\n  cursor: 'pointer';\n"]);return Ce=function(){return e},e}function De(){var e=Object(s.a)(["\n  margin: 10px;\n  border: 1px solid #ddd;\n  padding: 16px;\n  border-radius: 3px;\n  color: #000;\n"]);return De=function(){return e},e}function ke(){var e=Object(s.a)(["\n  position: relative;\n"]);return ke=function(){return e},e}var Ne=u.b.div(ke()),Se=u.b.div(De()),Re=Object(u.b)(h.a)(Ce()),Te={ADD:"I",DELETE:"D",NEUTRAL:"N"},Pe=function(e){var n=e.newPath,t=e.fromVersion,r=e.toVersion,a=D(n);return k({fromVersion:t,toVersion:r}).filter(function(e){var n=e.comments;return n&&n.length>0&&n.some(function(e){return e.fileName===a})}).reduce(function(e,n){var t=n.comments.reduce(function(e,n){var t=n.fileName,r=n.lineChangeType,i=n.lineNumber,c=n.content;return t!==a?e:Object(he.a)({},e,Object(ve.a)({},function(e){var n=e.lineChangeType,t=e.lineNumber;return"".concat(Te[n.toUpperCase()]).concat(t)}({lineChangeType:r,lineNumber:i}),o.a.createElement(_e,{content:c})))},{});return Object(he.a)({},e,t)},{})},_e=function(e){var n=e.content,t=Object(r.useState)(!0),a=Object(c.a)(t,2),i=a[0],l=a[1];return o.a.createElement(Ne,null,o.a.createElement(Re,{shape:"circle",type:"primary",onClick:function(){return l(!i)},icon:i?"close":"message"}),i&&o.a.createElement(Se,null,o.a.createElement(we,null,n.props.children)))};function Ae(){var e=Object(s.a)(["\n  .diff-gutter-col {\n    width: 30px;\n  }\n\n  tr.diff-line {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,\n      monospace;\n  }\n\n  td.diff-gutter {\n    color: rgba(27, 31, 35, 0.3);\n    padding: 0;\n    text-align: center;\n    font-size: 12px;\n    cursor: auto;\n  }\n\n  td.diff-gutter .diff-line-normal {\n    background-color: #cdffd8;\n    border-color: #bef5cb;\n  }\n\n  td.diff-gutter:hover {\n    cursor: pointer;\n    color: rgba(27, 31, 35, 0.6);\n  }\n\n  td.diff-code {\n    font-size: 12px;\n    color: #24292e;\n  }\n\n  td.diff-code-insert .diff-code-edit {\n    background-color: #acf2bd;\n  }\n\n  td.diff-gutter-omit:before {\n    width: 0;\n    background-color: transparent;\n  }\n"]);return Ae=function(){return e},e}function ze(){var e=Object(s.a)(["\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  margin-bottom: 16px;\n  margin-top: 16px;\n"]);return ze=function(){return e},e}var Le=u.b.div(ze()),Ie=Object(u.b)(Z.a)(Ae()),Ke=o.a.memo(function(e){var n=e.oldPath,t=e.newPath,a=e.type,i=e.hunks,l=e.fromVersion,s=e.toVersion,u=e.diffKey,f=e.isDiffCompleted,d=e.onCompleteDiff,p=e.selectedChanges,m=e.onToggleChangeSelection,b=Object(r.useState)(function(e){var n=e.type,t=e.hunks;return"delete"===n||t.length>5||void 0}({type:a,hunks:i})),g=Object(c.a)(b,2),v=g[0],h=g[1];return f&&void 0===v&&h(!0),o.a.createElement(Le,null,o.a.createElement(ge,{oldPath:n,newPath:t,toVersion:s,type:a,diffKey:u,hasDiff:i.length>0,isDiffCollapsed:v,setIsDiffCollapsed:h,isDiffCompleted:f,onCompleteDiff:d}),!v&&o.a.createElement(Ie,{viewType:"split",diffType:a,hunks:i,widgets:Pe({newPath:t,fromVersion:l,toVersion:s}),optimizeSelection:!0,selectedChanges:p},function(e){var n={enhancers:[Object(Z.c)(e)]},t=Object(Z.e)(e,n);return e.map(function(e){return o.a.createElement(Z.b,{key:e.content,hunk:e,tokens:t,gutterEvents:{onClick:m}})})}))},function(e,n){return e.isDiffCompleted===n.isDiffCompleted});function Me(){var e=Object(s.a)(["\n  margin-top: 0.5em;\n"]);return Me=function(){return e},e}var Fe=u.b.h1(Me()),Be=function(e){var n=e.diff,t=e.getDiffKey,r=e.title,a=e.completedDiffs,i=e.isDoneSection,c=e.fromVersion,l=e.toVersion,s=e.handleCompleteDiff,u=e.selectedChanges,f=e.onToggleChangeSelection;return o.a.createElement("div",null,r&&a.length>0&&o.a.createElement(Fe,null,r),n.map(function(e){var n=t(e),r=a.includes(n);return i!==r?null:o.a.createElement(Ke,Object.assign({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:n,fromVersion:c,toVersion:l,isDiffCompleted:a.includes(n),onCompleteDiff:s,selectedChanges:u,onToggleChangeSelection:f}))}))},Ue=t(129),Ye=t.n(Ue);function He(){var e=Object(s.a)(["\n  width: 60px;\n  margin: 15px 0;\n  animation: "," 3s linear infinite;\n"]);return He=function(){return e},e}function We(){var e=Object(s.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return We=function(){return e},e}var Ge=Object(u.c)(We()),Je=Object(u.b)(function(e){return o.a.createElement("img",Object.assign({alt:"Loading",title:"Loading"},e,{src:Ye.a}))})(He(),Ge),Xe=t(62),$e=t(63),qe=t(71),Qe=t(64),Ze=t(73);function en(){var e=Object(s.a)(["\n  padding-inline-start: 18px;\n  margin: 10px 0 0;\n"]);return en=function(){return e},e}function nn(){var e=Object(s.a)(["\n  margin: 15px 0;\n  background-color: #e1e4e8;\n  height: 0.25em;\n  border: 0;\n"]);return nn=function(){return e},e}function tn(){var e=Object(s.a)(["\n  float: right;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 12px;\n  border-width: 0px;\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  &,\n  &:hover,\n  &:focus {\n    color: #24292e;\n  }\n"]);return tn=function(){return e},e}function rn(){var e=Object(s.a)(["\n  margin: 0px 10px;\n"]);return rn=function(){return e},e}function on(){var e=Object(s.a)(["\n  padding: 24px;\n  color: rgba(0, 0, 0, 0.65);\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n"]);return on=function(){return e},e}function an(){var e=Object(s.a)(["\n  position: relative;\n  margin-top: ","\n  color: rgba(0, 0, 0, 0.65);\n  max-height: ","\n  overflow: hidden;\n  transition: max-height 0.4s ease-out, margin-top 0.4s ease-out 0.2s;\n"]);return an=function(){return e},e}var cn=u.b.div(an(),function(e){return e.isVisible?"16px":0},function(e){return e.isVisible?"800px":0}),ln=u.b.div(on()),sn=Object(u.b)(function(e){return o.a.createElement("span",Object.assign({},e,{role:"img","aria-label":"Close useful content section"}),"\ud83d\udce3")})(rn()),un=Object(u.b)(function(e){var n=e.toggleVisibility,t=Object(l.a)(e,["toggleVisibility"]);return o.a.createElement(h.a,Object.assign({},t,{type:"ghost",shape:"circle",icon:"close",onClick:n}))})(tn()),fn=u.b.hr(nn()),dn=u.b.ol(en()),pn=function(e){function n(){var e,t;Object(Xe.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=Object(qe.a)(this,(e=Object(Qe.a)(n)).call.apply(e,[this].concat(o)))).state={isVisible:!0},t.handleToggleVisibility=function(){return t.setState(function(e){return{isVisible:!e.isVisible}})},t}return Object(Ze.a)(n,e),Object($e.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){var t=this.props.isLoading&&!e.isLoading,r=this.state.isVisible&&!n.isVisible;return t||r}},{key:"render",value:function(){var e=this.props,n=e.fromVersion,t=e.toVersion,a=this.state.isVisible,i=k({fromVersion:n,toVersion:t});if(!i.some(function(e){return!!e.usefulContent}))return null;var c=i.length>1;return o.a.createElement(cn,{isVisible:a},o.a.createElement(ln,null,o.a.createElement("h2",null,o.a.createElement(sn,null)," Useful content for upgrading"),o.a.createElement(un,{toggleVisibility:this.handleToggleVisibility}),i.map(function(e,n){var t=e.usefulContent,a=e.version.slice(0,4),i=[].concat(Object(q.a)(t.links),[{title:"React Native ".concat(a," changelog"),url:N({version:a})}]);return o.a.createElement(r.Fragment,{key:n},n>0&&o.a.createElement(fn,null),c&&o.a.createElement("h3",null,"Release ",a),o.a.createElement("span",null,t.description),o.a.createElement(dn,null,i.map(function(e,n){var t=e.url,r=e.title;return o.a.createElement("li",{key:"".concat(t).concat(n)},o.a.createElement(Ve,{href:t},r))})))})))}}]),n}(r.Component),mn=t(130),bn=t.n(mn);function gn(){var e=Object(s.a)(["\n      transform: translateY(70px);\n      animation: ",";\n      animation-duration: 1.5s;\n    "]);return gn=function(){return e},e}function vn(){var e=Object(s.a)(["\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  background: #d5eafd;\n  padding: 10px;\n  border: 1px solid #1890ff;\n  border-radius: 20px;\n  color: #7dadda;\n  transform: ",";\n  display: flex;\n  align-self: flex-end;\n  transition: transform 0.3s;\n  ","\n\n  .completedAmount {\n    color: #1890ff;\n  }\n"]);return vn=function(){return e},e}function hn(){var e=Object(s.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n\n  10%, 90% {\n    transform: translate(0, -2px);\n  }\n  \n  20%, 80% {\n    transform: translate(0, 3px);\n  }\n\n  30%, 50%, 70% {\n    transform: translate(0, -5px);\n  }\n\n  40%, 60% {\n    transform: translate(0, 5px);\n  }\n"]);return hn=function(){return e},e}var jn=Object(u.c)(hn()),On=Object(u.b)(function(e){var n=e.completed,t=e.total,r=Object(l.a)(e,["completed","total"]);return o.a.createElement("div",r,o.a.createElement("span",{className:"completedAmount"},0===n?1:n)," /",t,o.a.createElement(bn.a,{active:n===t,config:{elementCount:200,angle:130,startVelocity:30}}))})(vn(),function(e){return e.completed?"translateY(0px)":"translateY(70px)"},function(e){return e.completed===e.total&&Object(u.a)(gn(),jn)});function xn(){var e=Object(s.a)(["\n  width: 90%;\n"]);return xn=function(){return e},e}var En=u.b.div(xn()),Vn=function(e){var n=e.oldRevision,t=e.newRevision;return"".concat(n).concat(t)},yn=Object(Z.f)({multiple:!0})(function(e){var n=e.showDiff,t=e.fromVersion,a=e.toVersion,i=e.selectedChanges,l=e.onToggleChangeSelection,s=Object(r.useState)(!0),u=Object(c.a)(s,2),f=u[0],d=u[1],p=Object(r.useState)(null),m=Object(c.a)(p,2),v=m[0],h=m[1],j=Object(r.useState)([]),O=Object(c.a)(j,2),x=O[0],E=O[1];if(Object(r.useEffect)(function(){n&&function(){var e=Object(g.a)(b.a.mark(function e(){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch(C({fromVersion:t,toVersion:a}));case 3:return e.next=5,e.sent.text();case 5:n=e.sent,h(Object(Z.d)(n).sort(function(e){return e.newPath.includes("package.json")?-1:1})),E([]),d(!1);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t,n,a]),!n)return null;if(f)return o.a.createElement(Je,null);var V={diff:v,getDiffKey:Vn,completedDiffs:x,fromVersion:t,toVersion:a,handleCompleteDiff:function(e){if(x.includes(e))return E(function(n){return n.filter(function(n){return n!==e})});E(function(n){return[].concat(Object(q.a)(n),[e])})},selectedChanges:i,onToggleChangeSelection:l};return o.a.createElement(En,null,o.a.createElement(pn,{isLoading:f,fromVersion:t,toVersion:a}),o.a.createElement(Be,Object.assign({},V,{isDoneSection:!1})),function(e){var n=e.diff,t=e.completedDiffs;return n.length===t.length&&o.a.createElement(Q.a,{style:{marginTop:16},message:"Your upgrade is done \ud83c\udf89\ud83c\udf89",type:"success",showIcon:!0,closable:!0})}({diff:v,completedDiffs:x}),o.a.createElement(Be,Object.assign({},V,{isDoneSection:!0,title:"Done"})),o.a.createElement(On,{completed:x.length,total:v.length}))}),wn=t(131),Cn=t(132),Dn=t.n(Cn);function kn(){var e=Object(s.a)(["\n  margin-top: 10px;\n  margin-left: 15px;\n"]);return kn=function(){return e},e}function Nn(){var e=Object(s.a)(["\n  margin: 0;\n  margin-left: 15px;\n"]);return Nn=function(){return e},e}function Sn(){var e=Object(s.a)(["\n  width: 100px;\n  margin-bottom: 15px;\n"]);return Sn=function(){return e},e}function Rn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n"]);return Rn=function(){return e},e}function Tn(){var e=Object(s.a)(["\n  width: 90%;\n  border-radius: 3px;\n"]);return Tn=function(){return e},e}function Pn(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 30px;\n"]);return Pn=function(){return e},e}var _n=u.b.div(Pn()),An=Object(u.b)(f.a)(Tn()),zn=u.b.div(Rn()),Ln=u.b.img(Sn()),In=u.b.h1(Nn()),Kn=Object(u.b)(function(e){var n=e.className,t=Object(l.a)(e,["className"]);return o.a.createElement("div",{className:n},o.a.createElement(d.a,t))})(kn()),Mn=function(){var e=Object(r.useState)(""),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(r.useState)(""),l=Object(c.a)(i,2),s=l[0],u=l[1],f=Object(r.useState)(!1),d=Object(c.a)(f,2),m=d[0],b=d[1];Object(r.useEffect)(function(){p.a.initialize("UA-136307971-1"),p.a.pageview("/")},[]);return o.a.createElement(_n,null,o.a.createElement(An,null,o.a.createElement(zn,null,o.a.createElement(Ln,{alt:"React Native upgrade helper logo",title:"React Native upgrade helper logo",src:Dn.a}),o.a.createElement("a",{href:wn.a},o.a.createElement(In,null,"React Native upgrade guide")),o.a.createElement(Kn,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star")),o.a.createElement($,{showDiff:function(e){var n=e.fromVersion,t=e.toVersion;n!==t&&(a(n),u(t),b(!0))}})),o.a.createElement(yn,{showDiff:m,fromVersion:t,toVersion:s}))},Fn=function(e){return o.a.createElement(Mn,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Fn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,n,t){"use strict";t.r(n);var r=t(22);n.default=["0.60","0.59","0.58","0.57"].map(function(e){return Object(r.a)({},t(160)("./".concat(e)).default,{version:e})})},54:function(e,n){jest.setMock("../index.js",["0.59","0.58","0.57","0.56"].map(function(e){return{version:e}}))},95:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},96:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},97:function(e,n,t){"use strict";t.r(n),n.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}},98:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r);n.default={usefulContent:{description:"React Native 0.60 includes Cocoapods integration by default, AndroidX support, auto-linking libraries, a brand new Start screen and more.",links:[{title:"Official blog post about the major changes on React Native 0.60",url:"https://facebook.github.io/react-native/blog/2019/07/03/version-60"}]},comments:[{fileName:"ios/Podfile",lineNumber:4,lineChangeType:"add",content:o.a.createElement(r.Fragment,null,"All these libraries below have been removed from the Xcode project file and now live in the Podfile. Cocoapods handles the linking now. Here you can add more libraries with native modules.")},{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:9,lineChangeType:"neutral",content:o.a.createElement(r.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-helper/issues/47) for an explanation and some help with upgrading this file.")}]}}},[[139,1,2]]]);
//# sourceMappingURL=main.b9b44691.chunk.js.map