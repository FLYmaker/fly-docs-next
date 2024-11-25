"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["83236"],{2037:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>a});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super8/wiring","title":"Connexion de la carte m\xe8re","description":"Sch\xe9ma des interfaces","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super8","slug":"/ProductDoc/MainBoard/fly-super/fly-super8/wiring","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-super/fly-super8/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Connexion de la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"Firmware BL, veuillez ignorer","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-super/fly-super8/flash/bl"},"next":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-super/fly-super8/cfg"}}'),t=i("52676"),s=i("79938");let a={sidebar_position:4,sidebar_label:"Connexion de la carte m\xe8re"},l="Connexion de la carte m\xe8re",o={},d=[{value:"Sch\xe9ma des interfaces",id:"sch\xe9ma-des-interfaces",level:2},{value:"Explication des interfaces",id:"explication-des-interfaces",level:3},{value:"Explication des broches",id:"explication-des-broches",level:3},{value:"Connexion de l&#39;alimentation",id:"connexion-de-lalimentation",level:2},{value:"Installation du driver",id:"installation-du-driver",level:2},{value:"Saut de la carte m\xe8re",id:"saut-de-la-carte-m\xe8re",level:3},{value:"Installation du driver",id:"installation-du-driver-1",level:3}];function c(e){let n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"connexion-de-la-carte-m\xe8re",children:"Connexion de la carte m\xe8re"})}),"\n",(0,t.jsx)(n.h2,{id:"sch\xe9ma-des-interfaces",children:"Sch\xe9ma des interfaces"}),"\n",(0,t.jsx)(n.h3,{id:"explication-des-interfaces",children:"Explication des interfaces"}),"\n",(0,t.jsx)(r,{image:i(32728).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"explication-des-broches",children:"Explication des broches"}),"\n",(0,t.jsx)(r,{image:i(38233).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"connexion-de-lalimentation",children:"Connexion de l'alimentation"}),"\n",(0,t.jsx)(r,{image:i(38707).Z,size:"40%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Installation du fusible"}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(84921).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"installation-du-driver",children:"Installation du driver"}),"\n",(0,t.jsx)(n.h3,{id:"saut-de-la-carte-m\xe8re",children:"Saut de la carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode STEP/DIR."})," Dans ce mode, la subdivision est d\xe9finie par l'utilisation de cavaliers, et le courant est ajust\xe9 par un potentiom\xe8tre. Le driver A4988 est le plus courant, et n\xe9cessite de consulter la table de configuration de subdivision fournie par le fabricant, puis de r\xe9gler la subdivision par les cavaliers."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode UART."})," Les drivers les plus couramment utilis\xe9s dans ce mode sont : TMC2208, TMC2209, TMC2226, etc. Ces puces de driver peuvent communiquer de mani\xe8re asynchrone avec le contr\xf4leur principal via UART, permettant de configurer la subdivision, le courant de fonctionnement, le mode silencieux, etc., par le fichier de configuration."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Mode SPI."})," Les drivers les plus couramment utilis\xe9s dans ce mode sont : TMC5160, TMC2230, etc. Ces puces de driver communiquent de mani\xe8re synchrone avec le contr\xf4leur principal via SPI, et de m\xeame, permettent de configurer la subdivision, le courant de fonctionnement, le mode silencieux, etc., par le fichier de configuration."]}),"\n",(0,t.jsx)(r,{image:i(66607).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"installation-du-driver-1",children:"Installation du driver"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Avant l'installation, il est n\xe9cessaire de v\xe9rifier le driver pour \xe9viter d'endommager le driver ou la carte m\xe8re."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Driver FLY :"})," Si vous n'utilisez pas la fonction de retour \xe0 z\xe9ro sans fin, veuillez positionner l'interrupteur DIP sur 1 ; au contraire, si vous souhaitez utiliser cette fonction, veuillez positionner l'interrupteur DIP sur ON."]}),"\n",(0,t.jsx)(r,{image:i(16415).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Attention !!! Lors de l'installation du module driver, assurez-vous que la direction d'insertion est correcte, c'est-\xe0-dire que la broche EN est en haut \xe0 gauche, sinon cela pourrait endommager le driver ou m\xeame la carte m\xe8re !!! N'oubliez pas de coller une plaque de refroidissement sur le driver !!!"})}),"\n"]})}),"\n",(0,t.jsx)(r,{image:i(92792).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},32728:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/interface-973c8df3af127f999125c3550302f538.webp"},38233:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/pin-a59579558a31f210d3ddedb7b2fa12d7.webp"},66607:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/drive-dip-aff3fda803e9be2628f35059c8849057.webp"},92792:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/drive-install-a1f9947c4f7a2a8724aabab95c5fab38.webp"},16415:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fly2209-f37b9e1a5bd36dc1839d7558663806b8.webp"},84921:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fuse-57422a25a9e3aff04511b3d3f5988047.webp"},38707:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/power-cc79c893a5efc98483688fa7f8b189b1.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return a}});var r=i(75271);let t={},s=r.createContext(t);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);