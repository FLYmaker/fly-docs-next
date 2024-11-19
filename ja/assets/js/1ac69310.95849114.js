"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[89601],{80739:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"DebugDoc/BasicTutorial/usb_printing","title":"U\u76d8\u6253\u5370","description":"\u672c\u6559\u7a0b\u53ea\u9002\u7528\u4e0eFLY\u4e0a\u4f4d\u673a","source":"@site/docs/DebugDoc/BasicTutorial/usb_printing.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/usb_printing","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/usb_printing","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/usb_printing.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729501964000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"\u901a\u8fc7SSH\u8fde\u63a5\u7f51\u7edc","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/Internet"},"next":{"title":"\u4fee\u6539\u7cfb\u7edf\u65f6\u533a","permalink":"/fly-docs-next/ja/docs/DebugDoc/BasicTutorial/timedatectl"}}');var r=i(86070),n=i(15658);const d={sidebar_position:3},c="U\u76d8\u6253\u5370",t={},a=[{value:"\u4f7f\u7528\u64cd\u4f5c\u65b9\u6cd5",id:"\u4f7f\u7528\u64cd\u4f5c\u65b9\u6cd5",level:2},{value:"U\u76d8\u6253\u5370\u64cd\u4f5c\u65b9\u6cd5",id:"u\u76d8\u6253\u5370\u64cd\u4f5c\u65b9\u6cd5",level:2},{value:"\u5907\u4efd\u5e76\u4e14\u4e0b\u8f7d\u6587\u4ef6",id:"\u5907\u4efd\u5e76\u4e14\u4e0b\u8f7d\u6587\u4ef6",level:3},{value:"\u6b64\u6b65\u662f\u6062\u590d\u539f\u6765\u6587\u4ef6",id:"\u6b64\u6b65\u662f\u6062\u590d\u539f\u6765\u6587\u4ef6",level:3}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"u\u76d8\u6253\u5370",children:"U\u76d8\u6253\u5370"})}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u6559\u7a0b\u53ea\u9002\u7528\u4e0eFLY\u4e0a\u4f4d\u673a"}),"\n",(0,r.jsx)(s.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u9700\u8981\u81ea\u884c\u5b89\u88c5"}),"\n",(0,r.jsxs)(s.li,{children:["\u672c\u6559\u7a0b\u5c06\u66ff\u6362klipper\u7684",(0,r.jsx)(s.code,{children:"klipper/klippy/extras/virtual_sdcard.py"}),"\u6587\u4ef6\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u53ef\u5b9e\u73b0\u5728\u9009\u62e9U\u76d8\u91cc\u9762\u6253\u5370\u6587\u4ef6\u540e\uff0c\u81ea\u52a8\u5c06U\u76d8\u6587\u4ef6\u590d\u5236\u5230\u7cfb\u7edf\u7684",(0,r.jsx)(s.code,{children:"/tmp"}),"\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5728\u590d\u5236\u5b8c\u6210\u540e\u4f1a\u5728\u7f51\u9875\u547d\u4ee4\u884c\u63d0\u793a",(0,r.jsx)(s.code,{children:"File selected"})]}),"\n",(0,r.jsxs)(s.li,{children:["\u6b64\u6587\u4ef6\u5c06\u4f1a\u68c0\u6d4b",(0,r.jsx)(s.code,{children:"sdaX"}),"\u6587\u4ef6\u5939\uff0c\u5982\u679c\u6ca1\u6709\u5219\u4e0d\u6267\u884c\uff0c(\u5176\u4e2dsda\u4e2dX\u4ee3\u8868A-Z\u4e0e0-9)"]}),"\n",(0,r.jsx)(s.li,{children:"\u76ee\u524d\u53ea\u6d4b\u8bd5\u4e86FLY\u7684\u4e0a\u4f4d\u673a\uff0c\u5176\u4ed6\u4e0a\u4f4d\u673a\u5e76\u672a\u6d4b\u8bd5\u3002"}),"\n"]})}),"\n",(0,r.jsx)(s.h2,{id:"\u4f7f\u7528\u64cd\u4f5c\u65b9\u6cd5",children:"\u4f7f\u7528\u64cd\u4f5c\u65b9\u6cd5"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u4f7f\u7528SSH\u8f6f\u4ef6\u8fde\u63a5\u5230\u4e0a\u4f4d\u673a\u540e\u6267\u884c\u4e0b\u65b9\u6307\u4ee4"}),"\n",(0,r.jsx)(s.li,{children:"\u8bf7\u6ce8\u610f\u6b64\u547d\u4ee4\u4f1a\u8ba9\u4e0a\u4f4d\u673a\u91cd\u542f\uff01!\uff01"}),"\n",(0,r.jsxs)(s.li,{children:["\u6b64\u6b65\u662f\u5f00\u542fU\u76d8\u6253\u5370\u529f\u80fd","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo rm -rf /etc/udev/rules.d/fly_devices.rules && sudo wget https://upyun.pan.zxkxz.cn/Utils/fly_devices.rules -O /etc/udev/rules.d/fly_devices.rules > /dev/null 2>&1 && sudo chmod +x /etc/udev/rules.d/fly_devices.rules && sudo service udev restart && sudo reboot\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"u\u76d8\u6253\u5370\u64cd\u4f5c\u65b9\u6cd5",children:"U\u76d8\u6253\u5370\u64cd\u4f5c\u65b9\u6cd5"}),"\n",(0,r.jsx)(s.h3,{id:"\u5907\u4efd\u5e76\u4e14\u4e0b\u8f7d\u6587\u4ef6",children:"\u5907\u4efd\u5e76\u4e14\u4e0b\u8f7d\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\u8bf7\u6ce8\u610f\u6b64\u547d\u4ee4\u4f1a\u505c\u6b62Kipper"}),"\n",(0,r.jsxs)(s.li,{children:["\u6b64\u6b65\u662f\u5f00\u542f\u9009\u62e9u\u76d8\u6587\u4ef6\u65f6\u5019\u81ea\u52a8\u590d\u5236\u5230\u7cfb\u7edf\u7684",(0,r.jsx)(s.code,{children:"/tmp"}),"\u76ee\u5f55\u4e0b\u529f\u80fd","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/klipper/klippy/extras/virtual_sdcard.py ~/virtual_sdcard.py && curl -kfsSL https://cdn.mellow.klipper.cn/firmware/virtual_sdcard.py -o ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u6b64\u6b65\u662f\u6062\u590d\u539f\u6765\u6587\u4ef6",children:"\u6b64\u6b65\u662f\u6062\u590d\u539f\u6765\u6587\u4ef6"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u8bf7\u6ce8\u610f\u6b64\u547d\u4ee4\u662f\u6062\u590d\u539f\u6765Klipper","\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/virtual_sdcard.py ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]})]})}function o(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}}}]);