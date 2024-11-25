"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["24498"],{39907:function(e,o,t){t.r(o),t.d(o,{metadata:()=>n,contentTitle:()=>i,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>d});var n=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","title":"Solutions for Driver Undervoltage","description":"Method One","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/undervoltage.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732157386000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Solutions for Driver Undervoltage"},"sidebar":"tutorialSidebar","previous":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/adxl"},"next":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/schematic"}}'),r=t("52676"),l=t("79938");let d={sidebar_position:6,sidebar_label:"Solutions for Driver Undervoltage"},i="Solutions for Driver Undervoltage",s={},c=[{value:"Method One",id:"method-one",level:2},{value:"Method Two",id:"method-two",level:2}];function a(e){let o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"solutions-for-driver-undervoltage",children:"Solutions for Driver Undervoltage"})}),"\n",(0,r.jsx)(o.h2,{id:"method-one",children:"Method One"}),"\n",(0,r.jsx)(o.admonition,{type:"danger",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Replace the power supply"}),"\n",(0,r.jsx)(o.li,{children:"Add a power filter"}),"\n",(0,r.jsx)(o.li,{children:"Replace the motor for testing"}),"\n",(0,r.jsx)(o.li,{children:"Connect the motor housing to the ground of the tool board"}),"\n",(0,r.jsxs)(o.li,{children:["Add ",(0,r.jsx)(o.code,{children:"driver_TPFD: 0"})," to the extruder driver configuration"]}),"\n"]})}),"\n",(0,r.jsx)(o.h2,{id:"method-two",children:"Method Two"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Connect via SSH to the host machine"}),"\n",(0,r.jsx)(o.li,{children:"Enter the following command"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"sed -i 's/\"uv_cp\":                    0x01 << 2/#&/' ~/klipper/klippy/extras/tmc2240.py\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"danger",children:(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"This step might be reverted after updating Klipper"}),"\n"]})})]})}function u(e={}){let{wrapper:o}={...(0,l.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79938:function(e,o,t){t.d(o,{Z:function(){return i},a:function(){return d}});var n=t(75271);let r={},l=n.createContext(r);function d(e){let o=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(l.Provider,{value:o},e.children)}}}]);