"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["90538"],{70479:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/m109","title":"Print start temperature instability waiting time too long","description":"* This macro can be directly placed in the configuration.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/m109.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/m109","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/m109","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/m109.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"debugdocSidebar","previous":{"title":"Filament Sensor","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/filament-switch-sensor"},"next":{"title":"Heating Tolerance Configuration","permalink":"/fly-docs-next/en/docs/DebugDoc/ref-config/verify_heater"}}'),i=n("52676"),o=n("79938");let s={sidebar_position:2},a="Print start temperature instability waiting time too long",c={},l=[];function d(e){let t={code:"code",h1:"h1",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"print-start-temperature-instability-waiting-time-too-long",children:"Print start temperature instability waiting time too long"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"This macro can be directly placed in the configuration."}),"\n",(0,i.jsx)(t.li,{children:"The purpose of this macro is to normally wait for the temperature to rise, but once the temperature reaches the target, it proceeds to the next step immediately."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-cfg",metastring:'title="printer.cfg"',children:"[gcode_macro M109]\nrename_existing: M109.1\ngcode:\n    {% set s = params.S|float %}\n    M104 {% for p in params %}{'%s%s' % (p, params[p])}{% endfor %}  ; Set hotend temp\n    {% if s != 0 %}\n    TEMPERATURE_WAIT SENSOR=extruder MINIMUM={s} MAXIMUM={s+1}   ; Wait for hotend temp (within 1 degree)\n    {% endif %}	\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},79938:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return s}});var r=n(75271);let i={},o=r.createContext(i);function s(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);