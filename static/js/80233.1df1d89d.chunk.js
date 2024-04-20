"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[80233],{60363:(e,t,o)=>{o.d(t,{k:()=>d});var n=o(65606),i=o(95725),s=(o(72791),o(17862)),a=o(90362),l=o(50472),r=o(80184);const d=e=>{const t=!e.isDebugging&&(0,r.jsx)(l.h,{handleEditorEval:e.handleEditorEval,isEntrypointFileDefined:e.isEntrypointFileDefined,color:e.isRunning?"#39FF14":void 0,className:e.isRunning?"WaitingCursor":void 0},"run"),o=e.isEditorAutorun&&(0,r.jsx)(s.Z,{label:"Auto",icon:i.d.AUTOMATIC_UPDATES}),d=!e.pauseDisabled&&e.isRunning&&!e.isDebugging&&(0,r.jsx)(s.Z,{label:"Pause",icon:i.d.STOP,onClick:e.handleDebuggerPause}),c=!e.isRunning&&e.isDebugging&&(0,r.jsx)(s.Z,{label:"Resume",icon:i.d.CHEVRON_RIGHT,onClick:e.handleDebuggerResume}),u=t=>e.isDebugging&&(0,r.jsx)(s.Z,{label:t,icon:i.d.STOP,onClick:e.handleDebuggerReset}),{isMobileBreakpoint:m}=(0,a.Fs)();return m?(0,r.jsxs)(r.Fragment,{children:[false,d,c,u("Stop")]}):(0,r.jsxs)(r.Fragment,{children:[!e.autorunDisabled&&(0,r.jsx)("div",{className:"Switch",children:(0,r.jsx)(n.rs,{label:"",checked:e.isEditorAutorun,onChange:e.handleToggleEditorAutorun})}),o||t,d,c,u("Stop Debugger")]})}},60054:(e,t,o)=>{o.d(t,{b:()=>p});var n=o(44805),i=o(20535),s=o(22986),a=o(63978),l=o(95725),r=o(46576),d=o(42543),c=(o(72791),o(95134)),u=o(90362),m=o(80184);const b=({itemsParentRef:e,renderItem:t,items:o})=>{const i=o.filter((({variant:e})=>e===d.Variant.DEFAULT));return(0,m.jsx)(n.v,{ulRef:e,style:{display:"flex",flexDirection:"column"},children:i.map(t)})},g=e=>(t,{handleClick:o})=>{const n=e&&t.chapter===d.Chapter.SOURCE_1,a=n?"Folder mode makes use of lists which are not available in Source 1. To switch to Source 1, disable Folder mode.":void 0;return(0,m.jsx)(i.u,{content:a,disabled:void 0===a,children:(0,m.jsx)(s.s,{onClick:o,text:t.displayName,disabled:n})},t.displayName)},h=r.P.ofType(),p=({isFolderModeEnabled:e,sourceChapter:t,sourceVariant:o,handleChapterSelect:n=(()=>{}),disabled:i=!1})=>{const s=(0,u.ix)((e=>e.playground.languageConfig.mainLanguage)),r=[...c.Vf,...c.ik,...c.YB,...c.RQ];return(0,m.jsx)(h,{items:r.filter((({mainLanguage:e})=>e===s)),onItemSelect:n,itemRenderer:g(e),itemListRenderer:b,filterable:!1,disabled:i,children:(0,m.jsx)(a.z,{minimal:!0,text:"Go",rightIcon:i?null:l.d.DOUBLE_CARET_VERTICAL,disabled:i})})}},45686:(e,t,o)=>{o.d(t,{Z:()=>I});var n=o(55048),i=o(95725),s=o(72791),a=o(33107),l=o(14635),r=o(42441),d=o(55360),c=o(84131),u=o(39215),m=o(59962),b=o.n(m),g=o(1324),h=o(80184);const p=e=>(0,h.jsx)(b(),{axis:"y",handle:"#dragHandle",position:e.position,bounds:{top:-500,left:0,right:0,bottom:0},onDrag:e.onDrag,disabled:e.disabled,children:(0,h.jsxs)("div",{className:"mobile-draggable",children:[e.disabled?(0,h.jsx)("div",{className:"handle disabled",id:"draghandle",children:["1","2","3"].map((e=>(0,h.jsx)("div",{className:"circle"},e)))}):(0,h.jsx)("div",{className:"handle enabled",id:"dragHandle",children:["1","2","3"].map((e=>(0,h.jsx)("div",{className:"circle"},e)))}),(0,h.jsx)("div",{className:"REPL-content",children:(0,h.jsx)(g.Z,{...e.replProps})})]})});var y=o(81495),v=o.n(y);const x=e=>{const[t,o]=s.useState(!1),[n,i]=s.useState("\u1438"),[a,l]=s.useState({x:0,y:0}),[r,d]=s.useState(null),[c,u]=s.useState(""),[m,g]=s.useState({x:0,y:0,time:0}),p=()=>{if(!r)return;const e=r;"{arrowleft}"===c?e.navigateLeft():"{arrowright}"===c?e.navigateRight():"{bksp}"===c?e.remove("left"):"{tab}"===c?e.insert("\t"):["+","-","*","/","%","=>","===","&&","||"].includes(c)?e.insert(" "+c+" "):e.insert(c)},y={onKeyPress:t=>{e.targetKeyboardInput&&(d(e.targetKeyboardInput),u(t))},disableButtonHold:!0,baseClass:"simple-keyboard-shortcut",layout:{default:["{ } ( ) \" ' _ => ; {tab} && || ! < > = === + - * / % // {arrowleft} {arrowright}"]},buttonTheme:[{class:"mobile-navigation",buttons:"{arrowleft} {arrowright}"},{class:"big-buttons",buttons:"=== &&"}],theme:"hg-theme-default",preventMouseDownDefault:!0,disableCaretPositioning:!1};return(0,h.jsx)(b(),{axis:"y",handle:"#floating-dragHandle",position:a,bounds:{top:-200,left:0,right:0,bottom:200},onDrag:(e,t)=>{l(t)},children:(0,h.jsxs)("div",{className:"mobile-floating-keyboard",id:"mobile-floating-toggle",children:[(0,h.jsx)("button",{className:"mobile-floating-toggle",onClick:e=>{t?(document.getElementById("mobile-keyboard-toggle").style.setProperty("display","none"),document.getElementById("mobile-floating-toggle").style.setProperty("width","42px"),document.getElementById("mobile-floating-toggle").style.setProperty("opacity","0.6"),i("\u1438"),o(!1)):(document.getElementById("mobile-keyboard-toggle").style.setProperty("display","flex"),document.getElementById("mobile-floating-toggle").style.setProperty("width","99%"),document.getElementById("mobile-floating-toggle").style.setProperty("opacity","1"),i("\u1433"),o(!0))},onMouseDown:e=>{e.preventDefault()},children:n}),(0,h.jsx)("div",{className:"mobile-keyboard-toggle-container",id:"mobile-keyboard-toggle",children:(0,h.jsx)("div",{className:"mobile-keyboard-container",onTouchStart:e=>{const t=e.touches[0];g({x:t.clientX,y:t.clientY,time:Date.now()})},onTouchEnd:e=>{const t=e.changedTouches[0],o=t.clientX-m.x,n=t.clientY-m.y,i=Date.now()-m.time;Math.abs(o)<30&&Math.abs(n)<30&&i<200&&p()},children:(0,h.jsx)(v(),{...y})})}),(0,h.jsx)("div",{id:"floating-dragHandle",children:":"})]})})};var E=o(20535),P=o(77640),f=o(56009),j=o(37753),C=o(39997),S=o(41418),T=o.n(S),w=o(97767),_=o(5973),D=o(60879),R=o(78096),k=o(63978);const B=e=>{const t=(0,h.jsxs)("div",{className:"mobile-control-bar",children:[e.editorButtons,e.flowButtons,e.editingWorkspaceButtons]});return(0,h.jsx)(R.J,{content:t,autoFocus:!1,children:(0,h.jsx)(k.z,{minimal:!0,icon:i.d.COG,className:"mobile-control-bar-button"})})},N=({renderActiveTabPanelOnly:e,mobileControlBarProps:t,onChange:o,selectedTabId:n,...i})=>{const s=/iPhone|iPod/.test(navigator.platform),a=(e,t)=>e.map((e=>((e,o)=>{if(!e.body)return;const n=o?{...e.body,props:{...e.body.props,workspaceLocation:o}}:e.body;return(0,h.jsx)("div",{className:e.id===t?"mobile-selected-panel":"mobile-unselected-panel",children:n},e.id)})(e,i.workspaceLocation)));return(0,h.jsx)(_.Z,{...i,children:({tabs:n,selectedTab:l})=>(0,h.jsxs)(h.Fragment,{children:[a(n,l),(0,h.jsx)("div",{className:"mobile-tabs-container",children:(0,h.jsxs)(j.mQ,{id:"mobile-side-content",onChange:o,renderActiveTabPanelOnly:e,selectedTabId:l,className:T()(C.Pyr,"mobile-side-content"),children:[n.map((e=>((e,t)=>{const o=void 0===e.id?e.label:e.id,n=(0,h.jsx)(E.u,{content:e.label,onOpening:()=>{var e;t&&(null===(e=document.getElementById((0,w.YX)(o)))||void 0===e||e.click())},children:(0,h.jsx)("div",{className:"side-content-tooltip",id:(0,w.YX)(o),children:(0,h.jsx)(P.I,{icon:e.iconName,iconSize:20})})});return(0,h.jsx)(f.O,{id:o,title:n,disabled:e.disabled,className:"side-content-tab"},o)})(e,s))),("playground"===i.workspaceLocation||"sicp"===i.workspaceLocation)&&(0,h.jsx)(B,{...t})]})})]})})},A=s.memo(N,D.t),I=e=>{var t;const o=/Android/.test(navigator.userAgent),i=(0,a.ac)({orientation:"portrait"}),[m,b]=(0,s.useState)({x:0,y:0}),[g,y]=(0,s.useState)(!1);n.$.onlyShowFocusOnTabs(),(0,s.useEffect)((()=>("assessment"===e.mobileSideContentProps.workspaceLocation&&document.documentElement.style.setProperty("--mobile-panel-height","calc(100% - 100px - 1.1rem)"),()=>{document.documentElement.style.setProperty("--mobile-panel-height","calc(100% - 70px)")})),[]),(0,s.useEffect)((()=>{if(i&&o){document.documentElement.style.setProperty("overflow","auto");document.querySelector("meta[name=viewport]").setAttribute("content","height="+window.innerHeight+", width=device-width")}return()=>{if(o){document.documentElement.style.setProperty("overflow","hidden");document.querySelector("meta[name=viewport]").setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0")}C()}}),[i,o]);const[v,E]=(0,s.useState)(null),P=()=>E(null),f=e=>({...e,onFocus:(t,o)=>{var n;null===(n=e.onFocus)||void 0===n||n.call(e,t,o),o&&E(o)},onBlur:(t,o)=>{var n;null===(n=e.onBlur)||void 0===n||n.call(e,t,o),P()}}),j=e=>{document.documentElement.style.setProperty("--mobile-repl-height",Math.max(-e,0)+"px"),b({x:0,y:e})},C=()=>{b({x:0,y:0}),document.documentElement.style.setProperty("--mobile-repl-height","0px")},S=null===(t=e.editorContainerProps)||void 0===t?void 0:t.handleEditorEval,T=(0,s.useCallback)(((e,t)=>{e===u.B_.mobileEditorRun&&(null===S||void 0===S||S()),e===u.B_.mobileEditorRun&&t!==u.B_.substVisualizer&&t!==u.B_.cseMachine&&t!==u.B_.autograder&&t!==u.B_.testcases?j(-300):C(),e===u.B_.folder||e===u.B_.substVisualizer||e===u.B_.cseMachine||t===u.B_.substVisualizer&&e===u.B_.mobileEditorRun||t===u.B_.cseMachine&&e===u.B_.mobileEditorRun?y(!0):y(!1)}),[S]),w=e.mobileSideContentProps.onChange,_=(0,s.useCallback)(((e,t,o)=>{w(e,t,o),T(e,t)}),[T,w]),D=e.sideBarProps.tabs.filter((e=>void 0!==e.id)),R=(0,s.useCallback)((()=>{var t,o,n,i;return{...e.mobileSideContentProps,onChange:_,tabs:{beforeDynamicTabs:[...D,O,...null!==(t=null===(o=e.mobileSideContentProps.tabs)||void 0===o?void 0:o.beforeDynamicTabs)&&void 0!==t?t:[]],afterDynamicTabs:[...null!==(n=null===(i=e.mobileSideContentProps.tabs)||void 0===i?void 0:i.afterDynamicTabs)&&void 0!==n?n:[],F]}}}),[_,e.mobileSideContentProps,D]),k="assessment"===e.mobileSideContentProps.workspaceLocation;return(0,h.jsxs)("div",{className:"workspace mobile-workspace",children:[(0,h.jsx)(c.N,{when:!!e.hasUnsavedChanges,message:"You have changes that may not be saved. Are you sure you want to leave?"}),k&&(0,h.jsx)(l.Z,{...e.mobileSideContentProps.mobileControlBarProps}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"mobile-editor-panel",children:(()=>{if(e.editorContainerProps){const t={...e.editorContainerProps};return"sourcecast"===t.editorVariant&&(t.setDraggableReplPosition=()=>j(-100)),(0,h.jsx)(r.Z,{...f(e.editorContainerProps)})}return(0,h.jsx)(d.Z,{...e.mcqProps})})()}),(0,h.jsx)(A,{...R()})]}),(0,h.jsx)(p,{position:m,onDrag:(e,t)=>{document.documentElement.style.setProperty("--mobile-repl-height",Math.max(-t.y,0)+"px"),b(t)},disabled:g,replProps:(e=>({...e,onFocus:t=>{var o;null===(o=e.onFocus)||void 0===o||o.call(e,t),E(t)},onBlur:()=>{var t;null===(t=e.onBlur)||void 0===t||t.call(e),P()}}))(e.replProps)},"repl"),(0,h.jsx)(x,{targetKeyboardInput:v})]})},O={label:"Editor",iconName:i.d.EDIT,body:null,id:u.B_.mobileEditor},F={label:"Run",iconName:i.d.PLAY,body:null,id:u.B_.mobileEditorRun}},18465:(e,t,o)=>{o.d(t,{cM:()=>a,wH:()=>l});var n=o(54261);const i={},s={NODE_ENV:"production",PUBLIC_URL:"https://cs4215-jikun-kaian.github.io",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_PLAYGROUND_ONLY:"TRUE",REACT_APP_ENVIRONMENT:"pages",REACT_APP_VERSION:"aa25005d763d2f950d43bd8cf29af4f149d52f00-2024-04-20T14:03:54+00:00",REACT_APP_SW_EXCLUDE_REGEXES:void 0}.REACT_APP_CADET_LOGGER;function a(e,t){var o;s&&(o={...t,questionId:i[e],sessionId:e},new Promise(((e,t)=>{d().then((n=>{const i=n.transaction([r],"readwrite");i.oncomplete=e,i.onerror=t,i.objectStore(r).add(o)}))})))}function l(e,t){const o=(0,n.Z)();return i[o]=e,a(o,{...t,type:"init",time:Date.now()}),o}const r="logs",d=function(e){let t=null;return()=>t||(t=e(),t)}((()=>new Promise(((e,t)=>{const o=indexedDB.open("evtlogs",1);o.onsuccess=t=>{e(o.result)},o.onerror=e=>{console.error("Failed to get db",e),t(o.error)},o.onupgradeneeded=e=>{(null===e||void 0===e?void 0:e.target).result.createObjectStore(r,{keyPath:"id",autoIncrement:!0})}}))))}}]);
//# sourceMappingURL=80233.1df1d89d.chunk.js.map