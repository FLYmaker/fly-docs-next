"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["69782"],{42634:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>s});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super8/warning","title":"Main Board Precautions","description":"Power Indicator","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super8","slug":"/ProductDoc/MainBoard/fly-super/fly-super8/warning","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Main Board Precautions"},"sidebar":"tutorialSidebar","previous":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8/schematic"},"next":{"title":"FLY-C \u7CFB\u5217\u4E3B\u677F","permalink":"/fly-docs-next/en/docs/category/fly-c-\u7CFB\u5217\u4E3B\u677F"}}'),r=n("52676"),o=n("79938");let s={sidebar_position:8,sidebar_label:"Main Board Precautions"},c="Main Board Precautions",d={},l=[{value:"Power Indicator",id:"power-indicator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Drive",id:"drive",level:2},{value:"Limit Switch Port",id:"limit-switch-port",level:2}];function a(e){let i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:t,ImageView:s}=i;return!t&&u("Button",!0),!s&&u("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"main-board-precautions",children:"Main Board Precautions"})}),"\n",(0,r.jsx)(i.h2,{id:"power-indicator",children:"Power Indicator"}),"\n",(0,r.jsx)(s,{image:n(90434).Z,size:"80%",align:"center"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["When powered only by TYPE-C and not connected to other main board power, at least two lights ",(0,r.jsx)(i.code,{children:"3.3V"})," and ",(0,r.jsx)(i.code,{children:"5V"})," should be on."]}),"\n",(0,r.jsxs)(i.li,{children:["After connecting the main board power, the main board power light should light up ",(0,r.jsx)(i.code,{children:"3.3V"}),", ",(0,r.jsx)(i.code,{children:"5V"}),", and ",(0,r.jsx)(i.code,{children:"12V"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"Only after the drive power 0-2, drive power 3-7, and hotbed power are connected, will the power indicator lights on the lower left of the main board light up normally."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(i.admonition,{title:"Note",type:"danger",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"With no external devices connected (drives, limit switches, 12864, etc.)"}),"\n",(0,r.jsxs)(i.li,{children:["When powered only by TYPE-C, at least two LEDs, ",(0,r.jsx)(i.code,{children:"3.3V"})," and ",(0,r.jsx)(i.code,{children:"5V"}),", should remain constantly on."]}),"\n"]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["If ",(0,r.jsx)(i.code,{children:"3.3V"})," and ",(0,r.jsx)(i.code,{children:"5V"})," do not light up, check the main board's 5V jumper."]}),"\n",(0,r.jsx)(i.li,{children:"If the issue persists after replacing the jumper and confirming that the type-c is supplying power normally, contact customer service for after-sales support."}),"\n",(0,r.jsxs)(i.li,{children:["If one of the lights ",(0,r.jsx)(i.code,{children:"3.3V"}),", ",(0,r.jsx)(i.code,{children:"5V"}),", or ",(0,r.jsx)(i.code,{children:"12V"})," is blinking, it indicates a chip short circuit; contact customer service for after-sales support.","\n",(0,r.jsx)(s,{image:n(99649).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"drive",children:"Drive"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Pay attention to the drive power, which is divided into two circuits: the first circuit powers drives 3-7, and the second circuit powers 0-2."}),"\n",(0,r.jsxs)(i.li,{children:["The main board supports external drives     ",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Wiring and Configuration Guide"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"limit-switch-port",children:"Limit Switch Port"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Except for the last drive port (Drive7), which has an infinite limit switch jumper, all other drive ports have their infinite limit switch directly connected to the limit switch port."}),"\n",(0,r.jsxs)(i.li,{children:["If the limit switch port does not work, you can replace the limit switch port or trim the infinite limit switch foot of the drive.","\n",(0,r.jsx)(s,{image:n(60146).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}function u(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},99649:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/5v-916d0083486c4fe769f9672e0ae6bbb5.webp"},90434:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/power-129fdd9a4eaa9833ca9a9c5bdaa4decb.webp"},60146:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/2209diag-262cd788fbf99f89f3dfc8ec68d68e8c.webp"},79938:function(e,i,n){n.d(i,{Z:function(){return c},a:function(){return s}});var t=n(75271);let r={},o=t.createContext(r);function s(e){let i=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);