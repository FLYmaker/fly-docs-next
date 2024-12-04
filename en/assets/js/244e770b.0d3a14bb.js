"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["5133"],{73104:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>c});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen5/klipper","title":"klipper","description":"The firmware has been pre-flashed at the factory, but it is recommended to manually update once.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen5/klipper.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen5","slug":"/ProductDoc/Screen/fly-wiscreen5/klipper","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen5/klipper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen5/klipper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"WFI Connection and Klipper Configuration"},"sidebar":"tutorialSidebar","previous":{"title":"Boot Logo Modification","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen5/flash"},"next":{"title":"FLY-LCD\u7CFB\u5217","permalink":"/fly-docs-next/en/docs/category/fly-lcd\u7CFB\u5217"}}'),o=i("52676"),s=i("79938");let c={sidebar_position:4,sidebar_label:"WFI Connection and Klipper Configuration"},t=void 0,a={},l=[{value:"Screen Firmware Download",id:"screen-firmware-download",level:2},{value:"WIFI Connection and Basic Operations",id:"wifi-connection-and-basic-operations",level:2},{value:"Klipper Configuration",id:"klipper-configuration",level:2},{value:"LED Configuration",id:"led-configuration",level:3},{value:"PTC Configuration",id:"ptc-configuration",level:3},{value:"FAN Configuration",id:"fan-configuration",level:3},{value:"Custom Gcode",id:"custom-gcode",level:3},{value:"Exclusion of Usage Objects",id:"exclusion-of-usage-objects",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:r,ImageView:c}=n;return!r&&p("Button",!0),!c&&p("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"The firmware has been pre-flashed at the factory, but it is recommended to manually update once."})}),"\n",(0,o.jsx)(n.h2,{id:"screen-firmware-download",children:"Screen Firmware Download"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/wiscreen/wiscreen5/WIFI/update.img",children:"Click to download screen firmware"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A memory card with a capacity not exceeding 32GB must be used, and the transmission speed of the TF card must be Class10 or above. It is recommended to use TF cards from brands such as SanDisk."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"wifi-connection-and-basic-operations",children:"WIFI Connection and Basic Operations"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1mr421b7Bf/?spm_id_from=333.788&vd_source=36affb37d7228751cd1fcbbda487dfdf",children:"7-inch WiFi Capacitive Screen Controlling Multiple Machines"})}),"\n",(0,o.jsx)(n.h2,{id:"klipper-configuration",children:"Klipper Configuration"}),"\n",(0,o.jsx)(n.h3,{id:"led-configuration",children:"LED Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[led LED]\nwhite_pin:PA15\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ptc-configuration",children:"PTC Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[heater_generic warehouse]\nheater_pin:E_CS\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:PA1\nmin_temp:-270\nmax_temp:600\ncontrol = pid\npid_kp = 16.804\npid_ki = 0.794\npid_kd = 88.854\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fan-configuration",children:"FAN Configuration"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan1]\npin: FAN1\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan2]\npin: FAN2\n"})}),"\n",(0,o.jsx)(n.h3,{id:"custom-gcode",children:"Custom Gcode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Custom Gcode appears after pulling down the screen,"}),"\n",(0,o.jsx)(n.li,{children:"A button can send multiple Gcode formats:"}),"\n",(0,o.jsx)(n.li,{children:"Example:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"G91 \nG1 X10 F6000\nG90\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Input format on the screen (add \\n before each command starting from the second line):"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",children:"G91\\nG1 X10 F6000\\nG90\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exclusion-of-usage-objects",children:"Exclusion of Usage Objects"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Moonraker needs to be replaced."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Connect via SSH and ensure normal internet access first."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Backup the moonraker file"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mv ~/moonraker ~/moonraker-bak\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Stop the moonraker service"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart moonraker\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Pull the moonraker repository"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/moonraker-dev.git -b flylcd-dev moonraker\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Access the host machine in the browser and add the ",(0,o.jsx)(n.code,{children:"moonraker.conf"})," file, then restart the system."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"[network]\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsx)(n.li,{children:"Then enter the address below in the browser, replacing IP with the IP of the host machine."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"http://ip:7125/server/network/wifi/scan\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"This step indicates that the operation is complete."}),"\n",(0,o.jsx)(c,{image:i(4594).Z,size:"100%",align:"left"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4594:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/moonraker-9b11e2e17eeea9c450be5b404401746a.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return t},a:function(){return c}});var r=i(75271);let o={},s=r.createContext(o);function c(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);