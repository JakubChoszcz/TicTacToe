(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(4),s=c.n(n),l=c(5),o=c(3),r=c(2),i=c(0),b=function(e){var t=e.open,c=e.onClose,a=e.matchResult,n=e.isDark;return t?s.a.createPortal(Object(i.jsx)("div",{className:"OFFSET".concat(n?" dark":""),onClick:c,children:Object(i.jsx)("div",{className:"matchResult",children:Object(i.jsx)("h3",{className:"matchResult-h",children:a})})}),document.getElementById("portal")):null},j=function(e){var t=e.open,c=e.onClose,a=e.isDark;return t?s.a.createPortal(Object(i.jsx)("div",{className:"OFFSET".concat(a?" dark":""),children:Object(i.jsxs)("div",{className:"about",children:[Object(i.jsx)("h3",{className:"about-h",children:"About"}),Object(i.jsx)("button",{className:"about-button",onClick:c,children:Object(i.jsx)("i",{className:"fas fa-times"})}),Object(i.jsx)("p",{className:"about-text",children:"This is just a simple tic-tac-toe game, but if you want to know more about this app or the author, check out these links"}),Object(i.jsxs)("ul",{className:"about-ul",children:[Object(i.jsx)("li",{className:"about-li about-i",children:Object(i.jsx)("a",{href:"https://github.com/JakubChoszcz/TicTacToe",target:"_blank",className:"about-link",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-github about-i"})})}),Object(i.jsx)("li",{className:"about-li about-i",children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/jakub-choszcz-0b0323213/",target:"_blank",className:"about-link",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-linkedin about-i"})})}),Object(i.jsx)("li",{className:"about-li about-i",children:Object(i.jsx)("a",{href:"https://www.facebook.com/kuba.choszcz.5/",target:"_blank",className:"about-link",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-facebook about-i"})})}),Object(i.jsx)("li",{className:"about-li about-i",children:Object(i.jsx)("a",{href:"https://www.instagram.com/j_kuboszczyk/",target:"_blank",className:"about-link",rel:"noreferrer",children:Object(i.jsx)("i",{className:"fab fa-instagram about-i"})})})]})]})}),document.getElementById("portal")):null},u=function(e){var t=e.open,c=e.onClose,a=e.firstAiMove;return t?s.a.createPortal(Object(i.jsx)("div",{className:"OFFSET",children:Object(i.jsxs)("div",{className:"welcome",children:[Object(i.jsx)("h3",{className:"welcome-h",children:"Welcome to TicTacToe"}),Object(i.jsx)("p",{className:"welcome-title",children:"Choose team:"}),Object(i.jsxs)("div",{className:"welcome-buttons",children:[Object(i.jsx)("button",{className:"welcome-button",onClick:c,children:"X"}),Object(i.jsx)("button",{className:"welcome-button",onClick:function(){return a(),c()},children:"O"})]})]})}),document.getElementById("portal")):null},d=["X","O"],O={0:"",1:"",2:"",3:"",4:"",5:"",6:"",7:"",8:""},h={X:0,O:0},m=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],f=function(){var e=Object(a.useState)(null===sessionStorage.getItem("isWelcomeOpen")),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),f=Object(r.a)(s,2),x=f[0],N=f[1],k=Object(a.useState)(""),v=Object(r.a)(k,2),p=v[0],C=v[1],g=Object(a.useState)(!1),w=Object(r.a)(g,2),S=w[0],T=w[1],y=Object(a.useState)(d[0]),z=Object(r.a)(y,2),E=z[0],I=z[1],F=Object(a.useState)(O),M=Object(r.a)(F,2),A=M[0],D=M[1],P=Object(a.useState)(h),R=Object(r.a)(P,2),X=R[0],_=R[1],B=Object(a.useState)(!0),W=Object(r.a)(B,2),J=W[0],q=W[1],G=Object(a.useState)(!1),H=Object(r.a)(G,2),K=H[0],L=H[1],Q=function(e){if(""===A[e])if(D((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e,E))})),J){var t=E===d[0]?d[1]:d[0],c=[];Object.keys(A).forEach((function(t){""===A[t]&&parseInt(t,10)!==e&&c.push(t)}));var a=Math.floor(Math.random()*(c.length-0)+0);D((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},c[a],t))}))}else{I(E===d[0]?d[1]:d[0])}};return function(){for(var e,t,c,a=null,n=Object.values(A).filter((function(e){return""===e})).length,s=0;s<m.length;s++)e=A[m[s][0]],t=A[m[s][1]],c=A[m[s][2]],e===t&&e===c&&t===c&&""!==e&&""!==t&&""!==c&&(a=A[m[s][0]]);null!==a?(N(!0),C(a+" Won!"),D(O),I(d[0]),_((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},a,e[a]+1))}))):null===a&&0===n&&(N(!0),C("Draw!"),D(O),I(d[0]))}(),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"app".concat(K?" dark":""),children:[Object(i.jsxs)("div",{className:"board",children:[Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(0)},children:A[0]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(1)},children:A[1]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(2)},children:A[2]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(3)},children:A[3]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(4)},children:A[4]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(5)},children:A[5]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(6)},children:A[6]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(7)},children:A[7]}),Object(i.jsx)("div",{className:"board-field",onClick:function(){return Q(8)},children:A[8]})]}),Object(i.jsxs)("div",{className:"panel",children:[Object(i.jsxs)("div",{className:"scoreboard",children:[Object(i.jsxs)("p",{className:"score",children:["Player X: ",X.X]}),Object(i.jsxs)("p",{className:"score",children:["Player O: ",X.O]})]}),Object(i.jsxs)("div",{className:"controls",children:[Object(i.jsx)("button",{className:"control-button",onClick:function(){return _(h)},children:"Reset Scoreboard"}),Object(i.jsxs)("button",{className:"control-button",onClick:function(){return q(!J)},children:["Turn ",J?"Off":"On"," AI"]}),Object(i.jsx)("button",{className:"control-button",onClick:function(){return T(!0)},children:"About"}),Object(i.jsx)("button",{className:"control-button",onClick:function(){return L(!K)},children:"Change Theme"})]})]}),Object(i.jsx)(u,{open:c,onClose:function(){return n(sessionStorage.setItem("isWelcomeOpen","false"))},firstAiMove:function(){return function(){var e=Math.floor(9*Math.random());D((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e,E))})),I(d[1])}()}}),Object(i.jsx)(j,{open:S,onClose:function(){return T(!1)},isDark:K}),Object(i.jsx)(b,{open:x,onClose:function(){return N(!1)},matchResult:p,isDark:K})]})})};c(12);s.a.render(Object(i.jsx)(f,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.329e89fc.chunk.js.map