"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[94935,19455,14950,13183,78650,59900],{74702:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}},n=function(e,a,n){var d,r=t[e];return d="string"===typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"over "+d:d+" geleden":d};a.default=n,e.exports=a.default},31302:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=n(t(35063)),r={date:(0,d.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,d.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,d.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},81309:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'vorige' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"},n=function(e,a,n,d){return t[e]};a.default=n,e.exports=a.default},81324:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=n(t(64028)),r={ordinalNumber:function(e,a){return Number(e)+"e"},era:(0,d.default)({values:{narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,d.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"}},defaultWidth:"wide"})};a.default=r,e.exports=a.default},58819:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=n(t(27758)),r={ordinalNumber:(0,n(t(35568)).default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,d.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,d.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,d.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,d.default)({matchPatterns:{narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},defaultParseWidth:"any"}),dayPeriod:(0,d.default)({matchPatterns:{any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},94289:(e,a,t)=>{var n=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=n(t(74702)),r=n(t(31302)),i=n(t(81309)),o=n(t(81324)),u=n(t(58819)),s={code:"nl-BE",formatDistance:d.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=s,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-nl-BE-index-js.c2e1e4b8.chunk.js.map