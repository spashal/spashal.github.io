(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{212:function(e,t,a){},213:function(e,t,a){},245:function(e,t,a){},351:function(e,t,a){"use strict";a.r(t);var n=a(2),o=a(0),c=a.n(o),r=a(17),i=a.n(r),s=(a(212),a(56)),l=a(54),d=(a(213),a(214),a(58),a(11)),j=(a(353),a(24)),h=a.n(j),b=a(420),g=a(441);var u=a(101),p=a(102),O=a(64),m=a(186),x=a(185),f=function(e){Object(m.a)(a,e);var t=Object(x.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.onChangeEmail=n.onChangeEmail.bind(Object(O.a)(n)),n.onChangePassword=n.onChangePassword.bind(Object(O.a)(n)),n.onSubmit=n.onSubmit.bind(Object(O.a)(n)),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){h.a.get("http://localhost:4000/user/legit",{withCredentials:!0}).then((function(e){console.log(e.data,"this is the response"),e.data&&(window.location="/blog",console.log(document.cookie+"this cookie"))})).catch((function(e){console.log(e)})),console.log(Date())}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t={email:this.state.email,password:this.state.password};h.a.post("http://localhost:4000/user/login",t,{withCredentials:!0}).then((function(e){200==e.status&&(alert("Welcome "+e.data.name),window.location="/dashboard")})).catch((function(e){console.log(e),window.location="/login",alert("Couldn't log you in. Please try again")}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{align:"center",children:[Object(n.jsx)("h1",{children:"Welcome to your Login Page"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Email: "}),Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.email,onChange:this.onChangeEmail})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Password: "}),Object(n.jsx)("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(n.jsx)(g.a,{textAlign:"center",margin:2,children:Object(n.jsx)(b.a,{variant:"contained",onClick:this.onSubmit,color:"primary",children:"Login"})}),Object(n.jsx)("h3",{children:"Not registered yet!"}),Object(n.jsx)("a",{href:"http://localhost:3000/register",children:"Register Here"})]})]})}}]),a}(o.Component);var v=function(){return Object(o.useEffect)((function(){h.a.get("http://localhost:4000/user/legit",{withCredentials:!0}).then((function(e){e.data||(window.location="/login")})).catch((function(e){console.log(e)})),h.a.get("http://localhost:4000/user/logout",{withCredentials:!0}).then((function(e){alert("Logged out successfully"),window.location="/login"})).catch((function(e){console.log(e),alert("Couldn't logout. Please try again or after some time.")}))})),Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:"Thank you for visiting us!"})})},w=a(7),y=(a(429),a(428),a(423),a(442),a(444),a(431),a(424),a(425),a(426),a(427),a(181),a(430),a(179),a(178),a(180),a(107),a(422)),k=(a(33),240);Object(y.a)((function(e){return{root:{display:"flex"},drawer:Object(w.a)({},e.breakpoints.up("sm"),{width:k,flexShrink:0}),appBar:Object(w.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(k,"px)"),marginLeft:k}),menuButton:Object(w.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:k},content:{flexGrow:1,padding:e.spacing(3)}}}));var C=a(432),S=a(448),P=a(447),L=a(446),I=a(51),R=a(450),B=a(452),E=a(453),T=a(454);function D(e){var t=o.useState(!0),a=Object(d.a)(t,2),c=(a[0],a[1]),r=Object(l.e)();o.useEffect((function(){e.blog&&c(!1)}),[]);return Object(n.jsx)(C.a,{sx:{flexGrow:1},children:Object(n.jsxs)(R.a,{position:"static",color:"transparent",elevation:"0",style:{marginBottom:"auto"},children:[Object(n.jsxs)(B.a,{children:[Object(n.jsx)(E.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(n.jsx)(L.a,{variant:"h3",component:"div",sx:{flexGrow:1},children:"Palash Sharma"}),Object(n.jsx)(P.a,{color:"inherit",onClick:function(){r.push("/about")},children:"About me"}),Object(n.jsx)(P.a,{color:"inherit",onClick:function(){r.push("/blog")},children:"My Blog"})]}),Object(n.jsx)(T.a,{})]})})}var N=a(455),W=a(79);function _(){return Object(n.jsxs)(L.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ","Palash Sharma"," ",(new Date).getFullYear(),"."]})}function A(){return Object(n.jsx)(g.a,{sx:{flexGrow:1},children:Object(n.jsx)(N.a,{children:Object(n.jsxs)(S.a,{children:[Object(n.jsxs)(L.a,{variant:"h6",align:"center",component:"p",children:["Find me at "," ",Object(n.jsx)(W.SocialIcon,{url:"https://www.linkedin.com/in/palash-sharma-4a49a5200/",target:"_blank",bgColor:"white",fgColor:"black"}),Object(n.jsx)(W.SocialIcon,{url:"https://twitter.com/PalashS47534442?s=09",target:"_blank",bgColor:"white",fgColor:"black"}),Object(n.jsx)(W.SocialIcon,{url:"mailto:palash.sharma@students.iiit.ac.in",target:"_blank",bgColor:"white",fgColor:"black"}),Object(n.jsx)(W.SocialIcon,{url:"https://www.instagram.com/a_sharmaniac?r=nametag",target:"_blank",bgColor:"white",fgColor:"black"})]}),Object(n.jsx)(_,{})]})})})}C.a;var G=Object(y.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function U(){var e=c.a.useState([]),t=Object(d.a)(e,2),a=t[0],r=t[1],i=Object(l.e)(),s=Object(o.useState)(!1),j=Object(d.a)(s,2);j[0],j[1];Object(o.useEffect)((function(){h.a.get(I.backendURL+"blogsite/allArticles").then((function(e){e.data.error?console.log("An error received with the response",e.data.error):(r(e.data.data),console.log("This is the data recieved",e.data.data))})).catch((function(e){console.log(e)}))}),[]);G();return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(D,{blog:!0}),Object(n.jsx)("main",{children:Object(n.jsx)("div",{children:a.map((function(e,t){return Object(n.jsxs)(S.a,{children:[Object(n.jsx)(L.a,{component:"div",align:"center",children:Object(n.jsx)(P.a,{disableRipple:!0,variant:"h1",onClick:function(){return t=e.title,void i.push("/singlePage?blog_title="+t);var t},children:Object(n.jsx)(L.a,{variant:"h4",style:{fontFamily:"monospace",fontWeight:"bold"},children:e.title})})}),Object(n.jsx)(L.a,{sx:{mb:1.5},color:"text.secondary",align:"center",children:e.desc}),Object(n.jsx)(L.a,{variant:"body2",align:"right",children:e.dateCreatedString}),Object(n.jsx)(P.a,{onClick:function(){!function(e){var t={title:e};console.log(t,"to be deleted"),h.a.post(I.backendURL+"articles/deleteArticle",t,{withCredentials:!0}).then((function(e){i.push("/dashboard")})).catch((function(e){console.log("this error",e)}))}(e.title)},children:"Delete"})]})}))})}),Object(n.jsx)(A,{})]})}var M=a(449),F=(a(245),C.a,Object(y.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}})));function H(){var e=Object(l.f)().search,t=new URLSearchParams(e).get("blog_title"),a=Object(o.useState)(t),r=Object(d.a)(a,2),i=r[0],s=(r[1],Object(o.useState)(null)),j=Object(d.a)(s,2),b=j[0],g=j[1],u=Object(o.useState)(!1),p=Object(d.a)(u,2);p[0],p[1];console.log(i),Object(o.useEffect)((function(){var e={title:t};h.a.post(I.backendURL+"blogsite/getBlogArticle",e).then((function(e){e.data.error?console.log(e.data.message,e.data.error):(console.log(e.data.data),g(e.data.data))})).catch((function(e){console.log(e)}))}),[]);F();return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(D,{blog:!0}),Object(n.jsx)("div",{style:{height:"75px"}}),Object(n.jsx)(M.a,{sx:{minWidth:275},children:Object(n.jsxs)(S.a,{children:[Object(n.jsx)(L.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,align:"right",children:b?b.dateCreatedString:"Loading"}),Object(n.jsx)(L.a,{variant:"h2",component:"div",align:"center",children:b?b.title:"Loading"}),Object(n.jsx)(L.a,{sx:{mb:1.5},color:"text.secondary"}),Object(n.jsx)("div",{children:b?Object(n.jsx)("div",{dangerouslySetInnerHTML:{__html:b.text}}):"Loading"})]})})]})}var z=a(440),J=a(184),K=a.n(J),Y=(a(349),a(355));function $(){var e=Object(o.useState)("write here..."),t=Object(d.a)(e,2),a=t[0],c=t[1],r=Object(o.useState)("title..."),i=Object(d.a)(r,2),s=i[0],l=i[1],j=Object(o.useState)("desrciption here..."),b=Object(d.a)(j,2),g=b[0],u=b[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(Y.a,{children:[Object(n.jsx)(z.a,{value:s,onChange:function(e){return t=e.target.value,void l(t);var t},style:{margin:"5%"},children:"Title"}),Object(n.jsx)(z.a,{value:g,onChange:function(e){return t=e.target.value,u(t),void console.log("values are",t);var t},style:{margin:"5%"},children:"Short Description"}),Object(n.jsx)(K.a,{value:a,onChange:function(e){c(e)}}),Object(n.jsx)(P.a,{color:"primary",onClick:function(){return function(){var e={title:s,description:g,text:a};h.a.post(I.backendURL+"articles/recordArticle",e,{withCredentials:!0}).then((function(e){e.error?console.log("Error recieved from server:",e.error):console.log(e.message)})).catch((function(e){console.log(e)}))}()},variant:"contained",style:{borderRadius:50},children:"Done"})]})})}var q=a(438),Q=a.p+"static/media/sherlock.f705c1d8.png",V=a(439);var X=Object(y.a)((function(e){return{root:{margin:"auto",padding:"auto"},paper:{height:300,width:100},control:{padding:e.spacing(2)},root2:{height:500,maxWidth:900},demo:{backgroundColor:e.palette.background.paper,gridRow:10,height:"300px"},title:{margin:e.spacing(4,0,2)},footer:{backgroundColor:e.palette.background.paper,bottom:"5%",position:"fixed"}}}));function Z(e){var t=X(),a=Object(o.useState)(!1),c=Object(d.a)(a,2),r=(c[0],c[1],Object(o.useState)()),i=Object(d.a)(r,2);i[0],i[1],Object(l.e)();return Object(n.jsxs)("div",{children:[Object(n.jsx)(D,{}),Object(n.jsx)("div",{children:Object(n.jsx)(q.a,{container:!0,direction:"column",justify:"center",children:Object(n.jsx)(q.a,{item:!0,children:Object(n.jsxs)(q.a,{item:!0,container:!0,className:t.root,direction:"row",justify:"center",children:[Object(n.jsx)(q.a,{item:!0,className:t.root,style:{maxWidth:"35%"},children:Object(n.jsx)(V.a,{children:Object(n.jsx)("img",{src:Q,style:{maxWidth:"100%"}})})}),Object(n.jsxs)(q.a,{item:!0,className:t.root,children:[Object(n.jsx)(L.a,{variant:"h2",children:"Hi!"}),Object(n.jsx)("br",{}),Object(n.jsx)(L.a,{variant:"h5",children:"I am Palash Sharma"}),Object(n.jsx)("br",{})," ",Object(n.jsx)("br",{}),Object(n.jsxs)(L.a,{children:["I am a Computer Science sophomore at IIIT Hyderabad.",Object(n.jsx)("br",{}),"I like to draw ocassionaly and also play music once in a while.",Object(n.jsx)("br",{}),"Apart from discussing my views on random topics, you'll find me ",Object(n.jsx)("br",{}),"supporting Manchester United so please pray that my taste in football improve.",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"If you wish to discuss anything with me, ",Object(n.jsx)("br",{}),"feel free to reach out! ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),"Do read my blogs and show some love ","<","3"]})]})]})})})}),Object(n.jsx)(A,{})]})}var ee=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("br",{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:U}),Object(n.jsx)(l.a,{path:"/loginKarnaImpossibleHai112358",component:f}),Object(n.jsx)(l.a,{path:"/logout",component:v}),Object(n.jsx)(l.a,{path:"/blog",component:U}),Object(n.jsx)(l.a,{path:"/singlePage",component:H}),Object(n.jsx)(l.a,{path:"/add",component:$}),Object(n.jsx)(l.a,{path:"/about",component:Z})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(n.jsx)(ee,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t){e.exports={frontendURL:"http://localhost:3000/",backendURL:"https://blog-site.palash-sharma.workers.dev/"}}},[[351,1,2]]]);
//# sourceMappingURL=main.1ffd3915.chunk.js.map