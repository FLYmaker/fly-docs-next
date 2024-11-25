"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["80475"],{71428:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"DebugDoc/faq/klipper_can","title":"CAN Issue Collection","description":"Precautions Before Searching for Devices","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/faq/klipper_can.mdx","sourceDirName":"DebugDoc/faq","slug":"/DebugDoc/faq/klipper_can","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/klipper_can","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/faq/klipper_can.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"CAN Issue Collection"},"sidebar":"debugdocSidebar","previous":{"title":"TMC Error Related","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/tmc"},"next":{"title":"Accelerometer Usage","permalink":"/fly-docs-next/en/docs/DebugDoc/faq/kipper-adxl"}}'),t=i("52676"),o=i("79938");i("21856");let r={sidebar_position:4,sidebar_label:"CAN Issue Collection"},c="CAN Issue Collection",l={},a=[{value:"Precautions Before Searching for Devices",id:"precautions-before-searching-for-devices",level:2},{value:"Determining if Devices Exist",id:"determining-if-devices-exist",level:2},{value:"Identifying Issues Based on Error Messages",id:"identifying-issues-based-on-error-messages",level:2},{value:"Checking if the Host Machine Supports CAN",id:"checking-if-the-host-machine-supports-can",level:2},{value:"Configuring CAN0",id:"configuring-can0",level:2},{value:"Things to Check After Not Finding an ID",id:"things-to-check-after-not-finding-an-id",level:2},{value:"Searching for ID",id:"searching-for-id",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"can-issue-collection",children:"CAN Issue Collection"})}),"\n",(0,t.jsx)(n.h2,{id:"precautions-before-searching-for-devices",children:"Precautions Before Searching for Devices"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Before searching for CAN ID, please first ",(0,t.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"})]}),"\n",(0,t.jsx)(n.li,{children:"Please note that you need to ensure that you are logging in via network SSH rather than serial port login"}),"\n",(0,t.jsx)(n.li,{children:"Please make sure that the motherboard with UTOC installed or the motherboard flashed with CAN bridge firmware is properly connected, and the data cable connecting the motherboard to the host has data transmission capability"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"determining-if-devices-exist",children:"Determining if Devices Exist"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Now that you have successfully logged into the host, you can enter ",(0,t.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following situations:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,t.jsx)(n.code,{children:"ls"})," command is not found, you can enter the following command to install the command","\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If entering ",(0,t.jsx)(n.code,{children:"lsusb"})," results in no response, this is a system issue beyond our control. You need to change the system or use a known working system."]}),"\n",(0,t.jsxs)(n.li,{children:["If the information shown in the image below appears, note that this is just a reference. You only need to confirm that ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,t.jsx)(s,{image:i(78948).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. You do not need to worry about the subsequent prompts because system issues may cause them to display incompletely or not at all."]}),"\n",(0,t.jsxs)(n.li,{children:["If there are multiple ",(0,t.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one to avoid affecting subsequent firmware flashing and connection to the firmware. For example, if it's ",(0,t.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,t.jsx)(n.li,{children:"If none appear, please check if the data cable is properly connected and if the firmware is correctly flashed."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["You can only search for CAN ID when ",(0,t.jsx)(n.code,{children:"1d50:606f"})," appears."]})}),"\n",(0,t.jsx)(n.h2,{id:"identifying-issues-based-on-error-messages",children:"Identifying Issues Based on Error Messages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Below are common error messages:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"OSError: [Errno 19] No such device"}),"\n",(0,t.jsx)(n.li,{children:"can.CanError: Failed to transmit: [Errno 100] Network is down"}),"\n",(0,t.jsx)(n.li,{children:"can.CanError: Failed to transmit: [Errno 105] No buffer space available"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The first one indicates that the host machine cannot find the CAN device (motherboard with USB bridge firmware or UTOC)."}),"\n",(0,t.jsx)(n.li,{children:"The second one indicates that the host machine does not have CAN0 configured or configured incorrectly."}),"\n",(0,t.jsx)(n.li,{children:"The third one indicates that the host machine has insufficient cache or system issues leading to cache failure."}),"\n",(0,t.jsx)(n.li,{children:"Points two and three can be addressed by configuring CAN0 as shown below."}),"\n",(0,t.jsx)(n.li,{children:"If you cannot find the ID, refer to the section below."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"checking-if-the-host-machine-supports-can",children:"Checking if the Host Machine Supports CAN"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If you are using the FLY host machine, you do not need to perform this step."}),"\n",(0,t.jsxs)(n.li,{children:["If your system is ",(0,t.jsx)(n.code,{children:"Ubuntu"}),", you need to configure CAN0, but this document has not been updated."]}),"\n",(0,t.jsx)(n.li,{children:"Enter the following command to determine if your system supports CAN"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo modprobe can && echo "Your kernel supports CAN" || echo "Your kernel does not support CAN"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["After entering the above command, if your kernel supports CAN, it will return: ",(0,t.jsx)(n.code,{children:"Your kernel supports CAN"}),". If it does not support CAN, it will return: ",(0,t.jsx)(n.code,{children:"Your kernel does not support CAN"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["If it returns ",(0,t.jsx)(n.code,{children:"Your kernel supports CAN"}),", you can proceed to the next step to configure CAN0."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-can0",children:"Configuring CAN0"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This command overwrites the original CAN0 configuration on the system and requires a system restart after execution."}),"\n",(0,t.jsx)(n.li,{children:"Choose one based on your actual situation"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For 1M rate, enter the following command"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo /bin/sh -c "cat > /etc/network/interfaces.d/can0" << EOF\n    allow-hotplug can0\n    iface can0 can static\n        bitrate 1000000\n        up ifconfig $IFACE txqueuelen 1024\n        pre-up ip link set can0 type can bitrate 1000000\n        pre-up ip link set can0 txqueuelen 1024\nEOF\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"For 500K rate, enter the following command"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo /bin/sh -c "cat > /etc/network/interfaces.d/can0" << EOF\nallow-hotplug can0\niface can0 can static\n    bitrate 500000\n    up ifconfig $IFACE txqueuelen 1024\n    pre-up ip link set can0 type can bitrate 500000\n    pre-up ip link set can0 txqueuelen 1024\nEOF\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Restart the device"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo reboot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"things-to-check-after-not-finding-an-id",children:"Things to Check After Not Finding an ID"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If Klipper is configured with the corresponding ID, you need to disable the ID in the system settings before shutting down, disconnect power, and then turn on or press the reset button on the motherboard."}),"\n",(0,t.jsx)(n.li,{children:"Check if the CAN speed of the host machine matches the motherboard, tool board, etc."}),"\n",(0,t.jsx)(n.li,{children:"You can use the following code to determine the CAN speed of the host machine"}),"\n",(0,t.jsx)(n.li,{children:"Make sure there are no disconnections."}),"\n",(0,t.jsxs)(n.li,{children:["Check if a ",(0,t.jsx)(n.code,{children:"120\u03A9"})," termination resistor is installed between the tool board and the device (motherboard with USB bridge firmware or UTOC)."]}),"\n",(0,t.jsxs)(n.li,{children:["If a ",(0,t.jsx)(n.code,{children:"120\u03A9"})," termination resistor is installed, use a multimeter to measure the resistance between CAN H and CAN L when the device is completely powered off to see if it is around ",(0,t.jsx)(n.code,{children:"60\u03A9"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Ensure there are no disconnections."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ip -details link show can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The highlighted areas in the image below indicate the CAN speed and cache of the host machine."}),"\n",(0,t.jsxs)(n.li,{children:["The above ",(0,t.jsx)(n.code,{children:"1024"})," is the current CAN0 cache."]}),"\n",(0,t.jsxs)(n.li,{children:["The below ",(0,t.jsx)(n.code,{children:"1000000"})," is the current CAN0 speed."]}),"\n"]}),"\n",(0,t.jsx)(s,{image:i(10074).Z,size:"80%",align:"center"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the UUID is still not found, carefully check the following notes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Confirm whether the motherboard or CAN tool board is correctly connected."}),"\n",(0,t.jsx)(n.li,{children:"Ensure proper power supply, it is recommended to connect VCC power to the motherboard."}),"\n",(0,t.jsx)(n.li,{children:"Check if the host machine supports CAN networks."}),"\n",(0,t.jsxs)(n.li,{children:["Check if the CAN resistance is around ",(0,t.jsx)(n.code,{children:"60\u03A9"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Verify if the firmware compilation is correct."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"searching-for-id",children:"Searching for ID"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the following command to search for the ID"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"Klipper"}),", it means this ID can be used directly."]}),"\n",(0,t.jsxs)(n.li,{children:["If an ID appears and the ",(0,t.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,t.jsx)(n.code,{children:"CANBOOT"})," or ",(0,t.jsx)(n.code,{children:"Katapult"}),", it means you need to flash the firmware to use it.","\n",(0,t.jsx)(s,{image:i(47218).Z,size:"50%",align:"left"}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21856:function(e,n,i){i.d(n,{ZP:function(){return c},d$:function(){return o}});var s=i(52676),t=i(79938);let o=[{value:"CAN Configuration and ID Search",id:"can-configuration-and-id-search",level:2},{value:"Precautions Before Device Search",id:"precautions-before-device-search",level:3},{value:"Device Search",id:"device-search",level:3},{value:"CAN ID Search",id:"can-id-search",level:3},{value:"CAN Issue Collection",id:"can-issue-collection",level:3},{value:"Fill in the CAN ID into the Configuration",id:"fill-in-the-can-id-into-the-configuration",level:3}];function r(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Button:o,ImageView:r}=n;return!o&&l("Button",!0),!r&&l("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"can-configuration-and-id-search",children:"CAN Configuration and ID Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you need to use CAN, make sure your host computer has undergone CAN configuration."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,s.jsx)(n.p,{children:"Please ensure the motherboard is properly connected to the host computer before proceeding with the following operations."})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Please ensure that the CAN network on the host computer, the CAN rate of the bridge motherboard, and the CAN tool board rate are all consistent."})}),"\n",(0,s.jsx)(n.h3,{id:"precautions-before-device-search",children:"Precautions Before Device Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Before searching for CAN IDs, please first ",(0,s.jsx)(n.a,{href:"/docs/DebugDoc/BasicTutorial/index.mdx",title:"click to jump",children:"connect to SSH"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Please note that you need to ensure you are logging into SSH via the network, not via serial port."}),"\n",(0,s.jsx)(n.li,{children:"Please ensure that the UTOC or a motherboard with CAN bridge firmware installed is properly connected, and the data cable connecting to the host computer has data transfer capability."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"device-search",children:"Device Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Now that you have successfully logged into the host computer, you can enter ",(0,s.jsx)(n.code,{children:"lsusb"})," to search for devices. You will encounter one of the following situations:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Entering ",(0,s.jsx)(n.code,{children:"lsusb"})," prompts that the ",(0,s.jsx)(n.code,{children:"ls"})," command is not found; in this case, you can enter the following command to install the command:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install usbutils\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Entering ",(0,s.jsx)(n.code,{children:"lsusb"})," produces no response. This is a system issue beyond our control; you will need to replace the system or use a confirmed working system."]}),"\n",(0,s.jsxs)(n.li,{children:["The information shown below appears. Please note that this is only for reference. You only need to confirm that ",(0,s.jsx)(n.code,{children:"1d50:606f"})," appears.","\n",(0,s.jsx)(r,{image:i(78948).Z,size:"100%",align:"left"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"1d50:606f"})," belongs to the device you will be using. Ignore any subsequent prompts as they may be incomplete or not displayed due to system issues."]}),"\n",(0,s.jsxs)(n.li,{children:["If there are multiple ",(0,s.jsx)(n.code,{children:"1d50:606f"}),", it is recommended to exclude one, otherwise it may affect subsequent firmware burning and connection, such as when using the ",(0,s.jsx)(n.code,{children:"FLY MINI PAD"}),", it is recommended to use the onboard UTOC and not other CAN bridge devices."]}),"\n",(0,s.jsx)(n.li,{children:"If none appear, please check if the data cable is properly connected and if the firmware is correctly installed."}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,s.jsxs)(n.p,{children:["You can only proceed with CAN ID search when ",(0,s.jsx)(n.code,{children:"1d50:606f"})," is present."]})}),"\n",(0,s.jsx)(n.h3,{id:"can-id-search",children:"CAN ID Search"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Enter the following command to search for IDs:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"~/klippy-env/bin/python ~/klipper/scripts/canbus_query.py can0\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If an ID appears and the ",(0,s.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,s.jsx)(n.code,{children:"Klipper"}),", it means this ID can be used directly."]}),"\n",(0,s.jsxs)(n.li,{children:["If an ID appears and the ",(0,s.jsx)(n.code,{children:"Application:"})," at the end shows ",(0,s.jsx)(n.code,{children:"CANBOOT"})," or ",(0,s.jsx)(n.code,{children:"Katapult"}),", it means you need to flash the firmware to use it.","\n",(0,s.jsx)(r,{image:i(47218).Z,size:"50%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"can-issue-collection",children:"CAN Issue Collection"}),"\n",(0,s.jsx)(n.admonition,{title:"Notice",type:"danger",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If you cannot find a CAN ID, refer to the documentation below."}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o,{variant:"contained",disableElevation:!0,href:"/docs/DebugDoc/faq/klipper_can",children:"CAN Issue Collection"}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.h3,{id:"fill-in-the-can-id-into-the-configuration",children:"Fill in the CAN ID into the Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the printer's web interface. In the configuration options on the left sidebar, find ",(0,s.jsx)(n.code,{children:"fluidd"}),": ",(0,s.jsx)(n.code,{children:"{...}"})," ; ",(0,s.jsx)(n.code,{children:"mainsail"}),": ",(0,s.jsx)(n.code,{children:"Machine"}),", then click to access ",(0,s.jsx)(n.code,{children:"printer.cfg"}),"."]}),"\n",(0,s.jsx)(r,{image:i(56137).Z,size:"50%",align:"left"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Copy the queried UUID and paste it into the ",(0,s.jsx)(n.code,{children:"[mcu]"})," section of the ",(0,s.jsx)(n.code,{children:"printer.cfg"})," configuration under ",(0,s.jsx)(n.code,{children:"canbus_uuid:"}),". After saving and restarting, you should be able to connect to the motherboard. If Klipper prompts for firmware updates, ADC errors, etc., it indicates that Klipper has successfully connected to the motherboard."]}),"\n",(0,s.jsx)(r,{image:i(47218).Z,size:"50%",align:"left"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"Note: All IDs mentioned in the document are examples. Each motherboard's ID is unique, so please modify according to the actual ID obtained."})}),"\n"]}),"\n"]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function l(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},78948:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/606f-cbbebb6ec94773e733a05ddcf6a076e0.webp"},47218:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/canbus-uuid-7117b665e00888c3c8163973d8c29b10.webp"},10074:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/details-e9b5934f0c205d427af977ac5b05e501.webp"},56137:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/fluidd-cfg-852485b665e4c2b86aaf45ae4b133d7d.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var s=i(75271);let t={},o=s.createContext(t);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);