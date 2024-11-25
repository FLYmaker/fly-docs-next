"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["3740"],{75120:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(52676),r=t(79938);let l=[];function a(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,i.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},39746:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(52676),r=t(79938);let l=[];function a(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Install the flashing tool"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,i.jsx)(n.li,{children:"Only execute this for the first flashing, no need to run it again after that"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,i.jsx)(l,{image:t(90707).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If there is no ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"flashing mode"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Due to system version issues, it may display other names. If there is a ",(0,i.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the flashing mode has been entered."]}),"\n",(0,i.jsx)(l,{image:t(11785).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,i.jsxs)(n.p,{children:["Only proceed if there is a ",(0,i.jsx)(n.code,{children:"2e8a:0003"}),"."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,i.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,i.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you have already downloaded the firmware package, it is recommended to update the firmware package before proceeding with the remaining steps"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},58688:function(e,n,t){t.d(n,{ZP:function(){return o},d$:function(){return l}});var i=t(52676),r=t(79938);let l=[];function a(e){let n={code:"code",li:"li",ul:"ul",...(0,r.a)(),...e.components},{ImageView:l}=n;return!l&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prepare a data cable with data transmission capability"}),"\n",(0,i.jsx)(n.li,{children:"Download the firmware to your computer"}),"\n",(0,i.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it down after connecting to the computer, at this point the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk will appear","\n",(0,i.jsx)(l,{image:t(46065).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,i.jsx)(n.li,{children:"Copy the firmware you need to burn into the disk, please note that only UF2 suffix firmware can be used!!! (Do not modify the suffix name, it is useless)"}),"\n",(0,i.jsxs)(n.li,{children:["Reference","\n",(0,i.jsx)(l,{image:t(39995).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["After copying the firmware into the ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, at this point the firmware burning is completed!"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59118:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>h,frontMatter:()=>s});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-rpfmex/bl","title":"Katapult Firmware","description":"Enter Flash Mode","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-rpfmex/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-rpfmex","slug":"/ProductDoc/MainBoard/fly-rpfmex/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-rpfmex/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Flashing the bootloader firmware"},"sidebar":"tutorialSidebar","previous":{"title":"\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/cfg"},"next":{"title":"3D Models and Schematics","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/schematic"}}'),r=t("52676"),l=t("79938"),a=t("58688"),o=t("39746");t("75120");let s={sidebar_position:6,sidebar_label:"Flashing the bootloader firmware"},c="Katapult Firmware",d={},h=[{value:"Enter Flash Mode",id:"enter-flash-mode",level:2},{value:"Flash Firmware",id:"flash-firmware",level:2},...a.d$,...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components},{Button:i,ImageView:s,TabItem:c,Tabs:d}=n;return!i&&f("Button",!0),!s&&f("ImageView",!0),!c&&f("TabItem",!0),!d&&f("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,r.jsx)(n.h2,{id:"enter-flash-mode",children:"Enter Flash Mode"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Circled is ",(0,r.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To enter flash mode, you need to press and hold the BOOT button while the motherboard is completely powered off, then connect the data cable to the motherboard and your device.","\n",(0,r.jsx)(s,{image:t(75203).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flash-firmware",children:"Flash Firmware"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(c,{value:"win",label:"Windows Flash Tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The rpfmex Katapult firmware ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/USBADXL.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,r.jsx)(a.ZP,{})]}),(0,r.jsxs)(c,{value:"linux",label:"Host Machine Flash Tutorial",children:[(0,r.jsx)(o.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flash Firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is the firmware flashing command","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/USBADXL/FLY_USBADXL.uf2\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"If you see the prompt below, the flashing is successful."}),"\n",(0,r.jsx)(s,{image:t(68771).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing, the motherboard needs to be powered off completely."})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},90707:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2040-572286e2bbe8bbb4e11479086c8950ab.webp"},68771:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},46065:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uf2-c04612a2d39377a5d2deda5ab967e7cf.webp"},39995:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uf21-2c911712248e23dca385b8be6dc6f628.webp"},11785:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},75203:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-c23155c6d76ff575e5b56f37107227e3.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(75271);let r={},l=i.createContext(r);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);