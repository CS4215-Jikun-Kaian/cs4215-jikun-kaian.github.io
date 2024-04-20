"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[47302],{79014:(i,a,t)=>{var e=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e(t(27758)),n={ordinalNumber:(0,e(t(35568)).default)({matchPattern:/^(\d+)(\u0447\u0438)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u043c\.\u0430|\u043c\.)/i,abbreviated:/^(\u043c\.\u0430|\u043c\.)/i,wide:/^(\u043c\u0438\u043b\u043e\u0434\u0434\u0430\u043d \u0430\u0432\u0432\u0430\u043b|\u043c\u0438\u043b\u043e\u0434\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u043c/i,/^\u0430/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]-\u0447\u043e\u0440./i,wide:/^[1234]-\u0447\u043e\u0440\u0430\u043a/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[\u044f\u0444\u043c\u0430\u043c\u0438\u0438\u0430\u0441\u043e\u043d\u0434]/i,abbreviated:/^(\u044f\u043d\u0432|\u0444\u0435\u0432|\u043c\u0430\u0440|\u0430\u043f\u0440|\u043c\u0430\u0439|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433|\u0441\u0435\u043d|\u043e\u043a\u0442|\u043d\u043e\u044f|\u0434\u0435\u043a)/i,wide:/^(\u044f\u043d\u0432\u0430\u0440|\u0444\u0435\u0432\u0440\u0430\u043b|\u043c\u0430\u0440\u0442|\u0430\u043f\u0440\u0435\u043b|\u043c\u0430\u0439|\u0438\u044e\u043d|\u0438\u044e\u043b|\u0430\u0432\u0433\u0443\u0441\u0442|\u0441\u0435\u043d\u0442\u0430\u0431\u0440|\u043e\u043a\u0442\u0430\u0431\u0440|\u043d\u043e\u044f\u0431\u0440|\u0434\u0435\u043a\u0430\u0431\u0440)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u044f/i,/^\u0444/i,/^\u043c/i,/^\u0430/i,/^\u043c/i,/^\u0438/i,/^\u0438/i,/^\u0430/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i],any:[/^\u044f/i,/^\u0444/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f/i,/^\u043c\u0430\u0439/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432/i,/^\u0441/i,/^\u043e/i,/^\u043d/i,/^\u0434/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[\u044f\u0434\u0441\u0447\u043f\u0436\u0448]/i,short:/^(\u044f\u043a|\u0434\u0443|\u0441\u0435|\u0447\u043e|\u043f\u0430|\u0436\u0443|\u0448\u0430)/i,abbreviated:/^(\u044f\u043a\u0448|\u0434\u0443\u0448|\u0441\u0435\u0448|\u0447\u043e\u0440|\u043f\u0430\u0439|\u0436\u0443\u043c|\u0448\u0430\u043d)/i,wide:/^(\u044f\u043a\u0448\u0430\u043d\u0431\u0430|\u0434\u0443\u0448\u0430\u043d\u0431\u0430|\u0441\u0435\u0448\u0430\u043d\u0431\u0430|\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0430|\u043f\u0430\u0439\u0448\u0430\u043d\u0431\u0430|\u0436\u0443\u043c\u0430|\u0448\u0430\u043d\u0431\u0430)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u044f/i,/^\u0434/i,/^\u0441/i,/^\u0447/i,/^\u043f/i,/^\u0436/i,/^\u0448/i],any:[/^\u044f\u043a/i,/^\u0434\u0443/i,/^\u0441\u0435/i,/^\u0447\u043e\u0440/i,/^\u043f\u0430\u0439/i,/^\u0436\u0443/i,/^\u0448\u0430\u043d/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(\u043f\.\u043e\.|\u043f\.\u043a\.|\u044f\u0440\u0438\u043c \u0442\u0443\u043d|\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d|(\u044d\u0440\u0442\u0430\u043b\u0430\u0431|\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d|\u043a\u0435\u0447\u0430\u0441\u0438|\u0442\u0443\u043d))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u043f\.\u043e\./i,pm:/^\u043f\.\u043a\./i,midnight:/^\u044f\u0440\u0438\u043c \u0442\u0443\u043d/i,noon:/^\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d/i,morning:/\u044d\u0440\u0442\u0430\u043b\u0430\u0431/i,afternoon:/\u043f\u0435\u0448\u0438\u043d\u0434\u0430\u043d \u043a\u0435\u0439\u0438\u043d/i,evening:/\u043a\u0435\u0447\u0430\u0441\u0438/i,night:/\u0442\u0443\u043d/i}},defaultParseWidth:"any"})};a.default=n,i.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-uz-Cyrl-_lib-match-index-js.8241ccc9.chunk.js.map