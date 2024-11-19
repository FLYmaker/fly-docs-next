"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[29e3],{79988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index","title":"Introduction","description":"This document is in the process of migration. Please visit the old documentation before it is completed.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/index.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-SB2040-PRO-V3","permalink":"/fly-docs-next/en/docs/category/fly-sb2040-pro-v3"},"next":{"title":"Onboard DIP Switch Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/dip_switch"}}');var r=n(86070),s=n(15658),l=n(63436);const d={sidebar_position:1,sidebar_label:"Introduction"},c="Introduction",o={},a=[{value:"1.1 Product Features",id:"11-product-features",level:2},{value:"1.2 New Features",id:"12-new-features",level:2},{value:"1.3 Product Specifications",id:"13-product-specifications",level:2}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["This document is in the process of migration. Please visit the ",(0,r.jsx)(t.a,{href:"https://mellow.klipper.cn/#/",children:"old documentation"})," before it is completed."]})}),"\n",(0,r.jsx)(t.h1,{id:"1-product-introduction",children:"1. Product Introduction"}),"\n",(0,r.jsx)(t.p,{children:"FLY SB2040 PRO V3 is a tool board launched by Guangzhou Melun Electronic Technology Co., Ltd. for the VORON Stealthburner print head. Using this tool board, four wires can replace the complex wiring between the motherboard and the print head, optimizing the layout. SB2040 is suitable for stealthburner and afterburner, integrating CAN transceiver, RS232 transceiver, USB port, TMC2240 driver, LIS2DW accelerometer, three controllable fans, and other functions. This tool board is suitable for Klipper and RRF firmware."}),"\n",(0,r.jsx)(l.A,{image:n(30566).A,size:"100%",align:"center"}),"\n",(0,r.jsx)(t.h2,{id:"11-product-features",children:"1.1 Product Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Reserved Boot button, users can enter Boot mode to update firmware via TypeC"}),"\n",(0,r.jsx)(t.li,{children:"Supports Klipper firmware and RRF firmware"}),"\n",(0,r.jsx)(t.li,{children:"Supports CAN mode, RS232 mode, and RRF CAN mode"}),"\n",(0,r.jsx)(t.li,{children:"In RS232 mode, it has higher transmission rate and stronger stability. In CAN mode, it supports CAN expansion with reserved CAN expansion interface"}),"\n",(0,r.jsx)(t.li,{children:"Temperature sensor support: Onboard MAX31865 chip, compatible with PT100 and PT1000 temperature sensors"}),"\n",(0,r.jsx)(t.li,{children:"Onboard LIS2DW accelerometer and LDC1612 sensor"}),"\n",(0,r.jsx)(t.li,{children:"Reserved RGB interface, onboard TMC2240 driver, supports various leveling sensors such as klicky, Voron Tap, PL08n, etc."}),"\n",(0,r.jsx)(t.li,{children:"Supports 12-24V voltage, 15A current input, larger heating rod port, rated current 10A"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"12-new-features",children:"1.2 New Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Supports switching between Klipper CAN mode, RS232 mode, and RRF CAN mode"}),"\n",(0,r.jsx)(t.li,{children:"Added RS232 mode, which has higher transmission rate and stronger stability, making debugging simpler"}),"\n",(0,r.jsx)(t.li,{children:"Added RRF CAN mode, which can switch to RRF tool board, enhancing applicability"}),"\n",(0,r.jsx)(t.li,{children:"Added CAN expansion interface, facilitating expansion of CAN devices"}),"\n",(0,r.jsx)(t.li,{children:"Added terminal resistor DIP switch, the 120R terminal resistor can be selected via DIP switch, no need for jumpers"}),"\n",(0,r.jsx)(t.li,{children:"Added 1-meter power/signal connection cable, the connection cable uses twisted design, providing stronger interference resistance"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"13-product-specifications",children:"1.3 Product Specifications"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"MCU: Raspberry Pi rp2040, Dual-core ARM Cortex-M0+ @ 133MHz"}),"\n",(0,r.jsx)(t.li,{children:"Connection interface uses XT30 (2+2) connector supporting 15A current, peak 30A"}),"\n",(0,r.jsx)(t.li,{children:"Firmware: Reprap/Klipper"}),"\n",(0,r.jsx)(t.li,{children:"Input voltage: DC12V-24V"}),"\n",(0,r.jsx)(t.li,{children:"Logic voltage: DC3.3V"}),"\n",(0,r.jsx)(t.li,{children:"Onboard sensors: LIS2DW and optional ldc1612 and max31865"}),"\n",(0,r.jsx)(t.li,{children:"Heating rod interface: Heating rod (HEAT0)"}),"\n",(0,r.jsx)(t.li,{children:"Expansion interfaces: RGB, EndStop, PT100/PT1000, XH2.54-2P CAN port"}),"\n",(0,r.jsx)(t.li,{children:"Fan interfaces: One DC fan, two DC fans or PWM fans"}),"\n",(0,r.jsx)(t.li,{children:"Motor driver: Onboard TMC2240"}),"\n",(0,r.jsx)(t.li,{children:"Temperature sensor: One 100K NTC or PT1000 (TH0), one PT100/PT1000 selectable"}),"\n"]}),"\n",(0,r.jsx)(t.h1,{id:"4-product-categories",children:"4. Product Categories"}),"\n",(0,r.jsxs)(t.p,{children:["RRF tutorial link ",(0,r.jsx)(t.a,{href:"https://teamgloomy.github.io/fly_sb2040_pro_max_v3_general.html",children:"RRF"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"SB2040"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Plus V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Max V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Pro V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Pro Plus V3"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Pro Max V3"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Drive"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2209-green",alt:"alt text",title:"TMC2209"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2209-green",alt:"alt text",title:"TMC2209"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"![alt text][TMC2029]"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:(0,r.jsx)(t.img,{src:"https://img.shields.io/badge/-TMC2240-blue",alt:"alt text",title:"TMC2240"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper CANBus"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Klipper RS232"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"RRF CANBus"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LIS2DW"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"MAX31865"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"LDC1612"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u274c"}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]})]})]})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},30566:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/sb2040-041a09adc83452e4808b0b84b1732e63.png"}}]);