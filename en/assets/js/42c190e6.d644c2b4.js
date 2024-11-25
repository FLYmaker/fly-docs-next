"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["84475"],{36424:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"ProductDoc/ExtensionBoard/fly-halo/tutorial","title":"User Guide","description":"Precautions","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ExtensionBoard/fly-halo/tutorial.mdx","sourceDirName":"ProductDoc/ExtensionBoard/fly-halo","slug":"/ProductDoc/ExtensionBoard/fly-halo/tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-halo/tutorial","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ExtensionBoard/fly-halo/tutorial.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"sidebar_label":"User Guide"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-halo/"},"next":{"title":"Installation Guide","permalink":"/fly-docs-next/en/docs/ProductDoc/ExtensionBoard/fly-halo/install"}}'),o=t("52676"),s=t("79938");let r={sidebar_position:2,sidebar_label:"User Guide"},l="User Guide",a={},c=[{value:"Precautions",id:"precautions",level:2},{value:"System Firmware Update",id:"system-firmware-update",level:2},{value:"Language Selection",id:"language-selection",level:2},{value:"Using Your Phone to Scan and Configure Wi-Fi",id:"using-your-phone-to-scan-and-configure-wi-fi",level:2},{value:"If Connecting Wi-Fi Does Not Redirect Your Phone, Access the Console at the Following URL",id:"if-connecting-wi-fi-does-not-redirect-your-phone-access-the-console-at-the-following-url",level:3},{value:"Select the Wi-Fi Network to Connect",id:"select-the-wi-fi-network-to-connect",level:3},{value:"Enter the IP Address for Connecting to KLIPPER",id:"enter-the-ip-address-for-connecting-to-klipper",level:3},{value:"Save and Exit",id:"save-and-exit",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ImageView:i}=n;return!i&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"user-guide",children:"User Guide"})}),"\n",(0,o.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"You must connect to the internet when using for the first time. If your Wi-Fi cannot access the internet, halo will not be able to obtain the initial configuration."}),"\n",(0,o.jsxs)(n.li,{children:["All settings in the settings page will only take effect after the device restarts following a click on ",(0,o.jsx)(n.strong,{children:"Save Settings"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"The blockage detection feature is disabled by default. After enabling it in the settings and restarting the device, you can enter it by swiping up from the home screen."}),"\n",(0,o.jsx)(n.li,{children:"The shutdown function after printing is completed is disabled by default and can be enabled in the settings."}),"\n",(0,o.jsx)(n.li,{children:"All buttons in pop-ups that require canceling or pausing printing must be long-pressed; single clicks are ineffective (to prevent accidental touches)."}),"\n",(0,o.jsx)(n.li,{children:"In the system services page, the Host service is the master computer."}),"\n",(0,o.jsx)(n.li,{children:"When using the official firmware, do not attempt to replace the main control chip or FLASH chip."}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Note: If your ",(0,o.jsx)(n.code,{children:"moonraker.conf"})," configuration file exceeds 4MB, you may not be able to use it normally. If there are any abnormalities, reduce the size of the ",(0,o.jsx)(n.code,{children:"moonraker.conf"})," configuration file."]}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"system-firmware-update",children:"System Firmware Update"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["There are two types of updates for the halo version: full updates and OTA incremental updates.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Full update: Larger upgrades involving the underlying system, requiring the use of a USB stick to burn the full firmware package."}),"\n",(0,o.jsx)(n.li,{children:"Incremental update: Normal OTA upgrade, check for updates in the device information page."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"language-selection",children:"Language Selection"}),"\n",(0,o.jsx)(i,{image:t(69709).Z,size:"80%",align:"left"}),"\n",(0,o.jsx)(n.h2,{id:"using-your-phone-to-scan-and-configure-wi-fi",children:"Using Your Phone to Scan and Configure Wi-Fi"}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Some mobile devices may not have the functionality to scan and connect to Wi-Fi. You can connect to the hotspot named ",(0,o.jsx)(n.strong,{children:"FLY-halo-xxxxxxxx"})," in your phone's Wi-Fi settings."]}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If no web page pops up after connecting to the hotspot, you need to manually open the link in a browser."}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Please note that HALO can only use 2.4GHz Wi-Fi."}),"\n"]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The HALO screen cannot detect hidden Wi-Fi networks."}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"if-connecting-wi-fi-does-not-redirect-your-phone-access-the-console-at-the-following-url",children:"If Connecting Wi-Fi Does Not Redirect Your Phone, Access the Console at the Following URL"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"http://192.168.4.1/",children:"http://192.168.4.1/"})}),"\n",(0,o.jsx)(i,{image:t(51860).Z,size:"80%",align:"left"}),"\n",(0,o.jsx)(n.h3,{id:"select-the-wi-fi-network-to-connect",children:"Select the Wi-Fi Network to Connect"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Select the Wi-Fi network to connect to.","\n",(0,o.jsx)(i,{image:t(68404).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"enter-the-ip-address-for-connecting-to-klipper",children:"Enter the IP Address for Connecting to KLIPPER"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter the IP address of KLIPPER in the MoonRaker IP field.","\n",(0,o.jsx)(i,{image:t(44196).Z,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"save-and-exit",children:"Save and Exit"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["halo will automatically restart and connect to KLIPPER. The built-in hotspot of halo will automatically close.","\n",(0,o.jsx)(i,{image:t(59035).Z,size:"80%",align:"left"}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},69709:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/language-bfc78ce42d64d4ac266082e038ad420d.webp"},68404:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/wifi-1-75209269290fe372a16ab73ce673334b.webp"},44196:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/wifi-2-3f7de43a1bcd18bc0be68702501ceb8f.webp"},59035:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/wifi-3-b560d03696da757d17918a5c5ecbf14b.webp"},51860:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/wifi-92577203063ed66e284ad5e79d803064.webp"},79938:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(75271);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);