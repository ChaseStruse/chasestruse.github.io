const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tour-BjFWENYq.js","assets/tour-CH6n6MU-.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const y0="modulepreload",b0=function(n){return"/diagrams/"+n},xd={},Ai=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(t.map(c=>{if(c=b0(c),c in xd)return;xd[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":y0,d||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),d)return new Promise((f,g)=>{h.addEventListener("load",f),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function w0(n,e,t,i){if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)}function M0(n,e,t,i,s){if(typeof e=="function"?n!==e||!0:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var Io;const vn="__TAURI_TO_IPC_KEY__";function S0(n,e=!1){return window.__TAURI_INTERNALS__.transformCallback(n,e)}async function ie(n,e={},t){return window.__TAURI_INTERNALS__.invoke(n,e,t)}class E0{get rid(){return w0(this,Io,"f")}constructor(e){Io.set(this,void 0),M0(this,Io,e)}async close(){return ie("plugin:resources|close",{rid:this.rid})}}Io=new WeakMap;function xn(){return!!(globalThis||window).isTauri}var cn;(function(n){n.WINDOW_RESIZED="tauri://resize",n.WINDOW_MOVED="tauri://move",n.WINDOW_CLOSE_REQUESTED="tauri://close-requested",n.WINDOW_DESTROYED="tauri://destroyed",n.WINDOW_FOCUS="tauri://focus",n.WINDOW_BLUR="tauri://blur",n.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",n.WINDOW_THEME_CHANGED="tauri://theme-changed",n.WINDOW_CREATED="tauri://window-created",n.WEBVIEW_CREATED="tauri://webview-created",n.DRAG_ENTER="tauri://drag-enter",n.DRAG_OVER="tauri://drag-over",n.DRAG_DROP="tauri://drag-drop",n.DRAG_LEAVE="tauri://drag-leave"})(cn||(cn={}));async function xh(n,e){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(n,e),await ie("plugin:event|unlisten",{event:n,eventId:e})}async function Lc(n,e,t){var i;const s=typeof t?.target=="string"?{kind:"AnyLabel",label:t.target}:(i=t?.target)!==null&&i!==void 0?i:{kind:"Any"};return ie("plugin:event|listen",{event:n,target:s,handler:S0(e)}).then(r=>async()=>xh(n,r))}async function C0(n,e,t){return Lc(n,i=>{xh(n,i.id),e(i)},t)}async function A0(n,e){await ie("plugin:event|emit",{event:n,payload:e})}async function T0(n,e,t){await ie("plugin:event|emit_to",{target:typeof n=="string"?{kind:"AnyLabel",label:n}:n,event:e,payload:t})}class _h{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.width=e[0].Logical.width,this.height=e[0].Logical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toPhysical(e){return new xr(this.width*e,this.height*e)}[vn](){return{width:this.width,height:this.height}}toJSON(){return this[vn]()}}class xr{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.width=e[0].Physical.width,this.height=e[0].Physical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toLogical(e){return new _h(this.width/e,this.height/e)}[vn](){return{width:this.width,height:this.height}}toJSON(){return this[vn]()}}class Qi{constructor(e){this.size=e}toLogical(e){return this.size instanceof _h?this.size:this.size.toLogical(e)}toPhysical(e){return this.size instanceof xr?this.size:this.size.toPhysical(e)}[vn](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[vn]()}}class yh{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.x=e[0].Logical.x,this.y=e[0].Logical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toPhysical(e){return new _i(this.x*e,this.y*e)}[vn](){return{x:this.x,y:this.y}}toJSON(){return this[vn]()}}class _i{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.x=e[0].Physical.x,this.y=e[0].Physical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toLogical(e){return new yh(this.x/e,this.y/e)}[vn](){return{x:this.x,y:this.y}}toJSON(){return this[vn]()}}class Vr{constructor(e){this.position=e}toLogical(e){return this.position instanceof yh?this.position:this.position.toLogical(e)}toPhysical(e){return this.position instanceof _i?this.position:this.position.toPhysical(e)}[vn](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[vn]()}}let L0=class Do extends E0{constructor(e){super(e)}static async new(e,t,i){return ie("plugin:image|new",{rgba:Ho(e),width:t,height:i}).then(s=>new Do(s))}static async fromBytes(e){return ie("plugin:image|from_bytes",{bytes:Ho(e)}).then(t=>new Do(t))}static async fromPath(e){return ie("plugin:image|from_path",{path:e}).then(t=>new Do(t))}async rgba(){return ie("plugin:image|rgba",{rid:this.rid}).then(e=>new Uint8Array(e))}async size(){return ie("plugin:image|size",{rid:this.rid})}};function Ho(n){return n==null?null:typeof n=="string"?n:n instanceof L0?n.rid:n}var hl;(function(n){n[n.Critical=1]="Critical",n[n.Informational=2]="Informational"})(hl||(hl={}));class R0{constructor(e){this._preventDefault=!1,this.event=e.event,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var _d;(function(n){n.None="none",n.Normal="normal",n.Indeterminate="indeterminate",n.Paused="paused",n.Error="error"})(_d||(_d={}));function Uo(){return new bh(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function ma(){return ie("plugin:window|get_all_windows").then(n=>n.map(e=>new bh(e,{skip:!0})))}const ga=["tauri://created","tauri://error"];class bh{constructor(e,t={}){var i;this.label=e,this.listeners=Object.create(null),t?.skip||ie("plugin:window|create",{options:{...t,parent:typeof t.parent=="string"?t.parent:(i=t.parent)===null||i===void 0?void 0:i.label,label:e}}).then(async()=>this.emit("tauri://created")).catch(async s=>this.emit("tauri://error",s))}static async getByLabel(e){var t;return(t=(await ma()).find(i=>i.label===e))!==null&&t!==void 0?t:null}static getCurrent(){return Uo()}static async getAll(){return ma()}static async getFocusedWindow(){for(const e of await ma())if(await e.isFocused())return e;return null}async listen(e,t){return this._handleTauriEvent(e,t)?()=>{const i=this.listeners[e];i.splice(i.indexOf(t),1)}:Lc(e,t,{target:{kind:"Window",label:this.label}})}async once(e,t){return this._handleTauriEvent(e,t)?()=>{const i=this.listeners[e];i.splice(i.indexOf(t),1)}:C0(e,t,{target:{kind:"Window",label:this.label}})}async emit(e,t){if(ga.includes(e)){for(const i of this.listeners[e]||[])i({event:e,id:-1,payload:t});return}return A0(e,t)}async emitTo(e,t,i){if(ga.includes(t)){for(const s of this.listeners[t]||[])s({event:t,id:-1,payload:i});return}return T0(e,t,i)}_handleTauriEvent(e,t){return ga.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}async scaleFactor(){return ie("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ie("plugin:window|inner_position",{label:this.label}).then(e=>new _i(e))}async outerPosition(){return ie("plugin:window|outer_position",{label:this.label}).then(e=>new _i(e))}async innerSize(){return ie("plugin:window|inner_size",{label:this.label}).then(e=>new xr(e))}async outerSize(){return ie("plugin:window|outer_size",{label:this.label}).then(e=>new xr(e))}async isFullscreen(){return ie("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ie("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ie("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ie("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ie("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ie("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ie("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ie("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ie("plugin:window|is_closable",{label:this.label})}async isVisible(){return ie("plugin:window|is_visible",{label:this.label})}async title(){return ie("plugin:window|title",{label:this.label})}async theme(){return ie("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ie("plugin:window|is_always_on_top",{label:this.label})}async center(){return ie("plugin:window|center",{label:this.label})}async requestUserAttention(e){let t=null;return e&&(e===hl.Critical?t={type:"Critical"}:t={type:"Informational"}),ie("plugin:window|request_user_attention",{label:this.label,value:t})}async setResizable(e){return ie("plugin:window|set_resizable",{label:this.label,value:e})}async setEnabled(e){return ie("plugin:window|set_enabled",{label:this.label,value:e})}async isEnabled(){return ie("plugin:window|is_enabled",{label:this.label})}async setMaximizable(e){return ie("plugin:window|set_maximizable",{label:this.label,value:e})}async setMinimizable(e){return ie("plugin:window|set_minimizable",{label:this.label,value:e})}async setClosable(e){return ie("plugin:window|set_closable",{label:this.label,value:e})}async setTitle(e){return ie("plugin:window|set_title",{label:this.label,value:e})}async maximize(){return ie("plugin:window|maximize",{label:this.label})}async unmaximize(){return ie("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ie("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ie("plugin:window|minimize",{label:this.label})}async unminimize(){return ie("plugin:window|unminimize",{label:this.label})}async show(){return ie("plugin:window|show",{label:this.label})}async hide(){return ie("plugin:window|hide",{label:this.label})}async close(){return ie("plugin:window|close",{label:this.label})}async destroy(){return ie("plugin:window|destroy",{label:this.label})}async setDecorations(e){return ie("plugin:window|set_decorations",{label:this.label,value:e})}async setShadow(e){return ie("plugin:window|set_shadow",{label:this.label,value:e})}async setEffects(e){return ie("plugin:window|set_effects",{label:this.label,value:e})}async clearEffects(){return ie("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(e){return ie("plugin:window|set_always_on_top",{label:this.label,value:e})}async setAlwaysOnBottom(e){return ie("plugin:window|set_always_on_bottom",{label:this.label,value:e})}async setContentProtected(e){return ie("plugin:window|set_content_protected",{label:this.label,value:e})}async setSize(e){return ie("plugin:window|set_size",{label:this.label,value:e instanceof Qi?e:new Qi(e)})}async setMinSize(e){return ie("plugin:window|set_min_size",{label:this.label,value:e instanceof Qi?e:e?new Qi(e):null})}async setMaxSize(e){return ie("plugin:window|set_max_size",{label:this.label,value:e instanceof Qi?e:e?new Qi(e):null})}async setSizeConstraints(e){function t(i){return i?{Logical:i}:null}return ie("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:t(e?.minWidth),minHeight:t(e?.minHeight),maxWidth:t(e?.maxWidth),maxHeight:t(e?.maxHeight)}})}async setPosition(e){return ie("plugin:window|set_position",{label:this.label,value:e instanceof Vr?e:new Vr(e)})}async setFullscreen(e){return ie("plugin:window|set_fullscreen",{label:this.label,value:e})}async setSimpleFullscreen(e){return ie("plugin:window|set_simple_fullscreen",{label:this.label,value:e})}async setFocus(){return ie("plugin:window|set_focus",{label:this.label})}async setFocusable(e){return ie("plugin:window|set_focusable",{label:this.label,value:e})}async setIcon(e){return ie("plugin:window|set_icon",{label:this.label,value:Ho(e)})}async setSkipTaskbar(e){return ie("plugin:window|set_skip_taskbar",{label:this.label,value:e})}async setCursorGrab(e){return ie("plugin:window|set_cursor_grab",{label:this.label,value:e})}async setCursorVisible(e){return ie("plugin:window|set_cursor_visible",{label:this.label,value:e})}async setCursorIcon(e){return ie("plugin:window|set_cursor_icon",{label:this.label,value:e})}async setBackgroundColor(e){return ie("plugin:window|set_background_color",{color:e})}async setCursorPosition(e){return ie("plugin:window|set_cursor_position",{label:this.label,value:e instanceof Vr?e:new Vr(e)})}async setIgnoreCursorEvents(e){return ie("plugin:window|set_ignore_cursor_events",{label:this.label,value:e})}async startDragging(){return ie("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(e){return ie("plugin:window|start_resize_dragging",{label:this.label,value:e})}async setBadgeCount(e){return ie("plugin:window|set_badge_count",{label:this.label,value:e})}async setBadgeLabel(e){return ie("plugin:window|set_badge_label",{label:this.label,value:e})}async setOverlayIcon(e){return ie("plugin:window|set_overlay_icon",{label:this.label,value:e?Ho(e):void 0})}async setProgressBar(e){return ie("plugin:window|set_progress_bar",{label:this.label,value:e})}async setVisibleOnAllWorkspaces(e){return ie("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:e})}async setTitleBarStyle(e){return ie("plugin:window|set_title_bar_style",{label:this.label,value:e})}async setTheme(e){return ie("plugin:window|set_theme",{label:this.label,value:e})}async onResized(e){return this.listen(cn.WINDOW_RESIZED,t=>{t.payload=new xr(t.payload),e(t)})}async onMoved(e){return this.listen(cn.WINDOW_MOVED,t=>{t.payload=new _i(t.payload),e(t)})}async onCloseRequested(e){return this.listen(cn.WINDOW_CLOSE_REQUESTED,async t=>{const i=new R0(t);await e(i),i.isPreventDefault()||await this.destroy()})}async onDragDropEvent(e){const t=await this.listen(cn.DRAG_ENTER,o=>{e({...o,payload:{type:"enter",paths:o.payload.paths,position:new _i(o.payload.position)}})}),i=await this.listen(cn.DRAG_OVER,o=>{e({...o,payload:{type:"over",position:new _i(o.payload.position)}})}),s=await this.listen(cn.DRAG_DROP,o=>{e({...o,payload:{type:"drop",paths:o.payload.paths,position:new _i(o.payload.position)}})}),r=await this.listen(cn.DRAG_LEAVE,o=>{e({...o,payload:{type:"leave"}})});return()=>{t(),s(),i(),r()}}async onFocusChanged(e){const t=await this.listen(cn.WINDOW_FOCUS,s=>{e({...s,payload:!0})}),i=await this.listen(cn.WINDOW_BLUR,s=>{e({...s,payload:!1})});return()=>{t(),i()}}async onScaleChanged(e){return this.listen(cn.WINDOW_SCALE_FACTOR_CHANGED,e)}async onThemeChanged(e){return this.listen(cn.WINDOW_THEME_CHANGED,e)}}var yd;(function(n){n.Disabled="disabled",n.Throttle="throttle",n.Suspend="suspend"})(yd||(yd={}));var bd;(function(n){n.Default="default",n.FluentOverlay="fluentOverlay"})(bd||(bd={}));var wd;(function(n){n.AppearanceBased="appearanceBased",n.Light="light",n.Dark="dark",n.MediumLight="mediumLight",n.UltraDark="ultraDark",n.Titlebar="titlebar",n.Selection="selection",n.Menu="menu",n.Popover="popover",n.Sidebar="sidebar",n.HeaderView="headerView",n.Sheet="sheet",n.WindowBackground="windowBackground",n.HudWindow="hudWindow",n.FullScreenUI="fullScreenUI",n.Tooltip="tooltip",n.ContentBackground="contentBackground",n.UnderWindowBackground="underWindowBackground",n.UnderPageBackground="underPageBackground",n.Mica="mica",n.Blur="blur",n.Acrylic="acrylic",n.Tabbed="tabbed",n.TabbedDark="tabbedDark",n.TabbedLight="tabbedLight"})(wd||(wd={}));var Md;(function(n){n.FollowsWindowActiveState="followsWindowActiveState",n.Active="active",n.Inactive="inactive"})(Md||(Md={}));const va=120,Sd=120,Ed=70,Cd=70,es=n=>Math.ceil(n/10)*10;function P0(n){const e=structuredClone(n),t=new Map(e.nodes.map(a=>[a.id,a])),i=new Map;for(const a of e.nodes){const l=i.get(a.parentId)??[];l.push(a),i.set(a.parentId,l)}const s=(a,l)=>{let c=t.get(a);const d=new Set;for(;c&&c.parentId!==l;){if(d.has(c.id))throw Error("Layout cannot contain a boundary cycle");d.add(c.id),c=c.parentId?t.get(c.parentId):void 0}return c?.id},r=new Set,o=a=>{const l=i.get(a?.id)??[];if(a){if(r.has(a.id))throw Error("Boundary cycle");r.add(a.id)}for(const _ of l)_.kind==="group"&&o(_);if(!l.length){a&&r.delete(a.id);return}const c=new Map(l.map(_=>[_.id,new Set])),d=new Map(l.map(_=>[_.id,0]));for(const _ of e.edges){const R=s(_.source,a?.id),E=s(_.target,a?.id);R&&E&&R!==E&&!c.get(R)?.has(E)&&(c.get(R)?.add(E),d.set(E,(d.get(E)??0)+1))}const u=new Map(l.map(_=>[_.id,0])),h=l.filter(_=>!d.get(_.id)).map(_=>_.id).sort(),f=new Set;for(let _=0;_<h.length;_++){const R=h[_];if(R){f.add(R);for(const E of c.get(R)??[])u.set(E,Math.max(u.get(E)??0,(u.get(R)??0)+1)),d.set(E,(d.get(E)??0)-1),d.get(E)||h.push(E)}}const g=Math.max(0,...u.values())+1;for(const _ of l)f.has(_.id)||u.set(_.id,g);const v=new Map;for(const _ of l){const R=u.get(_.id)??0,E=v.get(R)??[];E.push(_),v.set(R,E)}let m=0,p=0;for(const[,_]of[...v].sort((R,E)=>R[0]-E[0])){_.sort((y,M)=>y.id.localeCompare(M.id));const R=Math.max(1,Math.ceil(Math.sqrt(_.length))),E=Math.max(..._.map(y=>y.width));let T=0;for(let y=0;y<_.length;y+=R){const M=_.slice(y,y+R),P=Math.max(...M.map(A=>A.depth));for(const[A,G]of M.entries())G.x=es(m+A*(E+va)+E/2),G.z=es(T+P/2);T+=P+Sd}m+=R*(E+va),p=Math.max(p,T-Sd)}const b=m-va,w=p;for(const _ of l)_.x=es(_.x-b/2),_.z=es(_.z-w/2+Cd/2);a&&(a.width=es(b+Ed*2),a.depth=es(w+Ed*2+Cd),r.delete(a.id))};o();for(const a of e.edges)delete a.bend,delete a.sourcePort,delete a.targetPort,delete a.routing;return e}function I0(n){const e=P0(n);return{type:"graph",label:"Automatic layout",nodes:e.nodes.map(t=>({id:t.id,value:t})),edges:e.edges.map(t=>({id:t.id,value:t}))}}const Er={protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"};function wh(n){if(!n||typeof n!="object"||Array.isArray(n))throw Error("Invalid network settings");return n}function Rs(n){const e=n.split(".");if(e.length!==4||e.some(t=>!/^\d{1,3}$/.test(t)||Number(t)>255))throw Error("Enter a valid IPv4 address");return e.reduce((t,i)=>t*256+Number(i)>>>0,0)}function Mh(n){const[e,t,...i]=n.split("/");if(!e||t===void 0||!/^\d{1,2}$/.test(t)||Number(t)>32||i.length)throw Error("Enter a valid IPv4 CIDR");return{address:Rs(e),mask:Number(t)===0?0:4294967295<<32-Number(t)>>>0}}function Sh(n){if(typeof n!="number"||!Number.isInteger(n)||n<1||n>65535)throw Error("Port must be 1–65535");return n}function Cr(n){const e=wh(n);if(!["tcp","udp","icmp"].includes(String(e.protocol))||!["ingress","egress"].includes(String(e.direction))||typeof e.sourceIp!="string")throw Error("Invalid journey traffic");return Rs(e.sourceIp),{protocol:e.protocol,port:Sh(e.port),sourceIp:e.sourceIp,direction:e.direction}}function Eh(n){const e=wh(n);if(!["allow","deny"].includes(String(e.action))||!["any","tcp","udp","icmp"].includes(String(e.protocol))||!["any","ingress","egress"].includes(String(e.direction)))throw Error("Invalid connection rule");const t={action:e.action,protocol:e.protocol,direction:e.direction};if(e.port!==void 0&&(t.port=Sh(e.port)),e.sourceCidr!==void 0){if(typeof e.sourceCidr!="string")throw Error("Invalid source CIDR");Mh(e.sourceCidr),t.sourceCidr=e.sourceCidr}return t}function Ch(n,e){if(!n)return{allowed:!0,reason:"No traffic restriction"};if(n.action==="deny")return{allowed:!1,reason:"Explicit deny"};if(n.protocol!=="any"&&n.protocol!==e.protocol)return{allowed:!1,reason:`Requires ${n.protocol.toUpperCase()}`};if(n.direction!=="any"&&n.direction!==e.direction)return{allowed:!1,reason:`Requires ${n.direction}`};if(n.port!==void 0&&e.protocol!=="icmp"&&n.port!==e.port)return{allowed:!1,reason:`Requires port ${n.port}`};if(n.sourceCidr){const{address:t,mask:i}=Mh(n.sourceCidr);if((Rs(e.sourceIp)&i)!==(t&i))return{allowed:!1,reason:`Source outside ${n.sourceCidr}`}}return{allowed:!0,reason:"Traffic allowed"}}const No=n=>{if(!n||typeof n!="object"||Array.isArray(n))throw Error("Expected network settings object");return n};function Ar(n,e){const[t,i,...s]=n.split("/");if(!t||i===void 0||!/^\d{1,2}$/.test(i)||Number(i)>32||s.length)throw Error("Invalid IPv4 CIDR");const r=Number(i)===0?0:4294967295<<32-Number(i)>>>0;return(Rs(t)&r)===(Rs(e)&r)}function wi(n){if(typeof n!="string"||!n||n.length>4e3)throw Error("Invalid network value");return n}function Ah(n){if(!Array.isArray(n)||n.length>2e3)throw Error("Invalid network list");return n.map(wi)}function Ad(n){if(typeof n!="number"||!Number.isInteger(n)||n<0||n>65535)throw Error("Invalid port range");return n}function Th(n){const e=No(n);if(!["aws","compose","generic"].includes(String(e.model)))throw Error("Invalid network model");const t={model:e.model};for(const i of["ip","publicIp"])e[i]!==void 0&&(t[i]=wi(e[i]),Rs(t[i]));if(e.cidr!==void 0&&(t.cidr=wi(e.cidr),Ar(t.cidr,"0.0.0.0")),e.exposure!==void 0){if(!["public","private","unknown"].includes(String(e.exposure)))throw Error("Invalid public address setting");t.exposure=e.exposure}for(const i of["securityGroupIds","networkIds","incomplete"])e[i]!==void 0&&(t[i]=Ah(e[i]));for(const i of["routeTableId","networkAclId"])e[i]!==void 0&&(t[i]=wi(e[i]));return t}function Lh(n){const e=No(n),t=e.incomplete!==void 0?{incomplete:Ah(e.incomplete)}:{};if(e.kind==="route-table"){if(!Array.isArray(e.routes)||e.routes.length>2e3)throw Error("Invalid routes");return{kind:"route-table",...t,routes:e.routes.map(r=>{const o=No(r),a=wi(o.destination);return Ar(a,"0.0.0.0"),{destination:a,target:wi(o.target)}})}}if(e.kind!=="security-group"&&e.kind!=="network-acl")throw Error("Invalid resource policy");if(!Array.isArray(e.rules)||e.rules.length>2e3)throw Error("Invalid firewall rules");const i=new Set,s=e.rules.map(r=>{const o=No(r);if(!["ingress","egress"].includes(String(o.direction))||!["allow","deny"].includes(String(o.action))||!["any","tcp","udp","icmp"].includes(String(o.protocol)))throw Error("Invalid firewall rule");if(e.kind==="security-group"&&o.action!=="allow")throw Error("Security groups only support allow rules");const a={action:o.action,direction:o.direction,protocol:o.protocol};if(o.fromPort!==void 0&&(a.fromPort=Ad(o.fromPort)),o.toPort!==void 0&&(a.toPort=Ad(o.toPort)),a.fromPort===void 0!=(a.toPort===void 0)||(a.fromPort??0)>(a.toPort??65535))throw Error("Invalid port range");if(o.cidr!==void 0&&(a.cidr=wi(o.cidr),Ar(a.cidr,"0.0.0.0")),o.peerGroupId!==void 0&&(a.peerGroupId=wi(o.peerGroupId)),a.cidr&&a.peerGroupId)throw Error("Choose CIDR or security-group peer");if(e.kind==="network-acl"){if(a.peerGroupId||typeof o.priority!="number"||!Number.isInteger(o.priority)||o.priority<1||o.priority>32766)throw Error("ACL rules need a priority from 1–32766 and a CIDR peer");a.priority=o.priority;const l=`${a.direction}:${a.priority}`;if(i.has(l))throw Error("Duplicate ACL priority");i.add(l)}return a});return{kind:e.kind,rules:s,...t}}const jn=n=>({status:"allowed",reason:n}),Qt=n=>({status:"denied",reason:n}),At=n=>({status:"unknown",reason:n});function hi(n,e,t){let i=e;const s=new Set;for(;i&&!s.has(i.id);){if(i.boundary===t)return i;s.add(i.id),i=i.parentId?n.get(i.parentId):void 0}}function Td(n,e,t,i,s,r){return n.direction!==e||n.protocol!=="any"&&n.protocol!==t.protocol||t.protocol!=="icmp"&&n.protocol!=="any"&&n.fromPort!==void 0&&(i<n.fromPort||i>(n.toPort??n.fromPort))?!1:n.peerGroupId?r.includes(n.peerGroupId):n.cidr?n.cidr.endsWith("/0")?!0:s?Ar(n.cidr,s):void 0:!0}const Rh=n=>new Map(n.nodes.map(e=>[e.id,e]));function Wo(n,e,t,i,s=49152,r=Rh(n)){const o=r.get(e),a=r.get(t),l=[];let c=[e,t];const d=T=>({...T,path:c,checks:l});if(!o||!a)return d(At("Source or destination no longer exists"));if(e===t)return d(jn("Same resource"));if(!o.network&&!a.network)return d(At("Enable resource networking; diagram arrows alone do not establish reachability"));const u=hi(r,o,"vpc"),h=hi(r,a,"vpc"),f=hi(r,o,"subnet"),g=hi(r,a,"subnet"),v=o.network?.ip??(u?void 0:i.sourceIp),m=a.network?.ip??a.network?.publicIp,p=(T,y,M,P,A=!0)=>{const G=T.network?.securityGroupIds;if(!G?.length)return T.network?.model==="aws"&&!T.policy&&!T.serviceId?.startsWith("component.")?At(`${T.label}: security groups are not modeled`):jn(`${T.label}: no security-group restriction modeled`);let N=!1;for(const V of G){const O=r.get(V),F=O?.policy;if(O?.network?.incomplete?.length){N=!0;continue}if(!F||F.kind!=="security-group"){N=!0;continue}N||=!!F.incomplete?.length;for(const z of F.rules){const J=Td(z,y,i,i.port,P,A?M.network?.securityGroupIds??[]:[]);if(J)return jn(`${T.label}: ${y} allowed by ${r.get(V)?.label}`);J===void 0&&(N=!0)}}return N?At(`${T.label}: incomplete ${y} security-group rules or peer address`):Qt(`${T.label}: no ${y} security-group allow rule`)};if(o.network?.model==="compose"&&a.network?.model==="compose"){if(o.network.incomplete?.length||a.network.incomplete?.length)return d(At("Compose network attachments are incomplete"));const T=(o.network.networkIds??[]).filter(M=>a.network?.networkIds?.includes(M));if(!T.length)return d(Qt("Containers have no shared network"));c=[e,T[0]??"",t];const y=[p(o,"egress",a,m),p(a,"ingress",o,v)];return l.push("Containers share a Compose network",...y.map(M=>`${M.status}: ${M.reason}`)),d(y.find(M=>M.status==="denied")??y.find(M=>M.status==="unknown")??jn("Shared Compose network and attached policies allow traffic"))}const b=(T,y,M,P,A)=>{if(!T?.network?.networkAclId)return jn(`${T?.label??"External network"}: no ACL restriction modeled (default allow assumed)`);const G=r.get(T.network.networkAclId),N=G?.policy;if(!N||N.kind!=="network-acl"||N.incomplete?.length||G?.network?.incomplete?.length)return At(`${T.label}: incomplete network ACL`);for(const V of[...N.rules].sort((O,F)=>(O.priority??0)-(F.priority??0))){const O=Td(V,y,i,P,M,[]);if(O===void 0)return At(`${T.label}: ACL peer address unknown`);if(O)return(V.action==="allow"?jn:Qt)(`${T.label}: ${A?"return ":""}${y} ACL rule ${V.priority} ${V.action}`)}return Qt(`${T.label}: ${A?"return ":""}${y} ACL implicit deny`)},w=(T,y,M,P=new Set)=>{if(P.has(T.id))return{check:Qt("Routing loop"),path:[T.id]};P.add(T.id);const A=hi(r,T,"vpc"),G=hi(r,T,"subnet");if(!y)return{check:At("Destination IPv4 address is unknown"),path:[T.id,M.id]};if(A&&!A.network?.cidr)return{check:At("VPC CIDR is missing; the implicit local route cannot be resolved"),path:[T.id,M.id]};const N=G?.network?.routeTableId?r.get(G.network.routeTableId):void 0;if(N?.policy?.incomplete?.length||N?.network?.incomplete?.length)return{check:At(`Incomplete routes in ${N.label}`),path:[T.id,M.id]};const V=N?.policy?.kind==="route-table"?[...N.policy.routes]:[];A?.network?.cidr&&V.push({destination:A.network.cidr,target:"local"});const O=V.filter(z=>Ar(z.destination,y)).sort((z,J)=>Number(J.destination.split("/")[1])-Number(z.destination.split("/")[1]))[0];if(!O)return{check:A?Qt(`${G?.label??A.label}: no route to ${y}`):At("External routing is not modeled"),path:[T.id,M.id]};if(l.push(`${G?.label??T.label}: longest-prefix route ${O.destination} → ${O.target}`),O.target==="blackhole")return{check:Qt("Route is a blackhole"),path:[T.id,M.id]};if(O.target==="local")return A?.id!==hi(r,M,"vpc")?.id?{check:Qt("Local route does not reach the destination VPC"),path:[T.id,M.id]}:{check:jn("Local VPC route"),path:[T.id,M.id]};const F=r.get(O.target);if(!F)return{check:At("Route target missing"),path:[T.id,M.id]};if(F.network?.incomplete?.length)return{check:At(`Incomplete gateway settings: ${F.label}`),path:[T.id,F.id,M.id]};if(F.serviceId==="component.internet-gateway")return hi(r,F,"vpc")?.id!==A?.id?{check:Qt("Internet gateway is not attached to this VPC"),path:[T.id,F.id,M.id]}:{check:jn("Internet gateway route"),path:[T.id,F.id,M.id]};if(F.serviceId==="component.nat-gateway"){const z=w(F,y,M,P);return z.check.status!=="allowed"?{check:z.check,path:[T.id,...z.path]}:z.path.some(J=>r.get(J)?.serviceId==="component.internet-gateway")?{check:z.check,path:[T.id,...z.path]}:{check:Qt("NAT has no onward internet-gateway route"),path:[T.id,...z.path]}}return{check:At(`Unsupported route target: ${F.label}`),path:[T.id,F.id,M.id]}},_=[];if([o,a,f,g,u,h].some(T=>T?.network?.incomplete?.length)&&_.push(At("Resource network contains unresolved infrastructure values")),(o.network?.model==="aws"&&!u||a.network?.model==="aws"&&!h)&&_.push(At("An AWS endpoint has no modeled VPC/subnet placement")),!u&&h){a.network?.exposure==="private"?_.push(Qt("Destination has no public address; internet ingress cannot use NAT")):a.network?.exposure!=="public"&&!a.network?.publicIp&&_.push(At("Destination public-address assignment is unknown"));const T=w(a,v,o);c=[e,...T.path.slice(1,-1).reverse(),t],_.push(T.check),T.check.status==="allowed"&&!T.path.some(y=>r.get(y)?.serviceId==="component.internet-gateway")&&_.push(Qt("Public ingress needs an internet-gateway return route")),T.path.some(y=>r.get(y)?.serviceId==="component.nat-gateway")&&_.push(Qt("NAT does not allow unsolicited public ingress"))}else if(u){const T=w(o,m,a);c=T.path,_.push(T.check),h&&u.id===h.id&&_.push(w(a,v,o).check),h&&u.id!==h.id&&_.push(At("Cross-VPC routing is not supported")),!h&&c.some(y=>r.get(y)?.serviceId==="component.internet-gateway")&&!c.some(y=>r.get(y)?.serviceId==="component.nat-gateway")&&o.network?.exposure!=="public"&&!o.network?.publicIp&&_.push((o.network?.exposure==="private"?Qt:At)("Internet-gateway egress requires a public address or NAT"))}else _.push(At("No supported network topology between these resources"));const R=c.find(T=>r.get(T)?.serviceId==="component.nat-gateway"),E=R?r.get(R)?.network?.publicIp:v;return _.push(p(o,"egress",a,m),p(a,"ingress",o,E,!R)),(!f||f.id!==g?.id)&&_.push(b(f,"egress",m,i.port,!1),b(g,"ingress",E,i.port,!1),b(g,"egress",E,s,!0),b(f,"ingress",m,s,!0)),l.push(..._.map(T=>`${T.status}: ${T.reason}`)),d(_.find(T=>T.status==="denied")??_.find(T=>T.status==="unknown")??jn("Routes, security groups, and request/return ACL rules allow this modeled flow"))}const fl=[{id:"public-https",name:"Public HTTPS",traffic:{protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"}},{id:"office-ssh",name:"SSH from office",traffic:{protocol:"tcp",port:22,sourceIp:"198.51.100.10",direction:"ingress"}},{id:"worker-egress",name:"Worker egress",traffic:{protocol:"tcp",port:443,sourceIp:"10.0.10.10",direction:"egress"}}],D0={duration:12,dither:!0};function Ph(n){if(!Number.isInteger(n.duration)||n.duration<2||n.duration>120||typeof n.dither!="boolean")throw Error("GIF duration must be a whole number from 2 to 120 seconds");return{...n}}class U0{constructor(e,t,i,s=750,r=5e3){this.snapshot=e,this.write=t,this.onError=i,this.delay=s,this.maxWait=r}snapshot;write;onError;delay;maxWait;debounce;deadline;pending=!1;queue=Promise.resolve();schedule(){this.pending=!0,clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.flush().catch(()=>{})},this.delay),this.deadline??=setTimeout(()=>{this.flush().catch(()=>{})},this.maxWait)}flush(){if(clearTimeout(this.debounce),clearTimeout(this.deadline),this.debounce=void 0,this.deadline=void 0,this.pending){this.pending=!1;const e=this.snapshot();this.queue=this.queue.then(()=>this.write(e)).catch(i=>{throw this.pending=!0,this.onError(i),i});const t=this.queue;return this.queue=t.catch(()=>{}),t}return this.queue}dispose(){clearTimeout(this.debounce),clearTimeout(this.deadline)}}function Rc(){return xn()}async function N0(){if(xn())return ie("open_document");const[n]=await Ih(".json,application/json",!1);if(!n)return null;if(n.size>5e7)throw Error("Diagram files are limited to 50 MB");return{name:n.name,content:await n.text()}}async function F0(n,e,t="diagram"){if(xn())return ie("save_document",{content:n,handle:e??null});const i=`${X0(t)}.sforge.json`;return Xs(new Blob([n],{type:"application/json"}),i),{name:i}}async function k0(n){return xn()?ie("export_png",{bytes:Array.from(new Uint8Array(await n.arrayBuffer()))}):Xs(n,"diagram.png")}async function O0(n){return xn()?ie("export_svg",{content:n}):Xs(new Blob([n],{type:"image/svg+xml"}),"diagram.svg")}const pl="solar-forge-diagrams:recovery";async function z0(){if(xn())return ie("read_recovery");try{return localStorage.getItem(pl)}catch{return null}}async function ml(n){if(xn()){await ie("write_recovery",{content:n});return}n===null?localStorage.removeItem(pl):localStorage.setItem(pl,n)}async function B0(n){if(xn()){await ie("copy_png",{bytes:Array.from(new Uint8Array(await n.arrayBuffer()))});return}await navigator.clipboard.write([new ClipboardItem({"image/png":n})])}async function G0(n){return xn()?ie("export_gif",await n.arrayBuffer()):Xs(n,"journey.gif")}async function V0(){if(xn())return ie("open_infrastructure");const n=await Ih(".tf,.json,.yaml,.yml",!0);if(n.length>256||n.reduce((e,t)=>e+t.size,0)>5e7)throw Error("Choose up to 256 files totaling at most 50 MB");return Promise.all(n.map(async e=>({name:e.name,content:await e.text()})))}function Ih(n,e){return new Promise(t=>{const i=document.createElement("input");i.type="file",i.multiple=e,i.accept=n,i.onchange=()=>{t(Array.from(i.files??[])),i.remove()},i.oncancel=()=>{t([]),i.remove()},i.hidden=!0,document.body.append(i),i.click()})}async function H0(n,e){return xn()?ie("export_video",await n.arrayBuffer()):Xs(n,`journey.${e}`)}async function W0(n,e){return xn()?ie("export_text",{content:n,format:e}):Xs(new Blob([n],{type:"text/plain;charset=utf-8"}),`diagram.${e}`)}function X0(n){return n.trim().replace(/[\\/:*?"<>|\p{Cc}]+/gu,"-").replace(/\s+/g," ").slice(0,100)||"diagram"}function Xs(n,e){const t=URL.createObjectURL(n),i=document.createElement("a");return i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),!0}function Dh(n,e,t){return new Promise(i=>{const s=document.createElement("dialog");s.className="decision-dialog";const r=document.createElement("h2");r.textContent=n,r.id="dialog-title";const o=document.createElement("p");o.textContent=e;const a=document.createElement("div");a.className="dialog-actions";for(const l of t){const c=document.createElement("button");c.textContent=l,c.onclick=()=>s.close(l),a.append(c)}s.append(r,o,a),s.setAttribute("aria-labelledby",r.id),s.addEventListener("close",()=>{i(s.returnValue||null),s.remove()},{once:!0}),document.body.append(s),s.showModal()})}function $0(n,e){return new Promise(t=>{const i=document.createElement("dialog");i.className="decision-dialog";const s=document.createElement("h2");s.textContent=n;const r=document.createElement("form");r.method="dialog";const o=document.createElement("input");o.value=e,o.maxLength=1e3,o.setAttribute("aria-label",n);const a=document.createElement("button");a.textContent="Cancel",a.type="button",a.onclick=()=>i.close();const l=document.createElement("button");l.textContent="Rename",l.type="submit";const c=document.createElement("div");c.className="dialog-actions",c.append(a,l),r.append(o,c),r.onsubmit=()=>{i.returnValue=o.value},i.append(s,r),document.body.append(i),i.onclose=()=>{t(i.returnValue||null),i.remove()},i.showModal(),o.focus(),o.select()})}function q0(n){const e=document.createElement("dialog");e.className="decision-dialog command-palette",e.setAttribute("aria-label","Command palette");const t=document.createElement("input");t.type="search",t.placeholder="Search commands or components…",t.setAttribute("aria-label","Search commands");const i=document.createElement("div");i.className="command-results";const s=()=>{i.replaceChildren();for(const r of n.filter(o=>o.label.toLowerCase().includes(t.value.toLowerCase())).slice(0,30)){const o=document.createElement("button");o.textContent=r.label,o.onclick=()=>{e.close(),r.run()},i.append(o)}};t.oninput=s,e.onkeydown=r=>{const o=[...i.querySelectorAll("button")],a=document.activeElement instanceof HTMLButtonElement?o.indexOf(document.activeElement):-1;(r.key==="ArrowDown"||r.key==="ArrowUp")&&(r.preventDefault(),o[(a+(r.key==="ArrowDown"?1:o.length-1)+o.length)%o.length]?.focus()),r.key==="Enter"&&document.activeElement===t&&(r.preventDefault(),o[0]?.click())},e.append(t,i),e.onclose=()=>e.remove(),document.body.append(e),s(),e.showModal(),t.focus()}function Z0(n,e,t){return t?.aborted?Promise.reject(new DOMException("Import cancelled","AbortError")):new Promise((i,s)=>{const r=new Worker(new URL("/diagrams/assets/import-worker-CcX8tlWA.js",import.meta.url),{type:"module"});function o(){r.terminate(),t?.removeEventListener("abort",a)}function a(){o(),s(new DOMException("Import cancelled","AbortError"))}t?.addEventListener("abort",a,{once:!0}),r.onmessage=l=>{o(),l.data.result?i(l.data.result):s(Error(l.data.error??"Import worker returned no diagram"))},r.onerror=l=>{o(),s(Error(l.message||"Infrastructure import worker failed"))},r.onmessageerror=()=>{o(),s(Error("Could not read infrastructure import result"))};try{r.postMessage({files:n,requested:e})}catch(l){o(),s(l)}})}function Y0(n){const e=document.createElement("section");e.className="workspace-dialog",e.hidden=!0,e.setAttribute("aria-label","Import infrastructure"),e.innerHTML='<div class="dialog-heading"><h2>Import infrastructure</h2><button data-close aria-label="Close import">×</button></div><p>Choose .tf files together, or a Terraform JSON, CloudFormation, or Compose file. Files stay on this computer; code is never executed.</p><label>Format<select data-format><option value="auto">Detect format</option><option value="terraform">Terraform HCL / show JSON</option><option value="cloudformation">CloudFormation YAML / JSON</option><option value="compose">Docker Compose</option></select></label><button data-files>Choose files…</button><p data-names>No files selected</p><label>Or paste infrastructure code<textarea data-source rows="9" spellcheck="false" placeholder="Paste code here; use Format to select Terraform for pasted HCL"></textarea></label><button data-preview>Preview import</button><div data-summary role="status"></div><ul data-warnings></ul><div class="dialog-actions"><button data-apply disabled>Import diagram</button></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),i=b=>{const w=e.querySelector(b);if(!w)throw Error("Missing importer control");return w},s=i("[data-source]"),r=i("[data-format]"),o=i("[data-apply]"),a=i("[data-summary]"),l=i("[data-warnings]");let c=[],d,u=!1,h,f=0;const g=()=>{f++,h?.abort(),h=void 0,i("[data-preview]").disabled=!1,d=void 0,o.disabled=!0,a.textContent="",l.replaceChildren()},v=b=>{a.textContent=String(b),n.notify(String(b))};s.oninput=()=>{c=[],i("[data-names]").textContent="Pasted code",g()},r.onchange=g;const m=async()=>{if(u)return;g();const b=new AbortController;h=b;const w=f;i("[data-preview]").disabled=!0,a.textContent="Reading infrastructure…";try{const _=s.value.trim()?[{name:(r.value==="terraform"||r.value==="auto"&&/^\s*(resource|provider|variable|terraform|locals)\b/m.test(s.value))&&!s.value.trimStart().startsWith("{")?"pasted.tf":"pasted.yaml",content:s.value}]:c,R=await Z0(_,r.value,b.signal);if(b.signal.aborted||w!==f)return;d=R,a.textContent=`${d.format} · ${d.document.nodes.filter(E=>E.kind!=="group").length} resources · ${d.document.nodes.filter(E=>E.kind==="group").length} boundaries · ${d.warnings.length} warnings. Import replaces the current board with an automatically laid out diagram; Undo restores it.`;for(const E of d.warnings.slice(0,200)){const T=document.createElement("li");T.textContent=E,l.append(T)}if(d.warnings.length>200){const E=document.createElement("li");E.textContent="Additional warnings omitted from this preview.",l.append(E)}o.disabled=!1}catch(_){!b.signal.aborted&&w===f&&v(_)}finally{h===b&&(h=void 0,i("[data-preview]").disabled=!1)}};i("[data-files]").onclick=()=>{u||(async()=>{try{const b=await V0();if(!b.length)return;c=b,s.value="",i("[data-names]").textContent=c.map(w=>w.name).join(", "),await m()}catch(b){v(b)}})()},i("[data-preview]").onclick=()=>{m()},o.onclick=()=>{!d||u||(u=!0,n.apply(d.document).then(b=>{b&&(e.hidden=!0,t&&(t.inert=!1))}).catch(v).finally(()=>{u=!1}))};const p=()=>{u||(g(),e.hidden=!0,t&&(t.inert=!1))};return i("[data-close]").onclick=p,e.addEventListener("keydown",b=>{b.stopPropagation(),b.key==="Escape"&&(b.stopPropagation(),p())}),{open:()=>{e.hidden=!1,t&&(t.inert=!0),r.focus()},close:p}}const j0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%230d9488'%20fill='%230d9488'%3e%3cpath%20d='m32%205%2025%2014v28L32%2061%207%2047V19Zm0%206L13%2022l19%2011%2019-11ZM12%2027v17l17%2010V37Zm23%2010v17l17-10V27Z'/%3e%3c/svg%3e",J0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23326ce5'%20fill='%23326ce5'%3e%3crect%20x='5'%20y='16'%20width='54'%20height='34'%20rx='3'/%3e%3cpath%20d='M14%2023v20m9-20v20m9-20v20m9-20v20m9-20v20'%20stroke='white'%20stroke-width='3'/%3e%3c/svg%3e",K0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%232496ed'%20fill='%232496ed'%3e%3cpath%20d='M8%2030h45c-2%2017-13%2023-25%2019C17%2047%2011%2040%208%2030Z'/%3e%3cpath%20d='M52%2030c8%200%2010-6%208-10-5%200-7%203-8%2010Z'/%3e%3cpath%20d='M14%2020h8v8h-8zm10%200h8v8h-8zm10%200h8v8h-8zm-10-10h8v8h-8zm10%200h8v8h-8zm0-10h8v8h-8z'/%3e%3c/svg%3e",Q0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d97706'%20fill='%23d97706'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",ep="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23f05032'%20fill='%23f05032'%3e%3cpath%20d='m32%202%2030%2030-30%2030L2%2032Z'/%3e%3cpath%20d='m20%2020%2023%2023M28%2028v20'%20stroke='white'%20stroke-width='4'/%3e%3cg%20fill='white'%3e%3ccircle%20cx='20'%20cy='20'%20r='4'/%3e%3ccircle%20cx='43'%20cy='43'%20r='4'/%3e%3ccircle%20cx='28'%20cy='48'%20r='4'/%3e%3c/g%3e%3c/svg%3e",tp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%2324292f'%20fill='%2324292f'%3e%3crect%20x='1'%20y='1'%20width='62'%20height='62'%20rx='8'%20fill='%23f6f8fa'/%3e%3ccircle%20cx='15'%20cy='17'%20r='10'/%3e%3crect%20x='37'%20y='7'%20width='23'%20height='20'%20rx='4'/%3e%3crect%20x='37'%20y='37'%20width='23'%20height='20'%20rx='4'/%3e%3cpath%20d='M25%2017h12M15%2027v20h22'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='m44%2017%204%204%207-8m-11%2034%204%204%207-8'%20stroke='white'%20fill='none'%20stroke-width='3'/%3e%3c/svg%3e",np="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%238c4fff'%20fill='%238c4fff'%3e%3cpath%20d='M8%2057V7h48v50H44V20H20v37Z'/%3e%3cpath%20d='M3%2038h58m-9-9%209%209-9%209'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",ip="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23c084fc'%20fill='%23c084fc'%3e%3crect%20x='4'%20y='8'%20width='56'%20height='48'%20rx='5'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M12%2023h38m-8-8%208%208-8%208M52%2042H14m8-8-8%208%208%208'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",sp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d9534f'%20fill='%23d9534f'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",rp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%237c3aed'%20fill='%237c3aed'%3e%3cpath%20d='M12%2032h40'%20stroke='currentColor'%20stroke-width='5'/%3e%3crect%20x='2'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3crect%20x='42'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3cpath%20d='m26%2014%2014%2018-14%2018'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",op="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23059669'%20fill='%23059669'%3e%3crect%20x='5'%20y='7'%20width='54'%20height='50'%20rx='4'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M5%2023h54M5%2039h54M25%207v50'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",ap="/diagrams/assets/deployment-moDm8Qno.svg",lp="/diagrams/assets/ingress-LIwjGSQ0.svg",cp="/diagrams/assets/namespace-DnbgsEPO.svg",dp="/diagrams/assets/pod-W3FHC1RA.svg",up="/diagrams/assets/service-lXPCicat.svg",hp="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-API-Gateway_64'%3e%3cg%20id='Icon-Architecture-BG/64/Networking-Content-Delivery'%3e%3crect%20id='Rectangle'%20width='80'%20height='80'%20fill='%238C4FFF'/%3e%3c/g%3e%3cg%20id='Icon-Service/64/Amazon-API-Gateway_64'%3e%3cpath%20id='Amazon-API-Gateway_Icon_64_Squid'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M34.065%2055.6324H37V53.6153H34.065V55.6324ZM39%2055.6324H42V53.6153H39V55.6324ZM27%2014.6295L14%2021.0821V61.1934L27%2065.5896V14.6295ZM29%2027.3934V53.6153H32V55.6324H29V66.9915C29%2067.3162%2028.845%2067.6208%2028.584%2067.8104C28.412%2067.9355%2028.207%2068%2028%2068C27.894%2068%2027.786%2067.9829%2027.682%2067.9476L12.682%2062.8756C12.274%2062.7375%2012%2062.3522%2012%2061.9196V20.4537C12%2020.0705%2012.217%2019.7185%2012.559%2019.5491L27.559%2012.1041C27.868%2011.9498%2028.235%2011.9679%2028.528%2012.1525C28.821%2012.3361%2029%2012.6598%2029%2013.0087V25.3764H32V27.3934H29ZM44%2055.6324H47V53.6153H44V55.6324ZM44.065%2027.3934H47V25.3764H44.065V27.3934ZM39.065%2027.3934H42V25.3764H39.065V27.3934ZM34.065%2027.3934H37V25.3764H34.065V27.3934ZM66%2021.0821L53%2014.6295V65.5896L66%2061.1934V21.0821ZM68%2061.9196C68%2062.3522%2067.726%2062.7375%2067.318%2062.8756L52.318%2067.9476C52.214%2067.9829%2052.106%2068%2052%2068C51.793%2068%2051.588%2067.9355%2051.416%2067.8104C51.155%2067.6208%2051%2067.3162%2051%2066.9915V55.6324H49.065V53.6153H51V27.3934H49.065V25.3764H51V13.0087C51%2012.6598%2051.179%2012.3361%2051.472%2012.1525C51.765%2011.9679%2052.131%2011.9498%2052.441%2012.1041L67.441%2019.5491C67.783%2019.7185%2068%2020.0705%2068%2020.4537V61.9196ZM42.934%2033.8067L41.066%2033.0826L36.066%2046.1935L37.934%2046.9176L42.934%2033.8067ZM49.707%2040.2089C50.098%2039.8145%2050.098%2039.1761%2049.707%2038.7828L45.707%2034.7487L44.293%2036.1747L47.586%2039.4958L44.293%2042.8169L45.707%2044.243L49.707%2040.2089ZM34.293%2044.243L30.293%2040.2089C29.902%2039.8145%2029.902%2039.1761%2030.293%2038.7828L34.293%2034.7487L35.707%2036.1747L32.414%2039.4958L35.707%2042.8169L34.293%2044.243Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",fp="/diagrams/assets/amazon-athena-C_UvYoqL.svg",pp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-CloudFront_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-CloudFront_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Networking-Content-Delivery'%20fill='%238C4FFF'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M55.122,52.123%20C55.122,50.469%2053.776,49.123%2052.122,49.123%20C50.468,49.123%2049.122,50.469%2049.122,52.123%20C49.122,53.777%2050.468,55.123%2052.122,55.123%20C53.776,55.123%2055.122,53.777%2055.122,52.123%20L55.122,52.123%20Z%20M57.122,52.123%20C57.122,54.88%2054.879,57.123%2052.122,57.123%20C49.365,57.123%2047.122,54.88%2047.122,52.123%20C47.122,49.366%2049.365,47.123%2052.122,47.123%20C54.879,47.123%2057.122,49.366%2057.122,52.123%20L57.122,52.123%20Z%20M30.392,37.692%20C30.392,36.038%2029.046,34.692%2027.392,34.692%20C25.737,34.692%2024.392,36.038%2024.392,37.692%20C24.392,39.346%2025.737,40.692%2027.392,40.692%20C29.046,40.692%2030.392,39.346%2030.392,37.692%20L30.392,37.692%20Z%20M32.392,37.692%20C32.392,40.449%2030.148,42.692%2027.392,42.692%20C24.635,42.692%2022.392,40.449%2022.392,37.692%20C22.392,34.935%2024.635,32.692%2027.392,32.692%20C30.148,32.692%2032.392,34.935%2032.392,37.692%20L32.392,37.692%20Z%20M39.73,22.007%20C39.73,23.661%2041.076,25.007%2042.73,25.007%20C44.385,25.007%2045.73,23.661%2045.73,22.007%20C45.73,20.352%2044.385,19.007%2042.73,19.007%20C41.076,19.007%2039.73,20.352%2039.73,22.007%20L39.73,22.007%20Z%20M37.73,22.007%20C37.73,19.25%2039.974,17.007%2042.73,17.007%20C45.487,17.007%2047.73,19.25%2047.73,22.007%20C47.73,24.764%2045.487,27.007%2042.73,27.007%20C39.974,27.007%2037.73,24.764%2037.73,22.007%20L37.73,22.007%20Z%20M66,40%20C66,30.727%2061.028,22.148%2053.012,17.509%20C51.575,17.799%2050.185,18.196%2048.451,18.823%20L47.771,16.942%20C48.676,16.616%2049.486,16.352%2050.266,16.126%20C47.046,14.737%2043.548,14%2040,14%20C38.311,14%2036.649,14.175%2035.025,14.492%20C36.201,15.18%2037.244,15.866%2038.257,16.634%20L37.048,18.227%20C35.62,17.145%2034.14,16.228%2032.197,15.21%20C22.378,18.298%2015.306,26.958%2014.183,37.128%20C16.242,36.711%2018.219,36.484%2020.414,36.43%20L20.463,38.429%20C18.163,38.486%2016.187,38.73%2014.027,39.205%20C14.018,39.47%2014,39.738%2014,40%20C14,48.658%2018.283,56.636%2025.327,61.447%20C24.074,57.716%2023.45,54.19%2023.45,50.746%20C23.45,48.782%2023.788,47.169%2024.145,45.462%20C24.228,45.067%2024.312,44.665%2024.394,44.248%20L26.357,44.635%20C26.273,45.059%2026.187,45.47%2026.103,45.873%20C25.753,47.545%2025.45,48.989%2025.45,50.746%20C25.45,54.654%2026.308,58.695%2028.054,63.083%20C31.773,65.014%2035.789,66%2040,66%20C42.756,66%2045.446,65.56%2048.012,64.714%20C49.019,62.727%2049.766,60.852%2050.39,58.699%20L52.311,59.256%20C51.855,60.826%2051.332,62.253%2050.709,63.677%20C52.323,62.951%2053.85,62.053%2055.283,61.005%20C54.938,60.159%2054.568,59.318%2054.159,58.499%20L55.948,57.604%20C56.296,58.3%2056.615,59.012%2056.92,59.728%20C62.705,54.775%2066,47.66%2066,40%20L66,40%20Z%20M68,40%20C68,48.727%2064.034,56.799%2057.121,62.149%20C55.409,63.479%2053.552,64.583%2051.589,65.472%20C50.756,65.85%2049.908,66.2%2049.036,66.494%20C46.156,67.493%2043.113,68%2040,68%20C35.4,68%2030.832,66.854%2026.788,64.686%20C17.667,59.806%2012,50.347%2012,40%20C12,39.314%2012.018,38.792%2012.059,38.309%20C12.74,26.625%2020.756,16.512%2032.001,13.166%20C34.562,12.393%2037.255,12%2040,12%20C44.808,12%2049.539,13.238%2053.684,15.579%20C62.513,20.525%2068,29.884%2068,40%20L68,40%20Z%20M37.314,25.463%20L36,23.956%20C33.758,25.912%2032.014,27.989%2029.977,31.126%20L31.655,32.215%20C33.583,29.244%2035.223,27.288%2037.314,25.463%20L37.314,25.463%20Z%20M34.275,38.427%20L33.625,40.318%20C38.218,41.895%2042.225,44.411%2046.234,48.236%20L47.615,46.789%20C43.389,42.758%2039.15,40.101%2034.275,38.427%20L34.275,38.427%20Z%20M47.646,26.668%20C51.398,32.39%2053.511,38.671%2053.925,45.338%20L51.929,45.462%20C51.536,39.146%2049.533,33.192%2045.975,27.765%20L47.646,26.668%20Z'%20id='Amazon-CloudFront_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",mp="/diagrams/assets/amazon-cognito-DRJzxcbJ.svg",gp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Kinesis-Data-Firehose_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Kinesis-Data-Firehose_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Analytics'%20fill='%238C4FFF'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cg%20id='Icon-Service/64/Amazon-Kinesis-Data-Firehose'%20transform='translate(14.000000,%2015.000000)'%20fill='%23FFFFFF'%3e%3cpath%20d='M52.625,29.072%20L51.883,30.928%20C48.685,29.649%2044.784,29%2040.288,29%20L40.288,27%20C45.04,27%2049.19,27.697%2052.625,29.072%20L52.625,29.072%20Z%20M51.938,27.949%20C49.032,26.984%2043.152,26%2040.288,26%20L40.288,24%20C43.184,24%2049.039,23.017%2051.892,22.053%20L52.532,23.947%20C51.438,24.318%2049.96,24.684%2048.372,25.004%20C49.979,25.323%2051.476,25.688%2052.569,26.051%20L51.938,27.949%20Z%20M52.611,20.934%20C49.03,22.305%2044.884,23%2040.288,23%20L40.288,21%20C44.639,21%2048.544,20.349%2051.896,19.066%20L52.611,20.934%20Z%20M36.255,28.219%20L26.255,30.719%20L26.255,19.281%20L36.255,21.781%20L36.255,28.219%20Z%20M24.255,33%20L21.255,33%20L21.255,17%20L24.255,17%20L24.255,18%20L24.255,32%20L24.255,33%20Z%20M37.497,20.03%20L26.255,17.219%20L26.255,16%20C26.255,15.448%2025.808,15%2025.255,15%20L20.255,15%20C19.702,15%2019.255,15.448%2019.255,16%20L19.255,16.93%20C4.053,15.821%202.255,9.619%202.255,5%20L2.255,0%20L0.255,0%20L0.255,5%20C0.255,13.469%206.485,18.023%2019.255,18.927%20L19.255,19.963%20C11.492,19.652%205.918,18.427%201.786,16.127%20L0.813,17.874%20C5.242,20.341%2011.126,21.644%2019.255,21.964%20L19.255,23.978%20C13.607,23.844%205.956,23.47%200.51,22.033%20L0,23.967%20C1.633,24.398%203.449,24.734%205.342,25%20C3.449,25.267%201.633,25.603%200,26.033%20L0.51,27.967%20C5.957,26.53%2013.608,26.156%2019.255,26.023%20L19.255,28.037%20C11.171,28.353%205.29,29.656%200.816,32.125%20L1.783,33.876%20C5.958,31.572%2011.545,30.356%2019.255,30.047%20L19.255,31.068%20C2.76,32.282%200.255,40.902%200.255,46%20L0.253,46.392%20C0.236,49.616%200.246,49.974%200.261,50.107%20L2.252,49.922%20C2.241,49.74%202.242,48.556%202.253,46.403%20L2.255,46%20C2.255,38.38%208.138,33.933%2019.255,33.08%20L19.255,34%20C19.255,34.552%2019.702,35%2020.255,35%20L25.255,35%20C25.808,35%2026.255,34.552%2026.255,34%20L26.255,32.781%20L37.497,29.97%20C37.942,29.859%2038.255,29.459%2038.255,29%20L38.255,21%20C38.255,20.541%2037.942,20.141%2037.497,20.03%20L37.497,20.03%20Z'%20id='Amazon-Kinesis-Data-Firehose_Icon_64_Squid'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",vp="/diagrams/assets/amazon-dynamodb-sqOqO05b.svg",xp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-EC2_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-EC2_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M27,53%20L52,53%20L52,28%20L27,28%20L27,53%20Z%20M54,28%20L58,28%20L58,30%20L54,30%20L54,34%20L58,34%20L58,36%20L54,36%20L54,39%20L58,39%20L58,41%20L54,41%20L54,45%20L58,45%20L58,47%20L54,47%20L54,51%20L58,51%20L58,53%20L54,53%20L54,53.136%20C54,54.164%2053.164,55%2052.136,55%20L52,55%20L52,59%20L50,59%20L50,55%20L46,55%20L46,59%20L44,59%20L44,55%20L41,55%20L41,59%20L39,59%20L39,55%20L35,55%20L35,59%20L33,59%20L33,55%20L29,55%20L29,59%20L27,59%20L27,55%20L26.864,55%20C25.836,55%2025,54.164%2025,53.136%20L25,53%20L22,53%20L22,51%20L25,51%20L25,47%20L22,47%20L22,45%20L25,45%20L25,41%20L22,41%20L22,39%20L25,39%20L25,36%20L22,36%20L22,34%20L25,34%20L25,30%20L22,30%20L22,28%20L25,28%20L25,27.864%20C25,26.836%2025.836,26%2026.864,26%20L27,26%20L27,22%20L29,22%20L29,26%20L33,26%20L33,22%20L35,22%20L35,26%20L39,26%20L39,22%20L41,22%20L41,26%20L44,26%20L44,22%20L46,22%20L46,26%20L50,26%20L50,22%20L52,22%20L52,26%20L52.136,26%20C53.164,26%2054,26.836%2054,27.864%20L54,28%20Z%20M41,65.876%20C41,65.944%2040.944,66%2040.876,66%20L14.124,66%20C14.056,66%2014,65.944%2014,65.876%20L14,39.124%20C14,39.056%2014.056,39%2014.124,39%20L20,39%20L20,37%20L14.124,37%20C12.953,37%2012,37.953%2012,39.124%20L12,65.876%20C12,67.047%2012.953,68%2014.124,68%20L40.876,68%20C42.047,68%2043,67.047%2043,65.876%20L43,61%20L41,61%20L41,65.876%20Z%20M68,14.124%20L68,40.876%20C68,42.047%2067.047,43%2065.876,43%20L60,43%20L60,41%20L65.876,41%20C65.944,41%2066,40.944%2066,40.876%20L66,14.124%20C66,14.056%2065.944,14%2065.876,14%20L39.124,14%20C39.056,14%2039,14.056%2039,14.124%20L39,20%20L37,20%20L37,14.124%20C37,12.953%2037.953,12%2039.124,12%20L65.876,12%20C67.047,12%2068,12.953%2068,14.124%20L68,14.124%20Z'%20id='Amazon-EC2_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",_p="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Elastic-Container-Registry_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Elastic-Container-Registry_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M38.7880741,37.5776945%20C38.2933845,37.8655125%2037.9855777,38.4000317%2037.9855777,38.973662%20L37.9855777,66.7195186%20L16.9987459,54.9841655%20L16.9987459,27.7076428%20L40.5569643,14.0588515%20L61.484833,24.4283226%20L38.7880741,37.5776945%20Z%20M63.9203049,24.4022485%20C63.9203049,23.8276153%2063.6134974,23.2920933%2063.0598448,22.9751927%20L41.3464689,12.2146099%20C40.8507799,11.9287976%2040.2351662,11.9277948%2039.7404766,12.2156128%20L15.8024965,26.0840283%20C15.3078069,26.3718463%2015,26.9063655%2015,27.4799958%20L15,55.2158239%20C15,55.7894542%2015.3078069,56.3239734%2015.8174871,56.6198142%20L37.573836,68.7853901%20C37.8216805,68.9287976%2038.1005056,69%2038.3783312,69%20C38.6551575,69%2038.9339826,68.9287976%2039.1808277,68.7853901%20C39.6765167,68.4985749%2039.9843236,67.9640557%2039.9843236,67.3894226%20L39.9843236,39.201309%20L63.1178084,25.798216%20C63.6134974,25.5114008%2063.9203049,24.9768817%2063.9203049,24.4022485%20L63.9203049,24.4022485%20Z%20M63.9692742,55.0473451%20L44.9811883,66.6613533%20L44.9811883,56.2617967%20L54.881976,49.872638%20L54.9499334,49.424364%20C54.9679221,49.3070305%2054.9749177,49.3070305%2054.9749177,48.7664942%20L55.0058983,36.3602344%20L64.0002547,31.1484218%20L63.9692742,55.0473451%20Z%20M65.1965042,29.0715191%20C64.6998158,28.7816953%2064.0842021,28.7826982%2063.5885131,29.0715191%20L54.0135209,34.6182835%20C53.713709,34.7817481%2053.0081517,35.1658398%2053.0081517,35.9580914%20L52.9761718,48.7173546%20L43.8508975,54.606091%20C43.3062392,54.9310145%2042.9824424,55.4454766%2042.9824424,55.9890214%20L42.9824424,67.3081917%20C42.9824424,67.8748021%2043.2872511,68.3912699%2043.7979307,68.6871107%20C44.0647633,68.8405468%2044.361577,68.9187691%2044.6573914,68.9187691%20C44.948209,68.9187691%2045.2390265,68.8445582%2045.5018616,68.692125%20L65.1675223,56.6639396%20C65.6622119,56.3761216%2065.9680201,55.8416024%2065.9680201,55.2709807%20L66,30.4664837%20C66,29.8928534%2065.6921931,29.3583342%2065.1965042,29.0715191%20L65.1965042,29.0715191%20Z'%20id='Amazon-Elastic-Container-Registry_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",yp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Elastic-Container-Service_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Elastic-Container-Service_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M64,48.2340095%20L56,43.4330117%20L56,32.0000169%20C56,31.6440171%2055.812,31.3150172%2055.504,31.1360173%20L44,24.4260204%20L44,14.7520248%20L64,26.5710194%20L64,48.2340095%20Z%20M65.509,25.13902%20L43.509,12.139026%20C43.199,11.9560261%2042.818,11.9540261%2042.504,12.131026%20C42.193,12.3090259%2042,12.6410257%2042,13.0000256%20L42,25.0000201%20C42,25.3550199%2042.189,25.6840198%2042.496,25.8640197%20L54,32.5740166%20L54,44.0000114%20C54,44.3510113%2054.185,44.6770111%2054.486,44.857011%20L64.486,50.8570083%20C64.644,50.9520082%2064.822,51%2065,51%20C65.17,51%2065.34,50.9570082%2065.493,50.8700083%20C65.807,50.6930084%2066,50.3600085%2066,50%20L66,26.0000196%20C66,25.6460198%2065.814,25.31902%2065.509,25.13902%20L65.509,25.13902%20Z%20M40.445,66.863001%20L17,54.3990067%20L17,26.5710194%20L37,14.7520248%20L37,24.4510204%20L26.463,31.1560173%20C26.175,31.3400172%2026,31.6580171%2026,32.0000169%20L26,49.0000091%20C26,49.373009%2026.208,49.7150088%2026.538,49.8870087%20L39.991,56.8870055%20C40.28,57.0370055%2040.624,57.0380055%2040.912,56.8880055%20L53.964,50.1440086%20L61.996,54.9640064%20L40.445,66.863001%20Z%20M64.515,54.1420068%20L54.515,48.1420095%20C54.217,47.9640096%2053.849,47.9520096%2053.541,48.1120095%20L40.455,54.8730065%20L28,48.3930094%20L28,32.5490167%20L38.537,25.8440197%20C38.825,25.6600198%2039,25.3420199%2039,25.0000201%20L39,13.0000256%20C39,12.6410257%2038.808,12.3090259%2038.496,12.131026%20C38.184,11.9540261%2037.802,11.9560261%2037.491,12.139026%20L15.491,25.13902%20C15.187,25.31902%2015,25.6460198%2015,26.0000196%20L15,55%20C15,55.3690062%2015.204,55.7090061%2015.53,55.883006%20L39.984,68.8830001%20C40.131,68.961%2040.292,69%2040.453,69%20C40.62,69%2040.786,68.958%2040.937,68.8750001%20L64.484,55.875006%20C64.797,55.7020061%2064.993,55.3750062%2065.0001416,55.0180064%20C65.006,54.6600066%2064.821,54.3260067%2064.515,54.1420068%20L64.515,54.1420068%20Z'%20id='Amazon-Elastic-Container-Service_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",bp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Elastic-Kubernetes-Service_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Elastic-Kubernetes-Service_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M46.842,32.1990168%20L40.013,40.1200132%20L47.441,48.7840092%20L44.669,48.7840092%20L38,41.0000169%20L38,49.0000169%20L36,49.0000169%20L36,32.0000169%20L38,32.0000169%20L38,39.0000169%20L44.181,32.1990168%20L46.842,32.1990168%20Z%20M64,48.2340095%20L56,43.4330117%20L56,32.0000169%20C56,31.6440171%2055.812,31.3150172%2055.504,31.1360173%20L44,24.4260204%20L44,14.7520248%20L64,26.5710194%20L64,48.2340095%20Z%20M65.509,25.13902%20L43.509,12.139026%20C43.199,11.9560261%2042.818,11.9540261%2042.504,12.131026%20C42.193,12.3090259%2042,12.6410257%2042,13.0000256%20L42,25.0000201%20C42,25.3550199%2042.189,25.6840198%2042.496,25.8640197%20L54,32.5740166%20L54,44.0000114%20C54,44.3510113%2054.185,44.6770111%2054.486,44.857011%20L64.486,50.8570083%20C64.644,50.9520082%2064.822,51%2065,51%20C65.17,51%2065.34,50.9570082%2065.493,50.8700083%20C65.807,50.6930084%2066,50.3600085%2066,50%20L66,26.0000196%20C66,25.6460198%2065.814,25.31902%2065.509,25.13902%20L65.509,25.13902%20Z%20M40.445,66.863001%20L17,54.3990067%20L17,26.5710194%20L37,14.7520248%20L37,24.4510204%20L26.463,31.1560173%20C26.175,31.3400172%2026,31.6580171%2026,32.0000169%20L26,49.0000091%20C26,49.373009%2026.208,49.7150088%2026.538,49.8870087%20L39.991,56.8870055%20C40.28,57.0370055%2040.624,57.0380055%2040.912,56.8880055%20L53.964,50.1440086%20L61.996,54.9640064%20L40.445,66.863001%20Z%20M64.515,54.1420068%20L54.515,48.1420095%20C54.217,47.9640096%2053.849,47.9520096%2053.541,48.1120095%20L40.455,54.8730065%20L28,48.3930094%20L28,32.5490167%20L38.537,25.8440197%20C38.825,25.6600198%2039,25.3420199%2039,25.0000201%20L39,13.0000256%20C39,12.6410257%2038.808,12.3090259%2038.496,12.131026%20C38.184,11.9540261%2037.802,11.9560261%2037.491,12.139026%20L15.491,25.13902%20C15.187,25.31902%2015,25.6460198%2015,26.0000196%20L15,55%20C15,55.3690062%2015.204,55.7090061%2015.53,55.883006%20L39.984,68.8830001%20C40.131,68.961%2040.292,69%2040.453,69%20C40.62,69%2040.786,68.958%2040.937,68.8750001%20L64.484,55.875006%20C64.797,55.7020061%2064.993,55.3750062%2065.0001416,55.0180064%20C65.006,54.6600066%2064.821,54.3260067%2064.515,54.1420068%20L64.515,54.1420068%20Z'%20id='Amazon-Elastic-Kubernetes-Service_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",wp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-EventBridge_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-EventBridge_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Application-Integration'%20fill='%23E7157B'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M53.656744,66%20C51.5137882,66%2049.7695913,64.247%2049.7695913,62.091%20C49.7695913,59.935%2051.5137882,58.182%2053.656744,58.182%20C55.7996998,58.182%2057.5438968,59.935%2057.5438968,62.091%20C57.5438968,64.247%2055.7996998,66%2053.656744,66%20L53.656744,66%20Z%20M45.1326526,49%20L34.7977386,49%20L29.6297845,40%20L34.7977386,31%20L45.1326526,31%20L50.2996124,40%20L45.1326526,49%20Z%20M27.6210741,21.818%20C25.4781184,21.818%2023.7339214,20.065%2023.7339214,17.909%20C23.7339214,15.753%2025.4781184,14%2027.6210741,14%20C29.7650244,14%2031.5092213,15.753%2031.5092213,17.909%20C31.5092213,20.065%2029.7650244,21.818%2027.6210741,21.818%20L27.6210741,21.818%20Z%20M53.656744,56.182%20C52.918891,56.182%2052.214848,56.325%2051.5635088,56.576%20L47.3402451,49.41%20L47.117497,49.543%20L52.3093171,40.5%20C52.4863222,40.19%2052.4863222,39.81%2052.3093171,39.5%20L46.5675877,29.5%20C46.3895881,29.19%2046.0614325,29%2045.7064278,29%20L35.2581509,29%20L35.2989218,28.976%20L31.4266852,22.404%20C32.691576,21.32%2033.4980434,19.708%2033.4980434,17.909%20C33.4980434,14.651%2030.8618597,12%2027.6210741,12%20C24.381283,12%2021.7450993,14.651%2021.7450993,17.909%20C21.7450993,21.167%2024.381283,23.818%2027.6210741,23.818%20C28.3599216,23.818%2029.0639646,23.675%2029.7153038,23.424%20L33.3299879,29.557%20L27.6200797,39.5%20C27.4430746,39.81%2027.4430746,40.19%2027.6200797,40.5%20L33.3628035,50.5%20C33.5408031,50.81%2033.8689587,51%2034.2239635,51%20L45.7064278,51%20C45.7889639,51%2045.8695112,50.987%2045.9470752,50.968%20L49.8521274,57.596%20C48.5862421,58.68%2047.7807692,60.292%2047.7807692,62.091%20C47.7807692,65.349%2050.4159585,68%2053.656744,68%20C56.8975296,68%2059.5327189,65.349%2059.5327189,62.091%20C59.5327189,58.833%2056.8975296,56.182%2053.656744,56.182%20L53.656744,56.182%20Z%20M59.5844283,32.104%20C57.4414725,32.104%2055.6982699,30.351%2055.6982699,28.195%20C55.6982699,26.039%2057.4414725,24.286%2059.5844283,24.286%20C61.7273841,24.286%2063.471581,26.039%2063.471581,28.195%20C63.471581,30.351%2061.7273841,32.104%2059.5844283,32.104%20L59.5844283,32.104%20Z%20M66.8665003,39.5%20L63.091716,32.925%20C64.5266511,31.846%2065.4604031,30.13%2065.4604031,28.195%20C65.4604031,24.937%2062.8252138,22.286%2059.5844283,22.286%20C58.7600615,22.286%2057.9744768,22.459%2057.2614841,22.77%20L54.1837819,17.409%20C54.0067767,17.1%2053.6776267,16.909%2053.3226219,16.909%20L40.9949082,16.909%20L40.9949082,18.909%20L52.7488468,18.909%20L55.5958456,23.869%20C54.4383511,24.949%2053.7094478,26.486%2053.7094478,28.195%20C53.7094478,31.453%2056.3446371,34.104%2059.5844283,34.104%20C60.1880358,34.104%2060.771755,34.011%2061.3206699,33.84%20L64.85779,40%20L59.8917013,48.648%20L61.6140212,49.648%20L66.8665003,40.5%20C67.0444999,40.19%2067.0444999,39.81%2066.8665003,39.5%20L66.8665003,39.5%20Z%20M21.229,55.247%20C19.0850498,55.247%2017.3408528,53.493%2017.3408528,51.338%20C17.3408528,49.182%2019.0850498,47.429%2021.229,47.429%20C23.3719558,47.429%2025.1161527,49.182%2025.1161527,51.338%20C25.1161527,53.493%2023.3719558,55.247%2021.229,55.247%20L21.229,55.247%20Z%20M24.4767464,56.258%20C26.0588544,55.198%2027.1049748,53.389%2027.1049748,51.338%20C27.1049748,48.08%2024.4687911,45.429%2021.229,45.429%20C20.2902759,45.429%2019.4062445,45.657%2018.618671,46.052%20L15.1432044,40%20L20.9018387,29.971%20L19.1785244,28.971%20L13.1334997,39.5%20C12.9555001,39.81%2012.9555001,40.19%2013.1334997,40.5%20L17.0047419,47.24%20C15.9834817,48.304%2015.3520307,49.747%2015.3520307,51.338%20C15.3520307,54.596%2017.9882144,57.247%2021.229,57.247%20C21.7172558,57.247%2022.189601,57.18%2022.6440469,57.066%20L25.8162181,62.591%20C25.9942177,62.9%2026.3223733,63.091%2026.6773781,63.091%20L39.0060862,63.091%20L39.0060862,61.091%20L27.2511532,61.091%20L24.4767464,56.258%20Z'%20id='Amazon-EventBridge_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Mp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Kinesis-Data-Streams_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Kinesis-Data-Streams_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Analytics'%20fill='%238C4FFF'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cg%20id='Icon-Service/64/Amazon-Kinesis-Data-Streams'%20transform='translate(13.000000,%2012.000000)'%20fill='%23FFFFFF'%3e%3cpath%20d='M36,39%20L42,39%20L42,37%20L36,37%20L36,39%20Z%20M40,50%20L43,50%20L43,47%20L40,47%20L40,50%20Z%20M45,46%20L45,51%20C45,51.552%2044.553,52%2044,52%20L39,52%20C38.448,52%2038,51.552%2038,51%20L38,46%20C38,45.448%2038.448,45%2039,45%20L44,45%20C44.553,45%2045,45.448%2045,46%20L45,46%20Z%20M39,43%20L42,43%20L42,41%20L39,41%20L39,43%20Z%20M46,41%20L49,41%20L49,38%20L46,38%20L46,41%20Z%20M50,43%20L45,43%20C44.448,43%2044,42.552%2044,42%20L44,37%20C44,36.448%2044.448,36%2045,36%20L47.975,36%20C46.305,34.75%2044.242,34%2042,34%20C37.532,34%2033.739,36.947%2032.461,41%20L37,41%20L37,43%20L32.051,43%20C32.018,43.329%2032,43.663%2032,44%20C32,44.337%2032.018,44.671%2032.051,45%20L36,45%20L36,47%20L32.461,47%20C32.684,47.705%2032.989,48.372%2033.354,49%20L36,49%20L36,51%20L34.871,51%20C36.687,52.849%2039.21,54%2042,54%20C44.79,54%2047.314,52.849%2049.129,51%20L47,51%20L47,49%20L50.647,49%20C51.012,48.372%2051.317,47.705%2051.539,47%20L47,47%20L47,45%20L51.95,45%20C51.983,44.671%2052,44.337%2052,44%20C52,42.447%2051.634,40.982%2051,39.67%20L51,42%20C51,42.552%2050.553,43%2050,43%20L50,43%20Z%20M54,44%20C54,50.617%2048.618,56%2042,56%20C35.383,56%2030,50.617%2030,44%20C30,37.383%2035.383,32%2042,32%20C48.618,32%2054,37.383%2054,44%20L54,44%20Z%20M35.127,31.817%20C20.434,33.238%206,36.72%206,50%20L8,50%20C8,43.633%2011,36.878%2032.034,34.185%20C32.946,33.258%2033.989,32.462%2035.127,31.817%20L35.127,31.817%20Z%20M12,56%20L14,56%20C14,50.185%2014.012,43.068%2028.801,39.377%20C29.082,38.577%2029.429,37.81%2029.844,37.084%20C12.014,41.047%2012,49.982%2012,56%20L12,56%20Z%20M2,14%20L0,14%20C0,21.396%2010.039,26.08%2029.893,28%20C10.039,29.92%200,34.604%200,42%20L2,42%20C2,37.145%208.756,29%2054,29%20L54,27%20C8.756,27%202,18.855%202,14%20L2,14%20Z%20M8,6%20L6,6%20C6,15.396%2011.703,25%2054,25%20L54,23%20C13.465,23%208,14.406%208,6%20L8,6%20Z%20M54,19%20L54,21%20C35.663,21%2023.728,18.641%2017.51,13.788%20C12,9.488%2012,4.004%2012,0%20L14,0%20C14,7.566%2014,19%2054,19%20L54,19%20Z'%20id='Amazon-Kinesis-Data-Streams_Icon_64_Squid'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Sp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-RDS_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-RDS_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Database'%20fill='%23C925D1'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M15.414,14%20L24.707,23.293%20L23.293,24.707%20L14,15.414%20L14,23%20L12,23%20L12,13%20C12,12.448%2012.447,12%2013,12%20L23,12%20L23,14%20L15.414,14%20Z%20M68,13%20L68,23%20L66,23%20L66,15.414%20L56.707,24.707%20L55.293,23.293%20L64.586,14%20L57,14%20L57,12%20L67,12%20C67.553,12%2068,12.448%2068,13%20L68,13%20Z%20M66,57%20L68,57%20L68,67%20C68,67.552%2067.553,68%2067,68%20L57,68%20L57,66%20L64.586,66%20L55.293,56.707%20L56.707,55.293%20L66,64.586%20L66,57%20Z%20M65.5,39.213%20C65.5,35.894%2061.668,32.615%2055.25,30.442%20L55.891,28.548%20C63.268,31.045%2067.5,34.932%2067.5,39.213%20C67.5,43.495%2063.268,47.383%2055.89,49.879%20L55.249,47.984%20C61.668,45.812%2065.5,42.534%2065.5,39.213%20L65.5,39.213%20Z%20M14.556,39.213%20C14.556,42.393%2018.143,45.585%2024.152,47.753%20L23.473,49.634%20C16.535,47.131%2012.556,43.333%2012.556,39.213%20C12.556,35.094%2016.535,31.296%2023.473,28.792%20L24.152,30.673%20C18.143,32.842%2014.556,36.034%2014.556,39.213%20L14.556,39.213%20Z%20M24.707,56.707%20L15.414,66%20L23,66%20L23,68%20L13,68%20C12.447,68%2012,67.552%2012,67%20L12,57%20L14,57%20L14,64.586%20L23.293,55.293%20L24.707,56.707%20Z%20M40,31.286%20C32.854,31.286%2029,29.44%2029,28.686%20C29,27.931%2032.854,26.086%2040,26.086%20C47.145,26.086%2051,27.931%2051,28.686%20C51,29.44%2047.145,31.286%2040,31.286%20L40,31.286%20Z%20M40.029,39.031%20C33.187,39.031%2029,37.162%2029,36.145%20L29,31.284%20C31.463,32.643%2035.832,33.286%2040,33.286%20C44.168,33.286%2048.537,32.643%2051,31.284%20L51,36.145%20C51,37.163%2046.835,39.031%2040.029,39.031%20L40.029,39.031%20Z%20M40.029,46.667%20C33.187,46.667%2029,44.798%2029,43.781%20L29,38.862%20C31.431,40.291%2035.742,41.031%2040.029,41.031%20C44.292,41.031%2048.578,40.292%2051,38.867%20L51,43.781%20C51,44.799%2046.835,46.667%2040.029,46.667%20L40.029,46.667%20Z%20M40,53.518%20C32.883,53.518%2029,51.605%2029,50.622%20L29,46.498%20C31.431,47.927%2035.742,48.667%2040.029,48.667%20C44.292,48.667%2048.578,47.929%2051,46.503%20L51,50.622%20C51,51.605%2047.117,53.518%2040,53.518%20L40,53.518%20Z%20M40,24.086%20C33.739,24.086%2027,25.525%2027,28.686%20L27,50.622%20C27,53.836%2033.54,55.518%2040,55.518%20C46.46,55.518%2053,53.836%2053,50.622%20L53,28.686%20C53,25.525%2046.261,24.086%2040,24.086%20L40,24.086%20Z'%20id='Amazon-RDS_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Ep="/diagrams/assets/amazon-route-53-CtNmTlMl.svg",Cp="/diagrams/assets/amazon-sagemaker-ai-model-HzVS4_pO.svg",Ap="/diagrams/assets/amazon-sagemaker-ai-BcCJsqIb.svg",Tp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Simple-Notification-Service_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Simple-Notification-Service_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Application-Integration'%20fill='%23E7157B'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M17,38%20C18.103,38%2019,38.897%2019,40%20C19,41.103%2018.103,42%2017,42%20C15.897,42%2015,41.103%2015,40%20C15,38.897%2015.897,38%2017,38%20L17,38%20Z%20M41,64%20C29.314,64%2019.289,55.466%2017.194,43.98%20C18.965,43.894%2020.427,42.659%2020.857,41%20L27,41%20L27,39%20L20.857,39%20C20.427,37.342%2018.966,36.107%2017.195,36.02%20C19.285,24.71%2029.511,16%2041,16%20C45.313,16%2049.832,17.622%2054.429,20.821%20L55.571,19.179%20C50.633,15.743%2045.73,14%2041,14%20C28.27,14%2016.949,23.865%2015.063,36.521%20C13.839,37.207%2013,38.5%2013,40%20C13,41.5%2013.839,42.793%2015.063,43.478%20C16.97,56.341%2028.056,66%2041,66%20C46.407,66%2051.942,64.157%2056.585,60.811%20L55.415,59.189%20C51.11,62.292%2045.991,64%2041,64%20L41,64%20Z%20M30.101,36.442%20C31.955,36.895%2034.275,37%2036,37%20C37.642,37%2039.823,36.905%2041.629,36.506%20L37.105,45.553%20C37.036,45.691%2037,45.845%2037,46%20L37,50.453%20C36.199,50.964%2034.833,51.812%2034,51.986%20L34,46%20C34,45.868%2033.974,45.737%2033.923,45.615%20L30.101,36.442%20Z%20M36,33%20C40.025,33%2042.174,33.604%2042.841,34%20C42.174,34.396%2040.025,35%2036,35%20C31.975,35%2029.826,34.396%2029.159,34%20C29.826,33.604%2031.975,33%2036,33%20L36,33%20Z%20M33,54%20L34,54%20C34.043,54%2034.086,53.997%2034.128,53.992%20C35.352,53.833%2036.909,52.887%2038.272,52.013%20L38.535,51.845%20C38.824,51.661%2039,51.342%2039,51%20L39,46.236%20L44.559,35.12%20C44.833,34.801%2045,34.434%2045,34%20C45,31.39%2039.361,31%2036,31%20C32.639,31%2027,31.39%2027,34%20C27,34.366%2027.12,34.684%2027.32,34.967%20L32,46.2%20L32,53%20C32,53.552%2032.447,54%2033,54%20L33,54%20Z%20M62,53%20C63.103,53%2064,53.897%2064,55%20C64,56.103%2063.103,57%2062,57%20C60.897,57%2060,56.103%2060,55%20C60,53.897%2060.897,53%2062,53%20L62,53%20Z%20M62,23%20C63.103,23%2064,23.897%2064,25%20C64,26.103%2063.103,27%2062,27%20C60.897,27%2060,26.103%2060,25%20C60,23.897%2060.897,23%2062,23%20L62,23%20Z%20M64,38%20C65.103,38%2066,38.897%2066,40%20C66,41.103%2065.103,42%2064,42%20C62.897,42%2062,41.103%2062,40%20C62,38.897%2062.897,38%2064,38%20L64,38%20Z%20M54,41%20L60.143,41%20C60.589,42.72%2062.142,44%2064,44%20C66.206,44%2068,42.206%2068,40%20C68,37.794%2066.206,36%2064,36%20C62.142,36%2060.589,37.28%2060.143,39%20L54,39%20L54,26%20L58.143,26%20C58.589,27.72%2060.142,29%2062,29%20C64.206,29%2066,27.206%2066,25%20C66,22.794%2064.206,21%2062,21%20C60.142,21%2058.589,22.28%2058.143,24%20L53,24%20C52.447,24%2052,24.448%2052,25%20L52,39%20L45,39%20L45,41%20L52,41%20L52,55%20C52,55.552%2052.447,56%2053,56%20L58.143,56%20C58.589,57.72%2060.142,59%2062,59%20C64.206,59%2066,57.206%2066,55%20C66,52.794%2064.206,51%2062,51%20C60.142,51%2058.589,52.28%2058.143,54%20L54,54%20L54,41%20Z'%20id='AWS-Simple-Notification-Service_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Lp="/diagrams/assets/amazon-simple-queue-service-CJEM0yyd.svg",Rp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Amazon-Simple-Storage-Service_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Amazon-Simple-Storage-Service_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Storage'%20fill='%237AA116'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cg%20id='Icon-Service/64/Amazon-Simple-Storage-Service_64'%20transform='translate(12.999900,%2011.999600)'%20fill='%23FFFFFF'%3e%3cpath%20d='M47.836,30.893%20L48.22,28.189%20C51.761,30.31%2051.807,31.186%2051.8060132,31.21%20C51.8,31.215%2051.196,31.719%2047.836,30.893%20L47.836,30.893%20Z%20M45.893,30.353%20C39.773,28.501%2031.25,24.591%2027.801,22.961%20C27.801,22.947%2027.805,22.934%2027.805,22.92%20C27.805,21.595%2026.727,20.517%2025.401,20.517%20C24.077,20.517%2022.999,21.595%2022.999,22.92%20C22.999,24.245%2024.077,25.323%2025.401,25.323%20C25.983,25.323%2026.511,25.106%2026.928,24.761%20C30.986,26.682%2039.443,30.535%2045.608,32.355%20L43.17,49.561%20C43.163,49.608%2043.16,49.655%2043.16,49.702%20C43.16,51.217%2036.453,54%2025.494,54%20C14.419,54%207.641,51.217%207.641,49.702%20C7.641,49.656%207.638,49.611%207.632,49.566%20L2.538,12.359%20C6.947,15.394%2016.43,17%2025.5,17%20C34.556,17%2044.023,15.4%2048.441,12.374%20L45.893,30.353%20Z%20M2,8.478%20C2.072,7.162%209.634,2%2025.5,2%20C41.364,2%2048.927,7.161%2049,8.478%20L49,8.927%20C48.13,11.878%2038.33,15%2025.5,15%20C12.648,15%202.843,11.868%202,8.913%20L2,8.478%20Z%20M51,8.5%20C51,5.035%2041.066,0%2025.5,0%20C9.934,0%200,5.035%200,8.5%20L0.094,9.254%20L5.642,49.778%20C5.775,54.31%2017.861,56%2025.494,56%20C34.966,56%2045.029,53.822%2045.159,49.781%20L47.555,32.884%20C48.888,33.203%2049.985,33.366%2050.866,33.366%20C52.049,33.366%2052.849,33.077%2053.334,32.499%20C53.732,32.025%2053.884,31.451%2053.77,30.84%20C53.511,29.456%2051.868,27.964%2048.522,26.055%20L50.898,9.293%20L51,8.5%20Z'%20id='Amazon-Simple-Storage-Service-Icon_64_Squid'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Pp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_AWS-Fargate_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_AWS-Fargate_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M52,56.523%20L52,51.677%20L55,50.477%20L55,55.323%20L52,56.523%20Z%20M47,50.477%20L50,51.677%20L50,56.523%20L47,55.323%20L47,50.477%20Z%20M41,63.523%20L41,58.677%20L44,57.477%20L44,62.323%20L41,63.523%20Z%20M36,57.477%20L39,58.677%20L39,63.523%20L36,62.323%20L36,57.477%20Z%20M30,56.523%20L30,51.677%20L33,50.477%20L33,55.323%20L30,56.523%20Z%20M25,50.477%20L28,51.677%20L28,56.523%20L25,55.323%20L25,50.477%20Z%20M29,48.077%20L31.308,49%20L29,49.923%20L26.692,49%20L29,48.077%20Z%20M40,55.077%20L42.308,56%20L40,56.923%20L37.692,56%20L40,55.077%20Z%20M51,48.077%20L53.308,49%20L51,49.923%20L48.692,49%20L51,48.077%20Z%20M56.371,48.071%20L51.371,46.071%20C51.133,45.977%2050.867,45.977%2050.629,46.071%20L45.629,48.071%20C45.249,48.224%2045,48.591%2045,49%20L45,54.923%20L40.371,53.071%20C40.133,52.977%2039.867,52.977%2039.629,53.071%20L35,54.923%20L35,49%20C35,48.591%2034.751,48.224%2034.371,48.071%20L29.371,46.071%20C29.133,45.977%2028.867,45.977%2028.629,46.071%20L23.629,48.071%20C23.249,48.224%2023,48.591%2023,49%20L23,56%20C23,56.409%2023.249,56.776%2023.629,56.929%20L28.629,58.929%20C28.748,58.976%2028.874,59%2029,59%20C29.126,59%2029.252,58.976%2029.371,58.929%20L34,57.077%20L34,63%20C34,63.409%2034.249,63.776%2034.629,63.929%20L39.629,65.929%20C39.748,65.976%2039.874,66%2040,66%20C40.126,66%2040.252,65.976%2040.371,65.929%20L45.371,63.929%20C45.751,63.776%2046,63.409%2046,63%20L46,57.077%20L50.629,58.929%20C50.748,58.976%2050.874,59%2051,59%20C51.126,59%2051.252,58.976%2051.371,58.929%20L56.371,56.929%20C56.751,56.776%2057,56.409%2057,56%20L57,49%20C57,48.591%2056.751,48.224%2056.371,48.071%20L56.371,48.071%20Z%20M65,35.938%20C65,41.783%2052.119,44.938%2040,44.938%20C27.881,44.938%2015,41.783%2015,35.938%20C15,33.147%2018.095,30.69%2023.715,29.019%20L24.285,30.936%20C19.791,32.272%2017,34.189%2017,35.938%20C17,39.249%2026.445,42.938%2040,42.938%20C53.555,42.938%2063,39.249%2063,35.938%20C63,34.189%2060.209,32.272%2055.715,30.936%20L56.285,29.019%20C61.905,30.69%2065,33.147%2065,35.938%20L65,35.938%20Z%20M40,17.071%20L50.214,21%20L40,24.929%20L29.786,21%20L40,17.071%20Z%20M50.58,36.842%20C48.694,37.686%2045.528,38.669%2041,38.801%20L41,26.687%20L52,22.457%20L52,34.648%20C52,35.599%2051.444,36.46%2050.58,36.842%20L50.58,36.842%20Z%20M28,34.648%20L28,22.457%20L39,26.687%20L39,38.801%20C34.472,38.669%2031.306,37.686%2029.416,36.84%20C28.556,36.46%2028,35.599%2028,34.648%20L28,34.648%20Z%20M28.604,38.667%20C30.805,39.652%2034.569,40.827%2040,40.827%20C45.431,40.827%2049.195,39.652%2051.393,38.669%20C52.977,37.968%2054,36.39%2054,34.648%20L54,21%20C54,20.586%2053.745,20.215%2053.359,20.066%20L40.359,15.066%20C40.127,14.978%2039.873,14.978%2039.641,15.066%20L26.641,20.066%20C26.255,20.215%2026,20.586%2026,21%20L26,34.648%20C26,36.39%2027.023,37.968%2028.604,38.667%20L28.604,38.667%20Z'%20id='AWS-Fargate_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Ip="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48px'%20height='48px'%20viewBox='0%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Resource/Analytics/Res_AWS-Glue_Data-Catalog_48%3c/title%3e%3cg%20id='Icon-Resource/Analytics/Res_AWS-Glue_Data-Catalog_48'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M21.306,18.375%20C23.678,18.932%2026.68,19%2028,19%20C29.321,19%2032.323,18.932%2034.695,18.375%20L29,29.764%20L29,33%20L27,33%20L27,29.764%20L21.306,18.375%20Z%20M28,15%20C31.95,15%2034.573,15.561%2035.617,16%20C34.573,16.441%2031.95,17%2028,17%20C24.051,17%2021.429,16.441%2020.384,16%20C21.429,15.561%2024.051,15%2028,15%20L28,15%20Z%20M31,35%20L31,30.236%20L37.642,16.952%20C37.868,16.674%2038,16.359%2038,16%20C38,13.217%2030.346,13%2028,13%20C25.655,13%2018,13.217%2018,16%20C18,16.359%2018.131,16.674%2018.358,16.952%20L25,30.236%20L25,35%20L31,35%20Z%20M4,2%20L9,2%20L9,4%20L6,4%20L6,44%20L9,44%20L9,46%20L4,46%20L4,2%20Z%20M16,42%20L40,42%20L40,40%20L16,40%20L16,42%20Z%20M16,38%20L40,38%20L40,36%20L16,36%20L16,38%20Z%20M16,12%20L40,12%20L40,10%20L16,10%20L16,12%20Z%20M16,8%20L40,8%20L40,6%20L16,6%20L16,8%20Z%20M13,44%20L42,44%20L42,4%20L13,4%20L13,44%20Z%20M11,46%20L44,46%20L44,2%20L11,2%20L11,46%20Z'%20id='Icon-Resource/48/AWS-Glue_Data-Catalog'%20fill='%238C4FFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Dp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='48px'%20height='48px'%20viewBox='0%200%2048%2048'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Resource/Security-Identity-and-Compliance/Res_AWS-Identity-Access-Management_Role_48%3c/title%3e%3cg%20id='Icon-Resource/Security-Identity-and-Compliance/Res_AWS-Identity-Access-Management_Role_48'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cpath%20d='M44.0827,32.581%20C43.9267,32.592%2043.7697,32.604%2043.6207,32.619%20C43.0987,32.662%2042.5527,32.714%2042.0007,32.772%20L41.8327,32.79%20C40.0677,32.972%2038.0697,33.177%2037.1187,33.047%20C36.5247,32.962%2035.4307,32.487%2034.2707,31.984%20C32.3047,31.132%2029.8567,30.07%2027.6437,29.9%20C24.5977,29.666%2019.3347,30.24%2015.9407,31.831%20C13.9787,31.743%2012.1587,31.215%2010.7447,30.343%20C10.7387,30.071%2010.7327,29.799%2010.7327,29.694%20C10.7327,25.558%2012.6707,21.679%2016.0527,19.044%20C18.3497,17.701%2020.9967,16.992%2023.7127,16.992%20C29.8337,16.992%2035.2657,20.609%2037.3847,25.934%20L36.5717,25.934%20C35.7577,25.934%2035.0757,26.51%2034.9087,27.274%20C34.7707,27.222%2034.6447,27.175%2034.4967,27.118%20C32.4677,26.335%2029.6837,25.264%2026.4657,25.455%20C21.7607,25.731%2019.4457,26.015%2017.6227,26.535%20L18.1717,28.459%20C19.8397,27.982%2022.0397,27.719%2026.5827,27.451%20C29.3667,27.293%2031.9197,28.269%2033.7767,28.984%20C34.1717,29.137%2034.5287,29.27%2034.8677,29.391%20L34.8677,29.596%20C34.8677,30.535%2035.6327,31.3%2036.5717,31.3%20L40.2187,31.3%20C41.1557,31.3%2041.9197,30.538%2041.9227,29.602%20L42.2767,29.57%20C42.8697,29.517%2043.4147,29.464%2043.8717,29.419%20L44.0827,29.398%20L44.0827,32.581%20Z%20M9.7987,34.249%20C7.1487,34.612%205.0567,34.288%204.1907,33.753%20C4.7157,33.382%205.9007,32.863%206.7347,32.499%20C7.4567,32.184%208.1877,31.851%208.8947,31.495%20C10.0487,32.374%2011.4777,33.033%2013.0597,33.426%20C12.1447,33.794%2011.0117,34.084%209.7987,34.249%20L9.7987,34.249%20Z%20M36.8677,29.3%20L39.9227,29.3%20L39.9227,27.934%20L36.8677,27.934%20L36.8677,29.3%20Z%20M26.5857,13%20C34.9537,13%2041.9817,19.295%2043.0167,27.492%20C42.7287,27.52%2042.4247,27.549%2042.1037,27.578%20L41.9187,27.594%20C41.8947,26.676%2041.1437,25.934%2040.2187,25.934%20L39.5077,25.934%20C37.3067,19.457%2030.9317,14.992%2023.7127,14.992%20C21.0387,14.992%2018.4227,15.604%2016.0717,16.767%20C16.0887,16.753%2016.1027,16.738%2016.1177,16.725%20C19.0587,14.323%2022.7757,13%2026.5857,13%20L26.5857,13%20Z%20M45.5267,27.794%20C45.3817,27.663%2045.2107,27.568%2045.0287,27.496%20C43.9827,18.185%2036.0497,11%2026.5857,11%20C22.3167,11%2018.1497,12.483%2014.8537,15.175%20C10.5007,18.719%208.0047,23.97%208.0047,29.581%20C8.0047,29.622%208.0077,29.663%208.0077,29.704%20C7.3407,30.039%206.6357,30.359%205.9347,30.666%20C3.7987,31.6%202.2557,32.274%202.0257,33.492%20C1.9677,33.801%201.9577,34.406%202.5457,34.994%20C3.5827,36.031%205.5727,36.403%207.5947,36.403%20C8.4367,36.403%209.2827,36.339%2010.0687,36.231%20C11.4077,36.049%2013.9077,35.558%2015.6047,34.316%20C18.2827,32.375%2024.3377,31.649%2027.4907,31.894%20C29.3697,32.039%2031.6457,33.026%2033.4757,33.819%20C34.8717,34.426%2035.9757,34.904%2036.8417,35.027%20C38.0327,35.19%2039.9777,34.99%2042.0367,34.779%20L42.2097,34.762%20C42.7477,34.704%2043.2777,34.654%2043.8017,34.611%20C44.0167,34.59%2044.2297,34.575%2044.5137,34.555%20C45.3937,34.493%2046.0827,33.755%2046.0827,32.875%20L46.0827,29.046%20C46.0827,28.568%2045.8807,28.112%2045.5267,27.794%20L45.5267,27.794%20Z'%20id='AWS-Identity-and-Access-Management_Role_Resource-Icon_light-bg'%20fill='%23DD344C'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Up="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_AWS-Identity-and-Access-Management_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_AWS-Identity-and-Access-Management_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Security-Identity-Compliance'%20fill='%23DD344C'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M14,59%20L66,59%20L66,21%20L14,21%20L14,59%20Z%20M68,20%20L68,60%20C68,60.552%2067.553,61%2067,61%20L13,61%20C12.447,61%2012,60.552%2012,60%20L12,20%20C12,19.448%2012.447,19%2013,19%20L67,19%20C67.553,19%2068,19.448%2068,20%20L68,20%20Z%20M44,48%20L59,48%20L59,46%20L44,46%20L44,48%20Z%20M57,42%20L62,42%20L62,40%20L57,40%20L57,42%20Z%20M44,42%20L52,42%20L52,40%20L44,40%20L44,42%20Z%20M29,46%20C29,45.449%2028.552,45%2028,45%20C27.448,45%2027,45.449%2027,46%20C27,46.551%2027.448,47%2028,47%20C28.552,47%2029,46.551%2029,46%20L29,46%20Z%20M31,46%20C31,47.302%2030.161,48.401%2029,48.816%20L29,51%20L27,51%20L27,48.815%20C25.839,48.401%2025,47.302%2025,46%20C25,44.346%2026.346,43%2028,43%20C29.654,43%2031,44.346%2031,46%20L31,46%20Z%20M19,53.993%20L36.994,54%20L36.996,50%20L33,50%20L33,48%20L36.996,48%20L36.998,45%20L33,45%20L33,43%20L36.999,43%20L37,40.007%20L19.006,40%20L19,53.993%20Z%20M22,38.001%20L34,38.006%20L34,31%20C34.001,28.697%2031.197,26.677%2028,26.675%20L27.996,26.675%20C24.804,26.675%2022.004,28.696%2022.002,31%20L22,38.001%20Z%20M17,54.992%20L17.006,39%20C17.006,38.734%2017.111,38.48%2017.299,38.292%20C17.486,38.105%2017.741,38%2018.006,38%20L20,38.001%20L20.002,31%20C20.004,27.512%2023.59,24.675%2027.996,24.675%20L28,24.675%20C32.412,24.677%2036.001,27.515%2036,31%20L36,38.007%20L38,38.008%20C38.553,38.008%2039,38.456%2039,39.008%20L38.994,55%20C38.994,55.266%2038.889,55.52%2038.701,55.708%20C38.514,55.895%2038.259,56%2037.994,56%20L18,55.992%20C17.447,55.992%2017,55.544%2017,54.992%20L17,54.992%20Z%20M60,36%20L62,36%20L62,34%20L60,34%20L60,36%20Z%20M44,36%20L55,36%20L55,34%20L44,34%20L44,36%20Z'%20id='AWS-Identity-and-Access-Management_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Np="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_AWS-Lambda_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_AWS-Lambda_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Compute'%20fill='%23ED7100'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M28.0075352,66%20L15.5907274,66%20L29.3235885,37.296%20L35.5460249,50.106%20L28.0075352,66%20Z%20M30.2196674,34.553%20C30.0512768,34.208%2029.7004629,33.989%2029.3175745,33.989%20L29.3145676,33.989%20C28.9286723,33.99%2028.5778583,34.211%2028.4124746,34.558%20L13.097944,66.569%20C12.9495999,66.879%2012.9706487,67.243%2013.1550766,67.534%20C13.3374998,67.824%2013.6582439,68%2014.0020416,68%20L28.6420072,68%20C29.0299071,68%2029.3817234,67.777%2029.5481094,67.428%20L37.563706,50.528%20C37.693006,50.254%2037.6920037,49.937%2037.5586944,49.665%20L30.2196674,34.553%20Z%20M64.9953491,66%20L52.6587274,66%20L32.866809,24.57%20C32.7014253,24.222%2032.3486067,24%2031.9617091,24%20L23.8899822,24%20L23.8990031,14%20L39.7197081,14%20L59.4204149,55.429%20C59.5857986,55.777%2059.9386172,56%2060.3255148,56%20L64.9953491,56%20L64.9953491,66%20Z%20M65.9976745,54%20L60.9599868,54%20L41.25928,12.571%20C41.0938963,12.223%2040.7410777,12%2040.3531778,12%20L22.89768,12%20C22.3453987,12%2021.8963569,12.447%2021.8953545,12.999%20L21.884329,24.999%20C21.884329,25.265%2021.9885708,25.519%2022.1780103,25.707%20C22.3654452,25.895%2022.6200358,26%2022.8866544,26%20L31.3292417,26%20L51.1221625,67.43%20C51.2885485,67.778%2051.6393624,68%2052.02626,68%20L65.9976745,68%20C66.5519605,68%2067,67.552%2067,67%20L67,55%20C67,54.448%2066.5519605,54%2065.9976745,54%20L65.9976745,54%20Z'%20id='AWS-Lambda_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",Fp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_AWS-Shield_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_AWS-Shield_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Security-Identity-Compliance'%20fill='%23DD344C'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M54.0106622,49.9995%20L52.0106622,49.9995%20L52.0106622,53.9995%20L48.0106622,53.9995%20L48.0106622,55.9995%20L52.0106622,55.9995%20L52.0106622,59.9995%20L54.0106622,59.9995%20L54.0106622,55.9995%20L58.0106622,55.9995%20L58.0106622,53.9995%20L54.0106622,53.9995%20L54.0106622,49.9995%20Z%20M61.0106622,54.9995%20C61.0106622,50.5885%2057.4216622,46.9995%2053.0106622,46.9995%20C48.5996622,46.9995%2045.0106622,50.5885%2045.0106622,54.9995%20C45.0106622,59.4105%2048.5996622,62.9995%2053.0106622,62.9995%20C57.4216622,62.9995%2061.0106622,59.4105%2061.0106622,54.9995%20L61.0106622,54.9995%20Z%20M63.0106622,54.9995%20C63.0106622,60.5135%2058.5246622,64.9995%2053.0106622,64.9995%20C47.4966622,64.9995%2043.0106622,60.5135%2043.0106622,54.9995%20C43.0106622,49.4855%2047.4966622,44.9995%2053.0106622,44.9995%20C58.5246622,44.9995%2063.0106622,49.4855%2063.0106622,54.9995%20L63.0106622,54.9995%20Z%20M36.0106622,57.9705%20L36.0106622,22.4555%20L25.0106622,26.6865%20L25.0106622,46.9995%20C25.0226622,47.4135%2025.4066622,57.3795%2036.0106622,57.9705%20L36.0106622,57.9705%20Z%20M49.0106622,43.6995%20L49.0106622,26.6865%20L38.0106622,22.4555%20L38.0106622,57.9625%20C39.1706622,57.8855%2040.2476622,57.6805%2041.2466622,57.3635%20C41.3816622,58.0325%2041.5806622,58.6775%2041.8216622,59.3015%20C40.3566622,59.7605%2038.7516622,59.9995%2037.0106622,59.9995%20C23.4516622,59.9995%2023.0136622,47.1515%2023.0106622,47.0215%20L23.0106622,25.9995%20C23.0106622,25.5855%2023.2656622,25.2145%2023.6516622,25.0655%20L36.6516622,20.0655%20C36.8836622,19.9775%2037.1376622,19.9775%2037.3696622,20.0655%20L50.3696622,25.0655%20C50.7556622,25.2145%2051.0106622,25.5855%2051.0106622,25.9995%20L51.0106622,43.1805%20C50.3226622,43.2965%2049.6546622,43.4715%2049.0106622,43.6995%20L49.0106622,43.6995%20Z%20M44.7556622,63.6875%20C45.3136622,64.2165%2045.9206622,64.6925%2046.5726622,65.1085%20C43.8176622,66.3565%2040.6146622,66.9875%2037.0106622,66.9875%20C30.6836622,66.9875%2025.6396622,65.0625%2022.0196622,61.2665%20C15.5886622,54.5235%2015.9906622,44.3805%2016.0116622,43.9525%20L16.0106622,21.9995%20C16.0106622,21.5905%2016.2596622,21.2235%2016.6396622,21.0705%20L36.6396622,13.0705%20C36.8776622,12.9765%2037.1436622,12.9765%2037.3816622,13.0705%20L57.3816622,21.0705%20C57.7616622,21.2235%2058.0106622,21.5905%2058.0106622,21.9995%20L58.0106622,43.9995%20C58.0106622,43.9995%2058.0126622,44.0435%2058.0146622,44.1065%20C57.3746622,43.8115%2056.7056622,43.5745%2056.0116622,43.3945%20L56.0106622,22.6765%20L37.0106622,15.0765%20L18.0106622,22.6765%20L18.0106622,43.9995%20C18.0046622,44.1425%2017.6356622,53.7835%2023.4766622,59.8965%20C26.7036622,63.2745%2031.2576622,64.9875%2037.0106622,64.9875%20C39.8986622,64.9875%2042.4856622,64.5455%2044.7556622,63.6875%20L44.7556622,63.6875%20Z'%20id='AWS-Shield_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",kp="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_AWS-WAF_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_AWS-WAF_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Security-Identity-Compliance'%20fill='%23DD344C'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cg%20id='Icon-Service/64/AWS-WAF_64'%20transform='translate(11.999500,%2012.000000)'%20fill='%23FFFFFF'%3e%3cpath%20d='M2.396,29%20L-3.55271368e-15,29%20L-3.55271368e-15,27%20L2.399,27%20C2.599,21.941%204.239,17.128%207.208,13.025%20L8.829,14.198%20C6.108,17.957%204.598,22.366%204.399,27%20L7,27%20L7,29%20L4.396,29%20C4.582,33.662%206.093,38.097%208.829,41.876%20L7.208,43.049%20C4.224,38.926%202.583,34.085%202.396,29%20L2.396,29%20Z%20M43.01,48.828%20C38.898,51.805%2034.072,53.445%2029,53.639%20L29,56%20L27,56%20L27,53.639%20C21.928,53.445%2017.1,51.805%2012.988,48.828%20L14.16,47.208%20C17.93,49.937%2022.352,51.447%2027,51.639%20L27,49%20L29,49%20L29,51.639%20C33.648,51.446%2038.069,49.936%2041.838,47.208%20L43.01,48.828%20Z%20M12.988,7.246%20C17.1,4.269%2021.928,2.629%2027,2.436%20L27,0%20L29,0%20L29,2.436%20C34.072,2.629%2038.898,4.27%2043.01,7.246%20L41.838,8.866%20C38.069,6.138%2033.648,4.628%2029,4.436%20L29,7%20L27,7%20L27,4.436%20C22.352,4.627%2017.93,6.138%2014.16,8.866%20L12.988,7.246%20Z%20M56,27%20L56,29%20L53.602,29%20C53.416,34.085%2051.774,38.926%2048.791,43.049%20L47.169,41.876%20C49.905,38.097%2051.417,33.662%2051.602,29%20L49,29%20L49,27%20L51.599,27%20C51.4,22.366%2049.89,17.957%2047.169,14.198%20L48.791,13.025%20C51.759,17.128%2053.399,21.941%2053.599,27%20L56,27%20Z%20M42.972,11.65%20L50.812,3.81%20L52.226,5.224%20L44.386,13.064%20L42.972,11.65%20Z%20M13.026,44.424%20L5.186,52.264%20L3.772,50.85%20L11.612,43.01%20L13.026,44.424%20Z%20M15.252,16.667%20L0.412,1.827%20L1.826,0.413%20L16.667,15.253%20L15.252,16.667%20Z%20M40.707,39.293%20L55.586,54.173%20L54.172,55.587%20L39.292,40.708%20L40.707,39.293%20Z%20M19.664,28.735%20C19.739,28.602%2019.82,28.468%2019.905,28.334%20C21.586,25.693%2021.104,22.089%2020.57,19.912%20C22.011,20.859%2023.31,22.816%2023.753,23.638%20C23.942,23.986%2024.309,24.197%2024.712,24.161%20C25.107,24.13%2025.446,23.87%2025.578,23.497%20C27.067,19.267%2026.31,16.087%2025.26,14.026%20C26.533,14.767%2027.519,15.833%2028.172,17.192%20C29.588,20.134%2029.273,24.161%2027.348,27.7%20C24.719,32.536%2025.246,37.606%2025.844,40.334%20C24.343,39.687%2023.007,38.956%2021.854,38.152%20C18.827,36.042%2017.864,31.907%2019.664,28.735%20L19.664,28.735%20Z%20M33.094,28.398%20C33.029,28.807%2033.221,29.214%2033.579,29.422%20C33.936,29.629%2034.386,29.596%2034.709,29.336%20C34.79,29.271%2036.43,27.917%2037.224,24.642%20C38.181,26.034%2039.182,28.843%2037.85,34.003%20C36.532,39.108%2030.28,40.544%2028.049,40.897%20C27.51,38.964%2026.417,33.599%2029.106,28.655%20C31.014,25.145%2031.52,21.176%2030.564,17.901%20C32.374,20.027%2033.901,23.373%2033.094,28.398%20L33.094,28.398%20Z%20M17.922,27.75%20C15.62,31.81%2016.844,37.099%2020.71,39.793%20C22.46,41.013%2024.58,42.072%2027.01,42.941%20C27.121,42.981%2027.234,43%2027.347,43%20C27.368,43%2027.386,42.989%2027.406,42.988%20L27.407,42.997%20C27.832,42.964%2037.826,42.096%2039.786,34.503%20C42.308,24.737%2037.257,21.84%2037.041,21.721%20C36.748,21.561%2036.393,21.557%2036.096,21.712%20C35.799,21.868%2035.6,22.162%2035.566,22.495%20C35.495,23.17%2035.384,23.771%2035.25,24.302%20C34.558,16.634%2028.479,13.514%2027.25,12.959%20C25.99,11.994%2024.458,11.331%2022.682,11.016%20C22.236,10.935%2021.794,11.168%2021.604,11.578%20C21.412,11.987%2021.521,12.477%2021.867,12.768%20C22.017,12.895%2025.133,15.597%2024.244,20.739%20C23.083,19.216%2021.235,17.38%2019.061,17.38%20C18.731,17.38%2018.423,17.543%2018.237,17.815%20C18.05,18.087%2018.01,18.434%2018.128,18.741%20C18.15,18.795%2020.188,24.166%2018.217,27.261%20C18.113,27.425%2018.014,27.589%2017.922,27.75%20L17.922,27.75%20Z'%20id='AWS-WAF_Icon_64_Squid'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Op="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='80px'%20height='80px'%20viewBox='0%200%2080%2080'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ctitle%3eIcon-Architecture/64/Arch_Elastic-Load-Balancing_64%3c/title%3e%3cg%20id='Icon-Architecture/64/Arch_Elastic-Load-Balancing_64'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Icon-Architecture-BG/64/Networking-Content-Delivery'%20fill='%238C4FFF'%3e%3crect%20id='Rectangle'%20x='0'%20y='0'%20width='80'%20height='80'%3e%3c/rect%3e%3c/g%3e%3cpath%20d='M30,53%20C22.832,53%2017,47.168%2017,40%20C17,32.832%2022.832,27%2030,27%20C37.168,27%2043,32.832%2043,40%20C43,47.168%2037.168,53%2030,53%20M60,59%20C60,61.206%2058.206,63%2056,63%20C53.794,63%2052,61.206%2052,59%20C52,56.794%2053.794,55%2056,55%20C58.206,55%2060,56.794%2060,59%20M56,17%20C58.206,17%2060,18.794%2060,21%20C60,23.206%2058.206,25%2056,25%20C53.794,25%2052,23.206%2052,21%20C52,18.794%2053.794,17%2056,17%20M59,36%20C61.206,36%2063,37.794%2063,40%20C63,42.206%2061.206,44%2059,44%20C56.794,44%2055,42.206%2055,40%20C55,37.794%2056.794,36%2059,36%20M44.949,41%20L53.09,41%20C53.568,43.833%2056.033,46%2059,46%20C62.309,46%2065,43.309%2065,40%20C65,36.691%2062.309,34%2059,34%20C56.033,34%2053.568,36.167%2053.09,39%20L44.949,39%20C44.823,37.099%2044.344,35.297%2043.572,33.654%20L52.446,25.823%20C53.442,26.559%2054.669,27%2056,27%20C59.309,27%2062,24.309%2062,21%20C62,17.691%2059.309,15%2056,15%20C52.691,15%2050,17.691%2050,21%20C50,22.256%2050.389,23.421%2051.051,24.386%20L42.581,31.859%20C39.904,27.738%2035.271,25%2030,25%20C21.729,25%2015,31.729%2015,40%20C15,48.271%2021.729,55%2030,55%20C35.271,55%2039.904,52.262%2042.581,48.141%20L51.051,55.614%20C50.389,56.579%2050,57.744%2050,59%20C50,62.309%2052.691,65%2056,65%20C59.309,65%2062,62.309%2062,59%20C62,55.691%2059.309,53%2056,53%20C54.669,53%2053.442,53.441%2052.446,54.177%20L43.572,46.346%20C44.344,44.703%2044.823,42.901%2044.949,41'%20id='Elastic-Load-Balancing_Icon_64_Squid'%20fill='%23FFFFFF'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",zp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%235a6b86'/%3e%3cg%20fill='none'%20stroke='%23fff'%20stroke-width='2.6'%3e%3ccircle%20cx='32'%20cy='32'%20r='17'/%3e%3cellipse%20cx='32'%20cy='32'%20rx='7.5'%20ry='17'/%3e%3cpath%20d='M15%2032h34M18%2023h28M18%2041h28'/%3e%3c/g%3e%3c/svg%3e",Bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%233f8cff'/%3e%3ccircle%20cx='32'%20cy='23'%20r='9'%20fill='none'%20stroke='%23fff'%20stroke-width='3'/%3e%3cpath%20d='M15%2050c0-9.4%207.6-15%2017-15s17%205.6%2017%2015'%20fill='none'%20stroke='%23fff'%20stroke-width='3'%20stroke-linecap='round'/%3e%3c/svg%3e",Gp=[["lambda","Lambda","AWS-Lambda","Compute","function serverless","#ed7100"],["api-gateway","API Gateway","Amazon-API-Gateway","Networking","api rest http gateway","#8c4fff"],["dynamodb","DynamoDB","Amazon-DynamoDB","Database","nosql key value database","#c925d1"],["s3","S3","Amazon-Simple-Storage-Service","Storage","bucket object storage","#7aa116"],["ec2","EC2","Amazon-EC2","Compute","virtual machine instance vm","#ed7100"],["ecs","ECS","Amazon-Elastic-Container-Service","Compute","containers docker fargate","#ed7100"],["eks","EKS","Amazon-Elastic-Kubernetes-Service","Compute","kubernetes k8s containers","#ed7100"],["ecr","ECR","Amazon-Elastic-Container-Registry","Containers","container registry docker images repository elastic","#ed7100"],["fargate","Fargate","AWS-Fargate","Containers","serverless containers tasks ecs eks","#ed7100"],["rds","RDS","Amazon-RDS","Database","relational postgres mysql database","#c925d1"],["cloudfront","CloudFront","Amazon-CloudFront","Networking","cdn edge cache","#8c4fff"],["route53","Route 53","Amazon-Route-53","Networking","dns domain routing","#8c4fff"],["sqs","SQS","Amazon-Simple-Queue-Service","Integration","queue messaging","#e7157b"],["sns","SNS","Amazon-Simple-Notification-Service","Integration","notification pubsub topic","#e7157b"],["eventbridge","EventBridge","Amazon-EventBridge","Integration","events bus rules","#e7157b"],["elb","Load balancer","Elastic-Load-Balancing","Networking","elb alb nlb load balancing","#8c4fff"],["kinesis-data-streams","Kinesis Data Streams","Amazon-Kinesis-Data-Streams","Analytics","stream ingest real time data pipeline","#8c4fff"],["data-firehose","Data Firehose","Amazon-Data-Firehose","Analytics","kinesis firehose delivery streaming data pipeline","#8c4fff"],["glue-data-catalog","Glue Data Catalog","AWS-Glue-Data-Catalog","Analytics","metadata schema tables catalog data pipeline","#8c4fff"],["athena","Athena","Amazon-Athena","Analytics","sql query analytics s3 data pipeline","#8c4fff"],["sagemaker-ai","SageMaker AI","Amazon-SageMaker-AI","Machine Learning","ml machine learning train recommendations data pipeline","#01a88d"],["sagemaker-ai-model","SageMaker AI model","Amazon-SageMaker-AI-Model","Machine Learning","ml model inference real time recommendations","#01a88d"],["iam","IAM","AWS-Identity-and-Access-Management","Security","identity access management users groups permissions policies security","#dd344c"],["iam-role","IAM role","AWS-IAM-Role","Security","identity access role assume sts temporary credentials instance profile","#dd344c"],["cognito","Cognito","Amazon-Cognito","Security","identity user pool sign in sign up login auth authentication oauth oidc saml federation","#dd344c"],["waf","WAF","AWS-WAF","Security","web application firewall acl rules bot sql injection xss rate limit","#dd344c"],["shield","Shield","AWS-Shield","Security","ddos protection mitigation advanced edge","#dd344c"]],Uh={account:"#e7157b",region:"#00a4a6",vpc:"#8c4fff",zone:"#00a4a6",subnet:"#7aa116"},Vp=new Set(["#f6bd72","#b9a0e4","#82b7df","#a8cf88","#e5a0c0","#a568ce","#ed983c","#548bc4","#cb6186","#79a950","#d9a15f"]),Hp={"network-acl":"#d9534f",docker:"#2496ed",container:"#326ce5","container-image":"#0d9488","github-actions":"#24292f",git:"#f05032",pipeline:"#7c3aed","internet-gateway":"#8c4fff","nat-gateway":"#c084fc",firewall:"#d97706","route-table":"#059669"},$s=[...["process","decision","terminal"].map(n=>({id:`flow.${n}`,label:n==="process"?"Process":n==="decision"?"Decision":"Start / end",color:"#d9b677",glyph:n==="decision"?"◇":n==="terminal"?"○":"▭",description:n==="decision"?"Branch a flow with a question":n==="terminal"?"Begin or finish a flow":"A step in your flow",category:"Flowchart",aliases:"flow chart shape",kind:"service",shape:n})),...[["docker","Docker","Containers","docker engine whale runtime"],["container","Container","Containers","running container workload"],["container-image","Container image","Containers","oci image artifact registry"],["github-actions","GitHub Actions","DevOps","github actions workflow ci cd automation"],["git","Git repository","DevOps","git source code version control"],["pipeline","CI/CD pipeline","DevOps","build test deploy delivery"],["internet-gateway","Internet gateway","Networking","vpc igw inbound outbound internet"],["nat-gateway","NAT gateway","Networking","vpc nat private egress outbound"],["firewall","Security group","Networking","firewall security ingress egress allow deny"],["network-acl","Network ACL","Networking","nacl network access control list subnet firewall"],["route-table","Route table","Networking","routes routing subnet gateway"]].map(([n,e,t,i])=>({id:`component.${n}`,label:e,category:t,aliases:i,color:Hp[n]??"#4c9aff",glyph:"◇",description:`${t} · ${e}`,kind:"service",...n==="firewall"?{policyKind:"security-group"}:n==="network-acl"?{policyKind:"network-acl"}:n==="route-table"?{policyKind:"route-table"}:{},asset:`components/${n}.svg`,icon:new URL(Object.assign({"../../assets/components/container-image.svg":j0,"../../assets/components/container.svg":J0,"../../assets/components/docker.svg":K0,"../../assets/components/firewall.svg":Q0,"../../assets/components/git.svg":ep,"../../assets/components/github-actions.svg":tp,"../../assets/components/internet-gateway.svg":np,"../../assets/components/nat-gateway.svg":ip,"../../assets/components/network-acl.svg":sp,"../../assets/components/pipeline.svg":rp,"../../assets/components/route-table.svg":op})[`../../assets/components/${n}.svg`],import.meta.url).href})),...[["pod","Pod","pod pods workload containers"],["deployment","Deployment","deployment deploy replicas rollout controller"],["service","Service","service svc clusterip discovery load balancing"],["ingress","Ingress","ingress ing http https routing controller"],["namespace","Namespace","namespace ns group boundary scope"]].map(([n,e,t])=>({id:`kubernetes.${n}`,label:e,color:"#326ce5",glyph:n==="namespace"?"▱":"⬡",description:n==="namespace"?"Kubernetes · namespace boundary":`Kubernetes · ${e}`,category:"Kubernetes",aliases:`kubernetes k8s kube ${t}`,kind:n==="namespace"?"group":"service",asset:`kubernetes/${n}.svg`,icon:new URL(Object.assign({"../../assets/kubernetes/deployment.svg":ap,"../../assets/kubernetes/ingress.svg":lp,"../../assets/kubernetes/namespace.svg":cp,"../../assets/kubernetes/pod.svg":dp,"../../assets/kubernetes/service.svg":up})[`../../assets/kubernetes/${n}.svg`],import.meta.url).href})),...Gp.map(([n,e,t,i,s,r])=>({id:`aws.${n}`,label:e,color:r,glyph:e==="Lambda"?"λ":e.slice(0,3),description:`AWS · ${i}`,category:i,aliases:s,kind:"service",asset:`aws/${t.toLowerCase()}.svg`,icon:new URL(Object.assign({"../../assets/aws/amazon-api-gateway.svg":hp,"../../assets/aws/amazon-athena.svg":fp,"../../assets/aws/amazon-cloudfront.svg":pp,"../../assets/aws/amazon-cognito.svg":mp,"../../assets/aws/amazon-data-firehose.svg":gp,"../../assets/aws/amazon-dynamodb.svg":vp,"../../assets/aws/amazon-ec2.svg":xp,"../../assets/aws/amazon-elastic-container-registry.svg":_p,"../../assets/aws/amazon-elastic-container-service.svg":yp,"../../assets/aws/amazon-elastic-kubernetes-service.svg":bp,"../../assets/aws/amazon-eventbridge.svg":wp,"../../assets/aws/amazon-kinesis-data-streams.svg":Mp,"../../assets/aws/amazon-rds.svg":Sp,"../../assets/aws/amazon-route-53.svg":Ep,"../../assets/aws/amazon-sagemaker-ai-model.svg":Cp,"../../assets/aws/amazon-sagemaker-ai.svg":Ap,"../../assets/aws/amazon-simple-notification-service.svg":Tp,"../../assets/aws/amazon-simple-queue-service.svg":Lp,"../../assets/aws/amazon-simple-storage-service.svg":Rp,"../../assets/aws/aws-fargate.svg":Pp,"../../assets/aws/aws-glue-data-catalog.svg":Ip,"../../assets/aws/aws-iam-role.svg":Dp,"../../assets/aws/aws-identity-and-access-management.svg":Up,"../../assets/aws/aws-lambda.svg":Np,"../../assets/aws/aws-shield.svg":Fp,"../../assets/aws/aws-waf.svg":kp,"../../assets/aws/elastic-load-balancing.svg":Op})[`../../assets/aws/${t.toLowerCase()}.svg`],import.meta.url).href})),...[["user","User","A person using the system","person customer client human","#3f8cff"],["internet","Internet","Clients on the public internet","web browser clients public","#5a6b86"]].map(([n,e,t,i,s])=>({id:`actor.${n}`,label:e,color:s,glyph:n==="user"?"☺":"◍",description:t,category:"Actors",aliases:`actor ${i}`,kind:"service",asset:`actors/${n}.svg`,icon:new URL(Object.assign({"../../assets/actors/internet.svg":zp,"../../assets/actors/user.svg":Bp})[`../../assets/actors/${n}.svg`],import.meta.url).href})),{id:"note.text",label:"Text",color:"#ffffff",glyph:"T",description:"Free text on the board",category:"Annotations",aliases:"text label heading title caption annotation",kind:"text"},{id:"note.sticky",label:"Sticky note",color:"#ffd84d",glyph:"▤",description:"A note pinned to the board",category:"Annotations",aliases:"note sticky comment memo annotation todo",kind:"note"},...["account","region","vpc","zone","subnet"].map(n=>({id:`boundary.${n}`,label:n==="vpc"?"VPC":n==="zone"?"Availability zone":n.charAt(0).toUpperCase()+n.slice(1),color:Uh[n],glyph:"▱",description:"Nested architecture boundary",category:"Boundaries",aliases:"group account region vpc availability zone subnet",kind:"group",boundary:n}))],gl=new Map,vl=new Map;for(const[n,e]of $s.entries()){gl.has(e.id)||gl.set(e.id,n);const t=e.label.toLowerCase();vl.has(t)||vl.set(t,n)}function Ps(n){const e=gl.get(n)??1/0,t=vl.get(n.toLowerCase())??1/0;return $s[Math.min(e,t)]}function Wp(n){return Ps(n)?.glyph??"◇"}function ni(n){if(typeof n!="object"||n===null||Array.isArray(n))throw new Error("Expected an object");return Object.fromEntries(Object.entries(n))}const Pc=4e3,Xp=new Set(["service","group","text","note"]);function Nt(n,e){if(typeof n!="string"||n.length>Pc)throw new Error(`Invalid ${e}`);return n}function ts(n){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e6)throw new Error("Invalid coordinate");return n}function Is(n){const e=Ld(n),t=ni(JSON.parse(n));if(t.details!==void 0){if(!Array.isArray(t.details)||t.details.length>100)throw Error("Invalid detail diagram library");const s=new Set;e.details=t.details.map(r=>{const o=ni(r),a=Nt(o.id,"detail ID");if(!a||s.has(a))throw Error("Duplicate detail ID");s.add(a);const l=ni(o.document);if(l.details!==void 0)throw Error("Detail libraries must be flat");return{id:a,document:Ld(JSON.stringify(l))}})}const i=new Set(e.details?.map(s=>s.id));for(const s of[e,...e.details?.map(r=>r.document)??[]])for(const r of s.nodes)if(r.detailId&&!i.has(r.detailId))throw Error("Missing detail diagram");return e}function Ld(n){if(n.length>1e7)throw new Error("Document exceeds 10 MB limit");const e=ni(JSON.parse(n));if(e.version!==1)throw new Error("Unsupported document version");if(!Array.isArray(e.nodes)||!Array.isArray(e.edges)||e.nodes.length>1e4||e.edges.length>3e4)throw new Error("Invalid graph size");const t=e.nodes.map(a=>{const l=ni(a);if(!Xp.has(String(l.kind)))throw new Error("Invalid node kind");const c={id:Nt(l.id,"node ID"),kind:l.kind,label:Nt(l.label,"label"),x:ts(l.x),z:ts(l.z),width:ts(l.width),depth:ts(l.depth),color:Nt(l.color,"color")};if(!c.id||c.width<=0||c.depth<=0||!/^#[0-9a-f]{6}$/i.test(c.color))throw new Error("Invalid node geometry or color");if(l.detailId!==void 0&&(c.detailId=Nt(l.detailId,"detail ID")),l.journeyCaption!==void 0&&(c.journeyCaption=Nt(l.journeyCaption,"journey caption")),l.parentId!==void 0&&(c.parentId=Nt(l.parentId,"parent ID")),l.serviceId!==void 0&&(c.serviceId=Nt(l.serviceId,"service ID")),l.shape!==void 0){if(l.shape!=="process"&&l.shape!=="decision"&&l.shape!=="terminal")throw Error("Invalid flowchart shape");c.shape=l.shape}if(l.boundary!==void 0){if(!["account","region","vpc","zone","subnet"].includes(String(l.boundary)))throw Error("Invalid boundary kind");c.boundary=l.boundary}if(Vp.has(c.color.toLowerCase())){const d=c.serviceId?Ps(c.serviceId):void 0;d&&c.kind==="service"?c.color=d.color:c.boundary&&(c.color=Uh[c.boundary])}if(l.fontSize!==void 0){const d=ts(l.fontSize);if(d<4||d>400)throw Error("Invalid font size");c.fontSize=d}if(l.wrap!==void 0){if(typeof l.wrap!="boolean")throw Error("Invalid caption wrapping");l.wrap&&(c.wrap=!0)}if(l.journey!==void 0){const d=ni(l.journey);if(d.mode==="all"||d.mode==="ask")c.journey={mode:d.mode};else if(d.mode==="fixed")c.journey={mode:"fixed",edge:Nt(d.edge,"branch")};else throw Error("Invalid journey branch mode")}if(l.network!==void 0&&(c.network=Th(l.network)),l.policy!==void 0&&(c.policy=Lh(l.policy)),l.metadata!==void 0){const d=ni(l.metadata);c.metadata={};for(const u of["region","environment","resourceName","notes","tags"])d[u]!==void 0&&(c.metadata[u]=Nt(d[u],u))}return c}),i=new Map(t.map(a=>[a.id,a]));if(i.size!==t.length)throw new Error("Duplicate node ID");for(const a of t){const l=new Set([a.id]);let c=a.parentId;for(;c!==void 0;){if(l.has(c))throw new Error("Group cycle");l.add(c);const d=i.get(c);if(!d||d.kind!=="group")throw new Error("Invalid parent group");c=d.parentId}}for(const a of t){const l=(c,d)=>{const u=i.get(c);if(!u||d&&u.policy?.kind!==d)throw Error(`Invalid network resource reference: ${c}`)};for(const c of a.network?.securityGroupIds??[])l(c,"security-group");for(const c of a.network?.networkIds??[])l(c);if(a.network?.routeTableId&&l(a.network.routeTableId,"route-table"),a.network?.networkAclId&&l(a.network.networkAclId,"network-acl"),a.policy?.kind==="route-table")for(const c of a.policy.routes)["local","blackhole"].includes(c.target)||l(c.target);else for(const c of a.policy?.rules??[])c.peerGroupId&&l(c.peerGroupId,"security-group")}const s=new Set,r=e.edges.map(a=>{const l=ni(a),c={id:Nt(l.id,"edge ID"),source:Nt(l.source,"source"),target:Nt(l.target,"target"),label:Nt(l.label,"label")};if(!c.id||s.has(c.id)||!i.has(c.source)||!i.has(c.target))throw new Error("Invalid edge reference");for(const d of["sourcePort","targetPort"]){const u=l[d];if(u!==void 0){if(u!=="north"&&u!=="east"&&u!=="south"&&u!=="west")throw Error("Invalid named port");c[d]=u}}if(l.relationship!==void 0){if(l.relationship!=="network"&&l.relationship!=="dependency")throw Error("Invalid relationship");c.relationship=l.relationship}if(l.routing!==void 0){if(l.routing!=="horizontal"&&l.routing!=="vertical")throw Error("Invalid routing");c.routing=l.routing}return l.bend!==void 0&&(c.bend=ts(l.bend)),l.networkRule!==void 0&&(c.networkRule=Eh(l.networkRule)),s.add(c.id),c});let o;if(e.scenarios!==void 0){if(!Array.isArray(e.scenarios)||e.scenarios.length>100)throw Error("Invalid scenarios");const a=new Set;o=e.scenarios.map(l=>{const c=ni(l),d=Nt(c.id,"scenario ID"),u=Nt(c.name,"scenario name");if(!d||!u.trim()||a.has(d))throw Error("Invalid or duplicate scenario");a.add(d);const h={id:d,name:u,traffic:Cr(c.traffic)};for(const f of["sourceId","targetId"])c[f]!==void 0&&(h[f]=Nt(c[f],f));return h})}return{version:1,title:Nt(e.title,"title"),...o?{scenarios:o}:{},nodes:t,edges:r,...e.traffic!==void 0?{traffic:Cr(e.traffic)}:{}}}function ia(n){return`${JSON.stringify(n,null,2)}
`}function Wt(n,e){let t=n.x,i=n.z,s=0,r=n.parentId;for(;r!==void 0;){const o=e.get(r);if(!o)throw new Error("Missing parent");t+=o.x,i+=o.z,s+=1,r=o.parentId}return{x:t,z:i,level:s}}function wy(){return{version:1,title:"Serverless application",nodes:[{id:"region",kind:"group",label:"AWS / us-east-1",boundary:"region",x:0,z:0,width:940,depth:900,color:"#00a4a6"},{id:"vpc",kind:"group",label:"Application boundary",boundary:"vpc",x:50,z:10,width:650,depth:720,color:"#8c4fff",parentId:"region"},{id:"gateway",kind:"service",label:"API Gateway",serviceId:"aws.api-gateway",x:-280,z:-110,width:160,depth:100,color:"#8c4fff",parentId:"region"},{id:"lambda",kind:"service",label:"Lambda",serviceId:"aws.lambda",x:-40,z:-80,width:160,depth:100,color:"#ed7100",parentId:"vpc"},{id:"db",kind:"service",label:"DynamoDB",serviceId:"aws.dynamodb",x:190,z:-80,width:160,depth:100,color:"#c925d1",parentId:"vpc"},{id:"queue",kind:"service",label:"SQS",serviceId:"aws.sqs",x:-40,z:310,width:160,depth:100,color:"#e7157b",parentId:"vpc"},{id:"storage",kind:"service",label:"S3",serviceId:"aws.s3",x:190,z:310,width:160,depth:100,color:"#7aa116",parentId:"vpc"}],edges:[{id:"request",source:"gateway",target:"lambda",label:"HTTPS"},{id:"write",source:"lambda",target:"db",label:"Read / write"},{id:"event",source:"lambda",target:"queue",label:"Events"},{id:"archive",source:"queue",target:"storage",label:"Archive"}]}}function $p(){return{version:1,title:"Untitled architecture",nodes:[{id:"function",serviceId:"aws.lambda",kind:"service",label:"Lambda",x:-300,z:0,width:160,depth:100,color:"#ed7100"},{id:"database",serviceId:"aws.dynamodb",kind:"service",label:"DynamoDB",x:300,z:0,width:160,depth:100,color:"#c925d1"}],edges:[{id:"request",source:"function",target:"database",label:"Read / write"}]}}function dn(n,e){const t=document.createElement(n);return e&&(t.textContent=e),t}function In(n="",e="text"){const t=dn("input");return t.type=e,t.value=n,t}function qp(n,e){if(n.disabled||!n.value&&!e.value)return{};if(!n.value||!e.value)throw Error("Enter both ends of the port range, or leave both blank");return{fromPort:Number(n.value),toPort:Number(e.value)}}function Mn(n,e=""){const t=dn("select");for(const[i,s]of n){const r=dn("option",s);r.value=i,t.append(r)}return t.value=e,t}function St(n,e,t){const i=dn("label",e);i.append(t),n.append(i)}function Rd(n,e,t){const i=Mn(n.nodes.filter(e).map(s=>[s.id,s.label]));i.multiple=!0,i.size=4;for(const s of i.options)s.selected=t.includes(s.value);return i}function Zp(n,e,t,i,s){if(n.replaceChildren(),!e||e.kind==="text"||e.kind==="note")return;const r=dn("details");r.open=!!(e.network||e.policy),r.append(dn("summary","Resource networking")),n.append(r);const o=In("","checkbox");o.checked=!!e.network,St(r,"Enable network model",o);const a=Mn([["aws","AWS IPv4"],["generic","Generic IPv4"],["compose","Compose network"]],e.network?.model??"aws");St(r,"Network model",a);const l=In(e.network?.ip??""),c=In(e.network?.publicIp??""),d=In(e.network?.cidr??"");e.kind==="service"&&!e.policy&&(St(r,"Private / endpoint IPv4",l),St(r,"Public IPv4 (if known)",c)),e.kind==="group"&&St(r,"Boundary CIDR",d);const u=Mn([["unknown","Unknown"],["private","Private"],["public","Public address assigned"]],e.network?.exposure??"unknown");e.kind==="service"&&!e.policy&&St(r,"Public address assignment",u);const h=Rd(t,P=>P.policy?.kind==="security-group",e.network?.securityGroupIds??[]);e.kind==="service"&&!e.policy&&St(r,"Attached security groups",h);const f=P=>[["","Not assigned"],...t.nodes.filter(A=>A.policy?.kind===P).map(A=>[A.id,A.label])],g=Mn(f("route-table"),e.network?.routeTableId??""),v=Mn(f("network-acl"),e.network?.networkAclId??"");e.boundary==="subnet"&&(St(r,"Subnet route table",g),St(r,"Subnet network ACL",v));const m=Rd(t,P=>P.kind==="group"&&P.network?.model==="compose",e.network?.networkIds??[]);e.network?.model==="compose"&&St(r,"Compose network attachments",m);const p=Mn([["","No resource policy"],["security-group","Security group"],["network-acl","Network ACL"],["route-table","Route table"]],e.policy?.kind??"");St(r,"Policy on this resource",p);const b=dn("div");b.className="network-rule-rows",r.append(b);const w=dn("button","Add rule / route");w.type="button",r.append(w);const _=[];function R(P){const A=dn("div");A.className="network-rule-row",b.append(A);const G=dn("button","Remove");if(G.type="button",p.value==="route-table"){const N=P&&"destination"in P?P:{destination:"0.0.0.0/0",target:"local"},V=In(N.destination),O=Mn([["local","Local VPC"],["blackhole","Blackhole"],...t.nodes.filter(F=>F.kind==="service"&&F.id!==e?.id).map(F=>[F.id,F.label])],N.target);St(A,"Destination CIDR",V),St(A,"Next hop",O),_.push(()=>A.isConnected?{destination:V.value.trim(),target:O.value}:void 0)}else{const N=P&&"protocol"in P?P:{action:"allow",direction:"ingress",protocol:"tcp",fromPort:443,toPort:443,cidr:"0.0.0.0/0",priority:b.children.length*100},V=Mn([["ingress","Ingress"],["egress","Egress"]],N.direction),O=Mn([["any","Any IP protocol"],["tcp","TCP"],["udp","UDP"],["icmp","ICMP (all types)"]],N.protocol),F=In(String(N.fromPort??""),"number"),z=In(String(N.toPort??""),"number"),J=In(N.cidr??"");F.min=z.min="0",F.max=z.max="65535";const K=Mn([["","Use CIDR / any peer"],...t.nodes.filter(Ue=>Ue.policy?.kind==="security-group"||Ue.id===e?.id).map(Ue=>[Ue.id,Ue.label])],N.peerGroupId??""),_e=Mn([["allow","Allow"],["deny","Deny"]],N.action),ve=In(String(N.priority??b.children.length*100),"number");ve.min="1",ve.max="32766",St(A,"Direction",V),St(A,"Protocol",O),St(A,"From port (blank = all)",F),St(A,"To port",z),St(A,"Peer IPv4 CIDR",J),p.value==="security-group"&&St(A,"Or peer security group",K),p.value==="network-acl"&&(St(A,"Action",_e),St(A,"Rule priority",ve));const ce=()=>{F.disabled=z.disabled=["any","icmp"].includes(O.value),J.disabled=p.value==="security-group"&&!!K.value};O.onchange=ce,K.onchange=ce,ce(),_.push(()=>A.isConnected?{direction:V.value,protocol:O.value,action:p.value==="security-group"?"allow":_e.value,...qp(F,z),...p.value==="security-group"&&K.value?{peerGroupId:K.value}:J.value.trim()?{cidr:J.value.trim()}:{},...p.value==="network-acl"?{priority:Number(ve.value)}:{}}:void 0)}G.onclick=()=>A.remove(),A.append(G)}const E=()=>{b.replaceChildren(),_.length=0,w.disabled=!p.value;const P=e?.policy;if(P?.kind===p.value)if(P.kind==="route-table")for(const A of P.routes)R(A);else for(const A of P.rules)R(A)};p.onchange=E,w.onclick=()=>R(),E();const T=[...e.network?.incomplete??[],...e.policy?.incomplete??[]],y=In("","checkbox");T.length&&(r.append(dn("p",`Unresolved import values: ${T.join("; ")}`)),St(r,"I have supplied the missing settings above",y)),r.append(dn("p","Security groups allow matching rules from any attached group; no match denies. ACLs use the first matching priority, then implicit deny, including return traffic. No assigned ACL is modeled as default allow."));const M=dn("button","Apply resource networking");M.type="button",r.append(M),M.onclick=()=>{try{const P=structuredClone(e);o.checked?P.network=Th({model:a.value,...l.value.trim()?{ip:l.value.trim()}:{},...c.value.trim()?{publicIp:c.value.trim()}:{},...e.kind==="group"&&d.value.trim()?{cidr:d.value.trim()}:{},exposure:u.value,securityGroupIds:Array.from(h.selectedOptions,A=>A.value),...e.boundary==="subnet"&&g.value?{routeTableId:g.value}:{},...e.boundary==="subnet"&&v.value?{networkAclId:v.value}:{},...e.network?.model==="compose"?{networkIds:Array.from(m.selectedOptions,A=>A.value)}:{},...!y.checked&&e.network?.incomplete?{incomplete:e.network.incomplete}:{}}):delete P.network,p.value?P.policy=Lh({kind:p.value,[p.value==="route-table"?"routes":"rules"]:_.map(A=>A()).filter(Boolean),...!y.checked&&e.policy?.incomplete&&e.policy.kind===p.value?{incomplete:e.policy.incomplete}:{}}):delete P.policy,Is(ia({...t,nodes:t.nodes.map(A=>A.id===e.id?P:A)})),i(P)}catch(P){s(String(P))}}}const en=(n,e)=>{const t=document.createElement(n);return e&&(t.textContent=e),t},Pd=(n,e)=>{n.replaceChildren(...e.map(t=>{const i=en("option",t.label);return i.value=t.id,i}))};function Yp(n){const e=en("section");e.className="workspace-dialog reachability-dialog",e.hidden=!0,e.setAttribute("aria-label","Reachability matrix"),e.innerHTML='<div class="dialog-heading"><h2>Can A reach B?</h2><button data-close aria-label="Close reachability">×</button></div><p>Static IPv4 reachability from the modeled routes, security groups and subnet ACLs. Security-group replies are stateful; ACL replies use the source port. Missing addresses and unsupported constructs produce Unknown. Unassigned ACLs assume default allow. External routing is assumed available after a valid internet-gateway route.</p><label>Traffic scenario<select data-scenario><option value="">Custom traffic</option></select></label><div class="reachability-controls"><label>Protocol<select data-protocol><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Destination port<input data-port type="number" min="1" max="65535" value="443"></label><label>Source port for ACL replies<input data-source-port type="number" min="1" max="65535" value="49152"></label><label>Source IPv4 fallback for external actors<input data-ip value="203.0.113.10"></label><label>From<select data-source></select></label><label>To<select data-target></select></label></div><div class="dialog-actions"><button data-check>Check flow</button><button data-build>Refresh matrix</button></div><div data-result role="status"></div><button data-play disabled>Trace journey</button><details><summary>Decision details</summary><ol data-checks></ol></details><hr><label>Filter resources<input data-filter placeholder="Name or resource ID"></label><div class="matrix-pages"><button data-rows-prev>Previous sources</button><button data-rows-next>Next sources</button><button data-cols-prev>Previous destinations</button><button data-cols-next>Next destinations</button></div><p data-page></p><div class="matrix-scroll" data-matrix></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),i=P=>{const A=e.querySelector(P);if(!A)throw Error("Missing reachability control");return A},s=i("[data-scenario]");s.onchange=()=>{const P=(n.document().scenarios??fl).find(A=>A.id===s.value);P&&(a.value=P.traffic.protocol,l.value=String(P.traffic.port),c.value=P.traffic.sourceIp,P.sourceId&&(r.value=P.sourceId),P.targetId&&(o.value=P.targetId),y(),T())};const r=i("[data-source]"),o=i("[data-target]"),a=i("[data-protocol]"),l=i("[data-port]"),c=i("[data-ip]"),d=i("[data-source-port]"),u=i("[data-filter]"),h=i("[data-matrix]"),f=i("[data-result]"),g=i("[data-checks]"),v=i("[data-play]");let m,p=0,b=0;const w=()=>n.document().nodes.filter(P=>P.kind==="service"&&!P.policy&&!["component.internet-gateway","component.nat-gateway","component.route-table","component.firewall","component.network-acl"].includes(P.serviceId??"")),_=()=>{const P=Number(d.value);if(!Number.isInteger(P)||P<1||P>65535)throw Error("Source port must be 1–65535");return{traffic:Cr({protocol:a.value,port:Number(l.value),sourceIp:c.value.trim(),direction:"ingress"}),sourcePort:P}},R=P=>{m=P,f.textContent=`${P.status.toUpperCase()} · ${P.reason}`,f.className=`reachability-result ${P.status}`;const A=n.document();g.replaceChildren(en("li",`Path: ${P.path.map(G=>A.nodes.find(N=>N.id===G)?.label??G).join(" → ")}`),...P.checks.map(G=>en("li",G))),v.disabled=P.status==="unknown"||P.path.length<2||P.path[0]===P.path[P.path.length-1]},E=P=>{f.textContent=String(P),m=void 0,v.disabled=!0},T=()=>{try{const P=_();R(Wo(n.document(),r.value,o.value,P.traffic,P.sourcePort))}catch(P){E(P)}},y=()=>{try{const P=_(),A=w().filter(ce=>`${ce.label} ${ce.id}`.toLowerCase().includes(u.value.toLowerCase())),G=12,N=Math.max(1,Math.ceil(A.length/G));p=Math.min(p,N-1),b=Math.min(b,N-1);const V=n.document(),O=Rh(V),F=A.slice(p*G,(p+1)*G),z=A.slice(b*G,(b+1)*G),J=en("table"),K=en("tr");K.append(en("th","Source → destination"));for(const ce of z)K.append(en("th",ce.label));const _e=en("thead");_e.append(K),J.append(_e);const ve=en("tbody");for(const ce of F){const Ue=en("tr"),st=en("th",ce.label);st.scope="row",Ue.append(st);for(const rt of z){const Y=en("td"),oe=Wo(V,ce.id,rt.id,P.traffic,P.sourcePort,O),le=en("button",oe.status==="allowed"?"Allowed":oe.status==="denied"?"Denied":"Unknown");le.className=oe.status,le.title=oe.reason,le.setAttribute("aria-label",`${ce.label} to ${rt.label}: ${oe.status}`),le.onclick=()=>{r.value=ce.id,o.value=rt.id,R(oe)},Y.append(le),Ue.append(Y)}ve.append(Ue)}J.append(ve),h.replaceChildren(J),i("[data-page]").textContent=`${A.length} resources · source page ${p+1}/${N} · destination page ${b+1}/${N}. Rows and columns page independently.`,i("[data-rows-prev]").disabled=p===0,i("[data-cols-prev]").disabled=b===0,i("[data-rows-next]").disabled=p+1===N,i("[data-cols-next]").disabled=b+1===N}catch(P){E(P)}};i("[data-check]").onclick=T,i("[data-build]").onclick=y;for(const[P,A]of[["[data-rows-prev]",()=>p--],["[data-rows-next]",()=>p++],["[data-cols-prev]",()=>b--],["[data-cols-next]",()=>b++]])i(P).onclick=()=>{A(),y()};u.oninput=()=>{p=b=0,y()};for(const P of[a,l,d,c,r,o])P.onchange=()=>{m=void 0,v.disabled=!0,f.textContent="Parameters changed. Refresh the matrix or check a flow.",h.replaceChildren()};v.onclick=()=>{m&&(n.play(m),e.hidden=!0,t&&(t.inert=!1))};const M=()=>{e.hidden=!0,t&&(t.inert=!1)};return i("[data-close]").onclick=M,e.addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Escape"&&(P.stopPropagation(),M())}),{close:M,open:()=>{const P=n.document(),A=P.traffic??Er;s.replaceChildren(new Option("Custom traffic",""),...(P.scenarios??fl).map(G=>new Option(G.name,G.id))),a.value=A.protocol,l.value=String(A.port),c.value=A.sourceIp,Pd(r,w()),Pd(o,w()),o.selectedIndex=Math.min(1,o.options.length-1),p=b=0,e.hidden=!1,t&&(t.inert=!0),y()}}}class Nh{constructor(e,t=100,i=8e6){this.document=e,this.maxEntries=t,this.maxBytes=i}document;maxEntries;maxBytes;past=[];future=[];bytes=0;sequence=0;revision=0;savedRevision=0;get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}get isDirty(){return this.revision!==this.savedRevision}get token(){return this.revision}markSaved(e=this.revision){this.savedRevision=e}execute(e){const t=this.document,i="id"in e?t.nodes.find(l=>l.id===e.id):void 0;let s,r,o=e;switch(e.type){case"detail":{const l=e.root;if(l.details?.some(d=>d.id===e.id))return!1;const c={id:e.id,document:e.board};s=()=>{l.details=l.details?.filter(d=>d!==c)??[]},r=()=>{l.details??=[],l.details.push(c)},o=[e.id,e.board];break}case"scenarios":{const l=structuredClone(t.scenarios),c=structuredClone(e.scenarios);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.scenarios=structuredClone(l):delete t.scenarios},r=()=>{t.scenarios=structuredClone(c)};break}case"traffic":{const l=structuredClone(t.traffic),c=structuredClone(e.to);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.traffic=structuredClone(l):delete t.traffic},r=()=>{t.traffic=structuredClone(c)};break}case"graph":{let l=function(f,g){return g.map(v=>{const m=f.findIndex(_=>_.id===v.id),p=f[m],b=p?structuredClone(p):null,w=v.value?structuredClone(v.value):null;if(w&&w.id!==v.id)throw Error("Mismatched graph record");return{id:v.id,index:m,target:p??(w?structuredClone(w):null),before:b,after:w}})},c=function(f,g,v){const m=new Set(g.map(b=>b.id)),p=f.filter(b=>!m.has(b.id));for(const b of[...g].sort((w,_)=>w.index-_.index)){const w=v?b.before:b.after;if(!(!w||!b.target)){for(const _ of Object.keys(b.target))Reflect.deleteProperty(b.target,_);Object.assign(b.target,structuredClone(w)),b.index<0?p.push(b.target):p.splice(b.index,0,b.target)}}return p};const d=l(t.nodes,e.nodes??[]),u=l(t.edges,e.edges??[]),h=t.title;s=()=>{t.nodes=c(t.nodes,d,!0),t.edges=c(t.edges,u,!0),t.title=h},r=()=>{t.nodes=c(t.nodes,d,!1),t.edges=c(t.edges,u,!1),e.title!==void 0&&(t.title=e.title)},o=[d,u,h];break}case"move":{if(!i||e.from.x===e.to.x&&e.from.z===e.to.z)return!1;const l={...e.from},c={...e.to};s=()=>Object.assign(i,l),r=()=>Object.assign(i,c);break}case"rename":{if(!i||i.label===e.label)return!1;const l=i.label,c=e.label.slice(0,1e3);s=()=>{i.label=l},r=()=>{i.label=c},o=[e,l];break}case"insert":{if(t.nodes.some(c=>c.id===e.node.id))return!1;const l={...e.node};s=()=>{t.nodes=t.nodes.filter(c=>c.id!==l.id)},r=()=>{t.nodes.push(l)};break}case"delete":{let l=function(f,g){for(const{item:v,index:m}of g)f.splice(m,0,v)};if(!i)return!1;const c=new Set([e.id]);for(let f=!0;f;){f=!1;for(const g of t.nodes)g.parentId&&c.has(g.parentId)&&!c.has(g.id)&&(c.add(g.id),f=!0)}const d=t.nodes.flatMap((f,g)=>c.has(f.id)?[{item:f,index:g}]:[]),u=t.edges.flatMap((f,g)=>c.has(f.source)||c.has(f.target)?[{item:f,index:g}]:[]),h=new Set(u.map(({item:f})=>f.id));s=()=>{l(t.nodes,d),l(t.edges,u)},r=()=>{t.nodes=t.nodes.filter(f=>!c.has(f.id)),t.edges=t.edges.filter(f=>!h.has(f.id))},o=[e,d,u];break}}r();for(const l of this.future)this.bytes-=l.bytes;this.future=[];const a={edit:e,document:t,undo:s,redo:r,bytes:JSON.stringify(o).length*2,before:this.revision,after:++this.sequence};for(this.past.push(a),this.bytes+=a.bytes,this.revision=a.after;this.past.length>this.maxEntries||this.bytes>this.maxBytes;){const l=this.past.shift();l&&(this.bytes-=l.bytes)}return!0}undo(){const e=this.past.pop();if(e)return this.document=e.document,e.undo(),this.revision=e.before,this.future.push(e),e.edit}redo(){const e=this.future.pop();if(e)return this.document=e.document,e.redo(),this.revision=e.after,this.past.push(e),e.edit}}function Fh(n,e){const t=n.edges.filter(l=>l.relationship!=="dependency"),i=new Set(t.map(l=>l.source)),s=new Set(t.map(l=>l.target));if(e&&i.has(e))return[e];const r=n.nodes.filter(l=>l.serviceId?.startsWith("actor.")&&i.has(l.id));if(r.length)return r.map(l=>l.id);const o=n.nodes.filter(l=>i.has(l.id)&&!s.has(l.id));if(o.length)return o.map(l=>l.id);const a=t[0]?.source;return a?[a]:[]}function Ic(n,e){const t=n.edges.filter(r=>r.source===e&&r.relationship!=="dependency").map(r=>r.id),i=n.nodes.find(r=>r.id===e);if(!i||t.length<2)return{mode:"all",edges:t};const s=i.journey??{mode:i.shape==="decision"?"ask":"all"};return s.mode==="fixed"?t.includes(s.edge)?{mode:"fixed",edges:[s.edge]}:{mode:"ask",edges:t}:{mode:s.mode,edges:t}}function jp(n){const e=new Set;for(const t of n.nodes){if(t.journey?.mode!=="fixed")continue;const{mode:i,edges:s}=Ic(n,t.id);if(i==="fixed")for(const r of n.edges)r.source===t.id&&!s.includes(r.id)&&e.add(r.id)}for(let t=e.size>0;t;){t=!1;for(const i of n.nodes){const s=n.edges.filter(r=>r.target===i.id);if(!(!s.length||!s.every(r=>e.has(r.id))))for(const r of n.edges)r.source===i.id&&!e.has(r.id)&&(e.add(r.id),t=!0)}}return e}const Id={text:26,note:18};function sa(n){return n.fontSize??(n.kind==="note"?Id.note:Id.text)}function kh(n,e,t){const i=[];for(const s of n.split(`
`)){let r="";for(const o of s.split(/(\s+)/)){const a=r+o;if(t(a)<=e||!r.trim())for(r=a;t(r)>e&&r.length>1;){let l=r.length-1;for(;l>1&&t(r.slice(0,l))>e;)l--;i.push(r.slice(0,l)),r=r.slice(l)}else i.push(r.trimEnd()),r=o.trimStart()}i.push(r.trimEnd())}return i}function Oh(n,e,t,i,s){const r=Math.max(.01,e),o=Math.max(.01,t),a=Math.max(.01,i),l=new Map,c=(v,m)=>{let p=l.get(v);return p===void 0&&(p=s(v,a),l.set(v,p)),p*m/a},d=v=>kh(n,r,m=>c(m,v)),u=(v,m)=>m.length*v*1.28<=o&&m.every(p=>c(p,v)<=r),h=d(a);if(u(a,h))return{size:a,lines:h};let f=0,g=a;for(let v=0;v<16;v++){const m=(f+g)/2;u(m,d(m))?f=m:g=m}return{size:f,lines:d(f)}}function zh(n,e,t){return Math.max(4,Math.min(400,sa(n)*Math.min(t.width/e.width,t.depth/e.depth)))}function Jp(n,e){const t=n.width*.9,i=Math.min(n.width*.13,n.depth*.25);if(n.wrap)return n.fontSize?{size:n.fontSize,lines:kh(n.label,t,o=>e(o,n.fontSize??i))}:Oh(n.label,t,n.depth*.75,i,e);const s=n.label.split(`
`);if(n.fontSize)return{size:n.fontSize,lines:s};const r=Math.max(0,...s.map(o=>e(o,i)));return{size:r>t?i*t/r:i,lines:s}}function Dc(n,e){const t=structuredClone(n),i=(o,a)=>{o.incomplete??=[],o.incomplete.includes(a)||o.incomplete.push(a)},s=t.network;if(s){for(const o of["securityGroupIds","networkIds"])s[o]&&(s[o]=s[o].flatMap(a=>{const l=e.get(a);return l?[l]:(i(s,`Missing attached resource ${a}`),[])}));for(const o of["networkAclId","routeTableId"])if(s[o]){const a=e.get(s[o]);a?s[o]=a:(i(s,`Missing attached resource ${s[o]}`),delete s[o])}}const r=t.policy;if(r?.kind==="route-table")for(const o of r.routes)["local","blackhole"].includes(o.target)||(o.target=e.get(o.target)??"blackhole");else r&&(r.rules=r.rules.flatMap(o=>{if(!o.peerGroupId)return[o];const a=e.get(o.peerGroupId);return a?[{...o,peerGroupId:a}]:(i(r,`Missing peer security group ${o.peerGroupId}`),[])}));return t}function Bh(n,e){const t=new Map(e.map(s=>[s.id,s])),i=new Map(n.nodes.filter(s=>t.get(s.id)?.value!==null).map(s=>[s.id,s.id]));for(const s of e)s.value&&i.set(s.id,s.id);for(const s of n.nodes){const r=t.get(s.id);if(r?.value===null)continue;const o=r?.value??s,a=Dc(o,i);JSON.stringify(o)!==JSON.stringify(a)&&t.set(s.id,{id:s.id,value:a})}return[...t.values()]}function Gh(n,e){const t=new Set(e);for(let i=!0;i;){i=!1;for(const s of n.nodes)s.parentId&&t.has(s.parentId)&&!t.has(s.id)&&(t.add(s.id),i=!0)}return t}function Kp(n,e){const t=Gh(n,e);return{type:"graph",label:"Delete selection",nodes:Bh(n,n.nodes.filter(i=>t.has(i.id)).map(i=>({id:i.id,value:null}))),edges:n.edges.filter(i=>t.has(i.source)||t.has(i.target)).map(i=>({id:i.id,value:null}))}}function Qp(n,e,t){const i=new Map(n.nodes.map(u=>[u.id,u])),s=n.nodes.filter(u=>e.has(u.id)&&!Vh(u,i,e));if(!s.length)throw Error("Select components to group.");const r=s.map(u=>({node:u,world:Wt(u,i)})),o=Math.min(...r.map(({node:u,world:h})=>h.x-u.width/2))-40,a=Math.max(...r.map(({node:u,world:h})=>h.x+u.width/2))+40,l=Math.min(...r.map(({node:u,world:h})=>h.z-u.depth/2))-50,c=Math.max(...r.map(({node:u,world:h})=>h.z+u.depth/2))+50,d={id:t,kind:"group",label:"Group",x:(o+a)/2,z:(l+c)/2,width:a-o,depth:c-l,color:"#d9a15f"};return{type:"graph",label:"Group selection",nodes:[{id:t,value:d},...r.map(({node:u,world:h})=>({id:u.id,value:{...u,parentId:t,x:h.x-d.x,z:h.z-d.z}}))]}}function Vh(n,e,t){let i=n.parentId;for(;i;){if(t.has(i))return!0;i=e.get(i)?.parentId}return!1}function e2(n,e){const t=new Map(n.nodes.map(r=>[r.id,r])),i=new Set(n.nodes.filter(r=>r.kind==="group"&&e.has(r.id)).map(r=>r.id)),s=n.nodes.flatMap(r=>{if(i.has(r.id))return[{id:r.id,value:null}];if(!r.parentId||!i.has(r.parentId))return[];const o=Wt(r,t);let a=t.get(r.parentId)?.parentId;for(;a&&i.has(a);)a=t.get(a)?.parentId;const l=a?t.get(a):void 0,c=l?Wt(l,t):{x:0,z:0},d={...r,x:o.x-c.x,z:o.z-c.z};return delete d.parentId,a&&(d.parentId=a),[{id:r.id,value:d}]});return{type:"graph",label:"Ungroup selection",nodes:Bh(n,s),edges:n.edges.filter(r=>i.has(r.source)||i.has(r.target)).map(r=>({id:r.id,value:null}))}}function Hh(n,e){const t=Gh(n,e),i=new Map(n.nodes.map(s=>[s.id,s]));return{version:1,title:"Selection",nodes:n.nodes.filter(s=>t.has(s.id)).map(s=>{const r=Dc(s,new Map([...t].map(o=>[o,o])));if(delete r.detailId,!r.parentId||!t.has(r.parentId)){const o=Wt(s,i);delete r.parentId,r.x=o.x,r.z=o.z}return r}),edges:n.edges.filter(s=>t.has(s.source)&&t.has(s.target)).map(s=>structuredClone(s))}}function Wh(n,e,t=40){const i=new Map(n.nodes.map(s=>[s.id,e()]));return{type:"graph",label:"Paste selection",nodes:n.nodes.map(s=>{const r=i.get(s.id);if(!r)throw Error("Missing pasted node");const o={...Dc(s,i),id:r};if(s.parentId){const a=i.get(s.parentId);a?o.parentId=a:delete o.parentId}else o.x+=t,o.z+=t;return{id:r,value:o}}),edges:n.edges.map(s=>{const r=i.get(s.source),o=i.get(s.target);if(!r||!o)throw Error("Invalid clipboard connection");const a=e();return{id:a,value:{...structuredClone(s),id:a,source:r,target:o}}})}}function t2(n,e,t,i){const s=new Map(n.nodes.map(l=>[l.id,l])),r=n.nodes.filter(l=>l.kind!=="group").map(l=>({node:l,p:Wt(l,s)})),o=Math.max(220,t+60),a=Math.max(200,i+100);for(let l=0;l<150;l++)for(let c=-l;c<=l;c++)for(let d=-l;d<=l;d++){if(l&&Math.abs(d)!==l&&Math.abs(c)!==l)continue;const u={x:Math.round((e.x+d*o)/10)*10,z:Math.round((e.z+c*a)/10)*10};if(r.every(({node:h,p:f})=>Math.abs(u.x-f.x)>(t+h.width)/2+25||Math.abs(u.z-f.z)>(i+h.depth)/2+90))return u}throw Error("No nearby space for another component. Pan to an empty area.")}function n2(n,e,t){const i=new Map(n.nodes.map(c=>[c.id,c])),s=n.nodes.filter(c=>e.has(c.id)&&!Vh(c,i,e)).map(c=>{const d=Wt(c,i);return{node:c,x:d.x,z:d.z,minX:d.x-c.width/2,maxX:d.x+c.width/2,minZ:d.z-c.depth/2,maxZ:d.z+c.depth/2}}),r=t==="distribute-x"||t==="distribute-z"?"Distribute selection":"Align selection";if(s.length<2)return{type:"graph",label:r,nodes:[]};const o=new Map,a=c=>Math.min(...s.map(d=>d[c])),l=c=>Math.max(...s.map(d=>d[c]));for(const c of s){const{node:d}=c;let{x:u,z:h}=c;t==="left"&&(u=a("minX")+d.width/2),t==="right"&&(u=l("maxX")-d.width/2),t==="center"&&(u=(a("minX")+l("maxX"))/2),t==="top"&&(h=a("minZ")+d.depth/2),t==="bottom"&&(h=l("maxZ")-d.depth/2),t==="middle"&&(h=(a("minZ")+l("maxZ"))/2),o.set(d.id,{x:u,z:h})}if(t==="distribute-x"||t==="distribute-z"){const c=t==="distribute-x",d=[...s].sort((v,m)=>c?v.x-m.x:v.z-m.z),u=c?l("maxX")-a("minX"):l("maxZ")-a("minZ"),h=d.reduce((v,m)=>v+(c?m.node.width:m.node.depth),0),f=(u-h)/(d.length-1);let g=a(c?"minX":"minZ");for(const v of d){const m=c?v.node.width:v.node.depth,p=g+m/2;o.set(v.node.id,{x:c?p:v.x,z:c?v.z:p}),g+=m+f}}return{type:"graph",label:r,nodes:s.flatMap(({node:c,x:d,z:u})=>{const h=o.get(c.id);return!h||h.x===d&&h.z===u?[]:[{id:c.id,value:{...c,x:Math.round(c.x+h.x-d),z:Math.round(c.z+h.z-u)}}]})}}const i2="/diagrams/assets/vt323-latin-400-C5q55ueI.woff2",xl=[{id:"theme",name:"Standard"},{id:"courier",name:"Courier New",family:'"Courier New", Courier, "Liberation Mono", "Nimbus Mono PS", monospace'},{id:"terminal",name:"Terminal",family:'VT323, "DejaVu Sans Mono", ui-monospace, monospace',url:i2}];function Xh(n){return xl.find(e=>e.id===n)??xl[0]}const xa=new Map;function s2(n){const e=n.url;if(!e)return Promise.resolve();let t=xa.get(e);return t||(t=new FontFace("VT323",`url(${e}) format("woff2")`).load().then(s=>{document.fonts.add(s)}),t.catch(()=>xa.delete(e)),xa.set(e,t)),t}const Uc="183",r2=0,Dd=1,o2=2,Fo=1,a2=2,dr=3,Ti=0,rn=1,ii=2,ri=0,Cs=1,Ud=2,Nd=3,Fd=4,l2=5,Gi=100,c2=101,d2=102,u2=103,h2=104,f2=200,p2=201,m2=202,g2=203,_l=204,yl=205,v2=206,x2=207,_2=208,y2=209,b2=210,w2=211,M2=212,S2=213,E2=214,bl=0,wl=1,Ml=2,Ds=3,Sl=4,El=5,Cl=6,Al=7,Nc=0,C2=1,A2=2,zn=0,$h=1,qh=2,Zh=3,Yh=4,jh=5,Jh=6,Kh=7,Qh=300,Zi=301,Us=302,_a=303,ya=304,ra=306,Tl=1e3,si=1001,Ll=1002,Vt=1003,T2=1004,Hr=1005,Ht=1006,ba=1007,Hi=1008,un=1009,ef=1010,tf=1011,Tr=1012,Fc=1013,Vn=1014,En=1015,ai=1016,kc=1017,Oc=1018,Lr=1020,nf=35902,sf=35899,rf=1021,of=1022,Cn=1023,li=1026,Wi=1027,zc=1028,Bc=1029,Ns=1030,Gc=1031,Vc=1033,ko=33776,Oo=33777,zo=33778,Bo=33779,Rl=35840,Pl=35841,Il=35842,Dl=35843,Ul=36196,Nl=37492,Fl=37496,kl=37488,Ol=37489,zl=37490,Bl=37491,Gl=37808,Vl=37809,Hl=37810,Wl=37811,Xl=37812,$l=37813,ql=37814,Zl=37815,Yl=37816,jl=37817,Jl=37818,Kl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,sc=36283,rc=36284,oc=36285,ac=36286,L2=3200,af=0,R2=1,bi="",Ft="srgb",Fs="srgb-linear",Xo="linear",ct="srgb",ns=7680,kd=519,P2=512,I2=513,D2=514,Hc=515,U2=516,N2=517,Wc=518,F2=519,lc=35044,Ei=35048,Od="300 es",On=2e3,Rr=2001;function k2(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $o(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function O2(){const n=$o("canvas");return n.style.display="block",n}const zd={};function qo(...n){const e="THREE."+n.shift();console.log(e,...n)}function lf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=lf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function tt(...n){n=lf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Zo(...n){const e=n.join(" ");e in zd||(zd[e]=!0,He(...n))}function z2(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const B2={[bl]:wl,[Ml]:Cl,[Sl]:Al,[Ds]:El,[wl]:bl,[Cl]:Ml,[Al]:Sl,[El]:Ds};class qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bd=1234567;const As=Math.PI/180,Pr=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Xc(n,e){return(n%e+e)%e}function G2(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function V2(n,e,t){return n!==e?(t-n)/(e-n):0}function _r(n,e,t){return(1-t)*n+t*e}function H2(n,e,t,i){return _r(n,e,1-Math.exp(-t*i))}function W2(n,e=1){return e-Math.abs(Xc(n,e*2)-e)}function X2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $2(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function q2(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Z2(n,e){return n+Math.random()*(e-n)}function Y2(n){return n*(.5-Math.random())}function j2(n){n!==void 0&&(Bd=n);let e=Bd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J2(n){return n*As}function K2(n){return n*Pr}function Q2(n){return(n&n-1)===0&&n!==0}function em(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function tm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nm(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),d=o((e+i)/2),u=r((e-i)/2),h=o((e-i)/2),f=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*d,l*u,l*h,a*c);break;case"YZY":n.set(l*h,a*d,l*u,a*c);break;case"ZXZ":n.set(l*u,l*h,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*d,a*c);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const im={DEG2RAD:As,RAD2DEG:Pr,generateUUID:Bn,clamp:$e,euclideanModulo:Xc,mapLinear:G2,inverseLerp:V2,lerp:_r,damp:H2,pingpong:W2,smoothstep:X2,smootherstep:$2,randInt:q2,randFloat:Z2,randFloatSpread:Y2,seededRandom:j2,degToRad:J2,radToDeg:K2,isPowerOfTwo:Q2,ceilPowerOfTwo:em,floorPowerOfTwo:tm,setQuaternionFromProperEuler:nm,normalize:dt,denormalize:Sn};class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ri{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],d=i[s+2],u=i[s+3],h=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==h||c!==f||d!==g){let m=l*h+c*f+d*g+u*v;m<0&&(h=-h,f=-f,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w,l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+v*a}else{l=l*p+h*a,c=c*p+f*a,d=d*p+g*a,u=u*p+v*a;const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],d=i[s+3],u=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(s/2),u=a(r/2),h=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-i*c,this._z=r*d+o*c+i*l-s*a,this._w=o*d-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),d=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*d,this.y=i+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new I,Gd=new Ri;class Ye{constructor(e,t,i,s,r,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],w=s[4],_=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*v+a*b+l*R,r[3]=o*m+a*w+l*E,r[6]=o*p+a*_+l*T,r[1]=c*v+d*b+u*R,r[4]=c*m+d*w+u*E,r[7]=c*p+d*_+u*T,r[2]=h*v+f*b+g*R,r[5]=h*m+f*w+g*E,r[8]=h*p+f*_+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*r*d+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,g=t*u+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(s*c-d*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new Ye,Vd=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sm(){const n={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Xo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fs]:{primaries:e,whitePoint:i,transfer:Xo,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}const it=sm();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class rm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=$o("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$o("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(oi(t[i]/255)*255):t[i]=oi(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let om=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sa(s[o].image)):r.push(Sa(s[o]))}else r=Sa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let am=0;const Ea=new I;class Yt extends qs{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=si,s=si,r=Ht,o=Hi,a=Cn,l=un,c=Yt.DEFAULT_ANISOTROPY,d=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Bn(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Qh;Yt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,i=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,_=(f+1)/2,R=(p+1)/2,E=(d+h)/4,T=(u+v)/4,y=(g+m)/4;return w>_&&w>R?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=T/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=y/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=T/r,s=y/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lm extends qs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new Yt(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new $c(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tn extends lm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class cf extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cm extends Yt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m)}set(e,t,i,s,r,o,a,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,g=a*d,v=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dm,e,um)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),fi.crossVectors(i,an),fi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),fi.crossVectors(i,an)),fi.normalize(),Wr.crossVectors(an,fi),s[0]=fi.x,s[4]=Wr.x,s[8]=an.x,s[1]=fi.y,s[5]=Wr.y,s[9]=an.y,s[2]=fi.z,s[6]=Wr.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],w=i[7],_=i[11],R=i[15],E=s[0],T=s[4],y=s[8],M=s[12],P=s[1],A=s[5],G=s[9],N=s[13],V=s[2],O=s[6],F=s[10],z=s[14],J=s[3],K=s[7],_e=s[11],ve=s[15];return r[0]=o*E+a*P+l*V+c*J,r[4]=o*T+a*A+l*O+c*K,r[8]=o*y+a*G+l*F+c*_e,r[12]=o*M+a*N+l*z+c*ve,r[1]=d*E+u*P+h*V+f*J,r[5]=d*T+u*A+h*O+f*K,r[9]=d*y+u*G+h*F+f*_e,r[13]=d*M+u*N+h*z+f*ve,r[2]=g*E+v*P+m*V+p*J,r[6]=g*T+v*A+m*O+p*K,r[10]=g*y+v*G+m*F+p*_e,r[14]=g*M+v*N+m*z+p*ve,r[3]=b*E+w*P+_*V+R*J,r[7]=b*T+w*A+_*O+R*K,r[11]=b*y+w*G+_*F+R*_e,r[15]=b*M+w*N+_*z+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],b=l*f-c*h,w=a*f-c*u,_=a*h-l*u,R=o*f-c*d,E=o*h-l*d,T=o*u-a*d;return t*(v*b-m*w+p*_)-i*(g*b-m*R+p*E)+s*(g*w-v*R+p*T)-r*(g*_-v*E+m*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=t*a-i*o,w=t*l-s*o,_=t*c-r*o,R=i*l-s*a,E=i*c-r*a,T=s*c-r*l,y=d*v-u*g,M=d*m-h*g,P=d*p-f*g,A=u*m-h*v,G=u*p-f*v,N=h*p-f*m,V=b*N-w*G+_*A+R*P-E*M+T*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/V;return e[0]=(a*N-l*G+c*A)*O,e[1]=(s*G-i*N-r*A)*O,e[2]=(v*T-m*E+p*R)*O,e[3]=(h*E-u*T-f*R)*O,e[4]=(l*P-o*N-c*M)*O,e[5]=(t*N-s*P+r*M)*O,e[6]=(m*_-g*T-p*w)*O,e[7]=(d*T-h*_+f*w)*O,e[8]=(o*G-a*P+c*y)*O,e[9]=(i*P-t*G-r*y)*O,e[10]=(g*E-v*_+p*b)*O,e[11]=(u*_-d*E-f*b)*O,e[12]=(a*M-o*A-l*y)*O,e[13]=(t*A-i*M+s*y)*O,e[14]=(v*w-g*R-m*b)*O,e[15]=(d*R-u*w+h*b)*O,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+i,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,g=r*u,v=o*d,m=o*u,p=a*u,b=l*c,w=l*d,_=l*u,R=i.x,E=i.y,T=i.z;return s[0]=(1-(v+p))*R,s[1]=(f+_)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(f-_)*E,s[5]=(1-(h+p))*E,s[6]=(m+b)*E,s[7]=0,s[8]=(g+w)*T,s[9]=(m-b)*T,s[10]=(1-(h+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),yn.copy(this);const c=1/o,d=1/a,u=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=On,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===On)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=On,l=!1){const c=this.elements,d=2/(t-e),u=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===On)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Rr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new I,yn=new nt,dm=new I(0,0,0),um=new I(1,1,1),fi=new I,Wr=new I,an=new I,Wd=new nt,Xd=new Ri;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const $d=new I,rs=new Ri,Jn=new nt,Xr=new I,js=new I,fm=new I,pm=new Ri,qd=new I(1,0,0),Zd=new I(0,1,0),Yd=new I(0,0,1),jd={type:"added"},mm={type:"removed"},os={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Lt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new I,t=new Hn,i=new Ri,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ye}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(qd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Yd,e)}translateOnAxis(e,t){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(js,Xr,this.up):Jn.lookAt(Xr,js,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Jn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jd),os.child=e,this.dispatchEvent(os),os.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mm),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jd),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class An extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gm={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new An;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ta(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=it.workingColorSpace){if(e=Xc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const i=df[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return it.workingToColorSpace(Zt.copy(this),e),Math.round($e(Zt.r*255,0,255))*65536+Math.round($e(Zt.g*255,0,255))*256+Math.round($e(Zt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Zt.copy(this),t);const i=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ft){it.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,s=Zt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL($r);const i=_r(pi.h,$r.h,t),s=_r(pi.s,$r.s,t),r=_r(pi.l,$r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new je;je.NAMES=df;class Zc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Zc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uf extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bn=new I,Kn=new I,La=new I,Qn=new I,as=new I,ls=new I,Jd=new I,Ra=new I,Pa=new I,Ia=new I,Da=new mt,Ua=new mt,Na=new mt;class hn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),bn.subVectors(e,t),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){bn.subVectors(s,t),Kn.subVectors(i,t),La.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Kn),l=bn.dot(La),c=Kn.dot(Kn),d=Kn.dot(La),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Da.setScalar(0),Ua.setScalar(0),Na.setScalar(0),Da.fromBufferAttribute(e,t),Ua.fromBufferAttribute(e,i),Na.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Da,r.x),o.addScaledVector(Ua,r.y),o.addScaledVector(Na,r.z),o}static isFrontFacing(e,t,i,s){return bn.subVectors(i,t),Kn.subVectors(e,t),bn.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),bn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,i),ls.subVectors(r,i),Ra.subVectors(e,i);const l=as.dot(Ra),c=ls.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Pa.subVectors(e,s);const d=as.dot(Pa),u=ls.dot(Pa);if(d>=0&&u<=d)return t.copy(s);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(as,o);Ia.subVectors(e,r);const f=as.dot(Ia),g=ls.dot(Ia);if(g>=0&&f<=g)return t.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ls,a);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Jd.subVectors(r,s),a=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Jd,a);const p=1/(m+v+h);return o=v*p,a=h*p,t.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Zr.subVectors(this.max,Js),cs.subVectors(e.a,Js),ds.subVectors(e.b,Js),us.subVectors(e.c,Js),mi.subVectors(ds,cs),gi.subVectors(us,ds),Ni.subVectors(cs,us);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ni.z,Ni.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ni.z,0,-Ni.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ni.y,Ni.x,0];return!Fa(t,cs,ds,us,Zr)||(t=[1,0,0,0,1,0,0,0,1],!Fa(t,cs,ds,us,Zr))?!1:(Yr.crossVectors(mi,gi),t=[Yr.x,Yr.y,Yr.z],Fa(t,cs,ds,us,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ei=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,qr=new Wn,cs=new I,ds=new I,us=new I,mi=new I,gi=new I,Ni=new I,Js=new I,Zr=new I,Yr=new I,Fi=new I;function Fa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Fi.fromArray(n,r);const a=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),d=i.dot(Fi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Tt=new I,jr=new he;let vm=0;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lc&&(e.usage=this.usage),e}}class hf extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ff extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xm=new Wn,Ks=new I,ka=new I;class Pi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const t=Ks.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ks,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(ka)),this.expandByPoint(Ks.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _m=0;const gn=new nt,Oa=new Lt,hs=new I,ln=new Wn,Qs=new Wn,Ut=new I;class It extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k2(e)?ff:hf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Oa.lookAt(e),Oa.updateMatrix(),this.applyMatrix4(Oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(ln.min,Qs.min),ln.expandByPoint(Ut),Ut.addVectors(ln.max,Qs.max),ln.expandByPoint(Ut)):(ln.expandByPoint(Qs.min),ln.expandByPoint(Qs.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ut.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ut));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ut.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Ut.add(hs)),s=Math.max(s,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new I,l[y]=new I;const c=new I,d=new I,u=new I,h=new he,f=new he,g=new he,v=new I,m=new I;function p(y,M,P){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,M),u.fromBufferAttribute(i,P),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,P),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(A),a[y].add(v),a[M].add(v),a[P].add(v),l[y].add(m),l[M].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,M=b.length;y<M;++y){const P=b[y],A=P.start,G=P.count;for(let N=A,V=A+G;N<V;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const w=new I,_=new I,R=new I,E=new I;function T(y){R.fromBufferAttribute(s,y),E.copy(R);const M=a[y];w.copy(M),w.sub(R.multiplyScalar(R.dot(M))).normalize(),_.crossVectors(E,M);const A=_.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,A)}for(let y=0,M=b.length;y<M;++y){const P=b[y],A=P.start,G=P.count;for(let N=A,V=A+G;N<V;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,d=new I,u=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new jt(h,d,u)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Jt=new I;class fn{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){qo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ym=0;class ji extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Cs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_l&&(i.blendSrc=this.blendSrc),this.blendDst!==yl&&(i.blendDst=this.blendDst),this.blendEquation!==Gi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class cc extends ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const er=new I,ps=new I,ms=new I,gs=new he,tr=new he,mf=new nt,Jr=new I,nr=new I,Kr=new I,Kd=new he,za=new he,Qd=new he;class eu extends Lt{constructor(e=new cc){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new It;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pf(t,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new fn(i,3,0,!1)),fs.setAttribute("uv",new fn(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Qr(Jr.set(-.5,-.5,0),ms,o,ps,s,r),Qr(nr.set(.5,-.5,0),ms,o,ps,s,r),Qr(Kr.set(.5,.5,0),ms,o,ps,s,r),Kd.set(0,0),za.set(1,0),Qd.set(1,1);let a=e.ray.intersectTriangle(Jr,nr,Kr,!1,er);if(a===null&&(Qr(nr.set(-.5,.5,0),ms,o,ps,s,r),za.set(0,1),a=e.ray.intersectTriangle(Jr,Kr,nr,!1,er),a===null))return;const l=e.ray.origin.distanceTo(er);l<e.near||l>e.far||t.push({distance:l,point:er.clone(),uv:hn.getInterpolation(er,Jr,nr,Kr,Kd,za,Qd,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Qr(n,e,t,i,s,r){gs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(tr.x=r*gs.x-s*gs.y,tr.y=s*gs.x+r*gs.y):tr.copy(gs),n.copy(e),n.x+=tr.x,n.y+=tr.y,n.applyMatrix4(mf)}const ti=new I,Ba=new I,eo=new I,vi=new I,Ga=new I,to=new I,Va=new I;class Yc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ba.copy(e).add(t).multiplyScalar(.5),eo.copy(t).sub(e).normalize(),vi.copy(this.origin).sub(Ba);const r=e.distanceTo(t)*.5,o=-this.direction.dot(eo),a=vi.dot(this.direction),l=-vi.dot(eo),c=vi.lengthSq(),d=Math.abs(1-o*o);let u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ba).addScaledVector(eo,h),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){Ga.subVectors(t,e),to.subVectors(i,e),Va.crossVectors(Ga,to);let o=this.direction.dot(Va),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(to.crossVectors(vi,to));if(l<0)return null;const c=a*this.direction.dot(Ga.cross(vi));if(c<0||l+c>o)return null;const d=-a*vi.dot(Va);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tu=new nt,ki=new Yc,no=new Pi,nu=new I,io=new I,so=new I,ro=new I,Ha=new I,oo=new I,iu=new I,ao=new I;class bt extends Lt{constructor(e=new It,t=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Ha.fromBufferAttribute(u,e),o?oo.addScaledVector(Ha,d):oo.addScaledVector(Ha.sub(t),d))}t.add(oo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(no.containsPoint(ki.origin)===!1&&(ki.intersectSphere(no,nu)===null||ki.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),ki.copy(e.ray).applyMatrix4(tu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,R=w;_<R;_+=3){const E=a.getX(_),T=a.getX(_+1),y=a.getX(_+2);s=lo(this,p,e,i,c,d,u,E,T,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=lo(this,o,e,i,c,d,u,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=o[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,R=w;_<R;_+=3){const E=_,T=_+1,y=_+2;s=lo(this,p,e,i,c,d,u,E,T,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,w=m+1,_=m+2;s=lo(this,o,e,i,c,d,u,b,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function bm(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Ti,a),l===null)return null;ao.copy(a),ao.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ao);return c<t.near||c>t.far?null:{distance:c,point:ao.clone(),object:n}}function lo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,io),n.getVertexPosition(l,so),n.getVertexPosition(c,ro);const d=bm(n,e,t,i,io,so,ro,iu);if(d){const u=new I;hn.getBarycoord(iu,io,so,ro,u),s&&(d.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(d.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(d.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new I),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(io,so,ro,h.normal),d.face=h,d.barycoord=u}return d}class gf extends Yt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Vt,d=Vt,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dc extends jt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vs=new nt,su=new nt,co=[],ru=new Wn,wm=new nt,ir=new bt,sr=new Pi;class Yo extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),ru.copy(e.boundingBox).applyMatrix4(vs),this.boundingBox.union(ru)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,vs),sr.copy(e.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(i),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),su.multiplyMatrices(i,vs),ir.matrixWorld=su,ir.raycast(e,co);for(let o=0,a=co.length;o<a;o++){const l=co[o];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gf(new Float32Array(s*this.count),s,this.count,zc,En));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wa=new I,Mm=new I,Sm=new Ye;class yi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Wa.subVectors(i,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sm.getNormalMatrix(e),s=this.coplanarPoint(Wa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new Pi,Em=new he(.5,.5),uo=new I;class jc{constructor(e=new yi,t=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],w=r[13],_=r[14],R=r[15];if(s[0].setComponents(c-o,f-d,p-g,R-b).normalize(),s[1].setComponents(c+o,f+d,p+g,R+b).normalize(),s[2].setComponents(c+a,f+u,p+v,R+w).normalize(),s[3].setComponents(c-a,f-u,p-v,R-w).normalize(),i)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,f-h,p-m,R-_).normalize();else if(s[4].setComponents(c-l,f-h,p-m,R-_).normalize(),t===On)s[5].setComponents(c+l,f+h,p+m,R+_).normalize();else if(t===Rr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);const t=Em.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jc extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jo=new I,Jo=new I,ou=new nt,rr=new Yc,ho=new Pi,Xa=new I,au=new I;class Cm extends Lt{constructor(e=new It,t=new Jc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)jo.fromBufferAttribute(t,s-1),Jo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=jo.distanceTo(Jo);e.setAttribute("lineDistance",new xt(i,1))}else He("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;ou.copy(s).invert(),rr.copy(e.ray).applyMatrix4(ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),b=d.getX(v+1),w=fo(this,e,rr,l,p,b,v);w&&t.push(w)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=fo(this,e,rr,l,v,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const p=fo(this,e,rr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){const v=fo(this,e,rr,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function fo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(jo.fromBufferAttribute(a,s),Jo.fromBufferAttribute(a,r),t.distanceSqToSegment(jo,Jo,Xa,au)>i)return;Xa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:au.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const lu=new I,cu=new I;class vf extends Cm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)lu.fromBufferAttribute(t,s),cu.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lu.distanceTo(cu);e.setAttribute("lineDistance",new xt(i,1))}else He("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xf extends Yt{constructor(e=[],t=Zi,i,s,r,o,a,l,c,d){super(e,t,i,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Or extends Yt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ir extends Yt{constructor(e,t,i=Vn,s,r,o,a=Vt,l=Vt,c,d=li,u=1){if(d!==li&&d!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,s,r,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Am extends Ir{constructor(e,t=Vn,i=Zi,s,r,o=Vt,a=Vt,l,c=li){const d={width:e,height:e,depth:1},u=[d,d,d,d,d,d];super(e,e,t,i,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _f extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ci extends It{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(u,2));function g(v,m,p,b,w,_,R,E,T,y,M){const P=_/T,A=R/y,G=_/2,N=R/2,V=E/2,O=T+1,F=y+1;let z=0,J=0;const K=new I;for(let _e=0;_e<F;_e++){const ve=_e*A-N;for(let ce=0;ce<O;ce++){const Ue=ce*P-G;K[v]=Ue*b,K[m]=ve*w,K[p]=V,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=E>0?1:-1,d.push(K.x,K.y,K.z),u.push(ce/T),u.push(1-_e/y),z+=1}}for(let _e=0;_e<y;_e++)for(let ve=0;ve<T;ve++){const ce=h+ve+O*_e,Ue=h+ve+O*(_e+1),st=h+(ve+1)+O*(_e+1),rt=h+(ve+1)+O*_e;l.push(ce,Ue,rt),l.push(Ue,st,rt),J+=6}a.addGroup(f,J,M),f+=J,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const po=new I,mo=new I,$a=new I,go=new hn;class Tm extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(As*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=go;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),go.getNormal($a),u[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const w=(b+1)%3,_=u[b],R=u[w],E=go[d[b]],T=go[d[w]],y=`${_}_${R}`,M=`${R}_${_}`;M in h&&h[M]?($a.dot(h[M].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),h[M]=null):y in h||(h[y]={index0:c[b],index1:c[w],normal:$a.clone()})}}for(const g in h)if(h[g]){const{index0:v,index1:m}=h[g];po.fromBufferAttribute(a,v),mo.fromBufferAttribute(a,m),f.push(po.x,po.y,po.z),f.push(mo.x,mo.y,mo.z)}this.setAttribute("position",new xt(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){He("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const d=i[s],h=i[s+1]-d,f=(o-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new I,s=[],r=[],o=[],a=new I,l=new nt;for(let f=0;f<=e;f++){const g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Kc extends Xn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lm extends Kc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const vo=new I,qa=new Qc,Za=new Qc,Ya=new Qc;class Rm extends Xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(vo.subVectors(s[0],s[1]).add(s[0]),c=vo);const u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(vo.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=vo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),qa.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,v,m),Za.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,v,m),Ya.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,v,m)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Za.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Ya.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return i.set(qa.calc(l),Za.calc(l),Ya.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function du(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Pm(n,e){const t=1-n;return t*t*e}function Im(n,e){return 2*(1-n)*n*e}function Dm(n,e){return n*n*e}function yr(n,e,t,i){return Pm(n,e)+Im(n,t)+Dm(n,i)}function Um(n,e){const t=1-n;return t*t*t*e}function Nm(n,e){const t=1-n;return 3*t*t*n*e}function Fm(n,e){return 3*(1-n)*n*n*e}function km(n,e){return n*n*n*e}function br(n,e,t,i,s){return Um(n,e)+Nm(n,t)+Fm(n,i)+km(n,s)}class yf extends Xn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Om extends Xn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(br(e,s.x,r.x,o.x,a.x),br(e,s.y,r.y,o.y,a.y),br(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bf extends Xn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends Xn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends Xn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bm extends Xn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y),yr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mf extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(du(a,l.x,c.x,d.x,u.x),du(a,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new he().fromArray(s))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:Lm,CatmullRomCurve3:Rm,CubicBezierCurve:yf,CubicBezierCurve3:Om,EllipseCurve:Kc,LineCurve:bf,LineCurve3:zm,QuadraticBezierCurve:wf,QuadraticBezierCurve3:Bm,SplineCurve:Mf});class Gm extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new uc[s.type]().fromJSON(s))}return this}}class uu extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new bf(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new wf(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new yf(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Mf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Kc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class hc extends uu{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new uu().fromJSON(s))}return this}}function Vm(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Sf(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=qm(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let d=a,u=l;for(let h=t;h<s;h+=t){const f=n[h],g=n[h+1];f<a&&(a=f),g<l&&(l=g),f>d&&(d=f),g>u&&(u=g)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Dr(r,o,t,a,l,c,0),o}function Sf(n,e,t,i,s){let r;if(s===sg(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=hu(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=hu(o/i|0,n[o],n[o+1],r);return r&&ks(r,r.next)&&(Nr(r),r=r.next),r}function Yi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ks(t,t.next)||yt(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Dr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Km(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Wm(n,i,s,r):Hm(n)){e.push(l.i,n.i,c.i),Nr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Xm(Yi(n),e),Dr(n,e,t,i,s,r,2)):o===2&&$m(n,e,t,i,s,r):Dr(Yi(n),e,t,i,s,r,1);break}}}function Hm(n){const e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,d=Math.min(s,r,o),u=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&ur(s,a,r,l,o,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wm(n,e,t,i){const s=n.prev,r=n,o=n.next;if(yt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,u=r.y,h=o.y,f=Math.min(a,l,c),g=Math.min(d,u,h),v=Math.max(a,l,c),m=Math.max(d,u,h),p=fc(f,g,e,t,i),b=fc(v,m,e,t,i);let w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=b;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ur(a,d,l,u,c,h,w.x,w.y)&&yt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ur(a,d,l,u,c,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&ur(a,d,l,u,c,h,w.x,w.y)&&yt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ur(a,d,l,u,c,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Xm(n,e){let t=n;do{const i=t.prev,s=t.next.next;!ks(i,s)&&Cf(i,t,t.next,s)&&Ur(i,s)&&Ur(s,i)&&(e.push(i.i,t.i,s.i),Nr(t),Nr(t.next),t=n=s),t=t.next}while(t!==n);return Yi(t)}function $m(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tg(o,a)){let l=Af(o,a);o=Yi(o,o.next),l=Yi(l,l.next),Dr(o,e,t,i,s,r,0),Dr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function qm(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Sf(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(eg(c))}s.sort(Zm);for(let r=0;r<s.length;r++)t=Ym(s[r],t);return t}function Zm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Ym(n,e){const t=jm(n,e);if(!t)return e;const i=Af(t,n);return Yi(i,i.next),Yi(t,t.next)}function jm(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(ks(n,t))return t;do{if(ks(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Ef(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const u=Math.abs(s-t.y)/(i-t.x);Ur(t,n)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&Jm(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function Jm(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function Km(n,e,t,i){let s=n;do s.z===0&&(s.z=fc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Qm(s)}function Qm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function fc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function eg(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ef(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ur(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&Ef(n,e,t,i,s,r,o,a)}function tg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ng(n,e)&&(Ur(n,e)&&Ur(e,n)&&ig(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||ks(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ks(n,e){return n.x===e.x&&n.y===e.y}function Cf(n,e,t,i){const s=_o(yt(n,e,t)),r=_o(yt(n,e,i)),o=_o(yt(t,i,n)),a=_o(yt(t,i,e));return!!(s!==r&&o!==a||s===0&&xo(n,t,e)||r===0&&xo(n,i,e)||o===0&&xo(t,n,i)||a===0&&xo(t,e,i))}function xo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function _o(n){return n>0?1:n<0?-1:0}function ng(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Cf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ur(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function ig(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Af(n,e){const t=pc(n.i,n.x,n.y),i=pc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hu(n,e,t,i){const s=pc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Nr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function pc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sg(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class rg{static triangulate(e,t,i=2){return Vm(e,t,i)}}class Ss{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Ss.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];fu(e),pu(i,e);let o=e.length;t.forEach(fu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,pu(i,t[l]);const a=rg.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function fu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function pu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ed extends It{constructor(e=new hc([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:og;let w,_=!1,R,E,T,y;if(p){w=p.getSpacedPoints(d),_=!0,h=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;R=p.computeFrenetFrames(d,ee),E=new I,T=new I,y=new I}h||(m=0,f=0,g=0,v=0);const M=a.extractPoints(c);let P=M.shape;const A=M.holes;if(!Ss.isClockWise(P)){P=P.reverse();for(let ee=0,re=A.length;ee<re;ee++){const te=A[ee];Ss.isClockWise(te)&&(A[ee]=te.reverse())}}function N(ee){const te=10000000000000001e-36;let ye=ee[0];for(let L=1;L<=ee.length;L++){const ze=L%ee.length,Me=ee[ze],Ge=Me.x-ye.x,fe=Me.y-ye.y,C=Ge*Ge+fe*fe,x=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ye.x),Math.abs(ye.y)),U=te*x*x;if(C<=U){ee.splice(ze,1),L--;continue}ye=Me}}N(P),A.forEach(N);const V=A.length,O=P;for(let ee=0;ee<V;ee++){const re=A[ee];P=P.concat(re)}function F(ee,re,te){return re||tt("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(re,te)}const z=P.length;function J(ee,re,te){let ye,L,ze;const Me=ee.x-re.x,Ge=ee.y-re.y,fe=te.x-ee.x,C=te.y-ee.y,x=Me*Me+Ge*Ge,U=Me*C-Ge*fe;if(Math.abs(U)>Number.EPSILON){const $=Math.sqrt(x),Q=Math.sqrt(fe*fe+C*C),q=re.x-Ge/$,Te=re.y+Me/$,pe=te.x-C/Q,Fe=te.y+fe/Q,Ve=((pe-q)*C-(Fe-Te)*fe)/(Me*C-Ge*fe);ye=q+Me*Ve-ee.x,L=Te+Ge*Ve-ee.y;const se=ye*ye+L*L;if(se<=2)return new he(ye,L);ze=Math.sqrt(se/2)}else{let $=!1;Me>Number.EPSILON?fe>Number.EPSILON&&($=!0):Me<-Number.EPSILON?fe<-Number.EPSILON&&($=!0):Math.sign(Ge)===Math.sign(C)&&($=!0),$?(ye=-Ge,L=Me,ze=Math.sqrt(x)):(ye=Me,L=Ge,ze=Math.sqrt(x/2))}return new he(ye/ze,L/ze)}const K=[];for(let ee=0,re=O.length,te=re-1,ye=ee+1;ee<re;ee++,te++,ye++)te===re&&(te=0),ye===re&&(ye=0),K[ee]=J(O[ee],O[te],O[ye]);const _e=[];let ve,ce=K.concat();for(let ee=0,re=V;ee<re;ee++){const te=A[ee];ve=[];for(let ye=0,L=te.length,ze=L-1,Me=ye+1;ye<L;ye++,ze++,Me++)ze===L&&(ze=0),Me===L&&(Me=0),ve[ye]=J(te[ye],te[ze],te[Me]);_e.push(ve),ce=ce.concat(ve)}let Ue;if(m===0)Ue=Ss.triangulateShape(O,A);else{const ee=[],re=[];for(let te=0;te<m;te++){const ye=te/m,L=f*Math.cos(ye*Math.PI/2),ze=g*Math.sin(ye*Math.PI/2)+v;for(let Me=0,Ge=O.length;Me<Ge;Me++){const fe=F(O[Me],K[Me],ze);Be(fe.x,fe.y,-L),ye===0&&ee.push(fe)}for(let Me=0,Ge=V;Me<Ge;Me++){const fe=A[Me];ve=_e[Me];const C=[];for(let x=0,U=fe.length;x<U;x++){const $=F(fe[x],ve[x],ze);Be($.x,$.y,-L),ye===0&&C.push($)}ye===0&&re.push(C)}}Ue=Ss.triangulateShape(ee,re)}const st=Ue.length,rt=g+v;for(let ee=0;ee<z;ee++){const re=h?F(P[ee],ce[ee],rt):P[ee];_?(T.copy(R.normals[0]).multiplyScalar(re.x),E.copy(R.binormals[0]).multiplyScalar(re.y),y.copy(w[0]).add(T).add(E),Be(y.x,y.y,y.z)):Be(re.x,re.y,0)}for(let ee=1;ee<=d;ee++)for(let re=0;re<z;re++){const te=h?F(P[re],ce[re],rt):P[re];_?(T.copy(R.normals[ee]).multiplyScalar(te.x),E.copy(R.binormals[ee]).multiplyScalar(te.y),y.copy(w[ee]).add(T).add(E),Be(y.x,y.y,y.z)):Be(te.x,te.y,u/d*ee)}for(let ee=m-1;ee>=0;ee--){const re=ee/m,te=f*Math.cos(re*Math.PI/2),ye=g*Math.sin(re*Math.PI/2)+v;for(let L=0,ze=O.length;L<ze;L++){const Me=F(O[L],K[L],ye);Be(Me.x,Me.y,u+te)}for(let L=0,ze=A.length;L<ze;L++){const Me=A[L];ve=_e[L];for(let Ge=0,fe=Me.length;Ge<fe;Ge++){const C=F(Me[Ge],ve[Ge],ye);_?Be(C.x,C.y+w[d-1].y,w[d-1].x+te):Be(C.x,C.y,u+te)}}}Y(),oe();function Y(){const ee=s.length/3;if(h){let re=0,te=z*re;for(let ye=0;ye<st;ye++){const L=Ue[ye];Oe(L[2]+te,L[1]+te,L[0]+te)}re=d+m*2,te=z*re;for(let ye=0;ye<st;ye++){const L=Ue[ye];Oe(L[0]+te,L[1]+te,L[2]+te)}}else{for(let re=0;re<st;re++){const te=Ue[re];Oe(te[2],te[1],te[0])}for(let re=0;re<st;re++){const te=Ue[re];Oe(te[0]+z*d,te[1]+z*d,te[2]+z*d)}}i.addGroup(ee,s.length/3-ee,0)}function oe(){const ee=s.length/3;let re=0;le(O,re),re+=O.length;for(let te=0,ye=A.length;te<ye;te++){const L=A[te];le(L,re),re+=L.length}i.addGroup(ee,s.length/3-ee,1)}function le(ee,re){let te=ee.length;for(;--te>=0;){const ye=te;let L=te-1;L<0&&(L=ee.length-1);for(let ze=0,Me=d+m*2;ze<Me;ze++){const Ge=z*ze,fe=z*(ze+1),C=re+ye+Ge,x=re+L+Ge,U=re+L+fe,$=re+ye+fe;We(C,x,U,$)}}}function Be(ee,re,te){l.push(ee),l.push(re),l.push(te)}function Oe(ee,re,te){ut(ee),ut(re),ut(te);const ye=s.length/3,L=b.generateTopUV(i,s,ye-3,ye-2,ye-1);qe(L[0]),qe(L[1]),qe(L[2])}function We(ee,re,te,ye){ut(ee),ut(re),ut(ye),ut(re),ut(te),ut(ye);const L=s.length/3,ze=b.generateSideWallUV(i,s,L-6,L-3,L-2,L-1);qe(ze[0]),qe(ze[1]),qe(ze[3]),qe(ze[1]),qe(ze[2]),qe(ze[3])}function ut(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function qe(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return ag(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uc[s.type]().fromJSON(s)),new ed(i,e.options)}}const og={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],d=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,d)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],u=e[i*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(h,1-g),new he(v,1-p)]:[new he(a,1-l),new he(d,1-u),new he(f,1-g),new he(m,1-p)]}};function ag(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ii extends It{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const b=p*h-o;for(let w=0;w<c;w++){const _=w*u-r;g.push(_,-b,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const w=b+c*p,_=b+c*(p+1),R=b+1+c*(p+1),E=b+1+c*p;f.push(w,_,E),f.push(_,R,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ii(e.width,e.height,e.widthSegments,e.heightSegments)}}class td extends It{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let u=e;const h=(t-e)/s,f=new I,g=new he;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const b=p+m,w=b,_=b+i+1,R=b+i+2,E=b+1;a.push(w,_,E),a.push(_,R,E)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nd extends It{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],u=new I,h=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const b=[],w=p/i;let _=0;p===0&&o===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(s+E*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+E*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(E+_,1-w),b.push(c++)}d.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const w=d[p][b+1],_=d[p][b],R=d[p+1][b],E=d[p+1][b+1];(p!==0||o>0)&&f.push(w,_,E),(p!==i-1||l<Math.PI)&&f.push(_,R,E)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(v,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lg extends It{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,s=new I,r=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const u=l[c],h=u.start,f=u.count;for(let g=h,v=h+f;g<v;g+=3)for(let m=0;m<3;m++){const p=a.getX(g+m),b=a.getX(g+(m+1)%3);s.fromBufferAttribute(o,p),r.fromBufferAttribute(o,b),mu(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const d=3*a+c,u=3*a+(c+1)%3;s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,u),mu(s,r,i)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new xt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function mu(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(s)===!0?!1:(t.add(i),t.add(s),!0)}function Os(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=Os(n[t]);for(const s in i)e[s]=i[s]}return e}function cg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const oa={clone:Os,merge:Kt};var dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dg,this.fragmentShader=ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=cg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hg extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class id extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=af,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Nc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fg extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pg extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lf extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const ja=new nt,gu=new I,vu=new I;class mg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gu.setFromMatrixPosition(e.matrixWorld),t.position.copy(gu),vu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vu),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Rr||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const yo=new I,bo=new Ri,Dn=new I;class Rf extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,bo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,Dn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(yo,bo,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,bo,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new I,xu=new he,_u=new he;class tn extends Rf{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,xu,_u),t.subVectors(_u,xu)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(As*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class zr extends Rf{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gg extends mg{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vg extends Lf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new gg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class xg extends Lf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _g extends It{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const xs=-90,_s=1;class yg extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(xs,_s,e,t);s.layers=this.layers,this.add(s);const r=new tn(xs,_s,e,t);r.layers=this.layers,this.add(r);const o=new tn(xs,_s,e,t);o.layers=this.layers,this.add(o);const a=new tn(xs,_s,e,t);a.layers=this.layers,this.add(a);const l=new tn(xs,_s,e,t);l.layers=this.layers,this.add(l);const c=new tn(xs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class bg extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class mc extends pf{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const yu=new nt;class wg{constructor(e,t,i=0,s=1/0){this.ray=new Yc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yu),this}intersectObject(e,t=!0,i=[]){return gc(e,this,i,t),i.sort(bu),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)gc(e[s],this,i,t);return i.sort(bu),i}}function bu(n,e){return n.distance-e.distance}function gc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)gc(r[o],e,t,!0)}}const wu=new I,wo=new I,ys=new I,bs=new I,Ja=new I,Mg=new I,Sg=new I;class Eg{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wu.subVectors(e,this.start),wo.subVectors(this.end,this.start);const i=wo.dot(wo);let r=wo.dot(wu)/i;return t&&(r=$e(r,0,1)),r}closestPointToPoint(e,t,i){const s=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Mg,i=Sg){const s=10000000000000001e-32;let r,o;const a=this.start,l=e.start,c=this.end,d=e.end;ys.subVectors(c,a),bs.subVectors(d,l),Ja.subVectors(a,l);const u=ys.dot(ys),h=bs.dot(bs),f=bs.dot(Ja);if(u<=s&&h<=s)return t.copy(a),i.copy(l),t.sub(i),t.dot(t);if(u<=s)r=0,o=f/h,o=$e(o,0,1);else{const g=ys.dot(Ja);if(h<=s)o=0,r=$e(-g/u,0,1);else{const v=ys.dot(bs),m=u*h-v*v;m!==0?r=$e((v*f-g*h)/m,0,1):r=0,o=(v*r+f)/h,o<0?(o=0,r=$e(-g/u,0,1)):o>1&&(o=1,r=$e((v-g)/u,0,1))}}return t.copy(a).addScaledVector(ys,r),i.copy(l).addScaledVector(bs,o),t.distanceToSquared(i)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Mu extends vf{constructor(e=10,t=10,i=4473924,s=8947848){i=new je(i),s=new je(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let h=0,f=0,g=-a;h<=t;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=h===r?i:s;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const d=new It;d.setAttribute("position",new xt(l,3)),d.setAttribute("color",new xt(c,3));const u=new Jc({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Su(n,e,t,i){const s=Cg(i);switch(t){case rf:return n*e;case zc:return n*e/s.components*s.byteLength;case Bc:return n*e/s.components*s.byteLength;case Ns:return n*e*2/s.components*s.byteLength;case Gc:return n*e*2/s.components*s.byteLength;case of:return n*e*3/s.components*s.byteLength;case Cn:return n*e*4/s.components*s.byteLength;case Vc:return n*e*4/s.components*s.byteLength;case ko:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zo:case Bo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Dl:return Math.max(n,16)*Math.max(e,8)/4;case Rl:case Il:return Math.max(n,8)*Math.max(e,8)/2;case Ul:case Nl:case kl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Fl:case zl:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cg(n){switch(n){case un:case ef:return{byteLength:1,components:1};case Tr:case tf:case ai:return{byteLength:2,components:1};case kc:case Oc:return{byteLength:2,components:4};case Vn:case Fc:case En:return{byteLength:4,components:1};case nf:case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uc}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uc);function Pf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ag(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
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
#endif`,Rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gg=`#ifdef USE_IRIDESCENCE
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
#endif`,Vg=`#ifdef USE_BUMPMAP
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,Kg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sv="gl_FragColor = linearToOutputTexel( gl_FragColor );",rv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dv=`#ifdef USE_ENVMAP
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
#endif`,uv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mv=`#ifdef USE_GRADIENTMAP
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
}`,gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_v=`uniform bool receiveShadow;
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
#endif`,yv=`#ifdef USE_ENVMAP
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
#endif`,bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ev=`PhysicalMaterial material;
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
#endif`,Cv=`uniform sampler2D dfgLUT;
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
}`,Av=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kv=`#if defined( USE_POINTS_UV )
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
#endif`,Ov=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jv=`#ifdef USE_NORMALMAP
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
#endif`,Jv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h1=`float getShadowMask() {
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
}`,f1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
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
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,w1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
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
}`,U1=`#if DEPTH_PACKING == 3200
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
}`,N1=`#define DISTANCE
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
}`,F1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`uniform float scale;
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
}`,B1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,H1=`#define LAMBERT
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define MATCAP
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
}`,$1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,Z1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,j1=`#define PHONG
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
}`,J1=`#define STANDARD
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define TOON
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
}`,e3=`#define TOON
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
}`,t3=`uniform float size;
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
}`,n3=`uniform vec3 diffuse;
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
}`,i3=`#include <common>
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
}`,s3=`uniform vec3 color;
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
}`,r3=`uniform float rotation;
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
}`,o3=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Tg,alphahash_pars_fragment:Lg,alphamap_fragment:Rg,alphamap_pars_fragment:Pg,alphatest_fragment:Ig,alphatest_pars_fragment:Dg,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:kg,begin_vertex:Og,beginnormal_vertex:zg,bsdfs:Bg,iridescence_fragment:Gg,bumpmap_pars_fragment:Vg,clipping_planes_fragment:Hg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:$g,color_fragment:qg,color_pars_fragment:Zg,color_pars_vertex:Yg,color_vertex:jg,common:Jg,cube_uv_reflection_fragment:Kg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:ev,displacementmap_vertex:tv,emissivemap_fragment:nv,emissivemap_pars_fragment:iv,colorspace_fragment:sv,colorspace_pars_fragment:rv,envmap_fragment:ov,envmap_common_pars_fragment:av,envmap_pars_fragment:lv,envmap_pars_vertex:cv,envmap_physical_pars_fragment:yv,envmap_vertex:dv,fog_vertex:uv,fog_pars_vertex:hv,fog_fragment:fv,fog_pars_fragment:pv,gradientmap_pars_fragment:mv,lightmap_pars_fragment:gv,lights_lambert_fragment:vv,lights_lambert_pars_fragment:xv,lights_pars_begin:_v,lights_toon_fragment:bv,lights_toon_pars_fragment:wv,lights_phong_fragment:Mv,lights_phong_pars_fragment:Sv,lights_physical_fragment:Ev,lights_physical_pars_fragment:Cv,lights_fragment_begin:Av,lights_fragment_maps:Tv,lights_fragment_end:Lv,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Pv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Dv,map_fragment:Uv,map_pars_fragment:Nv,map_particle_fragment:Fv,map_particle_pars_fragment:kv,metalnessmap_fragment:Ov,metalnessmap_pars_fragment:zv,morphinstance_vertex:Bv,morphcolor_vertex:Gv,morphnormal_vertex:Vv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:$v,normal_pars_fragment:qv,normal_pars_vertex:Zv,normal_vertex:Yv,normalmap_pars_fragment:jv,clearcoat_normal_fragment_begin:Jv,clearcoat_normal_fragment_maps:Kv,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:o1,roughnessmap_fragment:a1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:d1,shadowmap_vertex:u1,shadowmask_pars_fragment:h1,skinbase_vertex:f1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:x1,tonemapping_fragment:_1,tonemapping_pars_fragment:y1,transmission_fragment:b1,transmission_pars_fragment:w1,uv_pars_fragment:M1,uv_pars_vertex:S1,uv_vertex:E1,worldpos_vertex:C1,background_vert:A1,background_frag:T1,backgroundCube_vert:L1,backgroundCube_frag:R1,cube_vert:P1,cube_frag:I1,depth_vert:D1,depth_frag:U1,distance_vert:N1,distance_frag:F1,equirect_vert:k1,equirect_frag:O1,linedashed_vert:z1,linedashed_frag:B1,meshbasic_vert:G1,meshbasic_frag:V1,meshlambert_vert:H1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:$1,meshnormal_vert:q1,meshnormal_frag:Z1,meshphong_vert:Y1,meshphong_frag:j1,meshphysical_vert:J1,meshphysical_frag:K1,meshtoon_vert:Q1,meshtoon_frag:e3,points_vert:t3,points_frag:n3,shadow_vert:i3,shadow_frag:s3,sprite_vert:r3,sprite_frag:o3},xe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},nn={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};nn.physical={uniforms:Kt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Mo={r:0,b:0,g:0},zi=new Hn,a3=new nt;function l3(n,e,t,i,s,r){const o=new je(0);let a=s===!0?0:1,l,c,d=null,u=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){const _=b.backgroundBlurriness>0;w=e.get(w,_)}return w}function g(b){let w=!1;const _=f(b);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,w){const _=f(w);_&&(_.isCubeTexture||_.mapping===ra)?(c===void 0&&(c=new bt(new ci(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Os(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),zi.copy(w.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a3.makeRotationFromEuler(zi)),c.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,(d!==_||u!==_.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,h=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new bt(new Ii(2,2),new mn({name:"BackgroundMaterial",uniforms:Os(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(_.colorSpace)!==ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=_,u=_.version,h=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(Mo,Tf(n)),t.buffers.color.setClear(Mo.r,Mo.g,Mo.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,w=1){o.set(b),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:g,addToRenderList:v,dispose:p}}function c3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(A,G,N,V,O){let F=!1;const z=u(A,V,N,G);r!==z&&(r=z,c(r.object)),F=f(A,V,N,O),F&&g(A,V,N,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,_(A,G,N,V),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function d(A){return n.deleteVertexArray(A)}function u(A,G,N,V){const O=V.wireframe===!0;let F=i[G.id];F===void 0&&(F={},i[G.id]=F);const z=A.isInstancedMesh===!0?A.id:0;let J=F[z];J===void 0&&(J={},F[z]=J);let K=J[N.id];K===void 0&&(K={},J[N.id]=K);let _e=K[O];return _e===void 0&&(_e=h(l()),K[O]=_e),_e}function h(A){const G=[],N=[],V=[];for(let O=0;O<t;O++)G[O]=0,N[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:V,object:A,attributes:{},index:null}}function f(A,G,N,V){const O=r.attributes,F=G.attributes;let z=0;const J=N.getAttributes();for(const K in J)if(J[K].location>=0){const ve=O[K];let ce=F[K];if(ce===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ve===void 0||ve.attribute!==ce||ce&&ve.data!==ce.data)return!0;z++}return r.attributesNum!==z||r.index!==V}function g(A,G,N,V){const O={},F=G.attributes;let z=0;const J=N.getAttributes();for(const K in J)if(J[K].location>=0){let ve=F[K];ve===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor));const ce={};ce.attribute=ve,ve&&ve.data&&(ce.data=ve.data),O[K]=ce,z++}r.attributes=O,r.attributesNum=z,r.index=V}function v(){const A=r.newAttributes;for(let G=0,N=A.length;G<N;G++)A[G]=0}function m(A){p(A,0)}function p(A,G){const N=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;N[A]=1,V[A]===0&&(n.enableVertexAttribArray(A),V[A]=1),O[A]!==G&&(n.vertexAttribDivisor(A,G),O[A]=G)}function b(){const A=r.newAttributes,G=r.enabledAttributes;for(let N=0,V=G.length;N<V;N++)G[N]!==A[N]&&(n.disableVertexAttribArray(N),G[N]=0)}function w(A,G,N,V,O,F,z){z===!0?n.vertexAttribIPointer(A,G,N,O,F):n.vertexAttribPointer(A,G,N,V,O,F)}function _(A,G,N,V){v();const O=V.attributes,F=N.getAttributes(),z=G.defaultAttributeValues;for(const J in F){const K=F[J];if(K.location>=0){let _e=O[J];if(_e===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(_e=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(_e=A.instanceColor)),_e!==void 0){const ve=_e.normalized,ce=_e.itemSize,Ue=e.get(_e);if(Ue===void 0)continue;const st=Ue.buffer,rt=Ue.type,Y=Ue.bytesPerElement,oe=rt===n.INT||rt===n.UNSIGNED_INT||_e.gpuType===Fc;if(_e.isInterleavedBufferAttribute){const le=_e.data,Be=le.stride,Oe=_e.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<K.locationSize;We++)p(K.location+We,le.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<K.locationSize;We++)m(K.location+We);n.bindBuffer(n.ARRAY_BUFFER,st);for(let We=0;We<K.locationSize;We++)w(K.location+We,ce/K.locationSize,rt,ve,Be*Y,(Oe+ce/K.locationSize*We)*Y,oe)}else{if(_e.isInstancedBufferAttribute){for(let le=0;le<K.locationSize;le++)p(K.location+le,_e.meshPerAttribute);A.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let le=0;le<K.locationSize;le++)m(K.location+le);n.bindBuffer(n.ARRAY_BUFFER,st);for(let le=0;le<K.locationSize;le++)w(K.location+le,ce/K.locationSize,rt,ve,ce*Y,ce/K.locationSize*le*Y,oe)}}else if(z!==void 0){const ve=z[J];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(K.location,ve);break;case 3:n.vertexAttrib3fv(K.location,ve);break;case 4:n.vertexAttrib4fv(K.location,ve);break;default:n.vertexAttrib1fv(K.location,ve)}}}}b()}function R(){M();for(const A in i){const G=i[A];for(const N in G){const V=G[N];for(const O in V){const F=V[O];for(const z in F)d(F[z].object),delete F[z];delete V[O]}}delete i[A]}}function E(A){if(i[A.id]===void 0)return;const G=i[A.id];for(const N in G){const V=G[N];for(const O in V){const F=V[O];for(const z in F)d(F[z].object),delete F[z];delete V[O]}}delete i[A.id]}function T(A){for(const G in i){const N=i[G];for(const V in N){const O=N[V];if(O[A.id]===void 0)continue;const F=O[A.id];for(const z in F)d(F[z].object),delete F[z];delete O[A.id]}}}function y(A){for(const G in i){const N=i[G],V=A.isInstancedMesh===!0?A.id:0,O=N[V];if(O!==void 0){for(const F in O){const z=O[F];for(const J in z)d(z[J].object),delete z[J];delete O[F]}delete N[V],Object.keys(N).length===0&&delete i[G]}}}function M(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function d3(n,e,t){let i;function s(c){i=c}function r(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,u){u!==0&&(n.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function u3(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Cn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const y=T===ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==En&&!y)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(He("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:R,samples:E}}function h3(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new yi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||s;return s=h,i=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{const b=r?0:i,w=b*4;let _=p.clippingState||null;l.value=_,_=d(g,h,w,f);for(let R=0;R!==w;++R)_[R]=t[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Mi=4,Eu=[.125,.215,.35,.446,.526,.582],Vi=20,f3=256,or=new zr,Cu=new je;let Ka=null,Qa=0,el=0,tl=!1;const p3=new I;class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=p3}=r;Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ka,Qa,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zi||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ka=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ai,format:Cn,colorSpace:Fs,depthBuffer:!1},s=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=m3(r)),this._blurMaterial=v3(r,e,t),this._ggxMaterial=g3(r,e,t)}return s}_compileMaterial(e){const t=new bt(new It,e);this._renderer.compile(t,or)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cu),u.toneMapping=zn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new ci,new pn({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Cu),p=!0);for(let w=0;w<6;w++){const _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));const R=this._cubeSize;ws(s,_*R,w>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=h,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zi||e.mapping===Us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,or)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),h=0+c*1.25,f=u*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Mi?i-g+Mi:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ws(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,or),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ws(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(a,or)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const d=3,u=this._lodMeshes[s];u.material=c;const h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Vi-1),v=r/g,m=isFinite(r)?1+Math.floor(d*v):Vi;m>Vi&&He(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let b=0;for(let T=0;T<Vi;++T){const y=T/v,M=Math.exp(-y*y/2);p.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-i;const _=this._sizeLods[s],R=3*_*(s>w-Mi?s-w+Mi:0),E=4*(this._cubeSize-_);ws(t,R,E,3*_,2*_),l.setRenderTarget(t),l.render(u,or)}}function m3(n){const e=[],t=[],i=[];let s=n;const r=n-Mi+1+Eu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Mi?l=Eu[o-n+Mi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),w=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,y=E>2?0:-1,M=[T,y,0,T+2/3,y,0,T+2/3,y+1,0,T,y,0,T+2/3,y+1,0,T,y+1,0];b.set(M,v*g*E),w.set(h,m*g*E);const P=[E,E,E,E,E,E];_.set(P,p*g*E)}const R=new It;R.setAttribute("position",new jt(b,v)),R.setAttribute("uv",new jt(w,m)),R.setAttribute("faceIndex",new jt(_,p)),i.push(new bt(R,null)),s>Mi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Tu(n,e,t){const i=new Tn(n,e,t);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function g3(n,e,t){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:f3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:aa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function v3(n,e,t){const i=new Float32Array(Vi),s=new I(0,1,0);return new mn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:aa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Lu(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ru(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}class If extends Tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new xf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ci(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ri});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Ht),new yg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function x3(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===_a||f===ya)if(e.has(h)){const g=e.get(h).texture;return a(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const v=new If(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,g=f===_a||f===ya,v=f===Zi||f===Us;if(g||v){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Au(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Au(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",d),m.texture):null}}}return h}function a(h,f){return f===_a?h.mapping=Zi:f===ya&&(h.mapping=Us),h}function l(h){let f=0;const g=6;for(let v=0;v<g;v++)h[v]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(h){const f=h.target;f.removeEventListener("dispose",d);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function _3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Zo("WebGLRenderer: "+i+" extension not supported."),s}}}function y3(n,e,t,i){const s={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(g===void 0)return;if(f!==null){const b=f.array;v=f.version;for(let w=0,_=b.length;w<_;w+=3){const R=b[w+0],E=b[w+1],T=b[w+2];h.push(R,E,E,T,T,R)}}else{const b=g.array;v=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){const R=w+0,E=w+1,T=w+2;h.push(R,E,E,T,T,R)}}const m=new(g.count>=65535?ff:hf)(h,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function b3(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){n.drawElements(i,f,r,h*o),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,h*o,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*v[b];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function w3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:tt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function M3(n,e,t){const i=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let M=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let _=a.attributes.position.count*w,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*R*4*u),T=new cf(E,_,R,u);T.type=En,T.needsUpdate=!0;const y=w*4;for(let P=0;P<u;P++){const A=m[P],G=p[P],N=b[P],V=_*R*4*P;for(let O=0;O<A.count;O++){const F=O*y;f===!0&&(s.fromBufferAttribute(A,O),E[V+F+0]=s.x,E[V+F+1]=s.y,E[V+F+2]=s.z,E[V+F+3]=0),g===!0&&(s.fromBufferAttribute(G,O),E[V+F+4]=s.x,E[V+F+5]=s.y,E[V+F+6]=s.z,E[V+F+7]=0),v===!0&&(s.fromBufferAttribute(N,O),E[V+F+8]=s.x,E[V+F+9]=s.y,E[V+F+10]=s.z,E[V+F+11]=N.itemSize===4?s.w:1)}}h={count:u,texture:T,size:new he(_,R)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function S3(n,e,t,i,s){let r=new WeakMap;function o(c){const d=s.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==d&&(f.update(),r.set(f,d))}return h}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const E3={[$h]:"LINEAR_TONE_MAPPING",[qh]:"REINHARD_TONE_MAPPING",[Zh]:"CINEON_TONE_MAPPING",[Yh]:"ACES_FILMIC_TONE_MAPPING",[Jh]:"AGX_TONE_MAPPING",[Kh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function C3(n,e,t,i,s){const r=new Tn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Tn(e,t,{type:ai,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new hg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new bt(a,l),d=new zr(-1,1,1,-1,0,1);let u=null,h=null,f=!1,g,v=null,m=[],p=!1;this.setSize=function(b,w){r.setSize(b,w),o.setSize(b,w);for(let _=0;_<m.length;_++){const R=m[_];R.setSize&&R.setSize(b,w)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const w=r.width,_=r.height;for(let R=0;R<m.length;R++){const E=m[R];E.setSize&&E.setSize(w,_)}},this.begin=function(b,w){if(f||b.toneMapping===zn&&m.length===0)return!1;if(v=w,w!==null){const _=w.width,R=w.height;(r.width!==_||r.height!==R)&&this.setSize(_,R)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=zn,!0},this.hasRenderPass=function(){return p},this.end=function(b,w){b.toneMapping=g,f=!0;let _=r,R=o;for(let E=0;E<m.length;E++){const T=m[E];if(T.enabled!==!1&&(T.render(b,R,_,w),T.needsSwap!==!1)){const y=_;_=R,R=y}}if(u!==b.outputColorSpace||h!==b.toneMapping){u=b.outputColorSpace,h=b.toneMapping,l.defines={},it.getTransfer(u)===ct&&(l.defines.SRGB_TRANSFER="");const E=E3[h];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(c,d),v=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Df=new Yt,vc=new Ir(1,1),Uf=new cf,Nf=new cm,Ff=new xf,Pu=[],Iu=[],Du=new Float32Array(16),Uu=new Float32Array(9),Nu=new Float32Array(4);function Zs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function la(n,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function A3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function T3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function L3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function R3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function P3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Nu.set(i),n.uniformMatrix2fv(this.addr,!1,Nu),Pt(t,i)}}function I3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Uu.set(i),n.uniformMatrix3fv(this.addr,!1,Uu),Pt(t,i)}}function D3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Du.set(i),n.uniformMatrix4fv(this.addr,!1,Du),Pt(t,i)}}function U3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function N3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function F3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function k3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function O3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function G3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function V3(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vc.compareFunction=t.isReversedDepthBuffer()?Wc:Hc,r=vc):r=Df,t.setTexture2D(e||r,s)}function H3(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Nf,s)}function W3(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Ff,s)}function X3(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Uf,s)}function $3(n){switch(n){case 5126:return A3;case 35664:return T3;case 35665:return L3;case 35666:return R3;case 35674:return P3;case 35675:return I3;case 35676:return D3;case 5124:case 35670:return U3;case 35667:case 35671:return N3;case 35668:case 35672:return F3;case 35669:case 35673:return k3;case 5125:return O3;case 36294:return z3;case 36295:return B3;case 36296:return G3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return H3;case 35680:case 36300:case 36308:case 36293:return W3;case 36289:case 36303:case 36311:case 36292:return X3}}function q3(n,e){n.uniform1fv(this.addr,e)}function Z3(n,e){const t=Zs(e,this.size,2);n.uniform2fv(this.addr,t)}function Y3(n,e){const t=Zs(e,this.size,3);n.uniform3fv(this.addr,t)}function j3(n,e){const t=Zs(e,this.size,4);n.uniform4fv(this.addr,t)}function J3(n,e){const t=Zs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K3(n,e){const t=Zs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Q3(n,e){const t=Zs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ex(n,e){n.uniform1iv(this.addr,e)}function tx(n,e){n.uniform2iv(this.addr,e)}function nx(n,e){n.uniform3iv(this.addr,e)}function ix(n,e){n.uniform4iv(this.addr,e)}function sx(n,e){n.uniform1uiv(this.addr,e)}function rx(n,e){n.uniform2uiv(this.addr,e)}function ox(n,e){n.uniform3uiv(this.addr,e)}function ax(n,e){n.uniform4uiv(this.addr,e)}function lx(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=vc:o=Df;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function cx(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Nf,r[o])}function dx(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ff,r[o])}function ux(n,e,t){const i=this.cache,s=e.length,r=la(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Pt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Uf,r[o])}function hx(n){switch(n){case 5126:return q3;case 35664:return Z3;case 35665:return Y3;case 35666:return j3;case 35674:return J3;case 35675:return K3;case 35676:return Q3;case 5124:case 35670:return ex;case 35667:case 35671:return tx;case 35668:case 35672:return nx;case 35669:case 35673:return ix;case 5125:return sx;case 36294:return rx;case 36295:return ox;case 36296:return ax;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return ux}}class fx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$3(t.type)}}class px{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hx(t.type)}}class mx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function Fu(n,e){n.seq.push(e),n.map[e.id]=e}function gx(n,e,t){const i=n.name,s=i.length;for(nl.lastIndex=0;;){const r=nl.exec(i),o=nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Fu(t,c===void 0?new fx(a,n,e):new px(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new mx(a),Fu(t,u)),t=u}}}class Go{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);gx(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function ku(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const vx=37297;let xx=0;function _x(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ou=new Ye;function yx(n){it._getMatrix(Ou,it.workingColorSpace,n);const e=`mat3( ${Ou.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(n)){case Xo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+_x(n.getShaderSource(e),a)}else return r}function bx(n,e){const t=yx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const wx={[$h]:"Linear",[qh]:"Reinhard",[Zh]:"Cineon",[Yh]:"ACESFilmic",[Jh]:"AgX",[Kh]:"Neutral",[jh]:"Custom"};function Mx(n,e){const t=wx[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const So=new I;function Sx(){it.getLuminanceCoefficients(So);const n=So.x.toFixed(4),e=So.y.toFixed(4),t=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Cx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ax(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function hr(n){return n!==""}function Bu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(Tx,Rx)}const Lx=new Map;function Rx(n,e){let t=Je[e];if(t===void 0){const i=Lx.get(e);if(i!==void 0)t=Je[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xc(t)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace(Px,Ix)}function Ix(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const Dx={[Fo]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function Ux(n){return Dx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Nx={[Zi]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE_UV"};function Fx(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const kx={[Us]:"ENVMAP_MODE_REFRACTION"};function Ox(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":kx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zx={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[C2]:"ENVMAP_BLENDING_MIX",[A2]:"ENVMAP_BLENDING_ADD"};function Bx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":zx[n.combine]||"ENVMAP_BLENDING_NONE"}function Gx(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Vx(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Ux(t),c=Fx(t),d=Ox(t),u=Bx(t),h=Gx(t),f=Ex(t),g=Cx(r),v=s.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Je.tonemapping_pars_fragment:"",t.toneMapping!==zn?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hr).join(`
`)),o=xc(o),o=Bu(o,t),o=Gu(o,t),a=xc(a),a=Bu(a,t),a=Gu(a,t),o=Vu(o),a=Vu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=b+m+o,_=b+p+a,R=ku(s,s.VERTEX_SHADER,w),E=ku(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(A){if(n.debug.checkShaderErrors){const G=s.getProgramInfoLog(v)||"",N=s.getShaderInfoLog(R)||"",V=s.getShaderInfoLog(E)||"",O=G.trim(),F=N.trim(),z=V.trim();let J=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,R,E);else{const _e=zu(s,R,"vertex"),ve=zu(s,E,"fragment");tt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+_e+`
`+ve)}else O!==""?He("WebGLProgram: Program Info Log:",O):(F===""||z==="")&&(K=!1);K&&(A.diagnostics={runnable:J,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(E),y=new Go(s,v),M=Ax(s,v)}let y;this.getUniforms=function(){return y===void 0&&T(this),y};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(v,vx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}let Hx=0;class Wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xx(e),t.set(e,i)),i}}class Xx{constructor(e){this.id=Hx++,this.code=e,this.usedTimes=0}}function $x(n,e,t,i,s,r){const o=new qc,a=new Wx,l=new Set,c=[],d=new Map,u=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,M,P,A,G){const N=A.fog,V=G.geometry,O=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?A.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,z=e.get(y.envMap||O,F),J=z&&z.mapping===ra?z.image.height:null,K=f[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&He("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const _e=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=_e!==void 0?_e.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let Ue,st,rt,Y;if(K){const lt=nn[K];Ue=lt.vertexShader,st=lt.fragmentShader}else Ue=y.vertexShader,st=y.fragmentShader,a.update(y),rt=a.getVertexShaderID(y),Y=a.getFragmentShaderID(y);const oe=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),Be=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,We=!!y.map,ut=!!y.matcap,qe=!!z,ee=!!y.aoMap,re=!!y.lightMap,te=!!y.bumpMap,ye=!!y.normalMap,L=!!y.displacementMap,ze=!!y.emissiveMap,Me=!!y.metalnessMap,Ge=!!y.roughnessMap,fe=y.anisotropy>0,C=y.clearcoat>0,x=y.dispersion>0,U=y.iridescence>0,$=y.sheen>0,Q=y.transmission>0,q=fe&&!!y.anisotropyMap,Te=C&&!!y.clearcoatMap,pe=C&&!!y.clearcoatNormalMap,Fe=C&&!!y.clearcoatRoughnessMap,Ve=U&&!!y.iridescenceMap,se=U&&!!y.iridescenceThicknessMap,de=$&&!!y.sheenColorMap,Le=$&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Se=!!y.specularColorMap,Ke=!!y.specularIntensityMap,D=Q&&!!y.transmissionMap,ge=Q&&!!y.thicknessMap,ue=!!y.gradientMap,Ae=!!y.alphaMap,ae=y.alphaTest>0,Z=!!y.alphaHash,Re=!!y.extensions;let Xe=zn;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xe=n.toneMapping);const gt={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Ue,fragmentShader:st,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Be,instancingColor:Be&&G.instanceColor!==null,instancingMorph:Be&&G.morphTexture!==null,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Fs,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:ut,envMap:qe,envMapMode:qe&&z.mapping,envMapCubeUVHeight:J,aoMap:ee,lightMap:re,bumpMap:te,normalMap:ye,displacementMap:L,emissiveMap:ze,normalMapObjectSpace:ye&&y.normalMapType===R2,normalMapTangentSpace:ye&&y.normalMapType===af,metalnessMap:Me,roughnessMap:Ge,anisotropy:fe,anisotropyMap:q,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:pe,clearcoatRoughnessMap:Fe,dispersion:x,iridescence:U,iridescenceMap:Ve,iridescenceThicknessMap:se,sheen:$,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:Se,specularIntensityMap:Ke,transmission:Q,transmissionMap:D,thicknessMap:ge,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Cs&&y.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ae,alphaHash:Z,combine:y.combine,mapUv:We&&g(y.map.channel),aoMapUv:ee&&g(y.aoMap.channel),lightMapUv:re&&g(y.lightMap.channel),bumpMapUv:te&&g(y.bumpMap.channel),normalMapUv:ye&&g(y.normalMap.channel),displacementMapUv:L&&g(y.displacementMap.channel),emissiveMapUv:ze&&g(y.emissiveMap.channel),metalnessMapUv:Me&&g(y.metalnessMap.channel),roughnessMapUv:Ge&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:Te&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(y.sheenRoughnessMap.channel),specularMapUv:Pe&&g(y.specularMap.channel),specularColorMapUv:Se&&g(y.specularColorMap.channel),specularIntensityMapUv:Ke&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ge&&g(y.thicknessMap.channel),alphaMapUv:Ae&&g(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ye||fe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(We||Ae),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&ye===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xe,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ct,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&it.getTransfer(y.emissiveMap.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Re&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&y.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=l.has(1),gt.vertexUv2s=l.has(2),gt.vertexUv3s=l.has(3),l.clear(),gt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)M.push(P),M.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(M,y),b(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function w(y){const M=f[y.type];let P;if(M){const A=nn[M];P=oa.clone(A.uniforms)}else P=y.uniforms;return P}function _(y,M){let P=d.get(M);return P!==void 0?++P.usedTimes:(P=new Vx(n,M,y,s),c.push(P),d.set(M,P)),P}function R(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function T(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:T}}function qx(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Wu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Xu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,g,v,m,p){let b=n[e];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[e]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=o(h),b.groupOrder=v,b.renderOrder=h.renderOrder,b.z=m,b.group=p),e++,b}function l(h,f,g,v,m,p){const b=a(h,f,g,v,m,p);g.transmission>0?i.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(h,f,g,v,m,p){const b=a(h,f,g,v,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):t.unshift(b)}function d(h,f){t.length>1&&t.sort(h||Zx),i.length>1&&i.sort(f||Wu),s.length>1&&s.sort(f||Wu)}function u(){for(let h=e,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function Yx(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Xu,n.set(i,[o])):s>=r.length?(o=new Xu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function jx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new je};break;case"SpotLight":t={position:new I,direction:new I,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Jx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Kx=0;function Qx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function e_(n){const e=new jx,t=Jx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const s=new I,r=new nt,o=new nt;function a(c){let d=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,w=0,_=0,R=0,E=0,T=0;c.sort(Qx);for(let M=0,P=c.length;M<P;M++){const A=c[M],G=A.color,N=A.intensity,V=A.distance;let O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ns?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=G.r*N,u+=G.g*N,h+=G.b*N;else if(A.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(A.sh.coefficients[F],N);T++}else if(A.isDirectionalLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.directionalShadow[f]=J,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=A.shadow.matrix,b++}i.directional[f]=F,f++}else if(A.isSpotLight){const F=e.get(A);F.position.setFromMatrixPosition(A.matrixWorld),F.color.copy(G).multiplyScalar(N),F.distance=V,F.coneCos=Math.cos(A.angle),F.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),F.decay=A.decay,i.spot[v]=F;const z=A.shadow;if(A.map&&(i.spotLightMap[R]=A.map,R++,z.updateMatrices(A),A.castShadow&&E++),i.spotLightMatrix[v]=z.matrix,A.castShadow){const J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=O,_++}v++}else if(A.isRectAreaLight){const F=e.get(A);F.color.copy(G).multiplyScalar(N),F.halfWidth.set(A.width*.5,0,0),F.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=F,m++}else if(A.isPointLight){const F=e.get(A);if(F.color.copy(A.color).multiplyScalar(A.intensity),F.distance=A.distance,F.decay=A.decay,A.castShadow){const z=A.shadow,J=t.get(A);J.shadowIntensity=z.intensity,J.shadowBias=z.bias,J.shadowNormalBias=z.normalBias,J.shadowRadius=z.radius,J.shadowMapSize=z.mapSize,J.shadowCameraNear=z.camera.near,J.shadowCameraFar=z.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=A.shadow.matrix,w++}i.point[g]=F,g++}else if(A.isHemisphereLight){const F=e.get(A);F.skyColor.copy(A.color).multiplyScalar(N),F.groundColor.copy(A.groundColor).multiplyScalar(N),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==f||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==w||y.numSpotShadows!==_||y.numSpotMaps!==R||y.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,y.directionalLength=f,y.pointLength=g,y.spotLength=v,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=w,y.numSpotShadows=_,y.numSpotMaps=R,y.numLightProbes=T,i.version=Kx++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const w=c[p];if(w.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=i.spot[f];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function $u(n){const e=new e_(n),t=[],i=[];function s(d){c.camera=d,t.length=0,i.length=0}function r(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t_(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new $u(n),e.set(s,[a])):r>=o.length?(a=new $u(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const n_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i_=`uniform sampler2D shadow_pass;
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
}`,s_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],r_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qu=new nt,ar=new I,il=new I;function o_(n,e,t){let i=new jc;const s=new he,r=new he,o=new mt,a=new fg,l=new pg,c={},d=t.maxTextureSize,u={[Ti]:rn,[rn]:Ti,[ii]:ii},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:n_,fragmentShader:i_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fo;let p=this.type;this.render=function(E,T,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===a2&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fo);const M=n.getRenderTarget(),P=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ri),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const N=p!==this.type;N&&T.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(O=>O.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,O=E.length;V<O;V++){const F=E[V],z=F.shadow;if(z===void 0){He("WebGLShadowMap:",F,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const J=z.getFrameExtents();s.multiply(J),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,z.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=K,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===dr){if(F.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Tn(s.x,s.y,{format:Ns,type:ai,minFilter:Ht,magFilter:Ht,generateMipmaps:!1}),z.map.texture.name=F.name+".shadowMap",z.map.depthTexture=new Ir(s.x,s.y,En),z.map.depthTexture.name=F.name+".shadowMapDepth",z.map.depthTexture.format=li,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt}else F.isPointLight?(z.map=new If(s.x),z.map.depthTexture=new Am(s.x,Vn)):(z.map=new Tn(s.x,s.y),z.map.depthTexture=new Ir(s.x,s.y,Vn)),z.map.depthTexture.name=F.name+".shadowMap",z.map.depthTexture.format=li,this.type===Fo?(z.map.depthTexture.compareFunction=K?Wc:Hc,z.map.depthTexture.minFilter=Ht,z.map.depthTexture.magFilter=Ht):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vt,z.map.depthTexture.magFilter=Vt);z.camera.updateProjectionMatrix()}const _e=z.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<_e;ve++){if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(z.map),n.clear());const ce=z.getViewport(ve);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(o)}if(F.isPointLight){const ce=z.camera,Ue=z.matrix,st=F.distance||ce.far;st!==ce.far&&(ce.far=st,ce.updateProjectionMatrix()),ar.setFromMatrixPosition(F.matrixWorld),ce.position.copy(ar),il.copy(ce.position),il.add(s_[ve]),ce.up.copy(r_[ve]),ce.lookAt(il),ce.updateMatrixWorld(),Ue.makeTranslation(-ar.x,-ar.y,-ar.z),qu.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),z._frustum.setFromProjectionMatrix(qu,ce.coordinateSystem,ce.reversedDepth)}else z.updateMatrices(F);i=z.getFrustum(),_(T,y,z.camera,F,this.type)}z.isPointLightShadow!==!0&&this.type===dr&&b(z,y),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,P,A)};function b(E,T){const y=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Tn(s.x,s.y,{format:Ns,type:ai})),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,y,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,y,f,v,null)}function w(E,T,y,M){let P=null;const A=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)P=A;else if(P=y.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const G=P.uuid,N=T.uuid;let V=c[G];V===void 0&&(V={},c[G]=V);let O=V[N];O===void 0&&(O=P.clone(),V[N]=O,T.addEventListener("dispose",R)),P=O}if(P.visible=T.visible,P.wireframe=T.wireframe,M===dr?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:u[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const G=n.properties.get(P);G.light=y}return P}function _(E,T,y,M,P){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===dr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const N=e.update(E),V=E.material;if(Array.isArray(V)){const O=N.groups;for(let F=0,z=O.length;F<z;F++){const J=O[F],K=V[J.materialIndex];if(K&&K.visible){const _e=w(E,K,M,P);E.onBeforeShadow(n,E,T,y,N,_e,J),n.renderBufferDirect(y,null,N,_e,E,J),E.onAfterShadow(n,E,T,y,N,_e,J)}}}else if(V.visible){const O=w(E,V,M,P);E.onBeforeShadow(n,E,T,y,N,O,null),n.renderBufferDirect(y,null,N,O,E,null),E.onAfterShadow(n,E,T,y,N,O,null)}}const G=E.children;for(let N=0,V=G.length;N<V;N++)_(G[N],T,y,M,P)}function R(E){E.target.removeEventListener("dispose",R);for(const y in c){const M=c[y],P=E.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function a_(n,e){function t(){let D=!1;const ge=new mt;let ue=null;const Ae=new mt(0,0,0,0);return{setMask:function(ae){ue!==ae&&!D&&(n.colorMask(ae,ae,ae,ae),ue=ae)},setLocked:function(ae){D=ae},setClear:function(ae,Z,Re,Xe,gt){gt===!0&&(ae*=Xe,Z*=Xe,Re*=Xe),ge.set(ae,Z,Re,Xe),Ae.equals(ge)===!1&&(n.clearColor(ae,Z,Re,Xe),Ae.copy(ge))},reset:function(){D=!1,ue=null,Ae.set(-1,0,0,0)}}}function i(){let D=!1,ge=!1,ue=null,Ae=null,ae=null;return{setReversed:function(Z){if(ge!==Z){const Re=e.get("EXT_clip_control");Z?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ge=Z;const Xe=ae;ae=null,this.setClear(Xe)}},getReversed:function(){return ge},setTest:function(Z){Z?oe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(Z){ue!==Z&&!D&&(n.depthMask(Z),ue=Z)},setFunc:function(Z){if(ge&&(Z=B2[Z]),Ae!==Z){switch(Z){case bl:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Ml:n.depthFunc(n.LESS);break;case Ds:n.depthFunc(n.LEQUAL);break;case Sl:n.depthFunc(n.EQUAL);break;case El:n.depthFunc(n.GEQUAL);break;case Cl:n.depthFunc(n.GREATER);break;case Al:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=Z}},setLocked:function(Z){D=Z},setClear:function(Z){ae!==Z&&(ae=Z,ge&&(Z=1-Z),n.clearDepth(Z))},reset:function(){D=!1,ue=null,Ae=null,ae=null,ge=!1}}}function s(){let D=!1,ge=null,ue=null,Ae=null,ae=null,Z=null,Re=null,Xe=null,gt=null;return{setTest:function(lt){D||(lt?oe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!D&&(n.stencilMask(lt),ge=lt)},setFunc:function(lt,Zn,Yn){(ue!==lt||Ae!==Zn||ae!==Yn)&&(n.stencilFunc(lt,Zn,Yn),ue=lt,Ae=Zn,ae=Yn)},setOp:function(lt,Zn,Yn){(Z!==lt||Re!==Zn||Xe!==Yn)&&(n.stencilOp(lt,Zn,Yn),Z=lt,Re=Zn,Xe=Yn)},setLocked:function(lt){D=lt},setClear:function(lt){gt!==lt&&(n.clearStencil(lt),gt=lt)},reset:function(){D=!1,ge=null,ue=null,Ae=null,ae=null,Z=null,Re=null,Xe=null,gt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,_=null,R=null,E=null,T=new je(0,0,0),y=0,M=!1,P=null,A=null,G=null,N=null,V=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=z>=1):J.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=z>=2);let K=null,_e={};const ve=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),Ue=new mt().fromArray(ve),st=new mt().fromArray(ce);function rt(D,ge,ue,Ae){const ae=new Uint8Array(4),Z=n.createTexture();n.bindTexture(D,Z),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<ue;Re++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ge+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Z}const Y={};Y[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(n.DEPTH_TEST),o.setFunc(Ds),te(!1),ye(Dd),oe(n.CULL_FACE),ee(ri);function oe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function le(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function Be(D,ge){return u[D]!==ge?(n.bindFramebuffer(D,ge),u[D]=ge,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(D,ge){let ue=f,Ae=!1;if(D){ue=h.get(ge),ue===void 0&&(ue=[],h.set(ge,ue));const ae=D.textures;if(ue.length!==ae.length||ue[0]!==n.COLOR_ATTACHMENT0){for(let Z=0,Re=ae.length;Z<Re;Z++)ue[Z]=n.COLOR_ATTACHMENT0+Z;ue.length=ae.length,Ae=!0}}else ue[0]!==n.BACK&&(ue[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(ue)}function We(D){return g!==D?(n.useProgram(D),g=D,!0):!1}const ut={[Gi]:n.FUNC_ADD,[c2]:n.FUNC_SUBTRACT,[d2]:n.FUNC_REVERSE_SUBTRACT};ut[u2]=n.MIN,ut[h2]=n.MAX;const qe={[f2]:n.ZERO,[p2]:n.ONE,[m2]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[b2]:n.SRC_ALPHA_SATURATE,[_2]:n.DST_COLOR,[v2]:n.DST_ALPHA,[g2]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[y2]:n.ONE_MINUS_DST_COLOR,[x2]:n.ONE_MINUS_DST_ALPHA,[w2]:n.CONSTANT_COLOR,[M2]:n.ONE_MINUS_CONSTANT_COLOR,[S2]:n.CONSTANT_ALPHA,[E2]:n.ONE_MINUS_CONSTANT_ALPHA};function ee(D,ge,ue,Ae,ae,Z,Re,Xe,gt,lt){if(D===ri){v===!0&&(le(n.BLEND),v=!1);return}if(v===!1&&(oe(n.BLEND),v=!0),D!==l2){if(D!==m||lt!==M){if((p!==Gi||_!==Gi)&&(n.blendEquation(n.FUNC_ADD),p=Gi,_=Gi),lt)switch(D){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFunc(n.ONE,n.ONE);break;case Nd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ud:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nd:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fd:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}b=null,w=null,R=null,E=null,T.set(0,0,0),y=0,m=D,M=lt}return}ae=ae||ge,Z=Z||ue,Re=Re||Ae,(ge!==p||ae!==_)&&(n.blendEquationSeparate(ut[ge],ut[ae]),p=ge,_=ae),(ue!==b||Ae!==w||Z!==R||Re!==E)&&(n.blendFuncSeparate(qe[ue],qe[Ae],qe[Z],qe[Re]),b=ue,w=Ae,R=Z,E=Re),(Xe.equals(T)===!1||gt!==y)&&(n.blendColor(Xe.r,Xe.g,Xe.b,gt),T.copy(Xe),y=gt),m=D,M=!1}function re(D,ge){D.side===ii?le(n.CULL_FACE):oe(n.CULL_FACE);let ue=D.side===rn;ge&&(ue=!ue),te(ue),D.blending===Cs&&D.transparent===!1?ee(ri):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Ae=D.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ze(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(D){P!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),P=D)}function ye(D){D!==r2?(oe(n.CULL_FACE),D!==A&&(D===Dd?n.cullFace(n.BACK):D===o2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),A=D}function L(D){D!==G&&(F&&n.lineWidth(D),G=D)}function ze(D,ge,ue){D?(oe(n.POLYGON_OFFSET_FILL),(N!==ge||V!==ue)&&(N=ge,V=ue,o.getReversed()&&(ge=-ge),n.polygonOffset(ge,ue))):le(n.POLYGON_OFFSET_FILL)}function Me(D){D?oe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function Ge(D){D===void 0&&(D=n.TEXTURE0+O-1),K!==D&&(n.activeTexture(D),K=D)}function fe(D,ge,ue){ue===void 0&&(K===null?ue=n.TEXTURE0+O-1:ue=K);let Ae=_e[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},_e[ue]=Ae),(Ae.type!==D||Ae.texture!==ge)&&(K!==ue&&(n.activeTexture(ue),K=ue),n.bindTexture(D,ge||Y[D]),Ae.type=D,Ae.texture=ge)}function C(){const D=_e[K];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function U(){try{n.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function $(){try{n.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Q(){try{n.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function pe(){try{n.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Fe(){try{n.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Ve(){try{n.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function se(){try{n.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function de(D){Ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Ue.copy(D))}function Le(D){st.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),st.copy(D))}function Pe(D,ge){let ue=c.get(ge);ue===void 0&&(ue=new WeakMap,c.set(ge,ue));let Ae=ue.get(D);Ae===void 0&&(Ae=n.getUniformBlockIndex(ge,D.name),ue.set(D,Ae))}function Se(D,ge){const Ae=c.get(ge).get(D);l.get(ge)!==Ae&&(n.uniformBlockBinding(ge,Ae,D.__bindingPointIndex),l.set(ge,Ae))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,_e={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,w=null,_=null,R=null,E=null,T=new je(0,0,0),y=0,M=!1,P=null,A=null,G=null,N=null,V=null,Ue.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:le,bindFramebuffer:Be,drawBuffers:Oe,useProgram:We,setBlending:ee,setMaterial:re,setFlipSided:te,setCullFace:ye,setLineWidth:L,setPolygonOffset:ze,setScissorTest:Me,activeTexture:Ge,bindTexture:fe,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ve,texImage3D:se,updateUBOMapping:Pe,uniformBlockBinding:Se,texStorage2D:pe,texStorage3D:Fe,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:de,viewport:Le,reset:Ke}}function l_(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return f?new OffscreenCanvas(C,x):$o("canvas")}function v(C,x,U){let $=1;const Q=fe(C);if((Q.width>U||Q.height>U)&&($=U/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const q=Math.floor($*Q.width),Te=Math.floor($*Q.height);u===void 0&&(u=g(q,Te));const pe=x?g(q,Te):u;return pe.width=q,pe.height=Te,pe.getContext("2d").drawImage(C,0,0,q,Te),He("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Te+")."),pe}else return"data"in C&&He("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(C,x,U,$,Q=!1){if(C!==null){if(n[C]!==void 0)return n[C];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=x;if(x===n.RED&&(U===n.FLOAT&&(q=n.R32F),U===n.HALF_FLOAT&&(q=n.R16F),U===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.R8UI),U===n.UNSIGNED_SHORT&&(q=n.R16UI),U===n.UNSIGNED_INT&&(q=n.R32UI),U===n.BYTE&&(q=n.R8I),U===n.SHORT&&(q=n.R16I),U===n.INT&&(q=n.R32I)),x===n.RG&&(U===n.FLOAT&&(q=n.RG32F),U===n.HALF_FLOAT&&(q=n.RG16F),U===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RG8UI),U===n.UNSIGNED_SHORT&&(q=n.RG16UI),U===n.UNSIGNED_INT&&(q=n.RG32UI),U===n.BYTE&&(q=n.RG8I),U===n.SHORT&&(q=n.RG16I),U===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGB8UI),U===n.UNSIGNED_SHORT&&(q=n.RGB16UI),U===n.UNSIGNED_INT&&(q=n.RGB32UI),U===n.BYTE&&(q=n.RGB8I),U===n.SHORT&&(q=n.RGB16I),U===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),U===n.UNSIGNED_INT&&(q=n.RGBA32UI),U===n.BYTE&&(q=n.RGBA8I),U===n.SHORT&&(q=n.RGBA16I),U===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(U===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),U===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const Te=Q?Xo:it.getTransfer($);U===n.FLOAT&&(q=n.RGBA32F),U===n.HALF_FLOAT&&(q=n.RGBA16F),U===n.UNSIGNED_BYTE&&(q=Te===ct?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function _(C,x){let U;return C?x===null||x===Vn||x===Lr?U=n.DEPTH24_STENCIL8:x===En?U=n.DEPTH32F_STENCIL8:x===Tr&&(U=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Lr?U=n.DEPTH_COMPONENT24:x===En?U=n.DEPTH_COMPONENT32F:x===Tr&&(U=n.DEPTH_COMPONENT16),U}function R(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==Ht?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function E(C){const x=C.target;x.removeEventListener("dispose",E),y(x),x.isVideoTexture&&d.delete(x)}function T(C){const x=C.target;x.removeEventListener("dispose",T),P(x)}function y(C){const x=i.get(C);if(x.__webglInit===void 0)return;const U=C.source,$=h.get(U);if($){const Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys($).length===0&&h.delete(U)}i.remove(C)}function M(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const U=C.source,$=h.get(U);delete $[x.__cacheKey],o.memory.textures--}function P(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)n.deleteFramebuffer(x.__webglFramebuffer[$]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=C.textures;for(let $=0,Q=U.length;$<Q;$++){const q=i.get(U[$]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(U[$])}i.remove(C)}let A=0;function G(){A=0}function N(){const C=A;return C>=s.maxTextures&&He("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function O(C,x){const U=i.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const $=C.image;if($===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,C,x);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function F(C,x){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,x);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function z(C,x){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){Y(U,C,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function J(C,x){const U=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){oe(U,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const K={[Tl]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Ll]:n.MIRRORED_REPEAT},_e={[Vt]:n.NEAREST,[T2]:n.NEAREST_MIPMAP_NEAREST,[Hr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[ba]:n.LINEAR_MIPMAP_NEAREST,[Hi]:n.LINEAR_MIPMAP_LINEAR},ve={[P2]:n.NEVER,[F2]:n.ALWAYS,[I2]:n.LESS,[Hc]:n.LEQUAL,[D2]:n.EQUAL,[Wc]:n.GEQUAL,[U2]:n.GREATER,[N2]:n.NOTEQUAL};function ce(C,x){if(x.type===En&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ht||x.magFilter===ba||x.magFilter===Hr||x.magFilter===Hi||x.minFilter===Ht||x.minFilter===ba||x.minFilter===Hr||x.minFilter===Hi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,K[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==Hr&&x.minFilter!==Hi||x.type===En&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(C,x){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",E));const $=x.source;let Q=h.get($);Q===void 0&&(Q={},h.set($,Q));const q=V(x);if(q!==C.__cacheKey){Q[q]===void 0&&(Q[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),Q[q].usedTimes++;const Te=Q[C.__cacheKey];Te!==void 0&&(Q[C.__cacheKey].usedTimes--,Te.usedTimes===0&&M(x)),C.__cacheKey=q,C.__webglTexture=Q[q].texture}return U}function st(C,x,U){return Math.floor(Math.floor(C/U)/x)}function rt(C,x,U,$){const q=C.updateRanges;if(q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,U,$,x.data);else{q.sort((se,de)=>se.start-de.start);let Te=0;for(let se=1;se<q.length;se++){const de=q[Te],Le=q[se],Pe=de.start+de.count,Se=st(Le.start,x.width,4),Ke=st(de.start,x.width,4);Le.start<=Pe+1&&Se===Ke&&st(Le.start+Le.count-1,x.width,4)===Se?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++Te,q[Te]=Le)}q.length=Te+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Fe=n.getParameter(n.UNPACK_SKIP_PIXELS),Ve=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let se=0,de=q.length;se<de;se++){const Le=q[se],Pe=Math.floor(Le.start/4),Se=Math.ceil(Le.count/4),Ke=Pe%x.width,D=Math.floor(Pe/x.width),ge=Se,ue=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Ke,D,ge,ue,U,$,x.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ve)}}function Y(C,x,U){let $=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=n.TEXTURE_3D);const Q=Ue(C,x),q=x.source;t.bindTexture($,C.__webglTexture,n.TEXTURE0+U);const Te=i.get(q);if(q.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+U);const pe=it.getPrimaries(it.workingColorSpace),Fe=x.colorSpace===bi?null:it.getPrimaries(x.colorSpace),Ve=x.colorSpace===bi||pe===Fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let se=v(x.image,!1,s.maxTextureSize);se=Ge(x,se);const de=r.convert(x.format,x.colorSpace),Le=r.convert(x.type);let Pe=w(x.internalFormat,de,Le,x.colorSpace,x.isVideoTexture);ce($,x);let Se;const Ke=x.mipmaps,D=x.isVideoTexture!==!0,ge=Te.__version===void 0||Q===!0,ue=q.dataReady,Ae=R(x,se);if(x.isDepthTexture)Pe=_(x.format===Wi,x.type),ge&&(D?t.texStorage2D(n.TEXTURE_2D,1,Pe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,de,Le,null));else if(x.isDataTexture)if(Ke.length>0){D&&ge&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,Ke[0].width,Ke[0].height);for(let ae=0,Z=Ke.length;ae<Z;ae++)Se=Ke[ae],D?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,de,Le,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,de,Le,Se.data);x.generateMipmaps=!1}else D?(ge&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,se.width,se.height),ue&&rt(x,se,de,Le)):t.texImage2D(n.TEXTURE_2D,0,Pe,se.width,se.height,0,de,Le,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,Ke[0].width,Ke[0].height,se.depth);for(let ae=0,Z=Ke.length;ae<Z;ae++)if(Se=Ke[ae],x.format!==Cn)if(de!==null)if(D){if(ue)if(x.layerUpdates.size>0){const Re=Su(Se.width,Se.height,x.format,x.type);for(const Xe of x.layerUpdates){const gt=Se.data.subarray(Xe*Re/Se.data.BYTES_PER_ELEMENT,(Xe+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Xe,Se.width,Se.height,1,de,gt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,se.depth,de,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,Se.width,Se.height,se.depth,0,Se.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,se.depth,de,Le,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Pe,Se.width,Se.height,se.depth,0,de,Le,Se.data)}else{D&&ge&&t.texStorage2D(n.TEXTURE_2D,Ae,Pe,Ke[0].width,Ke[0].height);for(let ae=0,Z=Ke.length;ae<Z;ae++)Se=Ke[ae],x.format!==Cn?de!==null?D?ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,de,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,Se.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,de,Le,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,de,Le,Se.data)}else if(x.isDataArrayTexture)if(D){if(ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Pe,se.width,se.height,se.depth),ue)if(x.layerUpdates.size>0){const ae=Su(se.width,se.height,x.format,x.type);for(const Z of x.layerUpdates){const Re=se.data.subarray(Z*ae/se.data.BYTES_PER_ELEMENT,(Z+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,de,Le,Re)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Le,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,se.width,se.height,se.depth,0,de,Le,se.data);else if(x.isData3DTexture)D?(ge&&t.texStorage3D(n.TEXTURE_3D,Ae,Pe,se.width,se.height,se.depth),ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Le,se.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,se.width,se.height,se.depth,0,de,Le,se.data);else if(x.isFramebufferTexture){if(ge)if(D)t.texStorage2D(n.TEXTURE_2D,Ae,Pe,se.width,se.height);else{let ae=se.width,Z=se.height;for(let Re=0;Re<Ae;Re++)t.texImage2D(n.TEXTURE_2D,Re,Pe,ae,Z,0,de,Le,null),ae>>=1,Z>>=1}}else if(Ke.length>0){if(D&&ge){const ae=fe(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,ae.width,ae.height)}for(let ae=0,Z=Ke.length;ae<Z;ae++)Se=Ke[ae],D?ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,Le,Se):t.texImage2D(n.TEXTURE_2D,ae,Pe,de,Le,Se);x.generateMipmaps=!1}else if(D){if(ge){const ae=fe(se);t.texStorage2D(n.TEXTURE_2D,Ae,Pe,ae.width,ae.height)}ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,Le,se)}else t.texImage2D(n.TEXTURE_2D,0,Pe,de,Le,se);m(x)&&p($),Te.__version=q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function oe(C,x,U){if(x.image.length!==6)return;const $=Ue(C,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+U);const q=i.get(Q);if(Q.version!==q.__version||$===!0){t.activeTexture(n.TEXTURE0+U);const Te=it.getPrimaries(it.workingColorSpace),pe=x.colorSpace===bi?null:it.getPrimaries(x.colorSpace),Fe=x.colorSpace===bi||Te===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const Ve=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Ve&&!se?de[Z]=v(x.image[Z],!0,s.maxCubemapSize):de[Z]=se?x.image[Z].image:x.image[Z],de[Z]=Ge(x,de[Z]);const Le=de[0],Pe=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),Ke=w(x.internalFormat,Pe,Se,x.colorSpace),D=x.isVideoTexture!==!0,ge=q.__version===void 0||$===!0,ue=Q.dataReady;let Ae=R(x,Le);ce(n.TEXTURE_CUBE_MAP,x);let ae;if(Ve){D&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ke,Le.width,Le.height);for(let Z=0;Z<6;Z++){ae=de[Z].mipmaps;for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];x.format!==Cn?Pe!==null?D?ue&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re,0,0,Xe.width,Xe.height,Pe,Xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re,Ke,Xe.width,Xe.height,0,Xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re,0,0,Xe.width,Xe.height,Pe,Se,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re,Ke,Xe.width,Xe.height,0,Pe,Se,Xe.data)}}}else{if(ae=x.mipmaps,D&&ge){ae.length>0&&Ae++;const Z=fe(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ke,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){D?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Pe,Se,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,de[Z].width,de[Z].height,0,Pe,Se,de[Z].data);for(let Re=0;Re<ae.length;Re++){const gt=ae[Re].image[Z].image;D?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re+1,0,0,gt.width,gt.height,Pe,Se,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re+1,Ke,gt.width,gt.height,0,Pe,Se,gt.data)}}else{D?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,Se,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ke,Pe,Se,de[Z]);for(let Re=0;Re<ae.length;Re++){const Xe=ae[Re];D?ue&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re+1,0,0,Pe,Se,Xe.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Re+1,Ke,Pe,Se,Xe.image[Z])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),q.__version=Q.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function le(C,x,U,$,Q,q){const Te=r.convert(U.format,U.colorSpace),pe=r.convert(U.type),Fe=w(U.internalFormat,Te,pe,U.colorSpace),Ve=i.get(x),se=i.get(U);if(se.__renderTarget=x,!Ve.__hasExternalTextures){const de=Math.max(1,x.width>>q),Le=Math.max(1,x.height>>q);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Fe,de,Le,x.depth,0,Te,pe,null):t.texImage2D(Q,q,Fe,de,Le,0,Te,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,se.__webglTexture,0,L(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,se.__webglTexture,q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(C,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,q=_(x.stencilBuffer,Q),Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ze(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(x),q,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(x),q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const $=x.textures;for(let Q=0;Q<$.length;Q++){const q=$[Q],Te=r.convert(q.format,q.colorSpace),pe=r.convert(q.type),Fe=w(q.internalFormat,Te,pe,q.colorSpace);ze(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(x),Fe,x.width,x.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(x),Fe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Fe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(C,x,U){const $=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x.depthTexture);const Ve=r.convert(x.depthTexture.format),se=r.convert(x.depthTexture.type);let de;x.depthTexture.format===li?de=n.DEPTH_COMPONENT24:x.depthTexture.format===Wi&&(de=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,de,x.width,x.height,0,Ve,se,null)}}else O(x.depthTexture,0);const q=Q.__webglTexture,Te=L(x),pe=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+U:n.TEXTURE_2D,Fe=x.depthTexture.format===Wi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===li)ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,pe,q,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,pe,q,0);else if(x.depthTexture.format===Wi)ze(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Fe,pe,q,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Fe,pe,q,0);else throw new Error("Unknown depthTexture format")}function We(C){const x=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)Oe(x.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?Oe(x.__webglFramebuffer[0],C,0):Oe(x.__webglFramebuffer,C,0)}else if(U){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=n.createRenderbuffer(),Be(x.__webglDepthbuffer[$],C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Be(x.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,x,U){const $=i.get(C);x!==void 0&&le($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&We(C)}function qe(C){const x=C.texture,U=i.get(C),$=i.get(x);C.addEventListener("dispose",T);const Q=C.textures,q=C.isWebGLCubeRenderTarget===!0,Te=Q.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=x.version,o.memory.textures++),q){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let Fe=0;Fe<x.mipmaps.length;Fe++)U.__webglFramebuffer[pe][Fe]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Te)for(let pe=0,Fe=Q.length;pe<Fe;pe++){const Ve=i.get(Q[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ze(C)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Fe=Q[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const Ve=r.convert(Fe.format,Fe.colorSpace),se=r.convert(Fe.type),de=w(Fe.internalFormat,Ve,se,Fe.colorSpace,C.isXRRenderTarget===!0),Le=L(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,de,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),ce(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)le(U.__webglFramebuffer[pe][Fe],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Fe);else le(U.__webglFramebuffer[pe],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,Fe=Q.length;pe<Fe;pe++){const Ve=Q[pe],se=i.get(Ve);let de=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,se.__webglTexture),ce(de,Ve),le(U.__webglFramebuffer,C,Ve,n.COLOR_ATTACHMENT0+pe,de,0),m(Ve)&&p(de)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,$.__webglTexture),ce(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Fe=0;Fe<x.mipmaps.length;Fe++)le(U.__webglFramebuffer[Fe],C,x,n.COLOR_ATTACHMENT0,pe,Fe);else le(U.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,pe,0);m(x)&&p(pe),t.unbindTexture()}C.depthBuffer&&We(C)}function ee(C){const x=C.textures;for(let U=0,$=x.length;U<$;U++){const Q=x[U];if(m(Q)){const q=b(C),Te=i.get(Q).__webglTexture;t.bindTexture(q,Te),p(q),t.unbindTexture()}}}const re=[],te=[];function ye(C){if(C.samples>0){if(ze(C)===!1){const x=C.textures,U=C.width,$=C.height;let Q=n.COLOR_BUFFER_BIT;const q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),pe=x.length>1;if(pe)for(let Ve=0;Ve<x.length;Ve++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Fe=C.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ve=0;Ve<x.length;Ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ve]);const se=i.get(x[Ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,U,$,0,0,U,$,Q,n.NEAREST),l===!0&&(re.length=0,te.length=0,re.push(n.COLOR_ATTACHMENT0+Ve),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(q),te.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Ve=0;Ve<x.length;Ve++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.RENDERBUFFER,Te.__webglColorRenderbuffer[Ve]);const se=i.get(x[Ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ve,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function L(C){return Math.min(s.maxSamples,C.samples)}function ze(C){const x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(C){const x=o.render.frame;d.get(C)!==x&&(d.set(C,x),C.update())}function Ge(C,x){const U=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Fs&&U!==bi&&(it.getTransfer(U)===ct?($!==Cn||Q!==un)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",U)),x}function fe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=J,this.rebindTextures=ut,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function c_(n,e){function t(i,s=bi){let r;const o=it.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ef)return n.BYTE;if(i===tf)return n.SHORT;if(i===Tr)return n.UNSIGNED_SHORT;if(i===Fc)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===ai)return n.HALF_FLOAT;if(i===rf)return n.ALPHA;if(i===of)return n.RGB;if(i===Cn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===Wi)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Bc)return n.RED_INTEGER;if(i===Ns)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Vc)return n.RGBA_INTEGER;if(i===ko||i===Oo||i===zo||i===Bo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rl||i===Pl||i===Il||i===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ul||i===Nl||i===Fl||i===kl||i===Ol||i===zl||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ul||i===Nl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===kl)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===$l||i===ql||i===Zl||i===Yl||i===jl||i===Jl||i===Kl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===nc||i===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===tc)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sc||i===rc||i===oc||i===ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const d_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u_=`
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

}`;class h_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _f(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mn({vertexShader:d_,fragmentShader:u_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ii(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f_ extends qs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new h_,p={},b=t.getContextAttributes();let w=null,_=null;const R=[],E=[],T=new he;let y=null;const M=new tn;M.viewport=new mt;const P=new tn;P.viewport=new mt;const A=[M,P],G=new bg;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=R[Y];return oe===void 0&&(oe=new Aa,R[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=R[Y];return oe===void 0&&(oe=new Aa,R[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=R[Y];return oe===void 0&&(oe=new Aa,R[Y]=oe),oe.getHandSpace()};function O(Y){const oe=E.indexOf(Y.inputSource);if(oe===-1)return;const le=R[oe];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||o),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<R.length;Y++){const oe=E[Y];oe!==null&&(E[Y]=null,R[Y].disconnect(oe))}N=null,V=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(w),f=null,h=null,u=null,s=null,_=null,rt.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",F),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Be=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=b.stencil?Wi:li,Be=b.stencil?Lr:Vn);const We={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(We),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Tn(h.textureWidth,h.textureHeight,{format:Cn,type:un,depthTexture:new Ir(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Tn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),rt.setContext(s),rt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function z(Y){for(let oe=0;oe<Y.removed.length;oe++){const le=Y.removed[oe],Be=E.indexOf(le);Be>=0&&(E[Be]=null,R[Be].disconnect(le))}for(let oe=0;oe<Y.added.length;oe++){const le=Y.added[oe];let Be=E.indexOf(le);if(Be===-1){for(let We=0;We<R.length;We++)if(We>=E.length){E.push(le),Be=We;break}else if(E[We]===null){E[We]=le,Be=We;break}if(Be===-1)break}const Oe=R[Be];Oe&&Oe.connect(le)}}const J=new I,K=new I;function _e(Y,oe,le){J.setFromMatrixPosition(oe.matrixWorld),K.setFromMatrixPosition(le.matrixWorld);const Be=J.distanceTo(K),Oe=oe.projectionMatrix.elements,We=le.projectionMatrix.elements,ut=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),ee=(Oe[9]+1)/Oe[5],re=(Oe[9]-1)/Oe[5],te=(Oe[8]-1)/Oe[0],ye=(We[8]+1)/We[0],L=ut*te,ze=ut*ye,Me=Be/(-te+ye),Ge=Me*-te;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ge),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Oe[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const fe=ut+Me,C=qe+Me,x=L-Ge,U=ze+(Be-Ge),$=ee*qe/C*fe,Q=re*qe/C*fe;Y.projectionMatrix.makePerspective(x,U,$,Q,fe,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ve(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let oe=Y.near,le=Y.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(le=m.depthFar)),G.near=P.near=M.near=oe,G.far=P.far=M.far=le,(N!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,V=G.far),G.layers.mask=Y.layers.mask|6,M.layers.mask=G.layers.mask&-5,P.layers.mask=G.layers.mask&-3;const Be=Y.parent,Oe=G.cameras;ve(G,Be);for(let We=0;We<Oe.length;We++)ve(Oe[We],Be);Oe.length===2?_e(G,M,P):G.projectionMatrix.copy(M.projectionMatrix),ce(Y,G,Be)};function ce(Y,oe,le){le===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Pr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(Y){return p[Y]};let Ue=null;function st(Y,oe){if(d=oe.getViewerPose(c||o),g=oe,d!==null){const le=d.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Be=!1;le.length!==G.cameras.length&&(G.cameras.length=0,Be=!0);for(let qe=0;qe<le.length;qe++){const ee=le[qe];let re=null;if(f!==null)re=f.getViewport(ee);else{const ye=u.getViewSubImage(h,ee);re=ye.viewport,qe===0&&(e.setRenderTargetTextures(_,ye.colorTexture,ye.depthStencilTexture),e.setRenderTarget(_))}let te=A[qe];te===void 0&&(te=new tn,te.layers.enable(qe),te.viewport=new mt,A[qe]=te),te.matrix.fromArray(ee.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ee.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(re.x,re.y,re.width,re.height),qe===0&&(G.matrix.copy(te.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Be===!0&&G.cameras.push(te)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();const qe=u.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&m.init(qe,s.renderState)}if(Oe&&Oe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let qe=0;qe<le.length;qe++){const ee=le[qe].camera;if(ee){let re=p[ee];re||(re=new _f,p[ee]=re);const te=u.getCameraImage(ee);re.sourceTexture=te}}}}for(let le=0;le<R.length;le++){const Be=E[le],Oe=R[le];Be!==null&&Oe!==void 0&&Oe.update(Be,oe,c||o)}Ue&&Ue(Y,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const rt=new Pf;rt.setAnimationLoop(st),this.setAnimationLoop=function(Y){Ue=Y},this.dispose=function(){}}}const Bi=new Hn,p_=new nt;function m_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Tf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,_){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,Bi.copy(_),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(p_.makeRotationFromEuler(Bi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function g_(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const _=w.program;i.uniformBlockBinding(b,_)}function c(b,w){let _=s[b.id];_===void 0&&(g(b),_=d(b),s[b.id]=_,b.addEventListener("dispose",m));const R=w.program;i.updateUBOMapping(b,R);const E=e.render.frame;r[b.id]!==E&&(h(b),r[b.id]=E)}function d(b){const w=u();b.__bindingPointIndex=w;const _=n.createBuffer(),R=b.__size,E=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const w=s[b.id],_=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let E=0,T=_.length;E<T;E++){const y=Array.isArray(_[E])?_[E]:[_[E]];for(let M=0,P=y.length;M<P;M++){const A=y[M];if(f(A,E,M,R)===!0){const G=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let V=0;for(let O=0;O<N.length;O++){const F=N[O],z=v(F);typeof F=="number"||typeof F=="boolean"?(A.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,G+V,A.__data)):F.isMatrix3?(A.__data[0]=F.elements[0],A.__data[1]=F.elements[1],A.__data[2]=F.elements[2],A.__data[3]=0,A.__data[4]=F.elements[3],A.__data[5]=F.elements[4],A.__data[6]=F.elements[5],A.__data[7]=0,A.__data[8]=F.elements[6],A.__data[9]=F.elements[7],A.__data[10]=F.elements[8],A.__data[11]=0):(F.toArray(A.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,w,_,R){const E=b.value,T=w+"_"+_;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const y=R[T];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return R[T]=E,!0}else if(y.equals(E)===!1)return y.copy(E),!0}return!1}function g(b){const w=b.uniforms;let _=0;const R=16;for(let T=0,y=w.length;T<y;T++){const M=Array.isArray(w[T])?w[T]:[w[T]];for(let P=0,A=M.length;P<A;P++){const G=M[P],N=Array.isArray(G.value)?G.value:[G.value];for(let V=0,O=N.length;V<O;V++){const F=N[V],z=v(F),J=_%R,K=J%z.boundary,_e=J+K;_+=K,_e!==0&&R-_e<z.storage&&(_+=R-_e),G.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=z.storage}}}const E=_%R;return E>0&&(_+=R-E),b.__size=_,b.__cache={},this}function v(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Un=null;function x_(){return Un===null&&(Un=new gf(v_,16,16,Ns,ai),Un.name="DFG_LUT",Un.minFilter=Ht,Un.magFilter=Ht,Un.wrapS=si,Un.wrapT=si,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class __{constructor(e={}){const{canvas:t=O2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:f=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=f,m=new Set([Vc,Gc,Bc]),p=new Set([un,Vn,Tr,Lr,kc,Oc]),b=new Uint32Array(4),w=new Int32Array(4);let _=null,R=null;const E=[],T=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let P=!1;this._outputColorSpace=Ft;let A=0,G=0,N=null,V=-1,O=null;const F=new mt,z=new mt;let J=null;const K=new je(0);let _e=0,ve=t.width,ce=t.height,Ue=1,st=null,rt=null;const Y=new mt(0,0,ve,ce),oe=new mt(0,0,ve,ce);let le=!1;const Be=new jc;let Oe=!1,We=!1;const ut=new nt,qe=new I,ee=new mt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ye(){return N===null?Ue:1}let L=i;function ze(S,B){return t.getContext(S,B)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",gt,!1),L===null){const B="webgl2";if(L=ze(B,S),L===null)throw ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw tt("WebGLRenderer: "+S.message),S}let Me,Ge,fe,C,x,U,$,Q,q,Te,pe,Fe,Ve,se,de,Le,Pe,Se,Ke,D,ge,ue,Ae;function ae(){Me=new _3(L),Me.init(),ge=new c_(L,Me),Ge=new u3(L,Me,e,ge),fe=new a_(L,Me),Ge.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),C=new w3(L),x=new qx,U=new l_(L,Me,fe,x,Ge,ge,C),$=new x3(M),Q=new Ag(L),ue=new c3(L,Q),q=new y3(L,Q,C,ue),Te=new S3(L,q,Q,ue,C),Se=new M3(L,Ge,U),de=new h3(x),pe=new $x(M,$,Me,Ge,ue,de),Fe=new m_(M,x),Ve=new Yx,se=new t_(Me),Pe=new l3(M,$,fe,Te,g,l),Le=new o_(M,Te,Ge),Ae=new g_(L,C,Ge,fe),Ke=new d3(L,Me,C),D=new b3(L,Me,C),C.programs=pe.programs,M.capabilities=Ge,M.extensions=Me,M.properties=x,M.renderLists=Ve,M.shadowMap=Le,M.state=fe,M.info=C}ae(),v!==un&&(y=new C3(v,t.width,t.height,s,r));const Z=new f_(M,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(S){S!==void 0&&(Ue=S,this.setSize(ve,ce,!1))},this.getSize=function(S){return S.set(ve,ce)},this.setSize=function(S,B,X=!0){if(Z.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=S,ce=B,t.width=Math.floor(S*Ue),t.height=Math.floor(B*Ue),X===!0&&(t.style.width=S+"px",t.style.height=B+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(ve*Ue,ce*Ue).floor()},this.setDrawingBufferSize=function(S,B,X){ve=S,ce=B,Ue=X,t.width=Math.floor(S*X),t.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(v===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(F)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,B,X,W){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,B,X,W),fe.viewport(F.copy(Y).multiplyScalar(Ue).round())},this.getScissor=function(S){return S.copy(oe)},this.setScissor=function(S,B,X,W){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,B,X,W),fe.scissor(z.copy(oe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(S){fe.setScissorTest(le=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,X=!0){let W=0;if(S){let H=!1;if(N!==null){const be=N.texture.format;H=m.has(be)}if(H){const be=N.texture.type,Ee=p.has(be),we=Pe.getClearColor(),Ie=Pe.getClearAlpha(),Ne=we.r,Ze=we.g,Qe=we.b;Ee?(b[0]=Ne,b[1]=Ze,b[2]=Qe,b[3]=Ie,L.clearBufferuiv(L.COLOR,0,b)):(w[0]=Ne,w[1]=Ze,w[2]=Qe,w[3]=Ie,L.clearBufferiv(L.COLOR,0,w))}else W|=L.COLOR_BUFFER_BIT}B&&(W|=L.DEPTH_BUFFER_BIT),X&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),Pe.dispose(),Ve.dispose(),se.dispose(),x.dispose(),$.dispose(),Te.dispose(),ue.dispose(),Ae.dispose(),pe.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",dd),Z.removeEventListener("sessionend",ud),Di.stop()};function Re(S){S.preventDefault(),qo("WebGLRenderer: Context Lost."),P=!0}function Xe(){qo("WebGLRenderer: Context Restored."),P=!1;const S=C.autoReset,B=Le.enabled,X=Le.autoUpdate,W=Le.needsUpdate,H=Le.type;ae(),C.autoReset=S,Le.enabled=B,Le.autoUpdate=X,Le.needsUpdate=W,Le.type=H}function gt(S){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){const B=S.target;B.removeEventListener("dispose",lt),Zn(B)}function Zn(S){Yn(S),x.remove(S)}function Yn(S){const B=x.get(S).programs;B!==void 0&&(B.forEach(function(X){pe.releaseProgram(X)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,W,H,be){B===null&&(B=re);const Ee=H.isMesh&&H.matrixWorld.determinant()<0,we=p0(S,B,X,W,H);fe.setMaterial(W,Ee);let Ie=X.index,Ne=1;if(W.wireframe===!0){if(Ie=q.getWireframeAttribute(X),Ie===void 0)return;Ne=2}const Ze=X.drawRange,Qe=X.attributes.position;let ke=Ze.start*Ne,ht=(Ze.start+Ze.count)*Ne;be!==null&&(ke=Math.max(ke,be.start*Ne),ht=Math.min(ht,(be.start+be.count)*Ne)),Ie!==null?(ke=Math.max(ke,0),ht=Math.min(ht,Ie.count)):Qe!=null&&(ke=Math.max(ke,0),ht=Math.min(ht,Qe.count));const Ct=ht-ke;if(Ct<0||Ct===1/0)return;ue.setup(H,W,we,X,Ie);let Mt,ft=Ke;if(Ie!==null&&(Mt=Q.get(Ie),ft=D,ft.setIndex(Mt)),H.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ye()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(H.isLine){let $t=W.linewidth;$t===void 0&&($t=1),fe.setLineWidth($t*ye()),H.isLineSegments?ft.setMode(L.LINES):H.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else H.isPoints?ft.setMode(L.POINTS):H.isSprite&&ft.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const $t=H._multiDrawStarts,De=H._multiDrawCounts,on=H._multiDrawCount,ot=Ie?Q.get(Ie).bytesPerElement:1,_n=x.get(W).currentProgram.getUniforms();for(let Pn=0;Pn<on;Pn++)_n.setValue(L,"_gl_DrawID",Pn),ft.render($t[Pn]/ot,De[Pn])}else if(H.isInstancedMesh)ft.renderInstances(ke,Ct,H.count);else if(X.isInstancedBufferGeometry){const $t=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,$t);ft.renderInstances(ke,Ct,De)}else ft.render(ke,Ct)};function cd(S,B,X){S.transparent===!0&&S.side===ii&&S.forceSinglePass===!1?(S.side=rn,S.needsUpdate=!0,Gr(S,B,X),S.side=Ti,S.needsUpdate=!0,Gr(S,B,X),S.side=ii):Gr(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),R=se.get(X),R.init(B),T.push(R),X.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(R.pushLight(H),H.castShadow&&R.pushShadow(H))}),R.setupLights();const W=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const be=H.material;if(be)if(Array.isArray(be))for(let Ee=0;Ee<be.length;Ee++){const we=be[Ee];cd(we,X,H),W.add(we)}else cd(be,X,H),W.add(be)}),R=T.pop(),W},this.compileAsync=function(S,B,X=null){const W=this.compile(S,B,X);return new Promise(H=>{function be(){if(W.forEach(function(Ee){x.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){H(S);return}setTimeout(be,10)}Me.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let fa=null;function f0(S){fa&&fa(S)}function dd(){Di.stop()}function ud(){Di.start()}const Di=new Pf;Di.setAnimationLoop(f0),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(S){fa=S,Z.setAnimationLoop(S),S===null?Di.stop():Di.start()},Z.addEventListener("sessionstart",dd),Z.addEventListener("sessionend",ud),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const X=Z.enabled===!0&&Z.isPresenting===!0,W=y!==null&&(N===null||X)&&y.begin(M,N);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(B),B=Z.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,N),R=se.get(S,T.length),R.init(B),T.push(R),ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(ut,On,B.reversedDepth),We=this.localClippingEnabled,Oe=de.init(this.clippingPlanes,We),_=Ve.get(S,E.length),_.init(),E.push(_),Z.enabled===!0&&Z.isPresenting===!0){const Ee=M.xr.getDepthSensingMesh();Ee!==null&&pa(Ee,B,-1/0,M.sortObjects)}pa(S,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(st,rt),te=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,te&&Pe.addToRenderList(_,S),this.info.render.frame++,Oe===!0&&de.beginShadows();const H=R.state.shadowsArray;if(Le.render(H,S,B),Oe===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&y.hasRenderPass())===!1){const Ee=_.opaque,we=_.transmissive;if(R.setupLights(),B.isArrayCamera){const Ie=B.cameras;if(we.length>0)for(let Ne=0,Ze=Ie.length;Ne<Ze;Ne++){const Qe=Ie[Ne];fd(Ee,we,S,Qe)}te&&Pe.render(S);for(let Ne=0,Ze=Ie.length;Ne<Ze;Ne++){const Qe=Ie[Ne];hd(_,S,Qe,Qe.viewport)}}else we.length>0&&fd(Ee,we,S,B),te&&Pe.render(S),hd(_,S,B)}N!==null&&G===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),W&&y.end(M),S.isScene===!0&&S.onAfterRender(M,S,B),ue.resetDefaultState(),V=-1,O=null,T.pop(),T.length>0?(R=T[T.length-1],Oe===!0&&de.setGlobalState(M.clippingPlanes,R.state.camera)):R=null,E.pop(),E.length>0?_=E[E.length-1]:_=null};function pa(S,B,X,W){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)R.pushLight(S),S.castShadow&&R.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Be.intersectsSprite(S)){W&&ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ut);const Ee=Te.update(S),we=S.material;we.visible&&_.push(S,Ee,we,X,ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Be.intersectsObject(S))){const Ee=Te.update(S),we=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ee.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ee.copy(Ee.boundingSphere.center)),ee.applyMatrix4(S.matrixWorld).applyMatrix4(ut)),Array.isArray(we)){const Ie=Ee.groups;for(let Ne=0,Ze=Ie.length;Ne<Ze;Ne++){const Qe=Ie[Ne],ke=we[Qe.materialIndex];ke&&ke.visible&&_.push(S,Ee,ke,X,ee.z,Qe)}}else we.visible&&_.push(S,Ee,we,X,ee.z,null)}}const be=S.children;for(let Ee=0,we=be.length;Ee<we;Ee++)pa(be[Ee],B,X,W)}function hd(S,B,X,W){const{opaque:H,transmissive:be,transparent:Ee}=S;R.setupLightsView(X),Oe===!0&&de.setGlobalState(M.clippingPlanes,X),W&&fe.viewport(F.copy(W)),H.length>0&&Br(H,B,X),be.length>0&&Br(be,B,X),Ee.length>0&&Br(Ee,B,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function fd(S,B,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[W.id]===void 0){const ke=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[W.id]=new Tn(1,1,{generateMipmaps:!0,type:ke?ai:un,minFilter:Hi,samples:Math.max(4,Ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace})}const be=R.state.transmissionRenderTarget[W.id],Ee=W.viewport||F;be.setSize(Ee.z*M.transmissionResolutionScale,Ee.w*M.transmissionResolutionScale);const we=M.getRenderTarget(),Ie=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(be),M.getClearColor(K),_e=M.getClearAlpha(),_e<1&&M.setClearColor(16777215,.5),M.clear(),te&&Pe.render(X);const Ze=M.toneMapping;M.toneMapping=zn;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),R.setupLightsView(W),Oe===!0&&de.setGlobalState(M.clippingPlanes,W),Br(S,X,W),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),Me.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let ht=0,Ct=B.length;ht<Ct;ht++){const Mt=B[ht],{object:ft,geometry:$t,material:De,group:on}=Mt;if(De.side===ii&&ft.layers.test(W.layers)){const ot=De.side;De.side=rn,De.needsUpdate=!0,pd(ft,X,W,$t,De,on),De.side=ot,De.needsUpdate=!0,ke=!0}}ke===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}M.setRenderTarget(we,Ie,Ne),M.setClearColor(K,_e),Qe!==void 0&&(W.viewport=Qe),M.toneMapping=Ze}function Br(S,B,X){const W=B.isScene===!0?B.overrideMaterial:null;for(let H=0,be=S.length;H<be;H++){const Ee=S[H],{object:we,geometry:Ie,group:Ne}=Ee;let Ze=Ee.material;Ze.allowOverride===!0&&W!==null&&(Ze=W),we.layers.test(X.layers)&&pd(we,B,X,Ie,Ze,Ne)}}function pd(S,B,X,W,H,be){S.onBeforeRender(M,B,X,W,H,be),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(M,B,X,W,S,be),H.transparent===!0&&H.side===ii&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,M.renderBufferDirect(X,B,W,H,S,be),H.side=Ti,H.needsUpdate=!0,M.renderBufferDirect(X,B,W,H,S,be),H.side=ii):M.renderBufferDirect(X,B,W,H,S,be),S.onAfterRender(M,B,X,W,H,be)}function Gr(S,B,X){B.isScene!==!0&&(B=re);const W=x.get(S),H=R.state.lights,be=R.state.shadowsArray,Ee=H.state.version,we=pe.getParameters(S,H.state,be,B,X),Ie=pe.getProgramCacheKey(we);let Ne=W.programs;W.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,W.fog=B.fog;const Ze=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;W.envMap=$.get(S.envMap||W.environment,Ze),W.envMapRotation=W.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Ne===void 0&&(S.addEventListener("dispose",lt),Ne=new Map,W.programs=Ne);let Qe=Ne.get(Ie);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Ee)return gd(S,we),Qe}else we.uniforms=pe.getUniforms(S),S.onBeforeCompile(we,M),Qe=pe.acquireProgram(we,Ie),Ne.set(Ie,Qe),W.uniforms=we.uniforms;const ke=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ke.clippingPlanes=de.uniform),gd(S,we),W.needsLights=g0(S),W.lightsStateVersion=Ee,W.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Qe,W.uniformsList=null,Qe}function md(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=Go.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function gd(S,B){const X=x.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function p0(S,B,X,W,H){B.isScene!==!0&&(B=re),U.resetTextureUnits();const be=B.fog,Ee=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?B.environment:null,we=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Fs,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ne=$.get(W.envMap||Ee,Ie),Ze=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!X.morphAttributes.position,ht=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let Mt=zn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=M.toneMapping);const ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,$t=ft!==void 0?ft.length:0,De=x.get(W),on=R.state.lights;if(Oe===!0&&(We===!0||S!==O)){const Dt=S===O&&W.id===V;de.setState(W,S,Dt)}let ot=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==on.state.version||De.outputColorSpace!==we||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==Ne||W.fog===!0&&De.fog!==be||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==de.numPlanes||De.numIntersection!==de.numIntersection)||De.vertexAlphas!==Ze||De.vertexTangents!==Qe||De.morphTargets!==ke||De.morphNormals!==ht||De.morphColors!==Ct||De.toneMapping!==Mt||De.morphTargetsCount!==$t)&&(ot=!0):(ot=!0,De.__version=W.version);let _n=De.currentProgram;ot===!0&&(_n=Gr(W,B,H));let Pn=!1,Ui=!1,Ji=!1;const pt=_n.getUniforms(),Ot=De.uniforms;if(fe.useProgram(_n.program)&&(Pn=!0,Ui=!0,Ji=!0),W.id!==V&&(V=W.id,Ui=!0),Pn||O!==S){fe.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),pt.setValue(L,"projectionMatrix",S.projectionMatrix),pt.setValue(L,"viewMatrix",S.matrixWorldInverse);const ui=pt.map.cameraPosition;ui!==void 0&&ui.setValue(L,qe.setFromMatrixPosition(S.matrixWorld)),Ge.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,Ui=!0,Ji=!0)}if(De.needsLights&&(on.state.directionalShadowMap.length>0&&pt.setValue(L,"directionalShadowMap",on.state.directionalShadowMap,U),on.state.spotShadowMap.length>0&&pt.setValue(L,"spotShadowMap",on.state.spotShadowMap,U),on.state.pointShadowMap.length>0&&pt.setValue(L,"pointShadowMap",on.state.pointShadowMap,U)),H.isSkinnedMesh){pt.setOptional(L,H,"bindMatrix"),pt.setOptional(L,H,"bindMatrixInverse");const Dt=H.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(L,"boneTexture",Dt.boneTexture,U))}H.isBatchedMesh&&(pt.setOptional(L,H,"batchingTexture"),pt.setValue(L,"batchingTexture",H._matricesTexture,U),pt.setOptional(L,H,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",H._indirectTexture,U),pt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",H._colorsTexture,U));const di=X.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Se.update(H,X,_n),(Ui||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,pt.setValue(L,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&B.environment!==null&&(Ot.envMapIntensity.value=B.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=x_()),Ui&&(pt.setValue(L,"toneMappingExposure",M.toneMappingExposure),De.needsLights&&m0(Ot,Ji),be&&W.fog===!0&&Fe.refreshFogUniforms(Ot,be),Fe.refreshMaterialUniforms(Ot,W,Ue,ce,R.state.transmissionRenderTarget[S.id]),Go.upload(L,md(De),Ot,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Go.upload(L,md(De),Ot,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(L,"center",H.center),pt.setValue(L,"modelViewMatrix",H.modelViewMatrix),pt.setValue(L,"normalMatrix",H.normalMatrix),pt.setValue(L,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Dt=W.uniformsGroups;for(let ui=0,Ki=Dt.length;ui<Ki;ui++){const vd=Dt[ui];Ae.update(vd,_n),Ae.bind(vd,_n)}}return _n}function m0(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function g0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,B,X){const W=x.get(S);W.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(S.texture).__webglTexture=B,x.get(S.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){const X=x.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const v0=L.createFramebuffer();this.setRenderTarget=function(S,B=0,X=0){N=S,A=B,G=X;let W=null,H=!1,be=!1;if(S){const we=x.get(S);if(we.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(L.FRAMEBUFFER,we.__webglFramebuffer),F.copy(S.viewport),z.copy(S.scissor),J=S.scissorTest,fe.viewport(F),fe.scissor(z),fe.setScissorTest(J),V=-1;return}else if(we.__webglFramebuffer===void 0)U.setupRenderTarget(S);else if(we.__hasExternalTextures)U.rebindTextures(S,x.get(S.texture).__webglTexture,x.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ze=S.depthTexture;if(we.__boundDepthTexture!==Ze){if(Ze!==null&&x.has(Ze)&&(S.width!==Ze.image.width||S.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(S)}}const Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(be=!0);const Ne=x.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?W=Ne[B][X]:W=Ne[B],H=!0):S.samples>0&&U.useMultisampledRTT(S)===!1?W=x.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?W=Ne[X]:W=Ne,F.copy(S.viewport),z.copy(S.scissor),J=S.scissorTest}else F.copy(Y).multiplyScalar(Ue).floor(),z.copy(oe).multiplyScalar(Ue).floor(),J=le;if(X!==0&&(W=v0),fe.bindFramebuffer(L.FRAMEBUFFER,W)&&fe.drawBuffers(S,W),fe.viewport(F),fe.scissor(z),fe.setScissorTest(J),H){const we=x.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,X)}else if(be){const we=B;for(let Ie=0;Ie<S.textures.length;Ie++){const Ne=x.get(S.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Ne.__webglTexture,X,we)}}else if(S!==null&&X!==0){const we=x.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,we.__webglTexture,X)}V=-1},this.readRenderTargetPixels=function(S,B,X,W,H,be,Ee,we=0){if(!(S&&S.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie){fe.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const Ne=S.textures[we],Ze=Ne.format,Qe=Ne.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),!Ge.textureFormatReadable(Ze)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Qe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-W&&X>=0&&X<=S.height-H&&L.readPixels(B,X,W,H,ge.convert(Ze),ge.convert(Qe),be)}finally{const Ne=N!==null?x.get(N).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,W,H,be,Ee,we=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=x.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ie=Ie[Ee]),Ie)if(B>=0&&B<=S.width-W&&X>=0&&X<=S.height-H){fe.bindFramebuffer(L.FRAMEBUFFER,Ie);const Ne=S.textures[we],Ze=Ne.format,Qe=Ne.type;if(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+we),!Ge.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,be.byteLength,L.STREAM_READ),L.readPixels(B,X,W,H,ge.convert(Ze),ge.convert(Qe),0);const ht=N!==null?x.get(N).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,ht);const Ct=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await z2(L,Ct,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,be),L.deleteBuffer(ke),L.deleteSync(Ct),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,X=0){const W=Math.pow(2,-X),H=Math.floor(S.image.width*W),be=Math.floor(S.image.height*W),Ee=B!==null?B.x:0,we=B!==null?B.y:0;U.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Ee,we,H,be),fe.unbindTexture()};const x0=L.createFramebuffer(),_0=L.createFramebuffer();this.copyTextureToTexture=function(S,B,X=null,W=null,H=0,be=0){let Ee,we,Ie,Ne,Ze,Qe,ke,ht,Ct;const Mt=S.isCompressedTexture?S.mipmaps[be]:S.image;if(X!==null)Ee=X.max.x-X.min.x,we=X.max.y-X.min.y,Ie=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,Ze=X.min.y,Qe=X.isBox3?X.min.z:0;else{const Ot=Math.pow(2,-H);Ee=Math.floor(Mt.width*Ot),we=Math.floor(Mt.height*Ot),S.isDataArrayTexture?Ie=Mt.depth:S.isData3DTexture?Ie=Math.floor(Mt.depth*Ot):Ie=1,Ne=0,Ze=0,Qe=0}W!==null?(ke=W.x,ht=W.y,Ct=W.z):(ke=0,ht=0,Ct=0);const ft=ge.convert(B.format),$t=ge.convert(B.type);let De;B.isData3DTexture?(U.setTexture3D(B,0),De=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),De=L.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),De=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const on=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),_n=L.getParameter(L.UNPACK_SKIP_PIXELS),Pn=L.getParameter(L.UNPACK_SKIP_ROWS),Ui=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qe);const Ji=S.isDataArrayTexture||S.isData3DTexture,pt=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){const Ot=x.get(S),di=x.get(B),Dt=x.get(Ot.__renderTarget),ui=x.get(di.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,Dt.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ki=0;Ki<Ie;Ki++)Ji&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(S).__webglTexture,H,Qe+Ki),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(B).__webglTexture,be,Ct+Ki)),L.blitFramebuffer(Ne,Ze,Ee,we,ke,ht,Ee,we,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||S.isRenderTargetTexture||x.has(S)){const Ot=x.get(S),di=x.get(B);fe.bindFramebuffer(L.READ_FRAMEBUFFER,x0),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,_0);for(let Dt=0;Dt<Ie;Dt++)Ji?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,H,Qe+Dt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,H),pt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,di.__webglTexture,be,Ct+Dt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,di.__webglTexture,be),H!==0?L.blitFramebuffer(Ne,Ze,Ee,we,ke,ht,Ee,we,L.COLOR_BUFFER_BIT,L.NEAREST):pt?L.copyTexSubImage3D(De,be,ke,ht,Ct+Dt,Ne,Ze,Ee,we):L.copyTexSubImage2D(De,be,ke,ht,Ne,Ze,Ee,we);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else pt?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(De,be,ke,ht,Ct,Ee,we,Ie,ft,$t,Mt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(De,be,ke,ht,Ct,Ee,we,Ie,ft,Mt.data):L.texSubImage3D(De,be,ke,ht,Ct,Ee,we,Ie,ft,$t,Mt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,be,ke,ht,Ee,we,ft,$t,Mt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,be,ke,ht,Mt.width,Mt.height,ft,Mt.data):L.texSubImage2D(L.TEXTURE_2D,be,ke,ht,Ee,we,ft,$t,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,on),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_n),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ui),be===0&&B.generateMipmaps&&L.generateMipmap(De),fe.unbindTexture()},this.initRenderTarget=function(S){x.get(S).__webglFramebuffer===void 0&&U.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?U.setTextureCube(S,0):S.isData3DTexture?U.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?U.setTexture2DArray(S,0):U.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){A=0,G=0,N=null,fe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new he(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};nn.line={uniforms:oa.merge([xe.common,xe.fog,xe.line]),vertexShader:`
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
		`};class Ms extends mn{constructor(e){super({type:"LineMaterial",uniforms:oa.clone(nn.line.uniforms),vertexShader:nn.line.vertexShader,fragmentShader:nn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zu=new Wn,Eo=new I;class fr extends _g{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new xt(e,3)),this.setAttribute("uv",new xt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new mc(t,6,1);return this.setAttribute("instanceStart",new fn(i,3,0)),this.setAttribute("instanceEnd",new fn(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new mc(t,6,1);return this.setAttribute("instanceColorStart",new fn(i,3,0)),this.setAttribute("instanceColorEnd",new fn(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new lg(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Zu.setFromBufferAttribute(t),this.boundingBox.union(Zu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Eo.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Eo)),Eo.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Eo));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const sl=new mt,Yu=new I,ju=new I,zt=new mt,Bt=new mt,Nn=new mt,rl=new I,ol=new nt,Gt=new Eg,Ju=new I,Co=new Wn,Ao=new Pi,Fn=new mt;let kn,$i;function Ku(n,e,t){return Fn.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Fn.multiplyScalar(1/Fn.w),Fn.x=$i/t.width,Fn.y=$i/t.height,Fn.applyMatrix4(n.projectionMatrixInverse),Fn.multiplyScalar(1/Fn.w),Math.abs(Math.max(Fn.x,Fn.y))}function y_(n,e){const t=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,o=Math.min(i.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Gt.start.fromBufferAttribute(s,a),Gt.end.fromBufferAttribute(r,a),Gt.applyMatrix4(t);const c=new I,d=new I;kn.distanceSqToSegment(Gt.start,Gt.end,d,c),d.distanceTo(c)<$i*.5&&e.push({point:d,pointOnLine:c,distance:kn.origin.distanceTo(d),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function b_(n,e,t){const i=e.projectionMatrix,r=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=Math.min(a.instanceCount,l.count),u=-e.near;kn.at(1,Nn),Nn.w=1,Nn.applyMatrix4(e.matrixWorldInverse),Nn.applyMatrix4(i),Nn.multiplyScalar(1/Nn.w),Nn.x*=r.x/2,Nn.y*=r.y/2,Nn.z=0,rl.copy(Nn),ol.multiplyMatrices(e.matrixWorldInverse,o);for(let h=0,f=d;h<f;h++){if(zt.fromBufferAttribute(l,h),Bt.fromBufferAttribute(c,h),zt.w=1,Bt.w=1,zt.applyMatrix4(ol),Bt.applyMatrix4(ol),zt.z>u&&Bt.z>u)continue;if(zt.z>u){const w=zt.z-Bt.z,_=(zt.z-u)/w;zt.lerp(Bt,_)}else if(Bt.z>u){const w=Bt.z-zt.z,_=(Bt.z-u)/w;Bt.lerp(zt,_)}zt.applyMatrix4(i),Bt.applyMatrix4(i),zt.multiplyScalar(1/zt.w),Bt.multiplyScalar(1/Bt.w),zt.x*=r.x/2,zt.y*=r.y/2,Bt.x*=r.x/2,Bt.y*=r.y/2,Gt.start.copy(zt),Gt.start.z=0,Gt.end.copy(Bt),Gt.end.z=0;const v=Gt.closestPointToPointParameter(rl,!0);Gt.at(v,Ju);const m=im.lerp(zt.z,Bt.z,v),p=m>=-1&&m<=1,b=rl.distanceTo(Ju)<$i*.5;if(p&&b){Gt.start.fromBufferAttribute(l,h),Gt.end.fromBufferAttribute(c,h),Gt.start.applyMatrix4(o),Gt.end.applyMatrix4(o);const w=new I,_=new I;kn.distanceSqToSegment(Gt.start,Gt.end,_,w),t.push({point:_,pointOnLine:w,distance:kn.origin.distanceTo(_),object:n,face:null,faceIndex:h,uv:null,uv1:null})}}}class lr extends bt{constructor(e=new fr,t=new Ms({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)Yu.fromBufferAttribute(t,o),ju.fromBufferAttribute(i,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+Yu.distanceTo(ju);const r=new mc(s,2,1);return e.setAttribute("instanceDistanceStart",new fn(r,1,0)),e.setAttribute("instanceDistanceEnd",new fn(r,1,1)),this}raycast(e,t){const i=this.material.worldUnits,s=e.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;kn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;$i=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Ao.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=$i*.5;else{const u=Math.max(s.near,Ao.distanceToPoint(kn.origin));c=Ku(s,u,l.resolution)}if(Ao.radius+=c,kn.intersectsSphere(Ao)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Co.copy(a.boundingBox).applyMatrix4(o);let d;if(i)d=$i*.5;else{const u=Math.max(s.near,Co.distanceToPoint(kn.origin));d=Ku(s,u,l.resolution)}Co.expandByScalar(d),kn.intersectsBox(Co)!==!1&&(i?y_(this,t):b_(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(sl),this.material.uniforms.resolution.value.set(sl.z,sl.w))}}const _c=new Map,yc=new Map;function w_(n){const e=n?new Set(n):void 0;return Promise.all($s.filter(t=>t.icon&&(!e||e.has(t.id))).map(S_)).then(()=>{})}function M_(n){return[...new Set(n)].filter(e=>!yc.has(e))}function S_(n){let e=yc.get(n.id);return e||(e=new Promise((t,i)=>{const s=new Image;s.onload=()=>{_c.set(n.id,s),t()},s.onerror=()=>i(Error(`Could not load ${n.label} icon`)),s.src=n.icon??""}),yc.set(n.id,e)),e}function zs(n,e,t){const i=Wt(n,t);return{x:i.x+(e==="east"?n.width/2:e==="west"?-n.width/2:0),z:i.z+(e==="south"?n.depth/2:e==="north"?-n.depth/2:0)}}function bc(n,e,t){const i=Wt(n,t),s=(e.x-i.x)/Math.max(n.width,1),r=(e.z-i.z)/Math.max(n.depth,1);return Math.abs(s)>=Math.abs(r)?s>=0?"east":"west":r>=0?"south":"north"}function E_(n,e,t){const i=t?t==="horizontal":Math.abs(e.x-n.x)>=Math.abs(e.z-n.z),s=i?e.x>=n.x:e.z>=n.z;return i?s?["east","west"]:["west","east"]:s?["south","north"]:["north","south"]}function kf(n){const e=[];for(const t of n.values())t.kind!=="group"&&e.push({id:t.id,...Mc(t,n)});return e}function Of(n,e){const t=e.get(n.source),i=e.get(n.target);if(!t||!i)throw Error("Missing connection endpoint");const s=Wt(t,e),r=Wt(i,e),[o,a]=E_(s,r,n.routing);let l=n.sourcePort??o,c=n.targetPort??a;return n.sourcePort&&!n.targetPort&&(c=bc(i,zs(t,l,e),e)),!n.sourcePort&&n.targetPort&&(l=bc(t,zs(i,c,e),e)),[l,c]}const zf=(n,e)=>`${n}\0${e}`;function C_(n,e){const t=new Map;for(const i of n){if(!e.has(i.source)||!e.has(i.target))continue;const[s,r]=Of(i,e);for(const o of[`${i.source}:${s}`,`${i.target}:${r}`,zf(i.source,i.target)])t.set(o,(t.get(o)??0)+1)}return t}const A_=14;function T_(n,e){return n.source!==n.target&&(e?.get(zf(n.target,n.source))??0)>0}function L_(n,e){const t=[];for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i],o=(r?.x??0)-(s?.x??0),a=(r?.z??0)-(s?.z??0),l=Math.hypot(o,a);t.push(l?{x:-a/l,z:o/l}:void 0)}return n.map((i,s)=>{let r,o;for(let u=s-1;u>=0&&!r;u--)r=t[u];for(let u=s;u<t.length&&!o;u++)o=t[u];if(r??=o,o??=r,!r||!o)return{...i};const a=r.x*o.x+r.z*o.z,l=a>-.99?e/(1+a):e,c=a>-.99?r.x+o.x:r.x,d=a>-.99?r.z+o.z:r.z;return{x:i.x+c*l,z:i.z+d*l}})}function al(n,e,t=kf(e),i){if(T_(n,i)){const s=n.source<n.target,r=ll(s?n:R_(n),e,t,i),o=s?r.points:r.points.reverse();return{sourcePort:s?r.sourcePort:r.targetPort,targetPort:s?r.targetPort:r.sourcePort,points:L_(o,A_/2)}}return ll(n,e,t,i)}function R_(n){const e={...n,source:n.target,target:n.source};return delete e.sourcePort,delete e.targetPort,n.targetPort&&(e.sourcePort=n.targetPort),n.sourcePort&&(e.targetPort=n.sourcePort),e}function ll(n,e,t,i){const s=e.get(n.source),r=e.get(n.target);if(!s||!r)throw Error("Missing connection endpoint");const[o,a]=Of(n,e),l=(i?.get(`${n.source}:${o}`)??0)>1,c=(i?.get(`${n.target}:${a}`)??0)>1,d=zs(s,o,e),u=zs(r,a,e),h=wc(d,o,24),f=wc(u,a,24);return{sourcePort:o,targetPort:a,points:[d,...D_(h,f,o,a,n,s,r,e,t,l&&!c?"source":c&&!l?"target":"middle"),u]}}const wc=(n,e,t)=>({x:n.x+(e==="east"?t:e==="west"?-t:0),z:n.z+(e==="south"?t:e==="north"?-t:0)});function Mc(n,e){const t=Wt(n,e);return{minX:t.x-n.width/2,maxX:t.x+n.width/2,minZ:t.z-n.depth/2,maxZ:t.z+n.depth/2}}const pr=6;function Bf(n,e,t){const i=pr;return Math.max(n.x,e.x)>t.minX-i&&Math.min(n.x,e.x)<t.maxX+i&&Math.max(n.z,e.z)>t.minZ-i&&Math.min(n.z,e.z)<t.maxZ+i}const Si=256,Qu=new WeakMap,Gf=(n,e)=>(n&65535)<<16|e&65535;function eh(n,e,t){const i=n.get(e);i?i.push(t):n.set(e,[t])}function P_(n){let e=Qu.get(n);if(e)return e;const t=new Map;for(let i=0;i<n.length;i++){const s=n[i];if(!s)continue;const r=Math.floor(s.minX/Si),o=Math.floor(s.maxX/Si),a=Math.floor(s.minZ/Si),l=Math.floor(s.maxZ/Si);if(!(o-r<=64&&l-a<=64)){eh(t,-1,i);continue}for(let c=r;c<=o;c++)for(let d=a;d<=l;d++)eh(t,Gf(c,d),i)}return e={cells:t,seen:new Uint32Array(n.length),query:0},Qu.set(n,e),e}function I_(n,e,t,i,s,r){++i.query===4294967295&&(i.seen.fill(0),i.query=1);const o=Math.floor((Math.min(n.x,e.x)-pr)/Si),a=Math.floor((Math.max(n.x,e.x)+pr)/Si),l=Math.floor((Math.min(n.z,e.z)-pr)/Si),c=Math.floor((Math.max(n.z,e.z)+pr)/Si);let d=cl(i.cells.get(-1),n,e,t,i,s,r);if(a-o>65535||c-l>65535){for(const[u,h]of i.cells)u!==-1&&(d+=cl(h,n,e,t,i,s,r));return d}for(let u=o;u<=a;u++)for(let h=l;h<=c;h++)d+=cl(i.cells.get(Gf(u,h)),n,e,t,i,s,r);return d}function cl(n,e,t,i,s,r,o){if(!n)return 0;let a=0;for(const l of n){if(s.seen[l]===s.query)continue;s.seen[l]=s.query;const c=i[l];c&&c.id!==r&&c.id!==o&&Bf(e,t,c)&&a++}return a}function D_(n,e,t,i,s,r,o,a,l,c){const d=[Mc(r,a),Mc(o,a)],u=s.bend??0,h=Math.min(...d.map(M=>M.minX))-30,f=Math.max(...d.map(M=>M.maxX))+30,g=Math.min(...d.map(M=>M.minZ))-30,v=Math.max(...d.map(M=>M.maxZ))+30,m=P_(l),p=[],b=(M,P)=>(c==="source"?M:c==="target"?P:(M+P)/2)+u;for(const M of[b(n.x,e.x),h+u,f+u])p.push([n,{x:M,z:n.z},{x:M,z:e.z},e]);for(const M of[b(n.z,e.z),g+u,v+u])p.push([n,{x:n.x,z:M},{x:e.x,z:M},e]);const w=[{x:e.x,z:n.z},{x:n.x,z:e.z}],_=p.length;for(const M of w)p.push([n,M,{...M},e]);const R=th(t),E=th(i);let T=p[0]??[n,e],y=1/0;for(const M of p){let P=0,A=0,G;for(let N=1;N<M.length;N++){const V=M[N-1],O=M[N];if(!V||!O)continue;const F=Math.sign(O.x-V.x),z=Math.sign(O.z-V.z);if(!(!F&&!z)){P+=Math.abs(O.x-V.x)+Math.abs(O.z-V.z);for(const J of d)Bf(V,O,J)&&(P+=1e4);P+=1e4*I_(V,O,l,m,r.id,o.id),!G&&F===-R.x&&z===-R.z&&(P+=5e3),N===M.length-1&&F===E.x&&z===E.z&&(P+=5e3),G&&A++,G=O}}P+=A*40,c!=="middle"&&p.indexOf(M)>=_&&(P+=1),P<y&&(y=P,T=M)}return T}const th=n=>wc({x:0,z:0},n,1);function nh(n){let e=0;for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i];s&&r&&(e+=Math.abs(r.x-s.x)+Math.abs(r.z-s.z))}let t=e/2;for(let i=1;i<n.length;i++){const s=n[i-1],r=n[i];if(!s||!r)continue;const o=Math.abs(r.x-s.x)+Math.abs(r.z-s.z);if(o>0&&t<=o){const a=t/o;return{point:{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a},horizontal:Math.abs(r.x-s.x)>=Math.abs(r.z-s.z)}}t-=o}return{point:n[0]??{x:0,z:0},horizontal:!0}}const Vf={id:"cyberpunk",name:"Cyberpunk",dark:!0,tagline:"Neon on. Chrome polished. Jack in.",mark:"⚡",group:"Over the top",ambient:"neon",css:{bg:"#07040f","bg-top":"#0a0518","bg-mid":"#120a2a","bg-bottom":"#050a18","bg-glow":"#3b0f5c",panel:"#0d0920","panel-raised":"#160f33",hover:"#221749",input:"#0a0717",shadow:"#000000",border:"#35276a","border-strong":"#5b40a8",divider:"#271d4d",text:"#eef6ff","text-soft":"#d2d9ff","text-muted":"#aaa7d8",muted:"#8b87c0",faint:"#7470a8",accent:"#00f0ff","accent-strong":"#8af9ff","on-accent":"#04000f","accent-soft":"#0a2838","accent-border":"#00a3b3","accent-text":"#7ff8ff","accent-dim":"#4c8d9c",danger:"#ff3c6f",ok:"#39ff9c",hot:"#ff2a6d"},scene:{sky:["#0b0520","#160a35","#05081a"],glow:"#4a1070",fog:"#0b0520",grid:["#ff2a6d","#2a1c66"],gridOpacity:.32,tile:"#120b2a",tileTint:.3,face:"#150d30",faceTint:.38,outline:"#ffffff",outlineTint:.9,group:"#1a1040",groupOpacity:.18,shadow:"#000000",shadowOpacity:.55,selected:"#fcee0a",edge:"#00e5ff",edgeHover:"#b0fbff",edgeSelected:"#fcee0a",haloOpacity:.3,flow:"#ff2a6d",port:"#ff2a6d",handle:"#fcee0a",guide:"#ff2a6d",nodeLabel:{background:"#0c0720",border:"#ff2a6d",text:"#f4f8ff"},edgeLabel:{background:"#140a30",text:"#8af9ff"},groupLabel:"#c9b8ff",glyph:"#fcee0a",note:{paper:"#fcee0a",text:"#150a2a"},text:"#eef6ff",ambient:2,labelFont:'Orbitron, Rajdhani, "Share Tech", "Segoe UI", system-ui, sans-serif',edgeWidth:2.2,flowStyle:{width:5,dash:22,gap:28,speed:110}}},U_={id:"solar-forge",name:"Solar Forge",dark:!0,tagline:"Warm metal, steady light.",mark:"✦",group:"Classic",css:{bg:"#090f17","bg-top":"#0b101a","bg-mid":"#0c1721","bg-bottom":"#0b1720","bg-glow":"#26374b",panel:"#101925","panel-raised":"#111b29",hover:"#1b2838",input:"#0c1420",shadow:"#07101b",border:"#344155","border-strong":"#46566c",divider:"#293546",text:"#dce4ed","text-soft":"#c4cfda","text-muted":"#a7b7ca",muted:"#8d9db2",faint:"#7f91a7",accent:"#efb56a","accent-strong":"#ffd095","on-accent":"#20170e","accent-soft":"#332a1e","accent-border":"#bd8a46","accent-text":"#f2c48a","accent-dim":"#ab8e67",danger:"#d18c8c",ok:"#88b690",hot:"#ff9d3c"},scene:{sky:["#0a101a","#102432","#0c1b25"],glow:"#294057",fog:"#0b111a",grid:["#62503a","#253543"],gridOpacity:.22,tile:"#172b3a",tileTint:.18,face:"#2c4456",faceTint:.22,outline:"#778895",outlineTint:.45,group:"#172c3a",groupOpacity:.12,shadow:"#02080d",shadowOpacity:.4,selected:"#ffae42",edge:"#ffe1a2",edgeHover:"#fff4dc",edgeSelected:"#ff9d3c",haloOpacity:.12,flow:"#fff1c9",port:"#ffc778",handle:"#f4f7fb",guide:"#ff9d3c",nodeLabel:{background:"#14202b",border:"#41505e",text:"#e9eef4"},edgeLabel:{background:"#182431",text:"#e9eef4"},groupLabel:"#93a6b6",glyph:"#f6d7a5",note:{paper:"#f6d58a",text:"#2a2010"},text:"#e9eef4",ambient:2}},N_={id:"nord",name:"Nord",dark:!0,tagline:"Cool, calm and arctic.",mark:"❄",group:"Classic",css:{bg:"#242933","bg-top":"#262c37","bg-mid":"#2b313d","bg-bottom":"#232832","bg-glow":"#3b4456",panel:"#2e3440","panel-raised":"#353c4a",hover:"#3b4252",input:"#272c36",shadow:"#151920",border:"#4c566a","border-strong":"#5e6a82",divider:"#3f4758",text:"#eceff4","text-soft":"#d8dee9","text-muted":"#bcc4d3",muted:"#9aa4b7",faint:"#848ea2",accent:"#88c0d0","accent-strong":"#a6d6e3","on-accent":"#1e252f","accent-soft":"#33444f","accent-border":"#6ea6b6","accent-text":"#9fd3e1","accent-dim":"#7a9aa6",danger:"#d08770",ok:"#a3be8c",hot:"#ebcb8b"},scene:{sky:["#262c37","#2e3542","#232832"],glow:"#434c5e",fog:"#262c37",grid:["#5e81ac","#3b4252"],gridOpacity:.3,tile:"#3b4252",tileTint:.22,face:"#434c5e",faceTint:.28,outline:"#d8dee9",outlineTint:.55,group:"#3b4252",groupOpacity:.2,shadow:"#151920",shadowOpacity:.35,selected:"#ebcb8b",edge:"#88c0d0",edgeHover:"#d8f1f7",edgeSelected:"#ebcb8b",haloOpacity:.14,flow:"#eceff4",port:"#88c0d0",handle:"#eceff4",guide:"#bf616a",nodeLabel:{background:"#2e3440",border:"#4c566a",text:"#eceff4"},edgeLabel:{background:"#353c4a",text:"#d8dee9"},groupLabel:"#b3bccb",glyph:"#ebcb8b",note:{paper:"#ebcb8b",text:"#2e3440"},text:"#eceff4",ambient:2.2}},F_={id:"daylight",name:"Daylight",dark:!1,tagline:"Bright, clear and printable.",mark:"☀",group:"Classic",css:{bg:"#eef1f6","bg-top":"#f7f9fc","bg-mid":"#eef2f7","bg-bottom":"#e6ebf2","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f3f6fa",hover:"#e9eef5",input:"#f7f9fc",shadow:"#7d8aa0",border:"#cfd7e3","border-strong":"#a9b5c7",divider:"#dfe5ee",text:"#17202c","text-soft":"#2c394b","text-muted":"#4a586c",muted:"#5d6b80",faint:"#6f7c90",accent:"#0b6bcb","accent-strong":"#2f86de","on-accent":"#ffffff","accent-soft":"#e2eefb","accent-border":"#6aa6e6","accent-text":"#0a5aab","accent-dim":"#5a87b5",danger:"#c2334d",ok:"#2e8a4a",hot:"#e0457b"},scene:{sky:["#f7f9fc","#eef2f7","#e3e9f1"],glow:"#ffffff",fog:"#eef2f7",grid:["#a9b8cc","#d6dee9"],gridOpacity:.55,tile:"#ffffff",tileTint:.16,face:"#ffffff",faceTint:.1,outline:"#5d6b80",outlineTint:.75,group:"#c9d5e6",groupOpacity:.25,shadow:"#55627a",shadowOpacity:.18,selected:"#2f86de",edge:"#3b4c66",edgeHover:"#0b6bcb",edgeSelected:"#e0457b",haloOpacity:.08,flow:"#0b6bcb",port:"#0b6bcb",handle:"#17202c",guide:"#e0457b",nodeLabel:{background:"#ffffff",border:"#cfd7e3",text:"#17202c"},edgeLabel:{background:"#f3f6fa",text:"#2c394b"},groupLabel:"#4a586c",glyph:"#4a586c",note:{paper:"#ffe58a",text:"#2a2010"},text:"#17202c",ambient:2.6}},k_={id:"hacker",name:"Hacker",dark:!0,tagline:"> access granted_",mark:">_",group:"Over the top",ambient:"rain",css:{bg:"#000400","bg-top":"#000a02","bg-mid":"#001405","bg-bottom":"#000301","bg-glow":"#003d12",panel:"#000e04","panel-raised":"#001a08",hover:"#00290d",input:"#000a03",shadow:"#000000",border:"#0b5e22","border-strong":"#19a33e",divider:"#073d16",text:"#b6ffc8","text-soft":"#8dfaa6","text-muted":"#5fe082",muted:"#4cc46c",faint:"#3fa75b",accent:"#33ff66","accent-strong":"#9dffb4","on-accent":"#001a06","accent-soft":"#062e12","accent-border":"#1fbf4a","accent-text":"#66ff8c","accent-dim":"#2f9e4d",danger:"#ff4d4d",ok:"#33ff66",hot:"#e6ff3b"},scene:{sky:["#000a02","#001f08","#000501"],glow:"#004d18",fog:"#000a02",grid:["#33ff66","#0a3d17"],gridOpacity:.4,tile:"#001407",tileTint:.12,face:"#002a0e",faceTint:.15,outline:"#33ff66",outlineTint:.25,group:"#002b0f",groupOpacity:.16,shadow:"#000000",shadowOpacity:.6,selected:"#e6ff3b",edge:"#33ff66",edgeHover:"#c8ffd6",edgeSelected:"#e6ff3b",haloOpacity:.25,flow:"#d6ffe0",port:"#33ff66",handle:"#e6ff3b",guide:"#e6ff3b",nodeLabel:{background:"#000e04",border:"#33ff66",text:"#b6ffc8"},edgeLabel:{background:"#001a08",text:"#66ff8c"},groupLabel:"#5fe082",glyph:"#33ff66",note:{paper:"#33ff66",text:"#001a06"},text:"#b6ffc8",ambient:2,labelFont:'"JetBrains Mono", "Fira Code", "DejaVu Sans Mono", ui-monospace, monospace',iconFilter:"grayscale(1) sepia(1) hue-rotate(70deg) saturate(5) brightness(0.95)",monochrome:!0,edgeWidth:1.4,flowStyle:{width:2.4,dash:6,gap:14,speed:80}}},O_={id:"solar-ram",name:"Solar Ram Studios",dark:!0,tagline:"Forged in sunfire. Horns down, charge ahead.",mark:"♈",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V10.5"/><path d="M12 10.5C12 5.5 9.4 3 6.6 3 3.9 3 2 5 2 7.6s2 4.4 4.4 4.4c2.2 0 3.6-1.5 3.6-3.4 0-1.7-1.2-2.9-2.8-2.9"/><path d="M12 10.5C12 5.5 14.6 3 17.4 3 20.1 3 22 5 22 7.6S20 12 17.6 12c-2.2 0-3.6-1.5-3.6-3.4 0-1.7 1.2-2.9 2.8-2.9"/></svg>',group:"Over the top",ambient:"embers",css:{bg:"#0d0806","bg-top":"#120a07","bg-mid":"#1c0e08","bg-bottom":"#0a0605","bg-glow":"#5a2208",panel:"#150c08","panel-raised":"#20120b",hover:"#2e1a0f",input:"#100906",shadow:"#000000",border:"#4a2a17","border-strong":"#7a4522",divider:"#33200f",text:"#fff1dc","text-soft":"#ffdcb0","text-muted":"#e8b98a",muted:"#c99a6c",faint:"#a98058",accent:"#ffb000","accent-strong":"#ffd36b","on-accent":"#1a0c00","accent-soft":"#3a2408","accent-border":"#d48a00","accent-text":"#ffc845","accent-dim":"#b2803a",danger:"#ff5c5c",ok:"#9fd36b",hot:"#ff5a1f"},scene:{sky:["#0d0604","#2a0f06","#120806"],glow:"#7a2e08",fog:"#140906",grid:["#ff7a1f","#3a1a0c"],gridOpacity:.3,tile:"#1f120b",tileTint:.25,face:"#2e1a0f",faceTint:.3,outline:"#ffb000",outlineTint:.55,group:"#2a140a",groupOpacity:.16,shadow:"#000000",shadowOpacity:.5,selected:"#ffd36b",edge:"#ffb000",edgeHover:"#ffe7b0",edgeSelected:"#ff5a1f",haloOpacity:.28,flow:"#fff3c4",port:"#ff5a1f",handle:"#ffd36b",guide:"#ff5a1f",nodeLabel:{background:"#170c07",border:"#ff8a1f",text:"#fff1dc"},edgeLabel:{background:"#24120a",text:"#ffd36b"},groupLabel:"#e8b98a",glyph:"#ffb000",note:{paper:"#ffb000",text:"#1a0c00"},text:"#fff1dc",ambient:2.2,labelFont:'Montserrat, Poppins, "Segoe UI", system-ui, sans-serif',edgeWidth:2,flowStyle:{width:4.2,dash:18,gap:30,speed:60}}},z_={id:"zen-garden",name:"Zen Garden",dark:!1,tagline:"Breathe in. Rake the sand. Diagram slowly.",mark:"◯",group:"Over the top",ambient:"petals",css:{bg:"#efe9dc","bg-top":"#f6f1e6","bg-mid":"#ece5d5","bg-bottom":"#e2dac8","bg-glow":"#fffaf0",panel:"#faf6ee","panel-raised":"#f1ebdf",hover:"#e8e0cf",input:"#f6f1e6",shadow:"#8a7d64",border:"#d3c8b2","border-strong":"#ad9f84",divider:"#e0d7c4",text:"#2b2a26","text-soft":"#3d3a33","text-muted":"#5a554a",muted:"#655f52",faint:"#716a5b",accent:"#4f6f3f","accent-strong":"#67894f","on-accent":"#ffffff","accent-soft":"#e3e9d6","accent-border":"#8fa978","accent-text":"#3f5c31","accent-dim":"#6f7f5c",danger:"#b03a2e",ok:"#4f6f3f",hot:"#c8452c"},scene:{sky:["#f6f1e6","#ece5d5","#ddd4c0"],glow:"#fffaf0",fog:"#ece5d5",grid:["#b9ab8e","#ddd3bf"],gridOpacity:.5,tile:"#f4efe4",tileTint:.14,face:"#fbf8f1",faceTint:.1,outline:"#5a554a",outlineTint:.4,group:"#cfd8bf",groupOpacity:.28,shadow:"#6b604a",shadowOpacity:.16,selected:"#c8452c",edge:"#3d3a33",edgeHover:"#4f6f3f",edgeSelected:"#c8452c",haloOpacity:.06,flow:"#4f6f3f",port:"#c8452c",handle:"#2b2a26",guide:"#c8452c",nodeLabel:{background:"#faf6ee",border:"#d3c8b2",text:"#2b2a26"},edgeLabel:{background:"#f1ebdf",text:"#3d3a33"},groupLabel:"#5a554a",glyph:"#4f6f3f",note:{paper:"#f2d7d0",text:"#2b2a26"},text:"#2b2a26",ambient:2.6,labelFont:'"Noto Serif", "Noto Serif JP", Georgia, "Times New Roman", serif',edgeWidth:1.3,flowStyle:{width:2.6,dash:4,gap:46,speed:14}}},B_={id:"monochrome",name:"Black & White",dark:!1,tagline:"No colour. No compromise.",mark:"◐",group:"Over the top",ambient:"grain",css:{bg:"#ffffff","bg-top":"#ffffff","bg-mid":"#f4f4f4","bg-bottom":"#e8e8e8","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f2f2f2",hover:"#e6e6e6",input:"#ffffff",shadow:"#000000",border:"#000000","border-strong":"#000000",divider:"#000000",text:"#000000","text-soft":"#111111","text-muted":"#333333",muted:"#444444",faint:"#555555",accent:"#000000","accent-strong":"#222222","on-accent":"#ffffff","accent-soft":"#e6e6e6","accent-border":"#000000","accent-text":"#000000","accent-dim":"#555555",danger:"#000000",ok:"#000000",hot:"#000000"},scene:{sky:["#ffffff","#f5f5f5","#e9e9e9"],glow:"#ffffff",fog:"#f5f5f5",grid:["#000000","#bdbdbd"],gridOpacity:.35,tile:"#ffffff",tileTint:0,face:"#ffffff",faceTint:0,outline:"#000000",outlineTint:0,group:"#d9d9d9",groupOpacity:.3,shadow:"#000000",shadowOpacity:.9,selected:"#000000",edge:"#4d4d4d",edgeHover:"#000000",edgeSelected:"#000000",haloOpacity:.18,flow:"#000000",port:"#000000",handle:"#000000",guide:"#000000",nodeLabel:{background:"#ffffff",border:"#000000",text:"#000000"},edgeLabel:{background:"#000000",text:"#ffffff"},groupLabel:"#000000",glyph:"#000000",note:{paper:"#ffffff",text:"#000000"},text:"#000000",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',iconFilter:"grayscale(1) contrast(1.3)",monochrome:!0,edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},G_={id:"comic-noir",name:"Comic Noir",dark:!0,tagline:"Inked after midnight, in full colour.",mark:"◑",group:"Over the top",ambient:"grain",css:{bg:"#000000","bg-top":"#000000","bg-mid":"#0b0b0b","bg-bottom":"#171717","bg-glow":"#000000",panel:"#000000","panel-raised":"#0d0d0d",hover:"#1a1a1a",input:"#000000",shadow:"#ffffff",border:"#ffffff","border-strong":"#ffffff",divider:"#ffffff",text:"#ffffff","text-soft":"#eeeeee","text-muted":"#cccccc",muted:"#bbbbbb",faint:"#aaaaaa",accent:"#ffffff","accent-strong":"#dddddd","on-accent":"#000000","accent-soft":"#1a1a1a","accent-border":"#ffffff","accent-text":"#ffffff","accent-dim":"#aaaaaa",danger:"#ffffff",ok:"#ffffff",hot:"#ffffff"},scene:{sky:["#000000","#0a0a0a","#161616"],glow:"#000000",fog:"#0a0a0a",grid:["#ffffff","#424242"],gridOpacity:.35,tile:"#000000",tileTint:.3,face:"#000000",faceTint:.38,outline:"#ffffff",outlineTint:0,group:"#262626",groupOpacity:.3,shadow:"#ffffff",shadowOpacity:.35,selected:"#ffffff",edge:"#b3b3b3",edgeHover:"#ffffff",edgeSelected:"#ffffff",haloOpacity:.18,flow:"#ffffff",port:"#ffffff",handle:"#ffffff",guide:"#ffffff",nodeLabel:{background:"#000000",border:"#ffffff",text:"#ffffff"},edgeLabel:{background:"#ffffff",text:"#000000"},groupLabel:"#ffffff",glyph:"#ffffff",note:{paper:"#000000",text:"#ffffff"},text:"#ffffff",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},V_={id:"space",name:"Deep Space",dark:!0,tagline:"Houston, we have a diagram.",mark:"🪐",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M6.4 14.6C3.3 16.8 1.8 18.8 2.5 19.8c1.1 1.6 7-.9 12.1-4.6S22.6 6.8 21.5 5.2c-.6-.9-2.7-.5-5.5.9"/></svg>',group:"Over the top",ambient:"stars",css:{bg:"#03040c","bg-top":"#050716","bg-mid":"#0b0f2a","bg-bottom":"#020309","bg-glow":"#2a1e5c",panel:"#080b1e","panel-raised":"#0f1430",hover:"#1a2048",input:"#060818",shadow:"#000000",border:"#262e5e","border-strong":"#3d4a8f",divider:"#1b2149",text:"#eef1ff","text-soft":"#d0d6ff","text-muted":"#a9b1e0",muted:"#929bd0",faint:"#7d87bd",accent:"#7aa2ff","accent-strong":"#b3c8ff","on-accent":"#03040c","accent-soft":"#141d45","accent-border":"#4f6fd6","accent-text":"#a5bcff","accent-dim":"#6474ad",danger:"#ff6b81",ok:"#5be3b0",hot:"#c77dff"},scene:{sky:["#03040c","#0b1030","#05020f"],glow:"#33246e",fog:"#04050f",grid:["#7aa2ff","#1a1f45"],gridOpacity:.22,tile:"#0b1030",tileTint:.25,face:"#121a45",faceTint:.3,outline:"#b3c8ff",outlineTint:.6,group:"#141a40",groupOpacity:.16,shadow:"#000000",shadowOpacity:.5,selected:"#ffd27a",edge:"#7aa2ff",edgeHover:"#dbe5ff",edgeSelected:"#ffd27a",haloOpacity:.26,flow:"#ffffff",port:"#c77dff",handle:"#ffd27a",guide:"#c77dff",nodeLabel:{background:"#080b1e",border:"#4f6fd6",text:"#eef1ff"},edgeLabel:{background:"#0f1430",text:"#b3c8ff"},groupLabel:"#a9b1e0",glyph:"#b3c8ff",note:{paper:"#c77dff",text:"#0a0420"},text:"#eef1ff",ambient:2.2,stars:!0,edgeWidth:1.8,flowStyle:{width:3.2,dash:3,gap:26,speed:45}}},Ko=[Vf,k_,O_,z_,B_,G_,V_,U_,N_,F_],Sc=Vf;function Hf(n){return Ko.find(e=>e.id===n)??Sc}function H_(n,e=document.documentElement){for(const[t,i]of Object.entries(n.css))e.style.setProperty(`--${t}`,i);e.style.colorScheme=n.dark?"dark":"light",e.dataset.theme=n.id}const Vo=8,W_=new ci(1,1,1);function ih(n,e,t=3){const i=n.kind==="note",s=new An;s.userData.width=n.width,s.userData.depth=n.depth;const r=4096/Math.max(n.width,n.depth),o=Math.min(t,r);s.userData.resolution=o,s.userData.capped=t>r;const a=document.createElement("canvas");a.width=Math.max(2,Math.round(n.width*o)),a.height=Math.max(2,Math.round(n.depth*o));const l=a.getContext("2d");if(!l)throw Error("Annotation canvas unavailable");l.scale(o,o);const c=i?14:4,d=e.labelFont??"Inter, system-ui, sans-serif";if(i){const w=Math.min(22,n.width/5,n.depth/5);l.fillStyle=e.monochrome?e.note.paper:n.color,l.beginPath(),l.moveTo(0,0),l.lineTo(n.width,0),l.lineTo(n.width,n.depth-w),l.lineTo(n.width-w,n.depth),l.lineTo(0,n.depth),l.closePath(),l.fill(),e.monochrome&&(l.lineWidth=3,l.strokeStyle=e.note.text,l.stroke()),l.fillStyle="#00000022",l.beginPath(),l.moveTo(n.width,n.depth-w),l.lineTo(n.width-w,n.depth-w),l.lineTo(n.width-w,n.depth),l.closePath(),l.fill()}const{size:u,lines:h}=Oh(n.label,n.width-c*2,n.depth-c*2,sa(n),(w,_)=>(l.font=`${i?500:600} ${_}px ${d}`,l.measureText(w).width));l.font=`${i?500:600} ${u}px ${d}`,l.fillStyle=i?e.note.text:e.text,l.textBaseline="top";const f=u*1.28;l.save(),l.beginPath(),l.rect(c,c,n.width-c*2,n.depth-c*2),l.clip();for(const[w,_]of h.entries())l.fillText(_,c,c+w*f);l.restore();const g=new Or(a);g.colorSpace=Ft,g.anisotropy=4;const v=new Ii(n.width,n.depth);v.rotateX(-Math.PI/2);const m=new pn({map:g,transparent:!0,depthWrite:!1}),p=new bt(v,m);p.position.y=i?Vo/2+.6:1.5,p.renderOrder=3,s.add(p);let b;if(i){b=new id({color:n.color}),b.color.multiplyScalar(.75);const w=new bt(W_,b);w.scale.set(n.width,Vo,n.depth),s.add(w);const _=new bt(v,new pn({color:e.shadow,transparent:!0,opacity:e.shadowOpacity,depthWrite:!1}));_.position.set(6,-Vo/2-.5,8),s.add(_)}return{root:s,dispose:()=>{g.dispose(),v.dispose(),m.dispose(),b?.dispose();for(const w of s.children)w instanceof bt&&w.material!==m&&w.material!==b&&w.material.dispose();a.width=0,a.height=0}}}const To={uniforms:{tDiffuse:{value:null},resolution:{value:new he(1/1024,1/512)}},vertexShader:`

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

		}`};class X_{target=sh(0);multisampled=sh(4);material=new mn({name:"BoardFXAA",uniforms:oa.clone(To.uniforms),vertexShader:To.vertexShader,fragmentShader:To.fragmentShader,depthTest:!1,depthWrite:!1});copy=new mn({name:"BoardCopy",uniforms:{tDiffuse:{value:this.multisampled.texture}},vertexShader:To.vertexShader,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main() { gl_FragColor = texture2D( tDiffuse, vUv ); }",depthTest:!1,depthWrite:!1});mesh;quad=new uf;camera=new zr(-1,1,1,-1,0,1);size=new he;constructor(){this.material.uniforms.tDiffuse={value:this.target.texture},this.mesh=new bt(new Ii(2,2),this.material),this.mesh.frustumCulled=!1,this.quad.add(this.mesh)}render(e,t,i,s){e.getDrawingBufferSize(this.size);const r=s?this.multisampled:this.target;(r.width!==this.size.x||r.height!==this.size.y)&&r.setSize(this.size.x,this.size.y),s||this.material.uniforms.resolution?.value.set(1/this.size.x,1/this.size.y),this.mesh.material=s?this.copy:this.material;const o=e.getRenderTarget();e.setRenderTarget(r),e.render(t,i),e.setRenderTarget(o),e.render(this.quad,this.camera)}dispose(){this.target.dispose(),this.multisampled.dispose(),this.material.dispose(),this.copy.dispose(),this.mesh.geometry.dispose()}}function sh(n){const e=new Tn(1,1,{colorSpace:Ft,internalFormat:"RGBA8",depthBuffer:!0,samples:n});return e.isXRRenderTarget=!0,e}function rh(n){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");if(!t)throw new Error("Backdrop canvas unavailable");const[i,s,r]=n.sky,o=t.createLinearGradient(0,0,0,512);o.addColorStop(0,i),o.addColorStop(.55,s),o.addColorStop(1,r),t.fillStyle=o,t.fillRect(0,0,512,512);const a=t.createRadialGradient(245,110,0,245,110,330);a.addColorStop(0,n.glow),a.addColorStop(1,`${s}00`),t.fillStyle=a,t.fillRect(0,0,512,512),n.stars&&$_(t);const l=new Or(e);return l.colorSpace=Ft,l}function $_(n){let e=24301;const t=()=>(e=e*1103515245+12345&2147483647,e/2147483647);for(let i=0;i<260;i++){const s=t()<.08;n.globalAlpha=s?.95:.25+t()*.5,n.fillStyle=t()<.2?"#c9d6ff":"#ffffff",n.beginPath(),n.arc(t()*512,t()*512,s?.7:.25+t()*.3,0,Math.PI*2),n.fill()}n.globalAlpha=1}const q_=320,oh=380,Z_=750,Y_=1300,dl=6;class j_{constructor(e,t){this.host=e,this.palette=t,this.avatar=J_(t.flow),this.glow=K_(t.flow)}host;palette;avatar;glow;ring=new td(.86,1,64);travelers=[];dwells=[];pulses=[];walked=new Set;decisions=[];asking=!1;generation=0;starts=[];stopAnimation;last=0;restAt=0;get playing(){return this.stopAnimation!==void 0}start(e){this.stop(!1),this.starts=e,this.lap(performance.now()),this.last=performance.now(),this.stopAnimation=this.host.animate(t=>this.step(t))}stop(e=!0){const t=this.playing;this.generation++,this.asking&&this.host.cancelChoice(),this.asking=!1,this.decisions=[],this.stopAnimation?.(),this.stopAnimation=void 0;for(const i of this.travelers)this.removeTraveler(i);for(const i of this.pulses)this.removePulse(i.mesh);this.travelers=[],this.pulses=[],this.dwells=[],e&&t&&this.host.onFinish()}dispose(){this.stop(!1),this.avatar.dispose(),this.glow.dispose(),this.ring.dispose()}lap(e){this.walked.clear(),this.restAt=0;for(const t of this.starts)this.host.onVisit?.(t),this.pulse(t,e),this.dwells.push({node:t,until:e+oh})}step(e){const t=Math.min(.05,(e-this.last)/1e3);this.last=e;for(const s of[...this.travelers]){if(s.distance+=q_*t,s.distance>=s.total){this.removeTraveler(s),this.travelers.splice(this.travelers.indexOf(s),1);const r=this.host.target(s.edge);r&&(this.host.onVisit?.(r),this.pulse(r,e),this.dwells.push({node:r,until:e+oh}));continue}this.place(s)}for(const s of[...this.dwells]){if(e<s.until)continue;this.dwells.splice(this.dwells.indexOf(s),1);const{mode:r,edges:o}=this.host.branches(s.node);if(r==="ask"){this.decisions.push({node:s.node,edges:o,pulseAt:e+900});continue}for(const a of o)this.walked.has(a)||(this.walked.add(a),this.depart(a))}for(const s of this.decisions)e>=s.pulseAt&&(this.pulse(s.node,e),s.pulseAt=e+900);const i=this.decisions[0];if(i&&!this.asking){this.asking=!0;const s=this.generation;this.host.choose(i.node,i.edges).then(r=>{s===this.generation&&(this.asking=!1,this.decisions.shift(),r&&(this.walked.add(r),this.depart(r)))})}for(const s of[...this.pulses]){const r=(e-s.born)/Z_;if(r>=1){this.removePulse(s.mesh),this.pulses.splice(this.pulses.indexOf(s),1);continue}const o=1-(1-r)**3;s.mesh.scale.setScalar(s.radius*(.9+o*.6));const a=s.mesh.material;a instanceof pn&&(a.opacity=1-r)}return!this.travelers.length&&!this.dwells.length&&!this.decisions.length&&(this.restAt?e>=this.restAt&&this.lap(e):this.restAt=e+Y_),!0}depart(e){if(!this.host.permit(e)){const a=this.host.route(e)?.[0];if(a){const l=new bt(this.ring,new pn({color:"#ff4d5e",transparent:!0,depthTest:!1}));l.rotation.x=-Math.PI/2,l.position.copy(a),l.renderOrder=22,this.host.add(l),this.pulses.push({mesh:l,born:this.last,radius:100})}return}const t=this.host.route(e);if(!t||t.length<2)return;const i=[0];for(let a=1;a<t.length;a++){const l=t[a-1],c=t[a];i.push((i[a-1]??0)+(l&&c?l.distanceTo(c):0))}const s=new eu(new cc({map:this.avatar,depthTest:!1,transparent:!0}));s.renderOrder=20,s.scale.setScalar(78);const r=Array.from({length:dl},(a,l)=>{const c=new eu(new cc({map:this.glow,depthTest:!1,transparent:!0,opacity:.55*(1-l/dl)}));return c.renderOrder=19,c.scale.setScalar(34*(1-l/(dl*1.4))),this.host.add(c),c});this.host.add(s);const o={edge:e,points:t,lengths:i,total:i[i.length-1]??0,distance:0,sprite:s,trail:r};this.travelers.push(o),this.place(o),this.host.onHop(e)}pointAt(e,t,i){const s=Math.max(0,Math.min(e.total,t));let r=1;for(;r<e.lengths.length-1&&(e.lengths[r]??0)<s;)r++;const o=e.points[r-1],a=e.points[r],l=e.lengths[r-1]??0,c=(e.lengths[r]??l)-l;return!o||!a?i:i.copy(o).lerp(a,c>0?(s-l)/c:0)}place(e){this.pointAt(e,e.distance,e.sprite.position),e.sprite.position.y+=34,e.trail.forEach((t,i)=>{this.pointAt(e,e.distance-(i+1)*13,t.position),t.position.y+=4})}pulse(e,t){const i=this.host.node(e);if(!i)return;const s=new bt(this.ring,new pn({color:this.palette.flow,transparent:!0,depthTest:!1}));s.rotation.x=-Math.PI/2,s.position.copy(i.point),s.renderOrder=18,this.host.add(s),this.pulses.push({mesh:s,born:t,radius:i.radius})}removeTraveler(e){for(const t of[e.sprite,...e.trail])this.host.remove(t),t.material.dispose()}removePulse(e){this.host.remove(e),e.material instanceof pn&&e.material.dispose()}}function J_(n){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const i=t.createRadialGradient(64,64,10,64,64,64);i.addColorStop(0,`${n}cc`),i.addColorStop(.55,`${n}55`),i.addColorStop(1,`${n}00`),t.fillStyle=i,t.fillRect(0,0,128,128),t.fillStyle=n,t.beginPath(),t.arc(64,64,30,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(64,52,9,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(45,82),t.quadraticCurveTo(46,64,64,64),t.quadraticCurveTo(82,64,83,82),t.closePath(),t.fill();const s=new Or(e);return s.colorSpace=Ft,s}function K_(n){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const i=t.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,`${n}ff`),i.addColorStop(1,`${n}00`),t.fillStyle=i,t.fillRect(0,0,64,64);const s=new Or(e);return s.colorSpace=Ft,s}const ah=1024,lh=2048,Q_=.25,ey=4;function mr(n,e=ey){const t=2**(Math.ceil(Math.log2(Math.max(.001,n))*2)/2);return Math.min(e,Math.max(Q_,t))}class ty{constructor(e){this.palette=e}palette;pages=[];specs=new Map;regions=new Map;entries=[];hints=new Map;wanted=new Map;root;widths=new Map;measure(e,t,i){const s=`${t}
${i}`;let r=this.widths.get(s);return r===void 0&&(this.widths.size>5e4&&this.widths.clear(),e.font=t,r=e.measureText(i).width,this.widths.set(s,r)),r}matrix=new nt;position=new I;depth=new I;scale=new I;up=new I;right=new I;create(e,t,i="node",s={width:160,depth:100}){i==="icon"&&!_c.has(e)&&(e=Wp(e));const r=i==="node"?`node:${e}:${s.width}:${s.depth}:${s.fontSize??""}:${s.wrap?1:0}`:`${i}:${e}`;this.specs.has(r)||this.specs.set(r,{text:e,kind:i,bounds:s});const o=new Lt;return i==="node"&&(o.userData.captionResolution=ch(s),o.userData.captionBounds=s),this.entries.push({object:o,key:r,kind:i}),o}finish(e){this.root=e,this.hints.size>5e4&&this.hints.clear();for(const[t,i]of this.specs)this.draw(t,i,this.hints.get(t)??1);for(const t of this.entries)this.regions.get(t.key)?.page.entries.push(t);for(const t of this.pages)this.batch(t,e)}draw(e,t,i){const{text:s,kind:r,bounds:o}=t,a=this.palette.labelFont??"system-ui",l=this.pages[0]?.context??ny(),c=ch(o),d=r==="icon"?`500 64px ${a}`:r==="group"?`500 24px ${a}`:r==="edge"?`500 26px ${a}`:`600 34px ${a}`,u=r==="node"?Jp({label:s,...o},(M,P)=>this.measure(l,`600 ${P*c}px ${a}`,M)/c):void 0,h=u?`600 ${u.size*c}px ${a}`:d,f=u?8*c:15,g=u?Math.ceil((u.lines.length*u.size*1.28+16)*c):r==="icon"?92:56,v=u?Math.ceil(Math.max(1,...u.lines.map(M=>this.measure(l,h,M)))+f*2):r==="icon"?92:Math.min(520,Math.ceil(this.measure(l,h,s))+30),m=Math.max(Math.min(mr(i),(lh-8)/Math.max(v,g)),Math.min(1,4/Math.min(v,g))),p=Math.ceil(v*m),b=Math.ceil(g*m),w=this.place(p,b),{x:_,y:R,context:E}=w;E.setTransform(m,0,0,m,_,R);const T=this.palette;(r==="node"||r==="edge")&&(E.fillStyle=r==="node"?T.nodeLabel.background:T.edgeLabel.background,E.beginPath(),E.roundRect(2,3,v-4,g-6,8),E.fill(),r==="node"&&(E.strokeStyle=T.nodeLabel.border,E.lineWidth=2,E.stroke())),E.fillStyle=r==="group"?T.groupLabel:r==="icon"?T.glyph:r==="edge"?T.edgeLabel.text:T.nodeLabel.text,E.font=h;const y=r==="icon"?_c.get(s):void 0;if(y)T.iconFilter&&(E.filter=T.iconFilter),E.drawImage(y,8,8,v-16,g-16),E.filter="none";else if(u)for(const[M,P]of u.lines.entries())E.fillText(P,v/2,f+(M+.5)*u.size*c*1.28);else E.fillText(s,v/2,g/2,v-20);E.setTransform(1,0,0,1,0,0),this.regions.set(e,{page:w,x:_,y:R,width:v,height:g,pixelWidth:p,pixelHeight:b,scale:m,capped:m<mr(i)-1e-6}),this.hints.set(e,m),w.x+=p+4,w.rowHeight=Math.max(w.rowHeight,b+4)}place(e,t){let i=this.pages[this.pages.length-1];return i&&i.x+e>i.size&&(i.x=0,i.y+=i.rowHeight,i.rowHeight=0),(!i||i.y+t>i.size||e>i.size)&&(i=this.page(Math.max(e,t)+8>ah?lh:ah)),i}page(e){const t=document.createElement("canvas");t.width=e,t.height=e;const i=t.getContext("2d");if(!i)throw new Error("Text canvas unavailable");i.textAlign="center",i.textBaseline="middle";const s=new Or(t);s.colorSpace=Ft,s.generateMipmaps=!1,s.minFilter=Ht;const r={size:e,canvas:t,context:i,texture:s,entries:[],x:0,y:0,rowHeight:0};return this.pages.push(r),r}batch(e,t){e.texture.needsUpdate=!0;const i=new Ii(1,1),s=new Float32Array(e.entries.length*4);for(const[a,l]of e.entries.entries()){const c=this.regions.get(l.key);c&&s.set([c.x/e.size,1-(c.y+c.pixelHeight)/e.size,c.pixelWidth/e.size,c.pixelHeight/e.size],a*4)}i.setAttribute("atlasRect",new dc(s,4));const r=new pn({map:e.texture,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1});r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 atlasRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = atlasRect.xy + vMapUv * atlasRect.zw;`)},r.customProgramCacheKey=()=>"solar-forge-atlas-v2";const o=new Yo(i,r,e.entries.length);o.instanceMatrix.setUsage(Ei),o.frustumCulled=!1,o.renderOrder=10,e.batch=o,t.add(o)}sync(e,t,i=1){this.up.set(0,1,0).applyQuaternion(e.quaternion),this.right.set(1,0,0).applyQuaternion(e.quaternion);const s=e.projectionMatrix.elements[5]??1;this.wanted.clear();for(const r of this.pages){const o=r.batch;if(o){for(let a=0;a<r.entries.length;a++){const l=r.entries[a],c=l&&this.regions.get(l.key);if(!l||!c)continue;this.position.setFromMatrixPosition(l.object.matrixWorld);const u=2*(e instanceof tn?Math.max(1,-this.depth.copy(this.position).applyMatrix4(e.matrixWorldInverse).z):1)/(t*s);if(l.kind==="edge"){const _=l.object.userData.offsetX,R=l.object.userData.offsetY;this.position.addScaledVector(this.up,(typeof R=="number"?R:22)*u),typeof _=="number"&&this.position.addScaledVector(this.right,_*u)}const h=l.object.userData.nodeWidth,f=typeof h=="number"?h/u:120,g=l.object.userData.nodeDepth,v=typeof g=="number"?g/u:100,m=l.object.userData.captionBounds,p=m&&typeof h=="number"&&typeof g=="number"?Math.min(h/m.width,g/m.depth):1,b=l.kind==="icon"?Math.min(58,f*.28,v*.7)/64:l.kind==="node"?p/(Number(l.object.userData.captionResolution)*u):l.kind==="group"?Math.min(.5,f*.9/c.width):.5,w=b*i;w>(this.wanted.get(l.key)??0)&&this.wanted.set(l.key,w),l.kind==="node"&&l.object.userData.captionBelow&&this.position.addScaledVector(this.up,-c.height*b*u/2),this.scale.set(c.width*b*u,c.height*b*u,1),this.matrix.compose(this.position,e.quaternion,this.scale),o.setMatrixAt(a,this.matrix)}o.instanceMatrix.needsUpdate=!0}}for(const[r,o]of this.wanted){const a=this.regions.get(r);if(!a)continue;const l=mr(o);if(l>a.scale+1e-6&&!a.capped||l*2<a.scale-1e-6)return!0}return!1}redraw(){const e=this.root,t=this.pages;this.pages=[],this.regions.clear();for(const[i,s]of this.wanted)this.hints.set(i,mr(s));if(e){for(const i of t)i.batch&&e.remove(i.batch);this.finish(e)}return()=>dh(t)}retire(){const e=this.pages;return this.pages=[],this.entries=[],this.specs.clear(),this.regions.clear(),this.wanted.clear(),this.root=void 0,()=>dh(e)}dispose(){this.retire()()}}function ch(n){return Math.min(2,800/Math.max(n.width,n.depth))}let ul;function ny(){if(ul??=document.createElement("canvas").getContext("2d")??void 0,!ul)throw new Error("Text canvas unavailable");return ul}function dh(n){for(const e of n)e.batch&&(e.batch.removeFromParent(),e.batch.dispose(),e.batch.geometry.dispose(),Array.isArray(e.batch.material)||e.batch.material.dispose()),e.texture.dispose(),e.canvas.width=0,e.canvas.height=0}function uh(n,e){return{left:Math.min(n.x,e.x),top:Math.min(n.y,e.y),right:Math.max(n.x,e.x),bottom:Math.max(n.y,e.y)}}function iy(n,e,t,i,s){const r=[],o=new I;for(const a of n.values()){const l=Wt(a,n),c=a.kind==="group"?1:12,d={left:1/0,top:1/0,right:-1/0,bottom:-1/0};let u=!1;for(const f of[-a.width/2,a.width/2])for(const g of[-c,c])for(const v of[-a.depth/2,a.depth/2]){o.set(l.x+f,l.level*4+g,l.z+v).project(e),o.z>=-1&&o.z<=1&&(u=!0);const m=(o.x+1)*t/2,p=(1-o.y)*i/2;d.left=Math.min(d.left,m),d.right=Math.max(d.right,m),d.top=Math.min(d.top,p),d.bottom=Math.max(d.bottom,p)}if(!u)continue;(a.kind==="group"?d.left>=s.left&&d.right<=s.right&&d.top>=s.top&&d.bottom<=s.bottom:d.right>=s.left&&d.left<=s.right&&d.bottom>=s.top&&d.top<=s.bottom)&&r.push(a.id)}return r}function Qo(n,e,t,i){return n.copy(Ec(e)).lerp(Ec(t),i)}const Lo=new Map;function Ec(n){let e=Lo.get(n);return e||(Lo.size>4096&&Lo.clear(),e=new je(n),Lo.set(n,e)),e}class sy{constructor(e,t,i,s){this.palette=s;for(const r of["service","group","process","decision","terminal"]){const o=e.filter(u=>u.shape?u.shape===r:u.kind===r);if(!o.length)continue;const a=r==="group",l=new id({color:"#ffffff",transparent:a,opacity:a?s.groupOpacity:1,depthWrite:!a}),c=r==="process"||r==="decision"||r==="terminal"?i[r]:t,d=new Yo(c,l,o.length);d.instanceMatrix.setUsage(Ei),d.frustumCulled=!1,o.forEach((u,h)=>{this.entries.set(u.id,{mesh:d,index:h}),d.setColorAt(h,this.paint(u,!1))}),this.meshes.push(d),this.root.add(d)}}palette;root=new An;entries=new Map;meshes=[];matrix=new nt;scale=new I;rotation=new Ri;color=new je;update(e,t,i=!1){const s=this.entries.get(e.id);s&&(this.scale.set(e.width,e.kind==="group"?2:24,e.depth),s.mesh.setMatrixAt(s.index,this.matrix.compose(t,this.rotation,this.scale)),s.mesh.instanceMatrix.addUpdateRange(s.index*16,16),s.mesh.instanceMatrix.needsUpdate=!0,s.mesh.setColorAt(s.index,this.paint(e,i)),s.mesh.instanceColor&&(s.mesh.instanceColor.addUpdateRange(s.index*3,3),s.mesh.instanceColor.needsUpdate=!0))}paint(e,t){const i=this.palette;return e.kind==="group"?Qo(this.color,i.group,e.color,i.monochrome?0:.35):Qo(this.color,i.tile,e.color,i.monochrome?0:i.tileTint),t&&this.color.lerp(Ec(i.selected),.12),this.color}dispose(){for(const e of this.meshes)e.dispose(),Array.isArray(e.material)||e.material.dispose();this.root.clear(),this.entries.clear()}}class ry{constructor(e,t,i){this.palette=i,this.template=new Float32Array(t.count*3);for(let r=0;r<t.count;r++)this.template[r*3]=t.getX(r),this.template[r*3+1]=t.getY(r),this.template[r*3+2]=t.getZ(r);this.shadowMaterial=new pn({color:i.shadow,transparent:!0,opacity:i.shadowOpacity,depthWrite:!1}),this.faces=new Yo(this.plane,this.faceMaterial,e),this.shadows=new Yo(this.plane,this.shadowMaterial,e);for(const r of[this.faces,this.shadows])r.frustumCulled=!1,r.instanceMatrix.setUsage(Ei);this.positions=new jt(new Float32Array(e*t.count*3),3).setUsage(Ei),this.outlineGeometry.setAttribute("position",this.positions),this.colors=new jt(new Float32Array(e*t.count*3),3).setUsage(Ei),this.outlineGeometry.setAttribute("color",this.colors);const s=new vf(this.outlineGeometry,this.outlineMaterial);s.frustumCulled=!1,this.root.add(this.faces,this.shadows,s)}palette;root=new An;plane=new Ii(1,1);faceMaterial=new id({color:"#ffffff"});shadowMaterial;outlineMaterial=new Jc({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.85});outlineGeometry=new It;positions;colors;color=new je;faces;shadows;matrix=new nt;rotation=new Ri().setFromAxisAngle(new I(1,0,0),-Math.PI/2);position=new I;scale=new I;template;update(e,t,i){t.kind==="service"&&!t.shape?(this.position.set(i.x,i.y+12.5,i.z),this.scale.set(t.width*.82,t.depth*.76,1),this.faces.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale)),this.faces.setColorAt(e,Qo(this.color,this.palette.face,t.color,this.palette.monochrome?0:this.palette.faceTint)),this.faces.instanceColor&&(this.faces.instanceColor.addUpdateRange(e*3,3),this.faces.instanceColor.needsUpdate=!0),this.position.set(i.x+8,i.y-14,i.z+11),this.scale.set(t.width*1.04,t.depth*1.05,1),this.shadows.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale))):(this.matrix.makeScale(0,0,0),this.faces.setMatrixAt(e,this.matrix),this.shadows.setMatrixAt(e,this.matrix)),this.faces.instanceMatrix.addUpdateRange(e*16,16),this.faces.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.addUpdateRange(e*16,16),this.shadows.instanceMatrix.needsUpdate=!0,Qo(this.color,this.palette.outline,t.color,t.kind==="group"?this.palette.monochrome?0:.85:this.palette.outlineTint);const s=this.template,r=e*s.length,o=this.colors.array,{r:a,g:l,b:c}=this.color;for(let v=r,m=r+s.length;v<m;v+=3)o[v]=a,o[v+1]=l,o[v+2]=c;this.colors.addUpdateRange(r,s.length),this.colors.needsUpdate=!0;const d=!!t.shape||t.kind==="text"||t.kind==="note",u=d?0:t.width,h=d?0:t.kind==="group"?2:24,f=d?0:t.depth,g=this.positions.array;for(let v=0;v<s.length;v+=3)g[r+v]=i.x+(s[v]??0)*u,g[r+v+1]=i.y+(s[v+1]??0)*h,g[r+v+2]=i.z+(s[v+2]??0)*f;this.positions.addUpdateRange(r,s.length),this.positions.needsUpdate=!0}dispose(){this.faces.dispose(),this.shadows.dispose(),this.plane.dispose(),this.outlineGeometry.dispose(),this.faceMaterial.dispose(),this.shadowMaterial.dispose(),this.outlineMaterial.dispose(),this.root.clear()}}const hh=52*Math.PI/180;class oy{target=new I;spatial=new tn(20,1,20,8e4);plan=new zr(-1,1,1,-1,.1,8e4);mode="isometric";width=1;height=1;distance=1600;rightInset=260;get camera(){return this.mode==="top"?this.plan:this.spatial}resize(e,t){this.width=e,this.height=t,this.plan.left=-e/2,this.plan.right=e/2,this.plan.top=t/2,this.plan.bottom=-t/2,this.spatial.aspect=e/t,this.update()}setPanelVisible(e){this.rightInset=e?260:0,this.update()}setMode(e){this.mode=e,this.update()}update(){const e=this.camera;e.up.set(0,1,0),this.mode==="top"?(e.up.set(0,0,-1),e.position.set(this.target.x,3e3,this.target.z)):e.position.set(this.target.x,this.target.y+this.distance*Math.sin(hh),this.target.z+this.distance*Math.cos(hh)),e.lookAt(this.target),e.setViewOffset(this.width,this.height,(this.width<800?0:this.rightInset)/2-28,0,this.width,this.height),e.updateProjectionMatrix(),e.updateMatrixWorld()}fit(e){this.target.set((e.minX+e.maxX)/2,e.maxY/3,(e.minZ+e.maxZ)/2);const t=this.width<800?0:this.rightInset,i=Math.max(this.width-t-150,200),s=Math.max(this.height-240,200);this.plan.zoom=Math.min(2,i/Math.max(e.maxX-e.minX,200),s/Math.max(e.maxZ-e.minZ,200)),this.spatial.zoom=1;const r=new I,o=this.mode;this.mode="isometric";let a=200,l=6e4;for(let c=0;c<14;c++){this.distance=(a+l)/2,this.update();let d=!0;for(const u of[e.minX,e.maxX])for(const h of[0,e.maxY])for(const f of[e.minZ,e.maxZ]){r.set(u,h,f).project(this.spatial);const g=(r.x+1)*this.width/2,v=(1-r.y)*this.height/2;(g<100||g>this.width-t-38||v<135||v>this.height-140||r.z>1)&&(d=!1)}d?l=this.distance:a=this.distance}this.distance=l,this.mode=o,this.update()}snapshot(){const e=this.target.clone(),{distance:t,rightInset:i,mode:s}=this,r=this.spatial.zoom,o=this.plan.zoom;return()=>{this.target.copy(e),this.distance=t,this.rightInset=i,this.mode=s,this.spatial.zoom=r,this.plan.zoom=o,this.update()}}zoomBy(e){this.camera.zoom=Math.min(4,Math.max(.1,this.camera.zoom*e)),this.update()}get percent(){return Math.round(this.camera.zoom*100)}}const fh={width:3.6,dash:12,gap:38,speed:40},ph=n=>n==="north"||n==="east"||n==="south"||n==="west";function ay(n,e,t,i,s,r){const o=s-t,a=r-i,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((n-t)*o+(e-i)*a)/l)):0;return Math.hypot(n-(t+c*o),e-(i+c*a))}function ly(n,e,t){return n?e?n*e>0?"nwse-resize":"nesw-resize":"ew-resize":"ns-resize"}const cy=n=>n.kind==="text"||n.kind==="note";function mh(n,e){n.position.set(e.kind==="group"?-e.width/2+Math.min(e.width/2,150):0,e.kind==="group"?5:e.shape?26:0,e.kind==="group"?-e.depth/2+22:e.shape?0:e.depth/2+16)}function Ro(n){return n.kind==="group"?2:n.kind==="text"?4:n.kind==="note"?Vo:24}class dy{constructor(e,t,i=Sc.scene){this.host=e,this.document=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.info.autoReset=!1,this.renderer.setClearColor("#000000",0),this.scene.fog=this.fog,this.scene.matrixWorldAutoUpdate=!1,this.renderer.domElement.setAttribute("aria-label","Architecture diagram canvas"),this.host.append(this.renderer.domElement),this.selectionBox.className="selection-box",this.selectionBox.hidden=!0,this.selectionBox.setAttribute("aria-hidden","true"),this.host.append(this.selectionBox),this.scene.add(this.ports),this.scene.add(this.content,this.ambient);const s=new vg("#ffe5bf",2);s.position.set(-200,500,300),this.scene.add(s),this.applyPalette(i),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.renderer.domElement.addEventListener("pointerdown",this.down),this.renderer.domElement.addEventListener("pointermove",this.move),this.renderer.domElement.addEventListener("pointerup",this.up),this.renderer.domElement.addEventListener("pointercancel",this.cancel),this.renderer.domElement.addEventListener("lostpointercapture",this.lostCapture),this.renderer.domElement.addEventListener("mousedown",this.preventNativeDrag),this.renderer.domElement.addEventListener("dragstart",this.preventNativeDrag),this.renderer.domElement.addEventListener("wheel",this.wheel,{passive:!1}),this.renderer.domElement.addEventListener("contextmenu",this.context),this.renderer.domElement.addEventListener("dblclick",this.doubleClick),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.contextRestored),this.load(t),this.resize(),this.setView("isometric")}host;ready=Promise.resolve();document;scene=new uf;palette=Sc.scene;backdrop=rh(this.palette);labels=new ty(this.palette);grid=new Mu(16e3,320);ambient=new xg("#c9def1",2);fog=new Zc("#0b111a",12e-5);view=new oy;get camera(){return this.view.camera}get target(){return this.view.target}renderer=new __({antialias:!1,alpha:!1});antialias=new X_;motionUntil=0;settleTimer;content=new An;geometry=new ci(1,1,1);pickMaterial=new pn;shapeGeometries=uy();tileOutline=new Tm(this.geometry);details;bodies;edgeMaterial=new Ms({color:"#ffffff",linewidth:1.6,transparent:!0,depthWrite:!1,vertexColors:!0});haloMaterial=new Ms({color:"#ffffff",linewidth:8,transparent:!0,opacity:.12,depthWrite:!1,vertexColors:!0});flowMaterial=new Ms({color:"#ffffff",linewidth:3.6,transparent:!0,depthWrite:!1,dashed:!0,dashSize:12,gapSize:38});flowLines;distancesDirty=!1;flowing=!0;hasFlowEdges=!1;animators=new Set;edgeGeometry;flowGeometry;flowPositions=new Float32Array;flowBuffer;inactive=new Set;edgeBuffer;tiles=new Map;scratchColor=new je;dimColor=new je;edges=new Map;edgePositions=new jt(new Float32Array,3);edgeLabels=new Map;nodeIndex=new Map;edgeIndex=new Map;incident=new Map;obstacleCache;fanCache;get obstacles(){return this.obstacleCache??=kf(this.nodeIndex),this.obstacleCache}get fans(){return this.fanCache??=C_(this.edgeIndex.values(),this.nodeIndex),this.fanCache}pickables=[];viewProjection=new nt;scratchA=new I;scratchB=new I;dirty=!0;ray=new wg;pointer=new he;plane=new yi(new I(0,1,0),0);point=new I;observer;frame=0;width=1;height=1;mode="isometric";tool="select";snapping=!0;selectedIds=new Set;portGeometry=new nd(1,12,8);handleGeometry=new ci(1,1,1);portMaterial=new pn({color:"#ffc778",depthTest:!1});handleMaterial=new pn({color:"#f4f7fb",depthTest:!1});ports=new An;connectionStart;previewMaterial=new Ms({color:"#ffc778",linewidth:2,transparent:!0,opacity:.85,depthTest:!1,dashed:!0,dashSize:10,gapSize:7});preview;selectedEdge;hoveredEdge;edgeColors=new Float32Array;edgeColorBuffer;onSelectEdge=()=>{};journeyCaption="";onJourneyCaption=()=>{};setJourneyCaption(e){this.journeyCaption=e,this.onJourneyCaption(e)}onJourneyHop=()=>{};onJourneyEnd=()=>{};onJourneyBranches=()=>({mode:"all",edges:[]});onJourneyChoose=async()=>{};onJourneyCancelChoice=()=>{};journey;onEditRequest=()=>{};onPlace=()=>{};onConnect=()=>{};onMoves=()=>{};onContextMenu=()=>{};onResize=()=>{};resizing;dragOrigins=[];drag;guideMaterial=new Ms({color:"#ff2a6d",linewidth:1.5,transparent:!0,opacity:.9,depthTest:!1,dashed:!0,dashSize:8,gapSize:6});guides;pan;activePointer;selectionBox=document.createElement("div");marquee;selected;disposed=!1;retired=[];flushRetired(){for(const e of this.retired.splice(0))e()}labelTimer;annotationScale=2;sharpenLabelsSoon(e){clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>{this.disposed||(e&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.invalidate())},160)}staleAnnotations(){const e=this.renderer.getPixelRatio(),t=[];for(const i of this.tiles.values()){const s=i.annotation?.root;if(!s)continue;const r=mr(e/this.pixelSize(i.group.position),16),o=Number(s.userData.resolution);(r>o+1e-6&&!s.userData.capped||r*2<o-1e-6)&&t.push({tile:i,scale:r})}return t}sharpenAnnotations(){for(const{tile:e,scale:t}of this.staleAnnotations()){const i=e.annotation;if(!i)continue;const s=ih(e.node,this.palette,t);e.group.remove(i.root),e.group.add(s.root),e.annotation=s,this.retired.push(i.dispose),this.annotationScale=t}}sharpenLabels(){this.scene.updateMatrixWorld(),this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio())&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.scene.updateMatrixWorld()}fitted=!1;onSelect=()=>{};onMove=()=>{};onZoom=()=>{};onError=()=>{};metrics={frames:0,lastRenderMs:0,textures:0,drawCalls:0};applyPalette(e){this.palette=e,this.labels.palette=e,this.backdrop.dispose(),this.backdrop=rh(e),this.scene.background=this.backdrop,this.fog.color.set(e.fog),this.ambient.intensity=e.ambient,this.scene.remove(this.grid),this.grid.dispose(),this.grid=new Mu(16e3,320,e.grid[1],e.grid[1]),this.grid.position.y=-12,Array.isArray(this.grid.material)||(this.grid.material.transparent=!0,this.grid.material.opacity=e.gridOpacity),this.scene.add(this.grid),this.portMaterial.color.set(e.port),this.handleMaterial.color.set(e.handle),this.previewMaterial.color.set(e.edgeSelected),this.flowMaterial.color.set(e.flow),this.guideMaterial.color.set(e.guide),this.haloMaterial.opacity=e.haloOpacity;const t=e.edgeWidth??1.6;this.edgeMaterial.linewidth=t,this.haloMaterial.linewidth=t*5;const i=e.flowStyle??fh;this.flowMaterial.linewidth=i.width,this.flowMaterial.dashSize=i.dash,this.flowMaterial.gapSize=i.gap}setPalette(e){const t=this.selection,i=this.selectedEdge;this.applyPalette(e),this.load(this.document),i?this.selectEdge(i):this.selectMany(t)}releaseContent(){const e=[...this.tiles.values()].flatMap(a=>a.annotation?[a.annotation]:[]),{bodies:t,details:i,edgeGeometry:s,flowGeometry:r}=this,o=this.labels.retire();this.retired.push(()=>{for(const a of e)a.dispose();t?.dispose(),i?.dispose(),s?.dispose(),r?.dispose(),o()}),this.bodies=void 0,this.details=void 0,this.edgeGeometry=void 0,this.flowGeometry=void 0,this.flowBuffer=void 0,this.edgeBuffer=void 0,this.content.clear(),this.tiles.clear(),this.pickables=[],this.edges.clear(),this.edgeLabels.clear(),this.incident.clear(),this.nodeIndex.clear(),this.edgeIndex.clear()}load(e){this.releasePointer(),this.marquee=void 0,this.selectionBox.hidden=!0,this.drag=void 0,this.dragOrigins=[],this.resizing=void 0,this.pan=void 0,this.connectionStart=void 0,this.clearPreview(),this.stopJourney(),this.hoveredEdge=void 0,this.selectedEdge=void 0,this.document=e,this.releaseContent(),this.selected=void 0,this.selectedIds.clear(),this.ports.clear(),this.bodies=new sy(e.nodes,this.geometry,this.shapeGeometries,this.palette),this.content.add(this.bodies.root),this.details=new ry(e.nodes.length,this.tileOutline.getAttribute("position"),this.palette),this.content.add(this.details.root);for(const[l,c]of e.nodes.entries()){this.nodeIndex.set(c.id,c);const d=new An,u=new bt(c.shape?this.shapeGeometries[c.shape]:this.geometry,this.pickMaterial);if(u.scale.set(c.width,Ro(c),c.depth),u.userData.nodeId=c.id,u.visible=!1,d.add(u),this.pickables.push(u),cy(c)){const m=ih(c,this.palette,this.annotationScale);d.add(m.root),this.content.add(d),this.tiles.set(c.id,{index:l,node:c,group:d,label:new An,annotation:m});continue}let h;const f=Ps(c.serviceId??c.label);if(c.kind==="group"&&f?.icon&&(h=this.labels.create(f.id,this.camera.zoom,"icon"),d.add(h)),c.kind==="service"&&!c.shape){const m=this.labels.create(f?.id??c.label,this.camera.zoom,"icon");m.position.y=28,m.userData.nodeWidth=c.width,m.userData.nodeDepth=c.depth,d.add(m)}const g=this.labels.create(c.label,this.camera.zoom,c.kind==="group"?"group":"node",{width:c.width,depth:c.depth,...c.fontSize?{fontSize:c.fontSize}:{},...c.wrap?{wrap:!0}:{}});g.userData.captionBelow=c.kind==="service"&&!c.shape,g.userData.nodeWidth=c.width,g.userData.nodeDepth=c.depth,mh(g,c),d.add(g),this.content.add(d);const v={index:l,node:c,group:d,label:g,...h?{headerIcon:h}:{}};this.positionHeaderIcon(v),this.tiles.set(c.id,v)}const t=new Float32Array(e.edges.length*42);this.edgePositions=new jt(t,3),this.edgeColors=new Float32Array(e.edges.length*42),this.edgeGeometry=new fr().setPositions(t).setColors(this.edgeColors);const i=this.edgeGeometry.getAttribute("instanceStart");i instanceof fn&&(this.edgeBuffer=i.data,this.edgeBuffer.setUsage(Ei));const s=this.edgeGeometry.getAttribute("instanceColorStart");s instanceof fn&&(this.edgeColorBuffer=s.data,this.edgeColorBuffer.setUsage(Ei),this.edgeColors=s.data.array);const r=new lr(this.edgeGeometry,this.haloMaterial);r.frustumCulled=!1;const o=new lr(this.edgeGeometry,this.edgeMaterial);o.frustumCulled=!1,this.inactive=jp(e),this.hasFlowEdges=e.edges.some(l=>l.relationship!=="dependency"),this.flowPositions=new Float32Array(e.edges.length*42),this.flowGeometry=new fr().setPositions(this.flowPositions);const a=this.flowGeometry.getAttribute("instanceStart");a instanceof fn&&(this.flowBuffer=a.data,this.flowBuffer.setUsage(Ei),this.flowPositions=a.data.array),this.flowLines=new lr(this.flowGeometry,this.flowMaterial),this.flowLines.frustumCulled=!1,this.flowLines.visible=this.flowing,this.flowLines.renderOrder=2,this.content.add(r,o,this.flowLines),this.distancesDirty=!0;for(const[l,c]of e.edges.entries()){if(this.edgeIndex.set(c.id,c),this.edges.set(c.id,l),this.paintEdge(c.id),c.label){const d=this.labels.create(c.label,this.camera.zoom,"edge");this.content.add(d),this.edgeLabels.set(c.id,d)}for(const d of[c.source,c.target]){const u=this.incident.get(d)??new Set;u.add(c.id),this.incident.set(d,u)}}this.labels.finish(this.content),this.updatePositions(),this.invalidate(),this.onSelect(void 0),this.loadIcons(e)}loadIcons(e){const t=[];for(const s of e.nodes){const r=Ps(s.serviceId??s.label);r?.icon&&t.push(r.id)}const i=M_(t);i.length&&(this.ready=w_(i).then(()=>{if(this.disposed||this.document!==e)return;const s=this.selectedEdge,r=this.selection;this.load(e),s?this.selectEdge(s):this.selectMany(r)}).catch(s=>this.onError(String(s))))}positionHeaderIcon(e){if(!e.headerIcon)return;const{width:t,depth:i}=e.node;e.headerIcon.position.set(t/2-28,6,-i/2+24),e.headerIcon.userData.nodeWidth=t>=120?100:0,e.headerIcon.userData.nodeDepth=40,e.label.userData.nodeWidth=Math.max(30,t-80),e.label.position.x=-t/2+Math.min(Math.max(30,t-80)/2,150)}updatePositions(){this.obstacleCache=void 0,this.fanCache=void 0;for(const e of this.tiles.values()){const t=Wt(e.node,this.nodeIndex);this.positionHeaderIcon(e),e.group.position.set(t.x,t.level*4,t.z),this.bodies?.update(e.node,e.group.position,this.selectedIds.has(e.node.id)),this.details?.update(e.index,e.node,e.group.position)}for(const e of this.edges.keys())this.updateEdge(e)}updateEdge(e){const t=this.edgeIndex.get(e),i=this.edges.get(e);if(!t||i===void 0)return;const s=this.tiles.get(t.source),r=this.tiles.get(t.target);if(!s||!r)return;const{points:o,targetPort:a}=al(t,this.nodeIndex,this.obstacles,this.fans),l=Math.max(s.group.position.y,r.group.position.y)+8,c=i*14;for(let _=0;_<5;_++){const R=o[_],E=o[_+1];!R||!E||(this.edgePositions.setXYZ(c+_*2,R.x,l,R.z),this.edgePositions.setXYZ(c+_*2+1,E.x,l,E.z))}const d=o[0],u=o[o.length-1];if(!d||!u)return;const h=a==="west"?1:a==="east"?-1:0,f=a==="north"?1:a==="south"?-1:0;this.edgePositions.setXYZ(c+10,u.x-h*8+f*4,l,u.z-f*8-h*4),this.edgePositions.setXYZ(c+11,u.x,l,u.z),this.edgePositions.setXYZ(c+12,u.x-h*8-f*4,l,u.z-f*8+h*4),this.edgePositions.setXYZ(c+13,u.x,l,u.z);const{point:g,horizontal:v}=nh(o);this.edgeBuffer&&(this.edgeBuffer.addUpdateRange(i*42,42),this.edgeBuffer.needsUpdate=!0);const m=this.edgePositions.array,p=i*42,b=this.inactive.has(e)||t.relationship==="dependency";for(let _=0;_<42;_++)this.flowPositions[p+_]=m[b?p+_%3:p+_]??0;this.flowBuffer&&(this.flowBuffer.addUpdateRange(p,42),this.flowBuffer.needsUpdate=!0),this.distancesDirty=!0;const w=this.edgeLabels.get(e);w&&(w.position.set(g.x,l+8,g.z),w.userData.offsetX=v?0:46,w.userData.offsetY=v?22:0)}setView(e){this.mode=e,this.view.setMode(e),this.onZoom(this.view.percent),this.invalidate()}setQuality(e){this.renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(2,Math.max(1,e)))),this.resize()}setDiagramVisible(e){this.content.visible=e,this.invalidate()}insertionPoint(){return{x:this.target.x,z:this.target.z}}reveal(e){const t=this.tiles.get(e),i=this.nodeScreenPosition(e);if(!t||!i)return;const s=this.renderer.domElement.getBoundingClientRect(),r=i.x-s.left,o=i.y-s.top;r>120&&r<this.width-300&&o>120&&o<this.height-120||(this.fitted=!1,this.target.x=t.group.position.x,this.target.z=t.group.position.z,this.setView(this.mode))}setPanelVisible(e){this.view.setPanelVisible(e),this.fit()}zoomBy(e){this.fitted=!1,this.view.zoomBy(e),this.onZoom(this.view.percent),this.invalidate()}setTool(e){this.cancelInteraction(),this.tool=e,this.renderer.domElement.style.cursor=this.toolCursor()}toolCursor(){return this.tool==="pan"?"grab":this.tool==="connect"?"crosshair":this.tool==="text"?"text":this.tool==="note"?"copy":"default"}finishInteraction(){this.up()}fit(){this.fitted=!0;let e=1/0,t=-1/0,i=1/0,s=-1/0,r=0;for(const o of this.tiles.values())e=Math.min(e,o.group.position.x-o.node.width/2),t=Math.max(t,o.group.position.x+o.node.width/2),i=Math.min(i,o.group.position.z-o.node.depth/2),s=Math.max(s,o.group.position.z+o.node.depth/2+70),r=Math.max(r,o.group.position.y+45);Number.isFinite(e)&&this.view.fit({minX:e,maxX:t,minZ:i,maxZ:s,maxY:r}),this.onZoom(this.view.percent),this.invalidate()}resize(){this.width=Math.max(this.host.clientWidth,1),this.height=Math.max(this.host.clientHeight,1),this.renderer.setSize(this.width,this.height),this.view.resize(this.width,this.height),this.fitted?this.fit():this.invalidate()}locate(e){const t=this.renderer.domElement.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/this.width*2-1,-(e.clientY-t.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.ray.ray.intersectPlane(this.plane,this.point)??void 0}down=e=>{if(this.activePointer!==void 0||e.button>2)return;e.preventDefault();const t=this.locate(e);if(!t)return;if(this.activePointer=e.pointerId,e.isTrusted&&this.renderer.domElement.setPointerCapture(e.pointerId),e.button===1||e.button===2||e.altKey||this.tool==="pan"){this.pan={x:t.x,z:t.z};return}if(this.tool==="text"||this.tool==="note"){this.releasePointer(),this.onPlace(this.tool,Math.round(t.x),Math.round(t.z));return}const i=this.handleAt();if(i){const a=i.userData.nodeId,l=typeof a=="string"?this.tiles.get(a)?.node:void 0,c=i.userData.resize;if(l&&Array.isArray(c)){const[u,h]=c;this.resizing={id:l.id,sx:u,sz:h,start:{x:t.x,z:t.z},from:{x:l.x,z:l.z,width:l.width,depth:l.depth},children:[...this.tiles.values()].filter(f=>f.node.parentId===l.id).map(({node:f})=>({node:f,x:f.x,z:f.z}))};return}const d=i.userData.port;if(l&&ph(d)){this.connectionStart={id:l.id,port:d},this.showPreview(t);return}}if(this.tool==="select"){const a=this.edgeAt(e);if(a){this.selectEdge(a),this.releasePointer();return}}const s=this.nodeAt();if(this.tool==="connect"){s&&(this.connectionStart?(this.onConnect(this.connectionStart.id,void 0,s,void 0),this.connectionStart=void 0,this.clearPreview()):(this.select(s),this.connectionStart={id:s},this.showPreview(t)));return}const r=s?this.tiles.get(s)?.node:void 0;if(!s||r?.kind==="group"&&!this.selectedIds.has(s)){const a=this.renderer.domElement.getBoundingClientRect(),l={x:e.clientX-a.left,y:e.clientY-a.top};this.marquee={start:l,end:l,initial:this.selection,additive:e.shiftKey,clickId:s,active:!1};return}e.shiftKey||!this.selectedIds.has(s)?this.select(s,e.shiftKey):this.selected=s;const o=this.selected?this.tiles.get(this.selected)?.node:void 0;if(o){this.dragOrigins=[...this.tiles.values()].filter(c=>{if(!this.selectedIds.has(c.node.id))return!1;let d=c.node.parentId;for(;d;){if(this.selectedIds.has(d))return!1;d=this.nodeIndex.get(d)?.parentId}return!0}).map(({node:c})=>({node:c,x:c.x,z:c.z}));const a=new Set(this.dragOrigins.map(c=>c.node.id)),l=c=>{for(let d=c.node.id;d;){if(a.has(d))return!0;d=this.nodeIndex.get(d)?.parentId}return!1};this.drag={id:o.id,x:t.x,z:t.z,startX:o.x,startZ:o.z,box:this.worldRect(this.tiles.get(o.id)),others:[...this.tiles.values()].filter(c=>!l(c)).map(c=>this.worldRect(c))}}};nodeAt(){const e=this.ray.intersectObjects(this.pickables,!1),i=(e.find(s=>{const r=s.object.userData.nodeId;return typeof r=="string"&&this.tiles.get(r)?.node.kind!=="group"})??e[0])?.object.userData.nodeId;return typeof i=="string"?i:void 0}handleAt(){return this.ray.intersectObjects(this.ports.children,!1)[0]?.object}edgeAt(e){const t=this.renderer.domElement.getBoundingClientRect(),i=e.clientX-t.left,s=e.clientY-t.top,r=this.scratchA,o=this.scratchB,a=this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);let l,c=7;for(const[d,u]of this.edges)for(let h=0;h<5;h++){const f=u*14+h*2;r.fromBufferAttribute(this.edgePositions,f).applyMatrix4(a),o.fromBufferAttribute(this.edgePositions,f+1).applyMatrix4(a);const g=(r.x+1)*this.width/2,v=(1-r.y)*this.height/2,m=(o.x+1)*this.width/2,p=(1-o.y)*this.height/2,b=ay(i,s,g,v,m,p);b<c&&(c=b,l=d)}return l}hover(e){if(!this.locate(e))return;const t=this.handleAt(),i=t?.userData.resize;let s=this.toolCursor(),r;if(Array.isArray(i)){const[o,a]=i;s=ly(o,a,this.mode)}else t?s="crosshair":this.tool==="select"&&(r=this.edgeAt(e),r?s="pointer":this.nodeAt()&&(s="move"));if(this.renderer.domElement.style.cursor=s,r!==this.hoveredEdge){const o=this.hoveredEdge;this.hoveredEdge=r,o&&this.paintEdge(o),r&&this.paintEdge(r),this.invalidate()}}move=e=>{if(this.activePointer===void 0){this.hover(e);return}if(e.pointerId!==this.activePointer)return;if(e.preventDefault(),this.inMotion(),this.marquee){const a=this.renderer.domElement.getBoundingClientRect();if(this.marquee.end={x:Math.max(0,Math.min(this.width,e.clientX-a.left)),y:Math.max(0,Math.min(this.height,e.clientY-a.top))},Math.hypot(this.marquee.end.x-this.marquee.start.x,this.marquee.end.y-this.marquee.start.y)>=4&&(this.marquee.active=!0),this.marquee.active){const l=uh(this.marquee.start,this.marquee.end);this.selectionBox.hidden=!1,Object.assign(this.selectionBox.style,{left:`${l.left}px`,top:`${l.top}px`,width:`${l.right-l.left}px`,height:`${l.bottom-l.top}px`})}return}const t=this.locate(e);if(!t)return;if(this.connectionStart){this.showPreview(t);return}if(this.resizing){const{sx:a,sz:l,start:c,from:d}=this.resizing,u=this.tiles.get(this.resizing.id);if(!u)return;const h=this.snapping?10:1,f=(v,m)=>Math.max(30,Math.round((v+m)/h)*h),g=u.node;a&&(g.width=f(d.width,a*(t.x-c.x)),g.x=d.x+a*(g.width-d.width)/2),l&&(g.depth=f(d.depth,l*(t.z-c.z)),g.z=d.z+l*(g.depth-d.depth)/2);for(const v of this.resizing.children)v.node.x=v.x-(g.x-d.x),v.node.z=v.z-(g.z-d.z);this.applySize(u),this.refreshPosition(g.id);return}if(this.pan){this.fitted=!1,this.target.x+=this.pan.x-t.x,this.target.z+=this.pan.z-t.z,this.setView(this.mode);return}if(!this.drag||!this.tiles.get(this.drag.id))return;const s=this.snapping?10:1;let r=Math.round((t.x-this.drag.x)/s)*s,o=Math.round((t.z-this.drag.z)/s)*s;if(e.ctrlKey)this.showGuides([]);else{const a=this.alignToNeighbours(this.drag,r,o);r=a.dx,o=a.dz}for(const a of this.dragOrigins)a.node.x=a.x+r,a.node.z=a.z+o;this.refreshPositions(this.dragOrigins.map(a=>a.node.id))};worldRect(e){if(!e)return{minX:0,maxX:0,minZ:0,maxZ:0};const t=Wt(e.node,this.nodeIndex);return{minX:t.x-e.node.width/2,maxX:t.x+e.node.width/2,minZ:t.z-e.node.depth/2,maxZ:t.z+e.node.depth/2}}alignToNeighbours(e,t,i){const s=e.box,r=8*this.pixelSize(new I((s.minX+s.maxX)/2,0,(s.minZ+s.maxZ)/2)),o=(u,h)=>[u,(u+h)/2,h];let a,l;for(const u of e.others){for(const h of o(s.minX+t,s.maxX+t))for(const f of o(u.minX,u.maxX)){const g=f-h;Math.abs(g)<r&&(!a||Math.abs(g)<Math.abs(a.diff))&&(a={diff:g,at:f,other:u})}for(const h of o(s.minZ+i,s.maxZ+i))for(const f of o(u.minZ,u.maxZ)){const g=f-h;Math.abs(g)<r&&(!l||Math.abs(g)<Math.abs(l.diff))&&(l={diff:g,at:f,other:u})}}a&&(t+=a.diff),l&&(i+=l.diff);const c=[],d=16;if(a){const u=Math.min(s.minZ+i,a.other.minZ)-30,h=Math.max(s.maxZ+i,a.other.maxZ)+30;c.push(a.at,d,u,a.at,d,h)}if(l){const u=Math.min(s.minX+t,l.other.minX)-30,h=Math.max(s.maxX+t,l.other.maxX)+30;c.push(u,d,l.at,h,d,l.at)}return this.showGuides(c),{dx:t,dz:i}}showGuides(e){if(!e.length){this.guides&&(this.scene.remove(this.guides),this.guides.geometry.dispose(),this.guides=void 0,this.invalidate());return}this.guides&&(this.scene.remove(this.guides),this.guides.geometry.dispose()),this.guides=new lr(new fr().setPositions(e),this.guideMaterial),this.guides.computeLineDistances(),this.guides.frustumCulled=!1,this.guides.renderOrder=11,this.scene.add(this.guides),this.invalidate()}applySize(e){const t=e.group.children[0];t instanceof bt&&t.scale.set(e.node.width,Ro(e.node),e.node.depth);for(const s of e.group.children)s.userData.nodeWidth=e.node.width,s.userData.nodeDepth=e.node.depth;const i=e.annotation?.root;i&&i.scale.set(e.node.width/i.userData.width,1,e.node.depth/i.userData.depth)}showPreview(e){const t=this.connectionStart,i=t?this.tiles.get(t.id):void 0;if(!t||!i)return;const s=t.port?zs(i.node,t.port,this.nodeIndex):{x:i.group.position.x,z:i.group.position.z},r=i.group.position.y+14,o=[s.x,r,s.z,e.x,r,e.z];this.preview?this.preview.geometry.setPositions(o):(this.preview=new lr(new fr().setPositions(o),this.previewMaterial),this.preview.frustumCulled=!1,this.preview.renderOrder=11,this.scene.add(this.preview)),this.preview.computeLineDistances(),this.invalidate()}clearPreview(){this.preview&&(this.scene.remove(this.preview),this.preview.geometry.dispose(),this.preview=void 0,this.invalidate())}refreshPosition(e){this.refreshPositions([e])}refreshPositions(e){const t=[];for(const i of e){const s=this.tiles.get(i);s&&t.push(s)}if(t.length){if(this.obstacleCache=void 0,this.fanCache=void 0,t.some(i=>i.node.kind==="group"))this.updatePositions();else{const i=new Set;for(const s of t){const r=Wt(s.node,this.nodeIndex);s.group.position.set(r.x,r.level*4,r.z),this.bodies?.update(s.node,s.group.position,this.selectedIds.has(s.node.id)),this.details?.update(s.index,s.node,s.group.position);for(const o of this.incident.get(s.node.id)??[])i.add(o)}for(const s of i)this.updateEdge(s)}for(const i of t)mh(i.label,i.node),this.positionHeaderIcon(i);this.invalidate()}}syncHandles(){const e=this.selected?this.tiles.get(this.selected):void 0;if(!e)return;const{x:t,y:i,z:s}=e.group.position,r=i+(e.node.kind==="group"?2:13),o=e.node.width/2,a=e.node.depth/2;for(const l of this.ports.children){const c=l.userData.resize,d=l.userData.port;l.position.set(t,r,s);const u=this.pixelSize(l.position);if(Array.isArray(c)){const[h,f]=c;l.position.set(t+h*o,r,s+f*a),l.scale.setScalar(9*u)}else if(ph(d)){const h=20*u;l.position.set(t+(d==="east"?o+h:d==="west"?-o-h:0),r,s+(d==="south"?a+h:d==="north"?-a-h:0)),l.scale.setScalar(5.5*u)}}}pixelSize(e){const t=this.camera.projectionMatrix.elements[5]??1;return 2*(this.camera instanceof tn?Math.max(1,-this.scratchA.copy(e).applyMatrix4(this.camera.matrixWorldInverse).z):1)/(this.height*t)}up=e=>{if(e&&e.pointerId!==this.activePointer)return;if(this.marquee){e&&this.move(e);const i=this.marquee;if(this.marquee=void 0,this.selectionBox.hidden=!0,i.active){const s=iy(this.nodeIndex,this.camera,this.width,this.height,uh(i.start,i.end));this.selectMany(i.additive?[...new Set([...i.initial,...s])]:s)}else this.select(i.clickId,i.additive)}if(this.releasePointer(),this.resizing){const{id:i,from:s,children:r}=this.resizing;this.resizing=void 0;const o=this.tiles.get(i)?.node;o&&(o.width!==s.width||o.depth!==s.depth||o.x!==s.x||o.z!==s.z)&&this.onResize([{id:i,from:s,to:{x:o.x,z:o.z,width:o.width,depth:o.depth}},...r.filter(a=>a.node.x!==a.x||a.node.z!==a.z).map(a=>({id:a.node.id,from:{x:a.x,z:a.z},to:{x:a.node.x,z:a.node.z}}))])}if(this.connectionStart&&e&&this.tool!=="connect"){const i=this.connectionStart;this.connectionStart=void 0,this.clearPreview();const s=this.locate(e),a=this.ray.intersectObjects(this.pickables,!1).find(c=>c.object.userData.nodeId!==i.id)?.object.userData.nodeId,l=typeof a=="string"?this.nodeIndex.get(a):void 0;l&&s&&this.onConnect(i.id,i.port,l.id,bc(l,s,this.nodeIndex))}const t=this.dragOrigins.filter(i=>i.node.x!==i.x||i.node.z!==i.z).map(i=>({id:i.node.id,from:{x:i.x,z:i.z},to:{x:i.node.x,z:i.node.z}}));if(this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.showGuides([]),t.length===1){const i=t[0];i&&this.onMove(i.id,i.from,i.to)}else t.length&&this.onMoves(t)};cancelInteraction=()=>{if(this.marquee=void 0,this.selectionBox.hidden=!0,this.releasePointer(),this.resizing){const e=this.tiles.get(this.resizing.id);e&&(Object.assign(e.node,this.resizing.from),this.applySize(e));for(const t of this.resizing.children)t.node.x=t.x,t.node.z=t.z;this.resizing=void 0}for(const e of this.dragOrigins)e.node.x=e.x,e.node.z=e.z;this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.showGuides([]),this.connectionStart=void 0,this.clearPreview(),this.updatePositions(),this.invalidate()};cancel=()=>this.cancelInteraction();lostCapture=e=>{e.pointerId===this.activePointer&&this.cancelInteraction()};releasePointer(){const e=this.activePointer;this.activePointer=void 0,e!==void 0&&this.renderer.domElement.hasPointerCapture(e)&&this.renderer.domElement.releasePointerCapture(e)}preventNativeDrag=e=>e.preventDefault();wheel=e=>{this.inMotion(),this.fitted=!1,e.preventDefault();const t=this.locate(e)?.clone();this.camera.zoom=Math.min(4,Math.max(.05,this.camera.zoom*Math.exp(-e.deltaY*.001))),this.camera.updateProjectionMatrix();const i=this.locate(e);t&&i&&(this.target.x+=t.x-i.x,this.target.z+=t.z-i.z,this.setView(this.mode)),this.onZoom(this.view.percent),this.invalidate()};context=e=>{e.preventDefault();const t=this.edgeAt(e);if(t)this.selectEdge(t);else if(!this.selectedEdge||this.selectedIds.size){const i=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-i.left)/this.width*2-1,-(e.clientY-i.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const s=this.nodeAt();s&&!this.selectedIds.has(s)&&this.select(s)}this.onContextMenu(e.clientX,e.clientY)};doubleClick=e=>{if(this.tool!=="select")return;const t=this.edgeAt(e);if(t){this.onEditRequest({kind:"edge",id:t});return}const i=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-i.left)/this.width*2-1,-(e.clientY-i.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const s=this.nodeAt();if(s){this.select(s),this.onEditRequest({kind:"node",id:s});return}const r=this.ray.ray.intersectPlane(this.plane,this.point);r&&this.onEditRequest({kind:"empty",x:Math.round(r.x),z:Math.round(r.z)})};nodeScreenRect(e){const t=this.tiles.get(e);if(!t)return;const i=this.renderer.domElement.getBoundingClientRect(),{x:s,y:r,z:o}=t.group.position,a=r+Ro(t.node)/2;let l=1/0,c=-1/0,d=1/0,u=-1/0;const h=new I;for(const f of[-1,1])for(const g of[-1,1]){h.set(s+f*t.node.width/2,a,o+g*t.node.depth/2).project(this.camera);const v=i.left+(h.x+1)*this.width/2,m=i.top+(1-h.y)*this.height/2;l=Math.min(l,v),c=Math.max(c,v),d=Math.min(d,m),u=Math.max(u,m)}return{left:l,top:d,width:c-l,height:u-d}}edgeScreenPosition(e){const t=this.edges.get(e),i=this.edgeIndex.get(e);if(t===void 0||!i)return;const{points:s}=al(i,this.nodeIndex,this.obstacles,this.fans),{point:r}=nh(s),o=new I(r.x,8,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}nodePixelScale(e){const t=this.tiles.get(e);return t?1/this.pixelSize(t.group.position):1}contextLost=e=>{e.preventDefault(),this.onError("Graphics context lost. Waiting for recovery…")};contextRestored=()=>{this.onError("Graphics context restored"),this.invalidate()};get selection(){return[...this.selectedIds]}get edgeSelection(){return this.selectedEdge}select(e,t=!1){const i=t?new Set(this.selectedIds):new Set;e&&(t&&i.has(e)?i.delete(e):i.add(e)),this.selectMany([...i])}selectEdge(e){const t=e&&this.edges.has(e)?e:void 0;this.setNodeSelection([]),this.setEdgeSelection(t),this.onSelectEdge(t),this.invalidate()}setEdgeSelection(e){const t=this.selectedEdge;this.selectedEdge=e,t&&this.paintEdge(t),e&&this.paintEdge(e)}selectMany(e){this.setEdgeSelection(void 0),this.setNodeSelection(e);const t=this.selected?this.tiles.get(this.selected):void 0;this.onSelect(t?.node),this.invalidate()}setNodeSelection(e){const t=[...this.selectedIds];this.selectedIds.clear();for(const s of e)this.tiles.has(s)&&this.selectedIds.add(s);this.selected=[...this.selectedIds].at(-1);for(const s of new Set([...t,...this.selectedIds])){const r=this.tiles.get(s);r&&this.bodies?.update(r.node,r.group.position,this.selectedIds.has(s))}this.ports.clear();const i=this.selected?this.tiles.get(this.selected):void 0;if(!(!i||this.selectedIds.size!==1)){for(const s of["north","east","south","west"]){const r=new bt(this.portGeometry,this.portMaterial);r.userData.nodeId=i.node.id,r.userData.port=s,r.renderOrder=12,this.ports.add(r)}for(const s of[-1,0,1])for(const r of[-1,0,1]){if(!s&&!r)continue;const o=new bt(this.handleGeometry,this.handleMaterial);o.userData.nodeId=i.node.id,o.userData.resize=[s,r],o.renderOrder=13,this.ports.add(o)}}}paintEdge(e){const t=this.edges.get(e);if(t===void 0||!this.edgeColorBuffer)return;const i=e===this.selectedEdge?this.palette.edgeSelected:e===this.hoveredEdge?this.palette.edgeHover:this.palette.edge;this.scratchColor.set(i),(this.inactive.has(e)||this.edgeIndex.get(e)?.relationship==="dependency")&&e!==this.selectedEdge&&e!==this.hoveredEdge&&this.scratchColor.lerp(this.dimColor.set(this.palette.sky[1]),.68);const{r:s,g:r,b:o}=this.scratchColor;for(let a=t*42,l=a+42;a<l;a+=3)this.edgeColors[a]=s,this.edgeColors[a+1]=r,this.edgeColors[a+2]=o;this.edgeColorBuffer.addUpdateRange(t*42,42),this.edgeColorBuffer.needsUpdate=!0}refresh(){this.updatePositions(),this.invalidate()}inMotion(){this.motionUntil=performance.now()+200,clearTimeout(this.settleTimer),this.settleTimer=setTimeout(()=>{this.settleTimer=void 0,this.invalidate()},220)}invalidate(){this.dirty=!0,this.schedule()}schedule(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.render()}))}onJourneyPermit=()=>!0;playJourney(e,t){const i=new Map;if(t)for(let r=1;r<t.path.length;r++){const o=t.path[r-1],a=t.path[r];o&&a&&i.set(`reachability:${r}`,{id:`reachability:${r}`,source:o,target:a,label:""})}const s=r=>i.get(r)??this.edgeIndex.get(r);this.journey?.dispose(),this.journey=new j_({add:r=>this.scene.add(r),remove:r=>this.scene.remove(r),animate:r=>this.animate(r),route:r=>{const o=s(r),a=o&&this.tiles.get(o.source),l=o&&this.tiles.get(o.target);if(!o||!a||!l)return;const c=Math.max(a.group.position.y,l.group.position.y)+8;return al(o,this.nodeIndex,this.obstacles,this.fans).points.map(d=>new I(d.x,c,d.z))},node:r=>{const o=this.tiles.get(r);if(!o)return;const a=o.group.position.clone();return a.y+=Ro(o.node)/2+1,{point:a,radius:Math.max(o.node.width,o.node.depth)*.62}},branches:r=>t?{mode:"all",edges:[...i.values()].filter(o=>o.source===r).map(o=>o.id)}:this.onJourneyBranches(r),choose:(r,o)=>this.onJourneyChoose(r,o),cancelChoice:()=>this.onJourneyCancelChoice(),target:r=>s(r)?.target,onVisit:r=>{const o=this.nodeIndex.get(r);this.setJourneyCaption(o?`${o.label}${o.journeyCaption?`
${o.journeyCaption}`:""}`:"")},onHop:r=>this.onJourneyHop(r),permit:r=>{const o=t?t.allowed:this.onJourneyPermit(r);return o||this.setJourneyCaption(`Blocked · ${this.journeyCaption}`),o},onFinish:()=>this.onJourneyEnd()},this.palette),this.journey.start(e)}stopJourney(){this.setJourneyCaption(""),this.journey?.dispose();const e=this.journey?.playing;this.journey=void 0,e!==void 0&&this.onJourneyEnd()}get journeyPlaying(){return this.journey?.playing??!1}setFlow(e){this.flowing=e,this.flowLines&&(this.flowLines.visible=e),this.invalidate()}get flow(){return this.flowing}animate(e){return this.animators.add(e),this.invalidate(),()=>{this.animators.delete(e),this.invalidate()}}get animating(){return this.content.visible&&(this.flowing&&this.hasFlowEdges||this.animators.size>0)}render(e=!1){const t=performance.now();this.distancesDirty&&this.flowLines&&(this.flowLines.computeLineDistances(),this.distancesDirty=!1);const i=this.palette.flowStyle??fh;this.flowMaterial.dashOffset=-(t/1e3*i.speed)%(i.dash+i.gap);const s=this.dirty||e;this.dirty=!1;const r=this.animators.size>0;for(const o of this.animators)o(t)||this.animators.delete(o);if(s&&this.syncHandles(),(s||r)&&this.scene.updateMatrixWorld(),s){const o=this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio());(o||this.staleAnnotations().length)&&this.sharpenLabelsSoon(o)}this.renderer.info.reset(),this.antialias.render(this.renderer,this.scene,this.camera,e||t>=this.motionUntil),this.flushRetired(),this.metrics.textures=this.renderer.info.memory.textures,this.metrics.drawCalls=this.renderer.info.render.calls,this.metrics.frames++,this.metrics.lastRenderMs=performance.now()-t,this.animating&&this.schedule()}async checkContextRecovery(){const e=this.renderer.getContext().getExtension("WEBGL_lose_context");if(!e)return!1;const t=this.renderer.domElement;return new Promise((i,s)=>{const r=setTimeout(()=>{t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),s(Error("Graphics context recovery timed out"))},5e3),o=()=>{clearTimeout(r),t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),this.invalidate(),i(!0)},a=()=>{setTimeout(()=>e.restoreContext(),100)};t.addEventListener("webglcontextlost",a),t.addEventListener("webglcontextrestored",o),e.loseContext()})}gpuDetails(){const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),i=e.getParameter(t?.UNMASKED_RENDERER_WEBGL??e.RENDERER),s=e.getParameter(t?.UNMASKED_VENDOR_WEBGL??e.VENDOR);return{renderer:typeof i=="string"?i:"unknown",vendor:typeof s=="string"?s:"unknown"}}nodeScreenPosition(e){const t=this.tiles.get(e);if(!t)return;const i=t.group.position.clone();i.y+=t.node.kind==="group"?1:12,i.project(this.camera);const s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+(i.x+1)*this.width/2,y:s.top+(1-i.y)*this.height/2}}handleScreenPosition(e,t){const i=this.tiles.get(e);if(!i)return;this.syncHandles(),this.scene.updateMatrixWorld();const s=this.ports.children.find(l=>l.userData.nodeId!==e?!1:t==="resize"?Array.isArray(l.userData.resize)&&l.userData.resize[0]===1&&l.userData.resize[1]===1:l.userData.port===t),r=s?s.position:{...zs(i.node,t==="resize"?"east":t,this.nodeIndex),y:i.group.position.y+13},o=new I(r.x,r.y,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}captureDiagram(){if(!this.tiles.size)return Promise.reject(Error("Nothing to capture yet."));const e=this.view.snapshot(),t=this.fitted,i=this.renderer.getPixelRatio(),s=this.hoveredEdge;this.hoveredEdge=void 0,s&&this.paintEdge(s),this.ports.visible=!1,this.view.setPanelVisible(!1),this.fit(),this.renderer.setPixelRatio(Math.min(3,Math.max(2,devicePixelRatio))),this.sharpenLabels(),this.render(!0);const r=this.contentBounds(28),o=this.renderer.getPixelRatio(),a=document.createElement("canvas");return a.width=Math.max(1,Math.round(r.width*o)),a.height=Math.max(1,Math.round(r.height*o)),a.getContext("2d")?.drawImage(this.renderer.domElement,r.left*o,r.top*o,a.width,a.height,0,0,a.width,a.height),this.renderer.setPixelRatio(i),this.renderer.setSize(this.width,this.height),e(),this.fitted=t,this.ports.visible=!0,s&&(this.hoveredEdge=s,this.paintEdge(s)),this.onZoom(this.view.percent),this.invalidate(),new Promise((l,c)=>a.toBlob(d=>d?l(d):c(Error("PNG encoding failed")),"image/png"))}contentBounds(e){let t=1/0,i=-1/0,s=1/0,r=-1/0;const o=new I,a=(l,c,d)=>{o.set(l,c,d).project(this.camera);const u=(o.x+1)*this.width/2,h=(1-o.y)*this.height/2;t=Math.min(t,u),i=Math.max(i,u),s=Math.min(s,h),r=Math.max(r,h)};for(const l of this.tiles.values()){const{x:c,y:d,z:u}=l.group.position,h=l.node.width/2,f=l.node.depth/2,g=l.node.kind==="service"&&!l.node.shape?70:0;for(const v of[-h,h])for(const m of[-f,f+g])for(const p of[-12,40])a(c+v,d+p,u+m)}for(let l=0;l<this.edgePositions.count;l++)a(this.edgePositions.getX(l),this.edgePositions.getY(l),this.edgePositions.getZ(l));return t=Math.max(0,Math.floor(t-e)),s=Math.max(0,Math.floor(s-e)),i=Math.min(this.width,Math.ceil(i+e)),r=Math.min(this.height,Math.ceil(r+e)),{left:t,top:s,width:i-t,height:r-s}}gifFrame(e=640,t=480){this.render(!0);const i=document.createElement("canvas"),s=this.renderer.domElement,r=Math.min(1,e/s.width,t/s.height);i.width=Math.max(1,Math.round(s.width*r)),i.height=Math.max(1,Math.round(s.height*r));const o=i.getContext("2d");if(o?.drawImage(s,0,0,i.width,i.height),o&&this.journeyCaption){const a=Math.max(12,Math.round(i.width/48));o.font=`${a}px sans-serif`;const l=[];for(const u of this.journeyCaption.split(`
`)){let h="";for(const f of u)o.measureText(h+f).width>i.width-48&&h&&(l.push(h),h=""),h+=f;l.push(h)}const c=l.slice(0,Math.max(1,Math.floor(i.height/(a*3))));c.length<l.length&&(c[c.length-1]+="…");const d=c.length*a*1.4+16;o.fillStyle="#111827",o.fillRect(8,i.height-d-8,i.width-16,d),o.fillStyle="#ffffff",o.textAlign="center",c.forEach((u,h)=>{o.fillText(u,i.width/2,i.height-d+a+h*a*1.4)})}return i}png(){return this.render(!0),new Promise((e,t)=>this.renderer.domElement.toBlob(i=>i?e(i):t(new Error("PNG encoding failed")),"image/png"))}dispose(){this.cancelInteraction(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.settleTimer),clearTimeout(this.labelTimer),this.observer.disconnect(),this.releaseContent(),this.flushRetired(),this.grid.dispose();for(const e of Object.values(this.shapeGeometries))e.dispose();this.clearPreview(),this.previewMaterial.dispose(),this.portGeometry.dispose(),this.portMaterial.dispose(),this.handleGeometry.dispose(),this.handleMaterial.dispose(),this.geometry.dispose(),this.pickMaterial.dispose(),this.tileOutline.dispose(),this.haloMaterial.dispose(),this.flowMaterial.dispose(),this.journey?.dispose(),this.showGuides([]),this.guideMaterial.dispose(),this.animators.clear(),this.edgeMaterial.dispose(),this.backdrop.dispose(),this.antialias.dispose(),this.renderer.dispose(),this.renderer.domElement.remove(),this.selectionBox.remove()}}function uy(){const n=new hc;n.moveTo(0,-.5),n.lineTo(.5,0),n.lineTo(0,.5),n.lineTo(-.5,0),n.closePath();const e=new hc;e.moveTo(-.3,-.5),e.lineTo(.3,-.5),e.quadraticCurveTo(.5,-.5,.5,-.3),e.lineTo(.5,.3),e.quadraticCurveTo(.5,.5,.3,.5),e.lineTo(-.3,.5),e.quadraticCurveTo(-.5,.5,-.5,.3),e.lineTo(-.5,-.3),e.quadraticCurveTo(-.5,-.5,-.3,-.5);const t=i=>{const s=new ed(i,{depth:1,bevelEnabled:!1,curveSegments:6});return s.rotateX(-Math.PI/2),s.translate(0,-.5,0),s};return{process:new ci(1,1,1),decision:t(n),terminal:t(e)}}const hy={connect:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h7v14h3"/>',group:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><rect x="7" y="7" width="10" height="10"/>',undo:'<path d="M9 4 4 9l5 5M4 9h9a7 7 0 0 1 0 14"/>',redo:'<path d="m15 4 5 5-5 5M20 9h-9a7 7 0 0 0 0 14"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',pointer:'<path d="m5 3 15 9-7 2-3 7z"/>',hand:'<path d="M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 5-3 7-7 7-3 0-4-2-6-4l-4-5a2 2 0 0 1 3-2l2 2"/>',cube:'<path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9M8 5l9 5"/>',layers:'<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',fit:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8h8v8H8z"/>',save:'<path d="M4 3h13l4 4v14H3V3zM7 3v6h10V3M7 21v-8h10v8"/>',arrow:'<path d="M5 19 19 5M7 5h12v12"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3l-1 1M12 17h.01"/>',edit:'<path d="m15 4 5 5M4 20l5-1L21 7a3.5 3.5 0 0 0-5-5L4 14z"/>',palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',text:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',note:'<path d="M4 4h16v11l-5 5H4z"/><path d="M15 20v-5h5M8 9h8M8 13h5"/>',play:'<path d="M7 4v16l13-8z"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="1.5"/>',flow:'<path d="M3 8c3-3 6 3 9 0s6-3 9 0M3 16c3-3 6 3 9 0s6-3 9 0"/>',user:'<circle cx="12" cy="7.5" r="3.5"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>',align:'<path d="M4 3v18M8 7h12M8 14h8"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'};function at(n){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${hy[n]}</svg>`}const gh="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0101<>{}#$%=+*";function fy(n,e){if(n.replaceChildren(),n.dataset.ambient=e??"",!e)return;const t=Math.random,i=(r,o)=>{const a=document.createElement("span");a.className=r;for(const[l,c]of Object.entries(o))a.style.setProperty(l,c);return n.append(a),a},s=(r,o)=>r+t()*(o-r);if(e==="rain")for(let r=0;r<26;r++){const o=i("fx-rain",{left:`${s(0,100)}%`,"--fx-duration":`${s(5,13)}s`,"--fx-delay":`${-s(0,13)}s`,"--fx-opacity":`${s(.12,.32)}`,"font-size":`${Math.round(s(11,17))}px`});o.textContent=Array.from({length:Math.round(s(12,30))},()=>gh[Math.floor(t()*gh.length)]).join(`
`)}else if(e==="embers")for(let r=0;r<34;r++)i("fx-ember",{left:`${s(0,100)}%`,"--fx-size":`${s(2,6)}px`,"--fx-drift":`${s(-80,80)}px`,"--fx-duration":`${s(7,16)}s`,"--fx-delay":`${-s(0,16)}s`});else if(e==="petals")for(let r=0;r<16;r++)i("fx-petal",{left:`${s(-5,100)}%`,"--fx-drift":`${s(60,220)}px`,"--fx-duration":`${s(14,26)}s`,"--fx-delay":`${-s(0,26)}s`,"--fx-size":`${s(9,16)}px`}).append(document.createElement("i"));else if(e==="neon"){i("fx-scanbar",{});for(let r=0;r<7;r++)i("fx-streak",{top:`${s(8,92)}%`,"--fx-duration":`${s(3,9)}s`,"--fx-delay":`${-s(0,9)}s`,"--fx-length":`${s(80,260)}px`})}else if(e==="grain")i("fx-grain",{});else if(e==="stars"){for(let r=0;r<40;r++)i("fx-star",{left:`${s(0,100)}%`,top:`${s(0,100)}%`,"--fx-size":`${s(1,2.6)}px`,"--fx-duration":`${s(2.5,7)}s`,"--fx-delay":`${-s(0,7)}s`});for(let r=0;r<3;r++)i("fx-comet",{top:`${s(4,60)}%`,left:`${s(30,100)}%`,"--fx-duration":`${s(9,18)}s`,"--fx-delay":`${-s(0,18)}s`})}}const Wf=document.querySelector("#app");if(!Wf)throw new Error("Application root is missing");Wf.innerHTML=`
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
  <div id="status" class="status" role="status">Ready</div><span id="count" class="board-count"></span>`;function k(n){const e=document.getElementById(n);if(!e)throw new Error(`Missing element: ${n}`);return e}function _t(n){const e=k(n);if(!(e instanceof HTMLInputElement))throw new Error(`Expected input: ${n}`);return e}let j=$p(),Xt=j,Et=new Nh(j),Xi=[],vt,Gn,wt=new Set;const Xf=["region","environment","resourceName","tags","notes"];let kt,wr=!1,Mr=!1,Bs,Cc=!1;const Es=new U0(()=>Et.isDirty?ia(Xt):null,ml,n=>Ce(`Recovery failed: ${String(n)}. Save your diagram.`));let sd=!0,cr=!0;const Ce=n=>{k("status").textContent=n};let sn=Hf((()=>{try{return localStorage.getItem("solar-forge-theme")}catch{return null}})()),Ls=(()=>{try{const n=localStorage.getItem("solar-forge-theme-fx");if(n)return n==="on"}catch{}return!matchMedia("(prefers-reduced-motion: reduce)").matches})(),Li=Xh((()=>{try{return localStorage.getItem("solar-forge-font")}catch{return null}})());function $f(){return Li.family?{...sn.scene,labelFont:Li.family}:sn.scene}function rd(){H_(sn),document.documentElement.dataset.fx=Ls?"on":"off",sn.markSvg?k("forge-mark").innerHTML=sn.markSvg:k("forge-mark").textContent=sn.mark,fy(k("theme-fx"),Ls?sn.ambient:void 0)}rd();let ne;try{ne=new dy(k("canvas"),j,sn.scene)}catch(n){throw Ce(`Graphics unavailable: ${n instanceof Error?n.message:String(n)}`),n}function Ci(n){k("component-palette").hidden=!n,k("components").setAttribute("aria-expanded",String(n)),n&&(k("file-menu").hidden=!0,_t("search").value="",da(),_t("search").focus())}function qf(n){sn=Hf(n),rd(),ne.setPalette($f());for(const e of k("theme-list").querySelectorAll("button"))e.setAttribute("aria-pressed",String(e.dataset.theme===sn.id));try{localStorage.setItem("solar-forge-theme",sn.id)}catch{}Ce(`${sn.name} · ${sn.tagline}`)}for(const[n,e]of Ko.entries()){if(e.group!==Ko[n-1]?.group){const a=document.createElement("p");a.className="popover-caption",a.textContent=e.group.toUpperCase(),k("theme-list").append(a)}const t=document.createElement("button");t.dataset.theme=e.id,t.setAttribute("aria-pressed",String(e.id===sn.id));const i=document.createElement("span");i.className="theme-swatch",i.style.background=`linear-gradient(135deg, ${e.css.bg} 0 45%, ${e.css.accent} 45% 72%, ${e.css.hot} 72%)`,i.style.color=e.css.text??"",e.markSvg?i.innerHTML=e.markSvg:i.textContent=e.mark;const s=document.createElement("span");s.className="theme-text";const r=document.createElement("strong");r.textContent=e.name;const o=document.createElement("small");o.textContent=e.tagline,s.append(r,o),t.append(i,s),t.onclick=()=>{qf(e.id),k("theme-menu").hidden=!0,k("theme").setAttribute("aria-expanded","false")},k("theme-list").append(t)}async function Zf(n,e=!0){const t=Xh(n);Li=t,me("board-font").value=t.id;try{await s2(t)}catch{Ce(`${t.name} font unavailable; using a fallback.`)}if(Li===t){ne.setPalette($f());try{localStorage.setItem("solar-forge-font",t.id)}catch{}e&&Ce(`Board font · ${t.name}`)}}vr("board-font",xl.map(n=>[n.id,n.name]),Li.id);me("board-font").onchange=()=>{Zf(me("board-font").value)};Li.family&&Zf(Li.id,!1);k("features").onclick=()=>{Ai(async()=>{const{startTour:n}=await import("./tour-BjFWENYq.js");return{startTour:n}},__vite__mapDeps([0,1])).then(({startTour:n})=>n()).catch(n=>Ce(`Tour unavailable: ${String(n)}`))};_t("theme-fx-toggle").checked=Ls;_t("theme-fx-toggle").onchange=()=>{Ls=_t("theme-fx-toggle").checked,rd();try{localStorage.setItem("solar-forge-theme-fx",Ls?"on":"off")}catch{}Ce(`Ambient effects ${Ls?"on":"off"}`)};k("theme").onclick=()=>{const n=k("theme-menu");n.hidden=!n.hidden,k("theme").setAttribute("aria-expanded",String(!n.hidden))};function od(n){sd=n,k("layers-panel").hidden=!n,k("toggle-layers").setAttribute("aria-pressed",String(n)),ne.setPanelVisible(n)}let vh="";const Po=new Map;function Yf(){const n=k("layer-tree"),e=JSON.stringify([j.nodes.map(t=>[t.id,t.label,t.color,t.parentId,t.serviceId,t.kind,t.detailId]),j.edges.map(t=>[t.id,t.label,t.source,t.target])]);if(e!==vh){vh=e,n.replaceChildren(),Po.clear();const t=new Map(j.nodes.map(o=>[o.id,o.label])),i=new Map;for(const o of j.nodes){const a=i.get(o.parentId)??[];a.push(o),i.set(o.parentId,a)}const s=[],r=(o,a)=>{for(const l of i.get(o)??[])s.push({node:l,depth:a}),r(l.id,a+1)};r(void 0,0);for(const{node:o,depth:a}of s){const l=document.createElement("button");l.className=`layer-row ${o.kind}${wt.has(o.id)?" selected":""}`,l.setAttribute("aria-pressed",String(wt.has(o.id)));const c=document.createElement("span");c.className="layer-symbol",c.style.color=o.color;const d=Ps(o.serviceId??o.label);if(d?.icon&&(o.kind==="service"||o.kind==="group")){const h=document.createElement("img");h.src=d.icon,h.alt="",c.append(h)}else c.textContent=o.kind==="group"?"▱":d?.glyph??"◇";(o.kind==="text"||o.kind==="note")&&(c.textContent=o.kind==="text"?"T":"▤",c.style.color=o.kind==="note"?o.color:"");const u=document.createElement("span");if(u.textContent=o.label.split(`
`)[0]||(o.kind==="note"?"Sticky note":o.kind==="text"?"Text":""),l.append(c,u),l.style.paddingLeft=`${8+a*12}px`,Po.set(`node:${o.id}`,l),l.onclick=h=>ne.select(o.id,h.shiftKey),n.append(l),o.detailId){const h=Xt.details?.find(f=>f.id===o.detailId);if(h){const f=document.createElement("button");f.className="detail-layer-link",f.textContent="↳ Open detail ↗",f.setAttribute("aria-label",`Open detail for ${o.label}`),f.onclick=()=>Ws(h.document),n.append(f)}}}if(j.edges.length){const o=document.createElement("p");o.className="section-label connections-heading",o.textContent="CONNECTIONS",n.append(o)}for(const o of j.edges){const a=document.createElement("button");a.className=`layer-row connection-row${kt===o.id?" selected":""}`,a.textContent=`↳ ${o.label||"Connection"} · ${t.get(o.source)??""} → ${t.get(o.target)??""}`,a.onclick=()=>ne.selectEdge(o.id),n.append(a),Po.set(`edge:${o.id}`,a)}}for(const[t,i]of Po){const s=t.startsWith("node:")?wt.has(t.slice(5)):kt===t.slice(5);i.classList.toggle("selected",s),i.setAttribute("aria-pressed",String(s))}}async function Fr(){if(Rc())try{const n=await ie("recent_documents"),e=k("recent-files");if(e.replaceChildren(),!n.length){const t=document.createElement("p");t.className="muted",t.textContent="No recent diagrams yet",e.append(t)}for(const t of n){const i=document.createElement("button");i.textContent=t.name,i.title=t.path,i.onclick=()=>{Rn(async()=>{if(!await Vs())return;const s=await ie("open_recent",{path:t.path});Gs(Is(s.content)),Bs=s.handle,k("file-menu").hidden=!0,Ce(`Opened ${s.name}`),await Fr()})},e.append(i)}}catch(n){Ce(`Recent files unavailable: ${String(n)}`)}}k("title").onclick=()=>{Rn(async()=>{const n=await $0("Diagram name",j.title);n&&et({type:"graph",label:"Rename diagram",title:n})})};for(const n of["examples","browse-examples"])k(n).onclick=()=>{Rn(async()=>{k("file-menu").hidden=!0,k("menu").setAttribute("aria-expanded","false");const{chooseExample:e}=await Ai(async()=>{const{chooseExample:i}=await import("./examples-CL6TXWsX.js");return{chooseExample:i}},[]),t=await e();!t||!await Vs()||(Gs(t.create()),Ce(`Loaded ${t.name}`))})};let ea=!1,jf="gif",gr;function Jf(n){jf=n,k("file-menu").hidden=!0,k("gif-panel").hidden=!1,k("recording-title").textContent=n==="gif"?"Journey GIF":"Journey video",k("gif-record").textContent=n==="gif"?"Record GIF":"Record video",k("video-format-row").hidden=n==="gif",k("video-help").hidden=n==="gif",k("gif-dither-row").hidden=n!=="gif",k("gif-help").hidden=n!=="gif",_t("gif-duration").focus(),n==="video"&&Ai(async()=>{const{videoMime:e}=await import("./video-DmUvEiuR.js");return{videoMime:e}},[]).then(({videoMime:e})=>{for(const i of k("video-format").options){const s=!!e(i.value);i.disabled=!s,i.textContent=i.value.toUpperCase()+(s?"":" (unavailable)")}const t=k("video-format");t.selectedOptions[0]?.disabled&&(t.value=[...t.options].find(i=>!i.disabled)?.value??"")})}k("export-gif").onclick=()=>Jf("gif");k("export-video").onclick=()=>Jf("video");try{const n=localStorage.getItem("solar-forge-gif"),e=n?Ph(JSON.parse(n)):D0;_t("gif-duration").value=String(e.duration),_t("gif-dither").checked=e.dither}catch{}k("gif-record").onclick=()=>{Rn(async()=>{const n=Ph({duration:Number(_t("gif-duration").value),dither:_t("gif-dither").checked});try{localStorage.setItem("solar-forge-gif",JSON.stringify(n))}catch{}const e=Gn,t=e?e.path.slice(0,1):Fh(j,vt);if(!t.length){Ce("Connect components before exporting a journey.");return}const{recordJourney:i}=await Ai(async()=>{const{recordJourney:l}=await import("./gif-DwaA0-la.js");return{recordJourney:l}},[]),s=jf,r=me("video-format").value,o=s==="video"?await Ai(()=>import("./video-DmUvEiuR.js"),[]):void 0;if(o&&!o.videoMime(r))throw Error("Choose an available video format");k("gif-panel").hidden=!0,ea=!0,gr=new AbortController,k("file-menu").hidden=!0,ne.stopJourney();const a=[k("app")];for(const l of a)l.inert=!0;try{ne.playJourney(t,e);const l=u=>Ce(`Recording journey ${s==="gif"?"GIF":r.toUpperCase()} · ${u}% · ${n.duration} seconds · Esc cancels; decision forks use the first branch`),c=o?await o.recordVideo(()=>ne.gifFrame(1280,720),l,gr.signal,{duration:n.duration,format:r}):await i(()=>ne.gifFrame(),l,gr.signal,n);ne.stopJourney(),(o?await H0(c,r):await G0(c))&&Ce(`Journey ${o?r.toUpperCase():"GIF"} exported · ${n.duration} seconds`)}finally{ea=!1,gr=void 0,ne.stopJourney();for(const l of a)l.inert=!1}})};k("export-svg").onclick=()=>{Rn(async()=>{const{exportSvg:n}=await Ai(async()=>{const{exportSvg:e}=await import("./svg-Bm7L84uI.js");return{exportSvg:e}},[]);await O0(await n(j,Li.family))&&Ce("SVG exported")})};for(const[n,e]of[["export-mermaid","mmd"],["export-plantuml","puml"],["export-drawio","drawio"]])k(n).onclick=()=>{Rn(async()=>{const{exportInterchange:t}=await Ai(async()=>{const{exportInterchange:s}=await import("./interchange-COiv_mlX.js");return{exportInterchange:s}},[]),i=t(e==="drawio"?Xt:j,e);await W0(i,e)&&Ce(`Exported ${e==="drawio"?"draw.io project":"diagram source"}`),k("file-menu").hidden=!0})};function $n(){wr=Et.isDirty,Cc&&Es.schedule(),k("save-state").textContent=wr?"Unsaved changes":"Unchanged";for(const[t,i]of[["undo",Et.canUndo],["redo",Et.canRedo]]){const s=k(t);s instanceof HTMLButtonElement&&(s.disabled=!i)}k("title").textContent=`${j.title}${wr?" •":""}`,k("count").textContent=`${j.nodes.length} objects · ${j.edges.length} connections`;const n=t=>j.nodes.filter(i=>i.kind===t).length,e=n("text")+n("note");k("ground-summary").textContent=`${n("service")} services · ${n("group")} boundaries${e?` · ${e} notes`:""}`,Yf(),yy()}function qn(){const n=j.nodes.find(o=>o.id===vt);k("properties").hidden=!n,k("selection").textContent=n?.kind==="text"||n?.kind==="note"?n.label.split(`
`)[0]||(n.kind==="note"?"Sticky note":"Text"):n?.label??"",_t("node-label").value=n?.label??"",k("node-caption").value=n?.journeyCaption??"",k("detail-controls").hidden=!n||!["group","service"].includes(n.kind);const e=k("node-detail");e.replaceChildren(new Option("No detail diagram",""),...(Xt.details??[]).map(o=>new Option(o.document.title,o.id))),e.value=n?.detailId??"",k("detail-open").disabled=!n?.detailId;const t=n?.kind==="text"||n?.kind==="note";_t("node-label").hidden=t,me("node-text").hidden=!t,k("node-label-caption").textContent=t?"Text":"Label",k("node-label-caption").setAttribute("for",t?"node-text":"node-label");const i=n?.kind==="service";k("node-font-row").hidden=!t&&!i,k("node-wrap-row").hidden=!i;const s=n?j.edges.filter(o=>o.source===n.id):[];if(k("node-branch-row").hidden=s.length<2,n&&s.length>=2){const o=n.journey;vr("node-branch",[["all","Takes every branch"],["ask","Asks me which way"],...s.map(a=>[`fixed:${a.id}`,`Active route ${ld(a.id)}`])],o?.mode==="fixed"?`fixed:${o.edge}`:o?.mode??Ic(j,n.id).mode)}n&&(me("node-text").value=n.label,_t("node-font").value=n.kind==="service"?String(n.fontSize??""):String(sa(n)),_t("node-font").placeholder=n.kind==="service"?"Auto":"",_t("node-wrap").checked=!!n.wrap,_t("node-color").value=n.color);const r=j.edges.find(o=>o.id===kt);if(k("edge-properties").hidden=!r,n){for(const c of["x","z","width","depth"])_t(`node-${c}`).value=String(n[c]);const o=new Set([n.id]);for(let c=!0;c;){c=!1;for(const d of j.nodes)d.parentId&&o.has(d.parentId)&&!o.has(d.id)&&(o.add(d.id),c=!0)}vr("node-parent",[["","Board"],...j.nodes.filter(c=>c.kind==="group"&&!o.has(c.id)).map(c=>[c.id,c.label])],n.parentId??"");const a=o0();for(const c of Xf){const d=me(`meta-${c}`);d.dataset.placeholder??=d.placeholder;const u=a.map(f=>f.metadata?.[c]??""),h=u.every(f=>f===u[0]);d.value=h?u[0]??"":"",d.placeholder=h?d.dataset.placeholder??"":"Mixed · type to set for all"}const l=k("meta-scope");l.hidden=a.length<2,l.textContent=`Editing ${a.length} selected objects. Changes apply to all of them.`,k("meta-apply-inside").hidden=a.length>1||a0(n.id).length===0,a.length>1&&(k("selection").textContent=`${a.length} selected`,k("meta-details").open=!0)}if(r){const o=c0();k("edge-active").hidden=!o.active,k("edge-all-routes").hidden=!o.all;const a=Ch(r.networkRule,j.traffic??Er);k("rule-result").textContent=`${a.allowed?"Allowed":"Blocked"} for current traffic · ${a.reason}`,me("rule-action").value=r.networkRule?.action??"none",me("rule-protocol").value=r.networkRule?.protocol??"any",me("rule-port").value=String(r.networkRule?.port??""),me("rule-source").value=r.networkRule?.sourceCidr??"",me("rule-direction").value=r.networkRule?.direction??"any",r0(),_t("edge-label").value=r.label;const l=j.nodes.map(c=>[c.id,c.label]);vr("edge-source",l,r.source),vr("edge-target",l,r.target),me("edge-sourcePort").value=r.sourcePort??"",me("edge-targetPort").value=r.targetPort??"",me("edge-routing").value=r.routing??"horizontal",_t("edge-bend").value=String(r.bend??0)}k("selection-note").textContent=n?.kind==="group"?"Architecture boundary":n?.kind==="text"?"Text · double-click to edit":n?.kind==="note"?"Sticky note · double-click to edit":n?.shape?"Flowchart shape":"Component · double-click to rename";for(const o of["delete","tool-edit"]){const a=k(o);a instanceof HTMLButtonElement&&(a.disabled=!n&&!r)}Zp(k("resource-network"),n,j,o=>et({type:"graph",label:"Resource networking",nodes:[{id:o.id,value:o}]}),Ce),Yf()}let ta=!1;function Ys(n){ta=!0;try{n()}finally{ta=!1}}ne.onSelect=n=>{Gn=void 0,vt=n?.id,wt=new Set(ne.selection),kt=void 0,ta||qn()};ne.onSelectEdge=n=>{Gn=void 0,vt=void 0,wt=new Set,kt=n,ta||qn()};ne.onMove=(n,e,t)=>{Et.execute({type:"move",id:n,from:e,to:t}),$n(),qn(),Ce("Position updated")};ne.onError=Ce;ne.onZoom=n=>{const e=`${n}%`;k("zoom-level").textContent!==e&&(k("zoom-level").textContent=e)};function Gs(n){Bs=void 0,j=n,Xt=n,Xi=[],Et=new Nh(j),vt=void 0,wr=!1,Ys(()=>ne.load(j)),ne.fit(),qn(),$n()}async function Rn(n){if(!Mr){ne.finishInteraction(),Mr=!0;try{await n()}catch(e){Ce(e instanceof Error?e.message:String(e))}finally{Mr=!1}}}async function Kf(n=!1){ne.finishInteraction();const e=Et,t=Et.token,i=await F0(ia(Xt),n?void 0:Bs,Xt.title);return i?(Et===e&&(Bs=i.handle),e.markSaved(t),$n(),await Es.flush(),Ce(`Saved ${i.name}`),Fr(),!Et.isDirty):!1}async function Vs(){if(ne.finishInteraction(),!Et.isDirty)return!0;const n=await Dh("Save your changes?","This diagram has unsaved changes.",["Cancel","Discard changes","Save"]);return n==="Save"?Kf():n==="Discard changes"}const py=Yp({document:()=>j,play:n=>{Gn={path:n.path,allowed:n.status==="allowed"},ne.playJourney([n.path[0]??""],{path:n.path,allowed:n.status==="allowed"}),k("journey").setAttribute("aria-pressed","true"),Ce(`${n.status.toUpperCase()} · ${n.reason} · P or Esc to stop`)}});k("reachability").onclick=()=>{k("file-menu").hidden=!0,py.open()};const my=Y0({notify:Ce,apply:async n=>{const e=new Map(j.nodes.map(i=>[i.id,{id:i.id,value:null}]));for(const i of n.nodes)e.set(i.id,{id:i.id,value:i});const t=new Map(j.edges.map(i=>[i.id,{id:i.id,value:null}]));for(const i of n.edges)t.set(i.id,{id:i.id,value:i});return et({type:"graph",label:"Import infrastructure",title:n.title,nodes:[...e.values()],edges:[...t.values()]},[]),ne.fit(),!0}});k("import-infrastructure").onclick=()=>{k("file-menu").hidden=!0,my.open()};k("auto-layout").onclick=()=>{et(I0(j)),ne.fit(),k("file-menu").hidden=!0};k("new").onclick=()=>{Rn(async()=>{await Vs()&&(Gs({version:1,title:"Untitled diagram",nodes:[],edges:[]}),k("file-menu").hidden=!0)})};k("open").onclick=()=>{k("file-menu").hidden=!0,Rn(async()=>{if(!await Vs())return;const n=await N0();n!==null&&(Gs(Is(n.content)),Bs=n.handle,Ce(`Opened ${n.name}`),Fr())})};for(const n of["save","save-as"])k(n).onclick=()=>{k("file-menu").hidden=!0,Rn(async()=>{await Kf(n==="save-as")})};k("export").onclick=()=>{k("file-menu").hidden=!0,Rn(async()=>{await k0(await ne.png())&&Ce("PNG exported")})};k("quick-save").onclick=()=>k("save").click();async function Ac(){try{Ce("Capturing diagram…"),await B0(await ne.captureDiagram()),Ce("Diagram image copied · paste it anywhere")}catch(n){Ce(`Could not copy image: ${n instanceof Error?n.message:String(n)}`)}}k("copy-image").onclick=()=>{Ac()};k("quick-export").onclick=()=>k("export").click();k("menu").onclick=()=>{const n=k("file-menu");n.hidden=!n.hidden,k("menu").setAttribute("aria-expanded",String(!n.hidden)),Ci(!1)};for(const n of["components","tool-add","layer-add"])k(n).onclick=()=>Ci(k("component-palette").hidden);k("close-components").onclick=()=>Ci(!1);k("toggle-layers").onclick=()=>od(!sd);k("close-layers").onclick=()=>od(!1);k("ground-toggle").onclick=()=>{cr=!cr,ne.setDiagramVisible(cr),k("ground-toggle").setAttribute("aria-pressed",String(cr)),k("ground-toggle").setAttribute("aria-label",cr?"Hide diagram":"Show diagram")};function Ln(n){ne.setTool(n);for(const e of["select","pan","connect","text","note"]){const t=k(`tool-${e}`);t.classList.toggle("active",e===n),t.setAttribute("aria-pressed",String(e===n))}}k("tool-select").onclick=()=>Ln("select");k("tool-pan").onclick=()=>Ln("pan");k("tool-text").onclick=()=>{Ln("text"),Ce("Click the board to place text.")};k("tool-note").onclick=()=>{Ln("note"),Ce("Click the board to pin a sticky note.")};k("tool-connect").onclick=()=>{Ln("connect"),Ce("Choose a source, then a target. Or drag a port dot to another component.")};k("iso").onclick=()=>{ne.setView("isometric"),k("iso").setAttribute("aria-pressed","true"),k("top").setAttribute("aria-pressed","false")};k("top").onclick=()=>{ne.setView("top"),k("iso").setAttribute("aria-pressed","false"),k("top").setAttribute("aria-pressed","true")};for(const n of["fit","tool-fit"])k(n).onclick=()=>ne.fit();k("zoom-in").onclick=()=>ne.zoomBy(1.2);k("zoom-out").onclick=()=>ne.zoomBy(1/1.2);k("help").onclick=()=>{const n=k("help-panel");n.hidden=!n.hidden,k("help").setAttribute("aria-expanded",String(!n.hidden))};k("tool-edit").onclick=()=>{vt?Hs({kind:"node",id:vt}):kt&&Hs({kind:"edge",id:kt})};me("node-text").onchange=()=>{const n=j.nodes.find(t=>t.id===vt),e=me("node-text").value.slice(0,Pc);!n||e===n.label||et({type:"graph",label:"Edit text",nodes:[{id:n.id,value:{...n,label:e}}]})};me("node-font").onchange=()=>{const n=j.nodes.find(t=>t.id===vt);if(n?.kind==="service"&&!me("node-font").value.trim()){const t={...n};delete t.fontSize,et({type:"graph",label:"Text size",nodes:[{id:n.id,value:t}]});return}const e=Number(me("node-font").value);if(!n||!Number.isFinite(e)||e<4||e>400){qn();return}et({type:"graph",label:"Text size",nodes:[{id:n.id,value:{...n,fontSize:e}}]})};_t("node-wrap").onchange=()=>{const n=j.nodes.find(t=>t.id===vt);if(!n)return;const e={...n};_t("node-wrap").checked?e.wrap=!0:delete e.wrap,et({type:"graph",label:"Caption wrapping",nodes:[{id:n.id,value:e}]})};me("node-branch").onchange=()=>{const n=j.nodes.find(i=>i.id===vt),e=me("node-branch").value;if(!n)return;const t=e.startsWith("fixed:")?{mode:"fixed",edge:e.slice(6)}:{mode:e==="ask"?"ask":"all"};et({type:"graph",label:"Journey branch",nodes:[{id:n.id,value:{...n,journey:t}}]})};me("node-color").onchange=()=>{const n=j.nodes.find(t=>t.id===vt),e=me("node-color").value;!n||!/^#[0-9a-f]{6}$/i.test(e)||e===n.color||et({type:"graph",label:"Change colour",nodes:[{id:n.id,value:{...n,color:e}}]})};k("node-label").onchange=()=>{const n=j.nodes.find(i=>i.id===vt);if(!n)return;const e=_t("node-label").value.slice(0,1e3);if(e===n.label)return;const t=Ps(n.serviceId??n.label);et({type:"graph",label:"Rename component",nodes:[{id:n.id,value:{...n,label:e,...t?{serviceId:t.id}:{}}}]})};function ca(){if(kt){et({type:"graph",label:"Delete connection",edges:[{id:kt,value:null}]},[]);return}wt.size&&(et(Kp(j,wt),[]),Ce("Selection deleted"))}k("delete").onclick=ca;function kr(n){ne.finishInteraction();const e=n?Et.redo():Et.undo();if(!e)return;const t=j!==Et.document;Ys(()=>{t&&(j=Et.document,Xi=j===Xt?[]:[Xt],ne.load(j),ne.fit());const i=[...wt],s=kt;e.type==="move"?t||ne.refreshPosition(e.id):(t||ne.load(j),ne.selectMany(i.filter(r=>j.nodes.some(o=>o.id===r))),s&&j.edges.some(r=>r.id===s)&&ne.selectEdge(s))}),$n(),qn(),Ce(`${n?"Redid":"Undid"} ${e.type}`)}k("undo").onclick=()=>kr(!1);k("redo").onclick=()=>kr(!0);const gy=$s.map(n=>({service:n,search:`${n.label} ${n.category} ${n.aliases}`.toLowerCase(),button:void 0}));function vy(n){const e=document.createElement("button");e.className="service";const t=document.createElement("span");if(t.className="service-symbol",t.style.color=n.color,n.icon){const o=document.createElement("img");o.loading="lazy",o.decoding="async",o.src=n.icon,o.alt="",t.append(o)}else t.textContent=n.glyph;const i=document.createElement("span"),s=document.createElement("strong");s.textContent=n.label;const r=document.createElement("small");return r.textContent=n.description,i.append(s,r),e.append(t,i),e.onclick=()=>xy(n),e}function da(n=""){const e=k("services"),t=n.toLowerCase();e.replaceChildren();for(const i of gy)i.search.includes(t)&&(i.button??=vy(i.service),e.append(i.button));if(!e.childElementCount){const i=document.createElement("p");i.className="empty-search",i.textContent="No matching services. Try another name.",e.append(i)}n0(0)}function xy(n){const e=crypto.randomUUID(),[t,i]=Qf(n.kind);let s;try{s=t2(j,ne.insertionPoint(),t,i)}catch(r){Ce(String(r));return}Et.execute({type:"insert",node:{id:e,kind:n.kind,serviceId:n.id,...n.shape?{shape:n.shape}:{},...n.boundary?{boundary:n.boundary}:{},...n.policyKind?{policy:n.policyKind==="route-table"?{kind:"route-table",routes:[]}:{kind:n.policyKind,rules:[]}}:{},label:n.label,x:Math.round(s.x/10)*10,z:Math.round(s.z/10)*10,width:t,depth:i,color:n.color}}),Ys(()=>ne.load(j)),ne.select(e),ne.reveal(e),$n(),Ci(!1),Ln("select"),Ce(`${n.label} added`),(n.kind==="text"||n.kind==="note")&&Hs({kind:"node",id:e},!0)}function Qf(n){return n==="group"?[500,320]:n==="text"?[280,60]:n==="note"?[220,170]:[160,100]}function e0(n,e,t){const i=$s.find(l=>l.kind===n);if(!i)return;const s=crypto.randomUUID(),[r,o]=Qf(n),a=l=>ne.snapping?Math.round(l/10)*10:l;Et.execute({type:"insert",node:{id:s,kind:n,serviceId:i.id,label:"",x:a(e+r/2-20),z:a(t),width:r,depth:o,color:i.color}}),Ys(()=>ne.load(j)),ne.select(s),$n(),Ln("select"),Hs({kind:"node",id:s},!0)}ne.onPlace=e0;ne.onEditRequest=n=>{const e=n.kind==="node"?j.nodes.find(i=>i.id===n.id):void 0,t=Xt.details?.find(i=>i.id===e?.detailId);t?Ws(t.document):Hs(n)};let qi;function Hs(n,e=!1){if(qi?.(!0),n.kind==="empty"){e0("text",n.x,n.z);return}const t=n.kind==="node"?j.nodes.find(l=>l.id===n.id):void 0,i=n.kind==="edge"?j.edges.find(l=>l.id===n.id):void 0;if(!t&&!i)return;const s=t?.kind==="text"||t?.kind==="note",r=document.createElement(s?"textarea":"input");if(r.className=`inline-editor${t?` ${t.kind}`:" edge"}`,r.value=t?.label??i?.label??"",r.maxLength=s?Pc:1e3,r.setAttribute("aria-label",s?"Text":"Label"),r.spellcheck=s,t&&s){const l=ne.nodeScreenRect(t.id),c=ne.nodePixelScale(t.id);if(!l)return;Object.assign(r.style,{left:`${l.left}px`,top:`${l.top}px`,width:`${Math.max(l.width,160)}px`,height:`${Math.max(l.height,48)}px`,fontSize:`${Math.max(11,sa(t)*c)}px`,padding:`${(t.kind==="note"?14:4)*c}px`,background:t.kind==="note"?t.color:""})}else{const l=t?(()=>{const c=ne.nodeScreenRect(t.id);return c?{x:c.left+c.width/2,y:t.kind==="group"?c.top+18:c.top+c.height+22}:void 0})():i?ne.edgeScreenPosition(i.id):void 0;if(!l)return;Object.assign(r.style,{left:`${l.x-110}px`,top:`${l.y-18}px`,width:"220px"})}document.body.append(r),r.focus(),r.select();let o=!1;const a=l=>{if(o)return;o=!0,qi=void 0;const c=r.value;if(r.remove(),!l){e&&s&&kr(!1);return}if(t){const d=j.nodes.find(u=>u.id===t.id);if(!d)return;if(e&&d.kind==="text"&&!c.trim()){kr(!1);return}if(c===d.label)return;et({type:"graph",label:s?"Edit text":"Rename component",nodes:[{id:d.id,value:{...d,label:c}}]},[d.id])}else if(i){const d=j.edges.find(u=>u.id===i.id);if(!d||c===d.label)return;et({type:"graph",label:"Label connection",edges:[{id:d.id,value:{...d,label:c.slice(0,1e3)}}]},[]),ne.selectEdge(d.id)}};qi=a,r.addEventListener("blur",()=>a(!0)),r.addEventListener("keydown",l=>{const c=l;c.stopPropagation(),c.key==="Escape"?(c.preventDefault(),a(!e)):c.key==="Enter"&&(!s||c.ctrlKey||c.metaKey)&&(c.preventDefault(),a(!0))}),Ce(s?"Typing · Ctrl+Enter or click away to finish · Esc cancels":"Enter to rename · Esc cancels")}let Sr=0;function t0(){return[...k("services").querySelectorAll("button")]}function n0(n){const e=t0();Sr=e.length?(n+e.length)%e.length:0;for(const[t,i]of e.entries())i.classList.toggle("highlighted",t===Sr);e[Sr]?.scrollIntoView({block:"nearest"})}k("search").oninput=()=>da(_t("search").value);k("search").onkeydown=n=>{n.key==="ArrowDown"||n.key==="ArrowUp"?(n.preventDefault(),n0(Sr+(n.key==="ArrowDown"?1:-1))):n.key==="Enter"?(n.preventDefault(),t0()[Sr]?.click()):n.key==="Escape"&&(n.preventDefault(),Ci(!1))};function me(n){const e=k(n);if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)return e;throw Error(`Expected field ${n}`)}function vr(n,e,t){const i=me(n);i instanceof HTMLSelectElement&&(i.replaceChildren(...e.map(([s,r])=>{const o=document.createElement("option");return o.value=s,o.textContent=r,o})),i.value=t)}function _y(n){let e=n.parentId;for(;e;){if(wt.has(e))return!0;e=j.nodes.find(t=>t.id===e)?.parentId}return!1}function et(n,e=[...wt]){ne.finishInteraction();const t=kt;Et.execute(n)&&(Ys(()=>{ne.load(j),ne.selectMany(e),!e.length&&t&&j.edges.some(i=>i.id===t)&&ne.selectEdge(t)}),$n(),qn(),Ce(n.type==="graph"?n.label:`Updated ${n.type}`))}ne.onResize=n=>{const e=n.flatMap(({id:t,from:i,to:s})=>{const r=j.nodes.find(a=>a.id===t);if(!r)return[];const o={...r,...s,...r.kind==="text"||r.kind==="note"?{fontSize:zh(r,{...r,...i},{...r,...s})}:{}};return Object.assign(r,i),[{id:t,value:o}]});et({type:"graph",label:"Resize component",nodes:e})};ne.onMoves=n=>{const e=n.flatMap(t=>{const i=j.nodes.find(r=>r.id===t.id);if(!i)return[];const s={...i,...t.to};return Object.assign(i,t.from),[{id:i.id,value:s}]});et({type:"graph",label:"Move selection",nodes:e})};ne.onConnect=(n,e,t,i)=>{if(n===t){Ce("Choose a different target component.");return}const s=crypto.randomUUID(),r={id:s,source:n,target:t,label:""};e&&(r.sourcePort=e),i&&(r.targetPort=i),et({type:"graph",label:"Connect components",edges:[{id:s,value:r}]}),Ln("select")};me("quality").onchange=()=>{const n=Number(me("quality").value);ne.setQuality(n);try{localStorage.setItem("solar-forge-quality",String(n))}catch{Ce("Quality changed for this session.")}};try{const n=localStorage.getItem("solar-forge-quality");n&&["1","1.5","2"].includes(n)&&(me("quality").value=n,ne.setQuality(Number(n)))}catch{}function i0(n){ne.setFlow(n),k("flow").setAttribute("aria-pressed",String(n));try{localStorage.setItem("solar-forge-flow",n?"1":"0")}catch{}}try{localStorage.getItem("solar-forge-flow")==="0"&&i0(!1)}catch{}k("flow").onclick=()=>i0(!ne.flow);function yy(){const n=k("diagram-path");if(n.replaceChildren(),j===Xt)return;const e=document.createElement("button");e.textContent=`⌂ ${Xt.title}`,e.onclick=()=>Ws(Xt,!0);const t=document.createElement("button");t.textContent="← Back",t.onclick=()=>{const s=Xi.pop();s&&Ws(s,!0)};const i=document.createElement("span");i.textContent=j.title,n.append(e,t,i)}function Ws(n,e=!1){n!==j&&(ne.finishInteraction(),qi?.(!0),ne.stopJourney(),!e&&n!==j&&Xi.push(j),Xi.length>100&&Xi.shift(),n===Xt&&(Xi=[]),j=n,Et.document=n,vt=void 0,kt=void 0,wt.clear(),Gn=void 0,Ys(()=>ne.load(j)),ne.fit(),$n(),qn(),Ce(`Opened ${n.title}`))}k("detail-open").onclick=()=>{const n=j.nodes.find(t=>t.id===vt)?.detailId,e=Xt.details?.find(t=>t.id===n)?.document;e&&Ws(e)};k("detail-create").onclick=()=>{const n=j.nodes.find(i=>i.id===vt);if(!n)return;if((Xt.details?.length??0)>=100){Ce("A project supports up to 100 detail diagrams");return}const e=crypto.randomUUID(),t={version:1,title:`${n.label} detail`,nodes:[],edges:[]};Et.execute({type:"detail",root:Xt,id:e,board:t}),et({type:"graph",label:"Link detail diagram",nodes:[{id:n.id,value:{...n,detailId:e}}]}),Ws(t)};me("node-detail").onchange=()=>{const n=j.nodes.find(t=>t.id===vt);if(!n)return;const e={...n};me("node-detail").value?e.detailId=me("node-detail").value:delete e.detailId,et({type:"graph",label:"Link detail diagram",nodes:[{id:n.id,value:e}]})};me("node-caption").onchange=()=>{const n=j.nodes.find(e=>e.id===vt);n&&et({type:"graph",label:"Edit walkthrough caption",nodes:[{id:n.id,value:{...n,journeyCaption:me("node-caption").value.slice(0,1e3)}}]})};function ua(){return j.scenarios??fl}function ad(){const n=k("traffic-scenario"),e=n.value;n.replaceChildren(new Option("Choose a scenario…",""),...ua().map(t=>new Option(t.name,t.id))),n.value=e;for(const t of["scenario-source","scenario-target"]){const i=k(t),s=i.value;i.replaceChildren(new Option("Not set",""),...j.nodes.filter(r=>r.kind==="service").map(r=>new Option(r.label,r.id))),i.value=s}}function s0(){return Cr({protocol:me("traffic-protocol").value,port:Number(me("traffic-port").value),sourceIp:me("traffic-source").value.trim(),direction:me("traffic-direction").value})}me("traffic-scenario").onchange=()=>{const n=ua().find(e=>e.id===me("traffic-scenario").value);if(n){me("scenario-name").value=n.name;for(const[e,t]of[["sourceId","scenario-source"],["targetId","scenario-target"]]){const i=k(t),s=n[e];s&&![...i.options].some(r=>r.value===s)&&i.add(new Option(`Missing resource: ${s}`,s)),i.value=s??""}me("traffic-protocol").value=n.traffic.protocol,me("traffic-port").value=String(n.traffic.port),me("traffic-source").value=n.traffic.sourceIp,me("traffic-direction").value=n.traffic.direction}};k("scenario-save").onclick=()=>{try{const n=me("scenario-name").value.trim();if(!n)throw Error("Give the scenario a name");const t=me("traffic-scenario").value||crypto.randomUUID(),i=ua().filter(s=>s.id!==t);if(i.length>=100)throw Error("A diagram supports up to 100 scenarios");i.push({id:t,name:n,traffic:s0(),...me("scenario-source").value?{sourceId:me("scenario-source").value}:{},...me("scenario-target").value?{targetId:me("scenario-target").value}:{}}),et({type:"scenarios",scenarios:i}),ad(),me("traffic-scenario").value=t,Ce(`Saved scenario ${n}`)}catch(n){Ce(String(n))}};k("scenario-delete").onclick=()=>{const n=me("traffic-scenario").value;n&&(et({type:"scenarios",scenarios:ua().filter(e=>e.id!==n)}),ad())};k("scenario-use").onclick=()=>{try{const n=s0(),e=me("scenario-source").value,t=me("scenario-target").value;if(Gn=void 0,e&&!j.nodes.some(i=>i.id===e))throw Error("Scenario start is missing; choose another resource");if(t&&!j.nodes.some(i=>i.id===t))throw Error("Scenario destination is missing; choose another resource");if(et({type:"traffic",from:j.traffic,to:n}),e&&t){const i=Wo(j,e,t,n);Ce(`${i.status}: ${i.reason}`),i.status!=="unknown"&&(Gn={path:i.path,allowed:i.status==="allowed"})}else e&&ne.select(e),Ce("Traffic scenario applied");ne.stopJourney(),k("traffic-panel").hidden=!0}catch(n){Ce(String(n))}};function Tc(){if(ne.journeyPlaying){ne.stopJourney();return}const n=Gn?Gn.path.slice(0,1):Fh(j,vt);if(!n.length){Ce("No flow arrows. Use Reachability matrix for imported resources, or connect components.");return}ne.playJourney(n,Gn),k("journey").setAttribute("aria-pressed","true");const e=n.map(t=>j.nodes.find(i=>i.id===t)?.label).join(", ");Ce(`Journey from ${e} · P or Esc to stop`)}k("journey").onclick=Tc;k("traffic-settings").onclick=()=>{const n=k("traffic-panel");n.hidden=!n.hidden,ad();const e=j.traffic??Er;me("traffic-protocol").value=e.protocol,me("traffic-port").value=String(e.port),me("traffic-source").value=e.sourceIp,me("traffic-direction").value=e.direction};k("traffic-apply").onclick=()=>{try{const n=Cr({protocol:me("traffic-protocol").value,port:Number(me("traffic-port").value),sourceIp:me("traffic-source").value.trim(),direction:me("traffic-direction").value});et({type:"traffic",from:j.traffic,to:n}),k("traffic-panel").hidden=!0}catch(n){Ce(String(n))}};function r0(){const n=me("rule-action").value!=="allow";for(const e of["rule-protocol","rule-port","rule-source","rule-direction"])me(e).disabled=n}me("rule-action").onchange=r0;k("rule-apply").onclick=()=>{const n=j.edges.find(e=>e.id===kt);if(n)try{const e={...n};me("rule-action").value==="none"?delete e.networkRule:me("rule-action").value==="deny"?e.networkRule={action:"deny",protocol:"any",direction:"any"}:e.networkRule=Eh({action:me("rule-action").value,protocol:me("rule-protocol").value,direction:me("rule-direction").value,...me("rule-port").value?{port:Number(me("rule-port").value)}:{},...me("rule-source").value.trim()?{sourceCidr:me("rule-source").value.trim()}:{}}),et({type:"graph",label:"Change traffic rule",edges:[{id:n.id,value:e}]})}catch(e){Ce(String(e))}};ne.onJourneyPermit=n=>{const e=j.edges.find(i=>i.id===n),t=Ch(e?.networkRule,j.traffic??Er);if(e&&(j.nodes.find(i=>i.id===e.source)?.network||j.nodes.find(i=>i.id===e.target)?.network)){const i=Wo(j,e.source,e.target,j.traffic??Er);if(i.status!=="allowed")return Ce(`${i.status.toUpperCase()} · ${i.reason}`),!1}return t.allowed||Ce(`Blocked · ${e?.label||n} · ${t.reason}`),t.allowed};ne.onJourneyHop=n=>{const e=j.edges.find(i=>i.id===n);if(!e)return;const t=i=>j.nodes.find(s=>s.id===i)?.label??"";Ce(`${e.networkRule?"Allowed · ":""}${t(e.source)} → ${t(e.target)}${e.label?` · ${e.label}`:""}`)};ne.onJourneyCaption=n=>{k("journey-caption").textContent=n,k("journey-caption").hidden=!n};ne.onJourneyEnd=()=>{k("journey").setAttribute("aria-pressed","false")};ne.onJourneyBranches=n=>Ic(j,n);function ld(n){const e=j.edges.find(i=>i.id===n);if(!e)return"Connection";const t=j.nodes.find(i=>i.id===e.target)?.label??"";return e.label?`${e.label} → ${t}`:`→ ${t}`}let na;ne.onJourneyChoose=(n,e)=>new Promise(t=>{if(ea){t(e[0]);return}const i=j.nodes.find(f=>f.id===n),s=ne.nodeScreenRect(n),r=document.createElement("section");r.className="popover decision-chooser",r.setAttribute("aria-label","Choose a branch");const o=document.createElement("p");o.className="popover-caption",o.textContent="DECISION";const a=document.createElement("h2");a.textContent=i?.label||"Which way?",r.append(o,a);const l=f=>{r.remove(),na=void 0,t(f)};e.forEach((f,g)=>{const v=document.createElement("button"),m=document.createElement("kbd");m.textContent=String(g+1);const p=document.createElement("span");p.textContent=ld(f),v.append(m,p),v.onclick=()=>l(f),r.append(v)}),document.body.append(r);const c=r.offsetWidth,d=r.offsetHeight,u=s?s.left+s.width+16:innerWidth/2-c/2,h=s?s.top+s.height/2-d/2:innerHeight/3;r.style.left=`${Math.max(12,Math.min(u,innerWidth-c-12))}px`,r.style.top=`${Math.max(64,Math.min(h,innerHeight-d-80))}px`,na={close:l},Ce(`Decision at ${i?.label??"a fork"} · choose a branch (1–${e.length})`)});ne.onJourneyCancelChoice=()=>na?.close();window.addEventListener("keydown",n=>{if(!na||n.ctrlKey||n.metaKey||n.altKey)return;const e=Number(n.key)-1,t=document.querySelectorAll(".decision-chooser button");Number.isInteger(e)&&t[e]&&(n.preventDefault(),n.stopImmediatePropagation(),t[e].click())},{capture:!0});k("snap").onclick=()=>{ne.snapping=!ne.snapping,k("snap").setAttribute("aria-pressed",String(ne.snapping))};k("tool-group").onclick=()=>{try{const n=crypto.randomUUID();et(Qp(j,wt,n),[n])}catch(n){Ce(String(n))}};k("ungroup").onclick=()=>et(e2(j,wt),[]);k("duplicate").onclick=()=>{const n=Wh(Hh(j,wt),()=>crypto.randomUUID());et(n,n.type==="graph"?n.nodes?.map(e=>e.id)??[]:[])};for(const n of["x","z","width","depth"])me(`node-${n}`).onchange=()=>{const e=j.nodes.find(i=>i.id===vt);if(!e)return;const t=Number(me(`node-${n}`).value);if(!Number.isFinite(t)||Math.abs(t)>1e6||(n==="width"||n==="depth")&&t<30){Ce("Enter a valid size or coordinate."),qn();return}et({type:"graph",label:`Change ${n}`,nodes:[{id:e.id,value:{...e,[n]:t,...(e.kind==="text"||e.kind==="note")&&(n==="width"||n==="depth")?{fontSize:zh(e,e,{...e,[n]:t})}:{}}}]})};me("node-parent").onchange=()=>{const n=j.nodes.find(a=>a.id===vt);if(!n)return;const e=new Map(j.nodes.map(a=>[a.id,a])),t=Wt(n,e),i=me("node-parent").value,s=e.get(i),r=s?Wt(s,e):{x:0,z:0},o={...n,x:t.x-r.x,z:t.z-r.z};delete o.parentId,i&&(o.parentId=i),et({type:"graph",label:"Move into boundary",nodes:[{id:n.id,value:o}]})};function o0(){const n=wt.size?wt:new Set(vt?[vt]:[]);return j.nodes.filter(e=>n.has(e.id))}function a0(n){const e=new Set([n]),t=[];for(let i=!0;i;){i=!1;for(const s of j.nodes)s.parentId&&e.has(s.parentId)&&!e.has(s.id)&&(e.add(s.id),t.push(s),i=!0)}return t}function l0(n,e,t){n.length&&et({type:"graph",label:t,nodes:n.map(i=>({id:i.id,value:{...i,metadata:{...i.metadata,...e}}}))})}for(const n of Xf)me(`meta-${n}`).onchange=()=>{const e=o0();l0(e,{[n]:me(`meta-${n}`).value.slice(0,1e3)},e.length>1?`Edit ${n} on ${e.length} objects`:`Edit ${n}`)};k("meta-apply-inside").onclick=()=>{const n=j.nodes.find(i=>i.id===vt);if(!n)return;const e=Object.fromEntries(Object.entries(n.metadata??{}).filter(([,i])=>i)),t=a0(n.id);if(!Object.keys(e).length){Ce("Fill in this boundary’s details first, then apply them.");return}l0(t,e,"Apply details inside boundary"),Ce(`Details applied to ${t.length} objects inside ${n.label}`)};for(const n of["label","source","target","sourcePort","targetPort","routing","bend"])me(`edge-${n}`).onchange=()=>{const e=j.edges.find(r=>r.id===kt);if(!e)return;const t={...e},i=me(`edge-${n}`).value;if(n==="bend"){const r=Number(i);if(!Number.isFinite(r)||Math.abs(r)>1e6){qn();return}t.bend=r}else n==="sourcePort"||n==="targetPort"?i?t[n]=i:delete t[n]:n==="routing"?t.routing=i:t[n]=i.slice(0,1e3);const s=e.id;et({type:"graph",label:"Edit connection",edges:[{id:s,value:t}]},[]),ne.selectEdge(s)};k("delete-edge").onclick=ca;function c0(){const n=j.edges.find(s=>s.id===kt);if(!n)return{active:!1,all:!1};const e=j.edges.filter(s=>s.source===n.source).length>=2,t=j.nodes.find(s=>s.id===n.source),i=t?.journey?.mode==="fixed"?t.journey.edge:void 0;return{active:e&&i!==n.id,all:e&&!!i}}function d0(n){const e=j.edges.find(s=>s.id===kt),t=e&&j.nodes.find(s=>s.id===e.source);if(!e||!t)return;const i={...t};n?i.journey={mode:"fixed",edge:e.id}:delete i.journey,et({type:"graph",label:n?"Set active route":"Show all routes",nodes:[{id:t.id,value:i}]},[]),ne.selectEdge(e.id),Ce(n?`Active route: ${t.label} ${ld(e.id)}`:`All routes from ${t.label} are active`)}k("edge-active").onclick=()=>d0(!0);k("edge-all-routes").onclick=()=>d0(!1);ne.onContextMenu=(n,e)=>{const t=k("context-menu");for(const i of t.querySelectorAll("[data-multi]"))i.hidden=!!kt||wt.size<2;for(const i of t.querySelectorAll("button[data-action]")){const s=i.dataset.action,r=c0();i.hidden=kt?s==="edge-active"?!r.active:s==="edge-all-routes"?!r.all:s!=="delete":s==="edge-active"||s==="edge-all-routes"?!0:s==="delete"||s==="duplicate"?!wt.size:!1}t.hidden=!1,t.style.left=`${Math.min(n,innerWidth-190)}px`,t.style.top=`${Math.min(e,innerHeight-250)}px`};const by=[["left","Align left edges"],["center","Align centres horizontally"],["right","Align right edges"],["top","Align top edges"],["middle","Align middles"],["bottom","Align bottom edges"],["distribute-x","Distribute horizontally"],["distribute-z","Distribute vertically"]];function u0(n){if(wt.size<2){Ce("Select two or more components to align.");return}et(n2(j,wt,n))}for(const n of document.querySelectorAll("#context-menu [data-align]"))n.onclick=()=>{k("context-menu").hidden=!0,u0(n.dataset.align)};for(const n of document.querySelectorAll("#context-menu button[data-action]"))n.onclick=()=>{k("context-menu").hidden=!0,k(n.dataset.action??"fit").click()};window.addEventListener("pointerdown",n=>{qi&&!(n.target instanceof Element&&n.target.closest(".inline-editor"))&&qi(!0)},{capture:!0});window.addEventListener("pointerdown",n=>{n.target instanceof Node&&!k("context-menu").contains(n.target)&&(k("context-menu").hidden=!0)});function ha(n){return n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement||n instanceof HTMLSelectElement}for(const n of["copy","cut"])window.addEventListener(n,e=>{ha(e.target)||!wt.size||(e.preventDefault(),e.clipboardData?.setData("text/plain",ia(Hh(j,wt))),n==="cut"&&ca())});window.addEventListener("paste",n=>{if(ha(n.target))return;const e=n.clipboardData?.getData("text/plain");if(e)try{const t=Is(e),i=Wh(t,()=>crypto.randomUUID());n.preventDefault(),et(i,i.type==="graph"?i.nodes?.map(s=>s.id)??[]:[])}catch{Ce("Clipboard does not contain a valid Solar Forge selection.")}});window.addEventListener("keydown",n=>{ea&&(n.preventDefault(),n.stopImmediatePropagation(),n.key==="Escape"&&gr?.abort())},!0);window.addEventListener("keydown",n=>{if(!ha(n.target)&&(n.ctrlKey||n.metaKey)&&["a","g","d"].includes(n.key.toLowerCase())){n.preventDefault();const e=n.key.toLowerCase();e==="a"?ne.selectMany(j.nodes.map(t=>t.id)):k(e==="d"?"duplicate":n.shiftKey?"ungroup":"tool-group").click()}});window.addEventListener("keydown",n=>{if((n.ctrlKey||n.metaKey)&&n.key.toLowerCase()==="k"){n.preventDefault(),q0([...["new","browse-examples","open","save","save-as","export","export-svg","auto-layout","reachability","import-infrastructure","export-gif","export-video","export-mermaid","export-plantuml","export-drawio","fit","iso","top","tool-group","ungroup","duplicate","delete"].map(e=>({label:k(e).getAttribute("title")??k(e).textContent?.trim()??e,run:()=>k(e).click()})),{label:"Play journey (P)",run:Tc},{label:"Copy diagram image (Ctrl+Shift+C)",run:()=>{Ac()}},...by.map(([e,t])=>({label:t,run:()=>u0(e)})),...Ko.map(e=>({label:`Theme: ${e.name}`,run:()=>qf(e.id)})),...$s.map(e=>({label:`Add ${e.label} · ${e.category}`,run:()=>{Ci(!0),_t("search").value=e.label,da(e.label)}}))]);return}if((n.ctrlKey||n.metaKey)&&["z","y"].includes(n.key.toLowerCase())&&!(n.target instanceof HTMLInputElement)&&!(n.target instanceof HTMLTextAreaElement)){n.preventDefault(),kr(n.shiftKey||n.key.toLowerCase()==="y");return}if((n.ctrlKey||n.metaKey)&&n.shiftKey&&n.key.toLowerCase()==="c"&&!ha(n.target)){n.preventDefault(),Ac();return}if((n.ctrlKey||n.metaKey)&&["s","o","n"].includes(n.key.toLowerCase())){n.preventDefault(),k(n.key.toLowerCase()==="s"?n.shiftKey?"save-as":"save":n.key.toLowerCase()==="n"?"new":"open").click();return}if(n.key==="Escape"){if(qi?.(!1),ne.journeyPlaying){ne.stopJourney();return}ne.cancelInteraction(),k("context-menu").hidden=!0,Ln("select"),Ci(!1),k("file-menu").hidden=!0,k("help-panel").hidden=!0,k("traffic-panel").hidden=!0,k("gif-panel").hidden=!0,k("theme-menu").hidden=!0,k("menu").setAttribute("aria-expanded","false"),k("help").setAttribute("aria-expanded","false"),ne.select(void 0);return}if(!(n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement||n.ctrlKey||n.metaKey||n.altKey)){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.key)){n.preventDefault();const e=n.shiftKey?50:ne.snapping?10:1,t=n.key==="ArrowLeft"?-e:n.key==="ArrowRight"?e:0,i=n.key==="ArrowUp"?-e:n.key==="ArrowDown"?e:0,s=j.nodes.filter(r=>wt.has(r.id)&&!_y(r));et({type:"graph",label:"Nudge selection",nodes:s.map(r=>({id:r.id,value:{...r,x:r.x+t,z:r.z+i}}))})}n.key==="/"&&(n.preventDefault(),Ci(!0)),n.key.toLowerCase()==="v"&&Ln("select"),n.key.toLowerCase()==="c"&&k("tool-connect").click(),n.key.toLowerCase()==="m"&&Ln("pan"),n.key.toLowerCase()==="p"&&Tc(),n.key.toLowerCase()==="t"&&k("tool-text").click(),n.key.toLowerCase()==="n"&&k("tool-note").click(),n.key==="Enter"&&vt&&(n.preventDefault(),Hs({kind:"node",id:vt})),n.key.toLowerCase()==="f"&&ne.fit(),(n.key==="Delete"||n.key==="Backspace")&&(n.preventDefault(),ca())}});window.addEventListener("beforeunload",n=>{ne.finishInteraction(),wr&&n.preventDefault()});window.addEventListener("pagehide",()=>ne.dispose(),{once:!0});function h0(){innerWidth<800&&sd&&od(!1)}window.addEventListener("resize",h0);da();$n();h0();ne.fit();Ce(Rc()?"Offline · Ready":"Browser workspace · Saving downloads a copy");(async()=>{const n=Rc();if(n){if(await ie("diagnostic_mode")){const{runNativeDiagnostics:s}=await Ai(async()=>{const{runNativeDiagnostics:r}=await import("./diagnostics-DJfqWeVS.js");return{runNativeDiagnostics:r}},[]);await s(ne);return}let i=!1;await Uo().onCloseRequested(s=>{s.preventDefault(),!(i||Mr)&&(i=!0,(async()=>{await Vs()&&(Cc&&(await Es.flush(),await ml(null)),Es.dispose(),await Uo().destroy())})().catch(r=>Ce(`Could not close: ${String(r)}`)).finally(()=>{i=!1}))})}const e=await z0();if(e){const i=await Dh("Recover your diagram?","An unsaved diagram was found from a previous session.",n?["Close app","Discard recovery","Recover"]:["Discard recovery","Recover"]);if(i==="Recover")Gs(Is(e)),Et.markSaved(-1),$n(),Ce("Recovered diagram. Save to choose a destination.");else if(i==="Discard recovery")await ml(null);else if(n){await Uo().destroy();return}}if(Cc=!0,window.addEventListener("blur",()=>{Et.isDirty&&(Es.schedule(),Es.flush().catch(()=>{}))}),!n)return;await Fr();const t=async()=>{if(Mr)return;const i=await ie("take_pending_file");i&&await Rn(async()=>{await Vs()&&(Gs(Is(i.content)),Bs=i.handle,Ce(`Opened ${i.name}`),await Fr())})};await Lc("pending-file",()=>{t().catch(i=>Ce(String(i)))}),await t()})().catch(n=>Ce(`Startup check failed: ${String(n)}`));export{Nh as D,Ai as _,wy as a,Uh as b,D0 as c,Er as d,C_ as e,Ps as f,Jp as g,Oh as h,sa as i,ie as j,ia as k,Qp as l,Hh as m,kf as o,Wh as p,al as r,$p as s,e2 as u,Ph as v,Wt as w};
