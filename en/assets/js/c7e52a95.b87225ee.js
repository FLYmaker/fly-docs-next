"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["42046"],{40896:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"DebugDoc/BasicTutorial/backup","title":"Backup Configuration Method","description":"* This tutorial is applicable to FLY-Pi, Raspberry Pi, Orange Pi, and other hosts.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/backup.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/backup","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/backup.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"System Crash Backup Configuration Method"},"sidebar":"debugdocSidebar","previous":{"title":"Modify System Time Zone","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/timedatectl"},"next":{"title":"Adding a USB Camera","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/camera"}}'),o=t("52676"),r=t("79938");let s={sidebar_position:5,sidebar_label:"System Crash Backup Configuration Method"},a="Backup Configuration Method",l={},c=[{value:"Download Required Software",id:"download-required-software",level:2},{value:"Start Backup",id:"start-backup",level:2},{value:"Connect",id:"connect",level:3},{value:"Find",id:"find",level:3},{value:"Export Configuration",id:"export-configuration",level:3}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,r.a)(),...e.components},{Button:i,ImageView:s}=n;return!i&&h("Button",!0),!s&&h("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"backup-configuration-method",children:"Backup Configuration Method"})}),"\n",(0,o.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"This tutorial is applicable to FLY-Pi, Raspberry Pi, Orange Pi, and other hosts."}),"\n",(0,o.jsx)(n.li,{children:"If using EMMC, you need to be able to enter burn mode; otherwise, this tutorial does not apply."}),"\n",(0,o.jsx)(n.li,{children:"This tutorial is based on operations under the Windows system. Please do not format unknown disks!!!"}),"\n",(0,o.jsx)(n.li,{children:"Do not format!!! Do not format!!! Do not format!!!"}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"download-required-software",children:"Download Required Software"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Click in to download, the webpage will prompt you which version suits your computer."}),"\n",(0,o.jsx)(n.li,{children:"The software is a portable version and does not require installation. After downloading, extract it to use."}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://www.diskgenius.cn/download.php",children:"DG Disk Tool"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"start-backup",children:"Start Backup"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Do not format!!!"}),"\n",(0,o.jsx)(n.li,{children:"Once formatted, there's no way to recover!!!"}),"\n",(0,o.jsx)(n.li,{children:"If it's an SD card, connect it directly to the computer."}),"\n",(0,o.jsx)(n.li,{children:"If it's EMMC, you need to manually enter burn mode!!!"}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"connect",children:"Connect"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Connect the system you need to back up to the computer."}),"\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"DiskGenius.exe"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["If everything is normal, it will display the disk you need to back up.","\n",(0,o.jsx)(s,{image:t(80942).Z,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"find",children:"Find"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Click the main partition on the left, then click the browse files button at the top, and finally the files will appear below.","\n",(0,o.jsx)(s,{image:t(59644).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Find ",(0,o.jsx)(n.code,{children:"home"})," and double-click to enter."]}),"\n",(0,o.jsx)(n.li,{children:"Once inside, usually only one folder appears, named after your system user."}),"\n",(0,o.jsx)(n.li,{children:"If there are two or more, you need to determine which one contains your system configuration."}),"\n",(0,o.jsx)(n.li,{children:"Double-click to enter."}),"\n",(0,o.jsxs)(n.li,{children:["Look for ",(0,o.jsx)(n.code,{children:"printer_data"}),".","\n",(0,o.jsx)(s,{image:t(18384).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"printer_data"})," folder contains your print files, Klipper configuration, Klipper logs, etc., and can be exported directly."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"export-configuration",children:"Export Configuration"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Right-click on ",(0,o.jsx)(n.code,{children:"printer_data"}),", and a prompt will appear below.","\n",(0,o.jsx)(s,{image:t(21405).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Choose the directory where you want to save or export directly."}),"\n",(0,o.jsxs)(n.li,{children:["Confirm the export.","\n",(0,o.jsx)(s,{image:t(51076).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Open the exported file and find ",(0,o.jsx)(n.code,{children:"config"}),", where your system configuration is stored.","\n",(0,o.jsx)(s,{image:t(89756).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"The configuration export is complete."}),"\n",(0,o.jsxs)(n.li,{children:["Note that the ",(0,o.jsx)(n.code,{children:"moonraker"})," file should not be uploaded to other systems arbitrarily, as it may cause Klipper to fail to connect due to different systems."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},80942:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/boot-7ec50b8bc5c705870f716f79248a5edc.webp"},21405:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/export-98c303323d22147200f8d09586edf2b4.webp"},51076:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/export1-879433ba32ce8527eb4f8f47eb6ffdcc.webp"},89756:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/export2-8c4c5d8a2748b23dfb632b4269bf6dd8.webp"},59644:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/home-73c298bb7f8c9a6dff07237c04ad07bd.webp"},18384:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/printer-data-64893972c536b18e6ec1a0554fe8ea10.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(75271);let o={},r=i.createContext(o);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);