"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["19030"],{6007:function(e,t,l){l.r(t),l.d(t,{metadata:()=>i,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>x,frontMatter:()=>r});var i=JSON.parse('{"id":"DebugDoc/BasicTutorial/timedatectl","title":"Modify System Time Zone","description":"Please note that if you are using FLY Tools with FLY OS version 3.3.4, you can directly use FLY Tools to modify the time zone.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/timedatectl.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/timedatectl","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/timedatectl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/timedatectl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732242947000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"USB Drive Printing","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/usb_printing"},"next":{"title":"System Crash Backup Configuration Method","permalink":"/fly-docs-next/en/docs/DebugDoc/BasicTutorial/backup"}}'),n=l("52676"),s=l("79938");let r={sidebar_position:4},d="Modify System Time Zone",c={},x=[{value:"Pacific Region",id:"pacific-region",level:2},{value:"America",id:"america",level:2},{value:"Atlantic",id:"atlantic",level:2},{value:"Europe",id:"europe",level:2},{value:"Africa",id:"africa",level:2},{value:"Asia",id:"asia",level:2},{value:"Oceania",id:"oceania",level:2}];function a(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"modify-system-time-zone",children:"Modify System Time Zone"})}),"\n",(0,n.jsx)(t.p,{children:"Please note that if you are using FLY Tools with FLY OS version 3.3.4, you can directly use FLY Tools to modify the time zone.\nFor other software, please follow the instructions below."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo timedatectl set-timezone <TIMEZONE>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Replace ",(0,n.jsx)(t.code,{children:"<TIMEZONE>"})," with the time zone code you wish to use. You can find time zone codes on the ",(0,n.jsx)(t.a,{href:"https://www.iana.org/time-zones",children:"iana.org"})," website. For example, if you want to change your system's time zone to Beijing time (Asia/Shanghai), you can enter the following command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo timedatectl set-timezone Asia/Shanghai\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now, your system time zone has been successfully changed to Shanghai time. You can verify the time zone setting with the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"date\n"})}),"\n",(0,n.jsx)(t.h2,{id:"pacific-region",children:"Pacific Region"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Majuro"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Majuro"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Midway"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Midway"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Honolulu"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Honolulu"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Guam"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Guam"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Auckland"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Auckland"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Fiji"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Fiji"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Pacific/Tongatapu"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Tongatapu"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"america",children:"America"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Anchorage"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Anchorage"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Los_Angeles"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Pacific Time (Los Angeles)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Tijuana"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Pacific Time (Tijuana)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Phoenix"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Mountain Time (Phoenix)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Chihuahua"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Chihuahua"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Denver"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Mountain Time (Denver)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Costa_Rica"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Central Time (Costa Rica)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Chicago"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Central Time (Chicago)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Mexico_City"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Central Time (Mexico City)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Regina"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Central Time (Regina)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Bogota"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Colombia Time (Bogot\xe1)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/New_York"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"United States Eastern Time (New York)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Caracas"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Venezuela Time (Caracas)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Barbados"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Atlantic Time (Barbados)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Manaus"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Amazon Standard Time (Manaus)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Santiago"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Santiago"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/St_Johns"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Newfoundland Time (St. John\u2019s)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Sao_Paulo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sao Paulo"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Argentina/Buenos_Aires"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Buenos Aires"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Godthab"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Godthab"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aerica/Montevideo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Uruguay Time (Montevideo)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"atlantic",children:"Atlantic"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/South_Georgia"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"South Georgia"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/Azores"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Azores"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Aantic/Cape_Verde"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Cape Verde"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Casablanca"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Casablanca"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"europe",children:"Europe"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/London"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Greenwich Mean Time (London)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Amsterdam"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Central European Time (Amsterdam)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Belgrade"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Central European Time (Belgrade)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Brussels"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Central European Time (Brussels)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Sarajevo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Central European Time (Sarajevo)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Athens"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Eastern European Time (Athens)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Helsinki"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Eastern European Time (Helsinki)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Minsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Minsk"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Europe/Moscow"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Moscow"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"africa",children:"Africa"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Windhoek"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Windhoek"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Brazzaville"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"West African Time (Brazzaville)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Cairo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Eastern European Time (Cairo)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Harare"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Central African Time (Harare)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Africa/Nairobi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"East African Time (Nairobi)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"asia",children:"Asia"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Amman"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Eastern European Time (Amman)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Beirut"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Eastern European Time (Beirut)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Jerusalem"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Israeli Time (Jerusalem)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baghdad"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Baghdad"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuwait"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Kuwait"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tehran"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Iran Time (Tehran)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Baku"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Baku"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tbilisi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Tbilisi"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yerevan"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yerevan"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Dubai"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Dubai"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kabul"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Afghanistan Time (Kabul)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Karachi"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Karachi"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Oral"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Ural"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yekaterinburg"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yekaterinburg"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Calcutta"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Calcutta"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Colombo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Colombo"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Katmandu"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Nepal Time (Katmandu)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Almaty"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Almaty"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Rangoon"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Burma Time (Rangoon)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Krasnoyarsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Krasnoyarsk"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Bangkok"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Bangkok"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Shanghai"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"China Standard Time (Beijing)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Hong_Kong"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Hong Kong Time (Hong Kong)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Irkutsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Irkutsk Time (Irkutsk)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Kuala_Lumpur"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Kuala Lumpur"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Perth"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Perth"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Taipei"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Taipei Time (Taipei)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Seoul"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Seoul"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Tokyo"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Japan Time (Tokyo)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Yakutsk"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Yakutsk Time (Yakutsk)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Vladivostok"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Vladivostok Time (Vladivostok)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Asia/Magadan"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Magadan Time (Magadan)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"oceania",children:"Oceania"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Time Zone"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Chinese Name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Adelaide"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Adelaide"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Darwin"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Darwin"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Brisbane"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Brisbane"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Hobart"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Hobart"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Australia/Sydney"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Sydney"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},79938:function(e,t,l){l.d(t,{Z:function(){return d},a:function(){return r}});var i=l(75271);let n={},s=i.createContext(n);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);