"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(e,t,n){n.r(t);var r=n(439),c=n(791),s=n(689),o=n(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,c.useState)({}),n=(0,r.Z)(t,2),i=n[0],u=n[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("9f9d8f1e33dd4ff41c4595e7766fec8d","&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){console.log(e),u(e)})).catch((function(e){console.error(e)}))}),[e]),(0,o.jsxs)(o.Fragment,{children:[i&&i.results&&0===i.results.length&&(0,o.jsx)("p",{children:"We don't have any reviews for this movie."}),(0,o.jsx)("ul",{children:i.results&&i.results.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h2",{children:e.author}),(0,o.jsx)("p",{children:e.content})]},e.id)}))})]})}}}]);
//# sourceMappingURL=681.87b853fb.chunk.js.map