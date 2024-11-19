"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[33940],{92848:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>s});var r=t(86070),a=t(15658);const s=[];function i(e){const n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,r.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,r.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CAN connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RS232 connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["USB connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},3938:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>i});var r=t(86070),a=t(15658),s=t(63436);const i=[];function l(e){const n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Install the programming tool"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No need to install the programming tool for the FLY upper computer."}),"\n",(0,r.jsx)(n.li,{children:"If you need to install it, please note: The upper computer needs to be connected to the internet to install successfully."}),"\n",(0,r.jsx)(n.li,{children:"If already installed, no need to install again."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Execute the following command to check if the connection is successful."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If there is no DFU device, please try to re-enter ",(0,r.jsx)(n.strong,{children:"programming mode"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Due to system version issues, other names may be displayed. If ",(0,r.jsx)(n.code,{children:"0483:df11"})," is shown, it indicates that the programming mode has been entered."]}),"\n"]}),"\n",(0,r.jsx)(s.A,{image:t(7019).A,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Pull the pre-compiled firmware"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These are all pre-compiled firmwares."}),"\n",(0,r.jsx)(n.li,{children:"Please note: The upper computer needs to be connected to the internet to install."}),"\n",(0,r.jsx)(n.li,{children:"The upper computer needs to execute the command below to download the firmware package."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the firmware package has already been downloaded, it is recommended to update the firmware package before proceeding with the remaining steps."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},40096:(e,n,t)=>{t.d(n,{Ay:()=>c,RM:()=>l});var r=t(86070),a=t(15658),s=t(63436),i=t(61706);const l=[];function o(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["System compatibility issues, please use the computer's ",(0,r.jsx)(n.code,{children:"USB2.0"})," for burning"]}),"\n",(0,r.jsx)(n.li,{children:"If it still cannot be burned, please use an upper machine for burning"}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Burning tool ",(0,r.jsx)(i.A,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Download link"})]}),"\n",(0,r.jsxs)(n.li,{children:["Download ",(0,r.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," and ",(0,r.jsx)(n.code,{children:"STM32 DFU driver"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copy the compiled firmware (klipper.bin) or precompiled ",(0,r.jsx)(n.code,{children:"Katapult firmware"})," to any directory on your computer"]}),"\n",(0,r.jsxs)(n.li,{children:["Connect the motherboard to the computer using a Type-C data cable, ensuring that it has already entered ",(0,r.jsx)(n.strong,{children:"DFU burning mode"})]}),"\n",(0,r.jsxs)(n.li,{children:["In STM32CubeProgrammer, select USB mode and refresh to connect","\n",(0,r.jsx)(s.A,{image:t(87768).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"If no error pop-up appears, the connection is successful"}),"\n",(0,r.jsxs)(n.li,{children:["Click the download icon on the left and select several options below","\n",(0,r.jsx)(s.A,{image:t(62259).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click the arrow point to ",(0,r.jsx)(n.code,{children:"Browse"}),", then choose the firmware you need to burn","\n",(0,r.jsx)(s.A,{image:t(11498).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.code,{children:"Start address"})," and enter ",(0,r.jsx)(n.code,{children:"0x08000000"}),"\n",(0,r.jsx)(s.A,{image:t(96165).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Click ",(0,r.jsx)(n.code,{children:"Start automatic mode"})," below to start burning the firmware","\n",(0,r.jsx)(s.A,{image:t(78652).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["The following prompt indicates that the firmware burning is complete","\n",(0,r.jsx)(s.A,{image:t(67383).A,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},19715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d7/flash/bl","title":"Katapult Firmware","description":"Katapult Firmware Description","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d7/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d7/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-d7/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d7/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d7/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Flashing Katapult Firmware"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d7/flash/id"},"next":{"title":"Main Board Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d7/wiring"}}');var a=t(86070),s=t(15658),i=t(77849),l=t(27166),o=t(61706),c=t(63436),d=t(40096),u=t(3938),h=t(92848);const p={sidebar_position:6,sidebar_label:"Flashing Katapult Firmware"},m="Katapult Firmware",f={},x=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...h.RM,{value:"Entering Flash Mode",id:"entering-flash-mode",level:2},{value:"Flashing Firmware",id:"flashing-firmware",level:2},...d.RM,...u.RM];function b(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,a.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,a.jsx)(h.Ay,{}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"D7 uses USB connection"}),"\n",(0,a.jsx)(n.li,{children:"D7 has pre-flashed Katapult firmware if it was manufactured after September 1, 2024"}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"entering-flash-mode",children:"Entering Flash Mode"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Left is the ",(0,a.jsx)(n.code,{children:"BOOT button"}),", right is the ",(0,a.jsx)(n.code,{children:"RESET button"})]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"There are two ways to enter flash mode"}),"\n",(0,a.jsx)(n.li,{children:"First method: With the motherboard completely powered off, press and hold the BOOT button while connecting the data transfer cable to the motherboard and your device"}),"\n",(0,a.jsxs)(n.li,{children:["Second method: Connect the data transfer cable to the motherboard and your device, then press and hold the BOOT button and the RST button, release the RST button first, then release the BOOT button","\n",(0,a.jsx)(c.A,{image:t(23614).A,size:"50%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(l.A,{value:"win",label:"Windows Flash Tutorial",default:!0,children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["D7's Katapult firmware ",(0,a.jsx)(o.A,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/D.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,a.jsx)(d.Ay,{})]}),(0,a.jsxs)(l.A,{value:"linux",label:"Host Machine Flash Tutorial",children:[(0,a.jsx)(u.Ay,{}),(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Flash Firmware"}),"\n"]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Only one firmware needs to be flashed"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Below is the firmware flashing command","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/D/FLY_D7.bin\n"})}),"\n"]}),"\n"]}),(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When you see the content shown in the arrow below ",(0,a.jsx)(n.code,{children:"File downloaded successfully"}),", the flashing is successful"]}),"\n",(0,a.jsx)(c.A,{image:t(61377).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"After flashing, the motherboard needs to be powered off completely."})})]})]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},27166:(e,n,t)=>{t.d(n,{A:()=>i});t(30758);var r=t(13526);const a={tabItem:"tabItem_nvWs"};var s=t(86070);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},77849:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(30758),a=t(13526),s=t(42973),i=t(25557),l=t(67636),o=t(42310),c=t(4919),d=t(61231);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(21760);const b={tabList:"tabList_vBCw",tabItem:"tabItem_NxBH"};var g=t(86070);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(w,{...n,...e})]})}function v(e){const n=(0,x.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},7019:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/lsusb-fbdf78cf96bade59484d4d4480c13646.png"},61377:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/make-flash-293365eef260b6208f2ac4b7a29a3f7f.png"},87768:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-1-570b29235c08edf6fc778f453e9a5720.png"},62259:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-2-85838cf232f3782ea08ebe91e4974187.png"},11498:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-3-eb527aa7c9d0d079e8e72aab3d8920a0.png"},96165:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-4-f01b2f5315aa155a3f3aa190ec00e6fd.png"},78652:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-5-096dbfc2eb5e3a054be1c3f2ba3cfc2d.png"},67383:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/stm32cube-6-1b485cc68ae2823bf76bb66f3a7aa589.png"},23614:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/boot-22d59684f63571958e5132c5581a6a9a.png"}}]);