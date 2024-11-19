"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[69554],{42467:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"DebugDoc/addon/led","title":"Extending Control to Drive LED with Plugins","description":"Original Document","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/addon/led.mdx","sourceDirName":"DebugDoc/addon","slug":"/DebugDoc/addon/led","permalink":"/fly-docs-next/en/docs/DebugDoc/addon/led","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/addon/led.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u5404\u7c7b\u63d2\u4ef6","permalink":"/fly-docs-next/en/docs/category/\u5404\u7c7b\u63d2\u4ef6"},"next":{"title":"\u5982\u4f55\u63d0\u95ee","permalink":"/fly-docs-next/en/docs/category/\u5982\u4f55\u63d0\u95ee"}}');var l=i(86070),r=i(15658);i(63436);const s={sidebar_position:1},o="Extending Control to Drive LED with Plugins",a={},d=[{value:"Installation",id:"installation",level:2},{value:"Reference Configuration",id:"reference-configuration",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"extending-control-to-drive-led-with-plugins",children:"Extending Control to Drive LED with Plugins"})}),"\n",(0,l.jsx)(n.p,{children:"Original Document"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"https://github.com/julianschill/klipper-led_effect\n"})}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsxs)(n.p,{children:["Please connect to your host machine via ",(0,l.jsx)(n.strong,{children:"WIFI"})," using an ",(0,l.jsx)(n.strong,{children:"SSH tool"})," such as ",(0,l.jsx)(n.strong,{children:"MobaXterm_Personal"}),", and ensure the following:"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Ensure that the Klipper firmware is installed on your host machine."})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Make sure the user logged in is the one who has installed Klipper."})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Ensure your input method is set to English."})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Ensure your host machine can normally search for the device."})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Ensure all the above precautions are followed; otherwise, you cannot proceed to the next step."})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"This module can be installed into an existing Klipper installation using an installation script."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"cd ~\ngit clone https://github.com/julianschill/klipper-led_effect.git\ncd klipper-led_effect\n./install-led_effect.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"reference-configuration",children:"Reference Configuration"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[neopixel TP_led]\npin: PB7\nchain_count: 25\n# Number of LEDs\n# Number of LEDs\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n[led_effect sb_nozzle_cooling]\nautostart:              false\nframe_rate:             24\nleds:\n    neopixel:TP_led (9,10)\nlayers:\n        breathing  3 1 top (0.0, 0.0, 1.0, 0.1)\n\n[led_effect rainbow]\nleds:\n    neopixel:TP_led\nautostart:                          true\nframe_rate:                         24\nlayers:\n    gradient  0.3  1 add (0.3, 0.0, 0.0),(0.0, 0.3, 0.0),(0.0, 0.0, 0.3)\n"})}),"\n",(0,l.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}}}]);