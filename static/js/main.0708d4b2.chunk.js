(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{12:function(e,t,a){},21:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),i=a.n(r),c=a(2),o=a.n(c),m=a(14),l=a(15),u=a(16),v=a(19),p=a(17),d=a(20),_=a(18),g=a.n(_);a(44);var y=function(e){var t=e.year,a=e.title,n=e.summary,r=e.poster,i=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},a),s.a.createElement("h5",{className:"movie__year"},t),s.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres__genre"},e)}))),s.a.createElement("p",{className:"movie__summmary"},n.slice(0,180),"...")))},f=(a(12),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1}),console.log(n),console.log(a.state.movies);case 7:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader__text"},"Loading")):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(s.a.Component));i.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.0708d4b2.chunk.js.map