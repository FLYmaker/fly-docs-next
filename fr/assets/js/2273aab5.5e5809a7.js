"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["51099"],{83229:function(e,n,r){r.r(n),r.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/warning","title":"Remarques sur la carte m\xe8re","description":"Voyant d\'alimentation","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/warning.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/warning","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/warning","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/warning.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"sidebar_label":"Remarques sur la carte m\xe8re"},"sidebar":"tutorialSidebar","previous":{"title":"T\xe9l\xe9chargement du firmware Marlin","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-d/fly-d5/marlin"},"next":{"title":"FLY-D7","permalink":"/fly-docs-next/fr/docs/category/fly-d7"}}'),t=r("52676"),a=r("79938");let l={sidebar_position:10,sidebar_label:"Remarques sur la carte m\xe8re"},s="Remarques sur la carte m\xe8re",o={},d=[{value:"Voyant d&#39;alimentation",id:"voyant-dalimentation",level:2},{value:"D\xe9pannage",id:"d\xe9pannage",level:3},{value:"Drivers",id:"drivers",level:2},{value:"Ports de fin de course",id:"ports-de-fin-de-course",level:2},{value:"Firmware",id:"firmware",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,a.a)(),...e.components},{Button:i,ImageView:l}=n;return!i&&m("Button",!0),!l&&m("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"remarques-sur-la-carte-m\xe8re",children:"Remarques sur la carte m\xe8re"})}),"\n",(0,t.jsx)(n.h2,{id:"voyant-dalimentation",children:"Voyant d'alimentation"}),"\n",(0,t.jsx)(l,{image:r(62387).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lorsqu'il n'est aliment\xe9 que par TYPE-C sans autre source d'alimentation de la carte m\xe8re, au moins deux voyants ",(0,t.jsx)(n.code,{children:"3,3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})," doivent s'allumer."]}),"\n",(0,t.jsxs)(n.li,{children:["Une fois l'alimentation de la carte m\xe8re connect\xe9e, les voyants de la carte m\xe8re devraient s'allumer ",(0,t.jsx)(n.code,{children:"3,3V"}),", ",(0,t.jsx)(n.code,{children:"5V"}),", ",(0,t.jsx)(n.code,{children:"VCC"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"d\xe9pannage",children:"D\xe9pannage"}),"\n",(0,t.jsx)(n.admonition,{title:"A savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sans aucun p\xe9riph\xe9rique externe (drivers, fins de course, 12864, etc.)"}),"\n",(0,t.jsxs)(n.li,{children:["Avec seulement l'alimentation par TYPE-C, au moins les deux LED ",(0,t.jsx)(n.code,{children:"3,3V"})," et ",(0,t.jsx)(n.code,{children:"5V"})," resteront allum\xe9es en permanence."]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si aucun voyant ne s'allume, cela indique un court-circuit, contactez le service client."}),"\n",(0,t.jsxs)(n.li,{children:["Si l'un des voyants ",(0,t.jsx)(n.code,{children:"3,3V"})," ou ",(0,t.jsx)(n.code,{children:"5V"})," clignote, cela indique un court-circuit, contactez le service client."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"drivers",children:"Drivers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La carte m\xe8re supporte des drivers externes     ",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"/docs/ProductDoc/ModuleDrive/servo-drive",children:"Tutoriel de c\xe2blage et de configuration"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ports-de-fin-de-course",children:"Ports de fin de course"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Veuillez noter l'ordre de c\xe2blage, les fins de course \xe0 trois fils n\xe9cessitent une attention particuli\xe8re pour les connexions 5V, GND, S, car une mauvaise connexion peut endommager la carte m\xe8re."}),"\n",(0,t.jsx)(n.li,{children:"Si deux fils sont connect\xe9s directement, connectez-les \xe0 S et GND."}),"\n",(0,t.jsx)(n.li,{children:"Pour PL08 et autres capteurs de proximit\xe9, un diode doit \xeatre ajout\xe9e \xe0 l'ext\xe9rieur du port de signal pour abaisser la tension en dessous de 3,3V."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"firmware",children:"Firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En raison de probl\xe8mes avec les boutons, le tutoriel a \xe9t\xe9 mis \xe0 jour pour utiliser le firmware Katapult pour le flashage du firmware."}),"\n",(0,t.jsx)(n.li,{children:"Il est recommand\xe9 d'utiliser un ordinateur pour flasher le firmware Katapult puis de flasher klipper via le firmware Katapult."}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(i,{variant:"contained",disableElevation:!0,href:"./flash/bl",children:"Flashage du BL"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function m(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62387:function(e,n,r){r.d(n,{Z:function(){return i}});let i=r.p+"assets/images/power-db8bc21f0554541a283f05bbe759b7f8.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return l}});var i=r(75271);let t={},a=i.createContext(t);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);