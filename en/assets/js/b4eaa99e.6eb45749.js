"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["64667"],{75120:function(e,n,i){i.d(n,{ZP:function(){return s},d$:function(){return a}});var t=i(52676),r=i(79938);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,t.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,t.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,t.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CAN connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["RS232 connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["USB connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},37218:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index","title":"index","description":"* SB2040 PRO V3 comes pre-flashed with Katapult firmware for CAN connection, with a speed of 1M","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Flashing Guide"},"sidebar":"tutorialSidebar","previous":{"title":"SB2040 PRO V3 \u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/sb2040-pro-v3-\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN Firmware Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro-v3/flash/can"}}'),r=i("52676"),a=i("79938"),o=i("75120");let s={sidebar_position:1,sidebar_label:"Firmware Flashing Guide"},l="Firmware Flashing Guide",d={},c=[{value:"How to Determine Which Firmware You Need",id:"how-to-determine-which-firmware-you-need",level:2},{value:"Katapult Firmware Guide",id:"katapult-firmware-guide",level:2},...o.d$];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:t,ImageView:s}=n;return!t&&f("Button",!0),!s&&f("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO V3 comes pre-flashed with Katapult firmware for CAN connection, with a speed of 1M"}),"\n",(0,r.jsx)(n.li,{children:"SB2040 PRO V3 CAN connection Katapult firmware supports speeds of 500K and 1M, which can be flashed as needed"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./bl",children:"Katapult Firmware Flashing"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-flashing-guide",children:"Firmware Flashing Guide"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO V3 can connect to the host computer using either RS232 or CAN connections"}),"\n",(0,r.jsxs)(n.li,{children:["Both RS232 and CAN require the use of ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," for connection"]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable style"]}),"\n"]}),"\n",(0,r.jsx)(s,{image:i(98043).Z,size:"80%",align:"left"}),"\n",(0,r.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The mainboard firmware needs to be flashed with Klipper through Katapult"}),"\n",(0,r.jsx)(n.li,{children:"If you are sure the mainboard already has Katapult flashed, there's no need for the final Katapult firmware flashing step, which is just a precaution in case the Katapult firmware on the mainboard wasn't successfully flashed"}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press the reset button twice to see if an LED on the mainboard starts blinking, indicating that the mainboard has entered Katapult firmware"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"how-to-determine-which-firmware-you-need",children:"How to Determine Which Firmware You Need"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040 PRO V3 can connect to the host computer in the following ways"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./can",children:"CAN Firmware Flashing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Benefits: If ",(0,r.jsx)(n.code,{children:"Katapult"})," firmware is flashed, firmware updates can be done without touching the mainboard, and bus connection is supported"]}),"\n",(0,r.jsxs)(n.li,{children:["Drawbacks: May cause homing timeouts or other errors when used with ",(0,r.jsx)(n.code,{children:"KlipperScreen"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Note: If you need to use CAN, ensure the host computer supports CAN, and you need to pair it with UTOC or a mainboard with bridge firmware"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"./rs232",children:"RS232 Firmware Flashing"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Benefits: No special software required, reliable communication, stable"}),"\n",(0,r.jsxs)(n.li,{children:["Drawbacks: Firmware updates require manual DFU mode or double-clicking RST to enter ",(0,r.jsx)(n.code,{children:"Katapult"})," for updates"]}),"\n",(0,r.jsx)(n.li,{children:"Note: Requires G2T or UTOR for use"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-guide",children:"Katapult Firmware Guide"}),"\n",(0,r.jsx)(o.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98043:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return o}});var t=i(75271);let r={},a=t.createContext(r);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);