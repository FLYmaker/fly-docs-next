"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["99375"],{94071:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"ProductDoc/MainBoard/fly-super/fly-super8/wiring","title":"Motherboard Wiring","description":"Interface Diagram","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-super/fly-super8/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-super/fly-super8","slug":"/ProductDoc/MainBoard/fly-super/fly-super8/wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-super/fly-super8/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Motherboard Wiring"},"sidebar":"tutorialSidebar","previous":{"title":"BL firmware, please ignore","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8/flash/bl"},"next":{"title":"Klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-super/fly-super8/cfg"}}'),r=i("52676"),s=i("79938");let o={sidebar_position:4,sidebar_label:"Motherboard Wiring"},a="Motherboard Wiring",l={},c=[{value:"Interface Diagram",id:"interface-diagram",level:2},{value:"Interface Description",id:"interface-description",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Power Wiring",id:"power-wiring",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Motherboard Driver Jumper Settings",id:"motherboard-driver-jumper-settings",level:3},{value:"Driver Installation",id:"driver-installation-1",level:3},{value:"Stepper Motor Wiring",id:"stepper-motor-wiring",level:2},{value:"Heater Wire Connection",id:"heater-wire-connection",level:2},{value:"Bed Heating Connection",id:"bed-heating-connection",level:2},{value:"Thermistor Wiring",id:"thermistor-wiring",level:2},{value:"Introduction to Thermistor Types",id:"introduction-to-thermistor-types",level:3},{value:"Motherboard Thermistor Wiring",id:"motherboard-thermistor-wiring",level:3},{value:"Fan Wiring",id:"fan-wiring",level:2},{value:"Limit Switch Wiring",id:"limit-switch-wiring",level:2},{value:"Leveling Sensor Wiring",id:"leveling-sensor-wiring",level:2},{value:"Metal Proximity Switch Wiring",id:"metal-proximity-switch-wiring",level:3},{value:"BL-Touch Wiring",id:"bl-touch-wiring",level:3},{value:"Klicky Wiring",id:"klicky-wiring",level:3},{value:"Voron Tap Wiring",id:"voron-tap-wiring",level:3},{value:"FLY-Mini12864 LCD Wiring",id:"fly-mini12864-lcd-wiring",level:2},{value:"Connecting to Host Computer",id:"connecting-to-host-computer",level:2}];function d(e){let n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:t}=n;return!t&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"motherboard-wiring",children:"Motherboard Wiring"})}),"\n",(0,r.jsx)(n.h2,{id:"interface-diagram",children:"Interface Diagram"}),"\n",(0,r.jsx)(n.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,r.jsx)(t,{image:i(396).Z,size:"50%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"pin-description",children:"Pin Description"}),"\n",(0,r.jsx)(t,{image:i(66618).Z,size:"50%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"power-wiring",children:"Power Wiring"}),"\n",(0,r.jsx)(t,{image:i(52539).Z,size:"40%",align:"center"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fuse Installation"}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(38060).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,r.jsx)(n.h3,{id:"motherboard-driver-jumper-settings",children:"Motherboard Driver Jumper Settings"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"STEP/DIR Mode."})," In this mode, subdivision is set using a jumper cap, and current is adjusted by a potentiometer. The most common driver used in this mode is the A4988. For drivers like A4988, refer to the manufacturer's subdivision configuration table and set the subdivision via jumper caps."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UART Mode."})," The most commonly used drivers in this mode include TMC2208, TMC2209, TMC2226, etc. These drivers can communicate asynchronously with the main controller via UART. Configuration files can be modified to set the driver's subdivision, operating current, silent mode, etc."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SPI Mode."})," The most commonly used drivers in this mode include TMC5160, TMC2230, etc. These drivers communicate synchronously with the main controller via SPI. Configuration files can also be modified to set the driver's subdivision, operating current, silent mode, etc."]}),"\n",(0,r.jsx)(t,{image:i(49999).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"driver-installation-1",children:"Driver Installation"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Before installing the driver, perform corresponding checks to avoid damaging the driver or motherboard."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FLY Driver:"})," If you do not use the infinite zeroing function, set the DIP switch to position 1; conversely, if you want to use the infinite zeroing function, set the DIP switch to ON position."]}),"\n",(0,r.jsx)(t,{image:i(70339).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Note!!! When installing the driver module, ensure that the insertion direction is correct, i.e., the EN pin should be at the top left corner, otherwise it may damage the driver or even the motherboard!!! Make sure to attach a heatsink to the driver!!!"})}),"\n"]})}),"\n",(0,r.jsx)(t,{image:i(92649).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"stepper-motor-wiring",children:"Stepper Motor Wiring"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Regardless of the manufacturer, two-phase stepper motors ultimately have four wires. It doesn't matter what color they are, whether black, white, green, yellow, etc., they all correspond to four wires. So we need to group these wires into two groups, A and B."}),"\n",(0,r.jsx)(n.li,{children:"For a two-phase four-wire stepper motor, we don't need to know which one is Group A and which one is Group B. We just need to determine that they form a pair, and the motor direction can be configured in the settings."}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"In 3D printers, the most commonly used type is the two-phase four-wire stepper motor. Its principle is as shown in the figure. There are two methods to identify the wiring sequence of the stepper motor:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Connect any two phase wires and manually rotate the motor shaft. If there is significant resistance, then these two wires belong to one group. Otherwise, they do not belong to the same group, and you need to test other phase wires."}),"\n",(0,r.jsx)(n.li,{children:"Use a multimeter set to continuity mode to test any two phase wires of the stepper motor. If they are connected, then they belong to one group; otherwise, they do not belong to the same group, and you need to test other phase wires."}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(30071).Z,size:"50%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(69024).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"heater-wire-connection",children:"Heater Wire Connection"}),"\n",(0,r.jsx)(t,{image:i(23568).Z,size:"60%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"bed-heating-connection",children:"Bed Heating Connection"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"AC Bed:"})," When wiring the solid-state relay, make sure to connect input and output correctly."]}),"\n",(0,r.jsx)(t,{image:i(54628).Z,size:"20%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(97561).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DC Bed:"})," When connecting the onboard MOS to the DC bed, pay attention to power usage. The maximum current for a DC bed should not exceed 10A. If it exceeds 10A, it is recommended to use an external MOS module to prevent irreversible damage to the motherboard."]}),"\n",(0,r.jsx)(t,{image:i(22916).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"thermistor-wiring",children:"Thermistor Wiring"}),"\n",(0,r.jsx)(n.h3,{id:"introduction-to-thermistor-types",children:"Introduction to Thermistor Types"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The wiring method for thermistors is as shown below. Please consult the purchasing merchant for the type of thermistor."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If purchased from fly (as shown below), configure the sensor_type to ",(0,r.jsx)(n.strong,{children:"ATC Semitec 104GT-2"}),"."]}),"\n",(0,r.jsx)(t,{image:i(41736).Z,size:"30%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If it is a standard NTC 100K (as shown below), configure the sensor_type to ",(0,r.jsx)(n.strong,{children:"Generic 3950"}),"."]}),"\n",(0,r.jsx)(t,{image:i(95993).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(32117).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"motherboard-thermistor-wiring",children:"Motherboard Thermistor Wiring"}),"\n",(0,r.jsx)(t,{image:i(69353).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(196).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fan-wiring",children:"Fan Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Fan Wiring"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Choose the fan voltage. Short the corresponding voltage pins with a jumper cap. Refer to the diagram below. Note: The jumpers in the yellow boxes are all the same. Incorrect fan voltage selection may damage the fan or MOS module."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"MOS Module Installation (no polarity). As shown below."}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(91603).Z,size:"30%",align:"center"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Fan Wiring"}),"\n"]}),"\n",(0,r.jsx)(t,{image:i(34936).Z,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"limit-switch-wiring",children:"Limit Switch Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Limit switches come in Normally Open (NO) and Normally Closed (NC) types. Generally, it is recommended to use ",(0,r.jsx)(n.strong,{children:"Normally Closed (NC)"})," in 3D printers. This way, if there is an issue with the limit switch circuit, the system will promptly report an error, preventing unnecessary crashes and damage to the printer."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"The limit switch voltage on Super8 can be changed by altering the shorted resistor, with options of 3.3V, 5V, 12V, defaulting to 5V. The default voltage is sufficient for most scenarios and does not require modification. If modification is necessary, proceed with caution."})}),"\n",(0,r.jsx)(t,{image:i(72092).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(t,{image:i(83187).Z,size:"40%",align:"center"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"leveling-sensor-wiring",children:"Leveling Sensor Wiring"}),"\n",(0,r.jsx)(n.h3,{id:"metal-proximity-switch-wiring",children:"Metal Proximity Switch Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"VORON officially recommends using the Omron TL-Q5MC sensor (previously recommended was PL08N, both have the same principle but different detection distances) for bed leveling. The wiring method is as shown below."}),"\n",(0,r.jsx)(t,{image:i(23162).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"bl-touch-wiring",children:"BL-Touch Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"BL-Touch has five wires, three of which form the first group responsible for sensor power and probe extension/retraction. The second group consists of ground and signal lines, providing limit switch signals. Carefully verify the wire sequence when wiring BL-Touch. Incorrect wiring may permanently damage the sensor and motherboard!!!"}),"\n",(0,r.jsx)(t,{image:i(48125).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"klicky-wiring",children:"Klicky Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Klicky is a third-party leveling sensor that can be made at home with minimal cost and high stability and cost-effectiveness. Recommended for use. The wiring method is as shown below."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Project Link: ",(0,r.jsx)(n.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Project Link, click to jump",children:"jlas1/Klicky-Probe"})]}),"\n",(0,r.jsx)(t,{image:i(53646).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"voron-tap-wiring",children:"Voron Tap Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Tap is a z-probe based on the nozzle, suitable for V2 and Trident printer designs. The entire toolhead moves to trigger the optical switch, providing better accuracy than conventional limit switches and compatible with almost all printing platforms."}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Voron Tap is not recommended to connect ",(0,r.jsx)(n.strong,{children:"24V"}),". Some versions using ",(0,r.jsx)(n.strong,{children:"24V"})," have a high probability of burning out the Tap sensor. This is not a problem with the Fly product but a design flaw of Voron Tap. Please be aware!!!"]})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsx)(n.p,{children:"Note: The 5V and GND cannot be reversed, otherwise, it may damage the Tap sensor or motherboard!!!"})}),"\n",(0,r.jsx)(t,{image:i(50295).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fly-mini12864-lcd-wiring",children:"FLY-Mini12864 LCD Wiring"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The wiring method for the FLY mini12864 is shown below. Consult the respective manufacturer for other screen models. Reversing or incorrectly wiring the Mini12864 screen may cause the host computer to fail to connect to the MCU. If you can normally connect to the motherboard's MCU before using the Mini12864 screen, but cannot after using it, try unplugging the Mini12864 wiring!!!"}),"\n",(0,r.jsx)(t,{image:i(96818).Z,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-host-computer",children:"Connecting to Host Computer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The motherboard connects to the host computer via the TypeC interface to the USB port or through serial connection. Only the former is introduced here."}),"\n",(0,r.jsx)(t,{image:i(87851).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},396:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/interface-973c8df3af127f999125c3550302f538.webp"},66618:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pin-a59579558a31f210d3ddedb7b2fa12d7.webp"},54628:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bed-ac-1-27e7237f87ddfd04ca5392c3487f4ac5.webp"},97561:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bed-ac-2-18caa3758ebb9bc0e285eeffe7eb73b8.webp"},22916:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bed-dc-d1d6f6dbe417b5245934cce2c9bb3545.webp"},48125:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/bltouch-62301c9a46f5287040bf2f9a7a6132a9.webp"},87851:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/connect-host-37eb4e42e2221b0f02cd81056b884cbb.webp"},49999:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/drive-dip-aff3fda803e9be2628f35059c8849057.webp"},92649:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/drive-install-a1f9947c4f7a2a8724aabab95c5fab38.webp"},72092:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/endstop-voltage-cb9dc266d8bd547b3b96a1024dc872cd.webp"},83187:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/endstop-329451491393dc418895fdba63476d84.webp"},34936:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fan-369695016604eb854769f780efeb28fa.webp"},70339:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fly2209-f37b9e1a5bd36dc1839d7558663806b8.webp"},38060:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/fuse-57422a25a9e3aff04511b3d3f5988047.webp"},23568:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/heater-09ac9eaf6f92eafc3423b937d1749b37.webp"},53646:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/klicky-cd15f5d3f6ffd60a339a72ffb8f615a5.webp"},96818:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/mini12864-242849636a7b5acf2f893f2dfc467157.webp"},91603:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/mos-124d30900267715b05ae53c3fde8d64a.webp"},30071:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/motor-sch-7914db5b80127d5a16b7a3d0be311a07.webp"},69024:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/motor-730fa39eade1d8aaa8f0e56226d03e2b.webp"},41736:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ntc-1-2a44153c94ef48946e8e538e8deb5ced.webp"},95993:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ntc-2-e19315cc0501e3f1e49e3edff3a31053.webp"},32117:function(e,n,i){i.d(n,{Z:function(){return t}});let t="data:image/webp;base64,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"},69353:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ntc-4-0ad07a29d6a9678034513baa24d52d7c.webp"},196:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/ntc-5-f907e1e177c9badcb024a8e739a651b9.webp"},23162:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/pl08-48153dbefc9a13d0a3623b01f46272cf.webp"},52539:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/power-cc79c893a5efc98483688fa7f8b189b1.webp"},50295:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/tap-8bba64b2da207a82bd31de7639229430.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var t=i(75271);let r={},s=t.createContext(r);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);