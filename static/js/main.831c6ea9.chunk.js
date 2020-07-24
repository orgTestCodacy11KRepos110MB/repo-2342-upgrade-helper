(this["webpackJsonpupgrade-helper"]=this["webpackJsonpupgrade-helper"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.57 includes 599 commits by 73 different contributors, it has improvements to Accessibility APIs, Babel 7 stable support and more.",links:[{title:"[External] Tutorial on upgrading to React Native 0.57",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.57/"}]}}},128:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.58 is the first release of 2019, it includes work for modernizing and strengthening flow types for core components and  numerous crash fixes and resolutions for unexpected behaviors.",links:[{title:"[External] Tutorial on upgrading to React Native 0.58",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.58/"}]}}},129:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.59 includes React Hooks, performance gains on Android and lots of cool stuff.",links:[{title:"Official blog post about the major changes on React Native 0.59",url:"https://facebook.github.io/react-native/blog/2019/03/12/releasing-react-native-059"},{title:"[External] Tutorial on upgrading to React Native 0.59",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.59/"}]}}},130:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(2);t.default={usefulContent:{description:"React Native 0.60 includes Cocoapods integration by default, AndroidX support, auto-linking libraries, a brand new Start screen and more.",links:[{title:"Official blog post about the major changes on React Native 0.60",url:"https://facebook.github.io/react-native/blog/2019/07/03/version-60"},{title:"[External] Tutorial on upgrading to React Native 0.60",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.60/"}]},comments:[{fileName:"ios/Podfile",lineNumber:4,lineChangeType:"add",content:Object(i.c)(o.Fragment,null,"All these libraries below have been removed from the Xcode project file and now live in the Podfile. Cocoapods handles the linking now. Here you can add more libraries with native modules.")},{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:9,lineChangeType:"neutral",content:Object(i.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/14) for an explanation and some help with upgrading this file.")}]}},131:function(e,t,n){"use strict";n.r(t),t.default={usefulContent:{description:"React Native 0.61 includes Fast Refresh and more.",links:[{title:"Official blog post about the major changes on React Native 0.61",url:"https://facebook.github.io/react-native/blog/2019/09/18/version-0.61"},{title:"[External] Tutorial on upgrading to React Native 0.61",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.61/"}]}}},132:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(2);t.default={usefulContent:{description:"React Native 0.62 includes built-in integration with Flipper.",links:[{title:"Official blog post about the major changes on React Native 0.62",url:"https://reactnative.dev/blog/2020/03/26/version-0.62"},{title:"[External] Tutorial on upgrading to React Native 0.62",url:"https://reactnative.thenativebits.com/courses/upgrading-react-native/upgrade-to-react-native-0.62/"},{title:"[iOS] Tutorial on upgrading Xcode-related files to React Native 0.62",url:"https://github.com/react-native-community/upgrade-helper/issues/191"}]},comments:[{fileName:"ios/RnDiffApp.xcodeproj/project.pbxproj",lineNumber:19,lineChangeType:"add",content:Object(i.c)(o.Fragment,null,"Click [here](https://github.com/react-native-community/upgrade-support/issues/13) for an explanation and some help with upgrading this file.")},{fileName:"android/app/build.gradle",lineNumber:81,lineChangeType:"neutral",content:Object(i.c)(o.Fragment,null,"If you are using Hermes Engine and ProGuard, make sure to update the rules in `proguard-rules.pro` to what is specified in the [documentation](https://reactnative.dev/docs/hermes) for `0.62`.")}]}},173:function(e){e.exports=JSON.parse('{"a":"https://react-native-community.github.io/upgrade-helper"}')},174:function(e,t,n){e.exports=n.p+"static/media/logo.74ebf3f4.svg"},186:function(e,t,n){e.exports=n(334)},191:function(e,t,n){},228:function(e,t,n){var o={"./":62,"./0.57":127,"./0.57.js":127,"./0.58":128,"./0.58.js":128,"./0.59":129,"./0.59.js":129,"./0.60":130,"./0.60.js":130,"./0.61":131,"./0.61.js":131,"./0.62":132,"./0.62.js":132,"./__mocks__":68,"./__mocks__/":68,"./__mocks__/index":68,"./__mocks__/index.js":68,"./index":62,"./index.js":62};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=228},334:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(13),r=n.n(a),c=(n(191),n(56)),s=n(11),l=n(14),u=n(4),p=n(336),d=n(151),f=n(121),b=n(59),h=n.n(b),g=n(79),m=n(335),j=n(16),v=n.n(j),O=n(152),y=n.n(O),C=n(62),x="react-native-community/rn-diff-purge",w="https://raw.githubusercontent.com/".concat(x,"/master/RELEASES"),V=function(e){var t=e.fromVersion,n=e.toVersion;return"https://raw.githubusercontent.com/".concat(x,"/diffs/diffs/").concat(t,"..").concat(n,".diff")},k=function(e){var t=e.version,n=e.path;return"https://github.com/".concat(x,"/raw/release/").concat(t,"/").concat(n)},S=function(e,t){return e.replace(new RegExp("".concat(t||"RnDiffApp","/")),"")},D=function(e,t){return t?e.replace(new RegExp("RnDiffApp","g"),t).replace(new RegExp("RnDiffApp".toLowerCase(),"g"),t.toLowerCase()):e},N=function(e){var t=e.fromVersion,n=e.toVersion,o=v.a.valid(v.a.coerce(n));return C.default.filter((function(e){var n=e.version,i=v.a.coerce(n);return-1!==v.a.compare(o,i)&&![0,-1].includes(v.a.compare(i,t))}))},P=function(e){var t=e.version;return"".concat("https://github.com/react-native-community/releases/blob/master/CHANGELOG.md","#v").concat(t.replace(".",""),"0")},T="Show latest release candidates",R=n(8),z=n(337),E=n(2);var A=z.a.Option,q=Object(u.a)("div",{target:"e8azqbf0"})({name:"8atqhb",styles:"width:100%;"}),_=Object(u.a)(z.a,{target:"e8azqbf1"})({name:"8atqhb",styles:"width:100%;"}),F=function(e){var t=e.title,n=e.options,o=Object(l.a)(e,["title","options"]);return Object(E.c)(q,null,Object(E.c)("h4",null,t),Object(E.c)(_,Object(R.a)({size:"large"},o),n.map((function(e){return Object(E.c)(A,{key:e,value:e},e)}))))},I=n(122);var L=Object(u.a)("div",{target:"e8ia1jb0"})({name:"1shcrr",styles:"display:flex;justify-content:center;height:auto;overflow:hidden;margin-top:25px;"}),Y=Object(u.a)(I.a,{target:"e8ia1jb1"})({name:"1fe9jde",styles:"border-radius:3px;"}),M=i.a.forwardRef((function(e,t){var n=e.localFromVersion,o=e.localToVersion,i=e.onShowDiff,a=Object(l.a)(e,["localFromVersion","localToVersion","onShowDiff"]);return Object(E.c)(L,null,Object(E.c)(Y,Object(R.a)({},a,{ref:t,type:"primary",size:"large",onClick:function(){return i({fromVersion:n,toVersion:o})}}),"Show me how to upgrade!"))}));var U=Object(u.a)("div",{target:"e1kwjzpc0"})({name:"gg4vpm",styles:"display:flex;justify-content:space-between;"}),B=Object(u.a)(F,{target:"e1kwjzpc1"})({name:"uux7qa",styles:"padding-right:5px;"}),H=Object(u.a)((function(e){var t=e.popover,n=Object(l.a)(e,["popover"]);return t?i.a.cloneElement(t,{children:Object(E.c)(F,n)}):Object(E.c)(F,n)}),{target:"e1kwjzpc2"})({name:"1sugwtq",styles:"padding-left:5px;"}),K=function(e){var t=e.version,n=e.versionToCompare;return["prerelease","prepatch",null].includes(v.a.diff(t,n))},X=function(e){var t=e.releasedVersions,n=e.toVersion,o=e.latestVersion,i=e.showReleaseCandidates,a=null!==v.a.prerelease(n),r=null!==v.a.prerelease(o);return t.filter((function(e){return i&&function(e){var t=e.version,n=e.latestVersion;return v.a.prerelease(t)&&K({version:n,versionToCompare:t})}({version:e,latestVersion:o})||null===v.a.prerelease(e)||a&&K({version:n,versionToCompare:e})||r&&K({version:o,versionToCompare:e})}))},G=function(e){var t=e.releasedVersions,n=e.minVersion,o=e.maxVersion,i=function(e){return v.a.valid(v.a.coerce(e.find((function(e){return!v.a.prerelease(e)&&0===v.a.patch(e)}))))}(t);return t.filter((function(e){return e.length>0&&(o&&v.a.lt(e,o)||n&&v.a.gt(e,n)&&!((t=e).includes("rc")&&v.a.valid(v.a.coerce(t))===i));var t}))},W=function(e){var t=e.releasedVersions,n=e.versionToCompare;return t.find((function(e){return v.a.lt(e,n)&&"minor"===v.a.diff(v.a.valid(v.a.coerce(e)),v.a.valid(v.a.coerce(n)))}))},J=function(e){var t=e.version,n=e.allVersions,o=e.minVersion;try{return t&&n.includes(t)&&(!o||o&&v.a.gt(t,o))}catch(i){return!1}},$=function(e){var t=e.showDiff,n=e.showReleaseCandidates,i=Object(o.useState)(!0),a=Object(s.a)(i,2),r=a[0],c=a[1],l=Object(o.useState)([]),u=Object(s.a)(l,2),p=u[0],d=u[1],f=Object(o.useState)([]),b=Object(s.a)(f,2),j=b[0],v=b[1],O=Object(o.useState)([]),C=Object(s.a)(O,2),x=C[0],V=C[1],k=Object(o.useState)(!1),S=Object(s.a)(k,2),D=S[0],N=S[1],P=Object(o.useState)(""),T=Object(s.a)(P,2),R=T[0],z=T[1],A=Object(o.useState)(""),q=Object(s.a)(A,2),_=q[0],F=q[1],I=Object(o.useRef)(null);Object(o.useEffect)((function(){var e=function(){var e=y.a.parse(window.location.search);return{fromVersion:e.from,toVersion:e.to}}();(function(){var t=Object(g.a)(h.a.mark((function t(){var o,i,a,r,s,l,u,p,f;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(w);case 2:return o=t.sent,t.next=5,o.text();case 5:i=t.sent.split("\n"),a=J({version:e.fromVersion,allVersions:i}),r=J({version:e.toVersion,allVersions:i,minVersion:e.fromVersion}),s=i[0],l=r?e.toVersion:s,u=X({releasedVersions:i,toVersion:l,latestVersion:s,showReleaseCandidates:n}),d(u),p=a?e.fromVersion:W({releasedVersions:u,versionToCompare:l}),v(G({releasedVersions:u,maxVersion:l})),V(G({releasedVersions:u,minVersion:p})),z(p),F(l),c(!1),N(f=a&&r),f&&I.current.props.onClick();case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[z,F,n]),Object(o.useEffect)((function(){r||(v(G({releasedVersions:p,maxVersion:_})),V(G({releasedVersions:p,minVersion:R})))}),[r,p,R,_,D,n]);return Object(E.c)(o.Fragment,null,Object(E.c)(U,null,Object(E.c)(B,{title:"What's your current React Native version?",loading:r,value:R,options:j,onChange:function(e){return z(e)}}),Object(E.c)(H,{title:"To which version would you like to upgrade?",loading:r,value:_,options:x,popover:"0.60.1"===_&&Object(E.c)(m.a,{visible:!0,placement:"topLeft",content:"We recommend using the latest 0.60 patch release instead of 0.60.1."}),onChange:function(e){return F(e)}})),Object(E.c)(M,{ref:I,localFromVersion:R,localToVersion:_,onShowDiff:function(e){var n=e.fromVersion,o=e.toVersion;t({fromVersion:n,toVersion:o}),function(e){var t=e.fromVersion,n=e.toVersion,o=window.location.href.replace(window.location.search,""),i="?from=".concat(t,"&to=").concat(n);window.history.replaceState(null,null,"".concat(o).concat(i))}({fromVersion:R,toVersion:_})}}))},Q=n(85),Z=n(339),ee=n(24),te=n(38),ne=(n(289),n(80)),oe=n.n(ne),ie=n(26),ae=n(341),re=n(343),ce=n(348),se=n(347),le=n(346),ue=n(345),pe=n(351),de=n(157),fe=n(350);var be=Object(u.a)((function(e){var t=e.comments,n=e.isDiffCollapsed,o=e.uncollapseDiff,i=Object(l.a)(e,["comments","isDiffCollapsed","uncollapseDiff"]),a=Object.keys(t).length,r=n&&a>0;return Object(E.c)(ee.c.div,Object(R.a)({},i,{variants:{visible:{opacity:1,cursor:"pointer"},invisible:{opacity:0,cursor:"initial"}},animate:r>0?"visible":"invisible",transition:{duration:.5},onClick:o}),Object(E.c)(fe.a,{className:"icon"}),Object(E.c)("span",{className:"reminder"},a," hidden comment",a>1&&"s"))}),{target:"euvokhb0"})({name:"10tqxc0",styles:"display:inline;background-color:#fffbe6;padding:5px;border-radius:3px;margin-left:10px;border:1px solid #ffe58f;& > .icon{margin-right:6px;}& > .reminder{word-spacing:-2px;}"});var he=Object(u.a)("div",{target:"e1bx3rr90"})({name:"otpv63",styles:"display:flex;justify-content:space-between;font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;font-size:12px;color:#24292e;line-height:32px;background-color:#fafbfc;border-bottom:1px solid #e1e4e8;border-top-left-radius:2px;border-top-right-radius:2px;padding:5px 10px;position:sticky;top:0;"}),ge=Object(u.a)(re.a,{target:"e1bx3rr91"})({name:"terggw",styles:"font-size:10px;margin:0 5px;color:#f78206;"}),me=function(e){var t=e.oldPath,n=e.newPath,o=e.type;e.appName;return"delete"===o?Object(E.c)("span",null,t):t!==n&&"add"!==o?Object(E.c)("span",null,t," ",Object(E.c)(ge,null)," ",n):Object(E.c)("span",null,n)},je=function(e){var t=e.type,n=Object(l.a)(e,["type"]);return Object(E.c)(ae.a,Object(R.a)({},n,{color:{add:"blue",modify:"green",delete:"red",rename:"orange"}[t]}),{add:"ADDED",modify:"MODIFIED",delete:"DELETED",rename:"RENAMED"}[t])},ve=function(e){var t=e.visible,n=Object(l.a)(e,["visible"]);return t?Object(E.c)(ae.a,Object(R.a)({},n,{color:"cyan"}),"BINARY"):null},Oe=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,i=Object(l.a)(e,["visible","version","path"]);return t?Object(E.c)(I.a,Object(R.a)({},i,{type:"ghost",shape:"circle",icon:Object(E.c)(ce.a,null),target:"_blank",href:k({version:n,path:o})})):null}),{target:"e1bx3rr92"})({name:"cnzq6",styles:"color:#24292e;font-size:12px;border-width:0;&:hover,&:focus{color:#24292e;}"}),ye=Object(u.a)((function(e){var t=e.visible,n=e.version,o=e.path,i=Object(l.a)(e,["visible","version","path"]);return t?Object(E.c)(I.a,Object(R.a)({},i,{type:"link",target:"_blank",href:k({version:n,path:o})}),"View file"):null}),{target:"e1bx3rr93"})({name:"jskc3k",styles:"font-size:12px;color:#24292e;"}),Ce="\n  font-size: 13px;\n  line-height: 0;\n  border-width: 0px;\n  width: 22px;\n  height: 22px;\n  margin: 5px 0;\n  border-radius: 50%;\n",xe=Object(u.a)((function(e){var t=e.visible,n=e.onClick,o=Object(l.a)(e,["visible","onClick"]);return t?Object(E.c)(I.a,Object(R.a)({},o,{type:"ghost",icon:Object(E.c)(se.a,null),onClick:n})):Object(E.c)(I.a,Object(R.a)({},o,{type:"ghost",icon:Object(E.c)(le.a,null),onClick:n}))}),{target:"e1bx3rr94"})(Ce," &,&:hover,&:focus{color:",(function(e){return e.isDiffCompleted?"#52c41a":"#24292e"}),";}"),we=Object(u.a)((function(e){var t=e.oldPath,n=e.newPath,o=e.type,i=e.onCopy,a=e.copyPathPopoverContent,r=e.resetCopyPathPopoverContent,c=Object(l.a)(e,["oldPath","newPath","type","onCopy","copyPathPopoverContent","resetCopyPathPopoverContent"]);return Object(E.c)(de.CopyToClipboard,{text:"add"===o?n:t,onCopy:i},Object(E.c)(m.a,{content:a,trigger:"hover",overlayStyle:{width:"175px",textAlign:"center"}},Object(E.c)(I.a,Object(R.a)({},c,{type:"ghost",icon:Object(E.c)(ue.a,null),onMouseOver:r}))))}),{target:"e1bx3rr95"})(Ce,""),Ve=Object(u.a)("div",{target:"e1bx3rr96"})({name:"t4ptyc",styles:"display:inline-block;&:hover{cursor:pointer;}"}),ke=Object(u.a)((function(e){var t=e.visible,n=(e.isDiffCollapsed,Object(l.a)(e,["visible","isDiffCollapsed"]));return t?Object(E.c)(I.a,Object(R.a)({},n,{type:"link",icon:Object(E.c)(pe.a,null)})):null}),{target:"e1bx3rr97"})("color:#24292e;margin-right:2px;font-size:10px;transform:",(function(e){return e.isDiffCollapsed?"rotate(-90deg)":"initial"}),";transition:transform 0.2s ease-in-out;transform-origin:center;line-height:0;height:auto;&:hover,&:focus{color:#24292e;}"),Se=function(e){var t=e.oldPath,n=e.newPath,i=e.toVersion,a=e.type,r=e.diffKey,c=e.hasDiff,s=e.isDiffCollapsed,u=e.setIsDiffCollapsed,p=e.isDiffCompleted,d=e.onCompleteDiff,f=e.onCopyPathToClipboard,b=e.copyPathPopoverContent,h=e.resetCopyPathPopoverContent,g=e.appName,m=e.diffComments,j=Object(l.a)(e,["oldPath","newPath","toVersion","type","diffKey","hasDiff","isDiffCollapsed","setIsDiffCollapsed","isDiffCompleted","onCompleteDiff","onCopyPathToClipboard","copyPathPopoverContent","resetCopyPathPopoverContent","appName","diffComments"]),v=function(e){var t=e.oldPath,n=e.newPath,o=e.appName,i=D(t,o),a=D(n,o);return{oldPath:S(i,o),newPath:S(a,o)}}({oldPath:t,newPath:n,appName:g});return Object(E.c)(he,j,Object(E.c)("div",null,Object(E.c)(Ve,{onClick:function(e){var t=e.altKey;return u(!s,t)}},Object(E.c)(ke,{visible:c,isDiffCollapsed:s}),Object(E.c)(me,{oldPath:v.oldPath,newPath:v.newPath,type:a,appName:g})," ",Object(E.c)(je,{type:a}),Object(E.c)(ve,{visible:!c})),Object(E.c)(we,{oldPath:v.oldPath,newPath:v.newPath,type:a,onCopy:f,copyPathPopoverContent:b,resetCopyPathPopoverContent:h}),Object(E.c)(be,{comments:m,isDiffCollapsed:s,uncollapseDiff:function(){return u(!1)}})),Object(E.c)("div",null,Object(E.c)(o.Fragment,null,Object(E.c)(ye,{visible:c&&"delete"!==a,version:i,path:n}),Object(E.c)(Oe,{visible:!c&&"delete"!==a,version:i,path:n}),Object(E.c)(xe,{visible:p,onClick:function(){return d(r)}}))))},De=n(158);var Ne=Object(u.a)((function(e){return Object(E.c)("a",Object(R.a)({target:"_blank"},e,{rel:"noopener",onClick:function(e){return e.stopPropagation()}}))}),{target:"e1eys6y60"})({name:"mr5ph2",styles:"text-decoration:none;color:#045dc1;"}),Pe=Object(u.a)("em",{target:"e1eys6y61"})({name:"j8y7sr",styles:"font-style:normal;background-color:rgba(27,31,35,0.07);border-radius:3px;font-size:85%;margin:0;padding:0.2em 0.4em;"}),Te=function(e){var t=e.forceBlock,n=void 0!==t&&t,o=e.options,i=void 0===o?{}:o,a=Object(l.a)(e,["forceBlock","options"]);return Object(E.c)(De.a,Object(R.a)({},a,{options:Object(ie.a)({},i,{forceBlock:n,overrides:Object(ie.a)({},i.overrides,{a:Ne,em:Pe,code:Pe,p:Object(u.a)("p",{target:"e1eys6y62"})({name:"gx0lhm",styles:"margin-bottom:0;"})})})}))};var Re={add:"#d6fedb",delete:"#fdeff0",neutral:"#ffffff"},ze=Object(u.a)((function(e){var t=e.isCommentVisible,n=e.children,o=Object(l.a)(e,["isCommentVisible","children"]);return Object(E.c)(ee.c.div,Object(R.a)({},o,{variants:{visible:{height:"auto"},hidden:{height:10}},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.5},inherit:!1}),Object(E.c)("div",{children:n}))}),{target:"e1qcg9nb0"})("overflow:hidden;& > div{display:flex;flex-direction:row;background-color:",(function(e){var t=e.lineChangeType;return Re[t]}),";cursor:pointer;}"),Ee=Object(u.a)("div",{target:"e1qcg9nb1"})({name:"lx0a8",styles:"flex:1;position:relative;padding:16px;color:#000;background-color:#fffbe6;user-select:none;"}),Ae=Object(u.a)((function(e){var t=e.isCommentVisible,n=Object(l.a)(e,["isCommentVisible"]);return Object(E.c)(ee.c.div,Object(R.a)({},n,{variants:{visible:{scaleX:1},hidden:{scaleX:10}},whileHover:{scale:2},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.25}}))}),{target:"e1qcg9nb2"})({name:"1vupd63",styles:"background-color:#ffe58f;margin-left:20px;width:10px;cursor:pointer;"}),qe=Object(u.a)(Te,{target:"e1qcg9nb3"})("opacity:1;",(function(e){return!e.isCommentVisible&&"\n      opacity: 0;\n    "})," transition:opacity 0.25s ease-out;"),_e={ADD:"I",DELETE:"D",NEUTRAL:"N"},Fe=function(e){var t=e.newPath,n=e.fromVersion,o=e.toVersion,i=e.appName,a=S(t,i);return N({fromVersion:n,toVersion:o}).filter((function(e){var t=e.comments;return t&&t.length>0&&t.some((function(e){return e.fileName===a}))})).reduce((function(e,t){var n=t.comments.reduce((function(e,t){var n=t.fileName,o=t.lineChangeType,i=t.lineNumber,r=t.content;return n!==a?e:Object(ie.a)({},e,Object(c.a)({},function(e){var t=e.lineChangeType,n=e.lineNumber;return"".concat(_e[t.toUpperCase()]).concat(n)}({lineChangeType:o,lineNumber:i}),Object(E.c)(Ie,{content:r,lineChangeType:o})))}),{});return Object(ie.a)({},e,{},n)}),{})},Ie=function(e){var t=e.content,n=e.lineChangeType,i=Object(o.useState)(!0),a=Object(s.a)(i,2),r=a[0],c=a[1];return Object(E.c)(ze,{isCommentVisible:r,lineChangeType:n,onClick:function(){return c(!r)}},Object(E.c)(Ae,{isCommentVisible:r,onClick:function(){return c(!r)}}),Object(E.c)(Ee,null,Object(E.c)(qe,{isCommentVisible:r},t.props.children)))};var Le="Click to copy file path",Ye="File path copied!",Me=Object(u.a)("div",{target:"ei7z45h0"})({name:"kvrbmd",styles:"border:1px solid #e8e8e8;border-radius:3px;margin-bottom:16px;margin-top:16px;"}),Ue=Object(u.a)("div",{target:"ei7z45h1"})({name:"roblq6",styles:"background-color:#f1f8ff;margin-left:30px;padding-left:4px;color:'#1b1f23b3';"}),Be=Object(u.a)(te.a,{target:"ei7z45h2"})({name:"pon55n",styles:"background-color:#dbedff;"}),He=Object(u.a)(te.b,{target:"ei7z45h3"})({name:"m3lb03",styles:".diff-gutter-col{width:30px;}tr.diff-line{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace;}td.diff-gutter{color:rgba(27,31,35,0.3);padding:0;text-align:center;font-size:12px;cursor:auto;}td.diff-gutter .diff-line-normal{background-color:#cdffd8;border-color:#bef5cb;}td.diff-gutter:hover{cursor:pointer;color:rgba(27,31,35,0.6);}td.diff-code{font-size:12px;color:#24292e;}td.diff-code-insert .diff-code-edit{background-color:#acf2bd;}td.diff-gutter-omit:before{width:0;background-color:transparent;}td.diff-widget-content{padding:0;}"}),Ke=i.a.memo((function(e){var t=e.oldPath,n=e.newPath,i=e.type,a=e.hunks,r=e.fromVersion,c=e.toVersion,l=e.diffKey,u=e.isDiffCompleted,p=e.onCompleteDiff,d=e.selectedChanges,f=e.onToggleChangeSelection,b=e.areAllCollapsed,h=e.setAllCollapsed,g=e.diffViewStyle,m=e.appName,j=Object(o.useState)(function(e){var t=e.type,n=e.hunks;return"delete"===t||n.length>5||void 0}({type:i,hunks:a})),v=Object(s.a)(j,2),O=v[0],y=v[1],C=Object(o.useState)(Le),x=Object(s.a)(C,2),w=x[0],V=x[1],k=Object(o.useCallback)((function(e){return m?e.map((function(e){return Object(ie.a)({},e,{changes:e.changes.map((function(e){return Object(ie.a)({},e,{content:D(e.content,m)})}))})})):e}),[m]);void 0!==b&&b!==O?y(b):u&&void 0===O&&y(!0);var S=Fe({newPath:n,fromVersion:r,toVersion:c,appName:m});return Object(E.c)(Me,null,Object(E.c)(Se,{oldPath:t,newPath:n,toVersion:c,type:i,diffKey:l,hasDiff:a.length>0,isDiffCollapsed:O,setIsDiffCollapsed:function(e,t){if(t)return h(e);h(void 0),y(e)},isDiffCompleted:u,onCopyPathToClipboard:function(){V(Ye)},copyPathPopoverContent:w,resetCopyPathPopoverContent:function(){w===Ye&&V(Le)},onCompleteDiff:p,appName:m,diffComments:S}),!O&&Object(E.c)(He,{viewType:g,diffType:i,hunks:a,widgets:S,optimizeSelection:!0,selectedChanges:d},(function(e){var t=k(e),n={enhancers:[Object(te.d)(t)]},o=Object(te.f)(t,n);return t.map((function(e){return[Object(E.c)(Be,{key:"decoration-"+e.content},Object(E.c)(Ue,null,e.content)),Object(E.c)(te.c,{key:e.content,hunk:e,tokens:o,gutterEvents:{onClick:f}})]}))})))}),(function(e,t){return e.isDiffCompleted===t.isDiffCompleted&&e.areAllCollapsed===t.areAllCollapsed&&e.diffViewStyle===t.diffViewStyle}));var Xe=Object(u.a)("h1",{target:"e1jqko7g0"})({name:"l2z0vi",styles:"margin-top:0.5em;"}),Ge=function(e){var t=e.diff,n=e.getDiffKey,i=e.title,a=e.completedDiffs,r=e.isDoneSection,c=e.fromVersion,l=e.toVersion,u=e.handleCompleteDiff,p=e.selectedChanges,d=e.onToggleChangeSelection,f=e.diffViewStyle,b=e.appName,h=e.doneTitleRef,g=Object(o.useState)(void 0),m=Object(s.a)(g,2),j=m[0],v=m[1],O=Object(o.useCallback)((function(){var e=oe.a.satisfies(c,">= 0.61.0 <= 0.62.0"),t=oe.a.satisfies(l,">= 0.62.0 <= 0.63.0");return e&&t}),[c,l])();return Object(E.c)("div",null,i&&a.length>0&&Object(E.c)(Xe,{ref:h},i),t.map((function(e){var t=n(e),o=a.includes(t);return r!==o||O&&e.oldPath.match(/gradlew.bat/)&&e.newPath.match(/gradlew.bat/)?null:Object(E.c)(Ke,Object(R.a)({key:"".concat(e.oldRevision).concat(e.newRevision)},e,{type:"new"===e.type?"add":e.type,diffKey:t,diffViewStyle:f,fromVersion:c,toVersion:l,isDiffCompleted:a.includes(t),onCompleteDiff:u,selectedChanges:p,onToggleChangeSelection:d,areAllCollapsed:j,setAllCollapsed:v,appName:b}))})))},We=n(117);var Je=function(){return Object(E.c)(We.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{width:"250",height:"6",rx:"1.5"}))},$e=function(){return Object(E.c)(We.a,{speed:1,backgroundColor:"#eee",foregroundColor:"#e6e6e6",viewBox:"0 0 400 100"},Object(E.c)("rect",{x:"0",y:"10",width:"47%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"10",width:"41%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"18",width:"43%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"34",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"200",y:"42",width:"45%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"42",width:"40%",height:"6",rx:"1.5"}),Object(E.c)("rect",{x:"0",y:"50",width:"44%",height:"6",rx:"1.5"}))},Qe=Object(u.a)(ee.c.div,{target:"e1q7zk9m0"})({name:"h9hnq2",styles:"margin-top:16px;border:1px solid #e8e8e8;border-radius:3px;"}),Ze=Object(u.a)("div",{target:"e1q7zk9m1"})({name:"1rk6upi",styles:"color:#24292e;background-color:#fafbfc;padding:10px;height:40px;"}),et={name:"10nze3y",styles:"padding:5px 10px;"},tt=function(){return Object(E.c)(Qe,{initial:{opacity:0,translateY:100},animate:{opacity:1,translateY:0},transition:{duration:.5}},Object(E.c)(Ze,null,Object(E.c)(Je,null)),Object(E.c)("div",{css:et},Object(E.c)($e,null)))},nt=n(76),ot=n(77),it=n(86),at=n(78),rt=n(88),ct=n(349),st=n(182);var lt=Object(u.a)((function(e){return Object(E.c)("div",e,Object(E.c)("span",null,"Check out"," ",Object(E.c)(st.a,{placement:"bottom",title:"Upgrade Support is a community-backed place to request and give help when upgrading your app."},Object(E.c)("a",Object(R.a)({href:"https://github.com/react-native-community/upgrade-support",target:"_blank",rel:"noopener noreferrer"},e),"Upgrade Support"))," ","if you are experiencing issues related to React Native during the upgrading process."))}),{target:"e1dzoh7i0"})({name:"omrhug",styles:"padding-top:15px;span > a{color:#045dc1;&:hover{color:#40a9ff;}}"}),ut=function(){return Object(E.c)(Te,null,"Keep in mind that `RnDiffApp` and `rndiffapp` are placeholders. When upgrading, you should replace them with your actual project's name. You can also provide your app name by clicking the settings icon on the top right.")};var pt=Object(u.a)("div",{target:"e1n00l3l0"})({name:"1aynp02",styles:"position:relative;margin-top:16px;color:rgba(0,0,0,0.65);overflow:hidden;"}),dt=Object(u.a)("div",{target:"e1n00l3l1"})({name:"1ieyl17",styles:"color:rgba(0,0,0,0.65);background-color:#fffbe6;border-width:1px;border-left-width:7px;border-color:#ffe58f;border-style:solid;border-radius:3px;transition:padding 0.25s ease-out;"}),ft=Object(u.a)((function(e){var t=e.isContentVisible,n=Object(l.a)(e,["isContentVisible"]);return Object(E.c)(ee.c.h2,Object(R.a)({},n,{variants:{visibleContent:{translateX:0,translateY:0},hiddenContent:{translateX:-5,translateY:-10}},initial:t?"visibleContent":"hiddenContent",animate:t?"visibleContent":"hiddenContent",transition:{duration:.25},inherit:!1}))}),{target:"e1n00l3l2"})({name:"16t2yzh",styles:"font-size:17px;cursor:pointer;margin:0px;padding:18px 0px 0px 14px;"}),bt=Object(u.a)((function(e){var t=e.isContentVisible,n=e.children,o=Object(l.a)(e,["isContentVisible","children"]);return Object(E.c)(ee.c.div,Object(R.a)({},o,{variants:{visible:{opacity:1,height:"auto",translateY:0},hidden:{opacity:0,height:0,translateY:-20}},initial:t?"visible":"hidden",animate:t?"visible":"hidden",transition:{duration:.25},inherit:!1}),Object(E.c)("div",{children:n}))}),{target:"e1n00l3l3"})({name:"1c655gy",styles:"& > div{padding:15px 24px 19px;}"}),ht=Object(u.a)((function(e){return Object(E.c)("span",Object(R.a)({},e,{role:"img","aria-label":"Megaphone emoji"}),"\ud83d\udce3")}),{target:"e1n00l3l4"})({name:"9g4yx1",styles:"margin:0px 10px;"}),gt=Object(u.a)((function(e){var t=e.toggleContentVisibility,n=e.isContentVisible,o=Object(l.a)(e,["toggleContentVisibility","isContentVisible"]);return Object(E.c)(I.a,Object(R.a)({},o,{type:"link",icon:n?Object(E.c)(ct.a,null):Object(E.c)(pe.a,null),onClick:t}))}),{target:"e1n00l3l5"})({name:"1meph0h",styles:"float:right;position:absolute;top:11px;right:12px;font-size:12px;border-width:0px;width:20px;height:20px;color:rgba(0,0,0,0.45);&:hover,&:focus{color:#24292e;}"}),mt=Object(u.a)("hr",{target:"e1n00l3l6"})({name:"94b9fp",styles:"margin:15px 0;background-color:#e1e4e8;height:0.25em;border:0;"}),jt=Object(u.a)("ol",{target:"e1n00l3l7"})({name:"jbbt8s",styles:"padding-inline-start:18px;margin:10px 0 0;"}),vt=function(e){function t(){var e,n;Object(nt.a)(this,t);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=Object(it.a)(this,(e=Object(at.a)(t)).call.apply(e,[this].concat(i)))).state={isContentVisible:!0},n.handleToggleContentVisibility=function(){return n.setState((function(e){return{isContentVisible:!e.isContentVisible}}))},n}return Object(rt.a)(t,e),Object(ot.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.props.isLoading&&!e.isLoading,o=this.state.isContentVisible!==t.isContentVisible;return n||o}},{key:"render",value:function(){var e=this.props,t=e.fromVersion,n=e.toVersion,i=this.state.isContentVisible,a=N({fromVersion:t,toVersion:n});if(!a.some((function(e){return!!e.usefulContent})))return null;var r=a.length>1;return Object(E.c)(pt,{isContentVisible:i},Object(E.c)(dt,{isContentVisible:i},Object(E.c)(ft,{isContentVisible:i,onClick:this.handleToggleContentVisibility},Object(E.c)(ht,null)," Useful content for upgrading"),Object(E.c)(gt,{isContentVisible:i,toggleContentVisibility:this.handleToggleContentVisibility}),Object(E.c)(bt,{isContentVisible:i},a.map((function(e,t){var n=e.usefulContent,i=e.version.slice(0,4),a=[].concat(Object(Q.a)(n.links),[{title:"React Native ".concat(i," changelog"),url:P({version:i})}]);return Object(E.c)(o.Fragment,{key:t},t>0&&Object(E.c)(mt,null),r&&Object(E.c)("h3",null,"Release ",i),Object(E.c)("span",null,n.description),Object(E.c)(jt,null,a.map((function(e,t){var n=e.url,o=e.title;return Object(E.c)("li",{key:"".concat(n).concat(t)},Object(E.c)(Ne,{href:n},o))}))))})),Object(E.c)(lt,null),Object(E.c)(mt,null),Object(E.c)(ut,null))))}}]),t}(o.Component),Ot=n(340);var yt=Object(u.a)("div",{target:"end0ift0"})({name:"14dwkoc",styles:"position:relative;border-width:1px;margin-top:16px;flex-direction:row-reverse;display:flex;"}),Ct=Object(u.a)((function(e){var t=e.handleViewStyleChange,n=e.diffViewStyle;return Object(E.c)(yt,null,Object(E.c)(Ot.a.Group,{value:n},Object(E.c)(Ot.a.Button,{value:"split",onChange:function(){return t("split")}},"Split"),Object(E.c)(Ot.a.Button,{value:"unified",onChange:function(){return t("unified")}},"Unified")))}),{target:"end0ift1"})({name:"zejs5o",styles:"float:right;position:absolute;top:10px;right:10px;font-size:12px;border-width:0px;width:20px;height:20px;margin-right:8px;&,&:hover,&:focus{color:#24292e;}"}),xt=n(160),wt=n(161),Vt=n.n(wt);function kt(){var e=Object(xt.a)(["\n  0% {\n    transform: translate(0, 0);\n  }\n\n  10%, 90% {\n    transform: translate(0, -2px);\n  }\n\n  20%, 80% {\n    transform: translate(0, 3px);\n  }\n\n  30%, 50%, 70% {\n    transform: translate(0, -5px);\n  }\n\n  40%, 60% {\n    transform: translate(0, 5px);\n  }\n"]);return kt=function(){return e},e}var St=Object(E.d)(kt()),Dt=Object(u.a)((function(e){var t=e.completed,n=e.total,o=e.popoverContent,i=(e.popoverCursorType,Object(l.a)(e,["completed","total","popoverContent","popoverCursorType"]));return Object(E.c)("div",i,Object(E.c)(m.a,{content:o,trigger:"hover",placement:"right",overlayStyle:{position:"fixed"}},Object(E.c)("span",{className:"completedAmount"},0===t?1:t)," ","/",n),Object(E.c)(Vt.a,{active:t===n,config:{elementCount:200,angle:130,startVelocity:30}}))}),{target:"eqjubm30"})("position:fixed;bottom:20px;right:20px;background:#d5eafd;padding:10px;border:1px solid #1890ff;border-radius:20px;color:#7dadda;transform:",(function(e){return e.completed?"translateY(0px)":"translateY(70px)"}),";display:flex;align-self:flex-end;transition:transform 0.3s;cursor:",(function(e){return e.popoverCursorType}),";",(function(e){return e.completed===e.total&&Object(E.b)("transform:translateY(70px);animation:",St,";animation-duration:1.5s;")})," .completedAmount{color:#1890ff;}");var Nt=function(e){return new Promise((function(t){return setTimeout(t,e)}))},Pt=Object(u.a)("div",{target:"exsbni10"})({name:"7822g1",styles:"width:90%;"}),Tt=function(e){var t=e.oldRevision,n=e.newRevision;return"".concat(t).concat(n)},Rt=Object(te.g)({multiple:!0})((function(e){var t=e.shouldShowDiff,n=e.fromVersion,i=e.toVersion,a=e.selectedChanges,r=e.onToggleChangeSelection,c=e.appName,l=Object(o.useState)(!0),u=Object(s.a)(l,2),p=u[0],d=u[1],f=Object(o.useState)(null),b=Object(s.a)(f,2),m=b[0],j=b[1],v=Object(o.useState)([]),O=Object(s.a)(v,2),y=O[0],C=O[1],x=Object(o.useState)(!1),w=Object(s.a)(x,2),k=w[0],S=w[1],D={content:"Scroll to Done section",cursorType:"s-resize"},N={content:"Scroll to Top",cursorType:"n-resize"},P=Object(o.useState)(D),T=Object(s.a)(P,2),z=T[0],A=T[1],q=Object(o.useRef)(null),_=Object(o.useState)(localStorage.getItem("viewStyle")||"split"),F=Object(s.a)(_,2),I=F[0],L=F[1],Y=Object(o.useCallback)(Object(g.a)(h.a.mark((function e(){var t,o,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),C([]),e.next=4,Promise.all([fetch(V({fromVersion:n,toVersion:i})),Nt(300)]);case 4:return t=e.sent,o=Object(s.a)(t,1),a=o[0],e.next=9,a.text();case 9:r=e.sent,j(Object(te.e)(r).sort((function(e){return e.newPath.includes("package.json")?-1:1}))),d(!1);case 12:case"end":return e.stop()}}),e)}))),[n,i]);if(Object(o.useEffect)((function(){t&&Y()}),[Y,t]),!t)return null;if(p)return Object(E.c)(Pt,null,Object(E.c)(ee.a,null,Object(E.c)(tt,null)));var M={diff:m,getDiffKey:Tt,completedDiffs:y,fromVersion:n,toVersion:i,handleCompleteDiff:function(e){if(y.includes(e))return C((function(t){return t.filter((function(t){return t!==e}))}));C((function(t){return[].concat(Object(Q.a)(t),[e])}))},selectedChanges:a,onToggleChangeSelection:r};return Object(E.c)(Pt,null,Object(E.c)(ee.b,null,Object(E.c)(ee.c.div,{initial:{opacity:0,translateY:75},animate:{opacity:1,translateY:0},transition:{duration:.5}},Object(E.c)(vt,{isLoading:p,fromVersion:n,toVersion:i}),Object(E.c)(Ct,{handleViewStyleChange:function(e){L(e),localStorage.setItem("viewStyle",e)},diffViewStyle:I}),Object(E.c)(Ge,Object(R.a)({},M,{isDoneSection:!1,diffViewStyle:I,appName:c})),function(e){var t=e.diff,n=e.completedDiffs;return t.length===n.length&&Object(E.c)(Z.a,{style:{marginTop:16},message:"Your upgrade is done \ud83c\udf89\ud83c\udf89",type:"success",showIcon:!0,closable:!0})}({diff:m,completedDiffs:y}),Object(E.c)(Ge,Object(R.a)({},M,{isDoneSection:!0,title:"Done",appName:c,doneTitleRef:q})),Object(E.c)(Dt,{completed:y.length,total:m.length,onClick:function(){S(!k),k?(A(D),window.scrollTo({top:0,behavior:"smooth"})):(A(N),q.current.scrollIntoView({behavior:"smooth"}))},popoverContent:z.content,popoverCursorType:z.cursorType}))))})),zt=n(344),Et=n(342),At=n(338);var qt=Object(u.a)("div",{target:"eg18p4w0"})({name:"1yuhvjn",styles:"margin-top:16px;"}),_t=function(e){var t=e.handleSettingsChange,n=e.appName,a=e.setAppName,r=Object(o.useState)(!1),c=Object(s.a)(r,2),l=c[0],u=c[1];return Object(E.c)(m.a,{placement:"bottomRight",content:Object(E.c)(i.a.Fragment,null,Object(E.c)(Et.a.Group,{onChange:function(e){return t(e)}},Object(E.c)("div",null,Object(E.c)(Et.a,{value:T},T))),Object(E.c)(qt,null,Object(E.c)("h4",null,"What's your app name?"),Object(E.c)(At.a,{value:n,onChange:function(e){a(e.target.value)},placeholder:"MyAwesomeApp"}))),trigger:"click",visible:l,onVisibleChange:function(e){return u(e)}},Object(E.c)(I.a,{icon:Object(E.c)(zt.a,null)}))},Ft=n(173),It=n(174),Lt=n.n(It);var Yt=Object(u.a)("div",{target:"el8swy00"})({name:"cqyjk8",styles:"display:flex;align-items:center;justify-content:center;flex-direction:column;padding-top:30px;"}),Mt=Object(u.a)(p.a,{target:"el8swy01"})({name:"1xfqzpp",styles:"width:90%;border-radius:3px;border-color:#e8e8e8;"}),Ut=Object(u.a)("div",{target:"el8swy02"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),Bt=Object(u.a)("img",{target:"el8swy03"})({name:"9f1yi3",styles:"width:100px;margin-bottom:15px;"}),Ht=Object(u.a)("h1",{target:"el8swy04"})({name:"7kez8b",styles:"margin:0;margin-left:15px;"}),Kt=Object(u.a)((function(e){var t=e.className,n=Object(l.a)(e,["className"]);return Object(E.c)("div",{className:t},Object(E.c)(d.a,n))}),{target:"el8swy05"})({name:"z6j3nc",styles:"margin-top:10px;margin-left:15px;margin-right:auto;"}),Xt=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(o.useState)(""),r=Object(s.a)(a,2),l=r[0],u=r[1],p=Object(o.useState)(!1),d=Object(s.a)(p,2),b=d[0],h=d[1],g=Object(o.useState)(Object(c.a)({},"".concat(T),!1)),m=Object(s.a)(g,2),j=m[0],v=m[1],O=Object(o.useState)(""),y=Object(s.a)(O,2),C=y[0],x=y[1];Object(o.useEffect)((function(){f.a.initialize("UA-136307971-1"),f.a.pageview("/")}),[]);return Object(E.c)(Yt,null,Object(E.c)(Mt,null,Object(E.c)(Ut,null,Object(E.c)(Bt,{alt:"React Native Upgrade Helper logo",title:"React Native Upgrade Helper logo",src:Lt.a}),Object(E.c)("a",{href:Ft.a},Object(E.c)(Ht,null,"React Native Upgrade Helper")),Object(E.c)(Kt,{href:"https://github.com/react-native-community/upgrade-helper","data-icon":"octicon-star","data-show-count":"true","aria-label":"Star react-native-community/upgrade-helper on GitHub"},"Star"),Object(E.c)(_t,{handleSettingsChange:function(e){var t=e.reduce((function(e,t){return e[t]=!0,e}),{});v(t)},appName:C,setAppName:x})),Object(E.c)($,{showDiff:function(e){var t=e.fromVersion,n=e.toVersion;t!==n&&(i(t),u(n),h(!0))},showReleaseCandidates:j[T]})),Object(E.c)(Rt,{shouldShowDiff:b,fromVersion:n,toVersion:l,appName:C}))},Gt=function(){return Object(E.c)(Xt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(E.c)(Gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},62:function(e,t,n){"use strict";n.r(t);var o=n(26);t.default=["0.62","0.61","0.60","0.59","0.58","0.57"].map((function(e){return Object(o.a)({},n(228)("./".concat(e)).default,{version:e})}))},68:function(e,t){jest.setMock("../index.js",["0.59","0.58","0.57","0.56"].map((function(e){return{version:e}})))}},[[186,1,2]]]);
//# sourceMappingURL=main.831c6ea9.chunk.js.map