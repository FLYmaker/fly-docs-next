"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["58609"],{75120:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return s}});var i=t(52676),r=t(79938);let s=[];function o(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,i.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,i.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,i.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["CAN connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["RS232 connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["USB connection","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},24978:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return s}});var i=t(52676),r=t(79938);let s=[];function o(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the programming tool"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No need to install the programming tool for the FLY upper computer."}),"\n",(0,i.jsx)(n.li,{children:"If you need to install it, please note: The upper computer needs to be connected to the internet to install successfully."}),"\n",(0,i.jsx)(n.li,{children:"If already installed, no need to install again."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Execute the following command to check if the connection is successful."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If there is no DFU device, please try to re-enter ",(0,i.jsx)(n.strong,{children:"programming mode"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Due to system version issues, other names may be displayed. If ",(0,i.jsx)(n.code,{children:"0483:df11"})," is shown, it indicates that the programming mode has been entered."]}),"\n"]}),"\n",(0,i.jsx)(s,{image:t(98736).Z,size:"100%",align:"left"}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Pull the pre-compiled firmware"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These are all pre-compiled firmwares."}),"\n",(0,i.jsx)(n.li,{children:"Please note: The upper computer needs to be connected to the internet to install."}),"\n",(0,i.jsx)(n.li,{children:"The upper computer needs to execute the command below to download the firmware package."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining steps."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},69786:function(e,n,t){t.d(n,{ZP:function(){return l},d$:function(){return s}});var i=t(52676),r=t(79938);let s=[];function o(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Button:s,ImageView:o}=n;return!s&&a("Button",!0),!o&&a("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["System compatibility issues, please use the computer's ",(0,i.jsx)(n.code,{children:"USB2.0"})," for burning"]}),"\n",(0,i.jsx)(n.li,{children:"If it still cannot be burned, please use an upper machine for burning"}),"\n"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Burning tool ",(0,i.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Download link"})]}),"\n",(0,i.jsxs)(n.li,{children:["Download ",(0,i.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," and ",(0,i.jsx)(n.code,{children:"STM32 DFU driver"})]}),"\n",(0,i.jsxs)(n.li,{children:["Copy the compiled firmware (klipper.bin) or precompiled ",(0,i.jsx)(n.code,{children:"Katapult firmware"})," to any directory on your computer"]}),"\n",(0,i.jsxs)(n.li,{children:["Connect the motherboard to the computer using a Type-C data cable, ensuring that it has already entered ",(0,i.jsx)(n.strong,{children:"DFU burning mode"})]}),"\n",(0,i.jsxs)(n.li,{children:["In STM32CubeProgrammer, select USB mode and refresh to connect","\n",(0,i.jsx)(o,{image:t(25509).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If no error pop-up appears, the connection is successful"}),"\n",(0,i.jsxs)(n.li,{children:["Click the download icon on the left and select several options below","\n",(0,i.jsx)(o,{image:t(92995).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click the arrow point to ",(0,i.jsx)(n.code,{children:"Browse"}),", then choose the firmware you need to burn","\n",(0,i.jsx)(o,{image:t(6666).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Select ",(0,i.jsx)(n.code,{children:"Start address"})," and enter ",(0,i.jsx)(n.code,{children:"0x08000000"}),"\n",(0,i.jsx)(o,{image:t(65037).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.code,{children:"Start automatic mode"})," below to start burning the firmware","\n",(0,i.jsx)(o,{image:t(48091).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["The following prompt indicates that the firmware burning is complete","\n",(0,i.jsx)(o,{image:t(78435).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}function a(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},22991:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>h,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","title":"BL firmware","description":"* Please note that the bootloader has already been pre-flashed at the factory and does not need to be re-flashed.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/id"},"next":{"title":"klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg"}}'),r=t("52676"),s=t("79938"),o=t("69786"),l=t("24978");t("75120");let a={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},c="BL firmware",d={},h=[{value:"Entering programming mode",id:"entering-programming-mode",level:2},{value:"Flashing firmware",id:"flashing-firmware",level:2},...o.d$,...l.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:i,ImageView:a,TabItem:c,Tabs:d}=n;return!i&&p("Button",!0),!a&&p("ImageView",!0),!c&&p("TabItem",!0),!d&&p("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bl-firmware",children:"BL firmware"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please note that the ",(0,r.jsx)(n.code,{children:"bootloader"})," has already been pre-flashed at the factory and does not need to be re-flashed."]}),"\n"]})}),"\n",(0,r.jsx)(n.h2,{id:"entering-programming-mode",children:"Entering programming mode"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"There are two methods to enter programming mode."}),"\n",(0,r.jsx)(n.li,{children:"The first method: With the motherboard completely powered off, short the BOOT and BOOT1 pins and connect the data transfer cable to the motherboard and your device."}),"\n",(0,r.jsxs)(n.li,{children:["The second method: Connect the data transfer cable to the motherboard and your device, then short the BOOT and BOOT1 pins and press the RST button, then release the RST button and finally disconnect the shorted BOOT jumper.","\n",(0,r.jsx)(a,{image:t(93186).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing firmware"}),"\n",(0,r.jsxs)(d,{children:[(0,r.jsxs)(c,{value:"win",label:"Windows flashing tutorial",default:!0,children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The bootloader firmware for Gemini ",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/GeminiV3.bin",children:"click to automatically download the firmware"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the DIP switches ",(0,r.jsx)(n.code,{children:"3"}),", ",(0,r.jsx)(n.code,{children:"4"})," to the right to connect the lower device to the upper device via the built-in USB."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Set the DIP switches ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"2"})," to the left, otherwise it will affect the connection between the lower and upper devices."]}),"\n",(0,r.jsx)(a,{image:t(33410).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(o.ZP,{})]}),(0,r.jsxs)(c,{value:"linux",label:"Upper device flashing tutorial",children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Set the DIP switches ",(0,r.jsx)(n.code,{children:"1"}),", ",(0,r.jsx)(n.code,{children:"2"})," to the right to connect the lower device to the upper device via the built-in USB."]}),"\n",(0,r.jsxs)(n.li,{children:["Set the DIP switches ",(0,r.jsx)(n.code,{children:"3"}),", ",(0,r.jsx)(n.code,{children:"4"})," to the left, otherwise it will affect the connection between the lower and upper devices.","\n",(0,r.jsx)(a,{image:t(3275).Z,size:"50%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["After setting the DIP switches as described below, the USB port below will be occupied by the lower device, so do not connect any other devices.","\n",(0,r.jsx)(a,{image:t(66176).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,r.jsx)(l.ZP,{}),(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsx)(n.li,{children:"Flashing firmware"}),"\n"]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Below is the command to flash the bootloader firmware.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/Gemini/GeminiV3.bin\n"})}),"\n"]}),"\n"]}),(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["When you see the content shown by the arrow in the image below ",(0,r.jsx)(n.code,{children:"File downloaded successfully"}),", the flashing is successful."]}),"\n"]}),(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Ignore the error message after the red arrow!"})}),(0,r.jsx)(a,{image:t(86962).Z,size:"100%",align:"center"}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"After flashing is complete, power off the motherboard completely."})})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98736:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},86962:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},25509:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},92995:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},6666:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},65037:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},48091:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},78435:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},66176:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/usb-53255bdb9281af5f357a85c4b4ceb1be.webp"},93186:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-0b447ca885909e438bd97d564f106caf.webp"},3275:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dip1-891542cd5c3d510a77a1b520b5cf1d26.webp"},33410:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/dip3-4a1e2c21589a03ed82aa1c70e286cc25.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var i=t(75271);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);