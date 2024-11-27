"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["14743"],{15061:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/fuidd","title":"Pause et annulation d\'impression \xe0 une position personnalis\xe9e","description":"* Il est n\xe9cessaire d\'ajouter [include mainsail.cfg] ou [include fluidd.cfg] dans printer.cfg","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/fuidd.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/fuidd","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/fuidd","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/fuidd.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732249869000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"debugdocSidebar","previous":{"title":"Configuration de r\xe9f\xe9rence pour plusieurs Z","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/stepper_z"},"next":{"title":"\u5404\u7C7B\u63D2\u4EF6","permalink":"/fly-docs-next/fr/docs/category/\u5404\u7C7B\u63D2\u4EF6"}}'),i=a("52676"),t=a("79938");let s={sidebar_position:10},o="Pause et annulation d'impression \xe0 une position personnalis\xe9e",l={},u=[{value:"Traduction en fran\xe7ais",id:"traduction-en-fran\xe7ais",level:2},{value:"English (Original)",id:"english-original",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"pause-et-annulation-dimpression-\xe0-une-position-personnalis\xe9e",children:"Pause et annulation d'impression \xe0 une position personnalis\xe9e"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Il est n\xe9cessaire d'ajouter ",(0,i.jsx)(n.code,{children:"[include mainsail.cfg]"})," ou ",(0,i.jsx)(n.code,{children:"[include fluidd.cfg]"})," dans ",(0,i.jsx)(n.code,{children:"printer.cfg"})]}),"\n",(0,i.jsxs)(n.li,{children:["Ajoutez la macro suivante \xe0 ",(0,i.jsx)(n.code,{children:"printer.cfg"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"traduction-en-fran\xe7ais",children:"Traduction en fran\xe7ais"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[gcode_macro _CLIENT_VARIABLE]\n### Param\xe8tres personnalis\xe9s pour la macro de pause\nvariable_use_custom_pos   : False ; Utiliser des coordonn\xe9es de stationnement personnalis\xe9es pour x, y [True/False]\nvariable_custom_park_x    : 0.0   ; Position X lors de la pause de l'impression\nvariable_custom_park_y    : 0.0   ; Position Y lors de la pause de l'impression\nvariable_custom_park_dz   : 2.0   ; Distance de mont\xe9e de Z lors de la pause de l'impression (en millim\xe8tres)\n\n### Param\xe8tres personnalis\xe9s pour la macro d'annulation de pause\nvariable_park_at_cancel   : False ; Permettre le d\xe9placement de la t\xeate d'outil vers la position de stationnement lors de l'ex\xe9cution de la macro d'annulation d'impression [True/False]\nvariable_park_at_cancel_x : None  ; Position X apr\xe8s annulation de l'impression\nvariable_park_at_cancel_y : None  ; Position Y apr\xe8s annulation de l'impression\n\n### Actions de l'extrudeur lors de la pause et de l'annulation\nvariable_retract          : 1.0     ; Longueur de r\xe9traction de l'extrudeur lors de la pause de l'impression (mm)\nvariable_cancel_retract   : 5.0     ; Longueur de r\xe9traction de l'extrudeur lors de l'annulation de l'impression (mm)\nvariable_speed_retract    : 35.0    ; Vitesse de r\xe9traction de l'extrudeur mm/s\nvariable_unretract        : 1.0     ; Longueur d'extrusion lors de la reprise de l'impression\nvariable_speed_unretract  : 35.0    ; Vitesse d'extrusion de l'extrudeur mm/s\nvariable_speed_hop        : 15.0    ; Vitesse de d\xe9placement de l'axe Z mm/s\nvariable_speed_move       : 100.0   ; Vitesse de d\xe9placement mm/s\n\n### Configuration de d\xe9sactivation du chauffage du moteur\n### Un jour repr\xe9sente 86400 secondes\nvariable_idle_timeout     : 0     ; Temps en secondes avant l'activation du d\xe9lai d'inactivit\xe9. Une valeur de 0 signifie qu'aucune valeur ne sera d\xe9finie ou restaur\xe9e\n\n# !!! Attention, si vous d\xe9finissez use_fw_retract: True, il est n\xe9cessaire de d\xe9finir [firmware_retraction] dans printer.cfg !!!\nvariable_use_fw_retract   : False ; Utiliser la r\xe9traction par firmware, au lieu de la version manuelle [True/False]\nvariable_runout_sensor    : \"\"    ; Si un capteur est d\xe9fini, il sera utilis\xe9 pour annuler l'ex\xe9cution de RESUME en cas de d\xe9tection d'absence de filament.\n#                                Sp\xe9cifiez le nom de configuration du capteur de fin de filament, par exemple \"filament_switch_sensor runout\". Rappel : utilisez le m\xeame que dans votre printer.cfg\n# !!! Macros personnalis\xe9es, veuillez les utiliser avec pr\xe9caution et examiner la section correspondante de la macro.  Ces macros sont destin\xe9es \xe0 des op\xe9rations simples comme la d\xe9finition d'un \xe9tat LED. Veuillez vous assurer que votre macro n'interf\xe8re pas avec les fonctions de base des macros. Seules les commandes \xe0 ligne unique sont support\xe9es, veuillez cr\xe9er une macro si vous avez besoin de plus d'une commande.\nvariable_user_pause_macro : \"\"    ; Tout le contenu \xe0 l'int\xe9rieur de \"\" sera ex\xe9cut\xe9 apr\xe8s la fonction de pause de base de Klipper (PAUSE_BASE)\nvariable_user_resume_macro: \"\"    ; Tout le contenu \xe0 l'int\xe9rieur de \"\" sera ex\xe9cut\xe9 avant la fonction de reprise de base de Klipper (RESUME_BASE)\nvariable_user_cancel_macro: \"\"    ; Tout le contenu \xe0 l'int\xe9rieur de \"\" sera ex\xe9cut\xe9 avant la fonction d'annulation de base de Klipper (CANCEL_PRINT_BASE)\ngcode:\n"})}),"\n",(0,i.jsx)(n.h2,{id:"english-original",children:"English (Original)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:'[gcode_macro _CLIENT_VARIABLE]\nvariable_use_custom_pos   : False ; use custom park coordinates for x,y [True/False]\nvariable_custom_park_x    : 0.0   ; custom x position; value must be within your defined min and max of X\nvariable_custom_park_y    : 0.0   ; custom y position; value must be within your defined min and max of Y\nvariable_custom_park_dz   : 2.0   ; custom dz value; the value in mm to lift the nozzle when move to park position\nvariable_retract          : 1.0   ; the value to retract while PAUSE\nvariable_cancel_retract   : 5.0   ; the value to retract while CANCEL_PRINT\nvariable_speed_retract    : 35.0  ; retract speed in mm/s\nvariable_unretract        : 1.0   ; the value to unretract while RESUME\nvariable_speed_unretract  : 35.0  ; unretract speed in mm/s\nvariable_speed_hop        : 15.0  ; z move speed in mm/s\nvariable_speed_move       : 100.0 ; move speed in mm/s\nvariable_park_at_cancel   : False ; allow to move the toolhead to park while execute CANCEL_PRINT [True/False]\nvariable_park_at_cancel_x : None  ; different park position during CANCEL_PRINT [None/Position as Float]; park_at_cancel must be True\nvariable_park_at_cancel_y : None  ; different park position during CANCEL_PRINT [None/Position as Float]; park_at_cancel must be True\n# !!! Caution [firmware_retraction] must be defined in the printer.cfg if you set use_fw_retract: True !!!\nvariable_use_fw_retract   : False ; use fw_retraction instead of the manual version [True/False]\nvariable_idle_timeout     : 0     ; time in sec until idle_timeout kicks in. Value 0 means that no value will be set or restored\nvariable_runout_sensor    : ""    ; If a sensor is defined, it will be used to cancel the execution of RESUME in case no filament is detected.\n#                                   Specify the config name of the runout sensor e.g "filament_switch_sensor runout". Hint use the same as in your printer.cfg\n# !!! Custom macros, please use with care and review the section of the corresponding macro.\n# These macros are for simple operations like setting a status LED. Please make sure your macro does not interfere with the basic macro functions.\n# Only  single line commands are supported, please create a macro if you need more than one command.\nvariable_user_pause_macro : ""    ; Everything inside the "" will be executed after the klipper base pause (PAUSE_BASE) function\nvariable_user_resume_macro: ""    ; Everything inside the "" will be executed before the klipper base resume (RESUME_BASE) function\nvariable_user_cancel_macro: ""    ; Everything inside the "" will be executed before the klipper base cancel (CANCEL_PRINT_BASE) function\ngcode:\n'})})]})}function d(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},79938:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return s}});var r=a(75271);let i={},t=r.createContext(i);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);