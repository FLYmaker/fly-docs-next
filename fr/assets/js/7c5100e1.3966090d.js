"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["78982"],{17556:function(e,n,t){t(52676)},43001:function(e,n,t){t(52676)},62718:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"ProductDoc/SBC/fly-lite/lite2.1/screen","title":"Connexion et configuration de l\'\xe9cran","description":"* lite2.1 n\xe9cessite une connexion SSH au syst\xe8me, puis l\'entr\xe9e de la commande suivante pour utiliser la configuration de l\'\xe9cran Fly Tools","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/SBC/fly-lite/lite2.1/screen.mdx","sourceDirName":"ProductDoc/SBC/fly-lite/lite2.1","slug":"/ProductDoc/SBC/fly-lite/lite2.1/screen","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2.1/screen","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/SBC/fly-lite/lite2.1/screen.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Connexion et configuration de l\'\xe9cran"},"sidebar":"tutorialSidebar","previous":{"title":"Utilisation de l\'acc\xe9l\xe9rom\xe8tre","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2.1/adxl"},"next":{"title":"Mod\xe8le 3D et sch\xe9ma","permalink":"/fly-docs-next/fr/docs/ProductDoc/SBC/fly-lite/lite2.1/schematic"}}'),c=t("52676"),s=t("79938");t("43001"),t("17556");let r={sidebar_position:6,sidebar_label:"Connexion et configuration de l'\xe9cran"},o="Connexion et configuration de l'\xe9cran",a={},l=[];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:i,TabItem:r,Tabs:o}=n;return!i&&f("ImageView",!0),!r&&f("TabItem",!0),!o&&f("Tabs",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"connexion-et-configuration-de-l\xe9cran",children:"Connexion et configuration de l'\xe9cran"})}),"\n",(0,c.jsxs)(n.admonition,{type:"info",children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"lite2.1 n\xe9cessite une connexion SSH au syst\xe8me, puis l'entr\xe9e de la commande suivante pour utiliser la configuration de l'\xe9cran Fly Tools"}),"\n"]}),(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"sudo sed -i 's/board=fly-lite2/board=fly-lite2.1/g' /boot/FlyOS-Env.txt\n"})})]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Fly Tools n\xe9cessite que la machine h\xf4te soit connect\xe9e \xe0 Internet pour acc\xe9der via l'",(0,c.jsx)(n.code,{children:"IP+:9999"})," de la machine h\xf4te"]}),"\n",(0,c.jsxs)(n.li,{children:["Par exemple ",(0,c.jsx)(n.code,{children:"192.168.6.110:9999"})]}),"\n"]})}),"\n",(0,c.jsxs)(o,{children:[(0,c.jsx)(r,{value:"tft",label:"Connexion TFT",default:!0,children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Il est n\xe9cessaire d'activer KS dans FLY TOOLS"}),"\n",(0,c.jsx)(i,{image:t(24906).Z,size:"80%",align:"center"}),"\n",(0,c.jsxs)(o,{children:[(0,c.jsx)(r,{value:"tft",label:"Configuration de l'\xe9cran capacitif TFT",default:!0,children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["La configuration capacitive doit \xeatre d\xe9finie sur ",(0,c.jsx)(n.code,{children:"fly-tft-v2-c"})]}),"\n",(0,c.jsxs)(n.li,{children:["Veuillez v\xe9rifier que le commutateur sur le dos de l'\xe9cran est sur ",(0,c.jsx)(n.code,{children:"Cap"}),"\n",(0,c.jsx)(i,{image:t(17633).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})}),(0,c.jsx)(r,{value:"hdmi",label:"Configuration de l'\xe9cran r\xe9sistif TFT",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["La configuration capacitive doit \xeatre d\xe9finie sur ",(0,c.jsx)(n.code,{children:"fly-tft-v2-r"})]}),"\n",(0,c.jsxs)(n.li,{children:["Veuillez v\xe9rifier que le commutateur sur le dos de l'\xe9cran est sur ",(0,c.jsx)(n.code,{children:"Resi"}),"\n",(0,c.jsx)(i,{image:t(9836).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Connexion de l'\xe9cran TFT FLY-Lite"}),"\n",(0,c.jsx)(i,{image:t(64315).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})}),(0,c.jsx)(r,{value:"hdmi",label:"Connexion HDMI",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["Il est n\xe9cessaire de configurer l'\xe9cran dans FLY TOOLS comme indiqu\xe9 ci-dessous et d'activer KS","\n",(0,c.jsx)(i,{image:t(49605).Z,size:"80%",align:"center"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["Connexion de l'\xe9cran HDMI FLY-Lite","\n",(0,c.jsx)(i,{image:t(50360).Z,size:"80%",align:"center"}),"\n"]}),"\n"]})})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},59857:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/c8-hdmi-cd859bb55f80292db1222e2634136419.webp"},81811:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/c8-tft-c-60befdced70beda1a81ed86b7afd0ed7.webp"},58496:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/c8-tft-r-3766ea1c02cdc4c9ef7e8868e32d6acb.webp"},40456:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/c8-tft-690a336b3039af1bc0e06ad5359a0661.webp"},84901:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/gemini-tft-f46194d58206eb4b29c1d94987bf1c7f.webp"},58711:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/hdmi-00416a6ea962389217d3fc4fc0de12fd.webp"},80120:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/lcd-hdmi-fpc-40cf4b4320172c1ec96cc9de816d94e2.webp"},88427:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pi-tft-288f49b2fac3f2d4b9d7edae94a55e6b.webp"},72492:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pi-v2-tft-c-808c1a2103cf43fcec8f7cfbf3f89356.webp"},94837:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pi-v2-tft-r-a4d8990471896463e22944457b89ef5b.webp"},28584:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/piv2-hdmi-25e60db01b4640b794392f61a6de03fb.webp"},84463:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/piv2-tft-5ce666c68d82ead2fe4a7c7934a782ba.webp"},84356:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/pro-hdmi-e60dcf998411cc296eb2c32bbe048243.webp"},83483:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/tft-66e8b127319c9b658dfe526527969012.webp"},49605:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/hdmi-8e62eafd23a65a88755e5fd4683d090e.webp"},50360:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/hdmi1-38ea686b29d6453689df631c576b8992.webp"},24906:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/ks-8a8fa1d8f84a645d1f41ece558df7b83.webp"},17633:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/tft-c-d1e527ca26086a67750b8b72df55a502.webp"},9836:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/tft-r-e39bf9e01355a926e8bd414147425135.webp"},64315:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/tftv2-0006e516cbc5de30404afb9bfd32ce2f.webp"},7631:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/hdmi1-38ea686b29d6453689df631c576b8992.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(75271);let c={},s=i.createContext(c);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);