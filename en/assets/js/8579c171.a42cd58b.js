"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["67259"],{75120:function(e,n,i){i.d(n,{ZP:function(){return s},d$:function(){return l}});var t=i(52676),r=i(79938);let l=[];function a(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,t.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,t.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,t.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CAN connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["RS232 connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["USB connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},39746:function(e,n,i){i.d(n,{ZP:function(){return s},d$:function(){return l}});var t=i(52676),r=i(79938);let l=[];function a(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the flashing tool"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,t.jsx)(n.li,{children:"Only execute this for the first flashing, no need to run it again after that"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,t.jsx)(l,{image:i(90707).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If there is no ",(0,t.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,t.jsx)(n.strong,{children:"flashing mode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Due to system version issues, it may display other names. If there is a ",(0,t.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the flashing mode has been entered."]}),"\n",(0,t.jsx)(l,{image:i(11785).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["Only proceed if there is a ",(0,t.jsx)(n.code,{children:"2e8a:0003"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,t.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,t.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you have already downloaded the firmware package, it is recommended to update the firmware package before proceeding with the remaining steps"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},58688:function(e,n,i){i.d(n,{ZP:function(){return s},d$:function(){return l}});var t=i(52676),r=i(79938);let l=[];function a(e){let n={code:"code",li:"li",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prepare a data cable with data transmission capability"}),"\n",(0,t.jsx)(n.li,{children:"Download the firmware to your computer"}),"\n",(0,t.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it down after connecting to the computer, at this point the ",(0,t.jsx)(n.code,{children:"RPI-RP2"})," disk will appear","\n",(0,t.jsx)(l,{image:i(46065).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,t.jsx)(n.li,{children:"Copy the firmware you need to burn into the disk, please note that only UF2 suffix firmware can be used!!! (Do not modify the suffix name, it is useless)"}),"\n",(0,t.jsxs)(n.li,{children:["Reference","\n",(0,t.jsx)(l,{image:i(39995).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After copying the firmware into the ",(0,t.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, at this point the firmware burning is completed!"]}),"\n"]})}function s(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},53530:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>f,assets:()=>h,toc:()=>u,frontMatter:()=>c});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl","title":"Katapult Firmware","description":"Katapult Firmware Description","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash","slug":"/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/flash/id"},"next":{"title":"Motherboard Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sb2040/sb2040-pro/wiring"}}'),r=i("52676"),l=i("79938"),a=i("58688"),s=i("39746"),o=i("75120");let c={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},d="Katapult Firmware",h={},u=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...o.d$,{value:"Entering Flashing Mode",id:"entering-flashing-mode",level:2},{value:"Flashing the Firmware",id:"flashing-the-firmware",level:2},...a.d$,...s.d$,{value:"Confirming if the Firmware Has Started",id:"confirming-if-the-firmware-has-started",level:2}];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:t,ImageView:c,TabItem:d,Tabs:h}=n;return!t&&m("Button",!0),!c&&m("ImageView",!0),!d&&m("TabItem",!0),!h&&m("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,r.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SB2040_PRO supports CAN"}),"\n",(0,r.jsx)(n.li,{children:"Here, only CAN firmware is provided with rates of 500K and 1M"}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"entering-flashing-mode",children:"Entering Flashing Mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The one circled is the ",(0,r.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["With the mainboard completely powered off, press and hold the BOOT button, then connect one end of the data transfer cable to the mainboard and the other to your device","\n",(0,r.jsx)(c,{image:i(42892).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flashing-the-firmware",children:"Flashing the Firmware"}),"\n",(0,r.jsxs)(h,{children:[(0,r.jsxs)(d,{value:"win",label:"Windows Flashing Tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Katapult firmware for SB2040 PRO ",(0,r.jsx)(t,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SB2040_PRO.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,r.jsx)(a.ZP,{})]}),(0,r.jsxs)(d,{value:"linux",label:"Host Flashing Tutorial",children:[(0,r.jsx)(s.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flashing the Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"You only need to flash one of the firmware files"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Below is the command to flash the firmware with a 500K CAN rate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SB2040/FLY_SB2040PRO_CANBOOT_500K.uf2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Below is the command to flash the firmware with a 1M CAN rate"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SB2040/FLY_SB2040PRO_CANBOOT_1M.uf2\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If the following message appears, the firmware has been successfully flashed"}),"\n",(0,r.jsx)(c,{image:i(68771).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing, you need to completely power off the mainboard once."})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"confirming-if-the-firmware-has-started",children:"Confirming if the Firmware Has Started"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the firmware starts normally, the LED will start blinking","\n",(0,r.jsx)(c,{image:i(778).Z,size:"50%",align:"center"}),"\n"]}),"\n"]})]})}function f(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},90707:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2040-572286e2bbe8bbb4e11479086c8950ab.webp"},68771:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},46065:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/uf2-c04612a2d39377a5d2deda5ab967e7cf.webp"},39995:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/uf21-2c911712248e23dca385b8be6dc6f628.webp"},11785:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},42892:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/boot-792d55c7038e4a44b8bd90d6cf1c0d3e.webp"},778:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/led-aa62c50c75d6b7603cffc84cde998782.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return a}});var t=i(75271);let r={},l=t.createContext(r);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);