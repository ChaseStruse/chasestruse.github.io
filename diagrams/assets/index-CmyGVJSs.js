const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tour-BjFWENYq.js","assets/tour-CH6n6MU-.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ap="modulepreload",Tp=function(n){return"/diagrams/"+n},yd={},Ti=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(t.map(c=>{if(c=Tp(c),c in yd)return;yd[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":Ap,d||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function Cp(n,e,t,i){if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function Rp(n,e,t,i,s){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var Uo;const vn="__TAURI_TO_IPC_KEY__";function Pp(n,e=!1){return window.__TAURI_INTERNALS__.transformCallback(n,e)}async function ie(n,e={},t){return window.__TAURI_INTERNALS__.invoke(n,e,t)}class Ip{get rid(){return Cp(this,Uo,"f")}constructor(e){Uo.set(this,void 0),Rp(this,Uo,e)}async close(){return ie("plugin:resources|close",{rid:this.rid})}}Uo=new WeakMap;function xn(){return!!(globalThis||window).isTauri}var cn;(function(n){n.WINDOW_RESIZED="tauri://resize",n.WINDOW_MOVED="tauri://move",n.WINDOW_CLOSE_REQUESTED="tauri://close-requested",n.WINDOW_DESTROYED="tauri://destroyed",n.WINDOW_FOCUS="tauri://focus",n.WINDOW_BLUR="tauri://blur",n.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",n.WINDOW_THEME_CHANGED="tauri://theme-changed",n.WINDOW_CREATED="tauri://window-created",n.WEBVIEW_CREATED="tauri://webview-created",n.DRAG_ENTER="tauri://drag-enter",n.DRAG_OVER="tauri://drag-over",n.DRAG_DROP="tauri://drag-drop",n.DRAG_LEAVE="tauri://drag-leave"})(cn||(cn={}));async function wh(n,e){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(n,e),await ie("plugin:event|unlisten",{event:n,eventId:e})}async function Ic(n,e,t){var i;const s=typeof t?.target=="string"?{kind:"AnyLabel",label:t.target}:(i=t?.target)!==null&&i!==void 0?i:{kind:"Any"};return ie("plugin:event|listen",{event:n,target:s,handler:Pp(e)}).then(r=>async()=>wh(n,r))}async function Dp(n,e,t){return Ic(n,i=>{wh(n,i.id),e(i)},t)}async function Lp(n,e){await ie("plugin:event|emit",{event:n,payload:e})}async function Up(n,e,t){await ie("plugin:event|emit_to",{target:typeof n=="string"?{kind:"AnyLabel",label:n}:n,event:e,payload:t})}class Sh{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.width=e[0].Logical.width,this.height=e[0].Logical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toPhysical(e){return new _r(this.width*e,this.height*e)}[vn](){return{width:this.width,height:this.height}}toJSON(){return this[vn]()}}class _r{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.width=e[0].Physical.width,this.height=e[0].Physical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toLogical(e){return new Sh(this.width/e,this.height/e)}[vn](){return{width:this.width,height:this.height}}toJSON(){return this[vn]()}}class Qi{constructor(e){this.size=e}toLogical(e){return this.size instanceof Sh?this.size:this.size.toLogical(e)}toPhysical(e){return this.size instanceof _r?this.size:this.size.toPhysical(e)}[vn](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[vn]()}}class Mh{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.x=e[0].Logical.x,this.y=e[0].Logical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toPhysical(e){return new _i(this.x*e,this.y*e)}[vn](){return{x:this.x,y:this.y}}toJSON(){return this[vn]()}}class _i{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.x=e[0].Physical.x,this.y=e[0].Physical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toLogical(e){return new Mh(this.x/e,this.y/e)}[vn](){return{x:this.x,y:this.y}}toJSON(){return this[vn]()}}class Wr{constructor(e){this.position=e}toLogical(e){return this.position instanceof Mh?this.position:this.position.toLogical(e)}toPhysical(e){return this.position instanceof _i?this.position:this.position.toPhysical(e)}[vn](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[vn]()}}let Np=class No extends Ip{constructor(e){super(e)}static async new(e,t,i){return ie("plugin:image|new",{rgba:Xo(e),width:t,height:i}).then(s=>new No(s))}static async fromBytes(e){return ie("plugin:image|from_bytes",{bytes:Xo(e)}).then(t=>new No(t))}static async fromPath(e){return ie("plugin:image|from_path",{path:e}).then(t=>new No(t))}async rgba(){return ie("plugin:image|rgba",{rid:this.rid}).then(e=>new Uint8Array(e))}async size(){return ie("plugin:image|size",{rid:this.rid})}};function Xo(n){return n==null?null:typeof n=="string"?n:n instanceof Np?n.rid:n}var ml;(function(n){n[n.Critical=1]="Critical",n[n.Informational=2]="Informational"})(ml||(ml={}));class Fp{constructor(e){this._preventDefault=!1,this.event=e.event,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var bd;(function(n){n.None="none",n.Normal="normal",n.Indeterminate="indeterminate",n.Paused="paused",n.Error="error"})(bd||(bd={}));function Fo(){return new Eh(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function xa(){return ie("plugin:window|get_all_windows").then(n=>n.map(e=>new Eh(e,{skip:!0})))}const _a=["tauri://created","tauri://error"];class Eh{constructor(e,t={}){var i;this.label=e,this.listeners=Object.create(null),t?.skip||ie("plugin:window|create",{options:{...t,parent:typeof t.parent=="string"?t.parent:(i=t.parent)===null||i===void 0?void 0:i.label,label:e}}).then(async()=>this.emit("tauri://created")).catch(async s=>this.emit("tauri://error",s))}static async getByLabel(e){var t;return(t=(await xa()).find(i=>i.label===e))!==null&&t!==void 0?t:null}static getCurrent(){return Fo()}static async getAll(){return xa()}static async getFocusedWindow(){for(const e of await xa())if(await e.isFocused())return e;return null}async listen(e,t){return this._handleTauriEvent(e,t)?()=>{const i=this.listeners[e];i.splice(i.indexOf(t),1)}:Ic(e,t,{target:{kind:"Window",label:this.label}})}async once(e,t){return this._handleTauriEvent(e,t)?()=>{const i=this.listeners[e];i.splice(i.indexOf(t),1)}:Dp(e,t,{target:{kind:"Window",label:this.label}})}async emit(e,t){if(_a.includes(e)){for(const i of this.listeners[e]||[])i({event:e,id:-1,payload:t});return}return Lp(e,t)}async emitTo(e,t,i){if(_a.includes(t)){for(const s of this.listeners[t]||[])s({event:t,id:-1,payload:i});return}return Up(e,t,i)}_handleTauriEvent(e,t){return _a.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}async scaleFactor(){return ie("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ie("plugin:window|inner_position",{label:this.label}).then(e=>new _i(e))}async outerPosition(){return ie("plugin:window|outer_position",{label:this.label}).then(e=>new _i(e))}async innerSize(){return ie("plugin:window|inner_size",{label:this.label}).then(e=>new _r(e))}async outerSize(){return ie("plugin:window|outer_size",{label:this.label}).then(e=>new _r(e))}async isFullscreen(){return ie("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ie("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ie("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ie("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ie("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ie("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ie("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ie("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ie("plugin:window|is_closable",{label:this.label})}async isVisible(){return ie("plugin:window|is_visible",{label:this.label})}async title(){return ie("plugin:window|title",{label:this.label})}async theme(){return ie("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ie("plugin:window|is_always_on_top",{label:this.label})}async center(){return ie("plugin:window|center",{label:this.label})}async requestUserAttention(e){let t=null;return e&&(e===ml.Critical?t={type:"Critical"}:t={type:"Informational"}),ie("plugin:window|request_user_attention",{label:this.label,value:t})}async setResizable(e){return ie("plugin:window|set_resizable",{label:this.label,value:e})}async setEnabled(e){return ie("plugin:window|set_enabled",{label:this.label,value:e})}async isEnabled(){return ie("plugin:window|is_enabled",{label:this.label})}async setMaximizable(e){return ie("plugin:window|set_maximizable",{label:this.label,value:e})}async setMinimizable(e){return ie("plugin:window|set_minimizable",{label:this.label,value:e})}async setClosable(e){return ie("plugin:window|set_closable",{label:this.label,value:e})}async setTitle(e){return ie("plugin:window|set_title",{label:this.label,value:e})}async maximize(){return ie("plugin:window|maximize",{label:this.label})}async unmaximize(){return ie("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ie("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ie("plugin:window|minimize",{label:this.label})}async unminimize(){return ie("plugin:window|unminimize",{label:this.label})}async show(){return ie("plugin:window|show",{label:this.label})}async hide(){return ie("plugin:window|hide",{label:this.label})}async close(){return ie("plugin:window|close",{label:this.label})}async destroy(){return ie("plugin:window|destroy",{label:this.label})}async setDecorations(e){return ie("plugin:window|set_decorations",{label:this.label,value:e})}async setShadow(e){return ie("plugin:window|set_shadow",{label:this.label,value:e})}async setEffects(e){return ie("plugin:window|set_effects",{label:this.label,value:e})}async clearEffects(){return ie("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(e){return ie("plugin:window|set_always_on_top",{label:this.label,value:e})}async setAlwaysOnBottom(e){return ie("plugin:window|set_always_on_bottom",{label:this.label,value:e})}async setContentProtected(e){return ie("plugin:window|set_content_protected",{label:this.label,value:e})}async setSize(e){return ie("plugin:window|set_size",{label:this.label,value:e instanceof Qi?e:new Qi(e)})}async setMinSize(e){return ie("plugin:window|set_min_size",{label:this.label,value:e instanceof Qi?e:e?new Qi(e):null})}async setMaxSize(e){return ie("plugin:window|set_max_size",{label:this.label,value:e instanceof Qi?e:e?new Qi(e):null})}async setSizeConstraints(e){function t(i){return i?{Logical:i}:null}return ie("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:t(e?.minWidth),minHeight:t(e?.minHeight),maxWidth:t(e?.maxWidth),maxHeight:t(e?.maxHeight)}})}async setPosition(e){return ie("plugin:window|set_position",{label:this.label,value:e instanceof Wr?e:new Wr(e)})}async setFullscreen(e){return ie("plugin:window|set_fullscreen",{label:this.label,value:e})}async setSimpleFullscreen(e){return ie("plugin:window|set_simple_fullscreen",{label:this.label,value:e})}async setFocus(){return ie("plugin:window|set_focus",{label:this.label})}async setFocusable(e){return ie("plugin:window|set_focusable",{label:this.label,value:e})}async setIcon(e){return ie("plugin:window|set_icon",{label:this.label,value:Xo(e)})}async setSkipTaskbar(e){return ie("plugin:window|set_skip_taskbar",{label:this.label,value:e})}async setCursorGrab(e){return ie("plugin:window|set_cursor_grab",{label:this.label,value:e})}async setCursorVisible(e){return ie("plugin:window|set_cursor_visible",{label:this.label,value:e})}async setCursorIcon(e){return ie("plugin:window|set_cursor_icon",{label:this.label,value:e})}async setBackgroundColor(e){return ie("plugin:window|set_background_color",{color:e})}async setCursorPosition(e){return ie("plugin:window|set_cursor_position",{label:this.label,value:e instanceof Wr?e:new Wr(e)})}async setIgnoreCursorEvents(e){return ie("plugin:window|set_ignore_cursor_events",{label:this.label,value:e})}async startDragging(){return ie("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(e){return ie("plugin:window|start_resize_dragging",{label:this.label,value:e})}async setBadgeCount(e){return ie("plugin:window|set_badge_count",{label:this.label,value:e})}async setBadgeLabel(e){return ie("plugin:window|set_badge_label",{label:this.label,value:e})}async setOverlayIcon(e){return ie("plugin:window|set_overlay_icon",{label:this.label,value:e?Xo(e):void 0})}async setProgressBar(e){return ie("plugin:window|set_progress_bar",{label:this.label,value:e})}async setVisibleOnAllWorkspaces(e){return ie("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:e})}async setTitleBarStyle(e){return ie("plugin:window|set_title_bar_style",{label:this.label,value:e})}async setTheme(e){return ie("plugin:window|set_theme",{label:this.label,value:e})}async onResized(e){return this.listen(cn.WINDOW_RESIZED,t=>{t.payload=new _r(t.payload),e(t)})}async onMoved(e){return this.listen(cn.WINDOW_MOVED,t=>{t.payload=new _i(t.payload),e(t)})}async onCloseRequested(e){return this.listen(cn.WINDOW_CLOSE_REQUESTED,async t=>{const i=new Fp(t);await e(i),i.isPreventDefault()||await this.destroy()})}async onDragDropEvent(e){const t=await this.listen(cn.DRAG_ENTER,o=>{e({...o,payload:{type:"enter",paths:o.payload.paths,position:new _i(o.payload.position)}})}),i=await this.listen(cn.DRAG_OVER,o=>{e({...o,payload:{type:"over",position:new _i(o.payload.position)}})}),s=await this.listen(cn.DRAG_DROP,o=>{e({...o,payload:{type:"drop",paths:o.payload.paths,position:new _i(o.payload.position)}})}),r=await this.listen(cn.DRAG_LEAVE,o=>{e({...o,payload:{type:"leave"}})});return()=>{t(),s(),i(),r()}}async onFocusChanged(e){const t=await this.listen(cn.WINDOW_FOCUS,s=>{e({...s,payload:!0})}),i=await this.listen(cn.WINDOW_BLUR,s=>{e({...s,payload:!1})});return()=>{t(),i()}}async onScaleChanged(e){return this.listen(cn.WINDOW_SCALE_FACTOR_CHANGED,e)}async onThemeChanged(e){return this.listen(cn.WINDOW_THEME_CHANGED,e)}}var wd;(function(n){n.Disabled="disabled",n.Throttle="throttle",n.Suspend="suspend"})(wd||(wd={}));var Sd;(function(n){n.Default="default",n.FluentOverlay="fluentOverlay"})(Sd||(Sd={}));var Md;(function(n){n.AppearanceBased="appearanceBased",n.Light="light",n.Dark="dark",n.MediumLight="mediumLight",n.UltraDark="ultraDark",n.Titlebar="titlebar",n.Selection="selection",n.Menu="menu",n.Popover="popover",n.Sidebar="sidebar",n.HeaderView="headerView",n.Sheet="sheet",n.WindowBackground="windowBackground",n.HudWindow="hudWindow",n.FullScreenUI="fullScreenUI",n.Tooltip="tooltip",n.ContentBackground="contentBackground",n.UnderWindowBackground="underWindowBackground",n.UnderPageBackground="underPageBackground",n.Mica="mica",n.Blur="blur",n.Acrylic="acrylic",n.Tabbed="tabbed",n.TabbedDark="tabbedDark",n.TabbedLight="tabbedLight"})(Md||(Md={}));var Ed;(function(n){n.FollowsWindowActiveState="followsWindowActiveState",n.Active="active",n.Inactive="inactive"})(Ed||(Ed={}));const ya=120,Ad=120,Td=70,Cd=70,es=n=>Math.ceil(n/10)*10;function kp(n){const e=structuredClone(n),t=new Map(e.nodes.map(a=>[a.id,a])),i=new Map;for(const a of e.nodes){const l=i.get(a.parentId)??[];l.push(a),i.set(a.parentId,l)}const s=(a,l)=>{let c=t.get(a);const d=new Set;for(;c&&c.parentId!==l;){if(d.has(c.id))throw Error("Layout cannot contain a boundary cycle");d.add(c.id),c=c.parentId?t.get(c.parentId):void 0}return c?.id},r=new Set,o=a=>{const l=i.get(a?.id)??[];if(a){if(r.has(a.id))throw Error("Boundary cycle");r.add(a.id)}for(const _ of l)_.kind==="group"&&o(_);if(!l.length){a&&r.delete(a.id);return}const c=new Map(l.map(_=>[_.id,new Set])),d=new Map(l.map(_=>[_.id,0]));for(const _ of e.edges){const P=s(_.source,a?.id),E=s(_.target,a?.id);P&&E&&P!==E&&!c.get(P)?.has(E)&&(c.get(P)?.add(E),d.set(E,(d.get(E)??0)+1))}const u=new Map(l.map(_=>[_.id,0])),h=l.filter(_=>!d.get(_.id)).map(_=>_.id).sort(),f=new Set;for(let _=0;_<h.length;_++){const P=h[_];if(P){f.add(P);for(const E of c.get(P)??[])u.set(E,Math.max(u.get(E)??0,(u.get(P)??0)+1)),d.set(E,(d.get(E)??0)-1),d.get(E)||h.push(E)}}const g=Math.max(0,...u.values())+1;for(const _ of l)f.has(_.id)||u.set(_.id,g);const v=new Map;for(const _ of l){const P=u.get(_.id)??0,E=v.get(P)??[];E.push(_),v.set(P,E)}let m=0,p=0;for(const[,_]of[...v].sort((P,E)=>P[0]-E[0])){_.sort((y,S)=>y.id.localeCompare(S.id));const P=Math.max(1,Math.ceil(Math.sqrt(_.length))),E=Math.max(..._.map(y=>y.width));let C=0;for(let y=0;y<_.length;y+=P){const S=_.slice(y,y+P),I=Math.max(...S.map(T=>T.depth));for(const[T,G]of S.entries())G.x=es(m+T*(E+ya)+E/2),G.z=es(C+I/2);C+=I+Ad}m+=P*(E+ya),p=Math.max(p,C-Ad)}const b=m-ya,w=p;for(const _ of l)_.x=es(_.x-b/2),_.z=es(_.z-w/2+Cd/2);a&&(a.width=es(b+Td*2),a.depth=es(w+Td*2+Cd),r.delete(a.id))};o();for(const a of e.edges)delete a.bend,delete a.sourcePort,delete a.targetPort,delete a.routing;return e}function Op(n){const e=kp(n);return{type:"graph",label:"Automatic layout",nodes:e.nodes.map(t=>({id:t.id,value:t})),edges:e.edges.map(t=>({id:t.id,value:t}))}}const Tr={protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"};function Ah(n){if(!n||typeof n!="object"||Array.isArray(n))throw Error("Invalid network settings");return n}function Is(n){const e=n.split(".");if(e.length!==4||e.some(t=>!/^\d{1,3}$/.test(t)||Number(t)>255))throw Error("Enter a valid IPv4 address");return e.reduce((t,i)=>t*256+Number(i)>>>0,0)}function Th(n){const[e,t,...i]=n.split("/");if(!e||t===void 0||!/^\d{1,2}$/.test(t)||Number(t)>32||i.length)throw Error("Enter a valid IPv4 CIDR");return{address:Is(e),mask:Number(t)===0?0:4294967295<<32-Number(t)>>>0}}function Ch(n){if(typeof n!="number"||!Number.isInteger(n)||n<1||n>65535)throw Error("Port must be 1–65535");return n}function Cr(n){const e=Ah(n);if(!["tcp","udp","icmp"].includes(String(e.protocol))||!["ingress","egress"].includes(String(e.direction))||typeof e.sourceIp!="string")throw Error("Invalid journey traffic");return Is(e.sourceIp),{protocol:e.protocol,port:Ch(e.port),sourceIp:e.sourceIp,direction:e.direction}}function Rh(n){const e=Ah(n);if(!["allow","deny"].includes(String(e.action))||!["any","tcp","udp","icmp"].includes(String(e.protocol))||!["any","ingress","egress"].includes(String(e.direction)))throw Error("Invalid connection rule");const t={action:e.action,protocol:e.protocol,direction:e.direction};if(e.port!==void 0&&(t.port=Ch(e.port)),e.sourceCidr!==void 0){if(typeof e.sourceCidr!="string")throw Error("Invalid source CIDR");Th(e.sourceCidr),t.sourceCidr=e.sourceCidr}return t}function Ph(n,e){if(!n)return{allowed:!0,reason:"No traffic restriction"};if(n.action==="deny")return{allowed:!1,reason:"Explicit deny"};if(n.protocol!=="any"&&n.protocol!==e.protocol)return{allowed:!1,reason:`Requires ${n.protocol.toUpperCase()}`};if(n.direction!=="any"&&n.direction!==e.direction)return{allowed:!1,reason:`Requires ${n.direction}`};if(n.port!==void 0&&e.protocol!=="icmp"&&n.port!==e.port)return{allowed:!1,reason:`Requires port ${n.port}`};if(n.sourceCidr){const{address:t,mask:i}=Th(n.sourceCidr);if((Is(e.sourceIp)&i)!==(t&i))return{allowed:!1,reason:`Source outside ${n.sourceCidr}`}}return{allowed:!0,reason:"Traffic allowed"}}const ko=n=>{if(!n||typeof n!="object"||Array.isArray(n))throw Error("Expected network settings object");return n};function Rr(n,e){const[t,i,...s]=n.split("/");if(!t||i===void 0||!/^\d{1,2}$/.test(i)||Number(i)>32||s.length)throw Error("Invalid IPv4 CIDR");const r=Number(i)===0?0:4294967295<<32-Number(i)>>>0;return(Is(t)&r)===(Is(e)&r)}function wi(n){if(typeof n!="string"||!n||n.length>4e3)throw Error("Invalid network value");return n}function Ih(n){if(!Array.isArray(n)||n.length>2e3)throw Error("Invalid network list");return n.map(wi)}function Rd(n){if(typeof n!="number"||!Number.isInteger(n)||n<0||n>65535)throw Error("Invalid port range");return n}function Dh(n){const e=ko(n);if(!["aws","compose","generic"].includes(String(e.model)))throw Error("Invalid network model");const t={model:e.model};for(const i of["ip","publicIp"])e[i]!==void 0&&(t[i]=wi(e[i]),Is(t[i]));if(e.cidr!==void 0&&(t.cidr=wi(e.cidr),Rr(t.cidr,"0.0.0.0")),e.exposure!==void 0){if(!["public","private","unknown"].includes(String(e.exposure)))throw Error("Invalid public address setting");t.exposure=e.exposure}for(const i of["securityGroupIds","networkIds","incomplete"])e[i]!==void 0&&(t[i]=Ih(e[i]));for(const i of["routeTableId","networkAclId"])e[i]!==void 0&&(t[i]=wi(e[i]));return t}function Lh(n){const e=ko(n),t=e.incomplete!==void 0?{incomplete:Ih(e.incomplete)}:{};if(e.kind==="route-table"){if(!Array.isArray(e.routes)||e.routes.length>2e3)throw Error("Invalid routes");return{kind:"route-table",...t,routes:e.routes.map(r=>{const o=ko(r),a=wi(o.destination);return Rr(a,"0.0.0.0"),{destination:a,target:wi(o.target)}})}}if(e.kind!=="security-group"&&e.kind!=="network-acl")throw Error("Invalid resource policy");if(!Array.isArray(e.rules)||e.rules.length>2e3)throw Error("Invalid firewall rules");const i=new Set,s=e.rules.map(r=>{const o=ko(r);if(!["ingress","egress"].includes(String(o.direction))||!["allow","deny"].includes(String(o.action))||!["any","tcp","udp","icmp"].includes(String(o.protocol)))throw Error("Invalid firewall rule");if(e.kind==="security-group"&&o.action!=="allow")throw Error("Security groups only support allow rules");const a={action:o.action,direction:o.direction,protocol:o.protocol};if(o.fromPort!==void 0&&(a.fromPort=Rd(o.fromPort)),o.toPort!==void 0&&(a.toPort=Rd(o.toPort)),a.fromPort===void 0!=(a.toPort===void 0)||(a.fromPort??0)>(a.toPort??65535))throw Error("Invalid port range");if(o.cidr!==void 0&&(a.cidr=wi(o.cidr),Rr(a.cidr,"0.0.0.0")),o.peerGroupId!==void 0&&(a.peerGroupId=wi(o.peerGroupId)),a.cidr&&a.peerGroupId)throw Error("Choose CIDR or security-group peer");if(e.kind==="network-acl"){if(a.peerGroupId||typeof o.priority!="number"||!Number.isInteger(o.priority)||o.priority<1||o.priority>32766)throw Error("ACL rules need a priority from 1–32766 and a CIDR peer");a.priority=o.priority;const l=`${a.direction}:${a.priority}`;if(i.has(l))throw Error("Duplicate ACL priority");i.add(l)}return a});return{kind:e.kind,rules:s,...t}}const Zn=n=>({status:"allowed",reason:n}),Qt=n=>({status:"denied",reason:n}),Tt=n=>({status:"unknown",reason:n});function hi(n,e,t){let i=e;const s=new Set;for(;i&&!s.has(i.id);){if(i.boundary===t)return i;s.add(i.id),i=i.parentId?n.get(i.parentId):void 0}}function Pd(n,e,t,i,s,r){return n.direction!==e||n.protocol!=="any"&&n.protocol!==t.protocol||t.protocol!=="icmp"&&n.protocol!=="any"&&n.fromPort!==void 0&&(i<n.fromPort||i>(n.toPort??n.fromPort))?!1:n.peerGroupId?r.includes(n.peerGroupId):n.cidr?n.cidr.endsWith("/0")?!0:s?Rr(n.cidr,s):void 0:!0}const Uh=n=>new Map(n.nodes.map(e=>[e.id,e]));function $o(n,e,t,i,s=49152,r=Uh(n)){const o=r.get(e),a=r.get(t),l=[];let c=[e,t];const d=C=>({...C,path:c,checks:l});if(!o||!a)return d(Tt("Source or destination no longer exists"));if(e===t)return d(Zn("Same resource"));if(!o.network&&!a.network)return d(Tt("Enable resource networking; diagram arrows alone do not establish reachability"));const u=hi(r,o,"vpc"),h=hi(r,a,"vpc"),f=hi(r,o,"subnet"),g=hi(r,a,"subnet"),v=o.network?.ip??(u?void 0:i.sourceIp),m=a.network?.ip??a.network?.publicIp,p=(C,y,S,I,T=!0)=>{const G=C.network?.securityGroupIds;if(!G?.length)return C.network?.model==="aws"&&!C.policy&&!C.serviceId?.startsWith("component.")?Tt(`${C.label}: security groups are not modeled`):Zn(`${C.label}: no security-group restriction modeled`);let N=!1;for(const V of G){const O=r.get(V),F=O?.policy;if(O?.network?.incomplete?.length){N=!0;continue}if(!F||F.kind!=="security-group"){N=!0;continue}N||=!!F.incomplete?.length;for(const z of F.rules){const J=Pd(z,y,i,i.port,I,T?S.network?.securityGroupIds??[]:[]);if(J)return Zn(`${C.label}: ${y} allowed by ${r.get(V)?.label}`);J===void 0&&(N=!0)}}return N?Tt(`${C.label}: incomplete ${y} security-group rules or peer address`):Qt(`${C.label}: no ${y} security-group allow rule`)};if(o.network?.model==="compose"&&a.network?.model==="compose"){if(o.network.incomplete?.length||a.network.incomplete?.length)return d(Tt("Compose network attachments are incomplete"));const C=(o.network.networkIds??[]).filter(S=>a.network?.networkIds?.includes(S));if(!C.length)return d(Qt("Containers have no shared network"));c=[e,C[0]??"",t];const y=[p(o,"egress",a,m),p(a,"ingress",o,v)];return l.push("Containers share a Compose network",...y.map(S=>`${S.status}: ${S.reason}`)),d(y.find(S=>S.status==="denied")??y.find(S=>S.status==="unknown")??Zn("Shared Compose network and attached policies allow traffic"))}const b=(C,y,S,I,T)=>{if(!C?.network?.networkAclId)return Zn(`${C?.label??"External network"}: no ACL restriction modeled (default allow assumed)`);const G=r.get(C.network.networkAclId),N=G?.policy;if(!N||N.kind!=="network-acl"||N.incomplete?.length||G?.network?.incomplete?.length)return Tt(`${C.label}: incomplete network ACL`);for(const V of[...N.rules].sort((O,F)=>(O.priority??0)-(F.priority??0))){const O=Pd(V,y,i,I,S,[]);if(O===void 0)return Tt(`${C.label}: ACL peer address unknown`);if(O)return(V.action==="allow"?Zn:Qt)(`${C.label}: ${T?"return ":""}${y} ACL rule ${V.priority} ${V.action}`)}return Qt(`${C.label}: ${T?"return ":""}${y} ACL implicit deny`)},w=(C,y,S,I=new Set)=>{if(I.has(C.id))return{check:Qt("Routing loop"),path:[C.id]};I.add(C.id);const T=hi(r,C,"vpc"),G=hi(r,C,"subnet");if(!y)return{check:Tt("Destination IPv4 address is unknown"),path:[C.id,S.id]};if(T&&!T.network?.cidr)return{check:Tt("VPC CIDR is missing; the implicit local route cannot be resolved"),path:[C.id,S.id]};const N=G?.network?.routeTableId?r.get(G.network.routeTableId):void 0;if(N?.policy?.incomplete?.length||N?.network?.incomplete?.length)return{check:Tt(`Incomplete routes in ${N.label}`),path:[C.id,S.id]};const V=N?.policy?.kind==="route-table"?[...N.policy.routes]:[];T?.network?.cidr&&V.push({destination:T.network.cidr,target:"local"});const O=V.filter(z=>Rr(z.destination,y)).sort((z,J)=>Number(J.destination.split("/")[1])-Number(z.destination.split("/")[1]))[0];if(!O)return{check:T?Qt(`${G?.label??T.label}: no route to ${y}`):Tt("External routing is not modeled"),path:[C.id,S.id]};if(l.push(`${G?.label??C.label}: longest-prefix route ${O.destination} → ${O.target}`),O.target==="blackhole")return{check:Qt("Route is a blackhole"),path:[C.id,S.id]};if(O.target==="local")return T?.id!==hi(r,S,"vpc")?.id?{check:Qt("Local route does not reach the destination VPC"),path:[C.id,S.id]}:{check:Zn("Local VPC route"),path:[C.id,S.id]};const F=r.get(O.target);if(!F)return{check:Tt("Route target missing"),path:[C.id,S.id]};if(F.network?.incomplete?.length)return{check:Tt(`Incomplete gateway settings: ${F.label}`),path:[C.id,F.id,S.id]};if(F.serviceId==="component.internet-gateway")return hi(r,F,"vpc")?.id!==T?.id?{check:Qt("Internet gateway is not attached to this VPC"),path:[C.id,F.id,S.id]}:{check:Zn("Internet gateway route"),path:[C.id,F.id,S.id]};if(F.serviceId==="component.nat-gateway"){const z=w(F,y,S,I);return z.check.status!=="allowed"?{check:z.check,path:[C.id,...z.path]}:z.path.some(J=>r.get(J)?.serviceId==="component.internet-gateway")?{check:z.check,path:[C.id,...z.path]}:{check:Qt("NAT has no onward internet-gateway route"),path:[C.id,...z.path]}}return{check:Tt(`Unsupported route target: ${F.label}`),path:[C.id,F.id,S.id]}},_=[];if([o,a,f,g,u,h].some(C=>C?.network?.incomplete?.length)&&_.push(Tt("Resource network contains unresolved infrastructure values")),(o.network?.model==="aws"&&!u||a.network?.model==="aws"&&!h)&&_.push(Tt("An AWS endpoint has no modeled VPC/subnet placement")),!u&&h){a.network?.exposure==="private"?_.push(Qt("Destination has no public address; internet ingress cannot use NAT")):a.network?.exposure!=="public"&&!a.network?.publicIp&&_.push(Tt("Destination public-address assignment is unknown"));const C=w(a,v,o);c=[e,...C.path.slice(1,-1).reverse(),t],_.push(C.check),C.check.status==="allowed"&&!C.path.some(y=>r.get(y)?.serviceId==="component.internet-gateway")&&_.push(Qt("Public ingress needs an internet-gateway return route")),C.path.some(y=>r.get(y)?.serviceId==="component.nat-gateway")&&_.push(Qt("NAT does not allow unsolicited public ingress"))}else if(u){const C=w(o,m,a);c=C.path,_.push(C.check),h&&u.id===h.id&&_.push(w(a,v,o).check),h&&u.id!==h.id&&_.push(Tt("Cross-VPC routing is not supported")),!h&&c.some(y=>r.get(y)?.serviceId==="component.internet-gateway")&&!c.some(y=>r.get(y)?.serviceId==="component.nat-gateway")&&o.network?.exposure!=="public"&&!o.network?.publicIp&&_.push((o.network?.exposure==="private"?Qt:Tt)("Internet-gateway egress requires a public address or NAT"))}else _.push(Tt("No supported network topology between these resources"));const P=c.find(C=>r.get(C)?.serviceId==="component.nat-gateway"),E=P?r.get(P)?.network?.publicIp:v;return _.push(p(o,"egress",a,m),p(a,"ingress",o,E,!P)),(!f||f.id!==g?.id)&&_.push(b(f,"egress",m,i.port,!1),b(g,"ingress",E,i.port,!1),b(g,"egress",E,s,!0),b(f,"ingress",m,s,!0)),l.push(..._.map(C=>`${C.status}: ${C.reason}`)),d(_.find(C=>C.status==="denied")??_.find(C=>C.status==="unknown")??Zn("Routes, security groups, and request/return ACL rules allow this modeled flow"))}const gl=[{id:"public-https",name:"Public HTTPS",traffic:{protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"}},{id:"office-ssh",name:"SSH from office",traffic:{protocol:"tcp",port:22,sourceIp:"198.51.100.10",direction:"ingress"}},{id:"worker-egress",name:"Worker egress",traffic:{protocol:"tcp",port:443,sourceIp:"10.0.10.10",direction:"egress"}}],zp={duration:12,dither:!0};function Nh(n){if(!Number.isInteger(n.duration)||n.duration<2||n.duration>120||typeof n.dither!="boolean")throw Error("GIF duration must be a whole number from 2 to 120 seconds");return{...n}}class Bp{constructor(e,t,i,s=750,r=5e3){this.snapshot=e,this.write=t,this.onError=i,this.delay=s,this.maxWait=r}snapshot;write;onError;delay;maxWait;debounce;deadline;pending=!1;queue=Promise.resolve();schedule(){this.pending=!0,clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.flush().catch(()=>{})},this.delay),this.deadline??=setTimeout(()=>{this.flush().catch(()=>{})},this.maxWait)}flush(){if(clearTimeout(this.debounce),clearTimeout(this.deadline),this.debounce=void 0,this.deadline=void 0,this.pending){this.pending=!1;const e=this.snapshot();this.queue=this.queue.then(()=>this.write(e)).catch(i=>{throw this.pending=!0,this.onError(i),i});const t=this.queue;return this.queue=t.catch(()=>{}),t}return this.queue}dispose(){clearTimeout(this.debounce),clearTimeout(this.deadline)}}function Dc(){return xn()}async function Gp(){if(xn())return ie("open_document");const[n]=await Fh(".json,application/json",!1);if(!n)return null;if(n.size>5e7)throw Error("Diagram files are limited to 50 MB");return{name:n.name,content:await n.text()}}async function Vp(n,e,t="diagram"){if(xn())return ie("save_document",{content:n,handle:e??null});const i=`${Jp(t)}.sforge.json`;return $s(new Blob([n],{type:"application/json"}),i),{name:i}}async function Hp(n){return xn()?ie("export_png",{bytes:Array.from(new Uint8Array(await n.arrayBuffer()))}):$s(n,"diagram.png")}async function Wp(n){return xn()?ie("export_svg",{content:n}):$s(new Blob([n],{type:"image/svg+xml"}),"diagram.svg")}const vl="solar-forge-diagrams:recovery";async function Xp(){if(xn())return ie("read_recovery");try{return localStorage.getItem(vl)}catch{return null}}async function xl(n){if(xn()){await ie("write_recovery",{content:n});return}n===null?localStorage.removeItem(vl):localStorage.setItem(vl,n)}async function $p(n){if(xn()){await ie("copy_png",{bytes:Array.from(new Uint8Array(await n.arrayBuffer()))});return}await navigator.clipboard.write([new ClipboardItem({"image/png":n})])}async function qp(n){return xn()?ie("export_gif",await n.arrayBuffer()):$s(n,"journey.gif")}async function Yp(){if(xn())return ie("open_infrastructure");const n=await Fh(".tf,.json,.yaml,.yml",!0);if(n.length>256||n.reduce((e,t)=>e+t.size,0)>5e7)throw Error("Choose up to 256 files totaling at most 50 MB");return Promise.all(n.map(async e=>({name:e.name,content:await e.text()})))}function Fh(n,e){return new Promise(t=>{const i=document.createElement("input");i.type="file",i.multiple=e,i.accept=n,i.onchange=()=>{t(Array.from(i.files??[])),i.remove()},i.oncancel=()=>{t([]),i.remove()},i.hidden=!0,document.body.append(i),i.click()})}async function jp(n,e){return xn()?ie("export_video",await n.arrayBuffer()):$s(n,`journey.${e}`)}async function Zp(n,e){return xn()?ie("export_text",{content:n,format:e}):$s(new Blob([n],{type:"text/plain;charset=utf-8"}),`diagram.${e}`)}function Jp(n){return n.trim().replace(/[\\/:*?"<>|\p{Cc}]+/gu,"-").replace(/\s+/g," ").slice(0,100)||"diagram"}function $s(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");return i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),!0}function kh(n,e,t){return new Promise(i=>{const s=document.createElement("dialog");s.className="decision-dialog";const r=document.createElement("h2");r.textContent=n,r.id="dialog-title";const o=document.createElement("p");o.textContent=e;const a=document.createElement("div");a.className="dialog-actions";for(const l of t){const c=document.createElement("button");c.textContent=l,c.onclick=()=>s.close(l),a.append(c)}s.append(r,o,a),s.setAttribute("aria-labelledby",r.id),s.addEventListener("close",()=>{i(s.returnValue||null),s.remove()},{once:!0}),document.body.append(s),s.showModal()})}function Kp(n,e){return new Promise(t=>{const i=document.createElement("dialog");i.className="decision-dialog";const s=document.createElement("h2");s.textContent=n;const r=document.createElement("form");r.method="dialog";const o=document.createElement("input");o.value=e,o.maxLength=1e3,o.setAttribute("aria-label",n);const a=document.createElement("button");a.textContent="Cancel",a.type="button",a.onclick=()=>i.close();const l=document.createElement("button");l.textContent="Rename",l.type="submit";const c=document.createElement("div");c.className="dialog-actions",c.append(a,l),r.append(o,c),r.onsubmit=()=>{i.returnValue=o.value},i.append(s,r),document.body.append(i),i.onclose=()=>{t(i.returnValue||null),i.remove()},i.showModal(),o.focus(),o.select()})}function Qp(n){const e=document.createElement("dialog");e.className="decision-dialog command-palette",e.setAttribute("aria-label","Command palette");const t=document.createElement("input");t.type="search",t.placeholder="Search commands or components…",t.setAttribute("aria-label","Search commands");const i=document.createElement("div");i.className="command-results";const s=()=>{i.replaceChildren();for(const r of n.filter(o=>o.label.toLowerCase().includes(t.value.toLowerCase())).slice(0,30)){const o=document.createElement("button");o.textContent=r.label,o.onclick=()=>{e.close(),r.run()},i.append(o)}};t.oninput=s,e.onkeydown=r=>{const o=[...i.querySelectorAll("button")],a=document.activeElement instanceof HTMLButtonElement?o.indexOf(document.activeElement):-1;(r.key==="ArrowDown"||r.key==="ArrowUp")&&(r.preventDefault(),o[(a+(r.key==="ArrowDown"?1:o.length-1)+o.length)%o.length]?.focus()),r.key==="Enter"&&document.activeElement===t&&(r.preventDefault(),o[0]?.click())},e.append(t,i),e.onclose=()=>e.remove(),document.body.append(e),s(),e.showModal(),t.focus()}function em(n,e,t){return t?.aborted?Promise.reject(new DOMException("Import cancelled","AbortError")):new Promise((i,s)=>{const r=new Worker(new URL("/diagrams/assets/import-worker-CICkPaiT.js",import.meta.url),{type:"module"});function o(){r.terminate(),t?.removeEventListener("abort",a)}function a(){o(),s(new DOMException("Import cancelled","AbortError"))}t?.addEventListener("abort",a,{once:!0}),r.onmessage=l=>{o(),l.data.result?i(l.data.result):s(Error(l.data.error??"Import worker returned no diagram"))},r.onerror=l=>{o(),s(Error(l.message||"Infrastructure import worker failed"))},r.onmessageerror=()=>{o(),s(Error("Could not read infrastructure import result"))};try{r.postMessage({files:n,requested:e})}catch(l){o(),s(l)}})}function tm(n){const e=document.createElement("section");e.className="workspace-dialog",e.hidden=!0,e.setAttribute("aria-label","Import infrastructure"),e.innerHTML='<div class="dialog-heading"><h2>Import infrastructure</h2><button data-close aria-label="Close import">×</button></div><p>Choose .tf files together, or a Terraform JSON, CloudFormation, or Compose file. Files stay on this computer; code is never executed.</p><label>Format<select data-format><option value="auto">Detect format</option><option value="terraform">Terraform HCL / show JSON</option><option value="cloudformation">CloudFormation YAML / JSON</option><option value="compose">Docker Compose</option></select></label><button data-files>Choose files…</button><p data-names>No files selected</p><label>Or paste infrastructure code<textarea data-source rows="9" spellcheck="false" placeholder="Paste code here; use Format to select Terraform for pasted HCL"></textarea></label><button data-preview>Preview import</button><div data-summary role="status"></div><ul data-warnings></ul><div class="dialog-actions"><button data-apply disabled>Import diagram</button></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),i=b=>{const w=e.querySelector(b);if(!w)throw Error("Missing importer control");return w},s=i("[data-source]"),r=i("[data-format]"),o=i("[data-apply]"),a=i("[data-summary]"),l=i("[data-warnings]");let c=[],d,u=!1,h,f=0;const g=()=>{f++,h?.abort(),h=void 0,i("[data-preview]").disabled=!1,d=void 0,o.disabled=!0,a.textContent="",l.replaceChildren()},v=b=>{a.textContent=String(b),n.notify(String(b))};s.oninput=()=>{c=[],i("[data-names]").textContent="Pasted code",g()},r.onchange=g;const m=async()=>{if(u)return;g();const b=new AbortController;h=b;const w=f;i("[data-preview]").disabled=!0,a.textContent="Reading infrastructure…";try{const _=s.value.trim()?[{name:(r.value==="terraform"||r.value==="auto"&&/^\s*(resource|provider|variable|terraform|locals)\b/m.test(s.value))&&!s.value.trimStart().startsWith("{")?"pasted.tf":"pasted.yaml",content:s.value}]:c,P=await em(_,r.value,b.signal);if(b.signal.aborted||w!==f)return;d=P,a.textContent=`${d.format} · ${d.document.nodes.filter(E=>E.kind!=="group").length} resources · ${d.document.nodes.filter(E=>E.kind==="group").length} boundaries · ${d.warnings.length} warnings. Import replaces the current board with an automatically laid out diagram; Undo restores it.`;for(const E of d.warnings.slice(0,200)){const C=document.createElement("li");C.textContent=E,l.append(C)}if(d.warnings.length>200){const E=document.createElement("li");E.textContent="Additional warnings omitted from this preview.",l.append(E)}o.disabled=!1}catch(_){!b.signal.aborted&&w===f&&v(_)}finally{h===b&&(h=void 0,i("[data-preview]").disabled=!1)}};i("[data-files]").onclick=()=>{u||(async()=>{try{const b=await Yp();if(!b.length)return;c=b,s.value="",i("[data-names]").textContent=c.map(w=>w.name).join(", "),await m()}catch(b){v(b)}})()},i("[data-preview]").onclick=()=>{m()},o.onclick=()=>{!d||u||(u=!0,n.apply(d.document).then(b=>{b&&(e.hidden=!0,t&&(t.inert=!1))}).catch(v).finally(()=>{u=!1}))};const p=()=>{u||(g(),e.hidden=!0,t&&(t.inert=!1))};return i("[data-close]").onclick=p,e.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Escape"&&(b.stopPropagation(),p())}),{open:()=>{e.hidden=!1,t&&(t.inert=!0),r.focus()},close:p}}const nm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%230d9488'%20fill='%230d9488'%3e%3cpath%20d='m32%205%2025%2014v28L32%2061%207%2047V19Zm0%206L13%2022l19%2011%2019-11ZM12%2027v17l17%2010V37Zm23%2010v17l17-10V27Z'/%3e%3c/svg%3e",im="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23326ce5'%20fill='%23326ce5'%3e%3crect%20x='5'%20y='16'%20width='54'%20height='34'%20rx='3'/%3e%3cpath%20d='M14%2023v20m9-20v20m9-20v20m9-20v20m9-20v20'%20stroke='white'%20stroke-width='3'/%3e%3c/svg%3e",sm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%232496ed'%20fill='%232496ed'%3e%3cpath%20d='M8%2030h45c-2%2017-13%2023-25%2019C17%2047%2011%2040%208%2030Z'/%3e%3cpath%20d='M52%2030c8%200%2010-6%208-10-5%200-7%203-8%2010Z'/%3e%3cpath%20d='M14%2020h8v8h-8zm10%200h8v8h-8zm10%200h8v8h-8zm-10-10h8v8h-8zm10%200h8v8h-8zm0-10h8v8h-8z'/%3e%3c/svg%3e",rm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d97706'%20fill='%23d97706'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",om="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23f05032'%20fill='%23f05032'%3e%3cpath%20d='m32%202%2030%2030-30%2030L2%2032Z'/%3e%3cpath%20d='m20%2020%2023%2023M28%2028v20'%20stroke='white'%20stroke-width='4'/%3e%3cg%20fill='white'%3e%3ccircle%20cx='20'%20cy='20'%20r='4'/%3e%3ccircle%20cx='43'%20cy='43'%20r='4'/%3e%3ccircle%20cx='28'%20cy='48'%20r='4'/%3e%3c/g%3e%3c/svg%3e",am="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%2324292f'%20fill='%2324292f'%3e%3crect%20x='1'%20y='1'%20width='62'%20height='62'%20rx='8'%20fill='%23f6f8fa'/%3e%3ccircle%20cx='15'%20cy='17'%20r='10'/%3e%3crect%20x='37'%20y='7'%20width='23'%20height='20'%20rx='4'/%3e%3crect%20x='37'%20y='37'%20width='23'%20height='20'%20rx='4'/%3e%3cpath%20d='M25%2017h12M15%2027v20h22'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='m44%2017%204%204%207-8m-11%2034%204%204%207-8'%20stroke='white'%20fill='none'%20stroke-width='3'/%3e%3c/svg%3e",lm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%238c4fff'%20fill='%238c4fff'%3e%3cpath%20d='M8%2057V7h48v50H44V20H20v37Z'/%3e%3cpath%20d='M3%2038h58m-9-9%209%209-9%209'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",cm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23c084fc'%20fill='%23c084fc'%3e%3crect%20x='4'%20y='8'%20width='56'%20height='48'%20rx='5'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M12%2023h38m-8-8%208%208-8%208M52%2042H14m8-8-8%208%208%208'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",dm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d9534f'%20fill='%23d9534f'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",um="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%237c3aed'%20fill='%237c3aed'%3e%3cpath%20d='M12%2032h40'%20stroke='currentColor'%20stroke-width='5'/%3e%3crect%20x='2'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3crect%20x='42'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3cpath%20d='m26%2014%2014%2018-14%2018'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",hm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23059669'%20fill='%23059669'%3e%3crect%20x='5'%20y='7'%20width='54'%20height='50'%20rx='4'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M5%2023h54M5%2039h54M25%207v50'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",fm="/diagrams/assets/deployment-moDm8Qno.svg",pm="/diagrams/assets/ingress-LIwjGSQ0.svg",mm="/diagrams/assets/namespace-DnbgsEPO.svg",gm="/diagrams/assets/pod-W3FHC1RA.svg",vm="/diagrams/assets/service-lXPCicat.svg",xm="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%235a6b86'/%3e%3cg%20fill='none'%20stroke='%23fff'%20stroke-width='2.6'%3e%3ccircle%20cx='32'%20cy='32'%20r='17'/%3e%3cellipse%20cx='32'%20cy='32'%20rx='7.5'%20ry='17'/%3e%3cpath%20d='M15%2032h34M18%2023h28M18%2041h28'/%3e%3c/g%3e%3c/svg%3e",_m="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%233f8cff'/%3e%3ccircle%20cx='32'%20cy='23'%20r='9'%20fill='none'%20stroke='%23fff'%20stroke-width='3'/%3e%3cpath%20d='M15%2050c0-9.4%207.6-15%2017-15s17%205.6%2017%2015'%20fill='none'%20stroke='%23fff'%20stroke-width='3'%20stroke-linecap='round'/%3e%3c/svg%3e",ym=[["Analytics","#8c4fff",[["clean-rooms","Clean Rooms","aws"],["data-exchange","Data Exchange","aws"],["datazone","DataZone","amazon"],["emr","EMR","amazon","elastic mapreduce hadoop spark"],["entity-resolution","Entity Resolution","aws"],["finspace","FinSpace","amazon"],["glue","Glue","aws"],["glue-databrew","Glue DataBrew","aws"],["kinesis-video-streams","Kinesis Video Streams","amazon"],["lake-formation","Lake Formation","aws"],["managed-service-for-apache-flink","Managed Service for Apache Flink","amazon","kinesis data analytics"],["managed-streaming-for-apache-kafka","MSK","amazon"],["opensearch-service","OpenSearch Service","amazon","elasticsearch search"],["redshift","Redshift","amazon"]]],["Integration","#e7157b",[["mq","Amazon MQ","amazon"],["appflow","AppFlow","amazon"],["appsync","AppSync","aws"],["b2b-data-interchange","B2B Data Interchange","aws"],["managed-workflows-for-apache-airflow","MWAA","amazon","dag"],["step-functions","Step Functions","aws","state machine workflow orchestration express workflows"]]],["Machine Learning","#01a88d",[["nova","Amazon Nova","amazon"],["q","Amazon Q","amazon"],["app-studio","App Studio","aws"],["augmented-ai-a2i","Augmented AI (A2I)","amazon"],["bedrock","Bedrock","amazon","genai llm foundation models"],["bedrock-agentcore","Bedrock AgentCore","amazon","genai agents"],["comprehend","Comprehend","amazon"],["comprehend-medical","Comprehend Medical","amazon"],["deep-learning-amis","Deep Learning AMIs","aws"],["deep-learning-containers","Deep Learning Containers","aws"],["devops-guru","DevOps Guru","amazon"],["elemental-inference","Elemental Inference","aws"],["healthimaging","HealthImaging","aws"],["healthlake","HealthLake","aws"],["healthomics","HealthOmics","aws"],["healthscribe","HealthScribe","aws"],["kendra","Kendra","amazon"],["lex","Lex","amazon"],["neuron","Neuron","aws"],["personalize","Personalize","amazon"],["polly","Polly","amazon"],["pytorch-on-aws","PyTorch on AWS",""],["rekognition","Rekognition","amazon"],["sagemaker-ground-truth","SageMaker Ground Truth","amazon"],["tensorflow-on-aws","TensorFlow on AWS",""],["textract","Textract","amazon"],["transcribe","Transcribe","amazon"],["translate","Translate","amazon"]]],["Blockchain","#ed7100",[["managed-blockchain","Managed Blockchain","amazon"]]],["Business Applications","#dd344c",[["connect","Amazon Connect","amazon"],["quick","Amazon Quick","amazon"],["appfabric","AppFabric","aws"],["chime-sdk","Chime SDK","amazon"],["end-user-messaging","End User Messaging","aws"],["simple-email-service","SES","amazon","smtp mail"],["supply-chain","Supply Chain","aws"],["wickr","Wickr","aws"],["workmail","WorkMail","amazon"]]],["Compute","#ed7100",[["app-runner","App Runner","aws"],["batch","AWS Batch","aws"],["bottlerocket","Bottlerocket",""],["dcv","DCV","amazon"],["ec2-auto-scaling","EC2 Auto Scaling","amazon","group asg application"],["ec2-image-builder","EC2 Image Builder","amazon"],["elastic-beanstalk","Elastic Beanstalk","aws"],["elastic-fabric-adapter","Elastic Fabric Adapter",""],["elastic-vmware-service","Elastic VMware Service","amazon","evs"],["lightsail","Lightsail","amazon"],["local-zones","Local Zones","aws"],["nitro-enclaves","Nitro Enclaves","aws"],["outposts-family","Outposts","aws","rack servers on premises"],["parallel-cluster","ParallelCluster","aws"],["parallel-computing-service","Parallel Computing Service","aws"],["serverless-application-repository","Serverless Application Repository","aws"],["simspace-weaver","SimSpace Weaver","aws"],["wavelength","Wavelength","aws"]]],["Containers","#ed7100",[["ecs-anywhere","ECS Anywhere","amazon"],["eks-anywhere","EKS Anywhere","amazon"],["eks-distro","EKS Distro","amazon"],["red-hat-openshift-service-on-aws","Red Hat OpenShift Service on AWS",""]]],["Database","#c925d1",[["aurora","Aurora","amazon","relational postgres mysql database serverless"],["database-migration-service","Database Migration Service","aws","dms"],["documentdb","DocumentDB","amazon"],["elasticache","ElastiCache","amazon","redis valkey memcached cache"],["keyspaces","Keyspaces","amazon"],["memorydb","MemoryDB","amazon"],["neptune","Neptune","amazon"],["oracle-database-at-aws","Oracle Database at AWS",""],["timestream","Timestream","amazon"]]],["Developer Tools","#c925d1",[["cloud-development-kit","CDK","aws","infrastructure as code iac"],["cloud-control-api","Cloud Control API","aws"],["codeartifact","CodeArtifact","aws"],["codebuild","CodeBuild","aws"],["codecatalyst","CodeCatalyst","amazon"],["codedeploy","CodeDeploy","aws"],["codepipeline","CodePipeline","aws"],["fault-injection-service","Fault Injection Service","aws"],["infrastructure-composer","Infrastructure Composer","aws"],["x-ray","X-Ray","aws","tracing"]]],["End User Computing","#01a88d",[["workspaces","WorkSpaces","amazon"]]],["Front-End Web & Mobile","#dd344c",[["amplify","Amplify","aws"],["device-farm","Device Farm","aws"],["location-service","Location Service","amazon"]]],["Games","#8c4fff",[["gamelift-servers","GameLift Servers","amazon"],["gamelift-streams","GameLift Streams","amazon"]]],["Internet of Things","#7aa116",[["freertos","FreeRTOS",""],["iot-core","IoT Core","aws"],["iot-device-defender","IoT Device Defender","aws"],["iot-device-management","IoT Device Management","aws"],["iot-expresslink","IoT ExpressLink","aws"],["iot-greengrass","IoT Greengrass","aws"],["iot-sitewise","IoT SiteWise","aws"],["iot-twinmaker","IoT TwinMaker","aws"]]],["Management & Governance","#e7157b",[["appconfig","AppConfig","aws"],["chatbot","AWS Chatbot","aws"],["config","AWS Config","aws"],["organizations","AWS Organizations","aws"],["backint-agent","Backint Agent","aws"],["cloudformation","CloudFormation","aws","infrastructure as code iac stacks templates"],["cloudtrail","CloudTrail","aws"],["cloudwatch","CloudWatch","amazon","logs metrics alarms monitoring"],["control-tower","Control Tower","aws"],["devops-agent","DevOps Agent","aws"],["distro-for-opentelemetry","Distro for OpenTelemetry","aws","adot tracing otel"],["license-manager","License Manager","aws"],["managed-grafana","Managed Grafana","amazon"],["managed-service-for-prometheus","Managed Service for Prometheus","amazon"],["resilience-hub","Resilience Hub","aws"],["resource-explorer","Resource Explorer","aws"],["service-catalog","Service Catalog","aws"],["service-management-connector","Service Management Connector","aws"],["systems-manager","Systems Manager","aws","ssm parameter store session"],["telco-network-builder","Telco Network Builder","aws"],["trusted-advisor","Trusted Advisor","aws"],["user-notifications","User Notifications","aws"]]],["Media Services","#ed7100",[["deadline-cloud","Deadline Cloud","aws"],["elemental-live","Elemental Live","aws"],["elemental-mediaconnect","Elemental MediaConnect","aws"],["elemental-mediaconvert","Elemental MediaConvert","aws"],["elemental-medialive","Elemental MediaLive","aws"],["elemental-mediapackage","Elemental MediaPackage","aws"],["elemental-mediatailor","Elemental MediaTailor","aws"],["interactive-video-service","Interactive Video Service","amazon"]]],["Migration & Modernization","#01a88d",[["application-migration-service","Application Migration Service","aws"],["transform","AWS Transform","aws"],["data-transfer-terminal","Data Transfer Terminal","aws"],["datasync","DataSync","aws"],["mainframe-modernization","Mainframe Modernization","aws"],["transfer-family","Transfer Family","aws"]]],["Networking","#8c4fff",[["virtual-private-cloud","Amazon VPC","amazon","network"],["application-recovery-controller","Application Recovery Controller","amazon"],["interconnect","AWS Interconnect","aws"],["client-vpn","Client VPN","aws"],["cloud-map","Cloud Map","aws"],["cloud-wan","Cloud WAN","aws"],["direct-connect","Direct Connect","aws"],["global-accelerator","Global Accelerator","aws"],["privatelink","PrivateLink","aws"],["rtb-fabric","RTB Fabric","aws"],["site-to-site-vpn","Site-to-Site VPN","aws","ipsec"],["transit-gateway","Transit Gateway","aws","tgw"],["verified-access","Verified Access","aws"],["vpc-lattice","VPC Lattice","amazon"]]],["Quantum Technologies","#ed7100",[["braket","Braket","amazon"]]],["Satellite","#c925d1",[["ground-station","Ground Station","aws"]]],["Security","#dd344c",[["audit-manager","Audit Manager","aws"],["signer","AWS Signer","aws"],["certificate-manager","Certificate Manager","aws","acm tls ssl certificates"],["cloud-directory","Cloud Directory","amazon"],["cloudhsm","CloudHSM","aws"],["detective","Detective","amazon"],["directory-service","Directory Service","aws"],["firewall-manager","Firewall Manager","aws"],["guardduty","GuardDuty","amazon"],["iam-identity-center","IAM Identity Center","aws","sso single sign on"],["inspector","Inspector","amazon"],["key-management-service","KMS","aws","encryption keys"],["macie","Macie","amazon"],["network-firewall","Network Firewall","aws"],["payment-cryptography","Payment Cryptography","aws"],["private-certificate-authority","Private Certificate Authority","aws","acm pca ca"],["resource-access-manager","Resource Access Manager","aws"],["secrets-manager","Secrets Manager","aws"],["security-agent","Security Agent","aws"],["security-hub","Security Hub","aws"],["security-incident-response","Security Incident Response","aws"],["security-lake","Security Lake","amazon"],["verified-permissions","Verified Permissions","amazon"]]],["Storage","#7aa116",[["backup","AWS Backup","aws"],["elastic-block-store","EBS","amazon","volume disk"],["efs","EFS","amazon","elastic file system nfs shared"],["elastic-disaster-recovery","Elastic Disaster Recovery","aws"],["file-cache","File Cache","amazon"],["fsx","FSx","amazon"],["fsx-for-lustre","FSx for Lustre","amazon"],["fsx-for-netapp-ontap","FSx for NetApp ONTAP","amazon"],["fsx-for-openzfs","FSx for OpenZFS","amazon"],["fsx-for-wfs","FSx for Windows File Server","amazon"],["simple-storage-service-glacier","S3 Glacier","amazon","archive"],["s3-on-outposts","S3 on Outposts","amazon"],["snowball","Snowball","aws"],["snowball-edge","Snowball Edge","aws"],["storage-gateway","Storage Gateway","aws"]]]],bm=ym.flatMap(([n,e,t])=>t.map(([i,s,r,o=""])=>{const a=r?`${r}-${i}`:i,l=`${r} ${i.replaceAll("-"," ")} ${o}`.trim();return[i,s,a,n,l,e]})),wm=[["lambda","Lambda","AWS-Lambda","Compute","function serverless","#ed7100"],["api-gateway","API Gateway","Amazon-API-Gateway","Networking","api rest http gateway","#8c4fff"],["dynamodb","DynamoDB","Amazon-DynamoDB","Database","nosql key value database","#c925d1"],["s3","S3","Amazon-Simple-Storage-Service","Storage","bucket object storage","#7aa116"],["ec2","EC2","Amazon-EC2","Compute","virtual machine instance vm","#ed7100"],["ecs","ECS","Amazon-Elastic-Container-Service","Compute","containers docker fargate","#ed7100"],["eks","EKS","Amazon-Elastic-Kubernetes-Service","Compute","kubernetes k8s containers","#ed7100"],["ecr","ECR","Amazon-Elastic-Container-Registry","Containers","container registry docker images repository elastic","#ed7100"],["fargate","Fargate","AWS-Fargate","Containers","serverless containers tasks ecs eks","#ed7100"],["rds","RDS","Amazon-RDS","Database","relational postgres mysql database","#c925d1"],["cloudfront","CloudFront","Amazon-CloudFront","Networking","cdn edge cache","#8c4fff"],["route53","Route 53","Amazon-Route-53","Networking","dns domain routing","#8c4fff"],["sqs","SQS","Amazon-Simple-Queue-Service","Integration","queue messaging","#e7157b"],["sns","SNS","Amazon-Simple-Notification-Service","Integration","notification pubsub topic","#e7157b"],["eventbridge","EventBridge","Amazon-EventBridge","Integration","events bus rules","#e7157b"],["elb","Load balancer","Elastic-Load-Balancing","Networking","elb alb nlb load balancing","#8c4fff"],["kinesis-data-streams","Kinesis Data Streams","Amazon-Kinesis-Data-Streams","Analytics","stream ingest real time data pipeline","#8c4fff"],["data-firehose","Data Firehose","Amazon-Data-Firehose","Analytics","kinesis firehose delivery streaming data pipeline","#8c4fff"],["glue-data-catalog","Glue Data Catalog","AWS-Glue-Data-Catalog","Analytics","metadata schema tables catalog data pipeline","#8c4fff"],["athena","Athena","Amazon-Athena","Analytics","sql query analytics s3 data pipeline","#8c4fff"],["sagemaker-ai","SageMaker AI","Amazon-SageMaker-AI","Machine Learning","ml machine learning train recommendations data pipeline unified studio","#01a88d"],["sagemaker-ai-model","SageMaker AI model","Amazon-SageMaker-AI-Model","Machine Learning","ml model inference real time recommendations","#01a88d"],["iam","IAM","AWS-Identity-and-Access-Management","Security","identity access management users groups permissions policies security","#dd344c"],["iam-role","IAM role","AWS-IAM-Role","Security","identity access role assume sts temporary credentials instance profile","#dd344c"],["cognito","Cognito","Amazon-Cognito","Security","identity user pool sign in sign up login auth authentication oauth oidc saml federation","#dd344c"],["waf","WAF","AWS-WAF","Security","web application firewall acl rules bot sql injection xss rate limit","#dd344c"],["shield","Shield","AWS-Shield","Security","ddos protection mitigation advanced edge","#dd344c"]],Oh={account:"#e7157b",region:"#00a4a6",vpc:"#8c4fff",zone:"#00a4a6",subnet:"#7aa116"},Sm=new Set(["#f6bd72","#b9a0e4","#82b7df","#a8cf88","#e5a0c0","#a568ce","#ed983c","#548bc4","#cb6186","#79a950","#d9a15f"]),Mm={"network-acl":"#d9534f",docker:"#2496ed",container:"#326ce5","container-image":"#0d9488","github-actions":"#24292f",git:"#f05032",pipeline:"#7c3aed","internet-gateway":"#8c4fff","nat-gateway":"#c084fc",firewall:"#d97706","route-table":"#059669"},qs=[...["process","decision","terminal"].map(n=>({id:`flow.${n}`,label:n==="process"?"Process":n==="decision"?"Decision":"Start / end",color:"#d9b677",glyph:n==="decision"?"◇":n==="terminal"?"○":"▭",description:n==="decision"?"Branch a flow with a question":n==="terminal"?"Begin or finish a flow":"A step in your flow",category:"Flowchart",aliases:"flow chart shape",kind:"service",shape:n})),...[["docker","Docker","Containers","docker engine whale runtime"],["container","Container","Containers","running container workload"],["container-image","Container image","Containers","oci image artifact registry"],["github-actions","GitHub Actions","DevOps","github actions workflow ci cd automation"],["git","Git repository","DevOps","git source code version control"],["pipeline","CI/CD pipeline","DevOps","build test deploy delivery"],["internet-gateway","Internet gateway","Networking","vpc igw inbound outbound internet"],["nat-gateway","NAT gateway","Networking","vpc nat private egress outbound"],["firewall","Security group","Networking","firewall security ingress egress allow deny"],["network-acl","Network ACL","Networking","nacl network access control list subnet firewall"],["route-table","Route table","Networking","routes routing subnet gateway"]].map(([n,e,t,i])=>({id:`component.${n}`,label:e,category:t,aliases:i,color:Mm[n]??"#4c9aff",glyph:"◇",description:`${t} · ${e}`,kind:"service",...n==="firewall"?{policyKind:"security-group"}:n==="network-acl"?{policyKind:"network-acl"}:n==="route-table"?{policyKind:"route-table"}:{},asset:`components/${n}.svg`,icon:new URL(Object.assign({"../../assets/components/container-image.svg":nm,"../../assets/components/container.svg":im,"../../assets/components/docker.svg":sm,"../../assets/components/firewall.svg":rm,"../../assets/components/git.svg":om,"../../assets/components/github-actions.svg":am,"../../assets/components/internet-gateway.svg":lm,"../../assets/components/nat-gateway.svg":cm,"../../assets/components/network-acl.svg":dm,"../../assets/components/pipeline.svg":um,"../../assets/components/route-table.svg":hm})[`../../assets/components/${n}.svg`],import.meta.url).href})),...[["pod","Pod","pod pods workload containers"],["deployment","Deployment","deployment deploy replicas rollout controller"],["service","Service","service svc clusterip discovery load balancing"],["ingress","Ingress","ingress ing http https routing controller"],["namespace","Namespace","namespace ns group boundary scope"]].map(([n,e,t])=>({id:`kubernetes.${n}`,label:e,color:"#326ce5",glyph:n==="namespace"?"▱":"⬡",description:n==="namespace"?"Kubernetes · namespace boundary":`Kubernetes · ${e}`,category:"Kubernetes",aliases:`kubernetes k8s kube ${t}`,kind:n==="namespace"?"group":"service",asset:`kubernetes/${n}.svg`,icon:new URL(Object.assign({"../../assets/kubernetes/deployment.svg":fm,"../../assets/kubernetes/ingress.svg":pm,"../../assets/kubernetes/namespace.svg":mm,"../../assets/kubernetes/pod.svg":gm,"../../assets/kubernetes/service.svg":vm})[`../../assets/kubernetes/${n}.svg`],import.meta.url).href})),...[...wm,...bm].map(([n,e,t,i,s,r])=>({id:`aws.${n}`,label:e,color:r,glyph:e==="Lambda"?"λ":e.slice(0,3),description:`AWS · ${i}`,category:i,aliases:s,kind:"service",asset:`aws/${t.toLowerCase()}.svg`,icon:`/diagrams/assets/aws/${t.toLowerCase()}.svg`})),...[["user","User","A person using the system","person customer client human","#3f8cff"],["internet","Internet","Clients on the public internet","web browser clients public","#5a6b86"]].map(([n,e,t,i,s])=>({id:`actor.${n}`,label:e,color:s,glyph:n==="user"?"☺":"◍",description:t,category:"Actors",aliases:`actor ${i}`,kind:"service",asset:`actors/${n}.svg`,icon:new URL(Object.assign({"../../assets/actors/internet.svg":xm,"../../assets/actors/user.svg":_m})[`../../assets/actors/${n}.svg`],import.meta.url).href})),{id:"note.text",label:"Text",color:"#ffffff",glyph:"T",description:"Free text on the board",category:"Annotations",aliases:"text label heading title caption annotation",kind:"text"},{id:"note.sticky",label:"Sticky note",color:"#ffd84d",glyph:"▤",description:"A note pinned to the board",category:"Annotations",aliases:"note sticky comment memo annotation todo",kind:"note"},...["account","region","vpc","zone","subnet"].map(n=>({id:`boundary.${n}`,label:n==="vpc"?"VPC":n==="zone"?"Availability zone":n.charAt(0).toUpperCase()+n.slice(1),color:Oh[n],glyph:"▱",description:"Nested architecture boundary",category:"Boundaries",aliases:"group account region vpc availability zone subnet",kind:"group",boundary:n}))],_l=new Map,yl=new Map;for(const[n,e]of qs.entries()){_l.has(e.id)||_l.set(e.id,n);const t=e.label.toLowerCase();yl.has(t)||yl.set(t,n)}function Ds(n){const e=_l.get(n)??1/0,t=yl.get(n.toLowerCase())??1/0;return qs[Math.min(e,t)]}function Em(n){return Ds(n)?.glyph??"◇"}function ni(n){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error("Expected an object");return Object.fromEntries(Object.entries(n))}const Lc=4e3,Am=new Set(["service","group","text","note"]);function Nt(n,e){if(typeof n!="string"||n.length>Lc)throw new Error(`Invalid ${e}`);return n}function ts(n){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e6)throw new Error("Invalid coordinate");return n}function Ls(n){const e=Id(n),t=ni(JSON.parse(n));if(t.details!==void 0){if(!Array.isArray(t.details)||t.details.length>100)throw Error("Invalid detail diagram library");const s=new Set;e.details=t.details.map(r=>{const o=ni(r),a=Nt(o.id,"detail ID");if(!a||s.has(a))throw Error("Duplicate detail ID");s.add(a);const l=ni(o.document);if(l.details!==void 0)throw Error("Detail libraries must be flat");return{id:a,document:Id(JSON.stringify(l))}})}const i=new Set(e.details?.map(s=>s.id));for(const s of[e,...e.details?.map(r=>r.document)??[]])for(const r of s.nodes)if(r.detailId&&!i.has(r.detailId))throw Error("Missing detail diagram");return e}function Id(n){if(n.length>1e7)throw new Error("Document exceeds 10 MB limit");const e=ni(JSON.parse(n));if(e.version!==1)throw new Error("Unsupported document version");if(!Array.isArray(e.nodes)||!Array.isArray(e.edges)||e.nodes.length>1e4||e.edges.length>3e4)throw new Error("Invalid graph size");const t=e.nodes.map(a=>{const l=ni(a);if(!Am.has(String(l.kind)))throw new Error("Invalid node kind");const c={id:Nt(l.id,"node ID"),kind:l.kind,label:Nt(l.label,"label"),x:ts(l.x),z:ts(l.z),width:ts(l.width),depth:ts(l.depth),color:Nt(l.color,"color")};if(!c.id||c.width<=0||c.depth<=0||!/^#[0-9a-f]{6}$/i.test(c.color))throw new Error("Invalid node geometry or color");if(l.detailId!==void 0&&(c.detailId=Nt(l.detailId,"detail ID")),l.journeyCaption!==void 0&&(c.journeyCaption=Nt(l.journeyCaption,"journey caption")),l.parentId!==void 0&&(c.parentId=Nt(l.parentId,"parent ID")),l.serviceId!==void 0&&(c.serviceId=Nt(l.serviceId,"service ID")),l.shape!==void 0){if(l.shape!=="process"&&l.shape!=="decision"&&l.shape!=="terminal")throw Error("Invalid flowchart shape");c.shape=l.shape}if(l.boundary!==void 0){if(!["account","region","vpc","zone","subnet"].includes(String(l.boundary)))throw Error("Invalid boundary kind");c.boundary=l.boundary}if(Sm.has(c.color.toLowerCase())){const d=c.serviceId?Ds(c.serviceId):void 0;d&&c.kind==="service"?c.color=d.color:c.boundary&&(c.color=Oh[c.boundary])}if(l.fontSize!==void 0){const d=ts(l.fontSize);if(d<4||d>400)throw Error("Invalid font size");c.fontSize=d}if(l.wrap!==void 0){if(typeof l.wrap!="boolean")throw Error("Invalid caption wrapping");l.wrap&&(c.wrap=!0)}if(l.journey!==void 0){const d=ni(l.journey);if(d.mode==="all"||d.mode==="ask")c.journey={mode:d.mode};else if(d.mode==="fixed")c.journey={mode:"fixed",edge:Nt(d.edge,"branch")};else throw Error("Invalid journey branch mode")}if(l.network!==void 0&&(c.network=Dh(l.network)),l.policy!==void 0&&(c.policy=Lh(l.policy)),l.metadata!==void 0){const d=ni(l.metadata);c.metadata={};for(const u of["region","environment","resourceName","notes","tags"])d[u]!==void 0&&(c.metadata[u]=Nt(d[u],u))}return c}),i=new Map(t.map(a=>[a.id,a]));if(i.size!==t.length)throw new Error("Duplicate node ID");for(const a of t){const l=new Set([a.id]);let c=a.parentId;for(;c!==void 0;){if(l.has(c))throw new Error("Group cycle");l.add(c);const d=i.get(c);if(!d||d.kind!=="group")throw new Error("Invalid parent group");c=d.parentId}}for(const a of t){const l=(c,d)=>{const u=i.get(c);if(!u||d&&u.policy?.kind!==d)throw Error(`Invalid network resource reference: ${c}`)};for(const c of a.network?.securityGroupIds??[])l(c,"security-group");for(const c of a.network?.networkIds??[])l(c);if(a.network?.routeTableId&&l(a.network.routeTableId,"route-table"),a.network?.networkAclId&&l(a.network.networkAclId,"network-acl"),a.policy?.kind==="route-table")for(const c of a.policy.routes)["local","blackhole"].includes(c.target)||l(c.target);else for(const c of a.policy?.rules??[])c.peerGroupId&&l(c.peerGroupId,"security-group")}const s=new Set,r=e.edges.map(a=>{const l=ni(a),c={id:Nt(l.id,"edge ID"),source:Nt(l.source,"source"),target:Nt(l.target,"target"),label:Nt(l.label,"label")};if(!c.id||s.has(c.id)||!i.has(c.source)||!i.has(c.target))throw new Error("Invalid edge reference");for(const d of["sourcePort","targetPort"]){const u=l[d];if(u!==void 0){if(u!=="north"&&u!=="east"&&u!=="south"&&u!=="west")throw Error("Invalid named port");c[d]=u}}if(l.relationship!==void 0){if(l.relationship!=="network"&&l.relationship!=="dependency")throw Error("Invalid relationship");c.relationship=l.relationship}if(l.routing!==void 0){if(l.routing!=="horizontal"&&l.routing!=="vertical")throw Error("Invalid routing");c.routing=l.routing}return l.bend!==void 0&&(c.bend=ts(l.bend)),l.networkRule!==void 0&&(c.networkRule=Rh(l.networkRule)),s.add(c.id),c});let o;if(e.scenarios!==void 0){if(!Array.isArray(e.scenarios)||e.scenarios.length>100)throw Error("Invalid scenarios");const a=new Set;o=e.scenarios.map(l=>{const c=ni(l),d=Nt(c.id,"scenario ID"),u=Nt(c.name,"scenario name");if(!d||!u.trim()||a.has(d))throw Error("Invalid or duplicate scenario");a.add(d);const h={id:d,name:u,traffic:Cr(c.traffic)};for(const f of["sourceId","targetId"])c[f]!==void 0&&(h[f]=Nt(c[f],f));return h})}return{version:1,title:Nt(e.title,"title"),...o?{scenarios:o}:{},nodes:t,edges:r,...e.traffic!==void 0?{traffic:Cr(e.traffic)}:{}}}function oa(n){return`${JSON.stringify(n,null,2)}
`}function Wt(n,e){let t=n.x,i=n.z,s=0,r=n.parentId;for(;r!==void 0;){const o=e.get(r);if(!o)throw new Error("Missing parent");t+=o.x,i+=o.z,s+=1,r=o.parentId}return{x:t,z:i,level:s}}function sS(){return{version:1,title:"Serverless application",nodes:[{id:"region",kind:"group",label:"AWS / us-east-1",boundary:"region",x:0,z:0,width:940,depth:900,color:"#00a4a6"},{id:"vpc",kind:"group",label:"Application boundary",boundary:"vpc",x:50,z:10,width:650,depth:720,color:"#8c4fff",parentId:"region"},{id:"gateway",kind:"service",label:"API Gateway",serviceId:"aws.api-gateway",x:-280,z:-110,width:160,depth:100,color:"#8c4fff",parentId:"region"},{id:"lambda",kind:"service",label:"Lambda",serviceId:"aws.lambda",x:-40,z:-80,width:160,depth:100,color:"#ed7100",parentId:"vpc"},{id:"db",kind:"service",label:"DynamoDB",serviceId:"aws.dynamodb",x:190,z:-80,width:160,depth:100,color:"#c925d1",parentId:"vpc"},{id:"queue",kind:"service",label:"SQS",serviceId:"aws.sqs",x:-40,z:310,width:160,depth:100,color:"#e7157b",parentId:"vpc"},{id:"storage",kind:"service",label:"S3",serviceId:"aws.s3",x:190,z:310,width:160,depth:100,color:"#7aa116",parentId:"vpc"}],edges:[{id:"request",source:"gateway",target:"lambda",label:"HTTPS"},{id:"write",source:"lambda",target:"db",label:"Read / write"},{id:"event",source:"lambda",target:"queue",label:"Events"},{id:"archive",source:"queue",target:"storage",label:"Archive"}]}}function Tm(){return{version:1,title:"Untitled architecture",nodes:[{id:"function",serviceId:"aws.lambda",kind:"service",label:"Lambda",x:-300,z:0,width:160,depth:100,color:"#ed7100"},{id:"database",serviceId:"aws.dynamodb",kind:"service",label:"DynamoDB",x:300,z:0,width:160,depth:100,color:"#c925d1"}],edges:[{id:"request",source:"function",target:"database",label:"Read / write"}]}}function dn(n,e){const t=document.createElement(n);return e&&(t.textContent=e),t}function Dn(n="",e="text"){const t=dn("input");return t.type=e,t.value=n,t}function Cm(n,e){if(n.disabled||!n.value&&!e.value)return{};if(!n.value||!e.value)throw Error("Enter both ends of the port range, or leave both blank");return{fromPort:Number(n.value),toPort:Number(e.value)}}function Sn(n,e=""){const t=dn("select");for(const[i,s]of n){const r=dn("option",s);r.value=i,t.append(r)}return t.value=e,t}function Mt(n,e,t){const i=dn("label",e);i.append(t),n.append(i)}function Dd(n,e,t){const i=Sn(n.nodes.filter(e).map(s=>[s.id,s.label]));i.multiple=!0,i.size=4;for(const s of i.options)s.selected=t.includes(s.value);return i}function Rm(n,e,t,i,s){if(n.replaceChildren(),!e||e.kind==="text"||e.kind==="note")return;const r=dn("details");r.open=!!(e.network||e.policy),r.append(dn("summary","Resource networking")),n.append(r);const o=Dn("","checkbox");o.checked=!!e.network,Mt(r,"Enable network model",o);const a=Sn([["aws","AWS IPv4"],["generic","Generic IPv4"],["compose","Compose network"]],e.network?.model??"aws");Mt(r,"Network model",a);const l=Dn(e.network?.ip??""),c=Dn(e.network?.publicIp??""),d=Dn(e.network?.cidr??"");e.kind==="service"&&!e.policy&&(Mt(r,"Private / endpoint IPv4",l),Mt(r,"Public IPv4 (if known)",c)),e.kind==="group"&&Mt(r,"Boundary CIDR",d);const u=Sn([["unknown","Unknown"],["private","Private"],["public","Public address assigned"]],e.network?.exposure??"unknown");e.kind==="service"&&!e.policy&&Mt(r,"Public address assignment",u);const h=Dd(t,I=>I.policy?.kind==="security-group",e.network?.securityGroupIds??[]);e.kind==="service"&&!e.policy&&Mt(r,"Attached security groups",h);const f=I=>[["","Not assigned"],...t.nodes.filter(T=>T.policy?.kind===I).map(T=>[T.id,T.label])],g=Sn(f("route-table"),e.network?.routeTableId??""),v=Sn(f("network-acl"),e.network?.networkAclId??"");e.boundary==="subnet"&&(Mt(r,"Subnet route table",g),Mt(r,"Subnet network ACL",v));const m=Dd(t,I=>I.kind==="group"&&I.network?.model==="compose",e.network?.networkIds??[]);e.network?.model==="compose"&&Mt(r,"Compose network attachments",m);const p=Sn([["","No resource policy"],["security-group","Security group"],["network-acl","Network ACL"],["route-table","Route table"]],e.policy?.kind??"");Mt(r,"Policy on this resource",p);const b=dn("div");b.className="network-rule-rows",r.append(b);const w=dn("button","Add rule / route");w.type="button",r.append(w);const _=[];function P(I){const T=dn("div");T.className="network-rule-row",b.append(T);const G=dn("button","Remove");if(G.type="button",p.value==="route-table"){const N=I&&"destination"in I?I:{destination:"0.0.0.0/0",target:"local"},V=Dn(N.destination),O=Sn([["local","Local VPC"],["blackhole","Blackhole"],...t.nodes.filter(F=>F.kind==="service"&&F.id!==e?.id).map(F=>[F.id,F.label])],N.target);Mt(T,"Destination CIDR",V),Mt(T,"Next hop",O),_.push(()=>T.isConnected?{destination:V.value.trim(),target:O.value}:void 0)}else{const N=I&&"protocol"in I?I:{action:"allow",direction:"ingress",protocol:"tcp",fromPort:443,toPort:443,cidr:"0.0.0.0/0",priority:b.children.length*100},V=Sn([["ingress","Ingress"],["egress","Egress"]],N.direction),O=Sn([["any","Any IP protocol"],["tcp","TCP"],["udp","UDP"],["icmp","ICMP (all types)"]],N.protocol),F=Dn(String(N.fromPort??""),"number"),z=Dn(String(N.toPort??""),"number"),J=Dn(N.cidr??"");F.min=z.min="0",F.max=z.max="65535";const K=Sn([["","Use CIDR / any peer"],...t.nodes.filter(Ue=>Ue.policy?.kind==="security-group"||Ue.id===e?.id).map(Ue=>[Ue.id,Ue.label])],N.peerGroupId??""),_e=Sn([["allow","Allow"],["deny","Deny"]],N.action),ve=Dn(String(N.priority??b.children.length*100),"number");ve.min="1",ve.max="32766",Mt(T,"Direction",V),Mt(T,"Protocol",O),Mt(T,"From port (blank = all)",F),Mt(T,"To port",z),Mt(T,"Peer IPv4 CIDR",J),p.value==="security-group"&&Mt(T,"Or peer security group",K),p.value==="network-acl"&&(Mt(T,"Action",_e),Mt(T,"Rule priority",ve));const ce=()=>{F.disabled=z.disabled=["any","icmp"].includes(O.value),J.disabled=p.value==="security-group"&&!!K.value};O.onchange=ce,K.onchange=ce,ce(),_.push(()=>T.isConnected?{direction:V.value,protocol:O.value,action:p.value==="security-group"?"allow":_e.value,...Cm(F,z),...p.value==="security-group"&&K.value?{peerGroupId:K.value}:J.value.trim()?{cidr:J.value.trim()}:{},...p.value==="network-acl"?{priority:Number(ve.value)}:{}}:void 0)}G.onclick=()=>T.remove(),T.append(G)}const E=()=>{b.replaceChildren(),_.length=0,w.disabled=!p.value;const I=e?.policy;if(I?.kind===p.value)if(I.kind==="route-table")for(const T of I.routes)P(T);else for(const T of I.rules)P(T)};p.onchange=E,w.onclick=()=>P(),E();const C=[...e.network?.incomplete??[],...e.policy?.incomplete??[]],y=Dn("","checkbox");C.length&&(r.append(dn("p",`Unresolved import values: ${C.join("; ")}`)),Mt(r,"I have supplied the missing settings above",y)),r.append(dn("p","Security groups allow matching rules from any attached group; no match denies. ACLs use the first matching priority, then implicit deny, including return traffic. No assigned ACL is modeled as default allow."));const S=dn("button","Apply resource networking");S.type="button",r.append(S),S.onclick=()=>{try{const I=structuredClone(e);o.checked?I.network=Dh({model:a.value,...l.value.trim()?{ip:l.value.trim()}:{},...c.value.trim()?{publicIp:c.value.trim()}:{},...e.kind==="group"&&d.value.trim()?{cidr:d.value.trim()}:{},exposure:u.value,securityGroupIds:Array.from(h.selectedOptions,T=>T.value),...e.boundary==="subnet"&&g.value?{routeTableId:g.value}:{},...e.boundary==="subnet"&&v.value?{networkAclId:v.value}:{},...e.network?.model==="compose"?{networkIds:Array.from(m.selectedOptions,T=>T.value)}:{},...!y.checked&&e.network?.incomplete?{incomplete:e.network.incomplete}:{}}):delete I.network,p.value?I.policy=Lh({kind:p.value,[p.value==="route-table"?"routes":"rules"]:_.map(T=>T()).filter(Boolean),...!y.checked&&e.policy?.incomplete&&e.policy.kind===p.value?{incomplete:e.policy.incomplete}:{}}):delete I.policy,Ls(oa({...t,nodes:t.nodes.map(T=>T.id===e.id?I:T)})),i(I)}catch(I){s(String(I))}}}const en=(n,e)=>{const t=document.createElement(n);return e&&(t.textContent=e),t},Ld=(n,e)=>{n.replaceChildren(...e.map(t=>{const i=en("option",t.label);return i.value=t.id,i}))};function Pm(n){const e=en("section");e.className="workspace-dialog reachability-dialog",e.hidden=!0,e.setAttribute("aria-label","Reachability matrix"),e.innerHTML='<div class="dialog-heading"><h2>Can A reach B?</h2><button data-close aria-label="Close reachability">×</button></div><p>Static IPv4 reachability from the modeled routes, security groups and subnet ACLs. Security-group replies are stateful; ACL replies use the source port. Missing addresses and unsupported constructs produce Unknown. Unassigned ACLs assume default allow. External routing is assumed available after a valid internet-gateway route.</p><label>Traffic scenario<select data-scenario><option value="">Custom traffic</option></select></label><div class="reachability-controls"><label>Protocol<select data-protocol><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Destination port<input data-port type="number" min="1" max="65535" value="443"></label><label>Source port for ACL replies<input data-source-port type="number" min="1" max="65535" value="49152"></label><label>Source IPv4 fallback for external actors<input data-ip value="203.0.113.10"></label><label>From<select data-source></select></label><label>To<select data-target></select></label></div><div class="dialog-actions"><button data-check>Check flow</button><button data-build>Refresh matrix</button></div><div data-result role="status"></div><button data-play disabled>Trace journey</button><details><summary>Decision details</summary><ol data-checks></ol></details><hr><label>Filter resources<input data-filter placeholder="Name or resource ID"></label><div class="matrix-pages"><button data-rows-prev>Previous sources</button><button data-rows-next>Next sources</button><button data-cols-prev>Previous destinations</button><button data-cols-next>Next destinations</button></div><p data-page></p><div class="matrix-scroll" data-matrix></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),i=I=>{const T=e.querySelector(I);if(!T)throw Error("Missing reachability control");return T},s=i("[data-scenario]");s.onchange=()=>{const I=(n.document().scenarios??gl).find(T=>T.id===s.value);I&&(a.value=I.traffic.protocol,l.value=String(I.traffic.port),c.value=I.traffic.sourceIp,I.sourceId&&(r.value=I.sourceId),I.targetId&&(o.value=I.targetId),y(),C())};const r=i("[data-source]"),o=i("[data-target]"),a=i("[data-protocol]"),l=i("[data-port]"),c=i("[data-ip]"),d=i("[data-source-port]"),u=i("[data-filter]"),h=i("[data-matrix]"),f=i("[data-result]"),g=i("[data-checks]"),v=i("[data-play]");let m,p=0,b=0;const w=()=>n.document().nodes.filter(I=>I.kind==="service"&&!I.policy&&!["component.internet-gateway","component.nat-gateway","component.route-table","component.firewall","component.network-acl"].includes(I.serviceId??"")),_=()=>{const I=Number(d.value);if(!Number.isInteger(I)||I<1||I>65535)throw Error("Source port must be 1–65535");return{traffic:Cr({protocol:a.value,port:Number(l.value),sourceIp:c.value.trim(),direction:"ingress"}),sourcePort:I}},P=I=>{m=I,f.textContent=`${I.status.toUpperCase()} · ${I.reason}`,f.className=`reachability-result ${I.status}`;const T=n.document();g.replaceChildren(en("li",`Path: ${I.path.map(G=>T.nodes.find(N=>N.id===G)?.label??G).join(" → ")}`),...I.checks.map(G=>en("li",G))),v.disabled=I.status==="unknown"||I.path.length<2||I.path[0]===I.path[I.path.length-1]},E=I=>{f.textContent=String(I),m=void 0,v.disabled=!0},C=()=>{try{const I=_();P($o(n.document(),r.value,o.value,I.traffic,I.sourcePort))}catch(I){E(I)}},y=()=>{try{const I=_(),T=w().filter(ce=>`${ce.label} ${ce.id}`.toLowerCase().includes(u.value.toLowerCase())),G=12,N=Math.max(1,Math.ceil(T.length/G));p=Math.min(p,N-1),b=Math.min(b,N-1);const V=n.document(),O=Uh(V),F=T.slice(p*G,(p+1)*G),z=T.slice(b*G,(b+1)*G),J=en("table"),K=en("tr");K.append(en("th","Source → destination"));for(const ce of z)K.append(en("th",ce.label));const _e=en("thead");_e.append(K),J.append(_e);const ve=en("tbody");for(const ce of F){const Ue=en("tr"),st=en("th",ce.label);st.scope="row",Ue.append(st);for(const rt of z){const j=en("td"),oe=$o(V,ce.id,rt.id,I.traffic,I.sourcePort,O),le=en("button",oe.status==="allowed"?"Allowed":oe.status==="denied"?"Denied":"Unknown");le.className=oe.status,le.title=oe.reason,le.setAttribute("aria-label",`${ce.label} to ${rt.label}: ${oe.status}`),le.onclick=()=>{r.value=ce.id,o.value=rt.id,P(oe)},j.append(le),Ue.append(j)}ve.append(Ue)}J.append(ve),h.replaceChildren(J),i("[data-page]").textContent=`${T.length} resources · source page ${p+1}/${N} · destination page ${b+1}/${N}. Rows and columns page independently.`,i("[data-rows-prev]").disabled=p===0,i("[data-cols-prev]").disabled=b===0,i("[data-rows-next]").disabled=p+1===N,i("[data-cols-next]").disabled=b+1===N}catch(I){E(I)}};i("[data-check]").onclick=C,i("[data-build]").onclick=y;for(const[I,T]of[["[data-rows-prev]",()=>p--],["[data-rows-next]",()=>p++],["[data-cols-prev]",()=>b--],["[data-cols-next]",()=>b++]])i(I).onclick=()=>{T(),y()};u.oninput=()=>{p=b=0,y()};for(const I of[a,l,d,c,r,o])I.onchange=()=>{m=void 0,v.disabled=!0,f.textContent="Parameters changed. Refresh the matrix or check a flow.",h.replaceChildren()};v.onclick=()=>{m&&(n.play(m),e.hidden=!0,t&&(t.inert=!1))};const S=()=>{e.hidden=!0,t&&(t.inert=!1)};return i("[data-close]").onclick=S,e.addEventListener("keydown",I=>{I.stopPropagation(),I.key==="Escape"&&(I.stopPropagation(),S())}),{close:S,open:()=>{const I=n.document(),T=I.traffic??Tr;s.replaceChildren(new Option("Custom traffic",""),...(I.scenarios??gl).map(G=>new Option(G.name,G.id))),a.value=T.protocol,l.value=String(T.port),c.value=T.sourceIp,Ld(r,w()),Ld(o,w()),o.selectedIndex=Math.min(1,o.options.length-1),p=b=0,e.hidden=!1,t&&(t.inert=!0),y()}}}class zh{constructor(e,t=100,i=8e6){this.document=e,this.maxEntries=t,this.maxBytes=i}document;maxEntries;maxBytes;past=[];future=[];bytes=0;sequence=0;revision=0;savedRevision=0;get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}get isDirty(){return this.revision!==this.savedRevision}get token(){return this.revision}markSaved(e=this.revision){this.savedRevision=e}execute(e){const t=this.document,i="id"in e?t.nodes.find(l=>l.id===e.id):void 0;let s,r,o=e;switch(e.type){case"detail":{const l=e.root;if(l.details?.some(d=>d.id===e.id))return!1;const c={id:e.id,document:e.board};s=()=>{l.details=l.details?.filter(d=>d!==c)??[]},r=()=>{l.details??=[],l.details.push(c)},o=[e.id,e.board];break}case"scenarios":{const l=structuredClone(t.scenarios),c=structuredClone(e.scenarios);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.scenarios=structuredClone(l):delete t.scenarios},r=()=>{t.scenarios=structuredClone(c)};break}case"traffic":{const l=structuredClone(t.traffic),c=structuredClone(e.to);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.traffic=structuredClone(l):delete t.traffic},r=()=>{t.traffic=structuredClone(c)};break}case"graph":{let l=function(f,g){return g.map(v=>{const m=f.findIndex(_=>_.id===v.id),p=f[m],b=p?structuredClone(p):null,w=v.value?structuredClone(v.value):null;if(w&&w.id!==v.id)throw Error("Mismatched graph record");return{id:v.id,index:m,target:p??(w?structuredClone(w):null),before:b,after:w}})},c=function(f,g,v){const m=new Set(g.map(b=>b.id)),p=f.filter(b=>!m.has(b.id));for(const b of[...g].sort((w,_)=>w.index-_.index)){const w=v?b.before:b.after;if(!(!w||!b.target)){for(const _ of Object.keys(b.target))Reflect.deleteProperty(b.target,_);Object.assign(b.target,structuredClone(w)),b.index<0?p.push(b.target):p.splice(b.index,0,b.target)}}return p};const d=l(t.nodes,e.nodes??[]),u=l(t.edges,e.edges??[]),h=t.title;s=()=>{t.nodes=c(t.nodes,d,!0),t.edges=c(t.edges,u,!0),t.title=h},r=()=>{t.nodes=c(t.nodes,d,!1),t.edges=c(t.edges,u,!1),e.title!==void 0&&(t.title=e.title)},o=[d,u,h];break}case"move":{if(!i||e.from.x===e.to.x&&e.from.z===e.to.z)return!1;const l={...e.from},c={...e.to};s=()=>Object.assign(i,l),r=()=>Object.assign(i,c);break}case"rename":{if(!i||i.label===e.label)return!1;const l=i.label,c=e.label.slice(0,1e3);s=()=>{i.label=l},r=()=>{i.label=c},o=[e,l];break}case"insert":{if(t.nodes.some(c=>c.id===e.node.id))return!1;const l={...e.node};s=()=>{t.nodes=t.nodes.filter(c=>c.id!==l.id)},r=()=>{t.nodes.push(l)};break}case"delete":{let l=function(f,g){for(const{item:v,index:m}of g)f.splice(m,0,v)};if(!i)return!1;const c=new Set([e.id]);for(let f=!0;f;){f=!1;for(const g of t.nodes)g.parentId&&c.has(g.parentId)&&!c.has(g.id)&&(c.add(g.id),f=!0)}const d=t.nodes.flatMap((f,g)=>c.has(f.id)?[{item:f,index:g}]:[]),u=t.edges.flatMap((f,g)=>c.has(f.source)||c.has(f.target)?[{item:f,index:g}]:[]),h=new Set(u.map(({item:f})=>f.id));s=()=>{l(t.nodes,d),l(t.edges,u)},r=()=>{t.nodes=t.nodes.filter(f=>!c.has(f.id)),t.edges=t.edges.filter(f=>!h.has(f.id))},o=[e,d,u];break}}r();for(const l of this.future)this.bytes-=l.bytes;this.future=[];const a={edit:e,document:t,undo:s,redo:r,bytes:JSON.stringify(o).length*2,before:this.revision,after:++this.sequence};for(this.past.push(a),this.bytes+=a.bytes,this.revision=a.after;this.past.length>this.maxEntries||this.bytes>this.maxBytes;){const l=this.past.shift();l&&(this.bytes-=l.bytes)}return!0}undo(){const e=this.past.pop();if(e)return this.document=e.document,e.undo(),this.revision=e.before,this.future.push(e),e.edit}redo(){const e=this.future.pop();if(e)return this.document=e.document,e.redo(),this.revision=e.after,this.past.push(e),e.edit}}function Bh(n,e){const t=n.edges.filter(l=>l.relationship!=="dependency"),i=new Set(t.map(l=>l.source)),s=new Set(t.map(l=>l.target));if(e&&i.has(e))return[e];const r=n.nodes.filter(l=>l.serviceId?.startsWith("actor.")&&i.has(l.id));if(r.length)return r.map(l=>l.id);const o=n.nodes.filter(l=>i.has(l.id)&&!s.has(l.id));if(o.length)return o.map(l=>l.id);const a=t[0]?.source;return a?[a]:[]}function Uc(n,e){const t=n.edges.filter(r=>r.source===e&&r.relationship!=="dependency").map(r=>r.id),i=n.nodes.find(r=>r.id===e);if(!i||t.length<2)return{mode:"all",edges:t};const s=i.journey??{mode:i.shape==="decision"?"ask":"all"};return s.mode==="fixed"?t.includes(s.edge)?{mode:"fixed",edges:[s.edge]}:{mode:"ask",edges:t}:{mode:s.mode,edges:t}}function Im(n){const e=new Set;for(const t of n.nodes){if(t.journey?.mode!=="fixed")continue;const{mode:i,edges:s}=Uc(n,t.id);if(i==="fixed")for(const r of n.edges)r.source===t.id&&!s.includes(r.id)&&e.add(r.id)}for(let t=e.size>0;t;){t=!1;for(const i of n.nodes){const s=n.edges.filter(r=>r.target===i.id);if(!(!s.length||!s.every(r=>e.has(r.id))))for(const r of n.edges)r.source===i.id&&!e.has(r.id)&&(e.add(r.id),t=!0)}}return e}const Ud={text:26,note:18};function aa(n){return n.fontSize??(n.kind==="note"?Ud.note:Ud.text)}function Gh(n,e,t){const i=[];for(const s of n.split(`
`)){let r="";for(const o of s.split(/(\s+)/)){const a=r+o;if(t(a)<=e||!r.trim())for(r=a;t(r)>e&&r.length>1;){let l=r.length-1;for(;l>1&&t(r.slice(0,l))>e;)l--;i.push(r.slice(0,l)),r=r.slice(l)}else i.push(r.trimEnd()),r=o.trimStart()}i.push(r.trimEnd())}return i}function Vh(n,e,t,i,s){const r=Math.max(.01,e),o=Math.max(.01,t),a=Math.max(.01,i),l=new Map,c=(v,m)=>{let p=l.get(v);return p===void 0&&(p=s(v,a),l.set(v,p)),p*m/a},d=v=>Gh(n,r,m=>c(m,v)),u=(v,m)=>m.length*v*1.28<=o&&m.every(p=>c(p,v)<=r),h=d(a);if(u(a,h))return{size:a,lines:h};let f=0,g=a;for(let v=0;v<16;v++){const m=(f+g)/2;u(m,d(m))?f=m:g=m}return{size:f,lines:d(f)}}function Hh(n,e,t){return Math.max(4,Math.min(400,aa(n)*Math.min(t.width/e.width,t.depth/e.depth)))}function Dm(n,e){const t=n.width*.9,i=Math.min(n.width*.13,n.depth*.25);if(n.wrap)return n.fontSize?{size:n.fontSize,lines:Gh(n.label,t,o=>e(o,n.fontSize??i))}:Vh(n.label,t,n.depth*.75,i,e);const s=n.label.split(`
`);if(n.fontSize)return{size:n.fontSize,lines:s};const r=Math.max(0,...s.map(o=>e(o,i)));return{size:r>t?i*t/r:i,lines:s}}function Nc(n,e){const t=structuredClone(n),i=(o,a)=>{o.incomplete??=[],o.incomplete.includes(a)||o.incomplete.push(a)},s=t.network;if(s){for(const o of["securityGroupIds","networkIds"])s[o]&&(s[o]=s[o].flatMap(a=>{const l=e.get(a);return l?[l]:(i(s,`Missing attached resource ${a}`),[])}));for(const o of["networkAclId","routeTableId"])if(s[o]){const a=e.get(s[o]);a?s[o]=a:(i(s,`Missing attached resource ${s[o]}`),delete s[o])}}const r=t.policy;if(r?.kind==="route-table")for(const o of r.routes)["local","blackhole"].includes(o.target)||(o.target=e.get(o.target)??"blackhole");else r&&(r.rules=r.rules.flatMap(o=>{if(!o.peerGroupId)return[o];const a=e.get(o.peerGroupId);return a?[{...o,peerGroupId:a}]:(i(r,`Missing peer security group ${o.peerGroupId}`),[])}));return t}function Wh(n,e){const t=new Map(e.map(s=>[s.id,s])),i=new Map(n.nodes.filter(s=>t.get(s.id)?.value!==null).map(s=>[s.id,s.id]));for(const s of e)s.value&&i.set(s.id,s.id);for(const s of n.nodes){const r=t.get(s.id);if(r?.value===null)continue;const o=r?.value??s,a=Nc(o,i);JSON.stringify(o)!==JSON.stringify(a)&&t.set(s.id,{id:s.id,value:a})}return[...t.values()]}function Xh(n,e){const t=new Set(e);for(let i=!0;i;){i=!1;for(const s of n.nodes)s.parentId&&t.has(s.parentId)&&!t.has(s.id)&&(t.add(s.id),i=!0)}return t}function Lm(n,e){const t=Xh(n,e);return{type:"graph",label:"Delete selection",nodes:Wh(n,n.nodes.filter(i=>t.has(i.id)).map(i=>({id:i.id,value:null}))),edges:n.edges.filter(i=>t.has(i.source)||t.has(i.target)).map(i=>({id:i.id,value:null}))}}function Um(n,e,t){const i=new Map(n.nodes.map(u=>[u.id,u])),s=n.nodes.filter(u=>e.has(u.id)&&!$h(u,i,e));if(!s.length)throw Error("Select components to group.");const r=s.map(u=>({node:u,world:Wt(u,i)})),o=Math.min(...r.map(({node:u,world:h})=>h.x-u.width/2))-40,a=Math.max(...r.map(({node:u,world:h})=>h.x+u.width/2))+40,l=Math.min(...r.map(({node:u,world:h})=>h.z-u.depth/2))-50,c=Math.max(...r.map(({node:u,world:h})=>h.z+u.depth/2))+50,d={id:t,kind:"group",label:"Group",x:(o+a)/2,z:(l+c)/2,width:a-o,depth:c-l,color:"#d9a15f"};return{type:"graph",label:"Group selection",nodes:[{id:t,value:d},...r.map(({node:u,world:h})=>({id:u.id,value:{...u,parentId:t,x:h.x-d.x,z:h.z-d.z}}))]}}function $h(n,e,t){let i=n.parentId;for(;i;){if(t.has(i))return!0;i=e.get(i)?.parentId}return!1}function Nm(n,e){const t=new Map(n.nodes.map(r=>[r.id,r])),i=new Set(n.nodes.filter(r=>r.kind==="group"&&e.has(r.id)).map(r=>r.id)),s=n.nodes.flatMap(r=>{if(i.has(r.id))return[{id:r.id,value:null}];if(!r.parentId||!i.has(r.parentId))return[];const o=Wt(r,t);let a=t.get(r.parentId)?.parentId;for(;a&&i.has(a);)a=t.get(a)?.parentId;const l=a?t.get(a):void 0,c=l?Wt(l,t):{x:0,z:0},d={...r,x:o.x-c.x,z:o.z-c.z};return delete d.parentId,a&&(d.parentId=a),[{id:r.id,value:d}]});return{type:"graph",label:"Ungroup selection",nodes:Wh(n,s),edges:n.edges.filter(r=>i.has(r.source)||i.has(r.target)).map(r=>({id:r.id,value:null}))}}function qh(n,e){const t=Xh(n,e),i=new Map(n.nodes.map(s=>[s.id,s]));return{version:1,title:"Selection",nodes:n.nodes.filter(s=>t.has(s.id)).map(s=>{const r=Nc(s,new Map([...t].map(o=>[o,o])));if(delete r.detailId,!r.parentId||!t.has(r.parentId)){const o=Wt(s,i);delete r.parentId,r.x=o.x,r.z=o.z}return r}),edges:n.edges.filter(s=>t.has(s.source)&&t.has(s.target)).map(s=>structuredClone(s))}}function Yh(n,e,t=40){const i=new Map(n.nodes.map(s=>[s.id,e()]));return{type:"graph",label:"Paste selection",nodes:n.nodes.map(s=>{const r=i.get(s.id);if(!r)throw Error("Missing pasted node");const o={...Nc(s,i),id:r};if(s.parentId){const a=i.get(s.parentId);a?o.parentId=a:delete o.parentId}else o.x+=t,o.z+=t;return{id:r,value:o}}),edges:n.edges.map(s=>{const r=i.get(s.source),o=i.get(s.target);if(!r||!o)throw Error("Invalid clipboard connection");const a=e();return{id:a,value:{...structuredClone(s),id:a,source:r,target:o}}})}}function Fm(n,e,t,i){const s=new Map(n.nodes.map(l=>[l.id,l])),r=n.nodes.filter(l=>l.kind!=="group").map(l=>({node:l,p:Wt(l,s)})),o=Math.max(220,t+60),a=Math.max(200,i+100);for(let l=0;l<150;l++)for(let c=-l;c<=l;c++)for(let d=-l;d<=l;d++){if(l&&Math.abs(d)!==l&&Math.abs(c)!==l)continue;const u={x:Math.round((e.x+d*o)/10)*10,z:Math.round((e.z+c*a)/10)*10};if(r.every(({node:h,p:f})=>Math.abs(u.x-f.x)>(t+h.width)/2+25||Math.abs(u.z-f.z)>(i+h.depth)/2+90))return u}throw Error("No nearby space for another component. Pan to an empty area.")}function km(n,e,t){const i=new Map(n.nodes.map(c=>[c.id,c])),s=n.nodes.filter(c=>e.has(c.id)&&!$h(c,i,e)).map(c=>{const d=Wt(c,i);return{node:c,x:d.x,z:d.z,minX:d.x-c.width/2,maxX:d.x+c.width/2,minZ:d.z-c.depth/2,maxZ:d.z+c.depth/2}}),r=t==="distribute-x"||t==="distribute-z"?"Distribute selection":"Align selection";if(s.length<2)return{type:"graph",label:r,nodes:[]};const o=new Map,a=c=>Math.min(...s.map(d=>d[c])),l=c=>Math.max(...s.map(d=>d[c]));for(const c of s){const{node:d}=c;let{x:u,z:h}=c;t==="left"&&(u=a("minX")+d.width/2),t==="right"&&(u=l("maxX")-d.width/2),t==="center"&&(u=(a("minX")+l("maxX"))/2),t==="top"&&(h=a("minZ")+d.depth/2),t==="bottom"&&(h=l("maxZ")-d.depth/2),t==="middle"&&(h=(a("minZ")+l("maxZ"))/2),o.set(d.id,{x:u,z:h})}if(t==="distribute-x"||t==="distribute-z"){const c=t==="distribute-x",d=[...s].sort((v,m)=>c?v.x-m.x:v.z-m.z),u=c?l("maxX")-a("minX"):l("maxZ")-a("minZ"),h=d.reduce((v,m)=>v+(c?m.node.width:m.node.depth),0),f=(u-h)/(d.length-1);let g=a(c?"minX":"minZ");for(const v of d){const m=c?v.node.width:v.node.depth,p=g+m/2;o.set(v.node.id,{x:c?p:v.x,z:c?v.z:p}),g+=m+f}}return{type:"graph",label:r,nodes:s.flatMap(({node:c,x:d,z:u})=>{const h=o.get(c.id);return!h||h.x===d&&h.z===u?[]:[{id:c.id,value:{...c,x:Math.round(c.x+h.x-d),z:Math.round(c.z+h.z-u)}}]})}}const Om="/diagrams/assets/vt323-latin-400-C5q55ueI.woff2",bl=[{id:"theme",name:"Standard"},{id:"courier",name:"Courier New",family:'"Courier New", Courier, "Liberation Mono", "Nimbus Mono PS", monospace'},{id:"terminal",name:"Terminal",family:'VT323, "DejaVu Sans Mono", ui-monospace, monospace',url:Om}];function jh(n){return bl.find(e=>e.id===n)??bl[0]}const ba=new Map;function zm(n){const e=n.url;if(!e)return Promise.resolve();let t=ba.get(e);return t||(t=new FontFace("VT323",`url(${e}) format("woff2")`).load().then(s=>{document.fonts.add(s)}),t.catch(()=>ba.delete(e)),ba.set(e,t)),t}const Fc="183",Bm=0,Nd=1,Gm=2,Oo=1,Vm=2,ur=3,Ci=0,rn=1,ii=2,ri=0,Ts=1,Fd=2,kd=3,Od=4,Zh=5,Gi=100,Hm=101,Wm=102,Xm=103,$m=104,qm=200,Jh=201,Ym=202,jm=203,wl=204,qo=205,Zm=206,Jm=207,Km=208,Qm=209,eg=210,tg=211,ng=212,ig=213,sg=214,Sl=0,Ml=1,El=2,Us=3,Al=4,Tl=5,Cl=6,Rl=7,kc=0,rg=1,og=2,zn=0,Kh=1,Qh=2,ef=3,tf=4,nf=5,sf=6,rf=7,of=300,Yi=301,Ns=302,wa=303,Sa=304,la=306,Pl=1e3,si=1001,Il=1002,Vt=1003,ag=1004,Xr=1005,Ht=1006,Ma=1007,Hi=1008,un=1009,af=1010,lf=1011,Pr=1012,Oc=1013,Vn=1014,En=1015,ai=1016,zc=1017,Bc=1018,Ir=1020,cf=35902,df=35899,uf=1021,hf=1022,An=1023,li=1026,Wi=1027,Gc=1028,Vc=1029,Fs=1030,Hc=1031,Wc=1033,zo=33776,Bo=33777,Go=33778,Vo=33779,Dl=35840,Ll=35841,Ul=35842,Nl=35843,Fl=36196,kl=37492,Ol=37496,zl=37488,Bl=37489,Gl=37490,Vl=37491,Hl=37808,Wl=37809,Xl=37810,$l=37811,ql=37812,Yl=37813,jl=37814,Zl=37815,Jl=37816,Kl=37817,Ql=37818,ec=37819,tc=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,lc=36285,cc=36286,lg=3200,ff=0,cg=1,bi="",Gt="srgb",ks="srgb-linear",Yo="linear",ct="srgb",ns=7680,zd=519,dg=512,ug=513,hg=514,Xc=515,fg=516,pg=517,$c=518,mg=519,dc=35044,Ei=35048,Bd="300 es",On=2e3,Dr=2001;function gg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vg(){const n=jo("canvas");return n.style.display="block",n}const Gd={};function Zo(...n){const e="THREE."+n.shift();console.log(e,...n)}function pf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=pf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=pf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Jo(...n){const e=n.join(" ");e in Gd||(Gd[e]=!0,He(...n))}function xg(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const _g={[Sl]:Ml,[El]:Cl,[Al]:Rl,[Us]:Tl,[Ml]:Sl,[Cl]:El,[Rl]:Al,[Tl]:Us};class Ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vd=1234567;const Cs=Math.PI/180,Lr=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function qc(n,e){return(n%e+e)%e}function yg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function bg(n,e,t){return n!==e?(t-n)/(e-n):0}function yr(n,e,t){return(1-t)*n+t*e}function wg(n,e,t,i){return yr(n,e,1-Math.exp(-t*i))}function Sg(n,e=1){return e-Math.abs(qc(n,e*2)-e)}function Mg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Eg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ag(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Tg(n,e){return n+Math.random()*(e-n)}function Cg(n){return n*(.5-Math.random())}function Rg(n){n!==void 0&&(Vd=n);let e=Vd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pg(n){return n*Cs}function Ig(n){return n*Lr}function Dg(n){return(n&n-1)===0&&n!==0}function Lg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ug(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ng(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*d,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fg={DEG2RAD:Cs,RAD2DEG:Lr,generateUUID:Bn,clamp:$e,euclideanModulo:qc,mapLinear:yg,inverseLerp:bg,lerp:yr,damp:wg,pingpong:Sg,smoothstep:Mg,smootherstep:Eg,randInt:Ag,randFloat:Tg,randFloatSpread:Cg,seededRandom:Rg,degToRad:Pg,radToDeg:Ig,isPowerOfTwo:Dg,ceilPowerOfTwo:Lg,floorPowerOfTwo:Ug,setQuaternionFromProperEuler:Ng,normalize:dt,denormalize:Mn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+v*a}else{l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+v*a;const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new D,Hd=new Pi;class je{constructor(e,t,i,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],w=s[4],_=s[7],P=s[2],E=s[5],C=s[8];return r[0]=o*v+a*b+l*P,r[3]=o*m+a*w+l*E,r[6]=o*p+a*_+l*C,r[1]=c*v+d*b+u*P,r[4]=c*m+d*w+u*E,r[7]=c*p+d*_+u*C,r[2]=h*v+f*b+g*P,r[5]=h*m+f*w+g*E,r[8]=h*p+f*_+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,g=t*u+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Aa.makeScale(e,t)),this}rotate(e){return this.premultiply(Aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Aa=new je,Wd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kg(){const n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Yo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Wd,fromXYZ:Xd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),n}const it=kg();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class Og{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=jo("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zg=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ta(s[o].image)):r.push(Ta(s[o]))}else r=Ta(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ta(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Og.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let Bg=0;const Ca=new D;class jt extends Ys{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=si,s=si,r=Ht,o=Hi,a=An,l=un,c=jt.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Bn(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==of)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pl:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Il:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pl:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Il:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=of;jt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(f+1)/2,P=(p+1)/2,E=(d+h)/4,C=(u+v)/4,y=(g+m)/4;return w>_&&w>P?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=C/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=y/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=C/r,s=y/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gg extends Ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new jt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Gg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mf extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vg extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m)}set(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Wg)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(i,an),fi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(i,an)),fi.normalize(),$r.crossVectors(an,fi),s[0]=fi.x,s[4]=$r.x,s[8]=an.x,s[1]=fi.y,s[5]=$r.y,s[9]=an.y,s[2]=fi.z,s[6]=$r.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],w=i[7],_=i[11],P=i[15],E=s[0],C=s[4],y=s[8],S=s[12],I=s[1],T=s[5],G=s[9],N=s[13],V=s[2],O=s[6],F=s[10],z=s[14],J=s[3],K=s[7],_e=s[11],ve=s[15];return r[0]=o*E+a*I+l*V+c*J,r[4]=o*C+a*T+l*O+c*K,r[8]=o*y+a*G+l*F+c*_e,r[12]=o*S+a*N+l*z+c*ve,r[1]=d*E+u*I+h*V+f*J,r[5]=d*C+u*T+h*O+f*K,r[9]=d*y+u*G+h*F+f*_e,r[13]=d*S+u*N+h*z+f*ve,r[2]=g*E+v*I+m*V+p*J,r[6]=g*C+v*T+m*O+p*K,r[10]=g*y+v*G+m*F+p*_e,r[14]=g*S+v*N+m*z+p*ve,r[3]=b*E+w*I+_*V+P*J,r[7]=b*C+w*T+_*O+P*K,r[11]=b*y+w*G+_*F+P*_e,r[15]=b*S+w*N+_*z+P*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],b=l*f-c*h,w=a*f-c*u,_=a*h-l*u,P=o*f-c*d,E=o*h-l*d,C=o*u-a*d;return t*(v*b-m*w+p*_)-i*(g*b-m*P+p*E)+s*(g*w-v*P+p*C)-r*(g*_-v*E+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=t*a-i*o,w=t*l-s*o,_=t*c-r*o,P=i*l-s*a,E=i*c-r*a,C=s*c-r*l,y=d*v-u*g,S=d*m-h*g,I=d*p-f*g,T=u*m-h*v,G=u*p-f*v,N=h*p-f*m,V=b*N-w*G+_*T+P*I-E*S+C*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/V;return e[0]=(a*N-l*G+c*T)*O,e[1]=(s*G-i*N-r*T)*O,e[2]=(v*C-m*E+p*P)*O,e[3]=(h*E-u*C-f*P)*O,e[4]=(l*I-o*N-c*S)*O,e[5]=(t*N-s*I+r*S)*O,e[6]=(m*_-g*C-p*w)*O,e[7]=(d*C-h*_+f*w)*O,e[8]=(o*G-a*I+c*y)*O,e[9]=(i*I-t*G-r*y)*O,e[10]=(g*E-v*_+p*b)*O,e[11]=(u*_-d*E-f*b)*O,e[12]=(a*S-o*T-l*y)*O,e[13]=(t*T-i*S+s*y)*O,e[14]=(v*w-g*P-m*b)*O,e[15]=(d*P-u*w+h*b)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,g=r*u,v=o*d,m=o*u,p=a*u,b=l*c,w=l*d,_=l*u,P=i.x,E=i.y,C=i.z;return s[0]=(1-(v+p))*P,s[1]=(f+_)*P,s[2]=(g-w)*P,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(h+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+w)*C,s[9]=(m-b)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const c=1/o,d=1/a,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=On,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===On)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new D,yn=new nt,Hg=new D(0,0,0),Wg=new D(1,1,1),fi=new D,$r=new D,an=new D,$d=new nt,qd=new Pi;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xg=0;const Yd=new D,rs=new Pi,Jn=new nt,qr=new D,Js=new D,$g=new D,qg=new Pi,jd=new D(1,0,0),Zd=new D(0,1,0),Jd=new D(0,0,1),Kd={type:"added"},Yg={type:"removed"},os={type:"childadded",child:null},Ra={type:"childremoved",child:null};class Rt extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new Hn,i=new Pi,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new je}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,t){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qr.copy(e):qr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Js,qr,this.up):Jn.lookAt(qr,Js,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Jn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),os.child=e,this.dispatchEvent(os),os.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yg),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tn extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=qc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ia(o,r,e+1/3),this.g=Ia(o,r,e),this.b=Ia(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=gf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return it.workingToColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,r=Yt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Gt){it.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Yr);const i=yr(pi.h,Yr.h,t),s=yr(pi.s,Yr.s,t),r=yr(pi.l,Yr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Ze;Ze.NAMES=gf;class Zc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vf extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new D,Kn=new D,Da=new D,Qn=new D,as=new D,ls=new D,Qd=new D,La=new D,Ua=new D,Na=new D,Fa=new mt,ka=new mt,Oa=new mt;class hn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Kn.subVectors(i,t),Da.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Kn),l=bn.dot(Da),c=Kn.dot(Kn),d=Kn.dot(Da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Fa.setScalar(0),ka.setScalar(0),Oa.setScalar(0),Fa.fromBufferAttribute(e,t),ka.fromBufferAttribute(e,i),Oa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Fa,r.x),o.addScaledVector(ka,r.y),o.addScaledVector(Oa,r.z),o}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Kn.subVectors(e,t),bn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,i),ls.subVectors(r,i),La.subVectors(e,i);const l=as.dot(La),c=ls.dot(La);if(l<=0&&c<=0)return t.copy(i);Ua.subVectors(e,s);const d=as.dot(Ua),u=ls.dot(Ua);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(as,o);Na.subVectors(e,r);const f=as.dot(Na),g=ls.dot(Na);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ls,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Qd.subVectors(r,s),a=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Qd,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jr.copy(i.boundingBox)),jr.applyMatrix4(e.matrixWorld),this.union(jr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),Zr.subVectors(this.max,Ks),cs.subVectors(e.a,Ks),ds.subVectors(e.b,Ks),us.subVectors(e.c,Ks),mi.subVectors(ds,cs),gi.subVectors(us,ds),Ni.subVectors(cs,us);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ni.z,Ni.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ni.z,0,-Ni.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ni.y,Ni.x,0];return!za(t,cs,ds,us,Zr)||(t=[1,0,0,0,1,0,0,0,1],!za(t,cs,ds,us,Zr))?!1:(Jr.crossVectors(mi,gi),t=[Jr.x,Jr.y,Jr.z],za(t,cs,ds,us,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,jr=new Wn,cs=new D,ds=new D,us=new D,mi=new D,gi=new D,Ni=new D,Ks=new D,Zr=new D,Jr=new D,Fi=new D;function za(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fi.fromArray(n,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),d=i.dot(Fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Ct=new D,Kr=new he;let Zg=0;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=dc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dc&&(e.usage=this.usage),e}}class xf extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class _f extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Jg=new Wn,Qs=new D,Ba=new D;class Ii{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Jg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(Ba)),this.expandByPoint(Qs.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Kg=0;const gn=new nt,Ga=new Rt,hs=new D,ln=new Wn,er=new Wn,Ut=new D;class Dt extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gg(e)?_f:xf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Ga.lookAt(e),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(ln.min,er.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,er.max),ln.expandByPoint(Ut)):(ln.expandByPoint(er.min),ln.expandByPoint(er.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ut.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Ut.add(hs)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new D,l[y]=new D;const c=new D,d=new D,u=new D,h=new he,f=new he,g=new he,v=new D,m=new D;function p(y,S,I){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,S),u.fromBufferAttribute(i,I),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,I),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const T=1/(f.x*g.y-g.x*f.y);isFinite(T)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(T),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(T),a[y].add(v),a[S].add(v),a[I].add(v),l[y].add(m),l[S].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,S=b.length;y<S;++y){const I=b[y],T=I.start,G=I.count;for(let N=T,V=T+G;N<V;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new D,_=new D,P=new D,E=new D;function C(y){P.fromBufferAttribute(s,y),E.copy(P);const S=a[y];w.copy(S),w.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(E,S);const T=_.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,T)}for(let y=0,S=b.length;y<S;++y){const I=b[y],T=I.start,G=I.count;for(let N=T,V=T+G;N<V;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new Zt(h,d,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new D;class fn{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Zo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Zo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Qg=0;class Zi extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Ts,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=qo,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wl&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uc extends Zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const tr=new D,ps=new D,ms=new D,gs=new he,nr=new he,bf=new nt,Qr=new D,ir=new D,eo=new D,eu=new he,Va=new he,tu=new he;class nu extends Rt{constructor(e=new uc){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new Dt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yf(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new fn(i,3,0,!1)),fs.setAttribute("uv",new fn(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;to(Qr.set(-.5,-.5,0),ms,o,ps,s,r),to(ir.set(.5,-.5,0),ms,o,ps,s,r),to(eo.set(.5,.5,0),ms,o,ps,s,r),eu.set(0,0),Va.set(1,0),tu.set(1,1);let a=e.ray.intersectTriangle(Qr,ir,eo,!1,tr);if(a===null&&(to(ir.set(-.5,.5,0),ms,o,ps,s,r),Va.set(0,1),a=e.ray.intersectTriangle(Qr,eo,ir,!1,tr),a===null))return;const l=e.ray.origin.distanceTo(tr);l<e.near||l>e.far||t.push({distance:l,point:tr.clone(),uv:hn.getInterpolation(tr,Qr,ir,eo,eu,Va,tu,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function to(n,e,t,i,s,r){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*gs.x-s*gs.y,nr.y=s*gs.x+r*gs.y):nr.copy(gs),n.copy(e),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4(bf)}const ti=new D,Ha=new D,no=new D,vi=new D,Wa=new D,io=new D,Xa=new D;class Jc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ha.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ha);const r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=vi.dot(this.direction),l=-vi.dot(no),c=vi.lengthSq(),d=Math.abs(1-o*o);let u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ha).addScaledVector(no,h),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){Wa.subVectors(t,e),io.subVectors(i,e),Xa.crossVectors(Wa,io);let o=this.direction.dot(Xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(vi,io));if(l<0)return null;const c=a*this.direction.dot(Wa.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(Xa);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const iu=new nt,ki=new Jc,so=new Ii,su=new D,ro=new D,oo=new D,ao=new D,$a=new D,lo=new D,ru=new D,co=new D;class bt extends Rt{constructor(e=new Dt,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&($a.fromBufferAttribute(u,e),o?lo.addScaledVector($a,d):lo.addScaledVector($a.sub(t),d))}t.add(lo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(so.containsPoint(ki.origin)===!1&&(ki.intersectSphere(so,su)===null||ki.origin.distanceToSquared(su)>(e.far-e.near)**2))&&(iu.copy(r).invert(),ki.copy(e.ray).applyMatrix4(iu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,P=w;_<P;_+=3){const E=a.getX(_),C=a.getX(_+1),y=a.getX(_+2);s=uo(this,p,e,i,c,d,u,E,C,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=uo(this,o,e,i,c,d,u,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,P=w;_<P;_+=3){const E=_,C=_+1,y=_+2;s=uo(this,p,e,i,c,d,u,E,C,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,w=m+1,_=m+2;s=uo(this,o,e,i,c,d,u,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function e0(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ci,a),l===null)return null;co.copy(a),co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,oo),n.getVertexPosition(c,ao);const d=e0(n,e,t,i,ro,oo,ao,ru);if(d){const u=new D;hn.getBarycoord(ru,ro,oo,ao,u),s&&(d.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(d.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(d.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(ro,oo,ao,h.normal),d.face=h,d.barycoord=u}return d}class wf extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vt,d=Vt,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new nt,ou=new nt,ho=[],au=new Wn,t0=new nt,sr=new bt,rr=new Ii;class Ko extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,t0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),au.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(au)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ii),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),rr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(i),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),ou.multiplyMatrices(i,vs),sr.matrixWorld=ou,sr.raycast(e,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=r,l.object=this,t.push(l)}ho.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new wf(new Float32Array(s*this.count),s,this.count,Gc,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qa=new D,n0=new D,i0=new je;class yi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qa.subVectors(i,t).cross(n0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||i0.getNormalMatrix(e),s=this.coplanarPoint(qa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Ii,s0=new he(.5,.5),fo=new D;class Kc{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],w=r[13],_=r[14],P=r[15];if(s[0].setComponents(c-o,f-d,p-g,P-b).normalize(),s[1].setComponents(c+o,f+d,p+g,P+b).normalize(),s[2].setComponents(c+a,f+u,p+v,P+w).normalize(),s[3].setComponents(c-a,f-u,p-v,P-w).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,f-h,p-m,P-_).normalize();else if(s[4].setComponents(c-l,f-h,p-m,P-_).normalize(),t===On)s[5].setComponents(c+l,f+h,p+m,P+_).normalize();else if(t===Dr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=s0.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(fo.x=s.normal.x>0?e.max.x:e.min.x,fo.y=s.normal.y>0?e.max.y:e.min.y,fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qc extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qo=new D,ea=new D,lu=new nt,or=new Jc,po=new Ii,Ya=new D,cu=new D;class r0 extends Rt{constructor(e=new Dt,t=new Qc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),ea.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qo.distanceTo(ea);e.setAttribute("lineDistance",new xt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;lu.copy(s).invert(),or.copy(e.ray).applyMatrix4(lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),b=d.getX(v+1),w=mo(this,e,or,l,p,b,v);w&&t.push(w)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=mo(this,e,or,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=mo(this,e,or,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=mo(this,e,or,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Qo.fromBufferAttribute(a,s),ea.fromBufferAttribute(a,r),t.distanceSqToSegment(Qo,ea,Ya,cu)>i)return;Ya.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ya);if(!(c<e.near||c>e.far))return{distance:c,point:cu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const du=new D,uu=new D;class Sf extends r0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)du.fromBufferAttribute(t,s),uu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+du.distanceTo(uu);e.setAttribute("lineDistance",new xt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends jt{constructor(e=[],t=Yi,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Br extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ur extends jt{constructor(e,t,i=Vn,s,r,o,a=Vt,l=Vt,c,d=li,u=1){if(d!==li&&d!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class o0 extends Ur{constructor(e,t=Vn,i=Yi,s,r,o=Vt,a=Vt,l,c=li){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ef extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ci extends Dt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(u,2));function g(v,m,p,b,w,_,P,E,C,y,S){const I=_/C,T=P/y,G=_/2,N=P/2,V=E/2,O=C+1,F=y+1;let z=0,J=0;const K=new D;for(let _e=0;_e<F;_e++){const ve=_e*T-N;for(let ce=0;ce<O;ce++){const Ue=ce*I-G;K[v]=Ue*b,K[m]=ve*w,K[p]=V,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=E>0?1:-1,d.push(K.x,K.y,K.z),u.push(ce/C),u.push(1-_e/y),z+=1}}for(let _e=0;_e<y;_e++)for(let ve=0;ve<C;ve++){const ce=h+ve+O*_e,Ue=h+ve+O*(_e+1),st=h+(ve+1)+O*(_e+1),rt=h+(ve+1)+O*_e;l.push(ce,Ue,rt),l.push(Ue,st,rt),J+=6}a.addGroup(f,J,S),f+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const go=new D,vo=new D,ja=new D,xo=new hn;class a0 extends Dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Cs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=xo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),xo.getNormal(ja),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const w=(b+1)%3,_=u[b],P=u[w],E=xo[d[b]],C=xo[d[w]],y=`${_}_${P}`,S=`${P}_${_}`;S in h&&h[S]?(ja.dot(h[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(C.x,C.y,C.z)),h[S]=null):y in h||(h[y]={index0:c[b],index1:c[w],normal:ja.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];go.fromBufferAttribute(a,v),vo.fromBufferAttribute(a,m),f.push(go.x,go.y,go.z),f.push(vo.x,vo.y,vo.z)}this.setAttribute("position",new xt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const d=i[s],h=i[s+1]-d,f=(o-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new D,s=[],r=[],o=[],a=new D,l=new nt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ed extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class l0 extends ed{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function td(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const _o=new D,Za=new td,Ja=new td,Ka=new td;class c0 extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(_o.subVectors(s[0],s[1]).add(s[0]),c=_o);const u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(_o.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Za.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,v,m),Ja.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,v,m),Ka.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Ja.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Ka.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(Za.calc(l),Ja.calc(l),Ka.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function hu(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function d0(n,e){const t=1-n;return t*t*e}function u0(n,e){return 2*(1-n)*n*e}function h0(n,e){return n*n*e}function br(n,e,t,i){return d0(n,e)+u0(n,t)+h0(n,i)}function f0(n,e){const t=1-n;return t*t*t*e}function p0(n,e){const t=1-n;return 3*t*t*n*e}function m0(n,e){return 3*(1-n)*n*n*e}function g0(n,e){return n*n*n*e}function wr(n,e,t,i,s){return f0(n,e)+p0(n,t)+m0(n,i)+g0(n,s)}class Af extends Xn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class v0 extends Xn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(wr(e,s.x,r.x,o.x,a.x),wr(e,s.y,r.y,o.y,a.y),wr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends Xn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x0 extends Xn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends Xn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _0 extends Xn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(br(e,s.x,r.x,o.x),br(e,s.y,r.y,o.y),br(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(hu(a,l.x,c.x,d.x,u.x),hu(a,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:l0,CatmullRomCurve3:c0,CubicBezierCurve:Af,CubicBezierCurve3:v0,EllipseCurve:ed,LineCurve:Tf,LineCurve3:x0,QuadraticBezierCurve:Cf,QuadraticBezierCurve3:_0,SplineCurve:Rf});class y0 extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new fc[s.type]().fromJSON(s))}return this}}class fu extends y0{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Tf(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new Cf(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Af(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Rf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new ed(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class pc extends fu{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new fu().fromJSON(s))}return this}}function b0(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Pf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=A0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let d=a,u=l;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>d&&(d=f),g>u&&(u=g)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Nr(r,o,t,a,l,c,0),o}function Pf(n,e,t,i,s){let r;if(s===k0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=pu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=pu(o/i|0,n[o],n[o+1],r);return r&&Os(r,r.next)&&(kr(r),r=r.next),r}function ji(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Os(t,t.next)||yt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Nr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&I0(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?S0(n,i,s,r):w0(n)){e.push(l.i,n.i,c.i),kr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=M0(ji(n),e),Nr(n,e,t,i,s,r,2)):o===2&&E0(n,e,t,i,s,r):Nr(ji(n),e,t,i,s,r,1);break}}}function w0(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(s,r,o),u=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&hr(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function S0(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,u=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(d,u,h),v=Math.max(a,l,c),m=Math.max(d,u,h),p=mc(f,g,e,t,i),b=mc(v,m,e,t,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=b;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&hr(a,d,l,u,c,h,w.x,w.y)&&yt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hr(a,d,l,u,c,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&hr(a,d,l,u,c,h,w.x,w.y)&&yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hr(a,d,l,u,c,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function M0(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Os(i,s)&&Df(i,t,t.next,s)&&Fr(i,s)&&Fr(s,i)&&(e.push(i.i,t.i,s.i),kr(t),kr(t.next),t=n=s),t=t.next}while(t!==n);return ji(t)}function E0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U0(o,a)){let l=Lf(o,a);o=ji(o,o.next),l=ji(l,l.next),Nr(o,e,t,i,s,r,0),Nr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function A0(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Pf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(L0(c))}s.sort(T0);for(let r=0;r<s.length;r++)t=C0(s[r],t);return t}function T0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function C0(n,e){const t=R0(n,e);if(!t)return e;const i=Lf(t,n);return ji(i,i.next),ji(t,t.next)}function R0(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Os(n,t))return t;do{if(Os(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&If(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Fr(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&P0(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function P0(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function I0(n,e,t,i){let s=n;do s.z===0&&(s.z=mc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,D0(s)}function D0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function mc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function L0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function If(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function hr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&If(n,e,t,i,s,r,o,a)}function U0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!N0(n,e)&&(Fr(n,e)&&Fr(e,n)&&F0(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Os(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Os(n,e){return n.x===e.x&&n.y===e.y}function Df(n,e,t,i){const s=bo(yt(n,e,t)),r=bo(yt(n,e,i)),o=bo(yt(t,i,n)),a=bo(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&yo(n,t,e)||r===0&&yo(n,i,e)||o===0&&yo(t,n,i)||a===0&&yo(t,e,i))}function yo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bo(n){return n>0?1:n<0?-1:0}function N0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Df(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Fr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function F0(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Lf(n,e){const t=gc(n.i,n.x,n.y),i=gc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function pu(n,e,t,i){const s=gc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function gc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class O0{static triangulate(e,t,i=2){return b0(e,t,i)}}class Es{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Es.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];mu(e),gu(i,e);let o=e.length;t.forEach(mu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gu(i,t[l]);const a=O0.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function mu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class nd extends Dt{constructor(e=new pc([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:z0;let w,_=!1,P,E,C,y;if(p){w=p.getSpacedPoints(d),_=!0,h=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;P=p.computeFrenetFrames(d,ee),E=new D,C=new D,y=new D}h||(m=0,f=0,g=0,v=0);const S=a.extractPoints(c);let I=S.shape;const T=S.holes;if(!Es.isClockWise(I)){I=I.reverse();for(let ee=0,re=T.length;ee<re;ee++){const te=T[ee];Es.isClockWise(te)&&(T[ee]=te.reverse())}}function N(ee){const te=10000000000000001e-36;let ye=ee[0];for(let R=1;R<=ee.length;R++){const ze=R%ee.length,Se=ee[ze],Ge=Se.x-ye.x,fe=Se.y-ye.y,A=Ge*Ge+fe*fe,x=Math.max(Math.abs(Se.x),Math.abs(Se.y),Math.abs(ye.x),Math.abs(ye.y)),U=te*x*x;if(A<=U){ee.splice(ze,1),R--;continue}ye=Se}}N(I),T.forEach(N);const V=T.length,O=I;for(let ee=0;ee<V;ee++){const re=T[ee];I=I.concat(re)}function F(ee,re,te){return re||tt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,te)}const z=I.length;function J(ee,re,te){let ye,R,ze;const Se=ee.x-re.x,Ge=ee.y-re.y,fe=te.x-ee.x,A=te.y-ee.y,x=Se*Se+Ge*Ge,U=Se*A-Ge*fe;if(Math.abs(U)>Number.EPSILON){const $=Math.sqrt(x),Q=Math.sqrt(fe*fe+A*A),q=re.x-Ge/$,Ce=re.y+Se/$,pe=te.x-A/Q,Fe=te.y+fe/Q,Ve=((pe-q)*A-(Fe-Ce)*fe)/(Se*A-Ge*fe);ye=q+Se*Ve-ee.x,R=Ce+Ge*Ve-ee.y;const se=ye*ye+R*R;if(se<=2)return new he(ye,R);ze=Math.sqrt(se/2)}else{let $=!1;Se>Number.EPSILON?fe>Number.EPSILON&&($=!0):Se<-Number.EPSILON?fe<-Number.EPSILON&&($=!0):Math.sign(Ge)===Math.sign(A)&&($=!0),$?(ye=-Ge,R=Se,ze=Math.sqrt(x)):(ye=Se,R=Ge,ze=Math.sqrt(x/2))}return new he(ye/ze,R/ze)}const K=[];for(let ee=0,re=O.length,te=re-1,ye=ee+1;ee<re;ee++,te++,ye++)te===re&&(te=0),ye===re&&(ye=0),K[ee]=J(O[ee],O[te],O[ye]);const _e=[];let ve,ce=K.concat();for(let ee=0,re=V;ee<re;ee++){const te=T[ee];ve=[];for(let ye=0,R=te.length,ze=R-1,Se=ye+1;ye<R;ye++,ze++,Se++)ze===R&&(ze=0),Se===R&&(Se=0),ve[ye]=J(te[ye],te[ze],te[Se]);_e.push(ve),ce=ce.concat(ve)}let Ue;if(m===0)Ue=Es.triangulateShape(O,T);else{const ee=[],re=[];for(let te=0;te<m;te++){const ye=te/m,R=f*Math.cos(ye*Math.PI/2),ze=g*Math.sin(ye*Math.PI/2)+v;for(let Se=0,Ge=O.length;Se<Ge;Se++){const fe=F(O[Se],K[Se],ze);Be(fe.x,fe.y,-R),ye===0&&ee.push(fe)}for(let Se=0,Ge=V;Se<Ge;Se++){const fe=T[Se];ve=_e[Se];const A=[];for(let x=0,U=fe.length;x<U;x++){const $=F(fe[x],ve[x],ze);Be($.x,$.y,-R),ye===0&&A.push($)}ye===0&&re.push(A)}}Ue=Es.triangulateShape(ee,re)}const st=Ue.length,rt=g+v;for(let ee=0;ee<z;ee++){const re=h?F(I[ee],ce[ee],rt):I[ee];_?(C.copy(P.normals[0]).multiplyScalar(re.x),E.copy(P.binormals[0]).multiplyScalar(re.y),y.copy(w[0]).add(C).add(E),Be(y.x,y.y,y.z)):Be(re.x,re.y,0)}for(let ee=1;ee<=d;ee++)for(let re=0;re<z;re++){const te=h?F(I[re],ce[re],rt):I[re];_?(C.copy(P.normals[ee]).multiplyScalar(te.x),E.copy(P.binormals[ee]).multiplyScalar(te.y),y.copy(w[ee]).add(C).add(E),Be(y.x,y.y,y.z)):Be(te.x,te.y,u/d*ee)}for(let ee=m-1;ee>=0;ee--){const re=ee/m,te=f*Math.cos(re*Math.PI/2),ye=g*Math.sin(re*Math.PI/2)+v;for(let R=0,ze=O.length;R<ze;R++){const Se=F(O[R],K[R],ye);Be(Se.x,Se.y,u+te)}for(let R=0,ze=T.length;R<ze;R++){const Se=T[R];ve=_e[R];for(let Ge=0,fe=Se.length;Ge<fe;Ge++){const A=F(Se[Ge],ve[Ge],ye);_?Be(A.x,A.y+w[d-1].y,w[d-1].x+te):Be(A.x,A.y,u+te)}}}j(),oe();function j(){const ee=s.length/3;if(h){let re=0,te=z*re;for(let ye=0;ye<st;ye++){const R=Ue[ye];Oe(R[2]+te,R[1]+te,R[0]+te)}re=d+m*2,te=z*re;for(let ye=0;ye<st;ye++){const R=Ue[ye];Oe(R[0]+te,R[1]+te,R[2]+te)}}else{for(let re=0;re<st;re++){const te=Ue[re];Oe(te[2],te[1],te[0])}for(let re=0;re<st;re++){const te=Ue[re];Oe(te[0]+z*d,te[1]+z*d,te[2]+z*d)}}i.addGroup(ee,s.length/3-ee,0)}function oe(){const ee=s.length/3;let re=0;le(O,re),re+=O.length;for(let te=0,ye=T.length;te<ye;te++){const R=T[te];le(R,re),re+=R.length}i.addGroup(ee,s.length/3-ee,1)}function le(ee,re){let te=ee.length;for(;--te>=0;){const ye=te;let R=te-1;R<0&&(R=ee.length-1);for(let ze=0,Se=d+m*2;ze<Se;ze++){const Ge=z*ze,fe=z*(ze+1),A=re+ye+Ge,x=re+R+Ge,U=re+R+fe,$=re+ye+fe;We(A,x,U,$)}}}function Be(ee,re,te){l.push(ee),l.push(re),l.push(te)}function Oe(ee,re,te){ut(ee),ut(re),ut(te);const ye=s.length/3,R=b.generateTopUV(i,s,ye-3,ye-2,ye-1);qe(R[0]),qe(R[1]),qe(R[2])}function We(ee,re,te,ye){ut(ee),ut(re),ut(ye),ut(re),ut(te),ut(ye);const R=s.length/3,ze=b.generateSideWallUV(i,s,R-6,R-3,R-2,R-1);qe(ze[0]),qe(ze[1]),qe(ze[3]),qe(ze[1]),qe(ze[2]),qe(ze[3])}function ut(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function qe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return B0(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fc[s.type]().fromJSON(s)),new nd(i,e.options)}}const z0={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,d)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],u=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(h,1-g),new he(v,1-p)]:[new he(a,1-l),new he(d,1-u),new he(f,1-g),new he(m,1-p)]}};function B0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Di extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const b=p*h-o;for(let w=0;w<c;w++){const _=w*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,_=b+c*(p+1),P=b+1+c*(p+1),E=b+1+c*p;f.push(w,_,E),f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}class id extends Dt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,f=new D,g=new he;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const b=p+m,w=b,_=b+i+1,P=b+i+2,E=b+1;a.push(w,_,E),a.push(_,P,E)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new id(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class sd extends Dt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new D,h=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const b=[],w=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){const E=P/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(E+_,1-w),b.push(c++)}d.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const w=d[p][b+1],_=d[p][b],P=d[p+1][b],E=d[p+1][b+1];(p!==0||o>0)&&f.push(w,_,E),(p!==i-1||l<Math.PI)&&f.push(_,P,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class G0 extends Dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const u=l[c],h=u.start,f=u.count;for(let g=h,v=h+f;g<v;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),b=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,b),vu(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const d=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,u),vu(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function vu(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function zs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=zs(n[t]);for(const s in i)e[s]=i[s]}return e}function V0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Uf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ca={clone:zs,merge:Kt};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=V0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class X0 extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rd extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ff,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $0 extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q0 extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Nf extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Qa=new nt,xu=new D,_u=new D;class Y0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xu.setFromMatrixPosition(e.matrixWorld),t.position.copy(xu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Dr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wo=new D,So=new Pi,Ln=new D;class Ff extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,So,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wo,So,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wo,So,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new D,yu=new he,bu=new he;class tn extends Ff{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,bu),t.subVectors(bu,yu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gr extends Ff{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class j0 extends Y0{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z0 extends Nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new j0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class J0 extends Nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class K0 extends Dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const xs=-90,_s=1;class Q0 extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(xs,_s,e,t);s.layers=this.layers,this.add(s);const r=new tn(xs,_s,e,t);r.layers=this.layers,this.add(r);const o=new tn(xs,_s,e,t);o.layers=this.layers,this.add(o);const a=new tn(xs,_s,e,t);a.layers=this.layers,this.add(a);const l=new tn(xs,_s,e,t);l.layers=this.layers,this.add(l);const c=new tn(xs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ev extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vc extends yf{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const wu=new nt;class tv{constructor(e,t,i=0,s=1/0){this.ray=new Jc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new jc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wu),this}intersectObject(e,t=!0,i=[]){return xc(e,this,i,t),i.sort(Su),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,i,t);return i.sort(Su),i}}function Su(n,e){return n.distance-e.distance}function xc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],e,t,!0)}}const Mu=new D,Mo=new D,ys=new D,bs=new D,el=new D,nv=new D,iv=new D;class sv{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Mu.subVectors(e,this.start),Mo.subVectors(this.end,this.start);const i=Mo.dot(Mo);let r=Mo.dot(Mu)/i;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=nv,i=iv){const s=10000000000000001e-32;let r,o;const a=this.start,l=e.start,c=this.end,d=e.end;ys.subVectors(c,a),bs.subVectors(d,l),el.subVectors(a,l);const u=ys.dot(ys),h=bs.dot(bs),f=bs.dot(el);if(u<=s&&h<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/h,o=$e(o,0,1);else{const g=ys.dot(el);if(h<=s)o=0,r=$e(-g/u,0,1);else{const v=ys.dot(bs),m=u*h-v*v;m!==0?r=$e((v*f-g*h)/m,0,1):r=0,o=(v*r+f)/h,o<0?(o=0,r=$e(-g/u,0,1)):o>1&&(o=1,r=$e((v-g)/u,0,1))}}return t.copy(a).addScaledVector(ys,r),i.copy(l).addScaledVector(bs,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Eu extends Sf{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ze(i),s=new Ze(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=h===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const d=new Dt;d.setAttribute("position",new xt(l,3)),d.setAttribute("color",new xt(c,3));const u=new Qc({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Au(n,e,t,i){const s=rv(i);switch(t){case uf:return n*e;case Gc:return n*e/s.components*s.byteLength;case Vc:return n*e/s.components*s.byteLength;case Fs:return n*e*2/s.components*s.byteLength;case Hc:return n*e*2/s.components*s.byteLength;case hf:return n*e*3/s.components*s.byteLength;case An:return n*e*4/s.components*s.byteLength;case Wc:return n*e*4/s.components*s.byteLength;case zo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Nl:return Math.max(n,16)*Math.max(e,8)/4;case Dl:case Ul:return Math.max(n,8)*Math.max(e,8)/2;case Fl:case kl:case zl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Gl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ic:case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case lc:case cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rv(n){switch(n){case un:case af:return{byteLength:1,components:1};case Pr:case lf:case ai:return{byteLength:2,components:1};case zc:case Bc:return{byteLength:2,components:4};case Vn:case Oc:case En:return{byteLength:4,components:1};case cf:case df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fc}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fc);function kf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function ov(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_v=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ov=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$v=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ox=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ax=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_x=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ux=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,s_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,p_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,m_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,N_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:dv,alphatest_fragment:uv,alphatest_pars_fragment:hv,aomap_fragment:fv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:vv,beginnormal_vertex:xv,bsdfs:_v,iridescence_fragment:yv,bumpmap_pars_fragment:bv,clipping_planes_fragment:wv,clipping_planes_pars_fragment:Sv,clipping_planes_pars_vertex:Mv,clipping_planes_vertex:Ev,color_fragment:Av,color_pars_fragment:Tv,color_pars_vertex:Cv,color_vertex:Rv,common:Pv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Dv,displacementmap_pars_vertex:Lv,displacementmap_vertex:Uv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:kv,colorspace_pars_fragment:Ov,envmap_fragment:zv,envmap_common_pars_fragment:Bv,envmap_pars_fragment:Gv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Hv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:$v,fog_pars_fragment:qv,gradientmap_pars_fragment:Yv,lightmap_pars_fragment:jv,lights_lambert_fragment:Zv,lights_lambert_pars_fragment:Jv,lights_pars_begin:Kv,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:sx,lights_physical_pars_fragment:rx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:cx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:ux,logdepthbuf_vertex:hx,map_fragment:fx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:xx,morphinstance_vertex:_x,morphcolor_vertex:yx,morphnormal_vertex:bx,morphtarget_pars_vertex:wx,morphtarget_vertex:Sx,normal_fragment_begin:Mx,normal_fragment_maps:Ex,normal_pars_fragment:Ax,normal_pars_vertex:Tx,normal_vertex:Cx,normalmap_pars_fragment:Rx,clearcoat_normal_fragment_begin:Px,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Lx,opaque_fragment:Ux,packing:Nx,premultiplied_alpha_fragment:Fx,project_vertex:kx,dithering_fragment:Ox,dithering_pars_fragment:zx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:Gx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Hx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:$x,skinning_pars_vertex:qx,skinning_vertex:Yx,skinnormal_vertex:jx,specularmap_fragment:Zx,specularmap_pars_fragment:Jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Qx,transmission_fragment:e_,transmission_pars_fragment:t_,uv_pars_fragment:n_,uv_pars_vertex:i_,uv_vertex:s_,worldpos_vertex:r_,background_vert:o_,background_frag:a_,backgroundCube_vert:l_,backgroundCube_frag:c_,cube_vert:d_,cube_frag:u_,depth_vert:h_,depth_frag:f_,distance_vert:p_,distance_frag:m_,equirect_vert:g_,equirect_frag:v_,linedashed_vert:x_,linedashed_frag:__,meshbasic_vert:y_,meshbasic_frag:b_,meshlambert_vert:w_,meshlambert_frag:S_,meshmatcap_vert:M_,meshmatcap_frag:E_,meshnormal_vert:A_,meshnormal_frag:T_,meshphong_vert:C_,meshphong_frag:R_,meshphysical_vert:P_,meshphysical_frag:I_,meshtoon_vert:D_,meshtoon_frag:L_,points_vert:U_,points_frag:N_,shadow_vert:F_,shadow_frag:k_,sprite_vert:O_,sprite_frag:z_},xe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},nn={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};nn.physical={uniforms:Kt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Eo={r:0,b:0,g:0},zi=new Hn,B_=new nt;function G_(n,e,t,i,s,r){const o=new Ze(0);let a=s===!0?0:1,l,c,d=null,u=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const _=b.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(b){let w=!1;const _=f(b);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===la)?(c===void 0&&(c=new bt(new ci(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:zs(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),zi.copy(w.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(zi)),c.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,(d!==_||u!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new bt(new Di(2,2),new mn({name:"BackgroundMaterial",uniforms:zs(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Eo,Uf(n)),t.buffers.color.setClear(Eo.r,Eo.g,Eo.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:v,dispose:p}}function V_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(T,G,N,V,O){let F=!1;const z=u(T,V,N,G);r!==z&&(r=z,c(r.object)),F=f(T,V,N,O),F&&g(T,V,N,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(T,G,N,V),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function d(T){return n.deleteVertexArray(T)}function u(T,G,N,V){const O=V.wireframe===!0;let F=i[G.id];F===void 0&&(F={},i[G.id]=F);const z=T.isInstancedMesh===!0?T.id:0;let J=F[z];J===void 0&&(J={},F[z]=J);let K=J[N.id];K===void 0&&(K={},J[N.id]=K);let _e=K[O];return _e===void 0&&(_e=h(l()),K[O]=_e),_e}function h(T){const G=[],N=[],V=[];for(let O=0;O<t;O++)G[O]=0,N[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:V,object:T,attributes:{},index:null}}function f(T,G,N,V){const O=r.attributes,F=G.attributes;let z=0;const J=N.getAttributes();for(const K in J)if(J[K].location>=0){const ve=O[K];let ce=F[K];if(ce===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(ce=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(ce=T.instanceColor)),ve===void 0||ve.attribute!==ce||ce&&ve.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==V}function g(T,G,N,V){const O={},F=G.attributes;let z=0;const J=N.getAttributes();for(const K in J)if(J[K].location>=0){let ve=F[K];ve===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor));const ce={};ce.attribute=ve,ve&&ve.data&&(ce.data=ve.data),O[K]=ce,z++}r.attributes=O,r.attributesNum=z,r.index=V}function v(){const T=r.newAttributes;for(let G=0,N=T.length;G<N;G++)T[G]=0}function m(T){p(T,0)}function p(T,G){const N=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;N[T]=1,V[T]===0&&(n.enableVertexAttribArray(T),V[T]=1),O[T]!==G&&(n.vertexAttribDivisor(T,G),O[T]=G)}function b(){const T=r.newAttributes,G=r.enabledAttributes;for(let N=0,V=G.length;N<V;N++)G[N]!==T[N]&&(n.disableVertexAttribArray(N),G[N]=0)}function w(T,G,N,V,O,F,z){z===!0?n.vertexAttribIPointer(T,G,N,O,F):n.vertexAttribPointer(T,G,N,V,O,F)}function _(T,G,N,V){v();const O=V.attributes,F=N.getAttributes(),z=G.defaultAttributeValues;for(const J in F){const K=F[J];if(K.location>=0){let _e=O[J];if(_e===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),_e!==void 0){const ve=_e.normalized,ce=_e.itemSize,Ue=e.get(_e);if(Ue===void 0)continue;const st=Ue.buffer,rt=Ue.type,j=Ue.bytesPerElement,oe=rt===n.INT||rt===n.UNSIGNED_INT||_e.gpuType===Oc;if(_e.isInterleavedBufferAttribute){const le=_e.data,Be=le.stride,Oe=_e.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)p(K.location+We,le.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<K.locationSize;We++)m(K.location+We);n.bindBuffer(n.ARRAY_BUFFER,st);for(let We=0;We<K.locationSize;We++)w(K.location+We,ce/K.locationSize,rt,ve,Be*j,(Oe+ce/K.locationSize*We)*j,oe)}else{if(_e.isInstancedBufferAttribute){for(let le=0;le<K.locationSize;le++)p(K.location+le,_e.meshPerAttribute);T.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let le=0;le<K.locationSize;le++)m(K.location+le);n.bindBuffer(n.ARRAY_BUFFER,st);for(let le=0;le<K.locationSize;le++)w(K.location+le,ce/K.locationSize,rt,ve,ce*j,ce/K.locationSize*le*j,oe)}}else if(z!==void 0){const ve=z[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(K.location,ve);break;case 3:n.vertexAttrib3fv(K.location,ve);break;case 4:n.vertexAttrib4fv(K.location,ve);break;default:n.vertexAttrib1fv(K.location,ve)}}}}b()}function P(){S();for(const T in i){const G=i[T];for(const N in G){const V=G[N];for(const O in V){const F=V[O];for(const z in F)d(F[z].object),delete F[z];delete V[O]}}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const G=i[T.id];for(const N in G){const V=G[N];for(const O in V){const F=V[O];for(const z in F)d(F[z].object),delete F[z];delete V[O]}}delete i[T.id]}function C(T){for(const G in i){const N=i[G];for(const V in N){const O=N[V];if(O[T.id]===void 0)continue;const F=O[T.id];for(const z in F)d(F[z].object),delete F[z];delete O[T.id]}}}function y(T){for(const G in i){const N=i[G],V=T.isInstancedMesh===!0?T.id:0,O=N[V];if(O!==void 0){for(const F in O){const z=O[F];for(const J in z)d(z[J].object),delete z[J];delete O[F]}delete N[V],Object.keys(N).length===0&&delete i[G]}}}function S(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:I,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function H_(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function W_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==An&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==un&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==En&&!y)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:P,samples:E}}function X_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new yi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const b=r?0:i,w=b*4;let _=p.clippingState||null;l.value=_,_=d(g,h,w,f);for(let P=0;P!==w;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Si=4,Tu=[.125,.215,.35,.446,.526,.582],Vi=20,$_=256,ar=new Gr,Cu=new Ze;let tl=null,nl=0,il=0,sl=!1;const q_=new D;class Ru{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=q_}=r;tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),this._renderer.xr.enabled=sl,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ai,format:An,colorSpace:ks,depthBuffer:!1},s=Pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y_(r)),this._blurMaterial=Z_(r,e,t),this._ggxMaterial=j_(r,e,t)}return s}_compileMaterial(e){const t=new bt(new Dt,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cu),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ci,new pn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Cu),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const P=this._cubeSize;ws(s,_*P,w>2?P:0,P,P),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Yi||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ar)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Si?i-g+Si:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ws(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ws(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,ar)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Vi;m>Vi&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let b=0;for(let C=0;C<Vi;++C){const y=C/v,S=Math.exp(-y*y/2);p.push(S),C===0?b+=S:C<m&&(b+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const _=this._sizeLods[s],P=3*_*(s>w-Si?s-w+Si:0),E=4*(this._cubeSize-_);ws(t,P,E,3*_,2*_),l.setRenderTarget(t),l.render(u,ar)}}function Y_(n){const e=[],t=[],i=[];let s=n;const r=n-Si+1+Tu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Si?l=Tu[o-n+Si-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,y=E>2?0:-1,S=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];b.set(S,v*g*E),w.set(h,m*g*E);const I=[E,E,E,E,E,E];_.set(I,p*g*E)}const P=new Dt;P.setAttribute("position",new Zt(b,v)),P.setAttribute("uv",new Zt(w,m)),P.setAttribute("faceIndex",new Zt(_,p)),i.push(new bt(P,null)),s>Si&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Pu(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function j_(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:da(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Z_(n,e,t){const i=new Float32Array(Vi),s=new D(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Iu(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Du(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function da(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Of extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ci(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ri});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Ht),new Q0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function J_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===wa||f===Sa)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new Of(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===wa||f===Sa,v=f===Yi||f===Ns;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ru(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Ru(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,f){return f===wa?h.mapping=Yi:f===Sa&&(h.mapping=Ns),h}function l(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function K_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Jo("WebGLRenderer: "+i+" extension not supported."),s}}}function Q_(n,e,t,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let w=0,_=b.length;w<_;w+=3){const P=b[w+0],E=b[w+1],C=b[w+2];h.push(P,E,E,C,C,P)}}else{const b=g.array;v=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){const P=w+0,E=w+1,C=w+2;h.push(P,E,E,C,C,P)}}const m=new(g.count>=65535?_f:xf)(h,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function ey(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,h*o,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*v[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ty(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ny(n,e,t){const i=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let _=a.attributes.position.count*w,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*P*4*u),C=new mf(E,_,P,u);C.type=En,C.needsUpdate=!0;const y=w*4;for(let I=0;I<u;I++){const T=m[I],G=p[I],N=b[I],V=_*P*4*I;for(let O=0;O<T.count;O++){const F=O*y;f===!0&&(s.fromBufferAttribute(T,O),E[V+F+0]=s.x,E[V+F+1]=s.y,E[V+F+2]=s.z,E[V+F+3]=0),g===!0&&(s.fromBufferAttribute(G,O),E[V+F+4]=s.x,E[V+F+5]=s.y,E[V+F+6]=s.z,E[V+F+7]=0),v===!0&&(s.fromBufferAttribute(N,O),E[V+F+8]=s.x,E[V+F+9]=s.y,E[V+F+10]=s.z,E[V+F+11]=N.itemSize===4?s.w:1)}}h={count:u,texture:C,size:new he(_,P)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function iy(n,e,t,i,s){let r=new WeakMap;function o(c){const d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const sy={[Kh]:"LINEAR_TONE_MAPPING",[Qh]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[tf]:"ACES_FILMIC_TONE_MAPPING",[sf]:"AGX_TONE_MAPPING",[rf]:"NEUTRAL_TONE_MAPPING",[nf]:"CUSTOM_TONE_MAPPING"};function ry(n,e,t,i,s){const r=new Cn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Cn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),a=new Dt;a.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new X0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new bt(a,l),d=new Gr(-1,1,1,-1,0,1);let u=null,h=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(b,w){r.setSize(b,w),o.setSize(b,w);for(let _=0;_<m.length;_++){const P=m[_];P.setSize&&P.setSize(b,w)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const w=r.width,_=r.height;for(let P=0;P<m.length;P++){const E=m[P];E.setSize&&E.setSize(w,_)}},this.begin=function(b,w){if(f||b.toneMapping===zn&&m.length===0)return!1;if(v=w,w!==null){const _=w.width,P=w.height;(r.width!==_||r.height!==P)&&this.setSize(_,P)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=zn,!0},this.hasRenderPass=function(){return p},this.end=function(b,w){b.toneMapping=g,f=!0;let _=r,P=o;for(let E=0;E<m.length;E++){const C=m[E];if(C.enabled!==!1&&(C.render(b,P,_,w),C.needsSwap!==!1)){const y=_;_=P,P=y}}if(u!==b.outputColorSpace||h!==b.toneMapping){u=b.outputColorSpace,h=b.toneMapping,l.defines={},it.getTransfer(u)===ct&&(l.defines.SRGB_TRANSFER="");const E=sy[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(c,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const zf=new jt,_c=new Ur(1,1),Bf=new mf,Gf=new Vg,Vf=new Mf,Lu=[],Uu=[],Nu=new Float32Array(16),Fu=new Float32Array(9),ku=new Float32Array(4);function js(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Lu[s];if(r===void 0&&(r=new Float32Array(s),Lu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ua(n,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function dy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),It(t,i)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Fu.set(i),n.uniformMatrix3fv(this.addr,!1,Fu),It(t,i)}}function hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,i))return;Nu.set(i),n.uniformMatrix4fv(this.addr,!1,Nu),It(t,i)}}function fy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function by(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(_c.compareFunction=t.isReversedDepthBuffer()?$c:Xc,r=_c):r=zf,t.setTexture2D(e||r,s)}function wy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gf,s)}function Sy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vf,s)}function My(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Bf,s)}function Ey(n){switch(n){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return cy;case 35674:return dy;case 35675:return uy;case 35676:return hy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return xy;case 36295:return _y;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}function Ay(n,e){n.uniform1fv(this.addr,e)}function Ty(n,e){const t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function Cy(n,e){const t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Ry(n,e){const t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Iy(n,e){const t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ly(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Ny(n,e){n.uniform3iv(this.addr,e)}function Fy(n,e){n.uniform4iv(this.addr,e)}function ky(n,e){n.uniform1uiv(this.addr,e)}function Oy(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function Gy(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=_c:o=zf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Vy(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gf,r[o])}function Hy(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vf,r[o])}function Wy(n,e,t){const i=this.cache,s=e.length,r=ua(t,s);Pt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bf,r[o])}function Xy(n){switch(n){case 5126:return Ay;case 35664:return Ty;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return Fy;case 5125:return ky;case 36294:return Oy;case 36295:return zy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Wy}}class $y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const rl=/(\w+)(\])?(\[|\.)?/g;function Ou(n,e){n.seq.push(e),n.map[e.id]=e}function jy(n,e,t){const i=n.name,s=i.length;for(rl.lastIndex=0;;){const r=rl.exec(i),o=rl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ou(t,c===void 0?new $y(a,n,e):new qy(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new Yy(a),Ou(t,u)),t=u}}}class Ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);jy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function zu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zy=37297;let Jy=0;function Ky(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Bu=new je;function Qy(n){it._getMatrix(Bu,it.workingColorSpace,n);const e=`mat3( ${Bu.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Yo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ky(n.getShaderSource(e),a)}else return r}function eb(n,e){const t=Qy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tb={[Kh]:"Linear",[Qh]:"Reinhard",[ef]:"Cineon",[tf]:"ACESFilmic",[sf]:"AgX",[rf]:"Neutral",[nf]:"Custom"};function nb(n,e){const t=tb[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new D;function ib(){it.getLuminanceCoefficients(Ao);const n=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function rb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ob(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function fr(n){return n!==""}function Vu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(ab,cb)}const lb=new Map;function cb(n,e){let t=Je[e];if(t===void 0){const i=lb.get(e);if(i!==void 0)t=Je[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wu(n){return n.replace(db,ub)}function ub(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hb={[Oo]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function fb(n){return hb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pb={[Yi]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE_UV"};function mb(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":pb[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const gb={[Ns]:"ENVMAP_MODE_REFRACTION"};function vb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":gb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xb={[kc]:"ENVMAP_BLENDING_MULTIPLY",[rg]:"ENVMAP_BLENDING_MIX",[og]:"ENVMAP_BLENDING_ADD"};function _b(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xb[n.combine]||"ENVMAP_BLENDING_NONE"}function yb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fb(t),c=mb(t),d=vb(t),u=_b(t),h=yb(t),f=sb(t),g=rb(r),v=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),p=[Xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Je.tonemapping_pars_fragment:"",t.toneMapping!==zn?nb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,eb("linearToOutputTexel",t.outputColorSpace),ib(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=yc(o),o=Vu(o,t),o=Hu(o,t),a=yc(a),a=Vu(a,t),a=Hu(a,t),o=Wu(o),a=Wu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+o,_=b+p+a,P=zu(s,s.VERTEX_SHADER,w),E=zu(s,s.FRAGMENT_SHADER,_);s.attachShader(v,P),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(T){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(P)||"",V=s.getShaderInfoLog(E)||"",O=G.trim(),F=N.trim(),z=V.trim();let J=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,E);else{const _e=Gu(s,P,"vertex"),ve=Gu(s,E,"fragment");tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+O+`
`+_e+`
`+ve)}else O!==""?He("WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(K=!1);K&&(T.diagnostics={runnable:J,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(P),s.deleteShader(E),y=new Ho(s,v),S=ob(s,v)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,Zy)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=E,this}let wb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Mb(e),t.set(e,i)),i}}class Mb{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Eb(n,e,t,i,s,r){const o=new jc,a=new Sb,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,S,I,T,G){const N=T.fog,V=G.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?T.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||O,F),J=z&&z.mapping===la?z.image.height:null,K=f[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const _e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=_e!==void 0?_e.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Ue,st,rt,j;if(K){const lt=nn[K];Ue=lt.vertexShader,st=lt.fragmentShader}else Ue=y.vertexShader,st=y.fragmentShader,a.update(y),rt=a.getVertexShaderID(y),j=a.getFragmentShaderID(y);const oe=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Be=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,We=!!y.map,ut=!!y.matcap,qe=!!z,ee=!!y.aoMap,re=!!y.lightMap,te=!!y.bumpMap,ye=!!y.normalMap,R=!!y.displacementMap,ze=!!y.emissiveMap,Se=!!y.metalnessMap,Ge=!!y.roughnessMap,fe=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,U=y.iridescence>0,$=y.sheen>0,Q=y.transmission>0,q=fe&&!!y.anisotropyMap,Ce=A&&!!y.clearcoatMap,pe=A&&!!y.clearcoatNormalMap,Fe=A&&!!y.clearcoatRoughnessMap,Ve=U&&!!y.iridescenceMap,se=U&&!!y.iridescenceThicknessMap,de=$&&!!y.sheenColorMap,Re=$&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,Me=!!y.specularColorMap,Ke=!!y.specularIntensityMap,L=Q&&!!y.transmissionMap,ge=Q&&!!y.thicknessMap,ue=!!y.gradientMap,Te=!!y.alphaMap,ae=y.alphaTest>0,Y=!!y.alphaHash,Pe=!!y.extensions;let Xe=zn;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const gt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:st,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Be,instancingColor:Be&&G.instanceColor!==null,instancingMorph:Be&&G.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ks,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:ut,envMap:qe,envMapMode:qe&&z.mapping,envMapCubeUVHeight:J,aoMap:ee,lightMap:re,bumpMap:te,normalMap:ye,displacementMap:R,emissiveMap:ze,normalMapObjectSpace:ye&&y.normalMapType===cg,normalMapTangentSpace:ye&&y.normalMapType===ff,metalnessMap:Se,roughnessMap:Ge,anisotropy:fe,anisotropyMap:q,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:Fe,dispersion:x,iridescence:U,iridescenceMap:Ve,iridescenceThicknessMap:se,sheen:$,sheenColorMap:de,sheenRoughnessMap:Re,specularMap:Ie,specularColorMap:Me,specularIntensityMap:Ke,transmission:Q,transmissionMap:L,thicknessMap:ge,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:Te,alphaTest:ae,alphaHash:Y,combine:y.combine,mapUv:We&&g(y.map.channel),aoMapUv:ee&&g(y.aoMap.channel),lightMapUv:re&&g(y.lightMap.channel),bumpMapUv:te&&g(y.bumpMap.channel),normalMapUv:ye&&g(y.normalMap.channel),displacementMapUv:R&&g(y.displacementMap.channel),emissiveMapUv:ze&&g(y.emissiveMap.channel),metalnessMapUv:Se&&g(y.metalnessMap.channel),roughnessMapUv:Ge&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:Ce&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(y.sheenRoughnessMap.channel),specularMapUv:Ie&&g(y.specularMap.channel),specularColorMapUv:Me&&g(y.specularColorMap.channel),specularIntensityMapUv:Ke&&g(y.specularIntensityMap.channel),transmissionMapUv:L&&g(y.transmissionMap.channel),thicknessMapUv:ge&&g(y.thicknessMap.channel),alphaMapUv:Te&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ye||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(We||Te),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Pe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function p(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const S=f[y.type];let I;if(S){const T=nn[S];I=ca.clone(T.uniforms)}else I=y.uniforms;return I}function _(y,S){let I=d.get(S);return I!==void 0?++I.usedTimes:(I=new bb(n,S,y,s),c.push(I),d.set(S,I)),I}function P(y){if(--y.usedTimes===0){const S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function C(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:P,releaseShaderCache:E,programs:c,dispose:C}}function Ab(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Tb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,m,p){let b=n[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=o(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function l(h,f,g,v,m,p){const b=a(h,f,g,v,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(h,f,g,v,m,p){const b=a(h,f,g,v,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function d(h,f){t.length>1&&t.sort(h||Tb),i.length>1&&i.sort(f||$u),s.length>1&&s.sort(f||$u)}function u(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function Cb(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new qu,n.set(i,[o])):s>=r.length?(o=new qu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ze};break;case"SpotLight":t={position:new D,direction:new D,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Pb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ib=0;function Db(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lb(n){const e=new Rb,t=Pb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new nt,o=new nt;function a(c){let d=0,u=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,w=0,_=0,P=0,E=0,C=0;c.sort(Db);for(let S=0,I=c.length;S<I;S++){const T=c[S],G=T.color,N=T.intensity,V=T.distance;let O=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Fs?O=T.shadow.map.texture:O=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)d+=G.r*N,u+=G.g*N,h+=G.b*N;else if(T.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(T.sh.coefficients[F],N);C++}else if(T.isDirectionalLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const z=T.shadow,J=t.get(T);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=T.shadow.matrix,b++}i.directional[f]=F,f++}else if(T.isSpotLight){const F=e.get(T);F.position.setFromMatrixPosition(T.matrixWorld),F.color.copy(G).multiplyScalar(N),F.distance=V,F.coneCos=Math.cos(T.angle),F.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),F.decay=T.decay,i.spot[v]=F;const z=T.shadow;if(T.map&&(i.spotLightMap[P]=T.map,P++,z.updateMatrices(T),T.castShadow&&E++),i.spotLightMatrix[v]=z.matrix,T.castShadow){const J=t.get(T);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=O,_++}v++}else if(T.isRectAreaLight){const F=e.get(T);F.color.copy(G).multiplyScalar(N),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=F,m++}else if(T.isPointLight){const F=e.get(T);if(F.color.copy(T.color).multiplyScalar(T.intensity),F.distance=T.distance,F.decay=T.decay,T.castShadow){const z=T.shadow,J=t.get(T);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=T.shadow.matrix,w++}i.point[g]=F,g++}else if(T.isHemisphereLight){const F=e.get(T);F.skyColor.copy(T.color).multiplyScalar(N),F.groundColor.copy(T.groundColor).multiplyScalar(N),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==w||y.numSpotShadows!==_||y.numSpotMaps!==P||y.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+P-E,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,y.directionalLength=f,y.pointLength=g,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=w,y.numSpotShadows=_,y.numSpotMaps=P,y.numLightProbes=C,i.version=Ib++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Yu(n){const e=new Lb(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Ub(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Yu(n),e.set(s,[a])):r>=o.length?(a=new Yu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kb=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Ob=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ju=new nt,lr=new D,ol=new D;function zb(n,e,t){let i=new Kc;const s=new he,r=new he,o=new mt,a=new $0,l=new q0,c={},d=t.maxTextureSize,u={[Ci]:rn,[rn]:Ci,[ii]:ii},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Nb,fragmentShader:Fb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oo;let p=this.type;this.render=function(E,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Vm&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oo);const S=n.getRenderTarget(),I=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ri),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=p!==this.type;N&&C.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=E.length;V<O;V++){const F=E[V],z=F.shadow;if(z===void 0){He("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=K,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ur){if(F.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Cn(s.x,s.y,{format:Fs,type:ai,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new Ur(s.x,s.y,En),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=li,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else F.isPointLight?(z.map=new Of(s.x),z.map.depthTexture=new o0(s.x,Vn)):(z.map=new Cn(s.x,s.y),z.map.depthTexture=new Ur(s.x,s.y,Vn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=li,this.type===Oo?(z.map.depthTexture.compareFunction=K?$c:Xc,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}const _e=z.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<_e;ve++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(z.map),n.clear());const ce=z.getViewport(ve);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(o)}if(F.isPointLight){const ce=z.camera,Ue=z.matrix,st=F.distance||ce.far;st!==ce.far&&(ce.far=st,ce.updateProjectionMatrix()),lr.setFromMatrixPosition(F.matrixWorld),ce.position.copy(lr),ol.copy(ce.position),ol.add(kb[ve]),ce.up.copy(Ob[ve]),ce.lookAt(ol),ce.updateMatrixWorld(),Ue.makeTranslation(-lr.x,-lr.y,-lr.z),ju.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ju,ce.coordinateSystem,ce.reversedDepth)}else z.updateMatrices(F);i=z.getFrustum(),_(C,y,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===ur&&b(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,I,T)};function b(E,C){const y=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Cn(s.x,s.y,{format:Fs,type:ai})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(C,null,y,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(C,null,y,f,v,null)}function w(E,C,y,S){let I=null;const T=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)I=T;else if(I=y.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const G=I.uuid,N=C.uuid;let V=c[G];V===void 0&&(V={},c[G]=V);let O=V[N];O===void 0&&(O=I.clone(),V[N]=O,C.addEventListener("dispose",P)),I=O}if(I.visible=C.visible,I.wireframe=C.wireframe,S===ur?I.side=C.shadowSide!==null?C.shadowSide:C.side:I.side=C.shadowSide!==null?C.shadowSide:u[C.side],I.alphaMap=C.alphaMap,I.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,I.map=C.map,I.clipShadows=C.clipShadows,I.clippingPlanes=C.clippingPlanes,I.clipIntersection=C.clipIntersection,I.displacementMap=C.displacementMap,I.displacementScale=C.displacementScale,I.displacementBias=C.displacementBias,I.wireframeLinewidth=C.wireframeLinewidth,I.linewidth=C.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const G=n.properties.get(I);G.light=y}return I}function _(E,C,y,S,I){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===ur)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const N=e.update(E),V=E.material;if(Array.isArray(V)){const O=N.groups;for(let F=0,z=O.length;F<z;F++){const J=O[F],K=V[J.materialIndex];if(K&&K.visible){const _e=w(E,K,S,I);E.onBeforeShadow(n,E,C,y,N,_e,J),n.renderBufferDirect(y,null,N,_e,E,J),E.onAfterShadow(n,E,C,y,N,_e,J)}}}else if(V.visible){const O=w(E,V,S,I);E.onBeforeShadow(n,E,C,y,N,O,null),n.renderBufferDirect(y,null,N,O,E,null),E.onAfterShadow(n,E,C,y,N,O,null)}}const G=E.children;for(let N=0,V=G.length;N<V;N++)_(G[N],C,y,S,I)}function P(E){E.target.removeEventListener("dispose",P);for(const y in c){const S=c[y],I=E.target.uuid;I in S&&(S[I].dispose(),delete S[I])}}}function Bb(n,e){function t(){let L=!1;const ge=new mt;let ue=null;const Te=new mt(0,0,0,0);return{setMask:function(ae){ue!==ae&&!L&&(n.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){L=ae},setClear:function(ae,Y,Pe,Xe,gt){gt===!0&&(ae*=Xe,Y*=Xe,Pe*=Xe),ge.set(ae,Y,Pe,Xe),Te.equals(ge)===!1&&(n.clearColor(ae,Y,Pe,Xe),Te.copy(ge))},reset:function(){L=!1,ue=null,Te.set(-1,0,0,0)}}}function i(){let L=!1,ge=!1,ue=null,Te=null,ae=null;return{setReversed:function(Y){if(ge!==Y){const Pe=e.get("EXT_clip_control");Y?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ge=Y;const Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return ge},setTest:function(Y){Y?oe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Y){ue!==Y&&!L&&(n.depthMask(Y),ue=Y)},setFunc:function(Y){if(ge&&(Y=_g[Y]),Te!==Y){switch(Y){case Sl:n.depthFunc(n.NEVER);break;case Ml:n.depthFunc(n.ALWAYS);break;case El:n.depthFunc(n.LESS);break;case Us:n.depthFunc(n.LEQUAL);break;case Al:n.depthFunc(n.EQUAL);break;case Tl:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Rl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=Y}},setLocked:function(Y){L=Y},setClear:function(Y){ae!==Y&&(ae=Y,ge&&(Y=1-Y),n.clearDepth(Y))},reset:function(){L=!1,ue=null,Te=null,ae=null,ge=!1}}}function s(){let L=!1,ge=null,ue=null,Te=null,ae=null,Y=null,Pe=null,Xe=null,gt=null;return{setTest:function(lt){L||(lt?oe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!L&&(n.stencilMask(lt),ge=lt)},setFunc:function(lt,Yn,jn){(ue!==lt||Te!==Yn||ae!==jn)&&(n.stencilFunc(lt,Yn,jn),ue=lt,Te=Yn,ae=jn)},setOp:function(lt,Yn,jn){(Y!==lt||Pe!==Yn||Xe!==jn)&&(n.stencilOp(lt,Yn,jn),Y=lt,Pe=Yn,Xe=jn)},setLocked:function(lt){L=lt},setClear:function(lt){gt!==lt&&(n.clearStencil(lt),gt=lt)},reset:function(){L=!1,ge=null,ue=null,Te=null,ae=null,Y=null,Pe=null,Xe=null,gt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,_=null,P=null,E=null,C=new Ze(0,0,0),y=0,S=!1,I=null,T=null,G=null,N=null,V=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=z>=2);let K=null,_e={};const ve=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Ue=new mt().fromArray(ve),st=new mt().fromArray(ce);function rt(L,ge,ue,Te){const ae=new Uint8Array(4),Y=n.createTexture();n.bindTexture(L,Y),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ue;Pe++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ge+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Y}const j={};j[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Us),te(!1),ye(Nd),oe(n.CULL_FACE),ee(ri);function oe(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function le(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Be(L,ge){return u[L]!==ge?(n.bindFramebuffer(L,ge),u[L]=ge,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(L,ge){let ue=f,Te=!1;if(L){ue=h.get(ge),ue===void 0&&(ue=[],h.set(ge,ue));const ae=L.textures;if(ue.length!==ae.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,Pe=ae.length;Y<Pe;Y++)ue[Y]=n.COLOR_ATTACHMENT0+Y;ue.length=ae.length,Te=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ue)}function We(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const ut={[Gi]:n.FUNC_ADD,[Hm]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};ut[Xm]=n.MIN,ut[$m]=n.MAX;const qe={[qm]:n.ZERO,[Jh]:n.ONE,[Ym]:n.SRC_COLOR,[wl]:n.SRC_ALPHA,[eg]:n.SRC_ALPHA_SATURATE,[Km]:n.DST_COLOR,[Zm]:n.DST_ALPHA,[jm]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Jm]:n.ONE_MINUS_DST_ALPHA,[tg]:n.CONSTANT_COLOR,[ng]:n.ONE_MINUS_CONSTANT_COLOR,[ig]:n.CONSTANT_ALPHA,[sg]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(L,ge,ue,Te,ae,Y,Pe,Xe,gt,lt){if(L===ri){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),L!==Zh){if(L!==m||lt!==S){if((p!==Gi||_!==Gi)&&(n.blendEquation(n.FUNC_ADD),p=Gi,_=Gi),lt)switch(L){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFunc(n.ONE,n.ONE);break;case kd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Od:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kd:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Od:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",L);break}b=null,w=null,P=null,E=null,C.set(0,0,0),y=0,m=L,S=lt}return}ae=ae||ge,Y=Y||ue,Pe=Pe||Te,(ge!==p||ae!==_)&&(n.blendEquationSeparate(ut[ge],ut[ae]),p=ge,_=ae),(ue!==b||Te!==w||Y!==P||Pe!==E)&&(n.blendFuncSeparate(qe[ue],qe[Te],qe[Y],qe[Pe]),b=ue,w=Te,P=Y,E=Pe),(Xe.equals(C)===!1||gt!==y)&&(n.blendColor(Xe.r,Xe.g,Xe.b,gt),C.copy(Xe),y=gt),m=L,S=!1}function re(L,ge){L.side===ii?le(n.CULL_FACE):oe(n.CULL_FACE);let ue=L.side===rn;ge&&(ue=!ue),te(ue),L.blending===Ts&&L.transparent===!1?ee(ri):ee(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Te=L.stencilWrite;a.setTest(Te),Te&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ze(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(L){I!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),I=L)}function ye(L){L!==Bm?(oe(n.CULL_FACE),L!==T&&(L===Nd?n.cullFace(n.BACK):L===Gm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),T=L}function R(L){L!==G&&(F&&n.lineWidth(L),G=L)}function ze(L,ge,ue){L?(oe(n.POLYGON_OFFSET_FILL),(N!==ge||V!==ue)&&(N=ge,V=ue,o.getReversed()&&(ge=-ge),n.polygonOffset(ge,ue))):le(n.POLYGON_OFFSET_FILL)}function Se(L){L?oe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function Ge(L){L===void 0&&(L=n.TEXTURE0+O-1),K!==L&&(n.activeTexture(L),K=L)}function fe(L,ge,ue){ue===void 0&&(K===null?ue=n.TEXTURE0+O-1:ue=K);let Te=_e[ue];Te===void 0&&(Te={type:void 0,texture:void 0},_e[ue]=Te),(Te.type!==L||Te.texture!==ge)&&(K!==ue&&(n.activeTexture(ue),K=ue),n.bindTexture(L,ge||j[L]),Te.type=L,Te.texture=ge)}function A(){const L=_e[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function $(){try{n.texSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Q(){try{n.texSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function pe(){try{n.texStorage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function Fe(){try{n.texStorage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function Ve(){try{n.texImage2D(...arguments)}catch(L){tt("WebGLState:",L)}}function se(){try{n.texImage3D(...arguments)}catch(L){tt("WebGLState:",L)}}function de(L){Ue.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ue.copy(L))}function Re(L){st.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Ie(L,ge){let ue=c.get(ge);ue===void 0&&(ue=new WeakMap,c.set(ge,ue));let Te=ue.get(L);Te===void 0&&(Te=n.getUniformBlockIndex(ge,L.name),ue.set(L,Te))}function Me(L,ge){const Te=c.get(ge).get(L);l.get(ge)!==Te&&(n.uniformBlockBinding(ge,Te,L.__bindingPointIndex),l.set(ge,Te))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,_e={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,_=null,P=null,E=null,C=new Ze(0,0,0),y=0,S=!1,I=null,T=null,G=null,N=null,V=null,Ue.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:le,bindFramebuffer:Be,drawBuffers:Oe,useProgram:We,setBlending:ee,setMaterial:re,setFlipSided:te,setCullFace:ye,setLineWidth:R,setPolygonOffset:ze,setScissorTest:Se,activeTexture:Ge,bindTexture:fe,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ve,texImage3D:se,updateUBOMapping:Ie,uniformBlockBinding:Me,texStorage2D:pe,texStorage3D:Fe,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ce,scissor:de,viewport:Re,reset:Ke}}function Gb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,x){return f?new OffscreenCanvas(A,x):jo("canvas")}function v(A,x,U){let $=1;const Q=fe(A);if((Q.width>U||Q.height>U)&&($=U/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const q=Math.floor($*Q.width),Ce=Math.floor($*Q.height);u===void 0&&(u=g(q,Ce));const pe=x?g(q,Ce):u;return pe.width=q,pe.height=Ce,pe.getContext("2d").drawImage(A,0,0,q,Ce),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ce+")."),pe}else return"data"in A&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(A,x,U,$,Q=!1){if(A!==null){if(n[A]!==void 0)return n[A];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=x;if(x===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const Ce=Q?Yo:it.getTransfer($);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Ce===ct?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(A,x){let U;return A?x===null||x===Vn||x===Ir?U=n.DEPTH24_STENCIL8:x===En?U=n.DEPTH32F_STENCIL8:x===Pr&&(U=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Ir?U=n.DEPTH_COMPONENT24:x===En?U=n.DEPTH_COMPONENT32F:x===Pr&&(U=n.DEPTH_COMPONENT16),U}function P(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vt&&A.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function E(A){const x=A.target;x.removeEventListener("dispose",E),y(x),x.isVideoTexture&&d.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),I(x)}function y(A){const x=i.get(A);if(x.__webglInit===void 0)return;const U=A.source,$=h.get(U);if($){const Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(A),Object.keys($).length===0&&h.delete(U)}i.remove(A)}function S(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const U=A.source,$=h.get(U);delete $[x.__cacheKey],o.memory.textures--}function I(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=A.textures;for(let $=0,Q=U.length;$<Q;$++){const q=i.get(U[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(A)}let T=0;function G(){T=0}function N(){const A=T;return A>=s.maxTextures&&He("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function V(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function O(A,x){const U=i.get(A);if(A.isVideoTexture&&Se(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const $=A.image;if($===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{j(U,A,x);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function F(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,x);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function z(A,x){const U=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){j(U,A,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function J(A,x){const U=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&U.__version!==A.version){oe(U,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const K={[Pl]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Il]:n.MIRRORED_REPEAT},_e={[Vt]:n.NEAREST,[ag]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[Ma]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},ve={[dg]:n.NEVER,[mg]:n.ALWAYS,[ug]:n.LESS,[Xc]:n.LEQUAL,[hg]:n.EQUAL,[$c]:n.GEQUAL,[fg]:n.GREATER,[pg]:n.NOTEQUAL};function ce(A,x){if(x.type===En&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===Ma||x.magFilter===Xr||x.magFilter===Hi||x.minFilter===Ht||x.minFilter===Ma||x.minFilter===Xr||x.minFilter===Hi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==Xr&&x.minFilter!==Hi||x.type===En&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(A,x){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",E));const $=x.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const q=V(x);if(q!==A.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[q].usedTimes++;const Ce=Q[A.__cacheKey];Ce!==void 0&&(Q[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&S(x)),A.__cacheKey=q,A.__webglTexture=Q[q].texture}return U}function st(A,x,U){return Math.floor(Math.floor(A/U)/x)}function rt(A,x,U,$){const q=A.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,$,x.data);else{q.sort((se,de)=>se.start-de.start);let Ce=0;for(let se=1;se<q.length;se++){const de=q[Ce],Re=q[se],Ie=de.start+de.count,Me=st(Re.start,x.width,4),Ke=st(de.start,x.width,4);Re.start<=Ie+1&&Me===Ke&&st(Re.start+Re.count-1,x.width,4)===Me?de.count=Math.max(de.count,Re.start+Re.count-de.start):(++Ce,q[Ce]=Re)}q.length=Ce+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Fe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let se=0,de=q.length;se<de;se++){const Re=q[se],Ie=Math.floor(Re.start/4),Me=Math.ceil(Re.count/4),Ke=Ie%x.width,L=Math.floor(Ie/x.width),ge=Me,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Ke,L,ge,ue,U,$,x.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function j(A,x,U){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const Q=Ue(A,x),q=x.source;t.bindTexture($,A.__webglTexture,n.TEXTURE0+U);const Ce=i.get(q);if(q.version!==Ce.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const pe=it.getPrimaries(it.workingColorSpace),Fe=x.colorSpace===bi?null:it.getPrimaries(x.colorSpace),Ve=x.colorSpace===bi||pe===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let se=v(x.image,!1,s.maxTextureSize);se=Ge(x,se);const de=r.convert(x.format,x.colorSpace),Re=r.convert(x.type);let Ie=w(x.internalFormat,de,Re,x.colorSpace,x.isVideoTexture);ce($,x);let Me;const Ke=x.mipmaps,L=x.isVideoTexture!==!0,ge=Ce.__version===void 0||Q===!0,ue=q.dataReady,Te=P(x,se);if(x.isDepthTexture)Ie=_(x.format===Wi,x.type),ge&&(L?t.texStorage2D(n.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,de,Re,null));else if(x.isDataTexture)if(Ke.length>0){L&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,Ke[0].width,Ke[0].height);for(let ae=0,Y=Ke.length;ae<Y;ae++)Me=Ke[ae],L?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Re,Me.data):t.texImage2D(n.TEXTURE_2D,ae,Ie,Me.width,Me.height,0,de,Re,Me.data);x.generateMipmaps=!1}else L?(ge&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,se.width,se.height),ue&&rt(x,se,de,Re)):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,de,Re,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,Ke[0].width,Ke[0].height,se.depth);for(let ae=0,Y=Ke.length;ae<Y;ae++)if(Me=Ke[ae],x.format!==An)if(de!==null)if(L){if(ue)if(x.layerUpdates.size>0){const Pe=Au(Me.width,Me.height,x.format,x.type);for(const Xe of x.layerUpdates){const gt=Me.data.subarray(Xe*Pe/Me.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Xe,Me.width,Me.height,1,de,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,se.depth,de,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ie,Me.width,Me.height,se.depth,0,Me.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Me.width,Me.height,se.depth,de,Re,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ie,Me.width,Me.height,se.depth,0,de,Re,Me.data)}else{L&&ge&&t.texStorage2D(n.TEXTURE_2D,Te,Ie,Ke[0].width,Ke[0].height);for(let ae=0,Y=Ke.length;ae<Y;ae++)Me=Ke[ae],x.format!==An?de!==null?L?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ie,Me.width,Me.height,0,Me.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Me.width,Me.height,de,Re,Me.data):t.texImage2D(n.TEXTURE_2D,ae,Ie,Me.width,Me.height,0,de,Re,Me.data)}else if(x.isDataArrayTexture)if(L){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ie,se.width,se.height,se.depth),ue)if(x.layerUpdates.size>0){const ae=Au(se.width,se.height,x.format,x.type);for(const Y of x.layerUpdates){const Pe=se.data.subarray(Y*ae/se.data.BYTES_PER_ELEMENT,(Y+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,se.width,se.height,1,de,Re,Pe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Re,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,de,Re,se.data);else if(x.isData3DTexture)L?(ge&&t.texStorage3D(n.TEXTURE_3D,Te,Ie,se.width,se.height,se.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Re,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,de,Re,se.data);else if(x.isFramebufferTexture){if(ge)if(L)t.texStorage2D(n.TEXTURE_2D,Te,Ie,se.width,se.height);else{let ae=se.width,Y=se.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ie,ae,Y,0,de,Re,null),ae>>=1,Y>>=1}}else if(Ke.length>0){if(L&&ge){const ae=fe(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ie,ae.width,ae.height)}for(let ae=0,Y=Ke.length;ae<Y;ae++)Me=Ke[ae],L?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,Re,Me):t.texImage2D(n.TEXTURE_2D,ae,Ie,de,Re,Me);x.generateMipmaps=!1}else if(L){if(ge){const ae=fe(se);t.texStorage2D(n.TEXTURE_2D,Te,Ie,ae.width,ae.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Re,se)}else t.texImage2D(n.TEXTURE_2D,0,Ie,de,Re,se);m(x)&&p($),Ce.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function oe(A,x,U){if(x.image.length!==6)return;const $=Ue(A,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+U);const q=i.get(Q);if(Q.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const Ce=it.getPrimaries(it.workingColorSpace),pe=x.colorSpace===bi?null:it.getPrimaries(x.colorSpace),Fe=x.colorSpace===bi||Ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Y=0;Y<6;Y++)!Ve&&!se?de[Y]=v(x.image[Y],!0,s.maxCubemapSize):de[Y]=se?x.image[Y].image:x.image[Y],de[Y]=Ge(x,de[Y]);const Re=de[0],Ie=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),Ke=w(x.internalFormat,Ie,Me,x.colorSpace),L=x.isVideoTexture!==!0,ge=q.__version===void 0||$===!0,ue=Q.dataReady;let Te=P(x,Re);ce(n.TEXTURE_CUBE_MAP,x);let ae;if(Ve){L&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ke,Re.width,Re.height);for(let Y=0;Y<6;Y++){ae=de[Y].mipmaps;for(let Pe=0;Pe<ae.length;Pe++){const Xe=ae[Pe];x.format!==An?Ie!==null?L?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe,0,0,Xe.width,Xe.height,Ie,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe,Ke,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe,0,0,Xe.width,Xe.height,Ie,Me,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe,Ke,Xe.width,Xe.height,0,Ie,Me,Xe.data)}}}else{if(ae=x.mipmaps,L&&ge){ae.length>0&&Te++;const Y=fe(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ke,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(se){L?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,de[Y].width,de[Y].height,Ie,Me,de[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,de[Y].width,de[Y].height,0,Ie,Me,de[Y].data);for(let Pe=0;Pe<ae.length;Pe++){const gt=ae[Pe].image[Y].image;L?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe+1,0,0,gt.width,gt.height,Ie,Me,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe+1,Ke,gt.width,gt.height,0,Ie,Me,gt.data)}}else{L?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ie,Me,de[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ke,Ie,Me,de[Y]);for(let Pe=0;Pe<ae.length;Pe++){const Xe=ae[Pe];L?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe+1,0,0,Ie,Me,Xe.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe+1,Ke,Ie,Me,Xe.image[Y])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function le(A,x,U,$,Q,q){const Ce=r.convert(U.format,U.colorSpace),pe=r.convert(U.type),Fe=w(U.internalFormat,Ce,pe,U.colorSpace),Ve=i.get(x),se=i.get(U);if(se.__renderTarget=x,!Ve.__hasExternalTextures){const de=Math.max(1,x.width>>q),Re=Math.max(1,x.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Fe,de,Re,x.depth,0,Ce,pe,null):t.texImage2D(Q,q,Fe,de,Re,0,Ce,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,se.__webglTexture,0,R(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,se.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(A,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,q=_(x.stencilBuffer,Q),Ce=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),q,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{const $=x.textures;for(let Q=0;Q<$.length;Q++){const q=$[Q],Ce=r.convert(q.format,q.colorSpace),pe=r.convert(q.type),Fe=w(q.internalFormat,Ce,pe,q.colorSpace);ze(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),Fe,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),Fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(A,x,U){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ve=r.convert(x.depthTexture.format),se=r.convert(x.depthTexture.type);let de;x.depthTexture.format===li?de=n.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(de=n.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,de,x.width,x.height,0,Ve,se,null)}}else O(x.depthTexture,0);const q=Q.__webglTexture,Ce=R(x),pe=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Fe=x.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===li)ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,pe,q,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,pe,q,0);else if(x.depthTexture.format===Wi)ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,pe,q,0,Ce):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,pe,q,0);else throw new Error("Unknown depthTexture format")}function We(A){const x=i.get(A),U=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)Oe(x.__webglFramebuffer[$],A,$);else{const $=A.texture.mipmaps;$&&$.length>0?Oe(x.__webglFramebuffer[0],A,0):Oe(x.__webglFramebuffer,A,0)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),Be(x.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Be(x.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(A,x,U){const $=i.get(A);x!==void 0&&le($.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&We(A)}function qe(A){const x=A.texture,U=i.get(A),$=i.get(x);A.addEventListener("dispose",C);const Q=A.textures,q=A.isWebGLCubeRenderTarget===!0,Ce=Q.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let Fe=0;Fe<x.mipmaps.length;Fe++)U.__webglFramebuffer[pe][Fe]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let pe=0,Fe=Q.length;pe<Fe;pe++){const Ve=i.get(Q[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ze(A)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Fe=Q[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const Ve=r.convert(Fe.format,Fe.colorSpace),se=r.convert(Fe.type),de=w(Fe.internalFormat,Ve,se,Fe.colorSpace,A.isXRRenderTarget===!0),Re=R(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)le(U.__webglFramebuffer[pe][Fe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe);else le(U.__webglFramebuffer[pe],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let pe=0,Fe=Q.length;pe<Fe;pe++){const Ve=Q[pe],se=i.get(Ve);let de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,se.__webglTexture),ce(de,Ve),le(U.__webglFramebuffer,A,Ve,n.COLOR_ATTACHMENT0+pe,de,0),m(Ve)&&p(de)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),ce(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)le(U.__webglFramebuffer[Fe],A,x,n.COLOR_ATTACHMENT0,pe,Fe);else le(U.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&p(pe),t.unbindTexture()}A.depthBuffer&&We(A)}function ee(A){const x=A.textures;for(let U=0,$=x.length;U<$;U++){const Q=x[U];if(m(Q)){const q=b(A),Ce=i.get(Q).__webglTexture;t.bindTexture(q,Ce),p(q),t.unbindTexture()}}}const re=[],te=[];function ye(A){if(A.samples>0){if(ze(A)===!1){const x=A.textures,U=A.width,$=A.height;let Q=n.COLOR_BUFFER_BIT;const q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),pe=x.length>1;if(pe)for(let Ve=0;Ve<x.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Fe=A.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ve=0;Ve<x.length;Ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ve]);const se=i.get(x[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,Q,n.NEAREST),l===!0&&(re.length=0,te.length=0,re.push(n.COLOR_ATTACHMENT0+Ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(q),te.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<x.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ve]);const se=i.get(x[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function R(A){return Math.min(s.maxSamples,A.samples)}function ze(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Se(A){const x=o.render.frame;d.get(A)!==x&&(d.set(A,x),A.update())}function Ge(A,x){const U=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==ks&&U!==bi&&(it.getTransfer(U)===ct?($!==An||Q!==un)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",U)),x}function fe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vb(n,e){function t(i,s=bi){let r;const o=it.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===df)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===af)return n.BYTE;if(i===lf)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===uf)return n.ALPHA;if(i===hf)return n.RGB;if(i===An)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===Gc)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Fs)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===zo||i===Bo||i===Go||i===Vo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Ll||i===Ul||i===Nl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fl||i===kl||i===Ol||i===zl||i===Bl||i===Gl||i===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Fl||i===kl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ol)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===zl)return r.COMPRESSED_R11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Gl)return r.COMPRESSED_RG11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hl||i===Wl||i===Xl||i===$l||i===ql||i===Yl||i===jl||i===Zl||i===Jl||i===Kl||i===Ql||i===ec||i===tc||i===nc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ir?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ef(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mn({vertexShader:Hb,fragmentShader:Wb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $b extends Ys{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new Xb,p={},b=t.getContextAttributes();let w=null,_=null;const P=[],E=[],C=new he;let y=null;const S=new tn;S.viewport=new mt;const I=new tn;I.viewport=new mt;const T=[S,I],G=new ev;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=P[j];return oe===void 0&&(oe=new Pa,P[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=P[j];return oe===void 0&&(oe=new Pa,P[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=P[j];return oe===void 0&&(oe=new Pa,P[j]=oe),oe.getHandSpace()};function O(j){const oe=E.indexOf(j.inputSource);if(oe===-1)return;const le=P[oe];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let j=0;j<P.length;j++){const oe=E[j];oe!==null&&(E[j]=null,P[j].disconnect(oe))}N=null,V=null,m.reset();for(const j in p)delete p[j];e.setRenderTarget(w),f=null,h=null,u=null,s=null,_=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Be=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?Wi:li,Be=b.stencil?Ir:Vn);const We={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Cn(h.textureWidth,h.textureHeight,{format:An,type:un,depthTexture:new Ur(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Cn(f.framebufferWidth,f.framebufferHeight,{format:An,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(j){for(let oe=0;oe<j.removed.length;oe++){const le=j.removed[oe],Be=E.indexOf(le);Be>=0&&(E[Be]=null,P[Be].disconnect(le))}for(let oe=0;oe<j.added.length;oe++){const le=j.added[oe];let Be=E.indexOf(le);if(Be===-1){for(let We=0;We<P.length;We++)if(We>=E.length){E.push(le),Be=We;break}else if(E[We]===null){E[We]=le,Be=We;break}if(Be===-1)break}const Oe=P[Be];Oe&&Oe.connect(le)}}const J=new D,K=new D;function _e(j,oe,le){J.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const Be=J.distanceTo(K),Oe=oe.projectionMatrix.elements,We=le.projectionMatrix.elements,ut=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),ee=(Oe[9]+1)/Oe[5],re=(Oe[9]-1)/Oe[5],te=(Oe[8]-1)/Oe[0],ye=(We[8]+1)/We[0],R=ut*te,ze=ut*ye,Se=Be/(-te+ye),Ge=Se*-te;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ge),j.translateZ(Se),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Oe[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const fe=ut+Se,A=qe+Se,x=R-Ge,U=ze+(Be-Ge),$=ee*qe/A*fe,Q=re*qe/A*fe;j.projectionMatrix.makePerspective(x,U,$,Q,fe,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ve(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let oe=j.near,le=j.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(le=m.depthFar)),G.near=I.near=S.near=oe,G.far=I.far=S.far=le,(N!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,V=G.far),G.layers.mask=j.layers.mask|6,S.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;const Be=j.parent,Oe=G.cameras;ve(G,Be);for(let We=0;We<Oe.length;We++)ve(Oe[We],Be);Oe.length===2?_e(G,S,I):G.projectionMatrix.copy(S.projectionMatrix),ce(j,G,Be)};function ce(j,oe,le){le===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Lr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return p[j]};let Ue=null;function st(j,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){const le=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Be=!1;le.length!==G.cameras.length&&(G.cameras.length=0,Be=!0);for(let qe=0;qe<le.length;qe++){const ee=le[qe];let re=null;if(f!==null)re=f.getViewport(ee);else{const ye=u.getViewSubImage(h,ee);re=ye.viewport,qe===0&&(e.setRenderTargetTextures(_,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(_))}let te=T[qe];te===void 0&&(te=new tn,te.layers.enable(qe),te.viewport=new mt,T[qe]=te),te.matrix.fromArray(ee.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ee.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),qe===0&&(G.matrix.copy(te.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Be===!0&&G.cameras.push(te)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const qe=u.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(Oe&&Oe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let qe=0;qe<le.length;qe++){const ee=le[qe].camera;if(ee){let re=p[ee];re||(re=new Ef,p[ee]=re);const te=u.getCameraImage(ee);re.sourceTexture=te}}}}for(let le=0;le<P.length;le++){const Be=E[le],Oe=P[le];Be!==null&&Oe!==void 0&&Oe.update(Be,oe,c||o)}Ue&&Ue(j,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const rt=new kf;rt.setAnimationLoop(st),this.setAnimationLoop=function(j){Ue=j},this.dispose=function(){}}}const Bi=new Hn,qb=new nt;function Yb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,_){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(qb.makeRotationFromEuler(Bi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const _=w.program;i.uniformBlockBinding(b,_)}function c(b,w){let _=s[b.id];_===void 0&&(g(b),_=d(b),s[b.id]=_,b.addEventListener("dispose",m));const P=w.program;i.updateUBOMapping(b,P);const E=e.render.frame;r[b.id]!==E&&(h(b),r[b.id]=E)}function d(b){const w=u();b.__bindingPointIndex=w;const _=n.createBuffer(),P=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=s[b.id],_=b.uniforms,P=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,C=_.length;E<C;E++){const y=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,I=y.length;S<I;S++){const T=y[S];if(f(T,E,S,P)===!0){const G=T.__offset,N=Array.isArray(T.value)?T.value:[T.value];let V=0;for(let O=0;O<N.length;O++){const F=N[O],z=v(F);typeof F=="number"||typeof F=="boolean"?(T.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,G+V,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=0,T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=0,T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=0):(F.toArray(T.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,_,P){const E=b.value,C=w+"_"+_;if(P[C]===void 0)return typeof E=="number"||typeof E=="boolean"?P[C]=E:P[C]=E.clone(),!0;{const y=P[C];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return P[C]=E,!0}else if(y.equals(E)===!1)return y.copy(E),!0}return!1}function g(b){const w=b.uniforms;let _=0;const P=16;for(let C=0,y=w.length;C<y;C++){const S=Array.isArray(w[C])?w[C]:[w[C]];for(let I=0,T=S.length;I<T;I++){const G=S[I],N=Array.isArray(G.value)?G.value:[G.value];for(let V=0,O=N.length;V<O;V++){const F=N[V],z=v(F),J=_%P,K=J%z.boundary,_e=J+K;_+=K,_e!==0&&P-_e<z.storage&&(_+=P-_e),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=z.storage}}}const E=_%P;return E>0&&(_+=P-E),b.__size=_,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function Jb(){return Un===null&&(Un=new wf(Zb,16,16,Fs,ai),Un.name="DFG_LUT",Un.minFilter=Ht,Un.magFilter=Ht,Un.wrapS=si,Un.wrapT=si,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class Kb{constructor(e={}){const{canvas:t=vg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Wc,Hc,Vc]),p=new Set([un,Vn,Pr,Ir,zc,Bc]),b=new Uint32Array(4),w=new Int32Array(4);let _=null,P=null;const E=[],C=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1;this._outputColorSpace=Gt;let T=0,G=0,N=null,V=-1,O=null;const F=new mt,z=new mt;let J=null;const K=new Ze(0);let _e=0,ve=t.width,ce=t.height,Ue=1,st=null,rt=null;const j=new mt(0,0,ve,ce),oe=new mt(0,0,ve,ce);let le=!1;const Be=new Kc;let Oe=!1,We=!1;const ut=new nt,qe=new D,ee=new mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ye(){return N===null?Ue:1}let R=i;function ze(M,B){return t.getContext(M,B)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",gt,!1),R===null){const B="webgl2";if(R=ze(B,M),R===null)throw ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw tt("WebGLRenderer: "+M.message),M}let Se,Ge,fe,A,x,U,$,Q,q,Ce,pe,Fe,Ve,se,de,Re,Ie,Me,Ke,L,ge,ue,Te;function ae(){Se=new K_(R),Se.init(),ge=new Vb(R,Se),Ge=new W_(R,Se,e,ge),fe=new Bb(R,Se),Ge.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),A=new ty(R),x=new Ab,U=new Gb(R,Se,fe,x,Ge,ge,A),$=new J_(S),Q=new ov(R),ue=new V_(R,Q),q=new Q_(R,Q,A,ue),Ce=new iy(R,q,Q,ue,A),Me=new ny(R,Ge,U),de=new X_(x),pe=new Eb(S,$,Se,Ge,ue,de),Fe=new Yb(S,x),Ve=new Cb,se=new Ub(Se),Ie=new G_(S,$,fe,Ce,g,l),Re=new zb(S,Ce,Ge),Te=new jb(R,A,Ge,fe),Ke=new H_(R,Se,A),L=new ey(R,Se,A),A.programs=pe.programs,S.capabilities=Ge,S.extensions=Se,S.properties=x,S.renderLists=Ve,S.shadowMap=Re,S.state=fe,S.info=A}ae(),v!==un&&(y=new ry(v,t.width,t.height,s,r));const Y=new $b(S,R);this.xr=Y,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(M){M!==void 0&&(Ue=M,this.setSize(ve,ce,!1))},this.getSize=function(M){return M.set(ve,ce)},this.setSize=function(M,B,X=!0){if(Y.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=M,ce=B,t.width=Math.floor(M*Ue),t.height=Math.floor(B*Ue),X===!0&&(t.style.width=M+"px",t.style.height=B+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(ve*Ue,ce*Ue).floor()},this.setDrawingBufferSize=function(M,B,X){ve=M,ce=B,Ue=X,t.width=Math.floor(M*X),t.height=Math.floor(B*X),this.setViewport(0,0,M,B)},this.setEffects=function(M){if(v===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let B=0;B<M.length;B++)if(M[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,B,X,W){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,B,X,W),fe.viewport(F.copy(j).multiplyScalar(Ue).round())},this.getScissor=function(M){return M.copy(oe)},this.setScissor=function(M,B,X,W){M.isVector4?oe.set(M.x,M.y,M.z,M.w):oe.set(M,B,X,W),fe.scissor(z.copy(oe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){fe.setScissorTest(le=M)},this.setOpaqueSort=function(M){st=M},this.setTransparentSort=function(M){rt=M},this.getClearColor=function(M){return M.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(M=!0,B=!0,X=!0){let W=0;if(M){let H=!1;if(N!==null){const be=N.texture.format;H=m.has(be)}if(H){const be=N.texture.type,Ee=p.has(be),we=Ie.getClearColor(),De=Ie.getClearAlpha(),Ne=we.r,Ye=we.g,Qe=we.b;Ee?(b[0]=Ne,b[1]=Ye,b[2]=Qe,b[3]=De,R.clearBufferuiv(R.COLOR,0,b)):(w[0]=Ne,w[1]=Ye,w[2]=Qe,w[3]=De,R.clearBufferiv(R.COLOR,0,w))}else W|=R.COLOR_BUFFER_BIT}B&&(W|=R.DEPTH_BUFFER_BIT),X&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Ie.dispose(),Ve.dispose(),se.dispose(),x.dispose(),$.dispose(),Ce.dispose(),ue.dispose(),Te.dispose(),pe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",hd),Y.removeEventListener("sessionend",fd),Li.stop()};function Pe(M){M.preventDefault(),Zo("WebGLRenderer: Context Lost."),I=!0}function Xe(){Zo("WebGLRenderer: Context Restored."),I=!1;const M=A.autoReset,B=Re.enabled,X=Re.autoUpdate,W=Re.needsUpdate,H=Re.type;ae(),A.autoReset=M,Re.enabled=B,Re.autoUpdate=X,Re.needsUpdate=W,Re.type=H}function gt(M){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function lt(M){const B=M.target;B.removeEventListener("dispose",lt),Yn(B)}function Yn(M){jn(M),x.remove(M)}function jn(M){const B=x.get(M).programs;B!==void 0&&(B.forEach(function(X){pe.releaseProgram(X)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,X,W,H,be){B===null&&(B=re);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,we=yp(M,B,X,W,H);fe.setMaterial(W,Ee);let De=X.index,Ne=1;if(W.wireframe===!0){if(De=q.getWireframeAttribute(X),De===void 0)return;Ne=2}const Ye=X.drawRange,Qe=X.attributes.position;let ke=Ye.start*Ne,ht=(Ye.start+Ye.count)*Ne;be!==null&&(ke=Math.max(ke,be.start*Ne),ht=Math.min(ht,(be.start+be.count)*Ne)),De!==null?(ke=Math.max(ke,0),ht=Math.min(ht,De.count)):Qe!=null&&(ke=Math.max(ke,0),ht=Math.min(ht,Qe.count));const At=ht-ke;if(At<0||At===1/0)return;ue.setup(H,W,we,X,De);let St,ft=Ke;if(De!==null&&(St=Q.get(De),ft=L,ft.setIndex(St)),H.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ye()),ft.setMode(R.LINES)):ft.setMode(R.TRIANGLES);else if(H.isLine){let $t=W.linewidth;$t===void 0&&($t=1),fe.setLineWidth($t*ye()),H.isLineSegments?ft.setMode(R.LINES):H.isLineLoop?ft.setMode(R.LINE_LOOP):ft.setMode(R.LINE_STRIP)}else H.isPoints?ft.setMode(R.POINTS):H.isSprite&&ft.setMode(R.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Jo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $t=H._multiDrawStarts,Le=H._multiDrawCounts,on=H._multiDrawCount,ot=De?Q.get(De).bytesPerElement:1,_n=x.get(W).currentProgram.getUniforms();for(let In=0;In<on;In++)_n.setValue(R,"_gl_DrawID",In),ft.render($t[In]/ot,Le[In])}else if(H.isInstancedMesh)ft.renderInstances(ke,At,H.count);else if(X.isInstancedBufferGeometry){const $t=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,$t);ft.renderInstances(ke,At,Le)}else ft.render(ke,At)};function ud(M,B,X){M.transparent===!0&&M.side===ii&&M.forceSinglePass===!1?(M.side=rn,M.needsUpdate=!0,Hr(M,B,X),M.side=Ci,M.needsUpdate=!0,Hr(M,B,X),M.side=ii):Hr(M,B,X)}this.compile=function(M,B,X=null){X===null&&(X=M),P=se.get(X),P.init(B),C.push(P),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(P.pushLight(H),H.castShadow&&P.pushShadow(H))}),M!==X&&M.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(P.pushLight(H),H.castShadow&&P.pushShadow(H))}),P.setupLights();const W=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Ee=0;Ee<be.length;Ee++){const we=be[Ee];ud(we,X,H),W.add(we)}else ud(be,X,H),W.add(be)}),P=C.pop(),W},this.compileAsync=function(M,B,X=null){const W=this.compile(M,B,X);return new Promise(H=>{function be(){if(W.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){H(M);return}setTimeout(be,10)}Se.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ga=null;function _p(M){ga&&ga(M)}function hd(){Li.stop()}function fd(){Li.start()}const Li=new kf;Li.setAnimationLoop(_p),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(M){ga=M,Y.setAnimationLoop(M),M===null?Li.stop():Li.start()},Y.addEventListener("sessionstart",hd),Y.addEventListener("sessionend",fd),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const X=Y.enabled===!0&&Y.isPresenting===!0,W=y!==null&&(N===null||X)&&y.begin(S,N);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(B),B=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,B,N),P=se.get(M,C.length),P.init(B),C.push(P),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(ut,On,B.reversedDepth),We=this.localClippingEnabled,Oe=de.init(this.clippingPlanes,We),_=Ve.get(M,E.length),_.init(),E.push(_),Y.enabled===!0&&Y.isPresenting===!0){const Ee=S.xr.getDepthSensingMesh();Ee!==null&&va(Ee,B,-1/0,S.sortObjects)}va(M,B,0,S.sortObjects),_.finish(),S.sortObjects===!0&&_.sort(st,rt),te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,te&&Ie.addToRenderList(_,M),this.info.render.frame++,Oe===!0&&de.beginShadows();const H=P.state.shadowsArray;if(Re.render(H,M,B),Oe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const Ee=_.opaque,we=_.transmissive;if(P.setupLights(),B.isArrayCamera){const De=B.cameras;if(we.length>0)for(let Ne=0,Ye=De.length;Ne<Ye;Ne++){const Qe=De[Ne];md(Ee,we,M,Qe)}te&&Ie.render(M);for(let Ne=0,Ye=De.length;Ne<Ye;Ne++){const Qe=De[Ne];pd(_,M,Qe,Qe.viewport)}}else we.length>0&&md(Ee,we,M,B),te&&Ie.render(M),pd(_,M,B)}N!==null&&G===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),W&&y.end(S),M.isScene===!0&&M.onAfterRender(S,M,B),ue.resetDefaultState(),V=-1,O=null,C.pop(),C.length>0?(P=C[C.length-1],Oe===!0&&de.setGlobalState(S.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function va(M,B,X,W){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)P.pushLight(M),M.castShadow&&P.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Be.intersectsSprite(M)){W&&ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ut);const Ee=Ce.update(M),we=M.material;we.visible&&_.push(M,Ee,we,X,ee.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Be.intersectsObject(M))){const Ee=Ce.update(M),we=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ee.copy(M.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ee.copy(Ee.boundingSphere.center)),ee.applyMatrix4(M.matrixWorld).applyMatrix4(ut)),Array.isArray(we)){const De=Ee.groups;for(let Ne=0,Ye=De.length;Ne<Ye;Ne++){const Qe=De[Ne],ke=we[Qe.materialIndex];ke&&ke.visible&&_.push(M,Ee,ke,X,ee.z,Qe)}}else we.visible&&_.push(M,Ee,we,X,ee.z,null)}}const be=M.children;for(let Ee=0,we=be.length;Ee<we;Ee++)va(be[Ee],B,X,W)}function pd(M,B,X,W){const{opaque:H,transmissive:be,transparent:Ee}=M;P.setupLightsView(X),Oe===!0&&de.setGlobalState(S.clippingPlanes,X),W&&fe.viewport(F.copy(W)),H.length>0&&Vr(H,B,X),be.length>0&&Vr(be,B,X),Ee.length>0&&Vr(Ee,B,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function md(M,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[W.id]===void 0){const ke=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[W.id]=new Cn(1,1,{generateMipmaps:!0,type:ke?ai:un,minFilter:Hi,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const be=P.state.transmissionRenderTarget[W.id],Ee=W.viewport||F;be.setSize(Ee.z*S.transmissionResolutionScale,Ee.w*S.transmissionResolutionScale);const we=S.getRenderTarget(),De=S.getActiveCubeFace(),Ne=S.getActiveMipmapLevel();S.setRenderTarget(be),S.getClearColor(K),_e=S.getClearAlpha(),_e<1&&S.setClearColor(16777215,.5),S.clear(),te&&Ie.render(X);const Ye=S.toneMapping;S.toneMapping=zn;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),P.setupLightsView(W),Oe===!0&&de.setGlobalState(S.clippingPlanes,W),Vr(M,X,W),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),Se.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ht=0,At=B.length;ht<At;ht++){const St=B[ht],{object:ft,geometry:$t,material:Le,group:on}=St;if(Le.side===ii&&ft.layers.test(W.layers)){const ot=Le.side;Le.side=rn,Le.needsUpdate=!0,gd(ft,X,W,$t,Le,on),Le.side=ot,Le.needsUpdate=!0,ke=!0}}ke===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}S.setRenderTarget(we,De,Ne),S.setClearColor(K,_e),Qe!==void 0&&(W.viewport=Qe),S.toneMapping=Ye}function Vr(M,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let H=0,be=M.length;H<be;H++){const Ee=M[H],{object:we,geometry:De,group:Ne}=Ee;let Ye=Ee.material;Ye.allowOverride===!0&&W!==null&&(Ye=W),we.layers.test(X.layers)&&gd(we,B,X,De,Ye,Ne)}}function gd(M,B,X,W,H,be){M.onBeforeRender(S,B,X,W,H,be),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(S,B,X,W,M,be),H.transparent===!0&&H.side===ii&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,S.renderBufferDirect(X,B,W,H,M,be),H.side=Ci,H.needsUpdate=!0,S.renderBufferDirect(X,B,W,H,M,be),H.side=ii):S.renderBufferDirect(X,B,W,H,M,be),M.onAfterRender(S,B,X,W,H,be)}function Hr(M,B,X){B.isScene!==!0&&(B=re);const W=x.get(M),H=P.state.lights,be=P.state.shadowsArray,Ee=H.state.version,we=pe.getParameters(M,H.state,be,B,X),De=pe.getProgramCacheKey(we);let Ne=W.programs;W.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;W.envMap=$.get(M.envMap||W.environment,Ye),W.envMapRotation=W.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,Ne===void 0&&(M.addEventListener("dispose",lt),Ne=new Map,W.programs=Ne);let Qe=Ne.get(De);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Ee)return xd(M,we),Qe}else we.uniforms=pe.getUniforms(M),M.onBeforeCompile(we,S),Qe=pe.acquireProgram(we,De),Ne.set(De,Qe),W.uniforms=we.uniforms;const ke=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=de.uniform),xd(M,we),W.needsLights=wp(M),W.lightsStateVersion=Ee,W.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function vd(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Ho.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function xd(M,B){const X=x.get(M);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function yp(M,B,X,W,H){B.isScene!==!0&&(B=re),U.resetTextureUnits();const be=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,we=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ks,De=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=$.get(W.envMap||Ee,De),Ye=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,At=!!X.morphAttributes.color;let St=zn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(St=S.toneMapping);const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=ft!==void 0?ft.length:0,Le=x.get(W),on=P.state.lights;if(Oe===!0&&(We===!0||M!==O)){const Lt=M===O&&W.id===V;de.setState(W,M,Lt)}let ot=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==on.state.version||Le.outputColorSpace!==we||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==Ne||W.fog===!0&&Le.fog!==be||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==de.numPlanes||Le.numIntersection!==de.numIntersection)||Le.vertexAlphas!==Ye||Le.vertexTangents!==Qe||Le.morphTargets!==ke||Le.morphNormals!==ht||Le.morphColors!==At||Le.toneMapping!==St||Le.morphTargetsCount!==$t)&&(ot=!0):(ot=!0,Le.__version=W.version);let _n=Le.currentProgram;ot===!0&&(_n=Hr(W,B,H));let In=!1,Ui=!1,Ji=!1;const pt=_n.getUniforms(),kt=Le.uniforms;if(fe.useProgram(_n.program)&&(In=!0,Ui=!0,Ji=!0),W.id!==V&&(V=W.id,Ui=!0),In||O!==M){fe.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pt.setValue(R,"projectionMatrix",M.projectionMatrix),pt.setValue(R,"viewMatrix",M.matrixWorldInverse);const ui=pt.map.cameraPosition;ui!==void 0&&ui.setValue(R,qe.setFromMatrixPosition(M.matrixWorld)),Ge.logarithmicDepthBuffer&&pt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,Ui=!0,Ji=!0)}if(Le.needsLights&&(on.state.directionalShadowMap.length>0&&pt.setValue(R,"directionalShadowMap",on.state.directionalShadowMap,U),on.state.spotShadowMap.length>0&&pt.setValue(R,"spotShadowMap",on.state.spotShadowMap,U),on.state.pointShadowMap.length>0&&pt.setValue(R,"pointShadowMap",on.state.pointShadowMap,U)),H.isSkinnedMesh){pt.setOptional(R,H,"bindMatrix"),pt.setOptional(R,H,"bindMatrixInverse");const Lt=H.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),pt.setValue(R,"boneTexture",Lt.boneTexture,U))}H.isBatchedMesh&&(pt.setOptional(R,H,"batchingTexture"),pt.setValue(R,"batchingTexture",H._matricesTexture,U),pt.setOptional(R,H,"batchingIdTexture"),pt.setValue(R,"batchingIdTexture",H._indirectTexture,U),pt.setOptional(R,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(R,"batchingColorTexture",H._colorsTexture,U));const di=X.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Me.update(H,X,_n),(Ui||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,pt.setValue(R,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(kt.envMapIntensity.value=B.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Jb()),Ui&&(pt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Le.needsLights&&bp(kt,Ji),be&&W.fog===!0&&Fe.refreshFogUniforms(kt,be),Fe.refreshMaterialUniforms(kt,W,Ue,ce,P.state.transmissionRenderTarget[M.id]),Ho.upload(R,vd(Le),kt,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ho.upload(R,vd(Le),kt,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(R,"center",H.center),pt.setValue(R,"modelViewMatrix",H.modelViewMatrix),pt.setValue(R,"normalMatrix",H.normalMatrix),pt.setValue(R,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Lt=W.uniformsGroups;for(let ui=0,Ki=Lt.length;ui<Ki;ui++){const _d=Lt[ui];Te.update(_d,_n),Te.bind(_d,_n)}}return _n}function bp(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function wp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,B,X){const W=x.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=B,x.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,B){const X=x.get(M);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const Sp=R.createFramebuffer();this.setRenderTarget=function(M,B=0,X=0){N=M,T=B,G=X;let W=null,H=!1,be=!1;if(M){const we=x.get(M);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(R.FRAMEBUFFER,we.__webglFramebuffer),F.copy(M.viewport),z.copy(M.scissor),J=M.scissorTest,fe.viewport(F),fe.scissor(z),fe.setScissorTest(J),V=-1;return}else if(we.__webglFramebuffer===void 0)U.setupRenderTarget(M);else if(we.__hasExternalTextures)U.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(we.__boundDepthTexture!==Ye){if(Ye!==null&&x.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(M)}}const De=M.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(be=!0);const Ne=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?W=Ne[B][X]:W=Ne[B],H=!0):M.samples>0&&U.useMultisampledRTT(M)===!1?W=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[X]:W=Ne,F.copy(M.viewport),z.copy(M.scissor),J=M.scissorTest}else F.copy(j).multiplyScalar(Ue).floor(),z.copy(oe).multiplyScalar(Ue).floor(),J=le;if(X!==0&&(W=Sp),fe.bindFramebuffer(R.FRAMEBUFFER,W)&&fe.drawBuffers(M,W),fe.viewport(F),fe.scissor(z),fe.setScissorTest(J),H){const we=x.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(be){const we=B;for(let De=0;De<M.textures.length;De++){const Ne=x.get(M.textures[De]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+De,Ne.__webglTexture,X,we)}}else if(M!==null&&X!==0){const we=x.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,we.__webglTexture,X)}V=-1},this.readRenderTargetPixels=function(M,B,X,W,H,be,Ee,we=0){if(!(M&&M.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De){fe.bindFramebuffer(R.FRAMEBUFFER,De);try{const Ne=M.textures[we],Ye=Ne.format,Qe=Ne.type;if(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),!Ge.textureFormatReadable(Ye)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-W&&X>=0&&X<=M.height-H&&R.readPixels(B,X,W,H,ge.convert(Ye),ge.convert(Qe),be)}finally{const Ne=N!==null?x.get(N).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(M,B,X,W,H,be,Ee,we=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ee!==void 0&&(De=De[Ee]),De)if(B>=0&&B<=M.width-W&&X>=0&&X<=M.height-H){fe.bindFramebuffer(R.FRAMEBUFFER,De);const Ne=M.textures[we],Ye=Ne.format,Qe=Ne.type;if(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+we),!Ge.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.bufferData(R.PIXEL_PACK_BUFFER,be.byteLength,R.STREAM_READ),R.readPixels(B,X,W,H,ge.convert(Ye),ge.convert(Qe),0);const ht=N!==null?x.get(N).__webglFramebuffer:null;fe.bindFramebuffer(R.FRAMEBUFFER,ht);const At=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xg(R,At,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ke),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,be),R.deleteBuffer(ke),R.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,B=null,X=0){const W=Math.pow(2,-X),H=Math.floor(M.image.width*W),be=Math.floor(M.image.height*W),Ee=B!==null?B.x:0,we=B!==null?B.y:0;U.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,X,0,0,Ee,we,H,be),fe.unbindTexture()};const Mp=R.createFramebuffer(),Ep=R.createFramebuffer();this.copyTextureToTexture=function(M,B,X=null,W=null,H=0,be=0){let Ee,we,De,Ne,Ye,Qe,ke,ht,At;const St=M.isCompressedTexture?M.mipmaps[be]:M.image;if(X!==null)Ee=X.max.x-X.min.x,we=X.max.y-X.min.y,De=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ye=X.min.y,Qe=X.isBox3?X.min.z:0;else{const kt=Math.pow(2,-H);Ee=Math.floor(St.width*kt),we=Math.floor(St.height*kt),M.isDataArrayTexture?De=St.depth:M.isData3DTexture?De=Math.floor(St.depth*kt):De=1,Ne=0,Ye=0,Qe=0}W!==null?(ke=W.x,ht=W.y,At=W.z):(ke=0,ht=0,At=0);const ft=ge.convert(B.format),$t=ge.convert(B.type);let Le;B.isData3DTexture?(U.setTexture3D(B,0),Le=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Le=R.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Le=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const on=R.getParameter(R.UNPACK_ROW_LENGTH),ot=R.getParameter(R.UNPACK_IMAGE_HEIGHT),_n=R.getParameter(R.UNPACK_SKIP_PIXELS),In=R.getParameter(R.UNPACK_SKIP_ROWS),Ui=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,St.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,St.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Qe);const Ji=M.isDataArrayTexture||M.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(M.isDepthTexture){const kt=x.get(M),di=x.get(B),Lt=x.get(kt.__renderTarget),ui=x.get(di.__renderTarget);fe.bindFramebuffer(R.READ_FRAMEBUFFER,Lt.__webglFramebuffer),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ki=0;Ki<De;Ki++)Ji&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(M).__webglTexture,H,Qe+Ki),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(B).__webglTexture,be,At+Ki)),R.blitFramebuffer(Ne,Ye,Ee,we,ke,ht,Ee,we,R.DEPTH_BUFFER_BIT,R.NEAREST);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||x.has(M)){const kt=x.get(M),di=x.get(B);fe.bindFramebuffer(R.READ_FRAMEBUFFER,Mp),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ep);for(let Lt=0;Lt<De;Lt++)Ji?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,kt.__webglTexture,H,Qe+Lt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,kt.__webglTexture,H),pt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,di.__webglTexture,be,At+Lt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,di.__webglTexture,be),H!==0?R.blitFramebuffer(Ne,Ye,Ee,we,ke,ht,Ee,we,R.COLOR_BUFFER_BIT,R.NEAREST):pt?R.copyTexSubImage3D(Le,be,ke,ht,At+Lt,Ne,Ye,Ee,we):R.copyTexSubImage2D(Le,be,ke,ht,Ne,Ye,Ee,we);fe.bindFramebuffer(R.READ_FRAMEBUFFER,null),fe.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else pt?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Le,be,ke,ht,At,Ee,we,De,ft,$t,St.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(Le,be,ke,ht,At,Ee,we,De,ft,St.data):R.texSubImage3D(Le,be,ke,ht,At,Ee,we,De,ft,$t,St):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,be,ke,ht,Ee,we,ft,$t,St.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,be,ke,ht,St.width,St.height,ft,St.data):R.texSubImage2D(R.TEXTURE_2D,be,ke,ht,Ee,we,ft,$t,St);R.pixelStorei(R.UNPACK_ROW_LENGTH,on),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ot),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_n),R.pixelStorei(R.UNPACK_SKIP_ROWS,In),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ui),be===0&&B.generateMipmaps&&R.generateMipmap(Le),fe.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&U.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?U.setTextureCube(M,0):M.isData3DTexture?U.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?U.setTexture2DArray(M,0):U.setTexture2D(M,0),fe.unbindTexture()},this.resetState=function(){T=0,G=0,N=null,fe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};nn.line={uniforms:ca.merge([xe.common,xe.fog,xe.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ss extends mn{constructor(e){super({type:"LineMaterial",uniforms:ca.clone(nn.line.uniforms),vertexShader:nn.line.vertexShader,fragmentShader:nn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zu=new Wn,To=new D;class pr extends K0{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new xt(e,3)),this.setAttribute("uv",new xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new vc(t,6,1);return this.setAttribute("instanceStart",new fn(i,3,0)),this.setAttribute("instanceEnd",new fn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new vc(t,6,1);return this.setAttribute("instanceColorStart",new fn(i,3,0)),this.setAttribute("instanceColorEnd",new fn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new G0(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zu.setFromBufferAttribute(t),this.boundingBox.union(Zu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)To.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(To)),To.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(To));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const al=new mt,Ju=new D,Ku=new D,Ot=new mt,zt=new mt,Nn=new mt,ll=new D,cl=new nt,Bt=new sv,Qu=new D,Co=new Wn,Ro=new Ii,Fn=new mt;let kn,$i;function eh(n,e,t){return Fn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Fn.multiplyScalar(1/Fn.w),Fn.x=$i/t.width,Fn.y=$i/t.height,Fn.applyMatrix4(n.projectionMatrixInverse),Fn.multiplyScalar(1/Fn.w),Math.abs(Math.max(Fn.x,Fn.y))}function Qb(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Bt.start.fromBufferAttribute(s,a),Bt.end.fromBufferAttribute(r,a),Bt.applyMatrix4(t);const c=new D,d=new D;kn.distanceSqToSegment(Bt.start,Bt.end,d,c),d.distanceTo(c)<$i*.5&&e.push({point:d,pointOnLine:c,distance:kn.origin.distanceTo(d),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function ew(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=Math.min(a.instanceCount,l.count),u=-e.near;kn.at(1,Nn),Nn.w=1,Nn.applyMatrix4(e.matrixWorldInverse),Nn.applyMatrix4(i),Nn.multiplyScalar(1/Nn.w),Nn.x*=r.x/2,Nn.y*=r.y/2,Nn.z=0,ll.copy(Nn),cl.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,f=d;h<f;h++){if(Ot.fromBufferAttribute(l,h),zt.fromBufferAttribute(c,h),Ot.w=1,zt.w=1,Ot.applyMatrix4(cl),zt.applyMatrix4(cl),Ot.z>u&&zt.z>u)continue;if(Ot.z>u){const w=Ot.z-zt.z,_=(Ot.z-u)/w;Ot.lerp(zt,_)}else if(zt.z>u){const w=zt.z-Ot.z,_=(zt.z-u)/w;zt.lerp(Ot,_)}Ot.applyMatrix4(i),zt.applyMatrix4(i),Ot.multiplyScalar(1/Ot.w),zt.multiplyScalar(1/zt.w),Ot.x*=r.x/2,Ot.y*=r.y/2,zt.x*=r.x/2,zt.y*=r.y/2,Bt.start.copy(Ot),Bt.start.z=0,Bt.end.copy(zt),Bt.end.z=0;const v=Bt.closestPointToPointParameter(ll,!0);Bt.at(v,Qu);const m=Fg.lerp(Ot.z,zt.z,v),p=m>=-1&&m<=1,b=ll.distanceTo(Qu)<$i*.5;if(p&&b){Bt.start.fromBufferAttribute(l,h),Bt.end.fromBufferAttribute(c,h),Bt.start.applyMatrix4(o),Bt.end.applyMatrix4(o);const w=new D,_=new D;kn.distanceSqToSegment(Bt.start,Bt.end,_,w),t.push({point:_,pointOnLine:w,distance:kn.origin.distanceTo(_),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class cr extends bt{constructor(e=new pr,t=new Ss({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Ju.fromBufferAttribute(t,o),Ku.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Ju.distanceTo(Ku);const r=new vc(s,2,1);return e.setAttribute("instanceDistanceStart",new fn(r,1,0)),e.setAttribute("instanceDistanceEnd",new fn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;kn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;$i=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ro.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$i*.5;else{const u=Math.max(s.near,Ro.distanceToPoint(kn.origin));c=eh(s,u,l.resolution)}if(Ro.radius+=c,kn.intersectsSphere(Ro)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Co.copy(a.boundingBox).applyMatrix4(o);let d;if(i)d=$i*.5;else{const u=Math.max(s.near,Co.distanceToPoint(kn.origin));d=eh(s,u,l.resolution)}Co.expandByScalar(d),kn.intersectsBox(Co)!==!1&&(i?Qb(this,t):ew(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(al),this.material.uniforms.resolution.value.set(al.z,al.w))}}const bc=new Map,wc=new Map;function tw(n){const e=n?new Set(n):void 0;return Promise.all(qs.filter(t=>t.icon&&(!e||e.has(t.id))).map(iw)).then(()=>{})}function nw(n){return[...new Set(n)].filter(e=>!wc.has(e))}function iw(n){let e=wc.get(n.id);return e||(e=new Promise((t,i)=>{const s=new Image;s.onload=()=>{bc.set(n.id,s),t()},s.onerror=()=>i(Error(`Could not load ${n.label} icon`)),s.src=n.icon??""}),wc.set(n.id,e)),e}function Bs(n,e,t){const i=Wt(n,t);return{x:i.x+(e==="east"?n.width/2:e==="west"?-n.width/2:0),z:i.z+(e==="south"?n.depth/2:e==="north"?-n.depth/2:0)}}function Sc(n,e,t){const i=Wt(n,t),s=(e.x-i.x)/Math.max(n.width,1),r=(e.z-i.z)/Math.max(n.depth,1);return Math.abs(s)>=Math.abs(r)?s>=0?"east":"west":r>=0?"south":"north"}function sw(n,e,t){const i=t?t==="horizontal":Math.abs(e.x-n.x)>=Math.abs(e.z-n.z),s=i?e.x>=n.x:e.z>=n.z;return i?s?["east","west"]:["west","east"]:s?["south","north"]:["north","south"]}function Hf(n){const e=[];for(const t of n.values())t.kind!=="group"&&e.push({id:t.id,...Ec(t,n)});return e}function Wf(n,e){const t=e.get(n.source),i=e.get(n.target);if(!t||!i)throw Error("Missing connection endpoint");const s=Wt(t,e),r=Wt(i,e),[o,a]=sw(s,r,n.routing);let l=n.sourcePort??o,c=n.targetPort??a;return n.sourcePort&&!n.targetPort&&(c=Sc(i,Bs(t,l,e),e)),!n.sourcePort&&n.targetPort&&(l=Sc(t,Bs(i,c,e),e)),[l,c]}const Xf=(n,e)=>`${n}\0${e}`;function rw(n,e){const t=new Map;for(const i of n){if(!e.has(i.source)||!e.has(i.target))continue;const[s,r]=Wf(i,e);for(const o of[`${i.source}:${s}`,`${i.target}:${r}`,Xf(i.source,i.target)])t.set(o,(t.get(o)??0)+1)}return t}const ow=14;function aw(n,e){return n.source!==n.target&&(e?.get(Xf(n.target,n.source))??0)>0}function lw(n,e){const t=[];for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i],o=(r?.x??0)-(s?.x??0),a=(r?.z??0)-(s?.z??0),l=Math.hypot(o,a);t.push(l?{x:-a/l,z:o/l}:void 0)}return n.map((i,s)=>{let r,o;for(let u=s-1;u>=0&&!r;u--)r=t[u];for(let u=s;u<t.length&&!o;u++)o=t[u];if(r??=o,o??=r,!r||!o)return{...i};const a=r.x*o.x+r.z*o.z,l=a>-.99?e/(1+a):e,c=a>-.99?r.x+o.x:r.x,d=a>-.99?r.z+o.z:r.z;return{x:i.x+c*l,z:i.z+d*l}})}function dl(n,e,t=Hf(e),i){if(aw(n,i)){const s=n.source<n.target,r=ul(s?n:cw(n),e,t,i),o=s?r.points:r.points.reverse();return{sourcePort:s?r.sourcePort:r.targetPort,targetPort:s?r.targetPort:r.sourcePort,points:lw(o,ow/2)}}return ul(n,e,t,i)}function cw(n){const e={...n,source:n.target,target:n.source};return delete e.sourcePort,delete e.targetPort,n.targetPort&&(e.sourcePort=n.targetPort),n.sourcePort&&(e.targetPort=n.sourcePort),e}function ul(n,e,t,i){const s=e.get(n.source),r=e.get(n.target);if(!s||!r)throw Error("Missing connection endpoint");const[o,a]=Wf(n,e),l=(i?.get(`${n.source}:${o}`)??0)>1,c=(i?.get(`${n.target}:${a}`)??0)>1,d=Bs(s,o,e),u=Bs(r,a,e),h=Mc(d,o,24),f=Mc(u,a,24);return{sourcePort:o,targetPort:a,points:[d,...hw(h,f,o,a,n,s,r,e,t,l&&!c?"source":c&&!l?"target":"middle"),u]}}const Mc=(n,e,t)=>({x:n.x+(e==="east"?t:e==="west"?-t:0),z:n.z+(e==="south"?t:e==="north"?-t:0)});function Ec(n,e){const t=Wt(n,e);return{minX:t.x-n.width/2,maxX:t.x+n.width/2,minZ:t.z-n.depth/2,maxZ:t.z+n.depth/2}}const mr=6;function $f(n,e,t){const i=mr;return Math.max(n.x,e.x)>t.minX-i&&Math.min(n.x,e.x)<t.maxX+i&&Math.max(n.z,e.z)>t.minZ-i&&Math.min(n.z,e.z)<t.maxZ+i}const Mi=256,th=new WeakMap,qf=(n,e)=>(n&65535)<<16|e&65535;function nh(n,e,t){const i=n.get(e);i?i.push(t):n.set(e,[t])}function dw(n){let e=th.get(n);if(e)return e;const t=new Map;for(let i=0;i<n.length;i++){const s=n[i];if(!s)continue;const r=Math.floor(s.minX/Mi),o=Math.floor(s.maxX/Mi),a=Math.floor(s.minZ/Mi),l=Math.floor(s.maxZ/Mi);if(!(o-r<=64&&l-a<=64)){nh(t,-1,i);continue}for(let c=r;c<=o;c++)for(let d=a;d<=l;d++)nh(t,qf(c,d),i)}return e={cells:t,seen:new Uint32Array(n.length),query:0},th.set(n,e),e}function uw(n,e,t,i,s,r){++i.query===4294967295&&(i.seen.fill(0),i.query=1);const o=Math.floor((Math.min(n.x,e.x)-mr)/Mi),a=Math.floor((Math.max(n.x,e.x)+mr)/Mi),l=Math.floor((Math.min(n.z,e.z)-mr)/Mi),c=Math.floor((Math.max(n.z,e.z)+mr)/Mi);let d=hl(i.cells.get(-1),n,e,t,i,s,r);if(a-o>65535||c-l>65535){for(const[u,h]of i.cells)u!==-1&&(d+=hl(h,n,e,t,i,s,r));return d}for(let u=o;u<=a;u++)for(let h=l;h<=c;h++)d+=hl(i.cells.get(qf(u,h)),n,e,t,i,s,r);return d}function hl(n,e,t,i,s,r,o){if(!n)return 0;let a=0;for(const l of n){if(s.seen[l]===s.query)continue;s.seen[l]=s.query;const c=i[l];c&&c.id!==r&&c.id!==o&&$f(e,t,c)&&a++}return a}function hw(n,e,t,i,s,r,o,a,l,c){const d=[Ec(r,a),Ec(o,a)],u=s.bend??0,h=Math.min(...d.map(S=>S.minX))-30,f=Math.max(...d.map(S=>S.maxX))+30,g=Math.min(...d.map(S=>S.minZ))-30,v=Math.max(...d.map(S=>S.maxZ))+30,m=dw(l),p=[],b=(S,I)=>(c==="source"?S:c==="target"?I:(S+I)/2)+u;for(const S of[b(n.x,e.x),h+u,f+u])p.push([n,{x:S,z:n.z},{x:S,z:e.z},e]);for(const S of[b(n.z,e.z),g+u,v+u])p.push([n,{x:n.x,z:S},{x:e.x,z:S},e]);const w=[{x:e.x,z:n.z},{x:n.x,z:e.z}],_=p.length;for(const S of w)p.push([n,S,{...S},e]);const P=ih(t),E=ih(i);let C=p[0]??[n,e],y=1/0;for(const S of p){let I=0,T=0,G;for(let N=1;N<S.length;N++){const V=S[N-1],O=S[N];if(!V||!O)continue;const F=Math.sign(O.x-V.x),z=Math.sign(O.z-V.z);if(!(!F&&!z)){I+=Math.abs(O.x-V.x)+Math.abs(O.z-V.z);for(const J of d)$f(V,O,J)&&(I+=1e4);I+=1e4*uw(V,O,l,m,r.id,o.id),!G&&F===-P.x&&z===-P.z&&(I+=5e3),N===S.length-1&&F===E.x&&z===E.z&&(I+=5e3),G&&T++,G=O}}I+=T*40,c!=="middle"&&p.indexOf(S)>=_&&(I+=1),I<y&&(y=I,C=S)}return C}const ih=n=>Mc({x:0,z:0},n,1);function sh(n){let e=0;for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i];s&&r&&(e+=Math.abs(r.x-s.x)+Math.abs(r.z-s.z))}let t=e/2;for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i];if(!s||!r)continue;const o=Math.abs(r.x-s.x)+Math.abs(r.z-s.z);if(o>0&&t<=o){const a=t/o;return{point:{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a},horizontal:Math.abs(r.x-s.x)>=Math.abs(r.z-s.z)}}t-=o}return{point:n[0]??{x:0,z:0},horizontal:!0}}const Yf={id:"cyberpunk",name:"Cyberpunk",dark:!0,tagline:"Neon on. Chrome polished. Jack in.",mark:"⚡",group:"Over the top",ambient:"neon",css:{bg:"#07040f","bg-top":"#0a0518","bg-mid":"#120a2a","bg-bottom":"#050a18","bg-glow":"#3b0f5c",panel:"#0d0920","panel-raised":"#160f33",hover:"#221749",input:"#0a0717",shadow:"#000000",border:"#35276a","border-strong":"#5b40a8",divider:"#271d4d",text:"#eef6ff","text-soft":"#d2d9ff","text-muted":"#aaa7d8",muted:"#8b87c0",faint:"#7470a8",accent:"#00f0ff","accent-strong":"#8af9ff","on-accent":"#04000f","accent-soft":"#0a2838","accent-border":"#00a3b3","accent-text":"#7ff8ff","accent-dim":"#4c8d9c",danger:"#ff3c6f",ok:"#39ff9c",hot:"#ff2a6d"},scene:{sky:["#0b0520","#160a35","#05081a"],glow:"#4a1070",fog:"#0b0520",grid:["#ff2a6d","#2a1c66"],gridOpacity:.32,tile:"#120b2a",tileTint:.3,face:"#150d30",faceTint:.38,outline:"#ffffff",outlineTint:.9,group:"#1a1040",groupOpacity:.18,shadow:"#000000",shadowOpacity:.55,selected:"#fcee0a",edge:"#00e5ff",edgeHover:"#b0fbff",edgeSelected:"#fcee0a",haloOpacity:.3,flow:"#ff2a6d",port:"#ff2a6d",handle:"#fcee0a",guide:"#ff2a6d",nodeLabel:{background:"#0c0720",border:"#ff2a6d",text:"#f4f8ff"},edgeLabel:{background:"#140a30",text:"#8af9ff"},groupLabel:"#c9b8ff",glyph:"#fcee0a",note:{paper:"#fcee0a",text:"#150a2a"},text:"#eef6ff",ambient:2,labelFont:'Orbitron, Rajdhani, "Share Tech", "Segoe UI", system-ui, sans-serif',edgeWidth:2.2,flowStyle:{width:5,dash:22,gap:28,speed:110}}},fw={id:"solar-forge",name:"Solar Forge",dark:!0,tagline:"Warm metal, steady light.",mark:"✦",group:"Classic",css:{bg:"#090f17","bg-top":"#0b101a","bg-mid":"#0c1721","bg-bottom":"#0b1720","bg-glow":"#26374b",panel:"#101925","panel-raised":"#111b29",hover:"#1b2838",input:"#0c1420",shadow:"#07101b",border:"#344155","border-strong":"#46566c",divider:"#293546",text:"#dce4ed","text-soft":"#c4cfda","text-muted":"#a7b7ca",muted:"#8d9db2",faint:"#7f91a7",accent:"#efb56a","accent-strong":"#ffd095","on-accent":"#20170e","accent-soft":"#332a1e","accent-border":"#bd8a46","accent-text":"#f2c48a","accent-dim":"#ab8e67",danger:"#d18c8c",ok:"#88b690",hot:"#ff9d3c"},scene:{sky:["#0a101a","#102432","#0c1b25"],glow:"#294057",fog:"#0b111a",grid:["#62503a","#253543"],gridOpacity:.22,tile:"#172b3a",tileTint:.18,face:"#2c4456",faceTint:.22,outline:"#778895",outlineTint:.45,group:"#172c3a",groupOpacity:.12,shadow:"#02080d",shadowOpacity:.4,selected:"#ffae42",edge:"#ffe1a2",edgeHover:"#fff4dc",edgeSelected:"#ff9d3c",haloOpacity:.12,flow:"#fff1c9",port:"#ffc778",handle:"#f4f7fb",guide:"#ff9d3c",nodeLabel:{background:"#14202b",border:"#41505e",text:"#e9eef4"},edgeLabel:{background:"#182431",text:"#e9eef4"},groupLabel:"#93a6b6",glyph:"#f6d7a5",note:{paper:"#f6d58a",text:"#2a2010"},text:"#e9eef4",ambient:2}},pw={id:"nord",name:"Nord",dark:!0,tagline:"Cool, calm and arctic.",mark:"❄",group:"Classic",css:{bg:"#242933","bg-top":"#262c37","bg-mid":"#2b313d","bg-bottom":"#232832","bg-glow":"#3b4456",panel:"#2e3440","panel-raised":"#353c4a",hover:"#3b4252",input:"#272c36",shadow:"#151920",border:"#4c566a","border-strong":"#5e6a82",divider:"#3f4758",text:"#eceff4","text-soft":"#d8dee9","text-muted":"#bcc4d3",muted:"#9aa4b7",faint:"#848ea2",accent:"#88c0d0","accent-strong":"#a6d6e3","on-accent":"#1e252f","accent-soft":"#33444f","accent-border":"#6ea6b6","accent-text":"#9fd3e1","accent-dim":"#7a9aa6",danger:"#d08770",ok:"#a3be8c",hot:"#ebcb8b"},scene:{sky:["#262c37","#2e3542","#232832"],glow:"#434c5e",fog:"#262c37",grid:["#5e81ac","#3b4252"],gridOpacity:.3,tile:"#3b4252",tileTint:.22,face:"#434c5e",faceTint:.28,outline:"#d8dee9",outlineTint:.55,group:"#3b4252",groupOpacity:.2,shadow:"#151920",shadowOpacity:.35,selected:"#ebcb8b",edge:"#88c0d0",edgeHover:"#d8f1f7",edgeSelected:"#ebcb8b",haloOpacity:.14,flow:"#eceff4",port:"#88c0d0",handle:"#eceff4",guide:"#bf616a",nodeLabel:{background:"#2e3440",border:"#4c566a",text:"#eceff4"},edgeLabel:{background:"#353c4a",text:"#d8dee9"},groupLabel:"#b3bccb",glyph:"#ebcb8b",note:{paper:"#ebcb8b",text:"#2e3440"},text:"#eceff4",ambient:2.2}},mw={id:"daylight",name:"Daylight",dark:!1,tagline:"Bright, clear and printable.",mark:"☀",group:"Classic",css:{bg:"#eef1f6","bg-top":"#f7f9fc","bg-mid":"#eef2f7","bg-bottom":"#e6ebf2","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f3f6fa",hover:"#e9eef5",input:"#f7f9fc",shadow:"#7d8aa0",border:"#cfd7e3","border-strong":"#a9b5c7",divider:"#dfe5ee",text:"#17202c","text-soft":"#2c394b","text-muted":"#4a586c",muted:"#5d6b80",faint:"#6f7c90",accent:"#0b6bcb","accent-strong":"#2f86de","on-accent":"#ffffff","accent-soft":"#e2eefb","accent-border":"#6aa6e6","accent-text":"#0a5aab","accent-dim":"#5a87b5",danger:"#c2334d",ok:"#2e8a4a",hot:"#e0457b"},scene:{sky:["#f7f9fc","#eef2f7","#e3e9f1"],glow:"#ffffff",fog:"#eef2f7",grid:["#a9b8cc","#d6dee9"],gridOpacity:.55,tile:"#ffffff",tileTint:.16,face:"#ffffff",faceTint:.1,outline:"#5d6b80",outlineTint:.75,group:"#c9d5e6",groupOpacity:.25,shadow:"#55627a",shadowOpacity:.18,selected:"#2f86de",edge:"#3b4c66",edgeHover:"#0b6bcb",edgeSelected:"#e0457b",haloOpacity:.08,flow:"#0b6bcb",port:"#0b6bcb",handle:"#17202c",guide:"#e0457b",nodeLabel:{background:"#ffffff",border:"#cfd7e3",text:"#17202c"},edgeLabel:{background:"#f3f6fa",text:"#2c394b"},groupLabel:"#4a586c",glyph:"#4a586c",note:{paper:"#ffe58a",text:"#2a2010"},text:"#17202c",ambient:2.6}},gw={id:"hacker",name:"Hacker",dark:!0,tagline:"> access granted_",mark:">_",group:"Over the top",ambient:"rain",css:{bg:"#000400","bg-top":"#000a02","bg-mid":"#001405","bg-bottom":"#000301","bg-glow":"#003d12",panel:"#000e04","panel-raised":"#001a08",hover:"#00290d",input:"#000a03",shadow:"#000000",border:"#0b5e22","border-strong":"#19a33e",divider:"#073d16",text:"#b6ffc8","text-soft":"#8dfaa6","text-muted":"#5fe082",muted:"#4cc46c",faint:"#3fa75b",accent:"#33ff66","accent-strong":"#9dffb4","on-accent":"#001a06","accent-soft":"#062e12","accent-border":"#1fbf4a","accent-text":"#66ff8c","accent-dim":"#2f9e4d",danger:"#ff4d4d",ok:"#33ff66",hot:"#e6ff3b"},scene:{sky:["#000a02","#001f08","#000501"],glow:"#004d18",fog:"#000a02",grid:["#33ff66","#0a3d17"],gridOpacity:.4,tile:"#001407",tileTint:.12,face:"#002a0e",faceTint:.15,outline:"#33ff66",outlineTint:.25,group:"#002b0f",groupOpacity:.16,shadow:"#000000",shadowOpacity:.6,selected:"#e6ff3b",edge:"#33ff66",edgeHover:"#c8ffd6",edgeSelected:"#e6ff3b",haloOpacity:.25,flow:"#d6ffe0",port:"#33ff66",handle:"#e6ff3b",guide:"#e6ff3b",nodeLabel:{background:"#000e04",border:"#33ff66",text:"#b6ffc8"},edgeLabel:{background:"#001a08",text:"#66ff8c"},groupLabel:"#5fe082",glyph:"#33ff66",note:{paper:"#33ff66",text:"#001a06"},text:"#b6ffc8",ambient:2,labelFont:'"JetBrains Mono", "Fira Code", "DejaVu Sans Mono", ui-monospace, monospace',iconFilter:"grayscale(1) sepia(1) hue-rotate(70deg) saturate(5) brightness(0.95)",monochrome:!0,edgeWidth:1.4,flowStyle:{width:2.4,dash:6,gap:14,speed:80}}},vw={id:"solar-ram",name:"Solar Ram Studios",dark:!0,tagline:"Forged in sunfire. Horns down, charge ahead.",mark:"♈",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V10.5"/><path d="M12 10.5C12 5.5 9.4 3 6.6 3 3.9 3 2 5 2 7.6s2 4.4 4.4 4.4c2.2 0 3.6-1.5 3.6-3.4 0-1.7-1.2-2.9-2.8-2.9"/><path d="M12 10.5C12 5.5 14.6 3 17.4 3 20.1 3 22 5 22 7.6S20 12 17.6 12c-2.2 0-3.6-1.5-3.6-3.4 0-1.7 1.2-2.9 2.8-2.9"/></svg>',group:"Over the top",ambient:"embers",css:{bg:"#0d0806","bg-top":"#120a07","bg-mid":"#1c0e08","bg-bottom":"#0a0605","bg-glow":"#5a2208",panel:"#150c08","panel-raised":"#20120b",hover:"#2e1a0f",input:"#100906",shadow:"#000000",border:"#4a2a17","border-strong":"#7a4522",divider:"#33200f",text:"#fff1dc","text-soft":"#ffdcb0","text-muted":"#e8b98a",muted:"#c99a6c",faint:"#a98058",accent:"#ffb000","accent-strong":"#ffd36b","on-accent":"#1a0c00","accent-soft":"#3a2408","accent-border":"#d48a00","accent-text":"#ffc845","accent-dim":"#b2803a",danger:"#ff5c5c",ok:"#9fd36b",hot:"#ff5a1f"},scene:{sky:["#0d0604","#2a0f06","#120806"],glow:"#7a2e08",fog:"#140906",grid:["#ff7a1f","#3a1a0c"],gridOpacity:.3,tile:"#1f120b",tileTint:.25,face:"#2e1a0f",faceTint:.3,outline:"#ffb000",outlineTint:.55,group:"#2a140a",groupOpacity:.16,shadow:"#000000",shadowOpacity:.5,selected:"#ffd36b",edge:"#ffb000",edgeHover:"#ffe7b0",edgeSelected:"#ff5a1f",haloOpacity:.28,flow:"#fff3c4",port:"#ff5a1f",handle:"#ffd36b",guide:"#ff5a1f",nodeLabel:{background:"#170c07",border:"#ff8a1f",text:"#fff1dc"},edgeLabel:{background:"#24120a",text:"#ffd36b"},groupLabel:"#e8b98a",glyph:"#ffb000",note:{paper:"#ffb000",text:"#1a0c00"},text:"#fff1dc",ambient:2.2,labelFont:'Montserrat, Poppins, "Segoe UI", system-ui, sans-serif',edgeWidth:2,flowStyle:{width:4.2,dash:18,gap:30,speed:60}}},xw={id:"zen-garden",name:"Zen Garden",dark:!1,tagline:"Breathe in. Rake the sand. Diagram slowly.",mark:"◯",group:"Over the top",ambient:"petals",css:{bg:"#efe9dc","bg-top":"#f6f1e6","bg-mid":"#ece5d5","bg-bottom":"#e2dac8","bg-glow":"#fffaf0",panel:"#faf6ee","panel-raised":"#f1ebdf",hover:"#e8e0cf",input:"#f6f1e6",shadow:"#8a7d64",border:"#d3c8b2","border-strong":"#ad9f84",divider:"#e0d7c4",text:"#2b2a26","text-soft":"#3d3a33","text-muted":"#5a554a",muted:"#655f52",faint:"#716a5b",accent:"#4f6f3f","accent-strong":"#67894f","on-accent":"#ffffff","accent-soft":"#e3e9d6","accent-border":"#8fa978","accent-text":"#3f5c31","accent-dim":"#6f7f5c",danger:"#b03a2e",ok:"#4f6f3f",hot:"#c8452c"},scene:{sky:["#f6f1e6","#ece5d5","#ddd4c0"],glow:"#fffaf0",fog:"#ece5d5",grid:["#b9ab8e","#ddd3bf"],gridOpacity:.5,tile:"#f4efe4",tileTint:.14,face:"#fbf8f1",faceTint:.1,outline:"#5a554a",outlineTint:.4,group:"#cfd8bf",groupOpacity:.28,shadow:"#6b604a",shadowOpacity:.16,selected:"#c8452c",edge:"#3d3a33",edgeHover:"#4f6f3f",edgeSelected:"#c8452c",haloOpacity:.06,flow:"#4f6f3f",port:"#c8452c",handle:"#2b2a26",guide:"#c8452c",nodeLabel:{background:"#faf6ee",border:"#d3c8b2",text:"#2b2a26"},edgeLabel:{background:"#f1ebdf",text:"#3d3a33"},groupLabel:"#5a554a",glyph:"#4f6f3f",note:{paper:"#f2d7d0",text:"#2b2a26"},text:"#2b2a26",ambient:2.6,labelFont:'"Noto Serif", "Noto Serif JP", Georgia, "Times New Roman", serif',edgeWidth:1.3,flowStyle:{width:2.6,dash:4,gap:46,speed:14}}},_w={id:"monochrome",name:"Black & White",dark:!1,tagline:"No colour. No compromise.",mark:"◐",group:"Over the top",ambient:"grain",css:{bg:"#ffffff","bg-top":"#ffffff","bg-mid":"#f4f4f4","bg-bottom":"#e8e8e8","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f2f2f2",hover:"#e6e6e6",input:"#ffffff",shadow:"#000000",border:"#000000","border-strong":"#000000",divider:"#000000",text:"#000000","text-soft":"#111111","text-muted":"#333333",muted:"#444444",faint:"#555555",accent:"#000000","accent-strong":"#222222","on-accent":"#ffffff","accent-soft":"#e6e6e6","accent-border":"#000000","accent-text":"#000000","accent-dim":"#555555",danger:"#000000",ok:"#000000",hot:"#000000"},scene:{sky:["#ffffff","#f5f5f5","#e9e9e9"],glow:"#ffffff",fog:"#f5f5f5",grid:["#000000","#bdbdbd"],gridOpacity:.35,tile:"#ffffff",tileTint:0,face:"#ffffff",faceTint:0,outline:"#000000",outlineTint:0,group:"#d9d9d9",groupOpacity:.3,shadow:"#000000",shadowOpacity:.9,selected:"#000000",edge:"#4d4d4d",edgeHover:"#000000",edgeSelected:"#000000",haloOpacity:.18,flow:"#000000",port:"#000000",handle:"#000000",guide:"#000000",nodeLabel:{background:"#ffffff",border:"#000000",text:"#000000"},edgeLabel:{background:"#000000",text:"#ffffff"},groupLabel:"#000000",glyph:"#000000",note:{paper:"#ffffff",text:"#000000"},text:"#000000",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',iconFilter:"grayscale(1) contrast(1.3)",monochrome:!0,edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},yw={id:"comic-noir",name:"Comic Noir",dark:!0,tagline:"Inked after midnight, in full colour.",mark:"◑",group:"Over the top",ambient:"grain",css:{bg:"#000000","bg-top":"#000000","bg-mid":"#0b0b0b","bg-bottom":"#171717","bg-glow":"#000000",panel:"#000000","panel-raised":"#0d0d0d",hover:"#1a1a1a",input:"#000000",shadow:"#ffffff",border:"#ffffff","border-strong":"#ffffff",divider:"#ffffff",text:"#ffffff","text-soft":"#eeeeee","text-muted":"#cccccc",muted:"#bbbbbb",faint:"#aaaaaa",accent:"#ffffff","accent-strong":"#dddddd","on-accent":"#000000","accent-soft":"#1a1a1a","accent-border":"#ffffff","accent-text":"#ffffff","accent-dim":"#aaaaaa",danger:"#ffffff",ok:"#ffffff",hot:"#ffffff"},scene:{sky:["#000000","#0a0a0a","#161616"],glow:"#000000",fog:"#0a0a0a",grid:["#ffffff","#424242"],gridOpacity:.35,tile:"#000000",tileTint:.3,face:"#000000",faceTint:.38,outline:"#ffffff",outlineTint:0,group:"#262626",groupOpacity:.3,shadow:"#ffffff",shadowOpacity:.35,selected:"#ffffff",edge:"#b3b3b3",edgeHover:"#ffffff",edgeSelected:"#ffffff",haloOpacity:.18,flow:"#ffffff",port:"#ffffff",handle:"#ffffff",guide:"#ffffff",nodeLabel:{background:"#000000",border:"#ffffff",text:"#ffffff"},edgeLabel:{background:"#ffffff",text:"#000000"},groupLabel:"#ffffff",glyph:"#ffffff",note:{paper:"#000000",text:"#ffffff"},text:"#ffffff",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},bw={id:"space",name:"Deep Space",dark:!0,tagline:"Houston, we have a diagram.",mark:"🪐",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M6.4 14.6C3.3 16.8 1.8 18.8 2.5 19.8c1.1 1.6 7-.9 12.1-4.6S22.6 6.8 21.5 5.2c-.6-.9-2.7-.5-5.5.9"/></svg>',group:"Over the top",ambient:"stars",css:{bg:"#03040c","bg-top":"#050716","bg-mid":"#0b0f2a","bg-bottom":"#020309","bg-glow":"#2a1e5c",panel:"#080b1e","panel-raised":"#0f1430",hover:"#1a2048",input:"#060818",shadow:"#000000",border:"#262e5e","border-strong":"#3d4a8f",divider:"#1b2149",text:"#eef1ff","text-soft":"#d0d6ff","text-muted":"#a9b1e0",muted:"#929bd0",faint:"#7d87bd",accent:"#7aa2ff","accent-strong":"#b3c8ff","on-accent":"#03040c","accent-soft":"#141d45","accent-border":"#4f6fd6","accent-text":"#a5bcff","accent-dim":"#6474ad",danger:"#ff6b81",ok:"#5be3b0",hot:"#c77dff"},scene:{sky:["#03040c","#0b1030","#05020f"],glow:"#33246e",fog:"#04050f",grid:["#7aa2ff","#1a1f45"],gridOpacity:.22,tile:"#0b1030",tileTint:.25,face:"#121a45",faceTint:.3,outline:"#b3c8ff",outlineTint:.6,group:"#141a40",groupOpacity:.16,shadow:"#000000",shadowOpacity:.5,selected:"#ffd27a",edge:"#7aa2ff",edgeHover:"#dbe5ff",edgeSelected:"#ffd27a",haloOpacity:.26,flow:"#ffffff",port:"#c77dff",handle:"#ffd27a",guide:"#c77dff",nodeLabel:{background:"#080b1e",border:"#4f6fd6",text:"#eef1ff"},edgeLabel:{background:"#0f1430",text:"#b3c8ff"},groupLabel:"#a9b1e0",glyph:"#b3c8ff",note:{paper:"#c77dff",text:"#0a0420"},text:"#eef1ff",ambient:2.2,stars:!0,edgeWidth:1.8,flowStyle:{width:3.2,dash:3,gap:26,speed:45}}},ta=[Yf,gw,vw,xw,_w,yw,bw,fw,pw,mw],Ac=Yf;function jf(n){return ta.find(e=>e.id===n)??Ac}function ww(n,e=document.documentElement){for(const[t,i]of Object.entries(n.css))e.style.setProperty(`--${t}`,i);e.style.colorScheme=n.dark?"dark":"light",e.dataset.theme=n.id}const Wo=8,Sw=new ci(1,1,1);function rh(n,e,t=3){const i=n.kind==="note",s=new Tn;s.userData.width=n.width,s.userData.depth=n.depth;const r=4096/Math.max(n.width,n.depth),o=Math.min(t,r);s.userData.resolution=o,s.userData.capped=t>r;const a=document.createElement("canvas");a.width=Math.max(2,Math.round(n.width*o)),a.height=Math.max(2,Math.round(n.depth*o));const l=a.getContext("2d");if(!l)throw Error("Annotation canvas unavailable");l.scale(o,o);const c=i?14:4,d=e.labelFont??"Inter, system-ui, sans-serif";if(i){const w=Math.min(22,n.width/5,n.depth/5);l.fillStyle=e.monochrome?e.note.paper:n.color,l.beginPath(),l.moveTo(0,0),l.lineTo(n.width,0),l.lineTo(n.width,n.depth-w),l.lineTo(n.width-w,n.depth),l.lineTo(0,n.depth),l.closePath(),l.fill(),e.monochrome&&(l.lineWidth=3,l.strokeStyle=e.note.text,l.stroke()),l.fillStyle="#00000022",l.beginPath(),l.moveTo(n.width,n.depth-w),l.lineTo(n.width-w,n.depth-w),l.lineTo(n.width-w,n.depth),l.closePath(),l.fill()}const{size:u,lines:h}=Vh(n.label,n.width-c*2,n.depth-c*2,aa(n),(w,_)=>(l.font=`${i?500:600} ${_}px ${d}`,l.measureText(w).width));l.font=`${i?500:600} ${u}px ${d}`,l.fillStyle=i?e.note.text:e.text,l.textBaseline="top";const f=u*1.28;l.save(),l.beginPath(),l.rect(c,c,n.width-c*2,n.depth-c*2),l.clip();for(const[w,_]of h.entries())l.fillText(_,c,c+w*f);l.restore();const g=new Br(a);g.colorSpace=Gt,g.anisotropy=4;const v=new Di(n.width,n.depth);v.rotateX(-Math.PI/2);const m=new pn({map:g,transparent:!0,depthWrite:!1}),p=new bt(v,m);p.position.y=i?Wo/2+.6:1.5,p.renderOrder=3,s.add(p);let b;if(i){b=new rd({color:n.color}),b.color.multiplyScalar(.75);const w=new bt(Sw,b);w.scale.set(n.width,Wo,n.depth),s.add(w);const _=new bt(v,new pn({color:e.shadow,transparent:!0,opacity:e.shadowOpacity,depthWrite:!1}));_.position.set(6,-Wo/2-.5,8),s.add(_)}return{root:s,dispose:()=>{g.dispose(),v.dispose(),m.dispose(),b?.dispose();for(const w of s.children)w instanceof bt&&w.material!==m&&w.material!==b&&w.material.dispose();a.width=0,a.height=0}}}const Po={uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Sr=1;function Ms(n){return n.layers.set(Sr),n}class Mw{target=oh(0);multisampled=oh(4);material=new mn({name:"BoardFXAA",uniforms:ca.clone(Po.uniforms),vertexShader:Po.vertexShader,fragmentShader:Po.fragmentShader,depthTest:!1,depthWrite:!1});copy=new mn({name:"BoardCopy",uniforms:{tDiffuse:{value:this.multisampled.texture}},vertexShader:Po.vertexShader,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main() { gl_FragColor = texture2D( tDiffuse, vUv ); }",depthTest:!1,depthWrite:!1});mesh;quad=new vf;camera=new Gr(-1,1,1,-1,0,1);size=new he;constructor(){this.material.uniforms.tDiffuse={value:this.target.texture},this.mesh=new bt(new Di(2,2),this.material),this.mesh.frustumCulled=!1,this.quad.add(this.mesh)}render(e,t,i,s){e.getDrawingBufferSize(this.size);const r=s?this.multisampled:this.target;(r.width!==this.size.x||r.height!==this.size.y)&&r.setSize(this.size.x,this.size.y),s||this.material.uniforms.resolution?.value.set(1/this.size.x,1/this.size.y),this.mesh.material=s?this.copy:this.material;const o=i.layers.mask;s?i.layers.enable(Sr):i.layers.disable(Sr);const a=e.getRenderTarget();if(e.setRenderTarget(r),e.render(t,i),e.setRenderTarget(a),e.render(this.quad,this.camera),!s){const{background:l}=t,{autoClear:c}=e;t.background=null,e.autoClear=!1,i.layers.set(Sr),e.render(t,i),e.autoClear=c,t.background=l}i.layers.mask=o}dispose(){this.target.dispose(),this.multisampled.dispose(),this.material.dispose(),this.copy.dispose(),this.mesh.geometry.dispose()}}function oh(n){const e=new Cn(1,1,{colorSpace:Gt,internalFormat:"RGBA8",depthBuffer:!0,samples:n});return e.isXRRenderTarget=!0,e}function ah(n){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");if(!t)throw new Error("Backdrop canvas unavailable");const[i,s,r]=n.sky,o=t.createLinearGradient(0,0,0,512);o.addColorStop(0,i),o.addColorStop(.55,s),o.addColorStop(1,r),t.fillStyle=o,t.fillRect(0,0,512,512);const a=t.createRadialGradient(245,110,0,245,110,330);a.addColorStop(0,n.glow),a.addColorStop(1,`${s}00`),t.fillStyle=a,t.fillRect(0,0,512,512),n.stars&&Ew(t);const l=new Br(e);return l.colorSpace=Gt,l}function Ew(n){let e=24301;const t=()=>(e=e*1103515245+12345&2147483647,e/2147483647);for(let i=0;i<260;i++){const s=t()<.08;n.globalAlpha=s?.95:.25+t()*.5,n.fillStyle=t()<.2?"#c9d6ff":"#ffffff",n.beginPath(),n.arc(t()*512,t()*512,s?.7:.25+t()*.3,0,Math.PI*2),n.fill()}n.globalAlpha=1}const Aw=320,lh=380,Tw=750,Cw=1300,fl=6;class Rw{constructor(e,t){this.host=e,this.palette=t,this.avatar=Pw(t.flow),this.glow=Iw(t.flow)}host;palette;avatar;glow;ring=new id(.86,1,64);travelers=[];dwells=[];pulses=[];walked=new Set;decisions=[];asking=!1;generation=0;starts=[];stopAnimation;last=0;restAt=0;get playing(){return this.stopAnimation!==void 0}start(e){this.stop(!1),this.starts=e,this.lap(performance.now()),this.last=performance.now(),this.stopAnimation=this.host.animate(t=>this.step(t))}stop(e=!0){const t=this.playing;this.generation++,this.asking&&this.host.cancelChoice(),this.asking=!1,this.decisions=[],this.stopAnimation?.(),this.stopAnimation=void 0;for(const i of this.travelers)this.removeTraveler(i);for(const i of this.pulses)this.removePulse(i.mesh);this.travelers=[],this.pulses=[],this.dwells=[],e&&t&&this.host.onFinish()}dispose(){this.stop(!1),this.avatar.dispose(),this.glow.dispose(),this.ring.dispose()}lap(e){this.walked.clear(),this.restAt=0;for(const t of this.starts)this.host.onVisit?.(t),this.pulse(t,e),this.dwells.push({node:t,until:e+lh})}step(e){const t=Math.min(.05,(e-this.last)/1e3);this.last=e;for(const s of[...this.travelers]){if(s.distance+=Aw*t,s.distance>=s.total){this.removeTraveler(s),this.travelers.splice(this.travelers.indexOf(s),1);const r=this.host.target(s.edge);r&&(this.host.onVisit?.(r),this.pulse(r,e),this.dwells.push({node:r,until:e+lh}));continue}this.place(s)}for(const s of[...this.dwells]){if(e<s.until)continue;this.dwells.splice(this.dwells.indexOf(s),1);const{mode:r,edges:o}=this.host.branches(s.node);if(r==="ask"){this.decisions.push({node:s.node,edges:o,pulseAt:e+900});continue}for(const a of o)this.walked.has(a)||(this.walked.add(a),this.depart(a))}for(const s of this.decisions)e>=s.pulseAt&&(this.pulse(s.node,e),s.pulseAt=e+900);const i=this.decisions[0];if(i&&!this.asking){this.asking=!0;const s=this.generation;this.host.choose(i.node,i.edges).then(r=>{s===this.generation&&(this.asking=!1,this.decisions.shift(),r&&(this.walked.add(r),this.depart(r)))})}for(const s of[...this.pulses]){const r=(e-s.born)/Tw;if(r>=1){this.removePulse(s.mesh),this.pulses.splice(this.pulses.indexOf(s),1);continue}const o=1-(1-r)**3;s.mesh.scale.setScalar(s.radius*(.9+o*.6));const a=s.mesh.material;a instanceof pn&&(a.opacity=1-r)}return!this.travelers.length&&!this.dwells.length&&!this.decisions.length&&(this.restAt?e>=this.restAt&&this.lap(e):this.restAt=e+Cw),!0}depart(e){if(!this.host.permit(e)){const a=this.host.route(e)?.[0];if(a){const l=new bt(this.ring,new pn({color:"#ff4d5e",transparent:!0,depthTest:!1}));l.rotation.x=-Math.PI/2,l.position.copy(a),l.renderOrder=22,this.host.add(l),this.pulses.push({mesh:l,born:this.last,radius:100})}return}const t=this.host.route(e);if(!t||t.length<2)return;const i=[0];for(let a=1;a<t.length;a++){const l=t[a-1],c=t[a];i.push((i[a-1]??0)+(l&&c?l.distanceTo(c):0))}const s=new nu(new uc({map:this.avatar,depthTest:!1,transparent:!0}));s.renderOrder=20,s.scale.setScalar(78);const r=Array.from({length:fl},(a,l)=>{const c=new nu(new uc({map:this.glow,depthTest:!1,transparent:!0,opacity:.55*(1-l/fl)}));return c.renderOrder=19,c.scale.setScalar(34*(1-l/(fl*1.4))),this.host.add(c),c});this.host.add(s);const o={edge:e,points:t,lengths:i,total:i[i.length-1]??0,distance:0,sprite:s,trail:r};this.travelers.push(o),this.place(o),this.host.onHop(e)}pointAt(e,t,i){const s=Math.max(0,Math.min(e.total,t));let r=1;for(;r<e.lengths.length-1&&(e.lengths[r]??0)<s;)r++;const o=e.points[r-1],a=e.points[r],l=e.lengths[r-1]??0,c=(e.lengths[r]??l)-l;return!o||!a?i:i.copy(o).lerp(a,c>0?(s-l)/c:0)}place(e){this.pointAt(e,e.distance,e.sprite.position),e.sprite.position.y+=34,e.trail.forEach((t,i)=>{this.pointAt(e,e.distance-(i+1)*13,t.position),t.position.y+=4})}pulse(e,t){const i=this.host.node(e);if(!i)return;const s=new bt(this.ring,new pn({color:this.palette.flow,transparent:!0,depthTest:!1}));s.rotation.x=-Math.PI/2,s.position.copy(i.point),s.renderOrder=18,this.host.add(s),this.pulses.push({mesh:s,born:t,radius:i.radius})}removeTraveler(e){for(const t of[e.sprite,...e.trail])this.host.remove(t),t.material.dispose()}removePulse(e){this.host.remove(e),e.material instanceof pn&&e.material.dispose()}}function Pw(n){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const i=t.createRadialGradient(64,64,10,64,64,64);i.addColorStop(0,`${n}cc`),i.addColorStop(.55,`${n}55`),i.addColorStop(1,`${n}00`),t.fillStyle=i,t.fillRect(0,0,128,128),t.fillStyle=n,t.beginPath(),t.arc(64,64,30,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(64,52,9,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(45,82),t.quadraticCurveTo(46,64,64,64),t.quadraticCurveTo(82,64,83,82),t.closePath(),t.fill();const s=new Br(e);return s.colorSpace=Gt,s}function Iw(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,`${n}ff`),i.addColorStop(1,`${n}00`),t.fillStyle=i,t.fillRect(0,0,64,64);const s=new Br(e);return s.colorSpace=Gt,s}const ch=1024,dh=2048,Dw=.25,Lw=4;function gr(n,e=Lw){const t=2**(Math.ceil(Math.log2(Math.max(.001,n))*2)/2);return Math.min(e,Math.max(Dw,t))}class Uw{constructor(e){this.palette=e}palette;pages=[];specs=new Map;regions=new Map;entries=[];hints=new Map;wanted=new Map;root;widths=new Map;measure(e,t,i){const s=`${t}
${i}`;let r=this.widths.get(s);return r===void 0&&(this.widths.size>5e4&&this.widths.clear(),e.font=t,r=e.measureText(i).width,this.widths.set(s,r)),r}matrix=new nt;position=new D;depth=new D;scale=new D;up=new D;right=new D;create(e,t,i="node",s={width:160,depth:100}){i==="icon"&&!bc.has(e)&&(e=Em(e));const r=i==="node"?`node:${e}:${s.width}:${s.depth}:${s.fontSize??""}:${s.wrap?1:0}`:`${i}:${e}`;this.specs.has(r)||this.specs.set(r,{text:e,kind:i,bounds:s});const o=new Rt;return i==="node"&&(o.userData.captionResolution=uh(s),o.userData.captionBounds=s),this.entries.push({object:o,key:r,kind:i}),o}finish(e){this.root=e,this.hints.size>5e4&&this.hints.clear();for(const[t,i]of this.specs)this.draw(t,i,this.hints.get(t)??1);for(const t of this.entries)this.regions.get(t.key)?.page.entries.push(t);for(const t of this.pages)this.batch(t,e)}draw(e,t,i){const{text:s,kind:r,bounds:o}=t,a=this.palette.labelFont??"system-ui",l=this.pages[0]?.context??Nw(),c=uh(o),d=r==="icon"?`500 64px ${a}`:r==="group"?`500 24px ${a}`:r==="edge"?`500 26px ${a}`:`600 34px ${a}`,u=r==="node"?Dm({label:s,...o},(S,I)=>this.measure(l,`600 ${I*c}px ${a}`,S)/c):void 0,h=u?`600 ${u.size*c}px ${a}`:d,f=u?8*c:15,g=u?Math.ceil((u.lines.length*u.size*1.28+16)*c):r==="icon"?92:56,v=u?Math.ceil(Math.max(1,...u.lines.map(S=>this.measure(l,h,S)))+f*2):r==="icon"?92:Math.min(520,Math.ceil(this.measure(l,h,s))+30),m=Math.max(Math.min(gr(i),(dh-8)/Math.max(v,g)),Math.min(1,4/Math.min(v,g))),p=Math.ceil(v*m),b=Math.ceil(g*m),w=this.place(p,b),{x:_,y:P,context:E}=w;E.setTransform(m,0,0,m,_,P);const C=this.palette;(r==="node"||r==="edge")&&(E.fillStyle=r==="node"?C.nodeLabel.background:C.edgeLabel.background,E.beginPath(),E.roundRect(2,3,v-4,g-6,8),E.fill(),r==="node"&&(E.strokeStyle=C.nodeLabel.border,E.lineWidth=2,E.stroke())),E.fillStyle=r==="group"?C.groupLabel:r==="icon"?C.glyph:r==="edge"?C.edgeLabel.text:C.nodeLabel.text,E.font=h;const y=r==="icon"?bc.get(s):void 0;if(y)C.iconFilter&&(E.filter=C.iconFilter),E.drawImage(y,8,8,v-16,g-16),E.filter="none";else if(u)for(const[S,I]of u.lines.entries())E.fillText(I,v/2,f+(S+.5)*u.size*c*1.28);else E.fillText(s,v/2,g/2,v-20);E.setTransform(1,0,0,1,0,0),this.regions.set(e,{page:w,x:_,y:P,width:v,height:g,pixelWidth:p,pixelHeight:b,scale:m,capped:m<gr(i)-1e-6}),this.hints.set(e,m),w.x+=p+4,w.rowHeight=Math.max(w.rowHeight,b+4)}place(e,t){let i=this.pages[this.pages.length-1];return i&&i.x+e>i.size&&(i.x=0,i.y+=i.rowHeight,i.rowHeight=0),(!i||i.y+t>i.size||e>i.size)&&(i=this.page(Math.max(e,t)+8>ch?dh:ch)),i}page(e){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("Text canvas unavailable");i.textAlign="center",i.textBaseline="middle";const s=new Br(t);s.premultiplyAlpha=!0,s.generateMipmaps=!1,s.minFilter=Ht;const r={size:e,canvas:t,context:i,texture:s,entries:[],x:0,y:0,rowHeight:0};return this.pages.push(r),r}batch(e,t){e.texture.needsUpdate=!0;const i=new Di(1,1),s=new Float32Array(e.entries.length*4);for(const[a,l]of e.entries.entries()){const c=this.regions.get(l.key);c&&s.set([c.x/e.size,1-(c.y+c.pixelHeight)/e.size,c.pixelWidth/e.size,c.pixelHeight/e.size],a*4)}i.setAttribute("atlasRect",new hc(s,4));const r=new pn({map:e.texture,transparent:!0,blending:Zh,blendSrc:Jh,blendDst:qo,depthTest:!1,depthWrite:!1,fog:!1});r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 atlasRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = atlasRect.xy + vMapUv * atlasRect.zw;`),a.fragmentShader=a.fragmentShader.replace("#include <colorspace_fragment>","")},r.customProgramCacheKey=()=>"solar-forge-atlas-v3";const o=new Ko(i,r,e.entries.length);o.instanceMatrix.setUsage(Ei),o.frustumCulled=!1,o.renderOrder=10,e.batch=o,t.add(Ms(o))}sync(e,t,i=1){this.up.set(0,1,0).applyQuaternion(e.quaternion),this.right.set(1,0,0).applyQuaternion(e.quaternion);const s=e.projectionMatrix.elements[5]??1;this.wanted.clear();for(const r of this.pages){const o=r.batch;if(o){for(let a=0;a<r.entries.length;a++){const l=r.entries[a],c=l&&this.regions.get(l.key);if(!l||!c)continue;this.position.setFromMatrixPosition(l.object.matrixWorld);const u=2*(e instanceof tn?Math.max(1,-this.depth.copy(this.position).applyMatrix4(e.matrixWorldInverse).z):1)/(t*s);if(l.kind==="edge"){const _=l.object.userData.offsetX,P=l.object.userData.offsetY;this.position.addScaledVector(this.up,(typeof P=="number"?P:22)*u),typeof _=="number"&&this.position.addScaledVector(this.right,_*u)}const h=l.object.userData.nodeWidth,f=typeof h=="number"?h/u:120,g=l.object.userData.nodeDepth,v=typeof g=="number"?g/u:100,m=l.object.userData.captionBounds,p=m&&typeof h=="number"&&typeof g=="number"?Math.min(h/m.width,g/m.depth):1,b=l.kind==="icon"?Math.min(58,f*.28,v*.7)/64:l.kind==="node"?p/(Number(l.object.userData.captionResolution)*u):l.kind==="group"?Math.min(.5,f*.9/c.width):.5,w=b*i;w>(this.wanted.get(l.key)??0)&&this.wanted.set(l.key,w),l.kind==="node"&&l.object.userData.captionBelow&&this.position.addScaledVector(this.up,-c.height*b*u/2),this.scale.set(c.width*b*u,c.height*b*u,1),this.matrix.compose(this.position,e.quaternion,this.scale),o.setMatrixAt(a,this.matrix)}o.instanceMatrix.needsUpdate=!0}}for(const[r,o]of this.wanted){const a=this.regions.get(r);if(!a)continue;const l=gr(o);if(l>a.scale+1e-6&&!a.capped||l*2<a.scale-1e-6)return!0}return!1}redraw(){const e=this.root,t=this.pages;this.pages=[],this.regions.clear();for(const[i,s]of this.wanted)this.hints.set(i,gr(s));if(e){for(const i of t)i.batch&&e.remove(i.batch);this.finish(e)}return()=>hh(t)}retire(){const e=this.pages;return this.pages=[],this.entries=[],this.specs.clear(),this.regions.clear(),this.wanted.clear(),this.root=void 0,()=>hh(e)}dispose(){this.retire()()}}function uh(n){return Math.min(2,800/Math.max(n.width,n.depth))}let pl;function Nw(){if(pl??=document.createElement("canvas").getContext("2d")??void 0,!pl)throw new Error("Text canvas unavailable");return pl}function hh(n){for(const e of n)e.batch&&(e.batch.removeFromParent(),e.batch.dispose(),e.batch.geometry.dispose(),Array.isArray(e.batch.material)||e.batch.material.dispose()),e.texture.dispose(),e.canvas.width=0,e.canvas.height=0}function fh(n,e){return{left:Math.min(n.x,e.x),top:Math.min(n.y,e.y),right:Math.max(n.x,e.x),bottom:Math.max(n.y,e.y)}}function Fw(n,e,t,i,s){const r=[],o=new D;for(const a of n.values()){const l=Wt(a,n),c=a.kind==="group"?1:12,d={left:1/0,top:1/0,right:-1/0,bottom:-1/0};let u=!1;for(const f of[-a.width/2,a.width/2])for(const g of[-c,c])for(const v of[-a.depth/2,a.depth/2]){o.set(l.x+f,l.level*4+g,l.z+v).project(e),o.z>=-1&&o.z<=1&&(u=!0);const m=(o.x+1)*t/2,p=(1-o.y)*i/2;d.left=Math.min(d.left,m),d.right=Math.max(d.right,m),d.top=Math.min(d.top,p),d.bottom=Math.max(d.bottom,p)}if(!u)continue;(a.kind==="group"?d.left>=s.left&&d.right<=s.right&&d.top>=s.top&&d.bottom<=s.bottom:d.right>=s.left&&d.left<=s.right&&d.bottom>=s.top&&d.top<=s.bottom)&&r.push(a.id)}return r}function na(n,e,t,i){return n.copy(Tc(e)).lerp(Tc(t),i)}const Io=new Map;function Tc(n){let e=Io.get(n);return e||(Io.size>4096&&Io.clear(),e=new Ze(n),Io.set(n,e)),e}class kw{constructor(e,t,i,s){this.palette=s;for(const r of["service","group","process","decision","terminal"]){const o=e.filter(u=>u.shape?u.shape===r:u.kind===r);if(!o.length)continue;const a=r==="group",l=new rd({color:"#ffffff",transparent:a,opacity:a?s.groupOpacity:1,depthWrite:!a}),c=r==="process"||r==="decision"||r==="terminal"?i[r]:t,d=new Ko(c,l,o.length);d.instanceMatrix.setUsage(Ei),d.frustumCulled=!1,o.forEach((u,h)=>{this.entries.set(u.id,{mesh:d,index:h}),d.setColorAt(h,this.paint(u,!1))}),this.meshes.push(d),this.root.add(d)}}palette;root=new Tn;entries=new Map;meshes=[];matrix=new nt;scale=new D;rotation=new Pi;color=new Ze;update(e,t,i=!1){const s=this.entries.get(e.id);s&&(this.scale.set(e.width,e.kind==="group"?2:24,e.depth),s.mesh.setMatrixAt(s.index,this.matrix.compose(t,this.rotation,this.scale)),s.mesh.instanceMatrix.addUpdateRange(s.index*16,16),s.mesh.instanceMatrix.needsUpdate=!0,s.mesh.setColorAt(s.index,this.paint(e,i)),s.mesh.instanceColor&&(s.mesh.instanceColor.addUpdateRange(s.index*3,3),s.mesh.instanceColor.needsUpdate=!0))}paint(e,t){const i=this.palette;return e.kind==="group"?na(this.color,i.group,e.color,i.monochrome?0:.35):na(this.color,i.tile,e.color,i.monochrome?0:i.tileTint),t&&this.color.lerp(Tc(i.selected),.12),this.color}dispose(){for(const e of this.meshes)e.dispose(),Array.isArray(e.material)||e.material.dispose();this.root.clear(),this.entries.clear()}}class Ow{constructor(e,t,i){this.palette=i,this.template=new Float32Array(t.count*3);for(let r=0;r<t.count;r++)this.template[r*3]=t.getX(r),this.template[r*3+1]=t.getY(r),this.template[r*3+2]=t.getZ(r);this.shadowMaterial=new pn({color:i.shadow,transparent:!0,opacity:i.shadowOpacity,depthWrite:!1}),this.faces=new Ko(this.plane,this.faceMaterial,e),this.shadows=new Ko(this.plane,this.shadowMaterial,e);for(const r of[this.faces,this.shadows])r.frustumCulled=!1,r.instanceMatrix.setUsage(Ei);this.positions=new Zt(new Float32Array(e*t.count*3),3).setUsage(Ei),this.outlineGeometry.setAttribute("position",this.positions),this.colors=new Zt(new Float32Array(e*t.count*3),3).setUsage(Ei),this.outlineGeometry.setAttribute("color",this.colors);const s=new Sf(this.outlineGeometry,this.outlineMaterial);s.frustumCulled=!1,this.root.add(this.faces,this.shadows,s)}palette;root=new Tn;plane=new Di(1,1);faceMaterial=new rd({color:"#ffffff"});shadowMaterial;outlineMaterial=new Qc({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.85});outlineGeometry=new Dt;positions;colors;color=new Ze;faces;shadows;matrix=new nt;rotation=new Pi().setFromAxisAngle(new D(1,0,0),-Math.PI/2);position=new D;scale=new D;template;update(e,t,i){t.kind==="service"&&!t.shape?(this.position.set(i.x,i.y+12.5,i.z),this.scale.set(t.width*.82,t.depth*.76,1),this.faces.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale)),this.faces.setColorAt(e,na(this.color,this.palette.face,t.color,this.palette.monochrome?0:this.palette.faceTint)),this.faces.instanceColor&&(this.faces.instanceColor.addUpdateRange(e*3,3),this.faces.instanceColor.needsUpdate=!0),this.position.set(i.x+8,i.y-14,i.z+11),this.scale.set(t.width*1.04,t.depth*1.05,1),this.shadows.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale))):(this.matrix.makeScale(0,0,0),this.faces.setMatrixAt(e,this.matrix),this.shadows.setMatrixAt(e,this.matrix)),this.faces.instanceMatrix.addUpdateRange(e*16,16),this.faces.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.addUpdateRange(e*16,16),this.shadows.instanceMatrix.needsUpdate=!0,na(this.color,this.palette.outline,t.color,t.kind==="group"?this.palette.monochrome?0:.85:this.palette.outlineTint);const s=this.template,r=e*s.length,o=this.colors.array,{r:a,g:l,b:c}=this.color;for(let v=r,m=r+s.length;v<m;v+=3)o[v]=a,o[v+1]=l,o[v+2]=c;this.colors.addUpdateRange(r,s.length),this.colors.needsUpdate=!0;const d=!!t.shape||t.kind==="text"||t.kind==="note",u=d?0:t.width,h=d?0:t.kind==="group"?2:24,f=d?0:t.depth,g=this.positions.array;for(let v=0;v<s.length;v+=3)g[r+v]=i.x+(s[v]??0)*u,g[r+v+1]=i.y+(s[v+1]??0)*h,g[r+v+2]=i.z+(s[v+2]??0)*f;this.positions.addUpdateRange(r,s.length),this.positions.needsUpdate=!0}dispose(){this.faces.dispose(),this.shadows.dispose(),this.plane.dispose(),this.outlineGeometry.dispose(),this.faceMaterial.dispose(),this.shadowMaterial.dispose(),this.outlineMaterial.dispose(),this.root.clear()}}const ph=52*Math.PI/180,mh=1600,zw=2800,Bw=.05,Gw=4;class Vw{target=new D;spatial=new tn(20,1,20,8e4);plan=new Gr(-1,1,1,-1,.1,8e4);mode="isometric";width=1;height=1;distance=mh;rightInset=260;get camera(){return this.mode==="top"?this.plan:this.spatial}resize(e,t){this.width=e,this.height=t,this.plan.left=-e/2,this.plan.right=e/2,this.plan.top=t/2,this.plan.bottom=-t/2,this.spatial.aspect=e/t,this.update()}setPanelVisible(e){this.rightInset=e?260:0,this.update()}setMode(e){this.mode=e,this.update()}update(){const e=this.camera;e.up.set(0,1,0),this.mode==="top"?(e.up.set(0,0,-1),e.position.set(this.target.x,3e3,this.target.z)):e.position.set(this.target.x,this.target.y+this.distance*Math.sin(ph),this.target.z+this.distance*Math.cos(ph)),e.lookAt(this.target),e.setViewOffset(this.width,this.height,(this.width<800?0:this.rightInset)/2-28,0,this.width,this.height),e.updateProjectionMatrix(),e.updateMatrixWorld()}fit(e){this.target.set((e.minX+e.maxX)/2,e.maxY/3,(e.minZ+e.maxZ)/2);const t=this.width<800?0:this.rightInset,i=Math.max(this.width-t-150,200),s=Math.max(this.height-240,200);this.plan.zoom=Math.min(2,i/Math.max(e.maxX-e.minX,200),s/Math.max(e.maxZ-e.minZ,200)),this.spatial.zoom=1;const r=new D,o=this.mode;this.mode="isometric";let a=200,l=6e4;for(let c=0;c<14;c++){this.distance=(a+l)/2,this.update();let d=!0;for(const u of[e.minX,e.maxX])for(const h of[0,e.maxY])for(const f of[e.minZ,e.maxZ]){r.set(u,h,f).project(this.spatial);const g=(r.x+1)*this.width/2,v=(1-r.y)*this.height/2;(g<100||g>this.width-t-38||v<135||v>this.height-140||r.z>1)&&(d=!1)}d?l=this.distance:a=this.distance}this.distance=l,this.mode=o,this.update()}snapshot(){const e=this.target.clone(),{distance:t,rightInset:i,mode:s}=this,r=this.spatial.zoom,o=this.plan.zoom;return()=>{this.target.copy(e),this.distance=t,this.rightInset=i,this.mode=s,this.spatial.zoom=r,this.plan.zoom=o,this.update()}}clampZoom(e){const t=this.mode==="top"?1:Math.max(1,this.distance/mh);return Math.min(Gw*t,Math.max(Bw,e))}get fogScale(){return this.mode==="top"?1:Math.min(1,zw/this.distance)}zoomBy(e){this.camera.zoom=this.clampZoom(this.camera.zoom*e),this.update()}get percent(){return Math.round(this.camera.zoom*100)}}const gh=12e-5,vh={width:3.6,dash:12,gap:38,speed:40},xh=n=>n==="north"||n==="east"||n==="south"||n==="west";function Hw(n,e,t,i,s,r){const o=s-t,a=r-i,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/l)):0;return Math.hypot(n-(t+c*o),e-(i+c*a))}function Ww(n,e,t){return n?e?n*e>0?"nwse-resize":"nesw-resize":"ew-resize":"ns-resize"}const Xw=n=>n.kind==="text"||n.kind==="note";function _h(n,e){n.position.set(e.kind==="group"?-e.width/2+Math.min(e.width/2,150):0,e.kind==="group"?5:e.shape?26:0,e.kind==="group"?-e.depth/2+22:e.shape?0:e.depth/2+16)}function Do(n){return n.kind==="group"?2:n.kind==="text"?4:n.kind==="note"?Wo:24}class $w{constructor(e,t,i=Ac.scene){this.host=e,this.document=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.info.autoReset=!1,this.renderer.setClearColor("#000000",0),this.ray.layers.enable(Sr),this.scene.fog=this.fog,this.scene.matrixWorldAutoUpdate=!1,this.renderer.domElement.setAttribute("aria-label","Architecture diagram canvas"),this.host.append(this.renderer.domElement),this.selectionBox.className="selection-box",this.selectionBox.hidden=!0,this.selectionBox.setAttribute("aria-hidden","true"),this.host.append(this.selectionBox),this.scene.add(this.ports),this.scene.add(this.content,this.ambient);const s=new Z0("#ffe5bf",2);s.position.set(-200,500,300),this.scene.add(s),this.applyPalette(i),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.renderer.domElement.addEventListener("pointerdown",this.down),this.renderer.domElement.addEventListener("pointermove",this.move),this.renderer.domElement.addEventListener("pointerup",this.up),this.renderer.domElement.addEventListener("pointercancel",this.cancel),this.renderer.domElement.addEventListener("lostpointercapture",this.lostCapture),this.renderer.domElement.addEventListener("mousedown",this.preventNativeDrag),this.renderer.domElement.addEventListener("dragstart",this.preventNativeDrag),this.renderer.domElement.addEventListener("wheel",this.wheel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",this.context),this.renderer.domElement.addEventListener("dblclick",this.doubleClick),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.contextRestored),this.load(t),this.resize(),this.setView("isometric")}host;ready=Promise.resolve();document;scene=new vf;palette=Ac.scene;backdrop=ah(this.palette);labels=new Uw(this.palette);grid=new Eu(16e3,320);ambient=new J0("#c9def1",2);fog=new Zc("#0b111a",gh);view=new Vw;get camera(){return this.view.camera}get target(){return this.view.target}renderer=new Kb({antialias:!1,alpha:!1});antialias=new Mw;motionUntil=0;settleTimer;content=new Tn;geometry=new ci(1,1,1);pickMaterial=new pn;shapeGeometries=qw();tileOutline=new a0(this.geometry);details;bodies;edgeMaterial=new Ss({color:"#ffffff",linewidth:1.6,transparent:!0,depthWrite:!1,vertexColors:!0});haloMaterial=new Ss({color:"#ffffff",linewidth:8,transparent:!0,opacity:.12,depthWrite:!1,vertexColors:!0});flowMaterial=new Ss({color:"#ffffff",linewidth:3.6,transparent:!0,depthWrite:!1,dashed:!0,dashSize:12,gapSize:38});flowLines;distancesDirty=!1;flowing=!0;hasFlowEdges=!1;animators=new Set;edgeGeometry;flowGeometry;flowPositions=new Float32Array;flowBuffer;inactive=new Set;edgeBuffer;tiles=new Map;scratchColor=new Ze;dimColor=new Ze;edges=new Map;edgePositions=new Zt(new Float32Array,3);edgeLabels=new Map;nodeIndex=new Map;edgeIndex=new Map;incident=new Map;obstacleCache;fanCache;get obstacles(){return this.obstacleCache??=Hf(this.nodeIndex),this.obstacleCache}get fans(){return this.fanCache??=rw(this.edgeIndex.values(),this.nodeIndex),this.fanCache}pickables=[];viewProjection=new nt;scratchA=new D;scratchB=new D;dirty=!0;ray=new tv;pointer=new he;plane=new yi(new D(0,1,0),0);point=new D;observer;frame=0;width=1;height=1;mode="isometric";tool="select";snapping=!0;selectedIds=new Set;portGeometry=new sd(1,12,8);handleGeometry=new ci(1,1,1);portMaterial=new pn({color:"#ffc778",depthTest:!1});handleMaterial=new pn({color:"#f4f7fb",depthTest:!1});ports=new Tn;connectionStart;previewMaterial=new Ss({color:"#ffc778",linewidth:2,transparent:!0,opacity:.85,depthTest:!1,dashed:!0,dashSize:10,gapSize:7});preview;selectedEdge;hoveredEdge;edgeColors=new Float32Array;edgeColorBuffer;onSelectEdge=()=>{};journeyCaption="";onJourneyCaption=()=>{};setJourneyCaption(e){this.journeyCaption=e,this.onJourneyCaption(e)}onJourneyHop=()=>{};onJourneyEnd=()=>{};onJourneyBranches=()=>({mode:"all",edges:[]});onJourneyChoose=async()=>{};onJourneyCancelChoice=()=>{};journey;onEditRequest=()=>{};onPlace=()=>{};onConnect=()=>{};onMoves=()=>{};onContextMenu=()=>{};onResize=()=>{};resizing;dragOrigins=[];drag;guideMaterial=new Ss({color:"#ff2a6d",linewidth:1.5,transparent:!0,opacity:.9,depthTest:!1,dashed:!0,dashSize:8,gapSize:6});guides;pan;activePointer;selectionBox=document.createElement("div");marquee;selected;disposed=!1;retired=[];flushRetired(){for(const e of this.retired.splice(0))e()}labelTimer;annotationScale=2;sharpenLabelsSoon(e){clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>{this.disposed||(e&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.invalidate())},160)}staleAnnotations(){const e=this.renderer.getPixelRatio(),t=[];for(const i of this.tiles.values()){const s=i.annotation?.root;if(!s)continue;const r=gr(e/this.pixelSize(i.group.position),16),o=Number(s.userData.resolution);(r>o+1e-6&&!s.userData.capped||r*2<o-1e-6)&&t.push({tile:i,scale:r})}return t}sharpenAnnotations(){for(const{tile:e,scale:t}of this.staleAnnotations()){const i=e.annotation;if(!i)continue;const s=rh(e.node,this.palette,t);e.group.remove(i.root),e.group.add(s.root),e.annotation=s,this.retired.push(i.dispose),this.annotationScale=t}}sharpenLabels(){this.scene.updateMatrixWorld(),this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio())&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.scene.updateMatrixWorld()}fitted=!1;onSelect=()=>{};onMove=()=>{};onZoom=()=>{};onError=()=>{};metrics={frames:0,lastRenderMs:0,textures:0,drawCalls:0};applyPalette(e){this.palette=e,this.labels.palette=e,this.backdrop.dispose(),this.backdrop=ah(e),this.scene.background=this.backdrop,this.fog.color.set(e.fog),this.ambient.intensity=e.ambient,this.scene.remove(this.grid),this.grid.dispose(),this.grid=new Eu(16e3,320,e.grid[1],e.grid[1]),this.grid.position.y=-12,Array.isArray(this.grid.material)||(this.grid.material.transparent=!0,this.grid.material.opacity=e.gridOpacity),this.scene.add(this.grid),this.portMaterial.color.set(e.port),this.handleMaterial.color.set(e.handle),this.previewMaterial.color.set(e.edgeSelected),this.flowMaterial.color.set(e.flow),this.guideMaterial.color.set(e.guide),this.haloMaterial.opacity=e.haloOpacity;const t=e.edgeWidth??1.6;this.edgeMaterial.linewidth=t,this.haloMaterial.linewidth=t*5;const i=e.flowStyle??vh;this.flowMaterial.linewidth=i.width,this.flowMaterial.dashSize=i.dash,this.flowMaterial.gapSize=i.gap}setPalette(e){const t=this.selection,i=this.selectedEdge;this.applyPalette(e),this.load(this.document),i?this.selectEdge(i):this.selectMany(t)}releaseContent(){const e=[...this.tiles.values()].flatMap(a=>a.annotation?[a.annotation]:[]),{bodies:t,details:i,edgeGeometry:s,flowGeometry:r}=this,o=this.labels.retire();this.retired.push(()=>{for(const a of e)a.dispose();t?.dispose(),i?.dispose(),s?.dispose(),r?.dispose(),o()}),this.bodies=void 0,this.details=void 0,this.edgeGeometry=void 0,this.flowGeometry=void 0,this.flowBuffer=void 0,this.edgeBuffer=void 0,this.content.clear(),this.tiles.clear(),this.pickables=[],this.edges.clear(),this.edgeLabels.clear(),this.incident.clear(),this.nodeIndex.clear(),this.edgeIndex.clear()}load(e){this.releasePointer(),this.marquee=void 0,this.selectionBox.hidden=!0,this.drag=void 0,this.dragOrigins=[],this.resizing=void 0,this.pan=void 0,this.connectionStart=void 0,this.clearPreview(),this.stopJourney(),this.hoveredEdge=void 0,this.selectedEdge=void 0,this.document=e,this.releaseContent(),this.selected=void 0,this.selectedIds.clear(),this.ports.clear(),this.bodies=new kw(e.nodes,this.geometry,this.shapeGeometries,this.palette),this.content.add(this.bodies.root),this.details=new Ow(e.nodes.length,this.tileOutline.getAttribute("position"),this.palette),this.content.add(this.details.root);for(const[l,c]of e.nodes.entries()){this.nodeIndex.set(c.id,c);const d=new Tn,u=new bt(c.shape?this.shapeGeometries[c.shape]:this.geometry,this.pickMaterial);if(u.scale.set(c.width,Do(c),c.depth),u.userData.nodeId=c.id,u.visible=!1,d.add(u),this.pickables.push(u),Xw(c)){const m=rh(c,this.palette,this.annotationScale);d.add(m.root),this.content.add(d),this.tiles.set(c.id,{index:l,node:c,group:d,label:new Tn,annotation:m});continue}let h;const f=Ds(c.serviceId??c.label);if(c.kind==="group"&&f?.icon&&(h=this.labels.create(f.id,this.camera.zoom,"icon"),d.add(h)),c.kind==="service"&&!c.shape){const m=this.labels.create(f?.id??c.label,this.camera.zoom,"icon");m.position.y=28,m.userData.nodeWidth=c.width,m.userData.nodeDepth=c.depth,d.add(m)}const g=this.labels.create(c.label,this.camera.zoom,c.kind==="group"?"group":"node",{width:c.width,depth:c.depth,...c.fontSize?{fontSize:c.fontSize}:{},...c.wrap?{wrap:!0}:{}});g.userData.captionBelow=c.kind==="service"&&!c.shape,g.userData.nodeWidth=c.width,g.userData.nodeDepth=c.depth,_h(g,c),d.add(g),this.content.add(d);const v={index:l,node:c,group:d,label:g,...h?{headerIcon:h}:{}};this.positionHeaderIcon(v),this.tiles.set(c.id,v)}const t=new Float32Array(e.edges.length*42);this.edgePositions=new Zt(t,3),this.edgeColors=new Float32Array(e.edges.length*42),this.edgeGeometry=new pr().setPositions(t).setColors(this.edgeColors);const i=this.edgeGeometry.getAttribute("instanceStart");i instanceof fn&&(this.edgeBuffer=i.data,this.edgeBuffer.setUsage(Ei));const s=this.edgeGeometry.getAttribute("instanceColorStart");s instanceof fn&&(this.edgeColorBuffer=s.data,this.edgeColorBuffer.setUsage(Ei),this.edgeColors=s.data.array);const r=new cr(this.edgeGeometry,this.haloMaterial);r.frustumCulled=!1;const o=new cr(this.edgeGeometry,this.edgeMaterial);o.frustumCulled=!1,this.inactive=Im(e),this.hasFlowEdges=e.edges.some(l=>l.relationship!=="dependency"),this.flowPositions=new Float32Array(e.edges.length*42),this.flowGeometry=new pr().setPositions(this.flowPositions);const a=this.flowGeometry.getAttribute("instanceStart");a instanceof fn&&(this.flowBuffer=a.data,this.flowBuffer.setUsage(Ei),this.flowPositions=a.data.array),this.flowLines=new cr(this.flowGeometry,this.flowMaterial),this.flowLines.frustumCulled=!1,this.flowLines.visible=this.flowing,this.flowLines.renderOrder=2,this.content.add(r,o,this.flowLines),this.distancesDirty=!0;for(const[l,c]of e.edges.entries()){if(this.edgeIndex.set(c.id,c),this.edges.set(c.id,l),this.paintEdge(c.id),c.label){const d=this.labels.create(c.label,this.camera.zoom,"edge");this.content.add(d),this.edgeLabels.set(c.id,d)}for(const d of[c.source,c.target]){const u=this.incident.get(d)??new Set;u.add(c.id),this.incident.set(d,u)}}this.labels.finish(this.content),this.updatePositions(),this.invalidate(),this.onSelect(void 0),this.loadIcons(e)}loadIcons(e){const t=[];for(const s of e.nodes){const r=Ds(s.serviceId??s.label);r?.icon&&t.push(r.id)}const i=nw(t);i.length&&(this.ready=tw(i).then(()=>{if(this.disposed||this.document!==e)return;const s=this.selectedEdge,r=this.selection;this.load(e),s?this.selectEdge(s):this.selectMany(r)}).catch(s=>this.onError(String(s))))}positionHeaderIcon(e){if(!e.headerIcon)return;const{width:t,depth:i}=e.node;e.headerIcon.position.set(t/2-28,6,-i/2+24),e.headerIcon.userData.nodeWidth=t>=120?100:0,e.headerIcon.userData.nodeDepth=40,e.label.userData.nodeWidth=Math.max(30,t-80),e.label.position.x=-t/2+Math.min(Math.max(30,t-80)/2,150)}updatePositions(){this.obstacleCache=void 0,this.fanCache=void 0;for(const e of this.tiles.values()){const t=Wt(e.node,this.nodeIndex);this.positionHeaderIcon(e),e.group.position.set(t.x,t.level*4,t.z),this.bodies?.update(e.node,e.group.position,this.selectedIds.has(e.node.id)),this.details?.update(e.index,e.node,e.group.position)}for(const e of this.edges.keys())this.updateEdge(e)}updateEdge(e){const t=this.edgeIndex.get(e),i=this.edges.get(e);if(!t||i===void 0)return;const s=this.tiles.get(t.source),r=this.tiles.get(t.target);if(!s||!r)return;const{points:o,targetPort:a}=dl(t,this.nodeIndex,this.obstacles,this.fans),l=Math.max(s.group.position.y,r.group.position.y)+8,c=i*14;for(let _=0;_<5;_++){const P=o[_],E=o[_+1];!P||!E||(this.edgePositions.setXYZ(c+_*2,P.x,l,P.z),this.edgePositions.setXYZ(c+_*2+1,E.x,l,E.z))}const d=o[0],u=o[o.length-1];if(!d||!u)return;const h=a==="west"?1:a==="east"?-1:0,f=a==="north"?1:a==="south"?-1:0;this.edgePositions.setXYZ(c+10,u.x-h*8+f*4,l,u.z-f*8-h*4),this.edgePositions.setXYZ(c+11,u.x,l,u.z),this.edgePositions.setXYZ(c+12,u.x-h*8-f*4,l,u.z-f*8+h*4),this.edgePositions.setXYZ(c+13,u.x,l,u.z);const{point:g,horizontal:v}=sh(o);this.edgeBuffer&&(this.edgeBuffer.addUpdateRange(i*42,42),this.edgeBuffer.needsUpdate=!0);const m=this.edgePositions.array,p=i*42,b=this.inactive.has(e)||t.relationship==="dependency";for(let _=0;_<42;_++)this.flowPositions[p+_]=m[b?p+_%3:p+_]??0;this.flowBuffer&&(this.flowBuffer.addUpdateRange(p,42),this.flowBuffer.needsUpdate=!0),this.distancesDirty=!0;const w=this.edgeLabels.get(e);w&&(w.position.set(g.x,l+8,g.z),w.userData.offsetX=v?0:46,w.userData.offsetY=v?22:0)}setView(e){this.mode=e,this.view.setMode(e),this.onZoom(this.view.percent),this.invalidate()}setQuality(e){this.renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(2,Math.max(1,e)))),this.resize()}setDiagramVisible(e){this.content.visible=e,this.invalidate()}insertionPoint(){return{x:this.target.x,z:this.target.z}}reveal(e){const t=this.tiles.get(e),i=this.nodeScreenPosition(e);if(!t||!i)return;const s=this.renderer.domElement.getBoundingClientRect(),r=i.x-s.left,o=i.y-s.top;r>120&&r<this.width-300&&o>120&&o<this.height-120||(this.fitted=!1,this.target.x=t.group.position.x,this.target.z=t.group.position.z,this.setView(this.mode))}setPanelVisible(e){this.view.setPanelVisible(e),this.fit()}zoomBy(e){this.fitted=!1,this.view.zoomBy(e),this.onZoom(this.view.percent),this.invalidate()}setTool(e){this.cancelInteraction(),this.tool=e,this.renderer.domElement.style.cursor=this.toolCursor()}toolCursor(){return this.tool==="pan"?"grab":this.tool==="connect"?"crosshair":this.tool==="text"?"text":this.tool==="note"?"copy":"default"}finishInteraction(){this.up()}fit(){this.fitted=!0;let e=1/0,t=-1/0,i=1/0,s=-1/0,r=0;for(const o of this.tiles.values())e=Math.min(e,o.group.position.x-o.node.width/2),t=Math.max(t,o.group.position.x+o.node.width/2),i=Math.min(i,o.group.position.z-o.node.depth/2),s=Math.max(s,o.group.position.z+o.node.depth/2+70),r=Math.max(r,o.group.position.y+45);Number.isFinite(e)&&this.view.fit({minX:e,maxX:t,minZ:i,maxZ:s,maxY:r}),this.onZoom(this.view.percent),this.invalidate()}resize(){this.width=Math.max(this.host.clientWidth,1),this.height=Math.max(this.host.clientHeight,1),this.renderer.setSize(this.width,this.height),this.view.resize(this.width,this.height),this.fitted?this.fit():this.invalidate()}locate(e){const t=this.renderer.domElement.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/this.width*2-1,-(e.clientY-t.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.ray.ray.intersectPlane(this.plane,this.point)??void 0}down=e=>{if(this.activePointer!==void 0||e.button>2)return;e.preventDefault();const t=this.locate(e);if(!t)return;if(this.activePointer=e.pointerId,e.isTrusted&&this.renderer.domElement.setPointerCapture(e.pointerId),e.button===1||e.button===2||e.altKey||this.tool==="pan"){this.pan={x:t.x,z:t.z};return}if(this.tool==="text"||this.tool==="note"){this.releasePointer(),this.onPlace(this.tool,Math.round(t.x),Math.round(t.z));return}const i=this.handleAt();if(i){const a=i.userData.nodeId,l=typeof a=="string"?this.tiles.get(a)?.node:void 0,c=i.userData.resize;if(l&&Array.isArray(c)){const[u,h]=c;this.resizing={id:l.id,sx:u,sz:h,start:{x:t.x,z:t.z},from:{x:l.x,z:l.z,width:l.width,depth:l.depth},children:[...this.tiles.values()].filter(f=>f.node.parentId===l.id).map(({node:f})=>({node:f,x:f.x,z:f.z}))};return}const d=i.userData.port;if(l&&xh(d)){this.connectionStart={id:l.id,port:d},this.showPreview(t);return}}if(this.tool==="select"){const a=this.edgeAt(e);if(a){this.selectEdge(a),this.releasePointer();return}}const s=this.nodeAt();if(this.tool==="connect"){s&&(this.connectionStart?(this.onConnect(this.connectionStart.id,void 0,s,void 0),this.connectionStart=void 0,this.clearPreview()):(this.select(s),this.connectionStart={id:s},this.showPreview(t)));return}const r=s?this.tiles.get(s)?.node:void 0;if(!s||r?.kind==="group"&&!this.selectedIds.has(s)){const a=this.renderer.domElement.getBoundingClientRect(),l={x:e.clientX-a.left,y:e.clientY-a.top};this.marquee={start:l,end:l,initial:this.selection,additive:e.shiftKey,clickId:s,active:!1};return}e.shiftKey||!this.selectedIds.has(s)?this.select(s,e.shiftKey):this.selected=s;const o=this.selected?this.tiles.get(this.selected)?.node:void 0;if(o){this.dragOrigins=[...this.tiles.values()].filter(c=>{if(!this.selectedIds.has(c.node.id))return!1;let d=c.node.parentId;for(;d;){if(this.selectedIds.has(d))return!1;d=this.nodeIndex.get(d)?.parentId}return!0}).map(({node:c})=>({node:c,x:c.x,z:c.z}));const a=new Set(this.dragOrigins.map(c=>c.node.id)),l=c=>{for(let d=c.node.id;d;){if(a.has(d))return!0;d=this.nodeIndex.get(d)?.parentId}return!1};this.drag={id:o.id,x:t.x,z:t.z,startX:o.x,startZ:o.z,box:this.worldRect(this.tiles.get(o.id)),others:[...this.tiles.values()].filter(c=>!l(c)).map(c=>this.worldRect(c))}}};nodeAt(){const e=this.ray.intersectObjects(this.pickables,!1),i=(e.find(s=>{const r=s.object.userData.nodeId;return typeof r=="string"&&this.tiles.get(r)?.node.kind!=="group"})??e[0])?.object.userData.nodeId;return typeof i=="string"?i:void 0}handleAt(){return this.ray.intersectObjects(this.ports.children,!1)[0]?.object}edgeAt(e){const t=this.renderer.domElement.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top,r=this.scratchA,o=this.scratchB,a=this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);let l,c=7;for(const[d,u]of this.edges)for(let h=0;h<5;h++){const f=u*14+h*2;r.fromBufferAttribute(this.edgePositions,f).applyMatrix4(a),o.fromBufferAttribute(this.edgePositions,f+1).applyMatrix4(a);const g=(r.x+1)*this.width/2,v=(1-r.y)*this.height/2,m=(o.x+1)*this.width/2,p=(1-o.y)*this.height/2,b=Hw(i,s,g,v,m,p);b<c&&(c=b,l=d)}return l}hover(e){if(!this.locate(e))return;const t=this.handleAt(),i=t?.userData.resize;let s=this.toolCursor(),r;if(Array.isArray(i)){const[o,a]=i;s=Ww(o,a,this.mode)}else t?s="crosshair":this.tool==="select"&&(r=this.edgeAt(e),r?s="pointer":this.nodeAt()&&(s="move"));if(this.renderer.domElement.style.cursor=s,r!==this.hoveredEdge){const o=this.hoveredEdge;this.hoveredEdge=r,o&&this.paintEdge(o),r&&this.paintEdge(r),this.invalidate()}}move=e=>{if(this.activePointer===void 0){this.hover(e);return}if(e.pointerId!==this.activePointer)return;if(e.preventDefault(),this.inMotion(),this.marquee){const a=this.renderer.domElement.getBoundingClientRect();if(this.marquee.end={x:Math.max(0,Math.min(this.width,e.clientX-a.left)),y:Math.max(0,Math.min(this.height,e.clientY-a.top))},Math.hypot(this.marquee.end.x-this.marquee.start.x,this.marquee.end.y-this.marquee.start.y)>=4&&(this.marquee.active=!0),this.marquee.active){const l=fh(this.marquee.start,this.marquee.end);this.selectionBox.hidden=!1,Object.assign(this.selectionBox.style,{left:`${l.left}px`,top:`${l.top}px`,width:`${l.right-l.left}px`,height:`${l.bottom-l.top}px`})}return}const t=this.locate(e);if(!t)return;if(this.connectionStart){this.showPreview(t);return}if(this.resizing){const{sx:a,sz:l,start:c,from:d}=this.resizing,u=this.tiles.get(this.resizing.id);if(!u)return;const h=this.snapping?10:1,f=(v,m)=>Math.max(30,Math.round((v+m)/h)*h),g=u.node;a&&(g.width=f(d.width,a*(t.x-c.x)),g.x=d.x+a*(g.width-d.width)/2),l&&(g.depth=f(d.depth,l*(t.z-c.z)),g.z=d.z+l*(g.depth-d.depth)/2);for(const v of this.resizing.children)v.node.x=v.x-(g.x-d.x),v.node.z=v.z-(g.z-d.z);this.applySize(u),this.refreshPosition(g.id);return}if(this.pan){this.fitted=!1,this.target.x+=this.pan.x-t.x,this.target.z+=this.pan.z-t.z,this.setView(this.mode);return}if(!this.drag||!this.tiles.get(this.drag.id))return;const s=this.snapping?10:1;let r=Math.round((t.x-this.drag.x)/s)*s,o=Math.round((t.z-this.drag.z)/s)*s;if(e.ctrlKey)this.showGuides([]);else{const a=this.alignToNeighbours(this.drag,r,o);r=a.dx,o=a.dz}for(const a of this.dragOrigins)a.node.x=a.x+r,a.node.z=a.z+o;this.refreshPositions(this.dragOrigins.map(a=>a.node.id))};worldRect(e){if(!e)return{minX:0,maxX:0,minZ:0,maxZ:0};const t=Wt(e.node,this.nodeIndex);return{minX:t.x-e.node.width/2,maxX:t.x+e.node.width/2,minZ:t.z-e.node.depth/2,maxZ:t.z+e.node.depth/2}}alignToNeighbours(e,t,i){const s=e.box,r=8*this.pixelSize(new D((s.minX+s.maxX)/2,0,(s.minZ+s.maxZ)/2)),o=(u,h)=>[u,(u+h)/2,h];let a,l;for(const u of e.others){for(const h of o(s.minX+t,s.maxX+t))for(const f of o(u.minX,u.maxX)){const g=f-h;Math.abs(g)<r&&(!a||Math.abs(g)<Math.abs(a.diff))&&(a={diff:g,at:f,other:u})}for(const h of o(s.minZ+i,s.maxZ+i))for(const f of o(u.minZ,u.maxZ)){const g=f-h;Math.abs(g)<r&&(!l||Math.abs(g)<Math.abs(l.diff))&&(l={diff:g,at:f,other:u})}}a&&(t+=a.diff),l&&(i+=l.diff);const c=[],d=16;if(a){const u=Math.min(s.minZ+i,a.other.minZ)-30,h=Math.max(s.maxZ+i,a.other.maxZ)+30;c.push(a.at,d,u,a.at,d,h)}if(l){const u=Math.min(s.minX+t,l.other.minX)-30,h=Math.max(s.maxX+t,l.other.maxX)+30;c.push(u,d,l.at,h,d,l.at)}return this.showGuides(c),{dx:t,dz:i}}showGuides(e){if(!e.length){this.guides&&(this.scene.remove(this.guides),this.guides.geometry.dispose(),this.guides=void 0,this.invalidate());return}this.guides&&(this.scene.remove(this.guides),this.guides.geometry.dispose()),this.guides=new cr(new pr().setPositions(e),this.guideMaterial),this.guides.computeLineDistances(),this.guides.frustumCulled=!1,this.guides.renderOrder=11,this.scene.add(Ms(this.guides)),this.invalidate()}applySize(e){const t=e.group.children[0];t instanceof bt&&t.scale.set(e.node.width,Do(e.node),e.node.depth);for(const s of e.group.children)s.userData.nodeWidth=e.node.width,s.userData.nodeDepth=e.node.depth;const i=e.annotation?.root;i&&i.scale.set(e.node.width/i.userData.width,1,e.node.depth/i.userData.depth)}showPreview(e){const t=this.connectionStart,i=t?this.tiles.get(t.id):void 0;if(!t||!i)return;const s=t.port?Bs(i.node,t.port,this.nodeIndex):{x:i.group.position.x,z:i.group.position.z},r=i.group.position.y+14,o=[s.x,r,s.z,e.x,r,e.z];this.preview?this.preview.geometry.setPositions(o):(this.preview=new cr(new pr().setPositions(o),this.previewMaterial),this.preview.frustumCulled=!1,this.preview.renderOrder=11,this.scene.add(Ms(this.preview))),this.preview.computeLineDistances(),this.invalidate()}clearPreview(){this.preview&&(this.scene.remove(this.preview),this.preview.geometry.dispose(),this.preview=void 0,this.invalidate())}refreshPosition(e){this.refreshPositions([e])}refreshPositions(e){const t=[];for(const i of e){const s=this.tiles.get(i);s&&t.push(s)}if(t.length){if(this.obstacleCache=void 0,this.fanCache=void 0,t.some(i=>i.node.kind==="group"))this.updatePositions();else{const i=new Set;for(const s of t){const r=Wt(s.node,this.nodeIndex);s.group.position.set(r.x,r.level*4,r.z),this.bodies?.update(s.node,s.group.position,this.selectedIds.has(s.node.id)),this.details?.update(s.index,s.node,s.group.position);for(const o of this.incident.get(s.node.id)??[])i.add(o)}for(const s of i)this.updateEdge(s)}for(const i of t)_h(i.label,i.node),this.positionHeaderIcon(i);this.invalidate()}}syncHandles(){const e=this.selected?this.tiles.get(this.selected):void 0;if(!e)return;const{x:t,y:i,z:s}=e.group.position,r=i+(e.node.kind==="group"?2:13),o=e.node.width/2,a=e.node.depth/2;for(const l of this.ports.children){const c=l.userData.resize,d=l.userData.port;l.position.set(t,r,s);const u=this.pixelSize(l.position);if(Array.isArray(c)){const[h,f]=c;l.position.set(t+h*o,r,s+f*a),l.scale.setScalar(9*u)}else if(xh(d)){const h=20*u;l.position.set(t+(d==="east"?o+h:d==="west"?-o-h:0),r,s+(d==="south"?a+h:d==="north"?-a-h:0)),l.scale.setScalar(5.5*u)}}}pixelSize(e){const t=this.camera.projectionMatrix.elements[5]??1;return 2*(this.camera instanceof tn?Math.max(1,-this.scratchA.copy(e).applyMatrix4(this.camera.matrixWorldInverse).z):1)/(this.height*t)}up=e=>{if(e&&e.pointerId!==this.activePointer)return;if(this.marquee){e&&this.move(e);const i=this.marquee;if(this.marquee=void 0,this.selectionBox.hidden=!0,i.active){const s=Fw(this.nodeIndex,this.camera,this.width,this.height,fh(i.start,i.end));this.selectMany(i.additive?[...new Set([...i.initial,...s])]:s)}else this.select(i.clickId,i.additive)}if(this.releasePointer(),this.resizing){const{id:i,from:s,children:r}=this.resizing;this.resizing=void 0;const o=this.tiles.get(i)?.node;o&&(o.width!==s.width||o.depth!==s.depth||o.x!==s.x||o.z!==s.z)&&this.onResize([{id:i,from:s,to:{x:o.x,z:o.z,width:o.width,depth:o.depth}},...r.filter(a=>a.node.x!==a.x||a.node.z!==a.z).map(a=>({id:a.node.id,from:{x:a.x,z:a.z},to:{x:a.node.x,z:a.node.z}}))])}if(this.connectionStart&&e&&this.tool!=="connect"){const i=this.connectionStart;this.connectionStart=void 0,this.clearPreview();const s=this.locate(e),a=this.ray.intersectObjects(this.pickables,!1).find(c=>c.object.userData.nodeId!==i.id)?.object.userData.nodeId,l=typeof a=="string"?this.nodeIndex.get(a):void 0;l&&s&&this.onConnect(i.id,i.port,l.id,Sc(l,s,this.nodeIndex))}const t=this.dragOrigins.filter(i=>i.node.x!==i.x||i.node.z!==i.z).map(i=>({id:i.node.id,from:{x:i.x,z:i.z},to:{x:i.node.x,z:i.node.z}}));if(this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.showGuides([]),t.length===1){const i=t[0];i&&this.onMove(i.id,i.from,i.to)}else t.length&&this.onMoves(t)};cancelInteraction=()=>{if(this.marquee=void 0,this.selectionBox.hidden=!0,this.releasePointer(),this.resizing){const e=this.tiles.get(this.resizing.id);e&&(Object.assign(e.node,this.resizing.from),this.applySize(e));for(const t of this.resizing.children)t.node.x=t.x,t.node.z=t.z;this.resizing=void 0}for(const e of this.dragOrigins)e.node.x=e.x,e.node.z=e.z;this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.showGuides([]),this.connectionStart=void 0,this.clearPreview(),this.updatePositions(),this.invalidate()};cancel=()=>this.cancelInteraction();lostCapture=e=>{e.pointerId===this.activePointer&&this.cancelInteraction()};releasePointer(){const e=this.activePointer;this.activePointer=void 0,e!==void 0&&this.renderer.domElement.hasPointerCapture(e)&&this.renderer.domElement.releasePointerCapture(e)}preventNativeDrag=e=>e.preventDefault();wheel=e=>{this.inMotion(),this.fitted=!1,e.preventDefault();const t=this.locate(e)?.clone();this.camera.zoom=this.view.clampZoom(this.camera.zoom*Math.exp(-e.deltaY*.001)),this.camera.updateProjectionMatrix();const i=this.locate(e);t&&i&&(this.target.x+=t.x-i.x,this.target.z+=t.z-i.z,this.setView(this.mode)),this.onZoom(this.view.percent),this.invalidate()};context=e=>{e.preventDefault();const t=this.edgeAt(e);if(t)this.selectEdge(t);else if(!this.selectedEdge||this.selectedIds.size){const i=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-i.left)/this.width*2-1,-(e.clientY-i.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const s=this.nodeAt();s&&!this.selectedIds.has(s)&&this.select(s)}this.onContextMenu(e.clientX,e.clientY)};doubleClick=e=>{if(this.tool!=="select")return;const t=this.edgeAt(e);if(t){this.onEditRequest({kind:"edge",id:t});return}const i=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-i.left)/this.width*2-1,-(e.clientY-i.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const s=this.nodeAt();if(s){this.select(s),this.onEditRequest({kind:"node",id:s});return}const r=this.ray.ray.intersectPlane(this.plane,this.point);r&&this.onEditRequest({kind:"empty",x:Math.round(r.x),z:Math.round(r.z)})};nodeScreenRect(e){const t=this.tiles.get(e);if(!t)return;const i=this.renderer.domElement.getBoundingClientRect(),{x:s,y:r,z:o}=t.group.position,a=r+Do(t.node)/2;let l=1/0,c=-1/0,d=1/0,u=-1/0;const h=new D;for(const f of[-1,1])for(const g of[-1,1]){h.set(s+f*t.node.width/2,a,o+g*t.node.depth/2).project(this.camera);const v=i.left+(h.x+1)*this.width/2,m=i.top+(1-h.y)*this.height/2;l=Math.min(l,v),c=Math.max(c,v),d=Math.min(d,m),u=Math.max(u,m)}return{left:l,top:d,width:c-l,height:u-d}}edgeScreenPosition(e){const t=this.edges.get(e),i=this.edgeIndex.get(e);if(t===void 0||!i)return;const{points:s}=dl(i,this.nodeIndex,this.obstacles,this.fans),{point:r}=sh(s),o=new D(r.x,8,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}nodePixelScale(e){const t=this.tiles.get(e);return t?1/this.pixelSize(t.group.position):1}contextLost=e=>{e.preventDefault(),this.onError("Graphics context lost. Waiting for recovery…")};contextRestored=()=>{this.onError("Graphics context restored"),this.invalidate()};get selection(){return[...this.selectedIds]}get edgeSelection(){return this.selectedEdge}select(e,t=!1){const i=t?new Set(this.selectedIds):new Set;e&&(t&&i.has(e)?i.delete(e):i.add(e)),this.selectMany([...i])}selectEdge(e){const t=e&&this.edges.has(e)?e:void 0;this.setNodeSelection([]),this.setEdgeSelection(t),this.onSelectEdge(t),this.invalidate()}setEdgeSelection(e){const t=this.selectedEdge;this.selectedEdge=e,t&&this.paintEdge(t),e&&this.paintEdge(e)}selectMany(e){this.setEdgeSelection(void 0),this.setNodeSelection(e);const t=this.selected?this.tiles.get(this.selected):void 0;this.onSelect(t?.node),this.invalidate()}setNodeSelection(e){const t=[...this.selectedIds];this.selectedIds.clear();for(const s of e)this.tiles.has(s)&&this.selectedIds.add(s);this.selected=[...this.selectedIds].at(-1);for(const s of new Set([...t,...this.selectedIds])){const r=this.tiles.get(s);r&&this.bodies?.update(r.node,r.group.position,this.selectedIds.has(s))}this.ports.clear();const i=this.selected?this.tiles.get(this.selected):void 0;if(!(!i||this.selectedIds.size!==1)){for(const s of["north","east","south","west"]){const r=new bt(this.portGeometry,this.portMaterial);r.userData.nodeId=i.node.id,r.userData.port=s,r.renderOrder=12,this.ports.add(Ms(r))}for(const s of[-1,0,1])for(const r of[-1,0,1]){if(!s&&!r)continue;const o=new bt(this.handleGeometry,this.handleMaterial);o.userData.nodeId=i.node.id,o.userData.resize=[s,r],o.renderOrder=13,this.ports.add(Ms(o))}}}paintEdge(e){const t=this.edges.get(e);if(t===void 0||!this.edgeColorBuffer)return;const i=e===this.selectedEdge?this.palette.edgeSelected:e===this.hoveredEdge?this.palette.edgeHover:this.palette.edge;this.scratchColor.set(i),(this.inactive.has(e)||this.edgeIndex.get(e)?.relationship==="dependency")&&e!==this.selectedEdge&&e!==this.hoveredEdge&&this.scratchColor.lerp(this.dimColor.set(this.palette.sky[1]),.68);const{r:s,g:r,b:o}=this.scratchColor;for(let a=t*42,l=a+42;a<l;a+=3)this.edgeColors[a]=s,this.edgeColors[a+1]=r,this.edgeColors[a+2]=o;this.edgeColorBuffer.addUpdateRange(t*42,42),this.edgeColorBuffer.needsUpdate=!0}refresh(){this.updatePositions(),this.invalidate()}inMotion(){this.motionUntil=performance.now()+200,clearTimeout(this.settleTimer),this.settleTimer=setTimeout(()=>{this.settleTimer=void 0,this.invalidate()},220)}invalidate(){this.dirty=!0,this.schedule()}schedule(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.render()}))}onJourneyPermit=()=>!0;playJourney(e,t){const i=new Map;if(t)for(let r=1;r<t.path.length;r++){const o=t.path[r-1],a=t.path[r];o&&a&&i.set(`reachability:${r}`,{id:`reachability:${r}`,source:o,target:a,label:""})}const s=r=>i.get(r)??this.edgeIndex.get(r);this.journey?.dispose(),this.journey=new Rw({add:r=>this.scene.add(Ms(r)),remove:r=>this.scene.remove(r),animate:r=>this.animate(r),route:r=>{const o=s(r),a=o&&this.tiles.get(o.source),l=o&&this.tiles.get(o.target);if(!o||!a||!l)return;const c=Math.max(a.group.position.y,l.group.position.y)+8;return dl(o,this.nodeIndex,this.obstacles,this.fans).points.map(d=>new D(d.x,c,d.z))},node:r=>{const o=this.tiles.get(r);if(!o)return;const a=o.group.position.clone();return a.y+=Do(o.node)/2+1,{point:a,radius:Math.max(o.node.width,o.node.depth)*.62}},branches:r=>t?{mode:"all",edges:[...i.values()].filter(o=>o.source===r).map(o=>o.id)}:this.onJourneyBranches(r),choose:(r,o)=>this.onJourneyChoose(r,o),cancelChoice:()=>this.onJourneyCancelChoice(),target:r=>s(r)?.target,onVisit:r=>{const o=this.nodeIndex.get(r);this.setJourneyCaption(o?`${o.label}${o.journeyCaption?`
${o.journeyCaption}`:""}`:"")},onHop:r=>this.onJourneyHop(r),permit:r=>{const o=t?t.allowed:this.onJourneyPermit(r);return o||this.setJourneyCaption(`Blocked · ${this.journeyCaption}`),o},onFinish:()=>this.onJourneyEnd()},this.palette),this.journey.start(e)}stopJourney(){this.setJourneyCaption(""),this.journey?.dispose();const e=this.journey?.playing;this.journey=void 0,e!==void 0&&this.onJourneyEnd()}get journeyPlaying(){return this.journey?.playing??!1}setFlow(e){this.flowing=e,this.flowLines&&(this.flowLines.visible=e),this.invalidate()}get flow(){return this.flowing}animate(e){return this.animators.add(e),this.invalidate(),()=>{this.animators.delete(e),this.invalidate()}}get animating(){return this.content.visible&&(this.flowing&&this.hasFlowEdges||this.animators.size>0)}render(e=!1){const t=performance.now();this.distancesDirty&&this.flowLines&&(this.flowLines.computeLineDistances(),this.distancesDirty=!1);const i=this.palette.flowStyle??vh;this.flowMaterial.dashOffset=-(t/1e3*i.speed)%(i.dash+i.gap);const s=this.dirty||e;this.dirty=!1,this.fog.density=gh*this.view.fogScale;const r=this.animators.size>0;for(const o of this.animators)o(t)||this.animators.delete(o);if(s&&this.syncHandles(),(s||r)&&this.scene.updateMatrixWorld(),s){const o=this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio());(o||this.staleAnnotations().length)&&this.sharpenLabelsSoon(o)}this.renderer.info.reset(),this.antialias.render(this.renderer,this.scene,this.camera,e||t>=this.motionUntil&&!this.animating),this.flushRetired(),this.metrics.textures=this.renderer.info.memory.textures,this.metrics.drawCalls=this.renderer.info.render.calls,this.metrics.frames++,this.metrics.lastRenderMs=performance.now()-t,this.animating&&this.schedule()}async checkContextRecovery(){const e=this.renderer.getContext().getExtension("WEBGL_lose_context");if(!e)return!1;const t=this.renderer.domElement;return new Promise((i,s)=>{const r=setTimeout(()=>{t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),s(Error("Graphics context recovery timed out"))},5e3),o=()=>{clearTimeout(r),t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),this.invalidate(),i(!0)},a=()=>{setTimeout(()=>e.restoreContext(),100)};t.addEventListener("webglcontextlost",a),t.addEventListener("webglcontextrestored",o),e.loseContext()})}gpuDetails(){const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=e.getParameter(t?.UNMASKED_RENDERER_WEBGL??e.RENDERER),s=e.getParameter(t?.UNMASKED_VENDOR_WEBGL??e.VENDOR);return{renderer:typeof i=="string"?i:"unknown",vendor:typeof s=="string"?s:"unknown"}}nodeScreenPosition(e){const t=this.tiles.get(e);if(!t)return;const i=t.group.position.clone();i.y+=t.node.kind==="group"?1:12,i.project(this.camera);const s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+(i.x+1)*this.width/2,y:s.top+(1-i.y)*this.height/2}}handleScreenPosition(e,t){const i=this.tiles.get(e);if(!i)return;this.syncHandles(),this.scene.updateMatrixWorld();const s=this.ports.children.find(l=>l.userData.nodeId!==e?!1:t==="resize"?Array.isArray(l.userData.resize)&&l.userData.resize[0]===1&&l.userData.resize[1]===1:l.userData.port===t),r=s?s.position:{...Bs(i.node,t==="resize"?"east":t,this.nodeIndex),y:i.group.position.y+13},o=new D(r.x,r.y,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}captureDiagram(){if(!this.tiles.size)return Promise.reject(Error("Nothing to capture yet."));const e=this.view.snapshot(),t=this.fitted,i=this.renderer.getPixelRatio(),s=this.hoveredEdge;this.hoveredEdge=void 0,s&&this.paintEdge(s),this.ports.visible=!1,this.view.setPanelVisible(!1),this.fit(),this.renderer.setPixelRatio(Math.min(3,Math.max(2,devicePixelRatio))),this.sharpenLabels(),this.render(!0);const r=this.contentBounds(28),o=this.renderer.getPixelRatio(),a=document.createElement("canvas");return a.width=Math.max(1,Math.round(r.width*o)),a.height=Math.max(1,Math.round(r.height*o)),a.getContext("2d")?.drawImage(this.renderer.domElement,r.left*o,r.top*o,a.width,a.height,0,0,a.width,a.height),this.renderer.setPixelRatio(i),this.renderer.setSize(this.width,this.height),e(),this.fitted=t,this.ports.visible=!0,s&&(this.hoveredEdge=s,this.paintEdge(s)),this.onZoom(this.view.percent),this.invalidate(),new Promise((l,c)=>a.toBlob(d=>d?l(d):c(Error("PNG encoding failed")),"image/png"))}contentBounds(e){let t=1/0,i=-1/0,s=1/0,r=-1/0;const o=new D,a=(l,c,d)=>{o.set(l,c,d).project(this.camera);const u=(o.x+1)*this.width/2,h=(1-o.y)*this.height/2;t=Math.min(t,u),i=Math.max(i,u),s=Math.min(s,h),r=Math.max(r,h)};for(const l of this.tiles.values()){const{x:c,y:d,z:u}=l.group.position,h=l.node.width/2,f=l.node.depth/2,g=l.node.kind==="service"&&!l.node.shape?70:0;for(const v of[-h,h])for(const m of[-f,f+g])for(const p of[-12,40])a(c+v,d+p,u+m)}for(let l=0;l<this.edgePositions.count;l++)a(this.edgePositions.getX(l),this.edgePositions.getY(l),this.edgePositions.getZ(l));return t=Math.max(0,Math.floor(t-e)),s=Math.max(0,Math.floor(s-e)),i=Math.min(this.width,Math.ceil(i+e)),r=Math.min(this.height,Math.ceil(r+e)),{left:t,top:s,width:i-t,height:r-s}}gifFrame(e=640,t=480){this.render(!0);const i=document.createElement("canvas"),s=this.renderer.domElement,r=Math.min(1,e/s.width,t/s.height);i.width=Math.max(1,Math.round(s.width*r)),i.height=Math.max(1,Math.round(s.height*r));const o=i.getContext("2d");if(o?.drawImage(s,0,0,i.width,i.height),o&&this.journeyCaption){const a=Math.max(12,Math.round(i.width/48));o.font=`${a}px sans-serif`;const l=[];for(const u of this.journeyCaption.split(`
`)){let h="";for(const f of u)o.measureText(h+f).width>i.width-48&&h&&(l.push(h),h=""),h+=f;l.push(h)}const c=l.slice(0,Math.max(1,Math.floor(i.height/(a*3))));c.length<l.length&&(c[c.length-1]+="…");const d=c.length*a*1.4+16;o.fillStyle="#111827",o.fillRect(8,i.height-d-8,i.width-16,d),o.fillStyle="#ffffff",o.textAlign="center",c.forEach((u,h)=>{o.fillText(u,i.width/2,i.height-d+a+h*a*1.4)})}return i}png(){return this.render(!0),new Promise((e,t)=>this.renderer.domElement.toBlob(i=>i?e(i):t(new Error("PNG encoding failed")),"image/png"))}dispose(){this.cancelInteraction(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.settleTimer),clearTimeout(this.labelTimer),this.observer.disconnect(),this.releaseContent(),this.flushRetired(),this.grid.dispose();for(const e of Object.values(this.shapeGeometries))e.dispose();this.clearPreview(),this.previewMaterial.dispose(),this.portGeometry.dispose(),this.portMaterial.dispose(),this.handleGeometry.dispose(),this.handleMaterial.dispose(),this.geometry.dispose(),this.pickMaterial.dispose(),this.tileOutline.dispose(),this.haloMaterial.dispose(),this.flowMaterial.dispose(),this.journey?.dispose(),this.showGuides([]),this.guideMaterial.dispose(),this.animators.clear(),this.edgeMaterial.dispose(),this.backdrop.dispose(),this.antialias.dispose(),this.renderer.dispose(),this.renderer.domElement.remove(),this.selectionBox.remove()}}function qw(){const n=new pc;n.moveTo(0,-.5),n.lineTo(.5,0),n.lineTo(0,.5),n.lineTo(-.5,0),n.closePath();const e=new pc;e.moveTo(-.3,-.5),e.lineTo(.3,-.5),e.quadraticCurveTo(.5,-.5,.5,-.3),e.lineTo(.5,.3),e.quadraticCurveTo(.5,.5,.3,.5),e.lineTo(-.3,.5),e.quadraticCurveTo(-.5,.5,-.5,.3),e.lineTo(-.5,-.3),e.quadraticCurveTo(-.5,-.5,-.3,-.5);const t=i=>{const s=new nd(i,{depth:1,bevelEnabled:!1,curveSegments:6});return s.rotateX(-Math.PI/2),s.translate(0,-.5,0),s};return{process:new ci(1,1,1),decision:t(n),terminal:t(e)}}const Yw={connect:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h7v14h3"/>',group:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><rect x="7" y="7" width="10" height="10"/>',undo:'<path d="M9 4 4 9l5 5M4 9h9a7 7 0 0 1 0 14"/>',redo:'<path d="m15 4 5 5-5 5M20 9h-9a7 7 0 0 0 0 14"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',pointer:'<path d="m5 3 15 9-7 2-3 7z"/>',hand:'<path d="M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 5-3 7-7 7-3 0-4-2-6-4l-4-5a2 2 0 0 1 3-2l2 2"/>',cube:'<path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9M8 5l9 5"/>',layers:'<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',fit:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8h8v8H8z"/>',save:'<path d="M4 3h13l4 4v14H3V3zM7 3v6h10V3M7 21v-8h10v8"/>',arrow:'<path d="M5 19 19 5M7 5h12v12"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3l-1 1M12 17h.01"/>',edit:'<path d="m15 4 5 5M4 20l5-1L21 7a3.5 3.5 0 0 0-5-5L4 14z"/>',palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',text:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',note:'<path d="M4 4h16v11l-5 5H4z"/><path d="M15 20v-5h5M8 9h8M8 13h5"/>',play:'<path d="M7 4v16l13-8z"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="1.5"/>',flow:'<path d="M3 8c3-3 6 3 9 0s6-3 9 0M3 16c3-3 6 3 9 0s6-3 9 0"/>',user:'<circle cx="12" cy="7.5" r="3.5"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>',align:'<path d="M4 3v18M8 7h12M8 14h8"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'};function at(n){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Yw[n]}</svg>`}const yh="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0101<>{}#$%=+*";function jw(n,e){if(n.replaceChildren(),n.dataset.ambient=e??"",!e)return;const t=Math.random,i=(r,o)=>{const a=document.createElement("span");a.className=r;for(const[l,c]of Object.entries(o))a.style.setProperty(l,c);return n.append(a),a},s=(r,o)=>r+t()*(o-r);if(e==="rain")for(let r=0;r<26;r++){const o=i("fx-rain",{left:`${s(0,100)}%`,"--fx-duration":`${s(5,13)}s`,"--fx-delay":`${-s(0,13)}s`,"--fx-opacity":`${s(.12,.32)}`,"font-size":`${Math.round(s(11,17))}px`});o.textContent=Array.from({length:Math.round(s(12,30))},()=>yh[Math.floor(t()*yh.length)]).join(`
`)}else if(e==="embers")for(let r=0;r<34;r++)i("fx-ember",{left:`${s(0,100)}%`,"--fx-size":`${s(2,6)}px`,"--fx-drift":`${s(-80,80)}px`,"--fx-duration":`${s(7,16)}s`,"--fx-delay":`${-s(0,16)}s`});else if(e==="petals")for(let r=0;r<16;r++)i("fx-petal",{left:`${s(-5,100)}%`,"--fx-drift":`${s(60,220)}px`,"--fx-duration":`${s(14,26)}s`,"--fx-delay":`${-s(0,26)}s`,"--fx-size":`${s(9,16)}px`}).append(document.createElement("i"));else if(e==="neon"){i("fx-scanbar",{});for(let r=0;r<7;r++)i("fx-streak",{top:`${s(8,92)}%`,"--fx-duration":`${s(3,9)}s`,"--fx-delay":`${-s(0,9)}s`,"--fx-length":`${s(80,260)}px`})}else if(e==="grain")i("fx-grain",{});else if(e==="stars"){for(let r=0;r<40;r++)i("fx-star",{left:`${s(0,100)}%`,top:`${s(0,100)}%`,"--fx-size":`${s(1,2.6)}px`,"--fx-duration":`${s(2.5,7)}s`,"--fx-delay":`${-s(0,7)}s`});for(let r=0;r<3;r++)i("fx-comet",{top:`${s(4,60)}%`,left:`${s(30,100)}%`,"--fx-duration":`${s(9,18)}s`,"--fx-delay":`${-s(0,18)}s`})}}const Zf=document.querySelector("#app");if(!Zf)throw new Error("Application root is missing");Zf.innerHTML=`
  <main class="workspace" aria-label="Diagram workspace"><div id="canvas"></div><nav id="diagram-path" class="diagram-path" aria-label="Diagram navigation"></nav><div id="journey-caption" class="journey-caption" hidden role="status"></div></main><div id="theme-fx" aria-hidden="true"></div>
  <header class="topbar">
    <div class="board-heading"><button id="menu" class="icon-button" aria-label="File menu" aria-expanded="false" title="File menu">${at("menu")}</button><span id="forge-mark" class="forge-mark" aria-hidden="true">✦</span><span class="brand">Solar Forge</span><span class="heading-divider"></span><button id="title" class="document-title" title="Rename diagram"></button><span id="save-state" class="save-state">Unchanged</span></div>
    <div class="top-actions"><button id="features" class="quiet-button" title="Take a quick tour of the features">${at("play")}<span>Features</span></button><button id="examples" class="quiet-button" title="Browse examples">${at("layers")}<span>Examples</span></button><button id="components" class="quiet-button" title="Components (/)" aria-expanded="false">${at("cube")}<span>Components</span></button><button id="copy-image" class="quiet-button" title="Copy diagram image to clipboard (Ctrl+Shift+C)">${at("camera")}<span>Copy image</span></button><button id="theme" class="icon-button" aria-label="Theme" aria-expanded="false" title="Theme">${at("palette")}</button><button id="toggle-layers" class="icon-button" aria-label="Toggle Layers panel" aria-pressed="true" title="Layers">${at("layers")}</button><button id="quick-save" class="quiet-button" title="Save diagram (Ctrl+S)">${at("save")}<span>Save</span></button><button id="quick-export" class="export-button">Export ${at("arrow")}</button></div>
  </header>
  <section id="file-menu" class="popover file-menu" aria-label="File menu" hidden><p class="popover-caption">LOCAL WORKSPACE</p><button id="new">New diagram <kbd>Ctrl N</kbd></button><button id="browse-examples">Browse examples…</button><button id="open">Open diagram <kbd>Ctrl O</kbd></button><button id="save">Save diagram <kbd>Ctrl S</kbd></button><button id="save-as">Save as… <kbd>Ctrl Shift S</kbd></button><button id="import-infrastructure">Import infrastructure…</button><button id="reachability">Reachability matrix…</button><button id="auto-layout">Automatic layout</button><button id="export">Export PNG ${at("arrow")}</button><button id="export-gif">Export journey GIF</button><button id="export-video">Export journey video…</button><button id="export-mermaid">Export Mermaid source</button><button id="export-plantuml">Export PlantUML source</button><button id="export-drawio">Export draw.io project</button><button id="export-svg">Export SVG ${at("arrow")}</button><div class="menu-divider"></div><p class="popover-caption">RECENT DIAGRAMS</p><div id="recent-files"></div></section>
  <section id="theme-menu" class="popover theme-menu" aria-label="Themes" hidden><div id="theme-list"></div><label class="fx-toggle"><input id="theme-fx-toggle" type="checkbox"> Ambient effects</label><label class="fx-toggle font-picker">Board font<select id="board-font"></select></label></section>
  <nav class="tool-rail" aria-label="Canvas tools"><button id="tool-select" class="tool active" aria-label="Select" aria-pressed="true" title="Select (V)">${at("pointer")}<kbd>V</kbd></button><button id="tool-pan" class="tool" aria-label="Pan" aria-pressed="false" title="Pan (M)">${at("hand")}<kbd>M</kbd></button><span class="rail-divider"></span><button id="tool-add" class="tool" aria-label="Add component" title="Add component (/)">${at("cube")}<kbd>/</kbd></button><button id="tool-connect" class="tool" aria-label="Connect components" aria-pressed="false" title="Connect (C)">${at("connect")}<kbd>C</kbd></button><button id="tool-text" class="tool" aria-label="Text" aria-pressed="false" title="Text: click the board (T)">${at("text")}<kbd>T</kbd></button><button id="tool-note" class="tool" aria-label="Sticky note" aria-pressed="false" title="Sticky note: click the board (N)">${at("note")}<kbd>N</kbd></button><button id="tool-group" class="tool" aria-label="Group selection" title="Group (Ctrl+G)">${at("group")}</button><button id="tool-edit" class="tool" aria-label="Rename selected component" title="Rename selected component" disabled>${at("edit")}</button><span class="rail-divider"></span><button id="tool-fit" class="tool" aria-label="Fit diagram" title="Fit diagram (F)">${at("fit")}</button></nav>
  <section id="component-palette" class="popover component-palette" aria-label="Components" hidden><div class="popover-heading"><h2>Components</h2><button id="close-components" class="small-icon" aria-label="Close components">${at("close")}</button></div><label class="sr-only" for="search">Find a component</label><input id="search" type="search" placeholder="Search services…"><div id="services"></div><p class="palette-hint">Choose a component to add it to your board.</p></section>
  <aside id="layers-panel" class="layers-panel" aria-label="Layers and properties"><div class="panel-heading"><h2>Layers</h2><button id="layer-add" class="small-icon" aria-label="Add service">${at("plus")}</button><button id="close-layers" class="small-icon" aria-label="Close Layers panel">${at("close")}</button></div><div class="ground-card"><button id="ground-toggle" class="ground-eye" aria-label="Hide diagram" aria-pressed="true">${at("eye")}</button><div><strong><span class="ground-dot"></span>Diagram</strong><p id="ground-summary"></p></div><span class="layer-index">01</span></div><div id="layer-tree" class="layer-tree" aria-label="Diagram objects"></div><section id="properties" class="properties" aria-label="Selected component properties" hidden><p class="section-label">SELECTED COMPONENT</p><h3 id="selection"></h3><p id="selection-note" class="muted"></p><label for="node-label" id="node-label-caption">Label</label><input id="node-label" maxlength="1000"><textarea id="node-text" rows="4" hidden></textarea><div class="property-grid"><label id="node-font-row">Text size<input id="node-font" type="number" min="4" max="400"></label><label>Colour<input id="node-color" type="color"></label></div><label id="node-wrap-row" class="check-row"><input id="node-wrap" type="checkbox"> Wrap caption to tile width</label><div class="property-grid"><label>X<input id="node-x" type="number" min="-1000000" max="1000000"></label><label>Z<input id="node-z" type="number" min="-1000000" max="1000000"></label><label>Width<input id="node-width" type="number" min="30" max="1000000"></label><label>Depth<input id="node-depth" type="number" min="30" max="1000000"></label></div><label id="node-branch-row">Journey at this fork<select id="node-branch"></select></label><label for="node-parent">Inside boundary</label><select id="node-parent"></select><div class="property-actions"><button id="duplicate">Duplicate</button><button id="ungroup">Ungroup</button></div><label>Walkthrough caption<textarea id="node-caption" maxlength="1000" rows="3" placeholder="Explain what happens at this hop"></textarea></label><details id="detail-controls"><summary>Detail diagram</summary><label>Linked diagram<select id="node-detail"></select></label><button id="detail-open">Open detail ↗</button><button id="detail-create">Create detail diagram</button><p class="muted">Double-click a linked resource to open it. Use Label to rename it.</p></details><div id="resource-network"></div><details id="meta-details"><summary>Architecture details</summary><p id="meta-scope" class="muted" hidden></p><label>Region<input id="meta-region" maxlength="1000"></label><label>Environment<input id="meta-environment" maxlength="1000"></label><label>Resource name<input id="meta-resourceName" maxlength="1000"></label><label>Tags<input id="meta-tags" maxlength="1000" placeholder="team=platform, env=dev"></label><label>Notes<textarea id="meta-notes" maxlength="1000" rows="3"></textarea></label><button id="meta-apply-inside" hidden>Apply to everything inside</button></details></section><section id="edge-properties" class="properties" aria-label="Connection properties" hidden><p class="section-label">SELECTED CONNECTION</p><label>Label<input id="edge-label" maxlength="1000"></label><label>From<select id="edge-source"></select></label><label>Source port<select id="edge-sourcePort"><option value="">Auto</option><option>north</option><option>east</option><option>south</option><option>west</option></select></label><label>To<select id="edge-target"></select></label><label>Target port<select id="edge-targetPort"><option value="">Auto</option><option>north</option><option>east</option><option>south</option><option>west</option></select></label><label>Route<select id="edge-routing"><option value="horizontal">Horizontal first</option><option value="vertical">Vertical first</option></select></label><label>Bend offset<input id="edge-bend" type="number" min="-1000000" max="1000000" step="10"></label><div class="property-actions"><button id="edge-active">Make active route</button><button id="edge-all-routes">Show all routes</button></div><details><summary>Journey traffic rule</summary><label>Action<select id="rule-action"><option value="none">Unrestricted</option><option value="allow">Allow matching traffic</option><option value="deny">Deny all traffic</option></select></label><label>Protocol<select id="rule-protocol"><option value="any">Any</option><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Port (blank = any)<input id="rule-port" type="number" min="1" max="65535"></label><label>Source CIDR (blank = any)<input id="rule-source" placeholder="0.0.0.0/0"></label><label>Direction<select id="rule-direction"><option value="any">Any</option><option value="ingress">Ingress</option><option value="egress">Egress</option></select></label><button id="rule-apply">Apply rule</button><p id="rule-result" class="muted" role="status"></p></details><button id="delete-edge" class="delete-button">Delete connection</button></section><div class="panel-foot"><span class="offline-dot"></span> Offline workspace <span class="forge-wordmark">SOLAR FORGE</span></div></aside>
  <nav class="canvas-controls" aria-label="Canvas controls"><div class="zoom-dock floating-dock" aria-label="Zoom controls"><button id="zoom-out" class="small-icon" aria-label="Zoom out">${at("minus")}</button><span id="zoom-level">100%</span><button id="zoom-in" class="small-icon" aria-label="Zoom in">${at("plus")}</button><span class="dock-divider"></span><button id="fit">Fit</button><span class="dock-divider"></span><button id="help" class="small-icon" aria-label="Keyboard help" aria-expanded="false">${at("help")}</button></div>
  <div class="history-dock floating-dock" aria-label="Edit history"><button id="undo" class="small-icon" aria-label="Undo" title="Undo (Ctrl+Z)" disabled>${at("undo")}</button><button id="redo" class="small-icon" aria-label="Redo" title="Redo (Ctrl+Shift+Z)" disabled>${at("redo")}</button></div>
  <div class="view-dock floating-dock" aria-label="View controls"><button id="journey" class="journey-button" aria-pressed="false" title="Walk a person through the data flow (P)">${at("user")}<span>Journey</span></button><button id="traffic-settings" title="Configure journey traffic">Traffic</button><button id="flow" aria-pressed="true" title="Animate data flow along connections">${at("flow")}<span>Flow</span></button><button id="snap" aria-pressed="true" title="Snap positions to a 10-unit grid">Snap</button><span class="dock-divider"></span><button id="iso" aria-pressed="true">2.5D</button><button id="top" aria-pressed="false">Plan</button><span class="dock-divider"></span><button id="delete" class="delete-button" disabled>${at("trash")}<span>Delete</span></button></div></nav>
  <section id="gif-panel" class="popover help-panel" aria-label="GIF recording settings" hidden><h2 id="recording-title">Journey GIF</h2><label id="video-format-row" hidden>Video format<select id="video-format"><option value="webm">WebM</option><option value="mp4">MP4</option></select></label><p id="video-help" hidden>Up to 30 fps, 1280 × 720, full colour. Format availability depends on your browser. Decision forks use their first branch.</p><label>Duration (seconds)<input id="gif-duration" type="number" min="2" max="120" step="1" value="12"></label><label id="gif-dither-row" class="checkbox-label"><input id="gif-dither" type="checkbox" checked> Dither gradients</label><p id="gif-help">Up to 8 frames per second, 640 × 480. An adaptive palette preserves theme colours. Decision forks use their first branch.</p><button id="gif-record">Record GIF</button><p>Press Esc to cancel recording.</p></section>
  <section id="traffic-panel" class="popover help-panel" aria-label="Journey traffic" hidden><h2>Journey traffic</h2><label>Saved scenario<select id="traffic-scenario"></select></label><div class="property-actions"><button id="scenario-use">Use scenario</button><button id="scenario-delete">Delete</button></div><label>Scenario name<input id="scenario-name" maxlength="100"></label><label>Start (optional)<select id="scenario-source"></select></label><label>Destination (optional)<select id="scenario-target"></select></label><button id="scenario-save">Save / update scenario</button><p>Rules on connections allow matching traffic. Blocked attempts flash red and stop at the source. This illustrates configured paths, not a full AWS policy simulation.</p><label>Protocol<select id="traffic-protocol"><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Destination port<input id="traffic-port" type="number" min="1" max="65535" value="443"></label><label>Source IPv4<input id="traffic-source" value="203.0.113.10"></label><label>Direction<select id="traffic-direction"><option value="ingress">Ingress</option><option value="egress">Egress</option></select></label><button id="traffic-apply">Apply traffic</button><p>For private egress in the demo, select a private worker, use source 10.0.10.10 and Egress, then play Journey.</p></section>
  <section id="help-panel" class="popover help-panel" aria-label="Keyboard shortcuts" hidden><h2>Make room for your ideas.</h2><p><kbd>V</kbd> Select <kbd>M</kbd> Pan <kbd>F</kbd> Fit view</p><p><kbd>/</kbd> Add · Enter drops it <kbd>C</kbd> Connect</p><p><kbd>T</kbd> Text <kbd>N</kbd> Note <kbd>P</kbd> Journey</p><p>Double-click to rename · <kbd>Ctrl K</kbd> Commands</p><p><kbd>Esc</kbd> Deselect · stop</p><p><kbd>Ctrl Z</kbd> Undo <kbd>Ctrl Shift Z</kbd> Redo</p><label class="quality-label">Rendering quality<select id="quality"><option value="1">Efficient · 1×</option><option value="1.5">Balanced · 1.5×</option><option value="2" selected>Sharp · match display</option></select></label><p>Drag empty canvas to select. Shift-drag adds.<br>Hold Ctrl while dragging to skip guides.<br>Scroll to zoom. Right-drag to pan.</p></section>
  <section id="context-menu" class="popover context-menu" aria-label="Selection actions" hidden><button data-action="duplicate">Duplicate</button><button data-action="tool-group">Group</button><button data-action="ungroup">Ungroup</button><div class="align-row" data-multi><button data-align="left" title="Align left edges">⇤</button><button data-align="center" title="Align centres horizontally">↔</button><button data-align="right" title="Align right edges">⇥</button><button data-align="top" title="Align top edges">⤒</button><button data-align="middle" title="Align middles">↕</button><button data-align="bottom" title="Align bottom edges">⤓</button></div><div class="align-row" data-multi><button data-align="distribute-x" title="Distribute horizontally">⋯ Space evenly ↔</button><button data-align="distribute-z" title="Distribute vertically">⋮ ↕</button></div><button data-action="edge-active">Make active route</button><button data-action="edge-all-routes">Show all routes</button><button data-action="delete">Delete</button><button data-action="fit">Fit view</button></section>
  <div id="status" class="status" role="status">Ready</div><span id="count" class="board-count"></span>`;function k(n){const e=document.getElementById(n);if(!e)throw new Error(`Missing element: ${n}`);return e}function _t(n){const e=k(n);if(!(e instanceof HTMLInputElement))throw new Error(`Expected input: ${n}`);return e}let Z=Tm(),Xt=Z,Et=new zh(Z),Xi=[],vt,Gn,wt=new Set;const Jf=["region","environment","resourceName","tags","notes"];let Ft,Mr=!1,Er=!1,Gs,Cc=!1;const As=new Bp(()=>Et.isDirty?oa(Xt):null,xl,n=>Ae(`Recovery failed: ${String(n)}. Save your diagram.`));let od=!0,dr=!0;const Ae=n=>{k("status").textContent=n};let sn=jf((()=>{try{return localStorage.getItem("solar-forge-theme")}catch{return null}})()),Ps=(()=>{try{const n=localStorage.getItem("solar-forge-theme-fx");if(n)return n==="on"}catch{}return!matchMedia("(prefers-reduced-motion: reduce)").matches})(),Ri=jh((()=>{try{return localStorage.getItem("solar-forge-font")}catch{return null}})());function Kf(){return Ri.family?{...sn.scene,labelFont:Ri.family}:sn.scene}function ad(){ww(sn),document.documentElement.dataset.fx=Ps?"on":"off",sn.markSvg?k("forge-mark").innerHTML=sn.markSvg:k("forge-mark").textContent=sn.mark,jw(k("theme-fx"),Ps?sn.ambient:void 0)}ad();let ne;try{ne=new $w(k("canvas"),Z,sn.scene)}catch(n){throw Ae(`Graphics unavailable: ${n instanceof Error?n.message:String(n)}`),n}function Ai(n){k("component-palette").hidden=!n,k("components").setAttribute("aria-expanded",String(n)),n&&(k("file-menu").hidden=!0,_t("search").value="",fa(),_t("search").focus())}function Qf(n){sn=jf(n),ad(),ne.setPalette(Kf());for(const e of k("theme-list").querySelectorAll("button"))e.setAttribute("aria-pressed",String(e.dataset.theme===sn.id));try{localStorage.setItem("solar-forge-theme",sn.id)}catch{}Ae(`${sn.name} · ${sn.tagline}`)}for(const[n,e]of ta.entries()){if(e.group!==ta[n-1]?.group){const a=document.createElement("p");a.className="popover-caption",a.textContent=e.group.toUpperCase(),k("theme-list").append(a)}const t=document.createElement("button");t.dataset.theme=e.id,t.setAttribute("aria-pressed",String(e.id===sn.id));const i=document.createElement("span");i.className="theme-swatch",i.style.background=`linear-gradient(135deg, ${e.css.bg} 0 45%, ${e.css.accent} 45% 72%, ${e.css.hot} 72%)`,i.style.color=e.css.text??"",e.markSvg?i.innerHTML=e.markSvg:i.textContent=e.mark;const s=document.createElement("span");s.className="theme-text";const r=document.createElement("strong");r.textContent=e.name;const o=document.createElement("small");o.textContent=e.tagline,s.append(r,o),t.append(i,s),t.onclick=()=>{Qf(e.id),k("theme-menu").hidden=!0,k("theme").setAttribute("aria-expanded","false")},k("theme-list").append(t)}async function ep(n,e=!0){const t=jh(n);Ri=t,me("board-font").value=t.id;try{await zm(t)}catch{Ae(`${t.name} font unavailable; using a fallback.`)}if(Ri===t){ne.setPalette(Kf());try{localStorage.setItem("solar-forge-font",t.id)}catch{}e&&Ae(`Board font · ${t.name}`)}}xr("board-font",bl.map(n=>[n.id,n.name]),Ri.id);me("board-font").onchange=()=>{ep(me("board-font").value)};Ri.family&&ep(Ri.id,!1);k("features").onclick=()=>{Ti(async()=>{const{startTour:n}=await import("./tour-BjFWENYq.js");return{startTour:n}},__vite__mapDeps([0,1])).then(({startTour:n})=>n()).catch(n=>Ae(`Tour unavailable: ${String(n)}`))};_t("theme-fx-toggle").checked=Ps;_t("theme-fx-toggle").onchange=()=>{Ps=_t("theme-fx-toggle").checked,ad();try{localStorage.setItem("solar-forge-theme-fx",Ps?"on":"off")}catch{}Ae(`Ambient effects ${Ps?"on":"off"}`)};k("theme").onclick=()=>{const n=k("theme-menu");n.hidden=!n.hidden,k("theme").setAttribute("aria-expanded",String(!n.hidden))};function ld(n){od=n,k("layers-panel").hidden=!n,k("toggle-layers").setAttribute("aria-pressed",String(n)),ne.setPanelVisible(n)}let bh="";const Lo=new Map;function tp(){const n=k("layer-tree"),e=JSON.stringify([Z.nodes.map(t=>[t.id,t.label,t.color,t.parentId,t.serviceId,t.kind,t.detailId]),Z.edges.map(t=>[t.id,t.label,t.source,t.target])]);if(e!==bh){bh=e,n.replaceChildren(),Lo.clear();const t=new Map(Z.nodes.map(o=>[o.id,o.label])),i=new Map;for(const o of Z.nodes){const a=i.get(o.parentId)??[];a.push(o),i.set(o.parentId,a)}const s=[],r=(o,a)=>{for(const l of i.get(o)??[])s.push({node:l,depth:a}),r(l.id,a+1)};r(void 0,0);for(const{node:o,depth:a}of s){const l=document.createElement("button");l.className=`layer-row ${o.kind}${wt.has(o.id)?" selected":""}`,l.setAttribute("aria-pressed",String(wt.has(o.id)));const c=document.createElement("span");c.className="layer-symbol",c.style.color=o.color;const d=Ds(o.serviceId??o.label);if(d?.icon&&(o.kind==="service"||o.kind==="group")){const h=document.createElement("img");h.src=d.icon,h.alt="",c.append(h)}else c.textContent=o.kind==="group"?"▱":d?.glyph??"◇";(o.kind==="text"||o.kind==="note")&&(c.textContent=o.kind==="text"?"T":"▤",c.style.color=o.kind==="note"?o.color:"");const u=document.createElement("span");if(u.textContent=o.label.split(`
`)[0]||(o.kind==="note"?"Sticky note":o.kind==="text"?"Text":""),l.append(c,u),l.style.paddingLeft=`${8+a*12}px`,Lo.set(`node:${o.id}`,l),l.onclick=h=>ne.select(o.id,h.shiftKey),n.append(l),o.detailId){const h=Xt.details?.find(f=>f.id===o.detailId);if(h){const f=document.createElement("button");f.className="detail-layer-link",f.textContent="↳ Open detail ↗",f.setAttribute("aria-label",`Open detail for ${o.label}`),f.onclick=()=>Xs(h.document),n.append(f)}}}if(Z.edges.length){const o=document.createElement("p");o.className="section-label connections-heading",o.textContent="CONNECTIONS",n.append(o)}for(const o of Z.edges){const a=document.createElement("button");a.className=`layer-row connection-row${Ft===o.id?" selected":""}`,a.textContent=`↳ ${o.label||"Connection"} · ${t.get(o.source)??""} → ${t.get(o.target)??""}`,a.onclick=()=>ne.selectEdge(o.id),n.append(a),Lo.set(`edge:${o.id}`,a)}}for(const[t,i]of Lo){const s=t.startsWith("node:")?wt.has(t.slice(5)):Ft===t.slice(5);i.classList.toggle("selected",s),i.setAttribute("aria-pressed",String(s))}}async function Or(){if(Dc())try{const n=await ie("recent_documents"),e=k("recent-files");if(e.replaceChildren(),!n.length){const t=document.createElement("p");t.className="muted",t.textContent="No recent diagrams yet",e.append(t)}for(const t of n){const i=document.createElement("button");i.textContent=t.name,i.title=t.path,i.onclick=()=>{Pn(async()=>{if(!await Hs())return;const s=await ie("open_recent",{path:t.path});Vs(Ls(s.content)),Gs=s.handle,k("file-menu").hidden=!0,Ae(`Opened ${s.name}`),await Or()})},e.append(i)}}catch(n){Ae(`Recent files unavailable: ${String(n)}`)}}k("title").onclick=()=>{Pn(async()=>{const n=await Kp("Diagram name",Z.title);n&&et({type:"graph",label:"Rename diagram",title:n})})};for(const n of["examples","browse-examples"])k(n).onclick=()=>{Pn(async()=>{k("file-menu").hidden=!0,k("menu").setAttribute("aria-expanded","false");const{chooseExample:e}=await Ti(async()=>{const{chooseExample:i}=await import("./examples-DUvJfjfe.js");return{chooseExample:i}},[]),t=await e();!t||!await Hs()||(Vs(t.create()),Ae(`Loaded ${t.name}`))})};let ia=!1,np="gif",vr;function ip(n){np=n,k("file-menu").hidden=!0,k("gif-panel").hidden=!1,k("recording-title").textContent=n==="gif"?"Journey GIF":"Journey video",k("gif-record").textContent=n==="gif"?"Record GIF":"Record video",k("video-format-row").hidden=n==="gif",k("video-help").hidden=n==="gif",k("gif-dither-row").hidden=n!=="gif",k("gif-help").hidden=n!=="gif",_t("gif-duration").focus(),n==="video"&&Ti(async()=>{const{videoMime:e}=await import("./video-DmUvEiuR.js");return{videoMime:e}},[]).then(({videoMime:e})=>{for(const i of k("video-format").options){const s=!!e(i.value);i.disabled=!s,i.textContent=i.value.toUpperCase()+(s?"":" (unavailable)")}const t=k("video-format");t.selectedOptions[0]?.disabled&&(t.value=[...t.options].find(i=>!i.disabled)?.value??"")})}k("export-gif").onclick=()=>ip("gif");k("export-video").onclick=()=>ip("video");try{const n=localStorage.getItem("solar-forge-gif"),e=n?Nh(JSON.parse(n)):zp;_t("gif-duration").value=String(e.duration),_t("gif-dither").checked=e.dither}catch{}k("gif-record").onclick=()=>{Pn(async()=>{const n=Nh({duration:Number(_t("gif-duration").value),dither:_t("gif-dither").checked});try{localStorage.setItem("solar-forge-gif",JSON.stringify(n))}catch{}const e=Gn,t=e?e.path.slice(0,1):Bh(Z,vt);if(!t.length){Ae("Connect components before exporting a journey.");return}const{recordJourney:i}=await Ti(async()=>{const{recordJourney:l}=await import("./gif-DJhrjlL2.js");return{recordJourney:l}},[]),s=np,r=me("video-format").value,o=s==="video"?await Ti(()=>import("./video-DmUvEiuR.js"),[]):void 0;if(o&&!o.videoMime(r))throw Error("Choose an available video format");k("gif-panel").hidden=!0,ia=!0,vr=new AbortController,k("file-menu").hidden=!0,ne.stopJourney();const a=[k("app")];for(const l of a)l.inert=!0;try{ne.playJourney(t,e);const l=u=>Ae(`Recording journey ${s==="gif"?"GIF":r.toUpperCase()} · ${u}% · ${n.duration} seconds · Esc cancels; decision forks use the first branch`),c=o?await o.recordVideo(()=>ne.gifFrame(1280,720),l,vr.signal,{duration:n.duration,format:r}):await i(()=>ne.gifFrame(),l,vr.signal,n);ne.stopJourney(),(o?await jp(c,r):await qp(c))&&Ae(`Journey ${o?r.toUpperCase():"GIF"} exported · ${n.duration} seconds`)}finally{ia=!1,vr=void 0,ne.stopJourney();for(const l of a)l.inert=!1}})};k("export-svg").onclick=()=>{Pn(async()=>{const{exportSvg:n}=await Ti(async()=>{const{exportSvg:e}=await import("./svg-CPSdLc1b.js");return{exportSvg:e}},[]);await Wp(await n(Z,Ri.family))&&Ae("SVG exported")})};for(const[n,e]of[["export-mermaid","mmd"],["export-plantuml","puml"],["export-drawio","drawio"]])k(n).onclick=()=>{Pn(async()=>{const{exportInterchange:t}=await Ti(async()=>{const{exportInterchange:s}=await import("./interchange-C6ulElXc.js");return{exportInterchange:s}},[]),i=t(e==="drawio"?Xt:Z,e);await Zp(i,e)&&Ae(`Exported ${e==="drawio"?"draw.io project":"diagram source"}`),k("file-menu").hidden=!0})};function $n(){Mr=Et.isDirty,Cc&&As.schedule(),k("save-state").textContent=Mr?"Unsaved changes":"Unchanged";for(const[t,i]of[["undo",Et.canUndo],["redo",Et.canRedo]]){const s=k(t);s instanceof HTMLButtonElement&&(s.disabled=!i)}k("title").textContent=`${Z.title}${Mr?" •":""}`,k("count").textContent=`${Z.nodes.length} objects · ${Z.edges.length} connections`;const n=t=>Z.nodes.filter(i=>i.kind===t).length,e=n("text")+n("note");k("ground-summary").textContent=`${n("service")} services · ${n("group")} boundaries${e?` · ${e} notes`:""}`,tp(),nS()}function qn(){const n=Z.nodes.find(o=>o.id===vt);k("properties").hidden=!n,k("selection").textContent=n?.kind==="text"||n?.kind==="note"?n.label.split(`
`)[0]||(n.kind==="note"?"Sticky note":"Text"):n?.label??"",_t("node-label").value=n?.label??"",k("node-caption").value=n?.journeyCaption??"",k("detail-controls").hidden=!n||!["group","service"].includes(n.kind);const e=k("node-detail");e.replaceChildren(new Option("No detail diagram",""),...(Xt.details??[]).map(o=>new Option(o.document.title,o.id))),e.value=n?.detailId??"",k("detail-open").disabled=!n?.detailId;const t=n?.kind==="text"||n?.kind==="note";_t("node-label").hidden=t,me("node-text").hidden=!t,k("node-label-caption").textContent=t?"Text":"Label",k("node-label-caption").setAttribute("for",t?"node-text":"node-label");const i=n?.kind==="service";k("node-font-row").hidden=!t&&!i,k("node-wrap-row").hidden=!i;const s=n?Z.edges.filter(o=>o.source===n.id):[];if(k("node-branch-row").hidden=s.length<2,n&&s.length>=2){const o=n.journey;xr("node-branch",[["all","Takes every branch"],["ask","Asks me which way"],...s.map(a=>[`fixed:${a.id}`,`Active route ${dd(a.id)}`])],o?.mode==="fixed"?`fixed:${o.edge}`:o?.mode??Uc(Z,n.id).mode)}n&&(me("node-text").value=n.label,_t("node-font").value=n.kind==="service"?String(n.fontSize??""):String(aa(n)),_t("node-font").placeholder=n.kind==="service"?"Auto":"",_t("node-wrap").checked=!!n.wrap,_t("node-color").value=n.color);const r=Z.edges.find(o=>o.id===Ft);if(k("edge-properties").hidden=!r,n){for(const c of["x","z","width","depth"])_t(`node-${c}`).value=String(n[c]);const o=new Set([n.id]);for(let c=!0;c;){c=!1;for(const d of Z.nodes)d.parentId&&o.has(d.parentId)&&!o.has(d.id)&&(o.add(d.id),c=!0)}xr("node-parent",[["","Board"],...Z.nodes.filter(c=>c.kind==="group"&&!o.has(c.id)).map(c=>[c.id,c.label])],n.parentId??"");const a=hp();for(const c of Jf){const d=me(`meta-${c}`);d.dataset.placeholder??=d.placeholder;const u=a.map(f=>f.metadata?.[c]??""),h=u.every(f=>f===u[0]);d.value=h?u[0]??"":"",d.placeholder=h?d.dataset.placeholder??"":"Mixed · type to set for all"}const l=k("meta-scope");l.hidden=a.length<2,l.textContent=`Editing ${a.length} selected objects. Changes apply to all of them.`,k("meta-apply-inside").hidden=a.length>1||fp(n.id).length===0,a.length>1&&(k("selection").textContent=`${a.length} selected`,k("meta-details").open=!0)}if(r){const o=mp();k("edge-active").hidden=!o.active,k("edge-all-routes").hidden=!o.all;const a=Ph(r.networkRule,Z.traffic??Tr);k("rule-result").textContent=`${a.allowed?"Allowed":"Blocked"} for current traffic · ${a.reason}`,me("rule-action").value=r.networkRule?.action??"none",me("rule-protocol").value=r.networkRule?.protocol??"any",me("rule-port").value=String(r.networkRule?.port??""),me("rule-source").value=r.networkRule?.sourceCidr??"",me("rule-direction").value=r.networkRule?.direction??"any",up(),_t("edge-label").value=r.label;const l=Z.nodes.map(c=>[c.id,c.label]);xr("edge-source",l,r.source),xr("edge-target",l,r.target),me("edge-sourcePort").value=r.sourcePort??"",me("edge-targetPort").value=r.targetPort??"",me("edge-routing").value=r.routing??"horizontal",_t("edge-bend").value=String(r.bend??0)}k("selection-note").textContent=n?.kind==="group"?"Architecture boundary":n?.kind==="text"?"Text · double-click to edit":n?.kind==="note"?"Sticky note · double-click to edit":n?.shape?"Flowchart shape":"Component · double-click to rename";for(const o of["delete","tool-edit"]){const a=k(o);a instanceof HTMLButtonElement&&(a.disabled=!n&&!r)}Rm(k("resource-network"),n,Z,o=>et({type:"graph",label:"Resource networking",nodes:[{id:o.id,value:o}]}),Ae),tp()}let sa=!1;function Zs(n){sa=!0;try{n()}finally{sa=!1}}ne.onSelect=n=>{Gn=void 0,vt=n?.id,wt=new Set(ne.selection),Ft=void 0,sa||qn()};ne.onSelectEdge=n=>{Gn=void 0,vt=void 0,wt=new Set,Ft=n,sa||qn()};ne.onMove=(n,e,t)=>{Et.execute({type:"move",id:n,from:e,to:t}),$n(),qn(),Ae("Position updated")};ne.onError=Ae;ne.onZoom=n=>{const e=`${n}%`;k("zoom-level").textContent!==e&&(k("zoom-level").textContent=e)};function Vs(n){Gs=void 0,Z=n,Xt=n,Xi=[],Et=new zh(Z),vt=void 0,Mr=!1,Zs(()=>ne.load(Z)),ne.fit(),qn(),$n()}async function Pn(n){if(!Er){ne.finishInteraction(),Er=!0;try{await n()}catch(e){Ae(e instanceof Error?e.message:String(e))}finally{Er=!1}}}async function sp(n=!1){ne.finishInteraction();const e=Et,t=Et.token,i=await Vp(oa(Xt),n?void 0:Gs,Xt.title);return i?(Et===e&&(Gs=i.handle),e.markSaved(t),$n(),await As.flush(),Ae(`Saved ${i.name}`),Or(),!Et.isDirty):!1}async function Hs(){if(ne.finishInteraction(),!Et.isDirty)return!0;const n=await kh("Save your changes?","This diagram has unsaved changes.",["Cancel","Discard changes","Save"]);return n==="Save"?sp():n==="Discard changes"}const Zw=Pm({document:()=>Z,play:n=>{Gn={path:n.path,allowed:n.status==="allowed"},ne.playJourney([n.path[0]??""],{path:n.path,allowed:n.status==="allowed"}),k("journey").setAttribute("aria-pressed","true"),Ae(`${n.status.toUpperCase()} · ${n.reason} · P or Esc to stop`)}});k("reachability").onclick=()=>{k("file-menu").hidden=!0,Zw.open()};const Jw=tm({notify:Ae,apply:async n=>{const e=new Map(Z.nodes.map(i=>[i.id,{id:i.id,value:null}]));for(const i of n.nodes)e.set(i.id,{id:i.id,value:i});const t=new Map(Z.edges.map(i=>[i.id,{id:i.id,value:null}]));for(const i of n.edges)t.set(i.id,{id:i.id,value:i});return et({type:"graph",label:"Import infrastructure",title:n.title,nodes:[...e.values()],edges:[...t.values()]},[]),ne.fit(),!0}});k("import-infrastructure").onclick=()=>{k("file-menu").hidden=!0,Jw.open()};k("auto-layout").onclick=()=>{et(Op(Z)),ne.fit(),k("file-menu").hidden=!0};k("new").onclick=()=>{Pn(async()=>{await Hs()&&(Vs({version:1,title:"Untitled diagram",nodes:[],edges:[]}),k("file-menu").hidden=!0)})};k("open").onclick=()=>{k("file-menu").hidden=!0,Pn(async()=>{if(!await Hs())return;const n=await Gp();n!==null&&(Vs(Ls(n.content)),Gs=n.handle,Ae(`Opened ${n.name}`),Or())})};for(const n of["save","save-as"])k(n).onclick=()=>{k("file-menu").hidden=!0,Pn(async()=>{await sp(n==="save-as")})};k("export").onclick=()=>{k("file-menu").hidden=!0,Pn(async()=>{await Hp(await ne.png())&&Ae("PNG exported")})};k("quick-save").onclick=()=>k("save").click();async function Rc(){try{Ae("Capturing diagram…"),await $p(await ne.captureDiagram()),Ae("Diagram image copied · paste it anywhere")}catch(n){Ae(`Could not copy image: ${n instanceof Error?n.message:String(n)}`)}}k("copy-image").onclick=()=>{Rc()};k("quick-export").onclick=()=>k("export").click();k("menu").onclick=()=>{const n=k("file-menu");n.hidden=!n.hidden,k("menu").setAttribute("aria-expanded",String(!n.hidden)),Ai(!1)};for(const n of["components","tool-add","layer-add"])k(n).onclick=()=>Ai(k("component-palette").hidden);k("close-components").onclick=()=>Ai(!1);k("toggle-layers").onclick=()=>ld(!od);k("close-layers").onclick=()=>ld(!1);k("ground-toggle").onclick=()=>{dr=!dr,ne.setDiagramVisible(dr),k("ground-toggle").setAttribute("aria-pressed",String(dr)),k("ground-toggle").setAttribute("aria-label",dr?"Hide diagram":"Show diagram")};function Rn(n){ne.setTool(n);for(const e of["select","pan","connect","text","note"]){const t=k(`tool-${e}`);t.classList.toggle("active",e===n),t.setAttribute("aria-pressed",String(e===n))}}k("tool-select").onclick=()=>Rn("select");k("tool-pan").onclick=()=>Rn("pan");k("tool-text").onclick=()=>{Rn("text"),Ae("Click the board to place text.")};k("tool-note").onclick=()=>{Rn("note"),Ae("Click the board to pin a sticky note.")};k("tool-connect").onclick=()=>{Rn("connect"),Ae("Choose a source, then a target. Or drag a port dot to another component.")};k("iso").onclick=()=>{ne.setView("isometric"),k("iso").setAttribute("aria-pressed","true"),k("top").setAttribute("aria-pressed","false")};k("top").onclick=()=>{ne.setView("top"),k("iso").setAttribute("aria-pressed","false"),k("top").setAttribute("aria-pressed","true")};for(const n of["fit","tool-fit"])k(n).onclick=()=>ne.fit();k("zoom-in").onclick=()=>ne.zoomBy(1.2);k("zoom-out").onclick=()=>ne.zoomBy(1/1.2);k("help").onclick=()=>{const n=k("help-panel");n.hidden=!n.hidden,k("help").setAttribute("aria-expanded",String(!n.hidden))};k("tool-edit").onclick=()=>{vt?Ws({kind:"node",id:vt}):Ft&&Ws({kind:"edge",id:Ft})};me("node-text").onchange=()=>{const n=Z.nodes.find(t=>t.id===vt),e=me("node-text").value.slice(0,Lc);!n||e===n.label||et({type:"graph",label:"Edit text",nodes:[{id:n.id,value:{...n,label:e}}]})};me("node-font").onchange=()=>{const n=Z.nodes.find(t=>t.id===vt);if(n?.kind==="service"&&!me("node-font").value.trim()){const t={...n};delete t.fontSize,et({type:"graph",label:"Text size",nodes:[{id:n.id,value:t}]});return}const e=Number(me("node-font").value);if(!n||!Number.isFinite(e)||e<4||e>400){qn();return}et({type:"graph",label:"Text size",nodes:[{id:n.id,value:{...n,fontSize:e}}]})};_t("node-wrap").onchange=()=>{const n=Z.nodes.find(t=>t.id===vt);if(!n)return;const e={...n};_t("node-wrap").checked?e.wrap=!0:delete e.wrap,et({type:"graph",label:"Caption wrapping",nodes:[{id:n.id,value:e}]})};me("node-branch").onchange=()=>{const n=Z.nodes.find(i=>i.id===vt),e=me("node-branch").value;if(!n)return;const t=e.startsWith("fixed:")?{mode:"fixed",edge:e.slice(6)}:{mode:e==="ask"?"ask":"all"};et({type:"graph",label:"Journey branch",nodes:[{id:n.id,value:{...n,journey:t}}]})};me("node-color").onchange=()=>{const n=Z.nodes.find(t=>t.id===vt),e=me("node-color").value;!n||!/^#[0-9a-f]{6}$/i.test(e)||e===n.color||et({type:"graph",label:"Change colour",nodes:[{id:n.id,value:{...n,color:e}}]})};k("node-label").onchange=()=>{const n=Z.nodes.find(i=>i.id===vt);if(!n)return;const e=_t("node-label").value.slice(0,1e3);if(e===n.label)return;const t=Ds(n.serviceId??n.label);et({type:"graph",label:"Rename component",nodes:[{id:n.id,value:{...n,label:e,...t?{serviceId:t.id}:{}}}]})};function ha(){if(Ft){et({type:"graph",label:"Delete connection",edges:[{id:Ft,value:null}]},[]);return}wt.size&&(et(Lm(Z,wt),[]),Ae("Selection deleted"))}k("delete").onclick=ha;function zr(n){ne.finishInteraction();const e=n?Et.redo():Et.undo();if(!e)return;const t=Z!==Et.document;Zs(()=>{t&&(Z=Et.document,Xi=Z===Xt?[]:[Xt],ne.load(Z),ne.fit());const i=[...wt],s=Ft;e.type==="move"?t||ne.refreshPosition(e.id):(t||ne.load(Z),ne.selectMany(i.filter(r=>Z.nodes.some(o=>o.id===r))),s&&Z.edges.some(r=>r.id===s)&&ne.selectEdge(s))}),$n(),qn(),Ae(`${n?"Redid":"Undid"} ${e.type}`)}k("undo").onclick=()=>zr(!1);k("redo").onclick=()=>zr(!0);const Kw=qs.map(n=>({service:n,search:`${n.label} ${n.category} ${n.aliases}`.toLowerCase(),button:void 0}));function Qw(n){const e=document.createElement("button");e.className="service";const t=document.createElement("span");if(t.className="service-symbol",t.style.color=n.color,n.icon){const o=document.createElement("img");o.loading="lazy",o.decoding="async",o.src=n.icon,o.alt="",t.append(o)}else t.textContent=n.glyph;const i=document.createElement("span"),s=document.createElement("strong");s.textContent=n.label;const r=document.createElement("small");return r.textContent=n.description,i.append(s,r),e.append(t,i),e.onclick=()=>eS(n),e}function fa(n=""){const e=k("services"),t=n.toLowerCase();e.replaceChildren();for(const i of Kw)i.search.includes(t)&&(i.button??=Qw(i.service),e.append(i.button));if(!e.childElementCount){const i=document.createElement("p");i.className="empty-search",i.textContent="No matching services. Try another name.",e.append(i)}lp(0)}function eS(n){const e=crypto.randomUUID(),[t,i]=rp(n.kind);let s;try{s=Fm(Z,ne.insertionPoint(),t,i)}catch(r){Ae(String(r));return}Et.execute({type:"insert",node:{id:e,kind:n.kind,serviceId:n.id,...n.shape?{shape:n.shape}:{},...n.boundary?{boundary:n.boundary}:{},...n.policyKind?{policy:n.policyKind==="route-table"?{kind:"route-table",routes:[]}:{kind:n.policyKind,rules:[]}}:{},label:n.label,x:Math.round(s.x/10)*10,z:Math.round(s.z/10)*10,width:t,depth:i,color:n.color}}),Zs(()=>ne.load(Z)),ne.select(e),ne.reveal(e),$n(),Ai(!1),Rn("select"),Ae(`${n.label} added`),(n.kind==="text"||n.kind==="note")&&Ws({kind:"node",id:e},!0)}function rp(n){return n==="group"?[500,320]:n==="text"?[280,60]:n==="note"?[220,170]:[160,100]}function op(n,e,t){const i=qs.find(l=>l.kind===n);if(!i)return;const s=crypto.randomUUID(),[r,o]=rp(n),a=l=>ne.snapping?Math.round(l/10)*10:l;Et.execute({type:"insert",node:{id:s,kind:n,serviceId:i.id,label:"",x:a(e+r/2-20),z:a(t),width:r,depth:o,color:i.color}}),Zs(()=>ne.load(Z)),ne.select(s),$n(),Rn("select"),Ws({kind:"node",id:s},!0)}ne.onPlace=op;ne.onEditRequest=n=>{const e=n.kind==="node"?Z.nodes.find(i=>i.id===n.id):void 0,t=Xt.details?.find(i=>i.id===e?.detailId);t?Xs(t.document):Ws(n)};let qi;function Ws(n,e=!1){if(qi?.(!0),n.kind==="empty"){op("text",n.x,n.z);return}const t=n.kind==="node"?Z.nodes.find(l=>l.id===n.id):void 0,i=n.kind==="edge"?Z.edges.find(l=>l.id===n.id):void 0;if(!t&&!i)return;const s=t?.kind==="text"||t?.kind==="note",r=document.createElement(s?"textarea":"input");if(r.className=`inline-editor${t?` ${t.kind}`:" edge"}`,r.value=t?.label??i?.label??"",r.maxLength=s?Lc:1e3,r.setAttribute("aria-label",s?"Text":"Label"),r.spellcheck=s,t&&s){const l=ne.nodeScreenRect(t.id),c=ne.nodePixelScale(t.id);if(!l)return;Object.assign(r.style,{left:`${l.left}px`,top:`${l.top}px`,width:`${Math.max(l.width,160)}px`,height:`${Math.max(l.height,48)}px`,fontSize:`${Math.max(11,aa(t)*c)}px`,padding:`${(t.kind==="note"?14:4)*c}px`,background:t.kind==="note"?t.color:""})}else{const l=t?(()=>{const c=ne.nodeScreenRect(t.id);return c?{x:c.left+c.width/2,y:t.kind==="group"?c.top+18:c.top+c.height+22}:void 0})():i?ne.edgeScreenPosition(i.id):void 0;if(!l)return;Object.assign(r.style,{left:`${l.x-110}px`,top:`${l.y-18}px`,width:"220px"})}document.body.append(r),r.focus(),r.select();let o=!1;const a=l=>{if(o)return;o=!0,qi=void 0;const c=r.value;if(r.remove(),!l){e&&s&&zr(!1);return}if(t){const d=Z.nodes.find(u=>u.id===t.id);if(!d)return;if(e&&d.kind==="text"&&!c.trim()){zr(!1);return}if(c===d.label)return;et({type:"graph",label:s?"Edit text":"Rename component",nodes:[{id:d.id,value:{...d,label:c}}]},[d.id])}else if(i){const d=Z.edges.find(u=>u.id===i.id);if(!d||c===d.label)return;et({type:"graph",label:"Label connection",edges:[{id:d.id,value:{...d,label:c.slice(0,1e3)}}]},[]),ne.selectEdge(d.id)}};qi=a,r.addEventListener("blur",()=>a(!0)),r.addEventListener("keydown",l=>{const c=l;c.stopPropagation(),c.key==="Escape"?(c.preventDefault(),a(!e)):c.key==="Enter"&&(!s||c.ctrlKey||c.metaKey)&&(c.preventDefault(),a(!0))}),Ae(s?"Typing · Ctrl+Enter or click away to finish · Esc cancels":"Enter to rename · Esc cancels")}let Ar=0;function ap(){return[...k("services").querySelectorAll("button")]}function lp(n){const e=ap();Ar=e.length?(n+e.length)%e.length:0;for(const[t,i]of e.entries())i.classList.toggle("highlighted",t===Ar);e[Ar]?.scrollIntoView({block:"nearest"})}k("search").oninput=()=>fa(_t("search").value);k("search").onkeydown=n=>{n.key==="ArrowDown"||n.key==="ArrowUp"?(n.preventDefault(),lp(Ar+(n.key==="ArrowDown"?1:-1))):n.key==="Enter"?(n.preventDefault(),ap()[Ar]?.click()):n.key==="Escape"&&(n.preventDefault(),Ai(!1))};function me(n){const e=k(n);if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)return e;throw Error(`Expected field ${n}`)}function xr(n,e,t){const i=me(n);i instanceof HTMLSelectElement&&(i.replaceChildren(...e.map(([s,r])=>{const o=document.createElement("option");return o.value=s,o.textContent=r,o})),i.value=t)}function tS(n){let e=n.parentId;for(;e;){if(wt.has(e))return!0;e=Z.nodes.find(t=>t.id===e)?.parentId}return!1}function et(n,e=[...wt]){ne.finishInteraction();const t=Ft;Et.execute(n)&&(Zs(()=>{ne.load(Z),ne.selectMany(e),!e.length&&t&&Z.edges.some(i=>i.id===t)&&ne.selectEdge(t)}),$n(),qn(),Ae(n.type==="graph"?n.label:`Updated ${n.type}`))}ne.onResize=n=>{const e=n.flatMap(({id:t,from:i,to:s})=>{const r=Z.nodes.find(a=>a.id===t);if(!r)return[];const o={...r,...s,...r.kind==="text"||r.kind==="note"?{fontSize:Hh(r,{...r,...i},{...r,...s})}:{}};return Object.assign(r,i),[{id:t,value:o}]});et({type:"graph",label:"Resize component",nodes:e})};ne.onMoves=n=>{const e=n.flatMap(t=>{const i=Z.nodes.find(r=>r.id===t.id);if(!i)return[];const s={...i,...t.to};return Object.assign(i,t.from),[{id:i.id,value:s}]});et({type:"graph",label:"Move selection",nodes:e})};ne.onConnect=(n,e,t,i)=>{if(n===t){Ae("Choose a different target component.");return}const s=crypto.randomUUID(),r={id:s,source:n,target:t,label:""};e&&(r.sourcePort=e),i&&(r.targetPort=i),et({type:"graph",label:"Connect components",edges:[{id:s,value:r}]}),Rn("select")};me("quality").onchange=()=>{const n=Number(me("quality").value);ne.setQuality(n);try{localStorage.setItem("solar-forge-quality",String(n))}catch{Ae("Quality changed for this session.")}};try{const n=localStorage.getItem("solar-forge-quality");n&&["1","1.5","2"].includes(n)&&(me("quality").value=n,ne.setQuality(Number(n)))}catch{}function cp(n){ne.setFlow(n),k("flow").setAttribute("aria-pressed",String(n));try{localStorage.setItem("solar-forge-flow",n?"1":"0")}catch{}}try{localStorage.getItem("solar-forge-flow")==="0"&&cp(!1)}catch{}k("flow").onclick=()=>cp(!ne.flow);function nS(){const n=k("diagram-path");if(n.replaceChildren(),Z===Xt)return;const e=document.createElement("button");e.textContent=`⌂ ${Xt.title}`,e.onclick=()=>Xs(Xt,!0);const t=document.createElement("button");t.textContent="← Back",t.onclick=()=>{const s=Xi.pop();s&&Xs(s,!0)};const i=document.createElement("span");i.textContent=Z.title,n.append(e,t,i)}function Xs(n,e=!1){n!==Z&&(ne.finishInteraction(),qi?.(!0),ne.stopJourney(),!e&&n!==Z&&Xi.push(Z),Xi.length>100&&Xi.shift(),n===Xt&&(Xi=[]),Z=n,Et.document=n,vt=void 0,Ft=void 0,wt.clear(),Gn=void 0,Zs(()=>ne.load(Z)),ne.fit(),$n(),qn(),Ae(`Opened ${n.title}`))}k("detail-open").onclick=()=>{const n=Z.nodes.find(t=>t.id===vt)?.detailId,e=Xt.details?.find(t=>t.id===n)?.document;e&&Xs(e)};k("detail-create").onclick=()=>{const n=Z.nodes.find(i=>i.id===vt);if(!n)return;if((Xt.details?.length??0)>=100){Ae("A project supports up to 100 detail diagrams");return}const e=crypto.randomUUID(),t={version:1,title:`${n.label} detail`,nodes:[],edges:[]};Et.execute({type:"detail",root:Xt,id:e,board:t}),et({type:"graph",label:"Link detail diagram",nodes:[{id:n.id,value:{...n,detailId:e}}]}),Xs(t)};me("node-detail").onchange=()=>{const n=Z.nodes.find(t=>t.id===vt);if(!n)return;const e={...n};me("node-detail").value?e.detailId=me("node-detail").value:delete e.detailId,et({type:"graph",label:"Link detail diagram",nodes:[{id:n.id,value:e}]})};me("node-caption").onchange=()=>{const n=Z.nodes.find(e=>e.id===vt);n&&et({type:"graph",label:"Edit walkthrough caption",nodes:[{id:n.id,value:{...n,journeyCaption:me("node-caption").value.slice(0,1e3)}}]})};function pa(){return Z.scenarios??gl}function cd(){const n=k("traffic-scenario"),e=n.value;n.replaceChildren(new Option("Choose a scenario…",""),...pa().map(t=>new Option(t.name,t.id))),n.value=e;for(const t of["scenario-source","scenario-target"]){const i=k(t),s=i.value;i.replaceChildren(new Option("Not set",""),...Z.nodes.filter(r=>r.kind==="service").map(r=>new Option(r.label,r.id))),i.value=s}}function dp(){return Cr({protocol:me("traffic-protocol").value,port:Number(me("traffic-port").value),sourceIp:me("traffic-source").value.trim(),direction:me("traffic-direction").value})}me("traffic-scenario").onchange=()=>{const n=pa().find(e=>e.id===me("traffic-scenario").value);if(n){me("scenario-name").value=n.name;for(const[e,t]of[["sourceId","scenario-source"],["targetId","scenario-target"]]){const i=k(t),s=n[e];s&&![...i.options].some(r=>r.value===s)&&i.add(new Option(`Missing resource: ${s}`,s)),i.value=s??""}me("traffic-protocol").value=n.traffic.protocol,me("traffic-port").value=String(n.traffic.port),me("traffic-source").value=n.traffic.sourceIp,me("traffic-direction").value=n.traffic.direction}};k("scenario-save").onclick=()=>{try{const n=me("scenario-name").value.trim();if(!n)throw Error("Give the scenario a name");const t=me("traffic-scenario").value||crypto.randomUUID(),i=pa().filter(s=>s.id!==t);if(i.length>=100)throw Error("A diagram supports up to 100 scenarios");i.push({id:t,name:n,traffic:dp(),...me("scenario-source").value?{sourceId:me("scenario-source").value}:{},...me("scenario-target").value?{targetId:me("scenario-target").value}:{}}),et({type:"scenarios",scenarios:i}),cd(),me("traffic-scenario").value=t,Ae(`Saved scenario ${n}`)}catch(n){Ae(String(n))}};k("scenario-delete").onclick=()=>{const n=me("traffic-scenario").value;n&&(et({type:"scenarios",scenarios:pa().filter(e=>e.id!==n)}),cd())};k("scenario-use").onclick=()=>{try{const n=dp(),e=me("scenario-source").value,t=me("scenario-target").value;if(Gn=void 0,e&&!Z.nodes.some(i=>i.id===e))throw Error("Scenario start is missing; choose another resource");if(t&&!Z.nodes.some(i=>i.id===t))throw Error("Scenario destination is missing; choose another resource");if(et({type:"traffic",from:Z.traffic,to:n}),e&&t){const i=$o(Z,e,t,n);Ae(`${i.status}: ${i.reason}`),i.status!=="unknown"&&(Gn={path:i.path,allowed:i.status==="allowed"})}else e&&ne.select(e),Ae("Traffic scenario applied");ne.stopJourney(),k("traffic-panel").hidden=!0}catch(n){Ae(String(n))}};function Pc(){if(ne.journeyPlaying){ne.stopJourney();return}const n=Gn?Gn.path.slice(0,1):Bh(Z,vt);if(!n.length){Ae("No flow arrows. Use Reachability matrix for imported resources, or connect components.");return}ne.playJourney(n,Gn),k("journey").setAttribute("aria-pressed","true");const e=n.map(t=>Z.nodes.find(i=>i.id===t)?.label).join(", ");Ae(`Journey from ${e} · P or Esc to stop`)}k("journey").onclick=Pc;k("traffic-settings").onclick=()=>{const n=k("traffic-panel");n.hidden=!n.hidden,cd();const e=Z.traffic??Tr;me("traffic-protocol").value=e.protocol,me("traffic-port").value=String(e.port),me("traffic-source").value=e.sourceIp,me("traffic-direction").value=e.direction};k("traffic-apply").onclick=()=>{try{const n=Cr({protocol:me("traffic-protocol").value,port:Number(me("traffic-port").value),sourceIp:me("traffic-source").value.trim(),direction:me("traffic-direction").value});et({type:"traffic",from:Z.traffic,to:n}),k("traffic-panel").hidden=!0}catch(n){Ae(String(n))}};function up(){const n=me("rule-action").value!=="allow";for(const e of["rule-protocol","rule-port","rule-source","rule-direction"])me(e).disabled=n}me("rule-action").onchange=up;k("rule-apply").onclick=()=>{const n=Z.edges.find(e=>e.id===Ft);if(n)try{const e={...n};me("rule-action").value==="none"?delete e.networkRule:me("rule-action").value==="deny"?e.networkRule={action:"deny",protocol:"any",direction:"any"}:e.networkRule=Rh({action:me("rule-action").value,protocol:me("rule-protocol").value,direction:me("rule-direction").value,...me("rule-port").value?{port:Number(me("rule-port").value)}:{},...me("rule-source").value.trim()?{sourceCidr:me("rule-source").value.trim()}:{}}),et({type:"graph",label:"Change traffic rule",edges:[{id:n.id,value:e}]})}catch(e){Ae(String(e))}};ne.onJourneyPermit=n=>{const e=Z.edges.find(i=>i.id===n),t=Ph(e?.networkRule,Z.traffic??Tr);if(e&&(Z.nodes.find(i=>i.id===e.source)?.network||Z.nodes.find(i=>i.id===e.target)?.network)){const i=$o(Z,e.source,e.target,Z.traffic??Tr);if(i.status!=="allowed")return Ae(`${i.status.toUpperCase()} · ${i.reason}`),!1}return t.allowed||Ae(`Blocked · ${e?.label||n} · ${t.reason}`),t.allowed};ne.onJourneyHop=n=>{const e=Z.edges.find(i=>i.id===n);if(!e)return;const t=i=>Z.nodes.find(s=>s.id===i)?.label??"";Ae(`${e.networkRule?"Allowed · ":""}${t(e.source)} → ${t(e.target)}${e.label?` · ${e.label}`:""}`)};ne.onJourneyCaption=n=>{k("journey-caption").textContent=n,k("journey-caption").hidden=!n};ne.onJourneyEnd=()=>{k("journey").setAttribute("aria-pressed","false")};ne.onJourneyBranches=n=>Uc(Z,n);function dd(n){const e=Z.edges.find(i=>i.id===n);if(!e)return"Connection";const t=Z.nodes.find(i=>i.id===e.target)?.label??"";return e.label?`${e.label} → ${t}`:`→ ${t}`}let ra;ne.onJourneyChoose=(n,e)=>new Promise(t=>{if(ia){t(e[0]);return}const i=Z.nodes.find(f=>f.id===n),s=ne.nodeScreenRect(n),r=document.createElement("section");r.className="popover decision-chooser",r.setAttribute("aria-label","Choose a branch");const o=document.createElement("p");o.className="popover-caption",o.textContent="DECISION";const a=document.createElement("h2");a.textContent=i?.label||"Which way?",r.append(o,a);const l=f=>{r.remove(),ra=void 0,t(f)};e.forEach((f,g)=>{const v=document.createElement("button"),m=document.createElement("kbd");m.textContent=String(g+1);const p=document.createElement("span");p.textContent=dd(f),v.append(m,p),v.onclick=()=>l(f),r.append(v)}),document.body.append(r);const c=r.offsetWidth,d=r.offsetHeight,u=s?s.left+s.width+16:innerWidth/2-c/2,h=s?s.top+s.height/2-d/2:innerHeight/3;r.style.left=`${Math.max(12,Math.min(u,innerWidth-c-12))}px`,r.style.top=`${Math.max(64,Math.min(h,innerHeight-d-80))}px`,ra={close:l},Ae(`Decision at ${i?.label??"a fork"} · choose a branch (1–${e.length})`)});ne.onJourneyCancelChoice=()=>ra?.close();window.addEventListener("keydown",n=>{if(!ra||n.ctrlKey||n.metaKey||n.altKey)return;const e=Number(n.key)-1,t=document.querySelectorAll(".decision-chooser button");Number.isInteger(e)&&t[e]&&(n.preventDefault(),n.stopImmediatePropagation(),t[e].click())},{capture:!0});k("snap").onclick=()=>{ne.snapping=!ne.snapping,k("snap").setAttribute("aria-pressed",String(ne.snapping))};k("tool-group").onclick=()=>{try{const n=crypto.randomUUID();et(Um(Z,wt,n),[n])}catch(n){Ae(String(n))}};k("ungroup").onclick=()=>et(Nm(Z,wt),[]);k("duplicate").onclick=()=>{const n=Yh(qh(Z,wt),()=>crypto.randomUUID());et(n,n.type==="graph"?n.nodes?.map(e=>e.id)??[]:[])};for(const n of["x","z","width","depth"])me(`node-${n}`).onchange=()=>{const e=Z.nodes.find(i=>i.id===vt);if(!e)return;const t=Number(me(`node-${n}`).value);if(!Number.isFinite(t)||Math.abs(t)>1e6||(n==="width"||n==="depth")&&t<30){Ae("Enter a valid size or coordinate."),qn();return}et({type:"graph",label:`Change ${n}`,nodes:[{id:e.id,value:{...e,[n]:t,...(e.kind==="text"||e.kind==="note")&&(n==="width"||n==="depth")?{fontSize:Hh(e,e,{...e,[n]:t})}:{}}}]})};me("node-parent").onchange=()=>{const n=Z.nodes.find(a=>a.id===vt);if(!n)return;const e=new Map(Z.nodes.map(a=>[a.id,a])),t=Wt(n,e),i=me("node-parent").value,s=e.get(i),r=s?Wt(s,e):{x:0,z:0},o={...n,x:t.x-r.x,z:t.z-r.z};delete o.parentId,i&&(o.parentId=i),et({type:"graph",label:"Move into boundary",nodes:[{id:n.id,value:o}]})};function hp(){const n=wt.size?wt:new Set(vt?[vt]:[]);return Z.nodes.filter(e=>n.has(e.id))}function fp(n){const e=new Set([n]),t=[];for(let i=!0;i;){i=!1;for(const s of Z.nodes)s.parentId&&e.has(s.parentId)&&!e.has(s.id)&&(e.add(s.id),t.push(s),i=!0)}return t}function pp(n,e,t){n.length&&et({type:"graph",label:t,nodes:n.map(i=>({id:i.id,value:{...i,metadata:{...i.metadata,...e}}}))})}for(const n of Jf)me(`meta-${n}`).onchange=()=>{const e=hp();pp(e,{[n]:me(`meta-${n}`).value.slice(0,1e3)},e.length>1?`Edit ${n} on ${e.length} objects`:`Edit ${n}`)};k("meta-apply-inside").onclick=()=>{const n=Z.nodes.find(i=>i.id===vt);if(!n)return;const e=Object.fromEntries(Object.entries(n.metadata??{}).filter(([,i])=>i)),t=fp(n.id);if(!Object.keys(e).length){Ae("Fill in this boundary’s details first, then apply them.");return}pp(t,e,"Apply details inside boundary"),Ae(`Details applied to ${t.length} objects inside ${n.label}`)};for(const n of["label","source","target","sourcePort","targetPort","routing","bend"])me(`edge-${n}`).onchange=()=>{const e=Z.edges.find(r=>r.id===Ft);if(!e)return;const t={...e},i=me(`edge-${n}`).value;if(n==="bend"){const r=Number(i);if(!Number.isFinite(r)||Math.abs(r)>1e6){qn();return}t.bend=r}else n==="sourcePort"||n==="targetPort"?i?t[n]=i:delete t[n]:n==="routing"?t.routing=i:t[n]=i.slice(0,1e3);const s=e.id;et({type:"graph",label:"Edit connection",edges:[{id:s,value:t}]},[]),ne.selectEdge(s)};k("delete-edge").onclick=ha;function mp(){const n=Z.edges.find(s=>s.id===Ft);if(!n)return{active:!1,all:!1};const e=Z.edges.filter(s=>s.source===n.source).length>=2,t=Z.nodes.find(s=>s.id===n.source),i=t?.journey?.mode==="fixed"?t.journey.edge:void 0;return{active:e&&i!==n.id,all:e&&!!i}}function gp(n){const e=Z.edges.find(s=>s.id===Ft),t=e&&Z.nodes.find(s=>s.id===e.source);if(!e||!t)return;const i={...t};n?i.journey={mode:"fixed",edge:e.id}:delete i.journey,et({type:"graph",label:n?"Set active route":"Show all routes",nodes:[{id:t.id,value:i}]},[]),ne.selectEdge(e.id),Ae(n?`Active route: ${t.label} ${dd(e.id)}`:`All routes from ${t.label} are active`)}k("edge-active").onclick=()=>gp(!0);k("edge-all-routes").onclick=()=>gp(!1);ne.onContextMenu=(n,e)=>{const t=k("context-menu");for(const i of t.querySelectorAll("[data-multi]"))i.hidden=!!Ft||wt.size<2;for(const i of t.querySelectorAll("button[data-action]")){const s=i.dataset.action,r=mp();i.hidden=Ft?s==="edge-active"?!r.active:s==="edge-all-routes"?!r.all:s!=="delete":s==="edge-active"||s==="edge-all-routes"?!0:s==="delete"||s==="duplicate"?!wt.size:!1}t.hidden=!1,t.style.left=`${Math.min(n,innerWidth-190)}px`,t.style.top=`${Math.min(e,innerHeight-250)}px`};const iS=[["left","Align left edges"],["center","Align centres horizontally"],["right","Align right edges"],["top","Align top edges"],["middle","Align middles"],["bottom","Align bottom edges"],["distribute-x","Distribute horizontally"],["distribute-z","Distribute vertically"]];function vp(n){if(wt.size<2){Ae("Select two or more components to align.");return}et(km(Z,wt,n))}for(const n of document.querySelectorAll("#context-menu [data-align]"))n.onclick=()=>{k("context-menu").hidden=!0,vp(n.dataset.align)};for(const n of document.querySelectorAll("#context-menu button[data-action]"))n.onclick=()=>{k("context-menu").hidden=!0,k(n.dataset.action??"fit").click()};window.addEventListener("pointerdown",n=>{qi&&!(n.target instanceof Element&&n.target.closest(".inline-editor"))&&qi(!0)},{capture:!0});window.addEventListener("pointerdown",n=>{n.target instanceof Node&&!k("context-menu").contains(n.target)&&(k("context-menu").hidden=!0)});function ma(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement}for(const n of["copy","cut"])window.addEventListener(n,e=>{ma(e.target)||!wt.size||(e.preventDefault(),e.clipboardData?.setData("text/plain",oa(qh(Z,wt))),n==="cut"&&ha())});window.addEventListener("paste",n=>{if(ma(n.target))return;const e=n.clipboardData?.getData("text/plain");if(e)try{const t=Ls(e),i=Yh(t,()=>crypto.randomUUID());n.preventDefault(),et(i,i.type==="graph"?i.nodes?.map(s=>s.id)??[]:[])}catch{Ae("Clipboard does not contain a valid Solar Forge selection.")}});window.addEventListener("keydown",n=>{ia&&(n.preventDefault(),n.stopImmediatePropagation(),n.key==="Escape"&&vr?.abort())},!0);window.addEventListener("keydown",n=>{if(!ma(n.target)&&(n.ctrlKey||n.metaKey)&&["a","g","d"].includes(n.key.toLowerCase())){n.preventDefault();const e=n.key.toLowerCase();e==="a"?ne.selectMany(Z.nodes.map(t=>t.id)):k(e==="d"?"duplicate":n.shiftKey?"ungroup":"tool-group").click()}});window.addEventListener("keydown",n=>{if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="k"){n.preventDefault(),Qp([...["new","browse-examples","open","save","save-as","export","export-svg","auto-layout","reachability","import-infrastructure","export-gif","export-video","export-mermaid","export-plantuml","export-drawio","fit","iso","top","tool-group","ungroup","duplicate","delete"].map(e=>({label:k(e).getAttribute("title")??k(e).textContent?.trim()??e,run:()=>k(e).click()})),{label:"Play journey (P)",run:Pc},{label:"Copy diagram image (Ctrl+Shift+C)",run:()=>{Rc()}},...iS.map(([e,t])=>({label:t,run:()=>vp(e)})),...ta.map(e=>({label:`Theme: ${e.name}`,run:()=>Qf(e.id)})),...qs.map(e=>({label:`Add ${e.label} · ${e.category}`,run:()=>{Ai(!0),_t("search").value=e.label,fa(e.label)}}))]);return}if((n.ctrlKey||n.metaKey)&&["z","y"].includes(n.key.toLowerCase())&&!(n.target instanceof HTMLInputElement)&&!(n.target instanceof HTMLTextAreaElement)){n.preventDefault(),zr(n.shiftKey||n.key.toLowerCase()==="y");return}if((n.ctrlKey||n.metaKey)&&n.shiftKey&&n.key.toLowerCase()==="c"&&!ma(n.target)){n.preventDefault(),Rc();return}if((n.ctrlKey||n.metaKey)&&["s","o","n"].includes(n.key.toLowerCase())){n.preventDefault(),k(n.key.toLowerCase()==="s"?n.shiftKey?"save-as":"save":n.key.toLowerCase()==="n"?"new":"open").click();return}if(n.key==="Escape"){if(qi?.(!1),ne.journeyPlaying){ne.stopJourney();return}ne.cancelInteraction(),k("context-menu").hidden=!0,Rn("select"),Ai(!1),k("file-menu").hidden=!0,k("help-panel").hidden=!0,k("traffic-panel").hidden=!0,k("gif-panel").hidden=!0,k("theme-menu").hidden=!0,k("menu").setAttribute("aria-expanded","false"),k("help").setAttribute("aria-expanded","false"),ne.select(void 0);return}if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement||n.ctrlKey||n.metaKey||n.altKey)){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.key)){n.preventDefault();const e=n.shiftKey?50:ne.snapping?10:1,t=n.key==="ArrowLeft"?-e:n.key==="ArrowRight"?e:0,i=n.key==="ArrowUp"?-e:n.key==="ArrowDown"?e:0,s=Z.nodes.filter(r=>wt.has(r.id)&&!tS(r));et({type:"graph",label:"Nudge selection",nodes:s.map(r=>({id:r.id,value:{...r,x:r.x+t,z:r.z+i}}))})}n.key==="/"&&(n.preventDefault(),Ai(!0)),n.key.toLowerCase()==="v"&&Rn("select"),n.key.toLowerCase()==="c"&&k("tool-connect").click(),n.key.toLowerCase()==="m"&&Rn("pan"),n.key.toLowerCase()==="p"&&Pc(),n.key.toLowerCase()==="t"&&k("tool-text").click(),n.key.toLowerCase()==="n"&&k("tool-note").click(),n.key==="Enter"&&vt&&(n.preventDefault(),Ws({kind:"node",id:vt})),n.key.toLowerCase()==="f"&&ne.fit(),(n.key==="Delete"||n.key==="Backspace")&&(n.preventDefault(),ha())}});window.addEventListener("beforeunload",n=>{ne.finishInteraction(),Mr&&n.preventDefault()});window.addEventListener("pagehide",()=>ne.dispose(),{once:!0});function xp(){innerWidth<800&&od&&ld(!1)}window.addEventListener("resize",xp);fa();$n();xp();ne.fit();Ae(Dc()?"Offline · Ready":"Browser workspace · Saving downloads a copy");(async()=>{const n=Dc();if(n){if(await ie("diagnostic_mode")){const{runNativeDiagnostics:s}=await Ti(async()=>{const{runNativeDiagnostics:r}=await import("./diagnostics-C3-RNYVL.js");return{runNativeDiagnostics:r}},[]);await s(ne);return}let i=!1;await Fo().onCloseRequested(s=>{s.preventDefault(),!(i||Er)&&(i=!0,(async()=>{await Hs()&&(Cc&&(await As.flush(),await xl(null)),As.dispose(),await Fo().destroy())})().catch(r=>Ae(`Could not close: ${String(r)}`)).finally(()=>{i=!1}))})}const e=await Xp();if(e){const i=await kh("Recover your diagram?","An unsaved diagram was found from a previous session.",n?["Close app","Discard recovery","Recover"]:["Discard recovery","Recover"]);if(i==="Recover")Vs(Ls(e)),Et.markSaved(-1),$n(),Ae("Recovered diagram. Save to choose a destination.");else if(i==="Discard recovery")await xl(null);else if(n){await Fo().destroy();return}}if(Cc=!0,window.addEventListener("blur",()=>{Et.isDirty&&(As.schedule(),As.flush().catch(()=>{}))}),!n)return;await Or();const t=async()=>{if(Er)return;const i=await ie("take_pending_file");i&&await Pn(async()=>{await Hs()&&(Vs(Ls(i.content)),Gs=i.handle,Ae(`Opened ${i.name}`),await Or())})};await Ic("pending-file",()=>{t().catch(i=>Ae(String(i)))}),await t()})().catch(n=>Ae(`Startup check failed: ${String(n)}`));export{zh as D,sS as a,Oh as b,zp as c,Tr as d,rw as e,Ds as f,Dm as g,Vh as h,aa as i,ie as j,oa as k,Um as l,qh as m,Hf as o,Yh as p,dl as r,Tm as s,Nm as u,Nh as v,Wt as w};
