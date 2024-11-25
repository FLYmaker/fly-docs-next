"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["64677"],{91855:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return l}});var i=r(52676),t=r(79938);let l=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Le nom original de Katapult \xe9tait CanBoot, puis il a \xe9t\xe9 chang\xe9."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 flash\xe9 via DFU ou une autre m\xe9thode, il permet la mise \xe0 jour du firmware d'un simple clic de commande."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Double-cliquez sur le bouton de r\xe9initialisation ou coupez l'alimentation deux fois rapidement pour entrer dans le firmware Katapult, et les LED configur\xe9es \xe0 l'avance clignoteront. S'il n'y a pas de configuration, elles ne clignoteront pas."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour flasher le firmware et ne peut pas se connecter \xe0 Klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes pour se connecter \xe0 l'ordinateur h\xf4te :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de compilation du firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Impossible d'utiliser des commandes pour mettre \xe0 jour le firmware en un clic, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Une connexion trop longue peut provoquer des interf\xe9rences."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},20024:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>u,toc:()=>c,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/index","title":"index","description":"* Le SHT36 V3 est pr\xe9-flash\xe9 avec le firmware Katapult pour connexion CAN, \xe0 une vitesse de 1M","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/index.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Instructions de flashage du firmware"},"sidebar":"tutorialSidebar","previous":{"title":"SHT36 V3 \u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55","permalink":"/fly-docs-next/fr/docs/category/sht36-v3-\u56FA\u4EF6\u7F16\u8BD1\u4E0E\u70E7\u5F55"},"next":{"title":"Compilation et enregistrement du firmware CAN","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v3/flash/can"}}'),t=r("52676"),l=r("79938"),s=r("91855");let a={sidebar_position:1,sidebar_label:"Instructions de flashage du firmware"},o="Instructions de flashage du firmware",u={},c=[{value:"Comment d\xe9terminer de quel firmware vous avez besoin",id:"comment-d\xe9terminer-de-quel-firmware-vous-avez-besoin",level:2},{value:"Explications sur le firmware Katapult",id:"explications-sur-le-firmware-katapult",level:2},...s.d$];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ul:"ul",...(0,l.a)(),...e.components},{Button:i,ImageView:a}=n;return!i&&p("Button",!0),!a&&p("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le SHT36 V3 est pr\xe9-flash\xe9 avec le firmware Katapult pour connexion CAN, \xe0 une vitesse de 1M"}),"\n",(0,t.jsx)(n.li,{children:"Le firmware Katapult pour connexion CAN du SHT36 V3 a des vitesses de 500K et 1M, vous pouvez le flasher vous-m\xeame si n\xe9cessaire"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./bl",children:"Flashage du firmware Katapult"}),"\n"]}),"\n"]})}),"\n",(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"instructions-de-flashage-du-firmware",children:"Instructions de flashage du firmware"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La compilation du firmware et le flashage du firmware n\xe9cessitent l'utilisation d'un logiciel de contr\xf4le"}),"\n",(0,t.jsx)(n.li,{children:"Le SHT36 V3 peut \xeatre connect\xe9 au logiciel de contr\xf4le via RS232 ou CAN"}),"\n",(0,t.jsxs)(n.li,{children:["RS232 et CAN doivent \xeatre connect\xe9s en utilisant ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"})]}),"\n",(0,t.jsxs)(n.li,{children:["Voici le style du c\xe2ble de donn\xe9es ",(0,t.jsx)(n.code,{children:"XT30(2+2)-F"}),"\n",(0,t.jsx)(a,{image:r(98043).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le flashage du firmware de la carte m\xe8re n\xe9cessite de flasher Klipper via Katapult"}),"\n",(0,t.jsx)(n.li,{children:"Si vous \xeates certain que la carte m\xe8re a d\xe9j\xe0 \xe9t\xe9 flash\xe9e avec Katapult, il n'est pas n\xe9cessaire de flasher \xe0 nouveau le firmware Katapult, c'est juste une pr\xe9caution au cas o\xf9 le flashage du firmware Katapult de la carte m\xe8re aurait \xe9chou\xe9"}),"\n",(0,t.jsx)(n.li,{children:"Vous pouvez appuyer rapidement deux fois sur le bouton de r\xe9initialisation pour voir si un LED sur la carte m\xe8re commence \xe0 clignoter, si c'est le cas, cela indique que la carte m\xe8re est entr\xe9e en mode firmware Katapult"}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"comment-d\xe9terminer-de-quel-firmware-vous-avez-besoin",children:"Comment d\xe9terminer de quel firmware vous avez besoin"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le SHT36 V3 peut se connecter au logiciel de contr\xf4le de la mani\xe8re suivante"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./can",children:"Firmware CAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Avantages : Si le firmware ",(0,t.jsx)(n.code,{children:"Katapult"})," est install\xe9, vous pouvez mettre \xe0 jour le firmware sans toucher \xe0 la carte m\xe8re, et il supporte la connexion par bus"]}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : Peut causer des erreurs de timeout de retour \xe0 l'origine lorsqu'il est utilis\xe9 avec ",(0,t.jsx)(n.code,{children:"KlipperScreen"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Conseils : Assurez-vous que le logiciel de contr\xf4le supporte CAN, et n\xe9cessite UTOC ou une carte m\xe8re avec un firmware de pont"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./rs232",children:"Firmware RS232"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Avantages : Pas besoin de logiciels sp\xe9ciaux pour l'utiliser, communication fiable et stable"}),"\n",(0,t.jsxs)(n.li,{children:["Inconv\xe9nients : Pour mettre \xe0 jour le firmware, il faut entrer en mode DFU manuel ou double-cliquer sur RST pour entrer en mode ",(0,t.jsx)(n.code,{children:"Katapult"})," pour mettre \xe0 jour le firmware"]}),"\n",(0,t.jsx)(n.li,{children:"Conseils : N\xe9cessite d'\xeatre utilis\xe9 avec G2T ou UTOR"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explications-sur-le-firmware-katapult",children:"Explications sur le firmware Katapult"}),"\n",(0,t.jsx)(s.ZP,{})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},98043:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/xt30-742629a50a3b92c13e2f62b56ee806a9.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(75271);let t={},l=i.createContext(t);function s(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);