"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["61464"],{92036:function(n,e,r){r.r(e),r.d(e,{metadata:()=>i,contentTitle:()=>s,default:()=>f,assets:()=>a,toc:()=>c,frontMatter:()=>o});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-rpfmex/cfg","title":"\u53C2\u8003\u914D\u7F6E","description":"\u6587\u6863\u4E2D\u51FA\u73B0\u7684\u6240\u6709*\u5305\u88F9\u7684\u5185\u5BB9\u9700\u8981\u6309\u7167\u81EA\u5DF1\u5B9E\u9645\u7684\u4FEE\u6539","source":"@site/docs/ProductDoc/MainBoard/fly-rpfmex/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-rpfmex","slug":"/ProductDoc/MainBoard/fly-rpfmex/cfg","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-rpfmex/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-rpfmex/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729220269000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"Distribution des broches","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-rpfmex/pin"},"next":{"title":"Flasher le firmware du bootloader","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-rpfmex/bl"}}'),p=r("52676"),t=r("79938");let o={sidebar_position:5,sidebar_label:"\u53C2\u8003\u914D\u7F6E"},s="\u53C2\u8003\u914D\u7F6E",a={},c=[];function d(n){let e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.header,{children:(0,p.jsx)(e.h1,{id:"\u53C2\u8003\u914D\u7F6E",children:"\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,p.jsx)(e.admonition,{type:"tip",children:(0,p.jsxs)(e.p,{children:["\u6587\u6863\u4E2D\u51FA\u73B0\u7684\u6240\u6709",(0,p.jsx)(e.code,{children:"*"}),"\u5305\u88F9\u7684\u5185\u5BB9\u9700\u8981\u6309\u7167\u81EA\u5DF1\u5B9E\u9645\u7684\u4FEE\u6539"]})}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-cfg",children:"## RPFMEX\u8BBE\u7F6E\n[mcu rpfmex]\nserial:  */dev/serial/by-id/usb-Klipper_rp2040_12345-if00*\n\n## RPFMEX\u6E29\u5EA6\n[temperature_sensor FLY-RPFMEX]\nsensor_type: temperature_mcu\nsensor_mcu: rpfmex\n\n## FAN0\n[fan]\npin: rpfmex:gpio11\n\n## FAN1\n[fan_generic fan]\npin: rpfmex:gpio12\n\n## M0\n[stepper_x]\nstep_pin: rpfmex:gpio6\ndir_pin: rpfmex:gpio5\nenable_pin: !rpfmex:gpio9\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio27\n## RPFMEX\u677F\u6709gpio27,gpio27,gpio29\u4E09\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n\n## M1\n[stepper_y]\nstep_pin: rpfmex:gpio1\ndir_pin: rpfmex:gpio0\nenable_pin: !rpfmex:gpio4\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio28\n## RPFMEX\u677F\u6709gpio27,gpio27,gpio29\u4E09\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n\n## M2\n[stepper_z]\nstep_pin: rpfmex:gpio22\ndir_pin: rpfmex:gpio21\nenable_pin: !rpfmex:gpio25\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio29\n## RPFMEX\u677F\u6709gpio27,gpio27,gpio29\u4E09\u4E2A\u9650\u4F4D\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n\n## M3\n[extruder]\nstep_pin: rpfmex:gpio17\ndir_pin: rpfmex:gpio16\nenable_pin: !rpfmex:gpio20\nmicrosteps: 16\nrotation_distance: 33.5\n\n\n[tmc2209 stepper_x]\nuart_pin: rpfmex:gpio7\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio8\n\n[tmc2209 stepper_y]\nuart_pin: rpfmex:gpio2\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio3\n\n[tmc2209 stepper_z]\nuart_pin: rpfmex:gpio23\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio24\n\n[tmc2209 extruder]\nuart_pin: rpfmex:gpio18\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio19\n\n\n## RGB\n[neopixel my_neopixel]\npin: rpfmex:gpio10\nchain_count: 12\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.0\ninitial_BLUE: 0.0\n\n\n## \u70ED\u654F\u8BBE\u7F6E\n[temperature_sensor PT100]\nsensor_pin: rpfmex:gpio27\n## RPFMEX\u677F\u6709gpio27,gpio27,gpio29\u4E09\u4E2A\u70ED\u654F\u5F15\u811A\u53EF\u7528\uFF0C\u6309\u7167\u5B9E\u9645\u63A5\u7EBF\u4FEE\u6539\u914D\u7F6E\n## \u70ED\u654F\u63A5\u9650\u4F4D\u63A5\u53E3\u7684GND\u548CGPIO\nsensor_type: ATC Semitec 104GT-2\npullup_resistor: 2200\n\n"})})]})}function f(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,p.jsx)(e,{...n,children:(0,p.jsx)(d,{...n})}):d(n)}},79938:function(n,e,r){r.d(e,{Z:function(){return s},a:function(){return o}});var i=r(75271);let p={},t=i.createContext(p);function o(n){let e=i.useContext(t);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(p):n.components||p:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);