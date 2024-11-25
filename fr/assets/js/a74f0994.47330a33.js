"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["23229"],{91855:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return s}});var i=r(52676),t=r(79938);let s=[];function l(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Le nom original de Katapult \xe9tait CanBoot, puis il a \xe9t\xe9 chang\xe9."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 flash\xe9 via DFU ou une autre m\xe9thode, il permet la mise \xe0 jour du firmware d'un simple clic de commande."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Double-cliquez sur le bouton de r\xe9initialisation ou coupez l'alimentation deux fois rapidement pour entrer dans le firmware Katapult, et les LED configur\xe9es \xe0 l'avance clignoteront. S'il n'y a pas de configuration, elles ne clignoteront pas."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour flasher le firmware et ne peut pas se connecter \xe0 Klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes pour se connecter \xe0 l'ordinateur h\xf4te :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de compilation du firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Impossible d'utiliser des commandes pour mettre \xe0 jour le firmware en un clic, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Une connexion trop longue peut provoquer des interf\xe9rences."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},49253:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>c,assets:()=>o,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/index","title":"index","description":"* La D8 est d\xe9j\xe0 pr\xe9charg\xe9e avec le firmware Katapult \xe0 l\'usine","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d8-f407/flash","slug":"/ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732249869000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Instructions pour la gravure du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"D8-F407\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/d8-f407\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"Flashing du firmware USB","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d8-f407/flash/usb"}}'),t=r("52676"),s=r("79938");r("91855");let l={sidebar_position:1,sidebar_label:"Instructions pour la gravure du firmware"},a="Instructions pour la gravure du firmware",o={},u=[{value:"Comment d\xe9terminer quel firmware vous avez besoin",id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,s.a)(),...e.components},{Button:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Button",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Points \xe0 noter",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La D8 est d\xe9j\xe0 pr\xe9charg\xe9e avec le firmware Katapult \xe0 l'usine"}),"\n"]})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"instructions-pour-la-gravure-du-firmware",children:"Instructions pour la gravure du firmware"})}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La gravure du firmware de la carte m\xe8re n\xe9cessite l'utilisation de Katapult pour graver Klipper"}),"\n",(0,t.jsx)(n.li,{children:"Si vous \xeates s\xfbr que la carte m\xe8re a d\xe9j\xe0 Katapult install\xe9, il n'est pas n\xe9cessaire de suivre les instructions de gravure de Katapult \xe0 la fin, ce n'est qu'une pr\xe9caution au cas o\xf9 le firmware Katapult de la carte m\xe8re n'aurait pas \xe9t\xe9 grav\xe9 avec succ\xe8s"}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez appuyer rapidement deux fois sur le bouton de r\xe9initialisation pour voir si un LED sur la carte m\xe8re clignote, si c'est le cas, cela signifie que la carte m\xe8re est en mode Katapult"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"comment-d\xe9terminer-quel-firmware-vous-avez-besoin",children:"Comment d\xe9terminer quel firmware vous avez besoin"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez noter que vous n'avez besoin de flasher qu'un seul type de firmware"}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La D8 peut \xeatre connect\xe9e \xe0 l'ordinateur h\xf4te par les moyens suivants"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"./usb",children:"Firmware USB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Communication fiable et stable"}),"\n",(0,t.jsx)(n.li,{children:"Inconv\xe9nients : Si plusieurs dispositifs USB sont connect\xe9s, cela peut affecter la transmission de donn\xe9es"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"./can",children:"Firmware de pont USB"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Peut connecter plusieurs dispositifs sans occuper de port USB"}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : L'utilisation conjointe avec ",(0,t.jsx)(n.code,{children:"KlipperScreen"})," peut provoquer des erreurs telles que des timeouts lors du retour \xe0 l'origine."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var i=r(75271);let t={},s=i.createContext(t);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);