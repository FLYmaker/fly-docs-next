"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["17657"],{72514:function(e,n,r){r.r(n),r.d(n,{metadata:()=>c,contentTitle:()=>s,default:()=>a,assets:()=>l,toc:()=>d,frontMatter:()=>t});var c=JSON.parse('{"id":"ProductDoc/Screen/fly-wiscreen7/source_code1","title":"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430","description":"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/ProductDoc/Screen/fly-wiscreen7/source_code1.mdx","sourceDirName":"ProductDoc/Screen/fly-wiscreen7","slug":"/ProductDoc/Screen/fly-wiscreen7/source_code1","permalink":"/fly-docs-next/ru/docs/ProductDoc/Screen/fly-wiscreen7/source_code1","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/Screen/fly-wiscreen7/source_code1.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"sidebar_label":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 - \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"},"sidebar":"tutorialSidebar","previous":{"title":"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 - \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430","permalink":"/fly-docs-next/ru/docs/ProductDoc/Screen/fly-wiscreen7/source_code"},"next":{"title":"\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u044D\u043A\u0440\u0430\u043D\u0430 - \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430","permalink":"/fly-docs-next/ru/docs/ProductDoc/Screen/fly-wiscreen7/source_code2"}}'),i=r("52676"),o=r("79938");let t={sidebar_position:7,sidebar_label:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 - \u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"},s="\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430",l={},d=[{value:"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435",id:"\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435",level:2},{value:"\u041F\u0430\u043F\u043A\u0430 Logic",id:"\u043F\u0430\u043F\u043A\u0430-logic",level:4},{value:"\u041F\u0430\u043F\u043A\u0430 i18n",id:"\u043F\u0430\u043F\u043A\u0430-i18n",level:4},{value:"\u041F\u0430\u043F\u043A\u0430 resources",id:"\u043F\u0430\u043F\u043A\u0430-resources",level:4},{value:"\u041F\u0430\u043F\u043A\u0430 ui",id:"\u043F\u0430\u043F\u043A\u0430-ui",level:4}];function u(e){let n={h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:c}=n;return!c&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435-\u0432-\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443-\u043F\u0440\u043E\u0435\u043A\u0442\u0430",children:"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u043E\u0435\u043A\u0442\u0430"})}),"\n",(0,i.jsx)(c,{image:r(36563).Z,size:"80%",align:"left"}),"\n",(0,i.jsx)(n.h2,{id:"\u0432\u0432\u0435\u0434\u0435\u043D\u0438\u0435",children:"\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435"}),"\n",(0,i.jsx)(n.h4,{id:"\u043F\u0430\u043F\u043A\u0430-logic",children:"\u041F\u0430\u043F\u043A\u0430 Logic"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u041C\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u0443\u0435\u043C 99% \u043A\u043E\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0432 \u043F\u0430\u043F\u043A\u0435 logic, \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0430\u043F\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C"}),"\n",(0,i.jsx)(n.li,{children:"gcodeLogic.cc \u0430\u043D\u0430\u043B\u043E\u0433\u0438\u0447\u043D\u043E main.c,    99% \u043A\u043E\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C, \u0434\u0440\u0443\u0433\u0438\u0435 \u0444\u0430\u0439\u043B\u044B \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u044F"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043F\u0430\u043F\u043A\u0430-i18n",children:"\u041F\u0430\u043F\u043A\u0430 i18n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0425\u0440\u0430\u043D\u0438\u0442 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0430 \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u044F\u0437\u044B\u043A\u0438"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043F\u0430\u043F\u043A\u0430-resources",children:"\u041F\u0430\u043F\u043A\u0430 resources"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0425\u0440\u0430\u043D\u0438\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u043C \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u043F\u0430\u043F\u043A\u0430-ui",children:"\u041F\u0430\u043F\u043A\u0430 ui"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u0425\u0440\u0430\u043D\u0438\u0442 \u0444\u0430\u0439\u043B\u044B \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u0434\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"}),"\n",(0,i.jsx)(n.li,{children:'\u0414\u0432\u043E\u0439\u043D\u043E\u0439 \u043A\u043B\u0438\u043A \u043F\u043E \u0441\u0442\u0440\u0435\u043B\u043A\u0435 \u0432 \u043B\u0435\u0432\u043E\u043C \u043D\u0438\u0436\u043D\u0435\u043C \u0443\u0433\u043B\u0443, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0435\u0439 \u043D\u0430 "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0433\u043B\u0430\u0437", \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B'}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},36563:function(e,n,r){r.d(n,{Z:function(){return c}});let c=r.p+"assets/images/ide6-31901df27f04f994ed84e53fe871beca.webp"},79938:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return t}});var c=r(75271);let i={},o=c.createContext(i);function t(e){let n=c.useContext(o);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),c.createElement(o.Provider,{value:n},e.children)}}}]);