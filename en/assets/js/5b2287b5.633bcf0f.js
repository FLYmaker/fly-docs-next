"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[69222],{263:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-d/fly-d5/wiring","title":"Main Board Wiring","description":"Interface Diagram","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-d/fly-d5/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-d/fly-d5","slug":"/ProductDoc/MainBoard/fly-d/fly-d5/wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-d/fly-d5/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"Main Board Wiring"},"sidebar":"tutorialSidebar","previous":{"title":"Flashing Katapult Firmware","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/flash/bl"},"next":{"title":"Klipper\u53c2\u8003\u914d\u7f6e","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-d/fly-d5/cfg"}}');var s=n(86070),t=n(15658),o=n(63436);const a={sidebar_position:4,sidebar_label:"Main Board Wiring"},d="Main Board Wiring",c={},l=[{value:"Interface Diagram",id:"interface-diagram",level:2},{value:"Interface Description",id:"interface-description",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Power Wiring",id:"power-wiring",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Main Board Driver Jumper Settings",id:"main-board-driver-jumper-settings",level:3},{value:"Driver Installation",id:"driver-installation-1",level:3},{value:"Stepper Motor Wiring",id:"stepper-motor-wiring",level:2},{value:"Heater Wiring",id:"heater-wiring",level:2},{value:"Bed Wiring",id:"bed-wiring",level:2},{value:"Thermistor Wiring",id:"thermistor-wiring",level:2},{value:"Introduction to Thermistor Types",id:"introduction-to-thermistor-types",level:3},{value:"Main Board Thermistor Wiring",id:"main-board-thermistor-wiring",level:3},{value:"Fan Wiring",id:"fan-wiring",level:2},{value:"Limit Switch Wiring",id:"limit-switch-wiring",level:2},{value:"Leveling Sensor Wiring",id:"leveling-sensor-wiring",level:2},{value:"Metal Proximity Switch Wiring",id:"metal-proximity-switch-wiring",level:3},{value:"BL-Touch Wiring",id:"bl-touch-wiring",level:3},{value:"Klicky Wiring",id:"klicky-wiring",level:3},{value:"Voron Tap Wiring",id:"voron-tap-wiring",level:3},{value:"FLY-Mini12864 LCD Wiring",id:"fly-mini12864-lcd-wiring",level:2},{value:"Connecting to Host",id:"connecting-to-host",level:2}];function h(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"main-board-wiring",children:"Main Board Wiring"})}),"\n",(0,s.jsx)(i.h2,{id:"interface-diagram",children:"Interface Diagram"}),"\n",(0,s.jsx)(i.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,s.jsx)(o.A,{image:n(52436).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"pin-description",children:"Pin Description"}),"\n",(0,s.jsx)(o.A,{image:n(94375).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"power-wiring",children:"Power Wiring"}),"\n",(0,s.jsx)(o.A,{image:n(3261).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,s.jsx)(i.h3,{id:"main-board-driver-jumper-settings",children:"Main Board Driver Jumper Settings"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"STEP/DIR Mode."})," In this mode, the subdivision is set using a jumper cap and the current is adjusted by a potentiometer. The most common driver used is the A4988 driver. For drivers like this, you need to refer to the manufacturer's subdivision configuration table and set the subdivision using the jumper cap."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"UART Mode."})," The most common drivers using this mode are: TMC2208, TMC2209, TMC2226, etc. These driver chips can communicate asynchronously with the main controller via UART. The subdivision, operating current, silent mode, etc., can be set by modifying the configuration file."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"SPI Mode."})," The most common drivers using this mode are: TMC5160, TMC2230, etc. These driver chips communicate synchronously with the main controller via SPI. Similarly, the subdivision, operating current, silent mode, etc., can be set by modifying the configuration file."]}),"\n",(0,s.jsx)(o.A,{image:n(41346).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"driver-installation-1",children:"Driver Installation"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Before installing the driver, it needs to be checked to avoid damaging the driver or the motherboard."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"FLY Driver:"})," If the unlimited zeroing function is not used, set the DIP switch to position 1; if the unlimited zeroing function is to be used, set the DIP switch to ON."]}),"\n",(0,s.jsx)(o.A,{image:n(99884).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.strong,{children:"Attention!!! When installing the driver module, make sure the insertion direction is correct, i.e., the EN pin should be at the top left corner, otherwise the driver or even the motherboard could be damaged!!! Make sure to apply a heatsink to the driver!!!"})}),"\n"]})}),"\n",(0,s.jsx)(o.A,{image:n(73184).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:n(18757).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"stepper-motor-wiring",children:"Stepper Motor Wiring"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Regardless of the manufacturer, a two-phase stepper motor will ultimately have four wires. No matter what color they are, black, white, green, yellow, etc., they correspond to four wires. So we need to group these wires into two groups, A and B."}),"\n",(0,s.jsx)(i.li,{children:"For a two-phase four-wire stepper motor, we do not need to know which one is group A and which is group B; we just need to determine one group. The motor direction can be modified in the configuration settings."}),"\n"]})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"In a 3D printer, the most commonly used is a two-phase four-wire stepper motor, as shown in the figure below. There are two methods to identify the wiring sequence of the stepper motor:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Connect any two phase wires, turn the motor shaft by hand, and if there is a noticeable resistance, then these two wires are one group. Otherwise, they are not a group and another pair of wires need to be tested."}),"\n",(0,s.jsx)(i.li,{children:"Use a multimeter set to continuity mode to test any two phase wires of the stepper motor. If they are connected, they form a group; otherwise, they are not a group and another pair of wires need to be tested."}),"\n"]}),"\n",(0,s.jsx)(o.A,{image:n(44836).A,size:"50%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:n(73497).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"heater-wiring",children:"Heater Wiring"}),"\n",(0,s.jsx)(o.A,{image:n(46207).A,size:"60%",align:"center"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"bed-wiring",children:"Bed Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"AC Bed:"})," When wiring the solid-state relay, pay attention to not connecting the input and output incorrectly."]}),"\n",(0,s.jsx)(o.A,{image:n(44768).A,size:"20%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:n(99803).A,size:"40%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"DC Bed:"})," When connecting a DC bed to the onboard MOS, pay attention to the power usage. The maximum current for a DC bed cannot exceed 10A. If the current exceeds 10A, it is recommended to use an external MOS module to connect the bed to avoid irreversible damage to the motherboard."]}),"\n",(0,s.jsx)(o.A,{image:n(95433).A,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"thermistor-wiring",children:"Thermistor Wiring"}),"\n",(0,s.jsx)(i.h3,{id:"introduction-to-thermistor-types",children:"Introduction to Thermistor Types"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The wiring method for thermistors is shown in the following diagram. Please consult the purchasing merchant for the type of thermistor."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["If purchased from fly (as shown in the following diagram), configure the sensor_type as: ",(0,s.jsx)(i.strong,{children:"ATC Semitec 104GT-2"})]}),"\n",(0,s.jsx)(o.A,{image:n(80613).A,size:"30%",align:"center"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["If using a conventional NTC 100K (as shown in the following diagram), configure the sensor_type as: ",(0,s.jsx)(i.strong,{children:"Generic 3950"})]}),"\n",(0,s.jsx)(o.A,{image:n(10254).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(o.A,{image:n(55831).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"main-board-thermistor-wiring",children:"Main Board Thermistor Wiring"}),"\n",(0,s.jsx)(o.A,{image:n(6840).A,size:"40%",align:"center"}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"fan-wiring",children:"Fan Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"Fan Wiring"})}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsx)(i.p,{children:"The red box in the following diagram indicates that the upper and lower interfaces control the same controllable fan, i.e., one-to-two."})}),"\n",(0,s.jsx)(o.A,{image:n(4601).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"limit-switch-wiring",children:"Limit Switch Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Limit switches come in normally open (NO) and normally closed (NC) types. In a 3D printer, it is generally recommended to use ",(0,s.jsx)(i.strong,{children:"normally closed (NC)"}),". This way, if there is an issue with the limit switch circuit, the system will promptly report an error, avoiding unnecessary crashes and protecting the printer from damage."]}),"\n",(0,s.jsx)(o.A,{image:n(52889).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"leveling-sensor-wiring",children:"Leveling Sensor Wiring"}),"\n",(0,s.jsx)(i.h3,{id:"metal-proximity-switch-wiring",children:"Metal Proximity Switch Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"VORON officially recommends using the Omron TL-Q5MC sensor (previously recommended PL08N, both have the same principle but different detection distances) for bed leveling. The wiring method is shown in the following diagram."}),"\n",(0,s.jsx)(o.A,{image:n(29764).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"bl-touch-wiring",children:"BL-Touch Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"BL-Touch has five wires, three of which form the first group responsible for sensor power supply and probe deployment/retraction. The second group consists of ground and signal lines, outputting limit signals. Carefully check the wire sequence when wiring BL-Touch; incorrect wiring may permanently damage the sensor and motherboard!!! Wiring method is shown in the following diagram."}),"\n",(0,s.jsx)(o.A,{image:n(14313).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"klicky-wiring",children:"Klicky Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Klicky is a third-party leveling sensor that can be made at home with low cost and stable performance, making it highly recommended. Wiring method is shown in the following diagram."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Project Address: ",(0,s.jsx)(i.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Project Address, click to jump",children:"jlas1/Klicky-Probe"})]}),"\n",(0,s.jsx)(o.A,{image:n(36385).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"voron-tap-wiring",children:"Voron Tap Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Tap is a nozzle-based Z-probe suitable for V2 and Trident printer designs. The entire toolhead moves to trigger the optical switch, providing better precision than conventional limit switches and compatible with almost all print platforms."}),"\n",(0,s.jsx)(i.admonition,{type:"warning",children:(0,s.jsxs)(i.p,{children:["Voron Tap is not recommended to be connected to ",(0,s.jsx)(i.strong,{children:"24V"}),", as some versions may cause the Tap sensor to burn out with a certain probability when using ",(0,s.jsx)(i.strong,{children:"24V"}),". This is not a problem with the Fly product but a design flaw in the Voron Tap, please be aware!!!"]})}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsx)(i.p,{children:"Note: 5V and GND cannot be reversed, otherwise it may damage the Tap sensor or even the motherboard!!!"})}),"\n",(0,s.jsx)(o.A,{image:n(46441).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"fly-mini12864-lcd-wiring",children:"FLY-Mini12864 LCD Wiring"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The wiring method for the FLY mini12864 is shown in the following diagram. Please consult the relevant manufacturer for other screen models. Incorrect wiring of the Mini12864 screen may prevent the host computer from connecting to the MCU. If the Mini12864 screen worked correctly before but now fails to connect to the MCU, try unplugging the Mini12864 wiring!!!"}),"\n",(0,s.jsx)(o.A,{image:n(59740).A,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h2,{id:"connecting-to-host",children:"Connecting to Host"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"The motherboard connects to the host computer's USB port through a Type-C interface, or it can be connected via serial port. Only the former is described here."}),"\n",(0,s.jsx)(o.A,{image:n(97493).A,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{})]})}function g(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},52436:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/interface-9346d9574efed0b641afcbc55f32c23b.png"},94375:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/pin-6f246fc9983865fbdb8cef3c3c2b2ea2.png"},44768:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/bed-ac-1-a4b4eab93ba1947b0f5255d44742eb3f.png"},99803:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/bed-ac-2-052368121b795b5e091f974749759ac0.png"},95433:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/bed-dc-0b269cf3a48a5abc151bce06d300b428.png"},14313:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/bltouch-04acd5a45d4a1204b9fa6f2d3c957c95.png"},97493:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/connect-host-8f216a2d9ccaa17f2cb6a918d9715cb8.png"},41346:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/drive-dip-a5bba49213fe6f714c3cbbc024b52b8b.png"},73184:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/drive-install-b28bf99d495ca4240884a402b361c6fb.png"},52889:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/endstop-fa7be422bc5778a8d0584ca606b82bae.png"},4601:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/fan-cfe190eca0c582de664aef48f1e9f9df.png"},99884:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/fly2209-dip-1cee8fa0494f5b62764ed69e253bed6e.png"},46207:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/heater-18ea2c900d66dbbc9e7d1b687d51a9e7.png"},36385:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/klicky-1b8d31289a4a72f4d275f9bd4e731b93.png"},59740:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/mini12864-7fc222c9403eff3153a53443d54310bb.png"},44836:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/motor-sch-b16829f4e51bb69ef280f7db774a904b.png"},73497:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/motor-b470d5bfaab5d1d06797befc3e72402e.png"},80613:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ntc-1-746ec56dfccc1c129fb2bb5239a37c3d.png"},10254:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ntc-2-0330ce02c944c6cee65495605121ac0a.png"},55831:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ntc-3-5434e95a50b04bcf3cf4a8905fd23687.png"},6840:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/ntc-4-6fa26ab0e7b5bd75c5ca9dc34654f00f.png"},29764:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/pl08-20a3e585cf7ca41c623d8604a0a2f628.png"},3261:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/power-8a7e79afa92d58792292614c76562b60.png"},18757:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/sensorless-aa1b6a45bdf0940f9d60ee3599df7da7.png"},46441:(e,i,n)=>{n.d(i,{A:()=>r});const r=n.p+"assets/images/tap-60e85c3d7d4f7c627ec754d7ad9d3515.png"}}]);