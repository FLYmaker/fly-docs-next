"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["69425"],{35916:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen7/linux","title":"Ethernet Cable Usage Tutorial","description":"The screen firmware needs to be manually updated.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen7/linux.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen7","slug":"/ProductDoc/Screen/fly-wiscreen7/linux","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/linux","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen7/linux.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"sidebar_label":"Raspberry Pi and Other Hosts Using Ethernet Cable Tutorial"},"sidebar":"tutorialSidebar","previous":{"title":"Update and Upgrade","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/updata"},"next":{"title":"WFI Connection and Klipper Configuration","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/fly-wiscreen7/klipper"}}'),r=t("52676"),s=t("79938");let a={sidebar_position:3,sidebar_label:"Raspberry Pi and Other Hosts Using Ethernet Cable Tutorial"},o="Ethernet Cable Usage Tutorial",c={},l=[{value:"Screen Firmware Download",id:"screen-firmware-download",level:2},{value:"Ethernet Cable Wiring",id:"ethernet-cable-wiring",level:2},{value:"System Package for Use with FLY Host",id:"system-package-for-use-with-fly-host",level:2},{value:"Service Installation",id:"service-installation",level:2},{value:"Network Configuration",id:"network-configuration",level:2},{value:"Increase WIFI Priority",id:"increase-wifi-priority",level:2}];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Button:i,ImageView:a}=n;return!i&&u("Button",!0),!a&&u("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ethernet-cable-usage-tutorial",children:"Ethernet Cable Usage Tutorial"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"The screen firmware needs to be manually updated."})}),"\n",(0,r.jsx)(n.h2,{id:"screen-firmware-download",children:"Screen Firmware Download"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/wiscreen/wiscreen7/Cable/update.img",children:"Click to download screen firmware"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A memory card no larger than 32GB is required, and the TF card transfer speed must be Class10 or higher. It is recommended to use brands such as SanDisk."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ethernet-cable-wiring",children:"Ethernet Cable Wiring"}),"\n",(0,r.jsx)(a,{image:t(49016).Z,size:"100%",align:"left"}),"\n",(0,r.jsx)(n.h2,{id:"system-package-for-use-with-fly-host",children:"System Package for Use with FLY Host"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Applicable to C8 PI_V2 PI GEMINI series"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(i,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/IMG/Beta/FLY_OS%E7%BD%91%E7%BA%BF%E5%B1%8F%E7%B3%BB%E7%BB%9F.img.xz",children:"Download system package"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"service-installation",children:"Service Installation"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Other hosts need to install services themselves."})}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,r.jsx)(n.p,{children:"The installation process requires internet access."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt install isc-dhcp-server\n"})}),"\n",(0,r.jsx)(n.h2,{id:"network-configuration",children:"Network Configuration"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This tutorial will occupy the host's network port, allowing only the screen to be used."}),"\n",(0,r.jsx)(n.li,{children:"If not needed, simply delete all the modified and added configurations below."}),"\n"]})}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"/etc/network/interfaces.d/eth0"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"auto eth0\niface eth0 inet static\naddress 192.168.251.100\nnetmask 255.255.255.0\nbroadcast 192.168.251.255\nnetwork 192.168.251.0\ngateway 192.168.251.1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"/etc/default/isc-dhcp-server"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Defaults for isc-dhcp-server (sourced by /etc/init.d/isc-dhcp-server)\n\n# Path to dhcpd\'s config file (default: /etc/dhcp/dhcpd.conf).\n#DHCPDv4_CONF=/etc/dhcp/dhcpd.conf\n#DHCPDv6_CONF=/etc/dhcp/dhcpd6.conf\n\n# Path to dhcpd\'s PID file (default: /var/run/dhcpd.pid).\n#DHCPDv4_PID=/var/run/dhcpd.pid\n#DHCPDv6_PID=/var/run/dhcpd6.pid\n\n# Additional options to start dhcpd with.\n#       Don\'t use options -cf or -pf here; use DHCPD_CONF/ DHCPD_PID instead\n#OPTIONS=""\n\n# On what interfaces should the DHCP server (dhcpd) serve DHCP requests?\n#       Separate multiple interfaces with spaces, e.g. "eth0 eth1".\nINTERFACESv4="eth0"\n#INTERFACESv4="eth0"\nINTERFACESv6=""\n#INTERFACES="eth0"\n\nINTERFACES="eth0"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"/etc/dhcp/dhcpd.conf"}),", add the following content at the end"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# ddns-update-style none;\nsubnet 192.168.251.0 netmask 255.255.255.0 {\n    range 192.168.251.100 192.168.251.200;\n    option routers 192.168.251.1;\n    option domain-name-servers 8.8.8.8, 8.8.4.4; # Example using Google Public DNS\n    default-lease-time 600; # Default lease time in seconds\n    max-lease-time 7200;    # Maximum lease time in seconds\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Reboot the system first, then execute the following service restart"}),"\n",(0,r.jsx)(n.p,{children:"Or restart the network service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart NetworkManager\n"})}),"\n",(0,r.jsx)(n.p,{children:"This operation will cause a network disconnection and reconnection."}),"\n",(0,r.jsx)(n.p,{children:"Restart the service"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart isc-dhcp-server\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The local IP address should be ",(0,r.jsx)(n.code,{children:"192.168.251.100"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"increase-wifi-priority",children:"Increase WIFI Priority"}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"This command is to increase network priority. If not added, normal internet access and downloads will not be possible!!!"}),"\n"]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Please add the following instruction in ",(0,r.jsx)(n.code,{children:"/etc/rc.local"})," on the host"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ip route del default && sudo ip route add default via $(ip route show dev wlan0 | grep 'default via' | awk 'NR==1 {print $3}') dev wlan0\n"})})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function u(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},49016:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/fpc-2b5a9fe2c0b6954dcfae93b9c9995ebc.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var i=t(75271);let r={},s=i.createContext(r);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);