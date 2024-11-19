"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[35102],{65105:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>_,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg","title":"klipper\u53c2\u8003\u914d\u7f6e","description":"","source":"@site/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729848160000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"klipper\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"BL firmware, please ignore","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl"},"next":{"title":"Main Board Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/wiring"}}');var r=t(86070),s=t(15658);const o={sidebar_position:6,sidebar_label:"klipper\u53c2\u8003\u914d\u7f6e"},_="klipper\u53c2\u8003\u914d\u7f6e",a={},p=[];function d(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"klipper\u53c2\u8003\u914d\u7f6e",children:"klipper\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-cfg",children:"####################################################################################\n#                         3D MELLOW / FLY_GEMINI                                   #\n####################################################################################\n## FLY_GEMINI\u8d44\u6599\u7f51\u5740\uff1ahttp://mellow.klipper.cn/#/board/fly_gemini_v3/README\n## FLY_GEMINI\u539f\u7406\u56fe\u7f51\u5740\uff1ahttps://github.com/Mellow-3D/Fly-Gemini-V3\n## FLY \u5b98\u65b9\u6dd8\u5b9d\u5e97\uff1ahttps://shop126791347.taobao.com/shop/view_shop.htm?spm=a230r.1.14.4.1a4840a8hyvpPJ&user_number_id=2464680006\n## \u5982\u9700\u552e\u540e\uff0c\u8bf7\u8054\u7cfb\u6dd8\u5b9d\u5ba2\u670d\n## FLY \u552e\u540e\u6280\u672f\u652f\u6301\u7fa4\uff1a621032883\n## FLY-RRF\u56fa\u4ef6\u4ea4\u6d41\u7fa4\uff1a786561979\n\n#####################################################################\n#                               \u6ce8\u610f\u4e8b\u9879                              #\n#####################################################################\n##***\u9700\u8981\u66f4\u6539/\u68c0\u67e5\u7684\u4e8b\u9879\uff1a***\n## MCU \u8def\u5f84                                [mcu] \n## \u6253\u5370\u673a\u6d3b\u52a8\u8303\u56f4                           xyz\u7684position   \n## \u70ed\u654f\u7535\u963b\u7c7b\u578b                                [extruder] \u548c [heater_bed]\n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u505c\u6b62\u4f4d\u7f6e                      [safe_z_home] \n## Z\u8f74\u9650\u4f4d\u5f00\u5173\u504f\u79fb\u4f4d\u7f6e                      [stepper_z] \n## PID \u6821\u51c6                                    [extruder] \u548c [heater_bed] \n## \u5fae\u8c03\u6324\u51fa\u673a\u7535\u673a\u6b65\u8fdb\u503c                     [extruder] \n\n#####################################################################\n#                               \u6587\u4ef6\u8c03\u7528                              #\n#####################################################################\n#[include fluidd.cfg]          # FLUIDD\u8c03\u7528\u6587\u4ef6\u3002\n#[include mainsail.cfg]        # MAINSDIL\u8c03\u7528\u6587\u4ef6\u3002\n#\u9700\u8981\u81ea\u884c\u786e\u5b9a\u4f7f\u7528\u54ea\u4e2a\u6587\u4ef6\n\n#####################################################################\n#                               \u4e3b\u677f\u914d\u7f6e                               #\n#####################################################################\n[mcu]\nserial: /dev/ttyACM0\n#canbus_uuid: e51d5c71a901\n### \u67e5\u8be2can\u56fa\u4ef6id\u662f\uff1a~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628aserial\u66ff\u6362\u6210canbus_uuid: \u540e\u9762\u6dfb\u52a0id \n\n#####################################################################\n#                            \u673a\u578b\u548c\u52a0\u901f\u5ea6                            #\n#####################################################################\n[printer]                       # \u6253\u5370\u673a\u8bbe\u7f6e\nkinematics: corexy              # \u8fd0\u52a8\u5b66\u7ed3\u6784\u5206\u4e3a\uff1a\u7b1b\u5361\u5c14\u548ccorexy\u7b49\u7b49\u3002\u7b1b\u5361\u5c14\uff1acartesian\nmax_velocity: 200               # \u6253\u5370\u673a\u6700\u5927\u901f\u5ea6   \nmax_accel: 2000                 # \u6700\u5927\u52a0\u901f\u5ea6 \u6700\u59273000\nmax_z_velocity: 15              # z\u8f74\u6700\u5927\u901f\u5ea6\nmax_z_accel: 300                # z\u8f74\u6700\u5927\u52a0\u901f\u5ea6\nsquare_corner_velocity: 6.0     # \u65b9\u5f62\u62d0\u89d2\u901f\u5ea6\uff0c\u5c0f\u4e00\u70b9\u53ef\u4ee5\u6709\u6548\u907f\u514d\u5e73\u53f0\u91cd\u5e26\u6765\u7684\u60ef\u6027\n\n#####################################################################\n#                             \u6e29\u5ea6\u76d1\u63a7                               #\n#####################################################################\n[temperature_sensor FLY MCU]      # FLY\u4e3b\u677f\u6e29\u5ea6\nsensor_type: temperature_mcu      # \u5173\u8054mcu\uff08\u9ed8\u8ba4\uff09\n#--------------------------------------------------------------------\n[temperature_sensor FLY-\u03c0]        # \u4e0a\u4f4d\u673a\u6e29\u5ea6\nsensor_type: temperature_host     # \u5173\u8054\u4e0a\u4f4d\u673a\n\n#####################################################################\n#             X/Y\u6b65\u8fdb\u7535\u673a\u8bbe\u7f6e (X/Y Stepper Settings)                 # \n#####################################################################\n#   B Motor ---- Motor A \n#   |                  |\n#   |------\u6324\u51fa\u673a-------|\n#   |                  |\n#   |                  |\n#          \u6b63\u524d\u65b9   \n#####################################################################\n#                  X \u8f74\u6b65\u8fdb\u7535\u673a     X\u7535\u673a\u4f4d (B Motor)                 #\n#####################################################################\n#\u6ce8\uff1a\u63a5\u5b8c\u7ebf\u9700\u6d4b\u8bd5\u8fd0\u884c\u65b9\u5411,deiver0\n[stepper_x]\nstep_pin: PC13                      # X\u8f74\u7535\u673a\u8109\u51b2\u5f15\u811a\u8bbe\u7f6e\ndir_pin: PC1                        # X\u8f74\u7535\u673a\u8fd0\u884c\u5f15\u811a\u8bbe\u7f6e,\u65b9\u5411\u6309\u5b9e\u9645\u5224\u65ad\uff0c\u52a0\u611f\u53f9\u53f7\u4f1a\u8ba9\u8fd0\u884c\u65b9\u5411\u53cd\u8f6c\nenable_pin: !PA3                    # X\u8f74\u7535\u673a\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e,\u4f7f\u80fd\u5f15\u811a\u9700\u8981\u52a0\u611f\u53f9\u53f7\uff0c\u5426\u8005\u7535\u673a\u4e0d\u5de5\u4f5c\nrotation_distance: 40               # \u4e3b\u52a8\u5e26\u8f6e\u5468\u957fmm\uff082GT-20T\u5e26\u8f6e40\uff0c2GT-16T\u5e26\u8f6e32\uff09\nmicrosteps: 16                      # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e\uff0c\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200        # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400\uff09\nendstop_pin: !PA4                   # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u63a5\u5e38\u95ed\n#endstop_pin: tmc2209_stepper_x:virtual_endstop  #\u65e0\u9650\u4f4d\n###\u63a5\u5e38\u95ed\u540e\u662f\u89e6\u53d1\u72b6\u6001\uff0c\u52a0\u611f\u53f9\u53f7\u53ef\u4ee5\u53cd\u8f6c\u8fd9\u4e2a\u72b6\u6001\uff0c\u4e07\u4e00\u65ad\u7ebf\u65f6\u5019\u53ef\u4ee5\u907f\u514d\u649e\u673a\nposition_endstop: 120               # \u8f6f\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nposition_max: 120                   # \u673a\u68b0\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nhoming_speed: 50                    # \u590d\u4f4d\u901f\u5ea6\uff0c\u6700\u5927\u4e3a100.\u5f52\u4f4d\u901f\u5ea6\u5efa\u8bae\u522b\u592a\u5feb\nhoming_retract_dist: 0              # \u7b2c\u4e00\u6b21\u89e6\u53d1\u590d\u4f4d\u5f00\u5173\u4e4b\u540e\u7684\u540e\u9000\u8ddd\u79bb\nhoming_positive_dir: true           # \u590d\u4f4d\u65b9\u5411\uff08\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8\uff09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n##  \u8bf7\u786e\u4fdd\u9a71\u52a8\u578b\u53f7\u914d\u7f6e\u6b63\u786e (2208 or 2209)\n[tmc2209 stepper_x]                 # X \u9a71\u52a8\u914d\u7f6e -TMC2209\nuart_pin: PB11                      # \u901a\u8baf\u7aef\u53e3Pin\u811a\u5b9a\u4e49\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\uff08\u5355\u4f4d\uff1amA\uff09\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 0            # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\ndiag_pin: ^PA4                      # If you have Mellows 2209 drivers they have a small dip switch on the driver to enable sensorless homing, other wise no jumper is needed \ndriver_SGTHRS: 255                  # this is set to 255 which is the MAX sensitivity for sensorless homing, you will need to tune this later\n#--------------------------------------------------------------------\n#[tmc5160 stepper_x]                 # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC5160\n#cs_pin: PB11                        # SPI \u7247\u9009Pin\u811a\u5b9a\u4e49\n#spi_bus: spi3                       # SPI \u901a\u8baf\u603b\u7ebf\u5b9a\u4e49\n#run_current: 1.0                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n#interpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\n#sense_resistor: 0.075               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n#stealthchop_threshold: 500          # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n#####################################################################\n#                  Y \u8f74\u6b65\u8fdb\u7535\u673a     Y\u7535\u673a\u4f4d (A Motor)                 #\n#####################################################################\n#\u6ce8\uff1a\u63a5\u5b8c\u7ebf\u9700\u6d4b\u8bd5\u8fd0\u884c\u65b9\u5411,deiver1\n[stepper_y]\nstep_pin: PC14                      # Y\u8f74\u7535\u673a\u8109\u51b2\u5f15\u811a\u8bbe\u7f6e\ndir_pin: PC4                        # Y\u8f74\u7535\u673a\u8fd0\u884c\u5f15\u811a\u8bbe\u7f6e,\u65b9\u5411\u6309\u5b9e\u9645\u5224\u65adx\uff0c\u52a0\u611f\u53f9\u53f7\u4f1a\u8ba9\u8fd0\u884c\u65b9\u5411\u53cd\u8f6c\nenable_pin: !PD2                    # Y\u8f74\u7535\u673a\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e,\u4f7f\u80fd\u5f15\u811a\u9700\u8981\u52a0\u611f\u53f9\u53f7\uff0c\u5426\u8005\u7535\u673a\u4e0d\u5de5\u4f5c\nrotation_distance: 40               # \u4e3b\u52a8\u5e26\u8f6e\u5468\u957fmm\uff082GT-20T\u5e26\u8f6e40\uff0c2GT-16T\u5e26\u8f6e32\uff09\nmicrosteps: 16                      # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e\uff0c\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200        # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400\uff09\nendstop_pin: !PA5                   # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u7136\u540e\u6dfb\u52a0\uff01\u53cd\u8f6c\u72b6\u6001\n#endstop_pin: tmc2209_stepper_y:virtual_endstop  #\u65e0\u9650\u4f4d\n###\u63a5\u5e38\u95ed\u540e\u662f\u89e6\u53d1\u72b6\u6001\uff0c\u52a0\u611f\u53f9\u53f7\u53ef\u4ee5\u53cd\u8f6c\u8fd9\u4e2a\u72b6\u6001\uff0c\u4e07\u4e00\u65ad\u7ebf\u65f6\u5019\u53ef\u4ee5\u907f\u514d\u649e\u673a\nposition_endstop: 120               # \u8f6f\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nposition_max: 120                   # \u673a\u68b0\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nhoming_speed: 50                    # \u590d\u4f4d\u901f\u5ea6\uff0c\u6700\u5927\u4e3a100        \u5f52\u4f4d\u901f\u5ea6\u5efa\u8bae\u522b\u592a\u5feb\nhoming_retract_dist: 0              # \u7b2c\u4e00\u6b21\u89e6\u53d1\u590d\u4f4d\u5f00\u5173\u4e4b\u540e\u7684\u540e\u9000\u8ddd\u79bb\nhoming_positive_dir: true           # \u590d\u4f4d\u65b9\u5411\uff08\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8\uff09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n##  \u8bf7\u786e\u4fdd\u9a71\u52a8\u578b\u53f7\u914d\u7f6e\u6b63\u786e (2208 or 2209)\n[tmc2209 stepper_y]                 # Y\u9a71\u52a8\u914d\u7f6e -TMC2209\nuart_pin: PC10                      # \u901a\u8baf\u7aef\u53e3Pin\u811a\u5b9a\u4e49\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\uff08\u5355\u4f4d\uff1amA\uff09\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 0            # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\ndiag_pin: ^PA5                      # If you have Mellows 2209 drivers they have a small dip switch on the driver to enable sensorless homing, other wise no jumper is needed\ndriver_SGTHRS: 255                  # this is set to 255 which is the MAX sensitivity for sensorless homing, you will need to tune this later\n\n#--------------------------------------------------------------------\n#[tmc5160 stepper_y]                 # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC5160\n#cs_pin: PC10                        # SPI \u7247\u9009Pin\u811a\u5b9a\u4e49\n#spi_bus: spi3                       # SPI \u901a\u8baf\u603b\u7ebf\u5b9a\u4e49\n#run_current: 1.0                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n#interpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\n#sense_resistor: 0.075               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n#stealthchop_threshold: 0            # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n\n#####################################################################\n#                           Z\u8f74\u6b65\u8fdb\u7535\u673a                              #\n#####################################################################\n#\u6ce8\uff1a\u63a5\u5b8c\u7ebf\u9700\u6d4b\u8bd5\u8fd0\u884c\u65b9\u5411,deiver2\n[stepper_z]\nstep_pin: PC15                 # z\u8f74\u7535\u673a\u8109\u51b2\u5f15\u811a\u8bbe\u7f6e\ndir_pin: !PC5                  # z\u8f74\u7535\u673a\u65b9\u5411\u5f15\u811a\u8bbe\u7f6e,\u65b9\u5411\u5f15\u811a\u9700\u8981\u6309\u5b9e\u9645\u5224\u65ad\uff0c\u52a0\u611f\u53f9\u53f7\u4f1a\u8ba9\u8fd0\u884c\u65b9\u5411\u53cd\u8f6c\nenable_pin: !PC12              # z\u8f74\u7535\u673a\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e,\u4f7f\u80fd\u5f15\u811a\u9700\u8981\u52a0\u611f\u53f9\u53f7\uff0c\u5426\u8005\u7535\u673a\u4e0d\u5de5\u4f5c\n### T8x4\u4e1d\u6760\u3002\u65cb\u8f6c\u4e00\u5708\uff0c\u70ed\u5e8a\u5e8a\u53ef\u79fb\u52a84\u6beb\u7c73 \n### \u8bf7\u6839\u636e\u8d2d\u4e70\u7684\u4e1d\u6746\u53c2\u6570\u8fdb\u884c\u4fee\u6539\nrotation_distance: 8          # \u4e1d\u6746\u5bfc\u7a0b\u4e3a 8\nfull_steps_per_rotation: 200  # \u7535\u673a\u5355\u5708\u6240\u9700\u8109\u51b2\u6570\uff081.8\u5ea6\u7535\u673a:200\uff0c0.9\u5ea6\u7535\u673a:400\nmicrosteps: 16                # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e,\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nendstop_pin: !PA6             # \u9650\u4f4d\u5f00\u5173PIN\u811a,\u5efa\u8bae\u5e38\u95ed\u7136\u540e\u6dfb\u52a0\uff01\u53cd\u8f6c\u72b6\u6001\n## position_endstop \u662f\u55b7\u5634\u76f8\u5bf9\u4e8e\u6253\u5370\u8868\u9762(Z0)\u5230Z\u9650\u4f4d\u505c\u6b62\u89e6\u53d1\u70b9\u7684\u4f4d\u7f6e(\u5355\u4f4d:mm)\n## \u6b63\u6570\u503c = \u9ad8\u4e8e\u5e73\u53f0\u7684\u7ec8\u6b62\u70b9\uff0c\u8d1f\u6570\u503c = \u4f4e\u4e8e\u5e73\u53f0\u7684\u7684\u7ec8\u6b62\u70b9\n## \u589e\u52a0position_ endstop\u7684\u6570\u503c\u4f1a\u4f7f\u55b7\u5634\u66f4\u9760\u8fd1\u5e8a\n## \u5728\u8fd0\u884cZ_ENDSTOP_CALIBRATE\u4e4b\u540e\uff0cposition_endstop\u5c06\u5b58\u50a8\u5728CFG\u914d\u7f6e\u7684\u6700\u540e\nposition_min: -1.5            # \u914d\u7f6e\u55b7\u5634\u6e05\u6d01\u9700\u8981-5\u5de6\u53f3\nposition_endstop: 120         # \u8f6f\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nposition_max: 120             # \u673a\u68b0\u9650\u4f4d\u6700\u5927\u884c\u7a0b (250mm-300mm-350mm)\uff08voron0.1\u662f120\uff09\nhoming_speed: 20              # \u590d\u4f4d\u901f\u5ea6-\u6700\u5927 20\nsecond_homing_speed: 3        # \u4e8c\u6b21\u590d\u4f4d\u901f\u5ea6-\u6700\u5927 10\nhoming_retract_dist: 3        # \u540e\u64a4\u8ddd\u79bb\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 stepper_z]\nuart_pin: PB7                 # \u9a71\u52a8\u901a\u4fe1\u7aef\u53e3\ninterpolate: false            # \u5fae\u6b65\u63d2\u503c256\nrun_current: 0.8              # \u8fd0\u884c\u7535\u6d41mA\nsense_resistor: 0.110         # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 0      # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n#--------------------------------------------------------------------\n#[tmc5160 stepper_z]            # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC5160\n#cs_pin: PB7                    # SPI \u7247\u9009Pin\u811a\u5b9a\u4e49\n#spi_bus: spi3                  # SPI \u901a\u8baf\u603b\u7ebf\u5b9a\u4e49\n#run_current: 1.0               # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n#interpolate: False             # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u4e0d\u5efa\u8bae\u5f00\u542f\uff09\n#sense_resistor: 0.075          # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n#stealthchop_threshold: 500     # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n\n#####################################################################\n#                     E0 \u6324\u51fa\u673a\u8bbe\u7f6e \uff08E0 Settings\uff09                  # \n#####################################################################\n#\u6ce8\uff1a\u63a5\u5b8c\u7ebf\u9700\u6d4b\u8bd5\u8fd0\u884c\u65b9\u5411,deiver3\n[extruder]                         # \u6324\u51fa\u673a\nstep_pin: PC3                       # \u6324\u51fa\u7535\u673a\u65b9\u8109\u51b2\u5f15\u811a\ndir_pin: PC8                        # \u6324\u51fa\u7535\u673a\u65b9\u5411\u5f15\u811a\u8bbe\u7f6e\nenable_pin: !PC11                   # \u6324\u51fa\u7535\u673a\u65b9\u4f7f\u80fd\u5f15\u811a\u8bbe\u7f6e\n## \u6267\u884c\u6324\u51fa\u673a\u6821\u51c6\u65f6\uff0c\u66f4\u65b0\u4ee5\u4e0b\u503c\n## \u6bd4\u5982\u4f60\u8981\u6c42100\u6beb\u7c73\u7684\u8fdb\u6599\uff0c\u4f46\u5b9e\u9645\u4e0a\u662f102\uff1a\n## rotation_distance = <\u65e7rotation_distance> * <\u5b9e\u9645\u6324\u51fa\u957f\u5ea6> / <\u8bf7\u6c42\u7684\u6324\u51fa\u957f\u5ea6>\n## \u6821\u51c6\u6b65\u8fdb\u503c: 22.44=\u65e7\u503c22*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\nrotation_distance: 22.23            # \u6b65\u8fdb\u503c\ngear_ratio: 50:10                   # \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nmicrosteps: 16                      # \u7535\u673a\u7ec6\u5206\u8bbe\u7f6e,\u7ec6\u5206\u8d8a\u9ad8\uff0c\u8d28\u91cf\u8d8a\u9ad8\uff0c\u4f46\u4e3b\u63a7\u8d1f\u8377\u8d8a\u5927\nfull_steps_per_rotation: 200        # \u5355\u5708\u8109\u51b2\u6570 \uff08200 \u4e3a 1.8 \u5ea6, 400 \u4e3a 0.9 \u5ea6\uff09\nnozzle_diameter: 0.400              # \u55b7\u5634\u76f4\u5f84\nfilament_diameter: 1.75             # \u8017\u6750\u76f4\u5f84\nheater_pin: PA0                     # \u52a0\u70ed\u68d2\u5f15\u811a,\u63a5\u5230HETA0\nsensor_type: ATC Semitec 104GT-2    # \u4f20\u611f\u5668\u578b\u53f7  (generic 3950, ATC Semitec 104GT-2\uff0c PT1000)\nsensor_pin: PC0                     # \u4f20\u611f\u5668\u5f15\u811a  \nmin_temp: 10                        # \u6700\u5c0f\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_temp: 350                       # \u6700\u5927\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_power: 1.0                      # \u6700\u5927\u529f\u7387\nmin_extrude_temp: 170               # \u6700\u5c0f\u6324\u51fa\u6e29\u5ea6\uff08\u81f3\u5c11\u9700\u8981\u8fbe\u5230\u8fd9\u4e2a\u6e29\u5ea6\uff0c\u6324\u51fa\u673a\u624d\u80fd\u6324\u51fa\uff09\npressure_advance: 0.00              # \u63a8\u8fdb\u538b\u529b-\u5c3d\u91cf\u5c06\u538b\u529b\u4fdd\u6301\u57281.0\u4ee5\u4e0b(\u538b\u529b\u63d0\u524d\u662f\u8c03\u6574\u8fd9\u4e2a)\npressure_advance_smooth_time: 0.040 # \u5e73\u7a33\u63a8\u8fdb\u65f6\u95f4-\u9ed8\u8ba4\u503c\u4e3a0.040\n#\u538b\u529b\u63d0\u524d\u8c03\u6574\u65b9\u6cd5:https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040 # \u5e73\u7a33\u63a8\u8fdb\u65f6\u95f4-\u9ed8\u8ba4\u503c\u4e3a0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51fa\u6d41\u91cf\u62a5\u9519\u53ef\u4ee5\u6ce8\u91ca\u8fd9\u4e2a\uff0c\u4f46\u662f\u5efa\u8bae\u91cd\u65b0\u5207\u7247\n#\u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  \"PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol = pid                # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kp = 26.213              # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_ki = 1.304               # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kd = 131.721             # PID\u55b7\u5634\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 extruder]                 # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC2209\nuart_pin: PB6                       # \u901a\u8baf\u7aef\u53e3Pin\u811a\u5b9a\u4e49\ninterpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\nrun_current: 0.8                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\nsense_resistor: 0.110               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\nstealthchop_threshold: 500          # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n#--------------------------------------------------------------------\n#[tmc5160 extruder]                  # \u6324\u51fa\u673a\u9a71\u52a8\u914d\u7f6e- TMC5160\n#cs_pin: PB6                         # SPI \u7247\u9009Pin\u811a\u5b9a\u4e49\n#spi_bus: spi3                       # SPI \u901a\u8baf\u603b\u7ebf\u5b9a\u4e49\n#run_current: 1.0                    # \u7535\u673a\u8fd0\u884c\u7535\u6d41\u503c\n#interpolate: False                  # \u662f\u5426\u5f00\u542f256\u5fae\u6b65\u63d2\u503c\uff08\u5f00\u542f\u662fTrue\uff0c\u5173\u95ed\u662fFalse\uff09\n#sense_resistor: 0.075               # \u9a71\u52a8\u91c7\u6837\u7535\u963b\u4e0d\u8981\u6539\uff08\u5982\u679c\u4f7f\u75285160 Pro\uff0c\u8bf7\u5c06\u6570\u503c\u4fee\u6539\u4e3a0.033\uff09\n#stealthchop_threshold: 500          # \u9759\u97f3\u9600\u503c\uff08\u5982\u679c\u4e0d\u9700\u8981\u9759\u97f3\uff0c\u8bf7\u5c06\u6570\u503c\u6539\u4e3a0\uff09\n\n#####################################################################\n#                            \u70ed\u5e8a\u914d\u7f6e                                # \n#####################################################################\n[heater_bed]\nheater_pin: PA2              # \u70ed\u5e8a\u63a5\u53e3\nsensor_type: Generic 3950    # \u4f20\u611f\u5668\u578b\u53f7  (generic 3950, ATC Semitec 104GT-2\uff0c PT1000)\nsensor_pin: PC2              # \u70ed\u5e8a\u4f20\u611f\u5668\u63a5\u53e3\nsmooth_time: 3.0\nmax_power: 1.0               # \u70ed\u5e8a\u529f\u7387\nmin_temp: 0                  # \u6700\u5c0f\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\nmax_temp: 120                # \u6700\u5927\u6e29\u5ea6\uff08\u6ce8\u610f\uff1a\u6d4b\u91cf\u6e29\u5ea6\u8d85\u8fc7\u8bbe\u5b9a\u503c\u4f1a\u89e6\u53d1\u7d27\u6025\u505c\u6b62\uff09\n# \u70ed\u5e8a\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  \"PID_CALIBRATE HEATER=heater_bed TARGET=100\"\ncontrol: pid                # PID\u70ed\u5e8a\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kp: 68.453              # PID\u70ed\u5e8a\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_ki: 2.749               # PID\u70ed\u5e8a\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\npid_kd: 426.122             # PID\u70ed\u5e8a\u6e29\u5ea6\u81ea\u52a8\u6821\u51c6\u9879\uff08pid\u6821\u51c6\u5b8c\u6210\u540e\uff0c\u4f1a\u88ab\u6ce8\u91ca\uff09\n\n#####################################################################\n#                            \u98ce\u6247\u914d\u7f6e                                # \n#####################################################################\n[fan]                        # \u6a21\u578b\u51b7\u5374\u98ce\u6247 \npin: PC6                     # \u4fe1\u53f7\u63a5\u53e3\nkick_start_time: 0.5         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\noff_below: 0.13              # \u52ff\u52a8\ncycle_time: 0.010\n#--------------------------------------------------------------------\n[heater_fan hotend_fan]      # \u5589\u7ba1\u51b7\u5374\u98ce\u6247\npin: PC7                     # \u4fe1\u53f7\u63a5\u53e3\nmax_power: 1.0               # \u6700\u5927\u8f6c\u901f\nkick_start_time: 0.5         # \u542f\u52a8\u65f6\u95f4\uff08\u52ff\u52a8\uff09\nheater: extruder             # \u5173\u8054\u7684\u8bbe\u5907\uff1a\u6324\u51fa\u673a\nheater_temp: 50              # \u6324\u51fa\u673a\u8fbe\u5230\u591a\u5c11\u5ea6\u542f\u52a8\u98ce\u6247\n#fan_speed: 1.0              # \u98ce\u6247\u8f6c\u901f\n#--------------------------------------------------------------------\n#Fly Gemini does have another controllable fan header but its 5v only, and its on the HOST mcu, if you have a 24v fan to use then you will need to power this off the always on fan header \n# [controller_fan MCU_fan]\n# pin: host:gpiochip0/gpio3 \n# max_power: 1.0\n# kick_start_time: 0.5\n# heater: extruder\n# #fan_speed: 1.0 \n\n\n#####################################################################\n# Homing and Gantry Adjustment Routines\n#####################################################################\n[homing_override]\naxes: xyz\nset_position_z: 0\ngcode:\n    G90\n    G0 Z5 F600\n    {% set home_all = 'X' not in params and 'Y' not in params and 'Z' not in params %}\n\n    {% if home_all or 'X' in params %}\n        _HOME_X\n    {% endif %}\n    \n    {% if home_all or 'Y' in params %}\n        _HOME_Y\n    {% endif %}\n    \n    {% if home_all or 'Z' in params %}\n        _HOME_Z\n    {% endif %}\n\n\n#[safe_z_home]                      Only needed if you are using V0.0 or V0.1 Z endstop location\n#home_xy_position: 120,120\n#speed: 50.0\n#z_hop: 5\n\n## To be used with BED_SCREWS_ADJUST\n[bed_screws]\nscrew1: 60,5\nscrew1_name: front screw\nscrew2: 5,115\nscrew2_name: back left\nscrew3: 115,115\nscrew3_name: back right\nProbe_height: 0.1\n\n#####################################################################\n#                                    Neopixel\n#####################################################################\n\n[neopixel board_rgb]\npin: PA9\nchain_count: 1\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.1\ninitial_BLUE: 0.0\n\n#####################################################################\n#                      FLY-Mini 12864 LCD                           #\n#####################################################################\n[board_pins]\naliases:\n    # EXP1 header\n    EXP1_1=PC9,  EXP1_3=PA13,  EXP1_5=PA9,   EXP1_7=<NC>,  EXP1_9=<GND>,\n    EXP1_2=PB10,  EXP1_4=PA10,  EXP1_6=PA8,   EXP1_8=<NC>,  EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PB14, EXP2_3=PA15,  EXP2_5=PA14,  EXP2_7=PA7,  EXP2_9=<GND>,\n    EXP2_2=PB13, EXP2_4=PB12,  EXP2_6=PB15,  EXP2_8=<RST>, EXP2_10=<NC>,\n#--------------------------------------------------------------------\n#[display]\n#lcd_type: uc1701                # \u663e\u793a\u5c4f\u9a71\u52a8\u7c7b\u578b\n#cs_pin: EXP1_3                  # \u663e\u793a\u5c4f\u7247\u9009cs\u5f15\u811a\u8bbe\u7f6e\n#a0_pin: EXP1_4                  # \u663e\u793a\u5c4f\u6570\u636ea0\u5f15\u811a\u8bbe\u7f6e\n#rst_pin: EXP1_5                 # \u663e\u793a\u5c4f\u590d\u4f4drst\u811a\u8bbe\u7f6e\n#contrast: 63                    # \u5bf9\u6bd4\u5ea6\n#encoder_pins: ^EXP2_5, ^!EXP2_3 # \u65cb\u8f6c\u7f16\u7801\u5668\uff08\u65cb\u94ae\u5f00\u5173\uff09\u5f15\u811a\u8bbe\u7f6e\n#click_pin: ^!EXP1_2             # \u65cb\u8f6c\u7f16\u7801\u5668\uff08\u65cb\u94ae\u5f00\u5173\uff09\u786e\u8ba4\u6309\u952e\u7684\u5f15\u811a\u8bbe\u7f6e\n#spi_bus: spi1                   # \u5fc5\u987b\u6307\u5b9aSPI\u901a\u9053\n#--------------------------------------------------------------------\n#####\u9002\u7528\u4e8eFLY Mini12864\n#[neopixel fly_mini12864]\n#pin: EXP1_6                     # \u663e\u793a\u5c4f\u80cc\u5149\u706f\u63a7\u5236\u5f15\u811a\u8bbe\u7f6e\n#chain_count: 3\n#initial_RED: 1.0                # \u7ea2\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\n#initial_GREEN: 1.0              # \u7eff\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\n#initial_BLUE: 1.0               # \u84dd\u8272LED\u706f\u4eae\u5ea6\u63a7\u5236\uff08\u8303\u56f4\uff1a0-1\uff09\n#color_order: RGB                # \u989c\u8272\u987a\u5e8f\n\n#####################################################################\n#                          \u95f2\u7f6e\u5173\u95ed\u70ed\u5e8a\n#####################################################################\n[idle_timeout]\ntimeout: 1800                # \u7a7a\u95f2\u65f6\u95f4\u8d85\u8fc730\u5206\u949f\u5219\u5173\u95ed\u70ed\u5e8a\n\n#####################################################################\n#                           \u81ea\u5b9a\u4e49gcode\u5b8f                            #\n#####################################################################\n[gcode_macro PRINT_START]          # \u5c06 PRINT_START \u8bbe\u7f6e\u4e3a\u5f00\u59cb\u6253\u5370\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u524d\u7684\u52a8\u4f5c\ngcode:\n    G92 E0                         # \u91cd\u7f6e\u6324\u51fa\n    G28                            # \u5f52\u4f4d\u6240\u6709\u8f74\n    G1 Z20 F3000                   # \u62ac\u9ad8\u9f99\u95e8\n    #SET_LED LED=LEDlight RED=0.2 GREEN=0.2 BLUE=0.5   # LED\u706f\u63a7\u5236\n    #M117 Printing                 # \u5411\u5c4f\u5e55\u53d1\u9001\u6587\u672c\n    \n#--------------------------------------------------------------------\n[gcode_macro PRINT_HUAXIAN]        # \u5c06 PRINT_HUAXIAN \u8bbe\u7f6e\u4e3aPRINT_START\u540e\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u524d\u7684\u52a8\u4f5c\ngcode:\n    G1 Z5 F3000 \n    G92 E0;              # \u91cd\u7f6e\u6324\u51fa\n    G90                  # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb\n    G0 X5 Y1 F6000       # \u79fb\u52a8\u81f3x5 y1\u4f4d\u7f6e\uff0c\u901f\u5ea6100mm/s\uff08F6000\uff0c\u610f\u601d\u4e3a6000mm\u6bcf\u5206\u949f\uff09\n    G0 Z0.4              # \u79fb\u52a8z\u8f74\u9ad8\u5ea6\u81f30.4\n    G91                  # \u8bbe\u7f6e\u5750\u6807\u4f53\u7cfb\u4e3a\u76f8\u5bf9\u5750\u6807\n    G1 X100 E20 F1200;   # \u79fb\u52a8x\u8f74100mm\uff0c\u5e76\u6324\u51fa\uff0c\u66f4\u6539F\u53ef\u66f4\u6539\u6324\u51fa\u7387\n    G1 Y1                # \u79fb\u52a8y\u8f741mm\n    G1 X-100 E20 F1200;  # \u53cd\u65b9\u5411\u79fb\u52a8x\u8f74100mm\uff0c\u5e76\u6324\u51fa\uff0c\u66f4\u6539F\u53ef\u66f4\u6539\u6324\u51fa\u7387\n    G0 z5                # \u62ac\u9ad8z\u8f745mm\n    G1 E-5.0 F3600       # \u7f29\u56de\u8017\u6750\u4e1d\n    G92 E0;              # \u91cd\u7f6e\u6324\u51fa\n    G90                  # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb \n\n#--------------------------------------------------------------------\n[gcode_macro PRINT_END]            # \u5c06 PRINT_END \u8bbe\u7f6e\u4e3a\u6253\u5370\u7ed3\u675f\u65f6\u7684\u5b8f\uff0c\u81ea\u5b9a\u4e49\u6253\u5370\u5b8c\u6210\u4e4b\u540e\u52a8\u4f5c\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config[\"stepper_x\"][\"position_max\"]|float %}\n    {% set max_y = printer.configfile.config[\"stepper_y\"][\"position_max\"]|float %}\n    {% set max_z = printer.configfile.config[\"stepper_z\"][\"position_max\"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n    \n    M400                              # \u7b49\u5f85\u7f13\u51b2\u533a\u6e05\u9664\n    G92 E0                            # \u5c06\u6324\u51fa\u673a\u5f52\u96f6\n    G1 E-10.0 F3600                   # \u7f29\u56de\u8017\u6750\u4e1d\n    G91                               # \u76f8\u5bf9\u5b9a\u4f4d\n    G0 Z{z_safe} F3600               # \u62ac\u9ad8\u9f99\u95e8\n    G0 X{x_safe} Y{y_safe} F20000    # \u79fb\u52a8\u55b7\u5634\u4ee5\u79fb\u9664\u67b6\u7ebf\n    M104 S0                           # \u5173\u95ed\u6324\u51fa\u5934\n    M140 S0                           # \u5173\u95ed\u70ed\u5e8a\n    M106 S0                           # \u5173\u95ed\u6a21\u578b\u98ce\u6247\n    G90                               # \u8bbe\u7f6e\u7edd\u5bf9\u5750\u6807\u4f53\u7cfb\n    G0 X{max_x / 2} Y{max_y} F3600   # \u5c06\u55b7\u5634\u505c\u5728\u540e\u90e8\n    BED_MESH_CLEAR                   # \u5378\u8f7d\u7f51\u5e8a\n#--------------------------------------------------------------------    \n[gcode_macro LOAD_FILAMENT]\ngcode:\n    M83                            ; set extruder to relative\n    G1 E30 F300                    ; load\n    G1 E15 F150                    ; prime nozzle with filament\n    M82                            ; set extruder to absolute\n    \n[gcode_macro UNLOAD_FILAMENT]\ngcode:\n    M83                            ; set extruder to relative\n    G1 E10 F300                    ; extrude a little to soften tip\n    G1 E-40 F1800                  ; retract some, but not too much or it will jam\n    M82                            ; set extruder to absolute\n#--------------------------------------------------------------------\n[gcode_macro _HOME_X]\ngcode:\n    # Always use consistent run_current on A/B steppers during sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 X\n    # Move away\n    G91\n    G1 X-10 F1200\n    \n    # Wait just a second\u2026 (give StallGuard registers time to clear)\n    G4 P1000\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n#--------------------------------------------------------------------\n[gcode_macro _HOME_Y]\ngcode:\n    # Set current for sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 Y\n    # Move away\n    G91\n    G1 Y-10 F1200\n\n    # Wait just a second\u2026 (give StallGuard registers time to clear)\n    G4 P1000\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n#--------------------------------------------------------------------\n[gcode_macro _HOME_Z]\ngcode:\n    G90\n    G28 Z\n    G1 Z30\n"})})]})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}}}]);