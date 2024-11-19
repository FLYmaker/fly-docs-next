"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[77651],{94230:(e,n,_)=>{_.r(n),_.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>E,frontMatter:()=>N,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"ProductDoc/Screen/12864/index","title":"12864","description":"Klipper\u914d\u7f6e","source":"@site/docs/ProductDoc/Screen/12864/index.mdx","sourceDirName":"ProductDoc/Screen/12864","slug":"/ProductDoc/Screen/12864/","permalink":"/fly-docs-next/docs/ProductDoc/Screen/12864/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/12864/index.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730517188000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"\u7b80\u4ecb"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-12864","permalink":"/fly-docs-next/docs/category/fly-12864"},"next":{"title":"FLY-\u9a71\u52a8\u7cfb\u5217","permalink":"/fly-docs-next/docs/category/fly-\u9a71\u52a8\u7cfb\u5217"}}');var d=_(86070),r=_(15658),P=_(63436);const N={sidebar_position:1,sidebar_label:"\u7b80\u4ecb"},t="12864",s={},l=[{value:"Klipper\u914d\u7f6e",id:"klipper\u914d\u7f6e",level:2},{value:"Marlin \u914d\u7f6e\u65b9\u6cd5",id:"marlin-\u914d\u7f6e\u65b9\u6cd5",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"12864",children:"12864"})}),"\n",(0,d.jsx)(P.A,{image:_(30474).A,size:"50%",align:"left"}),"\n",(0,d.jsx)(n.h2,{id:"klipper\u914d\u7f6e",children:"Klipper\u914d\u7f6e"}),"\n",(0,d.jsx)(n.admonition,{type:"info",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u6b63\u786e\u8fde\u63a5\u5230EXP\u63a5\u53e3\u540e\uff0c\u5c06\u793a\u4f8b\u914d\u7f6e\u4e2d\u7684mini12864\u90e8\u5206\u53d6\u6d88\u6ce8\u91ca\u5373\u53ef"}),"\n"]})}),"\n",(0,d.jsx)(n.h2,{id:"marlin-\u914d\u7f6e\u65b9\u6cd5",children:"Marlin \u914d\u7f6e\u65b9\u6cd5"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\u5728\u914d\u7f6e\u4e2d\u6dfb\u52a0\u5373\u53ef","\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-cfg",children:"#if HAS_WIRED_LCD\n\n#define BEEPER_PIN                 EXP1_10_PIN\n#define BTN_ENC                    EXP1_09_PIN\n\n#if ENABLED(CR10_STOCKDISPLAY)\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n#elif ENABLED(MKS_MINI_12864)\n\n    #define DOGLCD_A0                EXP1_04_PIN\n    #define DOGLCD_CS                EXP1_05_PIN\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n#else\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_06_PIN\n    #define BTN_EN2                  EXP2_08_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n    #if ENABLED(FYSETC_MINI_12864)\n    #define DOGLCD_CS              EXP1_08_PIN\n    #define DOGLCD_A0              EXP1_07_PIN\n    //#define LCD_BACKLIGHT_PIN           -1\n    #define LCD_RESET_PIN          EXP1_06_PIN  // Must be high or open for LCD to operate normally.\n    #if EITHER(FYSETC_MINI_12864_1_2, FYSETC_MINI_12864_2_0)\n        #ifndef RGB_LED_R_PIN\n        #define RGB_LED_R_PIN      EXP1_05_PIN\n        #endif\n        #ifndef RGB_LED_G_PIN\n        #define RGB_LED_G_PIN      EXP1_04_PIN\n        #endif\n        #ifndef RGB_LED_B_PIN\n        #define RGB_LED_B_PIN      EXP1_03_PIN\n        #endif\n    #elif ENABLED(FYSETC_MINI_12864_2_1)\n        #define NEOPIXEL_PIN         EXP1_05_PIN\n    #endif\n    #endif // !FYSETC_MINI_12864\n\n    #if IS_ULTIPANEL\n    #define LCD_PINS_D5            EXP1_05_PIN\n    #define LCD_PINS_D6            EXP1_04_PIN\n    #define LCD_PINS_D7            EXP1_03_PIN\n\n    #if ENABLED(REPRAP_DISCOUNT_FULL_GRAPHIC_SMART_CONTROLLER)\n        #define BTN_ENC_EN           LCD_PINS_D7  // Detect the presence of the encoder\n    #endif\n\n    #endif\n\n#endif\n\n#endif // HAS_WIRED_LCD\n\n"})}),"\n"]}),"\n"]})]})}function E(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(f,{...e})}):f(e)}},30474:(e,n,_)=>{_.d(n,{A:()=>i});const i=_.p+"assets/images/12864-e715076fe12a9b39fdea160a2de268f0.png"}}]);