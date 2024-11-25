"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["70612"],{15104:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>s,toc:()=>l,frontMatter:()=>d});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d7/warning","title":"Main Board Precautions","description":"Power Indicator","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d7/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d7","slug":"/ProductDoc/MainBoard/fly-d/fly-d7/warning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d7/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d7/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Main Board Precautions"},"sidebar":"tutorialSidebar","previous":{"title":"malin firmware download","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d7/malin"},"next":{"title":"FLY-D8 (F407)","permalink":"/fly-docs-next/en/docs/category/fly-d8-f407"}}'),r=i("52676"),o=i("79938");let d={sidebar_position:10,sidebar_label:"Main Board Precautions"},a="Main Board Precautions",s={},l=[{value:"Power Indicator",id:"power-indicator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Limit Switch Ports",id:"limit-switch-ports",level:2},{value:"Firmware",id:"firmware",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:t,ImageView:d}=n;return!t&&u("Button",!0),!d&&u("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"main-board-precautions",children:"Main Board Precautions"})}),"\n",(0,r.jsx)(n.h2,{id:"power-indicator",children:"Power Indicator"}),"\n",(0,r.jsx)(d,{image:i(84446).Z,size:"80%",align:"center"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When powered only through TYPE-C without connecting other main board power, at least two lights should be on: ",(0,r.jsx)(n.code,{children:"3.3V"})," and ",(0,r.jsx)(n.code,{children:"5V"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["After connecting the main board power, the main board power light should be on for ",(0,r.jsx)(n.code,{children:"3.3V"}),", ",(0,r.jsx)(n.code,{children:"5V"}),", and ",(0,r.jsx)(n.code,{children:"VCC"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Without any external devices (drivers, limit switches, 12864, etc.)"}),"\n",(0,r.jsxs)(n.li,{children:["At least two LEDs, ",(0,r.jsx)(n.code,{children:"3.3V"})," and ",(0,r.jsx)(n.code,{children:"5V"}),", should remain lit when powered only through TYPE-C."]}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If no lights are on, it indicates a short circuit, and you need to contact customer service."}),"\n",(0,r.jsxs)(n.li,{children:["If one of the lights ",(0,r.jsx)(n.code,{children:"3.3V"})," or ",(0,r.jsx)(n.code,{children:"5V"})," is blinking, it also indicates a short circuit, and you need to contact customer service."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"drivers",children:"Drivers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The main board supports external drivers     ",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"limit-switch-ports",children:"Limit Switch Ports"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pay attention to the wiring sequence. For three-wire limit switches, if 5V, GND, and S are connected incorrectly, it may cause damage to the main board."}),"\n",(0,r.jsx)(n.li,{children:"If two wires are directly connected to S and GND, it is fine."}),"\n",(0,r.jsx)(n.li,{children:"For PL08 and other proximity switches, an external diode must be connected to the signal port to reduce the voltage to below 3.3V."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Due to button issues, the tutorial has been updated to use Katapult firmware for firmware flashing."}),"\n",(0,r.jsx)(n.li,{children:"It is recommended to use a computer for flashing Katapult firmware, and then use the Katapult firmware to flash Klipper."}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./flash/bl",children:"BL Flashing"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},84446:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/power-c101032b02814e64e859ceb8a7f57357.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return d}});var t=i(75271);let r={},o=t.createContext(r);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);