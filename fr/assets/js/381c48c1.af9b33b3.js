"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["65593"],{91855:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(52676),l=r(79938);let t=[];function s(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Le nom original de Katapult \xe9tait CanBoot, puis il a \xe9t\xe9 chang\xe9."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 flash\xe9 via DFU ou une autre m\xe9thode, il permet la mise \xe0 jour du firmware d'un simple clic de commande."}),"\n",(0,i.jsx)(n.li,{children:"Avantages : Double-cliquez sur le bouton de r\xe9initialisation ou coupez l'alimentation deux fois rapidement pour entrer dans le firmware Katapult, et les LED configur\xe9es \xe0 l'avance clignoteront. S'il n'y a pas de configuration, elles ne clignoteront pas."}),"\n",(0,i.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour flasher le firmware et ne peut pas se connecter \xe0 Klipper !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes pour se connecter \xe0 l'ordinateur h\xf4te :","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Connexion CAN","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de compilation du firmware."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion RS232","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Impossible d'utiliser des commandes pour mettre \xe0 jour le firmware en un clic, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Connexion USB","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,i.jsx)(n.li,{children:"Inconv\xe9nients : Une connexion trop longue peut provoquer des interf\xe9rences."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},76626:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(52676),l=r(79938);let t=[];function s(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Installer l'outil de flashage"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Entrez les instructions suivantes dans SSH"}),"\n",(0,i.jsx)(n.li,{children:"Ne doit \xeatre ex\xe9cut\xe9 que lors de la premi\xe8re installation, pas n\xe9cessairement apr\xe8s"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,i.jsx)(t,{image:r(90707).Z,size:"100%",align:"left"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Ex\xe9cutez les commandes suivantes pour v\xe9rifier si la connexion est r\xe9ussie."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Entrez ",(0,i.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Si l'appareil ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," n'est pas pr\xe9sent, essayez de repasser en ",(0,i.jsx)(n.strong,{children:"mode de flashage"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["En raison de probl\xe8mes de version du syst\xe8me, d'autres noms peuvent s'afficher, si ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," est pr\xe9sent, cela signifie que le mode de flashage est actif"]}),"\n",(0,i.jsx)(t,{image:r(11785).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Attention",type:"warning",children:(0,i.jsxs)(n.p,{children:["Passez \xe0 l'\xe9tape suivante uniquement si ",(0,i.jsx)(n.code,{children:"2e8a:0003"})," est pr\xe9sent"]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"T\xe9l\xe9chargez le firmware pr\xe9compil\xe9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ici, vous trouverez des firmwares pr\xe9compil\xe9s"}),"\n",(0,i.jsx)(n.li,{children:"Veuillez noter que l'ordinateur h\xf4te doit \xeatre connect\xe9 \xe0 Internet pour l'installation"}),"\n",(0,i.jsx)(n.li,{children:"L'ordinateur h\xf4te doit ex\xe9cuter la commande suivante pour t\xe9l\xe9charger le package firmware"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si vous avez d\xe9j\xe0 t\xe9l\xe9charg\xe9 le package firmware, il est recommand\xe9 de le mettre \xe0 jour avant de poursuivre les op\xe9rations restantes"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},5109:function(e,n,r){r.d(n,{ZP:function(){return a},d$:function(){return t}});var i=r(52676),l=r(79938);let t=[];function s(e){let n={code:"code",li:"li",ul:"ul",...(0,l.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Pr\xe9parez un c\xe2ble de donn\xe9es avec fonction de transfert de donn\xe9es"}),"\n",(0,i.jsx)(n.li,{children:"T\xe9l\xe9chargez le firmware sur l'ordinateur"}),"\n",(0,i.jsxs)(n.li,{children:["Connectez le cavalier BOOT ou maintenez-le enfonc\xe9 et connectez-le \xe0 l'ordinateur, un disque ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," appara\xeetra","\n",(0,i.jsx)(t,{image:r(46065).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Retirez le cavalier BOOT ou rel\xe2chez le bouton !!!"}),"\n",(0,i.jsxs)(n.li,{children:["Copiez le firmware \xe0 flasher, veuillez noter qu'il doit avoir l'extension ",(0,i.jsx)(n.code,{children:"UF2"})," !!! (Ne modifiez pas l'extension, cela ne sert \xe0 rien)"]}),"\n",(0,i.jsxs)(n.li,{children:["R\xe9f\xe9rence","\n",(0,i.jsx)(t,{image:r(39995).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Une fois le firmware copi\xe9, le disque ",(0,i.jsx)(n.code,{children:"RPI-RP2"})," dispara\xeetra automatiquement, le flashage du firmware est alors termin\xe9 !"]}),"\n"]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},12391:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>u,toc:()=>p,frontMatter:()=>c});var i=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/bl","title":"Firmware Katapult","description":"Description du firmware Katapult","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-ercf/ercfv2/flash","slug":"/ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/bl","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Firmware BL, veuillez ignorer"},"sidebar":"tutorialSidebar","previous":{"title":"Tutoriel de recherche d\'ID","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/flash/id"},"next":{"title":"C\xe2blage de la carte m\xe8re","permalink":"/fly-docs-next/fr/docs/ProductDoc/ToolBoard/fly-ercf/ercfv2/wiring"}}'),l=r("52676"),t=r("79938"),s=r("5109"),a=r("76626"),o=r("91855");let c={sidebar_position:6,sidebar_label:"Firmware BL, veuillez ignorer"},d="Firmware Katapult",u={},p=[{value:"Description du firmware Katapult",id:"description-du-firmware-katapult",level:2},...o.d$,{value:"Entrer en mode flashage",id:"entrer-en-mode-flashage",level:2},{value:"Flashage du firmware",id:"flashage-du-firmware",level:2},...s.d$,...a.d$,{value:"V\xe9rification du d\xe9marrage du firmware",id:"v\xe9rification-du-d\xe9marrage-du-firmware",level:2}];function f(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Button:i,ImageView:c,TabItem:d,Tabs:u}=n;return!i&&m("Button",!0),!c&&m("ImageView",!0),!d&&m("TabItem",!0),!u&&m("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"firmware-katapult",children:"Firmware Katapult"})}),"\n",(0,l.jsx)(n.h2,{id:"description-du-firmware-katapult",children:"Description du firmware Katapult"}),"\n",(0,l.jsx)(o.ZP,{}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ERCF V2 prend en charge CANR, S232, USB"}),"\n",(0,l.jsx)(n.li,{children:"Ici, seul le firmware CAN est fourni avec des vitesses de 500K et 1M"}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"entrer-en-mode-flashage",children:"Entrer en mode flashage"}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.p,{children:["Le bouton entour\xe9 est le ",(0,l.jsx)(n.code,{children:"BOOT"})]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Pour entrer en mode flashage, il faut que la carte m\xe8re soit compl\xe8tement d\xe9connect\xe9e de l'alimentation. Appuyez sur le bouton BOOT puis connectez le c\xe2ble de donn\xe9es d'un c\xf4t\xe9 \xe0 la carte m\xe8re et de l'autre \xe0 l'ordinateur h\xf4te","\n",(0,l.jsx)(c,{image:r(52312).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"flashage-du-firmware",children:"Flashage du firmware"}),"\n",(0,l.jsxs)(u,{children:[(0,l.jsxs)(d,{value:"win",label:"Tutoriel de flashage sous Windows",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Firmware Katapult pour ERCF V2 ",(0,l.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/ERCF_V2.zip",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),(0,l.jsx)(s.ZP,{})]}),(0,l.jsxs)(d,{value:"linux",label:"Tutoriel de flashage depuis l'h\xf4te",children:[(0,l.jsx)(a.ZP,{}),(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Flashage du firmware"}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Il suffit de flasher l'un des firmwares"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Voici la commande de flashage pour le firmware \xe0 500K CAN"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/ERCF/FLY_ERCFV2_CANBOOT_CAN_500K.uf2\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Voici la commande de flashage pour le firmware \xe0 1M CAN"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/ERCF/FLY_ERCFV2_CANBOOT_CAN_1M.uf2\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Voici la commande de flashage pour le firmware USB"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/FLY_ERCFV2_CANBOOT_USB.uf2\n"})}),"\n"]}),"\n"]}),(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Si le message suivant appara\xeet, le flashage a r\xe9ussi"}),"\n",(0,l.jsx)(c,{image:r(68771).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Apr\xe8s le flashage, il est n\xe9cessaire de d\xe9connecter compl\xe8tement la carte m\xe8re de l'alimentation."})})]})]}),"\n",(0,l.jsx)(n.h2,{id:"v\xe9rification-du-d\xe9marrage-du-firmware",children:"V\xe9rification du d\xe9marrage du firmware"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Si le firmware d\xe9marre correctement, la LED clignotera","\n",(0,l.jsx)(c,{image:r(38465).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},90707:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2040-572286e2bbe8bbb4e11479086c8950ab.webp"},68771:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/flash3-ca07b1c5da933a137dbf5155a965a150.webp"},46065:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/uf2-c04612a2d39377a5d2deda5ab967e7cf.webp"},39995:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/uf21-2c911712248e23dca385b8be6dc6f628.webp"},11785:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/2e8a-387d46703c1d67dcf7b6fd514e28df22.webp"},52312:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/boot-87a44735c653d3bbc0c60940ae9d5a50.webp"},38465:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/led-a0dfc928386ffbd4fa6d7f867ae913b3.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return s}});var i=r(75271);let l={},t=i.createContext(l);function s(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);