(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{5627:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(27);t.a=Object(o.b)("translations")(function(e){var t=e.t,n=e.i18nKey,o=e.lng,i=e.children;return Object(r.useEffect)(function(){document.title="".concat(t("ui.title")).concat(t("global.titleDelimiter")).concat(t(n))},[o,n]),a.a.createElement(a.a.Fragment,{children:i})})},5632:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return v});var r=n(109),a=n(2),o=n.n(a),i=n(0),l=n.n(i),c="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};var s,u=(function(e){!function(t){var n=function e(t,n,r){if(!c(n)||u(n)||p(n)||f(n)||l(n))return n;var a,o=0,i=0;if(s(n))for(a=[],i=n.length;o<i;o++)a.push(e(t,n[o],r));else for(var m in a={},n)Object.prototype.hasOwnProperty.call(n,m)&&(a[t(m,r)]=e(t,n[m],r));return a},r=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},a=function(e){var t=r(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return function(e,t){var n=(t=t||{}).separator||"_",r=t.split||/(?=[A-Z])/;return e.split(r).join(n)}(e,t).toLowerCase()},i=Object.prototype.toString,l=function(e){return"function"===typeof e},c=function(e){return e===Object(e)},s=function(e){return"[object Array]"==i.call(e)},u=function(e){return"[object Date]"==i.call(e)},p=function(e){return"[object RegExp]"==i.call(e)},f=function(e){return"[object Boolean]"==i.call(e)},m=function(e){return(e-=0)===e},d=function(e,t){var n=t&&"process"in t?t.process:t;return"function"!==typeof n?e:function(t,r){return n(t,e,r)}},h={camelize:r,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(d(r,t),e)},decamelizeKeys:function(e,t){return n(d(o,t),e,t)},pascalizeKeys:function(e,t){return n(d(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=h:t.humps=h}(c)}(s={exports:{}},s.exports),s.exports),p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};var y=!1;try{y=!0}catch(O){}function b(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function g(e){return null===e?null:"object"===("undefined"===typeof e?"undefined":p(e))&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function v(e){var t=e.icon,n=e.mask,a=e.symbol,o=e.className,i=e.title,l=g(t),c=b("classes",[].concat(h(function(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},f(t,"fa-"+e.size,null!==e.size),f(t,"fa-rotate-"+e.rotation,null!==e.rotation),f(t,"fa-pull-"+e.pull,null!==e.pull),t);return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}(e)),h(o.split(" ")))),s=b("transform","string"===typeof e.transform?r.c.transform(e.transform):e.transform),u=b("mask",g(n)),p=Object(r.a)(l,m({},c,s,u,{symbol:a,title:i}));if(!p)return function(){var e;!y&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var d=p.abstract,O={};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(O[t]=e[t])}),A(d[0],O)}v.displayName="FontAwesomeIcon",v.propTypes={border:o.a.bool,className:o.a.string,mask:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),fixedWidth:o.a.bool,inverse:o.a.bool,flip:o.a.oneOf(["horizontal","vertical","both"]),icon:o.a.oneOfType([o.a.object,o.a.array,o.a.string]),listItem:o.a.bool,pull:o.a.oneOf(["right","left"]),pulse:o.a.bool,rotation:o.a.oneOf([90,180,270]),size:o.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o.a.bool,symbol:o.a.oneOfType([o.a.bool,o.a.string]),title:o.a.string,transform:o.a.oneOfType([o.a.string,o.a.object])},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var A=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var a=(n.children||[]).map(e.bind(null,t)),o=Object.keys(n.attributes||{}).reduce(function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=r.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n,r=t.indexOf(":"),a=u.camelize(t.slice(0,r)),o=t.slice(r+1).trim();return a.startsWith("webkit")?e[(n=a,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[a]=o,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[u.camelize(t)]=r}return e},{attrs:{}}),i=r.style,l=void 0===i?{}:i,c=d(r,["style"]);return o.attrs.style=m({},o.attrs.style,l),t.apply(void 0,[n.tag,m({},o.attrs,c)].concat(h(a)))}.bind(null,l.a.createElement)}).call(this,n(35))},5666:function(e,t,n){"use strict";n.r(t);var r=n(103),a=n(104),o=n(107),i=n(105),l=n(106),c=n(0),s=n.n(c),u=n(27),p=n(5627),f=n(111),m=n(15),d=n(28),h=1200,y=700,b=.5,g=.3,v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gwUDQwBXrnRKQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAADElEQVQI12Po6OgAAAM0AZkQj9/uAAAAAElFTkSuQmCC";var A=Object(d.withStyles)(function(e){return{card:Object(f.a)({flex:"0 1 ".concat(h*b,"px"),margin:"0 20px 50px 20px"},e.breakpoints.down("xs"),{flex:"0 1 ".concat(h*g,"px"),margin:"0 0 50px 0"}),media:Object(f.a)({backgroundPositionY:0,height:"".concat(y*b,"px")},e.breakpoints.down("xs"),{height:"".concat(y*g,"px")})}})(function(e){var t=e.classes,n=e.showPanel,r=e.img,a=e.name,o=e.shortDesc;return s.a.createElement(m.e,{className:t.card},s.a.createElement(m.f,{onClick:n},s.a.createElement(m.h,{className:t.media,image:r||v,title:a}),s.a.createElement(m.g,null,s.a.createElement(m.w,{gutterBottom:!0,variant:"h5",component:"h2"},a),s.a.createElement(m.w,{variant:"body2"},o))))}),O=n(66),j=n(43),x=n(5632),E=n(110),w=Object(E.a)(),k={transition:"all 0.15s"},C=function(e){return{href:e,target:"_blank",rel:"noopener noreferrer"}},S=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(a.a)(t,[{key:"componentDidUpdate",value:function(){document.querySelector("html").style.setProperty("overflow-y",this.props.open?"hidden":"auto","important"),w||(document.querySelector("html").style.setProperty("padding-right",this.props.open?"".concat(10,"px"):"0px","important"),document.querySelectorAll("nav")[0].style.setProperty("padding-right",this.props.open?"".concat(10,"px"):"0px","important"))}},{key:"render",value:function(){var e=this.props,t=e.t,n=e.classes,r=e.project,a=void 0===r?{}:r,o=e.hideSelf,i=e.open,l=a.fullDesc,c=a.technologies,u=void 0===c?[]:c,p=a.img,f=a.name,d=a.url,h=a.github;return s.a.createElement(s.a.Fragment,null,i&&s.a.createElement(m.m,{className:n.closeButton,"aria-label":t("ui.close"),onClick:o,style:{}},s.a.createElement(j.b,null)),s.a.createElement(m.j,{anchor:"right",open:i,onClose:o},s.a.createElement("div",{className:n.projectDiv},s.a.createElement("div",{className:n.imgContainer},s.a.createElement("a",C(d),s.a.createElement("img",{src:p,alt:"Screenshot of ".concat(f," project"),className:n.projectImg}))),s.a.createElement("div",{className:n.paddedContent},s.a.createElement(m.w,{variant:"h2",className:n.heading},d?s.a.createElement("a",Object.assign({className:n.link},C(d)),f):{name:f}," ",h?s.a.createElement(m.d,Object.assign({className:n.ghLink},C(h)),s.a.createElement(x.a,{icon:["fas","code"]})):null),s.a.createElement(m.w,{variant:"body1",component:"ul",className:n.techList},u.map(function(e,t){return s.a.createElement("li",{key:t,className:n.listItem},e)})),s.a.createElement(m.w,{variant:"body2",component:"div",className:n.bodyText},l&&l.split(/[\r\n]+/).map(function(e,t){return s.a.createElement("p",{key:t},e)}))))))}}]),t}(s.a.Component),z=Object(u.b)("translations")(Object(d.withStyles)(function(e){return{closeButton:Object(O.a)({borderRadius:0,height:"2em",width:"2em",position:"fixed",background:"rgba(0, 0, 0, 0.3)",color:"rgba(255, 255, 255, 0.8)"},k,{"&:hover":{background:e.palette.primary.main,color:e.palette.secondary.main},zIndex:2e3,top:0,right:0}),projectDiv:{boxSizing:"border-box",maxWidth:"100vw"},imgContainer:{maxWidth:700},projectImg:{width:"100%",height:"auto"},paddedContent:{padding:"0 30px",maxWidth:700,boxSizing:"border-box"},bodyText:{textAlign:"left"},heading:{position:"relative",paddingLeft:"2.5rem"},link:Object(O.a)({color:"inherit",textDecoration:"inherit"},k,{"&:hover":{color:e.palette.secondary.main}}),techList:{paddingLeft:0},listItem:{listStyleType:"none",display:"inline-block","&:not(:first-child)::before":{top:"0.03em",color:e.palette.secondary.main,margin:"0 0.2em",content:'"\u2022"',display:"inline-block",fontWeight:"bold",position:"relative",fontSize:"2em",lineHeight:"0.2em",verticalAlign:"middle"}},ghLink:Object(O.a)({fontSize:"0.8em",float:"right",minWidth:"2.5rem",padding:0},k,{"&:hover":{color:e.palette.secondary.main,background:"inherit"}})}})(S)),N=Object(u.b)("translations")(Object(d.withStyles)(function(e){return{container:{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:300,margin:"0 auto"},formControl:{margin:e.spacing.unit,flex:"0 1 100%",textAlign:"left"},clearFilterButton:{width:48}}})(function(e){var t=e.t,n=e.classes,r=e.technologyFilters,a=e.technologies,o=e.fullOrEmpty,i=function(e){return e.join(t("global.listItemDelimiter"))},l=o?[]:r,c={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null,PaperProps:{style:{maxHeight:224,width:282}}};return s.a.createElement("div",{className:n.container},s.a.createElement(m.k,{className:n.formControl},s.a.createElement(m.o,{htmlFor:"select-multiple-checkbox"},t("ui.filterByTech")),s.a.createElement(m.s,{multiple:!0,value:l,onChange:e.handleChange,input:s.a.createElement(m.n,{id:"select-multiple-checkbox"}),renderValue:i,MenuProps:c,title:i(l)},a.map(function(e){return s.a.createElement(m.r,{key:e,value:e},s.a.createElement(m.i,{checked:r.indexOf(e)>-1&&!o}),s.a.createElement(m.p,{primary:e}))}))),o?null:s.a.createElement(m.m,{className:n.clearFilterButton,"aria-label":t("ui.clearFilters"),onClick:e.clearFilters},s.a.createElement(j.b,null)))})),P=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={technologyFilters:[],projectIsOpen:!1,lastProjectOpened:void 0},n.handleFilterChange=function(e){n.setState({technologyFilters:e.target.value})},n.clearFilters=function(){return n.setState({technologyFilters:[]})},n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"showPanel",value:function(e){this.setState({projectIsOpen:!0,lastProjectOpened:e})}},{key:"hidePanel",value:function(){this.setState({projectIsOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.t,n=t("projects",{returnObjects:!0}),r=Object.keys(n).reduce(function(e,t){return n[t].technologies.forEach(function(t){e.includes(t)||e.push(t)}),e},[]).sort(),a=this.state.technologyFilters,o=r.length===a.length||!a.length;return s.a.createElement(p.a,{i18nKey:"ui.work"},s.a.createElement("section",{style:{width:"100%"}},s.a.createElement(z,{open:this.state.projectIsOpen,project:this.state.lastProjectOpened,hideSelf:function(){return e.hidePanel()}}),s.a.createElement(m.w,{variant:"h1"},t("ui.work")),s.a.createElement(N,{technologies:r,technologyFilters:a,fullOrEmpty:o,clearFilters:this.clearFilters,handleChange:this.handleFilterChange}),s.a.createElement(m.l,{container:!0,direction:"row",justify:"space-evenly",style:{padding:0}},Object.keys(n).reduce(function(t,r){var i=n[r];return(o||i.technologies.some(function(e){return a.includes(e)}))&&t.push(s.a.createElement(A,Object.assign({key:r,showPanel:function(){return e.showPanel(i)}},i))),t},[]))))}}]),t}(s.a.Component);t.default=Object(u.b)("translations")(P)}}]);
//# sourceMappingURL=2.d60ee8de.chunk.js.map