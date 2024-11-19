"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[84102],{96683:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"DebugDoc/BasicTutorial/camera","title":"\u6dfb\u52a0USB\u6444\u50cf\u5934","description":"* \u9700\u8981\u6709\u5b89\u88c5crowsnest\u670d\u52a1\uff0c\u5982lite2\u4e0emini pad\u7684\u7cfb\u7edf\u672a\u5b89\u88c5","source":"@site/docs/DebugDoc/BasicTutorial/camera.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/camera","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/camera","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/camera.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730517188000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"\u6dfb\u52a0USB\u6444\u50cf\u5934"},"sidebar":"debugdocSidebar","previous":{"title":"\u7cfb\u7edf\u5d29\u6e83\u5907\u4efd\u914d\u7f6e\u65b9\u6cd5","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/backup"},"next":{"title":"klipperscreen\u6269\u5c55\u529f\u80fd","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/klipperscreen"}}');var c=s(86070),d=s(15658),l=s(63436);const a={sidebar_position:6,sidebar_label:"\u6dfb\u52a0USB\u6444\u50cf\u5934"},r="\u6dfb\u52a0USB\u6444\u50cf\u5934",t={},o=[{value:"\u6253\u5f00\u914d\u7f6e",id:"\u6253\u5f00\u914d\u7f6e",level:2},{value:"\u641c\u7d22\u6444\u50cf\u5934ID",id:"\u641c\u7d22\u6444\u50cf\u5934id",level:2},{value:"\u6dfb\u52a0ID",id:"\u6dfb\u52a0id",level:2},{value:"\u542f\u7528\u6444\u50cf\u5934",id:"\u542f\u7528\u6444\u50cf\u5934",level:2},{value:"\u67e5\u770b\u662f\u5426\u542f\u7528",id:"\u67e5\u770b\u662f\u5426\u542f\u7528",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"\u6dfb\u52a0usb\u6444\u50cf\u5934",children:"\u6dfb\u52a0USB\u6444\u50cf\u5934"})}),"\n",(0,c.jsx)(n.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u9700\u8981\u6709\u5b89\u88c5",(0,c.jsx)(n.code,{children:"crowsnest"}),"\u670d\u52a1\uff0c\u5982lite2\u4e0emini pad\u7684\u7cfb\u7edf\u672a\u5b89\u88c5"]}),"\n",(0,c.jsx)(n.li,{children:"\u9700\u8981\u514d\u9a71\u5373\u63d2\u5373\u7528\u6444\u50cf\u5934\uff0c\u5747\u53ef\u4ee5\u5728linux\u3001armbian\u7b49\u7cfb\u7edf\u4e0b\u7684klipper\u652f\u6301\u4f7f\u7528\uff0c\u65e0\u9700\u53e6\u5916\u5b89\u88c5\u9a71\u52a8\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u672c\u6559\u7a0b\u4f7f\u7528\u6700\u65b0klipper\uff0ccrowsnest\uff0cfuidd\u4e3a\u4f8b\uff0c\u5982\u679c\u662f\u5176\u4ed6\u65b9\u6cd5\u9700\u8981\u81ea\u884c\u7814\u7a76"}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u6253\u5f00\u914d\u7f6e",children:"\u6253\u5f00\u914d\u7f6e"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u6444\u50cf\u5934id\u6839\u636e\u7cfb\u7edf\u6709\u5f88\u591a\u79cd\uff0c\u6211\u4eec\u53ea\u9700\u8981\u786e\u5b9a\u4e0d\u4f1a\u53d8\u7684ID\u5373\u53ef"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u5728Fuidd\u4e2d\u627e\u5230\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u6253\u5f00",(0,c.jsx)(n.code,{children:"crowsnest.conf"})]}),"\n",(0,c.jsx)(l.A,{image:s(66287).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["\u627e\u6253",(0,c.jsx)(n.code,{children:"device: "}),"\u5c06\u540e\u9762\u7684ID\u914d\u7f6e\u5220\u9664"]}),"\n",(0,c.jsx)(l.A,{image:s(73014).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u641c\u7d22\u6444\u50cf\u5934id",children:"\u641c\u7d22\u6444\u50cf\u5934ID"}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u8bf7\u786e\u4fdd\u6444\u50cf\u5934\u5df2\u7ecf\u63a5\u5230\u4e0a\u4f4d\u673a"}),"\n"]})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70b9\u51fb\u4e0a\u65b9",(0,c.jsx)(n.code,{children:"DEVICES"}),"\uff0c\u7136\u540e\u70b9\u51fb",(0,c.jsx)(n.code,{children:"VIDEO"}),",\u6700\u540e\u70b9\u51fb\u5237\u65b0","\n",(0,c.jsx)(l.A,{image:s(3341).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u5bfb\u627e\u5230",(0,c.jsx)(n.code,{children:"path_by_id"}),"\u5c06\u540e\u9762\u4e00\u884c\u590d\u5236","\n",(0,c.jsx)(l.A,{image:s(49444).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u6dfb\u52a0id",children:"\u6dfb\u52a0ID"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u6dfb\u52a0ID\uff0c\u5e76\u4e14\u4fdd\u5b58\u914d\u7f6e","\n",(0,c.jsx)(l.A,{image:s(13307).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u542f\u7528\u6444\u50cf\u5934",children:"\u542f\u7528\u6444\u50cf\u5934"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70b9\u51fb\u8bbe\u7f6e\uff0c\u9009\u62e9\u6444\u50cf\u5934\uff0c\u7136\u540e\u70b9\u51fb\u6dfb\u52a0\u6444\u50cf\u5934","\n",(0,c.jsx)(l.A,{image:s(98482).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\u8f93\u5165\u81ea\u5df1\u559c\u6b22\u7684\u540d\u5b57,\u5e76\u4e14\u70b9\u51fb\u4fdd\u5b58","\n",(0,c.jsx)(l.A,{image:s(13097).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u67e5\u770b\u662f\u5426\u542f\u7528",children:"\u67e5\u770b\u662f\u5426\u542f\u7528"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u70b9\u51fb\u4eea\u8868\u76d8\u6b63\u5e38\u5df2\u7ecf\u51fa\u73b0\u6444\u50cf\u5934\u753b\u9762","\n",(0,c.jsx)(l.A,{image:s(34976).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,c.jsx)(n.li,{children:"\u5982\u679c\u4e0d\u663e\u793a\u91cd\u542f\u7cfb\u7edf\u5373\u53ef"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},66287:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf-33eee239d6075101425cee554a564bb1.png"},73014:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf1-ee6721004c82e151a7fd7e42b5d73497.png"},3341:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf2-2ba1091ca5fa65d245126e780fc023ce.png"},49444:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf3-4366ca0695ff9aef531fafb27a24ba43.png"},13307:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf4-723f82b3d3aece4e6ffdb4d7b4d1f0cf.png"},98482:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf5-c005ddd3b5b46b08be56249818240004.png"},13097:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf6-7e2d97cbdf4faa168b22b3cc95174ae9.png"},34976:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/conf7-7da7eaf04bdad4f05ed264c859285b92.png"}}]);