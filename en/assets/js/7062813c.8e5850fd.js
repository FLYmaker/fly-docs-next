"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["18824"],{72615:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>d,default:()=>P,assets:()=>c,toc:()=>f,frontMatter:()=>r});var t=JSON.parse('{"id":"ProductDoc/Screen/12864/index","title":"12864","description":"Klipper Configuration","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/Screen/12864/index.mdx","sourceDirName":"ProductDoc/Screen/12864","slug":"/ProductDoc/Screen/12864/","permalink":"/fly-docs-next/en/docs/ProductDoc/Screen/12864/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/12864/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-12864","permalink":"/fly-docs-next/en/docs/category/fly-12864"},"next":{"title":"FLY-\u9A71\u52A8\u7CFB\u5217","permalink":"/fly-docs-next/en/docs/category/fly-\u9A71\u52A8\u7CFB\u5217"}}'),o=i("52676"),_=i("79938");let r={sidebar_position:1,sidebar_label:"Introduction"},d="12864",c={},f=[{value:"Klipper Configuration",id:"klipper-configuration",level:2},{value:"Marlin Configuration Method",id:"marlin-configuration-method",level:2}];function l(n){let e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",pre:"pre",ul:"ul",...(0,_.a)(),...n.components},{ImageView:t}=e;return!t&&function(n,e){throw Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"12864",children:"12864"})}),"\n",(0,o.jsx)(t,{image:i(46959).Z,size:"50%",align:"left"}),"\n",(0,o.jsx)(e.h2,{id:"klipper-configuration",children:"Klipper Configuration"}),"\n",(0,o.jsx)(e.admonition,{type:"info",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"After correctly connecting to the EXP interface, uncomment the mini12864 part in the example configuration."}),"\n"]})}),"\n",(0,o.jsx)(e.h2,{id:"marlin-configuration-method",children:"Marlin Configuration Method"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Add the following in the configuration:","\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cfg",children:"#if HAS_WIRED_LCD\n\n#define BEEPER_PIN                 EXP1_10_PIN\n#define BTN_ENC                    EXP1_09_PIN\n\n#if ENABLED(CR10_STOCKDISPLAY)\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n#elif ENABLED(MKS_MINI_12864)\n\n    #define DOGLCD_A0                EXP1_04_PIN\n    #define DOGLCD_CS                EXP1_05_PIN\n    #define BTN_EN1                  EXP2_08_PIN\n    #define BTN_EN2                  EXP2_06_PIN\n\n#else\n\n    #define LCD_PINS_RS              EXP1_07_PIN\n\n    #define BTN_EN1                  EXP2_06_PIN\n    #define BTN_EN2                  EXP2_08_PIN\n\n    #define LCD_PINS_ENABLE          EXP1_08_PIN\n    #define LCD_PINS_D4              EXP1_06_PIN\n\n    #if ENABLED(FYSETC_MINI_12864)\n    #define DOGLCD_CS              EXP1_08_PIN\n    #define DOGLCD_A0              EXP1_07_PIN\n    //#define LCD_BACKLIGHT_PIN           -1\n    #define LCD_RESET_PIN          EXP1_06_PIN  // Must be high or open for LCD to operate normally.\n    #if EITHER(FYSETC_MINI_12864_1_2, FYSETC_MINI_12864_2_0)\n        #ifndef RGB_LED_R_PIN\n        #define RGB_LED_R_PIN      EXP1_05_PIN\n        #endif\n        #ifndef RGB_LED_G_PIN\n        #define RGB_LED_G_PIN      EXP1_04_PIN\n        #endif\n        #ifndef RGB_LED_B_PIN\n        #define RGB_LED_B_PIN      EXP1_03_PIN\n        #endif\n    #elif ENABLED(FYSETC_MINI_12864_2_1)\n        #define NEOPIXEL_PIN         EXP1_05_PIN\n    #endif\n    #endif // !FYSETC_MINI_12864\n\n    #if IS_ULTIPANEL\n    #define LCD_PINS_D5            EXP1_05_PIN\n    #define LCD_PINS_D6            EXP1_04_PIN\n    #define LCD_PINS_D7            EXP1_03_PIN\n\n    #if ENABLED(REPRAP_DISCOUNT_FULL_GRAPHIC_SMART_CONTROLLER)\n        #define BTN_ENC_EN           LCD_PINS_D7  // Detect the presence of the encoder\n    #endif\n\n    #endif\n\n#endif\n\n#endif // HAS_WIRED_LCD\n\n"})}),"\n"]}),"\n"]})]})}function P(n={}){let{wrapper:e}={...(0,_.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},46959:function(n,e,i){i.d(e,{Z:function(){return t}});let t=i.p+"assets/images/12864-ca22deb0592806fec347402c3e7082bc.webp"},79938:function(n,e,i){i.d(e,{Z:function(){return d},a:function(){return r}});var t=i(75271);let o={},_=t.createContext(o);function r(n){let e=t.useContext(_);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),t.createElement(_.Provider,{value:e},n.children)}}}]);