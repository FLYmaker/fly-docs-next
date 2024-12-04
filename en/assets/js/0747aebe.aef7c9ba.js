"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["51526"],{23773:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/wiring","title":"Motherboard Wiring","description":"Interface Diagram","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/wiring.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":8,"frontMatter":{"sidebar_position":8,"sidebar_label":"Motherboard Wiring"},"sidebar":"tutorialSidebar","previous":{"title":"Reading and Viewing Motherboard ID","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/read-id"},"next":{"title":"klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/cfg"}}'),t=i("52676"),s=i("79938");let o={sidebar_position:8,sidebar_label:"Motherboard Wiring"},a="Motherboard Wiring",c={},l=[{value:"Interface Diagram",id:"interface-diagram",level:2},{value:"Interface Description",id:"interface-description",level:3},{value:"Pin Description",id:"pin-description",level:3},{value:"Power Wiring",id:"power-wiring",level:2},{value:"Driver Installation",id:"driver-installation",level:2},{value:"Motherboard Driver Jumper",id:"motherboard-driver-jumper",level:3},{value:"Driver Installation",id:"driver-installation-1",level:3},{value:"Stepper Motor Wiring",id:"stepper-motor-wiring",level:2},{value:"Heater Wire Connection",id:"heater-wire-connection",level:2},{value:"Bed Wiring",id:"bed-wiring",level:2},{value:"Thermistor Wiring",id:"thermistor-wiring",level:2},{value:"Thermistor Type Introduction",id:"thermistor-type-introduction",level:3},{value:"Motherboard Thermistor Wiring",id:"motherboard-thermistor-wiring",level:3},{value:"Fan Wiring",id:"fan-wiring",level:2},{value:"Limit Switch Wiring",id:"limit-switch-wiring",level:2},{value:"Leveling Sensor Wiring",id:"leveling-sensor-wiring",level:2},{value:"Metal Proximity Switch Wiring",id:"metal-proximity-switch-wiring",level:3},{value:"BL-Touch Wiring",id:"bl-touch-wiring",level:3},{value:"Klicky Wiring",id:"klicky-wiring",level:3},{value:"Voron Tap Wiring",id:"voron-tap-wiring",level:3},{value:"FLY-Mini12864 LCD Wiring",id:"fly-mini12864-lcd-wiring",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"motherboard-wiring",children:"Motherboard Wiring"})}),"\n",(0,t.jsx)(n.h2,{id:"interface-diagram",children:"Interface Diagram"}),"\n",(0,t.jsx)(n.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,t.jsx)(r,{image:i(77031).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"pin-description",children:"Pin Description"}),"\n",(0,t.jsx)(r,{image:i(71457).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"power-wiring",children:"Power Wiring"}),"\n",(0,t.jsx)(r,{image:i(11999).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"driver-installation",children:"Driver Installation"}),"\n",(0,t.jsx)(n.h3,{id:"motherboard-driver-jumper",children:"Motherboard Driver Jumper"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"STEP/DIR Mode."})," In this mode, subdivision is set using a jumper cap, and current is adjusted using a potentiometer. The most common driver used is the A4988 driver. For this type of driver, you need to refer to the manufacturer's provided subdivision configuration table and set the subdivision using the jumper cap."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"UART Mode."})," The most common drivers using this mode are TMC2208, TMC2209, TMC2226, etc. These driver chips can communicate asynchronously with the main controller via UART, and settings such as subdivision, operating current, and silent mode can be configured by modifying the configuration file."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SPI Mode."})," The most common drivers using this mode are TMC5160, TMC2230, etc. These driver chips communicate synchronously with the main controller via SPI, and similarly, settings such as subdivision, operating current, and silent mode can be configured by modifying the configuration file."]}),"\n",(0,t.jsx)(r,{image:i(49999).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"driver-installation-1",children:"Driver Installation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Before installing the driver, perform necessary checks to avoid damaging the driver or motherboard."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FLY Driver:"})," If you do not use the infinite zeroing function, set the DIP switch to position 1; if you want to use the infinite zeroing function, set the DIP switch to ON."]}),"\n",(0,t.jsx)(r,{image:i(70339).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Note!! When installing the driver module, ensure the correct insertion direction, i.e., the EN pin should be at the top left corner, otherwise it may damage the driver or even the motherboard!! Ensure that the driver has a heatsink attached!!"})}),"\n"]})}),"\n",(0,t.jsx)(r,{image:i(92649).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"stepper-motor-wiring",children:"Stepper Motor Wiring"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Regardless of the manufacturer, a two-phase stepper motor will ultimately have four wires. No matter what color they are, black, white, green, yellow, etc., they all correspond to four wires. Therefore, we need to group these wires into two groups, A and B."}),"\n",(0,t.jsx)(n.li,{children:"For a two-phase four-wire stepper motor, we do not need to know which is Group A and which is Group B; mainly, we just need to determine one group. In the configuration, we can change the motor direction."}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"In a 3D printer, the most commonly used is the two-phase four-wire stepper motor. Its principle is shown in the figure below. There are two methods to identify the wire sequence of a stepper motor:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connect any two phase wires and turn the motor shaft by hand. If there is a significant resistance, then the two wires form a pair. Otherwise, they do not form a pair, and another pair needs to be tested."}),"\n",(0,t.jsx)(n.li,{children:"Use a multimeter set to continuity mode to test any two phase wires of the stepper motor. If they are connected, then they form a pair; otherwise, they do not form a pair, and another pair needs to be tested."}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(30071).Z,size:"50%",align:"center"}),"\n",(0,t.jsx)(r,{image:i(2096).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"heater-wire-connection",children:"Heater Wire Connection"}),"\n",(0,t.jsx)(r,{image:i(78181).Z,size:"60%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"bed-wiring",children:"Bed Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AC Bed:"})," When wiring the solid-state relay, make sure not to connect the input and output incorrectly."]}),"\n",(0,t.jsx)(r,{image:i(54628).Z,size:"20%",align:"center"}),"\n",(0,t.jsx)(r,{image:i(22429).Z,size:"40%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"DC Bed:"})," When connecting the onboard MOS to a DC bed, pay attention to the power usage. The maximum current for a DC bed cannot exceed 10A. If the current exceeds 10A, it is recommended to use an external MOS module to use the bed, otherwise, it may cause irreversible damage to the motherboard."]}),"\n",(0,t.jsx)(r,{image:i(77132).Z,size:"60%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"thermistor-wiring",children:"Thermistor Wiring"}),"\n",(0,t.jsx)(n.h3,{id:"thermistor-type-introduction",children:"Thermistor Type Introduction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The wiring method for the thermistor is as follows. Please consult the purchasing merchant for the type of thermistor."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If purchased from fly (as shown below), please configure ",(0,t.jsx)(n.code,{children:"sensor_type"})," as: ",(0,t.jsx)(n.strong,{children:"ATC Semitec 104GT-2"})]}),"\n",(0,t.jsx)(r,{image:i(41736).Z,size:"30%",align:"center"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If it is a conventional NTC 100K (as shown below), please configure ",(0,t.jsx)(n.code,{children:"sensor_type"})," as: ",(0,t.jsx)(n.strong,{children:"Generic 3950"})]}),"\n",(0,t.jsx)(r,{image:i(95993).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(r,{image:i(32117).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"motherboard-thermistor-wiring",children:"Motherboard Thermistor Wiring"}),"\n",(0,t.jsx)(r,{image:i(3916).Z,size:"40%",align:"center"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"fan-wiring",children:"Fan Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Fan Wiring"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Choose the fan voltage. By shorting the corresponding voltage pins with a jumper cap, choose as shown in the following diagram. Note: The jumpers within the yellow boxes in the diagram are the same. Incorrectly choosing the fan voltage may damage the fan or MOS module."})}),"\n",(0,t.jsx)(r,{image:i(66070).Z,size:"30%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Fan Wiring"}),"\n"]}),"\n",(0,t.jsx)(r,{image:i(10508).Z,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"limit-switch-wiring",children:"Limit Switch Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Limit switches come in Normally Open (NO) and Normally Closed (NC) types. Generally, in a 3D printer, it is recommended to use ",(0,t.jsx)(n.strong,{children:"NC"}),". This way, if there is an issue with the limit switch circuit, the system will promptly report an error, preventing unnecessary crashes and damage to the printer."]}),"\n",(0,t.jsx)(r,{image:i(26770).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"leveling-sensor-wiring",children:"Leveling Sensor Wiring"}),"\n",(0,t.jsx)(n.h3,{id:"metal-proximity-switch-wiring",children:"Metal Proximity Switch Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"VORON officially recommends using the Omron TL-Q5MC sensor (previously, PL08N was recommended, but the principles are the same, only the detection distance differs) for bed leveling. The wiring method is as shown below."}),"\n",(0,t.jsx)(r,{image:i(39447).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"bl-touch-wiring",children:"BL-Touch Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"BL-Touch has five wires, three of which form the first group, responsible for sensor power supply and probe extension/retraction. The second group consists of ground and signal lines, which output limit signals. When wiring BL-Touch, carefully verify the wire sequence; incorrect wiring may permanently damage the sensor and motherboard!! The wiring method is as shown below."}),"\n",(0,t.jsx)(r,{image:i(14552).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"klicky-wiring",children:"Klicky Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Klicky is a third-party leveling sensor that can be made at home with low cost and stable performance, making it highly recommended. The wiring method is as shown below."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Project Address: ",(0,t.jsx)(n.a,{href:"https://github.com/jlas1/Klicky-Probe",title:"Project Address, click to jump",children:"jlas1/Klicky-Probe"})]}),"\n",(0,t.jsx)(r,{image:i(91481).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"voron-tap-wiring",children:"Voron Tap Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tap is a nozzle-based z-probe suitable for V2 and Trident printer designs. The entire toolhead moves to trigger the optical switch, providing better precision than a standard limit switch, and can be used with almost all print platforms."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Voron Tap is not recommended to be connected to ",(0,t.jsx)(n.strong,{children:"24V"}),", as some versions may burn out the Tap sensor when using ",(0,t.jsx)(n.strong,{children:"24V"}),". This is not a problem with the Fly product, but a design flaw of Voron Tap. Please be aware!!"]})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Note: The 5V and GND connections must not be reversed, otherwise it may damage the Tap sensor or even the motherboard!!"})}),"\n",(0,t.jsx)(r,{image:i(12561).Z,size:"40%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"fly-mini12864-lcd-wiring",children:"FLY-Mini12864 LCD Wiring"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The wiring method for FLY's mini12864 is shown below. For screens from other manufacturers, please consult the respective manufacturer. Reversing or misconnecting a Mini12864 screen may result in the host computer being unable to connect to the MCU. If you previously could connect the MCU normally with the motherboard, but after using the mini12864, you cannot connect to the MCU, try unplugging the mini12864 wiring!!"}),"\n",(0,t.jsx)(r,{image:i(82099).Z,size:"30%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},77031:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/interface-36941b90883683ab178e0f872cd9470c.webp"},71457:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/pin-34c7e23127cea3f45d0d8104c4a86b53.webp"},22429:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/bed-ac-2-7b8b34b5a35ad362c351d1730dfaa2ef.webp"},77132:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/bed-dc-1902b6b7b07c03ed8e3e8c55929ef356.webp"},14552:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/bltouch-ade840a1b22a65a7fbd845340f7d069b.webp"},26770:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/endstop-17e7ad28bfe9f08f3a6dca968de96ea3.webp"},66070:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fan-voltage-c42c026df4aeefe793c6133986187dae.webp"},10508:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fan-c91414481219f757f67e7004d79325d6.webp"},78181:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/heater-4dc34bf6f7ae45385fe2616a45e9c140.webp"},91481:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/klicky-688e908d3923c268a9ed4b2b67fa50a1.webp"},82099:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/mini12864-e73ba1c6458007df1c8261d610a14ef3.webp"},2096:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/motor-de540367c07aa3488fc9db0edbcf4dde.webp"},39447:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/pl08-09b124f0475ae5e61f6628f8918e0fc5.webp"},11999:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/power-68ae0d8ede60adc968ac7c14a312d6b2.webp"},12561:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/tap-348d51f5541174ae32f898dcc0d82a67.webp"},3916:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/thermistor-6668004323eb3e5a4ed2e134e1755e55.webp"},54628:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/bed-ac-1-27e7237f87ddfd04ca5392c3487f4ac5.webp"},49999:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/drive-dip-aff3fda803e9be2628f35059c8849057.webp"},92649:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/drive-install-a1f9947c4f7a2a8724aabab95c5fab38.webp"},70339:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/fly2209-f37b9e1a5bd36dc1839d7558663806b8.webp"},30071:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/motor-sch-7914db5b80127d5a16b7a3d0be311a07.webp"},41736:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/ntc-1-2a44153c94ef48946e8e538e8deb5ced.webp"},95993:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/ntc-2-e19315cc0501e3f1e49e3edff3a31053.webp"},32117:function(e,n,i){i.d(n,{Z:function(){return r}});let r="data:image/webp;base64,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"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var r=i(75271);let t={},s=r.createContext(t);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);