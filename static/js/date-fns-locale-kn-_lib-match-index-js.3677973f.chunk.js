"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[79619],{94938:(i,a,t)=>{var e=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=e(t(27758)),n={ordinalNumber:(0,e(t(35568)).default)({matchPattern:/^(\d+)(\u0ca8\u0cc7|\u0ca8\u0cc6)?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(\u0c95\u0ccd\u0cb0\u0cbf.\u0caa\u0cc2|\u0c95\u0ccd\u0cb0\u0cbf.\u0cb6)/i,abbreviated:/^(\u0c95\u0ccd\u0cb0\u0cbf\.?\s?\u0caa\u0cc2\.?|\u0c95\u0ccd\u0cb0\u0cbf\.?\s?\u0cb6\.?|\u0caa\u0ccd\u0cb0\.?\s?\u0cb6\.?)/i,wide:/^(\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0caa\u0cc2\u0cb0\u0ccd\u0cb5|\u0c95\u0ccd\u0cb0\u0cbf\u0cb8\u0ccd\u0ca4 \u0cb6\u0c95|\u0caa\u0ccd\u0cb0\u0cb8\u0c95\u0ccd\u0ca4 \u0cb6\u0c95)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^\u0caa\u0cc2/i,/^(\u0cb6|\u0caa\u0ccd\u0cb0)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^\u0ca4\u0ccd\u0cb0\u0cc8[1234]|\u0ca4\u0ccd\u0cb0\u0cc8 [1234]| [1234]\u0ca4\u0ccd\u0cb0\u0cc8/i,wide:/^[1234](\u0ca8\u0cc7)? \u0ca4\u0ccd\u0cb0\u0cc8\u0cae\u0cbe\u0cb8\u0cbf\u0c95/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(\u0c9c\u0cc2|\u0c9c\u0cc1|\u0c9c|\u0cab\u0cc6|\u0cae\u0cbe|\u0c8f|\u0cae\u0cc7|\u0c86|\u0cb8\u0cc6|\u0c85|\u0ca8|\u0ca1\u0cbf)/i,abbreviated:/^(\u0c9c\u0ca8|\u0cab\u0cc6\u0cac\u0ccd\u0cb0|\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd|\u0c8f\u0caa\u0ccd\u0cb0\u0cbf|\u0cae\u0cc7|\u0c9c\u0cc2\u0ca8\u0ccd|\u0c9c\u0cc1\u0cb2\u0cc8|\u0c86\u0c97|\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82|\u0c85\u0c95\u0ccd\u0c9f\u0ccb|\u0ca8\u0cb5\u0cc6\u0c82|\u0ca1\u0cbf\u0cb8\u0cc6\u0c82)/i,wide:/^(\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf|\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf|\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd|\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd|\u0cae\u0cc7|\u0c9c\u0cc2\u0ca8\u0ccd|\u0c9c\u0cc1\u0cb2\u0cc8|\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd|\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd|\u0c85\u0c95\u0ccd\u0c9f\u0ccb\u0cac\u0cb0\u0ccd|\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd|\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0c9c$/i,/^\u0cab\u0cc6/i,/^\u0cae\u0cbe/i,/^\u0c8f/i,/^\u0cae\u0cc7/i,/^\u0c9c\u0cc2/i,/^\u0c9c\u0cc1$/i,/^\u0c86/i,/^\u0cb8\u0cc6/i,/^\u0c85/i,/^\u0ca8/i,/^\u0ca1\u0cbf/i],any:[/^\u0c9c\u0ca8/i,/^\u0cab\u0cc6/i,/^\u0cae\u0cbe/i,/^\u0c8f/i,/^\u0cae\u0cc7/i,/^\u0c9c\u0cc2\u0ca8\u0ccd/i,/^\u0c9c\u0cc1\u0cb2\u0cc8/i,/^\u0c86/i,/^\u0cb8\u0cc6/i,/^\u0c85/i,/^\u0ca8/i,/^\u0ca1\u0cbf/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(\u0cad\u0cbe|\u0cb8\u0ccb|\u0cae|\u0cac\u0cc1|\u0c97\u0cc1|\u0cb6\u0cc1|\u0cb6)/i,short:/^(\u0cad\u0cbe\u0ca8\u0cc1|\u0cb8\u0ccb\u0cae|\u0cae\u0c82\u0c97\u0cb3|\u0cac\u0cc1\u0ca7|\u0c97\u0cc1\u0cb0\u0cc1|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0|\u0cb6\u0ca8\u0cbf)/i,abbreviated:/^(\u0cad\u0cbe\u0ca8\u0cc1|\u0cb8\u0ccb\u0cae|\u0cae\u0c82\u0c97\u0cb3|\u0cac\u0cc1\u0ca7|\u0c97\u0cc1\u0cb0\u0cc1|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0|\u0cb6\u0ca8\u0cbf)/i,wide:/^(\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0|\u0cb8\u0ccb\u0cae\u0cb5\u0cbe\u0cb0|\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0|\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0|\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0|\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0|\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^\u0cad\u0cbe/i,/^\u0cb8\u0ccb/i,/^\u0cae/i,/^\u0cac\u0cc1/i,/^\u0c97\u0cc1/i,/^\u0cb6\u0cc1/i,/^\u0cb6/i],any:[/^\u0cad\u0cbe/i,/^\u0cb8\u0ccb/i,/^\u0cae/i,/^\u0cac\u0cc1/i,/^\u0c97\u0cc1/i,/^\u0cb6\u0cc1/i,/^\u0cb6/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(\u0caa\u0cc2|\u0c85|\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9|\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6|\u0cb8\u0c82\u0c9c\u0cc6|\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf)/i,any:/^(\u0caa\u0cc2\u0cb0\u0ccd\u0cb5\u0cbe\u0cb9\u0ccd\u0ca8|\u0c85\u0caa\u0cb0\u0cbe\u0cb9\u0ccd\u0ca8|\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9|\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6|\u0cb8\u0c82\u0c9c\u0cc6|\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^\u0caa\u0cc2/i,pm:/^\u0c85/i,midnight:/\u0cae\u0ca7\u0ccd\u0caf\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf/i,noon:/\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9/i,morning:/\u0cac\u0cc6\u0cb3\u0c97\u0ccd\u0c97\u0cc6/i,afternoon:/\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0ca8\u0ccd\u0cb9/i,evening:/\u0cb8\u0c82\u0c9c\u0cc6/i,night:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf/i}},defaultParseWidth:"any"})};a.default=n,i.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-kn-_lib-match-index-js.3677973f.chunk.js.map