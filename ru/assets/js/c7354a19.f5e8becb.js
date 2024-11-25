"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["57648"],{69651:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>o,default:()=>l,assets:()=>p,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/cfg","title":"klipper\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/cfg","permalink":"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729848160000,"sidebarPosition":9,"frontMatter":{"sidebar_position":9,"sidebar_label":"klipper\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B","permalink":"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring"},"next":{"title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u044D\u043A\u0440\u0430\u043D\u0430","permalink":"/fly-docs-next/ru/docs/ProductDoc/MainBoard/fly-c/fly-c8/screen"}}'),i=t("52676"),_=t("79938");let s={sidebar_position:9,sidebar_label:"klipper\u53C2\u8003\u914D\u7F6E"},o="klipper\u53C2\u8003\u914D\u7F6E",p={},a=[];function c(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,_.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'####################################################################################\n#                         3D MELLOW /\uFF08\u9700\u8981\u81EA\u884C\u6DFB\u52A0\uFF09                                #\n####################################################################################\n## Fly-C8\u8D44\u6599\u7F51\u5740\uFF1Ahttp://mellow.klipper.cn/#/board/fly_fly_C8/\n## Fly-C8\u539F\u7406\u56FE\u7F51\u5740\uFF1Ahttps://cdn.mellow.klipper.cn/SCH-PDF/FLY-C8.pdf\n## FLY \u5B98\u65B9\u6DD8\u5B9D\u5E97\uFF1Ahttps://shop126791347.taobao.com/shop/view_shop.htm?spm=a230r.1.14.4.1a4840a8hyvpPJ&user_number_id=2464680006\n## \u5982\u9700\u552E\u540E\uFF0C\u8BF7\u8054\u7CFB\u6DD8\u5B9D\u5BA2\u670D\n## FLY \u552E\u540E\u6280\u672F\u652F\u6301\u7FA4\uFF1A621032883\n## FLY-RRF\u56FA\u4EF6\u4EA4\u6D41\u7FA4\uFF1A786561979\n\n#####################################################################\n#                               \u6CE8\u610F\u4E8B\u9879                             #\n#####################################################################\n##***\u9700\u8981\u66F4\u6539/\u68C0\u67E5\u7684\u4E8B\u9879\uFF1A***\n## MCU \u8DEF\u5F84                                [mcu] \n## \u6253\u5370\u673A\u6D3B\u52A8\u8303\u56F4                           xyz\u7684position   \n## \u70ED\u654F\u7535\u963B\u7C7B\u578B                             [extruder] \u548C [heater_bed]\n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u505C\u6B62\u4F4D\u7F6E                      [safe_z_home] \n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u504F\u79FB\u4F4D\u7F6E                      [stepper_z] \n## PID \u6821\u51C6                                [extruder] \u548C [heater_bed] \n## \u5FAE\u8C03\u6324\u51FA\u673A\u7535\u673A\u6B65\u8FDB\u503C                     [extruder] \n\n#####################################################################\n#                               \u6587\u4EF6\u8C03\u7528                             #\n#####################################################################\n#[include fluidd.cfg]          # FLUIDD\u8C03\u7528\u6587\u4EF6\u3002\n#[include mainsail.cfg]        # MAINSDIL\u8C03\u7528\u6587\u4EF6\u3002\n#\u9700\u8981\u81EA\u884C\u786E\u5B9A\u4F7F\u7528\u54EA\u4E2A\u6587\u4EF6\n\n#####################################################################\n#                               \u4E3B\u677F\u914D\u7F6E                             #\n#####################################################################\n[mcu]                           # FLY\u4E3B\u677FID\nserial: /dev/serial/by-id/usb-Klipper_stm32f407xx_XXXXXXXXXXXXXXXXXXXXX\n### \u67E5\u8BE2usb\u56FA\u4EF6id\u662F\uFF1Als /dev/serial/by-id/\n### \u628A/dev/serial/by-id/usb-Klipper_stm32f407xx_XXXXXXXXXXXXXXXXXXXXX\u66FF\u6362\u67E5\u8BE2\u5230\u7684id\n#canbus_uuid: e51d5c71a901\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n[mcu host]                     # FlyOS\u5DF2\u9ED8\u8BA4\u4E3A\u60A8\u751F\u6210linux MCU\uFF0C\u5B9A\u4E49\u5373\u53EF\u4F7F\u7528   \nserial: /tmp/klipper_host_mcu \n\n#####################################################################\n#                            \u673A\u578B\u548C\u52A0\u901F\u5EA6                            #\n#####################################################################\n[printer]                       # \u6253\u5370\u673A\u8BBE\u7F6E\nkinematics: corexy               # \u8FD0\u52A8\u5B66\u7ED3\u6784\u5206\u4E3A\uFF1A\u7B1B\u5361\u5C14\u548Ccorexy\u7B49\u7B49\u3002\u7B1B\u5361\u5C14\uFF1Acartesian\nmax_velocity: 300               # \u6253\u5370\u673A\u6700\u5927\u901F\u5EA6   \nmax_accel: 3000                 # \u6700\u5927\u52A0\u901F\u5EA6 \u6700\u59273000\nmax_z_velocity: 15              # z\u8F74\u6700\u5927\u901F\u5EA6\nmax_z_accel: 100                # z\u8F74\u6700\u5927\u52A0\u901F\u5EA6\nsquare_corner_velocity: 5.0     # \u65B9\u5F62\u62D0\u89D2\u901F\u5EA6\uFF0C\u5C0F\u4E00\u70B9\u53EF\u4EE5\u6709\u6548\u907F\u514D\u5E73\u53F0\u91CD\u5E26\u6765\u7684\u60EF\u6027\n\n#####################################################################\n#                             \u6E29\u5EA6\u76D1\u63A7                               #\n#####################################################################\n[temperature_sensor Fly-C8]    # FLY\u4E3B\u677F\u6E29\u5EA6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\uFF08\u9ED8\u8BA4\uFF09\n#--------------------------------------------------------------------\n[temperature_sensor FLY-\u03C0]        # \u4E0A\u4F4D\u673A\u6E29\u5EA6\nsensor_type: temperature_host     # \u5173\u8054\u4E0A\u4F4D\u673A\n#--------------------------------------------------------------------\n[temperature_sensor BOX]          # \u7BB1\u5185\u6E29\u5EA6\u6E29\u5EA6 \uFF08\u9700\u8981\u589E\u52A0\u4E00\u9897\u6E29\u611F,\u53C2\u8003\u914D\u7F6E\uFF09\nsensor_type: ATC Semitec 104GT-2  # \u4F20\u611F\u5668\u578B\u53F7\nsensor_pin: PC3                   # \u4FE1\u53F7\u63A5\u53E3\n\n#####################################################################\n#                              \u70ED\u5E8A\u7F51\u683C\u6821\u51C6\n#####################################################################\n[bed_mesh]\nspeed: 50                    # \u6821\u51C6\u901F\u5EA6\nhorizontal_move_z: 5         # \u63A2\u9488\u524D\u5F80\u4E0B\u4E00\u4E2A\u70B9\u4E4B\u524DZ\u9700\u8981\u62AC\u5347\u7684\u9AD8\nmesh_min: 30,30              # \u6700\u5C0F\u6821\u51C6\u70B9\u5750\u6807x\uFF0Cy\nmesh_max: 270, 270           # \u6700\u5927\u6821\u51C6\u70B9\u5750\u6807x\uFF0Cy\nprobe_count: 4,4             # \u91C7\u6837\u70B9\u6570\uFF084X4\u4E3A16\u70B9\uFF09\nmesh_pps: 2,2                # \u8865\u5145\u91C7\u6837\u70B9\u6570\nalgorithm: bicubic           # \u7B97\u6CD5\u6A21\u578B\nbicubic_tension: 0.2         # \u7B97\u6CD5\u63D2\u503C\u4E0D\u8981\u52A8\n\n#####################################################################\n#                            ADXL345\n#####################################################################\n[adxl345]\ncs_pin: host:None\nspi_bus: spidev1.0\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: adxl345               # \u4F7F\u7528\u7684\u52A0\u901F\u5EA6\u82AF\u7247\u540D\u79F0\nprobe_points: 150, 150, 20        # \u5171\u632F\u6D4B\u8BD5\u7684\u5750\u6807\u70B9\nmin_freq: 5                       # \u5171\u632F\u6D4B\u8BD5\u7684\u6700\u5C0F\u9891\u7387\nmax_freq: 130                     # \u5171\u632F\u6D4B\u8BD5\u7684\u6700\u5927\u9891\u7387\naccel_per_hz: 75                  # \u6BCF\u8D6B\u5179\u52A0\u901F\u5EA6(mm/sec)\uFF0C\u52A0\u901F\u5EA6=\u6BCF\u8D6B\u5179\u52A0\u901F\u5EA6*\u9891\u7387\uFF0C\u5982\u679C\u5171\u632F\u8FC7\u4E8E\u5F3A\u70C8\uFF0C\u53EF\u4EE5\u51CF\u5C11\u8BE5\u503C\u3002\u9ED8\u8BA475\nhz_per_sec: 1                     # \u6D4B\u8BD5\u7684\u901F\u5EA6\uFF0C\u8F83\u5C0F\u7684\u503C\u4F1A\u52A0\u957F\u6D4B\u8BD5\u65F6\u95F4\uFF0C\u8F83\u5927\u7684\u503C\u4F1A\u964D\u4F4E\u6D4B\u8BD5\u7CBE\u5EA6\uFF0C(Hz/sec == sec^-2)\uFF0C\u9ED8\u8BA41\n\n\n#####################################################################\n#             X/Y\u6B65\u8FDB\u7535\u673A\u8BBE\u7F6E (X/Y Stepper Settings)                 # \n#####################################################################\n#                   z1                 z2\n#                       B__________A\n#                     \n# \n# \n# \n#                   Z0     12864      Z3\n\n#####################################################################\n#                  X \u8F74\u6B65\u8FDB\u7535\u673A      (DRIVER0)                       #\n#####################################################################\n## DRIVER0\u7535\u673A\u4F4D\u7F6E\n[stepper_x]\nstep_pin: PE5                       # X\u8F74\u7535\u673A\u8109\u51B2\u5F15\u811A\u8BBE\u7F6E\ndir_pin: PA8                        # X\u8F74\u7535\u673A\u8FD0\u884C\u5F15\u811A\u8BBE\u7F6E,\u65B9\u5411\u6309\u5B9E\u9645\u5224\u65AD\uFF0C\u52A0\u611F\u53F9\u53F7\u4F1A\u8BA9\u8FD0\u884C\u65B9\u5411\u53CD\u8F6C\nenable_pin: !PA15                   # X\u8F74\u7535\u673A\u4F7F\u80FD\u5F15\u811A\u8BBE\u7F6E,\u4F7F\u80FD\u5F15\u811A\u9700\u8981\u52A0\u611F\u53F9\u53F7\uFF0C\u5426\u8005\u7535\u673A\u4E0D\u5DE5\u4F5C\nrotation_distance: 40               # \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\uFF082GT-20T\u5E26\u8F6E40\uFF0C2GT-16T\u5E26\u8F6E32\uFF09\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E\uFF0C\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09\nendstop_pin: PD9                    # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u63A5\u5E38\u95ED\n#endstop_pin: tmc5160_stepper_x:virtual_endstop        # \u9650\u4F4D\u5F00\u5173\u63A5\u53E3\n###\u63A5\u5E38\u95ED\u540E\u662F\u89E6\u53D1\u72B6\u6001\uFF0C\u52A0\u611F\u53F9\u53F7\u53EF\u4EE5\u53CD\u8F6C\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4E07\u4E00\u65AD\u7EBF\u65F6\u5019\u53EF\u4EE5\u907F\u514D\u649E\u673A\nposition_min: 0                     # \u8F6F\u9650\u4F4D\u6700\u5C0F\u884C\u7A0B\nposition_endstop: 300               # \u8F6F\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\nposition_max: 300                   # \u673A\u68B0\u9650\u4F4D\u6700\u5927\u884C\u7A0B (250mm-300mm-350mm)\nhoming_speed: 50                    # \u590D\u4F4D\u901F\u5EA6-\u6700\u5927 100\nhoming_retract_dist: 5              # \u7B2C\u4E00\u6B21\u89E6\u53D1\u590D\u4F4D\u5F00\u5173\u4E4B\u540E\u7684\u540E\u9000\u8DDD\u79BB\nhoming_positive_dir: true           # \u590D\u4F4D\u65B9\u5411\uFF08\u4E00\u822C\u4E0D\u9700\u8981\u6539\u52A8\uFF09\n#--------------------------------------------------------------------\n##  \u8BF7\u786E\u4FDD\u9A71\u52A8\u578B\u53F7\u914D\u7F6E\u6B63\u786E (2208 or 2209)\n[tmc2209 stepper_x]\nuart_pin: PC9                       # \u901A\u8BAF\u7AEF\u53E3Pin\u811A\u5B9A\u4E49\ninterpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\uFF08\u5355\u4F4D\uFF1AmA\uFF09\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 0            # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_x]\n#cs_pin: PC9                         # SPI \u7247\u9009Pin\u811A\u5B9A\u4E49\n#spi_bus: spi3                       # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\n#sense_resistor: 0.075               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 0            # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                  Y \u8F74\u6B65\u8FDB\u7535\u673A      (DRIVER1)                       #\n#####################################################################\n## DRIVER1\u7535\u673A\u4F4D\u7F6E\n[stepper_y]\nstep_pin: PE4\ndir_pin: PC11\nenable_pin: !PC12\nrotation_distance: 40\nmicrosteps: 16                      # \u7535\u673A\u7EC6\u5206\u8BBE\u7F6E\uFF0C\u7EC6\u5206\u8D8A\u9AD8\uFF0C\u8D28\u91CF\u8D8A\u9AD8\uFF0C\u4F46\u4E3B\u63A7\u8D1F\u8377\u8D8A\u5927\nfull_steps_per_rotation: 200        # \u7535\u673A\u5355\u5708\u6240\u9700\u8109\u51B2\u6570\uFF081.8\u5EA6\u7535\u673A:200\uFF0C0.9\u5EA6\u7535\u673A:400\uFF09\nendstop_pin: !PD8                    # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u7136\u540E\u6DFB\u52A0\uFF01\u53CD\u8F6C\u72B6\u6001\n#endstop_pin: tmc5160_stepper_y:virtual_endstop        # \u9650\u4F4D\u5F00\u5173\u63A5\u53E3\n###\u63A5\u5E38\u95ED\u540E\u662F\u89E6\u53D1\u72B6\u6001\uFF0C\u52A0\u611F\u53F9\u53F7\u53EF\u4EE5\u53CD\u8F6C\u8FD9\u4E2A\u72B6\u6001\uFF0C\u4E07\u4E00\u65AD\u7EBF\u65F6\u5019\u53EF\u4EE5\u907F\u514D\u649E\u673A\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 50\nhoming_retract_dist: 5\nhoming_positive_dir: true\n#--------------------------------------------------------------------\n##  \u8BF7\u786E\u4FDD\u9A71\u52A8\u578B\u53F7\u914D\u7F6E\u6B63\u786E (2209 or 5160)\n[tmc2209 stepper_y]\nuart_pin: PC10\ninterpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\nrun_current: 0.8                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\uFF08\u5355\u4F4D\uFF1AmA\uFF09\nsense_resistor: 0.110               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\nstealthchop_threshold: 0            # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_y]\n#cs_pin: PC10\n#spi_bus: spi3                       # SPI \u901A\u8BAF\u603B\u7EBF\u5B9A\u4E49\n#run_current: 1.0                    # \u7535\u673A\u8FD0\u884C\u7535\u6D41\u503C\n#interpolate: False                  # \u662F\u5426\u5F00\u542F256\u5FAE\u6B65\u63D2\u503C\uFF08\u5F00\u542F\u662FTrue\uFF0C\u5173\u95ED\u662FFalse\uFF09\n#sense_resistor: 0.075               # \u9A71\u52A8\u91C7\u6837\u7535\u963B\u4E0D\u8981\u6539\uFF08\u5982\u679C\u4F7F\u75285160 Pro\uFF0C\u8BF7\u5C06\u6570\u503C\u4FEE\u6539\u4E3A0.033\uFF09\n#stealthchop_threshold: 0            # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                     Z\u8F74\u6B65\u8FDB\u7535\u673A \uFF08Z Stepper Settings\uFF09             #\n#####################################################################\n## DRIVER2\u7535\u673A\u4F4D\u7F6E\n[stepper_z]\nstep_pin: PE3\ndir_pin: !PD1\nenable_pin: !PD2\nrotation_distance: 40         # \u4E3B\u52A8\u8F6E\u5468\u957Fmm \uFF082GT-20T\u4E3A 40mm  16T\u4E3A 32mm\uFF09\ngear_ratio: 80:16             # \u51CF\u901F\u6BD4\nmicrosteps: 32\nendstop_pin: PD11             # \u9650\u4F4D\u5F00\u5173\u63A5\u53E3\nposition_max: 290             # \u8F6F\u9650\u4F4D\u6700\u5927\u884C\u7A0B (240mm-290mm-340mm)\nposition_endstop: -0.5        \nposition_min: -5              # \u8F6F\u9650\u4F4D\u6700\u5C0F\u884C\u7A0B\uFF08\u914D\u7F6E\u55B7\u5634\u6E05\u6D01\u9700\u8981-5\u5DE6\u53F3\uFF09\nhoming_speed: 10              # \u590D\u4F4D\u901F\u5EA6-\u6700\u5927 20\nsecond_homing_speed: 3        # \u4E8C\u6B21\u590D\u4F4D\u901F\u5EA6-\u6700\u5927 10\nhoming_retract_dist: 3        # \u540E\u64A4\u8DDD\u79BB\n#--------------------------------------------------------------------\n[tmc2209 stepper_z]\nuart_pin: PD0\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0    # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n##--------------------------------------------------------------------\n## DRIVER4\u7535\u673A\u4F4D\u7F6E\n[stepper_z1]\nstep_pin: PE2\ndir_pin:  PD4\nenable_pin: !PD5\nrotation_distance: 40\ngear_ratio: 80:16\nmicrosteps: 32\n[tmc2209 stepper_z1]\nuart_pin: PD3\ninterpolate: false\nrun_current: 1.0\nsense_resistor: 0.110\nstealthchop_threshold: 0    \n#--------------------------------------------------------------------\n## DRIVER5\u7535\u673A\u4F4D\u7F6E\n[stepper_z2]\nstep_pin: PE1\ndir_pin: !PD7\nenable_pin: !PB6\nrotation_distance: 40\ngear_ratio: 80:16\nmicrosteps: 32\n[tmc2209 stepper_z2]\nuart_pin: PD6\ninterpolate: false\nrun_current: 1.0\nsense_resistor: 0.110\nstealthchop_threshold: 0\n##--------------------------------------------------------------------\n## DRIVER6\u7535\u673A\u4F4D\u7F6E\n[stepper_z3]\nstep_pin: PE0\ndir_pin: PC13\nenable_pin: !PC14\nrotation_distance: 40\ngear_ratio: 80:16\nmicrosteps: 32\n[tmc2209 stepper_z3]\nuart_pin: PB7\ninterpolate: False\nrun_current: 1.0\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n#####################################################################\n#                             \u6324\u51FA\u673A\u914D\u7F6E\n#####################################################################\n## DRIVER7\u7535\u673A\u4F4D\u7F6E\n[extruder]                          # \u6324\u51FA\u673A\nstep_pin:PE7\ndir_pin:PE11\nenable_pin: !PE10\nmicrosteps: 16\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51B2\u6570 \uFF08200 \u4E3A 1.8 \u5EA6, 400 \u4E3A 0.9 \u5EA6\uFF09\nrotation_distance: 22.52245         # \u4E3B\u52A8\u5E26\u8F6E\u5468\u957Fmm\n# \u6821\u51C6\u6B65\u8FDB\u503C: rotation_distance = <\u65E7rotation_distance> * <\u5B9E\u9645\u6324\u51FA\u957F\u5EA6> / <\u8BF7\u6C42\u7684\u6324\u51FA\u957F\u5EA6>\ngear_ratio: 50:10                   # \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nnozzle_diameter: 0.400              # \u55B7\u5634\u76F4\u5F84\nfilament_diameter: 1.750            # \u8017\u6750\u76F4\u5F84\nheater_pin: PD14                    # \u6324\u51FA\u5934\u52A0\u70ED\u68D2\u63A7\u5236Pin\u811A\u8BBE\u7F6E(e0)\nsensor_type: Generic 3950           # \u4F20\u611F\u5668\u578B\u53F7\nsensor_pin: PC2                     # \u6324\u51FA\u5934\u4F20\u611F\u5668Pin\u811A\uFF08T_E0\uFF09\nmax_power: 1.0                      # \u52A0\u70ED\u68D2PWM\u6700\u5927\u8F93\u51FA\u529F\u7387\nmin_temp: -235                      # \u6324\u51FA\u673A\u6700\u5C0F\u6E29\u5EA6\nmax_temp: 350                       # \u6324\u51FA\u673A\u6700\u5927\u6E29\u5EA6\nmin_extrude_temp: 150               # \u52A0\u70ED\u68D2\u6700\u4F4E\u6324\u51FA\u6E29\u5EA6\uFF08\u8FBE\u5230\u6B64\u6E29\u5EA6\u6324\u51FA\u673A\u624D\u80FD\u6709\u6324\u51FA\u52A8\u4F5C\uFF09\npressure_advance: 0.04              # \u6324\u51FA\u673A\u538B\u529B\u63D0\u524D\u53C2\u6570\npressure_advance_smooth_time:0.040  # \u5E73\u7A33\u63A8\u8FDB\u65F6\u95F4-\u9ED8\u8BA4\u503C\u4E3A0.040\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid\npid_kp = 26.213\npid_ki = 1.304\npid_kd = 131.721\n\n[tmc2209 extruder]\nuart_pin:PC15\ninterpolate: False\nrun_current: 0.6\nsense_resistor: 0.110\nstealthchop_threshold: 0            # \u9759\u97F3\u9600\u503C\uFF08\u5982\u679C\u4E0D\u9700\u8981\u9759\u97F3\uFF0C\u8BF7\u5C06\u6570\u503C\u6539\u4E3A0\uFF09\n\n#####################################################################\n#                            \u70ED\u5E8A\u914D\u7F6E\n#####################################################################\n[heater_bed]\nheater_pin: PB0              # \u70ED\u5E8A\u63A5\u53E3\nsensor_type: Generic 3950    # \u70ED\u5E8A\u4F20\u611F\u5668\u7C7B\u578B\nsensor_pin: PC5              # \u70ED\u5E8A\u4F20\u611F\u5668\u63A5\u53E3\nmax_power: 1.0               # \u70ED\u5E8A\u529F\u7387\nmin_temp: -235               # \u70ED\u5E8A\u6700\u5C0F\u6E29\u5EA6\nmax_temp: 120                # \u70ED\u5E8A\u6700\u5927\u6E29\u5EA6\n# \u70ED\u5E8A\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  "PID_CALIBRATE HEATER=heater_bed TARGET=100"\ncontrol: pid\npid_kp: 58.437\npid_ki: 2.347\npid_kd: 363.769\n#####################################################################\n#                             \u98CE\u6247\u914D\u7F6E\n#####################################################################\n[fan]                        # \u6A21\u578B\u51B7\u5374\u98CE\u6247\npin:PA0\nkick_start_time: 1.0         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\noff_below: 0.10              # \u52FF\u52A8\nhardware_pwm: true\nmax_power: 1.0\n#--------------------------------------------------------------------\n[heater_fan \u5589\u7BA1\u6563\u70ED]         # \u5589\u7BA1\u51B7\u5374\u98CE\u6247\npin:PA1\nmax_power: 1.0\nkick_start_time: 0.5         # \u542F\u52A8\u65F6\u95F4\uFF08\u52FF\u52A8\uFF09\nheater: extruder             # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u6324\u51FA\u673A\nheater_temp: 50              # \u6324\u51FA\u673A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0\n#--------------------------------------------------------------------\n[heater_fan \u70ED\u5E8A\u98CE\u6247]         # \u7535\u5668\u4ED3\u98CE\u6247\npin: PA2\nmax_power: 1.0\nshutdown_speed: 0.0\nkick_start_time: 5.0\nheater: heater_bed           # \u5173\u8054\u7684\u8BBE\u5907\uFF1A\u70ED\u5E8A\nheater_temp: 50              # \u70ED\u5E8A\u8FBE\u5230\u591A\u5C11\u5EA6\u542F\u52A8\u98CE\u6247\nfan_speed: 1.0\n#---------------------------------------------------------------\n[fan_generic \u70ED\u5E8A\u98CE\u62471]\npin:PC6\nmax_power: 1.0\n# #--------------------------------------------------------------------\n[fan_generic \u4FA7\u8FB9\u98CE\u6247_fan]\npin:PC7\nmax_power: 1.0\n# #--------------------------------------------------------------------\n[fan_generic \u4FA7\u8FB9\u98CE\u6247_fan1]\npin:PC8\nmax_power: 1.0\n#--------------------------------------------------------------------\n[temperature_fan core_fan]      # \u4E0A\u4F4D\u673A\u6563\u70ED\u98CE\u6247\npin: host:gpiochip1/gpio3       # \u4E0A\u4F4D\u673A\u98CE\u6247pin\u811A\nmax_power: 1.0\nsensor_type: temperature_host   # \u8BBE\u7F6E\u4E3A\u4E0A\u4F4D\u673A\u4E3B\u63A7\u6E29\u5EA6\ncontrol:watermark               # \u63A7\u5236\u65B9\u5F0F\ntarget_temp: 48                 # \u4E0A\u4F4D\u673A\u6563\u70ED\u98CE\u6247\u542F\u52A8\u6E29\u5EA6\nmin_temp: 0                     # \u6700\u4F4E\u6E29\u5EA6\uFF0C\u4F4E\u4E8E\u6B64\u6E29\u5EA6\u5C06\u4F1A\u62A5\u9519\nmax_temp: 90                    # \u6700\u9AD8\u6E29\u5EA6\uFF0C\u9AD8\u4E8E\u6B64\u6E29\u5EA6\u5C06\u4F1A\u62A5\u9519\noff_below: 0.10\nkick_start_time: 0.50\nmax_speed: 0.8                  # \u6700\u5927\u8F6C\u901F\uFF0C\u4E3A\u6EE1\u529F\u7387\u8FD0\u8F6C\u65F6\u768480%\nmin_speed: 0.3                  # \u6700\u5C0F\u8F6C\u901F\uFF0C\u4E3A\u6EE1\u529F\u7387\u8FD0\u8F6C\u65F6\u768430%\n\n#####################################################################\n#                           \u95F2\u7F6E\u5173\u95ED\u70ED\u5E8A                             #\n#####################################################################\n[idle_timeout]\ntimeout: 1800                # \u7A7A\u95F2\u65F6\u95F4\u8D85\u8FC730\u5206\u949F\u5219\u5173\u95ED\u70ED\u5E8A\n\n#####################################################################\n#                           \u8C03\u5E73\u4F20\u611F\u5668                               #\n#####################################################################\n#\u9ED8\u8BA4PL08N\u611F\u5E94\u63A2\u5934\u4E0D\u4F4E\u4E8E\u55B7\u5634\u9AD8\u5EA6\uFF0C\u4EC5\u7528\u4E8E\u8C03\u5E73,\u5982\u679C\u4F60\u7684PL08N\u662FNO\uFF08\u5E38\u5F00\uFF09\uFF0C\u8BF7\u5C06\u66F4\u6539pin\u6DFB\u52A0\u5230\uFF01\n[probe]\npin: ^PD10                   # \u9650\u4F4D\u5F00\u5173PIN\u811A,\u5EFA\u8BAE\u5E38\u95ED\u7136\u540E\u6DFB\u52A0\uFF01\u53CD\u8F6C\u72B6\u6001,\u4F4D\u7F6E\u5728io-2\nx_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\ny_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\nz_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\nspeed: 10.0                  # \u8C03\u5E73\u901F\u5EA6\nsamples: 3                   # \u91C7\u6837\u6B21\u6570\nsamples_result: median       # \u53D6\u503C\u65B9\u5F0F\uFF08\u9ED8\u8BA4median-\u4E2D\u4F4D\u6570\uFF09\nsample_retract_dist: 4.0     # \u8C03\u5E73\u56DE\u7F29\u8DDD\u79BB\nsamples_tolerance: 0.007     # \u91C7\u6837\u516C\u5DEE\uFF08\u6CE8\u610F\u8FC7\u5C0F\u7684\u503C\u53EF\u80FD\u9020\u6210\u91C7\u6837\u6B21\u6570\u589E\u52A0\uFF09\nsamples_tolerance_retries: 3 # \u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570\n#--------------------------------------------------------------------\n# [bltouch]\n# sensor_pin: ^PC0             # \u4FE1\u53F7\u63A5\u53E3\n# control_pin: PE6             # \u8235\u673A\u63A7\u5236\n# x_offset: 0                  # X\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n# y_offset: 25.0               # Y\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n# z_offset: 0                  # Z\u8F74-\u4F20\u611F\u5668\u76F8\u5BF9\u55B7\u5634\u504F\u79FB\u91CF\n\n#####################################################################\n#                               \u5F52\u4F4D                                #\n#####################################################################\n[safe_z_home]                # Z\u8F74\u9650\u4F4D\u5750\u6807\nhome_xy_position:206,300     # Z\u8F74\u9650\u4F4D\u4F4D\u7F6E\u5B9A\u4E49\uFF08\u91CD\u8981\uFF01\uFF01\uFF01\u81EA\u884C\u8FDB\u884C\u8C03\u6574\uFF09\nspeed:100                    # \u5F52\u4F4D\u901F\u5EA6\nz_hop:10                     # \u5F52\u4F4D\u4E4B\u524D\u62AC\u5347\u9AD8\u5EA6\n#--------------------------------------------------------------------\n#[homing_override]\n#axes: z\n#set_position_z: 0\n#gcode:\n#   G90\n#   G0 Z15 F600\n#   G28 X Y\n#    ## Z \u9650\u4F4D\u5F00\u5173\u7684 XY \u4F4D\u7F6E\n#    ##\u901A\u8FC7\u540E\u5C06X0\u548CY0\u66F4\u65B0\u4E3A\u4F60\u7684\u503C\uFF08\u5982X157\u3001Y305\uFF09\n#    ## Z \u8F74\u9650\u4F4D\u4F4D\u7F6E\u5B9A\u4E49\n#   G0 X185 Y250 F3600    #250mm   \n#   G28 Z\n#   G0 Z10 F1800\n\n#####################################################################\n#                           4Z\u8C03\u5E73 \n#####################################################################\n[quad_gantry_level]          # 300mm\u673A\u5668\u8C03\u5E73\u53C2\u6570\n#gantry_corners:\n#    -60,-10\n#    310,320\n#points:                      # 250mm\u673A\u5668\u8C03\u5E73\u70B9\u4F4D\n#    50,25\n#    50,175\n#    200,175\n#    200,25\n#--------------------------------------------------------------------\ngantry_corners:              # 300mm\u673A\u5668\u8C03\u5E73\u70B9\u4F4D\n    -60,-10\n    360,370\npoints:\n    50,25\n    50,225\n    250,225\n    250,25\n#--------------------------------------------------------------------\n#gantry_corners:              # 350mm\u673A\u5668\u8C03\u5E73\u70B9\u4F4D\n#    -60,-10\n#    410,420\n#points:\n#    50,25\n#    50,275\n#    300,275\n#    300,25\n#--------------------------------------------------------------------\nspeed: 100                   # \u8C03\u5E73\u901F\u5EA6\nhorizontal_move_z: 10        # Z\u8F74\u8D77\u59CB\u9AD8\u5EA6\nretry_tolerance: 0.0075      # \u91C7\u6837\u516C\u5DEE\nretries: 5                   # \u8D85\u516C\u5DEE\u91CD\u8BD5\u6B21\u6570\nmax_adjust: 10               # \u8C03\u5E73\u6700\u5927\u8C03\u6574\u884C\u7A0B\n\n#####################################################################\n#                            LED\u706F\u914D\u7F6E\uFF08\u9700\u8981\u65F6\u542F\u7528\uFF09\n#####################################################################\n[neopixel sb_leds]\npin: PD15                   # \u4FE1\u53F7\u63A5\u53E3\nchain_count: 3              # \u706F\u73E0\u6570\u91CF\ncolor_order: GRBW           # \u706F\u73E0\u7C7B\u578B\ninitial_RED: 0.4            # \u5929\ninitial_GREEN: 0.8          # \u4F9D\ninitial_BLUE: 1             # \u84DD\ninitial_WHITE: 0.0          \n#--------------------------------------------------------------------\n[board_pins]\naliases:\n    EXP1_1=PB10, EXP1_3=PA14,  EXP1_5=PE15, EXP1_7=PE13, EXP1_9=<GND>,\n    EXP1_2=PB1,  EXP1_4=PA13,  EXP1_6=PE14, EXP1_8=PB11, EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PB14, EXP2_3=PA9,  EXP2_5=PA10,  EXP2_7=PE12,  EXP2_9=<GND>,\n    EXP2_2=PB13, EXP2_4=PB12, EXP2_6=PB15,  EXP2_8=<RST>, EXP2_10=<NC>,\n#--------------------------------------------------------------------    \n[display]\nlcd_type: uc1701                # \u663E\u793A\u5C4F\u9A71\u52A8\u7C7B\u578B\ncs_pin: EXP1_3                  # \u663E\u793A\u5C4F\u7247\u9009cs\u5F15\u811A\u8BBE\u7F6E\na0_pin: EXP1_4                  # \u663E\u793A\u5C4F\u6570\u636Ea0\u5F15\u811A\u8BBE\u7F6E\nrst_pin: EXP1_5                 # \u663E\u793A\u5C4F\u590D\u4F4Drst\u811A\u8BBE\u7F6E\ncontrast: 63                    # \u5BF9\u6BD4\u5EA6\nencoder_pins: ^EXP2_5, ^!EXP2_3 # \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u5F15\u811A\u8BBE\u7F6E\nclick_pin: ^!EXP1_2             # \u65CB\u8F6C\u7F16\u7801\u5668\uFF08\u65CB\u94AE\u5F00\u5173\uFF09\u786E\u8BA4\u6309\u952E\u7684\u5F15\u811A\u8BBE\u7F6E\n# --------------------------------------------------------------------\n####\u9002\u7528\u4E8EFLY Mini12864\n[neopixel fly_mini12864]\npin: EXP1_6                     # \u663E\u793A\u5C4F\u80CC\u5149\u706F\u63A7\u5236\u5F15\u811A\u8BBE\u7F6E\nchain_count: 3\ninitial_RED: 0.5                # \u7EA2\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\ninitial_GREEN: 0.5              # \u7EFF\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\ninitial_BLUE: 0.5               # \u84DD\u8272LED\u706F\u4EAE\u5EA6\u63A7\u5236\uFF08\u8303\u56F4\uFF1A0-1\uFF09\ncolor_order: RGB                # \u989C\u8272\u987A\u5E8F\n#####################################################################\n#                           \u81EA\u5B9A\u4E49gcode\u5B8F\n#####################################################################\n[gcode_macro PRINT_START]       # \u5C06 PRINT_START \u8BBE\u7F6E\u4E3A\u5F00\u59CB\u6253\u5370\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u524D\u7684\u52A8\u4F5C\ngcode:\n    G92 E0                           # \u91CD\u7F6E\u6324\u51FA\n    BED_MESH_CLEAR                 # \u5378\u8F7D\u7F51\u5E8A\n    G28                              # \u5F52\u4F4D\u6240\u6709\u8F74\n    clean_nozzle                      # \u64E6\u5634\n    QUAD_GANTRY_LEVEL              # \u9F99\u95E8\u67B6\u8C03\u5E73\n    G28                              # \u5F52\u4F4D\u6240\u6709\u8F74\n    G1 Z20 F3000                     # \u5C06\u55B7\u5634\u79FB\u79BB\u70ED\u5E8A\n    clean_nozzle\n    # BED_MESH_CALIBRATE PRINT_MIN={params.PRINT_MIN} PRINT_MAX={params.PRINT_MAX} FORCE_NEW_MESH=True  #\u6839\u636E\u6253\u5370\u9762\u79EF\u63A2\u6D4B\u7F51\u5E8A\n    BED_MESH_PROFILE LOAD=default  # \u52A0\u8F7D\u7F51\u5E8A\n#--------------------------------------------------------------------\n[gcode_macro PRINT_huaxian]        \ngcode:\n    G1 Z5 F3000 \n    G92 E0;              # \u91CD\u7F6E\u6324\u51FA\n    G90                  # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB\n    G0 X5 Y1 F6000       # \u79FB\u52A8\u81F3x5 y1\u4F4D\u7F6E\uFF0C\u901F\u5EA6100mm/s\uFF08F6000\uFF0C\u610F\u601D\u4E3A6000mm\u6BCF\u5206\u949F\uFF09\n    G0 Z0.4              # \u79FB\u52A8z\u8F74\u9AD8\u5EA6\u81F30.4\n    G91                  # \u8BBE\u7F6E\u5750\u6807\u4F53\u7CFB\u4E3A\u76F8\u5BF9\u5750\u6807\n    G1 X100 E20 F1200;   # \u79FB\u52A8x\u8F74100mm\uFF0C\u5E76\u6324\u51FA\uFF0C\u66F4\u6539F\u53EF\u66F4\u6539\u6324\u51FA\u7387\n    G1 Y1                # \u79FB\u52A8y\u8F741mm\n    G1 X-100 E20 F1200;  # \u53CD\u65B9\u5411\u79FB\u52A8x\u8F74100mm\uFF0C\u5E76\u6324\u51FA\uFF0C\u66F4\u6539F\u53EF\u66F4\u6539\u6324\u51FA\u7387\n    G0 z5                # \u62AC\u9AD8z\u8F745mm\n    G92 E0;              # \u91CD\u7F6E\u6324\u51FA\n    G90                  # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB \n#--------------------------------------------------------------------\n[gcode_macro PRINT_END]            # \u5C06 PRINT_END \u8BBE\u7F6E\u4E3A\u6253\u5370\u7ED3\u675F\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u5B8C\u6210\u4E4B\u540E\u52A8\u4F5C\ngcode:\n    M400                          # \u7B49\u5F85\u7F13\u51B2\u533A\u6E05\u9664\n    G92 E0                        # \u5C06\u6324\u51FA\u673A\u5F52\u96F6\n    G1 E-10.0 F3600               # \u7F29\u56DE\u8017\u6750\u4E1D\n    G91                           # \u76F8\u5BF9\u5B9A\u4F4D\n    G0 Z1.00 X20.0 Y20.0 F6000    # \u79FB\u52A8\u55B7\u5634\u4EE5\u79FB\u9664\u67B6\u7EBF\n    TURN_OFF_HEATERS              # \u5173\u95ED\u70ED\u7AEF\n    M107                          # \u5173\u95ED\u98CE\u6247\n    G1 Z2 F3000                   # \u5C06\u55B7\u5634\u5411\u4E0A\u79FB\u52A82\u6BEB\u7C73\n    G90                           # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB\n    G0  X150 Y280 F3600           # \u5C06\u55B7\u5634\u505C\u5728\u540E\u90E8\n    BED_MESH_CLEAR                # \u5378\u8F7D\u7F51\u5E8A\n\n'})})]})}function l(n={}){let{wrapper:e}={...(0,_.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(c,{...n})}):c(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return s}});var r=t(75271);let i={},_=r.createContext(i);function s(n){let e=r.useContext(_);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(_.Provider,{value:e},n.children)}}}]);