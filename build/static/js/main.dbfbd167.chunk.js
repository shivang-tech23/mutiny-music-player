(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(31),s=c.n(r),i=(c(48),c(49),c(108)),o=c(4);function u(){return Object(o.jsxs)(i.a,{className:"login",children:[Object(o.jsx)("img",{src:"https://i1.sndcdn.com/avatars-000424488873-wzjyiy-t500x500.jpg",alt:"Mutiny Logo"}),Object(o.jsx)("a",{className:"btn btn-danger btn-lg",href:"https://accounts.spotify.com/authorize?client_id=6a82f3811baf470da9c2c103d4048892&response_type=code&redirect_uri=https://mutiny-music-player.herokuapp.com/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",children:"Login To Mutiny"})]})}var l=c(7),j=c(8),d=c.n(j);function f(e){var t=e.track,c=e.chooseTrack;return Object(o.jsxs)("div",{className:"d-flex m-2 align-items-center",style:{cursor:"pointer"},onClick:function(){c(t)},children:[Object(o.jsx)("img",{src:t.albumUrl,alt:t.title,style:{height:"64px",width:"64px"}}),Object(o.jsxs)("div",{className:"ms-3",children:[Object(o.jsx)("div",{children:t.title}),Object(o.jsx)("div",{className:"text-muted",children:t.artist})]})]})}var b=c(41);function h(e){var t=e.accessToken,c=e.trackUri,n=Object(a.useState)(!1),r=Object(l.a)(n,2),s=r[0],i=r[1];return Object(a.useEffect)((function(){return i(!0)}),[c]),t?Object(o.jsx)(b.a,{token:t,showSaveIcon:!0,callback:function(e){e.isPlaying||i(!1)},play:s,uris:c?[c]:[]}):null}var m=c(109),p=c(40),O=new(c.n(p).a)({clientId:"6a82f3811baf470da9c2c103d4048892"});function y(e){var t=function(e){var t=Object(a.useState)(),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)(),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(a.useState)(),f=Object(l.a)(j,2),b=f[0],h=f[1];return Object(a.useEffect)((function(){d.a.post("https://mutiny-music-player.herokuapp.com/login",{code:e}).then((function(e){r(e.data.accessToken),u(e.data.refreshToken),h(e.data.expiresIn),window.history.pushState({},null,"/")})).catch((function(){window.location="/"}))}),[e]),Object(a.useEffect)((function(){if(o&&b){var e=setTimeout((function(){d.a.post("https://mutiny-music-player.herokuapp.com/refresh",{refreshToken:o}).then((function(e){r(e.data.accessToken),h(e.data.expiresIn)})).catch((function(){window.location="/"}))}),1e3*(b-60));return function(){return clearTimeout(e)}}}),[o,b]),n}(e.code),c=Object(a.useState)(""),n=Object(l.a)(c,2),r=n[0],s=n[1],u=Object(a.useState)([]),j=Object(l.a)(u,2),b=j[0],p=j[1],y=Object(a.useState)(),x=Object(l.a)(y,2),v=x[0],k=x[1],g=Object(a.useState)(""),w=Object(l.a)(g,2),S=w[0],T=w[1];function N(e){k(e),s(""),T("")}return Object(a.useEffect)((function(){v&&d.a.get("https://mutiny-music-player.herokuapp.com/lyrics",{params:{track:v.title,artist:v.artist}}).then((function(e){T(e.data.lyrics)}))}),[v]),Object(a.useEffect)((function(){t&&O.setAccessToken(t)}),[t]),Object(a.useEffect)((function(){if(!r)return p([]);if(t){var e=!1;return O.searchTracks(r).then((function(t){e||p(t.body.tracks.items.map((function(e){var t=e.album.images.reduce((function(e,t){return t.height<e.height?t:e}),e.album.images[0]);return{artist:e.artists[0].name,title:e.name,uri:e.uri,albumUrl:t.url}})))})),function(){return e=!0}}}),[r,t]),Object(o.jsxs)(i.a,{className:"d-flex flex-column py-2",style:{height:"100vh"},children:[Object(o.jsx)(m.a.Control,{type:"search",placeholder:"Search Songs/Artists",value:r,onChange:function(e){return s(e.target.value)}}),Object(o.jsxs)("div",{className:"flex-grow-1 my-2",style:{overflowY:"auto"},children:[b.map((function(e){return Object(o.jsx)(f,{track:e,chooseTrack:N},e.uri)})),0===b.length&&Object(o.jsx)("div",{className:"text-center",style:{whiteSpace:"pre"},children:S})]}),Object(o.jsx)("div",{children:Object(o.jsx)(h,{accessToken:t,trackUri:null===v||void 0===v?void 0:v.uri})})]})}var x=new URLSearchParams(window.location.search).get("code");var v=function(){return x?Object(o.jsx)(y,{code:x}):Object(o.jsx)(u,{})};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))},49:function(e,t,c){},87:function(e,t){}},[[107,1,2]]]);
//# sourceMappingURL=main.dbfbd167.chunk.js.map