"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[16409,93414,77285,30639,98371,24113],{23140:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"menys d'un segon",eleven:"menys d'onze segons",other:"menys de {{count}} segons"},xSeconds:{one:"1 segon",other:"{{count}} segons"},halfAMinute:"mig minut",lessThanXMinutes:{one:"menys d'un minut",eleven:"menys d'onze minuts",other:"menys de {{count}} minuts"},xMinutes:{one:"1 minut",other:"{{count}} minuts"},aboutXHours:{one:"aproximadament una hora",other:"aproximadament {{count}} hores"},xHours:{one:"1 hora",other:"{{count}} hores"},xDays:{one:"1 dia",other:"{{count}} dies"},aboutXWeeks:{one:"aproximadament una setmana",other:"aproximadament {{count}} setmanes"},xWeeks:{one:"1 setmana",other:"{{count}} setmanes"},aboutXMonths:{one:"aproximadament un mes",other:"aproximadament {{count}} mesos"},xMonths:{one:"1 mes",other:"{{count}} mesos"},aboutXYears:{one:"aproximadament un any",other:"aproximadament {{count}} anys"},xYears:{one:"1 any",other:"{{count}} anys"},overXYears:{one:"m\xe9s d'un any",eleven:"m\xe9s d'onze anys",other:"m\xe9s de {{count}} anys"},almostXYears:{one:"gaireb\xe9 un any",other:"gaireb\xe9 {{count}} anys"}},i=function(e,a,i){var d,n=t[e];return d="string"===typeof n?n:1===a?n.one:11===a&&n.eleven?n.eleven:n.other.replace("{{count}}",String(a)),null!==i&&void 0!==i&&i.addSuffix?i.comparison&&i.comparison>0?"en "+d:"fa "+d:d};a.default=i,e.exports=a.default},3319:(e,a,t)=>{var i=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=i(t(35063)),n={date:(0,d.default)({formats:{full:"EEEE, d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,d.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,d.default)({formats:{full:"{{date}} 'a les' {{time}}",long:"{{date}} 'a les' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=n,e.exports=a.default},45824:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'el' eeee 'passat a la' LT",yesterday:"'ahir a la' p",today:"'avui a la' p",tomorrow:"'dem\xe0 a la' p",nextWeek:"eeee 'a la' p",other:"P"},i={lastWeek:"'el' eeee 'passat a les' p",yesterday:"'ahir a les' p",today:"'avui a les' p",tomorrow:"'dem\xe0 a les' p",nextWeek:"eeee 'a les' p",other:"P"},d=function(e,a,d,n){return 1!==a.getUTCHours()?i[e]:t[e]};a.default=d,e.exports=a.default},14583:(e,a,t)=>{var i=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=i(t(64028)),n={ordinalNumber:function(e,a){var t=Number(e),i=t%100;if(i>20||i<10)switch(i%10){case 1:case 3:return t+"r";case 2:return t+"n";case 4:return t+"t"}return t+"\xe8"},era:(0,d.default)({values:{narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","despr\xe9s de Crist"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,d.default)({values:{narrow:["GN","FB","M\xc7","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","mar\xe7","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","mar\xe7","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"mat\xed",afternoon:"tarda",evening:"vespre",night:"nit"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del mat\xed",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},defaultFormattingWidth:"wide"})};a.default=n,e.exports=a.default},21179:(e,a,t)=>{var i=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=i(t(27758)),n={ordinalNumber:(0,i(t(35568)).default)({matchPattern:/^(\d+)(\xe8|r|n|r|t)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,d.default)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a. de C.|d. de C.)/i,wide:/^(abans de Crist|despr[e\xe9]s de Crist)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^aC/i,/^dC/i],abbreviated:[/^(a. de C.)/i,/^(d. de C.)/i],wide:[/^(abans de Crist)/i,/^(despr[e\xe9]s de Crist)/i]},defaultParseWidth:"wide"}),quarter:(0,d.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xe8|r|n|r|t)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,d.default)({matchPatterns:{narrow:/^(GN|FB|M\xc7|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,abbreviated:/^(gen.|febr.|mar\xe7|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,wide:/^(gener|febrer|mar\xe7|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^GN/i,/^FB/i,/^M\xc7/i,/^AB/i,/^MG/i,/^JN/i,/^JL/i,/^AG/i,/^ST/i,/^OC/i,/^NV/i,/^DS/i],abbreviated:[/^gen./i,/^febr./i,/^mar\xe7/i,/^abr./i,/^maig/i,/^juny/i,/^jul./i,/^ag./i,/^set./i,/^oct./i,/^nov./i,/^des./i],wide:[/^gener/i,/^febrer/i,/^mar\xe7/i,/^abril/i,/^maig/i,/^juny/i,/^juliol/i,/^agost/i,/^setembre/i,/^octubre/i,/^novembre/i,/^desembre/i]},defaultParseWidth:"wide"}),day:(0,d.default)({matchPatterns:{narrow:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,short:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,abbreviated:/^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,wide:/^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],abbreviated:[/^dg./i,/^dl./i,/^dt./i,/^dm./i,/^dj./i,/^dv./i,/^ds./i],wide:[/^diumenge/i,/^dilluns/i,/^dimarts/i,/^dimecres/i,/^dijous/i,/^divendres/i,/^disssabte/i]},defaultParseWidth:"wide"}),dayPeriod:(0,d.default)({matchPatterns:{narrow:/^(a|p|mn|md|(del|de la) (mat\xed|tarda|vespre|nit))/i,abbreviated:/^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i,wide:/^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (mat\xed|tarda|vespre|nit))/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mitjanit/i,noon:/^migdia/i,morning:/mat\xed/i,afternoon:/tarda/i,evening:/vespre/i,night:/nit/i}},defaultParseWidth:"any"})};a.default=n,e.exports=a.default},52606:(e,a,t)=>{var i=t(64836).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=i(t(23140)),n=i(t(3319)),r=i(t(45824)),o=i(t(14583)),s=i(t(21179)),m={code:"ca",formatDistance:d.default,formatLong:n.default,formatRelative:r.default,localize:o.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=m,e.exports=a.default}}]);
//# sourceMappingURL=date-fns-locale-ca-index-js.b0739119.chunk.js.map