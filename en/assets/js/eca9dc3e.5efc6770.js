"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[41942],{7471:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/bd-sensor/kliper","title":"Installation **BDsensor**","description":"Connecting the sensor cable to the motherboard or CAN bus toolhead board.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","sourceDirName":"ProductDoc/ExtensionBoard/bd-sensor","slug":"/ProductDoc/ExtensionBoard/bd-sensor/kliper","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/bd-sensor/kliper.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Using klipper"},"sidebar":"tutorialSidebar","previous":{"title":"Installation Guide","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/bd-sensor/line"},"next":{"title":"Using Marlin","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/bd-sensor/marlin"}}');var t=s(86070),o=s(15658),r=s(63436);const l={sidebar_position:3,sidebar_label:"Using klipper"},a="Installation BDsensor",d={},c=[{value:"Connecting the sensor cable to the motherboard or CAN bus toolhead board.",id:"connecting-the-sensor-cable-to-the-motherboard-or-can-bus-toolhead-board",level:2},{value:"Installing the patch into the klipper firmware",id:"installing-the-patch-into-the-klipper-firmware",level:2},{value:"If your printer runs Moonraker, add the following section to moonraker.conf, then you can update the Bdsensor via the web or klipperscreen with one click.",id:"if-your-printer-runs-moonraker-add-the-following-section-to-moonrakerconf-then-you-can-update-the-bdsensor-via-the-web-or-klipperscreen-with-one-click",level:2},{value:"Editing printer.cfg",id:"editing-printercfg",level:2},{value:"After installation, check using the following gcode commands",id:"after-installation-check-using-the-following-gcode-commands",level:2},{value:"Checking Connection",id:"checking-connection",level:2},{value:"Calibration",id:"calibration",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsxs)(n.h1,{id:"installation-bdsensor",children:["Installation ",(0,t.jsx)(n.strong,{children:"BDsensor"})]})}),"\n",(0,t.jsx)(n.h2,{id:"connecting-the-sensor-cable-to-the-motherboard-or-can-bus-toolhead-board",children:"Connecting the sensor cable to the motherboard or CAN bus toolhead board."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Please note that SB2040 cannot use Bdsensor"}),"\n",(0,t.jsx)(n.li,{children:"Please note that SHT36 needs to connect the Bdsensor's CLK/SCL (Input) to a high voltage input port and attach the jumper"}),"\n",(0,t.jsx)(n.li,{children:"The Bdsensor's CKL and SDA lines can be connected to any GPIO pin on the circuit board. You can also directly connect the BD sensor cable to the Bltouch port, for example:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"BLtouch    |    Bdsensor\n5V       --\x3e     5V\nGND      --\x3e     GND\nS        --\x3e     CLK/SCL    (Input)\nGND      --\x3e     GND\nZmin     --\x3e     SDA    (Input/Output) \n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Due to some pins in the motherboard connector may not be directly connected to the MCU's gpios (for example, they may have filter capacitors or are isolated through MOSFETs, diodes, or optocouplers, but if they are isolated through resistors or resistor pull-up/pull-down they can), therefore they cannot be used with Bdsensor. And the firmware will report connection errors. For example,"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Fans and heaters connectors are isolated through MOSFETs,"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Some boards' connectors for temperature thermistors and endstops/probes are usually connected to GND through filter capacitors,"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["As shown in the following figure, install the BD sensor near the hot end. ",(0,t.jsx)(n.a,{href:"https://www.thingiverse.com/thing:6098131",children:"STL of mount"}),",  ",(0,t.jsx)(n.a,{href:"https://discord.com/channels/829828765512106054/1163237892957671424",children:"STL_mount_VzBot_Goliath short"})]}),"\n",(0,t.jsx)(r.A,{image:s(57058).A,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-patch-into-the-klipper-firmware",children:"Installing the patch into the klipper firmware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Abandon the previously modified klipper files and update klipper"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd\ncd ~/klipper\ngit checkout .\ngit pull\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Clone the latest code for Bdsensor"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/markniu/Bed_Distance_sensor.git\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd  ~/Bed_Distance_sensor/klipper/\n./install_BDsensor.sh\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Compile the firmware"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/\nmake menuconfig\nmake clean\nmake\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Burn the firmware to the MCU or CANbus toolhead board that the Bdsensor is connected to"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"if-your-printer-runs-moonraker-add-the-following-section-to-moonrakerconf-then-you-can-update-the-bdsensor-via-the-web-or-klipperscreen-with-one-click",children:"If your printer runs Moonraker, add the following section to moonraker.conf, then you can update the Bdsensor via the web or klipperscreen with one click."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[update_manager Bdsensor]\ntype: git_repo\nprimary_branch: new\nchannel: dev\npath: ~/Bed_Distance_sensor\norigin: https://github.com/markniu/Bed_Distance_sensor.git\ninstall_script: ./klipper/install_BDsensor.sh\nis_system_service: False\nmanaged_services: klipper\ninfo_tags:\ndesc=Bdsensor\n"})}),"\n",(0,t.jsx)(n.h2,{id:"editing-printercfg",children:"Editing printer.cfg"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Copy this section into your ",(0,t.jsx)(n.strong,{children:"printer.cfg"})," and edit the ",(0,t.jsx)(n.code,{children:"[Bdsensor]"})," ",(0,t.jsx)(n.code,{children:"sda_pin"}),"  ",(0,t.jsx)(n.code,{children:"scl_pin"}),", also don't forget to disable other probe sections like ",(0,t.jsx)(n.strong,{children:"BLtouch"}),". You can connect the Bdsensor to the motherboard or the toolhead CAN module,"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"[Bdsensor]"})," modify ",(0,t.jsx)(n.code,{children:"speed"})," to 0.8. This applies only to z tilt and PROBE_ACCURACY commands. The smaller the value, the higher the precision when probing, as the MCU does not read the BDsensor in real time like a normal stopper when homing. ",(0,t.jsx)(n.code,{children:"[Bdsensor]"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To use the BD sensor as a limit switch during the Z-axis homing, change the ",(0,t.jsx)(n.code,{children:"endstop_pin"})," in ",(0,t.jsx)(n.code,{children:"[stepper_z]"})," to ",(0,t.jsx)(n.code,{children:"endstop_pin: probe:z_virtual_endstop"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Ensure there is a ",(0,t.jsx)(n.code,{children:"[safe_z_home]"})," in ",(0,t.jsx)(n.strong,{children:"printer.cfg"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Change the values of ",(0,t.jsx)(n.code,{children:"[bed_mesh]"})," and ",(0,t.jsx)(n.code,{children:"[z_tilt]"})," or ",(0,t.jsx)(n.code,{children:"[quad_gantry_level]"})," to 1 (recommended 0.7-1.0mm) in klipper's default value is 5mm, otherwise it's easy to exceed the sensor range"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Nozzle height is suitable only in ",(0,t.jsx)(n.code,{children:"z_adjust:"})," setting, positive numbers bring the nozzle closer to the bed, negative numbers move it away from the bed, other settings for adjusting nozzle height will have bugs"]})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To enable fast scanning, uncomment ",(0,t.jsx)(n.code,{children:"no_stop_probe:true"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Below is an example configuration."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"[Bdsensor] \nscl_pin:PC6  # Servo signal port\nsda_pin:PC3  # Limit signal port\ndelay: 20 # 20us per pulse, this value should be >=20 but must be below 50\nz_offset:0 # this `z_offset` must be set to 0. \nz_adjust:0.0 # Z axis adjustment, replaces the z_offset function. within -0.3 to 0.3mm\nx_offset: -34\ny_offset: 0\n#no_stop_probe:true # enable this for fast probe, the toolhead will not stop at the probe point.\nposition_endstop: 0.8 # the Z axis will stop at this position (mm) while homing z, recommended value is 0.4~1.0\n#speed:0.8 # this speed only works for the z tilt and PROBE_ACCURACY command.\n\n[stepper_z]\nendstop_pin: probe:z_virtual_endstop \n#position_endstop: 0.5\nhoming_speed: 5\nsecond_homing_speed: 0.8\n\n[bed_mesh]\nspeed: 200\nhorizontal_move_z:1\nalgorithm: bicubic\n\n[quad_gantry_level]\nhorizontal_move_z:1\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"after-installation-check-using-the-following-gcode-commands",children:"After installation, check using the following gcode commands"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"M102   S-1     # Read sensor information\nM102   S-2     # Read a distance value\n"})}),"\n",(0,t.jsx)(n.h2,{id:"checking-connection",children:"Checking Connection"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Send ",(0,t.jsx)(n.code,{children:"M102 S-1"})," via ",(0,t.jsx)(n.strong,{children:"console"}),", here is an example of the returned message, if it returns blank or other strings, please check the connection and wire order"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Send: M102 S-1\nRecv: V1.0 pandapi3d.com\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"calibration",children:"Calibration"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Clean the nozzle, then control the Z-axis movement via console until the nozzle just touches the bed (the BDsensor will use this position as zero position, so no need for ",(0,t.jsx)(n.code,{children:"z_offset"}),", which is why the value is 0 in the ",(0,t.jsx)(n.code,{children:"[Bdsensor]"})," section)"]}),"\n",(0,t.jsxs)(n.li,{children:["Send gcode command ",(0,t.jsx)(n.code,{children:"M102 S-6"})," via ",(0,t.jsx)(n.strong,{children:"console"}),", the printer will slowly raise the Z-axis by 0.1mm each time until it reaches 4mm. Do not run M102 S-6 before installing the sensor or turn off the power during calibration, otherwise old calibration data will be deleted. If this happens, just calibrate again"]}),"\n",(0,t.jsxs)(n.li,{children:["Afterwards, you can check if the BD sensor has been successfully calibrated by sending ",(0,t.jsx)(n.code,{children:"M102 S-5"}),", which will return the original calibration data stored in the BD sensor."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The best Z-axis homing speed is 5"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the first raw calibration data returned by M102 S-5 is greater than 400, it means the sensor is installed too high and needs to be reinstalled closer to the bed. The recommended value for the first data is 100. Also ensure the second data value is more than 10 above the first data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"FAQ: What does it mean if the calibration data starts with 1, the second value is 9, and the third value is 24?"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"This means that the resolution between 0-0.1 millimeters is only 9, while the resolution between 0.1-0.2 millimeters is 15. Therefore, it is recommended to recalibrate to make the first resolution between 0-0.1 millimeters greater than 10."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Don't forget to adjust the Z-axis height after running G28 or adjusting Z-axis height for these commands ",(0,t.jsx)(n.code,{children:"Z_tilt"})," and ",(0,t.jsx)(n.code,{children:"quad_gantry_level"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The section names must be correctly capitalized and lowercased, otherwise klipper will report ",(0,t.jsx)(n.code,{children:"Unknown pin chip name 'probe'"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},57058:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/bd-11631eead5dfec53ffffa5b4a36c7555.png"}}]);