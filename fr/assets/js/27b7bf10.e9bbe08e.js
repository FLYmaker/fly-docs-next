"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["72390"],{33258:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>t,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen5/klipper","title":"klipper","description":"Le firmware est d\xe9j\xe0 pr\xe9-install\xe9 en usine, mais il est recommand\xe9 de le mettre \xe0 jour manuellement.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen5/klipper.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen5","slug":"/ProductDoc/Screen/fly-wiscreen5/klipper","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-wiscreen5/klipper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen5/klipper.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Connexion WIFI et configuration de Klipper"},"sidebar":"tutorialSidebar","previous":{"title":"Modification de l\'image de d\xe9marrage","permalink":"/fly-docs-next/fr/docs/ProductDoc/Screen/fly-wiscreen5/flash"},"next":{"title":"FLY-LCD\u7CFB\u5217","permalink":"/fly-docs-next/fr/docs/category/fly-lcd\u7CFB\u5217"}}'),l=i("52676"),s=i("79938");let a={sidebar_position:4,sidebar_label:"Connexion WIFI et configuration de Klipper"},o=void 0,t={},c=[{value:"T\xe9l\xe9chargement du firmware de l&#39;\xe9cran",id:"t\xe9l\xe9chargement-du-firmware-de-l\xe9cran",level:2},{value:"Connexion WIFI et op\xe9rations de base",id:"connexion-wifi-et-op\xe9rations-de-base",level:2},{value:"Configuration de Klipper",id:"configuration-de-klipper",level:2},{value:"Configuration LED",id:"configuration-led",level:3},{value:"Configuration PTC",id:"configuration-ptc",level:3},{value:"Configuration du ventilateur",id:"configuration-du-ventilateur",level:3},{value:"Gcode personnalis\xe9",id:"gcode-personnalis\xe9",level:3},{value:"Utilisation de l&#39;exclusion d&#39;objets",id:"utilisation-de-lexclusion-dobjets",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:r,ImageView:a}=n;return!r&&p("Button",!0),!a&&p("ImageView",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Le firmware est d\xe9j\xe0 pr\xe9-install\xe9 en usine, mais il est recommand\xe9 de le mettre \xe0 jour manuellement."})}),"\n",(0,l.jsx)(n.h2,{id:"t\xe9l\xe9chargement-du-firmware-de-l\xe9cran",children:"T\xe9l\xe9chargement du firmware de l'\xe9cran"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/wiscreen/wiscreen5/WIFI/update.img",children:"Cliquez ici pour t\xe9l\xe9charger le firmware de l'\xe9cran"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Vous avez besoin d'une carte m\xe9moire de moins de 32 Go, la vitesse de transfert de la carte TF doit \xeatre de classe 10 ou sup\xe9rieure, il est recommand\xe9 d'utiliser une carte TF de marque comme SanDisk."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"connexion-wifi-et-op\xe9rations-de-base",children:"Connexion WIFI et op\xe9rations de base"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1mr421b7Bf/?spm_id_from=333.788&vd_source=36affb37d7228751cd1fcbbda487dfdf",children:"\xc9cran tactile capacitif WiFi de 7 pouces pour contr\xf4ler plusieurs machines"})}),"\n",(0,l.jsx)(n.h2,{id:"configuration-de-klipper",children:"Configuration de Klipper"}),"\n",(0,l.jsx)(n.h3,{id:"configuration-led",children:"Configuration LED"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[led LED]\nwhite_pin:PA15\n"})}),"\n",(0,l.jsx)(n.h3,{id:"configuration-ptc",children:"Configuration PTC"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[heater_generic warehouse]\nheater_pin:E_CS\nsensor_type:ATC Semitec 104GT-2\nsensor_pin:PA1\nmin_temp:-270\nmax_temp:600\ncontrol = pid\npid_kp = 16.804\npid_ki = 0.794\npid_kd = 88.854\n"})}),"\n",(0,l.jsx)(n.h3,{id:"configuration-du-ventilateur",children:"Configuration du ventilateur"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan1]\npin: FAN1\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"[fan_generic fan2]\npin: FAN2\n"})}),"\n",(0,l.jsx)(n.h3,{id:"gcode-personnalis\xe9",children:"Gcode personnalis\xe9"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Apr\xe8s avoir fait d\xe9filer l'\xe9cran vers le bas, le Gcode personnalis\xe9 appara\xeet,"}),"\n",(0,l.jsx)(n.li,{children:"Un bouton envoie plusieurs commandes Gcode au format :"}),"\n",(0,l.jsx)(n.li,{children:"Exemple :"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"G91 \nG1 X10 F6000\nG90\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Format d'entr\xe9e sur l'\xe9cran : (\xe0 partir de la deuxi\xe8me ligne, ajoutez \\n avant chaque commande)"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cfg",children:"G91\\nG1 X10 F6000\\nG90\n"})}),"\n",(0,l.jsx)(n.h2,{id:"utilisation-de-lexclusion-dobjets",children:"Utilisation de l'exclusion d'objets"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Il est n\xe9cessaire de remplacer Moonraker"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Veuillez d'abord vous connecter via SSH et assurez-vous d'avoir une connexion Internet fonctionnelle."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Sauvegarder le fichier Moonraker"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"mv ~/moonraker ~/moonraker-bak\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Arr\xeater le service Moonraker"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart moonraker\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Cloner Moonraker"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://e.coding.net/g-ofpa1390/3D-Printers/moonraker-dev.git -b flylcd-dev moonraker\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsxs)(n.li,{children:["Dans le navigateur, acc\xe9dez \xe0 la machine h\xf4te et trouvez ",(0,l.jsx)(n.code,{children:"moonraker.conf"})," pour l'ajouter, puis red\xe9marrez le syst\xe8me"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"[network]\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsx)(n.li,{children:"Ensuite, dans le navigateur, entrez l'adresse ci-dessous, en rempla\xe7ant l'IP par l'adresse IP de la machine h\xf4te"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"http://ip:7125/server/network/wifi/scan\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Cette \xe9tape indique que l'op\xe9ration est termin\xe9e"}),"\n",(0,l.jsx)(a,{image:i(4594).Z,size:"100%",align:"left"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}function p(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4594:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/moonraker-9b11e2e17eeea9c450be5b404401746a.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return a}});var r=i(75271);let l={},s=r.createContext(l);function a(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);