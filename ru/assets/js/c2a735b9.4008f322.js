"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["37234"],{52489:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>s});var o=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-adxl/wiring","title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B","description":"* \u0412 \u044D\u0442\u043E\u043C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440 PI V2","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-adxl/wiring.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-adxl","slug":"/ProductDoc/ExtensionBoard/fly-adxl/wiring","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-adxl/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-adxl/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435"},"sidebar":"tutorialSidebar","previous":{"title":"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-adxl/"},"next":{"title":"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 ADXL345","permalink":"/fly-docs-next/ru/docs/ProductDoc/ExtensionBoard/fly-adxl/klipper"}}'),r=t("52676"),i=t("79938");let s={sidebar_position:2,sidebar_label:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435"},d="\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B",a={},c=[{value:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",id:"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",level:2}];function l(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-\u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439-\u043F\u043B\u0430\u0442\u044B",children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0412 \u044D\u0442\u043E\u043C \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u043F\u0440\u0438\u043C\u0435\u0440 PI V2","\n",(0,r.jsx)(o,{image:t(73848).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430",children:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"[mcu host]\nserial: /tmp/klipper_host_mcu\n\n[adxl345]\ncs_pin: host:None\nspi_bus: spidev1.0\n\n[resonance_tester]\naccel_chip: adxl345\n#accel_chip_y: adxl345 bed\nprobe_points:\n    100, 100, 20  # \u043F\u0440\u0438\u043C\u0435\u0440\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},73848:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/adxl345-3aafa92553b455efa86d3e76e908a480.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var o=t(75271);let r={},i=o.createContext(r);function s(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);