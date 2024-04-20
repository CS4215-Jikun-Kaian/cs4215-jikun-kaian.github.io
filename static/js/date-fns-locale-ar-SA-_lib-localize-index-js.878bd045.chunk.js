"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[89547],{76797:(n,e,a)=>{var i=a(64836).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=i(a(64028)),d={ordinalNumber:function(n){return String(n)},era:(0,t.default)({values:{narrow:["\u0642","\u0628"],abbreviated:["\u0642.\u0645.","\u0628.\u0645."],wide:["\u0642\u0628\u0644 \u0627\u0644\u0645\u064a\u0644\u0627\u062f","\u0628\u0639\u062f \u0627\u0644\u0645\u064a\u0644\u0627\u062f"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["\u06311","\u06312","\u06313","\u06314"],wide:["\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0623\u0648\u0644","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0646\u064a","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u062b\u0627\u0644\u062b","\u0627\u0644\u0631\u0628\u0639 \u0627\u0644\u0631\u0627\u0628\u0639"]},defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:(0,t.default)({values:{narrow:["\u064a","\u0641","\u0645","\u0623","\u0645","\u064a","\u064a","\u0623","\u0633","\u0623","\u0646","\u062f"],abbreviated:["\u064a\u0646\u0627","\u0641\u0628\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u0640","\u064a\u0648\u0644\u0640","\u0623\u063a\u0633\u0640","\u0633\u0628\u062a\u0640","\u0623\u0643\u062a\u0640","\u0646\u0648\u0641\u0640","\u062f\u064a\u0633\u0640"],wide:["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["\u062d","\u0646","\u062b","\u0631","\u062e","\u062c","\u0633"],short:["\u0623\u062d\u062f","\u0627\u062b\u0646\u064a\u0646","\u062b\u0644\u0627\u062b\u0627\u0621","\u0623\u0631\u0628\u0639\u0627\u0621","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],abbreviated:["\u0623\u062d\u062f","\u0627\u062b\u0646\u0640","\u062b\u0644\u0627","\u0623\u0631\u0628\u0640","\u062e\u0645\u064a\u0640","\u062c\u0645\u0639\u0629","\u0633\u0628\u062a"],wide:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0627\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0645\u0633\u0627\u0621\u0627\u064b",night:"\u0644\u064a\u0644\u0627\u064b"}},defaultWidth:"wide",formattingValues:{narrow:{am:"\u0635",pm:"\u0645",midnight:"\u0646",noon:"\u0638",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},abbreviated:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0641\u064a \u0627\u0644\u0635\u0628\u0627\u062d",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"},wide:{am:"\u0635",pm:"\u0645",midnight:"\u0646\u0635\u0641 \u0627\u0644\u0644\u064a\u0644",noon:"\u0638\u0647\u0631",morning:"\u0635\u0628\u0627\u062d\u0627\u064b",afternoon:"\u0628\u0639\u062f \u0627\u0644\u0638\u0640\u0647\u0631",evening:"\u0641\u064a \u0627\u0644\u0645\u0633\u0627\u0621",night:"\u0641\u064a \u0627\u0644\u0644\u064a\u0644"}},defaultFormattingWidth:"wide"})};e.default=d,n.exports=e.default}}]);
//# sourceMappingURL=date-fns-locale-ar-SA-_lib-localize-index-js.878bd045.chunk.js.map