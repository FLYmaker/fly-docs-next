"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["46710"],{21856:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return r}});var t=i(52676),o=i(79938);let r=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function s(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Button:r,ImageView:s}=n;return!r&&c("Button",!0),!s&&c("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you need to use CAN, make sure your host computer has undergone CAN configuration."}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsx)(n.p,{children:"Please ensure the motherboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that the CAN network on the host computer, the CAN rate of the bridge motherboard, and the CAN tool board rate are all consistent."})}),"\n",(0,t.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN IDs, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure you are logging into SSH via the network, not via serial port."}),"\n",(0,t.jsx)(n.li,{children:"Please ensure that the UTOC or a motherboard with CAN bridge firmware installed is properly connected, and the data cable connecting to the host computer has data transfer capability."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following situations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found; in this case, you can enter the following command to install the command:","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Entering ",(0,t.jsx)(n.code,{children:"lsusb"})," produces no response. This is a system issue beyond our control; you will need to replace the system or use a confirmed working system."]}),"\n",(0,t.jsxs)(n.li,{children:["The information shown below appears. Please note that this is only for reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(s,{image:i(78948).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as they may be incomplete or not displayed due to system issues."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one, otherwise it may affect subsequent firmware burning and connection, such as when using the ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If none appear, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only proceed with CAN ID search when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,t.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to search for IDs:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", it means this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", it means you need to flash the firmware to use it.","\n",(0,t.jsx)(s,{image:i(47218).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,t.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you cannot find a CAN ID, refer to the documentation below."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the printer's web interface. In the configuration options on the left sidebar, find ",(0,t.jsx)(n.code,{children:"fluidd"}),": ",(0,t.jsx)(n.code,{children:"{...}"})," ; ",(0,t.jsx)(n.code,{children:"mainsail"}),": ",(0,t.jsx)(n.code,{children:"Machine"}),", then click to access ",(0,t.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,t.jsx)(s,{image:i(56137).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy the queried UUID and paste it into the ",(0,t.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,t.jsx)(n.code,{children:"printer.cfg"})," configuration under ",(0,t.jsx)(n.code,{children:"canbus_uuid:"}),". After saving and restarting, you should be able to connect to the motherboard. If Klipper prompts for firmware updates, ADC errors, etc., it indicates that Klipper has successfully connected to the motherboard."]}),"\n",(0,t.jsx)(s,{image:i(47218).Z,size:"50%",align:"left"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard's ID is unique, so please modify according to the actual ID obtained."})}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function c(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87179:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>d,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super5/canbridge","title":"CAN Bridge","description":"CAN bus is a serial communication protocol bus designed for real-time applications, which can transmit signals using twisted-pair wiring and is one of the most widely used field buses in the world. The CAN protocol is used for communication between various different components in a car, thereby replacing expensive and cumbersome wiring harnesses. The robustness of this protocol has extended its use to other automation and industrial applications. Features of the CAN protocol include complete serial data communication, real-time support, transmission rates up to 1Mb/s, and addressing with 11-bit identifiers as well as error detection capabilities.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super5/canbridge.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super5","slug":"/ProductDoc/MainBoard/fly-super/fly-super5/canbridge","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/canbridge","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super5/canbridge.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"CAN Bridge"},"sidebar":"tutorialSidebar","previous":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/cfg"},"next":{"title":"3D Model and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super5/schematic"}}'),o=i("52676"),r=i("79938"),s=i("21856");let a={sidebar_position:6,sidebar_label:"CAN Bridge"},c="CAN Bridge",d={},l=[{value:"Tool Board Connecting to Motherboard via CAN",id:"tool-board-connecting-to-motherboard-via-can",level:2},{value:"Flashing Motherboard Firmware",id:"flashing-motherboard-firmware",level:2},{value:"Searching for ID",id:"searching-for-id",level:2},...s.d$];function h(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"can-bridge",children:"CAN Bridge"})}),"\n",(0,o.jsx)(n.p,{children:"CAN bus is a serial communication protocol bus designed for real-time applications, which can transmit signals using twisted-pair wiring and is one of the most widely used field buses in the world. The CAN protocol is used for communication between various different components in a car, thereby replacing expensive and cumbersome wiring harnesses. The robustness of this protocol has extended its use to other automation and industrial applications. Features of the CAN protocol include complete serial data communication, real-time support, transmission rates up to 1Mb/s, and addressing with 11-bit identifiers as well as error detection capabilities.\nOn 3D printers, CAN bus is used to reduce the number of wires connecting the print head to the motherboard. Originally, it required dozens of wires, but with CAN, only four wires are needed, significantly reducing the number of wires and simplifying cabling.\nThis chapter provides a brief overview of using the CAN bridge."}),"\n",(0,o.jsx)(n.h2,{id:"tool-board-connecting-to-motherboard-via-can",children:"Tool Board Connecting to Motherboard via CAN"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Note that the power line of the tool board is not connected to the CAN port but to the 12V-24V power supply line."}),"\n"]}),"\n",(0,o.jsx)(t,{image:i(53093).Z,size:"80%",align:"center"}),"\n",(0,o.jsx)(n.h2,{id:"flashing-motherboard-firmware",children:"Flashing Motherboard Firmware"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Ensure that the firmware burned onto the SUPER5 PRO motherboard is ",(0,o.jsx)(n.code,{children:"USB bridge CAN firmware configuration"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"searching-for-id",children:"Searching for ID"}),"\n",(0,o.jsx)(s.ZP,{})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},78948:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/606f-cbbebb6ec94773e733a05ddcf6a076e0.webp"},47218:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},56137:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},53093:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/canbridge-2419a63041751c7725f88b53e5574037.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return s}});var t=i(75271);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);