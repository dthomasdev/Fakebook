(this.webpackJsonpspamspacev2=this.webpackJsonpspamspacev2||[]).push([[0],{44:function(e,t,a){e.exports=a(60)},49:function(e,t,a){},56:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),o=a.n(r),i=(a(49),a(23)),c=a(14),l=a(15),u=a(17),m=a(16),h=(a(32),a(42)),p=a(43),d=a(22),v=a(30),f=a(21),E=a(40),k=a(20),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{className:"status_card"},s.a.createElement(v.a.Title,null,this.props.username),s.a.createElement(v.a.Body,null,this.props.status),s.a.createElement(E.a,null,s.a.createElement(k.a,{md:11}),s.a.createElement(k.a,{md:1},s.a.createElement("div",{className:"buttonbox"},s.a.createElement(f.a,{variant:"outline-success",onClick:function(){return e.props.increaseLikes()}},"\u25b2"),s.a.createElement(f.a,{variant:"outline-danger",onClick:function(){return e.props.decreaseLikes()}},"\u25bc"),s.a.createElement("div",{className:"likes"},this.props.likes))))))}}]),a}(s.a.Component),b=a(19),O=a(35),y=a.n(O),S=(a(52),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).id=1,n.state={username:"",status:""},y.a.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"show",hideMethod:"fadeOut"},n}return Object(l.a)(a,[{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t)}},{key:"submitHandler",value:function(e){e.preventDefault(),this.props.onpost(this.id,this.state.username,this.state.status,0),y.a.success("You should be able to view this on the timeline","Posted!"),this.setState({username:"",status:""}),this.id++}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{onSubmit:function(t){return e.submitHandler(t)},className:"updateform"},s.a.createElement(b.a.Group,{controlId:"username"},s.a.createElement(b.a.Control,{name:"username",type:"text",value:this.state.username,placeholder:"Username",onChange:function(t){return e.handleChange(t)},required:!0})),s.a.createElement(b.a.Group,{controlId:"status"},s.a.createElement(b.a.Control,{name:"status",type:"text",value:this.state.status,placeholder:"Status",onChange:function(t){return e.handleChange(t)},required:!0})),s.a.createElement(f.a,{variant:"outline-light",type:"submit"},"Post")))}}]),a}(s.a.Component)),j=a(29),w=a(5),N=(a(56),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={posts:[]},n}return Object(l.a)(a,[{key:"createposts",value:function(){var e=this;return this.state.posts.map((function(t,a){return s.a.createElement(g,{key:a,id:t.id,username:t.username,status:t.status,likes:t.likes,increaseLikes:function(a){return e.increaseLikes(t.id)},decreaseLikes:function(a){return e.decreaseLikes(t.id)}})}))}},{key:"updateStatus",value:function(e,t,a,n){var s=this,r={id:e,username:t,status:a,likes:n};this.setState((function(e){return{posts:e.posts.concat(r)}}),(function(){localStorage.setItem("posts",JSON.stringify(s.state.posts))}))}},{key:"increaseLikes",value:function(e){var t=this;this.state.posts.forEach((function(t){if(t.id===e)return Object(i.a)(Object(i.a)({},t),{},{likes:t.likes++})})),this.setState((function(e){return{posts:e.posts}}),(function(){localStorage.setItem("posts",JSON.stringify(t.state.posts))}))}},{key:"decreaseLikes",value:function(e){var t=this;this.state.posts.forEach((function(t){if(t.id===e)return Object(i.a)(Object(i.a)({},t),{},{likes:t.likes--})})),this.setState((function(e){return{posts:e.posts}}),(function(){localStorage.setItem("posts",JSON.stringify(t.state.posts))}))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("posts");this.setState({posts:JSON.parse(e)||[{id:0,username:"Daniel Thomas",status:"Hello World!",likes:0}]})}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(j.a,null,s.a.createElement(d.a,{bg:"light",expand:"md",className:"nav"},s.a.createElement(d.a.Brand,null,"FakeBook"),s.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(d.a.Collapse,{id:"basic-navbar-controls"},s.a.createElement(p.a,{className:"mr-auto navlinks"},s.a.createElement("div",{className:"navlinks"},s.a.createElement(j.b,{to:"/"},"Timeline"),s.a.createElement(j.b,{to:"/update"},"New"))))),s.a.createElement(h.a,{className:"main"},s.a.createElement(w.c,null,s.a.createElement(w.a,{path:"/update"},s.a.createElement(S,{onpost:function(t,a,n,s){return e.updateStatus(t,a,n,s)}})),s.a.createElement(w.a,{exact:!0,path:"/"},this.createposts()),s.a.createElement(w.a,{path:"/"},s.a.createElement("h1",null,"ERROR 404 NOT FOUND"))))))}}]),a}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d2386983.chunk.js.map