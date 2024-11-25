"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["48297"],{75120:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return r}});var t=i(52676),l=i(79938);let r=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,t.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,t.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,t.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CAN connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["RS232 connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,t.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["USB connection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},39746:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return r}});var t=i(52676),l=i(79938);let r=[];function s(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the flashing tool"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,t.jsx)(n.li,{children:"Only execute this for the first flashing, no need to run it again after that"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,t.jsx)(r,{image:i(90707).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Enter ",(0,t.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If there is no ",(0,t.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,t.jsx)(n.strong,{children:"flashing mode"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Due to system version issues, it may display other names. If there is a ",(0,t.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the flashing mode has been entered."]}),"\n",(0,t.jsx)(r,{image:i(11785).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["Only proceed if there is a ",(0,t.jsx)(n.code,{children:"2e8a:0003"}),"."]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,t.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,t.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you have already downloaded the firmware package, it is recommended to update the firmware package before proceeding with the remaining steps"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},58688:function(e,n,i){i.d(n,{ZP:function(){return o},d$:function(){return r}});var t=i(52676),l=i(79938);let r=[];function s(e){let n={code:"code",li:"li",ul:"ul",...(0,l.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prepare a data cable with data transmission capability"}),"\n",(0,t.jsx)(n.li,{children:"Download the firmware to your computer"}),"\n",(0,t.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it down after connecting to the computer, at this point the ",(0,t.jsx)(n.code,{children:"RPI-RP2"})," disk will appear","\n",(0,t.jsx)(r,{image:i(46065).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,t.jsx)(n.li,{children:"Copy the firmware you need to burn into the disk, please note that only UF2 suffix firmware can be used!!! (Do not modify the suffix name, it is useless)"}),"\n",(0,t.jsxs)(n.li,{children:["Reference","\n",(0,t.jsx)(r,{image:i(39995).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["After copying the firmware into the ",(0,t.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, at this point the firmware burning is completed!"]}),"\n"]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}},1094:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>f,assets:()=>c,toc:()=>h,frontMatter:()=>a});var t=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","title":"Katapult Firmware","description":"Entering Flash Mode","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw","slug":"/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Flashing the bootloader firmware"},"sidebar":"tutorialSidebar","previous":{"title":"LIS2DW","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-usb-adxl/fly-usb-lis2dw/adxl345"},"next":{"title":"USB\u52A0\u901F\u5EA6\u8BA1(ADXL345)","permalink":"/fly-docs-next/en/docs/category/usb\u52A0\u901F\u5EA6\u8BA1adxl345"}}'),l=i("52676"),r=i("79938"),s=i("58688"),o=i("39746");i("75120");let a={sidebar_position:6,sidebar_label:"Flashing the bootloader firmware"},d="Katapult Firmware",c={},h=[{value:"Entering Flash Mode",id:"entering-flash-mode",level:2},{value:"Flashing Firmware",id:"flashing-firmware",level:2},...s.d$,...o.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Button:t,ImageView:a,TabItem:d,Tabs:c}=n;return!t&&p("Button",!0),!a&&p("ImageView",!0),!d&&p("TabItem",!0),!c&&p("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,l.jsx)(n.h2,{id:"entering-flash-mode",children:"Entering Flash Mode"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["Circled is the ",(0,l.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"To enter flash mode, you need to press and hold the BOOT button while the motherboard is completely powered off, then connect the data cable to the motherboard and your device."}),"\n",(0,l.jsx)(a,{image:i(7679).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,l.jsxs)(c,{children:[(0,l.jsxs)(d,{value:"win",label:"Windows Flash Tutorial",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Katapult firmware for USB accelerometer ",(0,l.jsx)(t,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/USBADXL.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,l.jsx)(s.ZP,{})]}),(0,l.jsxs)(d,{value:"linux",label:"Host Machine Flash Tutorial",children:[(0,l.jsx)(o.ZP,{}),(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Flashing Firmware"}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Below is the firmware flashing command:","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/USBADXL/FLY_USBADXL.uf2\n"})}),"\n"]}),"\n"]}),(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"If you see the prompt below, the flashing is successful."}),"\n",(0,l.jsx)(a,{image:i(68771).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"After flashing, you need to power off the motherboard completely."})})]})]})]})}function f(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},90707:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2040-572286e2bbe8bbb4e11479086c8950ab.webp"},68771:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},46065:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/uf2-c04612a2d39377a5d2deda5ab967e7cf.webp"},39995:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/uf21-2c911712248e23dca385b8be6dc6f628.webp"},11785:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},7679:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/boot-2e80594f649008c9a458be86b25524f0.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return s}});var t=i(75271);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);