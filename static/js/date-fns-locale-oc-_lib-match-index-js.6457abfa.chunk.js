"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[90502],{34622:(i,a,e)=>{var d=e(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=d(e(27758)),r={ordinalNumber:(0,d(e(35568)).default)({matchPattern:/^(\d+)(\xe8r|nd|en)?[a]?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,t.default)({matchPatterns:{narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans J\xe8sus-Crist|apr\xe8s J\xe8sus-Crist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ab/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:{narrow:/^T[1234]/i,abbreviated:/^[1234](\xe8r|nd|en)? trim\.?/i,wide:/^[1234](\xe8r|nd|en)? trim\xe8stre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,t.default)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|mar\xe7|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(geni\xe8r|febri\xe8r|mar\xe7|abril|mai|junh|julhet|agost|setembre|oct\xf2bre|novembre|decembre)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^g/i,/^f/i,/^ma[r?]|M\xc7/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:{narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dim\xe8cres|dij\xf2us|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dim\xe8/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:{any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l\u2019)(matin|apr\xe8p-mi\xe8gjorn|v\xe8spre|ser|nu\xe8ch))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mi\xe8j/i,noon:/^mi\xe8g/i,morning:/matin/i,afternoon:/apr\xe8p-mi\xe8gjorn/i,evening:/v\xe8spre|ser/i,night:/nu\xe8ch/i}},defaultParseWidth:"any"})};a.default=r,i.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-oc-_lib-match-index-js.6457abfa.chunk.js.map