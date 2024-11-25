"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["39847"],{38918:function(e,r,n){n.r(r),n.d(r,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"DebugDoc/faq/tmc","title":"TMC Error Related","description":"Unable to read tmc uart \u2018stepperx\u2019 register IFCNT or Unable to read tmc spi \u2018stepperx\u2019 register register","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/faq/tmc.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/tmc","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/tmc","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/tmc.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"Common Debug Commands","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/klipper-directives"},"next":{"title":"CAN Issue Collection","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/klipper_can"}}'),s=n("52676"),i=n("79938");let o={sidebar_position:3},l="TMC Error Related",c={},d=[{value:"<code>Unable to read tmc uart \u2018stepper_x\u2019 register IFCNT</code> or <code>Unable to read tmc spi \u2018stepper_x\u2019 register register</code>",id:"unable-to-read-tmc-uart-stepper_x-register-ifcnt-or-unable-to-read-tmc-spi-stepper_x-register-register",level:2},{value:"<code>TMC XXXX reports error: GSTAT: 00000001 reset=1(Reset)</code>",id:"tmc-xxxx-reports-error-gstat-00000001-reset1reset",level:2},{value:"<code>TMC &#39;extruder&#39; reports error: DRV_STATUS: c00d0103 otpw=1(OvertempWarning!)</code>",id:"tmc-extruder-reports-error-drv_status-c00d0103-otpw1overtempwarning",level:2},{value:"<code>TMC \u2018extruder\u2019 reports error: DRV_STATUS: 601f1000 s2vsa=1(ShortToSupply_A!) csactual=31 ola=1(OpenLoad_A!) olb=1(OpenLoad_B!)</code>",id:"tmc-extruder-reports-error-drv_status-601f1000-s2vsa1shorttosupply_a-csactual31-ola1openload_a-olb1openload_b",level:2},{value:"<code>TMC &#39;extruder&#39; reports error: DRV_STATUS: 00190060 s2vsb=1(ShortToSupply_B!) ola=1(0penLoad_A!) cs_actual-25</code>",id:"tmc-extruder-reports-error-drv_status-00190060-s2vsb1shorttosupply_b-ola10penload_a-cs_actual-25",level:2}];function a(e){let r={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components},{ImageView:t}=r;return!t&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"tmc-error-related",children:"TMC Error Related"})}),"\n",(0,s.jsxs)(r.h2,{id:"unable-to-read-tmc-uart-stepper_x-register-ifcnt-or-unable-to-read-tmc-spi-stepper_x-register-register",children:[(0,s.jsx)(r.code,{children:"Unable to read tmc uart \u2018stepper_x\u2019 register IFCNT"})," or ",(0,s.jsx)(r.code,{children:"Unable to read tmc spi \u2018stepper_x\u2019 register register"})]}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Details"}),"\n",(0,s.jsx)(t,{image:n(89713).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Cause"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Unable to communicate with the driver"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Main Solution Methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Check if the UART pin configuration for the corresponding driver is correct"}),"\n",(0,s.jsx)(r.li,{children:"Check if the UART jumpers are correctly set"}),"\n",(0,s.jsx)(r.li,{children:"Ensure that the driver is powered"}),"\n",(0,s.jsx)(r.li,{children:"Replace the driver or reconfigure the driver port"}),"\n",(0,s.jsx)(r.li,{children:"If it's a driver from another manufacturer, you need to determine if the driver's UART pin is consistent with FLY's. The FLY driver's UART pin is the fourth pin from the top on the left side"}),"\n"]}),"\n",(0,s.jsx)(t,{image:n(77112).Z,size:"80%",align:"center"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"If the driver's UART pin is on the fifth pin, you can solve it using the following jumper settings"}),"\n"]}),"\n",(0,s.jsx)(t,{image:n(86806).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tmc-xxxx-reports-error-gstat-00000001-reset1reset",children:(0,s.jsx)(r.code,{children:"TMC XXXX reports error: GSTAT: 00000001 reset=1(Reset)"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Details"}),"\n",(0,s.jsx)(t,{image:n(92689).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Cause"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Driver reset"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Main Solution Methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Poor power connection"}),"\n",(0,s.jsx)(r.li,{children:"Motor disconnected"}),"\n",(0,s.jsx)(r.li,{children:"Connect the motor's metal casing with the motherboard or tool board's GND together"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tmc-extruder-reports-error-drv_status-c00d0103-otpw1overtempwarning",children:(0,s.jsx)(r.code,{children:"TMC 'extruder' reports error: DRV_STATUS: c00d0103 otpw=1(OvertempWarning!)"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Details"}),"\n",(0,s.jsx)(t,{image:n(6724).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Cause"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Driver overheating!"}),"\n",(0,s.jsx)(r.li,{children:"Not motor overheating!"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Main Solution Methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Reduce operating current"}),"\n",(0,s.jsx)(r.li,{children:"Remove holding current"}),"\n",(0,s.jsx)(r.li,{children:"Check if the driver's sampling resistor is correct"}),"\n",(0,s.jsx)(r.li,{children:"Improve driver cooling, such as adding a fan"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tmc-extruder-reports-error-drv_status-601f1000-s2vsa1shorttosupply_a-csactual31-ola1openload_a-olb1openload_b",children:(0,s.jsx)(r.code,{children:"TMC \u2018extruder\u2019 reports error: DRV_STATUS: 601f1000 s2vsa=1(ShortToSupply_A!) csactual=31 ola=1(OpenLoad_A!) olb=1(OpenLoad_B!)"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Details"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"No image available"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Cause"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Incorrect driver current check"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Main Solution Methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Check if the resistance values of the two sets of coils in the stepper motor are consistent"}),"\n",(0,s.jsx)(r.li,{children:"Check if the wires inside the stepper motor or components are loose or short-circuited"}),"\n",(0,s.jsx)(r.li,{children:"Turn off silent mode"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"tmc-extruder-reports-error-drv_status-00190060-s2vsb1shorttosupply_b-ola10penload_a-cs_actual-25",children:(0,s.jsx)(r.code,{children:"TMC 'extruder' reports error: DRV_STATUS: 00190060 s2vsb=1(ShortToSupply_B!) ola=1(0penLoad_A!) cs_actual-25"})}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Details"}),"\n",(0,s.jsx)(t,{image:n(35332).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Error Cause"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Wrong wiring or issue with the motor itself"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Main Solution Methods"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Check if the resistance values of the two sets of coils in the stepper motor are consistent"}),"\n",(0,s.jsx)(r.li,{children:"Check your stepper motor and connections"}),"\n",(0,s.jsx)(r.li,{children:"Check the motor wiring sequence, whether one group is on the left and the other on the right"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},77112:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/2209uart-b0f2cf8cbfb6ec85e2acf1b41bc1d5ec.webp"},35332:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/ab-86b9eb14814b0ed2c040b60b3d692836.webp"},6724:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/overtemperror-b506ea7948fbd68b2ce953e092e1295c.webp"},92689:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/reset-bf52a205a15c1bcde0fdb1f80d31202e.webp"},89713:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/uart-c89c46087f7190f6adebd1dc47a630ce.webp"},86806:function(e,r,n){n.d(r,{Z:function(){return t}});let t=n.p+"assets/images/uart1-4e6955a86b9ff122c9e72b4b4397bdf1.webp"},79938:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var t=n(75271);let s={},i=t.createContext(s);function o(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);