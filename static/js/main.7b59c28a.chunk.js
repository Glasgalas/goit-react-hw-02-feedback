(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"Statistics_wrapper__2w_Y7",text:"Statistics_text__11dKU"}},10:function(e,t,a){e.exports={button:"FeedbackOptions_button__3Yw3u"}},17:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(5),s=a.n(r),o=(a(17),a(6)),i=a(7),d=a(8),b=a(12),j=a(11),l=a(0),u=function(e){var t=e.title,a=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:t}),a]})},h=a(1),x=a.n(h),p=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:x.a.wrapper,children:[Object(l.jsxs)("p",{className:x.a.text,children:["Good: ",t," \ud83d\ude42"]}),Object(l.jsxs)("p",{className:x.a.text,children:["Neutral: ",a," \ud83d\ude10"]}),Object(l.jsxs)("p",{className:x.a.text,children:["Bad: ",n," \u2639"]}),Object(l.jsxs)("p",{className:x.a.text,children:["Total: ",c," \ud83d\udcc8"]}),Object(l.jsxs)("p",{className:x.a.text,children:["Positive feedback: ",r,"% \u2b50"]})]})})},O=a(9),v=a.n(O),f=a(10),g=a.n(f),m=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)("button",{className:g.a.button,type:"button",name:e,onClick:a,children:e},v.a.generate())}))})})},k=function(e){var t=e.message;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("p",{children:t})})},F=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=100*e.state.good/e.countTotalFeedback();return Math.round(t)},e.onLeaveFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(),s=Object.keys(this.state);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{title:"Please leave feedback",children:Object(l.jsx)(m,{options:s,onLeaveFeedback:this.onLeaveFeedback})}),0===c?Object(l.jsx)(k,{message:"No feedback given"}):Object(l.jsx)(u,{title:"Statistics",children:Object(l.jsx)(p,{good:t,neutral:a,bad:n,total:c,positivePercentage:r})})]})}}]),a}(n.Component);a(27);var w=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(F,{})})};a(28);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.7b59c28a.chunk.js.map