"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["78357"],{3420:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>d,toc:()=>s,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d7/warning","title":"Points \xe0 consid\xe9rer pour la carte m\xe8re","description":"Voyant d\'alimentation","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d7/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d7","slug":"/ProductDoc/MainBoard/fly-d/fly-d7/warning","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d7/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d7/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Points \xe0 consid\xe9rer pour la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"T\xe9l\xe9chargement du firmware Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d7/malin"},"next":{"title":"FLY-D8 (F407)","permalink":"/fly-docs-next/fr/docs/category/fly-d8-f407"}}'),t=r("52676"),o=r("79938");let l={sidebar_position:10,sidebar_label:"Points \xe0 consid\xe9rer pour la carte m\xe8re"},a="Points \xe0 consid\xe9rer pour la carte m\xe8re",d={},s=[{value:"Voyant d&#39;alimentation",id:"voyant-dalimentation",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:3},{value:"Pilote",id:"pilote",level:2},{value:"Port de fin de course",id:"port-de-fin-de-course",level:2},{value:"Firmware",id:"firmware",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{Button:i,ImageView:l}=n;return!i&&m("Button",!0),!l&&m("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"points-\xe0-consid\xe9rer-pour-la-carte-m\xe8re",children:"Points \xe0 consid\xe9rer pour la carte m\xe8re"})}),"\n",(0,t.jsx)(n.h2,{id:"voyant-dalimentation",children:"Voyant d'alimentation"}),"\n",(0,t.jsx)(l,{image:r(27588).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lorsque l'alimentation se fait uniquement par TYPE-C sans autre alimentation de la carte m\xe8re, au moins deux voyants doivent s'allumer ",(0,t.jsx)(n.code,{children:"3.3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s avoir connect\xe9 l'alimentation de la carte m\xe8re, les voyants d'alimentation de la carte m\xe8re doivent s'allumer ",(0,t.jsx)(n.code,{children:"3.3V"}),", ",(0,t.jsx)(n.code,{children:"5V"}),", ",(0,t.jsx)(n.code,{children:"VCC"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d\xe9pannage",children:"D\xe9pannage"}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En l'absence de tout p\xe9riph\xe9rique externe (moteur, fin de course, 12864, etc.)"}),"\n",(0,t.jsxs)(n.li,{children:["L'alimentation uniquement par TYPE-C allumera au moins les LED ",(0,t.jsx)(n.code,{children:"3.3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si aucun voyant ne s'allume, cela indique un court-circuit, il est n\xe9cessaire de contacter le service client\xe8le apr\xe8s-vente"}),"\n",(0,t.jsxs)(n.li,{children:["Si l'un des voyants ",(0,t.jsx)(n.code,{children:"3.3V"})," ou ",(0,t.jsx)(n.code,{children:"5V"})," clignote, cela indique un court-circuit, il est n\xe9cessaire de contacter le service client\xe8le apr\xe8s-vente"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pilote",children:"Pilote"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La carte m\xe8re supporte un pilote externe     ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Guide de c\xe2blage et de configuration"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"port-de-fin-de-course",children:"Port de fin de course"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez noter l'ordre de connexion, pour les fins de course \xe0 trois fils, il faut faire attention aux connexions 5V, GND, S, une mauvaise connexion peut endommager la carte m\xe8re"}),"\n",(0,t.jsx)(n.li,{children:"Pour les fins de course \xe0 deux fils, il suffit de connecter S et GND"}),"\n",(0,t.jsx)(n.li,{children:"Pour les PL08 et autres interrupteurs de proximit\xe9, il est n\xe9cessaire d'ajouter une diode sur la borne du signal pour abaisser la tension \xe0 moins de 3.3V"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En raison de probl\xe8mes avec les boutons, le guide a \xe9t\xe9 mis \xe0 jour pour utiliser le firmware Katapult pour la programmation du firmware"}),"\n",(0,t.jsx)(n.li,{children:"Il est recommand\xe9 d'utiliser un ordinateur pour flasher le firmware Katapult puis d'utiliser le firmware Katapult pour flasher klipper"}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./flash/bl",children:"Programmation du BL"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27588:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/power-c101032b02814e64e859ceb8a7f57357.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var i=r(75271);let t={},o=i.createContext(t);function l(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);