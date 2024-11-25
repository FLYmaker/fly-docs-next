"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["75498"],{47815:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"\u5370\u5237\u958B\u59CB\u6642\u306E\u6E29\u5EA6\u4E0D\u5B89\u5B9A\u306B\u3088\u308B\u5F85\u3061\u6642\u9593\u304C\u9577\u3059\u304E\u308B","description":"* \u3053\u306E\u30DE\u30AF\u30ED\u306F\u76F4\u63A5\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732262999000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"\u30D5\u30A3\u30E9\u30E1\u30F3\u30C8\u30BB\u30F3\u30B5\u30FC","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"\u30D2\u30FC\u30BF\u30FC\u306E\u8A31\u5BB9\u8AA4\u5DEE\u8A2D\u5B9A","permalink":"/fly-docs-next/ja/docs/DebugDoc/ref-config/verify_heater"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:2},c="\u5370\u5237\u958B\u59CB\u6642\u306E\u6E29\u5EA6\u4E0D\u5B89\u5B9A\u306B\u3088\u308B\u5F85\u3061\u6642\u9593\u304C\u9577\u3059\u304E\u308B",a={},d=[];function l(e){let n={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"\u5370\u5237\u958B\u59CB\u6642\u306E\u6E29\u5EA6\u4E0D\u5B89\u5B9A\u306B\u3088\u308B\u5F85\u3061\u6642\u9593\u304C\u9577\u3059\u304E\u308B",children:"\u5370\u5237\u958B\u59CB\u6642\u306E\u6E29\u5EA6\u4E0D\u5B89\u5B9A\u306B\u3088\u308B\u5F85\u3061\u6642\u9593\u304C\u9577\u3059\u304E\u308B"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u3053\u306E\u30DE\u30AF\u30ED\u306F\u76F4\u63A5\u8A2D\u5B9A\u30D5\u30A1\u30A4\u30EB\u306B\u8FFD\u52A0\u3067\u304D\u307E\u3059"}),"\n",(0,o.jsx)(n.li,{children:"\u3053\u306E\u30DE\u30AF\u30ED\u306E\u5F79\u5272\u306F\u3001\u901A\u5E38\u306E\u6E29\u5EA6\u4E0A\u6607\u3092\u5F85\u3064\u304C\u3001\u6E29\u5EA6\u304C\u76EE\u6A19\u306B\u9054\u3057\u305F\u3089\u6B21\u306E\u30B9\u30C6\u30C3\u30D7\u306B\u76F4\u63A5\u9032\u3080\u3053\u3068\u3067\u3059"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}	\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},79938:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);