"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["36239"],{75120:function(e,n,t){t.d(n,{ZP:function(){return s},d$:function(){return a}});var i=t(52676),r=t(79938);let a=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,i.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},42406:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/index","title":"index","description":"* SHT36 PRO comes with a pre-flashed Katapult firmware for CAN connection at a rate of 1M","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Firmware Burning Instructions"},"sidebar":"tutorialSidebar","previous":{"title":"SHT36 PRO\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/en/docs/category/sht36-pro\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"CAN Firmware Compilation and Flashing","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/can"}}'),r=t("52676"),a=t("79938"),o=t("75120");let s={sidebar_position:1,sidebar_label:"Firmware Burning Instructions"},l="Firmware Burning Instructions",c={},d=[{value:"CAN Firmware Compilation",id:"can-firmware-compilation",level:2},{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...o.d$];function h(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:s}=n;return!i&&p("Button",!0),!s&&p("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 PRO comes with a pre-flashed Katapult firmware for CAN connection at a rate of 1M"}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware connected via CAN to SHT36 PRO has rates of 500K and 1M; users can flash it themselves if needed"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Katapult Firmware Burn"}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"firmware-burning-instructions",children:"Firmware Burning Instructions"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 PRO can use CAN connection method to connect with the host computer"}),"\n",(0,r.jsxs)(n.li,{children:["CAN needs to be connected using ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,r.jsxs)(n.li,{children:["Below is the appearance of the ",(0,r.jsx)(n.code,{children:"XT30(2+2)-F"})," data cable","\n",(0,r.jsx)(s,{image:t(98043).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Mainboard firmware burning needs to be done through Katapult to burn Klipper"}),"\n",(0,r.jsx)(n.li,{children:"If the mainboard has already been flashed with Katapult, there is no need to perform the final Katapult firmware burn, as that is just a precaution in case the Katapult firmware on the mainboard was not successfully burned"}),"\n",(0,r.jsx)(n.li,{children:"You can quickly press reset twice to see if an LED on the mainboard blinks, indicating that the mainboard has entered Katapult firmware"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"can-firmware-compilation",children:"CAN Firmware Compilation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SHT36 PRO can only use CAN method to connect with the host computer"}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can",children:"CAN Firmware Burn"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Advantages: If the ",(0,r.jsx)(n.code,{children:"Katapult"})," firmware is installed, you can update the firmware without touching the mainboard and it supports bus connection"]}),"\n",(0,r.jsxs)(n.li,{children:["Disadvantages: May cause errors such as homing timeout when used together with ",(0,r.jsx)(n.code,{children:"KlipperScreen"})]}),"\n",(0,r.jsx)(n.li,{children:"Tip: If you need to use CAN, make sure the host computer supports CAN and that it needs to be paired with UTOC or a mainboard with bridging firmware installed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsx)(o.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98043:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var i=t(75271);let r={},a=i.createContext(r);function o(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);