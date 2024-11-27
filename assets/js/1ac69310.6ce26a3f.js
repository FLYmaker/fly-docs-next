"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["77185"],{25854:function(e,s,i){i.r(s),i.d(s,{metadata:()=>n,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>t});var n=JSON.parse('{"id":"DebugDoc/BasicTutorial/usb_printing","title":"U\u76D8\u6253\u5370","description":"\u672C\u6559\u7A0B\u53EA\u9002\u7528\u4E0EFLY\u4E0A\u4F4D\u673A","source":"@site/docs/DebugDoc/BasicTutorial/usb_printing.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/usb_printing","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/usb_printing","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/usb_printing.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729501964000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"debugdocSidebar","previous":{"title":"\u901A\u8FC7SSH\u8FDE\u63A5\u7F51\u7EDC","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/Internet"},"next":{"title":"\u4FEE\u6539\u7CFB\u7EDF\u65F6\u533A","permalink":"/fly-docs-next/docs/DebugDoc/BasicTutorial/timedatectl"}}'),l=i("52676"),r=i("79938");let t={sidebar_position:3},d="U\u76D8\u6253\u5370",c={},a=[{value:"\u4F7F\u7528\u64CD\u4F5C\u65B9\u6CD5",id:"\u4F7F\u7528\u64CD\u4F5C\u65B9\u6CD5",level:2},{value:"U\u76D8\u6253\u5370\u64CD\u4F5C\u65B9\u6CD5",id:"u\u76D8\u6253\u5370\u64CD\u4F5C\u65B9\u6CD5",level:2},{value:"\u5907\u4EFD\u5E76\u4E14\u4E0B\u8F7D\u6587\u4EF6",id:"\u5907\u4EFD\u5E76\u4E14\u4E0B\u8F7D\u6587\u4EF6",level:3},{value:"\u6B64\u6B65\u662F\u6062\u590D\u539F\u6765\u6587\u4EF6",id:"\u6B64\u6B65\u662F\u6062\u590D\u539F\u6765\u6587\u4EF6",level:3}];function o(e){let s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"u\u76D8\u6253\u5370",children:"U\u76D8\u6253\u5370"})}),"\n",(0,l.jsx)(s.p,{children:"\u672C\u6559\u7A0B\u53EA\u9002\u7528\u4E0EFLY\u4E0A\u4F4D\u673A"}),"\n",(0,l.jsx)(s.admonition,{title:"\u987B\u77E5",type:"danger",children:(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u9700\u8981\u81EA\u884C\u5B89\u88C5"}),"\n",(0,l.jsxs)(s.li,{children:["\u672C\u6559\u7A0B\u5C06\u66FF\u6362klipper\u7684",(0,l.jsx)(s.code,{children:"klipper/klippy/extras/virtual_sdcard.py"}),"\u6587\u4EF6\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:["\u53EF\u5B9E\u73B0\u5728\u9009\u62E9U\u76D8\u91CC\u9762\u6253\u5370\u6587\u4EF6\u540E\uFF0C\u81EA\u52A8\u5C06U\u76D8\u6587\u4EF6\u590D\u5236\u5230\u7CFB\u7EDF\u7684",(0,l.jsx)(s.code,{children:"/tmp"}),"\u76EE\u5F55\u4E0B\u3002"]}),"\n",(0,l.jsxs)(s.li,{children:["\u5728\u590D\u5236\u5B8C\u6210\u540E\u4F1A\u5728\u7F51\u9875\u547D\u4EE4\u884C\u63D0\u793A",(0,l.jsx)(s.code,{children:"File selected"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u6B64\u6587\u4EF6\u5C06\u4F1A\u68C0\u6D4B",(0,l.jsx)(s.code,{children:"sdaX"}),"\u6587\u4EF6\u5939\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u4E0D\u6267\u884C\uFF0C(\u5176\u4E2Dsda\u4E2DX\u4EE3\u8868A-Z\u4E0E0-9)"]}),"\n",(0,l.jsx)(s.li,{children:"\u76EE\u524D\u53EA\u6D4B\u8BD5\u4E86FLY\u7684\u4E0A\u4F4D\u673A\uFF0C\u5176\u4ED6\u4E0A\u4F4D\u673A\u5E76\u672A\u6D4B\u8BD5\u3002"}),"\n"]})}),"\n",(0,l.jsx)(s.h2,{id:"\u4F7F\u7528\u64CD\u4F5C\u65B9\u6CD5",children:"\u4F7F\u7528\u64CD\u4F5C\u65B9\u6CD5"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u4F7F\u7528SSH\u8F6F\u4EF6\u8FDE\u63A5\u5230\u4E0A\u4F4D\u673A\u540E\u6267\u884C\u4E0B\u65B9\u6307\u4EE4"}),"\n",(0,l.jsx)(s.li,{children:"\u8BF7\u6CE8\u610F\u6B64\u547D\u4EE4\u4F1A\u8BA9\u4E0A\u4F4D\u673A\u91CD\u542F\uFF01!\uFF01"}),"\n",(0,l.jsxs)(s.li,{children:["\u6B64\u6B65\u662F\u5F00\u542FU\u76D8\u6253\u5370\u529F\u80FD","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo rm -rf /etc/udev/rules.d/fly_devices.rules && sudo wget https://upyun.pan.zxkxz.cn/Utils/fly_devices.rules -O /etc/udev/rules.d/fly_devices.rules > /dev/null 2>&1 && sudo chmod +x /etc/udev/rules.d/fly_devices.rules && sudo service udev restart && sudo reboot\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"u\u76D8\u6253\u5370\u64CD\u4F5C\u65B9\u6CD5",children:"U\u76D8\u6253\u5370\u64CD\u4F5C\u65B9\u6CD5"}),"\n",(0,l.jsx)(s.h3,{id:"\u5907\u4EFD\u5E76\u4E14\u4E0B\u8F7D\u6587\u4EF6",children:"\u5907\u4EFD\u5E76\u4E14\u4E0B\u8F7D\u6587\u4EF6"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u8BF7\u6CE8\u610F\u6B64\u547D\u4EE4\u4F1A\u505C\u6B62Kipper"}),"\n",(0,l.jsxs)(s.li,{children:["\u6B64\u6B65\u662F\u5F00\u542F\u9009\u62E9u\u76D8\u6587\u4EF6\u65F6\u5019\u81EA\u52A8\u590D\u5236\u5230\u7CFB\u7EDF\u7684",(0,l.jsx)(s.code,{children:"/tmp"}),"\u76EE\u5F55\u4E0B\u529F\u80FD","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/klipper/klippy/extras/virtual_sdcard.py ~/virtual_sdcard.py && curl -kfsSL https://cdn.mellow.klipper.cn/firmware/virtual_sdcard.py -o ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u6B64\u6B65\u662F\u6062\u590D\u539F\u6765\u6587\u4EF6",children:"\u6B64\u6B65\u662F\u6062\u590D\u539F\u6765\u6587\u4EF6"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u8BF7\u6CE8\u610F\u6B64\u547D\u4EE4\u662F\u6062\u590D\u539F\u6765Klipper","\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"sudo systemctl stop klipper && mv ~/virtual_sdcard.py ~/klipper/klippy/extras/virtual_sdcard.py && sudo systemctl restart klipper\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},79938:function(e,s,i){i.d(s,{Z:function(){return d},a:function(){return t}});var n=i(75271);let l={},r=n.createContext(l);function t(e){let s=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);