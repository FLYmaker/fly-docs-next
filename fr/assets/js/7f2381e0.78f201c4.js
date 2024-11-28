"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["31753"],{19318:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var r=i(52676),t=i(79938);let s=[{value:"Utilisation de DSI",id:"utilisation-de-dsi",level:2}];function l(e){let n={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"utilisation-de-dsi",children:"Utilisation de DSI"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Une fois la gravure de l'image termin\xe9e, entrez dans /boot/config.txt et ajoutez la commande ci-dessous"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"dtoverlay=vc4-kms-dsi-7inch\n"})}),"\n",(0,r.jsx)(s,{image:i(75699).Z,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enregistrez et quittez"}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},99376:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>u,toc:()=>p,frontMatter:()=>d});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-lcd/dsi","title":"Utilisation de DSI","description":"Ce tutoriel utilise le Raspberry Pi 4B comme exemple","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-lcd/dsi.mdx","sourceDirName":"ProductDoc/Screen/fly-lcd","slug":"/ProductDoc/Screen/fly-lcd/dsi","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-lcd/dsi","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-lcd/dsi.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"Utilisation de DSI"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-lcd/"},"next":{"title":"HDMI","permalink":"/fly-docs-next/fr/docs/category/hdmi"}}'),t=i("52676"),s=i("79938"),l=i("19318");function a(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"raspberry-pi-5-avec-mipi",children:"Raspberry Pi 5 avec MIPI"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"FLY_MIPI est un module d'adaptation sp\xe9cialement con\xe7u pour le Raspberry Pi 5, permettant d'utiliser directement les appareils DSI et CSI via une adaptation."})}),"\n",(0,t.jsx)(n.h3,{id:"branchement-du-raspberry-pi-5-avec-mipi",children:"Branchement du Raspberry Pi 5 avec MIPI"}),"\n",(0,t.jsx)(n.admonition,{title:"\xc0 savoir",type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Les interfaces DSI et CSI du Raspberry Pi 5 sont maintenant renomm\xe9es MIPI."}),"\n",(0,t.jsx)(n.li,{children:"L'interface MIPI peut \xeatre configur\xe9e pour utiliser directement une cam\xe9ra CSI ou un \xe9cran DSI."}),"\n",(0,t.jsx)(n.li,{children:"Veuillez noter l'orientation des doigts d'or."}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Le Raspberry Pi 5 dispose maintenant de deux interfaces MIPI, visibles en regardant le devant avec des marquages 1 et 0."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"branchement-de-l\xe9cran-dsi",children:"Branchement de l'\xe9cran DSI"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous utilisez l'interface n\xb01, configurez l'\xe9cran comme suit :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi1\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous utilisez l'interface n\xb00, configurez l'\xe9cran comme suit :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dtoverlay=vc4-kms-dsi-7inch,dsi0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["R\xe9f\xe9rence de connexion","\n",(0,t.jsx)(r,{image:i(7175).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"branchement-de-la-cam\xe9ra-csi",children:"Branchement de la cam\xe9ra CSI"}),"\n",(0,t.jsx)(r,{image:i(33850).Z,size:"100%",align:"left"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Veuillez noter que le mod\xe8le de cam\xe9ra doit \xeatre configur\xe9 en fonction de votre achat, ce tutoriel utilise l'imx219 comme r\xe9f\xe9rence."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Si vous utilisez l'interface MIPI gauche, configurez la cam\xe9ra comme suit :"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam1\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Si vous utilisez l'interface MIPI droite, configurez la cam\xe9ra comme suit :"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dtoverlay=imx219,cam0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"R\xe9f\xe9rence de connexion"}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(34986).Z,size:"100%",align:"left"})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}let d={sidebar_position:2,sidebar_label:"Utilisation de DSI"},o="Utilisation de DSI",u={},p=[{value:"Syst\xe8me Raspberry Pi",id:"syst\xe8me-raspberry-pi",level:2},{value:"R\xe9f\xe9rence de c\xe2blage",id:"r\xe9f\xe9rence-de-c\xe2blage",level:2},{value:"Configuration Raspberry Pi",id:"configuration-raspberry-pi",level:2},...l.d$,{value:"Raspberry Pi 5 avec MIPI",id:"raspberry-pi-5-avec-mipi",level:2},{value:"Branchement du Raspberry Pi 5 avec MIPI",id:"branchement-du-raspberry-pi-5-avec-mipi",level:3},{value:"Branchement de l&#39;\xe9cran DSI",id:"branchement-de-l\xe9cran-dsi",level:2},{value:"Branchement de la cam\xe9ra CSI",id:"branchement-de-la-cam\xe9ra-csi",level:2}];function m(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components},{Button:r,ImageView:a,TabItem:d,Tabs:o}=n;return!r&&f("Button",!0),!a&&f("ImageView",!0),!d&&f("TabItem",!0),!o&&f("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"utilisation-de-dsi",children:"Utilisation de DSI"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Ce tutoriel utilise le Raspberry Pi 4B comme exemple"})}),"\n",(0,t.jsx)(n.admonition,{title:"Notes importantes",type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Il est recommand\xe9 d'utiliser la version ",(0,t.jsx)(n.code,{children:"bookworm"})," du syst\xe8me Raspberry Pi"]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"syst\xe8me-raspberry-pi",children:"Syst\xe8me Raspberry Pi"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voici des images syst\xe8me pr\xe9emball\xe9es, d\xe9j\xe0 test\xe9es pour l'affichage et le toucher de l'\xe9cran DSI"}),"\n",(0,t.jsxs)(n.li,{children:["Astuce : il est n\xe9cessaire de configurer l'\xe9cran\n",(0,t.jsx)(r,{variant:"contained",disableElevation:!0,href:"/docs/ResDownload/system-img/rpi",children:"Image syst\xe8me"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9f\xe9rence-de-c\xe2blage",children:"R\xe9f\xe9rence de c\xe2blage"}),"\n",(0,t.jsx)(n.admonition,{title:"Notes importantes",type:"warning",children:(0,t.jsx)(n.p,{children:"Veuillez pr\xeater attention \xe0 l'orientation des doigts d'or"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["C\xe2blage de la carte m\xe8re DSI","\n",(0,t.jsx)(a,{image:i(88518).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["C\xe2blage Raspberry Pi","\n",(0,t.jsx)(a,{image:i(49932).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-raspberry-pi",children:"Configuration Raspberry Pi"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(d,{value:"Raspberry Pi 4B/3B utilisant l'interface DSI",default:!0,children:(0,t.jsx)(l.ZP,{})}),(0,t.jsx)(d,{value:"Raspberry Pi 5B utilisant l'interface Mipi",default:!0,children:(0,t.jsx)(c,{})})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}function f(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},33850:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/csi1-573dc2b884deb22ebf3a6b95b7db6683.webp"},75699:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-75c93341f72ec076930d2fada92d3679.webp"},34986:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/mipi_csi-b0cd3ff44460b344e91a0b32d111467a.webp"},7175:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/mipi_dsi-34e049e6288eabba53ee23a3d0c00b43.webp"},88518:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-link-3370d60f580b6e49ad39f416b02d72d7.webp"},49932:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dsi-link1-b2529cdef2317f0fff7005772f24c59e.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return l}});var r=i(75271);let t={},s=r.createContext(t);function l(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);