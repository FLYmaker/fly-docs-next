"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[47056],{72926:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>t,default:()=>j,frontMatter:()=>a,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"DebugDoc/BasicTutorial/backup","title":"\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5","description":"* \u672c\u6559\u7a0b\u9002\u7528\u4e8eFLY-Pi\u3001\u6811\u8393\u6d3e\u3001\u9999\u6a59\u6d3e\u7b49\u4e0a\u4f4d\u673a","source":"@site/docs/DebugDoc/BasicTutorial/backup.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/backup","permalink":"/fly-docs-next/de/docs/DebugDoc/BasicTutorial/backup","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/backup.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730517188000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u7cfb\u7edf\u5d29\u6e83\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5"},"sidebar":"debugdocSidebar","previous":{"title":"\u4fee\u6539\u7cfb\u7edf\u65f6\u533a","permalink":"/fly-docs-next/de/docs/DebugDoc/BasicTutorial/timedatectl"},"next":{"title":"\u6dfb\u52a0USB\u6444\u50cf\u5934","permalink":"/fly-docs-next/de/docs/DebugDoc/BasicTutorial/camera"}}');var l=n(86070),c=n(15658),d=n(61706),r=n(63436);const a={sidebar_position:5,sidebar_label:"\u7cfb\u7edf\u5d29\u6e83\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5"},t="\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5",o={},h=[{value:"\u4e0b\u8f7d\u9700\u8981\u7684\u8f6f\u4ef6",id:"\u4e0b\u8f7d\u9700\u8981\u7684\u8f6f\u4ef6",level:2},{value:"\u5f00\u59cb\u5907\u4efd",id:"\u5f00\u59cb\u5907\u4efd",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:3},{value:"\u5bfb\u627e",id:"\u5bfb\u627e",level:3},{value:"\u5bfc\u51fa\u914d\u7f6e",id:"\u5bfc\u51fa\u914d\u7f6e",level:3}];function x(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.header,{children:(0,l.jsx)(i.h1,{id:"\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5",children:"\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5"})}),"\n",(0,l.jsx)(i.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u672c\u6559\u7a0b\u9002\u7528\u4e8eFLY-Pi\u3001\u6811\u8393\u6d3e\u3001\u9999\u6a59\u6d3e\u7b49\u4e0a\u4f4d\u673a"}),"\n",(0,l.jsx)(i.li,{children:"\u5982\u679c\u4f7f\u7528EMMC\u9700\u8981\u53ef\u4ee5\u8fdb\u5165\u70e7\u5f55\u6a21\u5f0f\uff0c\u5426\u5219\u672c\u6559\u7a0b\u5e76\u4e0d\u9002\u7528"}),"\n",(0,l.jsx)(i.li,{children:"\u672c\u6559\u7a0b\u57fa\u4e8eWindows\u7cfb\u7edf\u4e0b\u64cd\u4f5c\uff0c\u8bf7\u4e0d\u8981\u683c\u5f0f\u5316\u672a\u77e5\u78c1\u76d8\u7b49\u64cd\u4f5c\uff01\uff01\uff01"}),"\n",(0,l.jsx)(i.li,{children:"\u4e0d\u8981\u683c\u5f0f\u5316\uff01\uff01\uff01    \u4e0d\u8981\u683c\u5f0f\u5316\uff01\uff01\uff01  \u4e0d\u8981\u683c\u5f0f\u5316\uff01\uff01\uff01"}),"\n"]})}),"\n",(0,l.jsx)(i.h2,{id:"\u4e0b\u8f7d\u9700\u8981\u7684\u8f6f\u4ef6",children:"\u4e0b\u8f7d\u9700\u8981\u7684\u8f6f\u4ef6"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u70b9\u51fb\u8fdb\u53bb\u540e\u4e0b\u8f7d\uff0c\u7f51\u9875\u4f1a\u63d0\u793a\u4f60\u7535\u8111\u5408\u9002\u54ea\u4e2a\u7248\u672c"}),"\n",(0,l.jsx)(i.li,{children:"\u8f6f\u4ef6\u4e3a\u7eff\u8272\u7248\uff0c\u65e0\u9700\u5b89\u88c5\uff0c\u4e0b\u8f7d\u540e\u89e3\u538b\u5373\u53ef\u4f7f\u7528\u3002"}),"\n",(0,l.jsxs)(i.li,{children:["\n",(0,l.jsx)(d.A,{variant:"contained",disableElevation:!0,href:"https://www.diskgenius.cn/download.php",children:"DG\u786c\u76d8\u5de5\u5177"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"\u5f00\u59cb\u5907\u4efd",children:"\u5f00\u59cb\u5907\u4efd"}),"\n",(0,l.jsx)(i.admonition,{type:"info",children:(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u4e0d\u8981\u683c\u5f0f\u5316\uff01\uff01\uff01"}),"\n",(0,l.jsx)(i.li,{children:"\u683c\u5f0f\u5316\u540e\u5c31\u6ca1\u529e\u6cd5\u6062\u590d\uff01\uff01\uff01"}),"\n",(0,l.jsx)(i.li,{children:"\u5982\u679c\u662fTF\u5361\u76f4\u63a5\u63a5\u5230\u7535\u8111\u5373\u53ef"}),"\n",(0,l.jsx)(i.li,{children:"\u5982\u679c\u662fEMMC\u9700\u8981\u624b\u52a8\u8fdb\u5165\u70e7\u5f55\u6a21\u5f0f\uff01\uff01\uff01"}),"\n"]})}),"\n",(0,l.jsx)(i.h3,{id:"\u8fde\u63a5",children:"\u8fde\u63a5"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"\u5c06\u9700\u8981\u5907\u4efd\u7684\u7cfb\u7edf\u63a5\u5230\u7535\u8111\u4e0a"}),"\n",(0,l.jsxs)(i.li,{children:["\u6253\u5f00",(0,l.jsx)(i.code,{children:"DiskGenius.exe"})]}),"\n",(0,l.jsxs)(i.li,{children:["\u5982\u679c\u6b63\u5e38\u5219\u4f1a\u663e\u793a\u4f60\u9700\u8981\u5907\u4efd\u7684\u78c1\u76d8","\n",(0,l.jsx)(r.A,{image:n(2436).A,size:"80%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u5bfb\u627e",children:"\u5bfb\u627e"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\u5de6\u8fb9\u70b9\u51fb\u4e3b\u5206\u533a\uff0c\u5728\u70b9\u51fb\u4e0a\u65b9\u7684\u6d4f\u89c8\u6587\u4ef6\uff0c\u6700\u540e\u4f1a\u51fa\u73b0\u4e0b\u65b9\u6587\u4ef6","\n",(0,l.jsx)(r.A,{image:n(88921).A,size:"80%",align:"center"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\u627e\u5230",(0,l.jsx)(i.code,{children:"home"}),"\u53cc\u51fb\u8fdb\u53bb"]}),"\n",(0,l.jsx)(i.li,{children:"\u8fdb\u53bb\u540e\u4e00\u822c\u662f\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u5e76\u4e14\u540d\u5b57\u662f\u4f60\u7cfb\u7edf\u7528\u6237\u7684\u540d\u5b57"}),"\n",(0,l.jsx)(i.li,{children:"\u5982\u679c\u6709\u4e24\u4e2a\u6216\u8005\u4ee5\u4e0a\uff0c\u9700\u8981\u4f60\u81ea\u884c\u786e\u5b9a\u90a3\u4e2a\u6709\u4f60\u7684\u7cfb\u7edf\u914d\u7f6e"}),"\n",(0,l.jsx)(i.li,{children:"\u7136\u540e\u53cc\u51fb\u8fdb\u53bb"}),"\n",(0,l.jsxs)(i.li,{children:["\u8fdb\u53bb\u540e\u5bfb\u627e",(0,l.jsx)(i.code,{children:"printer_data"}),"\n",(0,l.jsx)(r.A,{image:n(35721).A,size:"80%",align:"center"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.code,{children:"printer_data"}),"\u8fd9\u4e2a\u6587\u4ef6\u5939\u5305\u542b\u4e86\u4f60\u7684\u6253\u5370\u6587\u4ef6\u3001klipper\u914d\u7f6e\u3001klipper\u65e5\u5fd7\u7b49\u4e1c\u897f\uff0c\u53ef\u4ee5\u76f4\u63a5\u5168\u90e8\u5bfc\u51fa"]}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"\u5bfc\u51fa\u914d\u7f6e",children:"\u5bfc\u51fa\u914d\u7f6e"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["\u53f3\u952e\u70b9\u51fb",(0,l.jsx)(i.code,{children:"printer_data"}),"\u4f1a\u51fa\u73b0\u4e0b\u65b9\u63d0\u793a","\n",(0,l.jsx)(r.A,{image:n(28730).A,size:"40%",align:"center"}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"\u9009\u62e9\u4f60\u9700\u8981\u4fdd\u5b58\u7684\u76ee\u5f55\u6216\u8005\u76f4\u63a5\u5bfc\u51fa\u5373\u53ef"}),"\n",(0,l.jsxs)(i.li,{children:["\u786e\u5b9a\u5bfc\u51fa","\n",(0,l.jsx)(r.A,{image:n(81673).A,size:"80%",align:"center"}),"\n"]}),"\n",(0,l.jsxs)(i.li,{children:["\u6253\u5f00\u4f60\u5bfc\u51fa\u7684\u6587\u4ef6\uff0c\u5e76\u4e14\u627e\u5230",(0,l.jsx)(i.code,{children:"config"}),"\u8fd9\u91cc\u9762\u662f\u4f60\u7684\u7cfb\u7edf\u914d\u7f6e","\n",(0,l.jsx)(r.A,{image:n(90962).A,size:"80%",align:"center"}),"\n"]}),"\n",(0,l.jsx)(i.li,{children:"\u5bfc\u51fa\u914d\u7f6e\u5df2\u7ecf\u5b8c\u6210"}),"\n",(0,l.jsxs)(i.li,{children:["\u8bf7\u6ce8\u610f",(0,l.jsx)(i.code,{children:"moonraker"}),"\u6587\u4ef6\u4e0d\u8981\u968f\u610f\u4e0a\u4f20\u5230\u5176\u4ed6\u7cfb\u7edf\uff0c\u53ef\u80fd\u56e0\u7cfb\u7edf\u4e0d\u4e00\u6837\u5bfc\u81f4klipper\u65e0\u6cd5\u8fde\u63a5"]}),"\n"]})]})}function j(e={}){const{wrapper:i}={...(0,c.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},2436:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/boot-7c68c2ed565076bc43165f70c250f9bb.png"},28730:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/export-b1e125449a32e916d68b708eabf3b4ba.png"},81673:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/export1-54127ad6f45cd755572c5faefce794b4.png"},90962:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/export2-cbb8cd298f079ce3a2bf6ecf18f16574.png"},88921:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/home-c0d5d2dccacf01b306e401bc0cee7ded.png"},35721:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/printer-data-6760b55541acb576a5940e67db2e32a6.png"}}]);