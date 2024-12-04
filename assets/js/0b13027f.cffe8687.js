"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["36678"],{96920:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>d});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-mini-pad/uart","title":"\u914D\u7F6E\u65B9\u6CD5","description":"\u8BF7\u6CE8\u610F\u4F7F\u7528\u6B64\u65B9\u6CD5\u540E\u65E0\u6CD5\u5728\u4F7F\u7528mini pad\u7684\u52A0\u901F\u5EA6\u63A5\u53E3\u5916\u63A5\u52A0\u901F\u5EA6\u8BA1","source":"@site/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","sourceDirName":"ProductDoc/SBC/fly-mini-pad","slug":"/ProductDoc/SBC/fly-mini-pad/uart","permalink":"/fly-docs-next/docs/ProductDoc/SBC/fly-mini-pad/uart","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-mini-pad/uart.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"\u901A\u8FC7UART\u8FDE\u63A5\u4E3B\u677F"},"sidebar":"tutorialSidebar","previous":{"title":"\u677F\u8F7DUTOC\u4F7F\u7528","permalink":"/fly-docs-next/docs/ProductDoc/SBC/fly-mini-pad/utoc"},"next":{"title":"\u4E09\u7EF4\u6A21\u578B\u4E0E\u539F\u7406\u56FE","permalink":"/fly-docs-next/docs/ProductDoc/SBC/fly-mini-pad/schematic"}}'),r=t("52676"),o=t("79938");let d={sidebar_position:9,sidebar_label:"\u901A\u8FC7UART\u8FDE\u63A5\u4E3B\u677F"},s="\u914D\u7F6E\u65B9\u6CD5",c={},l=[{value:"\u63A5\u7EBF\u65B9\u6CD5",id:"\u63A5\u7EBF\u65B9\u6CD5",level:2},{value:"Klipper\u53C2\u8003\u914D\u7F6E",id:"klipper\u53C2\u8003\u914D\u7F6E",level:2}];function a(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u914D\u7F6E\u65B9\u6CD5",children:"\u914D\u7F6E\u65B9\u6CD5"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u987B\u77E5",type:"danger",children:(0,r.jsx)(n.p,{children:"\u8BF7\u6CE8\u610F\u4F7F\u7528\u6B64\u65B9\u6CD5\u540E\u65E0\u6CD5\u5728\u4F7F\u7528mini pad\u7684\u52A0\u901F\u5EA6\u63A5\u53E3\u5916\u63A5\u52A0\u901F\u5EA6\u8BA1"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u6253\u5F00BOOT\u76D8\u627E\u5230",(0,r.jsx)(n.code,{children:"armbianEnv.txt"}),"\u5E76\u4E14\u6253\u5F00"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5C06",(0,r.jsx)(n.code,{children:"overlays=usbhost2 usbhost3 uart2"}),"\u4E2D\u7684",(0,r.jsx)(n.strong,{children:"uart2"}),"\u4FEE\u6539\u6210",(0,r.jsx)(n.strong,{children:"uart3"}),"\u4FDD\u5B58\u5373\u53EF"]}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(9045).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"\u63A5\u7EBF\u65B9\u6CD5",children:"\u63A5\u7EBF\u65B9\u6CD5"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8BF7\u6CE8\u610Fmini-pad\u7684TX\u8981\u63A5\u5237\u4E86\u4E32\u53E3\u56FA\u4EF6\u4E3B\u677F\u7684RX"}),"\n",(0,r.jsx)(n.li,{children:"\u8BF7\u6CE8\u610Fmini-pad\u7684RX\u8981\u63A5\u5237\u4E86\u4E32\u53E3\u56FA\u4EF6\u4E3B\u677F\u7684TX"}),"\n",(0,r.jsx)(n.li,{children:"\u8BF7\u6CE8\u610F\u9700\u8981\u5171\u5730"}),"\n",(0,r.jsx)(n.li,{children:"\u5426\u5219\u65E0\u6CD5\u8FDE\u63A5\u5237\u4E86\u4E32\u53E3\u56FA\u4EF6\u7684\u4E3B\u677F"}),"\n"]}),"\n",(0,r.jsx)(i,{image:t(3111).Z,size:"80%",align:"center"}),"\n",(0,r.jsx)(n.h2,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"Klipper\u53C2\u8003\u914D\u7F6E"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu]\nserial: /dev/ttyS3\nbaud\uFF1A250000\n#   \u4F7F\u7528\u7684\u6CE2\u7279\u7387\u3002\u9ED8\u8BA4\u662F250000\nrestart_method:command\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},9045:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart-9f86dbf2b17ce74810241302c49d6f21.webp"},3111:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/uart1-84f4dfe5ec67b4a3b173b060fdf6072f.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var i=t(75271);let r={},o=i.createContext(r);function d(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);