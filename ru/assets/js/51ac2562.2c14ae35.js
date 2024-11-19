"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[37746],{23967:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_v2/cfg","title":"cfg","description":"\u8bf7\u4e0d\u8981\u6253\u5f00\u7f51\u9875\u7ffb\u8bd1\u65f6\u5019\u4fee\u6539\u914d\u7f6e","source":"@site/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/cfg.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_v2","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_v2/cfg","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1726131258000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"\u4e3b\u677f\u63a5\u7ebf","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/wiring"},"next":{"title":"\u52a0\u901f\u5ea6\u8ba1\u4f7f\u7528","permalink":"/fly-docs-next/ru/docs/ProductDoc/ToolBoard/fly-sht36/sht36_v2/adxl"}}');var s=t(86070),o=t(15658);const i={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},a="\u53c2\u8003\u914d\u7f6e",p={},l=[];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"\u8bf7\u4e0d\u8981\u6253\u5f00\u7f51\u9875\u7ffb\u8bd1\u65f6\u5019\u4fee\u6539\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u6ce8\u610f\u4e8b\u9879",type:"warning",children:(0,s.jsx)(e.p,{children:"\u8bf7\u4e0d\u8981\u6253\u5f00\u7f51\u9875\u7ffb\u8bd1\u65f6\u5019\u4fee\u6539\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.admonition,{title:"\u987b\u77e5",type:"danger",children:(0,s.jsx)(e.p,{children:"\u8bf7\u4e0d\u8981\u6253\u5f00\u7f51\u9875\u7ffb\u8bd1\u65f6\u5019\u4fee\u6539\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cfg",children:'#####################################################################\n#      Notes\n#####################################################################\n## \u8bf7\u5c06[include sht36v2.cfg]\u6dfb\u52a0\u5230printer.cfg\u4e0b\n## Please add [include sht36v2.cfg] under printer.cfg\n## \u5de5\u5177\u677f\u5c06\u4f7f\u7528\u4ee5\u4e0b\u51e0\u79cd\u914d\u7f6e\uff0c\u5982\u679c\u5176\u4ed6\u914d\u7f6e\u4e2d\u4f7f\u7528\u5230\u4e0b\u9762\u7684\u914d\u7f6e\u53ef\u80fd\u4f1a\u51b2\u7a81\n## The tool plate will use the following configurations, \n## and if the following configurations are used in other configurations, conflicts may occur.\n## [resonance_tester] && [extruder] && [tmc2209 extruder] && [fan] && [heater_fan my_hotend_fan]\n## [probe] && [bltouch] && [stepper_x]\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu sht36v2]\ncanbus_uuid: \n### \u67e5\u8be2can\u56fa\u4ef6id\u662f\uff1a~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628aserial\u66ff\u6362\u6210canbus_uuid: \u540e\u9762\u6dfb\u52a0id \n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor SHT36-V2]\nsensor_type: temperature_mcu\nsensor_mcu: sht36v2\n#--------------------------------------------------------------------\n[temperature_sensor Box]\nsensor_type: ATC Semitec 104GT-2\nsensor_pin = sht36v2:PA4\n#####################################################################\n#      Accelerometer\n#####################################################################\n## https://www.klipper3d.org/Measuring_Resonances.html?h=adxl#adxl345\n[adxl345]\ncs_pin: sht36v2:PA9\nspi_bus: spi2\n#--------------------------------------------------------------------\n[resonance_tester]\naccel_chip: adxl345\nprobe_points: 150, 150, 20\n# Somewhere slightly above the middle of your print bed\n# \u5728\u6253\u5370\u5e8a\u7684\u4e2d\u95f4\u7a0d\u5fae\u504f\u4e0a\u7684\u4f4d\u7f6e\nmin_freq: 5\nmax_freq: 133\naccel_per_hz: 75\nhz_per_sec: 1 \n\n#####################################################################\n#      Extruder thermal sensitivity\n#####################################################################\n## Please select the type of thermocouple you want to use.\n## \u8bf7\u6839\u636e\u4f60\u60f3\u8981\u4f7f\u7528\u7684\u70ed\u654f\u9009\u62e9\n[extruder]\n## Type of sensor - common thermistors are (Generic 3950, ATC Semitec 104GT-2)\n## \u4f20\u611f\u5668\u7c7b\u578b-\u5e38\u89c1\u7684\u70ed\u654f\u7535\u963b\u5668\u662f (Generic 3950, ATC Semitec 104GT-2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: sht36v2:PA3\n###------------------------------------------------------------------\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679c\u4f7f\u7528PT1000\u8bf7\u5c06\u70ed\u654f\u65c1\u8fb9\u8df3\u7ebf\u63a5\u4e0a\n# sensor_type:PT1000\n#pullup_resistor: 1100\n#sensor_pin: sht36v2:PA3\n###------------------------------------------------------------------\n## Using MAX31865 to connect PT100\n## \u4f7f\u7528MAX31865\u63a5PT100\n#sensor_type: MAX31865\n#sensor_pin: sht36v2:PB12\n#spi_bus: spi2\n#rtd_reference_r: 430\n\n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin: sht36v2:PB4\ndir_pin: sht36v2:PB3               # \u6324\u51fa\u7535\u673a\u65b9\u5411\u5f15\u811a\u8bbe\u7f6e\nenable_pin: !sht36v2:PA15\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51c6\u6b65\u8fdb\u503c: 22.44=\u65e7\u503c22*\u5b9e\u9645\u503c102/\u76ee\u6807\u503c100\ngear_ratio:50:10\n## \u51cf\u901f\u6bd4\uff08\u4f3d\u5229\u7565\u9f7f\u6bd47.5:1 \u5e76\u4e14\u8fd9\u884c\u6ce8\u91ca\u6389\uff1bBMG\u4e3a50\uff1a17\uff0c\u8f93\u51fa\u8f74\u5728\u524d\uff0c\u8f93\u5165\u8f74\u5728\u540e\uff09\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin: sht36v2:PA8\nmin_temp: -230\nmax_temp: 350\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538b\u529b\u63d0\u524d\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51fa\u6d41\u91cf\u62a5\u9519\u53ef\u4ee5\u6ce8\u91ca\u8fd9\u4e2a\uff0c\u4f46\u662f\u5efa\u8bae\u91cd\u65b0\u5207\u7247\n#\u55b7\u5634\u6e29\u5ea6PID\u6821\u51c6\u547d\u4ee4\uff1a  "PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n#--------------------------------------------------------------------\n[tmc2209 extruder]\nuart_pin: sht36v2:PB5\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 500\n\n#####################################################################\n#      FAN\n#####################################################################\n[fan]\npin: sht36v2:PB11\n#--------------------------------------------------------------------\n[heater_fan hotend_fan]\npin: sht36v2:PB10\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      X STOP\n#####################################################################\n# [stepper_x]\n# endstop_pin: !sht36v2:PA2\n## SHT V2\u677f\u6709PA1,PA2\u4e24\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n## PA1\u5f15\u811a\u9ed8\u8ba4\u652f\u6301\u9ad8\u538b\u8f93\u5165\uff0c\u53ef\u7528\u4e8e12v\u7684\u63a5\u8fd1\u4f20\u611f\u5668\u7b49\u3002\u53ef\u901a\u8fc7\u8df3\u7ebf\u5e3d\u914d\u7f6ePA1\u4e3a\u666e\u901a\u9650\u4f4d\u5f15\u811a\n\n#####################################################################\n#      Stealthburner LED\n#####################################################################\n## https://github.com/VoronDesign/Voron-Stealthburner/tree/main\n[neopixel sb_leds]\npin: sht36v2:PB0\nchain_count: 3\n# Number of LEDs\n# \u706f\u73e0\u6570\u91cf\ncolor_order: GRB\ninitial_RED: 0.4    \ninitial_GREEN: 0.8\ninitial_BLUE: 1\ninitial_WHITE: 0.0\n#66CCFF \n\n#####################################################################\n#      TAP && PL08N && BLTOUCH \n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html?h=probe#probe\n#[probe]\n#pin: ^sht36v2:PA1\n#x_offset: 0\n#y_offset: 25.0\n#z_offset: 0 \n#speed: 10.0\n#samples: 3\n#samples_result: median\n#sample_retract_dist: 4.0\n#samples_tolerance: 0.010\n#samples_tolerance_retries: 3 \n\n#--------------------------------------------------------------------\n## https://www.klipper3d.org/Config_Reference.html?h=probe#bltouch\n#[bltouch]\n#sensor_pin: ^sht36v2:PC15\n#control_pin: sht36v2:PB1\n#x_offset: -26.1\n#y_offset: -15.3\n#z_offset: 2.1\n\n#####################################################################\n#                          \u78c1\u89d2\u5ea6\u4f20\u611f\u5668\n#####################################################################\n## \u78c1\u89d2\u5ea6\u4f20\u611f\u5668\n## \u76f8\u5173\u8bf4\u660e\u8bf7\u53c2\u8003https://www.klipper3d.org/API_Server.html#angledump_angle \n## https://www.klipper3d.org/Debugging.html#motion-analysis-and-data-logging\n[angle my_angle_sensor]\nsensor_type: as5047d\n#sample_period: 0.000400\n#stepper: stepper_x\ncs_pin: sht36v2:PC14\nspi_bus: spi1\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}}}]);