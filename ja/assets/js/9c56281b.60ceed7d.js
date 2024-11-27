"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["53712"],{13910:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"DebugDoc/faq/kipper-adxl","title":"kipper-adxl","description":"\u5FC5\u8981\u306A\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/faq/kipper-adxl.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/kipper-adxl","permalink":"/fly-docs-next/ja/docs/DebugDoc/faq/kipper-adxl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/kipper-adxl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u52A0\u901F\u5EA6\u8A08\u306E\u4F7F\u7528\u65B9\u6CD5"},"sidebar":"debugdocSidebar","previous":{"title":"CAN\u554F\u984C\u96C6","permalink":"/fly-docs-next/ja/docs/DebugDoc/faq/klipper_can"},"next":{"title":"\u5916\u90E8\u30C9\u30E9\u30A4\u30D0\u30FC\u306E\u4F7F\u7528\u30AC\u30A4\u30C9","permalink":"/fly-docs-next/ja/docs/DebugDoc/faq/servo-drive"}}'),l=i("52676"),r=i("79938");let s={sidebar_position:"5",sidebar_label:"\u52A0\u901F\u5EA6\u8A08\u306E\u4F7F\u7528\u65B9\u6CD5"},c=void 0,o={},d=[{value:"\u5FC5\u8981\u306A\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",id:"\u5FC5\u8981\u306A\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",level:2}];function a(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u5FC5\u8981\u306A\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",children:"\u5FC5\u8981\u306A\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB"}),"\n",(0,l.jsxs)(n.admonition,{type:"tip",children:[(0,l.jsxs)(n.mdxAdmonitionTitle,{children:["\u4F5C\u696D\u3059\u308B\u969B\u306B\u306F",(0,l.jsx)(n.code,{children:"MobaXterm_Personal"}),"\u306A\u3069\u306E SSH\u30C4\u30FC\u30EB\u3092\u4F7F\u7528\u3059\u308B\u3053\u3068\u3092\u304A\u52E7\u3081\u3057\u307E\u3059\u3002:::"]}),(0,l.jsxs)(n.admonition,{title:"FLY\u88FD\u54C1\u306E\u5834\u5408\u306F\u30DB\u30B9\u30C8\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u4E0A\u3067\u5B9F\u884C\u3059\u308B\u5FC5\u8981\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u52A0\u901F\u5EA6\u30BB\u30F3\u30B5\u30FC\u306E\u4F9D\u5B58\u95A2\u4FC2\u30D1\u30C3\u30B1\u30FC\u30B8\u304C\u65E2\u306B\u4ED8\u5C5E\u3057\u3066\u3044\u307E\u3059:::",type:"tip",children:[(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\u203B\u4F9D\u5B58\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u306B\u306F\u4EE5\u4E0B\u306E\u30B3\u30DE\u30F3\u30C9\u3092\u5B9F\u884C\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u203BCPU\u306E\u6027\u80FD\u306B\u3088\u3063\u3066\u306F10\uFF5E20\u5206\u307B\u3069\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5B8C\u4E86\u3059\u308B\u307E\u3067\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002\u30DE\u30B6\u30FC\u30DC\u30FC\u30C9\u306E RAM\u304C\u5C11\u306A\u3059\u304E\u308B\u3068\u3001\u5834\u5408\u306B\u3088\u3063\u3066\u306F\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u304C\u5931\u6557\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\n\n```bash\nsudo apt install python3-numpy python3-matplotlib libatlas-base-dev```\n\n```bash\n~/klippy-env/bin/pip install matplotlib numpy\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\n## \u52A0\u901F\u5EA6\u8A08\u306E\u30C6\u30B9\u30C8\n\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5B9F\u884C\u524D\u306B\u539F\u70B9\u306B\u623B\u3059\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059"}),"\n",(0,l.jsxs)(n.li,{children:["\u30B3\u30F3\u30BD\u30FC\u30EB\u3067",(0,l.jsx)(n.code,{children:"ACCELEROMETER_QUERY"}),"\u3092\u5B9F\u884C\u3057\u307E\u3059"]}),"\n",(0,l.jsxs)(n.li,{children:["\u7279\u5B9A\u306E\u52A0\u901F\u5EA6\u30BB\u30F3\u30B5\u30FC\u3084\u8907\u6570\u306E\u52A0\u901F\u5EA6\u30BB\u30F3\u30B5\u30FC\u306E\u30C6\u30B9\u30C8\u3092",(0,l.jsx)(n.code,{children:"ACCELEROMETER_QUERY CHIP=<ADXL>"}),"\u3067\u5B9F\u884C\u3067\u304D\u307E\u3059\u3002",(0,l.jsx)(n.code,{children:"<ADXL>"}),"\u306F\u5BFE\u5FDC\u3059\u308B\u52A0\u901F\u5EA6\u30BB\u30F3\u30B5\u30FC\u540D\u306B\u5909\u66F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\n\u203B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3059\u308B\u5834\u5408\u306F\u3001\u914D\u7DDA\u3084\u8A2D\u5B9A\u3092\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002\n\u203B\u901A\u5E38\u306E\u51FA\u529B\u306F\u4EE5\u4E0B\u306E\u901A\u308A\u3067\u3059"]}),"\n"]}),(0,l.jsx)(t,{image:i(15298).Z,size:"80%",align:"center"}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5171\u632F\u88DC\u6B63\u6E2C\u5B9A\u304C\u53EF\u80FD\u3068\u306A\u308A\u307E\u3059"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\n## \u52A0\u901F\u5EA6\u8A08\u306E\u6821\u6B63\n\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5B9F\u884C\u524D\u306BG28\u3067\u539F\u70B9\u306B\u623B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30B3\u30F3\u30BD\u30FC\u30EB\u306B",(0,l.jsx)(n.code,{children:"SHAPER_CALIBRATE"}),"\u3068\u5165\u529B\u3059\u308B\u3068\u3001X\u3001Y \u306E\u81EA\u52D5\u8ABF\u6574\u304C\u958B\u59CB\u3055\u308C\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u30AD\u30E3\u30EA\u30D6\u30EC\u30FC\u30B7\u30E7\u30F3\u5B8C\u4E86\u5F8C",(0,l.jsx)(n.code,{children:"SAVE_CONFIG"}),"\u3092\u5B9F\u884C\u3057\u3066\u30C7\u30FC\u30BF\u3092\u4FDD\u5B58\u3057\u307E\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"SHAPER_CALIBRATE AXIS=X"}),"\u3092\u4F7F\u7528\u3057\u3066\u7279\u5B9A\u306E\u8EF8\u3092\u81EA\u52D5\u7684\u306B\u6821\u6B63\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD\u3067\u3059\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u6821\u6B63\u306B\u306F\u6642\u9593\u304C\u304B\u304B\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u306E\u3067\u3001\u3057\u3070\u3089\u304F\u304A\u5F85\u3061\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"\n:::\u30D2\u30F3\u30C8 \u6CE8\u610F!\u30C6\u30B9\u30C8\u4E2D\u306B\u30D7\u30EA\u30F3\u30BF\u30FC\u306E\u632F\u52D5\u304C\u6FC0\u3057\u3059\u304E\u308B\u5834\u5408\u306F\u3001\u975E\u5E38\u505C\u6B62\u3092\u62BC\u3059\u304B`M112`\u9001\u4FE1\u3057\u3066\u505C\u6B62\u3057\u3066\u304F\u3060\u3055\u3044:::\n\n"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"accel_per_hz\u304C\u9AD8\u3059\u304E\u308B\u3068\u6FC0\u3057\u3044\u632F\u52D5\u304C\u767A\u751F\u3059\u308B\u305F\u3081\u3001\u9069\u5207\u306B\u4E0B\u3052\u3066\u304F\u3060\u3055\u3044\u3002"}),"\n"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[resonance_tester]\naccel_chip: adxl345\naccel_per_hz: 50 #\u30C7\u30D5\u30A9\u30EB\u30C8\u5024\u306F75\u3067\u3059\nprobe_points: ...\n"})}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{})})]})]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},15298:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/adxl_1-95559ddccec52a838a178b24e82c14e5.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return s}});var t=i(75271);let l={},r=t.createContext(l);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);