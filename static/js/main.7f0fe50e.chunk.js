(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),i=n.n(r),o=(n(11),n(2)),l=n.n(o),s=n(5),u=n(1),p=(n(13),function(e){var t=e.title,n=e.calories,a=e.image,r=e.ingredients;return c.a.createElement("div",{className:"recipe",style:{width:"40vw",margin:"20px 0px",background:"white",borderRadius:"20px"}},c.a.createElement("h1",{style:{textAlign:"center"}},t),c.a.createElement("p",{style:{textAlign:"center"}},"Calories : ",Math.floor(n)),c.a.createElement("ol",null,r.map((function(e){return c.a.createElement("li",null,e)}))),c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("img",{src:a,style:{width:"200px",height:"200px"},alt:""})))});var m=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("chicken"),o=Object(u.a)(i,2),m=o[0],d=o[1],f=Object(a.useState)([]),h=Object(u.a)(f,2),g=h[0],v=h[1];Object(a.useEffect)((function(){b()}),[m]);var b=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("8f8dfe66","&app_key=").concat("2e8f2bd6ad44c2e51ba4c0a689db255c"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,v(n.hits),console.log(n.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)},value:n,style:{padding:"5px 10px"}}),c.a.createElement("button",{onClick:function(){d(n)},style:{padding:"5px 10px",cursor:"pointer"}},"Search")),c.a.createElement("div",{className:"recipes"},g.map((function(e){return c.a.createElement(p,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredientLines})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.7f0fe50e.chunk.js.map