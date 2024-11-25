"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["16011"],{40701:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>p,default:()=>l,assets:()=>a,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"DebugDoc/ref-config/voron2.4","title":"Configuration de r\xe9f\xe9rence pour VORON 2.4","description":"","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/DebugDoc/ref-config/voron2.4.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/voron2.4","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/voron2.4","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron2.4.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732249869000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"Configuration de la tol\xe9rance de chauffage","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/verify_heater"},"next":{"title":"Configuration de r\xe9f\xe9rence de VORON Trident","permalink":"/fly-docs-next/fr/docs/DebugDoc/ref-config/trident"}}'),i=r("52676"),s=r("79938");let o={sidebar_position:4},p="Configuration de r\xe9f\xe9rence pour VORON 2.4",a={},d=[];function u(e){let n={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuration-de-r\xe9f\xe9rence-pour-voron-24",children:"Configuration de r\xe9f\xe9rence pour VORON 2.4"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"\n#####################################################################\n#      \xc9l\xe9ments \xe0 modifier/v\xe9rifier\n#####################################################################\n##***\xc9l\xe9ments \xe0 modifier/v\xe9rifier :***\n## Chemin MCU                                [mcu] \n## Plage d'activit\xe9 de l'imprimante           xyz position   \n## Type de thermistance                       [extruder] et [heater_bed]\n## Position d'arr\xeat de l'interrupteur de fin de course Z                      [safe_z_home] \n## D\xe9calage de position de l'interrupteur de fin de course Z                      [stepper_z] \n## \xc9talonnage PID                             [extruder] et [heater_bed] \n## Ajustement de la valeur de pas du moteur d'extrusion                     [extruder] \n\n#####################################################################\n#      Invocation de fichier\n#####################################################################\n### Lorsqu'on utilise fuidd ou mainsail comme frontend, veuillez supprimer le '#' devant #[include XXX.cfg].\n### When using fuidd or mainsail as the frontend, remove the '#' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### Remplacer 'fly' dans /home/fly par le nom d'utilisateur de votre ordinateur h\xf4te, assurez-vous que ce n'est pas l'utilisateur ROOT\n### Replace 'fly' in /home/fly with your host computer username, ensuring it's not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      Configuration de l'ID principal\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### Utilisez ls/dev/Serial/by-id/* pour trouver l'ID du firmware USB et remplacez\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 par l'ID que vous avez d\xe9couvert.\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### Pour trouver l'ID du firmware CAN, utilisez : ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Remplacez 'serial:' par 'canbus_uuid:', puis ajoutez l'ID.\n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace 'serial:' in the CAN ID with 'canbus_uuid:', then append the ID.\n\n#####################################################################\n#      Surveillance de la temp\xe9rature\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      Mod\xe8le et acc\xe9l\xe9ration\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      Param\xe8tres des moteurs pas \xe0 pas X/Y\n#####################################################################\n\n[stepper_x]\n## Consultez https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # V\xe9rifiez la direction du moteur dans le lien ci-dessus. Si invers\xe9e, ajoutez un ! avant gpio3 \nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # R\xe9glez sur 400 pour un moteur pas \xe0 pas de 0.9\xb0 de degr\xe9, 200 est pour les moteurs pas \xe0 pas de 1.8\xb0 \nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 300                           # (250mm-300mm-350mm)\nposition_max: 300                               # (250mm-300mm-350mm)\nhoming_speed: 40                                # Pour le retour \xe0 l'origine sans capteur, il est recommand\xe9 de ne pas d\xe9passer 40mm/s   \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # R\xe9glez sur 999999 pour activer stealthchop, et 0 pour utiliser spreadcycle\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus et spi_software ne peuvent utiliser qu'un seul d'entre eux\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### La r\xe9sistance d'\xe9chantillonnage du driver doit \xeatre modifi\xe9e selon le driver\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## Consultez https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # V\xe9rifiez la direction du moteur dans le lien ci-dessus. Si invers\xe9e, ajoutez un ! avant gpio0\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus et spi_software ne peuvent utiliser qu'un seul d'entre eux\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### La r\xe9sistance d'\xe9chantillonnage du driver doit \xeatre modifi\xe9e selon le driver\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#      Param\xe8tres des moteurs pas \xe0 pas Z\n#####################################################################\n\n[stepper_z]\n## Consultez https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # V\xe9rifiez la direction du moteur dans le lien ci-dessus. Si invers\xe9e, ajoutez un ! avant gpio25\nenable_pin: !\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^\n# endstop_pin: probe:z_virtual_endstop  \nposition_endstop:-0.5\nposition_max: 270\nposition_min: -15\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n[stepper_z1]\nstep_pin: \ndir_pin:\nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z1]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n##    Moteur pas \xe0 pas Z2 - arri\xe8re droit sur le Driver5\n[stepper_z2]\nstep_pin:\ndir_pin:\nenable_pin:!\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z2]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n[stepper_z3]\nstep_pin: \ndir_pin: \nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z3]\nuart_pin: \ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n"})})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},79938:function(e,n,r){r.d(n,{Z:function(){return p},a:function(){return o}});var t=r(75271);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);