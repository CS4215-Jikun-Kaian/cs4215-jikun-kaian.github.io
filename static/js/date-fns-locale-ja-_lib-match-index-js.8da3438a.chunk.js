"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[84248],{91809:(a,t,e)=>{var i=e(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e(35568)),n=i(e(27758)),d={ordinalNumber:(0,r.default)({matchPattern:/^\u7b2c?\d+(\u5e74|\u56db\u534a\u671f|\u6708|\u9031|\u65e5|\u6642|\u5206|\u79d2)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i,wide:/^(\u7d00\u5143[\u524d\u5f8c]|\u897f\u66a6)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(\u7d00\u5143\u524d)/i,/^(\u897f\u66a6|\u7d00\u5143\u5f8c)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^\u7b2c[1234\u4e00\u4e8c\u4e09\u56db\uff11\uff12\uff13\uff14]\u56db\u534a\u671f/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|\u4e00|\uff11)/i,/(2|\u4e8c|\uff12)/i,/(3|\u4e09|\uff13)/i,/(4|\u56db|\uff14)/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])\u6708/i,wide:/^([123456789]|1[012])\u6708/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,short:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,abbreviated:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]/,wide:/^[\u65e5\u6708\u706b\u6c34\u6728\u91d1\u571f]\u66dc\u65e5/},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u65e5/,/^\u6708/,/^\u706b/,/^\u6c34/,/^\u6728/,/^\u91d1/,/^\u571f/]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(AM|PM|\u5348\u524d|\u5348\u5f8c|\u6b63\u5348|\u6df1\u591c|\u771f\u591c\u4e2d|\u591c|\u671d)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(A|\u5348\u524d)/i,pm:/^(P|\u5348\u5f8c)/i,midnight:/^\u6df1\u591c|\u771f\u591c\u4e2d/i,noon:/^\u6b63\u5348/i,morning:/^\u671d/i,afternoon:/^\u5348\u5f8c/i,evening:/^\u591c/i,night:/^\u6df1\u591c/i}},defaultParseWidth:"any"})};t.default=d,a.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-ja-_lib-match-index-js.8da3438a.chunk.js.map