(window.webpackJsonptakehome=window.webpackJsonptakehome||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){e.exports=t(30)},,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a,r,s=t(0),u=t.n(s),l=t(6),o=t.n(l),i=t(2),c=t(7),d=t(1),m=t(5),f="hometown",w="favoriteFood",y="loveToDo",v="music",b="messageIf",h="bar",E=(a={},Object(d.a)(a,f,"Where did you grow up?"),Object(d.a)(a,w,"What\u2019s your favorite food?"),Object(d.a)(a,y,"What do you LOVE to do?"),Object(d.a)(a,b,"People should message you if they..."),Object(d.a)(a,v,"What\u2019s the last musician or band you got into?"),Object(d.a)(a,h,"What\u2019s your favorite watering hole?"),a),$=(r={},Object(d.a)(r,f,E[f]),Object(d.a)(r,w,E[w]),Object(d.a)(r,y,E[y]),Object(d.a)(r,b,E[b]),Object(d.a)(r,v,E[v]),Object(d.a)(r,h,E[h]),r);function O(e){switch(e){case f:return["Grew up in $answer.","Hail from $answer.","$answer born and bred.","$answer, born and raised.","Transplant from $answer.","$answer native.","Originally from $answer."];case w:return["Can\u2019t get enough $answer.","Addicted to $answer.","Obsessed with $answer.","Love going out for $answer.","Love eating $answer.","Can\u2019t live without $answer.","$answer please."];case h:return["$answer is my old haunt.","$answer is my Cheers.","$answer is my Paddy\u2019s Pub.","You can always catch me at $answer.","Take me to $answer and I\u2019ll marry you right now.","$answer is my spot.","$answer is my home-away-from-home."];case y:return["I $answer constantly.","Love to $answer.","Can never $answer enough.","I $answer whenever I get the chance.","In my spare time I $answer."];case v:return["I just got into $answer.","Been jamming to $answer recently.","I\u2019d kill to see $answer live.","Love listening to $answer.","$answer is my new obsession.","$answer is my new god."];case b:return["Message if you $answer.","Hit me up if you $answer.","If you $answer, we need to meet.","Send me a message if you $answer.","If you $answer, let\u2019s chat."];default:return[]}}function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p={fieldOrder:[f,w,y,v,b,h],fieldAnswers:{},essayText:""};function j(e){return{type:"MADLIBS.SUBMIT_ESSAY",payload:{essay:e}}}t(24);var I=function(e){var n=e.name,t=e.question,a=e.answer,r=e.handleBlur;return u.a.createElement("li",null,u.a.createElement("label",null,u.a.createElement("div",null,t),u.a.createElement("input",{type:"text",defaultValue:a,onBlur:function(e){return r(n,e.target.value)}})))};t(25);var A=Object(i.b)((function(e){return{fieldOrder:e.fieldOrder,fieldAnswers:e.fieldAnswers}}),(function(e){return{submitField:function(n,t){return e({type:"MADLIBS.SUBMIT_FIELD",payload:{fieldName:(a={id:n,answer:t}).id,answer:a.answer}});var a}}}))((function(e){var n=e.fieldOrder,t=e.fieldAnswers,a=e.submitField;return u.a.createElement("div",{className:"QuestionList__Container"},u.a.createElement("h1",null,"About Me"),u.a.createElement("ul",null,n.map((function(e){return u.a.createElement(I,{key:e,name:e,question:$[e],answer:t[e],handleBlur:a})}))))})),S=t(13),T=function(e){var n=e.fieldName,t=e.fieldAnswer;if(!t)return null;var a=t.answer,r=t.templateIndex,s=O(n)[r].split("$answer"),l=Object(S.a)(s,2),o=l[0],i=l[1];return u.a.createElement(u.a.Fragment,null,o,u.a.createElement("strong",null,o.length?a:g(a)),i+" ")};t(26);var x=Object(i.b)((function(e){return{fieldOrder:e.fieldOrder,fieldAnswers:e.fieldAnswers}}),(function(e){return{submitEssay:function(n){return e(j(n))}}}))((function(e){var n=e.fieldOrder,t=e.fieldAnswers,a=e.submitEssay,r=n.length===Object.values(t).length;return u.a.createElement("div",{className:"EssayPreview__Container"},u.a.createElement("h1",null,"Your essay text"),u.a.createElement("div",{className:"EssayPreview__Sentences"},n.map((function(e){return u.a.createElement(T,{key:e,fieldAnswer:t[e],fieldName:e})}))),r&&u.a.createElement("button",{onClick:function(){return function(){var e=n.map((function(e){var n=t[e],a=n.answer,r=n.templateIndex;return g(O(e)[r].replace("$answer",a))}));a(e.join(" "))}()}},"Edit"))})),B=(t(27),function(e){var n=e.textContent,t=e.handleClick;return u.a.createElement("button",{onClick:function(){return t()}},n)});t(28);var C=Object(i.b)((function(e){return{essayText:e.essayText}}),(function(e){return{startOver:function(){return e({type:"MADLIBS.START_OVER"})},submitEssay:function(n){return e(j(n))}}}))((function(e){var n=e.essayText,t=e.startOver,a=e.submitEssay;return u.a.createElement("div",{className:"EssayEditor__Container"},u.a.createElement("h1",null,"Your essay text"),u.a.createElement("textarea",{defaultValue:n,onBlur:function(e){return a(e.target.value)}}),u.a.createElement(B,{handleClick:function(){return t()},textContent:"Start over"}))}));t(29);var L=Object(i.b)((function(e){return{essayText:e.essayText}}))((function(e){var n=e.essayText;return u.a.createElement("div",{className:"matchArea"},n.length?u.a.createElement(C,null):u.a.createElement(u.a.Fragment,null,u.a.createElement(A,null),u.a.createElement(x,null)))})),M=Object(c.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"MADLIBS.SUBMIT_FIELD":var t=n.payload,a=t.answer,r=t.fieldName,s=e.fieldAnswers,u=s[r],l=function(){return u&&u.answer===a};if(!a.length||l())return e;var o=O(r).length,i=Math.floor(Math.random()*o);return Object(m.a)({},e,{fieldAnswers:Object(m.a)({},s,Object(d.a)({},r,{answer:a,templateIndex:i}))});case"MADLIBS.SUBMIT_ESSAY":var c=n.payload.essay;return Object(m.a)({},e,{essayText:c});case"MADLIBS.START_OVER":return Object(m.a)({},p);default:return e}}));o.a.render(u.a.createElement(i.a,{store:M},u.a.createElement(L,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.a58af816.chunk.js.map