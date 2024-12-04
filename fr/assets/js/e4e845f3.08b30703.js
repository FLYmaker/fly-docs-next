"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["27073"],{4735:function(e,n,i){i.d(n,{ZP:function(){return l},d$:function(){return o}});var r=i(52676),t=i(79938);let o=[];function s(e){let n={admonition:"admonition",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsx)(n.admonition,{title:"Conseils d'utilisation de la position infinie",type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"L'utilisation de la position infinie n\xe9cessite l'occupation d'un port de fin de course. Normalement, la position de conduite num\xe9ro un utilise IO1, la position de conduite num\xe9ro deux utilise IO2, et ainsi de suite."}),"\n",(0,r.jsx)(n.li,{children:"Veuillez noter que lors de l'utilisation de la position infinie, il ne faut rien connecter aux ports de fin de course correspondants."}),"\n",(0,r.jsx)(n.li,{children:"Pour certaines cartes m\xe8res FLY, les ports de commande sont directement connect\xe9s. Veuillez v\xe9rifier si DIAG est directement connect\xe9 aux broches correspondantes."}),"\n"]})})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},52432:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>d,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"ProductDoc/ModuleDrive/tmc5160hv","title":"TMC 5160HV","description":"Param\xe8tres de base","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/ModuleDrive/tmc5160hv.mdx","sourceDirName":"ProductDoc/ModuleDrive","slug":"/ProductDoc/ModuleDrive/tmc5160hv","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160hv","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ModuleDrive/tmc5160hv.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"TMC 5160","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160"},"next":{"title":"TMC 5160 Pro V1.2","permalink":"/fly-docs-next/fr/docs/ProductDoc/ModuleDrive/tmc5160_pro"}}'),t=i("52676"),o=i("79938"),s=i("4735");let l={sidebar_position:4},c="TMC 5160HV",d={},a=[{value:"Param\xe8tres de base",id:"param\xe8tres-de-base",level:2},{value:"Explication des cavaliers de la carte m\xe8re",id:"explication-des-cavaliers-de-la-carte-m\xe8re",level:2},{value:"Configuration de r\xe9f\xe9rence pour TMC5160",id:"configuration-de-r\xe9f\xe9rence-pour-tmc5160",level:2},{value:"Configuration de r\xe9f\xe9rence pour le mode SPI",id:"configuration-de-r\xe9f\xe9rence-pour-le-mode-spi",level:3},{value:"Instructions d&#39;utilisation de la position infinie",id:"instructions-dutilisation-de-la-position-infinie",level:2},...s.d$];function u(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"tmc-5160hv",children:"TMC 5160HV"})}),"\n",(0,t.jsx)(r,{image:i(76726).Z,size:"80%",align:"center"}),"\n",(0,t.jsx)(n.h2,{id:"param\xe8tres-de-base",children:"Param\xe8tres de base"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tension d'entr\xe9e : 12V-48V"}),"\n",(0,t.jsx)(n.li,{children:"Courant maximal : 4,4A"}),"\n",(0,t.jsx)(n.li,{children:"Compatible avec : firmware Marlin/Klipper/RRF"}),"\n",(0,t.jsx)(n.li,{children:"Modes de pilotage support\xe9s : TMC : SPI"}),"\n",(0,t.jsx)(n.li,{children:"Interface pas \xe0 pas/direction avec interpolation de micro-pas microPlyer"}),"\n",(0,t.jsx)(n.li,{children:"R\xe9solution maximale de 256 micro-pas"}),"\n",(0,t.jsx)(n.li,{children:"Support pour le fonctionnement silencieux stealthChop2 et les mouvements fluides"}),"\n",(0,t.jsx)(n.li,{children:"Support pour la suppression de la r\xe9sonance \xe0 fr\xe9quence moyenne"}),"\n",(0,t.jsx)(n.li,{children:"Support pour le chopper de contr\xf4le dynamique du moteur spreadCycle"}),"\n",(0,t.jsx)(n.li,{children:"Support pour le contr\xf4le de vitesse d\xe9pendant de la charge dcStep"}),"\n",(0,t.jsx)(n.li,{children:"Support pour la d\xe9tection de charge sans capteur \xe0 haute pr\xe9cision stallGuard2"}),"\n",(0,t.jsx)(n.li,{children:"Support pour le contr\xf4le de courant coolStep, \xe9conomie d'\xe9nergie jusqu'\xe0 75%"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"explication-des-cavaliers-de-la-carte-m\xe8re",children:"Explication des cavaliers de la carte m\xe8re"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"TMC5160 utilise le cavalier SPI"}),"\n",(0,t.jsxs)(n.li,{children:["Les broches SPI de la FLY sont sur le quatri\xe8me pied en partant du haut \xe0 gauche, la broche CS est la broche SPI. Si la carte m\xe8re n'a pas les broches correspondantes, le SPI ne peut pas \xeatre utilis\xe9","\n",(0,t.jsx)(r,{image:i(12142).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuration-de-r\xe9f\xe9rence-pour-tmc5160",children:"Configuration de r\xe9f\xe9rence pour TMC5160"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["La r\xe9sistance d'\xe9chantillonnage du driver est ",(0,t.jsx)(n.code,{children:"sense_resistor: 0.075"}),", ne la configurez pas incorrectement"]}),"\n",(0,t.jsx)(n.li,{children:"spi_bus et spi_software ne peuvent \xeatre s\xe9lectionn\xe9s que l'un ou l'autre"}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-de-r\xe9f\xe9rence-pour-le-mode-spi",children:"Configuration de r\xe9f\xe9rence pour le mode SPI"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[tmc5160 stepper_x]\ncs_pin:\nspi_bus:\n# spi_software_mosi_pin:\n# spi_software_miso_pin:\n# spi_software_sclk_pin: \nrun_current: 1.0                    # Valeur du courant de fonctionnement du moteur\ninterpolate: False                  # Activation de l'interpolation de micro-pas \xe0 256 (True pour activer, False pour d\xe9sactiver)\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndriver_DISS2G: 1\ndriver_DISS2VS: 1\n"})}),"\n",(0,t.jsx)(n.h2,{id:"instructions-dutilisation-de-la-position-infinie",children:"Instructions d'utilisation de la position infinie"}),"\n",(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(n.admonition,{title:"Conseils pour l'utilisation de la position infinie",type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Le ",(0,t.jsx)(n.code,{children:"endstop_pin:"})," original doit \xeatre masqu\xe9 ou supprim\xe9, puis ajoutez ",(0,t.jsx)(n.code,{children:"endstop_pin: tmc5160_stepper_x:virtual_endstop"})]}),"\n",(0,t.jsxs)(n.li,{children:["Apr\xe8s avoir configur\xe9 ",(0,t.jsx)(n.code,{children:"diag1_pin:"}),", l'\xe9tat du fin de course doit \xeatre non d\xe9clench\xe9"]}),"\n",(0,t.jsxs)(n.li,{children:["La configuration de ",(0,t.jsx)(n.code,{children:"driver_SGT: :"})," n\xe9cessite de tester une valeur appropri\xe9e"]}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Configuration de r\xe9f\xe9rence"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[stepper_x]\n# endstop_pin:PF3\nendstop_pin: tmc5160_stepper_x:virtual_endstop\nhoming_retract_dist: 0        # Une valeur diff\xe9rente de 0 peut entra\xeener un \xe9chec de retour \xe0 l'origine\n\n[tmc5160 stepper_x]\ndiag1_pin: ^!\ndriver_SGT: 1\n\n#   Assurez-vous que l'\xe9tat du fin de course est non d\xe9clench\xe9 apr\xe8s la configuration\n#   Ce pin utilise g\xe9n\xe9ralement le pr\xe9fixe \"^\" pour activer la r\xe9sistance de pull-up interne\n#   La sensibilit\xe9 d\xe9pend de la tension de la courroie et doit \xeatre ajust\xe9e\n#   (Assurez-vous \xe9galement que driver_SGTHRS est configur\xe9 pour une sensibilit\xe9 appropri\xe9e)\n\n"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},76726:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/5160hv-6322c1c9d4c02b0bf4b973d2dd2823fe.webp"},12142:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/jumper-b7f0cad58ee1720512eaebc40deee431.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var r=i(75271);let t={},o=r.createContext(t);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);