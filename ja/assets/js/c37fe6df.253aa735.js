"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[88797],{11204:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"ProductDoc/SBC/fly-pi-v2/index","title":"\u7b80\u4ecb","description":"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u5168\u65b0\u7684FLY-Pi V2\u4e0a\u4f4d\u673a\u3002\u6b64\u677f\u7684\u5b89\u88c5\u5c3a\u5bf8\u4e0e\u6811\u8393\u6d3e\u76f8\u540c\uff0c\u53ef\u66ff\u4ee3\u6811\u8393\u6d3e\u4f5c\u4e3a\u4e0a\u4f4d\u673a\u8fd0\u884c\uff0c\u5b83\u62e5\u6709\u67091GB\u7684\u677f\u8f7dDDR3\u5185\u5b58\uff0c\u5141\u8bb8\u8fd0\u884c\u5b8c\u6574\u7684LINUX\u684c\u9762\uff08\u57fa\u4e8e Armbian\u5b9a\u5236\u4f18\u5316\uff09\u3002\u8be5\u677f\u53ef\u4e0eKlipper\u548cRRF\u56fa\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u4f7f\u7528SHT\u5de5\u5177\u677f\u65f6\u8fd0\u884cKlipper\u5c4f\u5e55\u3002","source":"@site/docs/ProductDoc/SBC/fly-pi-v2/index.mdx","sourceDirName":"ProductDoc/SBC/fly-pi-v2","slug":"/ProductDoc/SBC/fly-pi-v2/","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi-v2/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-pi-v2/index.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730517188000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\u7b80\u4ecb"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-Pi-V2","permalink":"/fly-docs-next/ja/docs/category/fly-pi-v2"},"next":{"title":"\u7cfb\u7edf\u70e7\u5f55","permalink":"/fly-docs-next/ja/docs/ProductDoc/SBC/fly-pi-v2/fly-os"}}');var n=l(86070),s=l(15658),t=l(63436);const d={sidebar_position:1,sidebar_label:"\u7b80\u4ecb"},c="\u7b80\u4ecb",o={},a=[{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",id:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",level:2}];function p(e){const i={h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"\u7b80\u4ecb",children:"\u7b80\u4ecb"})}),"\n",(0,n.jsx)(i.p,{children:"\u6211\u4eec\u5f88\u9ad8\u5174\u5730\u53d1\u5e03\u5168\u65b0\u7684FLY-Pi V2\u4e0a\u4f4d\u673a\u3002\u6b64\u677f\u7684\u5b89\u88c5\u5c3a\u5bf8\u4e0e\u6811\u8393\u6d3e\u76f8\u540c\uff0c\u53ef\u66ff\u4ee3\u6811\u8393\u6d3e\u4f5c\u4e3a\u4e0a\u4f4d\u673a\u8fd0\u884c\uff0c\u5b83\u62e5\u6709\u67091GB\u7684\u677f\u8f7dDDR3\u5185\u5b58\uff0c\u5141\u8bb8\u8fd0\u884c\u5b8c\u6574\u7684LINUX\u684c\u9762\uff08\u57fa\u4e8e Armbian\u5b9a\u5236\u4f18\u5316\uff09\u3002\u8be5\u677f\u53ef\u4e0eKlipper\u548cRRF\u56fa\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u4f7f\u7528SHT\u5de5\u5177\u677f\u65f6\u8fd0\u884cKlipper\u5c4f\u5e55\u3002\n\u8bbe\u8ba1\u8fd9\u6b3e\u4e0a\u4f4d\u673a\u7684\u76ee\u7684\u662f\u8ba9\u5ba2\u6237\u66f4\u5bb9\u6613\u4f7f\u7528Klipper\u56fa\u4ef6\u6216RRF\u56fa\u4ef6\u3002\u6211\u4eec\u5bf9LINUX\u7cfb\u7edf\u955c\u50cf\u8fdb\u884c\u4f18\u5316\uff0c\u66f4\u9002\u54083D\u6253\u5370\u673a\u4f7f\u7528\uff0c\u64cd\u4f5c\u5b89\u88c5\u4e5f\u66f4\u7b80\u5355\uff0c\u5c0f\u767d\u7a0d\u6709\u57fa\u7840\u4e5f\u80fd\u5f88\u5feb\u7684\u5b66\u4e60\u4f7f\u7528\u3002\u76f8\u5bf9\u4e8e\u5176\u4ed6\u4e0a\u4f4d\u673a\u677f\u5b50\u8282\u7701\u4e86\u5b66\u4e60\u6210\u672c\uff0c\u8ba9\u4f60\u53ef\u4ee5\u66f4\u4e13\u6ce8\u4e8e\u4eab\u53d73D\u6253\u5370\u5e26\u6765\u7684\u5feb\u4e50(\u8d2d\u4e70\u5e26SD\u5361\u7684\u5957\u9910\u9884\u88c5Klipper\u56fa\u4ef6\uff0c\u4e0a\u7535\u5c31\u80fd\u7528\u7701\u65f6\u53c8\u7701\u4e8b)\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"\u4e0e\u6811\u8393\u6d3e3B\u548c4B\u540c\u6837\u7248\u578b"}),"\n",(0,n.jsx)(i.li,{children:"CPU\uff1a\u9ad8\u6027\u80fd\u5168\u5fd7H5\u82af\u7247\uff0c4\u683864\u4f4dCortex-A53"}),"\n",(0,n.jsx)(i.li,{children:"GPU\uff1a\u9ad8\u6027\u80fd6\u6838Mali 450\uff0c\u50cf\u7d20\u586b\u5145\u7387\u5927\u4e8e2.7gpixel/s"}),"\n",(0,n.jsx)(i.li,{children:"RAM\uff1a1GB DDR3\uff08\u4e0eGPU\u5171\u4eab\uff09(512+512)"}),"\n",(0,n.jsx)(i.li,{children:"ROM\uff1a\u652f\u6301\u6700\u5927128GB SDCARD"}),"\n",(0,n.jsx)(i.li,{children:"\u5916\u8bbe\uff1aSpi x2\uff0cUART x2\uff0cUSB x4\uff08USB 2.0 x3\uff0cOTG x1\uff09\uff0cMicro HDMI x1\uff0cEth x1\uff08100M\uff09\uff0cCAN \uff08\u677f\u8f7dUSB\u8f6cCAN\u6a21\u5757\uff0c\u5373\u677f\u8f7dUTOC\uff09"}),"\n",(0,n.jsx)(i.li,{children:"\u63a5\u53e3\uff1a\u677f\u8f7dM.2\u63a5\u53e3\uff0c\u53ef\u6269\u5c55WIFI\uff0ceMMC\u7b49\u3002\uff08\u79c1\u6709\u534f\u8bae\uff0c\u5207\u52ff\u8fde\u63a5\u975eFLY \u03c0\u4e13\u7528\u7684M.2\u8bbe\u5907\uff09"}),"\n",(0,n.jsx)(i.li,{children:"40Pin\u63a5\u53e3\uff0c\u517c\u5bb9\u6811\u8393\u6d3e"}),"\n",(0,n.jsx)(i.li,{children:"\u652f\u630112-24V\u76f4\u6d41\u4f9b\u7535\uff0c\u4f9b\u7535\u66f4\u7a33\u5b9a"}),"\n",(0,n.jsx)(i.li,{children:"\u9884\u7559\u4e86\u4e00\u4e2a5V\u98ce\u6247ZH1.5\u63a5\u53e3"}),"\n",(0,n.jsx)(i.li,{children:"\u7cfb\u7edf\u9884\u88c5klipper\u3001moonraker\u3001mainsail\u3001fulidd\u3001klipper-screen\u3001Crowsmest\u3001\u5171\u632f\u8865\u507f\u63d2\u4ef6 numpy\u4e0eFLY-Tools\uff0c\u65e0\u9700\u6362\u6e90\u7b49\u590d\u6742\u7684\u64cd\u4f5c\uff0c\u5c0f\u767d\u66f4\u5bb9\u6613\u4e0a\u624b\uff08\u9700\u8981\u8d2d\u4e70TF\u5361\u6216\u8005M2WE\uff09"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e",children:"\u4ea7\u54c1\u63a5\u53e3\u8bf4\u660e"}),"\n",(0,n.jsx)(t.A,{image:l(60789).A,size:"80%",align:"center"}),"\n",(0,n.jsx)(i.hr,{})]})}function x(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},60789:(e,i,l)=>{l.d(i,{A:()=>r});const r=l.p+"assets/images/interface-2d691adc76c2ef1ea200e20c511b0799.png"}}]);