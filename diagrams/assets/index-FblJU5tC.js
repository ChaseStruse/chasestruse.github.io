const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/tour-BjFWENYq.js","assets/tour-CH6n6MU-.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const gp="modulepreload",vp=function(i){return"/diagrams/"+i},od={},jn=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(t.map(c=>{if(c=vp(c),c in od)return;od[c]=!0;const d=c.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const p=document.createElement("link");if(p.rel=d?"stylesheet":gp,d||(p.as="script"),p.crossOrigin="",p.href=c,a&&p.setAttribute("nonce",a),document.head.appendChild(p),d)return new Promise((m,v)=>{p.addEventListener("load",m),p.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},xp="/diagrams/assets/vt323-latin-400-C5q55ueI.woff2",Za=[{id:"theme",name:"Standard"},{id:"courier",name:"Courier New",family:'"Courier New", Courier, "Liberation Mono", "Nimbus Mono PS", monospace'},{id:"terminal",name:"Terminal",family:'VT323, "DejaVu Sans Mono", ui-monospace, monospace',url:xp}];function ad(i){return Za.find(e=>e.id===i)??Za[0]}const Ko=new Map;function _p(i){const e=i.url;if(!e)return Promise.resolve();let t=Ko.get(e);return t||(t=new FontFace("VT323",`url(${e}) format("woff2")`).load().then(s=>{document.fonts.add(s)}),t.catch(()=>Ko.delete(e)),Ko.set(e,t)),t}const _h={id:"cyberpunk",name:"Cyberpunk",dark:!0,tagline:"Neon on. Chrome polished. Jack in.",mark:"⚡",group:"Over the top",ambient:"neon",css:{bg:"#07040f","bg-top":"#0a0518","bg-mid":"#120a2a","bg-bottom":"#050a18","bg-glow":"#3b0f5c",panel:"#0d0920","panel-raised":"#160f33",hover:"#221749",input:"#0a0717",shadow:"#000000",border:"#35276a","border-strong":"#5b40a8",divider:"#271d4d",text:"#eef6ff","text-soft":"#d2d9ff","text-muted":"#aaa7d8",muted:"#8b87c0",faint:"#7470a8",accent:"#00f0ff","accent-strong":"#8af9ff","on-accent":"#04000f","accent-soft":"#0a2838","accent-border":"#00a3b3","accent-text":"#7ff8ff","accent-dim":"#4c8d9c",danger:"#ff3c6f",ok:"#39ff9c",hot:"#ff2a6d"},scene:{sky:["#0b0520","#160a35","#05081a"],glow:"#4a1070",fog:"#0b0520",grid:["#ff2a6d","#2a1c66"],gridOpacity:.32,tile:"#120b2a",tileTint:.3,face:"#150d30",faceTint:.38,outline:"#ffffff",outlineTint:.9,group:"#1a1040",groupOpacity:.18,shadow:"#000000",shadowOpacity:.55,selected:"#fcee0a",edge:"#00e5ff",edgeHover:"#b0fbff",edgeSelected:"#fcee0a",haloOpacity:.3,flow:"#ff2a6d",port:"#ff2a6d",handle:"#fcee0a",guide:"#ff2a6d",nodeLabel:{background:"#0c0720",border:"#ff2a6d",text:"#f4f8ff"},edgeLabel:{background:"#140a30",text:"#8af9ff"},groupLabel:"#c9b8ff",glyph:"#fcee0a",note:{paper:"#fcee0a",text:"#150a2a"},text:"#eef6ff",ambient:2,labelFont:'Orbitron, Rajdhani, "Share Tech", "Segoe UI", system-ui, sans-serif',edgeWidth:2.2,flowStyle:{width:5,dash:22,gap:28,speed:110}}},yp={id:"solar-forge",name:"Solar Forge",dark:!0,tagline:"Warm metal, steady light.",mark:"✦",group:"Classic",css:{bg:"#090f17","bg-top":"#0b101a","bg-mid":"#0c1721","bg-bottom":"#0b1720","bg-glow":"#26374b",panel:"#101925","panel-raised":"#111b29",hover:"#1b2838",input:"#0c1420",shadow:"#07101b",border:"#344155","border-strong":"#46566c",divider:"#293546",text:"#dce4ed","text-soft":"#c4cfda","text-muted":"#a7b7ca",muted:"#8d9db2",faint:"#7f91a7",accent:"#efb56a","accent-strong":"#ffd095","on-accent":"#20170e","accent-soft":"#332a1e","accent-border":"#bd8a46","accent-text":"#f2c48a","accent-dim":"#ab8e67",danger:"#d18c8c",ok:"#88b690",hot:"#ff9d3c"},scene:{sky:["#0a101a","#102432","#0c1b25"],glow:"#294057",fog:"#0b111a",grid:["#62503a","#253543"],gridOpacity:.22,tile:"#172b3a",tileTint:.18,face:"#2c4456",faceTint:.22,outline:"#778895",outlineTint:.45,group:"#172c3a",groupOpacity:.12,shadow:"#02080d",shadowOpacity:.4,selected:"#ffae42",edge:"#ffe1a2",edgeHover:"#fff4dc",edgeSelected:"#ff9d3c",haloOpacity:.12,flow:"#fff1c9",port:"#ffc778",handle:"#f4f7fb",guide:"#ff9d3c",nodeLabel:{background:"#14202b",border:"#41505e",text:"#e9eef4"},edgeLabel:{background:"#182431",text:"#e9eef4"},groupLabel:"#93a6b6",glyph:"#f6d7a5",note:{paper:"#f6d58a",text:"#2a2010"},text:"#e9eef4",ambient:2}},bp={id:"nord",name:"Nord",dark:!0,tagline:"Cool, calm and arctic.",mark:"❄",group:"Classic",css:{bg:"#242933","bg-top":"#262c37","bg-mid":"#2b313d","bg-bottom":"#232832","bg-glow":"#3b4456",panel:"#2e3440","panel-raised":"#353c4a",hover:"#3b4252",input:"#272c36",shadow:"#151920",border:"#4c566a","border-strong":"#5e6a82",divider:"#3f4758",text:"#eceff4","text-soft":"#d8dee9","text-muted":"#bcc4d3",muted:"#9aa4b7",faint:"#848ea2",accent:"#88c0d0","accent-strong":"#a6d6e3","on-accent":"#1e252f","accent-soft":"#33444f","accent-border":"#6ea6b6","accent-text":"#9fd3e1","accent-dim":"#7a9aa6",danger:"#d08770",ok:"#a3be8c",hot:"#ebcb8b"},scene:{sky:["#262c37","#2e3542","#232832"],glow:"#434c5e",fog:"#262c37",grid:["#5e81ac","#3b4252"],gridOpacity:.3,tile:"#3b4252",tileTint:.22,face:"#434c5e",faceTint:.28,outline:"#d8dee9",outlineTint:.55,group:"#3b4252",groupOpacity:.2,shadow:"#151920",shadowOpacity:.35,selected:"#ebcb8b",edge:"#88c0d0",edgeHover:"#d8f1f7",edgeSelected:"#ebcb8b",haloOpacity:.14,flow:"#eceff4",port:"#88c0d0",handle:"#eceff4",guide:"#bf616a",nodeLabel:{background:"#2e3440",border:"#4c566a",text:"#eceff4"},edgeLabel:{background:"#353c4a",text:"#d8dee9"},groupLabel:"#b3bccb",glyph:"#ebcb8b",note:{paper:"#ebcb8b",text:"#2e3440"},text:"#eceff4",ambient:2.2}},wp={id:"daylight",name:"Daylight",dark:!1,tagline:"Bright, clear and printable.",mark:"☀",group:"Classic",css:{bg:"#eef1f6","bg-top":"#f7f9fc","bg-mid":"#eef2f7","bg-bottom":"#e6ebf2","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f3f6fa",hover:"#e9eef5",input:"#f7f9fc",shadow:"#7d8aa0",border:"#cfd7e3","border-strong":"#a9b5c7",divider:"#dfe5ee",text:"#17202c","text-soft":"#2c394b","text-muted":"#4a586c",muted:"#5d6b80",faint:"#6f7c90",accent:"#0b6bcb","accent-strong":"#2f86de","on-accent":"#ffffff","accent-soft":"#e2eefb","accent-border":"#6aa6e6","accent-text":"#0a5aab","accent-dim":"#5a87b5",danger:"#c2334d",ok:"#2e8a4a",hot:"#e0457b"},scene:{sky:["#f7f9fc","#eef2f7","#e3e9f1"],glow:"#ffffff",fog:"#eef2f7",grid:["#a9b8cc","#d6dee9"],gridOpacity:.55,tile:"#ffffff",tileTint:.16,face:"#ffffff",faceTint:.1,outline:"#5d6b80",outlineTint:.75,group:"#c9d5e6",groupOpacity:.25,shadow:"#55627a",shadowOpacity:.18,selected:"#2f86de",edge:"#3b4c66",edgeHover:"#0b6bcb",edgeSelected:"#e0457b",haloOpacity:.08,flow:"#0b6bcb",port:"#0b6bcb",handle:"#17202c",guide:"#e0457b",nodeLabel:{background:"#ffffff",border:"#cfd7e3",text:"#17202c"},edgeLabel:{background:"#f3f6fa",text:"#2c394b"},groupLabel:"#4a586c",glyph:"#4a586c",note:{paper:"#ffe58a",text:"#2a2010"},text:"#17202c",ambient:2.6}},Sp={id:"hacker",name:"Hacker",dark:!0,tagline:"> access granted_",mark:">_",group:"Over the top",ambient:"rain",css:{bg:"#000400","bg-top":"#000a02","bg-mid":"#001405","bg-bottom":"#000301","bg-glow":"#003d12",panel:"#000e04","panel-raised":"#001a08",hover:"#00290d",input:"#000a03",shadow:"#000000",border:"#0b5e22","border-strong":"#19a33e",divider:"#073d16",text:"#b6ffc8","text-soft":"#8dfaa6","text-muted":"#5fe082",muted:"#4cc46c",faint:"#3fa75b",accent:"#33ff66","accent-strong":"#9dffb4","on-accent":"#001a06","accent-soft":"#062e12","accent-border":"#1fbf4a","accent-text":"#66ff8c","accent-dim":"#2f9e4d",danger:"#ff4d4d",ok:"#33ff66",hot:"#e6ff3b"},scene:{sky:["#000a02","#001f08","#000501"],glow:"#004d18",fog:"#000a02",grid:["#33ff66","#0a3d17"],gridOpacity:.4,tile:"#001407",tileTint:.12,face:"#002a0e",faceTint:.15,outline:"#33ff66",outlineTint:.25,group:"#002b0f",groupOpacity:.16,shadow:"#000000",shadowOpacity:.6,selected:"#e6ff3b",edge:"#33ff66",edgeHover:"#c8ffd6",edgeSelected:"#e6ff3b",haloOpacity:.25,flow:"#d6ffe0",port:"#33ff66",handle:"#e6ff3b",guide:"#e6ff3b",nodeLabel:{background:"#000e04",border:"#33ff66",text:"#b6ffc8"},edgeLabel:{background:"#001a08",text:"#66ff8c"},groupLabel:"#5fe082",glyph:"#33ff66",note:{paper:"#33ff66",text:"#001a06"},text:"#b6ffc8",ambient:2,labelFont:'"JetBrains Mono", "Fira Code", "DejaVu Sans Mono", ui-monospace, monospace',iconFilter:"grayscale(1) sepia(1) hue-rotate(70deg) saturate(5) brightness(0.95)",monochrome:!0,edgeWidth:1.4,flowStyle:{width:2.4,dash:6,gap:14,speed:80}}},Mp={id:"solar-ram",name:"Solar Ram Studios",dark:!0,tagline:"Emerald eclipse. Horns down, charge ahead.",mark:"♈",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21V10.5"/><path d="M12 10.5C12 5.5 9.4 3 6.6 3 3.9 3 2 5 2 7.6s2 4.4 4.4 4.4c2.2 0 3.6-1.5 3.6-3.4 0-1.7-1.2-2.9-2.8-2.9"/><path d="M12 10.5C12 5.5 14.6 3 17.4 3 20.1 3 22 5 22 7.6S20 12 17.6 12c-2.2 0-3.6-1.5-3.6-3.4 0-1.7 1.2-2.9 2.8-2.9"/></svg>',group:"Over the top",ambient:"embers",css:{bg:"#040f0b","bg-top":"#06140f","bg-mid":"#0a1d16","bg-bottom":"#030a07","bg-glow":"#0b4a30",panel:"#08140f","panel-raised":"#0e1d17",hover:"#16291f",input:"#06110c",shadow:"#000000",border:"#1d3a2c","border-strong":"#2f5c45",divider:"#13271d",text:"#f2f5f4","text-soft":"#d9e2df","text-muted":"#aab4b1",muted:"#939c9f",faint:"#7d8689",accent:"#20d99a","accent-strong":"#6ff0c4","on-accent":"#03140c","accent-soft":"#0b2e21","accent-border":"#11995d","accent-text":"#3ee8ad","accent-dim":"#11995d",danger:"#ff5c6c",ok:"#7ee8c0",hot:"#11995d"},scene:{sky:["#020806","#062a1c","#040f0b"],glow:"#0b5c3a",fog:"#05110c",grid:["#20d99a","#0f2a1f"],gridOpacity:.22,tile:"#1c2022",tileTint:.18,face:"#2a2f32",faceTint:.22,outline:"#20d99a",outlineTint:.45,group:"#0b2a1e",groupOpacity:.18,shadow:"#000000",shadowOpacity:.55,selected:"#f2f5f4",edge:"#20d99a",edgeHover:"#bff5df",edgeSelected:"#f2f5f4",haloOpacity:.26,flow:"#e6fff4",port:"#20d99a",handle:"#f2f5f4",guide:"#6ff0c4",nodeLabel:{background:"#07120e",border:"#11995d",text:"#f2f5f4"},edgeLabel:{background:"#0b1d16",text:"#6ff0c4"},groupLabel:"#aab4b1",glyph:"#20d99a",note:{paper:"#e8eeeb",text:"#040f0b"},text:"#f2f5f4",ambient:2.2,labelFont:'Montserrat, Poppins, "Segoe UI", system-ui, sans-serif',laneHues:["#20d99a","#787e81","#11995d","#aab4b1","#05542d","#3a3e41"],edgeWidth:2,flowStyle:{width:4.2,dash:18,gap:30,speed:60}}},Ep={id:"zen-garden",name:"Zen Garden",dark:!1,tagline:"Breathe in. Rake the sand. Diagram slowly.",mark:"◯",group:"Over the top",ambient:"petals",css:{bg:"#efe9dc","bg-top":"#f6f1e6","bg-mid":"#ece5d5","bg-bottom":"#e2dac8","bg-glow":"#fffaf0",panel:"#faf6ee","panel-raised":"#f1ebdf",hover:"#e8e0cf",input:"#f6f1e6",shadow:"#8a7d64",border:"#d3c8b2","border-strong":"#ad9f84",divider:"#e0d7c4",text:"#2b2a26","text-soft":"#3d3a33","text-muted":"#5a554a",muted:"#655f52",faint:"#716a5b",accent:"#4f6f3f","accent-strong":"#67894f","on-accent":"#ffffff","accent-soft":"#e3e9d6","accent-border":"#8fa978","accent-text":"#3f5c31","accent-dim":"#6f7f5c",danger:"#b03a2e",ok:"#4f6f3f",hot:"#c8452c"},scene:{sky:["#f6f1e6","#ece5d5","#ddd4c0"],glow:"#fffaf0",fog:"#ece5d5",grid:["#b9ab8e","#ddd3bf"],gridOpacity:.5,tile:"#f4efe4",tileTint:.14,face:"#fbf8f1",faceTint:.1,outline:"#5a554a",outlineTint:.4,group:"#cfd8bf",groupOpacity:.28,shadow:"#6b604a",shadowOpacity:.16,selected:"#c8452c",edge:"#3d3a33",edgeHover:"#4f6f3f",edgeSelected:"#c8452c",haloOpacity:.06,flow:"#4f6f3f",port:"#c8452c",handle:"#2b2a26",guide:"#c8452c",nodeLabel:{background:"#faf6ee",border:"#d3c8b2",text:"#2b2a26"},edgeLabel:{background:"#f1ebdf",text:"#3d3a33"},groupLabel:"#5a554a",glyph:"#4f6f3f",note:{paper:"#f2d7d0",text:"#2b2a26"},text:"#2b2a26",ambient:2.6,labelFont:'"Noto Serif", "Noto Serif JP", Georgia, "Times New Roman", serif',edgeWidth:1.3,flowStyle:{width:2.6,dash:4,gap:46,speed:14}}},Ap={id:"monochrome",name:"Black & White",dark:!1,tagline:"No colour. No compromise.",mark:"◐",group:"Over the top",ambient:"grain",css:{bg:"#ffffff","bg-top":"#ffffff","bg-mid":"#f4f4f4","bg-bottom":"#e8e8e8","bg-glow":"#ffffff",panel:"#ffffff","panel-raised":"#f2f2f2",hover:"#e6e6e6",input:"#ffffff",shadow:"#000000",border:"#000000","border-strong":"#000000",divider:"#000000",text:"#000000","text-soft":"#111111","text-muted":"#333333",muted:"#444444",faint:"#555555",accent:"#000000","accent-strong":"#222222","on-accent":"#ffffff","accent-soft":"#e6e6e6","accent-border":"#000000","accent-text":"#000000","accent-dim":"#555555",danger:"#000000",ok:"#000000",hot:"#000000"},scene:{sky:["#ffffff","#f5f5f5","#e9e9e9"],glow:"#ffffff",fog:"#f5f5f5",grid:["#000000","#bdbdbd"],gridOpacity:.35,tile:"#ffffff",tileTint:0,face:"#ffffff",faceTint:0,outline:"#000000",outlineTint:0,group:"#d9d9d9",groupOpacity:.3,shadow:"#000000",shadowOpacity:.9,selected:"#000000",edge:"#4d4d4d",edgeHover:"#000000",edgeSelected:"#000000",haloOpacity:.18,flow:"#000000",port:"#000000",handle:"#000000",guide:"#000000",nodeLabel:{background:"#ffffff",border:"#000000",text:"#000000"},edgeLabel:{background:"#000000",text:"#ffffff"},groupLabel:"#000000",glyph:"#000000",note:{paper:"#ffffff",text:"#000000"},text:"#000000",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',iconFilter:"grayscale(1) contrast(1.3)",monochrome:!0,edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},Tp={id:"comic-noir",name:"Comic Noir",dark:!0,tagline:"Inked after midnight, in full colour.",mark:"◑",group:"Over the top",ambient:"grain",css:{bg:"#000000","bg-top":"#000000","bg-mid":"#0b0b0b","bg-bottom":"#171717","bg-glow":"#000000",panel:"#000000","panel-raised":"#0d0d0d",hover:"#1a1a1a",input:"#000000",shadow:"#ffffff",border:"#ffffff","border-strong":"#ffffff",divider:"#ffffff",text:"#ffffff","text-soft":"#eeeeee","text-muted":"#cccccc",muted:"#bbbbbb",faint:"#aaaaaa",accent:"#ffffff","accent-strong":"#dddddd","on-accent":"#000000","accent-soft":"#1a1a1a","accent-border":"#ffffff","accent-text":"#ffffff","accent-dim":"#aaaaaa",danger:"#ffffff",ok:"#ffffff",hot:"#ffffff"},scene:{sky:["#000000","#0a0a0a","#161616"],glow:"#000000",fog:"#0a0a0a",grid:["#ffffff","#424242"],gridOpacity:.35,tile:"#000000",tileTint:.3,face:"#000000",faceTint:.38,outline:"#ffffff",outlineTint:0,group:"#262626",groupOpacity:.3,shadow:"#ffffff",shadowOpacity:.35,selected:"#ffffff",edge:"#b3b3b3",edgeHover:"#ffffff",edgeSelected:"#ffffff",haloOpacity:.18,flow:"#ffffff",port:"#ffffff",handle:"#ffffff",guide:"#ffffff",nodeLabel:{background:"#000000",border:"#ffffff",text:"#ffffff"},edgeLabel:{background:"#ffffff",text:"#000000"},groupLabel:"#ffffff",glyph:"#ffffff",note:{paper:"#000000",text:"#ffffff"},text:"#ffffff",ambient:3,labelFont:'"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif',edgeWidth:2,flowStyle:{width:3,dash:10,gap:10,speed:30}}},Cp={id:"space",name:"Deep Space",dark:!0,tagline:"Houston, we have a diagram.",mark:"🪐",markSvg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="5.5"/><path d="M6.4 14.6C3.3 16.8 1.8 18.8 2.5 19.8c1.1 1.6 7-.9 12.1-4.6S22.6 6.8 21.5 5.2c-.6-.9-2.7-.5-5.5.9"/></svg>',group:"Over the top",ambient:"stars",css:{bg:"#03040c","bg-top":"#050716","bg-mid":"#0b0f2a","bg-bottom":"#020309","bg-glow":"#2a1e5c",panel:"#080b1e","panel-raised":"#0f1430",hover:"#1a2048",input:"#060818",shadow:"#000000",border:"#262e5e","border-strong":"#3d4a8f",divider:"#1b2149",text:"#eef1ff","text-soft":"#d0d6ff","text-muted":"#a9b1e0",muted:"#929bd0",faint:"#7d87bd",accent:"#7aa2ff","accent-strong":"#b3c8ff","on-accent":"#03040c","accent-soft":"#141d45","accent-border":"#4f6fd6","accent-text":"#a5bcff","accent-dim":"#6474ad",danger:"#ff6b81",ok:"#5be3b0",hot:"#c77dff"},scene:{sky:["#03040c","#0b1030","#05020f"],glow:"#33246e",fog:"#04050f",grid:["#7aa2ff","#1a1f45"],gridOpacity:.22,tile:"#0b1030",tileTint:.25,face:"#121a45",faceTint:.3,outline:"#b3c8ff",outlineTint:.6,group:"#141a40",groupOpacity:.16,shadow:"#000000",shadowOpacity:.5,selected:"#ffd27a",edge:"#7aa2ff",edgeHover:"#dbe5ff",edgeSelected:"#ffd27a",haloOpacity:.26,flow:"#ffffff",port:"#c77dff",handle:"#ffd27a",guide:"#c77dff",nodeLabel:{background:"#080b1e",border:"#4f6fd6",text:"#eef1ff"},edgeLabel:{background:"#0f1430",text:"#b3c8ff"},groupLabel:"#a9b1e0",glyph:"#b3c8ff",note:{paper:"#c77dff",text:"#0a0420"},text:"#eef1ff",ambient:2.2,stars:!0,edgeWidth:1.8,flowStyle:{width:3.2,dash:3,gap:26,speed:45}}},Co=[_h,Sp,Mp,Ep,Ap,Tp,Cp,yp,bp,wp],Ja=_h;function ld(i){return Co.find(e=>e.id===i)??Ja}function Rp(i,e=document.documentElement){for(const[t,n]of Object.entries(i.css))e.style.setProperty(`--${t}`,n);e.style.colorScheme=i.dark?"dark":"light",e.dataset.theme=i.id}function O(i){const e=document.getElementById(i);if(!e)throw new Error(`Missing element: ${i}`);return e}function ot(i){const e=O(i);if(!(e instanceof HTMLInputElement))throw new Error(`Expected input: ${i}`);return e}function fe(i){const e=O(i);if(e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)return e;throw Error(`Expected field ${i}`)}function Ws(i){return i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement}function Xs(i,e,t){const n=fe(i);n instanceof HTMLSelectElement&&(n.replaceChildren(...e.map(([s,r])=>{const o=document.createElement("option");return o.value=s,o.textContent=r,o})),n.value=t)}const cd="ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄ0101<>{}#$%=+*";function Pp(i,e){if(i.replaceChildren(),i.dataset.ambient=e??"",!e)return;const t=Math.random,n=(r,o)=>{const a=document.createElement("span");a.className=r;for(const[l,c]of Object.entries(o))a.style.setProperty(l,c);return i.append(a),a},s=(r,o)=>r+t()*(o-r);if(e==="rain")for(let r=0;r<26;r++){const o=n("fx-rain",{left:`${s(0,100)}%`,"--fx-duration":`${s(5,13)}s`,"--fx-delay":`${-s(0,13)}s`,"--fx-opacity":`${s(.12,.32)}`,"font-size":`${Math.round(s(11,17))}px`});o.textContent=Array.from({length:Math.round(s(12,30))},()=>cd[Math.floor(t()*cd.length)]).join(`
`)}else if(e==="embers")for(let r=0;r<34;r++)n("fx-ember",{left:`${s(0,100)}%`,"--fx-size":`${s(2,6)}px`,"--fx-drift":`${s(-80,80)}px`,"--fx-duration":`${s(7,16)}s`,"--fx-delay":`${-s(0,16)}s`});else if(e==="petals")for(let r=0;r<16;r++)n("fx-petal",{left:`${s(-5,100)}%`,"--fx-drift":`${s(60,220)}px`,"--fx-duration":`${s(14,26)}s`,"--fx-delay":`${-s(0,26)}s`,"--fx-size":`${s(9,16)}px`}).append(document.createElement("i"));else if(e==="neon"){n("fx-scanbar",{});for(let r=0;r<7;r++)n("fx-streak",{top:`${s(8,92)}%`,"--fx-duration":`${s(3,9)}s`,"--fx-delay":`${-s(0,9)}s`,"--fx-length":`${s(80,260)}px`})}else if(e==="grain")n("fx-grain",{});else if(e==="stars"){for(let r=0;r<40;r++)n("fx-star",{left:`${s(0,100)}%`,top:`${s(0,100)}%`,"--fx-size":`${s(1,2.6)}px`,"--fx-duration":`${s(2.5,7)}s`,"--fx-delay":`${-s(0,7)}s`});for(let r=0;r<3;r++)n("fx-comet",{top:`${s(4,60)}%`,left:`${s(30,100)}%`,"--fx-duration":`${s(9,18)}s`,"--fx-delay":`${-s(0,18)}s`})}}function Ip(i){let e=ld((()=>{try{return localStorage.getItem("solar-forge-theme")}catch{return null}})()),t=(()=>{try{const o=localStorage.getItem("solar-forge-theme-fx");if(o)return o==="on"}catch{}return!matchMedia("(prefers-reduced-motion: reduce)").matches})(),n=ad((()=>{try{return localStorage.getItem("solar-forge-font")}catch{return null}})());function s(){return n.family?{...e.scene,labelFont:n.family}:e.scene}function r(){Rp(e),document.documentElement.dataset.fx=t?"on":"off",e.markSvg?O("forge-mark").innerHTML=e.markSvg:O("forge-mark").textContent=e.mark,Pp(O("theme-fx"),t?e.ambient:void 0)}return r(),{initialPalette:e.scene,boardFontFamily:()=>n.family,install(o){function a(d){e=ld(d),r(),o.setPalette(s());for(const h of O("theme-list").querySelectorAll("button"))h.setAttribute("aria-pressed",String(h.dataset.theme===e.id));try{localStorage.setItem("solar-forge-theme",e.id)}catch{}i(`${e.name} · ${e.tagline}`)}for(const[d,h]of Co.entries()){if(h.group!==Co[d-1]?.group){const f=document.createElement("p");f.className="popover-caption",f.textContent=h.group.toUpperCase(),O("theme-list").append(f)}const p=document.createElement("button");p.dataset.theme=h.id,p.setAttribute("aria-pressed",String(h.id===e.id));const m=document.createElement("span");m.className="theme-swatch",m.style.background=`linear-gradient(135deg, ${h.css.bg} 0 45%, ${h.css.accent} 45% 72%, ${h.css.hot} 72%)`,m.style.color=h.css.text??"",h.markSvg?m.innerHTML=h.markSvg:m.textContent=h.mark;const v=document.createElement("span");v.className="theme-text";const x=document.createElement("strong");x.textContent=h.name;const u=document.createElement("small");u.textContent=h.tagline,v.append(x,u),p.append(m,v),p.onclick=()=>{a(h.id),O("theme-menu").hidden=!0,O("theme").setAttribute("aria-expanded","false")},O("theme-list").append(p)}async function l(d,h=!0){const p=ad(d);n=p,fe("board-font").value=p.id;try{await _p(p)}catch{i(`${p.name} font unavailable; using a fallback.`)}if(n===p){o.setPalette(s());try{localStorage.setItem("solar-forge-font",p.id)}catch{}h&&i(`Board font · ${p.name}`)}}Xs("board-font",Za.map(d=>[d.id,d.name]),n.id),fe("board-font").onchange=()=>{l(fe("board-font").value)},n.family&&l(n.id,!1),ot("theme-fx-toggle").checked=t,ot("theme-fx-toggle").onchange=()=>{t=ot("theme-fx-toggle").checked,r();try{localStorage.setItem("solar-forge-theme-fx",t?"on":"off")}catch{}i(`Ambient effects ${t?"on":"off"}`)},O("theme").onclick=()=>{const d=O("theme-menu");d.hidden=!d.hidden,O("theme").setAttribute("aria-expanded",String(!d.hidden))},fe("quality").onchange=()=>{const d=Number(fe("quality").value);o.setQuality(d);try{localStorage.setItem("solar-forge-quality",String(d))}catch{i("Quality changed for this session.")}};try{const d=localStorage.getItem("solar-forge-quality");d&&["1","1.5","2"].includes(d)&&(fe("quality").value=d,o.setQuality(Number(d)))}catch{}function c(d){o.setFlow(d),O("flow").setAttribute("aria-pressed",String(d));try{localStorage.setItem("solar-forge-flow",d?"1":"0")}catch{}}try{localStorage.getItem("solar-forge-flow")==="0"&&c(!1)}catch{}return O("flow").onclick=()=>c(!o.flow),{setTheme:a}}}}const Dp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%230d9488'%20fill='%230d9488'%3e%3cpath%20d='m32%205%2025%2014v28L32%2061%207%2047V19Zm0%206L13%2022l19%2011%2019-11ZM12%2027v17l17%2010V37Zm23%2010v17l17-10V27Z'/%3e%3c/svg%3e",Lp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23326ce5'%20fill='%23326ce5'%3e%3crect%20x='5'%20y='16'%20width='54'%20height='34'%20rx='3'/%3e%3cpath%20d='M14%2023v20m9-20v20m9-20v20m9-20v20m9-20v20'%20stroke='white'%20stroke-width='3'/%3e%3c/svg%3e",Np="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%232496ed'%20fill='%232496ed'%3e%3cpath%20d='M8%2030h45c-2%2017-13%2023-25%2019C17%2047%2011%2040%208%2030Z'/%3e%3cpath%20d='M52%2030c8%200%2010-6%208-10-5%200-7%203-8%2010Z'/%3e%3cpath%20d='M14%2020h8v8h-8zm10%200h8v8h-8zm10%200h8v8h-8zm-10-10h8v8h-8zm10%200h8v8h-8zm0-10h8v8h-8z'/%3e%3c/svg%3e",Up="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d97706'%20fill='%23d97706'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",kp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23f05032'%20fill='%23f05032'%3e%3cpath%20d='m32%202%2030%2030-30%2030L2%2032Z'/%3e%3cpath%20d='m20%2020%2023%2023M28%2028v20'%20stroke='white'%20stroke-width='4'/%3e%3cg%20fill='white'%3e%3ccircle%20cx='20'%20cy='20'%20r='4'/%3e%3ccircle%20cx='43'%20cy='43'%20r='4'/%3e%3ccircle%20cx='28'%20cy='48'%20r='4'/%3e%3c/g%3e%3c/svg%3e",Fp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%2324292f'%20fill='%2324292f'%3e%3crect%20x='1'%20y='1'%20width='62'%20height='62'%20rx='8'%20fill='%23f6f8fa'/%3e%3ccircle%20cx='15'%20cy='17'%20r='10'/%3e%3crect%20x='37'%20y='7'%20width='23'%20height='20'%20rx='4'/%3e%3crect%20x='37'%20y='37'%20width='23'%20height='20'%20rx='4'/%3e%3cpath%20d='M25%2017h12M15%2027v20h22'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='m44%2017%204%204%207-8m-11%2034%204%204%207-8'%20stroke='white'%20fill='none'%20stroke-width='3'/%3e%3c/svg%3e",Op="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%238c4fff'%20fill='%238c4fff'%3e%3cpath%20d='M8%2057V7h48v50H44V20H20v37Z'/%3e%3cpath%20d='M3%2038h58m-9-9%209%209-9%209'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",zp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23c084fc'%20fill='%23c084fc'%3e%3crect%20x='4'%20y='8'%20width='56'%20height='48'%20rx='5'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M12%2023h38m-8-8%208%208-8%208M52%2042H14m8-8-8%208%208%208'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",Bp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23d9534f'%20fill='%23d9534f'%3e%3cpath%20d='m32%204%2024%209v18c0%2014-13%2024-24%2029C21%2055%208%2045%208%2031V13Z'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M15%2025h34M13%2037h38M23%2014v11m16%200v12M25%2037v13'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",Gp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%237c3aed'%20fill='%237c3aed'%3e%3cpath%20d='M12%2032h40'%20stroke='currentColor'%20stroke-width='5'/%3e%3crect%20x='2'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3crect%20x='42'%20y='21'%20width='20'%20height='22'%20rx='4'/%3e%3cpath%20d='m26%2014%2014%2018-14%2018'%20stroke='currentColor'%20fill='none'%20stroke-width='4'/%3e%3c/svg%3e",Vp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2064'%20color='%23059669'%20fill='%23059669'%3e%3crect%20x='5'%20y='7'%20width='54'%20height='50'%20rx='4'%20fill='none'%20stroke='currentColor'%20stroke-width='4'/%3e%3cpath%20d='M5%2023h54M5%2039h54M25%207v50'%20stroke='currentColor'%20stroke-width='4'/%3e%3c/svg%3e",Hp="/diagrams/assets/deployment-moDm8Qno.svg",Wp="/diagrams/assets/ingress-LIwjGSQ0.svg",Xp="/diagrams/assets/namespace-DnbgsEPO.svg",$p="/diagrams/assets/pod-W3FHC1RA.svg",qp="/diagrams/assets/service-lXPCicat.svg",jp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%235a6b86'/%3e%3cg%20fill='none'%20stroke='%23fff'%20stroke-width='2.6'%3e%3ccircle%20cx='32'%20cy='32'%20r='17'/%3e%3cellipse%20cx='32'%20cy='32'%20rx='7.5'%20ry='17'/%3e%3cpath%20d='M15%2032h34M18%2023h28M18%2041h28'/%3e%3c/g%3e%3c/svg%3e",Yp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%3e%3crect%20width='64'%20height='64'%20fill='%233f8cff'/%3e%3ccircle%20cx='32'%20cy='23'%20r='9'%20fill='none'%20stroke='%23fff'%20stroke-width='3'/%3e%3cpath%20d='M15%2050c0-9.4%207.6-15%2017-15s17%205.6%2017%2015'%20fill='none'%20stroke='%23fff'%20stroke-width='3'%20stroke-linecap='round'/%3e%3c/svg%3e",Zp=[["Analytics","#8c4fff",[["clean-rooms","Clean Rooms","aws"],["data-exchange","Data Exchange","aws"],["datazone","DataZone","amazon"],["emr","EMR","amazon","elastic mapreduce hadoop spark"],["entity-resolution","Entity Resolution","aws"],["finspace","FinSpace","amazon"],["glue","Glue","aws"],["glue-databrew","Glue DataBrew","aws"],["kinesis-video-streams","Kinesis Video Streams","amazon"],["lake-formation","Lake Formation","aws"],["managed-service-for-apache-flink","Managed Service for Apache Flink","amazon","kinesis data analytics"],["managed-streaming-for-apache-kafka","MSK","amazon"],["opensearch-service","OpenSearch Service","amazon","elasticsearch search"],["redshift","Redshift","amazon"]]],["Integration","#e7157b",[["mq","Amazon MQ","amazon"],["appflow","AppFlow","amazon"],["appsync","AppSync","aws"],["b2b-data-interchange","B2B Data Interchange","aws"],["managed-workflows-for-apache-airflow","MWAA","amazon","dag"],["step-functions","Step Functions","aws","state machine workflow orchestration express workflows"]]],["Machine Learning","#01a88d",[["nova","Amazon Nova","amazon"],["q","Amazon Q","amazon"],["app-studio","App Studio","aws"],["augmented-ai-a2i","Augmented AI (A2I)","amazon"],["bedrock","Bedrock","amazon","genai llm foundation models"],["bedrock-agentcore","Bedrock AgentCore","amazon","genai agents"],["comprehend","Comprehend","amazon"],["comprehend-medical","Comprehend Medical","amazon"],["deep-learning-amis","Deep Learning AMIs","aws"],["deep-learning-containers","Deep Learning Containers","aws"],["devops-guru","DevOps Guru","amazon"],["elemental-inference","Elemental Inference","aws"],["healthimaging","HealthImaging","aws"],["healthlake","HealthLake","aws"],["healthomics","HealthOmics","aws"],["healthscribe","HealthScribe","aws"],["kendra","Kendra","amazon"],["lex","Lex","amazon"],["neuron","Neuron","aws"],["personalize","Personalize","amazon"],["polly","Polly","amazon"],["pytorch-on-aws","PyTorch on AWS",""],["rekognition","Rekognition","amazon"],["sagemaker-ground-truth","SageMaker Ground Truth","amazon"],["tensorflow-on-aws","TensorFlow on AWS",""],["textract","Textract","amazon"],["transcribe","Transcribe","amazon"],["translate","Translate","amazon"]]],["Blockchain","#ed7100",[["managed-blockchain","Managed Blockchain","amazon"]]],["Business Applications","#dd344c",[["connect","Amazon Connect","amazon"],["quick","Amazon Quick","amazon"],["appfabric","AppFabric","aws"],["chime-sdk","Chime SDK","amazon"],["end-user-messaging","End User Messaging","aws"],["simple-email-service","SES","amazon","smtp mail"],["supply-chain","Supply Chain","aws"],["wickr","Wickr","aws"],["workmail","WorkMail","amazon"]]],["Compute","#ed7100",[["app-runner","App Runner","aws"],["batch","AWS Batch","aws"],["bottlerocket","Bottlerocket",""],["dcv","DCV","amazon"],["ec2-auto-scaling","EC2 Auto Scaling","amazon","group asg application"],["ec2-image-builder","EC2 Image Builder","amazon"],["elastic-beanstalk","Elastic Beanstalk","aws"],["elastic-fabric-adapter","Elastic Fabric Adapter",""],["elastic-vmware-service","Elastic VMware Service","amazon","evs"],["lightsail","Lightsail","amazon"],["local-zones","Local Zones","aws"],["nitro-enclaves","Nitro Enclaves","aws"],["outposts-family","Outposts","aws","rack servers on premises"],["parallel-cluster","ParallelCluster","aws"],["parallel-computing-service","Parallel Computing Service","aws"],["serverless-application-repository","Serverless Application Repository","aws"],["simspace-weaver","SimSpace Weaver","aws"],["wavelength","Wavelength","aws"]]],["Containers","#ed7100",[["ecs-anywhere","ECS Anywhere","amazon"],["eks-anywhere","EKS Anywhere","amazon"],["eks-distro","EKS Distro","amazon"],["red-hat-openshift-service-on-aws","Red Hat OpenShift Service on AWS",""]]],["Database","#c925d1",[["aurora","Aurora","amazon","relational postgres mysql database serverless"],["database-migration-service","Database Migration Service","aws","dms"],["documentdb","DocumentDB","amazon"],["elasticache","ElastiCache","amazon","redis valkey memcached cache"],["keyspaces","Keyspaces","amazon"],["memorydb","MemoryDB","amazon"],["neptune","Neptune","amazon"],["oracle-database-at-aws","Oracle Database at AWS",""],["timestream","Timestream","amazon"]]],["Developer Tools","#c925d1",[["cloud-development-kit","CDK","aws","infrastructure as code iac"],["cloud-control-api","Cloud Control API","aws"],["codeartifact","CodeArtifact","aws"],["codebuild","CodeBuild","aws"],["codecatalyst","CodeCatalyst","amazon"],["codedeploy","CodeDeploy","aws"],["codepipeline","CodePipeline","aws"],["fault-injection-service","Fault Injection Service","aws"],["infrastructure-composer","Infrastructure Composer","aws"],["x-ray","X-Ray","aws","tracing"]]],["End User Computing","#01a88d",[["workspaces","WorkSpaces","amazon"]]],["Front-End Web & Mobile","#dd344c",[["amplify","Amplify","aws"],["device-farm","Device Farm","aws"],["location-service","Location Service","amazon"]]],["Games","#8c4fff",[["gamelift-servers","GameLift Servers","amazon"],["gamelift-streams","GameLift Streams","amazon"]]],["Internet of Things","#7aa116",[["freertos","FreeRTOS",""],["iot-core","IoT Core","aws"],["iot-device-defender","IoT Device Defender","aws"],["iot-device-management","IoT Device Management","aws"],["iot-expresslink","IoT ExpressLink","aws"],["iot-greengrass","IoT Greengrass","aws"],["iot-sitewise","IoT SiteWise","aws"],["iot-twinmaker","IoT TwinMaker","aws"]]],["Management & Governance","#e7157b",[["appconfig","AppConfig","aws"],["chatbot","AWS Chatbot","aws"],["config","AWS Config","aws"],["organizations","AWS Organizations","aws"],["backint-agent","Backint Agent","aws"],["cloudformation","CloudFormation","aws","infrastructure as code iac stacks templates"],["cloudtrail","CloudTrail","aws"],["cloudwatch","CloudWatch","amazon","logs metrics alarms monitoring"],["control-tower","Control Tower","aws"],["devops-agent","DevOps Agent","aws"],["distro-for-opentelemetry","Distro for OpenTelemetry","aws","adot tracing otel"],["license-manager","License Manager","aws"],["managed-grafana","Managed Grafana","amazon"],["managed-service-for-prometheus","Managed Service for Prometheus","amazon"],["resilience-hub","Resilience Hub","aws"],["resource-explorer","Resource Explorer","aws"],["service-catalog","Service Catalog","aws"],["service-management-connector","Service Management Connector","aws"],["systems-manager","Systems Manager","aws","ssm parameter store session"],["telco-network-builder","Telco Network Builder","aws"],["trusted-advisor","Trusted Advisor","aws"],["user-notifications","User Notifications","aws"]]],["Media Services","#ed7100",[["deadline-cloud","Deadline Cloud","aws"],["elemental-live","Elemental Live","aws"],["elemental-mediaconnect","Elemental MediaConnect","aws"],["elemental-mediaconvert","Elemental MediaConvert","aws"],["elemental-medialive","Elemental MediaLive","aws"],["elemental-mediapackage","Elemental MediaPackage","aws"],["elemental-mediatailor","Elemental MediaTailor","aws"],["interactive-video-service","Interactive Video Service","amazon"]]],["Migration & Modernization","#01a88d",[["application-migration-service","Application Migration Service","aws"],["transform","AWS Transform","aws"],["data-transfer-terminal","Data Transfer Terminal","aws"],["datasync","DataSync","aws"],["mainframe-modernization","Mainframe Modernization","aws"],["transfer-family","Transfer Family","aws"]]],["Networking","#8c4fff",[["virtual-private-cloud","Amazon VPC","amazon","network"],["application-recovery-controller","Application Recovery Controller","amazon"],["interconnect","AWS Interconnect","aws"],["client-vpn","Client VPN","aws"],["cloud-map","Cloud Map","aws"],["cloud-wan","Cloud WAN","aws"],["direct-connect","Direct Connect","aws"],["global-accelerator","Global Accelerator","aws"],["privatelink","PrivateLink","aws"],["rtb-fabric","RTB Fabric","aws"],["site-to-site-vpn","Site-to-Site VPN","aws","ipsec"],["transit-gateway","Transit Gateway","aws","tgw"],["verified-access","Verified Access","aws"],["vpc-lattice","VPC Lattice","amazon"]]],["Quantum Technologies","#ed7100",[["braket","Braket","amazon"]]],["Satellite","#c925d1",[["ground-station","Ground Station","aws"]]],["Security","#dd344c",[["audit-manager","Audit Manager","aws"],["signer","AWS Signer","aws"],["certificate-manager","Certificate Manager","aws","acm tls ssl certificates"],["cloud-directory","Cloud Directory","amazon"],["cloudhsm","CloudHSM","aws"],["detective","Detective","amazon"],["directory-service","Directory Service","aws"],["firewall-manager","Firewall Manager","aws"],["guardduty","GuardDuty","amazon"],["iam-identity-center","IAM Identity Center","aws","sso single sign on"],["inspector","Inspector","amazon"],["key-management-service","KMS","aws","encryption keys"],["macie","Macie","amazon"],["network-firewall","Network Firewall","aws"],["payment-cryptography","Payment Cryptography","aws"],["private-certificate-authority","Private Certificate Authority","aws","acm pca ca"],["resource-access-manager","Resource Access Manager","aws"],["secrets-manager","Secrets Manager","aws"],["security-agent","Security Agent","aws"],["security-hub","Security Hub","aws"],["security-incident-response","Security Incident Response","aws"],["security-lake","Security Lake","amazon"],["verified-permissions","Verified Permissions","amazon"]]],["Storage","#7aa116",[["backup","AWS Backup","aws"],["elastic-block-store","EBS","amazon","volume disk"],["efs","EFS","amazon","elastic file system nfs shared"],["elastic-disaster-recovery","Elastic Disaster Recovery","aws"],["file-cache","File Cache","amazon"],["fsx","FSx","amazon"],["fsx-for-lustre","FSx for Lustre","amazon"],["fsx-for-netapp-ontap","FSx for NetApp ONTAP","amazon"],["fsx-for-openzfs","FSx for OpenZFS","amazon"],["fsx-for-wfs","FSx for Windows File Server","amazon"],["simple-storage-service-glacier","S3 Glacier","amazon","archive"],["s3-on-outposts","S3 on Outposts","amazon"],["snowball","Snowball","aws"],["snowball-edge","Snowball Edge","aws"],["storage-gateway","Storage Gateway","aws"]]]],Jp=Zp.flatMap(([i,e,t])=>t.map(([n,s,r,o=""])=>{const a=r?`${r}-${n}`:n,l=`${r} ${n.replaceAll("-"," ")} ${o}`.trim();return[n,s,a,i,l,e]})),Kp=[["lambda","Lambda","AWS-Lambda","Compute","function serverless","#ed7100"],["api-gateway","API Gateway","Amazon-API-Gateway","Networking","api rest http gateway","#8c4fff"],["dynamodb","DynamoDB","Amazon-DynamoDB","Database","nosql key value database","#c925d1"],["s3","S3","Amazon-Simple-Storage-Service","Storage","bucket object storage","#7aa116"],["ec2","EC2","Amazon-EC2","Compute","virtual machine instance vm","#ed7100"],["ecs","ECS","Amazon-Elastic-Container-Service","Compute","containers docker fargate","#ed7100"],["eks","EKS","Amazon-Elastic-Kubernetes-Service","Compute","kubernetes k8s containers","#ed7100"],["ecr","ECR","Amazon-Elastic-Container-Registry","Containers","container registry docker images repository elastic","#ed7100"],["fargate","Fargate","AWS-Fargate","Containers","serverless containers tasks ecs eks","#ed7100"],["rds","RDS","Amazon-RDS","Database","relational postgres mysql database","#c925d1"],["cloudfront","CloudFront","Amazon-CloudFront","Networking","cdn edge cache","#8c4fff"],["route53","Route 53","Amazon-Route-53","Networking","dns domain routing","#8c4fff"],["sqs","SQS","Amazon-Simple-Queue-Service","Integration","queue messaging","#e7157b"],["sns","SNS","Amazon-Simple-Notification-Service","Integration","notification pubsub topic","#e7157b"],["eventbridge","EventBridge","Amazon-EventBridge","Integration","events bus rules","#e7157b"],["elb","Load balancer","Elastic-Load-Balancing","Networking","elb alb nlb load balancing","#8c4fff"],["kinesis-data-streams","Kinesis Data Streams","Amazon-Kinesis-Data-Streams","Analytics","stream ingest real time data pipeline","#8c4fff"],["data-firehose","Data Firehose","Amazon-Data-Firehose","Analytics","kinesis firehose delivery streaming data pipeline","#8c4fff"],["glue-data-catalog","Glue Data Catalog","AWS-Glue-Data-Catalog","Analytics","metadata schema tables catalog data pipeline","#8c4fff"],["athena","Athena","Amazon-Athena","Analytics","sql query analytics s3 data pipeline","#8c4fff"],["sagemaker-ai","SageMaker AI","Amazon-SageMaker-AI","Machine Learning","ml machine learning train recommendations data pipeline unified studio","#01a88d"],["sagemaker-ai-model","SageMaker AI model","Amazon-SageMaker-AI-Model","Machine Learning","ml model inference real time recommendations","#01a88d"],["iam","IAM","AWS-Identity-and-Access-Management","Security","identity access management users groups permissions policies security","#dd344c"],["iam-role","IAM role","AWS-IAM-Role","Security","identity access role assume sts temporary credentials instance profile","#dd344c"],["cognito","Cognito","Amazon-Cognito","Security","identity user pool sign in sign up login auth authentication oauth oidc saml federation","#dd344c"],["waf","WAF","AWS-WAF","Security","web application firewall acl rules bot sql injection xss rate limit","#dd344c"],["shield","Shield","AWS-Shield","Security","ddos protection mitigation advanced edge","#dd344c"]],yh={account:"#e7157b",region:"#00a4a6",vpc:"#8c4fff",zone:"#00a4a6",subnet:"#7aa116"},Qp=new Set(["#f6bd72","#b9a0e4","#82b7df","#a8cf88","#e5a0c0","#a568ce","#ed983c","#548bc4","#cb6186","#79a950","#d9a15f"]),em={"network-acl":"#d9534f",docker:"#2496ed",container:"#326ce5","container-image":"#0d9488","github-actions":"#24292f",git:"#f05032",pipeline:"#7c3aed","internet-gateway":"#8c4fff","nat-gateway":"#c084fc",firewall:"#d97706","route-table":"#059669"},ki=[...["process","decision","terminal"].map(i=>({id:`flow.${i}`,label:i==="process"?"Process":i==="decision"?"Decision":"Start / end",color:"#d9b677",glyph:i==="decision"?"◇":i==="terminal"?"○":"▭",description:i==="decision"?"Branch a flow with a question":i==="terminal"?"Begin or finish a flow":"A step in your flow",category:"Flowchart",aliases:"flow chart shape",kind:"service",shape:i})),...[["docker","Docker","Containers","docker engine whale runtime"],["container","Container","Containers","running container workload"],["container-image","Container image","Containers","oci image artifact registry"],["github-actions","GitHub Actions","DevOps","github actions workflow ci cd automation"],["git","Git repository","DevOps","git source code version control"],["pipeline","CI/CD pipeline","DevOps","build test deploy delivery"],["internet-gateway","Internet gateway","Networking","vpc igw inbound outbound internet"],["nat-gateway","NAT gateway","Networking","vpc nat private egress outbound"],["firewall","Security group","Networking","firewall security ingress egress allow deny"],["network-acl","Network ACL","Networking","nacl network access control list subnet firewall"],["route-table","Route table","Networking","routes routing subnet gateway"]].map(([i,e,t,n])=>({id:`component.${i}`,label:e,category:t,aliases:n,color:em[i]??"#4c9aff",glyph:"◇",description:`${t} · ${e}`,kind:"service",...i==="firewall"?{policyKind:"security-group"}:i==="network-acl"?{policyKind:"network-acl"}:i==="route-table"?{policyKind:"route-table"}:{},asset:`components/${i}.svg`,icon:new URL(Object.assign({"../../assets/components/container-image.svg":Dp,"../../assets/components/container.svg":Lp,"../../assets/components/docker.svg":Np,"../../assets/components/firewall.svg":Up,"../../assets/components/git.svg":kp,"../../assets/components/github-actions.svg":Fp,"../../assets/components/internet-gateway.svg":Op,"../../assets/components/nat-gateway.svg":zp,"../../assets/components/network-acl.svg":Bp,"../../assets/components/pipeline.svg":Gp,"../../assets/components/route-table.svg":Vp})[`../../assets/components/${i}.svg`],import.meta.url).href})),...[["pod","Pod","pod pods workload containers"],["deployment","Deployment","deployment deploy replicas rollout controller"],["service","Service","service svc clusterip discovery load balancing"],["ingress","Ingress","ingress ing http https routing controller"],["namespace","Namespace","namespace ns group boundary scope"]].map(([i,e,t])=>({id:`kubernetes.${i}`,label:e,color:"#326ce5",glyph:i==="namespace"?"▱":"⬡",description:i==="namespace"?"Kubernetes · namespace boundary":`Kubernetes · ${e}`,category:"Kubernetes",aliases:`kubernetes k8s kube ${t}`,kind:i==="namespace"?"group":"service",asset:`kubernetes/${i}.svg`,icon:new URL(Object.assign({"../../assets/kubernetes/deployment.svg":Hp,"../../assets/kubernetes/ingress.svg":Wp,"../../assets/kubernetes/namespace.svg":Xp,"../../assets/kubernetes/pod.svg":$p,"../../assets/kubernetes/service.svg":qp})[`../../assets/kubernetes/${i}.svg`],import.meta.url).href})),...[...Kp,...Jp].map(([i,e,t,n,s,r])=>({id:`aws.${i}`,label:e,color:r,glyph:e==="Lambda"?"λ":e.slice(0,3),description:`AWS · ${n}`,category:n,aliases:s,kind:"service",asset:`aws/${t.toLowerCase()}.svg`,icon:`/diagrams/assets/aws/${t.toLowerCase()}.svg`})),...[["user","User","A person using the system","person customer client human","#3f8cff"],["internet","Internet","Clients on the public internet","web browser clients public","#5a6b86"]].map(([i,e,t,n,s])=>({id:`actor.${i}`,label:e,color:s,glyph:i==="user"?"☺":"◍",description:t,category:"Actors",aliases:`actor ${n}`,kind:"service",asset:`actors/${i}.svg`,icon:new URL(Object.assign({"../../assets/actors/internet.svg":jp,"../../assets/actors/user.svg":Yp})[`../../assets/actors/${i}.svg`],import.meta.url).href})),{id:"note.text",label:"Text",color:"#ffffff",glyph:"T",description:"Free text on the board",category:"Annotations",aliases:"text label heading title caption annotation",kind:"text"},{id:"note.sticky",label:"Sticky note",color:"#ffd84d",glyph:"▤",description:"A note pinned to the board",category:"Annotations",aliases:"note sticky comment memo annotation todo",kind:"note"},...["account","region","vpc","zone","subnet"].map(i=>({id:`boundary.${i}`,label:i==="vpc"?"VPC":i==="zone"?"Availability zone":i.charAt(0).toUpperCase()+i.slice(1),color:yh[i],glyph:"▱",description:"Nested architecture boundary",category:"Boundaries",aliases:"group account region vpc availability zone subnet",kind:"group",boundary:i}))],Ka=new Map,Qa=new Map;for(const[i,e]of ki.entries()){Ka.has(e.id)||Ka.set(e.id,i);const t=e.label.toLowerCase();Qa.has(t)||Qa.set(t,i)}function ys(i){const e=Ka.get(i)??1/0,t=Qa.get(i.toLowerCase())??1/0;return ki[Math.min(e,t)]}function tm(i){return ys(i)?.glyph??"◇"}const dd={text:26,note:18};function Wo(i){return i.fontSize??(i.kind==="note"?dd.note:dd.text)}function bh(i,e,t){const n=[];for(const s of i.split(`
`)){let r="";for(const o of s.split(/(\s+)/)){const a=r+o;if(t(a)<=e||!r.trim())for(r=a;t(r)>e&&r.length>1;){let l=r.length-1;for(;l>1&&t(r.slice(0,l))>e;)l--;n.push(r.slice(0,l)),r=r.slice(l)}else n.push(r.trimEnd()),r=o.trimStart()}n.push(r.trimEnd())}return n}function wh(i,e,t,n,s){const r=Math.max(.01,e),o=Math.max(.01,t),a=Math.max(.01,n),l=new Map,c=(x,u)=>{let f=l.get(x);return f===void 0&&(f=s(x,a),l.set(x,f)),f*u/a},d=x=>bh(i,r,u=>c(u,x)),h=(x,u)=>u.length*x*1.28<=o&&u.every(f=>c(f,x)<=r),p=d(a);if(h(a,p))return{size:a,lines:p};let m=0,v=a;for(let x=0;x<16;x++){const u=(m+v)/2;h(u,d(u))?m=u:v=u}return{size:m,lines:d(m)}}function Sh(i,e,t){return Math.max(4,Math.min(400,Wo(i)*Math.min(t.width/e.width,t.depth/e.depth)))}function nm(i,e){const t=i.width*.9,n=Math.min(i.width*.13,i.depth*.25);if(i.wrap)return i.fontSize?{size:i.fontSize,lines:bh(i.label,t,o=>e(o,i.fontSize??n))}:wh(i.label,t,i.depth*.75,n,e);const s=i.label.split(`
`);if(i.fontSize)return{size:i.fontSize,lines:s};const r=Math.max(0,...s.map(o=>e(o,n)));return{size:r>t?n*t/r:n,lines:s}}const Ks={protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"};function Mh(i){if(!i||typeof i!="object"||Array.isArray(i))throw Error("Invalid network settings");return i}function bs(i){const e=i.split(".");if(e.length!==4||e.some(t=>!/^\d{1,3}$/.test(t)||Number(t)>255))throw Error("Enter a valid IPv4 address");return e.reduce((t,n)=>t*256+Number(n)>>>0,0)}function Eh(i){const[e,t,...n]=i.split("/");if(!e||t===void 0||!/^\d{1,2}$/.test(t)||Number(t)>32||n.length)throw Error("Enter a valid IPv4 CIDR");return{address:bs(e),mask:Number(t)===0?0:4294967295<<32-Number(t)>>>0}}function Ah(i){if(typeof i!="number"||!Number.isInteger(i)||i<1||i>65535)throw Error("Port must be 1–65535");return i}function ar(i){const e=Mh(i);if(!["tcp","udp","icmp"].includes(String(e.protocol))||!["ingress","egress"].includes(String(e.direction))||typeof e.sourceIp!="string")throw Error("Invalid journey traffic");return bs(e.sourceIp),{protocol:e.protocol,port:Ah(e.port),sourceIp:e.sourceIp,direction:e.direction}}function Th(i){const e=Mh(i);if(!["allow","deny"].includes(String(e.action))||!["any","tcp","udp","icmp"].includes(String(e.protocol))||!["any","ingress","egress"].includes(String(e.direction)))throw Error("Invalid connection rule");const t={action:e.action,protocol:e.protocol,direction:e.direction};if(e.port!==void 0&&(t.port=Ah(e.port)),e.sourceCidr!==void 0){if(typeof e.sourceCidr!="string")throw Error("Invalid source CIDR");Eh(e.sourceCidr),t.sourceCidr=e.sourceCidr}return t}function Ch(i,e){if(!i)return{allowed:!0,reason:"No traffic restriction"};if(i.action==="deny")return{allowed:!1,reason:"Explicit deny"};if(i.protocol!=="any"&&i.protocol!==e.protocol)return{allowed:!1,reason:`Requires ${i.protocol.toUpperCase()}`};if(i.direction!=="any"&&i.direction!==e.direction)return{allowed:!1,reason:`Requires ${i.direction}`};if(i.port!==void 0&&e.protocol!=="icmp"&&i.port!==e.port)return{allowed:!1,reason:`Requires port ${i.port}`};if(i.sourceCidr){const{address:t,mask:n}=Eh(i.sourceCidr);if((bs(e.sourceIp)&n)!==(t&n))return{allowed:!1,reason:`Source outside ${i.sourceCidr}`}}return{allowed:!0,reason:"Traffic allowed"}}const go=i=>{if(!i||typeof i!="object"||Array.isArray(i))throw Error("Expected network settings object");return i};function lr(i,e){const[t,n,...s]=i.split("/");if(!t||n===void 0||!/^\d{1,2}$/.test(n)||Number(n)>32||s.length)throw Error("Invalid IPv4 CIDR");const r=Number(n)===0?0:4294967295<<32-Number(n)>>>0;return(bs(t)&r)===(bs(e)&r)}function pi(i){if(typeof i!="string"||!i||i.length>4e3)throw Error("Invalid network value");return i}function Rh(i){if(!Array.isArray(i)||i.length>2e3)throw Error("Invalid network list");return i.map(pi)}function ud(i){if(typeof i!="number"||!Number.isInteger(i)||i<0||i>65535)throw Error("Invalid port range");return i}function Ph(i){const e=go(i);if(!["aws","compose","generic"].includes(String(e.model)))throw Error("Invalid network model");const t={model:e.model};for(const n of["ip","publicIp"])e[n]!==void 0&&(t[n]=pi(e[n]),bs(t[n]));if(e.cidr!==void 0&&(t.cidr=pi(e.cidr),lr(t.cidr,"0.0.0.0")),e.exposure!==void 0){if(!["public","private","unknown"].includes(String(e.exposure)))throw Error("Invalid public address setting");t.exposure=e.exposure}for(const n of["securityGroupIds","networkIds","incomplete"])e[n]!==void 0&&(t[n]=Rh(e[n]));for(const n of["routeTableId","networkAclId"])e[n]!==void 0&&(t[n]=pi(e[n]));return t}function Ih(i){const e=go(i),t=e.incomplete!==void 0?{incomplete:Rh(e.incomplete)}:{};if(e.kind==="route-table"){if(!Array.isArray(e.routes)||e.routes.length>2e3)throw Error("Invalid routes");return{kind:"route-table",...t,routes:e.routes.map(r=>{const o=go(r),a=pi(o.destination);return lr(a,"0.0.0.0"),{destination:a,target:pi(o.target)}})}}if(e.kind!=="security-group"&&e.kind!=="network-acl")throw Error("Invalid resource policy");if(!Array.isArray(e.rules)||e.rules.length>2e3)throw Error("Invalid firewall rules");const n=new Set,s=e.rules.map(r=>{const o=go(r);if(!["ingress","egress"].includes(String(o.direction))||!["allow","deny"].includes(String(o.action))||!["any","tcp","udp","icmp"].includes(String(o.protocol)))throw Error("Invalid firewall rule");if(e.kind==="security-group"&&o.action!=="allow")throw Error("Security groups only support allow rules");const a={action:o.action,direction:o.direction,protocol:o.protocol};if(o.fromPort!==void 0&&(a.fromPort=ud(o.fromPort)),o.toPort!==void 0&&(a.toPort=ud(o.toPort)),a.fromPort===void 0!=(a.toPort===void 0)||(a.fromPort??0)>(a.toPort??65535))throw Error("Invalid port range");if(o.cidr!==void 0&&(a.cidr=pi(o.cidr),lr(a.cidr,"0.0.0.0")),o.peerGroupId!==void 0&&(a.peerGroupId=pi(o.peerGroupId)),a.cidr&&a.peerGroupId)throw Error("Choose CIDR or security-group peer");if(e.kind==="network-acl"){if(a.peerGroupId||typeof o.priority!="number"||!Number.isInteger(o.priority)||o.priority<1||o.priority>32766)throw Error("ACL rules need a priority from 1–32766 and a CIDR peer");a.priority=o.priority;const l=`${a.direction}:${a.priority}`;if(n.has(l))throw Error("Duplicate ACL priority");n.add(l)}return a});return{kind:e.kind,rules:s,...t}}const Dh=i=>i==="north"||i==="east"||i==="south"||i==="west",el=100;function Rn(i){if(typeof i!="object"||i===null||Array.isArray(i))throw new Error("Expected an object");return Object.fromEntries(Object.entries(i))}const xc=4e3,im=new Set(["service","group","text","note"]);function Mt(i,e){if(typeof i!="string"||i.length>xc)throw new Error(`Invalid ${e}`);return i}function Wi(i){if(typeof i!="number"||!Number.isFinite(i)||Math.abs(i)>1e6)throw new Error("Invalid coordinate");return i}function ps(i){const e=hd(i),t=Rn(JSON.parse(i));if(t.details!==void 0){if(!Array.isArray(t.details)||t.details.length>100)throw Error("Invalid detail diagram library");const s=new Set;e.details=t.details.map(r=>{const o=Rn(r),a=Mt(o.id,"detail ID");if(!a||s.has(a))throw Error("Duplicate detail ID");s.add(a);const l=Rn(o.document);if(l.details!==void 0)throw Error("Detail libraries must be flat");return{id:a,document:hd(JSON.stringify(l))}})}const n=new Set(e.details?.map(s=>s.id));for(const s of[e,...e.details?.map(r=>r.document)??[]])for(const r of s.nodes)if(r.detailId&&!n.has(r.detailId))throw Error("Missing detail diagram");return e}function hd(i){if(i.length>1e7)throw new Error("Document exceeds 10 MB limit");const e=Rn(JSON.parse(i));if(e.version!==1)throw new Error("Unsupported document version");if(!Array.isArray(e.nodes)||!Array.isArray(e.edges)||e.nodes.length>1e4||e.edges.length>3e4)throw new Error("Invalid graph size");const t=e.nodes.map(l=>{const c=Rn(l);if(!im.has(String(c.kind)))throw new Error("Invalid node kind");const d={id:Mt(c.id,"node ID"),kind:c.kind,label:Mt(c.label,"label"),x:Wi(c.x),z:Wi(c.z),width:Wi(c.width),depth:Wi(c.depth),color:Mt(c.color,"color")};if(!d.id||d.width<=0||d.depth<=0||!/^#[0-9a-f]{6}$/i.test(d.color))throw new Error("Invalid node geometry or color");if(c.detailId!==void 0&&(d.detailId=Mt(c.detailId,"detail ID")),c.journeyCaption!==void 0&&(d.journeyCaption=Mt(c.journeyCaption,"journey caption")),c.parentId!==void 0&&(d.parentId=Mt(c.parentId,"parent ID")),c.owner!==void 0){const h=Mt(c.owner,"owner").trim();if(h.length>el)throw Error("Invalid owner");h&&(d.owner=h)}if(c.serviceId!==void 0&&(d.serviceId=Mt(c.serviceId,"service ID")),c.shape!==void 0){if(c.shape!=="process"&&c.shape!=="decision"&&c.shape!=="terminal")throw Error("Invalid flowchart shape");d.shape=c.shape}if(c.boundary!==void 0){if(!["account","region","vpc","zone","subnet"].includes(String(c.boundary)))throw Error("Invalid boundary kind");d.boundary=c.boundary}if(Qp.has(d.color.toLowerCase())){const h=d.serviceId?ys(d.serviceId):void 0;h&&d.kind==="service"?d.color=h.color:d.boundary&&(d.color=yh[d.boundary])}if(c.fontSize!==void 0){const h=Wi(c.fontSize);if(h<4||h>400)throw Error("Invalid font size");d.fontSize=h}if(c.wrap!==void 0){if(typeof c.wrap!="boolean")throw Error("Invalid caption wrapping");c.wrap&&(d.wrap=!0)}if(c.journey!==void 0){const h=Rn(c.journey);if(h.mode==="all"||h.mode==="ask")d.journey={mode:h.mode};else if(h.mode==="fixed")d.journey={mode:"fixed",edge:Mt(h.edge,"branch")};else throw Error("Invalid journey branch mode")}if(c.network!==void 0&&(d.network=Ph(c.network)),c.policy!==void 0&&(d.policy=Ih(c.policy)),c.metadata!==void 0){const h=Rn(c.metadata);d.metadata={};for(const p of["region","environment","resourceName","notes","tags"])h[p]!==void 0&&(d.metadata[p]=Mt(h[p],p))}return d}),n=new Map(t.map(l=>[l.id,l]));if(n.size!==t.length)throw new Error("Duplicate node ID");for(const l of t){const c=new Set([l.id]);let d=l.parentId;for(;d!==void 0;){if(c.has(d))throw new Error("Group cycle");c.add(d);const h=n.get(d);if(!h||h.kind!=="group")throw new Error("Invalid parent group");d=h.parentId}}for(const l of t){const c=(d,h)=>{const p=n.get(d);if(!p||h&&p.policy?.kind!==h)throw Error(`Invalid network resource reference: ${d}`)};for(const d of l.network?.securityGroupIds??[])c(d,"security-group");for(const d of l.network?.networkIds??[])c(d);if(l.network?.routeTableId&&c(l.network.routeTableId,"route-table"),l.network?.networkAclId&&c(l.network.networkAclId,"network-acl"),l.policy?.kind==="route-table")for(const d of l.policy.routes)["local","blackhole"].includes(d.target)||c(d.target);else for(const d of l.policy?.rules??[])d.peerGroupId&&c(d.peerGroupId,"security-group")}const s=new Set,r=e.edges.map(l=>{const c=Rn(l),d={id:Mt(c.id,"edge ID"),source:Mt(c.source,"source"),target:Mt(c.target,"target"),label:Mt(c.label,"label")};if(!d.id||s.has(d.id)||!n.has(d.source)||!n.has(d.target))throw new Error("Invalid edge reference");for(const h of["sourcePort","targetPort"]){const p=c[h];if(p!==void 0){if(p!=="north"&&p!=="east"&&p!=="south"&&p!=="west")throw Error("Invalid named port");d[h]=p}}if(c.relationship!==void 0){if(c.relationship!=="network"&&c.relationship!=="dependency")throw Error("Invalid relationship");d.relationship=c.relationship}if(c.routing!==void 0){if(c.routing!=="horizontal"&&c.routing!=="vertical")throw Error("Invalid routing");d.routing=c.routing}return c.bend!==void 0&&(d.bend=Wi(c.bend)),c.networkRule!==void 0&&(d.networkRule=Th(c.networkRule)),s.add(d.id),d});let o;if(e.scenarios!==void 0){if(!Array.isArray(e.scenarios)||e.scenarios.length>100)throw Error("Invalid scenarios");const l=new Set;o=e.scenarios.map(c=>{const d=Rn(c),h=Mt(d.id,"scenario ID"),p=Mt(d.name,"scenario name");if(!h||!p.trim()||l.has(h))throw Error("Invalid or duplicate scenario");l.add(h);const m={id:h,name:p,traffic:ar(d.traffic)};for(const v of["sourceId","targetId"])d[v]!==void 0&&(m[v]=Mt(d[v],v));return m})}let a;if(e.lanes!==void 0){const l=Rn(e.lanes);if(l.direction!=="right"&&l.direction!=="down")throw Error("Invalid lane direction");if(!Array.isArray(l.order)||l.order.length>1e3)throw Error("Invalid lane order");const c=[];for(const d of l.order){const h=Mt(d,"lane owner");if(h.length>el||c.includes(h))throw Error("Invalid or duplicate lane");c.push(h)}a={direction:l.direction,order:c}}return{version:1,title:Mt(e.title,"title"),...a?{lanes:a}:{},...o?{scenarios:o}:{},nodes:t,edges:r,...e.traffic!==void 0?{traffic:ar(e.traffic)}:{}}}function Ro(i){return`${JSON.stringify(i,null,2)}
`}function zt(i,e){let t=i.x,n=i.z,s=0,r=i.parentId;for(;r!==void 0;){const o=e.get(r);if(!o)throw new Error("Missing parent");t+=o.x,n+=o.z,s+=1,r=o.parentId}return{x:t,z:n,level:s}}function KS(){return{version:1,title:"Serverless application",nodes:[{id:"region",kind:"group",label:"AWS / us-east-1",boundary:"region",x:0,z:0,width:940,depth:900,color:"#00a4a6"},{id:"vpc",kind:"group",label:"Application boundary",boundary:"vpc",x:50,z:10,width:650,depth:720,color:"#8c4fff",parentId:"region"},{id:"gateway",kind:"service",label:"API Gateway",serviceId:"aws.api-gateway",x:-280,z:-110,width:160,depth:100,color:"#8c4fff",parentId:"region"},{id:"lambda",kind:"service",label:"Lambda",serviceId:"aws.lambda",x:-40,z:-80,width:160,depth:100,color:"#ed7100",parentId:"vpc"},{id:"db",kind:"service",label:"DynamoDB",serviceId:"aws.dynamodb",x:190,z:-80,width:160,depth:100,color:"#c925d1",parentId:"vpc"},{id:"queue",kind:"service",label:"SQS",serviceId:"aws.sqs",x:-40,z:310,width:160,depth:100,color:"#e7157b",parentId:"vpc"},{id:"storage",kind:"service",label:"S3",serviceId:"aws.s3",x:190,z:310,width:160,depth:100,color:"#7aa116",parentId:"vpc"}],edges:[{id:"request",source:"gateway",target:"lambda",label:"HTTPS"},{id:"write",source:"lambda",target:"db",label:"Read / write"},{id:"event",source:"lambda",target:"queue",label:"Events"},{id:"archive",source:"queue",target:"storage",label:"Archive"}]}}function sm(){return{version:1,title:"Untitled architecture",nodes:[{id:"function",serviceId:"aws.lambda",kind:"service",label:"Lambda",x:-300,z:0,width:160,depth:100,color:"#ed7100"},{id:"database",serviceId:"aws.dynamodb",kind:"service",label:"DynamoDB",x:300,z:0,width:160,depth:100,color:"#c925d1"}],edges:[{id:"request",source:"function",target:"database",label:"Read / write"}]}}function _c(i,e){const t=structuredClone(i),n=(o,a)=>{o.incomplete??=[],o.incomplete.includes(a)||o.incomplete.push(a)},s=t.network;if(s){for(const o of["securityGroupIds","networkIds"])s[o]&&(s[o]=s[o].flatMap(a=>{const l=e.get(a);return l?[l]:(n(s,`Missing attached resource ${a}`),[])}));for(const o of["networkAclId","routeTableId"])if(s[o]){const a=e.get(s[o]);a?s[o]=a:(n(s,`Missing attached resource ${s[o]}`),delete s[o])}}const r=t.policy;if(r?.kind==="route-table")for(const o of r.routes)["local","blackhole"].includes(o.target)||(o.target=e.get(o.target)??"blackhole");else r&&(r.rules=r.rules.flatMap(o=>{if(!o.peerGroupId)return[o];const a=e.get(o.peerGroupId);return a?[{...o,peerGroupId:a}]:(n(r,`Missing peer security group ${o.peerGroupId}`),[])}));return t}function Lh(i,e){const t=new Map(e.map(s=>[s.id,s])),n=new Map(i.nodes.filter(s=>t.get(s.id)?.value!==null).map(s=>[s.id,s.id]));for(const s of e)s.value&&n.set(s.id,s.id);for(const s of i.nodes){const r=t.get(s.id);if(r?.value===null)continue;const o=r?.value??s,a=_c(o,n);JSON.stringify(o)!==JSON.stringify(a)&&t.set(s.id,{id:s.id,value:a})}return[...t.values()]}function Nh(i,e){const t=new Set(e);for(let n=!0;n;){n=!1;for(const s of i.nodes)s.parentId&&t.has(s.parentId)&&!t.has(s.id)&&(t.add(s.id),n=!0)}return t}function Uh(i,e){const t=Nh(i,e);return{type:"graph",label:"Delete selection",nodes:Lh(i,i.nodes.filter(n=>t.has(n.id)).map(n=>({id:n.id,value:null}))),edges:i.edges.filter(n=>t.has(n.source)||t.has(n.target)).map(n=>({id:n.id,value:null}))}}function rm(i,e,t){const n=new Map(i.nodes.map(h=>[h.id,h])),s=i.nodes.filter(h=>e.has(h.id)&&!kh(h,n,e));if(!s.length)throw Error("Select components to group.");const r=s.map(h=>({node:h,world:zt(h,n)})),o=Math.min(...r.map(({node:h,world:p})=>p.x-h.width/2))-40,a=Math.max(...r.map(({node:h,world:p})=>p.x+h.width/2))+40,l=Math.min(...r.map(({node:h,world:p})=>p.z-h.depth/2))-50,c=Math.max(...r.map(({node:h,world:p})=>p.z+h.depth/2))+50,d={id:t,kind:"group",label:"Group",x:(o+a)/2,z:(l+c)/2,width:a-o,depth:c-l,color:"#d9a15f"};return{type:"graph",label:"Group selection",nodes:[{id:t,value:d},...r.map(({node:h,world:p})=>({id:h.id,value:{...h,parentId:t,x:p.x-d.x,z:p.z-d.z}}))]}}function kh(i,e,t){let n=i.parentId;for(;n;){if(t.has(n))return!0;n=e.get(n)?.parentId}return!1}function om(i,e){const t=new Map(i.nodes.map(r=>[r.id,r])),n=new Set(i.nodes.filter(r=>r.kind==="group"&&e.has(r.id)).map(r=>r.id)),s=i.nodes.flatMap(r=>{if(n.has(r.id))return[{id:r.id,value:null}];if(!r.parentId||!n.has(r.parentId))return[];const o=zt(r,t);let a=t.get(r.parentId)?.parentId;for(;a&&n.has(a);)a=t.get(a)?.parentId;const l=a?t.get(a):void 0,c=l?zt(l,t):{x:0,z:0},d={...r,x:o.x-c.x,z:o.z-c.z};return delete d.parentId,a&&(d.parentId=a),[{id:r.id,value:d}]});return{type:"graph",label:"Ungroup selection",nodes:Lh(i,s),edges:i.edges.filter(r=>n.has(r.source)||n.has(r.target)).map(r=>({id:r.id,value:null}))}}function Fh(i,e){const t=Nh(i,e),n=new Map(i.nodes.map(s=>[s.id,s]));return{version:1,title:"Selection",nodes:i.nodes.filter(s=>t.has(s.id)).map(s=>{const r=_c(s,new Map([...t].map(o=>[o,o])));if(delete r.detailId,!r.parentId||!t.has(r.parentId)){const o=zt(s,n);delete r.parentId,r.x=o.x,r.z=o.z}return r}),edges:i.edges.filter(s=>t.has(s.source)&&t.has(s.target)).map(s=>structuredClone(s))}}function Oh(i,e,t=40){const n=new Map(i.nodes.map(s=>[s.id,e()]));return{type:"graph",label:"Paste selection",nodes:i.nodes.map(s=>{const r=n.get(s.id);if(!r)throw Error("Missing pasted node");const o={..._c(s,n),id:r};if(s.parentId){const a=n.get(s.parentId);a?o.parentId=a:delete o.parentId}else o.x+=t,o.z+=t;return{id:r,value:o}}),edges:i.edges.map(s=>{const r=n.get(s.source),o=n.get(s.target);if(!r||!o)throw Error("Invalid clipboard connection");const a=e();return{id:a,value:{...structuredClone(s),id:a,source:r,target:o}}})}}function am(i,e,t,n){const s=new Map(i.nodes.map(l=>[l.id,l])),r=i.nodes.filter(l=>l.kind!=="group").map(l=>({node:l,p:zt(l,s)})),o=Math.max(220,t+60),a=Math.max(200,n+100);for(let l=0;l<150;l++)for(let c=-l;c<=l;c++)for(let d=-l;d<=l;d++){if(l&&Math.abs(d)!==l&&Math.abs(c)!==l)continue;const h={x:Math.round((e.x+d*o)/10)*10,z:Math.round((e.z+c*a)/10)*10};if(r.every(({node:p,p:m})=>Math.abs(h.x-m.x)>(t+p.width)/2+25||Math.abs(h.z-m.z)>(n+p.depth)/2+90))return h}throw Error("No nearby space for another component. Pan to an empty area.")}function lm(i,e,t){const n=new Map(i.nodes.map(c=>[c.id,c])),s=i.nodes.filter(c=>e.has(c.id)&&!kh(c,n,e)).map(c=>{const d=zt(c,n);return{node:c,x:d.x,z:d.z,minX:d.x-c.width/2,maxX:d.x+c.width/2,minZ:d.z-c.depth/2,maxZ:d.z+c.depth/2}}),r=t==="distribute-x"||t==="distribute-z"?"Distribute selection":"Align selection";if(s.length<2)return{type:"graph",label:r,nodes:[]};const o=new Map,a=c=>Math.min(...s.map(d=>d[c])),l=c=>Math.max(...s.map(d=>d[c]));for(const c of s){const{node:d}=c;let{x:h,z:p}=c;t==="left"&&(h=a("minX")+d.width/2),t==="right"&&(h=l("maxX")-d.width/2),t==="center"&&(h=(a("minX")+l("maxX"))/2),t==="top"&&(p=a("minZ")+d.depth/2),t==="bottom"&&(p=l("maxZ")-d.depth/2),t==="middle"&&(p=(a("minZ")+l("maxZ"))/2),o.set(d.id,{x:h,z:p})}if(t==="distribute-x"||t==="distribute-z"){const c=t==="distribute-x",d=[...s].sort((x,u)=>c?x.x-u.x:x.z-u.z),h=c?l("maxX")-a("minX"):l("maxZ")-a("minZ"),p=d.reduce((x,u)=>x+(c?u.node.width:u.node.depth),0),m=(h-p)/(d.length-1);let v=a(c?"minX":"minZ");for(const x of d){const u=c?x.node.width:x.node.depth,f=v+u/2;o.set(x.node.id,{x:c?f:x.x,z:c?x.z:f}),v+=u+m}}return{type:"graph",label:r,nodes:s.flatMap(({node:c,x:d,z:h})=>{const p=o.get(c.id);return!p||p.x===d&&p.z===h?[]:[{id:c.id,value:{...c,x:Math.round(c.x+p.x-d),z:Math.round(c.z+p.z-h)}}]})}}function zh(i){return i==="group"?[500,320]:i==="text"?[280,60]:i==="note"?[220,170]:[160,100]}const cm=64,dm=.14;function Bh(i){let e=0;for(let t=1;t<i.length;t++){const n=i[t-1],s=i[t];e+=Math.hypot(s.x-n.x,s.z-n.z)}return e}function um(i,e){const n=Bh(i)/(e-1),r=[{...i[0]}];let o=0;for(let a=1;a<i.length&&r.length<e;a++){let l=i[a-1];const c=i[a];let d=Math.hypot(c.x-l.x,c.z-l.z);for(;o+d>=n&&r.length<e;){const h=(n-o)/d;l={x:l.x+h*(c.x-l.x),z:l.z+h*(c.z-l.z)},r.push(l),d=Math.hypot(c.x-l.x,c.z-l.z),o=0}o+=d}for(;r.length<e;)r.push({...i.at(-1)});return r}const fd={process:(i,e)=>Math.abs(Math.max(Math.abs(i),Math.abs(e))-1),terminal:(i,e)=>Math.abs(Math.hypot(i,e)-1),decision:(i,e)=>Math.abs(Math.abs(i)+Math.abs(e)-1)/Math.SQRT2};function hm(i,e=30){const t=i[0],n=i.at(-1);if(!t||!n||i.length<2)return{kind:"none"};let s=1/0,r=-1/0,o=1/0,a=-1/0;for(const g of i)s=Math.min(s,g.x),r=Math.max(r,g.x),o=Math.min(o,g.z),a=Math.max(a,g.z);const l=r-s,c=a-o,d=Math.max(l,c);if(d<e/2)return{kind:"none"};const h=Bh(i);if(!(Math.hypot(n.x-t.x,n.z-t.z)<.3*d&&h>1.25*(l+c)))return{kind:"line",from:{...t},to:{...n}};if(Math.min(l,c)<e||Math.min(l,c)<.15*d)return{kind:"none"};const v=(s+r)/2,x=(o+a)/2,u=um(i,cm);let f;for(const g of Object.keys(fd)){const _=fd[g];let y=0;for(const w of u)y+=_((w.x-v)/(l/2),(w.z-x)/(c/2));y/=u.length,(!f||y<f.error)&&(f={shape:g,error:y})}return!f||f.error>dm?{kind:"none"}:{kind:"shape",shape:f.shape,x:v,z:x,width:l,depth:c}}function fm(i,e){const{state:t,scene:n,notify:s,commit:r,deferInspect:o,updateHeader:a,selectTool:l,openEditor:c,navigateDiagram:d}=i;function h(x,u,f){const g=ki.find(R=>R.kind===x);if(!g)return;const _=crypto.randomUUID(),[y,w]=zh(x),T=R=>n.snapping?Math.round(R/10)*10:R;t.history.execute({type:"insert",node:{id:_,kind:x,serviceId:g.id,label:"",x:T(u+y/2-20),z:T(f),width:y,depth:w,color:g.color}}),o(()=>n.load(t.current)),n.select(_),a(),l("select"),c({kind:"node",id:_},!0)}n.onPlace=h,n.onEditRequest=x=>{const u=x.kind==="node"?t.current.nodes.find(g=>g.id===x.id):void 0,f=t.project.details?.find(g=>g.id===u?.detailId);f?d(f.document):c(x)},n.onResize=x=>{const u=x.flatMap(({id:f,from:g,to:_})=>{const y=t.current.nodes.find(T=>T.id===f);if(!y)return[];const w={...y,..._,...y.kind==="text"||y.kind==="note"?{fontSize:Sh(y,{...y,...g},{...y,..._})}:{}};return Object.assign(y,g),[{id:f,value:w}]});r({type:"graph",label:"Resize component",nodes:u})},n.onMoves=x=>{const u=x.flatMap(f=>{const g=t.current.nodes.find(y=>y.id===f.id);if(!g)return[];const _={...g,...f.to};return Object.assign(g,f.from),[{id:g.id,value:_}]});r({type:"graph",label:"Move selection",nodes:u})},n.onConnect=(x,u,f,g)=>{p(x,u,f,g)&&l("select")};function p(x,u,f,g){if(x===f)return s("Choose a different target component."),!1;const _=crypto.randomUUID(),y={id:_,source:x,target:f,label:""};return u&&(y.sourcePort=u),g&&(y.targetPort=g),r({type:"graph",label:"Connect components",edges:[{id:_,value:y}]}),!0}n.onSketch=x=>{const u=hm(x.points);if(u.kind==="none"){x.points.length<3?n.select(x.from?.id):s("Could not recognise that. Draw a box, diamond or oval, or a line between two components.");return}if(u.kind==="line"){const{from:y,to:w}=x;y&&w&&y.id!==w.id?p(y.id,y.port,w.id,w.port):s("Start and end a line on two different components to connect them.");return}const f=ki.find(y=>y.id===`flow.${u.shape}`);if(!f)return;const g=y=>n.snapping?Math.round(y/10)*10:Math.round(y),_=crypto.randomUUID();t.history.execute({type:"insert",node:{id:_,kind:f.kind,serviceId:f.id,shape:u.shape,label:f.label,x:g(u.x),z:g(u.z),width:Math.max(30,g(u.width)),depth:Math.max(30,g(u.depth)),color:f.color}}),o(()=>n.load(t.current)),n.select(_),a(),s(`${f.label} added. Double-click to rename it.`)},n.onErase=(x,u)=>{const f=Uh(t.current,new Set(x));if(f.type!=="graph")return;const g=new Set(f.edges?.map(y=>y.id)),_=u.filter(y=>!g.has(y)).map(y=>({id:y,value:null}));r({...f,label:"Erase",edges:[...f.edges??[],..._]},[])},O("tool-group").onclick=()=>{try{const x=crypto.randomUUID();r(rm(t.current,t.selectedIds,x),[x])}catch(x){s(String(x))}},O("ungroup").onclick=()=>r(om(t.current,t.selectedIds),[]),O("duplicate").onclick=()=>{const x=Oh(Fh(t.current,t.selectedIds),()=>crypto.randomUUID());r(x,x.type==="graph"?x.nodes?.map(u=>u.id)??[]:[])},n.onContextMenu=(x,u)=>{const f=O("context-menu");for(const g of f.querySelectorAll("[data-multi]"))g.hidden=!!t.selectedEdge||t.selectedIds.size<2;for(const g of f.querySelectorAll("button[data-action]")){const _=g.dataset.action,y=e();g.hidden=t.selectedEdge?_==="edge-active"?!y.active:_==="edge-all-routes"?!y.all:_!=="delete":_==="edge-active"||_==="edge-all-routes"?!0:_==="delete"||_==="duplicate"?!t.selectedIds.size:!1}f.hidden=!1,f.style.left=`${Math.min(x,innerWidth-190)}px`,f.style.top=`${Math.min(u,innerHeight-250)}px`};const m=[["left","Align left edges"],["center","Align centres horizontally"],["right","Align right edges"],["top","Align top edges"],["middle","Align middles"],["bottom","Align bottom edges"],["distribute-x","Distribute horizontally"],["distribute-z","Distribute vertically"]];function v(x){if(t.selectedIds.size<2){s("Select two or more components to align.");return}r(lm(t.current,t.selectedIds,x))}for(const x of document.querySelectorAll("#context-menu [data-align]"))x.onclick=()=>{O("context-menu").hidden=!0,v(x.dataset.align)};for(const x of document.querySelectorAll("#context-menu button[data-action]"))x.onclick=()=>{O("context-menu").hidden=!0,O(x.dataset.action??"fit").click()};return{placeAnnotation:h,align:v,alignments:m}}function pm(i,e,t,n){if(typeof e=="function"?i!==e||!n:!e.has(i))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(i):n?n.value:e.get(i)}function mm(i,e,t,n,s){if(typeof e=="function"?i!==e||!0:!e.has(i))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(i,t),t}var vo;const hn="__TAURI_TO_IPC_KEY__";function gm(i,e=!1){return window.__TAURI_INTERNALS__.transformCallback(i,e)}async function ne(i,e={},t){return window.__TAURI_INTERNALS__.invoke(i,e,t)}class vm{get rid(){return pm(this,vo,"f")}constructor(e){vo.set(this,void 0),mm(this,vo,e)}async close(){return ne("plugin:resources|close",{rid:this.rid})}}vo=new WeakMap;function en(){return!!(globalThis||window).isTauri}var Yt;(function(i){i.WINDOW_RESIZED="tauri://resize",i.WINDOW_MOVED="tauri://move",i.WINDOW_CLOSE_REQUESTED="tauri://close-requested",i.WINDOW_DESTROYED="tauri://destroyed",i.WINDOW_FOCUS="tauri://focus",i.WINDOW_BLUR="tauri://blur",i.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",i.WINDOW_THEME_CHANGED="tauri://theme-changed",i.WINDOW_CREATED="tauri://window-created",i.WEBVIEW_CREATED="tauri://webview-created",i.DRAG_ENTER="tauri://drag-enter",i.DRAG_OVER="tauri://drag-over",i.DRAG_DROP="tauri://drag-drop",i.DRAG_LEAVE="tauri://drag-leave"})(Yt||(Yt={}));async function Gh(i,e){window.__TAURI_EVENT_PLUGIN_INTERNALS__.unregisterListener(i,e),await ne("plugin:event|unlisten",{event:i,eventId:e})}async function Xo(i,e,t){var n;const s=typeof t?.target=="string"?{kind:"AnyLabel",label:t.target}:(n=t?.target)!==null&&n!==void 0?n:{kind:"Any"};return ne("plugin:event|listen",{event:i,target:s,handler:gm(e)}).then(r=>async()=>Gh(i,r))}async function Vh(i,e,t){return Xo(i,n=>{Gh(i,n.id),e(n)},t)}async function Hh(i,e){await ne("plugin:event|emit",{event:i,payload:e})}async function Wh(i,e,t){await ne("plugin:event|emit_to",{target:typeof i=="string"?{kind:"AnyLabel",label:i}:i,event:e,payload:t})}const xm=Object.freeze(Object.defineProperty({__proto__:null,get TauriEvent(){return Yt},emit:Hh,emitTo:Wh,listen:Xo,once:Vh},Symbol.toStringTag,{value:"Module"}));class Xh{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.width=e[0].Logical.width,this.height=e[0].Logical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toPhysical(e){return new Qs(this.width*e,this.height*e)}[hn](){return{width:this.width,height:this.height}}toJSON(){return this[hn]()}}class Qs{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.width=e[0].Physical.width,this.height=e[0].Physical.height):(this.width=e[0].width,this.height=e[0].height):(this.width=e[0],this.height=e[1])}toLogical(e){return new Xh(this.width/e,this.height/e)}[hn](){return{width:this.width,height:this.height}}toJSON(){return this[hn]()}}class Xi{constructor(e){this.size=e}toLogical(e){return this.size instanceof Xh?this.size:this.size.toLogical(e)}toPhysical(e){return this.size instanceof Qs?this.size:this.size.toPhysical(e)}[hn](){return{[`${this.size.type}`]:{width:this.size.width,height:this.size.height}}}toJSON(){return this[hn]()}}class $h{constructor(...e){this.type="Logical",e.length===1?"Logical"in e[0]?(this.x=e[0].Logical.x,this.y=e[0].Logical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toPhysical(e){return new ui(this.x*e,this.y*e)}[hn](){return{x:this.x,y:this.y}}toJSON(){return this[hn]()}}class ui{constructor(...e){this.type="Physical",e.length===1?"Physical"in e[0]?(this.x=e[0].Physical.x,this.y=e[0].Physical.y):(this.x=e[0].x,this.y=e[0].y):(this.x=e[0],this.y=e[1])}toLogical(e){return new $h(this.x/e,this.y/e)}[hn](){return{x:this.x,y:this.y}}toJSON(){return this[hn]()}}class Er{constructor(e){this.position=e}toLogical(e){return this.position instanceof $h?this.position:this.position.toLogical(e)}toPhysical(e){return this.position instanceof ui?this.position:this.position.toPhysical(e)}[hn](){return{[`${this.position.type}`]:{x:this.position.x,y:this.position.y}}}toJSON(){return this[hn]()}}let _m=class xo extends vm{constructor(e){super(e)}static async new(e,t,n){return ne("plugin:image|new",{rgba:Po(e),width:t,height:n}).then(s=>new xo(s))}static async fromBytes(e){return ne("plugin:image|from_bytes",{bytes:Po(e)}).then(t=>new xo(t))}static async fromPath(e){return ne("plugin:image|from_path",{path:e}).then(t=>new xo(t))}async rgba(){return ne("plugin:image|rgba",{rid:this.rid}).then(e=>new Uint8Array(e))}async size(){return ne("plugin:image|size",{rid:this.rid})}};function Po(i){return i==null?null:typeof i=="string"?i:i instanceof _m?i.rid:i}var tl;(function(i){i[i.Critical=1]="Critical",i[i.Informational=2]="Informational"})(tl||(tl={}));class ym{constructor(e){this._preventDefault=!1,this.event=e.event,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}}var pd;(function(i){i.None="none",i.Normal="normal",i.Indeterminate="indeterminate",i.Paused="paused",i.Error="error"})(pd||(pd={}));function _o(){return new qh(window.__TAURI_INTERNALS__.metadata.currentWindow.label,{skip:!0})}async function Qo(){return ne("plugin:window|get_all_windows").then(i=>i.map(e=>new qh(e,{skip:!0})))}const ea=["tauri://created","tauri://error"];class qh{constructor(e,t={}){var n;this.label=e,this.listeners=Object.create(null),t?.skip||ne("plugin:window|create",{options:{...t,parent:typeof t.parent=="string"?t.parent:(n=t.parent)===null||n===void 0?void 0:n.label,label:e}}).then(async()=>this.emit("tauri://created")).catch(async s=>this.emit("tauri://error",s))}static async getByLabel(e){var t;return(t=(await Qo()).find(n=>n.label===e))!==null&&t!==void 0?t:null}static getCurrent(){return _o()}static async getAll(){return Qo()}static async getFocusedWindow(){for(const e of await Qo())if(await e.isFocused())return e;return null}async listen(e,t){return this._handleTauriEvent(e,t)?()=>{const n=this.listeners[e];n.splice(n.indexOf(t),1)}:Xo(e,t,{target:{kind:"Window",label:this.label}})}async once(e,t){return this._handleTauriEvent(e,t)?()=>{const n=this.listeners[e];n.splice(n.indexOf(t),1)}:Vh(e,t,{target:{kind:"Window",label:this.label}})}async emit(e,t){if(ea.includes(e)){for(const n of this.listeners[e]||[])n({event:e,id:-1,payload:t});return}return Hh(e,t)}async emitTo(e,t,n){if(ea.includes(t)){for(const s of this.listeners[t]||[])s({event:t,id:-1,payload:n});return}return Wh(e,t,n)}_handleTauriEvent(e,t){return ea.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}async scaleFactor(){return ne("plugin:window|scale_factor",{label:this.label})}async innerPosition(){return ne("plugin:window|inner_position",{label:this.label}).then(e=>new ui(e))}async outerPosition(){return ne("plugin:window|outer_position",{label:this.label}).then(e=>new ui(e))}async innerSize(){return ne("plugin:window|inner_size",{label:this.label}).then(e=>new Qs(e))}async outerSize(){return ne("plugin:window|outer_size",{label:this.label}).then(e=>new Qs(e))}async isFullscreen(){return ne("plugin:window|is_fullscreen",{label:this.label})}async isMinimized(){return ne("plugin:window|is_minimized",{label:this.label})}async isMaximized(){return ne("plugin:window|is_maximized",{label:this.label})}async isFocused(){return ne("plugin:window|is_focused",{label:this.label})}async isDecorated(){return ne("plugin:window|is_decorated",{label:this.label})}async isResizable(){return ne("plugin:window|is_resizable",{label:this.label})}async isMaximizable(){return ne("plugin:window|is_maximizable",{label:this.label})}async isMinimizable(){return ne("plugin:window|is_minimizable",{label:this.label})}async isClosable(){return ne("plugin:window|is_closable",{label:this.label})}async isVisible(){return ne("plugin:window|is_visible",{label:this.label})}async title(){return ne("plugin:window|title",{label:this.label})}async theme(){return ne("plugin:window|theme",{label:this.label})}async isAlwaysOnTop(){return ne("plugin:window|is_always_on_top",{label:this.label})}async center(){return ne("plugin:window|center",{label:this.label})}async requestUserAttention(e){let t=null;return e&&(e===tl.Critical?t={type:"Critical"}:t={type:"Informational"}),ne("plugin:window|request_user_attention",{label:this.label,value:t})}async setResizable(e){return ne("plugin:window|set_resizable",{label:this.label,value:e})}async setEnabled(e){return ne("plugin:window|set_enabled",{label:this.label,value:e})}async isEnabled(){return ne("plugin:window|is_enabled",{label:this.label})}async setMaximizable(e){return ne("plugin:window|set_maximizable",{label:this.label,value:e})}async setMinimizable(e){return ne("plugin:window|set_minimizable",{label:this.label,value:e})}async setClosable(e){return ne("plugin:window|set_closable",{label:this.label,value:e})}async setTitle(e){return ne("plugin:window|set_title",{label:this.label,value:e})}async maximize(){return ne("plugin:window|maximize",{label:this.label})}async unmaximize(){return ne("plugin:window|unmaximize",{label:this.label})}async toggleMaximize(){return ne("plugin:window|toggle_maximize",{label:this.label})}async minimize(){return ne("plugin:window|minimize",{label:this.label})}async unminimize(){return ne("plugin:window|unminimize",{label:this.label})}async show(){return ne("plugin:window|show",{label:this.label})}async hide(){return ne("plugin:window|hide",{label:this.label})}async close(){return ne("plugin:window|close",{label:this.label})}async destroy(){return ne("plugin:window|destroy",{label:this.label})}async setDecorations(e){return ne("plugin:window|set_decorations",{label:this.label,value:e})}async setShadow(e){return ne("plugin:window|set_shadow",{label:this.label,value:e})}async setEffects(e){return ne("plugin:window|set_effects",{label:this.label,value:e})}async clearEffects(){return ne("plugin:window|set_effects",{label:this.label,value:null})}async setAlwaysOnTop(e){return ne("plugin:window|set_always_on_top",{label:this.label,value:e})}async setAlwaysOnBottom(e){return ne("plugin:window|set_always_on_bottom",{label:this.label,value:e})}async setContentProtected(e){return ne("plugin:window|set_content_protected",{label:this.label,value:e})}async setSize(e){return ne("plugin:window|set_size",{label:this.label,value:e instanceof Xi?e:new Xi(e)})}async setMinSize(e){return ne("plugin:window|set_min_size",{label:this.label,value:e instanceof Xi?e:e?new Xi(e):null})}async setMaxSize(e){return ne("plugin:window|set_max_size",{label:this.label,value:e instanceof Xi?e:e?new Xi(e):null})}async setSizeConstraints(e){function t(n){return n?{Logical:n}:null}return ne("plugin:window|set_size_constraints",{label:this.label,value:{minWidth:t(e?.minWidth),minHeight:t(e?.minHeight),maxWidth:t(e?.maxWidth),maxHeight:t(e?.maxHeight)}})}async setPosition(e){return ne("plugin:window|set_position",{label:this.label,value:e instanceof Er?e:new Er(e)})}async setFullscreen(e){return ne("plugin:window|set_fullscreen",{label:this.label,value:e})}async setSimpleFullscreen(e){return ne("plugin:window|set_simple_fullscreen",{label:this.label,value:e})}async setFocus(){return ne("plugin:window|set_focus",{label:this.label})}async setFocusable(e){return ne("plugin:window|set_focusable",{label:this.label,value:e})}async setIcon(e){return ne("plugin:window|set_icon",{label:this.label,value:Po(e)})}async setSkipTaskbar(e){return ne("plugin:window|set_skip_taskbar",{label:this.label,value:e})}async setCursorGrab(e){return ne("plugin:window|set_cursor_grab",{label:this.label,value:e})}async setCursorVisible(e){return ne("plugin:window|set_cursor_visible",{label:this.label,value:e})}async setCursorIcon(e){return ne("plugin:window|set_cursor_icon",{label:this.label,value:e})}async setBackgroundColor(e){return ne("plugin:window|set_background_color",{color:e})}async setCursorPosition(e){return ne("plugin:window|set_cursor_position",{label:this.label,value:e instanceof Er?e:new Er(e)})}async setIgnoreCursorEvents(e){return ne("plugin:window|set_ignore_cursor_events",{label:this.label,value:e})}async startDragging(){return ne("plugin:window|start_dragging",{label:this.label})}async startResizeDragging(e){return ne("plugin:window|start_resize_dragging",{label:this.label,value:e})}async setBadgeCount(e){return ne("plugin:window|set_badge_count",{label:this.label,value:e})}async setBadgeLabel(e){return ne("plugin:window|set_badge_label",{label:this.label,value:e})}async setOverlayIcon(e){return ne("plugin:window|set_overlay_icon",{label:this.label,value:e?Po(e):void 0})}async setProgressBar(e){return ne("plugin:window|set_progress_bar",{label:this.label,value:e})}async setVisibleOnAllWorkspaces(e){return ne("plugin:window|set_visible_on_all_workspaces",{label:this.label,value:e})}async setTitleBarStyle(e){return ne("plugin:window|set_title_bar_style",{label:this.label,value:e})}async setTheme(e){return ne("plugin:window|set_theme",{label:this.label,value:e})}async onResized(e){return this.listen(Yt.WINDOW_RESIZED,t=>{t.payload=new Qs(t.payload),e(t)})}async onMoved(e){return this.listen(Yt.WINDOW_MOVED,t=>{t.payload=new ui(t.payload),e(t)})}async onCloseRequested(e){return this.listen(Yt.WINDOW_CLOSE_REQUESTED,async t=>{const n=new ym(t);await e(n),n.isPreventDefault()||await this.destroy()})}async onDragDropEvent(e){const t=await this.listen(Yt.DRAG_ENTER,o=>{e({...o,payload:{type:"enter",paths:o.payload.paths,position:new ui(o.payload.position)}})}),n=await this.listen(Yt.DRAG_OVER,o=>{e({...o,payload:{type:"over",position:new ui(o.payload.position)}})}),s=await this.listen(Yt.DRAG_DROP,o=>{e({...o,payload:{type:"drop",paths:o.payload.paths,position:new ui(o.payload.position)}})}),r=await this.listen(Yt.DRAG_LEAVE,o=>{e({...o,payload:{type:"leave"}})});return()=>{t(),s(),n(),r()}}async onFocusChanged(e){const t=await this.listen(Yt.WINDOW_FOCUS,s=>{e({...s,payload:!0})}),n=await this.listen(Yt.WINDOW_BLUR,s=>{e({...s,payload:!1})});return()=>{t(),n()}}async onScaleChanged(e){return this.listen(Yt.WINDOW_SCALE_FACTOR_CHANGED,e)}async onThemeChanged(e){return this.listen(Yt.WINDOW_THEME_CHANGED,e)}}var md;(function(i){i.Disabled="disabled",i.Throttle="throttle",i.Suspend="suspend"})(md||(md={}));var gd;(function(i){i.Default="default",i.FluentOverlay="fluentOverlay"})(gd||(gd={}));var vd;(function(i){i.AppearanceBased="appearanceBased",i.Light="light",i.Dark="dark",i.MediumLight="mediumLight",i.UltraDark="ultraDark",i.Titlebar="titlebar",i.Selection="selection",i.Menu="menu",i.Popover="popover",i.Sidebar="sidebar",i.HeaderView="headerView",i.Sheet="sheet",i.WindowBackground="windowBackground",i.HudWindow="hudWindow",i.FullScreenUI="fullScreenUI",i.Tooltip="tooltip",i.ContentBackground="contentBackground",i.UnderWindowBackground="underWindowBackground",i.UnderPageBackground="underPageBackground",i.Mica="mica",i.Blur="blur",i.Acrylic="acrylic",i.Tabbed="tabbed",i.TabbedDark="tabbedDark",i.TabbedLight="tabbedLight"})(vd||(vd={}));var xd;(function(i){i.FollowsWindowActiveState="followsWindowActiveState",i.Active="active",i.Inactive="inactive"})(xd||(xd={}));function jh(i,e,t=new Set){const n=[...i].sort(),s=new Set(n),r=w=>[...e.get(w)??[]].filter(T=>s.has(T)&&T!==w).sort(),o=new Map(n.map(w=>[w,0]));for(const w of n)for(const T of r(w))o.set(T,(o.get(T)??0)+1);const a=[...n.filter(w=>!o.get(w)),...n.filter(w=>t.has(w)),...n],l=new Map,c=new Map(n.map(w=>[w,[]]));for(const w of a){if(l.has(w))continue;const T=[{id:w,targets:r(w)}];for(l.set(w,"open");T.length;){const R=T[T.length-1];if(!R)break;const b=R.targets.shift();if(b===void 0){l.set(R.id,"done"),T.pop();continue}l.get(b)!=="open"&&(c.get(R.id)?.push(b),l.has(b)||(l.set(b,"open"),T.push({id:b,targets:r(b)})))}}const d=new Map(n.map(w=>[w,0])),h=new Map(n.map(w=>[w,0]));for(const w of c.values())for(const T of w)h.set(T,(h.get(T)??0)+1);const p=n.filter(w=>!h.get(w));for(let w=0;w<p.length;w++){const T=p[w];for(const R of c.get(T)??[])d.set(R,Math.max(d.get(R)??0,(d.get(T)??0)+1)),h.set(R,(h.get(R)??0)-1),h.get(R)||p.push(R)}const m=Math.max(0,...d.values()),v=Array.from({length:m+1},()=>[]);for(const w of n)v[d.get(w)??0]?.push({id:w,virtual:!1});const x=new Map,u=new Map,f=(w,T)=>{u.set(w,[...u.get(w)??[],T]),x.set(T,[...x.get(T)??[],w])};for(const[w,T]of c)for(const R of T){const b=d.get(w)??0,E=d.get(R)??0;let M=w;for(let A=b+1;A<E;A++){const k=`\0${w}\0${R}\0${A}`;v[A]?.push({id:k,virtual:!0}),f(M,k),M=k}f(M,R)}const g=new Map,_=w=>{for(const[T,R]of w.entries())g.set(R.id,T)},y=(w,T)=>{const R=w.map((b,E)=>{const M=(T.get(b.id)??[]).map(A=>g.get(A)).filter(A=>A!==void 0);return{slot:b,key:M.length?M.reduce((A,k)=>A+k,0)/M.length:E}});R.sort((b,E)=>b.key-E.key||(b.slot.id<E.slot.id?-1:1)),w.splice(0,w.length,...R.map(b=>b.slot)),_(w)};for(const w of v)_(w);for(const w of v.slice(1))y(w,x);for(const w of v.slice(0,-1).reverse())y(w,u);for(const w of v.slice(1))y(w,x);return{layers:v,up:x,down:u}}function bm({layers:i,up:e,down:t},n,s){const r=new Map,o=(a,l)=>{for(const c of a){const d=c.map(n),h=c.map(m=>{const v=l.get(m.id)??[],x=v.filter(f=>f.startsWith("\0")),u=(x.length===1?x:v).map(f=>r.get(f)).filter(f=>f!==void 0);return u.length?u.reduce((f,g)=>f+g,0)/u.length:void 0}),p=wm(d,h,c.map(m=>m.virtual?1e3:l.get(m.id)?.length??0),s,c.map(m=>r.get(m.id)));for(const[m,v]of c.entries())r.set(v.id,p[m]??0)}};return o(i,e),o([...i].reverse(),t),o(i,e),r}function wm(i,e,t,n,s){const r=i.length,o=m=>((i[m-1]??0)+(i[m]??0))/2+n,a=e.filter(m=>m!==void 0),l=a.length?a.reduce((m,v)=>m+v,0)/a.length:0,c=i.reduce((m,v)=>m+v,0)+n*Math.max(0,r-1),d=[];let h=l-c/2;for(let m=0;m<r;m++)d.push(s[m]??h+(i[m]??0)/2),h+=(i[m]??0)+n;for(let m=1;m<r;m++)d[m]=Math.max(d[m]??0,(d[m-1]??0)+o(m));const p=[...Array(r).keys()].sort((m,v)=>(t[v]??0)-(t[m]??0)||m-v);for(const m of p){const v=e[m],x=t[m]??0;if(v!==void 0)if(v>(d[m]??0)){let u=Number.POSITIVE_INFINITY,f=0;for(let g=m+1;g<r;g++)if(f+=o(g),(t[g]??0)>=x){u=(d[g]??0)-f;break}d[m]=Math.min(v,u);for(let g=m+1;g<r;g++)d[g]=Math.max(d[g]??0,(d[g-1]??0)+o(g))}else{let u=Number.NEGATIVE_INFINITY,f=0;for(let g=m-1;g>=0;g--)if(f+=o(g+1),(t[g]??0)>=x){u=(d[g]??0)+f;break}d[m]=Math.max(v,u);for(let g=m-1;g>=0;g--)d[g]=Math.min(d[g]??0,(d[g+1]??0)-o(g+1))}}return d}const _d=120,yd=120,bd=70,wd=70,$i=i=>Math.ceil(i/10)*10,Sm=200;function Mm(i,e="right",t="packed"){const n=structuredClone(i),s=e==="down",r=m=>s?m.depth:m.width,o=m=>s?m.width:m.depth,a=(m,v,x)=>{m.x=$i(s?x:v),m.z=$i(s?v:x)},l=new Map(n.nodes.map(m=>[m.id,m])),c=new Map;for(const m of n.nodes){const v=c.get(m.parentId)??[];v.push(m),c.set(m.parentId,v)}const d=(m,v)=>{let x=l.get(m);const u=new Set;for(;x&&x.parentId!==v;){if(u.has(x.id))throw Error("Layout cannot contain a boundary cycle");u.add(x.id),x=x.parentId?l.get(x.parentId):void 0}return x?.id},h=new Set,p=m=>{const v=c.get(m?.id)??[];if(m){if(h.has(m.id))throw Error("Boundary cycle");h.add(m.id)}for(const L of v)L.kind==="group"&&p(L);if(!v.length){m&&h.delete(m.id);return}const x=new Map(v.map(L=>[L.id,new Set])),u=new Map(v.map(L=>[L.id,0])),f=new Set;for(const L of n.edges){const F=d(L.source,m?.id),U=d(L.target,m?.id);!F&&U&&f.add(U),F&&U&&F!==U&&!x.get(F)?.has(U)&&(x.get(F)?.add(U),u.set(U,(u.get(U)??0)+1))}const g=new Map(v.map(L=>[L.id,0])),_=v.filter(L=>!u.get(L.id)).map(L=>L.id).sort(),y=new Set;for(let L=0;L<_.length;L++){const F=_[L];if(F){y.add(F);for(const U of x.get(F)??[])g.set(U,Math.max(g.get(U)??0,(g.get(F)??0)+1)),u.set(U,(u.get(U)??0)-1),u.get(U)||_.push(U)}}const w=Math.max(0,...g.values())+1;for(const L of v)y.has(L.id)||g.set(L.id,w);const T=new Map;for(const L of v){const F=g.get(L.id)??0,U=T.get(F)??[];U.push(L),T.set(F,U)}const R=t==="flow"?Sm:s?yd:_d,b=s?_d:yd;let E=0,M=0;const A=[...T].sort((L,F)=>L[0]-F[0]);if(t==="flow"){const L=new Map(v.map(se=>[se.id,se])),F=60,U=se=>{const te=se.virtual?void 0:L.get(se.id);return te?o(te):F},z=jh(v.map(se=>se.id),x,f),Z=bm(z,U,b);let j=Number.POSITIVE_INFINITY,de=Number.NEGATIVE_INFINITY;for(const se of z.layers)for(const te of se){const Ae=Z.get(te.id)??0;j=Math.min(j,Ae-U(te)/2),de=Math.max(de,Ae+U(te)/2)}M=Number.isFinite(j)?de-j:0;for(const se of z.layers){const te=se.flatMap(Qe=>{const tt=Qe.virtual?void 0:L.get(Qe.id);return tt?[tt]:[]}),Ae=Math.max(0,...te.map(r));for(const Qe of te)a(Qe,E+Ae/2,(Z.get(Qe.id)??0)-j);E+=Ae+R}}for(const[,L]of t==="flow"?[]:A){L.sort((Z,j)=>Z.id.localeCompare(j.id));const F=Math.max(1,Math.ceil(Math.sqrt(L.length))),U=Math.max(...L.map(r));let z=0;for(let Z=0;Z<L.length;Z+=F){const j=L.slice(Z,Z+F),de=Math.max(...j.map(o));for(const[se,te]of j.entries())a(te,E+se*(U+R)+U/2,z+de/2);z+=de+b}E+=F*(U+R),M=Math.max(M,z-b)}const k=s?M:E-R,N=s?E-R:M;for(const L of v)L.x=$i(L.x-k/2),L.z=$i(L.z-N/2+wd/2);m&&(m.width=$i(k+bd*2),m.depth=$i(N+bd*2+wd),h.delete(m.id))};p();for(const m of n.edges)delete m.bend,delete m.sourcePort,delete m.targetPort,delete m.routing;return n}function Em(i,e="right",t="packed"){const n=Mm(i,e,t);return{type:"graph",label:"Automatic layout",nodes:n.nodes.map(s=>({id:s.id,value:s})),edges:n.edges.map(s=>({id:s.id,value:s}))}}const yc=320,ms=70,Am=200,Sd=60,Md=i=>Math.round(i/10)*10,cr=i=>i.owner??"",nl=i=>i||"Unassigned",Io=i=>i.nodes.filter(e=>e.parentId===void 0&&e.kind!=="text"&&e.kind!=="note");function Yh(i,e=Io(i).map(cr)){const t=new Set(Io(i).map(cr)),n=(i.lanes?.order??[]).filter(s=>t.has(s)&&s);for(const s of e)s&&t.has(s)&&!n.includes(s)&&n.push(s);return t.has("")&&n.push(""),n}function Tm(i,e){const t=e==="down",n=_=>t?_.depth:_.width,s=_=>t?_.width:_.depth,r=Io(i),o=new Map(i.nodes.map(_=>[_.id,_])),a=_=>{let y=o.get(_);const w=new Set;for(;y?.parentId!==void 0&&!w.has(y.id);)w.add(y.id),y=o.get(y.parentId);return y?.id},l=new Map(r.map(_=>[_.id,new Set]));for(const _ of i.edges){const y=a(_.source),w=a(_.target);y&&w&&y!==w&&l.get(y)?.add(w)}const{layers:c}=jh(r.map(_=>_.id),l),d=c.map(_=>_.flatMap(y=>{const w=y.virtual?void 0:o.get(y.id);return w?[w]:[]})),h=Yh(i,d.flat().map(_=>cr(_))),p=new Map;let m=yc;for(const _ of d){const y=Math.max(0,..._.map(n));for(const w of _)p.set(w.id,m+y/2);m+=y+Am}const v=new Map;let x=0;for(const _ of h){const y=d.map(R=>R.filter(b=>cr(b)===_)),w=y.map(R=>R.reduce((b,E)=>b+s(E),0)+Sd*Math.max(0,R.length-1)),T=Math.max(100,...w);for(const[R,b]of y.entries()){let E=x+ms+(T-(w[R]??0))/2;for(const M of b)v.set(M.id,E+s(M)/2),E+=s(M)+Sd}x+=T+ms*2}const u=m/2,f=x/2,g=new Map;for(const _ of r){const y=(p.get(_.id)??0)-u,w=(v.get(_.id)??0)-f;g.set(_.id,{x:Md(t?w:y),z:Md(t?y:w)})}return{positions:g,order:h}}function $s(i,e,t,n=[]){const{positions:s,order:r}=Tm(i,e),o=[],a=new Set(n.map(c=>c.id));for(const c of i.nodes){const d=s.get(c.id);(d&&(d.x!==c.x||d.z!==c.z)||a.has(c.id))&&o.push({id:c.id,value:{...c,...d??{}}})}const l=i.edges.filter(c=>c.bend!==void 0||c.sourcePort!==void 0||c.targetPort!==void 0||c.routing!==void 0).map(c=>{const d={...c};return delete d.bend,delete d.sourcePort,delete d.targetPort,delete d.routing,{id:c.id,value:d}});return{type:"graph",label:t,nodes:o,edges:l,lanes:{direction:e,order:r}}}function Cm(i){return i.lanes?$s(i,i.lanes.direction,"Arrange lanes"):Em(i)}function Zh(i){const e=i.lanes;if(!e)return;const t=e.direction==="down",n=Io(i);if(!n.length)return;const s=c=>t?c.z:c.x,r=c=>t?c.x:c.z,o=c=>t?c.depth:c.width,a=c=>t?c.width:c.depth,l=[];for(const c of Yh(i)){const d=n.filter(h=>cr(h)===c);d.length&&l.push({owner:c,start:Math.min(...d.map(h=>r(h)-a(h)/2))-ms,end:Math.max(...d.map(h=>r(h)+a(h)/2))+ms})}l.sort((c,d)=>c.start-d.start);for(let c=1;c<l.length;c++){const d=l[c-1],h=l[c];d.end<=h.start&&(d.end=h.start=(d.end+h.start)/2)}return{direction:e.direction,bands:l,from:Math.min(...n.map(c=>s(c)-o(c)/2))-yc+ms,to:Math.max(...n.map(c=>s(c)+o(c)/2))+ms}}function Rm(i,e){const t=i.direction==="down"?e.x:e.z;return i.bands.find(n=>t>=n.start&&t<n.end)?.owner}class Pm{constructor(e,t,n,s=750,r=5e3){this.snapshot=e,this.write=t,this.onError=n,this.delay=s,this.maxWait=r}snapshot;write;onError;delay;maxWait;debounce;deadline;pending=!1;queue=Promise.resolve();schedule(){this.pending=!0,clearTimeout(this.debounce),this.debounce=setTimeout(()=>{this.flush().catch(()=>{})},this.delay),this.deadline??=setTimeout(()=>{this.flush().catch(()=>{})},this.maxWait)}flush(){if(clearTimeout(this.debounce),clearTimeout(this.deadline),this.debounce=void 0,this.deadline=void 0,this.pending){this.pending=!1;const e=this.snapshot();this.queue=this.queue.then(()=>this.write(e)).catch(n=>{throw this.pending=!0,this.onError(n),n});const t=this.queue;return this.queue=t.catch(()=>{}),t}return this.queue}dispose(){clearTimeout(this.debounce),clearTimeout(this.deadline)}}function il(){return en()}async function Im(){if(en())return ne("open_document");const[i]=await Jh(".json,application/json",!1);if(!i)return null;if(i.size>5e7)throw Error("Diagram files are limited to 50 MB");return{name:i.name,content:await i.text()}}async function Dm(i,e,t="diagram"){if(en())return ne("save_document",{content:i,handle:e??null});const n=`${Gm(t)}.sforge.json`;return Rs(new Blob([i],{type:"application/json"}),n),{name:n}}async function Lm(i){return en()?ne("export_png",{bytes:Array.from(new Uint8Array(await i.arrayBuffer()))}):Rs(i,"diagram.png")}async function Nm(i){return en()?ne("export_svg",{content:i}):Rs(new Blob([i],{type:"image/svg+xml"}),"diagram.svg")}const sl="solar-forge-diagrams:recovery";async function Um(){if(en())return ne("read_recovery");try{return localStorage.getItem(sl)}catch{return null}}async function ta(i){if(en()){await ne("write_recovery",{content:i});return}i===null?localStorage.removeItem(sl):localStorage.setItem(sl,i)}async function km(i){if(en()){await ne("copy_png",{bytes:Array.from(new Uint8Array(await i.arrayBuffer()))});return}await navigator.clipboard.write([new ClipboardItem({"image/png":i})])}async function Fm(i){return en()?ne("export_gif",await i.arrayBuffer()):Rs(i,"journey.gif")}async function Om(){if(en())return ne("open_infrastructure");const i=await Jh(".mmd,.mermaid,.tf,.json,.yaml,.yml",!0);if(i.length>256||i.reduce((e,t)=>e+t.size,0)>5e7)throw Error("Choose up to 256 files totaling at most 50 MB");return Promise.all(i.map(async e=>({name:e.name,content:await e.text()})))}function Jh(i,e){return new Promise(t=>{const n=document.createElement("input");n.type="file",n.multiple=e,n.accept=i,n.onchange=()=>{t(Array.from(n.files??[])),n.remove()},n.oncancel=()=>{t([]),n.remove()},n.hidden=!0,document.body.append(n),n.click()})}async function zm(i,e){return en()?ne("export_video",await i.arrayBuffer()):Rs(i,`journey.${e}`)}async function Bm(i,e){return en()?ne("export_text",{content:i,format:e}):Rs(new Blob([i],{type:"text/plain;charset=utf-8"}),`diagram.${e}`)}function Gm(i){return i.trim().replace(/[\\/:*?"<>|\p{Cc}]+/gu,"-").replace(/\s+/g," ").slice(0,100)||"diagram"}function Rs(i,e){const t=URL.createObjectURL(i),n=document.createElement("a");return n.href=t,n.download=e,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3),!0}function Ed(i,e,t){return new Promise(n=>{const s=document.createElement("dialog");s.className="decision-dialog";const r=document.createElement("h2");r.textContent=i,r.id="dialog-title";const o=document.createElement("p");o.textContent=e;const a=document.createElement("div");a.className="dialog-actions";for(const l of t){const c=document.createElement("button");c.textContent=l,c.onclick=()=>s.close(l),a.append(c)}s.append(r,o,a),s.setAttribute("aria-labelledby",r.id),s.addEventListener("close",()=>{n(s.returnValue||null),s.remove()},{once:!0}),document.body.append(s),s.showModal()})}function Vm(i,e){return new Promise(t=>{const n=document.createElement("dialog");n.className="decision-dialog";const s=document.createElement("h2");s.textContent=i;const r=document.createElement("form");r.method="dialog";const o=document.createElement("input");o.value=e,o.maxLength=1e3,o.setAttribute("aria-label",i);const a=document.createElement("button");a.textContent="Cancel",a.type="button",a.onclick=()=>n.close();const l=document.createElement("button");l.textContent="Rename",l.type="submit";const c=document.createElement("div");c.className="dialog-actions",c.append(a,l),r.append(o,c),r.onsubmit=()=>{n.returnValue=o.value},n.append(s,r),document.body.append(n),n.onclose=()=>{t(n.returnValue||null),n.remove()},n.showModal(),o.focus(),o.select()})}function Hm(i){const e=document.createElement("dialog");e.className="decision-dialog command-palette",e.setAttribute("aria-label","Command palette");const t=document.createElement("input");t.type="search",t.placeholder="Search commands or components…",t.setAttribute("aria-label","Search commands");const n=document.createElement("div");n.className="command-results";const s=()=>{n.replaceChildren();for(const r of i.filter(o=>o.label.toLowerCase().includes(t.value.toLowerCase())).slice(0,30)){const o=document.createElement("button");o.textContent=r.label,o.onclick=()=>{e.close(),r.run()},n.append(o)}};t.oninput=s,e.onkeydown=r=>{const o=[...n.querySelectorAll("button")],a=document.activeElement instanceof HTMLButtonElement?o.indexOf(document.activeElement):-1;(r.key==="ArrowDown"||r.key==="ArrowUp")&&(r.preventDefault(),o[(a+(r.key==="ArrowDown"?1:o.length-1)+o.length)%o.length]?.focus()),r.key==="Enter"&&document.activeElement===t&&(r.preventDefault(),o[0]?.click())},e.append(t,n),e.onclose=()=>e.remove(),document.body.append(e),s(),e.showModal(),t.focus()}function Wm(i,e,t){return t?.aborted?Promise.reject(new DOMException("Import cancelled","AbortError")):new Promise((n,s)=>{const r=new Worker(new URL("/diagrams/assets/import-worker-C7VS5kVF.js",import.meta.url),{type:"module"});function o(){r.terminate(),t?.removeEventListener("abort",a)}function a(){o(),s(new DOMException("Import cancelled","AbortError"))}t?.addEventListener("abort",a,{once:!0}),r.onmessage=l=>{o(),l.data.result?n(l.data.result):s(Error(l.data.error??"Import worker returned no diagram"))},r.onerror=l=>{o(),s(Error(l.message||"Infrastructure import worker failed"))},r.onmessageerror=()=>{o(),s(Error("Could not read infrastructure import result"))};try{r.postMessage({files:i,requested:e})}catch(l){o(),s(l)}})}const Xm=/^(sequenceDiagram|classDiagram(-v2)?|stateDiagram(-v2)?|erDiagram|journey|gantt|pie|gitGraph|mindmap|timeline|quadrantChart|requirementDiagram|C4\w+|sankey(-beta)?|xychart(-beta)?|block(-beta)?|packet(-beta)?|kanban|architecture(-beta)?)\b/,$m=/^(flowchart|graph)\b(?:\s+(TB|TD|BT|LR|RL))?\s*;?\s*$/i;function qm(i){const e=jm(i)[0]??"";return $m.test(e)||Xm.test(e)}function jm(i){const e=i.replace(/\r\n?/g,`
`).split(`
`);if(e[0]?.trim()==="---"){const t=e.findIndex((n,s)=>s>0&&n.trim()==="---");t>0&&e.splice(0,t+1)}return e.map(t=>t.trim()).filter(t=>t&&!t.startsWith("%%"))}function Ym(i){const e=document.createElement("section");e.className="workspace-dialog",e.hidden=!0,e.setAttribute("aria-label","Import a diagram"),e.innerHTML='<div class="dialog-heading"><h2>Import</h2><button data-close aria-label="Close import">×</button></div><p>Choose a Mermaid flowchart, .tf files together, or a Terraform JSON, CloudFormation, or Compose file. Files stay on this computer; code is never executed.</p><label>Format<select data-format><option value="auto">Detect format</option><option value="terraform">Terraform HCL / show JSON</option><option value="cloudformation">CloudFormation YAML / JSON</option><option value="compose">Docker Compose</option><option value="mermaid">Mermaid flowchart</option></select></label><button data-files>Choose files…</button><p data-names>No files selected</p><label>Or paste Mermaid or infrastructure code<textarea data-source rows="9" spellcheck="false" placeholder="Paste a Mermaid flowchart or infrastructure code; use Format to select Terraform for pasted HCL"></textarea></label><button data-preview>Preview import</button><div data-summary role="status"></div><ul data-warnings></ul><div class="dialog-actions"><button data-apply disabled>Import diagram</button></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),n=g=>{const _=e.querySelector(g);if(!_)throw Error("Missing importer control");return _},s=n("[data-source]"),r=n("[data-format]"),o=n("[data-apply]"),a=n("[data-summary]"),l=n("[data-warnings]");let c=[],d,h=!1,p,m=0;const v=()=>{m++,p?.abort(),p=void 0,n("[data-preview]").disabled=!1,d=void 0,o.disabled=!0,a.textContent="",l.replaceChildren()},x=g=>{a.textContent=String(g),i.notify(String(g))};s.oninput=()=>{c=[],n("[data-names]").textContent="Pasted code",v()},r.onchange=v;const u=async()=>{if(h)return;v();const g=new AbortController;p=g;const _=m;n("[data-preview]").disabled=!0,a.textContent="Reading infrastructure…";try{const y=s.value.trim()?[{name:r.value==="mermaid"||r.value==="auto"&&qm(s.value)?"pasted.mmd":(r.value==="terraform"||r.value==="auto"&&/^\s*(resource|provider|variable|terraform|locals)\b/m.test(s.value))&&!s.value.trimStart().startsWith("{")?"pasted.tf":"pasted.yaml",content:s.value}]:c,w=await Wm(y,r.value,g.signal);if(g.signal.aborted||_!==m)return;d=w;const T=d.format==="Mermaid flowchart",R=d.document.nodes.filter(E=>E.kind!=="group").length,b=d.document.nodes.length-R;a.textContent=`${d.format} · ${R} ${T?"shapes":"resources"} · ${b} ${T?"groups":"boundaries"} · ${T?`${d.document.edges.length} connections · `:""}${d.warnings.length} warnings. Import replaces the current board with an automatically laid out diagram; Undo restores it.`;for(const E of d.warnings.slice(0,200)){const M=document.createElement("li");M.textContent=E,l.append(M)}if(d.warnings.length>200){const E=document.createElement("li");E.textContent="Additional warnings omitted from this preview.",l.append(E)}o.disabled=!1}catch(y){!g.signal.aborted&&_===m&&x(y)}finally{p===g&&(p=void 0,n("[data-preview]").disabled=!1)}};n("[data-files]").onclick=()=>{h||(async()=>{try{const g=await Om();if(!g.length)return;c=g,s.value="",n("[data-names]").textContent=c.map(_=>_.name).join(", "),await u()}catch(g){x(g)}})()},n("[data-preview]").onclick=()=>{u()},o.onclick=()=>{!d||h||(h=!0,i.apply(d.document).then(g=>{g&&(e.hidden=!0,t&&(t.inert=!1))}).catch(x).finally(()=>{h=!1}))};const f=()=>{h||(v(),e.hidden=!0,t&&(t.inert=!1))};return n("[data-close]").onclick=f,e.addEventListener("keydown",g=>{g.stopPropagation(),g.key==="Escape"&&(g.stopPropagation(),f())}),{open:()=>{e.hidden=!1,t&&(t.inert=!0),r.focus()},close:f}}function Zm(i,e){const{state:t,scene:n,notify:s,commit:r,action:o,replaceDocument:a,updateHeader:l}=i,c=new Pm(()=>t.history.isDirty?Ro(t.project):null,ta,u=>s(`Recovery failed: ${String(u)}. Save your diagram.`));async function d(){if(il())try{const u=await ne("recent_documents"),f=O("recent-files");if(f.replaceChildren(),!u.length){const g=document.createElement("p");g.className="muted",g.textContent="No recent diagrams yet",f.append(g)}for(const g of u){const _=document.createElement("button");_.textContent=g.name,_.title=g.path,_.onclick=()=>{o(async()=>{if(!await p())return;const y=await ne("open_recent",{path:g.path});a(ps(y.content)),t.fileHandle=y.handle,O("file-menu").hidden=!0,s(`Opened ${y.name}`),await d()})},f.append(_)}}catch(u){s(`Recent files unavailable: ${String(u)}`)}}O("title").onclick=()=>{o(async()=>{const u=await Vm("Diagram name",t.current.title);u&&r({type:"graph",label:"Rename diagram",title:u})})};for(const u of["examples","browse-examples"])O(u).onclick=()=>{o(async()=>{O("file-menu").hidden=!0,O("menu").setAttribute("aria-expanded","false");const{chooseExample:f}=await jn(async()=>{const{chooseExample:_}=await import("./examples-C1ZP7GYa.js");return{chooseExample:_}},[]),g=await f();!g||!await p()||(a(g.create()),s(`Loaded ${g.name}`))})};O("export-svg").onclick=()=>{o(async()=>{const{exportSvg:u}=await jn(async()=>{const{exportSvg:f}=await import("./svg-D9F1wtVS.js");return{exportSvg:f}},[]);await Nm(await u(t.current,e()))&&s("SVG exported")})};for(const[u,f]of[["export-mermaid","mmd"],["export-plantuml","puml"],["export-drawio","drawio"]])O(u).onclick=()=>{o(async()=>{const{exportInterchange:g}=await jn(async()=>{const{exportInterchange:y}=await import("./interchange-D1Ai7DFv.js");return{exportInterchange:y}},[]),_=g(f==="drawio"?t.project:t.current,f);await Bm(_,f)&&s(`Exported ${f==="drawio"?"draw.io project":"diagram source"}`),O("file-menu").hidden=!0})};async function h(u=!1){n.finishInteraction();const f=t.history,g=t.history.token,_=await Dm(Ro(t.project),u?void 0:t.fileHandle,t.project.title);return _?(t.history===f&&(t.fileHandle=_.handle),f.markSaved(g),l(),await c.flush(),s(`Saved ${_.name}`),d(),!t.history.isDirty):!1}async function p(){if(n.finishInteraction(),!t.history.isDirty)return!0;const u=await Ed("Save your changes?","This diagram has unsaved changes.",["Cancel","Discard changes","Save"]);return u==="Save"?h():u==="Discard changes"}const m=Ym({notify:s,apply:async u=>{const f=new Map(t.current.nodes.map(_=>[_.id,{id:_.id,value:null}]));for(const _ of u.nodes)f.set(_.id,{id:_.id,value:_});const g=new Map(t.current.edges.map(_=>[_.id,{id:_.id,value:null}]));for(const _ of u.edges)g.set(_.id,{id:_.id,value:_});return r({type:"graph",label:"Import diagram",title:u.title,nodes:[...f.values()],edges:[...g.values()]},[]),n.fit(),!0}});O("import-infrastructure").onclick=()=>{O("file-menu").hidden=!0,m.open()},O("auto-layout").onclick=()=>{r(Cm(t.current)),n.fit(),O("file-menu").hidden=!0},O("new").onclick=()=>{o(async()=>{await p()&&(a({version:1,title:"Untitled diagram",nodes:[],edges:[]}),O("file-menu").hidden=!0)})},O("open").onclick=()=>{O("file-menu").hidden=!0,o(async()=>{if(!await p())return;const u=await Im();u!==null&&(a(ps(u.content)),t.fileHandle=u.handle,s(`Opened ${u.name}`),d())})};for(const u of["save","save-as"])O(u).onclick=()=>{O("file-menu").hidden=!0,o(async()=>{await h(u==="save-as")})};O("export").onclick=()=>{O("file-menu").hidden=!0,o(async()=>{await Lm(await n.png())&&s("PNG exported")})},O("quick-save").onclick=()=>O("save").click();async function v(){try{s("Capturing diagram…"),await km(await n.captureDiagram()),s("Diagram image copied · paste it anywhere")}catch(u){s(`Could not copy image: ${u instanceof Error?u.message:String(u)}`)}}O("copy-image").onclick=()=>{v()},O("quick-export").onclick=()=>O("export").click();async function x(){const u=il();if(u){if(await ne("diagnostic_mode")){const{runNativeDiagnostics:y}=await jn(async()=>{const{runNativeDiagnostics:w}=await import("./diagnostics-CMvTrXpk.js");return{runNativeDiagnostics:w}},[]);await y(n);return}let _=!1;await _o().onCloseRequested(y=>{y.preventDefault(),!(_||t.busy)&&(_=!0,(async()=>{await p()&&(t.recoveryReady&&(await c.flush(),await ta(null)),c.dispose(),await _o().destroy())})().catch(w=>s(`Could not close: ${String(w)}`)).finally(()=>{_=!1}))})}const f=await Um();if(f){const _=await Ed("Recover your diagram?","An unsaved diagram was found from a previous session.",u?["Close app","Discard recovery","Recover"]:["Discard recovery","Recover"]);if(_==="Recover")a(ps(f)),t.history.markSaved(-1),l(),s("Recovered diagram. Save to choose a destination.");else if(_==="Discard recovery")await ta(null);else if(u){await _o().destroy();return}}if(t.recoveryReady=!0,window.addEventListener("blur",()=>{t.history.isDirty&&(c.schedule(),c.flush().catch(()=>{}))}),!u)return;await d();const g=async()=>{if(t.busy)return;const _=await ne("take_pending_file");_&&await o(async()=>{await p()&&(a(ps(_.content)),t.fileHandle=_.handle,s(`Opened ${_.name}`),await d())})};await Xo("pending-file",()=>{g().catch(_=>s(String(_)))}),await g()}return{canReplace:p,copyImage:v,scheduleRecovery:()=>{t.recoveryReady&&c.schedule()},start:x}}function Kh(i,e){const t=i.edges.filter(l=>l.relationship!=="dependency"),n=new Set(t.map(l=>l.source)),s=new Set(t.map(l=>l.target));if(e&&n.has(e))return[e];const r=i.nodes.filter(l=>l.serviceId?.startsWith("actor.")&&n.has(l.id));if(r.length)return r.map(l=>l.id);const o=i.nodes.filter(l=>n.has(l.id)&&!s.has(l.id));if(o.length)return o.map(l=>l.id);const a=t[0]?.source;return a?[a]:[]}function bc(i,e){const t=i.edges.filter(r=>r.source===e&&r.relationship!=="dependency").map(r=>r.id),n=i.nodes.find(r=>r.id===e);if(!n||t.length<2)return{mode:"all",edges:t};const s=n.journey??{mode:n.shape==="decision"?"ask":"all"};return s.mode==="fixed"?t.includes(s.edge)?{mode:"fixed",edges:[s.edge]}:{mode:"ask",edges:t}:{mode:s.mode,edges:t}}function Jm(i){const e=new Set;for(const t of i.nodes){if(t.journey?.mode!=="fixed")continue;const{mode:n,edges:s}=bc(i,t.id);if(n==="fixed")for(const r of i.edges)r.source===t.id&&!s.includes(r.id)&&e.add(r.id)}for(let t=e.size>0;t;){t=!1;for(const n of i.nodes){const s=i.edges.filter(r=>r.target===n.id);if(!(!s.length||!s.every(r=>e.has(r.id))))for(const r of i.edges)r.source===n.id&&!e.has(r.id)&&(e.add(r.id),t=!0)}}return e}function rl(i,e){const t=i.edges.find(s=>s.id===e);if(!t)return"Connection";const n=i.nodes.find(s=>s.id===t.target)?.label??"";return t.label?`${t.label} → ${n}`:`→ ${n}`}const Gn=i=>({status:"allowed",reason:i}),qt=i=>({status:"denied",reason:i}),wt=i=>({status:"unknown",reason:i});function si(i,e,t){let n=e;const s=new Set;for(;n&&!s.has(n.id);){if(n.boundary===t)return n;s.add(n.id),n=n.parentId?i.get(n.parentId):void 0}}function Ad(i,e,t,n,s,r){return i.direction!==e||i.protocol!=="any"&&i.protocol!==t.protocol||t.protocol!=="icmp"&&i.protocol!=="any"&&i.fromPort!==void 0&&(n<i.fromPort||n>(i.toPort??i.fromPort))?!1:i.peerGroupId?r.includes(i.peerGroupId):i.cidr?i.cidr.endsWith("/0")?!0:s?lr(i.cidr,s):void 0:!0}const Qh=i=>new Map(i.nodes.map(e=>[e.id,e]));function Do(i,e,t,n,s=49152,r=Qh(i)){const o=r.get(e),a=r.get(t),l=[];let c=[e,t];const d=R=>({...R,path:c,checks:l});if(!o||!a)return d(wt("Source or destination no longer exists"));if(e===t)return d(Gn("Same resource"));if(!o.network&&!a.network)return d(wt("Enable resource networking; diagram arrows alone do not establish reachability"));const h=si(r,o,"vpc"),p=si(r,a,"vpc"),m=si(r,o,"subnet"),v=si(r,a,"subnet"),x=o.network?.ip??(h?void 0:n.sourceIp),u=a.network?.ip??a.network?.publicIp,f=(R,b,E,M,A=!0)=>{const k=R.network?.securityGroupIds;if(!k?.length)return R.network?.model==="aws"&&!R.policy&&!R.serviceId?.startsWith("component.")?wt(`${R.label}: security groups are not modeled`):Gn(`${R.label}: no security-group restriction modeled`);let N=!1;for(const L of k){const F=r.get(L),U=F?.policy;if(F?.network?.incomplete?.length){N=!0;continue}if(!U||U.kind!=="security-group"){N=!0;continue}N||=!!U.incomplete?.length;for(const z of U.rules){const Z=Ad(z,b,n,n.port,M,A?E.network?.securityGroupIds??[]:[]);if(Z)return Gn(`${R.label}: ${b} allowed by ${r.get(L)?.label}`);Z===void 0&&(N=!0)}}return N?wt(`${R.label}: incomplete ${b} security-group rules or peer address`):qt(`${R.label}: no ${b} security-group allow rule`)};if(o.network?.model==="compose"&&a.network?.model==="compose"){if(o.network.incomplete?.length||a.network.incomplete?.length)return d(wt("Compose network attachments are incomplete"));const R=(o.network.networkIds??[]).filter(E=>a.network?.networkIds?.includes(E));if(!R.length)return d(qt("Containers have no shared network"));c=[e,R[0]??"",t];const b=[f(o,"egress",a,u),f(a,"ingress",o,x)];return l.push("Containers share a Compose network",...b.map(E=>`${E.status}: ${E.reason}`)),d(b.find(E=>E.status==="denied")??b.find(E=>E.status==="unknown")??Gn("Shared Compose network and attached policies allow traffic"))}const g=(R,b,E,M,A)=>{if(!R?.network?.networkAclId)return Gn(`${R?.label??"External network"}: no ACL restriction modeled (default allow assumed)`);const k=r.get(R.network.networkAclId),N=k?.policy;if(!N||N.kind!=="network-acl"||N.incomplete?.length||k?.network?.incomplete?.length)return wt(`${R.label}: incomplete network ACL`);for(const L of[...N.rules].sort((F,U)=>(F.priority??0)-(U.priority??0))){const F=Ad(L,b,n,M,E,[]);if(F===void 0)return wt(`${R.label}: ACL peer address unknown`);if(F)return(L.action==="allow"?Gn:qt)(`${R.label}: ${A?"return ":""}${b} ACL rule ${L.priority} ${L.action}`)}return qt(`${R.label}: ${A?"return ":""}${b} ACL implicit deny`)},_=(R,b,E,M=new Set)=>{if(M.has(R.id))return{check:qt("Routing loop"),path:[R.id]};M.add(R.id);const A=si(r,R,"vpc"),k=si(r,R,"subnet");if(!b)return{check:wt("Destination IPv4 address is unknown"),path:[R.id,E.id]};if(A&&!A.network?.cidr)return{check:wt("VPC CIDR is missing; the implicit local route cannot be resolved"),path:[R.id,E.id]};const N=k?.network?.routeTableId?r.get(k.network.routeTableId):void 0;if(N?.policy?.incomplete?.length||N?.network?.incomplete?.length)return{check:wt(`Incomplete routes in ${N.label}`),path:[R.id,E.id]};const L=N?.policy?.kind==="route-table"?[...N.policy.routes]:[];A?.network?.cidr&&L.push({destination:A.network.cidr,target:"local"});const F=L.filter(z=>lr(z.destination,b)).sort((z,Z)=>Number(Z.destination.split("/")[1])-Number(z.destination.split("/")[1]))[0];if(!F)return{check:A?qt(`${k?.label??A.label}: no route to ${b}`):wt("External routing is not modeled"),path:[R.id,E.id]};if(l.push(`${k?.label??R.label}: longest-prefix route ${F.destination} → ${F.target}`),F.target==="blackhole")return{check:qt("Route is a blackhole"),path:[R.id,E.id]};if(F.target==="local")return A?.id!==si(r,E,"vpc")?.id?{check:qt("Local route does not reach the destination VPC"),path:[R.id,E.id]}:{check:Gn("Local VPC route"),path:[R.id,E.id]};const U=r.get(F.target);if(!U)return{check:wt("Route target missing"),path:[R.id,E.id]};if(U.network?.incomplete?.length)return{check:wt(`Incomplete gateway settings: ${U.label}`),path:[R.id,U.id,E.id]};if(U.serviceId==="component.internet-gateway")return si(r,U,"vpc")?.id!==A?.id?{check:qt("Internet gateway is not attached to this VPC"),path:[R.id,U.id,E.id]}:{check:Gn("Internet gateway route"),path:[R.id,U.id,E.id]};if(U.serviceId==="component.nat-gateway"){const z=_(U,b,E,M);return z.check.status!=="allowed"?{check:z.check,path:[R.id,...z.path]}:z.path.some(Z=>r.get(Z)?.serviceId==="component.internet-gateway")?{check:z.check,path:[R.id,...z.path]}:{check:qt("NAT has no onward internet-gateway route"),path:[R.id,...z.path]}}return{check:wt(`Unsupported route target: ${U.label}`),path:[R.id,U.id,E.id]}},y=[];if([o,a,m,v,h,p].some(R=>R?.network?.incomplete?.length)&&y.push(wt("Resource network contains unresolved infrastructure values")),(o.network?.model==="aws"&&!h||a.network?.model==="aws"&&!p)&&y.push(wt("An AWS endpoint has no modeled VPC/subnet placement")),!h&&p){a.network?.exposure==="private"?y.push(qt("Destination has no public address; internet ingress cannot use NAT")):a.network?.exposure!=="public"&&!a.network?.publicIp&&y.push(wt("Destination public-address assignment is unknown"));const R=_(a,x,o);c=[e,...R.path.slice(1,-1).reverse(),t],y.push(R.check),R.check.status==="allowed"&&!R.path.some(b=>r.get(b)?.serviceId==="component.internet-gateway")&&y.push(qt("Public ingress needs an internet-gateway return route")),R.path.some(b=>r.get(b)?.serviceId==="component.nat-gateway")&&y.push(qt("NAT does not allow unsolicited public ingress"))}else if(h){const R=_(o,u,a);c=R.path,y.push(R.check),p&&h.id===p.id&&y.push(_(a,x,o).check),p&&h.id!==p.id&&y.push(wt("Cross-VPC routing is not supported")),!p&&c.some(b=>r.get(b)?.serviceId==="component.internet-gateway")&&!c.some(b=>r.get(b)?.serviceId==="component.nat-gateway")&&o.network?.exposure!=="public"&&!o.network?.publicIp&&y.push((o.network?.exposure==="private"?qt:wt)("Internet-gateway egress requires a public address or NAT"))}else y.push(wt("No supported network topology between these resources"));const w=c.find(R=>r.get(R)?.serviceId==="component.nat-gateway"),T=w?r.get(w)?.network?.publicIp:x;return y.push(f(o,"egress",a,u),f(a,"ingress",o,T,!w)),(!m||m.id!==v?.id)&&y.push(g(m,"egress",u,n.port,!1),g(v,"ingress",T,n.port,!1),g(v,"egress",T,s,!0),g(m,"ingress",u,s,!0)),l.push(...y.map(R=>`${R.status}: ${R.reason}`)),d(y.find(R=>R.status==="denied")??y.find(R=>R.status==="unknown")??Gn("Routes, security groups, and request/return ACL rules allow this modeled flow"))}const ol=[{id:"public-https",name:"Public HTTPS",traffic:{protocol:"tcp",port:443,sourceIp:"203.0.113.10",direction:"ingress"}},{id:"office-ssh",name:"SSH from office",traffic:{protocol:"tcp",port:22,sourceIp:"198.51.100.10",direction:"ingress"}},{id:"worker-egress",name:"Worker egress",traffic:{protocol:"tcp",port:443,sourceIp:"10.0.10.10",direction:"egress"}}],jt=(i,e)=>{const t=document.createElement(i);return e&&(t.textContent=e),t},Td=(i,e)=>{i.replaceChildren(...e.map(t=>{const n=jt("option",t.label);return n.value=t.id,n}))};function Km(i){const e=jt("section");e.className="workspace-dialog reachability-dialog",e.hidden=!0,e.setAttribute("aria-label","Reachability matrix"),e.innerHTML='<div class="dialog-heading"><h2>Can A reach B?</h2><button data-close aria-label="Close reachability">×</button></div><p>Static IPv4 reachability from the modeled routes, security groups and subnet ACLs. Security-group replies are stateful; ACL replies use the source port. Missing addresses and unsupported constructs produce Unknown. Unassigned ACLs assume default allow. External routing is assumed available after a valid internet-gateway route.</p><label>Traffic scenario<select data-scenario><option value="">Custom traffic</option></select></label><div class="reachability-controls"><label>Protocol<select data-protocol><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Destination port<input data-port type="number" min="1" max="65535" value="443"></label><label>Source port for ACL replies<input data-source-port type="number" min="1" max="65535" value="49152"></label><label>Source IPv4 fallback for external actors<input data-ip value="203.0.113.10"></label><label>From<select data-source></select></label><label>To<select data-target></select></label></div><div class="dialog-actions"><button data-check>Check flow</button><button data-build>Refresh matrix</button></div><div data-result role="status"></div><button data-play disabled>Trace journey</button><details><summary>Decision details</summary><ol data-checks></ol></details><hr><label>Filter resources<input data-filter placeholder="Name or resource ID"></label><div class="matrix-pages"><button data-rows-prev>Previous sources</button><button data-rows-next>Next sources</button><button data-cols-prev>Previous destinations</button><button data-cols-next>Next destinations</button></div><p data-page></p><div class="matrix-scroll" data-matrix></div>',document.body.append(e),e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const t=document.getElementById("app"),n=M=>{const A=e.querySelector(M);if(!A)throw Error("Missing reachability control");return A},s=n("[data-scenario]");s.onchange=()=>{const M=(i.document().scenarios??ol).find(A=>A.id===s.value);M&&(a.value=M.traffic.protocol,l.value=String(M.traffic.port),c.value=M.traffic.sourceIp,M.sourceId&&(r.value=M.sourceId),M.targetId&&(o.value=M.targetId),b(),R())};const r=n("[data-source]"),o=n("[data-target]"),a=n("[data-protocol]"),l=n("[data-port]"),c=n("[data-ip]"),d=n("[data-source-port]"),h=n("[data-filter]"),p=n("[data-matrix]"),m=n("[data-result]"),v=n("[data-checks]"),x=n("[data-play]");let u,f=0,g=0;const _=()=>i.document().nodes.filter(M=>M.kind==="service"&&!M.policy&&!["component.internet-gateway","component.nat-gateway","component.route-table","component.firewall","component.network-acl"].includes(M.serviceId??"")),y=()=>{const M=Number(d.value);if(!Number.isInteger(M)||M<1||M>65535)throw Error("Source port must be 1–65535");return{traffic:ar({protocol:a.value,port:Number(l.value),sourceIp:c.value.trim(),direction:"ingress"}),sourcePort:M}},w=M=>{u=M,m.textContent=`${M.status.toUpperCase()} · ${M.reason}`,m.className=`reachability-result ${M.status}`;const A=i.document();v.replaceChildren(jt("li",`Path: ${M.path.map(k=>A.nodes.find(N=>N.id===k)?.label??k).join(" → ")}`),...M.checks.map(k=>jt("li",k))),x.disabled=M.status==="unknown"||M.path.length<2||M.path[0]===M.path[M.path.length-1]},T=M=>{m.textContent=String(M),u=void 0,x.disabled=!0},R=()=>{try{const M=y();w(Do(i.document(),r.value,o.value,M.traffic,M.sourcePort))}catch(M){T(M)}},b=()=>{try{const M=y(),A=_().filter(te=>`${te.label} ${te.id}`.toLowerCase().includes(h.value.toLowerCase())),k=12,N=Math.max(1,Math.ceil(A.length/k));f=Math.min(f,N-1),g=Math.min(g,N-1);const L=i.document(),F=Qh(L),U=A.slice(f*k,(f+1)*k),z=A.slice(g*k,(g+1)*k),Z=jt("table"),j=jt("tr");j.append(jt("th","Source → destination"));for(const te of z)j.append(jt("th",te.label));const de=jt("thead");de.append(j),Z.append(de);const se=jt("tbody");for(const te of U){const Ae=jt("tr"),Qe=jt("th",te.label);Qe.scope="row",Ae.append(Qe);for(const tt of z){const J=jt("td"),oe=Do(L,te.id,tt.id,M.traffic,M.sourcePort,F),le=jt("button",oe.status==="allowed"?"Allowed":oe.status==="denied"?"Denied":"Unknown");le.className=oe.status,le.title=oe.reason,le.setAttribute("aria-label",`${te.label} to ${tt.label}: ${oe.status}`),le.onclick=()=>{r.value=te.id,o.value=tt.id,w(oe)},J.append(le),Ae.append(J)}se.append(Ae)}Z.append(se),p.replaceChildren(Z),n("[data-page]").textContent=`${A.length} resources · source page ${f+1}/${N} · destination page ${g+1}/${N}. Rows and columns page independently.`,n("[data-rows-prev]").disabled=f===0,n("[data-cols-prev]").disabled=g===0,n("[data-rows-next]").disabled=f+1===N,n("[data-cols-next]").disabled=g+1===N}catch(M){T(M)}};n("[data-check]").onclick=R,n("[data-build]").onclick=b;for(const[M,A]of[["[data-rows-prev]",()=>f--],["[data-rows-next]",()=>f++],["[data-cols-prev]",()=>g--],["[data-cols-next]",()=>g++]])n(M).onclick=()=>{A(),b()};h.oninput=()=>{f=g=0,b()};for(const M of[a,l,d,c,r,o])M.onchange=()=>{u=void 0,x.disabled=!0,m.textContent="Parameters changed. Refresh the matrix or check a flow.",p.replaceChildren()};x.onclick=()=>{u&&(i.play(u),e.hidden=!0,t&&(t.inert=!1))};const E=()=>{e.hidden=!0,t&&(t.inert=!1)};return n("[data-close]").onclick=E,e.addEventListener("keydown",M=>{M.stopPropagation(),M.key==="Escape"&&(M.stopPropagation(),E())}),{close:E,open:()=>{const M=i.document(),A=M.traffic??Ks;s.replaceChildren(new Option("Custom traffic",""),...(M.scenarios??ol).map(k=>new Option(k.name,k.id))),a.value=A.protocol,l.value=String(A.port),c.value=A.sourceIp,Td(r,_()),Td(o,_()),o.selectedIndex=Math.min(1,o.options.length-1),f=g=0,e.hidden=!1,t&&(t.inert=!0),b()}}}function Qm(i){const{state:e,scene:t,notify:n,commit:s}=i,r=Km({document:()=>e.current,play:m=>{e.checkedJourney={path:m.path,allowed:m.status==="allowed"},t.playJourney([m.path[0]??""],{path:m.path,allowed:m.status==="allowed"}),O("journey").setAttribute("aria-pressed","true"),n(`${m.status.toUpperCase()} · ${m.reason} · P or Esc to stop`)}});O("reachability").onclick=()=>{O("file-menu").hidden=!0,r.open()};function o(){return e.current.scenarios??ol}function a(){const m=O("traffic-scenario"),v=m.value;m.replaceChildren(new Option("Choose a scenario…",""),...o().map(x=>new Option(x.name,x.id))),m.value=v;for(const x of["scenario-source","scenario-target"]){const u=O(x),f=u.value;u.replaceChildren(new Option("Not set",""),...e.current.nodes.filter(g=>g.kind==="service").map(g=>new Option(g.label,g.id))),u.value=f}}function l(){return ar({protocol:fe("traffic-protocol").value,port:Number(fe("traffic-port").value),sourceIp:fe("traffic-source").value.trim(),direction:fe("traffic-direction").value})}fe("traffic-scenario").onchange=()=>{const m=o().find(v=>v.id===fe("traffic-scenario").value);if(m){fe("scenario-name").value=m.name;for(const[v,x]of[["sourceId","scenario-source"],["targetId","scenario-target"]]){const u=O(x),f=m[v];f&&![...u.options].some(g=>g.value===f)&&u.add(new Option(`Missing resource: ${f}`,f)),u.value=f??""}fe("traffic-protocol").value=m.traffic.protocol,fe("traffic-port").value=String(m.traffic.port),fe("traffic-source").value=m.traffic.sourceIp,fe("traffic-direction").value=m.traffic.direction}},O("scenario-save").onclick=()=>{try{const m=fe("scenario-name").value.trim();if(!m)throw Error("Give the scenario a name");const x=fe("traffic-scenario").value||crypto.randomUUID(),u=o().filter(f=>f.id!==x);if(u.length>=100)throw Error("A diagram supports up to 100 scenarios");u.push({id:x,name:m,traffic:l(),...fe("scenario-source").value?{sourceId:fe("scenario-source").value}:{},...fe("scenario-target").value?{targetId:fe("scenario-target").value}:{}}),s({type:"scenarios",scenarios:u}),a(),fe("traffic-scenario").value=x,n(`Saved scenario ${m}`)}catch(m){n(String(m))}},O("scenario-delete").onclick=()=>{const m=fe("traffic-scenario").value;m&&(s({type:"scenarios",scenarios:o().filter(v=>v.id!==m)}),a())},O("scenario-use").onclick=()=>{try{const m=l(),v=fe("scenario-source").value,x=fe("scenario-target").value;if(e.checkedJourney=void 0,v&&!e.current.nodes.some(u=>u.id===v))throw Error("Scenario start is missing; choose another resource");if(x&&!e.current.nodes.some(u=>u.id===x))throw Error("Scenario destination is missing; choose another resource");if(s({type:"traffic",from:e.current.traffic,to:m}),v&&x){const u=Do(e.current,v,x,m);n(`${u.status}: ${u.reason}`),u.status!=="unknown"&&(e.checkedJourney={path:u.path,allowed:u.status==="allowed"})}else v&&t.select(v),n("Traffic scenario applied");t.stopJourney(),O("traffic-panel").hidden=!0}catch(m){n(String(m))}};function c(){if(t.journeyPlaying){t.stopJourney();return}const m=e.checkedJourney?e.checkedJourney.path.slice(0,1):Kh(e.current,e.selected);if(!m.length){n("No flow arrows. Use Reachability matrix for imported resources, or connect components.");return}t.playJourney(m,e.checkedJourney),O("journey").setAttribute("aria-pressed","true");const v=m.map(x=>e.current.nodes.find(u=>u.id===x)?.label).join(", ");n(`Journey from ${v} · P or Esc to stop`)}O("journey").onclick=c,O("traffic-settings").onclick=()=>{const m=O("traffic-panel");m.hidden=!m.hidden,a();const v=e.current.traffic??Ks;fe("traffic-protocol").value=v.protocol,fe("traffic-port").value=String(v.port),fe("traffic-source").value=v.sourceIp,fe("traffic-direction").value=v.direction},O("traffic-apply").onclick=()=>{try{const m=ar({protocol:fe("traffic-protocol").value,port:Number(fe("traffic-port").value),sourceIp:fe("traffic-source").value.trim(),direction:fe("traffic-direction").value});s({type:"traffic",from:e.current.traffic,to:m}),O("traffic-panel").hidden=!0}catch(m){n(String(m))}},t.onJourneyPermit=m=>{const v=e.current.edges.find(u=>u.id===m),x=Ch(v?.networkRule,e.current.traffic??Ks);if(v&&(e.current.nodes.find(u=>u.id===v.source)?.network||e.current.nodes.find(u=>u.id===v.target)?.network)){const u=Do(e.current,v.source,v.target,e.current.traffic??Ks);if(u.status!=="allowed")return n(`${u.status.toUpperCase()} · ${u.reason}`),!1}return x.allowed||n(`Blocked · ${v?.label||m} · ${x.reason}`),x.allowed};let d=0;const h=m=>{const v=e.current.nodes,x=new Set;for(let u=v.find(f=>f.id===m);u&&!x.has(u.id);u=v.find(f=>f.id===u?.parentId))if(x.add(u.id),u.owner)return u.owner};t.onJourneyHop=m=>{const v=e.current.edges.find(_=>_.id===m);if(!v)return;const x=_=>e.current.nodes.find(y=>y.id===_)?.label??"",u=h(v.source),f=h(v.target),g=u!==void 0&&f!==void 0&&u!==f;g&&d++,n(`${v.networkRule?"Allowed · ":""}${x(v.source)} → ${x(v.target)}${v.label?` · ${v.label}`:""}${g?` · Handoff ${u} → ${f}`:""}`)},t.onJourneyCaption=m=>{O("journey-caption").textContent=m,O("journey-caption").hidden=!m},t.onJourneyEnd=()=>{O("journey").setAttribute("aria-pressed","false"),d&&n(`Journey finished · ${d} handoff${d===1?"":"s"} between owners`),d=0},t.onJourneyBranches=m=>bc(e.current,m);let p;return t.onJourneyChoose=(m,v)=>new Promise(x=>{if(e.recording){x(v[0]);return}const u=e.current.nodes.find(M=>M.id===m),f=t.nodeScreenRect(m),g=document.createElement("section");g.className="popover decision-chooser",g.setAttribute("aria-label","Choose a branch");const _=document.createElement("p");_.className="popover-caption",_.textContent="DECISION";const y=document.createElement("h2");y.textContent=u?.label||"Which way?",g.append(_,y);const w=M=>{g.remove(),p=void 0,x(M)};v.forEach((M,A)=>{const k=document.createElement("button"),N=document.createElement("kbd");N.textContent=String(A+1);const L=document.createElement("span");L.textContent=rl(e.current,M),k.append(N,L),k.onclick=()=>w(M),g.append(k)}),document.body.append(g);const T=g.offsetWidth,R=g.offsetHeight,b=f?f.left+f.width+16:innerWidth/2-T/2,E=f?f.top+f.height/2-R/2:innerHeight/3;g.style.left=`${Math.max(12,Math.min(b,innerWidth-T-12))}px`,g.style.top=`${Math.max(64,Math.min(E,innerHeight-R-80))}px`,p={close:w},n(`Decision at ${u?.label??"a fork"} · choose a branch (1–${v.length})`)}),t.onJourneyCancelChoice=()=>p?.close(),window.addEventListener("keydown",m=>{if(!p||m.ctrlKey||m.metaKey||m.altKey)return;const v=Number(m.key)-1,x=document.querySelectorAll(".decision-chooser button");Number.isInteger(v)&&x[v]&&(m.preventDefault(),m.stopImmediatePropagation(),x[v].click())},{capture:!0}),{toggleJourney:c}}function eg(i){const{state:e,scene:t,notify:n,commit:s}=i,r=O("lanes");function o(){const p=e.current;if(p.lanes){s({type:"graph",label:"Hide lanes",lanes:null}),n("Lanes hidden. Steps stay where they are; owners are kept.");return}if(!p.nodes.some(m=>m.owner)){n("Give steps an Owner in the properties panel first, then show lanes.");return}s($s(p,"right","Show lanes")),t.fit(),n("Lanes on. Change a step’s Owner, or drag it to another lane.")}function a(){const p=e.current.lanes;if(!p){n("Show lanes first.");return}const m=p.direction==="right"?"down":"right";s($s(e.current,m,m==="down"?"Lanes as columns":"Lanes as rows")),t.fit()}function l(p,m){const v=e.current,x=m.trim().slice(0,el),u=structuredClone(v),f=[];for(const _ of u.nodes)!p.includes(_.id)||(_.owner??"")===x||(x?_.owner=x:delete _.owner,f.push(_));if(!f.length)return;const g=f.length>1?`Owner of ${f.length} steps`:`Owner · ${nl(x)}`;s(u.lanes?$s(u,u.lanes.direction,g,f):{type:"graph",label:g,nodes:f.map(_=>({id:_.id,value:_}))})}fe("node-owner").onchange=()=>{const p=e.selectedIds.size?[...e.selectedIds]:e.selected?[e.selected]:[];l(p,fe("node-owner").value)},r.onclick=o;const c=p=>{const m=e.current;if(!m.lanes)return!1;for(const g of p){const _=m.nodes.find(y=>y.id===g.id);_&&Object.assign(_,g.from)}const v=Zh(m);if(!v)return!1;const x=structuredClone(m),u=[];for(const g of p){const _=x.nodes.find(w=>w.id===g.id);if(!_||_.parentId!==void 0)continue;const y=Rm(v,g.to);y!==void 0&&(y?_.owner=y:delete _.owner,u.push(_))}const f=u[0]?nl(u[0].owner??""):"";return s($s(x,v.direction,f?`Move to ${f}`:"Re-flow lanes",u)),!0},d=t.onMove;t.onMove=(p,m,v)=>{c([{id:p,from:m,to:v}])||d(p,m,v)};const h=t.onMoves;return t.onMoves=p=>{c(p)||h(p)},{toggle:o,swapDirection:a,refresh(){const p=e.current.lanes;r.setAttribute("aria-pressed",String(!!p)),r.title=p?`Hide swimlanes (L) · ${p.direction==="right"?"rows":"columns"}`:"Show the board as swimlanes, one per owner (L)"}}}const tg={duration:12,dither:!0};function Cd(i){if(!Number.isInteger(i.duration)||i.duration<2||i.duration>120||typeof i.dither!="boolean")throw Error("GIF duration must be a whole number from 2 to 120 seconds");return{...i}}function ng(i){const{state:e,scene:t,notify:n,action:s}=i;let r="gif",o;function a(l){r=l,O("file-menu").hidden=!0,O("gif-panel").hidden=!1,O("recording-title").textContent=l==="gif"?"Journey GIF":"Journey video",O("gif-record").textContent=l==="gif"?"Record GIF":"Record video",O("video-format-row").hidden=l==="gif",O("video-help").hidden=l==="gif",O("gif-dither-row").hidden=l!=="gif",O("gif-help").hidden=l!=="gif",ot("gif-duration").focus(),l==="video"&&jn(async()=>{const{videoMime:c}=await import("./video-DmUvEiuR.js");return{videoMime:c}},[]).then(({videoMime:c})=>{for(const h of O("video-format").options){const p=!!c(h.value);h.disabled=!p,h.textContent=h.value.toUpperCase()+(p?"":" (unavailable)")}const d=O("video-format");d.selectedOptions[0]?.disabled&&(d.value=[...d.options].find(h=>!h.disabled)?.value??"")})}O("export-gif").onclick=()=>a("gif"),O("export-video").onclick=()=>a("video");try{const l=localStorage.getItem("solar-forge-gif"),c=l?Cd(JSON.parse(l)):tg;ot("gif-duration").value=String(c.duration),ot("gif-dither").checked=c.dither}catch{}O("gif-record").onclick=()=>{s(async()=>{const l=Cd({duration:Number(ot("gif-duration").value),dither:ot("gif-dither").checked});try{localStorage.setItem("solar-forge-gif",JSON.stringify(l))}catch{}const c=e.checkedJourney,d=c?c.path.slice(0,1):Kh(e.current,e.selected);if(!d.length){n("Connect components before exporting a journey.");return}const{recordJourney:h}=await jn(async()=>{const{recordJourney:u}=await import("./gif-RNKCYaoB.js");return{recordJourney:u}},[]),p=r,m=fe("video-format").value,v=p==="video"?await jn(()=>import("./video-DmUvEiuR.js"),[]):void 0;if(v&&!v.videoMime(m))throw Error("Choose an available video format");O("gif-panel").hidden=!0,e.recording=!0,o=new AbortController,O("file-menu").hidden=!0,t.stopJourney();const x=[O("app")];for(const u of x)u.inert=!0;try{t.playJourney(d,c);const u=_=>n(`Recording journey ${p==="gif"?"GIF":m.toUpperCase()} · ${_}% · ${l.duration} seconds · Esc cancels; decision forks use the first branch`),f=v?await v.recordVideo(()=>t.gifFrame(1280,720),u,o.signal,{duration:l.duration,format:m}):await h(()=>t.gifFrame(),u,o.signal,l);t.stopJourney(),(v?await zm(f,m):await Fm(f))&&n(`Journey ${v?m.toUpperCase():"GIF"} exported · ${l.duration} seconds`)}finally{e.recording=!1,o=void 0,t.stopJourney();for(const u of x)u.inert=!1}})},window.addEventListener("keydown",l=>{e.recording&&(l.preventDefault(),l.stopImmediatePropagation(),l.key==="Escape"&&o?.abort())},!0)}const ef={w:[0,-1],arrowup:[0,-1],s:[0,1],arrowdown:[0,1],a:[-1,0],arrowleft:[-1,0],d:[1,0],arrowright:[1,0]},ig=900,sg=2.5;function Rd(i){return i.toLowerCase()in ef}function rg(i){let e=0,t=0;for(const s of new Set([...i].map(r=>r.toLowerCase()))){const r=ef[s];r&&(e+=r[0],t+=r[1])}e=Math.sign(e),t=Math.sign(t);const n=Math.hypot(e,t)||1;return{x:e/n,y:t/n}}class og{constructor(e,t=s=>requestAnimationFrame(s),n=s=>cancelAnimationFrame(s)){this.pan=e,this.requestFrame=t,this.cancelFrame=n}pan;requestFrame;cancelFrame;held=new Set;fast=!1;frame=0;last=0;get active(){return this.held.size>0}press(e,t){this.fast=t,this.held.add(e.toLowerCase()),this.frame||(this.last=0,this.frame=this.requestFrame(this.tick))}release(e,t=this.fast){this.fast=t,this.held.delete(e.toLowerCase()),this.held.size||this.stop()}stop(){this.held.clear(),this.frame&&this.cancelFrame(this.frame),this.frame=0}tick=e=>{const t=this.last?Math.min((e-this.last)/1e3,.05):0;this.last=e;const{x:n,y:s}=rg(this.held),r=ig*(this.fast?sg:1)*t;r&&(n||s)&&this.pan(n*r,s*r),this.frame=this.held.size?this.requestFrame(this.tick):0}}function ag(i,e){const{state:t,scene:n,notify:s,commit:r,selectTool:o,showComponents:a,travelHistory:l,deleteSelection:c,openEditor:d,closeEditor:h,toggleJourney:p}=i,{setTheme:m,align:v,alignments:x}=e,u=new og((g,_)=>n.panByPixels(g,_));function f(g){let _=g.parentId;for(;_;){if(t.selectedIds.has(_))return!0;_=t.current.nodes.find(y=>y.id===_)?.parentId}return!1}window.addEventListener("pointerdown",g=>{g.target instanceof Node&&!O("context-menu").contains(g.target)&&(O("context-menu").hidden=!0)});for(const g of["copy","cut"])window.addEventListener(g,_=>{Ws(_.target)||!t.selectedIds.size||(_.preventDefault(),_.clipboardData?.setData("text/plain",Ro(Fh(t.current,t.selectedIds))),g==="cut"&&c())});window.addEventListener("paste",g=>{if(Ws(g.target))return;const _=g.clipboardData?.getData("text/plain");if(_)try{const y=ps(_),w=Oh(y,()=>crypto.randomUUID());g.preventDefault(),r(w,w.type==="graph"?w.nodes?.map(T=>T.id)??[]:[])}catch{s("Clipboard does not contain a valid Solar Forge selection.")}}),window.addEventListener("keydown",g=>{if(!Ws(g.target)&&(g.ctrlKey||g.metaKey)&&["a","g","d"].includes(g.key.toLowerCase())){g.preventDefault();const _=g.key.toLowerCase();_==="a"?n.selectMany(t.current.nodes.map(y=>y.id)):O(_==="d"?"duplicate":g.shiftKey?"ungroup":"tool-group").click()}}),window.addEventListener("keydown",g=>{if((g.ctrlKey||g.metaKey)&&g.key.toLowerCase()==="k"){g.preventDefault(),Hm([...["new","browse-examples","open","save","save-as","export","export-svg","auto-layout","reachability","import-infrastructure","export-gif","export-video","export-mermaid","export-plantuml","export-drawio","fit","iso","top","tool-group","ungroup","duplicate","delete"].map(w=>({label:O(w).getAttribute("title")??O(w).textContent?.trim()??w,run:()=>O(w).click()})),{label:"Play journey (P)",run:p},{label:"Lanes: show or hide (L)",run:e.toggleLanes},{label:"Lanes: switch rows and columns",run:e.swapLaneDirection},{label:"Copy diagram image (Ctrl+Shift+C)",run:()=>{e.copyImage()}},...x.map(([w,T])=>({label:T,run:()=>v(w)})),...Co.map(w=>({label:`Theme: ${w.name}`,run:()=>m(w.id)})),...ki.map(w=>({label:`Add ${w.label} · ${w.category}`,run:()=>{a(!0),ot("search").value=w.label,e.populateComponents(w.label)}}))]);return}if((g.ctrlKey||g.metaKey)&&["z","y"].includes(g.key.toLowerCase())&&!(g.target instanceof HTMLInputElement)&&!(g.target instanceof HTMLTextAreaElement)){g.preventDefault(),l(g.shiftKey||g.key.toLowerCase()==="y");return}if((g.ctrlKey||g.metaKey)&&g.shiftKey&&g.key.toLowerCase()==="c"&&!Ws(g.target)){g.preventDefault(),e.copyImage();return}if((g.ctrlKey||g.metaKey)&&["s","o","n"].includes(g.key.toLowerCase())){g.preventDefault(),O(g.key.toLowerCase()==="s"?g.shiftKey?"save-as":"save":g.key.toLowerCase()==="n"?"new":"open").click();return}if(g.key==="Escape"){if(h?.(!1),n.journeyPlaying){n.stopJourney();return}n.cancelInteraction(),O("context-menu").hidden=!0,o("select"),a(!1),O("file-menu").hidden=!0,O("help-panel").hidden=!0,O("traffic-panel").hidden=!0,O("gif-panel").hidden=!0,O("theme-menu").hidden=!0,e.closeSettings(),O("menu").setAttribute("aria-expanded","false"),O("help").setAttribute("aria-expanded","false"),n.select(void 0);return}if(g.target instanceof HTMLInputElement||g.target instanceof HTMLTextAreaElement||g.target instanceof HTMLSelectElement||g.ctrlKey||g.metaKey||g.altKey)return;const _=t.current.nodes.filter(w=>t.selectedIds.has(w.id)&&!f(w)),y=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(g.key);if(Rd(g.key)&&!(y&&_.length)&&!document.querySelector("dialog[open]")){g.preventDefault(),u.press(g.key,g.shiftKey);return}if(y){g.preventDefault();const w=g.shiftKey?50:n.snapping?10:1,T=g.key==="ArrowLeft"?-w:g.key==="ArrowRight"?w:0,R=g.key==="ArrowUp"?-w:g.key==="ArrowDown"?w:0;r({type:"graph",label:"Nudge selection",nodes:_.map(b=>({id:b.id,value:{...b,x:b.x+T,z:b.z+R}}))})}g.key==="/"&&(g.preventDefault(),a(!0)),g.key.toLowerCase()==="v"&&o("select"),g.key.toLowerCase()==="c"&&O("tool-connect").click(),g.key.toLowerCase()==="m"&&o("pan"),g.key.toLowerCase()==="p"&&p(),g.key.toLowerCase()==="l"&&e.toggleLanes(),g.key.toLowerCase()==="t"&&O("tool-text").click(),g.key.toLowerCase()==="n"&&O("tool-note").click(),g.key.toLowerCase()==="b"&&O("tool-sketch").click(),g.key==="Enter"&&t.selected&&(g.preventDefault(),d({kind:"node",id:t.selected})),g.key.toLowerCase()==="f"&&n.fit(),(g.key==="Delete"||g.key==="Backspace")&&(g.preventDefault(),c())}),window.addEventListener("keyup",g=>{Rd(g.key)&&u.release(g.key,g.shiftKey)}),window.addEventListener("blur",()=>u.stop())}class tf{constructor(e,t=100,n=8e6){this.document=e,this.maxEntries=t,this.maxBytes=n}document;maxEntries;maxBytes;past=[];future=[];bytes=0;sequence=0;revision=0;savedRevision=0;get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}get isDirty(){return this.revision!==this.savedRevision}get token(){return this.revision}markSaved(e=this.revision){this.savedRevision=e}execute(e){const t=this.document,n="id"in e?t.nodes.find(l=>l.id===e.id):void 0;let s,r,o=e;switch(e.type){case"detail":{const l=e.root;if(l.details?.some(d=>d.id===e.id))return!1;const c={id:e.id,document:e.board};s=()=>{l.details=l.details?.filter(d=>d!==c)??[]},r=()=>{l.details??=[],l.details.push(c)},o=[e.id,e.board];break}case"scenarios":{const l=structuredClone(t.scenarios),c=structuredClone(e.scenarios);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.scenarios=structuredClone(l):delete t.scenarios},r=()=>{t.scenarios=structuredClone(c)};break}case"traffic":{const l=structuredClone(t.traffic),c=structuredClone(e.to);if(JSON.stringify(l)===JSON.stringify(c))return!1;s=()=>{l?t.traffic=structuredClone(l):delete t.traffic},r=()=>{t.traffic=structuredClone(c)};break}case"graph":{let l=function(x,u){return u.map(f=>{const g=x.findIndex(T=>T.id===f.id),_=x[g],y=_?structuredClone(_):null,w=f.value?structuredClone(f.value):null;if(w&&w.id!==f.id)throw Error("Mismatched graph record");return{id:f.id,index:g,target:_??(w?structuredClone(w):null),before:y,after:w}})},c=function(x,u,f){const g=new Set(u.map(y=>y.id)),_=x.filter(y=>!g.has(y.id));for(const y of[...u].sort((w,T)=>w.index-T.index)){const w=f?y.before:y.after;if(!(!w||!y.target)){for(const T of Object.keys(y.target))Reflect.deleteProperty(y.target,T);Object.assign(y.target,structuredClone(w)),y.index<0?_.push(y.target):_.splice(y.index,0,y.target)}}return _};const d=l(t.nodes,e.nodes??[]),h=l(t.edges,e.edges??[]),p=t.title,m=structuredClone(t.lanes),v=x=>{x?t.lanes=structuredClone(x):delete t.lanes};s=()=>{t.nodes=c(t.nodes,d,!0),t.edges=c(t.edges,h,!0),t.title=p,e.lanes!==void 0&&v(m??null)},r=()=>{t.nodes=c(t.nodes,d,!1),t.edges=c(t.edges,h,!1),e.title!==void 0&&(t.title=e.title),e.lanes!==void 0&&v(e.lanes)},o=[d,h,p,m];break}case"move":{if(!n||e.from.x===e.to.x&&e.from.z===e.to.z)return!1;const l={...e.from},c={...e.to};s=()=>Object.assign(n,l),r=()=>Object.assign(n,c);break}case"rename":{if(!n||n.label===e.label)return!1;const l=n.label,c=e.label.slice(0,1e3);s=()=>{n.label=l},r=()=>{n.label=c},o=[e,l];break}case"insert":{if(t.nodes.some(c=>c.id===e.node.id))return!1;const l={...e.node};s=()=>{t.nodes=t.nodes.filter(c=>c.id!==l.id)},r=()=>{t.nodes.push(l)};break}case"delete":{let l=function(m,v){for(const{item:x,index:u}of v)m.splice(u,0,x)};if(!n)return!1;const c=new Set([e.id]);for(let m=!0;m;){m=!1;for(const v of t.nodes)v.parentId&&c.has(v.parentId)&&!c.has(v.id)&&(c.add(v.id),m=!0)}const d=t.nodes.flatMap((m,v)=>c.has(m.id)?[{item:m,index:v}]:[]),h=t.edges.flatMap((m,v)=>c.has(m.source)||c.has(m.target)?[{item:m,index:v}]:[]),p=new Set(h.map(({item:m})=>m.id));s=()=>{l(t.nodes,d),l(t.edges,h)},r=()=>{t.nodes=t.nodes.filter(m=>!c.has(m.id)),t.edges=t.edges.filter(m=>!p.has(m.id))},o=[e,d,h];break}}r();for(const l of this.future)this.bytes-=l.bytes;this.future=[];const a={edit:e,document:t,undo:s,redo:r,bytes:JSON.stringify(o).length*2,before:this.revision,after:++this.sequence};for(this.past.push(a),this.bytes+=a.bytes,this.revision=a.after;this.past.length>this.maxEntries||this.bytes>this.maxBytes;){const l=this.past.shift();l&&(this.bytes-=l.bytes)}return!0}undo(){const e=this.past.pop();if(e)return this.document=e.document,e.undo(),this.revision=e.before,this.future.push(e),e.edit}redo(){const e=this.future.pop();if(e)return this.document=e.document,e.redo(),this.revision=e.after,this.past.push(e),e.edit}}function lg(i){return{current:i,project:i,history:new tf(i),diagramTrail:[],selected:void 0,selectedIds:new Set,selectedEdge:void 0,checkedJourney:void 0,fileHandle:void 0,dirty:!1,busy:!1,recoveryReady:!1,recording:!1,layersVisible:!0,diagramVisible:!0}}async function cg(i){if(en())return await ne("set_tablet_mode",{enabled:i})??void 0;i&&!document.fullscreenElement?await document.documentElement.requestFullscreen():!i&&document.fullscreenElement&&await document.exitFullscreen()}async function dg(i,e){if(!en()){e("absent");return}const{listen:t}=await jn(async()=>{const{listen:n}=await Promise.resolve().then(()=>xm);return{listen:n}},void 0);await t("tablet-dial",n=>i(n.payload)),await t("tablet-dial-status",n=>e(n.payload)),e(await ne("tablet_dial_status"))}const dr=[{id:"wheel-next",label:"Next in Components menu",group:"Components"},{id:"wheel-previous",label:"Previous in Components menu",group:"Components"},{id:"pick",label:"Add highlighted component",group:"Components"},{id:"deselect",label:"Deselect · cancel",group:"Edit"},{id:"tool-select",label:"Select tool",group:"Tools"},{id:"tool-pan",label:"Pan tool",group:"Tools"},{id:"tool-connect",label:"Connect tool",group:"Tools"},{id:"tool-sketch",label:"Sketch tool",group:"Tools"},{id:"tool-text",label:"Text tool",group:"Tools"},{id:"tool-note",label:"Sticky note tool",group:"Tools"},{id:"tool-add",label:"Open Components menu",group:"Tools"},{id:"undo",label:"Undo",group:"Edit"},{id:"redo",label:"Redo",group:"Edit"},{id:"delete",label:"Delete selection",group:"Edit"},{id:"zoom-in",label:"Zoom in",group:"View"},{id:"zoom-out",label:"Zoom out",group:"View"},{id:"fit",label:"Fit diagram",group:"View"},{id:"journey",label:"Play / stop journey",group:"View"},{id:"tablet-mode",label:"Tablet mode on / off",group:"View"}],al="Pen side button",ug={"tool-pan":al};function Pd(i){const e={...i};for(const t of dr){const n=ug[t.id];n&&!e[t.id]&&!er(e,n)&&(e[t.id]=n)}return e}const hg=new Set(["wheel-next","wheel-previous","zoom-in","zoom-out","undo","redo"]),fg=new Set(["V","M","C","B","W","A","S","D","T","N","F","P","/","Escape","Delete","Backspace","ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Ctrl+Z","Ctrl+Shift+Z","Ctrl+Y","Ctrl+A","Ctrl+C","Ctrl+V","Ctrl+X","Ctrl+D","Ctrl+G","Ctrl+Shift+G","Ctrl+K","Ctrl+S","Ctrl+Shift+S","Ctrl+O","Ctrl+N","Ctrl+Shift+C","Mouse middle","Mouse right"]),pg=new Set(["Control","Shift","Alt","Meta","AltGraph","Super","Hyper","OS"]);function mg(i){if(pg.has(i.key))return;let e=i.key;if((!e||e==="Unidentified"||e==="Dead")&&(e=i.code),!e)return;e===" "&&(e="Space"),i.shiftKey&&/^Digit\d$/.test(i.code)&&(e=i.code.slice(5)),e.length===1&&(e=e.toUpperCase());const t=[];return i.ctrlKey&&t.push("Ctrl"),i.altKey&&t.push("Alt"),i.shiftKey&&t.push("Shift"),i.metaKey&&t.push("Super"),t.push(e),t.join("+")}function gg(i){return fg.has(i.replace(/^Super\+/,"Ctrl+"))}function er(i,e){for(const t of dr)if(i[t.id]===e)return t.id}function vg(i,e,t){const n=er(i,t),s={...i,[e]:t};return n&&n!==e&&delete s[n],{bindings:s,replaced:n===e?void 0:n}}function xg(i){if(!i)return{};try{const e=JSON.parse(i);if(!e||typeof e!="object")return{};const t={};for(const n of dr){const s=e[n.id];typeof s=="string"&&s.length>0&&s.length<64&&(t[n.id]=s)}return t}catch{return{}}}const nf=[80,60,45,32,24,16,10,6,3,1];function _g(i,e,t,n=!1){if(!e)return{steps:0,pending:i};if(n||Math.sign(i)===-Math.sign(e))return{steps:Math.sign(e),pending:0};const s=i+e,r=Math.trunc(s/t)||0;return{steps:r,pending:s-r*t}}function yg(i){if(i.button<1)return;const e=i.pointerType==="pen";return(e?{1:"Pen button (middle click)",2:"Pen button (right click)",5:"Pen eraser"}:{1:"Mouse middle",2:"Mouse right",3:"Mouse back",4:"Mouse forward"})[i.button]??`${e?"Pen":"Mouse"} button ${i.button}`}const bg={connect:'<circle cx="5" cy="5" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 5h7v14h3"/>',group:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><rect x="7" y="7" width="10" height="10"/>',undo:'<path d="M9 4 4 9l5 5M4 9h9a7 7 0 0 1 0 14"/>',redo:'<path d="m15 4 5 5-5 5M20 9h-9a7 7 0 0 0 0 14"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',pointer:'<path d="m5 3 15 9-7 2-3 7z"/>',hand:'<path d="M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 5-3 7-7 7-3 0-4-2-6-4l-4-5a2 2 0 0 1 3-2l2 2"/>',cube:'<path d="m12 3 9 5v9l-9 5-9-5V8zM3 8l9 5 9-5M12 13v9M8 5l9 5"/>',layers:'<path d="m12 3 10 5-10 5L2 8zM2 12l10 5 10-5M2 16l10 5 10-5"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',fit:'<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8h8v8H8z"/>',save:'<path d="M4 3h13l4 4v14H3V3zM7 3v6h10V3M7 21v-8h10v8"/>',arrow:'<path d="M5 19 19 5M7 5h12v12"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 9a3 3 0 1 1 4 3l-1 1M12 17h.01"/>',edit:'<path d="m15 4 5 5M4 20l5-1L21 7a3.5 3.5 0 0 0-5-5L4 14z"/>',palette:'<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4c0-4.5-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',text:'<path d="M5 6V4h14v2M12 4v16M9 20h6"/>',pen:'<path d="m12 19 7-7 3 3-7 7zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18zM2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',tablet:'<rect x="3" y="4" width="18" height="14" rx="2"/><path d="m13 14 6 6M7 22h5"/>',note:'<path d="M4 4h16v11l-5 5H4z"/><path d="M15 20v-5h5M8 9h8M8 13h5"/>',play:'<path d="M7 4v16l13-8z"/>',settings:'<path d="M19.3 9.8L21.9 10.3L21.9 13.7L19.3 14.2L18.7 15.5L20.2 17.8L17.8 20.2L15.5 18.7L14.2 19.3L13.7 21.9L10.3 21.9L9.8 19.3L8.5 18.7L6.2 20.2L3.8 17.8L5.3 15.5L4.7 14.2L2.1 13.7L2.1 10.3L4.7 9.8L5.3 8.5L3.8 6.2L6.2 3.8L8.5 5.3L9.8 4.7L10.3 2.1L13.7 2.1L14.2 4.7L15.5 5.3L17.8 3.8L20.2 6.2L18.7 8.5z"/><circle cx="12" cy="12" r="3"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="1.5"/>',flow:'<path d="M3 8c3-3 6 3 9 0s6-3 9 0M3 16c3-3 6 3 9 0s6-3 9 0"/>',user:'<circle cx="12" cy="7.5" r="3.5"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>',align:'<path d="M4 3v18M8 7h12M8 14h8"/>',camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'};function et(i){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${bg[i]}</svg>`}const wg=["tool-pan","tool-connect","tool-sketch","tool-text","tool-note"],ll="solar-forge-tablet-buttons",Id="solar-forge-tablet-defaults",sf="solar-forge-tablet-dial",Sg={connected:"Wheels connected. Turn a wheel to zoom. Press its centre to open Components, turn to scroll, and press again to add the highlighted one.",permission:"The tablet is plugged in, but the app is not allowed to read its wheels. Install the tablet permission rule (see the user guide), then unplug and replug the tablet.",absent:"No Huion tablet found. The wheels work in the desktop app with the tablet plugged in."},Mg=[[2,2],[4,1],[8,3],[16,4],[32,5]];function Eg(){try{const i=xg(localStorage.getItem(ll));if(localStorage.getItem(Id)==="1")return i;const e=Pd(i);return localStorage.setItem(ll,JSON.stringify(e)),localStorage.setItem(Id,"1"),e}catch{return Pd({})}}function Ag(){const i={sensitivity:7,reverse:!1};try{const e=JSON.parse(localStorage.getItem(sf)??"{}");if(!e||typeof e!="object")return i;const{sensitivity:t,reverse:n}=e;return{sensitivity:typeof t=="number"&&Number.isInteger(t)&&t>=1&&t<=nf.length?t:i.sensitivity,reverse:n===!0}}catch{return i}}function Tg(i){const{notify:e,scene:t}=i;let n=!1,s=!0,r=!1,o=Eg(),a;const l=Ag();t.onPenInput=M=>{document.body.classList.toggle("pen-input",M),M&&!r&&!n&&(r=!0,e("Pen detected. Tablet mode (top bar) goes full screen on the pen display."))};async function c(M){if(M!==n){n=M,document.body.classList.toggle("tablet-mode",M),O("tablet-mode").setAttribute("aria-pressed",String(M)),M?(s=i.layersVisible(),i.showLayers(!1)):i.showLayers(s);try{const A=await cg(M);e(M?`Tablet mode${A?` on ${A.replace(/^desc:/,"")}`:""}. Tap the tablet button to leave.`:"Tablet mode off")}catch(A){e(`Full screen unavailable: ${A instanceof Error?A.message:String(A)}`)}}}O("tablet-mode").onclick=()=>{c(!n)};function d(M){o=M;try{localStorage.setItem(ll,JSON.stringify(M))}catch{e("Button mappings changed for this session.")}h()}function h(){const M=O("tablet-bindings");M.replaceChildren();let A="";for(const k of dr){if(k.group!==A){A=k.group;const j=document.createElement("p");j.className="section-label",j.textContent=A.toUpperCase(),M.append(j)}const N=document.createElement("div");N.className="binding-row";const L=document.createElement("span");L.textContent=k.label;const F=document.createElement("kbd"),U=a===k.id;F.textContent=U?"Press a control…":o[k.id]??"—",F.classList.toggle("unbound",!U&&!o[k.id]);const z=document.createElement("button");z.textContent=U?"Cancel":"Assign",z.setAttribute("aria-label",`${z.textContent} ${k.label}`),z.onclick=()=>{a=U?void 0:k.id,h()};const Z=document.createElement("button");Z.className="small-icon",Z.innerHTML=et("close"),Z.setAttribute("aria-label",`Clear ${k.label}`),Z.disabled=!o[k.id],Z.onclick=()=>{const j={...o};delete j[k.id],d(j)},N.append(L,F,z,Z),M.append(N)}}function p(M){O("settings-panel").hidden=!M,O("settings").setAttribute("aria-expanded",String(M)),M||(a=void 0),h()}O("settings").onclick=()=>p(O("settings-panel").hidden),O("close-settings").onclick=()=>p(!1),O("tablet-bindings-reset").onclick=()=>{a=void 0,d({}),e("Tablet button mappings cleared.")};function m(M){i.components.isOpen()?i.components.step(M):i.components.open()}function v(){i.components.isOpen()?i.components.addHighlighted():i.components.open()}function x(M){if(wg.includes(M)&&O(M).getAttribute("aria-pressed")==="true"){i.selectTool();return}switch(M){case"wheel-next":m(1);return;case"wheel-previous":m(-1);return;case"pick":v();return;case"tablet-mode":c(!n);return}const A=i.actions[M];A?A():O(M).click()}function u(M){const A=a;if(!A)return;if(a=void 0,M==="Escape"){h();return}const k=vg(o,A,M);d(k.bindings);const N=L=>dr.find(F=>F.id===L)?.label??L;e([`${M} → ${N(A)}.`,k.replaced?`Removed from ${N(k.replaced)}.`:"",gg(M)?`${M} is also a built-in shortcut; the mapping now replaces it.`:""].filter(Boolean).join(" "))}function f(){try{localStorage.setItem(sf,JSON.stringify(l))}catch{e("Wheel settings changed for this session.")}}ot("dial-sensitivity").value=String(l.sensitivity),ot("dial-reverse").checked=l.reverse,ot("dial-sensitivity").oninput=()=>{l.sensitivity=Number(ot("dial-sensitivity").value),f()},ot("dial-reverse").onchange=()=>{l.reverse=ot("dial-reverse").checked,f()};let g=0,_=0;dg(M=>{if(M.kind==="pen"){if(!M.pressed)return;const L=er(o,al);a?u(al):L&&x(L);return}if(M.kind==="press"){v(),g=0,_=0;return}const A=performance.now(),k=A-_>350;_=A;const N=_g(g,l.reverse?-M.delta:M.delta,nf[l.sensitivity-1]??10,k);g=N.pending,N.steps&&(i.components.isOpen()?i.components.step(N.steps):t.zoomBy(1.1**N.steps))},M=>{O("dial-status").textContent=Sg[M]}).catch(M=>{O("dial-status").textContent=`Wheels unavailable: ${M instanceof Error?M.message:String(M)}`}),window.addEventListener("keydown",M=>{if(i.isRecording())return;const A=mg(M);if(a){if(M.preventDefault(),M.stopImmediatePropagation(),!A||M.repeat)return;u(A);return}if(!A)return;const k=er(o,A);k&&(Ws(M.target)&&!M.ctrlKey&&!M.altKey&&!M.metaKey||(M.preventDefault(),M.stopImmediatePropagation(),!(M.repeat&&!hg.has(k))&&x(k)))},{capture:!0});const y=new Map;let w=!1,T=0;function R(M){const A=y.get(M.pointerId)??0;if(y.set(M.pointerId,M.buttons),M.button>=1&&M.type!=="pointerup")return M.button;const k=M.buttons&~A;return Mg.find(([N])=>k&N)?.[1]}function b(M,A,k){const N=yg({button:A,pointerType:k});if(!N)return!1;const L=a?void 0:er(o,N);return!a&&!L?!1:(M.preventDefault(),M.stopImmediatePropagation(),w=!0,T=performance.now(),a?u(N):L&&x(L),!0)}function E(M){if(i.isRecording())return;const A=R(M);A!==void 0&&b(M,A,M.pointerType)}window.addEventListener("pointerdown",E,{capture:!0}),window.addEventListener("pointermove",E,{capture:!0}),window.addEventListener("pointerup",M=>{y.set(M.pointerId,M.buttons)},{capture:!0});for(const M of["mousedown","auxclick"])window.addEventListener(M,A=>{if(i.isRecording()||performance.now()-T<300){w&&A.preventDefault();return}b(A,A.button,"mouse")},{capture:!0});return window.addEventListener("contextmenu",M=>{if(a){M.preventDefault();return}w&&(w=!1,M.preventDefault(),M.stopImmediatePropagation())},{capture:!0}),window.addEventListener("pointerup",()=>{w&&setTimeout(()=>w=!1,0)},{capture:!0}),{showSettings:p}}const wc="183",Cg=0,Dd=1,Rg=2,yo=1,Pg=2,qs=3,xi=0,Qt=1,qn=2,Zn=0,vs=1,Ld=2,Nd=3,Ud=4,rf=5,Ri=100,Ig=101,Dg=102,Lg=103,Ng=104,Ug=200,of=201,kg=202,Fg=203,cl=204,Lo=205,Og=206,zg=207,Bg=208,Gg=209,Vg=210,Hg=211,Wg=212,Xg=213,$g=214,dl=0,ul=1,hl=2,ws=3,fl=4,pl=5,ml=6,gl=7,Sc=0,qg=1,jg=2,Dn=0,af=1,lf=2,cf=3,df=4,uf=5,hf=6,ff=7,pf=300,Fi=301,Ss=302,na=303,ia=304,$o=306,vl=1e3,Yn=1001,xl=1002,Ft=1003,Yg=1004,Ar=1005,Ot=1006,sa=1007,Ii=1008,on=1009,mf=1010,gf=1011,ur=1012,Mc=1013,Nn=1014,_n=1015,Kn=1016,Ec=1017,Ac=1018,hr=1020,vf=35902,xf=35899,_f=1021,yf=1022,yn=1023,Qn=1026,Di=1027,Tc=1028,Cc=1029,Ms=1030,Rc=1031,Pc=1033,bo=33776,wo=33777,So=33778,Mo=33779,_l=35840,yl=35841,bl=35842,wl=35843,Sl=36196,Ml=37492,El=37496,Al=37488,Tl=37489,Cl=37490,Rl=37491,Pl=37808,Il=37809,Dl=37810,Ll=37811,Nl=37812,Ul=37813,kl=37814,Fl=37815,Ol=37816,zl=37817,Bl=37818,Gl=37819,Vl=37820,Hl=37821,Wl=36492,Xl=36494,$l=36495,ql=36283,jl=36284,Yl=36285,Zl=36286,Zg=3200,bf=0,Jg=1,fi="",kt="srgb",Es="srgb-linear",No="linear",lt="srgb",qi=7680,kd=519,Kg=512,Qg=513,e0=514,Ic=515,t0=516,n0=517,Dc=518,i0=519,Jl=35044,vi=35048,Fd="300 es",In=2e3,fr=2001;function s0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function r0(){const i=Uo("canvas");return i.style.display="block",i}const Od={};function ko(...i){const e="THREE."+i.shift();console.log(e,...i)}function wf(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ge(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=wf(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Fo(...i){const e=i.join(" ");e in Od||(Od[e]=!0,Ge(...i))}function o0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const a0={[dl]:ul,[hl]:ml,[fl]:gl,[ws]:pl,[ul]:dl,[ml]:hl,[gl]:fl,[pl]:ws};class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zd=1234567;const xs=Math.PI/180,pr=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Lc(i,e){return(i%e+e)%e}function l0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function c0(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function d0(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function u0(i,e=1){return e-Math.abs(Lc(i,e*2)-e)}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function f0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function p0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function m0(i,e){return i+Math.random()*(e-i)}function g0(i){return i*(.5-Math.random())}function v0(i){i!==void 0&&(zd=i);let e=zd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(i){return i*xs}function _0(i){return i*pr}function y0(i){return(i&i-1)===0&&i!==0}function b0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function w0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function S0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),h=r((e-n)/2),p=o((e-n)/2),m=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*h,l*p,a*c);break;case"YZY":i.set(l*p,a*d,l*h,a*c);break;case"ZXZ":i.set(l*h,l*p,a*d,a*c);break;case"XZX":i.set(a*d,l*v,l*m,a*c);break;case"YXY":i.set(l*m,a*d,l*v,a*c);break;case"ZYZ":i.set(l*v,l*m,a*d,a*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const M0={DEG2RAD:xs,RAD2DEG:pr,generateUUID:Ln,clamp:Xe,euclideanModulo:Lc,mapLinear:l0,inverseLerp:c0,lerp:tr,damp:d0,pingpong:u0,smoothstep:h0,smootherstep:f0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:v0,degToRad:x0,radToDeg:_0,isPowerOfTwo:y0,ceilPowerOfTwo:b0,floorPowerOfTwo:w0,setQuaternionFromProperEuler:S0,normalize:ct,denormalize:xn};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _i{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],h=n[s+3],p=r[o+0],m=r[o+1],v=r[o+2],x=r[o+3];if(h!==x||l!==p||c!==m||d!==v){let u=l*p+c*m+d*v+h*x;u<0&&(p=-p,m=-m,v=-v,x=-x,u=-u);let f=1-a;if(u<.9995){const g=Math.acos(u),_=Math.sin(g);f=Math.sin(f*g)/_,a=Math.sin(a*g)/_,l=l*f+p*a,c=c*f+m*a,d=d*f+v*a,h=h*f+x*a}else{l=l*f+p*a,c=c*f+m*a,d=d*f+v*a,h=h*f+x*a;const g=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=g,c*=g,d*=g,h*=g}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],h=r[o],p=r[o+1],m=r[o+2],v=r[o+3];return e[t]=a*v+d*h+l*m-c*p,e[t+1]=l*v+d*p+c*h-a*m,e[t+2]=c*v+d*m+a*p-l*h,e[t+3]=d*v-a*h-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),h=a(r/2),p=l(n/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"YXZ":this._x=p*d*h+c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"ZXY":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h-p*m*v;break;case"ZYX":this._x=p*d*h-c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h+p*m*v;break;case"YZX":this._x=p*d*h+c*m*v,this._y=c*m*h+p*d*v,this._z=c*d*v-p*m*h,this._w=c*d*h-p*m*v;break;case"XZY":this._x=p*d*h-c*m*v,this._y=c*m*h-p*d*v,this._z=c*d*v+p*m*h,this._w=c*d*h+p*m*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],h=t[10],p=n+a+h;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(d-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*d,this.y=n+l*d+a*c-r*h,this.z=s+l*h+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new D,Bd=new _i;class je{constructor(e,t,n,s,r,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],h=n[7],p=n[2],m=n[5],v=n[8],x=s[0],u=s[3],f=s[6],g=s[1],_=s[4],y=s[7],w=s[2],T=s[5],R=s[8];return r[0]=o*x+a*g+l*w,r[3]=o*u+a*_+l*T,r[6]=o*f+a*y+l*R,r[1]=c*x+d*g+h*w,r[4]=c*u+d*_+h*T,r[7]=c*f+d*y+h*R,r[2]=p*x+m*g+v*w,r[5]=p*u+m*_+v*T,r[8]=p*f+m*y+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*r,m=c*r-o*l,v=t*h+n*p+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(s*c-d*n)*x,e[2]=(a*n-s*o)*x,e[3]=p*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new je,Gd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E0(){const i={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=_s(s.r),s.g=_s(s.g),s.b=_s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?No:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Es]:{primaries:e,whitePoint:n,transfer:No,toXYZ:Gd,fromXYZ:Vd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Gd,fromXYZ:Vd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const st=E0();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ji;class A0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ji===void 0&&(ji=Uo("canvas")),ji.width=e.width,ji.height=e.height;const s=ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ji}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T0=0;class Nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?A0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let C0=0;const la=new D;class Ht extends Ps{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Yn,s=Yn,r=Ot,o=Ii,a=yn,l=on,c=Ht.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=Ln(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(la).x}get height(){return this.source.getSize(la).y}get depth(){return this.source.getSize(la).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vl:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vl:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=pf;Ht.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,s=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],x=l[2],u=l[6],f=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-x)<.01&&Math.abs(v-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+x)<.1&&Math.abs(v+u)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(m+1)/2,w=(f+1)/2,T=(d+p)/4,R=(h+x)/4,b=(v+u)/4;return _>y&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=R/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=b/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=b/r),this.set(n,s,r,t),this}let g=Math.sqrt((u-v)*(u-v)+(h-x)*(h-x)+(p-d)*(p-d));return Math.abs(g)<.001&&(g=1),this.x=(u-v)/g,this.y=(h-x)/g,this.z=(p-d)/g,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R0 extends Ps{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ht(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends R0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sf extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P0 extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e,t,n,s,r,o,a,l,c,d,h,p,m,v,x,u){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,h,p,m,v,x,u)}set(e,t,n,s,r,o,a,l,c,d,h,p,m,v,x,u){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=p,f[3]=m,f[7]=v,f[11]=x,f[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Yi.setFromMatrixColumn(e,0).length(),r=1/Yi.setFromMatrixColumn(e,1).length(),o=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const p=o*d,m=o*h,v=a*d,x=a*h;t[0]=l*d,t[4]=-l*h,t[8]=c,t[1]=m+v*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=v+m*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*d,m=l*h,v=c*d,x=c*h;t[0]=p+x*a,t[4]=v*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*d,t[9]=-a,t[2]=m*a-v,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){const p=l*d,m=l*h,v=c*d,x=c*h;t[0]=p-x*a,t[4]=-o*h,t[8]=v+m*a,t[1]=m+v*a,t[5]=o*d,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const p=o*d,m=o*h,v=a*d,x=a*h;t[0]=l*d,t[4]=v*c-m,t[8]=p*c+x,t[1]=l*h,t[5]=x*c+p,t[9]=m*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*d,t[4]=x-p*h,t[8]=v*h+m,t[1]=h,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=m*h+v,t[10]=p-x*h}else if(e.order==="XZY"){const p=o*l,m=o*c,v=a*l,x=a*c;t[0]=l*d,t[4]=-h,t[8]=c*d,t[1]=p*h+x,t[5]=o*d,t[9]=m*h-v,t[2]=v*h-m,t[6]=a*d,t[10]=x*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(I0,e,D0)}lookAt(e,t,n){const s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),Tr.crossVectors(nn,ri),s[0]=ri.x,s[4]=Tr.x,s[8]=nn.x,s[1]=ri.y,s[5]=Tr.y,s[9]=nn.y,s[2]=ri.z,s[6]=Tr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],h=n[5],p=n[9],m=n[13],v=n[2],x=n[6],u=n[10],f=n[14],g=n[3],_=n[7],y=n[11],w=n[15],T=s[0],R=s[4],b=s[8],E=s[12],M=s[1],A=s[5],k=s[9],N=s[13],L=s[2],F=s[6],U=s[10],z=s[14],Z=s[3],j=s[7],de=s[11],se=s[15];return r[0]=o*T+a*M+l*L+c*Z,r[4]=o*R+a*A+l*F+c*j,r[8]=o*b+a*k+l*U+c*de,r[12]=o*E+a*N+l*z+c*se,r[1]=d*T+h*M+p*L+m*Z,r[5]=d*R+h*A+p*F+m*j,r[9]=d*b+h*k+p*U+m*de,r[13]=d*E+h*N+p*z+m*se,r[2]=v*T+x*M+u*L+f*Z,r[6]=v*R+x*A+u*F+f*j,r[10]=v*b+x*k+u*U+f*de,r[14]=v*E+x*N+u*z+f*se,r[3]=g*T+_*M+y*L+w*Z,r[7]=g*R+_*A+y*F+w*j,r[11]=g*b+_*k+y*U+w*de,r[15]=g*E+_*N+y*z+w*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],m=e[14],v=e[3],x=e[7],u=e[11],f=e[15],g=l*m-c*p,_=a*m-c*h,y=a*p-l*h,w=o*m-c*d,T=o*p-l*d,R=o*h-a*d;return t*(x*g-u*_+f*y)-n*(v*g-u*w+f*T)+s*(v*_-x*w+f*R)-r*(v*y-x*T+u*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],m=e[11],v=e[12],x=e[13],u=e[14],f=e[15],g=t*a-n*o,_=t*l-s*o,y=t*c-r*o,w=n*l-s*a,T=n*c-r*a,R=s*c-r*l,b=d*x-h*v,E=d*u-p*v,M=d*f-m*v,A=h*u-p*x,k=h*f-m*x,N=p*f-m*u,L=g*N-_*k+y*A+w*M-T*E+R*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=(a*N-l*k+c*A)*F,e[1]=(s*k-n*N-r*A)*F,e[2]=(x*R-u*T+f*w)*F,e[3]=(p*T-h*R-m*w)*F,e[4]=(l*M-o*N-c*E)*F,e[5]=(t*N-s*M+r*E)*F,e[6]=(u*y-v*R-f*_)*F,e[7]=(d*R-p*y+m*_)*F,e[8]=(o*k-a*M+c*b)*F,e[9]=(n*M-t*k-r*b)*F,e[10]=(v*T-x*y+f*g)*F,e[11]=(h*y-d*T-m*g)*F,e[12]=(a*E-o*A-l*b)*F,e[13]=(t*A-n*E+s*b)*F,e[14]=(x*_-v*w-u*g)*F,e[15]=(d*w-h*_+p*g)*F,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,h=a+a,p=r*c,m=r*d,v=r*h,x=o*d,u=o*h,f=a*h,g=l*c,_=l*d,y=l*h,w=n.x,T=n.y,R=n.z;return s[0]=(1-(x+f))*w,s[1]=(m+y)*w,s[2]=(v-_)*w,s[3]=0,s[4]=(m-y)*T,s[5]=(1-(p+f))*T,s[6]=(u+g)*T,s[7]=0,s[8]=(v+_)*R,s[9]=(u-g)*R,s[10]=(1-(p+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Yi.set(s[0],s[1],s[2]).length();const a=Yi.set(s[4],s[5],s[6]).length(),l=Yi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),pn.copy(this);const c=1/o,d=1/a,h=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=In,l=!1){const c=this.elements,d=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s);let v,x;if(l)v=r/(o-r),x=o*r/(o-r);else if(a===In)v=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fr)v=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=In,l=!1){const c=this.elements,d=2/(t-e),h=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,x;if(l)v=1/(o-r),x=o/(o-r);else if(a===In)v=-2/(o-r),x=-(o+r)/(o-r);else if(a===fr)v=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yi=new D,pn=new it,I0=new D(0,0,0),D0=new D(1,1,1),ri=new D,Tr=new D,nn=new D,Hd=new it,Wd=new _i;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],h=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L0=0;const Xd=new D,Zi=new _i,Vn=new it,Cr=new D,Ds=new D,N0=new D,U0=new _i,$d=new D(1,0,0),qd=new D(0,1,0),jd=new D(0,0,1),Yd={type:"added"},k0={type:"removed"},Ji={type:"childadded",child:null},ca={type:"childremoved",child:null};class Et extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new D,t=new Un,n=new _i,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new je}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,t){return Xd.copy(e).applyQuaternion(this.quaternion),this.position.add(Xd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ds,Cr,this.up):Vn.lookAt(Cr,Ds,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),ca.child=e,this.dispatchEvent(ca),ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Ji.child=e,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,e,N0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ds,U0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),m=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class un extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F0={type:"move"};class da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const u=t.getJointPose(x,n),f=this._getHandJoint(c,x);u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=u.radius),f.visible=u!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function ua(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=Lc(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ua(o,r,e+1/3),this.g=ua(o,r,e),this.b=ua(o,r,e-1/3)}return st.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return st.workingToColorSpace(Vt.copy(this),e),Math.round(Xe(Vt.r*255,0,255))*65536+Math.round(Xe(Vt.g*255,0,255))*256+Math.round(Xe(Vt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,r=Vt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=kt){st.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Rr);const n=tr(oi.h,Rr.h,t),s=tr(oi.s,Rr.s,t),r=tr(oi.l,Rr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ye;Ye.NAMES=Mf;class kc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new kc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ef extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mn=new D,Hn=new D,ha=new D,Wn=new D,Ki=new D,Qi=new D,Zd=new D,fa=new D,pa=new D,ma=new D,ga=new pt,va=new pt,xa=new pt;class an{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Hn.subVectors(n,t),ha.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Hn),l=mn.dot(ha),c=Hn.dot(Hn),d=Hn.dot(ha),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const p=1/h,m=(c*l-a*d)*p,v=(o*d-a*l)*p;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return ga.setScalar(0),va.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(va,r.y),o.addScaledVector(xa,r.z),o}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Hn.subVectors(e,t),mn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),mn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),fa.subVectors(e,n);const l=Ki.dot(fa),c=Qi.dot(fa);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,s);const d=Ki.dot(pa),h=Qi.dot(pa);if(d>=0&&h<=d)return t.copy(s);const p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Ki,o);ma.subVectors(e,r);const m=Ki.dot(ma),v=Qi.dot(ma);if(v>=0&&m<=v)return t.copy(r);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Qi,a);const u=d*v-m*h;if(u<=0&&h-d>=0&&m-v>=0)return Zd.subVectors(r,s),a=(h-d)/(h-d+(m-v)),t.copy(s).addScaledVector(Zd,a);const f=1/(u+x+p);return o=x*f,a=p*f,t.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class kn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ir.subVectors(this.max,Ls),es.subVectors(e.a,Ls),ts.subVectors(e.b,Ls),ns.subVectors(e.c,Ls),ai.subVectors(ts,es),li.subVectors(ns,ts),Si.subVectors(es,ns);let t=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Si.z,Si.y,ai.z,0,-ai.x,li.z,0,-li.x,Si.z,0,-Si.x,-ai.y,ai.x,0,-li.y,li.x,0,-Si.y,Si.x,0];return!_a(t,es,ts,ns,Ir)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,es,ts,ns,Ir))?!1:(Dr.crossVectors(ai,li),t=[Dr.x,Dr.y,Dr.z],_a(t,es,ts,ns,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new D,new D,new D,new D,new D,new D,new D,new D],gn=new D,Pr=new kn,es=new D,ts=new D,ns=new D,ai=new D,li=new D,Si=new D,Ls=new D,Ir=new D,Dr=new D,Mi=new D;function _a(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),d=n.dot(Mi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const St=new D,Lr=new pe;let O0=0;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jl&&(e.usage=this.usage),e}}class Af extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tf extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const z0=new kn,Ns=new D,ya=new D;class yi{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(ya)),this.expandByPoint(Ns.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let B0=0;const dn=new it,ba=new Et,is=new D,sn=new kn,Us=new kn,Pt=new D;class Ct extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s0(e)?Tf:Af)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(sn.min,Us.min),sn.expandByPoint(Pt),Pt.addVectors(sn.max,Us.max),sn.expandByPoint(Pt)):(sn.expandByPoint(Us.min),sn.expandByPoint(Us.max))}sn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(e,c),Pt.add(is)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new D,l[b]=new D;const c=new D,d=new D,h=new D,p=new pe,m=new pe,v=new pe,x=new D,u=new D;function f(b,E,M){c.fromBufferAttribute(n,b),d.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,E),v.fromBufferAttribute(r,M),d.sub(c),h.sub(c),m.sub(p),v.sub(p);const A=1/(m.x*v.y-v.x*m.y);isFinite(A)&&(x.copy(d).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(A),u.copy(h).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(A),a[b].add(x),a[E].add(x),a[M].add(x),l[b].add(u),l[E].add(u),l[M].add(u))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let b=0,E=g.length;b<E;++b){const M=g[b],A=M.start,k=M.count;for(let N=A,L=A+k;N<L;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new D,y=new D,w=new D,T=new D;function R(b){w.fromBufferAttribute(s,b),T.copy(w);const E=a[b];_.copy(E),_.sub(w.multiplyScalar(w.dot(E))).normalize(),y.crossVectors(T,E);const A=y.dot(l[b])<0?-1:1;o.setXYZW(b,_.x,_.y,_.z,A)}for(let b=0,E=g.length;b<E;++b){const M=g[b],A=M.start,k=M.count;for(let N=A,L=A+k;N<L;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,d=new D,h=new D;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),x=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,u),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,u),a.add(d),l.add(d),c.add(d),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),d.subVectors(o,r),h.subVectors(s,r),d.cross(h),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d);let m=0,v=0;for(let x=0,u=l.length;x<u;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*d;for(let f=0;f<d;f++)p[v++]=c[m++]}return new Wt(p,d,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,h=c.length;d<h;d++){const p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],h=r[c];for(let p=0,m=h.length;p<m;p++)d.push(h[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jl,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class ln{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),s=ct(s,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ko("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ln(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ko("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let G0=0;class zi extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=vs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=Lo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kl extends zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const ks=new D,rs=new D,os=new D,as=new pe,Fs=new pe,Rf=new it,Nr=new D,Os=new D,Ur=new D,Jd=new pe,wa=new pe,Kd=new pe;class Qd extends Et{constructor(e=new Kl){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Cf(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new ln(n,3,0,!1)),ss.setAttribute("uv",new ln(n,2,3,!1))}this.geometry=ss,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rs.setFromMatrixScale(this.matrixWorld),Rf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rs.multiplyScalar(-os.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;kr(Nr.set(-.5,-.5,0),os,o,rs,s,r),kr(Os.set(.5,-.5,0),os,o,rs,s,r),kr(Ur.set(.5,.5,0),os,o,rs,s,r),Jd.set(0,0),wa.set(1,0),Kd.set(1,1);let a=e.ray.intersectTriangle(Nr,Os,Ur,!1,ks);if(a===null&&(kr(Os.set(-.5,.5,0),os,o,rs,s,r),wa.set(0,1),a=e.ray.intersectTriangle(Nr,Ur,Os,!1,ks),a===null))return;const l=e.ray.origin.distanceTo(ks);l<e.near||l>e.far||t.push({distance:l,point:ks.clone(),uv:an.getInterpolation(ks,Nr,Os,Ur,Jd,wa,Kd,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*as.x-s*as.y,Fs.y=s*as.x+r*as.y):Fs.copy(as),i.copy(e),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(Rf)}const $n=new D,Sa=new D,Fr=new D,ci=new D,Ma=new D,Or=new D,Ea=new D;class Fc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Sa.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(Sa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=ci.dot(this.direction),l=-ci.dot(Fr),c=ci.lengthSq(),d=Math.abs(1-o*o);let h,p,m,v;if(d>0)if(h=o*l-a,p=o*a-l,v=r*d,h>=0)if(p>=-v)if(p<=v){const x=1/d;h*=x,p*=x,m=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p=-r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;else p<=-v?(h=Math.max(0,-(-o*r+a)),p=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c):p<=v?(h=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(h=Math.max(0,-(o*r+a)),p=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+p*(p+2*l)+c);else p=o>0?-r:r,h=Math.max(0,-(o*p+a)),m=-h*h+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sa).addScaledVector(Fr,p),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){Ma.subVectors(t,e),Or.subVectors(n,e),Ea.crossVectors(Ma,Or);let o=this.direction.dot(Ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,e);const l=a*this.direction.dot(Or.crossVectors(ci,Or));if(l<0)return null;const c=a*this.direction.dot(Ma.cross(ci));if(c<0||l+c>o)return null;const d=-a*ci.dot(Ea);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eu=new it,Ei=new Fc,zr=new yi,tu=new D,Br=new D,Gr=new D,Vr=new D,Aa=new D,Hr=new D,nu=new D,Wr=new D;class vt extends Et{constructor(e=new Ct,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],h=r[l];d!==0&&(Aa.fromBufferAttribute(h,e),o?Hr.addScaledVector(Aa,d):Hr.addScaledVector(Aa.sub(t),d))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(zr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(zr,tu)===null||Ei.origin.distanceToSquared(tu)>(e.far-e.near)**2))&&(eu.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(eu),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,h=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const u=p[v],f=o[u.materialIndex],g=Math.max(u.start,m.start),_=Math.min(a.count,Math.min(u.start+u.count,m.start+m.count));for(let y=g,w=_;y<w;y+=3){const T=a.getX(y),R=a.getX(y+1),b=a.getX(y+2);s=Xr(this,f,e,n,c,d,h,T,R,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let u=v,f=x;u<f;u+=3){const g=a.getX(u),_=a.getX(u+1),y=a.getX(u+2);s=Xr(this,o,e,n,c,d,h,g,_,y),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=p.length;v<x;v++){const u=p[v],f=o[u.materialIndex],g=Math.max(u.start,m.start),_=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let y=g,w=_;y<w;y+=3){const T=y,R=y+1,b=y+2;s=Xr(this,f,e,n,c,d,h,T,R,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let u=v,f=x;u<f;u+=3){const g=u,_=u+1,y=u+2;s=Xr(this,o,e,n,c,d,h,g,_,y),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}}function V0(i,e,t,n,s,r,o,a){let l;if(e.side===Qt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===xi,a),l===null)return null;Wr.copy(a),Wr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Wr);return c<t.near||c>t.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Br),i.getVertexPosition(l,Gr),i.getVertexPosition(c,Vr);const d=V0(i,e,t,n,Br,Gr,Vr,nu);if(d){const h=new D;an.getBarycoord(nu,Br,Gr,Vr,h),s&&(d.uv=an.getInterpolatedAttribute(s,a,l,c,h,new pe)),r&&(d.uv1=an.getInterpolatedAttribute(r,a,l,c,h,new pe)),o&&(d.normal=an.getInterpolatedAttribute(o,a,l,c,h,new D),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new D,materialIndex:0};an.getNormal(Br,Gr,Vr,p.normal),d.face=p,d.barycoord=h}return d}class Pf extends Ht{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Ft,d=Ft,h,p){super(null,o,a,l,c,d,s,r,h,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ql extends Wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ls=new it,iu=new it,$r=[],su=new kn,H0=new it,zs=new vt,Bs=new yi;class Oo extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),su.copy(e.boundingBox).applyMatrix4(ls),this.boundingBox.union(su)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ls),Bs.copy(e.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bs.copy(this.boundingSphere),Bs.applyMatrix4(n),e.ray.intersectsSphere(Bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ls),iu.multiplyMatrices(n,ls),zs.matrixWorld=iu,zs.raycast(e,$r);for(let o=0,a=$r.length;o<a;o++){const l=$r[o];l.instanceId=r,l.object=this,t.push(l)}$r.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Pf(new Float32Array(s*this.count),s,this.count,Tc,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ta=new D,W0=new D,X0=new je;class hi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ta.subVectors(n,t).cross(W0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X0.getNormalMatrix(e),s=this.coplanarPoint(Ta).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new yi,$0=new pe(.5,.5),qr=new D;class Oc{constructor(e=new hi,t=new hi,n=new hi,s=new hi,r=new hi,o=new hi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],h=r[5],p=r[6],m=r[7],v=r[8],x=r[9],u=r[10],f=r[11],g=r[12],_=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,m-d,f-v,w-g).normalize(),s[1].setComponents(c+o,m+d,f+v,w+g).normalize(),s[2].setComponents(c+a,m+h,f+x,w+_).normalize(),s[3].setComponents(c-a,m-h,f-x,w-_).normalize(),n)s[4].setComponents(l,p,u,y).normalize(),s[5].setComponents(c-l,m-p,f-u,w-y).normalize();else if(s[4].setComponents(c-l,m-p,f-u,w-y).normalize(),t===In)s[5].setComponents(c+l,m+p,f+u,w+y).normalize();else if(t===fr)s[5].setComponents(l,p,u,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=$0.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(qr.x=s.normal.x>0?e.max.x:e.min.x,qr.y=s.normal.y>0?e.max.y:e.min.y,qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zo=new D,Bo=new D,ru=new it,Gs=new Fc,jr=new yi,Ca=new D,ou=new D;class q0 extends Et{constructor(e=new Ct,t=new zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)zo.fromBufferAttribute(t,s-1),Bo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=zo.distanceTo(Bo);e.setAttribute("lineDistance",new gt(n,1))}else Ge("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,e.ray.intersectsSphere(jr)===!1)return;ru.copy(s).invert(),Gs.copy(e.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,p=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let x=m,u=v-1;x<u;x+=c){const f=d.getX(x),g=d.getX(x+1),_=Yr(this,e,Gs,l,f,g,x);_&&t.push(_)}if(this.isLineLoop){const x=d.getX(v-1),u=d.getX(m),f=Yr(this,e,Gs,l,x,u,v-1);f&&t.push(f)}}else{const m=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let x=m,u=v-1;x<u;x+=c){const f=Yr(this,e,Gs,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Yr(this,e,Gs,l,v-1,m,v-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yr(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(zo.fromBufferAttribute(a,s),Bo.fromBufferAttribute(a,r),t.distanceSqToSegment(zo,Bo,Ca,ou)>n)return;Ca.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ca);if(!(c<e.near||c>e.far))return{distance:c,point:ou.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const au=new D,lu=new D;class If extends q0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)au.fromBufferAttribute(t,s),lu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+au.distanceTo(lu);e.setAttribute("lineDistance",new gt(n,1))}else Ge("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Df extends Ht{constructor(e=[],t=Fi,n,s,r,o,a,l,c,d){super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yr extends Ht{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mr extends Ht{constructor(e,t,n=Nn,s,r,o,a=Ft,l=Ft,c,d=Qn,h=1){if(d!==Qn&&d!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:h};super(p,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class j0 extends mr{constructor(e,t=Nn,n=Fi,s,r,o=Ft,a=Ft,l,c=Qn){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lf extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ei extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],h=[];let p=0,m=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(h,2));function v(x,u,f,g,_,y,w,T,R,b,E){const M=y/R,A=w/b,k=y/2,N=w/2,L=T/2,F=R+1,U=b+1;let z=0,Z=0;const j=new D;for(let de=0;de<U;de++){const se=de*A-N;for(let te=0;te<F;te++){const Ae=te*M-k;j[x]=Ae*g,j[u]=se*_,j[f]=L,c.push(j.x,j.y,j.z),j[x]=0,j[u]=0,j[f]=T>0?1:-1,d.push(j.x,j.y,j.z),h.push(te/R),h.push(1-de/b),z+=1}}for(let de=0;de<b;de++)for(let se=0;se<R;se++){const te=p+se+F*de,Ae=p+se+F*(de+1),Qe=p+(se+1)+F*(de+1),tt=p+(se+1)+F*de;l.push(te,Ae,tt),l.push(Ae,Qe,tt),Z+=6}a.addGroup(m,Z,E),m+=Z,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Zr=new D,Jr=new D,Ra=new D,Kr=new an;class Y0 extends Ct{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(xs*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],d=["a","b","c"],h=new Array(3),p={},m=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:x,b:u,c:f}=Kr;if(x.fromBufferAttribute(a,c[0]),u.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Kr.getNormal(Ra),h[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,h[1]=`${Math.round(u.x*s)},${Math.round(u.y*s)},${Math.round(u.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let g=0;g<3;g++){const _=(g+1)%3,y=h[g],w=h[_],T=Kr[d[g]],R=Kr[d[_]],b=`${y}_${w}`,E=`${w}_${y}`;E in p&&p[E]?(Ra.dot(p[E].normal)<=r&&(m.push(T.x,T.y,T.z),m.push(R.x,R.y,R.z)),p[E]=null):b in p||(p[b]={index0:c[g],index1:c[_],normal:Ra.clone()})}}for(const v in p)if(p[v]){const{index0:x,index1:u}=p[v];Zr.fromBufferAttribute(a,x),Jr.fromBufferAttribute(a,u),m.push(Zr.x,Zr.y,Zr.z),m.push(Jr.x,Jr.y,Jr.z)}this.setAttribute("position",new gt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const d=n[s],p=n[s+1]-d,m=(o-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new pe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],o=[],a=new D,l=new it;for(let m=0;m<=e;m++){const v=m/e;s[m]=this.getTangentAt(v,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const d=Math.abs(s[0].x),h=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,v))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Xe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],m*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Bc extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new pe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*h+this.aX,c=p*h+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Z0 extends Bc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,h){let p=(o-r)/c-(a-r)/(c+d)+(a-o)/d,m=(a-o)/d-(l-o)/(d+h)+(l-a)/h;p*=d,m*=d,s(o,a,p,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Qr=new D,Pa=new Gc,Ia=new Gc,Da=new Gc;class J0 extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),c=Qr);const h=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),m),x=Math.pow(h.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(d),m);x<1e-4&&(x=1),v<1e-4&&(v=x),u<1e-4&&(u=x),Pa.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,v,x,u),Ia.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,v,x,u),Da.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,v,x,u)}else this.curveType==="catmullrom"&&(Pa.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),Ia.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),Da.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return n.set(Pa.calc(l),Ia.calc(l),Da.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function K0(i,e){const t=1-i;return t*t*e}function Q0(i,e){return 2*(1-i)*i*e}function ev(i,e){return i*i*e}function nr(i,e,t,n){return K0(i,e)+Q0(i,t)+ev(i,n)}function tv(i,e){const t=1-i;return t*t*t*e}function nv(i,e){const t=1-i;return 3*t*t*i*e}function iv(i,e){return 3*(1-i)*i*i*e}function sv(i,e){return i*i*i*e}function ir(i,e,t,n,s){return tv(i,e)+nv(i,t)+iv(i,n)+sv(i,s)}class Nf extends Fn{constructor(e=new pe,t=new pe,n=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rv extends Fn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ir(e,s.x,r.x,o.x,a.x),ir(e,s.y,r.y,o.y,a.y),ir(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uf extends Fn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends Fn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kf extends Fn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class av extends Fn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(nr(e,s.x,r.x,o.x),nr(e,s.y,r.y,o.y),nr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ff extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(cu(a,l.x,c.x,d.x,h.x),cu(a,l.y,c.y,d.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new pe().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Z0,CatmullRomCurve3:J0,CubicBezierCurve:Nf,CubicBezierCurve3:rv,EllipseCurve:Bc,LineCurve:Uf,LineCurve3:ov,QuadraticBezierCurve:kf,QuadraticBezierCurve3:av,SplineCurve:Ff});class lv extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class du extends lv{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Uf(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new kf(this.currentPoint.clone(),new pe(e,t),new pe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Nf(this.currentPoint.clone(),new pe(e,t),new pe(n,s),new pe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ff(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Bc(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class tc extends du{constructor(e){super(e),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new du().fromJSON(s))}return this}}function cv(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Of(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=pv(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let d=a,h=l;for(let p=t;p<s;p+=t){const m=i[p],v=i[p+1];m<a&&(a=m),v<l&&(l=v),m>d&&(d=m),v>h&&(h=v)}c=Math.max(d-a,h-l),c=c!==0?32767/c:0}return gr(r,o,t,a,l,c,0),o}function Of(i,e,t,n,s){let r;if(s===Ev(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=uu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=uu(o/n|0,i[o],i[o+1],r);return r&&As(r,r.next)&&(xr(r),r=r.next),r}function Oi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(As(t,t.next)||xt(t.prev,t,t.next)===0)){if(xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&_v(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?uv(i,n,s,r):dv(i)){e.push(l.i,i.i,c.i),xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=hv(Oi(i),e),gr(i,e,t,n,s,r,2)):o===2&&fv(i,e,t,n,s,r):gr(Oi(i),e,t,n,s,r,1);break}}}function dv(i){const e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(s,r,o),h=Math.min(a,l,c),p=Math.max(s,r,o),m=Math.max(a,l,c);let v=n.next;for(;v!==e;){if(v.x>=d&&v.x<=p&&v.y>=h&&v.y<=m&&js(s,a,r,l,o,c,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function uv(i,e,t,n){const s=i.prev,r=i,o=i.next;if(xt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,d=s.y,h=r.y,p=o.y,m=Math.min(a,l,c),v=Math.min(d,h,p),x=Math.max(a,l,c),u=Math.max(d,h,p),f=nc(m,v,e,t,n),g=nc(x,u,e,t,n);let _=i.prevZ,y=i.nextZ;for(;_&&_.z>=f&&y&&y.z<=g;){if(_.x>=m&&_.x<=x&&_.y>=v&&_.y<=u&&_!==s&&_!==o&&js(a,d,l,h,c,p,_.x,_.y)&&xt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=m&&y.x<=x&&y.y>=v&&y.y<=u&&y!==s&&y!==o&&js(a,d,l,h,c,p,y.x,y.y)&&xt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=f;){if(_.x>=m&&_.x<=x&&_.y>=v&&_.y<=u&&_!==s&&_!==o&&js(a,d,l,h,c,p,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=g;){if(y.x>=m&&y.x<=x&&y.y>=v&&y.y<=u&&y!==s&&y!==o&&js(a,d,l,h,c,p,y.x,y.y)&&xt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function hv(i,e){let t=i;do{const n=t.prev,s=t.next.next;!As(n,s)&&Bf(n,t,t.next,s)&&vr(n,s)&&vr(s,n)&&(e.push(n.i,t.i,s.i),xr(t),xr(t.next),t=i=s),t=t.next}while(t!==i);return Oi(t)}function fv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wv(o,a)){let l=Gf(o,a);o=Oi(o,o.next),l=Oi(l,l.next),gr(o,e,t,n,s,r,0),gr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pv(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Of(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bv(c))}s.sort(mv);for(let r=0;r<s.length;r++)t=gv(s[r],t);return t}function mv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function gv(i,e){const t=vv(i,e);if(!t)return e;const n=Gf(t,i);return Oi(n,n.next),Oi(t,t.next)}function vv(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(As(i,t))return t;do{if(As(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&zf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);vr(t,i)&&(h<d||h===d&&(t.x>o.x||t.x===o.x&&xv(o,t)))&&(o=t,d=h)}t=t.next}while(t!==a);return o}function xv(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function _v(i,e,t,n){let s=i;do s.z===0&&(s.z=nc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yv(s)}function yv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function nc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zf(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function js(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&zf(i,e,t,n,s,r,o,a)}function wv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sv(i,e)&&(vr(i,e)&&vr(e,i)&&Mv(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||As(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function As(i,e){return i.x===e.x&&i.y===e.y}function Bf(i,e,t,n){const s=to(xt(i,e,t)),r=to(xt(i,e,n)),o=to(xt(t,n,i)),a=to(xt(t,n,e));return!!(s!==r&&o!==a||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||o===0&&eo(t,i,n)||a===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function Sv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vr(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Mv(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gf(i,e){const t=ic(i.i,i.x,i.y),n=ic(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(i,e,t,n){const s=ic(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ic(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ev(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Av{static triangulate(e,t,n=2){return cv(e,t,n)}}class gs{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return gs.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hu(e),fu(n,e);let o=e.length;t.forEach(hu);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fu(n,t[l]);const a=Av.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function hu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vc extends Ct{constructor(e=new tc([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,u=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Tv;let _,y=!1,w,T,R,b;if(f){_=f.getSpacedPoints(d),y=!0,p=!1;const Q=f.isCatmullRomCurve3?f.closed:!1;w=f.computeFrenetFrames(d,Q),T=new D,R=new D,b=new D}p||(u=0,m=0,v=0,x=0);const E=a.extractPoints(c);let M=E.shape;const A=E.holes;if(!gs.isClockWise(M)){M=M.reverse();for(let Q=0,re=A.length;Q<re;Q++){const ee=A[Q];gs.isClockWise(ee)&&(A[Q]=ee.reverse())}}function N(Q){const ee=10000000000000001e-36;let _e=Q[0];for(let I=1;I<=Q.length;I++){const Fe=I%Q.length,we=Q[Fe],ze=we.x-_e.x,me=we.y-_e.y,P=ze*ze+me*me,S=Math.max(Math.abs(we.x),Math.abs(we.y),Math.abs(_e.x),Math.abs(_e.y)),G=ee*S*S;if(P<=G){Q.splice(Fe,1),I--;continue}_e=we}}N(M),A.forEach(N);const L=A.length,F=M;for(let Q=0;Q<L;Q++){const re=A[Q];M=M.concat(re)}function U(Q,re,ee){return re||nt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,ee)}const z=M.length;function Z(Q,re,ee){let _e,I,Fe;const we=Q.x-re.x,ze=Q.y-re.y,me=ee.x-Q.x,P=ee.y-Q.y,S=we*we+ze*ze,G=we*P-ze*me;if(Math.abs(G)>Number.EPSILON){const $=Math.sqrt(S),K=Math.sqrt(me*me+P*P),q=re.x-ze/$,Te=re.y+we/$,ge=ee.x-P/K,Ne=ee.y+me/K,Be=((ge-q)*P-(Ne-Te)*me)/(we*P-ze*me);_e=q+we*Be-Q.x,I=Te+ze*Be-Q.y;const ie=_e*_e+I*I;if(ie<=2)return new pe(_e,I);Fe=Math.sqrt(ie/2)}else{let $=!1;we>Number.EPSILON?me>Number.EPSILON&&($=!0):we<-Number.EPSILON?me<-Number.EPSILON&&($=!0):Math.sign(ze)===Math.sign(P)&&($=!0),$?(_e=-ze,I=we,Fe=Math.sqrt(S)):(_e=we,I=ze,Fe=Math.sqrt(S/2))}return new pe(_e/Fe,I/Fe)}const j=[];for(let Q=0,re=F.length,ee=re-1,_e=Q+1;Q<re;Q++,ee++,_e++)ee===re&&(ee=0),_e===re&&(_e=0),j[Q]=Z(F[Q],F[ee],F[_e]);const de=[];let se,te=j.concat();for(let Q=0,re=L;Q<re;Q++){const ee=A[Q];se=[];for(let _e=0,I=ee.length,Fe=I-1,we=_e+1;_e<I;_e++,Fe++,we++)Fe===I&&(Fe=0),we===I&&(we=0),se[_e]=Z(ee[_e],ee[Fe],ee[we]);de.push(se),te=te.concat(se)}let Ae;if(u===0)Ae=gs.triangulateShape(F,A);else{const Q=[],re=[];for(let ee=0;ee<u;ee++){const _e=ee/u,I=m*Math.cos(_e*Math.PI/2),Fe=v*Math.sin(_e*Math.PI/2)+x;for(let we=0,ze=F.length;we<ze;we++){const me=U(F[we],j[we],Fe);Oe(me.x,me.y,-I),_e===0&&Q.push(me)}for(let we=0,ze=L;we<ze;we++){const me=A[we];se=de[we];const P=[];for(let S=0,G=me.length;S<G;S++){const $=U(me[S],se[S],Fe);Oe($.x,$.y,-I),_e===0&&P.push($)}_e===0&&re.push(P)}}Ae=gs.triangulateShape(Q,re)}const Qe=Ae.length,tt=v+x;for(let Q=0;Q<z;Q++){const re=p?U(M[Q],te[Q],tt):M[Q];y?(R.copy(w.normals[0]).multiplyScalar(re.x),T.copy(w.binormals[0]).multiplyScalar(re.y),b.copy(_[0]).add(R).add(T),Oe(b.x,b.y,b.z)):Oe(re.x,re.y,0)}for(let Q=1;Q<=d;Q++)for(let re=0;re<z;re++){const ee=p?U(M[re],te[re],tt):M[re];y?(R.copy(w.normals[Q]).multiplyScalar(ee.x),T.copy(w.binormals[Q]).multiplyScalar(ee.y),b.copy(_[Q]).add(R).add(T),Oe(b.x,b.y,b.z)):Oe(ee.x,ee.y,h/d*Q)}for(let Q=u-1;Q>=0;Q--){const re=Q/u,ee=m*Math.cos(re*Math.PI/2),_e=v*Math.sin(re*Math.PI/2)+x;for(let I=0,Fe=F.length;I<Fe;I++){const we=U(F[I],j[I],_e);Oe(we.x,we.y,h+ee)}for(let I=0,Fe=A.length;I<Fe;I++){const we=A[I];se=de[I];for(let ze=0,me=we.length;ze<me;ze++){const P=U(we[ze],se[ze],_e);y?Oe(P.x,P.y+_[d-1].y,_[d-1].x+ee):Oe(P.x,P.y,h+ee)}}}J(),oe();function J(){const Q=s.length/3;if(p){let re=0,ee=z*re;for(let _e=0;_e<Qe;_e++){const I=Ae[_e];ke(I[2]+ee,I[1]+ee,I[0]+ee)}re=d+u*2,ee=z*re;for(let _e=0;_e<Qe;_e++){const I=Ae[_e];ke(I[0]+ee,I[1]+ee,I[2]+ee)}}else{for(let re=0;re<Qe;re++){const ee=Ae[re];ke(ee[2],ee[1],ee[0])}for(let re=0;re<Qe;re++){const ee=Ae[re];ke(ee[0]+z*d,ee[1]+z*d,ee[2]+z*d)}}n.addGroup(Q,s.length/3-Q,0)}function oe(){const Q=s.length/3;let re=0;le(F,re),re+=F.length;for(let ee=0,_e=A.length;ee<_e;ee++){const I=A[ee];le(I,re),re+=I.length}n.addGroup(Q,s.length/3-Q,1)}function le(Q,re){let ee=Q.length;for(;--ee>=0;){const _e=ee;let I=ee-1;I<0&&(I=Q.length-1);for(let Fe=0,we=d+u*2;Fe<we;Fe++){const ze=z*Fe,me=z*(Fe+1),P=re+_e+ze,S=re+I+ze,G=re+I+me,$=re+_e+me;Ve(P,S,G,$)}}}function Oe(Q,re,ee){l.push(Q),l.push(re),l.push(ee)}function ke(Q,re,ee){dt(Q),dt(re),dt(ee);const _e=s.length/3,I=g.generateTopUV(n,s,_e-3,_e-2,_e-1);$e(I[0]),$e(I[1]),$e(I[2])}function Ve(Q,re,ee,_e){dt(Q),dt(re),dt(_e),dt(re),dt(ee),dt(_e);const I=s.length/3,Fe=g.generateSideWallUV(n,s,I-6,I-3,I-2,I-1);$e(Fe[0]),$e(Fe[1]),$e(Fe[3]),$e(Fe[1]),$e(Fe[2]),$e(Fe[3])}function dt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function $e(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cv(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ec[s.type]().fromJSON(s)),new Vc(n,e.options)}}const Tv={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new pe(r,o),new pe(a,l),new pe(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],h=e[n*3+2],p=e[s*3],m=e[s*3+1],v=e[s*3+2],x=e[r*3],u=e[r*3+1],f=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-h),new pe(p,1-v),new pe(x,1-f)]:[new pe(a,1-l),new pe(d,1-h),new pe(m,1-v),new pe(u,1-f)]}};function Cv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ti extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,h=e/a,p=t/l,m=[],v=[],x=[],u=[];for(let f=0;f<d;f++){const g=f*p-o;for(let _=0;_<c;_++){const y=_*h-r;v.push(y,-g,0),x.push(0,0,1),u.push(_/a),u.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const _=g+c*f,y=g+c*(f+1),w=g+1+c*(f+1),T=g+1+c*f;m.push(_,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hc extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],d=[];let h=e;const p=(t-e)/s,m=new D,v=new pe;for(let x=0;x<=s;x++){for(let u=0;u<=n;u++){const f=r+u/n*o;m.x=h*Math.cos(f),m.y=h*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),v.x=(m.x/t+1)/2,v.y=(m.y/t+1)/2,d.push(v.x,v.y)}h+=p}for(let x=0;x<s;x++){const u=x*(n+1);for(let f=0;f<n;f++){const g=f+u,_=g,y=g+n+1,w=g+n+2,T=g+1;a.push(_,y,T),a.push(y,w,T)}}this.setIndex(a),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Wc extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new D,p=new D,m=[],v=[],x=[],u=[];for(let f=0;f<=n;f++){const g=[],_=f/n;let y=0;f===0&&o===0?y=.5/t:f===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),p.copy(h).normalize(),x.push(p.x,p.y,p.z),u.push(T+y,1-_),g.push(c++)}d.push(g)}for(let f=0;f<n;f++)for(let g=0;g<t;g++){const _=d[f][g+1],y=d[f][g],w=d[f+1][g],T=d[f+1][g+1];(f!==0||o>0)&&m.push(_,y,T),(f!==n-1||l<Math.PI)&&m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new gt(v,3)),this.setAttribute("normal",new gt(x,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rv extends Ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,s=new D,r=new D;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,d=l.length;c<d;++c){const h=l[c],p=h.start,m=h.count;for(let v=p,x=p+m;v<x;v+=3)for(let u=0;u<3;u++){const f=a.getX(v+u),g=a.getX(v+(u+1)%3);s.fromBufferAttribute(o,f),r.fromBufferAttribute(o,g),pu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const d=3*a+c,h=3*a+(c+1)%3;s.fromBufferAttribute(o,d),r.fromBufferAttribute(o,h),pu(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new gt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function pu(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}function Ts(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=Ts(i[t]);for(const s in n)e[s]=n[s]}return e}function Pv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const qo={clone:Ts,merge:$t};var Iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iv,this.fragmentShader=Dv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Pv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Lv extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xc extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bf,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nv extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hf extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const La=new it,mu=new D,gu=new D;class kv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oc,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const no=new D,io=new _i,Mn=new D;class Wf extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(no,io,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const di=new D,vu=new pe,xu=new pe;class Zt extends Wf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,vu,xu),t.subVectors(xu,vu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class br extends Wf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fv extends kv{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ov extends Hf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Fv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zv extends Hf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bv extends Ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const cs=-90,ds=1;class Gv extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(cs,ds,e,t);s.layers=this.layers,this.add(s);const r=new Zt(cs,ds,e,t);r.layers=this.layers,this.add(r);const o=new Zt(cs,ds,e,t);o.layers=this.layers,this.add(o);const a=new Zt(cs,ds,e,t);a.layers=this.layers,this.add(a);const l=new Zt(cs,ds,e,t);l.layers=this.layers,this.add(l);const c=new Zt(cs,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(h,p,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Vv extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sc extends Cf{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const _u=new it;class Hv{constructor(e,t,n=0,s=1/0){this.ray=new Fc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_u),this}intersectObject(e,t=!0,n=[]){return rc(e,this,n,t),n.sort(yu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)rc(e[s],this,n,t);return n.sort(yu),n}}function yu(i,e){return i.distance-e.distance}function rc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)rc(r[o],e,t,!0)}}const bu=new D,so=new D,us=new D,hs=new D,Na=new D,Wv=new D,Xv=new D;class $v{constructor(e=new D,t=new D){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){bu.subVectors(e,this.start),so.subVectors(this.end,this.start);const n=so.dot(so);let r=so.dot(bu)/n;return t&&(r=Xe(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(e,t=Wv,n=Xv){const s=10000000000000001e-32;let r,o;const a=this.start,l=e.start,c=this.end,d=e.end;us.subVectors(c,a),hs.subVectors(d,l),Na.subVectors(a,l);const h=us.dot(us),p=hs.dot(hs),m=hs.dot(Na);if(h<=s&&p<=s)return t.copy(a),n.copy(l),t.sub(n),t.dot(t);if(h<=s)r=0,o=m/p,o=Xe(o,0,1);else{const v=us.dot(Na);if(p<=s)o=0,r=Xe(-v/h,0,1);else{const x=us.dot(hs),u=h*p-x*x;u!==0?r=Xe((x*m-v*p)/u,0,1):r=0,o=(x*r+m)/p,o<0?(o=0,r=Xe(-v/h,0,1)):o>1&&(o=1,r=Xe((x-v)/h,0,1))}}return t.copy(a).addScaledVector(us,r),n.copy(l).addScaledVector(hs,o),t.distanceToSquared(n)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class wu extends If{constructor(e=10,t=10,n=4473924,s=8947848){n=new Ye(n),s=new Ye(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let p=0,m=0,v=-a;p<=t;p++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const x=p===r?n:s;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const d=new Ct;d.setAttribute("position",new gt(l,3)),d.setAttribute("color",new gt(c,3));const h=new zc({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Su(i,e,t,n){const s=qv(n);switch(t){case _f:return i*e;case Tc:return i*e/s.components*s.byteLength;case Cc:return i*e/s.components*s.byteLength;case Ms:return i*e*2/s.components*s.byteLength;case Rc:return i*e*2/s.components*s.byteLength;case yf:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Pc:return i*e*4/s.components*s.byteLength;case bo:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:case wl:return Math.max(i,16)*Math.max(e,8)/4;case _l:case bl:return Math.max(i,8)*Math.max(e,8)/2;case Sl:case Ml:case Al:case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case El:case Cl:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ql:case jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qv(i){switch(i){case on:case mf:return{byteLength:1,components:1};case ur:case gf:case Kn:return{byteLength:2,components:1};case Ec:case Ac:return{byteLength:2,components:4};case Nn:case Mc:case _n:return{byteLength:4,components:1};case vf:case xf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function Xf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jv(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,h=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const d=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,d);else{h.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<h.length;m++){const v=h[p],x=h[m];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++p,h[p]=x)}h.length=p+1;for(let m=0,v=h.length;m<v;m++){const x=h[m];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zv=`#ifdef USE_ALPHAHASH
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
#endif`,Jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tx=`#ifdef USE_AOMAP
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
#endif`,nx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ix=`#ifdef USE_BATCHING
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
#endif`,sx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ox=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lx=`#ifdef USE_IRIDESCENCE
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
#endif`,cx=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,px=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xx=`#define PI 3.141592653589793
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
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yx=`vec3 transformedNormal = objectNormal;
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
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
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
#endif`,qx=`uniform sampler2D dfgLUT;
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
}`,jx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,a_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,u_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,__=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,N_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`#include <common>
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
}`,ty=`#if DEPTH_PACKING == 3200
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
}`,ny=`#define DISTANCE
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
}`,iy=`#define DISTANCE
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`uniform float scale;
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
}`,ay=`uniform vec3 diffuse;
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
}`,ly=`#include <common>
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
}`,cy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,uy=`#define LAMBERT
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
}`,hy=`#define MATCAP
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
}`,fy=`#define MATCAP
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
}`,py=`#define NORMAL
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
}`,my=`#define NORMAL
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
}`,gy=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,xy=`#define STANDARD
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
}`,_y=`#define STANDARD
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
}`,yy=`#define TOON
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
}`,by=`#define TOON
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
}`,wy=`uniform float size;
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
}`,Sy=`uniform vec3 diffuse;
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
}`,My=`#include <common>
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
}`,Ey=`uniform vec3 color;
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
}`,Ay=`uniform float rotation;
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
}`,Ty=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Yv,alphahash_pars_fragment:Zv,alphamap_fragment:Jv,alphamap_pars_fragment:Kv,alphatest_fragment:Qv,alphatest_pars_fragment:ex,aomap_fragment:tx,aomap_pars_fragment:nx,batching_pars_vertex:ix,batching_vertex:sx,begin_vertex:rx,beginnormal_vertex:ox,bsdfs:ax,iridescence_fragment:lx,bumpmap_pars_fragment:cx,clipping_planes_fragment:dx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:fx,color_fragment:px,color_pars_fragment:mx,color_pars_vertex:gx,color_vertex:vx,common:xx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:yx,displacementmap_pars_vertex:bx,displacementmap_vertex:wx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Mx,colorspace_fragment:Ex,colorspace_pars_fragment:Ax,envmap_fragment:Tx,envmap_common_pars_fragment:Cx,envmap_pars_fragment:Rx,envmap_pars_vertex:Px,envmap_physical_pars_fragment:Gx,envmap_vertex:Ix,fog_vertex:Dx,fog_pars_vertex:Lx,fog_fragment:Nx,fog_pars_fragment:Ux,gradientmap_pars_fragment:kx,lightmap_pars_fragment:Fx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:zx,lights_pars_begin:Bx,lights_toon_fragment:Vx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:$x,lights_physical_pars_fragment:qx,lights_fragment_begin:jx,lights_fragment_maps:Yx,lights_fragment_end:Zx,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:e_,map_fragment:t_,map_pars_fragment:n_,map_particle_fragment:i_,map_particle_pars_fragment:s_,metalnessmap_fragment:r_,metalnessmap_pars_fragment:o_,morphinstance_vertex:a_,morphcolor_vertex:l_,morphnormal_vertex:c_,morphtarget_pars_vertex:d_,morphtarget_vertex:u_,normal_fragment_begin:h_,normal_fragment_maps:f_,normal_pars_fragment:p_,normal_pars_vertex:m_,normal_vertex:g_,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:__,clearcoat_pars_fragment:y_,iridescence_pars_fragment:b_,opaque_fragment:w_,packing:S_,premultiplied_alpha_fragment:M_,project_vertex:E_,dithering_fragment:A_,dithering_pars_fragment:T_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:R_,shadowmap_pars_fragment:P_,shadowmap_pars_vertex:I_,shadowmap_vertex:D_,shadowmask_pars_fragment:L_,skinbase_vertex:N_,skinning_pars_vertex:U_,skinning_vertex:k_,skinnormal_vertex:F_,specularmap_fragment:O_,specularmap_pars_fragment:z_,tonemapping_fragment:B_,tonemapping_pars_fragment:G_,transmission_fragment:V_,transmission_pars_fragment:H_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:$_,worldpos_vertex:q_,background_vert:j_,background_frag:Y_,backgroundCube_vert:Z_,backgroundCube_frag:J_,cube_vert:K_,cube_frag:Q_,depth_vert:ey,depth_frag:ty,distance_vert:ny,distance_frag:iy,equirect_vert:sy,equirect_frag:ry,linedashed_vert:oy,linedashed_frag:ay,meshbasic_vert:ly,meshbasic_frag:cy,meshlambert_vert:dy,meshlambert_frag:uy,meshmatcap_vert:hy,meshmatcap_frag:fy,meshnormal_vert:py,meshnormal_frag:my,meshphong_vert:gy,meshphong_frag:vy,meshphysical_vert:xy,meshphysical_frag:_y,meshtoon_vert:yy,meshtoon_frag:by,points_vert:wy,points_frag:Sy,shadow_vert:My,shadow_frag:Ey,sprite_vert:Ay,sprite_frag:Ty},xe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Jt={basic:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:$t([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:$t([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:$t([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:$t([xe.points,xe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:$t([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:$t([xe.common,xe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:$t([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:$t([xe.sprite,xe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:$t([xe.common,xe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:$t([xe.lights,xe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Jt.physical={uniforms:$t([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ro={r:0,b:0,g:0},Ti=new Un,Cy=new it;function Ry(i,e,t,n,s,r){const o=new Ye(0);let a=s===!0?0:1,l,c,d=null,h=0,p=null;function m(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const y=g.backgroundBlurriness>0;_=e.get(_,y)}return _}function v(g){let _=!1;const y=m(g);y===null?u(o,a):y&&y.isColor&&(u(y,1),_=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(g,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===$o)?(c===void 0&&(c=new vt(new ei(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ts(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),Ti.copy(_.backgroundRotation),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Cy.makeRotationFromEuler(Ti)),c.material.toneMapped=st.getTransfer(y.colorSpace)!==lt,(d!==y||h!==y.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new vt(new ti(2,2),new cn({name:"BackgroundMaterial",uniforms:Ts(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=st.getTransfer(y.colorSpace)!==lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,p=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function u(g,_){g.getRGB(ro,Vf(i)),t.buffers.color.setClear(ro.r,ro.g,ro.b,_,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,_=1){o.set(g),a=_,u(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,u(o,a)},render:v,addToRenderList:x,dispose:f}}function Py(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(A,k,N,L,F){let U=!1;const z=h(A,L,N,k);r!==z&&(r=z,c(r.object)),U=m(A,L,N,F),U&&v(A,L,N,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(A,k,N,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function h(A,k,N,L){const F=L.wireframe===!0;let U=n[k.id];U===void 0&&(U={},n[k.id]=U);const z=A.isInstancedMesh===!0?A.id:0;let Z=U[z];Z===void 0&&(Z={},U[z]=Z);let j=Z[N.id];j===void 0&&(j={},Z[N.id]=j);let de=j[F];return de===void 0&&(de=p(l()),j[F]=de),de}function p(A){const k=[],N=[],L=[];for(let F=0;F<t;F++)k[F]=0,N[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:N,attributeDivisors:L,object:A,attributes:{},index:null}}function m(A,k,N,L){const F=r.attributes,U=k.attributes;let z=0;const Z=N.getAttributes();for(const j in Z)if(Z[j].location>=0){const se=F[j];let te=U[j];if(te===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(te=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(te=A.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;z++}return r.attributesNum!==z||r.index!==L}function v(A,k,N,L){const F={},U=k.attributes;let z=0;const Z=N.getAttributes();for(const j in Z)if(Z[j].location>=0){let se=U[j];se===void 0&&(j==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),j==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const te={};te.attribute=se,se&&se.data&&(te.data=se.data),F[j]=te,z++}r.attributes=F,r.attributesNum=z,r.index=L}function x(){const A=r.newAttributes;for(let k=0,N=A.length;k<N;k++)A[k]=0}function u(A){f(A,0)}function f(A,k){const N=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;N[A]=1,L[A]===0&&(i.enableVertexAttribArray(A),L[A]=1),F[A]!==k&&(i.vertexAttribDivisor(A,k),F[A]=k)}function g(){const A=r.newAttributes,k=r.enabledAttributes;for(let N=0,L=k.length;N<L;N++)k[N]!==A[N]&&(i.disableVertexAttribArray(N),k[N]=0)}function _(A,k,N,L,F,U,z){z===!0?i.vertexAttribIPointer(A,k,N,F,U):i.vertexAttribPointer(A,k,N,L,F,U)}function y(A,k,N,L){x();const F=L.attributes,U=N.getAttributes(),z=k.defaultAttributeValues;for(const Z in U){const j=U[Z];if(j.location>=0){let de=F[Z];if(de===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const se=de.normalized,te=de.itemSize,Ae=e.get(de);if(Ae===void 0)continue;const Qe=Ae.buffer,tt=Ae.type,J=Ae.bytesPerElement,oe=tt===i.INT||tt===i.UNSIGNED_INT||de.gpuType===Mc;if(de.isInterleavedBufferAttribute){const le=de.data,Oe=le.stride,ke=de.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<j.locationSize;Ve++)f(j.location+Ve,le.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<j.locationSize;Ve++)u(j.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Ve=0;Ve<j.locationSize;Ve++)_(j.location+Ve,te/j.locationSize,tt,se,Oe*J,(ke+te/j.locationSize*Ve)*J,oe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<j.locationSize;le++)f(j.location+le,de.meshPerAttribute);A.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<j.locationSize;le++)u(j.location+le);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let le=0;le<j.locationSize;le++)_(j.location+le,te/j.locationSize,tt,se,te*J,te/j.locationSize*le*J,oe)}}else if(z!==void 0){const se=z[Z];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(j.location,se);break;case 3:i.vertexAttrib3fv(j.location,se);break;case 4:i.vertexAttrib4fv(j.location,se);break;default:i.vertexAttrib1fv(j.location,se)}}}}g()}function w(){E();for(const A in n){const k=n[A];for(const N in k){const L=k[N];for(const F in L){const U=L[F];for(const z in U)d(U[z].object),delete U[z];delete L[F]}}delete n[A]}}function T(A){if(n[A.id]===void 0)return;const k=n[A.id];for(const N in k){const L=k[N];for(const F in L){const U=L[F];for(const z in U)d(U[z].object),delete U[z];delete L[F]}}delete n[A.id]}function R(A){for(const k in n){const N=n[k];for(const L in N){const F=N[L];if(F[A.id]===void 0)continue;const U=F[A.id];for(const z in U)d(U[z].object),delete U[z];delete F[A.id]}}}function b(A){for(const k in n){const N=n[k],L=A.isInstancedMesh===!0?A.id:0,F=N[L];if(F!==void 0){for(const U in F){const z=F[U];for(const Z in z)d(z[Z].object),delete z[Z];delete F[U]}delete N[L],Object.keys(N).length===0&&delete n[k]}}}function E(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:u,disableUnusedAttributes:g}}function Iy(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,h){h!==0&&(i.drawArraysInstanced(n,c,d,h),t.update(d,n,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=d[v];t.update(m,n,1)}function l(c,d,h,p){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,p,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x]*p[x];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const b=R===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!b)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ge("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:u,maxAttributes:f,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,maxSamples:w,samples:T}}function Ly(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new hi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const m=h.length!==0||p||n!==0||s;return s=p,n=h.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,p){t=d(h,p,0)},this.setState=function(h,p,m){const v=h.clippingPlanes,x=h.clipIntersection,u=h.clipShadows,f=i.get(h);if(!s||v===null||v.length===0||r&&!u)r?d(null):c();else{const g=r?0:n,_=g*4;let y=f.clippingState||null;l.value=y,y=d(v,p,_,m);for(let w=0;w!==_;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(h,p,m,v){const x=h!==null?h.length:0;let u=null;if(x!==0){if(u=l.value,v!==!0||u===null){const f=m+x*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(u===null||u.length<f)&&(u=new Float32Array(f));for(let _=0,y=m;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(u,y),u[y+3]=o.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}const mi=4,Mu=[.125,.215,.35,.446,.526,.582],Pi=20,Ny=256,Vs=new br,Eu=new Ye;let Ua=null,ka=0,Fa=0,Oa=!1;const Uy=new D;class Au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Uy}=r;Ua=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua,ka,Fa),this._renderer.xr.enabled=Oa,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Kn,format:yn,colorSpace:Es,depthBuffer:!1},s=Tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ky(r)),this._blurMaterial=Oy(r,e,t),this._ggxMaterial=Fy(r,e,t)}return s}_compileMaterial(e){const t=new vt(new Ct,e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,s,r){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(Eu),h.toneMapping=Dn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vt(new ei,new Kt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,u=x.material;let f=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,f=!0):(u.color.copy(Eu),f=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[_],r.y,r.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[_]));const w=this._cubeSize;fs(s,y*w,_>2?w:0,w,w),h.setRenderTarget(s),f&&h.render(x,l),h.render(e,l)}h.toneMapping=m,h.autoClear=p,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-d*d),p=0+c*1.25,m=h*p,{_lodMax:v}=this,x=this._sizeLods[n],u=3*x*(n>v-mi?n-v+mi:0),f=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-t,fs(r,u,f,3*x,2*x),s.setRenderTarget(r),s.render(a,Vs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-n,fs(e,u,f,3*x,2*x),s.setRenderTarget(e),s.render(a,Vs)}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&nt("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[s];h.material=c;const p=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),x=r/v,u=isFinite(r)?1+Math.floor(d*x):Pi;u>Pi&&Ge(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Pi}`);const f=[];let g=0;for(let R=0;R<Pi;++R){const b=R/x,E=Math.exp(-b*b/2);f.push(E),R===0?g+=E:R<u&&(g+=2*E)}for(let R=0;R<f.length;R++)f[R]=f[R]/g;p.envMap.value=e.texture,p.samples.value=u,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-n;const y=this._sizeLods[s],w=3*y*(s>_-mi?s-_+mi:0),T=4*(this._cubeSize-y);fs(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(h,Vs)}}function ky(i){const e=[],t=[],n=[];let s=i;const r=i-mi+1+Mu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-mi?l=Mu[o-i+mi-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,v=6,x=3,u=2,f=1,g=new Float32Array(x*v*m),_=new Float32Array(u*v*m),y=new Float32Array(f*v*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,b=T>2?0:-1,E=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];g.set(E,x*v*T),_.set(p,u*v*T);const M=[T,T,T,T,T,T];y.set(M,f*v*T)}const w=new Ct;w.setAttribute("position",new Wt(g,x)),w.setAttribute("uv",new Wt(_,u)),w.setAttribute("faceIndex",new Wt(y,f)),n.push(new vt(w,null)),s>mi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Tu(i,e,t){const n=new wn(i,e,t);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Fy(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ny,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Oy(i,e,t){const n=new Float32Array(Pi),s=new D(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cu(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ru(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}class $f extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Df(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ei(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qt,blending:Zn});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Ot),new Gv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}function zy(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?o(p):r(p)}function r(p){if(p&&p.isTexture){const m=p.mapping;if(m===na||m===ia)if(e.has(p)){const v=e.get(p).texture;return a(v,p.mapping)}else{const v=p.image;if(v&&v.height>0){const x=new $f(v.height);return x.fromEquirectangularTexture(i,p),e.set(p,x),p.addEventListener("dispose",c),a(x.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const m=p.mapping,v=m===na||m===ia,x=m===Fi||m===Ss;if(v||x){let u=t.get(p);const f=u!==void 0?u.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==f)return n===null&&(n=new Au(i)),u=v?n.fromEquirectangular(p,u):n.fromCubemap(p,u),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),u.texture;if(u!==void 0)return u.texture;{const g=p.image;return v&&g&&g.height>0||x&&g&&l(g)?(n===null&&(n=new Au(i)),u=v?n.fromEquirectangular(p):n.fromCubemap(p),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),p.addEventListener("dispose",d),u.texture):null}}}return p}function a(p,m){return m===na?p.mapping=Fi:m===ia&&(p.mapping=Ss),p}function l(p){let m=0;const v=6;for(let x=0;x<v;x++)p[x]!==void 0&&m++;return m===v}function c(p){const m=p.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(p){const m=p.target;m.removeEventListener("dispose",d);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function By(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Fo("WebGLRenderer: "+n+" extension not supported."),s}}}function Gy(i,e,t,n){const s={},r=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(h){const p=h.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function c(h){const p=[],m=h.index,v=h.attributes.position;let x=0;if(v===void 0)return;if(m!==null){const g=m.array;x=m.version;for(let _=0,y=g.length;_<y;_+=3){const w=g[_+0],T=g[_+1],R=g[_+2];p.push(w,T,T,R,R,w)}}else{const g=v.array;x=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const w=_+0,T=_+1,R=_+2;p.push(w,T,T,R,R,w)}}const u=new(v.count>=65535?Tf:Af)(p,1);u.version=x;const f=r.get(h);f&&e.remove(f),r.set(h,u)}function d(h){const p=r.get(h);if(p){const m=h.index;m!==null&&p.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Vy(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),t.update(m,n,1)}function c(p,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,p*o,v),t.update(m,n,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,v);let u=0;for(let f=0;f<v;f++)u+=m[f];t.update(u,n,1)}function h(p,m,v,x){if(v===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],x[f]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,x,0,v);let f=0;for(let g=0;g<v;g++)f+=m[g]*x[g];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Hy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wy(i,e,t){const n=new WeakMap,s=new pt;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let E=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*w*4*h),R=new Sf(T,y,w,h);R.type=_n,R.needsUpdate=!0;const b=_*4;for(let M=0;M<h;M++){const A=u[M],k=f[M],N=g[M],L=y*w*4*M;for(let F=0;F<A.count;F++){const U=F*b;m===!0&&(s.fromBufferAttribute(A,F),T[L+U+0]=s.x,T[L+U+1]=s.y,T[L+U+2]=s.z,T[L+U+3]=0),v===!0&&(s.fromBufferAttribute(k,F),T[L+U+4]=s.x,T[L+U+5]=s.y,T[L+U+6]=s.z,T[L+U+7]=0),x===!0&&(s.fromBufferAttribute(N,F),T[L+U+8]=s.x,T[L+U+9]=s.y,T[L+U+10]=s.z,T[L+U+11]=N.itemSize===4?s.w:1)}}p={count:h,texture:R,size:new pe(y,w)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Xy(i,e,t,n,s){let r=new WeakMap;function o(c){const d=s.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function a(){r=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const $y={[af]:"LINEAR_TONE_MAPPING",[lf]:"REINHARD_TONE_MAPPING",[cf]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[hf]:"AGX_TONE_MAPPING",[ff]:"NEUTRAL_TONE_MAPPING",[uf]:"CUSTOM_TONE_MAPPING"};function qy(i,e,t,n,s){const r=new wn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new wn(e,t,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),a=new Ct;a.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new gt([0,2,0,0,2,0],2));const l=new Lv({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new vt(a,l),d=new br(-1,1,1,-1,0,1);let h=null,p=null,m=!1,v,x=null,u=[],f=!1;this.setSize=function(g,_){r.setSize(g,_),o.setSize(g,_);for(let y=0;y<u.length;y++){const w=u[y];w.setSize&&w.setSize(g,_)}},this.setEffects=function(g){u=g,f=u.length>0&&u[0].isRenderPass===!0;const _=r.width,y=r.height;for(let w=0;w<u.length;w++){const T=u[w];T.setSize&&T.setSize(_,y)}},this.begin=function(g,_){if(m||g.toneMapping===Dn&&u.length===0)return!1;if(x=_,_!==null){const y=_.width,w=_.height;(r.width!==y||r.height!==w)&&this.setSize(y,w)}return f===!1&&g.setRenderTarget(r),v=g.toneMapping,g.toneMapping=Dn,!0},this.hasRenderPass=function(){return f},this.end=function(g,_){g.toneMapping=v,m=!0;let y=r,w=o;for(let T=0;T<u.length;T++){const R=u[T];if(R.enabled!==!1&&(R.render(g,w,y,_),R.needsSwap!==!1)){const b=y;y=w,w=b}}if(h!==g.outputColorSpace||p!==g.toneMapping){h=g.outputColorSpace,p=g.toneMapping,l.defines={},st.getTransfer(h)===lt&&(l.defines.SRGB_TRANSFER="");const T=$y[p];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,g.setRenderTarget(x),g.render(c,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const qf=new Ht,oc=new mr(1,1),jf=new Sf,Yf=new P0,Zf=new Df,Pu=[],Iu=[],Du=new Float32Array(16),Lu=new Float32Array(9),Nu=new Float32Array(4);function Is(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Pu[s];if(r===void 0&&(r=new Float32Array(s),Pu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yo(i,e){let t=Iu[e];t===void 0&&(t=new Int32Array(e),Iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Ky(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Nu.set(n),i.uniformMatrix2fv(this.addr,!1,Nu),Tt(t,n)}}function Qy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),Tt(t,n)}}function eb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Du.set(n),i.uniformMatrix4fv(this.addr,!1,Du),Tt(t,n)}}function tb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function ib(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function rb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function lb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function cb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=t.isReversedDepthBuffer()?Dc:Ic,r=oc):r=qf,t.setTexture2D(e||r,s)}function db(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yf,s)}function ub(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zf,s)}function hb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jf,s)}function fb(i){switch(i){case 5126:return jy;case 35664:return Yy;case 35665:return Zy;case 35666:return Jy;case 35674:return Ky;case 35675:return Qy;case 35676:return eb;case 5124:case 35670:return tb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return sb;case 5125:return rb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return hb}}function pb(i,e){i.uniform1fv(this.addr,e)}function mb(i,e){const t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function gb(i,e){const t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function vb(i,e){const t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function xb(i,e){const t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _b(i,e){const t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yb(i,e){const t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bb(i,e){i.uniform1iv(this.addr,e)}function wb(i,e){i.uniform2iv(this.addr,e)}function Sb(i,e){i.uniform3iv(this.addr,e)}function Mb(i,e){i.uniform4iv(this.addr,e)}function Eb(i,e){i.uniform1uiv(this.addr,e)}function Ab(i,e){i.uniform2uiv(this.addr,e)}function Tb(i,e){i.uniform3uiv(this.addr,e)}function Cb(i,e){i.uniform4uiv(this.addr,e)}function Rb(i,e,t){const n=this.cache,s=e.length,r=Yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=oc:o=qf;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Pb(i,e,t){const n=this.cache,s=e.length,r=Yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Yf,r[o])}function Ib(i,e,t){const n=this.cache,s=e.length,r=Yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Zf,r[o])}function Db(i,e,t){const n=this.cache,s=e.length,r=Yo(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||jf,r[o])}function Lb(i){switch(i){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return vb;case 35674:return xb;case 35675:return _b;case 35676:return yb;case 5124:case 35670:return bb;case 35667:case 35671:return wb;case 35668:case 35672:return Sb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Ab;case 36295:return Tb;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Db}}class Nb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fb(t.type)}}class Ub{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lb(t.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Uu(i,e){i.seq.push(e),i.map[e.id]=e}function Fb(i,e,t){const n=i.name,s=n.length;for(za.lastIndex=0;;){const r=za.exec(n),o=za.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Uu(t,c===void 0?new Nb(a,i,e):new Ub(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new kb(a),Uu(t,h)),t=h}}}class Eo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Fb(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ku(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ob=37297;let zb=0;function Bb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Fu=new je;function Gb(i){st._getMatrix(Fu,st.workingColorSpace,i);const e=`mat3( ${Fu.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(i)){case No:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ou(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Bb(i.getShaderSource(e),a)}else return r}function Vb(i,e){const t=Gb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Hb={[af]:"Linear",[lf]:"Reinhard",[cf]:"Cineon",[df]:"ACESFilmic",[hf]:"AgX",[ff]:"Neutral",[uf]:"Custom"};function Wb(i,e){const t=Hb[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const oo=new D;function Xb(){st.getLuminanceCoefficients(oo);const i=oo.x.toFixed(4),e=oo.y.toFixed(4),t=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $b(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function qb(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function jb(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ys(i){return i!==""}function zu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(Yb,Jb)}const Zb=new Map;function Jb(i,e){let t=Ze[e];if(t===void 0){const n=Zb.get(e);if(n!==void 0)t=Ze[n],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}const Kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Kb,Qb)}function Qb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ew={[yo]:"SHADOWMAP_TYPE_PCF",[qs]:"SHADOWMAP_TYPE_VSM"};function tw(i){return ew[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nw={[Fi]:"ENVMAP_TYPE_CUBE",[Ss]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function iw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":nw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const sw={[Ss]:"ENVMAP_MODE_REFRACTION"};function rw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ow={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[qg]:"ENVMAP_BLENDING_MIX",[jg]:"ENVMAP_BLENDING_ADD"};function aw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ow[i.combine]||"ENVMAP_BLENDING_NONE"}function lw(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cw(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tw(t),c=iw(t),d=rw(t),h=aw(t),p=lw(t),m=$b(t),v=qb(r),x=s.createProgram();let u,f,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ys).join(`
`),u.length>0&&(u+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ys).join(`
`),f.length>0&&(f+=`
`)):(u=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),f=[Vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Dn?Wb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Vb("linearToOutputTexel",t.outputColorSpace),Xb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=ac(o),o=zu(o,t),o=Bu(o,t),a=ac(a),a=zu(a,t),a=Bu(a,t),o=Gu(o),a=Gu(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,f=["#define varying in",t.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=g+u+o,y=g+f+a,w=ku(s,s.VERTEX_SHADER,_),T=ku(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(A){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x)||"",N=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(T)||"",F=k.trim(),U=N.trim(),z=L.trim();let Z=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,T);else{const de=Ou(s,w,"vertex"),se=Ou(s,T,"fragment");nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+de+`
`+se)}else F!==""?Ge("WebGLProgram: Program Info Log:",F):(U===""||z==="")&&(j=!1);j&&(A.diagnostics={runnable:Z,programLog:F,vertexShader:{log:U,prefix:u},fragmentShader:{log:z,prefix:f}})}s.deleteShader(w),s.deleteShader(T),b=new Eo(s,x),E=jb(s,x)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Ob)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let dw=0;class uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hw(e),t.set(e,n)),n}}class hw{constructor(e){this.id=dw++,this.code=e,this.usedTimes=0}}function fw(i,e,t,n,s,r){const o=new Uc,a=new uw,l=new Set,c=[],d=new Map,h=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,E,M,A,k){const N=A.fog,L=k.geometry,F=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?A.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,z=e.get(b.envMap||F,U),Z=z&&z.mapping===$o?z.image.height:null,j=m[b.type];b.precision!==null&&(p=n.getMaxPrecision(b.precision),p!==b.precision&&Ge("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const de=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=de!==void 0?de.length:0;let te=0;L.morphAttributes.position!==void 0&&(te=1),L.morphAttributes.normal!==void 0&&(te=2),L.morphAttributes.color!==void 0&&(te=3);let Ae,Qe,tt,J;if(j){const at=Jt[j];Ae=at.vertexShader,Qe=at.fragmentShader}else Ae=b.vertexShader,Qe=b.fragmentShader,a.update(b),tt=a.getVertexShaderID(b),J=a.getFragmentShaderID(b);const oe=i.getRenderTarget(),le=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,ke=k.isBatchedMesh===!0,Ve=!!b.map,dt=!!b.matcap,$e=!!z,Q=!!b.aoMap,re=!!b.lightMap,ee=!!b.bumpMap,_e=!!b.normalMap,I=!!b.displacementMap,Fe=!!b.emissiveMap,we=!!b.metalnessMap,ze=!!b.roughnessMap,me=b.anisotropy>0,P=b.clearcoat>0,S=b.dispersion>0,G=b.iridescence>0,$=b.sheen>0,K=b.transmission>0,q=me&&!!b.anisotropyMap,Te=P&&!!b.clearcoatMap,ge=P&&!!b.clearcoatNormalMap,Ne=P&&!!b.clearcoatRoughnessMap,Be=G&&!!b.iridescenceMap,ie=G&&!!b.iridescenceThicknessMap,ue=$&&!!b.sheenColorMap,Ce=$&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Se=!!b.specularColorMap,Je=!!b.specularIntensityMap,B=K&&!!b.transmissionMap,ve=K&&!!b.thicknessMap,he=!!b.gradientMap,Ee=!!b.alphaMap,ae=b.alphaTest>0,Y=!!b.alphaHash,Re=!!b.extensions;let We=Dn;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(We=i.toneMapping);const mt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Ae,fragmentShader:Qe,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:J,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ke,batchingColor:ke&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Es,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:dt,envMap:$e,envMapMode:$e&&z.mapping,envMapCubeUVHeight:Z,aoMap:Q,lightMap:re,bumpMap:ee,normalMap:_e,displacementMap:I,emissiveMap:Fe,normalMapObjectSpace:_e&&b.normalMapType===Jg,normalMapTangentSpace:_e&&b.normalMapType===bf,metalnessMap:we,roughnessMap:ze,anisotropy:me,anisotropyMap:q,clearcoat:P,clearcoatMap:Te,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ne,dispersion:S,iridescence:G,iridescenceMap:Be,iridescenceThicknessMap:ie,sheen:$,sheenColorMap:ue,sheenRoughnessMap:Ce,specularMap:Pe,specularColorMap:Se,specularIntensityMap:Je,transmission:K,transmissionMap:B,thicknessMap:ve,gradientMap:he,opaque:b.transparent===!1&&b.blending===vs&&b.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ae,alphaHash:Y,combine:b.combine,mapUv:Ve&&v(b.map.channel),aoMapUv:Q&&v(b.aoMap.channel),lightMapUv:re&&v(b.lightMap.channel),bumpMapUv:ee&&v(b.bumpMap.channel),normalMapUv:_e&&v(b.normalMap.channel),displacementMapUv:I&&v(b.displacementMap.channel),emissiveMapUv:Fe&&v(b.emissiveMap.channel),metalnessMapUv:we&&v(b.metalnessMap.channel),roughnessMapUv:ze&&v(b.roughnessMap.channel),anisotropyMapUv:q&&v(b.anisotropyMap.channel),clearcoatMapUv:Te&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ge&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:Pe&&v(b.specularMap.channel),specularColorMapUv:Se&&v(b.specularColorMap.channel),specularIntensityMapUv:Je&&v(b.specularIntensityMap.channel),transmissionMapUv:B&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:Ee&&v(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(_e||me),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!L.attributes.uv&&(Ve||Ee),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||L.attributes.normal===void 0&&_e===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:Fe&&b.emissiveMap.isVideoTexture===!0&&st.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Re&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&b.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function u(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const M in b.defines)E.push(M),E.push(b.defines[M]);return b.isRawShaderMaterial===!1&&(f(E,b),g(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function f(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function g(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function _(b){const E=m[b.type];let M;if(E){const A=Jt[E];M=qo.clone(A.uniforms)}else M=b.uniforms;return M}function y(b,E){let M=d.get(E);return M!==void 0?++M.usedTimes:(M=new cw(i,E,b,s),c.push(M),d.set(E,M)),M}function w(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),d.delete(b.cacheKey),b.destroy()}}function T(b){a.remove(b)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:u,getUniforms:_,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:R}}function pw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function mw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Hu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Wu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function a(p,m,v,x,u,f){let g=i[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:v,materialVariant:o(p),groupOrder:x,renderOrder:p.renderOrder,z:u,group:f},i[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=v,g.materialVariant=o(p),g.groupOrder=x,g.renderOrder=p.renderOrder,g.z=u,g.group=f),e++,g}function l(p,m,v,x,u,f){const g=a(p,m,v,x,u,f);v.transmission>0?n.push(g):v.transparent===!0?s.push(g):t.push(g)}function c(p,m,v,x,u,f){const g=a(p,m,v,x,u,f);v.transmission>0?n.unshift(g):v.transparent===!0?s.unshift(g):t.unshift(g)}function d(p,m){t.length>1&&t.sort(p||mw),n.length>1&&n.sort(m||Hu),s.length>1&&s.sort(m||Hu)}function h(){for(let p=e,m=i.length;p<m;p++){const v=i[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:d}}function gw(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Wu,i.set(n,[o])):s>=r.length?(o=new Wu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function vw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ye};break;case"SpotLight":t={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function xw(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let _w=0;function yw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bw(i){const e=new vw,t=xw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new it,o=new it;function a(c){let d=0,h=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,v=0,x=0,u=0,f=0,g=0,_=0,y=0,w=0,T=0,R=0;c.sort(yw);for(let E=0,M=c.length;E<M;E++){const A=c[E],k=A.color,N=A.intensity,L=A.distance;let F=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Ms?F=A.shadow.map.texture:F=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=k.r*N,h+=k.g*N,p+=k.b*N;else if(A.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(A.sh.coefficients[U],N);R++}else if(A.isDirectionalLight){const U=e.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,Z=t.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.directionalShadow[m]=Z,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=A.shadow.matrix,g++}n.directional[m]=U,m++}else if(A.isSpotLight){const U=e.get(A);U.position.setFromMatrixPosition(A.matrixWorld),U.color.copy(k).multiplyScalar(N),U.distance=L,U.coneCos=Math.cos(A.angle),U.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),U.decay=A.decay,n.spot[x]=U;const z=A.shadow;if(A.map&&(n.spotLightMap[w]=A.map,w++,z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=z.matrix,A.castShadow){const Z=t.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,n.spotShadow[x]=Z,n.spotShadowMap[x]=F,y++}x++}else if(A.isRectAreaLight){const U=e.get(A);U.color.copy(k).multiplyScalar(N),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),n.rectArea[u]=U,u++}else if(A.isPointLight){const U=e.get(A);if(U.color.copy(A.color).multiplyScalar(A.intensity),U.distance=A.distance,U.decay=A.decay,A.castShadow){const z=A.shadow,Z=t.get(A);Z.shadowIntensity=z.intensity,Z.shadowBias=z.bias,Z.shadowNormalBias=z.normalBias,Z.shadowRadius=z.radius,Z.shadowMapSize=z.mapSize,Z.shadowCameraNear=z.camera.near,Z.shadowCameraFar=z.camera.far,n.pointShadow[v]=Z,n.pointShadowMap[v]=F,n.pointShadowMatrix[v]=A.shadow.matrix,_++}n.point[v]=U,v++}else if(A.isHemisphereLight){const U=e.get(A);U.skyColor.copy(A.color).multiplyScalar(N),U.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[f]=U,f++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=p;const b=n.hash;(b.directionalLength!==m||b.pointLength!==v||b.spotLength!==x||b.rectAreaLength!==u||b.hemiLength!==f||b.numDirectionalShadows!==g||b.numPointShadows!==_||b.numSpotShadows!==y||b.numSpotMaps!==w||b.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=u,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,b.directionalLength=m,b.pointLength=v,b.spotLength=x,b.rectAreaLength=u,b.hemiLength=f,b.numDirectionalShadows=g,b.numPointShadows=_,b.numSpotShadows=y,b.numSpotMaps=w,b.numLightProbes=R,n.version=_w++)}function l(c,d){let h=0,p=0,m=0,v=0,x=0;const u=d.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const _=c[f];if(_.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),h++}else if(_.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(u),y.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(u),m++}else if(_.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(u),o.identity(),r.copy(_.matrixWorld),r.premultiply(u),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(u),p++}else if(_.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(u),x++}}}return{setup:a,setupView:l,state:n}}function Xu(i){const e=new bw(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ww(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Xu(i),e.set(s,[a])):r>=o.length?(a=new Xu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
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
}`,Ew=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Aw=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],$u=new it,Hs=new D,Ba=new D;function Tw(i,e,t){let n=new Oc;const s=new pe,r=new pe,o=new pt,a=new Nv,l=new Uv,c={},d=t.maxTextureSize,h={[xi]:Qt,[Qt]:xi,[qn]:qn},p=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Sw,fragmentShader:Mw}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ct;v.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new vt(v,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let f=this.type;this.render=function(T,R,b){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||T.length===0)return;this.type===Pg&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yo);const E=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Zn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const N=f!==this.type;N&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=T.length;L<F;L++){const U=T[L],z=U.shadow;if(z===void 0){Ge("WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const Z=z.getFrameExtents();s.multiply(Z),r.copy(z.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,z.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,z.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=j,z.map===null||N===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===qs){if(U.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new wn(s.x,s.y,{format:Ms,type:Kn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),z.map.texture.name=U.name+".shadowMap",z.map.depthTexture=new mr(s.x,s.y,_n),z.map.depthTexture.name=U.name+".shadowMapDepth",z.map.depthTexture.format=Qn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ft,z.map.depthTexture.magFilter=Ft}else U.isPointLight?(z.map=new $f(s.x),z.map.depthTexture=new j0(s.x,Nn)):(z.map=new wn(s.x,s.y),z.map.depthTexture=new mr(s.x,s.y,Nn)),z.map.depthTexture.name=U.name+".shadowMap",z.map.depthTexture.format=Qn,this.type===yo?(z.map.depthTexture.compareFunction=j?Dc:Ic,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ft,z.map.depthTexture.magFilter=Ft);z.camera.updateProjectionMatrix()}const de=z.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<de;se++){if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,se),i.clear();else{se===0&&(i.setRenderTarget(z.map),i.clear());const te=z.getViewport(se);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),k.viewport(o)}if(U.isPointLight){const te=z.camera,Ae=z.matrix,Qe=U.distance||te.far;Qe!==te.far&&(te.far=Qe,te.updateProjectionMatrix()),Hs.setFromMatrixPosition(U.matrixWorld),te.position.copy(Hs),Ba.copy(te.position),Ba.add(Ew[se]),te.up.copy(Aw[se]),te.lookAt(Ba),te.updateMatrixWorld(),Ae.makeTranslation(-Hs.x,-Hs.y,-Hs.z),$u.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),z._frustum.setFromProjectionMatrix($u,te.coordinateSystem,te.reversedDepth)}else z.updateMatrices(U);n=z.getFrustum(),y(R,b,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===qs&&g(z,b),z.needsUpdate=!1}f=this.type,u.needsUpdate=!1,i.setRenderTarget(E,M,A)};function g(T,R){const b=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wn(s.x,s.y,{format:Ms,type:Kn})),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,b,p,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,b,m,x,null)}function _(T,R,b,E){let M=null;const A=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)M=A;else if(M=b.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=M.uuid,N=R.uuid;let L=c[k];L===void 0&&(L={},c[k]=L);let F=L[N];F===void 0&&(F=M.clone(),L[N]=F,R.addEventListener("dispose",w)),M=F}if(M.visible=R.visible,M.wireframe=R.wireframe,E===qs?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,b.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=i.properties.get(M);k.light=b}return M}function y(T,R,b,E,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===qs)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const N=e.update(T),L=T.material;if(Array.isArray(L)){const F=N.groups;for(let U=0,z=F.length;U<z;U++){const Z=F[U],j=L[Z.materialIndex];if(j&&j.visible){const de=_(T,j,E,M);T.onBeforeShadow(i,T,R,b,N,de,Z),i.renderBufferDirect(b,null,N,de,T,Z),T.onAfterShadow(i,T,R,b,N,de,Z)}}}else if(L.visible){const F=_(T,L,E,M);T.onBeforeShadow(i,T,R,b,N,F,null),i.renderBufferDirect(b,null,N,F,T,null),T.onAfterShadow(i,T,R,b,N,F,null)}}const k=T.children;for(let N=0,L=k.length;N<L;N++)y(k[N],R,b,E,M)}function w(T){T.target.removeEventListener("dispose",w);for(const b in c){const E=c[b],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Cw(i,e){function t(){let B=!1;const ve=new pt;let he=null;const Ee=new pt(0,0,0,0);return{setMask:function(ae){he!==ae&&!B&&(i.colorMask(ae,ae,ae,ae),he=ae)},setLocked:function(ae){B=ae},setClear:function(ae,Y,Re,We,mt){mt===!0&&(ae*=We,Y*=We,Re*=We),ve.set(ae,Y,Re,We),Ee.equals(ve)===!1&&(i.clearColor(ae,Y,Re,We),Ee.copy(ve))},reset:function(){B=!1,he=null,Ee.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,he=null,Ee=null,ae=null;return{setReversed:function(Y){if(ve!==Y){const Re=e.get("EXT_clip_control");Y?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),ve=Y;const We=ae;ae=null,this.setClear(We)}},getReversed:function(){return ve},setTest:function(Y){Y?oe(i.DEPTH_TEST):le(i.DEPTH_TEST)},setMask:function(Y){he!==Y&&!B&&(i.depthMask(Y),he=Y)},setFunc:function(Y){if(ve&&(Y=a0[Y]),Ee!==Y){switch(Y){case dl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case hl:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case fl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Y}},setLocked:function(Y){B=Y},setClear:function(Y){ae!==Y&&(ae=Y,ve&&(Y=1-Y),i.clearDepth(Y))},reset:function(){B=!1,he=null,Ee=null,ae=null,ve=!1}}}function s(){let B=!1,ve=null,he=null,Ee=null,ae=null,Y=null,Re=null,We=null,mt=null;return{setTest:function(at){B||(at?oe(i.STENCIL_TEST):le(i.STENCIL_TEST))},setMask:function(at){ve!==at&&!B&&(i.stencilMask(at),ve=at)},setFunc:function(at,zn,Bn){(he!==at||Ee!==zn||ae!==Bn)&&(i.stencilFunc(at,zn,Bn),he=at,Ee=zn,ae=Bn)},setOp:function(at,zn,Bn){(Y!==at||Re!==zn||We!==Bn)&&(i.stencilOp(at,zn,Bn),Y=at,Re=zn,We=Bn)},setLocked:function(at){B=at},setClear:function(at){mt!==at&&(i.clearStencil(at),mt=at)},reset:function(){B=!1,ve=null,he=null,Ee=null,ae=null,Y=null,Re=null,We=null,mt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let d={},h={},p=new WeakMap,m=[],v=null,x=!1,u=null,f=null,g=null,_=null,y=null,w=null,T=null,R=new Ye(0,0,0),b=0,E=!1,M=null,A=null,k=null,N=null,L=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,z=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Z)[1]),U=z>=1):Z.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),U=z>=2);let j=null,de={};const se=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),Ae=new pt().fromArray(se),Qe=new pt().fromArray(te);function tt(B,ve,he,Ee){const ae=new Uint8Array(4),Y=i.createTexture();i.bindTexture(B,Y),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<he;Re++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ve+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return Y}const J={};J[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(i.DEPTH_TEST),o.setFunc(ws),ee(!1),_e(Dd),oe(i.CULL_FACE),Q(Zn);function oe(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function le(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function Oe(B,ve){return h[B]!==ve?(i.bindFramebuffer(B,ve),h[B]=ve,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ke(B,ve){let he=m,Ee=!1;if(B){he=p.get(ve),he===void 0&&(he=[],p.set(ve,he));const ae=B.textures;if(he.length!==ae.length||he[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,Re=ae.length;Y<Re;Y++)he[Y]=i.COLOR_ATTACHMENT0+Y;he.length=ae.length,Ee=!0}}else he[0]!==i.BACK&&(he[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(he)}function Ve(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const dt={[Ri]:i.FUNC_ADD,[Ig]:i.FUNC_SUBTRACT,[Dg]:i.FUNC_REVERSE_SUBTRACT};dt[Lg]=i.MIN,dt[Ng]=i.MAX;const $e={[Ug]:i.ZERO,[of]:i.ONE,[kg]:i.SRC_COLOR,[cl]:i.SRC_ALPHA,[Vg]:i.SRC_ALPHA_SATURATE,[Bg]:i.DST_COLOR,[Og]:i.DST_ALPHA,[Fg]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Gg]:i.ONE_MINUS_DST_COLOR,[zg]:i.ONE_MINUS_DST_ALPHA,[Hg]:i.CONSTANT_COLOR,[Wg]:i.ONE_MINUS_CONSTANT_COLOR,[Xg]:i.CONSTANT_ALPHA,[$g]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(B,ve,he,Ee,ae,Y,Re,We,mt,at){if(B===Zn){x===!0&&(le(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),B!==rf){if(B!==u||at!==E){if((f!==Ri||y!==Ri)&&(i.blendEquation(i.FUNC_ADD),f=Ri,y=Ri),at)switch(B){case vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFunc(i.ONE,i.ONE);break;case Nd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ud:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",B);break}else switch(B){case vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ld:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nd:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",B);break}g=null,_=null,w=null,T=null,R.set(0,0,0),b=0,u=B,E=at}return}ae=ae||ve,Y=Y||he,Re=Re||Ee,(ve!==f||ae!==y)&&(i.blendEquationSeparate(dt[ve],dt[ae]),f=ve,y=ae),(he!==g||Ee!==_||Y!==w||Re!==T)&&(i.blendFuncSeparate($e[he],$e[Ee],$e[Y],$e[Re]),g=he,_=Ee,w=Y,T=Re),(We.equals(R)===!1||mt!==b)&&(i.blendColor(We.r,We.g,We.b,mt),R.copy(We),b=mt),u=B,E=!1}function re(B,ve){B.side===qn?le(i.CULL_FACE):oe(i.CULL_FACE);let he=B.side===Qt;ve&&(he=!he),ee(he),B.blending===vs&&B.transparent===!1?Q(Zn):Q(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ee=B.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):le(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function _e(B){B!==Cg?(oe(i.CULL_FACE),B!==A&&(B===Dd?i.cullFace(i.BACK):B===Rg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):le(i.CULL_FACE),A=B}function I(B){B!==k&&(U&&i.lineWidth(B),k=B)}function Fe(B,ve,he){B?(oe(i.POLYGON_OFFSET_FILL),(N!==ve||L!==he)&&(N=ve,L=he,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,he))):le(i.POLYGON_OFFSET_FILL)}function we(B){B?oe(i.SCISSOR_TEST):le(i.SCISSOR_TEST)}function ze(B){B===void 0&&(B=i.TEXTURE0+F-1),j!==B&&(i.activeTexture(B),j=B)}function me(B,ve,he){he===void 0&&(j===null?he=i.TEXTURE0+F-1:he=j);let Ee=de[he];Ee===void 0&&(Ee={type:void 0,texture:void 0},de[he]=Ee),(Ee.type!==B||Ee.texture!==ve)&&(j!==he&&(i.activeTexture(he),j=he),i.bindTexture(B,ve||J[B]),Ee.type=B,Ee.texture=ve)}function P(){const B=de[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(B){nt("WebGLState:",B)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(B){nt("WebGLState:",B)}}function $(){try{i.texSubImage2D(...arguments)}catch(B){nt("WebGLState:",B)}}function K(){try{i.texSubImage3D(...arguments)}catch(B){nt("WebGLState:",B)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(B){nt("WebGLState:",B)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(B){nt("WebGLState:",B)}}function ge(){try{i.texStorage2D(...arguments)}catch(B){nt("WebGLState:",B)}}function Ne(){try{i.texStorage3D(...arguments)}catch(B){nt("WebGLState:",B)}}function Be(){try{i.texImage2D(...arguments)}catch(B){nt("WebGLState:",B)}}function ie(){try{i.texImage3D(...arguments)}catch(B){nt("WebGLState:",B)}}function ue(B){Ae.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ae.copy(B))}function Ce(B){Qe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Qe.copy(B))}function Pe(B,ve){let he=c.get(ve);he===void 0&&(he=new WeakMap,c.set(ve,he));let Ee=he.get(B);Ee===void 0&&(Ee=i.getUniformBlockIndex(ve,B.name),he.set(B,Ee))}function Se(B,ve){const Ee=c.get(ve).get(B);l.get(ve)!==Ee&&(i.uniformBlockBinding(ve,Ee,B.__bindingPointIndex),l.set(ve,Ee))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},j=null,de={},h={},p=new WeakMap,m=[],v=null,x=!1,u=null,f=null,g=null,_=null,y=null,w=null,T=null,R=new Ye(0,0,0),b=0,E=!1,M=null,A=null,k=null,N=null,L=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:le,bindFramebuffer:Oe,drawBuffers:ke,useProgram:Ve,setBlending:Q,setMaterial:re,setFlipSided:ee,setCullFace:_e,setLineWidth:I,setPolygonOffset:Fe,setScissorTest:we,activeTexture:ze,bindTexture:me,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:Be,texImage3D:ie,updateUBOMapping:Pe,uniformBlockBinding:Se,texStorage2D:ge,texStorage3D:Ne,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:ue,viewport:Ce,reset:Je}}function Rw(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,d=new WeakMap;let h;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,S){return m?new OffscreenCanvas(P,S):Uo("canvas")}function x(P,S,G){let $=1;const K=me(P);if((K.width>G||K.height>G)&&($=G/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor($*K.width),Te=Math.floor($*K.height);h===void 0&&(h=v(q,Te));const ge=S?v(q,Te):h;return ge.width=q,ge.height=Te,ge.getContext("2d").drawImage(P,0,0,q,Te),Ge("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Te+")."),ge}else return"data"in P&&Ge("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function u(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function g(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,S,G,$,K=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=S;if(S===i.RED&&(G===i.FLOAT&&(q=i.R32F),G===i.HALF_FLOAT&&(q=i.R16F),G===i.UNSIGNED_BYTE&&(q=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.R8UI),G===i.UNSIGNED_SHORT&&(q=i.R16UI),G===i.UNSIGNED_INT&&(q=i.R32UI),G===i.BYTE&&(q=i.R8I),G===i.SHORT&&(q=i.R16I),G===i.INT&&(q=i.R32I)),S===i.RG&&(G===i.FLOAT&&(q=i.RG32F),G===i.HALF_FLOAT&&(q=i.RG16F),G===i.UNSIGNED_BYTE&&(q=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RG8UI),G===i.UNSIGNED_SHORT&&(q=i.RG16UI),G===i.UNSIGNED_INT&&(q=i.RG32UI),G===i.BYTE&&(q=i.RG8I),G===i.SHORT&&(q=i.RG16I),G===i.INT&&(q=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(q=i.RGB16UI),G===i.UNSIGNED_INT&&(q=i.RGB32UI),G===i.BYTE&&(q=i.RGB8I),G===i.SHORT&&(q=i.RGB16I),G===i.INT&&(q=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),G===i.UNSIGNED_INT&&(q=i.RGBA32UI),G===i.BYTE&&(q=i.RGBA8I),G===i.SHORT&&(q=i.RGBA16I),G===i.INT&&(q=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),S===i.RGBA){const Te=K?No:st.getTransfer($);G===i.FLOAT&&(q=i.RGBA32F),G===i.HALF_FLOAT&&(q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(q=Te===lt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(P,S){let G;return P?S===null||S===Nn||S===hr?G=i.DEPTH24_STENCIL8:S===_n?G=i.DEPTH32F_STENCIL8:S===ur&&(G=i.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Nn||S===hr?G=i.DEPTH_COMPONENT24:S===_n?G=i.DEPTH_COMPONENT32F:S===ur&&(G=i.DEPTH_COMPONENT16),G}function w(P,S){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ft&&P.minFilter!==Ot?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&d.delete(S)}function R(P){const S=P.target;S.removeEventListener("dispose",R),M(S)}function b(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,$=p.get(G);if($){const K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(P),Object.keys($).length===0&&p.delete(G)}n.remove(P)}function E(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const G=P.source,$=p.get(G);delete $[S.__cacheKey],o.memory.textures--}function M(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(S.__webglFramebuffer[$][K]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let $=0,K=G.length;$<K;$++){const q=n.get(G[$]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(G[$])}n.remove(P)}let A=0;function k(){A=0}function N(){const P=A;return P>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),A+=1,P}function L(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function F(P,S){const G=n.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const $=P.image;if($===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function U(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){J(G,P,S);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function z(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){J(G,P,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function Z(P,S){const G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){oe(G,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const j={[vl]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[xl]:i.MIRRORED_REPEAT},de={[Ft]:i.NEAREST,[Yg]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Ot]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},se={[Kg]:i.NEVER,[i0]:i.ALWAYS,[Qg]:i.LESS,[Ic]:i.LEQUAL,[e0]:i.EQUAL,[Dc]:i.GEQUAL,[t0]:i.GREATER,[n0]:i.NOTEQUAL};function te(P,S){if(S.type===_n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ot||S.magFilter===sa||S.magFilter===Ar||S.magFilter===Ii||S.minFilter===Ot||S.minFilter===sa||S.minFilter===Ar||S.minFilter===Ii)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,j[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ft||S.minFilter!==Ar&&S.minFilter!==Ii||S.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ae(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const $=S.source;let K=p.get($);K===void 0&&(K={},p.set($,K));const q=L(S);if(q!==P.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[q].usedTimes++;const Te=K[P.__cacheKey];Te!==void 0&&(K[P.__cacheKey].usedTimes--,Te.usedTimes===0&&E(S)),P.__cacheKey=q,P.__webglTexture=K[q].texture}return G}function Qe(P,S,G){return Math.floor(Math.floor(P/G)/S)}function tt(P,S,G,$){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,$,S.data);else{q.sort((ie,ue)=>ie.start-ue.start);let Te=0;for(let ie=1;ie<q.length;ie++){const ue=q[Te],Ce=q[ie],Pe=ue.start+ue.count,Se=Qe(Ce.start,S.width,4),Je=Qe(ue.start,S.width,4);Ce.start<=Pe+1&&Se===Je&&Qe(Ce.start+Ce.count-1,S.width,4)===Se?ue.count=Math.max(ue.count,Ce.start+Ce.count-ue.start):(++Te,q[Te]=Ce)}q.length=Te+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Be=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ie=0,ue=q.length;ie<ue;ie++){const Ce=q[ie],Pe=Math.floor(Ce.start/4),Se=Math.ceil(Ce.count/4),Je=Pe%S.width,B=Math.floor(Pe/S.width),ve=Se,he=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Je,B,ve,he,G,$,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Be)}}function J(P,S,G){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const K=Ae(P,S),q=S.source;t.bindTexture($,P.__webglTexture,i.TEXTURE0+G);const Te=n.get(q);if(q.version!==Te.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const ge=st.getPrimaries(st.workingColorSpace),Ne=S.colorSpace===fi?null:st.getPrimaries(S.colorSpace),Be=S.colorSpace===fi||ge===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ie=x(S.image,!1,s.maxTextureSize);ie=ze(S,ie);const ue=r.convert(S.format,S.colorSpace),Ce=r.convert(S.type);let Pe=_(S.internalFormat,ue,Ce,S.colorSpace,S.isVideoTexture);te($,S);let Se;const Je=S.mipmaps,B=S.isVideoTexture!==!0,ve=Te.__version===void 0||K===!0,he=q.dataReady,Ee=w(S,ie);if(S.isDepthTexture)Pe=y(S.format===Di,S.type),ve&&(B?t.texStorage2D(i.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ue,Ce,null));else if(S.isDataTexture)if(Je.length>0){B&&ve&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,Je[0].width,Je[0].height);for(let ae=0,Y=Je.length;ae<Y;ae++)Se=Je[ae],B?he&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,ue,Ce,Se.data):t.texImage2D(i.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,ue,Ce,Se.data);S.generateMipmaps=!1}else B?(ve&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,ie.width,ie.height),he&&tt(S,ie,ue,Ce)):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ue,Ce,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){B&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Pe,Je[0].width,Je[0].height,ie.depth);for(let ae=0,Y=Je.length;ae<Y;ae++)if(Se=Je[ae],S.format!==yn)if(ue!==null)if(B){if(he)if(S.layerUpdates.size>0){const Re=Su(Se.width,Se.height,S.format,S.type);for(const We of S.layerUpdates){const mt=Se.data.subarray(We*Re/Se.data.BYTES_PER_ELEMENT,(We+1)*Re/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,We,Se.width,Se.height,1,ue,mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ie.depth,ue,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,Pe,Se.width,Se.height,ie.depth,0,Se.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?he&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,ie.depth,ue,Ce,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,Pe,Se.width,Se.height,ie.depth,0,ue,Ce,Se.data)}else{B&&ve&&t.texStorage2D(i.TEXTURE_2D,Ee,Pe,Je[0].width,Je[0].height);for(let ae=0,Y=Je.length;ae<Y;ae++)Se=Je[ae],S.format!==yn?ue!==null?B?he&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,ue,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,Se.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?he&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Se.width,Se.height,ue,Ce,Se.data):t.texImage2D(i.TEXTURE_2D,ae,Pe,Se.width,Se.height,0,ue,Ce,Se.data)}else if(S.isDataArrayTexture)if(B){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Pe,ie.width,ie.height,ie.depth),he)if(S.layerUpdates.size>0){const ae=Su(ie.width,ie.height,S.format,S.type);for(const Y of S.layerUpdates){const Re=ie.data.subarray(Y*ae/ie.data.BYTES_PER_ELEMENT,(Y+1)*ae/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,ie.width,ie.height,1,ue,Ce,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ue,Ce,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ue,Ce,ie.data);else if(S.isData3DTexture)B?(ve&&t.texStorage3D(i.TEXTURE_3D,Ee,Pe,ie.width,ie.height,ie.depth),he&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ue,Ce,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ue,Ce,ie.data);else if(S.isFramebufferTexture){if(ve)if(B)t.texStorage2D(i.TEXTURE_2D,Ee,Pe,ie.width,ie.height);else{let ae=ie.width,Y=ie.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,Pe,ae,Y,0,ue,Ce,null),ae>>=1,Y>>=1}}else if(Je.length>0){if(B&&ve){const ae=me(Je[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Pe,ae.width,ae.height)}for(let ae=0,Y=Je.length;ae<Y;ae++)Se=Je[ae],B?he&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ue,Ce,Se):t.texImage2D(i.TEXTURE_2D,ae,Pe,ue,Ce,Se);S.generateMipmaps=!1}else if(B){if(ve){const ae=me(ie);t.texStorage2D(i.TEXTURE_2D,Ee,Pe,ae.width,ae.height)}he&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ce,ie)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ue,Ce,ie);u(S)&&f($),Te.__version=q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function oe(P,S,G){if(S.image.length!==6)return;const $=Ae(P,S),K=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const q=n.get(K);if(K.version!==q.__version||$===!0){t.activeTexture(i.TEXTURE0+G);const Te=st.getPrimaries(st.workingColorSpace),ge=S.colorSpace===fi?null:st.getPrimaries(S.colorSpace),Ne=S.colorSpace===fi||Te===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!Be&&!ie?ue[Y]=x(S.image[Y],!0,s.maxCubemapSize):ue[Y]=ie?S.image[Y].image:S.image[Y],ue[Y]=ze(S,ue[Y]);const Ce=ue[0],Pe=r.convert(S.format,S.colorSpace),Se=r.convert(S.type),Je=_(S.internalFormat,Pe,Se,S.colorSpace),B=S.isVideoTexture!==!0,ve=q.__version===void 0||$===!0,he=K.dataReady;let Ee=w(S,Ce);te(i.TEXTURE_CUBE_MAP,S);let ae;if(Be){B&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,Ce.width,Ce.height);for(let Y=0;Y<6;Y++){ae=ue[Y].mipmaps;for(let Re=0;Re<ae.length;Re++){const We=ae[Re];S.format!==yn?Pe!==null?B?he&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,We.width,We.height,Pe,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,Je,We.width,We.height,0,We.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,0,0,We.width,We.height,Pe,Se,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re,Je,We.width,We.height,0,Pe,Se,We.data)}}}else{if(ae=S.mipmaps,B&&ve){ae.length>0&&Ee++;const Y=me(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Je,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(ie){B?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,Pe,Se,ue[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Je,ue[Y].width,ue[Y].height,0,Pe,Se,ue[Y].data);for(let Re=0;Re<ae.length;Re++){const mt=ae[Re].image[Y].image;B?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,mt.width,mt.height,Pe,Se,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,Je,mt.width,mt.height,0,Pe,Se,mt.data)}}else{B?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Pe,Se,ue[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Je,Pe,Se,ue[Y]);for(let Re=0;Re<ae.length;Re++){const We=ae[Re];B?he&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,0,0,Pe,Se,We.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re+1,Je,Pe,Se,We.image[Y])}}}u(S)&&f(i.TEXTURE_CUBE_MAP),q.__version=K.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function le(P,S,G,$,K,q){const Te=r.convert(G.format,G.colorSpace),ge=r.convert(G.type),Ne=_(G.internalFormat,Te,ge,G.colorSpace),Be=n.get(S),ie=n.get(G);if(ie.__renderTarget=S,!Be.__hasExternalTextures){const ue=Math.max(1,S.width>>q),Ce=Math.max(1,S.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,q,Ne,ue,Ce,S.depth,0,Te,ge,null):t.texImage2D(K,q,Ne,ue,Ce,0,Te,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,ie.__webglTexture,0,I(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(P,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,q=y(S.stencilBuffer,K),Te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Fe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(S),q,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(S),q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,q,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,P)}else{const $=S.textures;for(let K=0;K<$.length;K++){const q=$[K],Te=r.convert(q.format,q.colorSpace),ge=r.convert(q.type),Ne=_(q.internalFormat,Te,ge,q.colorSpace);Fe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(S),Ne,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(S),Ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(P,S,G){const $=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),te(i.TEXTURE_CUBE_MAP,S.depthTexture);const Be=r.convert(S.depthTexture.format),ie=r.convert(S.depthTexture.type);let ue;S.depthTexture.format===Qn?ue=i.DEPTH_COMPONENT24:S.depthTexture.format===Di&&(ue=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ue,S.width,S.height,0,Be,ie,null)}}else F(S.depthTexture,0);const q=K.__webglTexture,Te=I(S),ge=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Ne=S.depthTexture.format===Di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Qn)Fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,ge,q,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,ge,q,0);else if(S.depthTexture.format===Di)Fe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ne,ge,q,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Ne,ge,q,0);else throw new Error("Unknown depthTexture format")}function Ve(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const $=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)ke(S.__webglFramebuffer[$],P,$);else{const $=P.texture.mipmaps;$&&$.length>0?ke(S.__webglFramebuffer[0],P,0):ke(S.__webglFramebuffer,P,0)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),Oe(S.__webglDepthbuffer[$],P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else{const $=P.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Oe(S.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(P,S,G){const $=n.get(P);S!==void 0&&le($.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ve(P)}function $e(P){const S=P.texture,G=n.get(P),$=n.get(S);P.addEventListener("dispose",R);const K=P.textures,q=P.isWebGLCubeRenderTarget===!0,Te=K.length>1;if(Te||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Ne=0;Ne<S.mipmaps.length;Ne++)G.__webglFramebuffer[ge][Ne]=i.createFramebuffer()}else G.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<S.mipmaps.length;ge++)G.__webglFramebuffer[ge]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Te)for(let ge=0,Ne=K.length;ge<Ne;ge++){const Be=n.get(K[ge]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Fe(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<K.length;ge++){const Ne=K[ge];G.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Be=r.convert(Ne.format,Ne.colorSpace),ie=r.convert(Ne.type),ue=_(Ne.internalFormat,Be,ie,Ne.colorSpace,P.isXRRenderTarget===!0),Ce=I(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ue,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),te(i.TEXTURE_CUBE_MAP,S);for(let ge=0;ge<6;ge++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)le(G.__webglFramebuffer[ge][Ne],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne);else le(G.__webglFramebuffer[ge],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);u(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ge=0,Ne=K.length;ge<Ne;ge++){const Be=K[ge],ie=n.get(Be);let ue=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),te(ue,Be),le(G.__webglFramebuffer,P,Be,i.COLOR_ATTACHMENT0+ge,ue,0),u(Be)&&f(ue)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,$.__webglTexture),te(ge,S),S.mipmaps&&S.mipmaps.length>0)for(let Ne=0;Ne<S.mipmaps.length;Ne++)le(G.__webglFramebuffer[Ne],P,S,i.COLOR_ATTACHMENT0,ge,Ne);else le(G.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,ge,0);u(S)&&f(ge),t.unbindTexture()}P.depthBuffer&&Ve(P)}function Q(P){const S=P.textures;for(let G=0,$=S.length;G<$;G++){const K=S[G];if(u(K)){const q=g(P),Te=n.get(K).__webglTexture;t.bindTexture(q,Te),f(q),t.unbindTexture()}}}const re=[],ee=[];function _e(P){if(P.samples>0){if(Fe(P)===!1){const S=P.textures,G=P.width,$=P.height;let K=i.COLOR_BUFFER_BIT;const q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(P),ge=S.length>1;if(ge)for(let Be=0;Be<S.length;Be++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Ne=P.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Be=0;Be<S.length;Be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ie=n.get(S[Be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,K,i.NEAREST),l===!0&&(re.length=0,ee.length=0,re.push(i.COLOR_ATTACHMENT0+Be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(q),ee.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Be=0;Be<S.length;Be++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Be]);const ie=n.get(S[Be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function I(P){return Math.min(s.maxSamples,P.samples)}function Fe(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(P){const S=o.render.frame;d.get(P)!==S&&(d.set(P,S),P.update())}function ze(P,S){const G=P.colorSpace,$=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Es&&G!==fi&&(st.getTransfer(G)===lt?($!==yn||K!==on)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",G)),S}function me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=U,this.setTexture3D=z,this.setTextureCube=Z,this.rebindTextures=dt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Pw(i,e){function t(n,s=fi){let r;const o=st.getTransfer(s);if(n===on)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ac)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mf)return i.BYTE;if(n===gf)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Mc)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===_f)return i.ALPHA;if(n===yf)return i.RGB;if(n===yn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===Di)return i.DEPTH_STENCIL;if(n===Tc)return i.RED;if(n===Cc)return i.RED_INTEGER;if(n===Ms)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Pc)return i.RGBA_INTEGER;if(n===bo||n===wo||n===So||n===Mo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===So)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_l||n===yl||n===bl||n===wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===Ml||n===El||n===Al||n===Tl||n===Cl||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===Ml)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Al)return r.COMPRESSED_R11_EAC;if(n===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Cl)return r.COMPRESSED_RG11_EAC;if(n===Rl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pl||n===Il||n===Dl||n===Ll||n===Nl||n===Ul||n===kl||n===Fl||n===Ol||n===zl||n===Bl||n===Gl||n===Vl||n===Hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wl||n===Xl||n===$l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Wl)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===jl||n===Yl||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Iw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dw=`
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

}`;class Lw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Iw,fragmentShader:Dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Nw extends Ps{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,m=null,v=null;const x=typeof XRWebGLBinding<"u",u=new Lw,f={},g=t.getContextAttributes();let _=null,y=null;const w=[],T=[],R=new pe;let b=null;const E=new Zt;E.viewport=new pt;const M=new Zt;M.viewport=new pt;const A=[E,M],k=new Vv;let N=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=w[J];return oe===void 0&&(oe=new da,w[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=w[J];return oe===void 0&&(oe=new da,w[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=w[J];return oe===void 0&&(oe=new da,w[J]=oe),oe.getHandSpace()};function F(J){const oe=T.indexOf(J.inputSource);if(oe===-1)return;const le=w[oe];le!==void 0&&(le.update(J.inputSource,J.frame,c||o),le.dispatchEvent({type:J.type,data:J.inputSource}))}function U(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let J=0;J<w.length;J++){const oe=T[J];oe!==null&&(T[J]=null,w[J].disconnect(oe))}N=null,L=null,u.reset();for(const J in f)delete f[J];e.setRenderTarget(_),m=null,p=null,h=null,s=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,ke=null;g.depth&&(ke=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?Di:Qn,Oe=g.stencil?hr:Nn);const Ve={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:r};h=this.getBinding(),p=h.createProjectionLayer(Ve),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new wn(p.textureWidth,p.textureHeight,{format:yn,type:on,depthTexture:new mr(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new wn(m.framebufferWidth,m.framebufferHeight,{format:yn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function z(J){for(let oe=0;oe<J.removed.length;oe++){const le=J.removed[oe],Oe=T.indexOf(le);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(le))}for(let oe=0;oe<J.added.length;oe++){const le=J.added[oe];let Oe=T.indexOf(le);if(Oe===-1){for(let Ve=0;Ve<w.length;Ve++)if(Ve>=T.length){T.push(le),Oe=Ve;break}else if(T[Ve]===null){T[Ve]=le,Oe=Ve;break}if(Oe===-1)break}const ke=w[Oe];ke&&ke.connect(le)}}const Z=new D,j=new D;function de(J,oe,le){Z.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(le.matrixWorld);const Oe=Z.distanceTo(j),ke=oe.projectionMatrix.elements,Ve=le.projectionMatrix.elements,dt=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),Q=(ke[9]+1)/ke[5],re=(ke[9]-1)/ke[5],ee=(ke[8]-1)/ke[0],_e=(Ve[8]+1)/Ve[0],I=dt*ee,Fe=dt*_e,we=Oe/(-ee+_e),ze=we*-ee;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ze),J.translateZ(we),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ke[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const me=dt+we,P=$e+we,S=I-ze,G=Fe+(Oe-ze),$=Q*$e/P*me,K=re*$e/P*me;J.projectionMatrix.makePerspective(S,G,$,K,me,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function se(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let oe=J.near,le=J.far;u.texture!==null&&(u.depthNear>0&&(oe=u.depthNear),u.depthFar>0&&(le=u.depthFar)),k.near=M.near=E.near=oe,k.far=M.far=E.far=le,(N!==k.near||L!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),N=k.near,L=k.far),k.layers.mask=J.layers.mask|6,E.layers.mask=k.layers.mask&-5,M.layers.mask=k.layers.mask&-3;const Oe=J.parent,ke=k.cameras;se(k,Oe);for(let Ve=0;Ve<ke.length;Ve++)se(ke[Ve],Oe);ke.length===2?de(k,E,M):k.projectionMatrix.copy(E.projectionMatrix),te(J,k,Oe)};function te(J,oe,le){le===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=pr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(J){l=J,p!==null&&(p.fixedFoveation=J),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=J)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(k)},this.getCameraTexture=function(J){return f[J]};let Ae=null;function Qe(J,oe){if(d=oe.getViewerPose(c||o),v=oe,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Oe=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Oe=!0);for(let $e=0;$e<le.length;$e++){const Q=le[$e];let re=null;if(m!==null)re=m.getViewport(Q);else{const _e=h.getViewSubImage(p,Q);re=_e.viewport,$e===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let ee=A[$e];ee===void 0&&(ee=new Zt,ee.layers.enable($e),ee.viewport=new pt,A[$e]=ee),ee.matrix.fromArray(Q.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(Q.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(re.x,re.y,re.width,re.height),$e===0&&(k.matrix.copy(ee.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Oe===!0&&k.cameras.push(ee)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const $e=h.getDepthInformation(le[0]);$e&&$e.isValid&&$e.texture&&u.init($e,s.renderState)}if(ke&&ke.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<le.length;$e++){const Q=le[$e].camera;if(Q){let re=f[Q];re||(re=new Lf,f[Q]=re);const ee=h.getCameraImage(Q);re.sourceTexture=ee}}}}for(let le=0;le<w.length;le++){const Oe=T[le],ke=w[le];Oe!==null&&ke!==void 0&&ke.update(Oe,oe,c||o)}Ae&&Ae(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),v=null}const tt=new Xf;tt.setAnimationLoop(Qe),this.setAnimationLoop=function(J){Ae=J},this.dispose=function(){}}}const Ci=new Un,Uw=new it;function kw(i,e){function t(u,f){u.matrixAutoUpdate===!0&&u.updateMatrix(),f.value.copy(u.matrix)}function n(u,f){f.color.getRGB(u.fogColor.value,Vf(i)),f.isFog?(u.fogNear.value=f.near,u.fogFar.value=f.far):f.isFogExp2&&(u.fogDensity.value=f.density)}function s(u,f,g,_,y){f.isMeshBasicMaterial?r(u,f):f.isMeshLambertMaterial?(r(u,f),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(u,f),h(u,f)):f.isMeshPhongMaterial?(r(u,f),d(u,f),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(u,f),p(u,f),f.isMeshPhysicalMaterial&&m(u,f,y)):f.isMeshMatcapMaterial?(r(u,f),v(u,f)):f.isMeshDepthMaterial?r(u,f):f.isMeshDistanceMaterial?(r(u,f),x(u,f)):f.isMeshNormalMaterial?r(u,f):f.isLineBasicMaterial?(o(u,f),f.isLineDashedMaterial&&a(u,f)):f.isPointsMaterial?l(u,f,g,_):f.isSpriteMaterial?c(u,f):f.isShadowMaterial?(u.color.value.copy(f.color),u.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(u,f){u.opacity.value=f.opacity,f.color&&u.diffuse.value.copy(f.color),f.emissive&&u.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(u.map.value=f.map,t(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,t(f.alphaMap,u.alphaMapTransform)),f.bumpMap&&(u.bumpMap.value=f.bumpMap,t(f.bumpMap,u.bumpMapTransform),u.bumpScale.value=f.bumpScale,f.side===Qt&&(u.bumpScale.value*=-1)),f.normalMap&&(u.normalMap.value=f.normalMap,t(f.normalMap,u.normalMapTransform),u.normalScale.value.copy(f.normalScale),f.side===Qt&&u.normalScale.value.negate()),f.displacementMap&&(u.displacementMap.value=f.displacementMap,t(f.displacementMap,u.displacementMapTransform),u.displacementScale.value=f.displacementScale,u.displacementBias.value=f.displacementBias),f.emissiveMap&&(u.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,u.emissiveMapTransform)),f.specularMap&&(u.specularMap.value=f.specularMap,t(f.specularMap,u.specularMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest);const g=e.get(f),_=g.envMap,y=g.envMapRotation;_&&(u.envMap.value=_,Ci.copy(y),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.envMapRotation.value.setFromMatrix4(Uw.makeRotationFromEuler(Ci)),u.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=f.reflectivity,u.ior.value=f.ior,u.refractionRatio.value=f.refractionRatio),f.lightMap&&(u.lightMap.value=f.lightMap,u.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,u.lightMapTransform)),f.aoMap&&(u.aoMap.value=f.aoMap,u.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,u.aoMapTransform))}function o(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,f.map&&(u.map.value=f.map,t(f.map,u.mapTransform))}function a(u,f){u.dashSize.value=f.dashSize,u.totalSize.value=f.dashSize+f.gapSize,u.scale.value=f.scale}function l(u,f,g,_){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.size.value=f.size*g,u.scale.value=_*.5,f.map&&(u.map.value=f.map,t(f.map,u.uvTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,t(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function c(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.rotation.value=f.rotation,f.map&&(u.map.value=f.map,t(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,t(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function d(u,f){u.specular.value.copy(f.specular),u.shininess.value=Math.max(f.shininess,1e-4)}function h(u,f){f.gradientMap&&(u.gradientMap.value=f.gradientMap)}function p(u,f){u.metalness.value=f.metalness,f.metalnessMap&&(u.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,u.metalnessMapTransform)),u.roughness.value=f.roughness,f.roughnessMap&&(u.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,u.roughnessMapTransform)),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)}function m(u,f,g){u.ior.value=f.ior,f.sheen>0&&(u.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),u.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(u.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,u.sheenColorMapTransform)),f.sheenRoughnessMap&&(u.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,u.sheenRoughnessMapTransform))),f.clearcoat>0&&(u.clearcoat.value=f.clearcoat,u.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(u.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,u.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(u.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Qt&&u.clearcoatNormalScale.value.negate())),f.dispersion>0&&(u.dispersion.value=f.dispersion),f.iridescence>0&&(u.iridescence.value=f.iridescence,u.iridescenceIOR.value=f.iridescenceIOR,u.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(u.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,u.iridescenceMapTransform)),f.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),f.transmission>0&&(u.transmission.value=f.transmission,u.transmissionSamplerMap.value=g.texture,u.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(u.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,u.transmissionMapTransform)),u.thickness.value=f.thickness,f.thicknessMap&&(u.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=f.attenuationDistance,u.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(u.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(u.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=f.specularIntensity,u.specularColor.value.copy(f.specularColor),f.specularColorMap&&(u.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,u.specularColorMapTransform)),f.specularIntensityMap&&(u.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,u.specularIntensityMapTransform))}function v(u,f){f.matcap&&(u.matcap.value=f.matcap)}function x(u,f){const g=e.get(f).light;u.referencePosition.value.setFromMatrixPosition(g.matrixWorld),u.nearDistance.value=g.shadow.camera.near,u.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Fw(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const y=_.program;n.uniformBlockBinding(g,y)}function c(g,_){let y=s[g.id];y===void 0&&(v(g),y=d(g),s[g.id]=y,g.addEventListener("dispose",u));const w=_.program;n.updateUBOMapping(g,w);const T=e.render.frame;r[g.id]!==T&&(p(g),r[g.id]=T)}function d(g){const _=h();g.__bindingPointIndex=_;const y=i.createBuffer(),w=g.__size,T=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const _=s[g.id],y=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,R=y.length;T<R;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let E=0,M=b.length;E<M;E++){const A=b[E];if(m(A,T,E,w)===!0){const k=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let F=0;F<N.length;F++){const U=N[F],z=x(U);typeof U=="number"||typeof U=="boolean"?(A.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+L,A.__data)):U.isMatrix3?(A.__data[0]=U.elements[0],A.__data[1]=U.elements[1],A.__data[2]=U.elements[2],A.__data[3]=0,A.__data[4]=U.elements[3],A.__data[5]=U.elements[4],A.__data[6]=U.elements[5],A.__data[7]=0,A.__data[8]=U.elements[6],A.__data[9]=U.elements[7],A.__data[10]=U.elements[8],A.__data[11]=0):(U.toArray(A.__data,L),L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,_,y,w){const T=g.value,R=_+"_"+y;if(w[R]===void 0)return typeof T=="number"||typeof T=="boolean"?w[R]=T:w[R]=T.clone(),!0;{const b=w[R];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[R]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function v(g){const _=g.uniforms;let y=0;const w=16;for(let R=0,b=_.length;R<b;R++){const E=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,A=E.length;M<A;M++){const k=E[M],N=Array.isArray(k.value)?k.value:[k.value];for(let L=0,F=N.length;L<F;L++){const U=N[L],z=x(U),Z=y%w,j=Z%z.boundary,de=Z+j;y+=j,de!==0&&w-de<z.storage&&(y+=w-de),k.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=z.storage}}}const T=y%w;return T>0&&(y+=w-T),g.__size=y,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ge("WebGLRenderer: Unsupported uniform value type.",g),_}function u(g){const _=g.target;_.removeEventListener("dispose",u);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(const g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}const Ow=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let En=null;function zw(){return En===null&&(En=new Pf(Ow,16,16,Ms,Kn),En.name="DFG_LUT",En.minFilter=Ot,En.magFilter=Ot,En.wrapS=Yn,En.wrapT=Yn,En.generateMipmaps=!1,En.needsUpdate=!0),En}class Bw{constructor(e={}){const{canvas:t=r0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:p=!1,outputBufferType:m=on}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const x=m,u=new Set([Pc,Rc,Cc]),f=new Set([on,Nn,ur,hr,Ec,Ac]),g=new Uint32Array(4),_=new Int32Array(4);let y=null,w=null;const T=[],R=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let M=!1;this._outputColorSpace=kt;let A=0,k=0,N=null,L=-1,F=null;const U=new pt,z=new pt;let Z=null;const j=new Ye(0);let de=0,se=t.width,te=t.height,Ae=1,Qe=null,tt=null;const J=new pt(0,0,se,te),oe=new pt(0,0,se,te);let le=!1;const Oe=new Oc;let ke=!1,Ve=!1;const dt=new it,$e=new D,Q=new pt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function _e(){return N===null?Ae:1}let I=n;function Fe(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",mt,!1),I===null){const V="webgl2";if(I=Fe(V,C),I===null)throw Fe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw nt("WebGLRenderer: "+C.message),C}let we,ze,me,P,S,G,$,K,q,Te,ge,Ne,Be,ie,ue,Ce,Pe,Se,Je,B,ve,he,Ee;function ae(){we=new By(I),we.init(),ve=new Pw(I,we),ze=new Dy(I,we,e,ve),me=new Cw(I,we),ze.reversedDepthBuffer&&p&&me.buffers.depth.setReversed(!0),P=new Hy(I),S=new pw,G=new Rw(I,we,me,S,ze,ve,P),$=new zy(E),K=new jv(I),he=new Py(I,K),q=new Gy(I,K,P,he),Te=new Xy(I,q,K,he,P),Se=new Wy(I,ze,G),ue=new Ly(S),ge=new fw(E,$,we,ze,he,ue),Ne=new kw(E,S),Be=new gw,ie=new ww(we),Pe=new Ry(E,$,me,Te,v,l),Ce=new Tw(E,Te,ze),Ee=new Fw(I,P,ze,me),Je=new Iy(I,we,P),B=new Vy(I,we,P),P.programs=ge.programs,E.capabilities=ze,E.extensions=we,E.properties=S,E.renderLists=Be,E.shadowMap=Ce,E.state=me,E.info=P}ae(),x!==on&&(b=new qy(x,t.width,t.height,s,r));const Y=new Nw(E,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const C=we.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=we.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(C){C!==void 0&&(Ae=C,this.setSize(se,te,!1))},this.getSize=function(C){return C.set(se,te)},this.setSize=function(C,V,X=!0){if(Y.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,te=V,t.width=Math.floor(C*Ae),t.height=Math.floor(V*Ae),X===!0&&(t.style.width=C+"px",t.style.height=V+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(se*Ae,te*Ae).floor()},this.setDrawingBufferSize=function(C,V,X){se=C,te=V,Ae=X,t.width=Math.floor(C*X),t.height=Math.floor(V*X),this.setViewport(0,0,C,V)},this.setEffects=function(C){if(x===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let V=0;V<C.length;V++)if(C[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,V,X,W){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,X,W),me.viewport(U.copy(J).multiplyScalar(Ae).round())},this.getScissor=function(C){return C.copy(oe)},this.setScissor=function(C,V,X,W){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,V,X,W),me.scissor(z.copy(oe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){me.setScissorTest(le=C)},this.setOpaqueSort=function(C){Qe=C},this.setTransparentSort=function(C){tt=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,X=!0){let W=0;if(C){let H=!1;if(N!==null){const ye=N.texture.format;H=u.has(ye)}if(H){const ye=N.texture.type,Me=f.has(ye),be=Pe.getClearColor(),Ie=Pe.getClearAlpha(),Le=be.r,qe=be.g,Ke=be.b;Me?(g[0]=Le,g[1]=qe,g[2]=Ke,g[3]=Ie,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Le,_[1]=qe,_[2]=Ke,_[3]=Ie,I.clearBufferiv(I.COLOR,0,_))}else W|=I.COLOR_BUFFER_BIT}V&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Pe.dispose(),Be.dispose(),ie.dispose(),S.dispose(),$.dispose(),Te.dispose(),he.dispose(),Ee.dispose(),ge.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Kc),Y.removeEventListener("sessionend",Qc),bi.stop()};function Re(C){C.preventDefault(),ko("WebGLRenderer: Context Lost."),M=!0}function We(){ko("WebGLRenderer: Context Restored."),M=!1;const C=P.autoReset,V=Ce.enabled,X=Ce.autoUpdate,W=Ce.needsUpdate,H=Ce.type;ae(),P.autoReset=C,Ce.enabled=V,Ce.autoUpdate=X,Ce.needsUpdate=W,Ce.type=H}function mt(C){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const V=C.target;V.removeEventListener("dispose",at),zn(V)}function zn(C){Bn(C),S.remove(C)}function Bn(C){const V=S.get(C).programs;V!==void 0&&(V.forEach(function(X){ge.releaseProgram(X)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,X,W,H,ye){V===null&&(V=re);const Me=H.isMesh&&H.matrixWorld.determinant()<0,be=dp(C,V,X,W,H);me.setMaterial(W,Me);let Ie=X.index,Le=1;if(W.wireframe===!0){if(Ie=q.getWireframeAttribute(X),Ie===void 0)return;Le=2}const qe=X.drawRange,Ke=X.attributes.position;let Ue=qe.start*Le,ut=(qe.start+qe.count)*Le;ye!==null&&(Ue=Math.max(Ue,ye.start*Le),ut=Math.min(ut,(ye.start+ye.count)*Le)),Ie!==null?(Ue=Math.max(Ue,0),ut=Math.min(ut,Ie.count)):Ke!=null&&(Ue=Math.max(Ue,0),ut=Math.min(ut,Ke.count));const bt=ut-Ue;if(bt<0||bt===1/0)return;he.setup(H,W,be,X,Ie);let _t,ht=Je;if(Ie!==null&&(_t=K.get(Ie),ht=B,ht.setIndex(_t)),H.isMesh)W.wireframe===!0?(me.setLineWidth(W.wireframeLinewidth*_e()),ht.setMode(I.LINES)):ht.setMode(I.TRIANGLES);else if(H.isLine){let Bt=W.linewidth;Bt===void 0&&(Bt=1),me.setLineWidth(Bt*_e()),H.isLineSegments?ht.setMode(I.LINES):H.isLineLoop?ht.setMode(I.LINE_LOOP):ht.setMode(I.LINE_STRIP)}else H.isPoints?ht.setMode(I.POINTS):H.isSprite&&ht.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(we.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Bt=H._multiDrawStarts,De=H._multiDrawCounts,tn=H._multiDrawCount,rt=Ie?K.get(Ie).bytesPerElement:1,fn=S.get(W).currentProgram.getUniforms();for(let Sn=0;Sn<tn;Sn++)fn.setValue(I,"_gl_DrawID",Sn),ht.render(Bt[Sn]/rt,De[Sn])}else if(H.isInstancedMesh)ht.renderInstances(Ue,bt,H.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,Bt);ht.renderInstances(Ue,bt,De)}else ht.render(Ue,bt)};function Jc(C,V,X){C.transparent===!0&&C.side===qn&&C.forceSinglePass===!1?(C.side=Qt,C.needsUpdate=!0,Mr(C,V,X),C.side=xi,C.needsUpdate=!0,Mr(C,V,X),C.side=qn):Mr(C,V,X)}this.compile=function(C,V,X=null){X===null&&(X=C),w=ie.get(X),w.init(V),R.push(w),X.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),C!==X&&C.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights();const W=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ye=H.material;if(ye)if(Array.isArray(ye))for(let Me=0;Me<ye.length;Me++){const be=ye[Me];Jc(be,X,H),W.add(be)}else Jc(ye,X,H),W.add(ye)}),w=R.pop(),W},this.compileAsync=function(C,V,X=null){const W=this.compile(C,V,X);return new Promise(H=>{function ye(){if(W.forEach(function(Me){S.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){H(C);return}setTimeout(ye,10)}we.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Zo=null;function cp(C){Zo&&Zo(C)}function Kc(){bi.stop()}function Qc(){bi.start()}const bi=new Xf;bi.setAnimationLoop(cp),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(C){Zo=C,Y.setAnimationLoop(C),C===null?bi.stop():bi.start()},Y.addEventListener("sessionstart",Kc),Y.addEventListener("sessionend",Qc),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const X=Y.enabled===!0&&Y.isPresenting===!0,W=b!==null&&(N===null||X)&&b.begin(E,N);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(V),V=Y.getCamera()),C.isScene===!0&&C.onBeforeRender(E,C,V,N),w=ie.get(C,R.length),w.init(V),R.push(w),dt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Oe.setFromProjectionMatrix(dt,In,V.reversedDepth),Ve=this.localClippingEnabled,ke=ue.init(this.clippingPlanes,Ve),y=Be.get(C,T.length),y.init(),T.push(y),Y.enabled===!0&&Y.isPresenting===!0){const Me=E.xr.getDepthSensingMesh();Me!==null&&Jo(Me,V,-1/0,E.sortObjects)}Jo(C,V,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Qe,tt),ee=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ee&&Pe.addToRenderList(y,C),this.info.render.frame++,ke===!0&&ue.beginShadows();const H=w.state.shadowsArray;if(Ce.render(H,C,V),ke===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&b.hasRenderPass())===!1){const Me=y.opaque,be=y.transmissive;if(w.setupLights(),V.isArrayCamera){const Ie=V.cameras;if(be.length>0)for(let Le=0,qe=Ie.length;Le<qe;Le++){const Ke=Ie[Le];td(Me,be,C,Ke)}ee&&Pe.render(C);for(let Le=0,qe=Ie.length;Le<qe;Le++){const Ke=Ie[Le];ed(y,C,Ke,Ke.viewport)}}else be.length>0&&td(Me,be,C,V),ee&&Pe.render(C),ed(y,C,V)}N!==null&&k===0&&(G.updateMultisampleRenderTarget(N),G.updateRenderTargetMipmap(N)),W&&b.end(E),C.isScene===!0&&C.onAfterRender(E,C,V),he.resetDefaultState(),L=-1,F=null,R.pop(),R.length>0?(w=R[R.length-1],ke===!0&&ue.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?y=T[T.length-1]:y=null};function Jo(C,V,X,W){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)X=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Oe.intersectsSprite(C)){W&&Q.setFromMatrixPosition(C.matrixWorld).applyMatrix4(dt);const Me=Te.update(C),be=C.material;be.visible&&y.push(C,Me,be,X,Q.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Oe.intersectsObject(C))){const Me=Te.update(C),be=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Q.copy(C.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Q.copy(Me.boundingSphere.center)),Q.applyMatrix4(C.matrixWorld).applyMatrix4(dt)),Array.isArray(be)){const Ie=Me.groups;for(let Le=0,qe=Ie.length;Le<qe;Le++){const Ke=Ie[Le],Ue=be[Ke.materialIndex];Ue&&Ue.visible&&y.push(C,Me,Ue,X,Q.z,Ke)}}else be.visible&&y.push(C,Me,be,X,Q.z,null)}}const ye=C.children;for(let Me=0,be=ye.length;Me<be;Me++)Jo(ye[Me],V,X,W)}function ed(C,V,X,W){const{opaque:H,transmissive:ye,transparent:Me}=C;w.setupLightsView(X),ke===!0&&ue.setGlobalState(E.clippingPlanes,X),W&&me.viewport(U.copy(W)),H.length>0&&Sr(H,V,X),ye.length>0&&Sr(ye,V,X),Me.length>0&&Sr(Me,V,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function td(C,V,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Ue=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new wn(1,1,{generateMipmaps:!0,type:Ue?Kn:on,minFilter:Ii,samples:Math.max(4,ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const ye=w.state.transmissionRenderTarget[W.id],Me=W.viewport||U;ye.setSize(Me.z*E.transmissionResolutionScale,Me.w*E.transmissionResolutionScale);const be=E.getRenderTarget(),Ie=E.getActiveCubeFace(),Le=E.getActiveMipmapLevel();E.setRenderTarget(ye),E.getClearColor(j),de=E.getClearAlpha(),de<1&&E.setClearColor(16777215,.5),E.clear(),ee&&Pe.render(X);const qe=E.toneMapping;E.toneMapping=Dn;const Ke=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),ke===!0&&ue.setGlobalState(E.clippingPlanes,W),Sr(C,X,W),G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let ut=0,bt=V.length;ut<bt;ut++){const _t=V[ut],{object:ht,geometry:Bt,material:De,group:tn}=_t;if(De.side===qn&&ht.layers.test(W.layers)){const rt=De.side;De.side=Qt,De.needsUpdate=!0,nd(ht,X,W,Bt,De,tn),De.side=rt,De.needsUpdate=!0,Ue=!0}}Ue===!0&&(G.updateMultisampleRenderTarget(ye),G.updateRenderTargetMipmap(ye))}E.setRenderTarget(be,Ie,Le),E.setClearColor(j,de),Ke!==void 0&&(W.viewport=Ke),E.toneMapping=qe}function Sr(C,V,X){const W=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ye=C.length;H<ye;H++){const Me=C[H],{object:be,geometry:Ie,group:Le}=Me;let qe=Me.material;qe.allowOverride===!0&&W!==null&&(qe=W),be.layers.test(X.layers)&&nd(be,V,X,Ie,qe,Le)}}function nd(C,V,X,W,H,ye){C.onBeforeRender(E,V,X,W,H,ye),C.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(E,V,X,W,C,ye),H.transparent===!0&&H.side===qn&&H.forceSinglePass===!1?(H.side=Qt,H.needsUpdate=!0,E.renderBufferDirect(X,V,W,H,C,ye),H.side=xi,H.needsUpdate=!0,E.renderBufferDirect(X,V,W,H,C,ye),H.side=qn):E.renderBufferDirect(X,V,W,H,C,ye),C.onAfterRender(E,V,X,W,H,ye)}function Mr(C,V,X){V.isScene!==!0&&(V=re);const W=S.get(C),H=w.state.lights,ye=w.state.shadowsArray,Me=H.state.version,be=ge.getParameters(C,H.state,ye,V,X),Ie=ge.getProgramCacheKey(be);let Le=W.programs;W.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;const qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;W.envMap=$.get(C.envMap||W.environment,qe),W.envMapRotation=W.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Le===void 0&&(C.addEventListener("dispose",at),Le=new Map,W.programs=Le);let Ke=Le.get(Ie);if(Ke!==void 0){if(W.currentProgram===Ke&&W.lightsStateVersion===Me)return sd(C,be),Ke}else be.uniforms=ge.getUniforms(C),C.onBeforeCompile(be,E),Ke=ge.acquireProgram(be,Ie),Le.set(Ie,Ke),W.uniforms=be.uniforms;const Ue=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ue.clippingPlanes=ue.uniform),sd(C,be),W.needsLights=hp(C),W.lightsStateVersion=Me,W.needsLights&&(Ue.ambientLightColor.value=H.state.ambient,Ue.lightProbe.value=H.state.probe,Ue.directionalLights.value=H.state.directional,Ue.directionalLightShadows.value=H.state.directionalShadow,Ue.spotLights.value=H.state.spot,Ue.spotLightShadows.value=H.state.spotShadow,Ue.rectAreaLights.value=H.state.rectArea,Ue.ltc_1.value=H.state.rectAreaLTC1,Ue.ltc_2.value=H.state.rectAreaLTC2,Ue.pointLights.value=H.state.point,Ue.pointLightShadows.value=H.state.pointShadow,Ue.hemisphereLights.value=H.state.hemi,Ue.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ue.spotLightMatrix.value=H.state.spotLightMatrix,Ue.spotLightMap.value=H.state.spotLightMap,Ue.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ke,W.uniformsList=null,Ke}function id(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Eo.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function sd(C,V){const X=S.get(C);X.outputColorSpace=V.outputColorSpace,X.batching=V.batching,X.batchingColor=V.batchingColor,X.instancing=V.instancing,X.instancingColor=V.instancingColor,X.instancingMorph=V.instancingMorph,X.skinning=V.skinning,X.morphTargets=V.morphTargets,X.morphNormals=V.morphNormals,X.morphColors=V.morphColors,X.morphTargetsCount=V.morphTargetsCount,X.numClippingPlanes=V.numClippingPlanes,X.numIntersection=V.numClipIntersection,X.vertexAlphas=V.vertexAlphas,X.vertexTangents=V.vertexTangents,X.toneMapping=V.toneMapping}function dp(C,V,X,W,H){V.isScene!==!0&&(V=re),G.resetTextureUnits();const ye=V.fog,Me=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,be=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Es,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Le=$.get(W.envMap||Me,Ie),qe=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ke=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!X.morphAttributes.position,ut=!!X.morphAttributes.normal,bt=!!X.morphAttributes.color;let _t=Dn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(_t=E.toneMapping);const ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Bt=ht!==void 0?ht.length:0,De=S.get(W),tn=w.state.lights;if(ke===!0&&(Ve===!0||C!==F)){const Rt=C===F&&W.id===L;ue.setState(W,C,Rt)}let rt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==tn.state.version||De.outputColorSpace!==be||H.isBatchedMesh&&De.batching===!1||!H.isBatchedMesh&&De.batching===!0||H.isBatchedMesh&&De.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&De.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&De.instancing===!1||!H.isInstancedMesh&&De.instancing===!0||H.isSkinnedMesh&&De.skinning===!1||!H.isSkinnedMesh&&De.skinning===!0||H.isInstancedMesh&&De.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&De.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&De.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&De.instancingMorph===!1&&H.morphTexture!==null||De.envMap!==Le||W.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==qe||De.vertexTangents!==Ke||De.morphTargets!==Ue||De.morphNormals!==ut||De.morphColors!==bt||De.toneMapping!==_t||De.morphTargetsCount!==Bt)&&(rt=!0):(rt=!0,De.__version=W.version);let fn=De.currentProgram;rt===!0&&(fn=Mr(W,V,H));let Sn=!1,wi=!1,Vi=!1;const ft=fn.getUniforms(),Dt=De.uniforms;if(me.useProgram(fn.program)&&(Sn=!0,wi=!0,Vi=!0),W.id!==L&&(L=W.id,wi=!0),Sn||F!==C){me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",C.projectionMatrix),ft.setValue(I,"viewMatrix",C.matrixWorldInverse);const ii=ft.map.cameraPosition;ii!==void 0&&ii.setValue(I,$e.setFromMatrixPosition(C.matrixWorld)),ze.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(I,"isOrthographic",C.isOrthographicCamera===!0),F!==C&&(F=C,wi=!0,Vi=!0)}if(De.needsLights&&(tn.state.directionalShadowMap.length>0&&ft.setValue(I,"directionalShadowMap",tn.state.directionalShadowMap,G),tn.state.spotShadowMap.length>0&&ft.setValue(I,"spotShadowMap",tn.state.spotShadowMap,G),tn.state.pointShadowMap.length>0&&ft.setValue(I,"pointShadowMap",tn.state.pointShadowMap,G)),H.isSkinnedMesh){ft.setOptional(I,H,"bindMatrix"),ft.setOptional(I,H,"bindMatrixInverse");const Rt=H.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),ft.setValue(I,"boneTexture",Rt.boneTexture,G))}H.isBatchedMesh&&(ft.setOptional(I,H,"batchingTexture"),ft.setValue(I,"batchingTexture",H._matricesTexture,G),ft.setOptional(I,H,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",H._indirectTexture,G),ft.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",H._colorsTexture,G));const ni=X.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&Se.update(H,X,fn),(wi||De.receiveShadow!==H.receiveShadow)&&(De.receiveShadow=H.receiveShadow,ft.setValue(I,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(Dt.envMapIntensity.value=V.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=zw()),wi&&(ft.setValue(I,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&up(Dt,Vi),ye&&W.fog===!0&&Ne.refreshFogUniforms(Dt,ye),Ne.refreshMaterialUniforms(Dt,W,Ae,te,w.state.transmissionRenderTarget[C.id]),Eo.upload(I,id(De),Dt,G)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Eo.upload(I,id(De),Dt,G),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(I,"center",H.center),ft.setValue(I,"modelViewMatrix",H.modelViewMatrix),ft.setValue(I,"normalMatrix",H.normalMatrix),ft.setValue(I,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Rt=W.uniformsGroups;for(let ii=0,Hi=Rt.length;ii<Hi;ii++){const rd=Rt[ii];Ee.update(rd,fn),Ee.bind(rd,fn)}}return fn}function up(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function hp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,V,X){const W=S.get(C);W.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),S.get(C.texture).__webglTexture=V,S.get(C.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const X=S.get(C);X.__webglFramebuffer=V,X.__useDefaultFramebuffer=V===void 0};const fp=I.createFramebuffer();this.setRenderTarget=function(C,V=0,X=0){N=C,A=V,k=X;let W=null,H=!1,ye=!1;if(C){const be=S.get(C);if(be.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(I.FRAMEBUFFER,be.__webglFramebuffer),U.copy(C.viewport),z.copy(C.scissor),Z=C.scissorTest,me.viewport(U),me.scissor(z),me.setScissorTest(Z),L=-1;return}else if(be.__webglFramebuffer===void 0)G.setupRenderTarget(C);else if(be.__hasExternalTextures)G.rebindTextures(C,S.get(C.texture).__webglTexture,S.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(be.__boundDepthTexture!==qe){if(qe!==null&&S.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(C)}}const Ie=C.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Le=S.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Le[V])?W=Le[V][X]:W=Le[V],H=!0):C.samples>0&&G.useMultisampledRTT(C)===!1?W=S.get(C).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[X]:W=Le,U.copy(C.viewport),z.copy(C.scissor),Z=C.scissorTest}else U.copy(J).multiplyScalar(Ae).floor(),z.copy(oe).multiplyScalar(Ae).floor(),Z=le;if(X!==0&&(W=fp),me.bindFramebuffer(I.FRAMEBUFFER,W)&&me.drawBuffers(C,W),me.viewport(U),me.scissor(z),me.setScissorTest(Z),H){const be=S.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,X)}else if(ye){const be=V;for(let Ie=0;Ie<C.textures.length;Ie++){const Le=S.get(C.textures[Ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ie,Le.__webglTexture,X,be)}}else if(C!==null&&X!==0){const be=S.get(C.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,be.__webglTexture,X)}L=-1},this.readRenderTargetPixels=function(C,V,X,W,H,ye,Me,be=0){if(!(C&&C.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie){me.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Le=C.textures[be],qe=Le.format,Ke=Le.type;if(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be),!ze.textureFormatReadable(qe)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ke)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-W&&X>=0&&X<=C.height-H&&I.readPixels(V,X,W,H,ve.convert(qe),ve.convert(Ke),ye)}finally{const Le=N!==null?S.get(N).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,V,X,W,H,ye,Me,be=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=S.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Me!==void 0&&(Ie=Ie[Me]),Ie)if(V>=0&&V<=C.width-W&&X>=0&&X<=C.height-H){me.bindFramebuffer(I.FRAMEBUFFER,Ie);const Le=C.textures[be],qe=Le.format,Ke=Le.type;if(C.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+be),!ze.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,ye.byteLength,I.STREAM_READ),I.readPixels(V,X,W,H,ve.convert(qe),ve.convert(Ke),0);const ut=N!==null?S.get(N).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,ut);const bt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await o0(I,bt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ye),I.deleteBuffer(Ue),I.deleteSync(bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,X=0){const W=Math.pow(2,-X),H=Math.floor(C.image.width*W),ye=Math.floor(C.image.height*W),Me=V!==null?V.x:0,be=V!==null?V.y:0;G.setTexture2D(C,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,Me,be,H,ye),me.unbindTexture()};const pp=I.createFramebuffer(),mp=I.createFramebuffer();this.copyTextureToTexture=function(C,V,X=null,W=null,H=0,ye=0){let Me,be,Ie,Le,qe,Ke,Ue,ut,bt;const _t=C.isCompressedTexture?C.mipmaps[ye]:C.image;if(X!==null)Me=X.max.x-X.min.x,be=X.max.y-X.min.y,Ie=X.isBox3?X.max.z-X.min.z:1,Le=X.min.x,qe=X.min.y,Ke=X.isBox3?X.min.z:0;else{const Dt=Math.pow(2,-H);Me=Math.floor(_t.width*Dt),be=Math.floor(_t.height*Dt),C.isDataArrayTexture?Ie=_t.depth:C.isData3DTexture?Ie=Math.floor(_t.depth*Dt):Ie=1,Le=0,qe=0,Ke=0}W!==null?(Ue=W.x,ut=W.y,bt=W.z):(Ue=0,ut=0,bt=0);const ht=ve.convert(V.format),Bt=ve.convert(V.type);let De;V.isData3DTexture?(G.setTexture3D(V,0),De=I.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(G.setTexture2DArray(V,0),De=I.TEXTURE_2D_ARRAY):(G.setTexture2D(V,0),De=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment);const tn=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fn=I.getParameter(I.UNPACK_SKIP_PIXELS),Sn=I.getParameter(I.UNPACK_SKIP_ROWS),wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ke);const Vi=C.isDataArrayTexture||C.isData3DTexture,ft=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const Dt=S.get(C),ni=S.get(V),Rt=S.get(Dt.__renderTarget),ii=S.get(ni.__renderTarget);me.bindFramebuffer(I.READ_FRAMEBUFFER,Rt.__webglFramebuffer),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Hi=0;Hi<Ie;Hi++)Vi&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(C).__webglTexture,H,Ke+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,S.get(V).__webglTexture,ye,bt+Hi)),I.blitFramebuffer(Le,qe,Me,be,Ue,ut,Me,be,I.DEPTH_BUFFER_BIT,I.NEAREST);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||S.has(C)){const Dt=S.get(C),ni=S.get(V);me.bindFramebuffer(I.READ_FRAMEBUFFER,pp),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,mp);for(let Rt=0;Rt<Ie;Rt++)Vi?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,H,Ke+Rt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Dt.__webglTexture,H),ft?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ni.__webglTexture,ye,bt+Rt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ni.__webglTexture,ye),H!==0?I.blitFramebuffer(Le,qe,Me,be,Ue,ut,Me,be,I.COLOR_BUFFER_BIT,I.NEAREST):ft?I.copyTexSubImage3D(De,ye,Ue,ut,bt+Rt,Le,qe,Me,be):I.copyTexSubImage2D(De,ye,Ue,ut,Le,qe,Me,be);me.bindFramebuffer(I.READ_FRAMEBUFFER,null),me.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ft?C.isDataTexture||C.isData3DTexture?I.texSubImage3D(De,ye,Ue,ut,bt,Me,be,Ie,ht,Bt,_t.data):V.isCompressedArrayTexture?I.compressedTexSubImage3D(De,ye,Ue,ut,bt,Me,be,Ie,ht,_t.data):I.texSubImage3D(De,ye,Ue,ut,bt,Me,be,Ie,ht,Bt,_t):C.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ye,Ue,ut,Me,be,ht,Bt,_t.data):C.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ye,Ue,ut,_t.width,_t.height,ht,_t.data):I.texSubImage2D(I.TEXTURE_2D,ye,Ue,ut,Me,be,ht,Bt,_t);I.pixelStorei(I.UNPACK_ROW_LENGTH,tn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wi),ye===0&&V.generateMipmaps&&I.generateMipmap(De),me.unbindTexture()},this.initRenderTarget=function(C){S.get(C).__webglFramebuffer===void 0&&G.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?G.setTextureCube(C,0):C.isData3DTexture?G.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?G.setTexture2DArray(C,0):G.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){A=0,k=0,N=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}xe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new pe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Jt.line={uniforms:qo.merge([xe.common,xe.fog,xe.line]),vertexShader:`
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
		`};class Ni extends cn{constructor(e){super({type:"LineMaterial",uniforms:qo.clone(Jt.line.uniforms),vertexShader:Jt.line.vertexShader,fragmentShader:Jt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0!==this.worldUnits&&(this.needsUpdate=!0),e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const qu=new kn,ao=new D;class Go extends Bv{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new gt(e,3)),this.setAttribute("uv",new gt(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new sc(t,6,1);return this.setAttribute("instanceStart",new ln(n,3,0)),this.setAttribute("instanceEnd",new ln(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new sc(t,6,1);return this.setAttribute("instanceColorStart",new ln(n,3,0)),this.setAttribute("instanceColorEnd",new ln(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new Rv(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),qu.setFromBufferAttribute(t),this.boundingBox.union(qu))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ao.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ao)),ao.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ao));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}const Ga=new pt,ju=new D,Yu=new D,Lt=new pt,Nt=new pt,An=new pt,Va=new D,Ha=new it,Ut=new $v,Zu=new D,lo=new kn,co=new yi,Tn=new pt;let Pn,Ui;function Ju(i,e,t){return Tn.set(0,0,-e,1).applyMatrix4(i.projectionMatrix),Tn.multiplyScalar(1/Tn.w),Tn.x=Ui/t.width,Tn.y=Ui/t.height,Tn.applyMatrix4(i.projectionMatrixInverse),Tn.multiplyScalar(1/Tn.w),Math.abs(Math.max(Tn.x,Tn.y))}function Gw(i,e){const t=i.matrixWorld,n=i.geometry,s=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,s.count);for(let a=0,l=o;a<l;a++){Ut.start.fromBufferAttribute(s,a),Ut.end.fromBufferAttribute(r,a),Ut.applyMatrix4(t);const c=new D,d=new D;Pn.distanceSqToSegment(Ut.start,Ut.end,d,c),d.distanceTo(c)<Ui*.5&&e.push({point:d,pointOnLine:c,distance:Pn.origin.distanceTo(d),object:i,face:null,faceIndex:a,uv:null,uv1:null})}}function Vw(i,e,t){const n=e.projectionMatrix,r=i.material.resolution,o=i.matrixWorld,a=i.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=Math.min(a.instanceCount,l.count),h=-e.near;Pn.at(1,An),An.w=1,An.applyMatrix4(e.matrixWorldInverse),An.applyMatrix4(n),An.multiplyScalar(1/An.w),An.x*=r.x/2,An.y*=r.y/2,An.z=0,Va.copy(An),Ha.multiplyMatrices(e.matrixWorldInverse,o);for(let p=0,m=d;p<m;p++){if(Lt.fromBufferAttribute(l,p),Nt.fromBufferAttribute(c,p),Lt.w=1,Nt.w=1,Lt.applyMatrix4(Ha),Nt.applyMatrix4(Ha),Lt.z>h&&Nt.z>h)continue;if(Lt.z>h){const _=Lt.z-Nt.z,y=(Lt.z-h)/_;Lt.lerp(Nt,y)}else if(Nt.z>h){const _=Nt.z-Lt.z,y=(Nt.z-h)/_;Nt.lerp(Lt,y)}Lt.applyMatrix4(n),Nt.applyMatrix4(n),Lt.multiplyScalar(1/Lt.w),Nt.multiplyScalar(1/Nt.w),Lt.x*=r.x/2,Lt.y*=r.y/2,Nt.x*=r.x/2,Nt.y*=r.y/2,Ut.start.copy(Lt),Ut.start.z=0,Ut.end.copy(Nt),Ut.end.z=0;const x=Ut.closestPointToPointParameter(Va,!0);Ut.at(x,Zu);const u=M0.lerp(Lt.z,Nt.z,x),f=u>=-1&&u<=1,g=Va.distanceTo(Zu)<Ui*.5;if(f&&g){Ut.start.fromBufferAttribute(l,p),Ut.end.fromBufferAttribute(c,p),Ut.start.applyMatrix4(o),Ut.end.applyMatrix4(o);const _=new D,y=new D;Pn.distanceSqToSegment(Ut.start,Ut.end,y,_),t.push({point:y,pointOnLine:_,distance:Pn.origin.distanceTo(y),object:i,face:null,faceIndex:p,uv:null,uv1:null})}}}class Ao extends vt{constructor(e=new Go,t=new Ni({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,s=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)ju.fromBufferAttribute(t,o),Yu.fromBufferAttribute(n,o),s[a]=a===0?0:s[a-1],s[a+1]=s[a]+ju.distanceTo(Yu);const r=new sc(s,2,1);return e.setAttribute("instanceDistanceStart",new ln(r,1,0)),e.setAttribute("instanceDistanceEnd",new ln(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,s=e.camera;s===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Pn=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Ui=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),co.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Ui*.5;else{const h=Math.max(s.near,co.distanceToPoint(Pn.origin));c=Ju(s,h,l.resolution)}if(co.radius+=c,Pn.intersectsSphere(co)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),lo.copy(a.boundingBox).applyMatrix4(o);let d;if(n)d=Ui*.5;else{const h=Math.max(s.near,lo.distanceToPoint(Pn.origin));d=Ju(s,h,l.resolution)}lo.expandByScalar(d),Pn.intersectsBox(lo)!==!1&&(n?Gw(this,t):Vw(this,s,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(Ga),this.material.uniforms.resolution.value.set(Ga.z,Ga.w))}}const lc=new Map,cc=new Map;function Hw(i){const e=i?new Set(i):void 0;return Promise.all(ki.filter(t=>t.icon&&(!e||e.has(t.id))).map(Xw)).then(()=>{})}function Ww(i){return[...new Set(i)].filter(e=>!cc.has(e))}function Xw(i){let e=cc.get(i.id);return e||(e=new Promise((t,n)=>{const s=new Image;s.onload=()=>{lc.set(i.id,s),t()},s.onerror=()=>n(Error(`Could not load ${i.label} icon`)),s.src=i.icon??""}),cc.set(i.id,e)),e}function Cs(i,e,t){const n=zt(i,t);return{x:n.x+(e==="east"?i.width/2:e==="west"?-i.width/2:0),z:n.z+(e==="south"?i.depth/2:e==="north"?-i.depth/2:0)}}function sr(i,e,t){const n=zt(i,t),s=(e.x-n.x)/Math.max(i.width,1),r=(e.z-n.z)/Math.max(i.depth,1);return Math.abs(s)>=Math.abs(r)?s>=0?"east":"west":r>=0?"south":"north"}function $w(i,e,t){const n=t?t==="horizontal":Math.abs(e.x-i.x)>=Math.abs(e.z-i.z),s=n?e.x>=i.x:e.z>=i.z;return n?s?["east","west"]:["west","east"]:s?["south","north"]:["north","south"]}function Jf(i){const e=[];for(const t of i.values())t.kind!=="group"&&e.push({id:t.id,...uc(t,i)});return e}function Kf(i,e){const t=e.get(i.source),n=e.get(i.target);if(!t||!n)throw Error("Missing connection endpoint");const s=zt(t,e),r=zt(n,e),[o,a]=$w(s,r,i.routing);let l=i.sourcePort??o,c=i.targetPort??a;return i.sourcePort&&!i.targetPort&&(c=sr(n,Cs(t,l,e),e)),!i.sourcePort&&i.targetPort&&(l=sr(t,Cs(n,c,e),e)),[l,c]}const Qf=(i,e)=>`${i}\0${e}`;function qw(i,e){const t=new Map;for(const n of i){if(!e.has(n.source)||!e.has(n.target))continue;const[s,r]=Kf(n,e);for(const o of[`${n.source}:${s}`,`${n.target}:${r}`,Qf(n.source,n.target)])t.set(o,(t.get(o)??0)+1)}return t}const jw=14;function Yw(i,e){return i.source!==i.target&&(e?.get(Qf(i.target,i.source))??0)>0}function Zw(i,e){const t=[];for(let n=1;n<i.length;n++){const s=i[n-1],r=i[n],o=(r?.x??0)-(s?.x??0),a=(r?.z??0)-(s?.z??0),l=Math.hypot(o,a);t.push(l?{x:-a/l,z:o/l}:void 0)}return i.map((n,s)=>{let r,o;for(let h=s-1;h>=0&&!r;h--)r=t[h];for(let h=s;h<t.length&&!o;h++)o=t[h];if(r??=o,o??=r,!r||!o)return{...n};const a=r.x*o.x+r.z*o.z,l=a>-.99?e/(1+a):e,c=a>-.99?r.x+o.x:r.x,d=a>-.99?r.z+o.z:r.z;return{x:n.x+c*l,z:n.z+d*l}})}function Wa(i,e,t=Jf(e),n){if(Yw(i,n)){const s=i.source<i.target,r=Xa(s?i:Jw(i),e,t,n),o=s?r.points:r.points.reverse();return{sourcePort:s?r.sourcePort:r.targetPort,targetPort:s?r.targetPort:r.sourcePort,points:Zw(o,jw/2)}}return Xa(i,e,t,n)}function Jw(i){const e={...i,source:i.target,target:i.source};return delete e.sourcePort,delete e.targetPort,i.targetPort&&(e.sourcePort=i.targetPort),i.sourcePort&&(e.targetPort=i.sourcePort),e}function Xa(i,e,t,n){const s=e.get(i.source),r=e.get(i.target);if(!s||!r)throw Error("Missing connection endpoint");const[o,a]=Kf(i,e),l=(n?.get(`${i.source}:${o}`)??0)>1,c=(n?.get(`${i.target}:${a}`)??0)>1,d=Cs(s,o,e),h=Cs(r,a,e),p=dc(d,o,24),m=dc(h,a,24);return{sourcePort:o,targetPort:a,points:[d,...eS(p,m,o,a,i,s,r,e,t,l&&!c?"source":c&&!l?"target":"middle"),h]}}const dc=(i,e,t)=>({x:i.x+(e==="east"?t:e==="west"?-t:0),z:i.z+(e==="south"?t:e==="north"?-t:0)});function uc(i,e){const t=zt(i,e);return{minX:t.x-i.width/2,maxX:t.x+i.width/2,minZ:t.z-i.depth/2,maxZ:t.z+i.depth/2}}const Zs=6;function ep(i,e,t){const n=Zs;return Math.max(i.x,e.x)>t.minX-n&&Math.min(i.x,e.x)<t.maxX+n&&Math.max(i.z,e.z)>t.minZ-n&&Math.min(i.z,e.z)<t.maxZ+n}const gi=256,Ku=new WeakMap,tp=(i,e)=>(i&65535)<<16|e&65535;function Qu(i,e,t){const n=i.get(e);n?n.push(t):i.set(e,[t])}function Kw(i){let e=Ku.get(i);if(e)return e;const t=new Map;for(let n=0;n<i.length;n++){const s=i[n];if(!s)continue;const r=Math.floor(s.minX/gi),o=Math.floor(s.maxX/gi),a=Math.floor(s.minZ/gi),l=Math.floor(s.maxZ/gi);if(!(o-r<=64&&l-a<=64)){Qu(t,-1,n);continue}for(let c=r;c<=o;c++)for(let d=a;d<=l;d++)Qu(t,tp(c,d),n)}return e={cells:t,seen:new Uint32Array(i.length),query:0},Ku.set(i,e),e}function Qw(i,e,t,n,s,r){++n.query===4294967295&&(n.seen.fill(0),n.query=1);const o=Math.floor((Math.min(i.x,e.x)-Zs)/gi),a=Math.floor((Math.max(i.x,e.x)+Zs)/gi),l=Math.floor((Math.min(i.z,e.z)-Zs)/gi),c=Math.floor((Math.max(i.z,e.z)+Zs)/gi);let d=$a(n.cells.get(-1),i,e,t,n,s,r);if(a-o>65535||c-l>65535){for(const[h,p]of n.cells)h!==-1&&(d+=$a(p,i,e,t,n,s,r));return d}for(let h=o;h<=a;h++)for(let p=l;p<=c;p++)d+=$a(n.cells.get(tp(h,p)),i,e,t,n,s,r);return d}function $a(i,e,t,n,s,r,o){if(!i)return 0;let a=0;for(const l of i){if(s.seen[l]===s.query)continue;s.seen[l]=s.query;const c=n[l];c&&c.id!==r&&c.id!==o&&ep(e,t,c)&&a++}return a}function eS(i,e,t,n,s,r,o,a,l,c){const d=[uc(r,a),uc(o,a)],h=s.bend??0,p=Math.min(...d.map(E=>E.minX))-30,m=Math.max(...d.map(E=>E.maxX))+30,v=Math.min(...d.map(E=>E.minZ))-30,x=Math.max(...d.map(E=>E.maxZ))+30,u=Kw(l),f=[],g=(E,M)=>(c==="source"?E:c==="target"?M:(E+M)/2)+h;for(const E of[g(i.x,e.x),p+h,m+h])f.push([i,{x:E,z:i.z},{x:E,z:e.z},e]);for(const E of[g(i.z,e.z),v+h,x+h])f.push([i,{x:i.x,z:E},{x:e.x,z:E},e]);const _=[{x:e.x,z:i.z},{x:i.x,z:e.z}],y=f.length;for(const E of _)f.push([i,E,{...E},e]);const w=eh(t),T=eh(n);let R=f[0]??[i,e],b=1/0;for(const E of f){let M=0,A=0,k;for(let N=1;N<E.length;N++){const L=E[N-1],F=E[N];if(!L||!F)continue;const U=Math.sign(F.x-L.x),z=Math.sign(F.z-L.z);if(!(!U&&!z)){M+=Math.abs(F.x-L.x)+Math.abs(F.z-L.z);for(const Z of d)ep(L,F,Z)&&(M+=1e4);M+=1e4*Qw(L,F,l,u,r.id,o.id),!k&&U===-w.x&&z===-w.z&&(M+=5e3),N===E.length-1&&U===T.x&&z===T.z&&(M+=5e3),k&&A++,k=F}}M+=A*40,c!=="middle"&&f.indexOf(E)>=y&&(M+=1),M<b&&(b=M,R=E)}return R}const eh=i=>dc({x:0,z:0},i,1);function th(i){let e=0;for(let n=1;n<i.length;n++){const s=i[n-1],r=i[n];s&&r&&(e+=Math.abs(r.x-s.x)+Math.abs(r.z-s.z))}let t=e/2;for(let n=1;n<i.length;n++){const s=i[n-1],r=i[n];if(!s||!r)continue;const o=Math.abs(r.x-s.x)+Math.abs(r.z-s.z);if(o>0&&t<=o){const a=t/o;return{point:{x:s.x+(r.x-s.x)*a,z:s.z+(r.z-s.z)*a},horizontal:Math.abs(r.x-s.x)>=Math.abs(r.z-s.z)}}t-=o}return{point:i[0]??{x:0,z:0},horizontal:!0}}const To=8,tS=new ei(1,1,1);function nh(i,e,t=3){const n=i.kind==="note",s=new un;s.userData.width=i.width,s.userData.depth=i.depth;const r=4096/Math.max(i.width,i.depth),o=Math.min(t,r);s.userData.resolution=o,s.userData.capped=t>r;const a=document.createElement("canvas");a.width=Math.max(2,Math.round(i.width*o)),a.height=Math.max(2,Math.round(i.depth*o));const l=a.getContext("2d");if(!l)throw Error("Annotation canvas unavailable");l.scale(o,o);const c=n?14:4,d=e.labelFont??"Inter, system-ui, sans-serif";if(n){const _=Math.min(22,i.width/5,i.depth/5);l.fillStyle=e.monochrome?e.note.paper:i.color,l.beginPath(),l.moveTo(0,0),l.lineTo(i.width,0),l.lineTo(i.width,i.depth-_),l.lineTo(i.width-_,i.depth),l.lineTo(0,i.depth),l.closePath(),l.fill(),e.monochrome&&(l.lineWidth=3,l.strokeStyle=e.note.text,l.stroke()),l.fillStyle="#00000022",l.beginPath(),l.moveTo(i.width,i.depth-_),l.lineTo(i.width-_,i.depth-_),l.lineTo(i.width-_,i.depth),l.closePath(),l.fill()}const{size:h,lines:p}=wh(i.label,i.width-c*2,i.depth-c*2,Wo(i),(_,y)=>(l.font=`${n?500:600} ${y}px ${d}`,l.measureText(_).width));l.font=`${n?500:600} ${h}px ${d}`,l.fillStyle=n?e.note.text:e.text,l.textBaseline="top";const m=h*1.28;l.save(),l.beginPath(),l.rect(c,c,i.width-c*2,i.depth-c*2),l.clip();for(const[_,y]of p.entries())l.fillText(y,c,c+_*m);l.restore();const v=new yr(a);v.colorSpace=kt,v.anisotropy=4;const x=new ti(i.width,i.depth);x.rotateX(-Math.PI/2);const u=new Kt({map:v,transparent:!0,depthWrite:!1}),f=new vt(x,u);f.position.y=n?To/2+.6:1.5,f.renderOrder=3,s.add(f);let g;if(n){g=new Xc({color:i.color}),g.color.multiplyScalar(.75);const _=new vt(tS,g);_.scale.set(i.width,To,i.depth),s.add(_);const y=new vt(x,new Kt({color:e.shadow,transparent:!0,opacity:e.shadowOpacity,depthWrite:!1}));y.position.set(6,-To/2-.5,8),s.add(y)}return{root:s,dispose:()=>{v.dispose(),x.dispose(),u.dispose(),g?.dispose();for(const _ of s.children)_ instanceof vt&&_.material!==u&&_.material!==g&&_.material.dispose();a.width=0,a.height=0}}}const uo={uniforms:{tDiffuse:{value:null},resolution:{value:new pe(1/1024,1/512)}},vertexShader:`

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

		}`},rr=1;function or(i){return i.layers.set(rr),i}class nS{target=ih(0);multisampled=ih(4);material=new cn({name:"BoardFXAA",uniforms:qo.clone(uo.uniforms),vertexShader:uo.vertexShader,fragmentShader:uo.fragmentShader,depthTest:!1,depthWrite:!1});copy=new cn({name:"BoardCopy",uniforms:{tDiffuse:{value:this.multisampled.texture}},vertexShader:uo.vertexShader,fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main() { gl_FragColor = texture2D( tDiffuse, vUv ); }",depthTest:!1,depthWrite:!1});mesh;quad=new Ef;camera=new br(-1,1,1,-1,0,1);size=new pe;constructor(){this.material.uniforms.tDiffuse={value:this.target.texture},this.mesh=new vt(new ti(2,2),this.material),this.mesh.frustumCulled=!1,this.quad.add(this.mesh)}render(e,t,n,s){e.getDrawingBufferSize(this.size);const r=s?this.multisampled:this.target;(r.width!==this.size.x||r.height!==this.size.y)&&r.setSize(this.size.x,this.size.y),s||this.material.uniforms.resolution?.value.set(1/this.size.x,1/this.size.y),this.mesh.material=s?this.copy:this.material;const o=n.layers.mask;s?n.layers.enable(rr):n.layers.disable(rr);const a=e.getRenderTarget();if(e.setRenderTarget(r),e.render(t,n),e.setRenderTarget(a),e.render(this.quad,this.camera),!s){const{background:l}=t,{autoClear:c}=e;t.background=null,e.autoClear=!1,n.layers.set(rr),e.render(t,n),e.autoClear=c,t.background=l}n.layers.mask=o}dispose(){this.target.dispose(),this.multisampled.dispose(),this.material.dispose(),this.copy.dispose(),this.mesh.geometry.dispose()}}function ih(i){const e=new wn(1,1,{colorSpace:kt,internalFormat:"RGBA8",depthBuffer:!0,samples:i});return e.isXRRenderTarget=!0,e}function sh(i){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");if(!t)throw new Error("Backdrop canvas unavailable");const[n,s,r]=i.sky,o=t.createLinearGradient(0,0,0,512);o.addColorStop(0,n),o.addColorStop(.55,s),o.addColorStop(1,r),t.fillStyle=o,t.fillRect(0,0,512,512);const a=t.createRadialGradient(245,110,0,245,110,330);a.addColorStop(0,i.glow),a.addColorStop(1,`${s}00`),t.fillStyle=a,t.fillRect(0,0,512,512),i.stars&&iS(t);const l=new yr(e);return l.colorSpace=kt,l}function iS(i){let e=24301;const t=()=>(e=e*1103515245+12345&2147483647,e/2147483647);for(let n=0;n<260;n++){const s=t()<.08;i.globalAlpha=s?.95:.25+t()*.5,i.fillStyle=t()<.2?"#c9d6ff":"#ffffff",i.beginPath(),i.arc(t()*512,t()*512,s?.7:.25+t()*.3,0,Math.PI*2),i.fill()}i.globalAlpha=1}function sS(i,e,t,n){const s=Math.max(12,Math.round(e/48));i.font=`${s}px sans-serif`;const r=rS(n,e-48,l=>i.measureText(l).width),o=r.slice(0,Math.max(1,Math.floor(t/(s*3))));o.length<r.length&&(o[o.length-1]+="…");const a=o.length*s*1.4+16;i.fillStyle="#111827",i.fillRect(8,t-a-8,e-16,a),i.fillStyle="#ffffff",i.textAlign="center",o.forEach((l,c)=>{i.fillText(l,e/2,t-a+s+c*s*1.4)})}function rS(i,e,t){const n=[];for(const s of i.split(`
`)){let r="";for(const o of s)t(r+o)>e&&r&&(n.push(r),r=""),r+=o;n.push(r)}return n}function oS(){const i=new tc;i.moveTo(0,-.5),i.lineTo(.5,0),i.lineTo(0,.5),i.lineTo(-.5,0),i.closePath();const e=new tc;e.moveTo(-.3,-.5),e.lineTo(.3,-.5),e.quadraticCurveTo(.5,-.5,.5,-.3),e.lineTo(.5,.3),e.quadraticCurveTo(.5,.5,.3,.5),e.lineTo(-.3,.5),e.quadraticCurveTo(-.5,.5,-.5,.3),e.lineTo(-.5,-.3),e.quadraticCurveTo(-.5,-.5,-.3,-.5);const t=n=>{const s=new Vc(n,{depth:1,bevelEnabled:!1,curveSegments:6});return s.rotateX(-Math.PI/2),s.translate(0,-.5,0),s};return{process:new ei(1,1,1),decision:t(i),terminal:t(e)}}const aS=320,rh=380,lS=750,cS=1300,qa=6;class dS{constructor(e,t){this.host=e,this.palette=t,this.avatar=uS(t.flow),this.glow=hS(t.flow)}host;palette;avatar;glow;ring=new Hc(.86,1,64);travelers=[];dwells=[];pulses=[];walked=new Set;decisions=[];asking=!1;generation=0;starts=[];stopAnimation;last=0;restAt=0;get playing(){return this.stopAnimation!==void 0}start(e){this.stop(!1),this.starts=e,this.lap(performance.now()),this.last=performance.now(),this.stopAnimation=this.host.animate(t=>this.step(t))}stop(e=!0){const t=this.playing;this.generation++,this.asking&&this.host.cancelChoice(),this.asking=!1,this.decisions=[],this.stopAnimation?.(),this.stopAnimation=void 0;for(const n of this.travelers)this.removeTraveler(n);for(const n of this.pulses)this.removePulse(n.mesh);this.travelers=[],this.pulses=[],this.dwells=[],e&&t&&this.host.onFinish()}dispose(){this.stop(!1),this.avatar.dispose(),this.glow.dispose(),this.ring.dispose()}lap(e){this.walked.clear(),this.restAt=0;for(const t of this.starts)this.host.onVisit?.(t),this.pulse(t,e),this.dwells.push({node:t,until:e+rh})}step(e){const t=Math.min(.05,(e-this.last)/1e3);this.last=e;for(const s of[...this.travelers]){if(s.distance+=aS*t,s.distance>=s.total){this.removeTraveler(s),this.travelers.splice(this.travelers.indexOf(s),1);const r=this.host.target(s.edge);r&&(this.host.onVisit?.(r),this.pulse(r,e),this.dwells.push({node:r,until:e+rh}));continue}this.place(s)}for(const s of[...this.dwells]){if(e<s.until)continue;this.dwells.splice(this.dwells.indexOf(s),1);const{mode:r,edges:o}=this.host.branches(s.node);if(r==="ask"){this.decisions.push({node:s.node,edges:o,pulseAt:e+900});continue}for(const a of o)this.walked.has(a)||(this.walked.add(a),this.depart(a))}for(const s of this.decisions)e>=s.pulseAt&&(this.pulse(s.node,e),s.pulseAt=e+900);const n=this.decisions[0];if(n&&!this.asking){this.asking=!0;const s=this.generation;this.host.choose(n.node,n.edges).then(r=>{s===this.generation&&(this.asking=!1,this.decisions.shift(),r&&(this.walked.add(r),this.depart(r)))})}for(const s of[...this.pulses]){const r=(e-s.born)/lS;if(r>=1){this.removePulse(s.mesh),this.pulses.splice(this.pulses.indexOf(s),1);continue}const o=1-(1-r)**3;s.mesh.scale.setScalar(s.radius*(.9+o*.6));const a=s.mesh.material;a instanceof Kt&&(a.opacity=1-r)}return!this.travelers.length&&!this.dwells.length&&!this.decisions.length&&(this.restAt?e>=this.restAt&&this.lap(e):this.restAt=e+cS),!0}depart(e){if(!this.host.permit(e)){const a=this.host.route(e)?.[0];if(a){const l=new vt(this.ring,new Kt({color:"#ff4d5e",transparent:!0,depthTest:!1}));l.rotation.x=-Math.PI/2,l.position.copy(a),l.renderOrder=22,this.host.add(l),this.pulses.push({mesh:l,born:this.last,radius:100})}return}const t=this.host.route(e);if(!t||t.length<2)return;const n=[0];for(let a=1;a<t.length;a++){const l=t[a-1],c=t[a];n.push((n[a-1]??0)+(l&&c?l.distanceTo(c):0))}const s=new Qd(new Kl({map:this.avatar,depthTest:!1,transparent:!0}));s.renderOrder=20,s.scale.setScalar(78);const r=Array.from({length:qa},(a,l)=>{const c=new Qd(new Kl({map:this.glow,depthTest:!1,transparent:!0,opacity:.55*(1-l/qa)}));return c.renderOrder=19,c.scale.setScalar(34*(1-l/(qa*1.4))),this.host.add(c),c});this.host.add(s);const o={edge:e,points:t,lengths:n,total:n[n.length-1]??0,distance:0,sprite:s,trail:r};this.travelers.push(o),this.place(o),this.host.onHop(e)}pointAt(e,t,n){const s=Math.max(0,Math.min(e.total,t));let r=1;for(;r<e.lengths.length-1&&(e.lengths[r]??0)<s;)r++;const o=e.points[r-1],a=e.points[r],l=e.lengths[r-1]??0,c=(e.lengths[r]??l)-l;return!o||!a?n:n.copy(o).lerp(a,c>0?(s-l)/c:0)}place(e){this.pointAt(e,e.distance,e.sprite.position),e.sprite.position.y+=34,e.trail.forEach((t,n)=>{this.pointAt(e,e.distance-(n+1)*13,t.position),t.position.y+=4})}pulse(e,t){const n=this.host.node(e);if(!n)return;const s=new vt(this.ring,new Kt({color:this.palette.flow,transparent:!0,depthTest:!1}));s.rotation.x=-Math.PI/2,s.position.copy(n.point),s.renderOrder=18,this.host.add(s),this.pulses.push({mesh:s,born:t,radius:n.radius})}removeTraveler(e){for(const t of[e.sprite,...e.trail])this.host.remove(t),t.material.dispose()}removePulse(e){this.host.remove(e),e.material instanceof Kt&&e.material.dispose()}}function uS(i){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const n=t.createRadialGradient(64,64,10,64,64,64);n.addColorStop(0,`${i}cc`),n.addColorStop(.55,`${i}55`),n.addColorStop(1,`${i}00`),t.fillStyle=n,t.fillRect(0,0,128,128),t.fillStyle=i,t.beginPath(),t.arc(64,64,30,0,Math.PI*2),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.arc(64,52,9,0,Math.PI*2),t.fill(),t.beginPath(),t.moveTo(45,82),t.quadraticCurveTo(46,64,64,64),t.quadraticCurveTo(82,64,83,82),t.closePath(),t.fill();const s=new yr(e);return s.colorSpace=kt,s}function hS(i){const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw Error("Journey canvas unavailable");const n=t.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,`${i}ff`),n.addColorStop(1,`${i}00`),t.fillStyle=n,t.fillRect(0,0,64,64);const s=new yr(e);return s.colorSpace=kt,s}const oh=1024,ah=2048,fS=.25,pS=4;function Js(i,e=pS){const t=2**(Math.ceil(Math.log2(Math.max(.001,i))*2)/2);return Math.min(e,Math.max(fS,t))}class mS{constructor(e){this.palette=e}palette;pages=[];specs=new Map;regions=new Map;entries=[];hints=new Map;wanted=new Map;root;widths=new Map;measure(e,t,n){const s=`${t}
${n}`;let r=this.widths.get(s);return r===void 0&&(this.widths.size>5e4&&this.widths.clear(),e.font=t,r=e.measureText(n).width,this.widths.set(s,r)),r}matrix=new it;position=new D;depth=new D;scale=new D;up=new D;right=new D;create(e,t,n="node",s={width:160,depth:100}){n==="icon"&&!lc.has(e)&&(e=tm(e));const r=n==="node"?`node:${e}:${s.width}:${s.depth}:${s.fontSize??""}:${s.wrap?1:0}`:`${n}:${e}`;this.specs.has(r)||this.specs.set(r,{text:e,kind:n,bounds:s});const o=new Et;return n==="node"&&(o.userData.captionResolution=lh(s),o.userData.captionBounds=s),this.entries.push({object:o,key:r,kind:n}),o}finish(e){this.root=e,this.hints.size>5e4&&this.hints.clear();for(const[t,n]of this.specs)this.draw(t,n,this.hints.get(t)??1);for(const t of this.entries)this.regions.get(t.key)?.page.entries.push(t);for(const t of this.pages)this.batch(t,e)}draw(e,t,n){const{text:s,kind:r,bounds:o}=t,a=this.palette.labelFont??"system-ui",l=this.pages[0]?.context??gS(),c=lh(o),d=r==="icon"?`500 64px ${a}`:r==="group"?`500 24px ${a}`:r==="edge"?`500 26px ${a}`:`600 34px ${a}`,h=r==="node"?nm({label:s,...o},(E,M)=>this.measure(l,`600 ${M*c}px ${a}`,E)/c):void 0,p=h?`600 ${h.size*c}px ${a}`:d,m=h?8*c:15,v=h?Math.ceil((h.lines.length*h.size*1.28+16)*c):r==="icon"?92:56,x=h?Math.ceil(Math.max(1,...h.lines.map(E=>this.measure(l,p,E)))+m*2):r==="icon"?92:Math.min(520,Math.ceil(this.measure(l,p,s))+30),u=Math.max(Math.min(Js(n),(ah-8)/Math.max(x,v)),Math.min(1,4/Math.min(x,v))),f=Math.ceil(x*u),g=Math.ceil(v*u),_=this.place(f,g),{x:y,y:w,context:T}=_;T.setTransform(u,0,0,u,y,w);const R=this.palette;(r==="node"||r==="edge")&&(T.fillStyle=r==="node"?R.nodeLabel.background:R.edgeLabel.background,T.beginPath(),T.roundRect(2,3,x-4,v-6,8),T.fill(),r==="node"&&(T.strokeStyle=R.nodeLabel.border,T.lineWidth=2,T.stroke())),T.fillStyle=r==="group"?R.groupLabel:r==="icon"?R.glyph:r==="edge"?R.edgeLabel.text:R.nodeLabel.text,T.font=p;const b=r==="icon"?lc.get(s):void 0;if(b)R.iconFilter&&(T.filter=R.iconFilter),T.drawImage(b,8,8,x-16,v-16),T.filter="none";else if(h)for(const[E,M]of h.lines.entries())T.fillText(M,x/2,m+(E+.5)*h.size*c*1.28);else T.fillText(s,x/2,v/2,x-20);T.setTransform(1,0,0,1,0,0),this.regions.set(e,{page:_,x:y,y:w,width:x,height:v,pixelWidth:f,pixelHeight:g,scale:u,capped:u<Js(n)-1e-6}),this.hints.set(e,u),_.x+=f+4,_.rowHeight=Math.max(_.rowHeight,g+4)}place(e,t){let n=this.pages[this.pages.length-1];return n&&n.x+e>n.size&&(n.x=0,n.y+=n.rowHeight,n.rowHeight=0),(!n||n.y+t>n.size||e>n.size)&&(n=this.page(Math.max(e,t)+8>oh?ah:oh)),n}page(e){const t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d");if(!n)throw new Error("Text canvas unavailable");n.textAlign="center",n.textBaseline="middle";const s=new yr(t);s.premultiplyAlpha=!0,s.generateMipmaps=!1,s.minFilter=Ot;const r={size:e,canvas:t,context:n,texture:s,entries:[],x:0,y:0,rowHeight:0};return this.pages.push(r),r}batch(e,t){e.texture.needsUpdate=!0;const n=new ti(1,1),s=new Float32Array(e.entries.length*4);for(const[a,l]of e.entries.entries()){const c=this.regions.get(l.key);c&&s.set([c.x/e.size,1-(c.y+c.pixelHeight)/e.size,c.pixelWidth/e.size,c.pixelHeight/e.size],a*4)}n.setAttribute("atlasRect",new Ql(s,4));const r=new Kt({map:e.texture,transparent:!0,blending:rf,blendSrc:of,blendDst:Lo,depthTest:!1,depthWrite:!1,fog:!1});r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 atlasRect;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = atlasRect.xy + vMapUv * atlasRect.zw;`),a.fragmentShader=a.fragmentShader.replace("#include <colorspace_fragment>","")},r.customProgramCacheKey=()=>"solar-forge-atlas-v3";const o=new Oo(n,r,e.entries.length);o.instanceMatrix.setUsage(vi),o.frustumCulled=!1,o.renderOrder=10,e.batch=o,t.add(or(o))}sync(e,t,n=1){this.up.set(0,1,0).applyQuaternion(e.quaternion),this.right.set(1,0,0).applyQuaternion(e.quaternion);const s=e.projectionMatrix.elements[5]??1;this.wanted.clear();for(const r of this.pages){const o=r.batch;if(o){for(let a=0;a<r.entries.length;a++){const l=r.entries[a],c=l&&this.regions.get(l.key);if(!l||!c)continue;this.position.setFromMatrixPosition(l.object.matrixWorld);const h=2*(e instanceof Zt?Math.max(1,-this.depth.copy(this.position).applyMatrix4(e.matrixWorldInverse).z):1)/(t*s);if(l.kind==="edge"){const y=l.object.userData.offsetX,w=l.object.userData.offsetY;this.position.addScaledVector(this.up,(typeof w=="number"?w:22)*h),typeof y=="number"&&this.position.addScaledVector(this.right,y*h)}const p=l.object.userData.nodeWidth,m=typeof p=="number"?p/h:120,v=l.object.userData.nodeDepth,x=typeof v=="number"?v/h:100,u=l.object.userData.captionBounds,f=u&&typeof p=="number"&&typeof v=="number"?Math.min(p/u.width,v/u.depth):1,g=l.kind==="icon"?Math.min(58,m*.28,x*.7)/64:l.kind==="node"?f/(Number(l.object.userData.captionResolution)*h):l.kind==="group"?Math.min(.5,m*.9/c.width):.5,_=g*n;_>(this.wanted.get(l.key)??0)&&this.wanted.set(l.key,_),l.kind==="node"&&l.object.userData.captionBelow&&this.position.addScaledVector(this.up,-c.height*g*h/2),this.scale.set(c.width*g*h,c.height*g*h,1),this.matrix.compose(this.position,e.quaternion,this.scale),o.setMatrixAt(a,this.matrix)}o.instanceMatrix.needsUpdate=!0}}for(const[r,o]of this.wanted){const a=this.regions.get(r);if(!a)continue;const l=Js(o);if(l>a.scale+1e-6&&!a.capped||l*2<a.scale-1e-6)return!0}return!1}redraw(){const e=this.root,t=this.pages;this.pages=[],this.regions.clear();for(const[n,s]of this.wanted)this.hints.set(n,Js(s));if(e){for(const n of t)n.batch&&e.remove(n.batch);this.finish(e)}return()=>ch(t)}retire(){const e=this.pages;return this.pages=[],this.entries=[],this.specs.clear(),this.regions.clear(),this.wanted.clear(),this.root=void 0,()=>ch(e)}dispose(){this.retire()()}}function lh(i){return Math.min(2,800/Math.max(i.width,i.depth))}let ja;function gS(){if(ja??=document.createElement("canvas").getContext("2d")??void 0,!ja)throw new Error("Text canvas unavailable");return ja}function ch(i){for(const e of i)e.batch&&(e.batch.removeFromParent(),e.batch.dispose(),e.batch.geometry.dispose(),Array.isArray(e.batch.material)||e.batch.material.dispose()),e.texture.dispose(),e.canvas.width=0,e.canvas.height=0}const vS=["#35e0f0","#b48cff","#ffb547","#58e39b","#ff6fa8","#6aa8ff"],xS=-10;function _S(i,e,t){const n=new un;n.name="lanes";const s=new ti(1,1);s.rotateX(-Math.PI/2);const r=[],o=i.direction==="down",a=(m,v,x,u,f)=>{m.position.set(o?x:v,xS,o?v:x),m.scale.set(o?f:u,1,o?u:f)},l=(m,v)=>{const x=new Kt({color:m,transparent:!0,opacity:v,depthWrite:!1});r.push(x);const u=new vt(s,x);return u.renderOrder=-1,u},c=i.to-i.from,d=yc-60;for(const[m,v]of i.bands.entries()){const x=e.laneHues??vS,u=e.monochrome?e.group:x[m%x.length]??e.group,f=v.end-v.start,g=(v.start+v.end)/2,_=l(u,m%2?.05:.09);a(_,i.from+c/2,g,c,f);const y=l(u,.22);a(y,i.from+d/2,g,d,f);const w=l(u,.5);a(w,i.from+c/2,v.start+2,c,4);const T=t(nl(v.owner));T.position.set(o?g:i.from+d/2,2,o?i.from+d/2:g),T.userData.nodeWidth=d,T.userData.nodeDepth=f,n.add(_,y,w,T)}const h=i.bands[0]?.start??0,p=i.bands.at(-1)?.end??0;return{root:n,bounds:o?{minX:h,maxX:p,minZ:i.from,maxZ:i.to}:{minX:i.from,maxX:i.to,minZ:h,maxZ:p},dispose(){s.dispose();for(const m of r)m.dispose()}}}class Ya{constructor(e,t,n,s){this.parent=e,this.material=t,this.renderOrder=n,this.changed=s}parent;material;renderOrder;changed;line;set(e){if(!e.length){this.clear();return}this.removeLine();const t=new Ao(new Go().setPositions([...e]),this.material);this.material.dashed&&t.computeLineDistances(),t.frustumCulled=!1,t.renderOrder=this.renderOrder,this.parent.add(or(t)),this.line=t,this.changed()}clear(){this.line&&(this.removeLine(),this.changed())}dispose(){this.removeLine(),this.material.dispose()}removeLine(){this.line&&(this.parent.remove(this.line),this.line.geometry.dispose(),this.line=void 0)}}function dh(i,e){return{left:Math.min(i.x,e.x),top:Math.min(i.y,e.y),right:Math.max(i.x,e.x),bottom:Math.max(i.y,e.y)}}function yS(i,e,t,n,s){const r=[],o=new D;for(const a of i.values()){const l=zt(a,i),c=a.kind==="group"?1:12,d={left:1/0,top:1/0,right:-1/0,bottom:-1/0};let h=!1;for(const m of[-a.width/2,a.width/2])for(const v of[-c,c])for(const x of[-a.depth/2,a.depth/2]){o.set(l.x+m,l.level*4+v,l.z+x).project(e),o.z>=-1&&o.z<=1&&(h=!0);const u=(o.x+1)*t/2,f=(1-o.y)*n/2;d.left=Math.min(d.left,u),d.right=Math.max(d.right,u),d.top=Math.min(d.top,f),d.bottom=Math.max(d.bottom,f)}if(!h)continue;(a.kind==="group"?d.left>=s.left&&d.right<=s.right&&d.top>=s.top&&d.bottom<=s.bottom:d.right>=s.left&&d.left<=s.right&&d.bottom>=s.top&&d.top<=s.bottom)&&r.push(a.id)}return r}const ho=16,fo=30;function bS(i,e,t,n,s){const r=(c,d)=>[c,(c+d)/2,d];let o,a;for(const c of e){for(const d of r(i.minX+t,i.maxX+t))for(const h of r(c.minX,c.maxX)){const p=h-d;Math.abs(p)<s&&(!o||Math.abs(p)<Math.abs(o.diff))&&(o={diff:p,at:h,other:c})}for(const d of r(i.minZ+n,i.maxZ+n))for(const h of r(c.minZ,c.maxZ)){const p=h-d;Math.abs(p)<s&&(!a||Math.abs(p)<Math.abs(a.diff))&&(a={diff:p,at:h,other:c})}}o&&(t+=o.diff),a&&(n+=a.diff);const l=[];if(o){const c=Math.min(i.minZ+n,o.other.minZ)-fo,d=Math.max(i.maxZ+n,o.other.maxZ)+fo;l.push(o.at,ho,c,o.at,ho,d)}if(a){const c=Math.min(i.minX+t,a.other.minX)-fo,d=Math.max(i.maxX+t,a.other.maxX)+fo;l.push(c,ho,a.at,d,ho,a.at)}return{dx:t,dz:n,segments:l}}const wS=5,SS=6;function MS(i,e){return i?e?i*e>0?"nwse-resize":"nesw-resize":"ew-resize":"ns-resize"}class ES{constructor(e,t,n,s){this.board=e,this.events=t;const r=()=>e.invalidate();this.preview=new Ya(n,new Ni({color:"#ffc778",linewidth:2,transparent:!0,opacity:.85,depthTest:!1,dashed:!0,dashSize:10,gapSize:7}),11,r),this.ink=new Ya(n,new Ni({color:"#ffc778",linewidth:3,transparent:!0,opacity:.9,depthTest:!1}),12,r),this.guides=new Ya(n,new Ni({color:"#ff2a6d",linewidth:1.5,transparent:!0,opacity:.9,depthTest:!1,dashed:!0,dashSize:8,gapSize:6}),11,r),this.selectionBox.className="selection-box",this.selectionBox.hidden=!0,this.selectionBox.setAttribute("aria-hidden","true"),s.append(this.selectionBox);const o=e.canvas;o.addEventListener("pointerdown",this.down),o.addEventListener("pointermove",this.move),o.addEventListener("pointerup",this.up),o.addEventListener("pointercancel",this.cancelListener),o.addEventListener("lostpointercapture",this.lostCapture),o.addEventListener("mousedown",this.preventNativeDrag),o.addEventListener("dragstart",this.preventNativeDrag),o.addEventListener("contextmenu",this.context),o.addEventListener("dblclick",this.doubleClick)}board;events;penInput=!1;activePointer;connectionStart;stroke;erasing;dragSlop;resizing;dragOrigins=[];drag;pan;marquee;selectionBox=document.createElement("div");preview;ink;guides;setPalette(e){this.preview.material.color.set(e.edgeSelected),this.ink.material.color.set(e.edgeSelected),this.guides.material.color.set(e.guide)}reset(){this.releasePointer(),this.marquee=void 0,this.selectionBox.hidden=!0,this.drag=void 0,this.dragOrigins=[],this.resizing=void 0,this.pan=void 0,this.connectionStart=void 0,this.preview.clear(),this.stroke=void 0,this.erasing=void 0,this.ink.clear()}finish(){this.up()}cancel=()=>{if(this.marquee=void 0,this.dragSlop=void 0,this.stroke=void 0,this.ink.clear(),this.erasing&&(this.erasing=void 0,this.board.selectMany([])),this.selectionBox.hidden=!0,this.releasePointer(),this.resizing){const e=this.board.tileNode(this.resizing.id);e&&(Object.assign(e,this.resizing.from),this.board.applySize(e.id));for(const t of this.resizing.children)t.node.x=t.x,t.node.z=t.z;this.resizing=void 0}for(const e of this.dragOrigins)e.node.x=e.x,e.node.z=e.z;this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.guides.clear(),this.connectionStart=void 0,this.preview.clear(),this.board.updatePositions(),this.board.invalidate()};dispose(){this.cancel();const e=this.board.canvas;e.removeEventListener("pointerdown",this.down),e.removeEventListener("pointermove",this.move),e.removeEventListener("pointerup",this.up),e.removeEventListener("pointercancel",this.cancelListener),e.removeEventListener("lostpointercapture",this.lostCapture),e.removeEventListener("mousedown",this.preventNativeDrag),e.removeEventListener("dragstart",this.preventNativeDrag),e.removeEventListener("contextmenu",this.context),e.removeEventListener("dblclick",this.doubleClick),this.preview.dispose(),this.ink.dispose(),this.guides.dispose(),this.selectionBox.remove()}canvasPoint(e){const t=this.board.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}down=e=>{const t=this.board;this.notePointer(e);const n=e.button===wS;if(this.activePointer!==void 0||e.button>2&&!n)return;e.preventDefault();const s=t.locate(e);if(!s)return;if(this.activePointer=e.pointerId,e.isTrusted&&t.canvas.setPointerCapture(e.pointerId),e.button===1||e.button===2||e.altKey||t.tool==="pan"){this.pan={x:s.x,z:s.z};return}if(n){this.erasing={nodes:new Set,edges:new Set},this.eraseAt(e);return}if(t.tool==="sketch"){this.stroke={points:[{x:s.x,z:s.z}],last:this.canvasPoint(e),from:t.nodeAt()};return}if(t.tool==="text"||t.tool==="note"){this.releasePointer(),this.events.onPlace(t.tool,Math.round(s.x),Math.round(s.z));return}const r=t.handleAt();if(r){const h=r.userData.nodeId,p=typeof h=="string"?t.tileNode(h):void 0,m=r.userData.resize;if(p&&Array.isArray(m)){const[x,u]=m;this.resizing={id:p.id,sx:x,sz:u,start:{x:s.x,z:s.z},from:{x:p.x,z:p.z,width:p.width,depth:p.depth},children:t.tileNodes().filter(f=>f.parentId===p.id).map(f=>({node:f,x:f.x,z:f.z}))};return}const v=r.userData.port;if(p&&Dh(v)){this.connectionStart={id:p.id,port:v},this.showPreview(s);return}}if(t.tool==="select"){const h=t.edgeAt(e);if(h){t.selectEdge(h),this.releasePointer();return}}const o=t.nodeAt();if(t.tool==="connect"){o&&(this.connectionStart?(this.events.onConnect(this.connectionStart.id,void 0,o,void 0),this.connectionStart=void 0,this.preview.clear()):(t.select(o),this.connectionStart={id:o},this.showPreview(s)));return}const a=o?t.tileNode(o):void 0;if(!o||a?.kind==="group"&&!t.selectedIds.has(o)){const h=this.canvasPoint(e);this.marquee={start:h,end:h,initial:t.selection,additive:e.shiftKey,clickId:o,active:!1};return}e.shiftKey||!t.selectedIds.has(o)?t.select(o,e.shiftKey):t.setPrimary(o);const l=t.selected?t.tileNode(t.selected):void 0;if(!l)return;this.dragOrigins=t.tileNodes().filter(h=>{if(!t.selectedIds.has(h.id))return!1;let p=h.parentId;for(;p;){if(t.selectedIds.has(p))return!1;p=t.nodeIndex.get(p)?.parentId}return!0}).map(h=>({node:h,x:h.x,z:h.z}));const c=new Set(this.dragOrigins.map(h=>h.node.id)),d=h=>{for(let p=h.id;p;){if(c.has(p))return!0;p=t.nodeIndex.get(p)?.parentId}return!1};e.pointerType==="pen"&&(this.dragSlop={x:e.clientX,y:e.clientY}),this.drag={id:l.id,x:s.x,z:s.z,startX:l.x,startZ:l.z,box:t.worldRect(l.id),others:t.tileNodes().filter(h=>!d(h)).map(h=>t.worldRect(h.id))}};hover(e){const t=this.board;if(!t.locate(e))return;const n=t.handleAt(),s=n?.userData.resize;let r=t.toolCursor(),o;if(Array.isArray(s)){const[a,l]=s;r=MS(a,l)}else n?r="crosshair":t.tool==="select"&&(o=t.edgeAt(e),o?r="pointer":t.nodeAt()&&(r="move"));t.setCursor(r),t.hoverEdge(o)}move=e=>{const t=this.board;if(this.activePointer===void 0){this.notePointer(e),this.hover(e);return}if(e.pointerId!==this.activePointer)return;if(e.preventDefault(),t.inMotion(),this.erasing){this.eraseAt(e);return}if(this.stroke){this.extendStroke(e);return}if(this.marquee){const{width:a,height:l}=t.viewportSize(),c=this.canvasPoint(e);if(this.marquee.end={x:Math.max(0,Math.min(a,c.x)),y:Math.max(0,Math.min(l,c.y))},Math.hypot(this.marquee.end.x-this.marquee.start.x,this.marquee.end.y-this.marquee.start.y)>=4&&(this.marquee.active=!0),this.marquee.active){const d=dh(this.marquee.start,this.marquee.end);this.selectionBox.hidden=!1,Object.assign(this.selectionBox.style,{left:`${d.left}px`,top:`${d.top}px`,width:`${d.right-d.left}px`,height:`${d.bottom-d.top}px`})}return}const n=t.locate(e);if(!n)return;if(this.connectionStart){this.showPreview(n);return}if(this.resizing){const{sx:a,sz:l,start:c,from:d}=this.resizing,h=t.tileNode(this.resizing.id);if(!h)return;const p=t.snapping?10:1,m=(v,x)=>Math.max(30,Math.round((v+x)/p)*p);a&&(h.width=m(d.width,a*(n.x-c.x)),h.x=d.x+a*(h.width-d.width)/2),l&&(h.depth=m(d.depth,l*(n.z-c.z)),h.z=d.z+l*(h.depth-d.depth)/2);for(const v of this.resizing.children)v.node.x=v.x-(h.x-d.x),v.node.z=v.z-(h.z-d.z);t.applySize(h.id),t.refreshPositions([h.id]);return}if(this.pan){t.panBoard(this.pan.x-n.x,this.pan.z-n.z);return}if(!this.drag||!t.tileNode(this.drag.id))return;if(this.dragSlop){if(Math.hypot(e.clientX-this.dragSlop.x,e.clientY-this.dragSlop.y)<SS)return;this.dragSlop=void 0}const s=t.snapping?10:1;let r=Math.round((n.x-this.drag.x)/s)*s,o=Math.round((n.z-this.drag.z)/s)*s;if(e.ctrlKey)this.guides.clear();else{const a=this.alignToNeighbours(this.drag,r,o);r=a.dx,o=a.dz}for(const a of this.dragOrigins)a.node.x=a.x+r,a.node.z=a.z+o;t.refreshPositions(this.dragOrigins.map(a=>a.node.id))};alignToNeighbours(e,t,n){const s=e.box,r=8*this.board.pixelSize(new D((s.minX+s.maxX)/2,0,(s.minZ+s.maxZ)/2)),o=bS(s,e.others,t,n,r);return this.guides.set(o.segments),{dx:o.dx,dz:o.dz}}notePointer(e){const t=e.pointerType==="pen";t!==this.penInput&&(this.penInput=t,this.events.onPenInput(t),this.board.invalidate())}extendStroke(e){const t=this.stroke;if(!t)return;const n=this.canvasPoint(e);if(Math.hypot(n.x-t.last.x,n.y-t.last.y)<2)return;const s=this.board.locate(e);s&&(t.last=n,t.points.push({x:s.x,z:s.z}),this.showInk(t.points))}finishStroke(e){const t=this.board,n={points:e.points},s=e.points[0],r=e.points.at(-1),o=e.from?t.nodeIndex.get(e.from):void 0;if(o&&s&&(n.from={id:o.id,port:sr(o,s,t.nodeIndex)}),r){t.aimAt(r.x,r.z);const a=t.nodeAt(),l=a?t.nodeIndex.get(a):void 0;l&&(n.to={id:l.id,port:sr(l,r,t.nodeIndex)})}return n}showInk(e){if(e.length<2)return;const t=[];for(let n=1;n<e.length;n++){const s=e[n-1],r=e[n];t.push(s.x,30,s.z,r.x,30,r.z)}this.ink.set(t)}eraseAt(e){const t=this.board,n=this.erasing;if(!n||!t.locate(e))return;const s=t.edgeAt(e);s&&n.edges.add(s);const r=t.pickNodes().find(o=>{const a=o.object.userData.nodeId;return typeof a=="string"&&t.nodeIndex.get(a)?.kind!=="group"})?.object.userData.nodeId;typeof r=="string"&&!n.nodes.has(r)&&(n.nodes.add(r),t.selectMany([...n.nodes]))}showPreview(e){const t=this.connectionStart,n=t?this.board.tileNode(t.id):void 0,s=t?this.board.tilePosition(t.id):void 0;if(!t||!n||!s)return;const r=t.port?Cs(n,t.port,this.board.nodeIndex):{x:s.x,z:s.z},o=s.y+14;this.preview.set([r.x,o,r.z,e.x,o,e.z])}up=e=>{const t=this.board;if(e&&e.pointerId!==this.activePointer)return;if(this.dragSlop=void 0,this.erasing){const{nodes:s,edges:r}=this.erasing;this.erasing=void 0,this.releasePointer(),(s.size||r.size)&&this.events.onErase([...s],[...r]);return}if(this.stroke){e&&this.extendStroke(e);const s=this.stroke;this.stroke=void 0,this.releasePointer(),this.ink.clear(),this.events.onSketch(this.finishStroke(s));return}if(this.marquee){e&&this.move(e);const s=this.marquee;if(this.marquee=void 0,this.selectionBox.hidden=!0,s.active){const r=t.nodesInScreenRect(dh(s.start,s.end));t.selectMany(s.additive?[...new Set([...s.initial,...r])]:r)}else t.select(s.clickId,s.additive)}if(this.releasePointer(),this.resizing){const{id:s,from:r,children:o}=this.resizing;this.resizing=void 0;const a=t.tileNode(s);a&&(a.width!==r.width||a.depth!==r.depth||a.x!==r.x||a.z!==r.z)&&this.events.onResize([{id:s,from:r,to:{x:a.x,z:a.z,width:a.width,depth:a.depth}},...o.filter(l=>l.node.x!==l.x||l.node.z!==l.z).map(l=>({id:l.node.id,from:{x:l.x,z:l.z},to:{x:l.node.x,z:l.node.z}}))])}if(this.connectionStart&&e&&t.tool!=="connect"){const s=this.connectionStart;this.connectionStart=void 0,this.preview.clear();const r=t.locate(e),a=t.pickNodes().find(c=>c.object.userData.nodeId!==s.id)?.object.userData.nodeId,l=typeof a=="string"?t.nodeIndex.get(a):void 0;l&&r&&this.events.onConnect(s.id,s.port,l.id,sr(l,r,t.nodeIndex))}const n=this.dragOrigins.filter(s=>s.node.x!==s.x||s.node.z!==s.z).map(s=>({id:s.node.id,from:{x:s.x,z:s.z},to:{x:s.node.x,z:s.node.z}}));if(this.drag=void 0,this.dragOrigins=[],this.pan=void 0,this.guides.clear(),n.length===1){const s=n[0];s&&this.events.onMove(s.id,s.from,s.to)}else n.length&&this.events.onMoves(n)};cancelListener=()=>this.cancel();lostCapture=e=>{e.pointerId===this.activePointer&&this.cancel()};releasePointer(){const e=this.activePointer;this.activePointer=void 0;const t=this.board.canvas;e!==void 0&&t.hasPointerCapture(e)&&t.releasePointerCapture(e)}preventNativeDrag=e=>e.preventDefault();context=e=>{const t=this.board;e.preventDefault();const n=t.edgeAt(e);if(n)t.selectEdge(n);else if(!t.selectedEdge||t.selectedIds.size){t.locate(e);const s=t.nodeAt();s&&!t.selectedIds.has(s)&&t.select(s)}this.events.onContextMenu(e.clientX,e.clientY)};doubleClick=e=>{const t=this.board;if(t.tool!=="select")return;const n=t.edgeAt(e);if(n){this.events.onEditRequest({kind:"edge",id:n});return}const s=t.locate(e),r=t.nodeAt();if(r){t.select(r),this.events.onEditRequest({kind:"node",id:r});return}s&&this.events.onEditRequest({kind:"empty",x:Math.round(s.x),z:Math.round(s.z)})}}function Vo(i,e,t,n){return i.copy(hc(e)).lerp(hc(t),n)}const po=new Map;function hc(i){let e=po.get(i);return e||(po.size>4096&&po.clear(),e=new Ye(i),po.set(i,e)),e}class AS{constructor(e,t,n,s){this.palette=s;for(const r of["service","group","process","decision","terminal"]){const o=e.filter(h=>h.shape?h.shape===r:h.kind===r);if(!o.length)continue;const a=r==="group",l=new Xc({color:"#ffffff",transparent:a,opacity:a?s.groupOpacity:1,depthWrite:!a}),c=r==="process"||r==="decision"||r==="terminal"?n[r]:t,d=new Oo(c,l,o.length);d.instanceMatrix.setUsage(vi),d.frustumCulled=!1,o.forEach((h,p)=>{this.entries.set(h.id,{mesh:d,index:p}),d.setColorAt(p,this.paint(h,!1))}),this.meshes.push(d),this.root.add(d)}}palette;root=new un;entries=new Map;meshes=[];matrix=new it;scale=new D;rotation=new _i;color=new Ye;update(e,t,n=!1){const s=this.entries.get(e.id);s&&(this.scale.set(e.width,e.kind==="group"?2:24,e.depth),s.mesh.setMatrixAt(s.index,this.matrix.compose(t,this.rotation,this.scale)),s.mesh.instanceMatrix.addUpdateRange(s.index*16,16),s.mesh.instanceMatrix.needsUpdate=!0,s.mesh.setColorAt(s.index,this.paint(e,n)),s.mesh.instanceColor&&(s.mesh.instanceColor.addUpdateRange(s.index*3,3),s.mesh.instanceColor.needsUpdate=!0))}paint(e,t){const n=this.palette;return e.kind==="group"?Vo(this.color,n.group,e.color,n.monochrome?0:.35):Vo(this.color,n.tile,e.color,n.monochrome?0:n.tileTint),t&&this.color.lerp(hc(n.selected),.12),this.color}dispose(){for(const e of this.meshes)e.dispose(),Array.isArray(e.material)||e.material.dispose();this.root.clear(),this.entries.clear()}}class TS{constructor(e,t,n){this.palette=n,this.template=new Float32Array(t.count*3);for(let r=0;r<t.count;r++)this.template[r*3]=t.getX(r),this.template[r*3+1]=t.getY(r),this.template[r*3+2]=t.getZ(r);this.shadowMaterial=new Kt({color:n.shadow,transparent:!0,opacity:n.shadowOpacity,depthWrite:!1}),this.faces=new Oo(this.plane,this.faceMaterial,e),this.shadows=new Oo(this.plane,this.shadowMaterial,e);for(const r of[this.faces,this.shadows])r.frustumCulled=!1,r.instanceMatrix.setUsage(vi);this.positions=new Wt(new Float32Array(e*t.count*3),3).setUsage(vi),this.outlineGeometry.setAttribute("position",this.positions),this.colors=new Wt(new Float32Array(e*t.count*3),3).setUsage(vi),this.outlineGeometry.setAttribute("color",this.colors);const s=new If(this.outlineGeometry,this.outlineMaterial);s.frustumCulled=!1,this.root.add(this.faces,this.shadows,s)}palette;root=new un;plane=new ti(1,1);faceMaterial=new Xc({color:"#ffffff"});shadowMaterial;outlineMaterial=new zc({color:"#ffffff",vertexColors:!0,transparent:!0,opacity:.85});outlineGeometry=new Ct;positions;colors;color=new Ye;faces;shadows;matrix=new it;rotation=new _i().setFromAxisAngle(new D(1,0,0),-Math.PI/2);position=new D;scale=new D;template;update(e,t,n){t.kind==="service"&&!t.shape?(this.position.set(n.x,n.y+12.5,n.z),this.scale.set(t.width*.82,t.depth*.76,1),this.faces.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale)),this.faces.setColorAt(e,Vo(this.color,this.palette.face,t.color,this.palette.monochrome?0:this.palette.faceTint)),this.faces.instanceColor&&(this.faces.instanceColor.addUpdateRange(e*3,3),this.faces.instanceColor.needsUpdate=!0),this.position.set(n.x+8,n.y-14,n.z+11),this.scale.set(t.width*1.04,t.depth*1.05,1),this.shadows.setMatrixAt(e,this.matrix.compose(this.position,this.rotation,this.scale))):(this.matrix.makeScale(0,0,0),this.faces.setMatrixAt(e,this.matrix),this.shadows.setMatrixAt(e,this.matrix)),this.faces.instanceMatrix.addUpdateRange(e*16,16),this.faces.instanceMatrix.needsUpdate=!0,this.shadows.instanceMatrix.addUpdateRange(e*16,16),this.shadows.instanceMatrix.needsUpdate=!0,Vo(this.color,this.palette.outline,t.color,t.kind==="group"?this.palette.monochrome?0:.85:this.palette.outlineTint);const s=this.template,r=e*s.length,o=this.colors.array,{r:a,g:l,b:c}=this.color;for(let x=r,u=r+s.length;x<u;x+=3)o[x]=a,o[x+1]=l,o[x+2]=c;this.colors.addUpdateRange(r,s.length),this.colors.needsUpdate=!0;const d=!!t.shape||t.kind==="text"||t.kind==="note",h=d?0:t.width,p=d?0:t.kind==="group"?2:24,m=d?0:t.depth,v=this.positions.array;for(let x=0;x<s.length;x+=3)v[r+x]=n.x+(s[x]??0)*h,v[r+x+1]=n.y+(s[x+1]??0)*p,v[r+x+2]=n.z+(s[x+2]??0)*m;this.positions.addUpdateRange(r,s.length),this.positions.needsUpdate=!0}dispose(){this.faces.dispose(),this.shadows.dispose(),this.plane.dispose(),this.outlineGeometry.dispose(),this.faceMaterial.dispose(),this.shadowMaterial.dispose(),this.outlineMaterial.dispose(),this.root.clear()}}const uh=52*Math.PI/180,hh=1600,CS=2800,RS=.05,PS=4;class IS{target=new D;spatial=new Zt(20,1,20,8e4);plan=new br(-1,1,1,-1,.1,8e4);mode="isometric";width=1;height=1;distance=hh;rightInset=260;get camera(){return this.mode==="top"?this.plan:this.spatial}resize(e,t){this.width=e,this.height=t,this.plan.left=-e/2,this.plan.right=e/2,this.plan.top=t/2,this.plan.bottom=-t/2,this.spatial.aspect=e/t,this.update()}setPanelVisible(e){this.rightInset=e?260:0,this.update()}setMode(e){this.mode=e,this.update()}update(){const e=this.camera;e.up.set(0,1,0),this.mode==="top"?(e.up.set(0,0,-1),e.position.set(this.target.x,3e3,this.target.z)):e.position.set(this.target.x,this.target.y+this.distance*Math.sin(uh),this.target.z+this.distance*Math.cos(uh)),e.lookAt(this.target),e.setViewOffset(this.width,this.height,(this.width<800?0:this.rightInset)/2-28,0,this.width,this.height),e.updateProjectionMatrix(),e.updateMatrixWorld()}fit(e){this.target.set((e.minX+e.maxX)/2,e.maxY/3,(e.minZ+e.maxZ)/2);const t=this.width<800?0:this.rightInset,n=Math.max(this.width-t-150,200),s=Math.max(this.height-240,200);this.plan.zoom=Math.min(2,n/Math.max(e.maxX-e.minX,200),s/Math.max(e.maxZ-e.minZ,200)),this.spatial.zoom=1;const r=new D,o=this.mode;this.mode="isometric";let a=200,l=6e4;for(let c=0;c<14;c++){this.distance=(a+l)/2,this.update();let d=!0;for(const h of[e.minX,e.maxX])for(const p of[0,e.maxY])for(const m of[e.minZ,e.maxZ]){r.set(h,p,m).project(this.spatial);const v=(r.x+1)*this.width/2,x=(1-r.y)*this.height/2;(v<100||v>this.width-t-38||x<135||x>this.height-140||r.z>1)&&(d=!1)}d?l=this.distance:a=this.distance}this.distance=l,this.mode=o,this.update()}snapshot(){const e=this.target.clone(),{distance:t,rightInset:n,mode:s}=this,r=this.spatial.zoom,o=this.plan.zoom;return()=>{this.target.copy(e),this.distance=t,this.rightInset=n,this.mode=s,this.spatial.zoom=r,this.plan.zoom=o,this.update()}}clampZoom(e){const t=this.mode==="top"?1:Math.max(1,this.distance/hh);return Math.min(PS*t,Math.max(RS,e))}get fogScale(){return this.mode==="top"?1:Math.min(1,CS/this.distance)}zoomBy(e){this.camera.zoom=this.clampZoom(this.camera.zoom*e),this.update()}get percent(){return Math.round(this.camera.zoom*100)}}const fh=12e-5,ph={width:3.6,dash:12,gap:38,speed:40};function DS(i,e,t,n,s,r){const o=s-t,a=r-n,l=o*o+a*a,c=l?Math.max(0,Math.min(1,((i-t)*o+(e-n)*a)/l)):0;return Math.hypot(i-(t+c*o),e-(n+c*a))}const LS=i=>i.kind==="text"||i.kind==="note";function mh(i,e){i.position.set(e.kind==="group"?-e.width/2+Math.min(e.width/2,150):0,e.kind==="group"?5:e.shape?26:0,e.kind==="group"?-e.depth/2+22:e.shape?0:e.depth/2+16)}function mo(i){return i.kind==="group"?2:i.kind==="text"?4:i.kind==="note"?To:24}const gh=1.75;class NS{constructor(e,t,n=Ja.scene){this.host=e,this.document=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.info.autoReset=!1,this.renderer.setClearColor("#000000",0),this.ray.layers.enable(rr),this.scene.fog=this.fog,this.scene.matrixWorldAutoUpdate=!1,this.renderer.domElement.setAttribute("aria-label","Architecture diagram canvas"),this.host.append(this.renderer.domElement),this.gestures=new ES(this.gestureBoard(),this,this.scene,this.host),this.scene.add(this.ports),this.scene.add(this.content,this.ambient);const s=new Ov("#ffe5bf",2);s.position.set(-200,500,300),this.scene.add(s),this.applyPalette(n),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.renderer.domElement.addEventListener("wheel",this.wheel,{passive:!1}),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost),this.renderer.domElement.addEventListener("webglcontextrestored",this.contextRestored),this.load(t),this.resize(),this.setView("isometric")}host;ready=Promise.resolve();document;scene=new Ef;palette=Ja.scene;backdrop=sh(this.palette);labels=new mS(this.palette);grid=new wu(16e3,320);ambient=new zv("#c9def1",2);fog=new kc("#0b111a",fh);view=new IS;get camera(){return this.view.camera}get target(){return this.view.target}renderer=new Bw({antialias:!1,alpha:!1});antialias=new nS;motionUntil=0;settleTimer;content=new un;geometry=new ei(1,1,1);pickMaterial=new Kt;shapeGeometries=oS();tileOutline=new Y0(this.geometry);details;bodies;edgeMaterial=new Ni({color:"#ffffff",linewidth:1.6,transparent:!0,depthWrite:!1,vertexColors:!0});haloMaterial=new Ni({color:"#ffffff",linewidth:8,transparent:!0,opacity:.12,depthWrite:!1,vertexColors:!0});flowMaterial=new Ni({color:"#ffffff",linewidth:3.6,transparent:!0,depthWrite:!1,dashed:!0,dashSize:12,gapSize:38});flowLines;distancesDirty=!1;flowing=!0;hasFlowEdges=!1;animators=new Set;edgeGeometry;flowGeometry;flowPositions=new Float32Array;flowBuffer;inactive=new Set;edgeBuffer;tiles=new Map;scratchColor=new Ye;dimColor=new Ye;edges=new Map;edgePositions=new Wt(new Float32Array,3);edgeLabels=new Map;nodeIndex=new Map;edgeIndex=new Map;incident=new Map;obstacleCache;fanCache;get obstacles(){return this.obstacleCache??=Jf(this.nodeIndex),this.obstacleCache}get fans(){return this.fanCache??=qw(this.edgeIndex.values(),this.nodeIndex),this.fanCache}pickables=[];viewProjection=new it;scratchA=new D;scratchB=new D;dirty=!0;ray=new Hv;pointer=new pe;plane=new hi(new D(0,1,0),0);point=new D;observer;frame=0;width=1;height=1;mode="isometric";tool="select";snapping=!0;selectedIds=new Set;portGeometry=new Wc(1,12,8);handleGeometry=new ei(1,1,1);portMaterial=new Kt({color:"#ffc778",depthTest:!1});handleMaterial=new Kt({color:"#f4f7fb",depthTest:!1});ports=new un;selectedEdge;hoveredEdge;edgeColors=new Float32Array;edgeColorBuffer;onSelectEdge=()=>{};journeyCaption="";onJourneyCaption=()=>{};setJourneyCaption(e){this.journeyCaption=e,this.onJourneyCaption(e)}onJourneyHop=()=>{};onJourneyEnd=()=>{};onJourneyBranches=()=>({mode:"all",edges:[]});onJourneyChoose=async()=>{};onJourneyCancelChoice=()=>{};journey;onEditRequest=()=>{};onPlace=()=>{};onConnect=()=>{};onMoves=()=>{};onContextMenu=()=>{};onSketch=()=>{};onErase=()=>{};onPenInput=()=>{};onResize=()=>{};selected;disposed=!1;retired=[];flushRetired(){for(const e of this.retired.splice(0))e()}labelTimer;annotationScale=2;sharpenLabelsSoon(e){clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>{this.disposed||(e&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.invalidate())},160)}staleAnnotations(){const e=this.renderer.getPixelRatio(),t=[];for(const n of this.tiles.values()){const s=n.annotation?.root;if(!s)continue;const r=Js(e/this.pixelSize(n.group.position),16),o=Number(s.userData.resolution);(r>o+1e-6&&!s.userData.capped||r*2<o-1e-6)&&t.push({tile:n,scale:r})}return t}sharpenAnnotations(){for(const{tile:e,scale:t}of this.staleAnnotations()){const n=e.annotation;if(!n)continue;const s=nh(e.node,this.palette,t);e.group.remove(n.root),e.group.add(s.root),e.annotation=s,this.retired.push(n.dispose),this.annotationScale=t}}sharpenLabels(){this.scene.updateMatrixWorld(),this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio())&&this.retired.push(this.labels.redraw()),this.sharpenAnnotations(),this.scene.updateMatrixWorld()}fitted=!1;onSelect=()=>{};onMove=()=>{};onZoom=()=>{};onError=()=>{};metrics={frames:0,lastRenderMs:0,textures:0,drawCalls:0};applyPalette(e){this.palette=e,this.labels.palette=e,this.backdrop.dispose(),this.backdrop=sh(e),this.scene.background=this.backdrop,this.fog.color.set(e.fog),this.ambient.intensity=e.ambient,this.scene.remove(this.grid),this.grid.dispose(),this.grid=new wu(16e3,320,e.grid[1],e.grid[1]),this.grid.position.y=-12,Array.isArray(this.grid.material)||(this.grid.material.transparent=!0,this.grid.material.opacity=e.gridOpacity),this.scene.add(this.grid),this.portMaterial.color.set(e.port),this.handleMaterial.color.set(e.handle),this.gestures.setPalette(e),this.flowMaterial.color.set(e.flow),this.haloMaterial.opacity=e.haloOpacity;const t=e.edgeWidth??1.6;this.edgeMaterial.linewidth=t,this.haloMaterial.linewidth=t*5;const n=e.flowStyle??ph;this.flowMaterial.linewidth=n.width,this.flowMaterial.dashSize=n.dash,this.flowMaterial.gapSize=n.gap}setPalette(e){const t=this.selection,n=this.selectedEdge;this.applyPalette(e),this.load(this.document),n?this.selectEdge(n):this.selectMany(t)}releaseContent(){const e=[...this.tiles.values()].flatMap(l=>l.annotation?[l.annotation]:[]),{bodies:t,details:n,edgeGeometry:s,flowGeometry:r,lanes:o}=this,a=this.labels.retire();this.lanes=void 0,this.retired.push(()=>{o?.dispose();for(const l of e)l.dispose();t?.dispose(),n?.dispose(),s?.dispose(),r?.dispose(),a()}),this.bodies=void 0,this.details=void 0,this.edgeGeometry=void 0,this.flowGeometry=void 0,this.flowBuffer=void 0,this.edgeBuffer=void 0,this.content.clear(),this.tiles.clear(),this.pickables=[],this.edges.clear(),this.edgeLabels.clear(),this.incident.clear(),this.nodeIndex.clear(),this.edgeIndex.clear()}load(e){this.gestures.reset(),this.stopJourney(),this.hoveredEdge=void 0,this.selectedEdge=void 0,this.document=e,this.releaseContent(),this.selected=void 0,this.selectedIds.clear(),this.ports.clear(),this.bodies=new AS(e.nodes,this.geometry,this.shapeGeometries,this.palette),this.content.add(this.bodies.root),this.details=new TS(e.nodes.length,this.tileOutline.getAttribute("position"),this.palette),this.content.add(this.details.root);for(const[c,d]of e.nodes.entries()){this.nodeIndex.set(d.id,d);const h=new un,p=new vt(d.shape?this.shapeGeometries[d.shape]:this.geometry,this.pickMaterial);if(p.scale.set(d.width,mo(d),d.depth),p.userData.nodeId=d.id,p.visible=!1,h.add(p),this.pickables.push(p),LS(d)){const f=nh(d,this.palette,this.annotationScale);h.add(f.root),this.content.add(h),this.tiles.set(d.id,{index:c,node:d,group:h,label:new un,annotation:f});continue}let m;const v=ys(d.serviceId??d.label);if(d.kind==="group"&&v?.icon&&(m=this.labels.create(v.id,this.camera.zoom,"icon"),h.add(m)),d.kind==="service"&&!d.shape){const f=this.labels.create(v?.id??d.label,this.camera.zoom,"icon");f.position.y=28,f.userData.nodeWidth=d.width,f.userData.nodeDepth=d.depth,h.add(f)}const x=this.labels.create(d.label,this.camera.zoom,d.kind==="group"?"group":"node",{width:d.width,depth:d.depth,...d.fontSize?{fontSize:d.fontSize}:{},...d.wrap?{wrap:!0}:{}});x.userData.captionBelow=d.kind==="service"&&!d.shape,x.userData.nodeWidth=d.width,x.userData.nodeDepth=d.depth,mh(x,d),h.add(x),this.content.add(h);const u={index:c,node:d,group:h,label:x,...m?{headerIcon:m}:{}};this.positionHeaderIcon(u),this.tiles.set(d.id,u)}const t=new Float32Array(e.edges.length*42);this.edgePositions=new Wt(t,3),this.edgeColors=new Float32Array(e.edges.length*42),this.edgeGeometry=new Go().setPositions(t).setColors(this.edgeColors);const n=this.edgeGeometry.getAttribute("instanceStart");n instanceof ln&&(this.edgeBuffer=n.data,this.edgeBuffer.setUsage(vi));const s=this.edgeGeometry.getAttribute("instanceColorStart");s instanceof ln&&(this.edgeColorBuffer=s.data,this.edgeColorBuffer.setUsage(vi),this.edgeColors=s.data.array);const r=new Ao(this.edgeGeometry,this.haloMaterial);r.frustumCulled=!1;const o=new Ao(this.edgeGeometry,this.edgeMaterial);o.frustumCulled=!1,this.inactive=Jm(e),this.hasFlowEdges=e.edges.some(c=>c.relationship!=="dependency"),this.flowPositions=new Float32Array(e.edges.length*42),this.flowGeometry=new Go().setPositions(this.flowPositions);const a=this.flowGeometry.getAttribute("instanceStart");a instanceof ln&&(this.flowBuffer=a.data,this.flowBuffer.setUsage(vi),this.flowPositions=a.data.array),this.flowLines=new Ao(this.flowGeometry,this.flowMaterial),this.flowLines.frustumCulled=!1,this.flowLines.visible=this.flowing,this.flowLines.renderOrder=2,this.content.add(r,o,this.flowLines),this.distancesDirty=!0;for(const[c,d]of e.edges.entries()){if(this.edgeIndex.set(d.id,d),this.edges.set(d.id,c),this.paintEdge(d.id),d.label){const h=this.labels.create(d.label,this.camera.zoom,"edge");this.content.add(h),this.edgeLabels.set(d.id,h)}for(const h of[d.source,d.target]){const p=this.incident.get(h)??new Set;p.add(d.id),this.incident.set(h,p)}}const l=Zh(e);l&&(this.lanes=_S(l,this.palette,c=>this.labels.create(c,this.camera.zoom,"group")),this.content.add(this.lanes.root)),this.labels.finish(this.content),this.updatePositions(),this.invalidate(),this.onSelect(void 0),this.loadIcons(e)}loadIcons(e){const t=[];for(const s of e.nodes){const r=ys(s.serviceId??s.label);r?.icon&&t.push(r.id)}const n=Ww(t);n.length&&(this.ready=Hw(n).then(()=>{if(this.disposed||this.document!==e)return;const s=this.selectedEdge,r=this.selection;this.load(e),s?this.selectEdge(s):this.selectMany(r)}).catch(s=>this.onError(String(s))))}positionHeaderIcon(e){if(!e.headerIcon)return;const{width:t,depth:n}=e.node;e.headerIcon.position.set(t/2-28,6,-n/2+24),e.headerIcon.userData.nodeWidth=t>=120?100:0,e.headerIcon.userData.nodeDepth=40,e.label.userData.nodeWidth=Math.max(30,t-80),e.label.position.x=-t/2+Math.min(Math.max(30,t-80)/2,150)}updatePositions(){this.obstacleCache=void 0,this.fanCache=void 0;for(const e of this.tiles.values()){const t=zt(e.node,this.nodeIndex);this.positionHeaderIcon(e),e.group.position.set(t.x,t.level*4,t.z),this.bodies?.update(e.node,e.group.position,this.selectedIds.has(e.node.id)),this.details?.update(e.index,e.node,e.group.position)}for(const e of this.edges.keys())this.updateEdge(e)}updateEdge(e){const t=this.edgeIndex.get(e),n=this.edges.get(e);if(!t||n===void 0)return;const s=this.tiles.get(t.source),r=this.tiles.get(t.target);if(!s||!r)return;const{points:o,targetPort:a}=Wa(t,this.nodeIndex,this.obstacles,this.fans),l=Math.max(s.group.position.y,r.group.position.y)+8,c=n*14;for(let y=0;y<5;y++){const w=o[y],T=o[y+1];!w||!T||(this.edgePositions.setXYZ(c+y*2,w.x,l,w.z),this.edgePositions.setXYZ(c+y*2+1,T.x,l,T.z))}const d=o[0],h=o[o.length-1];if(!d||!h)return;const p=a==="west"?1:a==="east"?-1:0,m=a==="north"?1:a==="south"?-1:0;this.edgePositions.setXYZ(c+10,h.x-p*8+m*4,l,h.z-m*8-p*4),this.edgePositions.setXYZ(c+11,h.x,l,h.z),this.edgePositions.setXYZ(c+12,h.x-p*8-m*4,l,h.z-m*8+p*4),this.edgePositions.setXYZ(c+13,h.x,l,h.z);const{point:v,horizontal:x}=th(o);this.edgeBuffer&&(this.edgeBuffer.addUpdateRange(n*42,42),this.edgeBuffer.needsUpdate=!0);const u=this.edgePositions.array,f=n*42,g=this.inactive.has(e)||t.relationship==="dependency";for(let y=0;y<42;y++)this.flowPositions[f+y]=u[g?f+y%3:f+y]??0;this.flowBuffer&&(this.flowBuffer.addUpdateRange(f,42),this.flowBuffer.needsUpdate=!0),this.distancesDirty=!0;const _=this.edgeLabels.get(e);_&&(_.position.set(v.x,l+8,v.z),_.userData.offsetX=x?0:46,_.userData.offsetY=x?22:0)}setView(e){this.mode=e,this.view.setMode(e),this.onZoom(this.view.percent),this.invalidate()}setQuality(e){this.renderer.setPixelRatio(Math.min(devicePixelRatio,Math.min(2,Math.max(1,e)))),this.resize()}setDiagramVisible(e){this.content.visible=e,this.invalidate()}insertionPoint(){return{x:this.target.x,z:this.target.z}}reveal(e){const t=this.tiles.get(e),n=this.nodeScreenPosition(e);if(!t||!n)return;const s=this.renderer.domElement.getBoundingClientRect(),r=n.x-s.left,o=n.y-s.top;r>120&&r<this.width-300&&o>120&&o<this.height-120||(this.fitted=!1,this.target.x=t.group.position.x,this.target.z=t.group.position.z,this.setView(this.mode))}setPanelVisible(e){this.view.setPanelVisible(e),this.fit()}zoomBy(e){this.fitted=!1,this.view.zoomBy(e),this.onZoom(this.view.percent),this.invalidate()}panByPixels(e,t){const n=(a,l)=>(this.pointer.set(a/this.width*2,-l/this.height*2),this.ray.setFromCamera(this.pointer,this.camera),this.ray.ray.intersectPlane(this.plane,new D)),s=n(0,0),r=n(e,0),o=n(0,t);!s||!r||!o||(this.inMotion(),this.fitted=!1,this.target.x+=r.x-s.x,this.target.z+=o.z-s.z,this.setView(this.mode),this.invalidate())}setTool(e){this.cancelInteraction(),this.tool=e,this.renderer.domElement.style.cursor=this.toolCursor()}toolCursor(){return this.tool==="pan"?"grab":this.tool==="connect"?"crosshair":this.tool==="text"?"text":this.tool==="note"?"copy":this.tool==="sketch"?"crosshair":"default"}finishInteraction(){this.gestures.finish()}cancelInteraction=()=>{this.gestures.cancel()};fit(){this.fitted=!0;let e=1/0,t=-1/0,n=1/0,s=-1/0,r=0;for(const o of this.tiles.values())e=Math.min(e,o.group.position.x-o.node.width/2),t=Math.max(t,o.group.position.x+o.node.width/2),n=Math.min(n,o.group.position.z-o.node.depth/2),s=Math.max(s,o.group.position.z+o.node.depth/2+70),r=Math.max(r,o.group.position.y+45);if(this.lanes){const o=this.lanes.bounds;e=Math.min(e,o.minX),t=Math.max(t,o.maxX),n=Math.min(n,o.minZ),s=Math.max(s,o.maxZ)}Number.isFinite(e)&&this.view.fit({minX:e,maxX:t,minZ:n,maxZ:s,maxY:r}),this.onZoom(this.view.percent),this.invalidate()}resize(){this.width=Math.max(this.host.clientWidth,1),this.height=Math.max(this.host.clientHeight,1),this.renderer.setSize(this.width,this.height),this.view.resize(this.width,this.height),this.fitted?this.fit():this.invalidate()}lanes;gestures;gestureBoard(){const e=this;return{get canvas(){return e.renderer.domElement},get tool(){return e.tool},get snapping(){return e.snapping},get nodeIndex(){return e.nodeIndex},get selection(){return e.selection},get selected(){return e.selected},get selectedIds(){return e.selectedIds},get selectedEdge(){return e.selectedEdge},locate:t=>this.locate(t),aimAt:(t,n)=>{const s=this.scratchA.set(t,0,n).project(this.camera);this.pointer.set(s.x,s.y),this.ray.setFromCamera(this.pointer,this.camera)},nodeAt:()=>this.nodeAt(),handleAt:()=>this.handleAt(),pickNodes:()=>this.ray.intersectObjects(this.pickables,!1),edgeAt:t=>this.edgeAt(t),nodesInScreenRect:t=>yS(this.nodeIndex,this.camera,this.width,this.height,t),viewportSize:()=>({width:this.width,height:this.height}),pixelSize:t=>this.pixelSize(t),tileNode:t=>this.tiles.get(t)?.node,tilePosition:t=>this.tiles.get(t)?.group.position,tileNodes:()=>[...this.tiles.values()].map(t=>t.node),worldRect:t=>this.worldRect(this.tiles.get(t)),applySize:t=>{const n=this.tiles.get(t);n&&this.applySize(n)},refreshPositions:t=>this.refreshPositions(t),updatePositions:()=>this.updatePositions(),panBoard:(t,n)=>{this.fitted=!1,this.target.x+=t,this.target.z+=n,this.setView(this.mode)},setCursor:t=>{this.renderer.domElement.style.cursor=t},toolCursor:()=>this.toolCursor(),hoverEdge:t=>{if(t===this.hoveredEdge)return;const n=this.hoveredEdge;this.hoveredEdge=t,n&&this.paintEdge(n),t&&this.paintEdge(t),this.invalidate()},select:(t,n)=>this.select(t,n),selectEdge:t=>this.selectEdge(t),selectMany:t=>this.selectMany(t),setPrimary:t=>{this.selected=t},inMotion:()=>this.inMotion(),invalidate:()=>this.invalidate()}}locate(e){const t=this.renderer.domElement.getBoundingClientRect();return this.pointer.set((e.clientX-t.left)/this.width*2-1,-(e.clientY-t.top)/this.height*2+1),this.ray.setFromCamera(this.pointer,this.camera),this.ray.ray.intersectPlane(this.plane,this.point)??void 0}nodeAt(){const e=this.ray.intersectObjects(this.pickables,!1),n=(e.find(s=>{const r=s.object.userData.nodeId;return typeof r=="string"&&this.tiles.get(r)?.node.kind!=="group"})??e[0])?.object.userData.nodeId;return typeof n=="string"?n:void 0}handleAt(){return this.ray.intersectObjects(this.ports.children,!1)[0]?.object}edgeAt(e){const t=this.renderer.domElement.getBoundingClientRect(),n=e.clientX-t.left,s=e.clientY-t.top,r=this.scratchA,o=this.scratchB,a=this.viewProjection.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse);let l,c=this.gestures.penInput?7*gh:7;for(const[d,h]of this.edges)for(let p=0;p<5;p++){const m=h*14+p*2;r.fromBufferAttribute(this.edgePositions,m).applyMatrix4(a),o.fromBufferAttribute(this.edgePositions,m+1).applyMatrix4(a);const v=(r.x+1)*this.width/2,x=(1-r.y)*this.height/2,u=(o.x+1)*this.width/2,f=(1-o.y)*this.height/2,g=DS(n,s,v,x,u,f);g<c&&(c=g,l=d)}return l}worldRect(e){if(!e)return{minX:0,maxX:0,minZ:0,maxZ:0};const t=zt(e.node,this.nodeIndex);return{minX:t.x-e.node.width/2,maxX:t.x+e.node.width/2,minZ:t.z-e.node.depth/2,maxZ:t.z+e.node.depth/2}}applySize(e){const t=e.group.children[0];t instanceof vt&&t.scale.set(e.node.width,mo(e.node),e.node.depth);for(const s of e.group.children)s.userData.nodeWidth=e.node.width,s.userData.nodeDepth=e.node.depth;const n=e.annotation?.root;n&&n.scale.set(e.node.width/n.userData.width,1,e.node.depth/n.userData.depth)}refreshPosition(e){this.refreshPositions([e])}refreshPositions(e){const t=[];for(const n of e){const s=this.tiles.get(n);s&&t.push(s)}if(t.length){if(this.obstacleCache=void 0,this.fanCache=void 0,t.some(n=>n.node.kind==="group"))this.updatePositions();else{const n=new Set;for(const s of t){const r=zt(s.node,this.nodeIndex);s.group.position.set(r.x,r.level*4,r.z),this.bodies?.update(s.node,s.group.position,this.selectedIds.has(s.node.id)),this.details?.update(s.index,s.node,s.group.position);for(const o of this.incident.get(s.node.id)??[])n.add(o)}for(const s of n)this.updateEdge(s)}for(const n of t)mh(n.label,n.node),this.positionHeaderIcon(n);this.invalidate()}}syncHandles(){const e=this.selected?this.tiles.get(this.selected):void 0;if(!e)return;const{x:t,y:n,z:s}=e.group.position,r=n+(e.node.kind==="group"?2:13),o=this.gestures.penInput?gh:1,a=e.node.width/2,l=e.node.depth/2;for(const c of this.ports.children){const d=c.userData.resize,h=c.userData.port;c.position.set(t,r,s);const p=this.pixelSize(c.position)*o;if(Array.isArray(d)){const[m,v]=d;c.position.set(t+m*a,r,s+v*l),c.scale.setScalar(9*p)}else if(Dh(h)){const m=20*p;c.position.set(t+(h==="east"?a+m:h==="west"?-a-m:0),r,s+(h==="south"?l+m:h==="north"?-l-m:0)),c.scale.setScalar(5.5*p)}}}pixelSize(e){const t=this.camera.projectionMatrix.elements[5]??1;return 2*(this.camera instanceof Zt?Math.max(1,-this.scratchA.copy(e).applyMatrix4(this.camera.matrixWorldInverse).z):1)/(this.height*t)}wheel=e=>{this.inMotion(),this.fitted=!1,e.preventDefault();const t=this.locate(e)?.clone();this.camera.zoom=this.view.clampZoom(this.camera.zoom*Math.exp(-e.deltaY*.001)),this.camera.updateProjectionMatrix();const n=this.locate(e);t&&n&&(this.target.x+=t.x-n.x,this.target.z+=t.z-n.z,this.setView(this.mode)),this.onZoom(this.view.percent),this.invalidate()};nodeScreenRect(e){const t=this.tiles.get(e);if(!t)return;const n=this.renderer.domElement.getBoundingClientRect(),{x:s,y:r,z:o}=t.group.position,a=r+mo(t.node)/2;let l=1/0,c=-1/0,d=1/0,h=-1/0;const p=new D;for(const m of[-1,1])for(const v of[-1,1]){p.set(s+m*t.node.width/2,a,o+v*t.node.depth/2).project(this.camera);const x=n.left+(p.x+1)*this.width/2,u=n.top+(1-p.y)*this.height/2;l=Math.min(l,x),c=Math.max(c,x),d=Math.min(d,u),h=Math.max(h,u)}return{left:l,top:d,width:c-l,height:h-d}}edgeScreenPosition(e){const t=this.edges.get(e),n=this.edgeIndex.get(e);if(t===void 0||!n)return;const{points:s}=Wa(n,this.nodeIndex,this.obstacles,this.fans),{point:r}=th(s),o=new D(r.x,8,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}nodePixelScale(e){const t=this.tiles.get(e);return t?1/this.pixelSize(t.group.position):1}contextLost=e=>{e.preventDefault(),this.onError("Graphics context lost. Waiting for recovery…")};contextRestored=()=>{this.onError("Graphics context restored"),this.invalidate()};get selection(){return[...this.selectedIds]}get edgeSelection(){return this.selectedEdge}select(e,t=!1){const n=t?new Set(this.selectedIds):new Set;e&&(t&&n.has(e)?n.delete(e):n.add(e)),this.selectMany([...n])}selectEdge(e){const t=e&&this.edges.has(e)?e:void 0;this.setNodeSelection([]),this.setEdgeSelection(t),this.onSelectEdge(t),this.invalidate()}setEdgeSelection(e){const t=this.selectedEdge;this.selectedEdge=e,t&&this.paintEdge(t),e&&this.paintEdge(e)}selectMany(e){this.setEdgeSelection(void 0),this.setNodeSelection(e);const t=this.selected?this.tiles.get(this.selected):void 0;this.onSelect(t?.node),this.invalidate()}setNodeSelection(e){const t=[...this.selectedIds];this.selectedIds.clear();for(const s of e)this.tiles.has(s)&&this.selectedIds.add(s);this.selected=[...this.selectedIds].at(-1);for(const s of new Set([...t,...this.selectedIds])){const r=this.tiles.get(s);r&&this.bodies?.update(r.node,r.group.position,this.selectedIds.has(s))}this.ports.clear();const n=this.selected?this.tiles.get(this.selected):void 0;if(!(!n||this.selectedIds.size!==1)){for(const s of["north","east","south","west"]){const r=new vt(this.portGeometry,this.portMaterial);r.userData.nodeId=n.node.id,r.userData.port=s,r.renderOrder=12,this.ports.add(or(r))}for(const s of[-1,0,1])for(const r of[-1,0,1]){if(!s&&!r)continue;const o=new vt(this.handleGeometry,this.handleMaterial);o.userData.nodeId=n.node.id,o.userData.resize=[s,r],o.renderOrder=13,this.ports.add(or(o))}}}paintEdge(e){const t=this.edges.get(e);if(t===void 0||!this.edgeColorBuffer)return;const n=e===this.selectedEdge?this.palette.edgeSelected:e===this.hoveredEdge?this.palette.edgeHover:this.palette.edge;this.scratchColor.set(n),(this.inactive.has(e)||this.edgeIndex.get(e)?.relationship==="dependency")&&e!==this.selectedEdge&&e!==this.hoveredEdge&&this.scratchColor.lerp(this.dimColor.set(this.palette.sky[1]),.68);const{r:s,g:r,b:o}=this.scratchColor;for(let a=t*42,l=a+42;a<l;a+=3)this.edgeColors[a]=s,this.edgeColors[a+1]=r,this.edgeColors[a+2]=o;this.edgeColorBuffer.addUpdateRange(t*42,42),this.edgeColorBuffer.needsUpdate=!0}refresh(){this.updatePositions(),this.invalidate()}inMotion(){this.motionUntil=performance.now()+200,clearTimeout(this.settleTimer),this.settleTimer=setTimeout(()=>{this.settleTimer=void 0,this.invalidate()},220)}invalidate(){this.dirty=!0,this.schedule()}schedule(){this.frame||this.disposed||(this.frame=requestAnimationFrame(()=>{this.frame=0,this.render()}))}onJourneyPermit=()=>!0;playJourney(e,t){const n=new Map;if(t)for(let r=1;r<t.path.length;r++){const o=t.path[r-1],a=t.path[r];o&&a&&n.set(`reachability:${r}`,{id:`reachability:${r}`,source:o,target:a,label:""})}const s=r=>n.get(r)??this.edgeIndex.get(r);this.journey?.dispose(),this.journey=new dS({add:r=>this.scene.add(or(r)),remove:r=>this.scene.remove(r),animate:r=>this.animate(r),route:r=>{const o=s(r),a=o&&this.tiles.get(o.source),l=o&&this.tiles.get(o.target);if(!o||!a||!l)return;const c=Math.max(a.group.position.y,l.group.position.y)+8;return Wa(o,this.nodeIndex,this.obstacles,this.fans).points.map(d=>new D(d.x,c,d.z))},node:r=>{const o=this.tiles.get(r);if(!o)return;const a=o.group.position.clone();return a.y+=mo(o.node)/2+1,{point:a,radius:Math.max(o.node.width,o.node.depth)*.62}},branches:r=>t?{mode:"all",edges:[...n.values()].filter(o=>o.source===r).map(o=>o.id)}:this.onJourneyBranches(r),choose:(r,o)=>this.onJourneyChoose(r,o),cancelChoice:()=>this.onJourneyCancelChoice(),target:r=>s(r)?.target,onVisit:r=>{const o=this.nodeIndex.get(r);this.setJourneyCaption(o?`${o.label}${o.journeyCaption?`
${o.journeyCaption}`:""}`:"")},onHop:r=>this.onJourneyHop(r),permit:r=>{const o=t?t.allowed:this.onJourneyPermit(r);return o||this.setJourneyCaption(`Blocked · ${this.journeyCaption}`),o},onFinish:()=>this.onJourneyEnd()},this.palette),this.journey.start(e)}stopJourney(){this.setJourneyCaption(""),this.journey?.dispose();const e=this.journey?.playing;this.journey=void 0,e!==void 0&&this.onJourneyEnd()}get journeyPlaying(){return this.journey?.playing??!1}setFlow(e){this.flowing=e,this.flowLines&&(this.flowLines.visible=e),this.invalidate()}get flow(){return this.flowing}animate(e){return this.animators.add(e),this.invalidate(),()=>{this.animators.delete(e),this.invalidate()}}get animating(){return this.content.visible&&(this.flowing&&this.hasFlowEdges||this.animators.size>0)}render(e=!1){const t=performance.now();this.distancesDirty&&this.flowLines&&(this.flowLines.computeLineDistances(),this.distancesDirty=!1);const n=this.palette.flowStyle??ph;this.flowMaterial.dashOffset=-(t/1e3*n.speed)%(n.dash+n.gap);const s=this.dirty||e;this.dirty=!1,this.fog.density=fh*this.view.fogScale;const r=this.animators.size>0;for(const o of this.animators)o(t)||this.animators.delete(o);if(s&&this.syncHandles(),(s||r)&&this.scene.updateMatrixWorld(),s){const o=this.labels.sync(this.camera,this.height,this.renderer.getPixelRatio());(o||this.staleAnnotations().length)&&this.sharpenLabelsSoon(o)}this.renderer.info.reset(),this.antialias.render(this.renderer,this.scene,this.camera,e||t>=this.motionUntil&&!this.animating),this.flushRetired(),this.metrics.textures=this.renderer.info.memory.textures,this.metrics.drawCalls=this.renderer.info.render.calls,this.metrics.frames++,this.metrics.lastRenderMs=performance.now()-t,this.animating&&this.schedule()}async checkContextRecovery(){const e=this.renderer.getContext().getExtension("WEBGL_lose_context");if(!e)return!1;const t=this.renderer.domElement;return new Promise((n,s)=>{const r=setTimeout(()=>{t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),s(Error("Graphics context recovery timed out"))},5e3),o=()=>{clearTimeout(r),t.removeEventListener("webglcontextlost",a),t.removeEventListener("webglcontextrestored",o),this.invalidate(),n(!0)},a=()=>{setTimeout(()=>e.restoreContext(),100)};t.addEventListener("webglcontextlost",a),t.addEventListener("webglcontextrestored",o),e.loseContext()})}gpuDetails(){const e=this.renderer.getContext(),t=e.getExtension("WEBGL_debug_renderer_info"),n=e.getParameter(t?.UNMASKED_RENDERER_WEBGL??e.RENDERER),s=e.getParameter(t?.UNMASKED_VENDOR_WEBGL??e.VENDOR);return{renderer:typeof n=="string"?n:"unknown",vendor:typeof s=="string"?s:"unknown"}}nodeScreenPosition(e){const t=this.tiles.get(e);if(!t)return;const n=t.group.position.clone();n.y+=t.node.kind==="group"?1:12,n.project(this.camera);const s=this.renderer.domElement.getBoundingClientRect();return{x:s.left+(n.x+1)*this.width/2,y:s.top+(1-n.y)*this.height/2}}handleScreenPosition(e,t){const n=this.tiles.get(e);if(!n)return;this.syncHandles(),this.scene.updateMatrixWorld();const s=this.ports.children.find(l=>l.userData.nodeId!==e?!1:t==="resize"?Array.isArray(l.userData.resize)&&l.userData.resize[0]===1&&l.userData.resize[1]===1:l.userData.port===t),r=s?s.position:{...Cs(n.node,t==="resize"?"east":t,this.nodeIndex),y:n.group.position.y+13},o=new D(r.x,r.y,r.z).project(this.camera),a=this.renderer.domElement.getBoundingClientRect();return{x:a.left+(o.x+1)*this.width/2,y:a.top+(1-o.y)*this.height/2}}captureDiagram(){if(!this.tiles.size)return Promise.reject(Error("Nothing to capture yet."));const e=this.view.snapshot(),t=this.fitted,n=this.renderer.getPixelRatio(),s=this.hoveredEdge;this.hoveredEdge=void 0,s&&this.paintEdge(s),this.ports.visible=!1,this.view.setPanelVisible(!1),this.fit(),this.renderer.setPixelRatio(Math.min(3,Math.max(2,devicePixelRatio))),this.sharpenLabels(),this.render(!0);const r=this.contentBounds(28),o=this.renderer.getPixelRatio(),a=document.createElement("canvas");return a.width=Math.max(1,Math.round(r.width*o)),a.height=Math.max(1,Math.round(r.height*o)),a.getContext("2d")?.drawImage(this.renderer.domElement,r.left*o,r.top*o,a.width,a.height,0,0,a.width,a.height),this.renderer.setPixelRatio(n),this.renderer.setSize(this.width,this.height),e(),this.fitted=t,this.ports.visible=!0,s&&(this.hoveredEdge=s,this.paintEdge(s)),this.onZoom(this.view.percent),this.invalidate(),new Promise((l,c)=>a.toBlob(d=>d?l(d):c(Error("PNG encoding failed")),"image/png"))}contentBounds(e){let t=1/0,n=-1/0,s=1/0,r=-1/0;const o=new D,a=(l,c,d)=>{o.set(l,c,d).project(this.camera);const h=(o.x+1)*this.width/2,p=(1-o.y)*this.height/2;t=Math.min(t,h),n=Math.max(n,h),s=Math.min(s,p),r=Math.max(r,p)};for(const l of this.tiles.values()){const{x:c,y:d,z:h}=l.group.position,p=l.node.width/2,m=l.node.depth/2,v=l.node.kind==="service"&&!l.node.shape?70:0;for(const x of[-p,p])for(const u of[-m,m+v])for(const f of[-12,40])a(c+x,d+f,h+u)}for(let l=0;l<this.edgePositions.count;l++)a(this.edgePositions.getX(l),this.edgePositions.getY(l),this.edgePositions.getZ(l));return t=Math.max(0,Math.floor(t-e)),s=Math.max(0,Math.floor(s-e)),n=Math.min(this.width,Math.ceil(n+e)),r=Math.min(this.height,Math.ceil(r+e)),{left:t,top:s,width:n-t,height:r-s}}gifFrame(e=640,t=480){this.render(!0);const n=document.createElement("canvas"),s=this.renderer.domElement,r=Math.min(1,e/s.width,t/s.height);n.width=Math.max(1,Math.round(s.width*r)),n.height=Math.max(1,Math.round(s.height*r));const o=n.getContext("2d");return o?.drawImage(s,0,0,n.width,n.height),o&&this.journeyCaption&&sS(o,n.width,n.height,this.journeyCaption),n}png(){return this.render(!0),new Promise((e,t)=>this.renderer.domElement.toBlob(n=>n?e(n):t(new Error("PNG encoding failed")),"image/png"))}dispose(){this.cancelInteraction(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.settleTimer),clearTimeout(this.labelTimer),this.observer.disconnect(),this.releaseContent(),this.flushRetired(),this.grid.dispose();for(const e of Object.values(this.shapeGeometries))e.dispose();this.portGeometry.dispose(),this.portMaterial.dispose(),this.handleGeometry.dispose(),this.handleMaterial.dispose(),this.geometry.dispose(),this.pickMaterial.dispose(),this.tileOutline.dispose(),this.haloMaterial.dispose(),this.flowMaterial.dispose(),this.journey?.dispose(),this.animators.clear(),this.edgeMaterial.dispose(),this.backdrop.dispose(),this.antialias.dispose(),this.renderer.dispose(),this.gestures.dispose(),this.renderer.domElement.remove()}}function US(i){const{state:e,scene:t,notify:n,deferInspect:s,updateHeader:r,selectTool:o,openEditor:a}=i;function l(u){O("component-palette").hidden=!u,O("components").setAttribute("aria-expanded",String(u)),u&&(O("file-menu").hidden=!0,ot("search").value="",h(),ot("search").focus())}for(const u of["components","tool-add","layer-add"])O(u).onclick=()=>l(O("component-palette").hidden);O("close-components").onclick=()=>l(!1);const c=ki.map(u=>({service:u,search:`${u.label} ${u.category} ${u.aliases}`.toLowerCase(),button:void 0}));function d(u){const f=document.createElement("button");f.className="service";const g=document.createElement("span");if(g.className="service-symbol",g.style.color=u.color,u.icon){const T=document.createElement("img");T.loading="lazy",T.decoding="async",T.src=u.icon,T.alt="",g.append(T)}else g.textContent=u.glyph;const _=document.createElement("span"),y=document.createElement("strong");y.textContent=u.label;const w=document.createElement("small");return w.textContent=u.description,_.append(y,w),f.append(g,_),f.onclick=()=>p(u),f}function h(u=""){const f=O("services"),g=u.toLowerCase();f.replaceChildren();for(const _ of c)_.search.includes(g)&&(_.button??=d(_.service),f.append(_.button));if(!f.childElementCount){const _=document.createElement("p");_.className="empty-search",_.textContent="No matching services. Try another name.",f.append(_)}x(0)}function p(u){const f=crypto.randomUUID(),[g,_]=zh(u.kind);let y;try{y=am(e.current,t.insertionPoint(),g,_)}catch(w){n(String(w));return}e.history.execute({type:"insert",node:{id:f,kind:u.kind,serviceId:u.id,...u.shape?{shape:u.shape}:{},...u.boundary?{boundary:u.boundary}:{},...u.policyKind?{policy:u.policyKind==="route-table"?{kind:"route-table",routes:[]}:{kind:u.policyKind,rules:[]}}:{},label:u.label,x:Math.round(y.x/10)*10,z:Math.round(y.z/10)*10,width:g,depth:_,color:u.color}}),s(()=>t.load(e.current)),t.select(f),t.reveal(f),r(),l(!1),o("select"),n(`${u.label} added`),(u.kind==="text"||u.kind==="note")&&a({kind:"node",id:f},!0)}let m=0;function v(){return[...O("services").querySelectorAll("button")]}function x(u){const f=v();m=f.length?(u+f.length)%f.length:0;for(const[g,_]of f.entries())_.classList.toggle("highlighted",g===m);f[m]?.scrollIntoView({block:"nearest"})}return O("search").oninput=()=>h(ot("search").value),O("search").onkeydown=u=>{u.key==="ArrowDown"||u.key==="ArrowUp"?(u.preventDefault(),x(m+(u.key==="ArrowDown"?1:-1))):u.key==="Enter"?(u.preventDefault(),v()[m]?.click()):u.key==="Escape"&&(u.preventDefault(),l(!1))},{show:l,isOpen:()=>!O("component-palette").hidden,populate:h,step:u=>x(m+u),addHighlighted:()=>v()[m]?.click()}}function kS(i,e){const{state:t,scene:n,notify:s,commit:r,travelHistory:o}=i;let a;function l(c,d=!1){if(a?.(!0),c.kind==="empty"){e(c.x,c.z);return}const h=c.kind==="node"?t.current.nodes.find(f=>f.id===c.id):void 0,p=c.kind==="edge"?t.current.edges.find(f=>f.id===c.id):void 0;if(!h&&!p)return;const m=h?.kind==="text"||h?.kind==="note",v=document.createElement(m?"textarea":"input");if(v.className=`inline-editor${h?` ${h.kind}`:" edge"}`,v.value=h?.label??p?.label??"",v.maxLength=m?xc:1e3,v.setAttribute("aria-label",m?"Text":"Label"),v.spellcheck=m,h&&m){const f=n.nodeScreenRect(h.id),g=n.nodePixelScale(h.id);if(!f)return;Object.assign(v.style,{left:`${f.left}px`,top:`${f.top}px`,width:`${Math.max(f.width,160)}px`,height:`${Math.max(f.height,48)}px`,fontSize:`${Math.max(11,Wo(h)*g)}px`,padding:`${(h.kind==="note"?14:4)*g}px`,background:h.kind==="note"?h.color:""})}else{const f=h?(()=>{const g=n.nodeScreenRect(h.id);return g?{x:g.left+g.width/2,y:h.kind==="group"?g.top+18:g.top+g.height+22}:void 0})():p?n.edgeScreenPosition(p.id):void 0;if(!f)return;Object.assign(v.style,{left:`${f.x-110}px`,top:`${f.y-18}px`,width:"220px"})}document.body.append(v),v.focus(),v.select();let x=!1;const u=f=>{if(x)return;x=!0,a=void 0;const g=v.value;if(v.remove(),!f){d&&m&&o(!1);return}if(h){const _=t.current.nodes.find(y=>y.id===h.id);if(!_)return;if(d&&_.kind==="text"&&!g.trim()){o(!1);return}if(g===_.label)return;r({type:"graph",label:m?"Edit text":"Rename component",nodes:[{id:_.id,value:{..._,label:g}}]},[_.id])}else if(p){const _=t.current.edges.find(y=>y.id===p.id);if(!_||g===_.label)return;r({type:"graph",label:"Label connection",edges:[{id:_.id,value:{..._,label:g.slice(0,1e3)}}]},[]),n.selectEdge(_.id)}};a=u,v.addEventListener("blur",()=>u(!0)),v.addEventListener("keydown",f=>{const g=f;g.stopPropagation(),g.key==="Escape"?(g.preventDefault(),u(!d)):g.key==="Enter"&&(!m||g.ctrlKey||g.metaKey)&&(g.preventDefault(),u(!0))}),s(m?"Typing · Ctrl+Enter or click away to finish · Esc cancels":"Enter to rename · Esc cancels")}return window.addEventListener("pointerdown",c=>{a&&!(c.target instanceof Element&&c.target.closest(".inline-editor"))&&a(!0)},{capture:!0}),{open:l,close:c=>a?.(c)}}function rn(i,e){const t=document.createElement(i);return e&&(t.textContent=e),t}function Cn(i="",e="text"){const t=rn("input");return t.type=e,t.value=i,t}function FS(i,e){if(i.disabled||!i.value&&!e.value)return{};if(!i.value||!e.value)throw Error("Enter both ends of the port range, or leave both blank");return{fromPort:Number(i.value),toPort:Number(e.value)}}function vn(i,e=""){const t=rn("select");for(const[n,s]of i){const r=rn("option",s);r.value=n,t.append(r)}return t.value=e,t}function yt(i,e,t){const n=rn("label",e);n.append(t),i.append(n)}function vh(i,e,t){const n=vn(i.nodes.filter(e).map(s=>[s.id,s.label]));n.multiple=!0,n.size=4;for(const s of n.options)s.selected=t.includes(s.value);return n}function OS(i,e,t,n,s){if(i.replaceChildren(),!e||e.kind==="text"||e.kind==="note")return;const r=rn("details");r.open=!!(e.network||e.policy),r.append(rn("summary","Resource networking")),i.append(r);const o=Cn("","checkbox");o.checked=!!e.network,yt(r,"Enable network model",o);const a=vn([["aws","AWS IPv4"],["generic","Generic IPv4"],["compose","Compose network"]],e.network?.model??"aws");yt(r,"Network model",a);const l=Cn(e.network?.ip??""),c=Cn(e.network?.publicIp??""),d=Cn(e.network?.cidr??"");e.kind==="service"&&!e.policy&&(yt(r,"Private / endpoint IPv4",l),yt(r,"Public IPv4 (if known)",c)),e.kind==="group"&&yt(r,"Boundary CIDR",d);const h=vn([["unknown","Unknown"],["private","Private"],["public","Public address assigned"]],e.network?.exposure??"unknown");e.kind==="service"&&!e.policy&&yt(r,"Public address assignment",h);const p=vh(t,M=>M.policy?.kind==="security-group",e.network?.securityGroupIds??[]);e.kind==="service"&&!e.policy&&yt(r,"Attached security groups",p);const m=M=>[["","Not assigned"],...t.nodes.filter(A=>A.policy?.kind===M).map(A=>[A.id,A.label])],v=vn(m("route-table"),e.network?.routeTableId??""),x=vn(m("network-acl"),e.network?.networkAclId??"");e.boundary==="subnet"&&(yt(r,"Subnet route table",v),yt(r,"Subnet network ACL",x));const u=vh(t,M=>M.kind==="group"&&M.network?.model==="compose",e.network?.networkIds??[]);e.network?.model==="compose"&&yt(r,"Compose network attachments",u);const f=vn([["","No resource policy"],["security-group","Security group"],["network-acl","Network ACL"],["route-table","Route table"]],e.policy?.kind??"");yt(r,"Policy on this resource",f);const g=rn("div");g.className="network-rule-rows",r.append(g);const _=rn("button","Add rule / route");_.type="button",r.append(_);const y=[];function w(M){const A=rn("div");A.className="network-rule-row",g.append(A);const k=rn("button","Remove");if(k.type="button",f.value==="route-table"){const N=M&&"destination"in M?M:{destination:"0.0.0.0/0",target:"local"},L=Cn(N.destination),F=vn([["local","Local VPC"],["blackhole","Blackhole"],...t.nodes.filter(U=>U.kind==="service"&&U.id!==e?.id).map(U=>[U.id,U.label])],N.target);yt(A,"Destination CIDR",L),yt(A,"Next hop",F),y.push(()=>A.isConnected?{destination:L.value.trim(),target:F.value}:void 0)}else{const N=M&&"protocol"in M?M:{action:"allow",direction:"ingress",protocol:"tcp",fromPort:443,toPort:443,cidr:"0.0.0.0/0",priority:g.children.length*100},L=vn([["ingress","Ingress"],["egress","Egress"]],N.direction),F=vn([["any","Any IP protocol"],["tcp","TCP"],["udp","UDP"],["icmp","ICMP (all types)"]],N.protocol),U=Cn(String(N.fromPort??""),"number"),z=Cn(String(N.toPort??""),"number"),Z=Cn(N.cidr??"");U.min=z.min="0",U.max=z.max="65535";const j=vn([["","Use CIDR / any peer"],...t.nodes.filter(Ae=>Ae.policy?.kind==="security-group"||Ae.id===e?.id).map(Ae=>[Ae.id,Ae.label])],N.peerGroupId??""),de=vn([["allow","Allow"],["deny","Deny"]],N.action),se=Cn(String(N.priority??g.children.length*100),"number");se.min="1",se.max="32766",yt(A,"Direction",L),yt(A,"Protocol",F),yt(A,"From port (blank = all)",U),yt(A,"To port",z),yt(A,"Peer IPv4 CIDR",Z),f.value==="security-group"&&yt(A,"Or peer security group",j),f.value==="network-acl"&&(yt(A,"Action",de),yt(A,"Rule priority",se));const te=()=>{U.disabled=z.disabled=["any","icmp"].includes(F.value),Z.disabled=f.value==="security-group"&&!!j.value};F.onchange=te,j.onchange=te,te(),y.push(()=>A.isConnected?{direction:L.value,protocol:F.value,action:f.value==="security-group"?"allow":de.value,...FS(U,z),...f.value==="security-group"&&j.value?{peerGroupId:j.value}:Z.value.trim()?{cidr:Z.value.trim()}:{},...f.value==="network-acl"?{priority:Number(se.value)}:{}}:void 0)}k.onclick=()=>A.remove(),A.append(k)}const T=()=>{g.replaceChildren(),y.length=0,_.disabled=!f.value;const M=e?.policy;if(M?.kind===f.value)if(M.kind==="route-table")for(const A of M.routes)w(A);else for(const A of M.rules)w(A)};f.onchange=T,_.onclick=()=>w(),T();const R=[...e.network?.incomplete??[],...e.policy?.incomplete??[]],b=Cn("","checkbox");R.length&&(r.append(rn("p",`Unresolved import values: ${R.join("; ")}`)),yt(r,"I have supplied the missing settings above",b)),r.append(rn("p","Security groups allow matching rules from any attached group; no match denies. ACLs use the first matching priority, then implicit deny, including return traffic. No assigned ACL is modeled as default allow."));const E=rn("button","Apply resource networking");E.type="button",r.append(E),E.onclick=()=>{try{const M=structuredClone(e);o.checked?M.network=Ph({model:a.value,...l.value.trim()?{ip:l.value.trim()}:{},...c.value.trim()?{publicIp:c.value.trim()}:{},...e.kind==="group"&&d.value.trim()?{cidr:d.value.trim()}:{},exposure:h.value,securityGroupIds:Array.from(p.selectedOptions,A=>A.value),...e.boundary==="subnet"&&v.value?{routeTableId:v.value}:{},...e.boundary==="subnet"&&x.value?{networkAclId:x.value}:{},...e.network?.model==="compose"?{networkIds:Array.from(u.selectedOptions,A=>A.value)}:{},...!b.checked&&e.network?.incomplete?{incomplete:e.network.incomplete}:{}}):delete M.network,f.value?M.policy=Ih({kind:f.value,[f.value==="route-table"?"routes":"rules"]:y.map(A=>A()).filter(Boolean),...!b.checked&&e.policy?.incomplete&&e.policy.kind===f.value?{incomplete:e.policy.incomplete}:{}}):delete M.policy,ps(Ro({...t,nodes:t.nodes.map(A=>A.id===e.id?M:A)})),n(M)}catch(M){s(String(M))}}}function zS(i){const{state:e,scene:t,notify:n,commit:s,updateLayers:r,navigateDiagram:o,deleteSelection:a}=i,l=["region","environment","resourceName","tags","notes"];function c(){const u=e.current.nodes.find(M=>M.id===e.selected);O("properties").hidden=!u,O("selection").textContent=u?.kind==="text"||u?.kind==="note"?u.label.split(`
`)[0]||(u.kind==="note"?"Sticky note":"Text"):u?.label??"",ot("node-label").value=u?.label??"",O("node-caption").value=u?.journeyCaption??"",O("detail-controls").hidden=!u||!["group","service"].includes(u.kind);const f=O("node-detail");f.replaceChildren(new Option("No detail diagram",""),...(e.project.details??[]).map(M=>new Option(M.document.title,M.id))),f.value=u?.detailId??"",O("detail-open").disabled=!u?.detailId;const g=u?.kind==="text"||u?.kind==="note";ot("node-label").hidden=g,fe("node-text").hidden=!g,O("node-label-caption").textContent=g?"Text":"Label",O("node-label-caption").setAttribute("for",g?"node-text":"node-label");const _=u?.kind==="service";O("node-font-row").hidden=!g&&!_,O("node-wrap-row").hidden=!_;const y=u?e.current.edges.filter(M=>M.source===u.id):[];if(O("node-branch-row").hidden=y.length<2,u&&y.length>=2){const M=u.journey;Xs("node-branch",[["all","Takes every branch"],["ask","Asks me which way"],...y.map(A=>[`fixed:${A.id}`,`Active route ${rl(e.current,A.id)}`])],M?.mode==="fixed"?`fixed:${M.edge}`:M?.mode??bc(e.current,u.id).mode)}u&&(fe("node-text").value=u.label,ot("node-font").value=u.kind==="service"?String(u.fontSize??""):String(Wo(u)),ot("node-font").placeholder=u.kind==="service"?"Auto":"",ot("node-wrap").checked=!!u.wrap,ot("node-color").value=u.color);const w=e.current.edges.find(M=>M.id===e.selectedEdge);if(O("edge-properties").hidden=!w,u){for(const N of["x","z","width","depth"])ot(`node-${N}`).value=String(u[N]);const M=new Set([u.id]);for(let N=!0;N;){N=!1;for(const L of e.current.nodes)L.parentId&&M.has(L.parentId)&&!M.has(L.id)&&(M.add(L.id),N=!0)}Xs("node-parent",[["","Board"],...e.current.nodes.filter(N=>N.kind==="group"&&!M.has(N.id)).map(N=>[N.id,N.label])],u.parentId??"");const A=h();for(const N of l){const L=fe(`meta-${N}`);L.dataset.placeholder??=L.placeholder;const F=A.map(z=>z.metadata?.[N]??""),U=F.every(z=>z===F[0]);L.value=U?F[0]??"":"",L.placeholder=U?L.dataset.placeholder??"":"Mixed · type to set for all"}const k=O("meta-scope");k.hidden=A.length<2,k.textContent=`Editing ${A.length} selected objects. Changes apply to all of them.`,O("meta-apply-inside").hidden=A.length>1||p(u.id).length===0,A.length>1&&(O("selection").textContent=`${A.length} selected`,O("meta-details").open=!0)}if(w){const M=v();O("edge-active").hidden=!M.active,O("edge-all-routes").hidden=!M.all;const A=Ch(w.networkRule,e.current.traffic??Ks);O("rule-result").textContent=`${A.allowed?"Allowed":"Blocked"} for current traffic · ${A.reason}`,fe("rule-action").value=w.networkRule?.action??"none",fe("rule-protocol").value=w.networkRule?.protocol??"any",fe("rule-port").value=String(w.networkRule?.port??""),fe("rule-source").value=w.networkRule?.sourceCidr??"",fe("rule-direction").value=w.networkRule?.direction??"any",d(),ot("edge-label").value=w.label;const k=e.current.nodes.map(N=>[N.id,N.label]);Xs("edge-source",k,w.source),Xs("edge-target",k,w.target),fe("edge-sourcePort").value=w.sourcePort??"",fe("edge-targetPort").value=w.targetPort??"",fe("edge-routing").value=w.routing??"horizontal",ot("edge-bend").value=String(w.bend??0)}O("selection-note").textContent=u?.kind==="group"?"Architecture boundary":u?.kind==="text"?"Text · double-click to edit":u?.kind==="note"?"Sticky note · double-click to edit":u?.shape?"Flowchart shape":"Component · double-click to rename";const T=[...new Set(e.current.nodes.flatMap(M=>M.owner?[M.owner]:[]))].sort((M,A)=>M.localeCompare(A));O("owner-options").replaceChildren(...T.map(M=>new Option(M)));const R=u?h():[],b=new Set(R.map(M=>M.owner??"")),E=ot("node-owner");E.value=b.size===1?[...b][0]??"":"",E.placeholder=b.size>1?"Mixed · type to set for all":"Who does this step?";for(const M of["delete","tool-edit"]){const A=O(M);A instanceof HTMLButtonElement&&(A.disabled=!u&&!w)}OS(O("resource-network"),u,e.current,M=>s({type:"graph",label:"Resource networking",nodes:[{id:M.id,value:M}]}),n),r()}fe("node-text").onchange=()=>{const u=e.current.nodes.find(g=>g.id===e.selected),f=fe("node-text").value.slice(0,xc);!u||f===u.label||s({type:"graph",label:"Edit text",nodes:[{id:u.id,value:{...u,label:f}}]})},fe("node-font").onchange=()=>{const u=e.current.nodes.find(g=>g.id===e.selected);if(u?.kind==="service"&&!fe("node-font").value.trim()){const g={...u};delete g.fontSize,s({type:"graph",label:"Text size",nodes:[{id:u.id,value:g}]});return}const f=Number(fe("node-font").value);if(!u||!Number.isFinite(f)||f<4||f>400){c();return}s({type:"graph",label:"Text size",nodes:[{id:u.id,value:{...u,fontSize:f}}]})},ot("node-wrap").onchange=()=>{const u=e.current.nodes.find(g=>g.id===e.selected);if(!u)return;const f={...u};ot("node-wrap").checked?f.wrap=!0:delete f.wrap,s({type:"graph",label:"Caption wrapping",nodes:[{id:u.id,value:f}]})},fe("node-branch").onchange=()=>{const u=e.current.nodes.find(_=>_.id===e.selected),f=fe("node-branch").value;if(!u)return;const g=f.startsWith("fixed:")?{mode:"fixed",edge:f.slice(6)}:{mode:f==="ask"?"ask":"all"};s({type:"graph",label:"Journey branch",nodes:[{id:u.id,value:{...u,journey:g}}]})},fe("node-color").onchange=()=>{const u=e.current.nodes.find(g=>g.id===e.selected),f=fe("node-color").value;!u||!/^#[0-9a-f]{6}$/i.test(f)||f===u.color||s({type:"graph",label:"Change colour",nodes:[{id:u.id,value:{...u,color:f}}]})},O("node-label").onchange=()=>{const u=e.current.nodes.find(_=>_.id===e.selected);if(!u)return;const f=ot("node-label").value.slice(0,1e3);if(f===u.label)return;const g=ys(u.serviceId??u.label);s({type:"graph",label:"Rename component",nodes:[{id:u.id,value:{...u,label:f,...g?{serviceId:g.id}:{}}}]})},O("detail-open").onclick=()=>{const u=e.current.nodes.find(g=>g.id===e.selected)?.detailId,f=e.project.details?.find(g=>g.id===u)?.document;f&&o(f)},O("detail-create").onclick=()=>{const u=e.current.nodes.find(_=>_.id===e.selected);if(!u)return;if((e.project.details?.length??0)>=100){n("A project supports up to 100 detail diagrams");return}const f=crypto.randomUUID(),g={version:1,title:`${u.label} detail`,nodes:[],edges:[]};e.history.execute({type:"detail",root:e.project,id:f,board:g}),s({type:"graph",label:"Link detail diagram",nodes:[{id:u.id,value:{...u,detailId:f}}]}),o(g)},fe("node-detail").onchange=()=>{const u=e.current.nodes.find(g=>g.id===e.selected);if(!u)return;const f={...u};fe("node-detail").value?f.detailId=fe("node-detail").value:delete f.detailId,s({type:"graph",label:"Link detail diagram",nodes:[{id:u.id,value:f}]})},fe("node-caption").onchange=()=>{const u=e.current.nodes.find(f=>f.id===e.selected);u&&s({type:"graph",label:"Edit walkthrough caption",nodes:[{id:u.id,value:{...u,journeyCaption:fe("node-caption").value.slice(0,1e3)}}]})};function d(){const u=fe("rule-action").value!=="allow";for(const f of["rule-protocol","rule-port","rule-source","rule-direction"])fe(f).disabled=u}fe("rule-action").onchange=d,O("rule-apply").onclick=()=>{const u=e.current.edges.find(f=>f.id===e.selectedEdge);if(u)try{const f={...u};fe("rule-action").value==="none"?delete f.networkRule:fe("rule-action").value==="deny"?f.networkRule={action:"deny",protocol:"any",direction:"any"}:f.networkRule=Th({action:fe("rule-action").value,protocol:fe("rule-protocol").value,direction:fe("rule-direction").value,...fe("rule-port").value?{port:Number(fe("rule-port").value)}:{},...fe("rule-source").value.trim()?{sourceCidr:fe("rule-source").value.trim()}:{}}),s({type:"graph",label:"Change traffic rule",edges:[{id:u.id,value:f}]})}catch(f){n(String(f))}};for(const u of["x","z","width","depth"])fe(`node-${u}`).onchange=()=>{const f=e.current.nodes.find(_=>_.id===e.selected);if(!f)return;const g=Number(fe(`node-${u}`).value);if(!Number.isFinite(g)||Math.abs(g)>1e6||(u==="width"||u==="depth")&&g<30){n("Enter a valid size or coordinate."),c();return}s({type:"graph",label:`Change ${u}`,nodes:[{id:f.id,value:{...f,[u]:g,...(f.kind==="text"||f.kind==="note")&&(u==="width"||u==="depth")?{fontSize:Sh(f,f,{...f,[u]:g})}:{}}}]})};fe("node-parent").onchange=()=>{const u=e.current.nodes.find(R=>R.id===e.selected);if(!u)return;const f=new Map(e.current.nodes.map(R=>[R.id,R])),g=zt(u,f),_=fe("node-parent").value,y=f.get(_),w=y?zt(y,f):{x:0,z:0},T={...u,x:g.x-w.x,z:g.z-w.z};delete T.parentId,_&&(T.parentId=_),s({type:"graph",label:"Move into boundary",nodes:[{id:u.id,value:T}]})};function h(){const u=e.selectedIds.size?e.selectedIds:new Set(e.selected?[e.selected]:[]);return e.current.nodes.filter(f=>u.has(f.id))}function p(u){const f=new Set([u]),g=[];for(let _=!0;_;){_=!1;for(const y of e.current.nodes)y.parentId&&f.has(y.parentId)&&!f.has(y.id)&&(f.add(y.id),g.push(y),_=!0)}return g}function m(u,f,g){u.length&&s({type:"graph",label:g,nodes:u.map(_=>({id:_.id,value:{..._,metadata:{..._.metadata,...f}}}))})}for(const u of l)fe(`meta-${u}`).onchange=()=>{const f=h();m(f,{[u]:fe(`meta-${u}`).value.slice(0,1e3)},f.length>1?`Edit ${u} on ${f.length} objects`:`Edit ${u}`)};O("meta-apply-inside").onclick=()=>{const u=e.current.nodes.find(_=>_.id===e.selected);if(!u)return;const f=Object.fromEntries(Object.entries(u.metadata??{}).filter(([,_])=>_)),g=p(u.id);if(!Object.keys(f).length){n("Fill in this boundary’s details first, then apply them.");return}m(g,f,"Apply details inside boundary"),n(`Details applied to ${g.length} objects inside ${u.label}`)};for(const u of["label","source","target","sourcePort","targetPort","routing","bend"])fe(`edge-${u}`).onchange=()=>{const f=e.current.edges.find(w=>w.id===e.selectedEdge);if(!f)return;const g={...f},_=fe(`edge-${u}`).value;if(u==="bend"){const w=Number(_);if(!Number.isFinite(w)||Math.abs(w)>1e6){c();return}g.bend=w}else u==="sourcePort"||u==="targetPort"?_?g[u]=_:delete g[u]:u==="routing"?g.routing=_:g[u]=_.slice(0,1e3);const y=f.id;s({type:"graph",label:"Edit connection",edges:[{id:y,value:g}]},[]),t.selectEdge(y)};O("delete-edge").onclick=a;function v(){const u=e.current.edges.find(y=>y.id===e.selectedEdge);if(!u)return{active:!1,all:!1};const f=e.current.edges.filter(y=>y.source===u.source).length>=2,g=e.current.nodes.find(y=>y.id===u.source),_=g?.journey?.mode==="fixed"?g.journey.edge:void 0;return{active:f&&_!==u.id,all:f&&!!_}}function x(u){const f=e.current.edges.find(y=>y.id===e.selectedEdge),g=f&&e.current.nodes.find(y=>y.id===f.source);if(!f||!g)return;const _={...g};u?_.journey={mode:"fixed",edge:f.id}:delete _.journey,s({type:"graph",label:u?"Set active route":"Show all routes",nodes:[{id:g.id,value:_}]},[]),t.selectEdge(f.id),n(u?`Active route: ${g.label} ${rl(e.current,f.id)}`:`All routes from ${g.label} are active`)}return O("edge-active").onclick=()=>x(!0),O("edge-all-routes").onclick=()=>x(!1),{inspect:c,routeActions:v}}function BS(i){const{state:e,scene:t,navigateDiagram:n}=i;function s(c){e.layersVisible=c,O("layers-panel").hidden=!c,O("toggle-layers").setAttribute("aria-pressed",String(c)),t.setPanelVisible(c)}let r="";const o=new Map;function a(){const c=O("layer-tree"),d=JSON.stringify([e.current.nodes.map(h=>[h.id,h.label,h.color,h.parentId,h.serviceId,h.kind,h.detailId]),e.current.edges.map(h=>[h.id,h.label,h.source,h.target])]);if(d!==r){r=d,c.replaceChildren(),o.clear();const h=new Map(e.current.nodes.map(x=>[x.id,x.label])),p=new Map;for(const x of e.current.nodes){const u=p.get(x.parentId)??[];u.push(x),p.set(x.parentId,u)}const m=[],v=(x,u)=>{for(const f of p.get(x)??[])m.push({node:f,depth:u}),v(f.id,u+1)};v(void 0,0);for(const{node:x,depth:u}of m){const f=document.createElement("button");f.className=`layer-row ${x.kind}${e.selectedIds.has(x.id)?" selected":""}`,f.setAttribute("aria-pressed",String(e.selectedIds.has(x.id)));const g=document.createElement("span");g.className="layer-symbol",g.style.color=x.color;const _=ys(x.serviceId??x.label);if(_?.icon&&(x.kind==="service"||x.kind==="group")){const w=document.createElement("img");w.src=_.icon,w.alt="",g.append(w)}else g.textContent=x.kind==="group"?"▱":_?.glyph??"◇";(x.kind==="text"||x.kind==="note")&&(g.textContent=x.kind==="text"?"T":"▤",g.style.color=x.kind==="note"?x.color:"");const y=document.createElement("span");if(y.textContent=x.label.split(`
`)[0]||(x.kind==="note"?"Sticky note":x.kind==="text"?"Text":""),f.append(g,y),f.style.paddingLeft=`${8+u*12}px`,o.set(`node:${x.id}`,f),f.onclick=w=>t.select(x.id,w.shiftKey),c.append(f),x.detailId){const w=e.project.details?.find(T=>T.id===x.detailId);if(w){const T=document.createElement("button");T.className="detail-layer-link",T.textContent="↳ Open detail ↗",T.setAttribute("aria-label",`Open detail for ${x.label}`),T.onclick=()=>n(w.document),c.append(T)}}}if(e.current.edges.length){const x=document.createElement("p");x.className="section-label connections-heading",x.textContent="CONNECTIONS",c.append(x)}for(const x of e.current.edges){const u=document.createElement("button");u.className=`layer-row connection-row${e.selectedEdge===x.id?" selected":""}`,u.textContent=`↳ ${x.label||"Connection"} · ${h.get(x.source)??""} → ${h.get(x.target)??""}`,u.onclick=()=>t.selectEdge(x.id),c.append(u),o.set(`edge:${x.id}`,u)}}for(const[h,p]of o){const m=h.startsWith("node:")?e.selectedIds.has(h.slice(5)):e.selectedEdge===h.slice(5);p.classList.toggle("selected",m),p.setAttribute("aria-pressed",String(m))}}O("toggle-layers").onclick=()=>s(!e.layersVisible),O("close-layers").onclick=()=>s(!1),O("ground-toggle").onclick=()=>{e.diagramVisible=!e.diagramVisible,t.setDiagramVisible(e.diagramVisible),O("ground-toggle").setAttribute("aria-pressed",String(e.diagramVisible)),O("ground-toggle").setAttribute("aria-label",e.diagramVisible?"Hide diagram":"Show diagram")};function l(){innerWidth<800&&e.layersVisible&&s(!1)}return window.addEventListener("resize",l),l(),{showLayers:s,updateLayers:a}}const GS=()=>`
  <main class="workspace" aria-label="Diagram workspace"><div id="canvas"></div><nav id="diagram-path" class="diagram-path" aria-label="Diagram navigation"></nav><div id="journey-caption" class="journey-caption" hidden role="status"></div></main><div id="theme-fx" aria-hidden="true"></div>
  <header class="topbar">
    <div class="board-heading"><button id="menu" class="icon-button" aria-label="File menu" aria-expanded="false" title="File menu">${et("menu")}</button><span id="forge-mark" class="forge-mark" aria-hidden="true">✦</span><span class="brand">Solar Forge</span><span class="heading-divider"></span><button id="title" class="document-title" title="Rename diagram"></button><span id="save-state" class="save-state">Unchanged</span></div>
    <div class="top-actions"><button id="features" class="quiet-button" title="Take a quick tour of the features">${et("play")}<span>Features</span></button><button id="examples" class="quiet-button" title="Browse examples">${et("layers")}<span>Examples</span></button><button id="components" class="quiet-button" title="Components (/)" aria-expanded="false">${et("cube")}<span>Components</span></button><button id="copy-image" class="quiet-button" title="Copy diagram image to clipboard (Ctrl+Shift+C)">${et("camera")}<span>Copy image</span></button><button id="tablet-mode" class="icon-button" aria-label="Tablet mode" aria-pressed="false" title="Tablet mode: full screen on the pen display">${et("tablet")}</button><button id="settings" class="icon-button" aria-label="Settings" aria-expanded="false" title="Settings">${et("settings")}</button><button id="theme" class="icon-button" aria-label="Theme" aria-expanded="false" title="Theme">${et("palette")}</button><button id="toggle-layers" class="icon-button" aria-label="Toggle Layers panel" aria-pressed="true" title="Layers">${et("layers")}</button><button id="quick-save" class="quiet-button" title="Save diagram (Ctrl+S)">${et("save")}<span>Save</span></button><button id="quick-export" class="export-button">Export ${et("arrow")}</button></div>
  </header>
  <section id="file-menu" class="popover file-menu" aria-label="File menu" hidden><p class="popover-caption">LOCAL WORKSPACE</p><button id="new">New diagram <kbd>Ctrl N</kbd></button><button id="browse-examples">Browse examples…</button><button id="open">Open diagram <kbd>Ctrl O</kbd></button><button id="save">Save diagram <kbd>Ctrl S</kbd></button><button id="save-as">Save as… <kbd>Ctrl Shift S</kbd></button><button id="import-infrastructure">Import Mermaid or infrastructure…</button><button id="reachability">Reachability matrix…</button><button id="auto-layout">Automatic layout</button><button id="export">Export PNG ${et("arrow")}</button><button id="export-gif">Export journey GIF</button><button id="export-video">Export journey video…</button><button id="export-mermaid">Export Mermaid source</button><button id="export-plantuml">Export PlantUML source</button><button id="export-drawio">Export draw.io project</button><button id="export-svg">Export SVG ${et("arrow")}</button><div class="menu-divider"></div><p class="popover-caption">RECENT DIAGRAMS</p><div id="recent-files"></div></section>
  <section id="settings-panel" class="popover settings-panel" aria-labelledby="settings-title" hidden><div class="popover-heading"><h2 id="settings-title">Settings</h2><button id="close-settings" class="small-icon" aria-label="Close settings">${et("close")}</button></div><div class="settings-tabs" role="tablist"><button id="settings-tab-tablet" role="tab" aria-selected="true" aria-controls="settings-tablet">Tablet buttons</button></div><div id="settings-tablet" role="tabpanel" aria-labelledby="settings-tab-tablet"><p class="section-label">WHEELS</p><p id="dial-status" class="muted" role="status"></p><label class="dial-row">Wheel sensitivity<input id="dial-sensitivity" type="range" min="1" max="10" step="1"></label><label class="check-row"><input id="dial-reverse" type="checkbox"> Reverse wheel direction</label><p class="section-label">BUTTONS</p><p class="muted">Choose Assign, then press a tablet button, pen button or extra mouse button. Tablet buttons send ordinary key combos, so the same keys typed on a keyboard do the same thing.</p><div id="tablet-bindings" class="tablet-bindings"></div><div class="property-actions"><button id="tablet-bindings-reset">Clear all</button></div></div></section>
  <section id="theme-menu" class="popover theme-menu" aria-label="Themes" hidden><div id="theme-list"></div><label class="fx-toggle"><input id="theme-fx-toggle" type="checkbox"> Ambient effects</label><label class="fx-toggle font-picker">Board font<select id="board-font"></select></label></section>
  <nav class="tool-rail" aria-label="Canvas tools"><button id="tool-select" class="tool active" aria-label="Select" aria-pressed="true" title="Select (V)">${et("pointer")}<kbd>V</kbd></button><button id="tool-pan" class="tool" aria-label="Pan" aria-pressed="false" title="Pan (M)">${et("hand")}<kbd>M</kbd></button><span class="rail-divider"></span><button id="tool-add" class="tool" aria-label="Add component" title="Add component (/)">${et("cube")}<kbd>/</kbd></button><button id="tool-connect" class="tool" aria-label="Connect components" aria-pressed="false" title="Connect (C)">${et("connect")}<kbd>C</kbd></button><button id="tool-sketch" class="tool" aria-label="Sketch" aria-pressed="false" title="Sketch (B): draw a box, diamond or oval to add a shape, or a line between two components to connect them">${et("pen")}<kbd>B</kbd></button><button id="tool-text" class="tool" aria-label="Text" aria-pressed="false" title="Text: click the board (T)">${et("text")}<kbd>T</kbd></button><button id="tool-note" class="tool" aria-label="Sticky note" aria-pressed="false" title="Sticky note: click the board (N)">${et("note")}<kbd>N</kbd></button><button id="tool-group" class="tool" aria-label="Group selection" title="Group (Ctrl+G)">${et("group")}</button><button id="tool-edit" class="tool" aria-label="Rename selected component" title="Rename selected component" disabled>${et("edit")}</button><span class="rail-divider"></span><button id="tool-fit" class="tool" aria-label="Fit diagram" title="Fit diagram (F)">${et("fit")}</button></nav>
  <section id="component-palette" class="popover component-palette" aria-label="Components" hidden><div class="popover-heading"><h2>Components</h2><button id="close-components" class="small-icon" aria-label="Close components">${et("close")}</button></div><label class="sr-only" for="search">Find a component</label><input id="search" type="search" placeholder="Search services…"><div id="services"></div><p class="palette-hint">Choose a component to add it to your board.</p></section>
  <aside id="layers-panel" class="layers-panel" aria-label="Layers and properties"><div class="panel-heading"><h2>Layers</h2><button id="layer-add" class="small-icon" aria-label="Add service">${et("plus")}</button><button id="close-layers" class="small-icon" aria-label="Close Layers panel">${et("close")}</button></div><div class="ground-card"><button id="ground-toggle" class="ground-eye" aria-label="Hide diagram" aria-pressed="true">${et("eye")}</button><div><strong><span class="ground-dot"></span>Diagram</strong><p id="ground-summary"></p></div><span class="layer-index">01</span></div><div id="layer-tree" class="layer-tree" aria-label="Diagram objects"></div><section id="properties" class="properties" aria-label="Selected component properties" hidden><p class="section-label">SELECTED COMPONENT</p><h3 id="selection"></h3><p id="selection-note" class="muted"></p><label for="node-label" id="node-label-caption">Label</label><input id="node-label" maxlength="1000"><textarea id="node-text" rows="4" hidden></textarea><label for="node-owner">Owner</label><input id="node-owner" list="owner-options" maxlength="100" placeholder="Who does this step?" autocomplete="off"><datalist id="owner-options"></datalist><div class="property-grid"><label id="node-font-row">Text size<input id="node-font" type="number" min="4" max="400"></label><label>Colour<input id="node-color" type="color"></label></div><label id="node-wrap-row" class="check-row"><input id="node-wrap" type="checkbox"> Wrap caption to tile width</label><div class="property-grid"><label>X<input id="node-x" type="number" min="-1000000" max="1000000"></label><label>Z<input id="node-z" type="number" min="-1000000" max="1000000"></label><label>Width<input id="node-width" type="number" min="30" max="1000000"></label><label>Depth<input id="node-depth" type="number" min="30" max="1000000"></label></div><label id="node-branch-row">Journey at this fork<select id="node-branch"></select></label><label for="node-parent">Inside boundary</label><select id="node-parent"></select><div class="property-actions"><button id="duplicate">Duplicate</button><button id="ungroup">Ungroup</button></div><label>Walkthrough caption<textarea id="node-caption" maxlength="1000" rows="3" placeholder="Explain what happens at this hop"></textarea></label><details id="detail-controls"><summary>Detail diagram</summary><label>Linked diagram<select id="node-detail"></select></label><button id="detail-open">Open detail ↗</button><button id="detail-create">Create detail diagram</button><p class="muted">Double-click a linked resource to open it. Use Label to rename it.</p></details><div id="resource-network"></div><details id="meta-details"><summary>Architecture details</summary><p id="meta-scope" class="muted" hidden></p><label>Region<input id="meta-region" maxlength="1000"></label><label>Environment<input id="meta-environment" maxlength="1000"></label><label>Resource name<input id="meta-resourceName" maxlength="1000"></label><label>Tags<input id="meta-tags" maxlength="1000" placeholder="team=platform, env=dev"></label><label>Notes<textarea id="meta-notes" maxlength="1000" rows="3"></textarea></label><button id="meta-apply-inside" hidden>Apply to everything inside</button></details></section><section id="edge-properties" class="properties" aria-label="Connection properties" hidden><p class="section-label">SELECTED CONNECTION</p><label>Label<input id="edge-label" maxlength="1000"></label><label>From<select id="edge-source"></select></label><label>Source port<select id="edge-sourcePort"><option value="">Auto</option><option>north</option><option>east</option><option>south</option><option>west</option></select></label><label>To<select id="edge-target"></select></label><label>Target port<select id="edge-targetPort"><option value="">Auto</option><option>north</option><option>east</option><option>south</option><option>west</option></select></label><label>Route<select id="edge-routing"><option value="horizontal">Horizontal first</option><option value="vertical">Vertical first</option></select></label><label>Bend offset<input id="edge-bend" type="number" min="-1000000" max="1000000" step="10"></label><div class="property-actions"><button id="edge-active">Make active route</button><button id="edge-all-routes">Show all routes</button></div><details><summary>Journey traffic rule</summary><label>Action<select id="rule-action"><option value="none">Unrestricted</option><option value="allow">Allow matching traffic</option><option value="deny">Deny all traffic</option></select></label><label>Protocol<select id="rule-protocol"><option value="any">Any</option><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Port (blank = any)<input id="rule-port" type="number" min="1" max="65535"></label><label>Source CIDR (blank = any)<input id="rule-source" placeholder="0.0.0.0/0"></label><label>Direction<select id="rule-direction"><option value="any">Any</option><option value="ingress">Ingress</option><option value="egress">Egress</option></select></label><button id="rule-apply">Apply rule</button><p id="rule-result" class="muted" role="status"></p></details><button id="delete-edge" class="delete-button">Delete connection</button></section><div class="panel-foot"><span class="offline-dot"></span> Offline workspace <span class="forge-wordmark">SOLAR FORGE</span></div></aside>
  <nav class="canvas-controls" aria-label="Canvas controls"><div class="zoom-dock floating-dock" aria-label="Zoom controls"><button id="zoom-out" class="small-icon" aria-label="Zoom out">${et("minus")}</button><span id="zoom-level">100%</span><button id="zoom-in" class="small-icon" aria-label="Zoom in">${et("plus")}</button><span class="dock-divider"></span><button id="fit">Fit</button><span class="dock-divider"></span><button id="help" class="small-icon" aria-label="Keyboard help" aria-expanded="false">${et("help")}</button></div>
  <div class="history-dock floating-dock" aria-label="Edit history"><button id="undo" class="small-icon" aria-label="Undo" title="Undo (Ctrl+Z)" disabled>${et("undo")}</button><button id="redo" class="small-icon" aria-label="Redo" title="Redo (Ctrl+Shift+Z)" disabled>${et("redo")}</button></div>
  <div class="view-dock floating-dock" aria-label="View controls"><button id="journey" class="journey-button" aria-pressed="false" title="Walk a person through the data flow (P)">${et("user")}<span>Journey</span></button><button id="traffic-settings" title="Configure journey traffic">Traffic</button><button id="flow" aria-pressed="true" title="Animate data flow along connections">${et("flow")}<span>Flow</span></button><button id="snap" aria-pressed="true" title="Snap positions to a 10-unit grid">Snap</button><button id="lanes" aria-pressed="false" title="Show the board as swimlanes, one per owner (L)">Lanes</button><span class="dock-divider"></span><button id="iso" aria-pressed="true">2.5D</button><button id="top" aria-pressed="false">Plan</button><span class="dock-divider"></span><button id="delete" class="delete-button" disabled>${et("trash")}<span>Delete</span></button></div></nav>
  <section id="gif-panel" class="popover help-panel" aria-label="GIF recording settings" hidden><h2 id="recording-title">Journey GIF</h2><label id="video-format-row" hidden>Video format<select id="video-format"><option value="webm">WebM</option><option value="mp4">MP4</option></select></label><p id="video-help" hidden>Up to 30 fps, 1280 × 720, full colour. Format availability depends on your browser. Decision forks use their first branch.</p><label>Duration (seconds)<input id="gif-duration" type="number" min="2" max="120" step="1" value="12"></label><label id="gif-dither-row" class="checkbox-label"><input id="gif-dither" type="checkbox" checked> Dither gradients</label><p id="gif-help">Up to 8 frames per second, 640 × 480. An adaptive palette preserves theme colours. Decision forks use their first branch.</p><button id="gif-record">Record GIF</button><p>Press Esc to cancel recording.</p></section>
  <section id="traffic-panel" class="popover help-panel" aria-label="Journey traffic" hidden><h2>Journey traffic</h2><label>Saved scenario<select id="traffic-scenario"></select></label><div class="property-actions"><button id="scenario-use">Use scenario</button><button id="scenario-delete">Delete</button></div><label>Scenario name<input id="scenario-name" maxlength="100"></label><label>Start (optional)<select id="scenario-source"></select></label><label>Destination (optional)<select id="scenario-target"></select></label><button id="scenario-save">Save / update scenario</button><p>Rules on connections allow matching traffic. Blocked attempts flash red and stop at the source. This illustrates configured paths, not a full AWS policy simulation.</p><label>Protocol<select id="traffic-protocol"><option value="tcp">TCP</option><option value="udp">UDP</option><option value="icmp">ICMP</option></select></label><label>Destination port<input id="traffic-port" type="number" min="1" max="65535" value="443"></label><label>Source IPv4<input id="traffic-source" value="203.0.113.10"></label><label>Direction<select id="traffic-direction"><option value="ingress">Ingress</option><option value="egress">Egress</option></select></label><button id="traffic-apply">Apply traffic</button><p>For private egress in the demo, select a private worker, use source 10.0.10.10 and Egress, then play Journey.</p></section>
  <section id="help-panel" class="popover help-panel" aria-label="Keyboard shortcuts" hidden><h2>Make room for your ideas.</h2><p><kbd>V</kbd> Select <kbd>M</kbd> Pan <kbd>F</kbd> Fit view</p><p><kbd>WASD</kbd> or arrows move the view · Shift for faster</p><p><kbd>/</kbd> Add · Enter drops it <kbd>C</kbd> Connect</p><p><kbd>T</kbd> Text <kbd>N</kbd> Note <kbd>B</kbd> Sketch <kbd>P</kbd> Journey</p><p>Double-click to rename · <kbd>Ctrl K</kbd> Commands</p><p><kbd>Esc</kbd> Deselect · stop</p><p><kbd>Ctrl Z</kbd> Undo <kbd>Ctrl Shift Z</kbd> Redo</p><label class="quality-label">Rendering quality<select id="quality"><option value="1">Efficient · 1×</option><option value="1.5">Balanced · 1.5×</option><option value="2" selected>Sharp · match display</option></select></label><p>Drag empty canvas to select. Shift-drag adds.<br>Hold Ctrl while dragging to skip guides.<br>Scroll to zoom. Right-drag to pan.<br>Pen: drag with a barrel button held to pan; the eraser end deletes.</p></section>
  <section id="context-menu" class="popover context-menu" aria-label="Selection actions" hidden><button data-action="duplicate">Duplicate</button><button data-action="tool-group">Group</button><button data-action="ungroup">Ungroup</button><div class="align-row" data-multi><button data-align="left" title="Align left edges">⇤</button><button data-align="center" title="Align centres horizontally">↔</button><button data-align="right" title="Align right edges">⇥</button><button data-align="top" title="Align top edges">⤒</button><button data-align="middle" title="Align middles">↕</button><button data-align="bottom" title="Align bottom edges">⤓</button></div><div class="align-row" data-multi><button data-align="distribute-x" title="Distribute horizontally">⋯ Space evenly ↔</button><button data-align="distribute-z" title="Distribute vertically">⋮ ↕</button></div><button data-action="edge-active">Make active route</button><button data-action="edge-all-routes">Show all routes</button><button data-action="delete">Delete</button><button data-action="fit">Fit view</button></section>
  <div id="status" class="status" role="status">Ready</div><span id="count" class="board-count"></span>`,VS=1500,HS=350,xh=()=>new Promise(i=>requestAnimationFrame(()=>i()));async function WS(i=document.fonts?.ready??Promise.resolve()){const e=document.getElementById("splash");e&&(await Promise.race([i.catch(()=>{}),new Promise(t=>setTimeout(t,VS))]),await xh(),await xh(),np(e))}function np(i=document.getElementById("splash")){if(!(!i||i.classList.contains("splash-done"))){if(matchMedia("(prefers-reduced-motion: reduce)").matches){i.remove();return}i.classList.add("splash-done"),setTimeout(()=>i.remove(),HS+50)}}const ip=document.querySelector("#app");if(!ip)throw new Error("Application root is missing");ip.innerHTML=GS();const ce=lg(sm()),It=i=>{O("status").textContent=i},$c=Ip(It);let He;try{He=new NS(O("canvas"),ce.current,$c.initialPalette)}catch(i){throw np(),It(`Graphics unavailable: ${i instanceof Error?i.message:String(i)}`),i}const On={state:ce,scene:He,notify:It,commit:fc,action:jS,deferInspect:wr,updateHeader:Gi,updateLayers:rp,showComponents:jc,selectTool:bn,travelHistory:_r,deleteSelection:Yc,openEditor:mc,closeEditor:i=>Zc.close(i),navigateDiagram:vc,replaceDocument:qS,toggleJourney:lp},{setTheme:XS}=$c.install(He),qc=Zm(On,$c.boardFontFamily),sp=BS(On);function $S(i){sp.showLayers(i)}function rp(){sp.updateLayers()}ng(On);const Li=US(On);function jc(i){Li.show(i)}const op=zS(On);function Bi(){op.inspect()}O("features").onclick=()=>{jn(async()=>{const{startTour:i}=await import("./tour-BjFWENYq.js");return{startTour:i}},__vite__mapDeps([0,1])).then(({startTour:i})=>i()).catch(i=>It(`Tour unavailable: ${String(i)}`))};let ap=!1;function Gi(){ap&&gc.refresh(),ce.dirty=ce.history.isDirty,qc.scheduleRecovery(),O("save-state").textContent=ce.dirty?"Unsaved changes":"Unchanged";for(const[t,n]of[["undo",ce.history.canUndo],["redo",ce.history.canRedo]]){const s=O(t);s instanceof HTMLButtonElement&&(s.disabled=!n)}O("title").textContent=`${ce.current.title}${ce.dirty?" •":""}`,O("count").textContent=`${ce.current.nodes.length} objects · ${ce.current.edges.length} connections`;const i=t=>ce.current.nodes.filter(n=>n.kind===t).length,e=i("text")+i("note");O("ground-summary").textContent=`${i("service")} services · ${i("group")} boundaries${e?` · ${e} notes`:""}`,rp(),JS()}let Ho=!1;function wr(i){Ho=!0;try{i()}finally{Ho=!1}}He.onSelect=i=>{ce.checkedJourney=void 0,ce.selected=i?.id,ce.selectedIds=new Set(He.selection),ce.selectedEdge=void 0,Ho||Bi()};He.onSelectEdge=i=>{ce.checkedJourney=void 0,ce.selected=void 0,ce.selectedIds=new Set,ce.selectedEdge=i,Ho||Bi()};He.onMove=(i,e,t)=>{ce.history.execute({type:"move",id:i,from:e,to:t}),Gi(),Bi(),It("Position updated")};He.onError=It;He.onZoom=i=>{const e=`${i}%`;O("zoom-level").textContent!==e&&(O("zoom-level").textContent=e)};function qS(i){ce.fileHandle=void 0,ce.current=i,ce.project=i,ce.diagramTrail=[],ce.history=new tf(ce.current),ce.selected=void 0,ce.dirty=!1,wr(()=>He.load(ce.current)),He.fit(),Bi(),Gi()}async function jS(i){if(!ce.busy){He.finishInteraction(),ce.busy=!0;try{await i()}catch(e){It(e instanceof Error?e.message:String(e))}finally{ce.busy=!1}}}O("menu").onclick=()=>{const i=O("file-menu");i.hidden=!i.hidden,O("menu").setAttribute("aria-expanded",String(!i.hidden)),jc(!1)};function bn(i){He.setTool(i);for(const e of["select","pan","connect","sketch","text","note"]){const t=O(`tool-${e}`);t.classList.toggle("active",e===i),t.setAttribute("aria-pressed",String(e===i))}}O("tool-select").onclick=()=>bn("select");O("tool-pan").onclick=()=>bn("pan");O("tool-text").onclick=()=>{bn("text"),It("Click the board to place text.")};O("tool-note").onclick=()=>{bn("note"),It("Click the board to pin a sticky note.")};O("tool-sketch").onclick=()=>{bn("sketch"),It("Draw a box, diamond or oval to add a shape, or a line between two components to connect them.")};O("tool-connect").onclick=()=>{bn("connect"),It("Choose a source, then a target. Or drag a port dot to another component.")};O("iso").onclick=()=>{He.setView("isometric"),O("iso").setAttribute("aria-pressed","true"),O("top").setAttribute("aria-pressed","false")};O("top").onclick=()=>{He.setView("top"),O("iso").setAttribute("aria-pressed","false"),O("top").setAttribute("aria-pressed","true")};for(const i of["fit","tool-fit"])O(i).onclick=()=>He.fit();O("zoom-in").onclick=()=>He.zoomBy(1.2);O("zoom-out").onclick=()=>He.zoomBy(1/1.2);O("help").onclick=()=>{const i=O("help-panel");i.hidden=!i.hidden,O("help").setAttribute("aria-expanded",String(!i.hidden))};O("tool-edit").onclick=()=>{ce.selected?mc({kind:"node",id:ce.selected}):ce.selectedEdge&&mc({kind:"edge",id:ce.selectedEdge})};function Yc(){if(ce.selectedEdge){fc({type:"graph",label:"Delete connection",edges:[{id:ce.selectedEdge,value:null}]},[]);return}ce.selectedIds.size&&(fc(Uh(ce.current,ce.selectedIds),[]),It("Selection deleted"))}O("delete").onclick=Yc;function _r(i){He.finishInteraction();const e=i?ce.history.redo():ce.history.undo();if(!e)return;const t=ce.current!==ce.history.document;wr(()=>{t&&(ce.current=ce.history.document,ce.diagramTrail=ce.current===ce.project?[]:[ce.project],He.load(ce.current),He.fit());const n=[...ce.selectedIds],s=ce.selectedEdge;e.type==="move"?t||He.refreshPosition(e.id):(t||He.load(ce.current),He.selectMany(n.filter(r=>ce.current.nodes.some(o=>o.id===r))),s&&ce.current.edges.some(r=>r.id===s)&&He.selectEdge(s))}),Gi(),Bi(),It(`${i?"Redid":"Undid"} ${e.type}`)}O("undo").onclick=()=>_r(!1);O("redo").onclick=()=>_r(!0);function fc(i,e=[...ce.selectedIds]){He.finishInteraction();const t=ce.selectedEdge;ce.history.execute(i)&&(wr(()=>{He.load(ce.current),He.selectMany(e),!e.length&&t&&ce.current.edges.some(n=>n.id===t)&&He.selectEdge(t)}),Gi(),Bi(),It(i.type==="graph"?i.label:`Updated ${i.type}`))}const YS=Tg({scene:He,notify:It,isRecording:()=>ce.recording,layersVisible:()=>ce.layersVisible,showLayers:$S,components:{isOpen:Li.isOpen,open:()=>Li.show(!0),step:Li.step,addHighlighted:Li.addHighlighted},selectTool:()=>bn("select"),actions:{deselect:()=>{He.journeyPlaying&&He.stopJourney(),He.cancelInteraction(),bn("select"),He.select(void 0)},"tool-select":()=>bn("select"),"tool-pan":()=>bn("pan"),"tool-add":()=>jc(!0),undo:()=>_r(!1),redo:()=>_r(!0),delete:Yc,"zoom-in":()=>He.zoomBy(1.2),"zoom-out":()=>He.zoomBy(1/1.2),fit:()=>He.fit(),journey:lp}}),pc=fm(On,op.routeActions),Zc=kS(On,(i,e)=>pc.placeAnnotation("text",i,e));function mc(i,e=!1){Zc.open(i,e)}const ZS=Qm(On);function lp(){ZS.toggleJourney()}const gc=eg(On);ap=!0;function JS(){const i=O("diagram-path");if(i.replaceChildren(),ce.current===ce.project)return;const e=document.createElement("button");e.textContent=`⌂ ${ce.project.title}`,e.onclick=()=>vc(ce.project,!0);const t=document.createElement("button");t.textContent="← Back",t.onclick=()=>{const s=ce.diagramTrail.pop();s&&vc(s,!0)};const n=document.createElement("span");n.textContent=ce.current.title,i.append(e,t,n)}function vc(i,e=!1){i!==ce.current&&(He.finishInteraction(),Zc.close(!0),He.stopJourney(),!e&&i!==ce.current&&ce.diagramTrail.push(ce.current),ce.diagramTrail.length>100&&ce.diagramTrail.shift(),i===ce.project&&(ce.diagramTrail=[]),ce.current=i,ce.history.document=i,ce.selected=void 0,ce.selectedEdge=void 0,ce.selectedIds.clear(),ce.checkedJourney=void 0,wr(()=>He.load(ce.current)),He.fit(),Gi(),Bi(),It(`Opened ${i.title}`))}O("snap").onclick=()=>{He.snapping=!He.snapping,O("snap").setAttribute("aria-pressed",String(He.snapping))};ag(On,{setTheme:XS,copyImage:qc.copyImage,populateComponents:Li.populate,align:pc.align,alignments:pc.alignments,closeSettings:()=>YS.showSettings(!1),toggleLanes:gc.toggle,swapLaneDirection:gc.swapDirection});window.addEventListener("beforeunload",i=>{He.finishInteraction(),ce.dirty&&i.preventDefault()});window.addEventListener("pagehide",()=>He.dispose(),{once:!0});Li.populate();Gi();WS();He.fit();It(il()?"Offline · Ready":"Browser workspace · Saving downloads a copy");qc.start().catch(i=>It(`Startup check failed: ${String(i)}`));export{tf as D,Zh as a,yh as b,KS as c,Ks as d,qw as e,ys as f,nm as g,wh as h,Wo as i,ne as j,Ro as k,Tm as l,rm as m,Fh as n,Jf as o,Oh as p,tg as q,Wa as r,sm as s,om as u,Cd as v,zt as w};
