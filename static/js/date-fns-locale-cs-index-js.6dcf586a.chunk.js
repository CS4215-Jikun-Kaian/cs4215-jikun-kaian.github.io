"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[15040,76326,45022,25526,19025,31458],{8066:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={lessThanXSeconds:{one:{regular:"m\xe9n\u011b ne\u017e sekunda",past:"p\u0159ed m\xe9n\u011b ne\u017e sekundou",future:"za m\xe9n\u011b ne\u017e sekundu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} sekundy",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} sekundami",future:"za m\xe9n\u011b ne\u017e {{count}} sekundy"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} sekund",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} sekundami",future:"za m\xe9n\u011b ne\u017e {{count}} sekund"}},xSeconds:{one:{regular:"sekunda",past:"p\u0159ed sekundou",future:"za sekundu"},few:{regular:"{{count}} sekundy",past:"p\u0159ed {{count}} sekundami",future:"za {{count}} sekundy"},many:{regular:"{{count}} sekund",past:"p\u0159ed {{count}} sekundami",future:"za {{count}} sekund"}},halfAMinute:{type:"other",other:{regular:"p\u016fl minuty",past:"p\u0159ed p\u016fl minutou",future:"za p\u016fl minuty"}},lessThanXMinutes:{one:{regular:"m\xe9n\u011b ne\u017e minuta",past:"p\u0159ed m\xe9n\u011b ne\u017e minutou",future:"za m\xe9n\u011b ne\u017e minutu"},few:{regular:"m\xe9n\u011b ne\u017e {{count}} minuty",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minuty"},many:{regular:"m\xe9n\u011b ne\u017e {{count}} minut",past:"p\u0159ed m\xe9n\u011b ne\u017e {{count}} minutami",future:"za m\xe9n\u011b ne\u017e {{count}} minut"}},xMinutes:{one:{regular:"minuta",past:"p\u0159ed minutou",future:"za minutu"},few:{regular:"{{count}} minuty",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minuty"},many:{regular:"{{count}} minut",past:"p\u0159ed {{count}} minutami",future:"za {{count}} minut"}},aboutXHours:{one:{regular:"p\u0159ibli\u017en\u011b hodina",past:"p\u0159ibli\u017en\u011b p\u0159ed hodinou",future:"p\u0159ibli\u017en\u011b za hodinu"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} hodiny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodiny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} hodin",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} hodinami",future:"p\u0159ibli\u017en\u011b za {{count}} hodin"}},xHours:{one:{regular:"hodina",past:"p\u0159ed hodinou",future:"za hodinu"},few:{regular:"{{count}} hodiny",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodiny"},many:{regular:"{{count}} hodin",past:"p\u0159ed {{count}} hodinami",future:"za {{count}} hodin"}},xDays:{one:{regular:"den",past:"p\u0159ed dnem",future:"za den"},few:{regular:"{{count}} dny",past:"p\u0159ed {{count}} dny",future:"za {{count}} dny"},many:{regular:"{{count}} dn\xed",past:"p\u0159ed {{count}} dny",future:"za {{count}} dn\xed"}},aboutXWeeks:{one:{regular:"p\u0159ibli\u017en\u011b t\xfdden",past:"p\u0159ibli\u017en\u011b p\u0159ed t\xfddnem",future:"p\u0159ibli\u017en\u011b za t\xfdden"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddny",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddny"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} t\xfddn\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} t\xfddny",future:"p\u0159ibli\u017en\u011b za {{count}} t\xfddn\u016f"}},xWeeks:{one:{regular:"t\xfdden",past:"p\u0159ed t\xfddnem",future:"za t\xfdden"},few:{regular:"{{count}} t\xfddny",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddny"},many:{regular:"{{count}} t\xfddn\u016f",past:"p\u0159ed {{count}} t\xfddny",future:"za {{count}} t\xfddn\u016f"}},aboutXMonths:{one:{regular:"p\u0159ibli\u017en\u011b m\u011bs\xedc",past:"p\u0159ibli\u017en\u011b p\u0159ed m\u011bs\xedcem",future:"p\u0159ibli\u017en\u011b za m\u011bs\xedc"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedce",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedce"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} m\u011bs\xedc\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} m\u011bs\xedci",future:"p\u0159ibli\u017en\u011b za {{count}} m\u011bs\xedc\u016f"}},xMonths:{one:{regular:"m\u011bs\xedc",past:"p\u0159ed m\u011bs\xedcem",future:"za m\u011bs\xedc"},few:{regular:"{{count}} m\u011bs\xedce",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedce"},many:{regular:"{{count}} m\u011bs\xedc\u016f",past:"p\u0159ed {{count}} m\u011bs\xedci",future:"za {{count}} m\u011bs\xedc\u016f"}},aboutXYears:{one:{regular:"p\u0159ibli\u017en\u011b rok",past:"p\u0159ibli\u017en\u011b p\u0159ed rokem",future:"p\u0159ibli\u017en\u011b za rok"},few:{regular:"p\u0159ibli\u017en\u011b {{count}} roky",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} roky"},many:{regular:"p\u0159ibli\u017en\u011b {{count}} rok\u016f",past:"p\u0159ibli\u017en\u011b p\u0159ed {{count}} roky",future:"p\u0159ibli\u017en\u011b za {{count}} rok\u016f"}},xYears:{one:{regular:"rok",past:"p\u0159ed rokem",future:"za rok"},few:{regular:"{{count}} roky",past:"p\u0159ed {{count}} roky",future:"za {{count}} roky"},many:{regular:"{{count}} rok\u016f",past:"p\u0159ed {{count}} roky",future:"za {{count}} rok\u016f"}},overXYears:{one:{regular:"v\xedce ne\u017e rok",past:"p\u0159ed v\xedce ne\u017e rokem",future:"za v\xedce ne\u017e rok"},few:{regular:"v\xedce ne\u017e {{count}} roky",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} roky"},many:{regular:"v\xedce ne\u017e {{count}} rok\u016f",past:"p\u0159ed v\xedce ne\u017e {{count}} roky",future:"za v\xedce ne\u017e {{count}} rok\u016f"}},almostXYears:{one:{regular:"skoro rok",past:"skoro p\u0159ed rokem",future:"skoro za rok"},few:{regular:"skoro {{count}} roky",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} roky"},many:{regular:"skoro {{count}} rok\u016f",past:"skoro p\u0159ed {{count}} roky",future:"skoro za {{count}} rok\u016f"}}},a=function(e,n,a){var o,r=t[e];o="other"===r.type?r.other:1===n?r.one:n>1&&n<5?r.few:r.many;var u=!0===(null===a||void 0===a?void 0:a.addSuffix),d=null===a||void 0===a?void 0:a.comparison;return(u&&-1===d?o.past:u&&1===d?o.future:o.regular).replace("{{count}}",String(n))};n.default=a,e.exports=n.default},15081:(e,n,t)=>{var a=t(64836).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(35063)),r={date:(0,o.default)({formats:{full:"EEEE, d. MMMM yyyy",long:"d. MMMM yyyy",medium:"d. M. yyyy",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,o.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,o.default)({formats:{full:"{{date}} 'v' {{time}}",long:"{{date}} 'v' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};n.default=r,e.exports=n.default},90226:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=["ned\u011bli","pond\u011bl\xed","\xfater\xfd","st\u0159edu","\u010dtvrtek","p\xe1tek","sobotu"],a={lastWeek:"'posledn\xed' eeee 've' p",yesterday:"'v\u010dera v' p",today:"'dnes v' p",tomorrow:"'z\xedtra v' p",nextWeek:function(e){var n=e.getUTCDay();return"'v "+t[n]+" o' p"},other:"P"},o=function(e,n){var t=a[e];return"function"===typeof t?t(n):t};n.default=o,e.exports=n.default},86109:(e,n,t)=>{var a=t(64836).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(64028)),r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["p\u0159. n. l.","n. l."],abbreviated:["p\u0159. n. l.","n. l."],wide:["p\u0159ed na\u0161\xedm letopo\u010dtem","na\u0161eho letopo\u010dtu"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. \u010dtvrtlet\xed","2. \u010dtvrtlet\xed","3. \u010dtvrtlet\xed","4. \u010dtvrtlet\xed"],wide:["1. \u010dtvrtlet\xed","2. \u010dtvrtlet\xed","3. \u010dtvrtlet\xed","4. \u010dtvrtlet\xed"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["L","\xda","B","D","K","\u010c","\u010c","S","Z","\u0158","L","P"],abbreviated:["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],wide:["leden","\xfanor","b\u0159ezen","duben","kv\u011bten","\u010derven","\u010dervenec","srpen","z\xe1\u0159\xed","\u0159\xedjen","listopad","prosinec"]},defaultWidth:"wide",formattingValues:{narrow:["L","\xda","B","D","K","\u010c","\u010c","S","Z","\u0158","L","P"],abbreviated:["led","\xfano","b\u0159e","dub","kv\u011b","\u010dvn","\u010dvc","srp","z\xe1\u0159","\u0159\xedj","lis","pro"],wide:["ledna","\xfanora","b\u0159ezna","dubna","kv\u011btna","\u010dervna","\u010dervence","srpna","z\xe1\u0159\xed","\u0159\xedjna","listopadu","prosince"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["ne","po","\xfat","st","\u010dt","p\xe1","so"],short:["ne","po","\xfat","st","\u010dt","p\xe1","so"],abbreviated:["ned","pon","\xfate","st\u0159","\u010dtv","p\xe1t","sob"],wide:["ned\u011ble","pond\u011bl\xed","\xfater\xfd","st\u0159eda","\u010dtvrtek","p\xe1tek","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"dop.",pm:"odp.",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"dop.",pm:"odp.",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"},abbreviated:{am:"dop.",pm:"odp.",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"},wide:{am:"dopoledne",pm:"odpoledne",midnight:"p\u016flnoc",noon:"poledne",morning:"r\xe1no",afternoon:"odpoledne",evening:"ve\u010der",night:"noc"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default},1708:(e,n,t)=>{var a=t(64836).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(27758)),r={ordinalNumber:(0,a(t(35568)).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/^(p[\u0159r](\.|ed) Kr\.|p[\u0159r](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,abbreviated:/^(p[\u0159r](\.|ed) Kr\.|p[\u0159r](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,wide:/^(p[\u0159r](\.|ed) Kristem|p[\u0159r](\.|ed) na[\u0161s][\xedi]m letopo[\u010dc]tem|po Kristu|na[\u0161s]eho letopo[\u010dc]tu)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p[\u0159r]/i,/^(po|n)/i]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]\. [\u010dc]tvrtlet[\xedi]/i,wide:/^[1234]\. [\u010dc]tvrtlet[\xedi]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[l\xfaubdk\u010dcsz\u0159rlp]/i,abbreviated:/^(led|[\xfau]no|b[\u0159r]e|dub|kv[\u011be]|[\u010dc]vn|[\u010dc]vc|srp|z[\xe1a][\u0159r]|[\u0159r][\xedi]j|lis|pro)/i,wide:/^(leden|ledna|[\xfau]nora?|b[\u0159r]ezen|b[\u0159r]ezna|duben|dubna|kv[\u011be]ten|kv[\u011be]tna|[\u010dc]erven(ec|ce)?|[\u010dc]ervna|srpen|srpna|z[\xe1a][\u0159r][\xedi]|[\u0159r][\xedi]jen|[\u0159r][\xedi]jna|listopad(a|u)?|prosinec|prosince)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^l/i,/^[\xfau]/i,/^b/i,/^d/i,/^k/i,/^[\u010dc]/i,/^[\u010dc]/i,/^s/i,/^z/i,/^[\u0159r]/i,/^l/i,/^p/i],any:[/^led/i,/^[\xfau]n/i,/^b[\u0159r]e/i,/^dub/i,/^kv[\u011be]/i,/^[\u010dc]vn|[\u010dc]erven(?!\w)|[\u010dc]ervna/i,/^[\u010dc]vc|[\u010dc]erven(ec|ce)/i,/^srp/i,/^z[\xe1a][\u0159r]/i,/^[\u0159r][\xedi]j/i,/^lis/i,/^pro/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[npu\xfas\u010dps]/i,short:/^(ne|po|[\xfau]t|st|[\u010dc]t|p[\xe1a]|so)/i,abbreviated:/^(ned|pon|[\xfau]te|st[r\u0159]|[\u010dc]tv|p[\xe1a]t|sob)/i,wide:/^(ned[\u011be]le|pond[\u011be]l[\xedi]|[\xfau]ter[\xfdy]|st[\u0159r]eda|[\u010dc]tvrtek|p[\xe1a]tek|sobota)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^n/i,/^p/i,/^[\xfau]/i,/^s/i,/^[\u010dc]/i,/^p/i,/^s/i],any:[/^ne/i,/^po/i,/^[\xfau]t/i,/^st/i,/^[\u010dc]t/i,/^p[\xe1a]/i,/^so/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{any:/^dopoledne|dop\.?|odpoledne|odp\.?|p[\u016fu]lnoc|poledne|r[\xe1a]no|odpoledne|ve[\u010dc]er|(v )?noci?/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^dop/i,pm:/^odp/i,midnight:/^p[\u016fu]lnoc/i,noon:/^poledne/i,morning:/r[\xe1a]no/i,afternoon:/odpoledne/i,evening:/ve[\u010dc]er/i,night:/noc/i}},defaultParseWidth:"any"})};n.default=r,e.exports=n.default},95726:(e,n,t)=>{var a=t(64836).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(8066)),r=a(t(15081)),u=a(t(90226)),d=a(t(86109)),i=a(t(1708)),l={code:"cs",formatDistance:o.default,formatLong:r.default,formatRelative:u.default,localize:d.default,match:i.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};n.default=l,e.exports=n.default}}]);
//# sourceMappingURL=date-fns-locale-cs-index-js.6dcf586a.chunk.js.map