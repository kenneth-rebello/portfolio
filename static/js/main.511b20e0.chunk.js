(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,a,t){e.exports=t.p+"static/media/KennethsResume.f55ba638.pdf"},16:function(e,a,t){e.exports=t.p+"static/media/dashphoto.313435e4.jpg"},17:function(e,a,t){e.exports=t.p+"static/media/kr.bf35584f.jpeg"},18:function(e,a,t){e.exports=t.p+"static/media/Transmission.c5df2b9d.png"},19:function(e,a,t){e.exports=t.p+"static/media/MERN.ec0f4451.png"},20:function(e,a,t){e.exports=t(33)},25:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(14),l=t.n(c),o=(t(25),t(2)),s=t.n(o),i=t(3),m=t(4),u=t(15),d=t.n(u),p=t(16),f=t.n(p),h=t(6),E=t.n(h);t(27),t(29);E.a.initializeApp({apiKey:"AIzaSyB2vAe-Crx7OymGo_i6NKdnf-e7kAqReP0",authDomain:"portfolio-kr7.firebaseapp.com",databaseURL:"https://portfolio-kr7.firebaseio.com",projectId:"portfolio-kr7",storageBucket:"portfolio-kr7.appspot.com",messagingSenderId:"437849217922",appId:"1:437849217922:web:59d74c11c4a52da4ec4d9b"});var g=E.a.auth(),v=E.a.firestore(),b=function(e){var a,t,n,r,c;return s.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!e){l.next=22;break}if("kentherebel07@gmail.com"===e.email||"krebello07@gmail.com"===e.email){l.next=6;break}return alert("Sorry, only Kenneth Rebello can sign in on this webpage"),l.abrupt("return",null);case 6:return a=v.doc("users/".concat(e.uid)),l.next=9,s.a.awrap(a.get());case 9:if(l.sent.exists){l.next=21;break}return t=e.displayName,n=e.email,r=e.photoURL,c=new Date,l.prev=13,l.next=16,s.a.awrap(a.set({displayName:t,email:n,createdAt:c,photoURL:r}));case 16:l.next=21;break;case 18:l.prev=18,l.t0=l.catch(13),console.log("Error creating message"+l.t0.message);case 21:return l.abrupt("return",a);case 22:case"end":return l.stop()}}),null,null,[[13,18]])},w=function(){var e,a;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,s.a.awrap(v.collection("projects"));case 3:return a=t.sent,t.next=6,s.a.awrap(a.get().then((function(a){e=a.docs.map((function(e){return e.data()}))})));case 6:return t.abrupt("return",e);case 7:case"end":return t.stop()}}))},N=function(){var e,a;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,s.a.awrap(v.collection("skills"));case 3:return a=t.sent,t.next=6,s.a.awrap(a.get().then((function(a){e=a.docs.map((function(e){return e.data()}))})));case 6:return t.abrupt("return",e);case 7:case"end":return t.stop()}}))},k=new E.a.auth.GoogleAuthProvider;k.setCustomParameters({prompt:"select_account"});var y=function(){return g.signInWithPopup(k)},x=(E.a,function(e){var a=e.user;return r.a.createElement("li",null,a?r.a.createElement("a",{onClick:function(){return g.signOut()},href:"#"},"Sign Out"):r.a.createElement("a",{onClick:y,href:"#"},"Sign In"))}),j=t(17),O=t.n(j),S=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("img",{src:O.a,alt:""}),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#skills"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{href:"#details"},"Contact")),r.a.createElement(x,{user:e.user})),r.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"fas fa-bars"}))))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Overview")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#skills"},"Skills")),r.a.createElement("li",null,r.a.createElement("a",{href:"#details"},"Contact"))))},C=t(5),I=t(8),R=function(e){var a=e.project;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col l3 m6 s12"},a&&r.a.createElement("div",{className:"card project-card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator"},a.name),a.github&&r.a.createElement("p",null,r.a.createElement("a",{href:"".concat(a.github),target:"_blank",rel:"noopener noreferrer"},"Link to Github repository"))),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title"},a.name,r.a.createElement("i",{className:"fa fa-close",style:{float:"right"}})),r.a.createElement("p",null,a.desc)))))},A=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],l=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var e;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(w());case 2:return e=a.sent,a.next=5,s.a.awrap(l(e));case 5:case"end":return a.stop()}}))},u=Object(n.useState)({name:"",desc:"",github:"",website:""}),d=Object(m.a)(u,2),p=d[0],f=d[1],h=p.name,E=p.desc,g=p.github,b=p.website,N=function(e){f(Object(i.a)({},p,Object(C.a)({},e.target.name,e.target.value)))},k=e.user;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row projects",id:"projects"},r.a.createElement("h1",{className:"title"},"Projects"),c&&c.map((function(e){return r.a.createElement(R,{key:e._id,project:e})})),r.a.createElement(n.Fragment,null,k&&r.a.createElement("div",{className:"col l3 m6 s12"},r.a.createElement("div",{className:"card-panel card"},r.a.createElement("button",{"data-target":"modal1",className:"btn modal-trigger"},r.a.createElement("i",{className:"fa fa-plus"})))),r.a.createElement("div",{id:"modal1",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("form",{onSubmit:function(e){return function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),t=p,v.collection("projects").add(Object(i.a)({},t)).then((function(e){alert("Project added with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)})),l([].concat(Object(I.a)(c),[p])),f({name:"",desc:"",github:"",website:""});case 4:case"end":return a.stop()}var t}))}(e)}},r.a.createElement("p",null,"Add New Project"),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:h,onChange:function(e){return N(e)},required:!0}),r.a.createElement("textarea",{type:"text",placeholder:"Description",name:"desc",value:E,onChange:function(e){return N(e)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Github repo link",name:"github",value:g,onChange:function(e){return N(e)},required:!0}),r.a.createElement("input",{type:"url",placeholder:"Website link if hosted",name:"website",value:b,onChange:function(e){return N(e)}}),r.a.createElement("input",{type:"submit",value:"Add",className:"modal-close btn-flat"})))))))},W=function(e){var a=e.skill;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"col l3 m6 s12"},a&&r.a.createElement("div",{className:"card skill-card"},a.photo&&r.a.createElement("div",{class:"card-image"},r.a.createElement("img",{src:a.photo,alt:""})),r.a.createElement("div",{class:"card-content"},r.a.createElement("p",null,a.name)))))},F=function(e){Object(n.useEffect)((function(){a()}),[]);var a=function(){var e;return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(N());case 2:return e=a.sent,a.next=5,s.a.awrap(o(e));case 5:case"end":return a.stop()}}))},t=Object(n.useState)([]),c=Object(m.a)(t,2),l=c[0],o=c[1],u=Object(n.useState)({name:"",photo:""}),d=Object(m.a)(u,2),p=d[0],f=d[1],h=p.name,E=p.photo,g=function(e){f(Object(i.a)({},p,Object(C.a)({},e.target.name,e.target.value)))},b=e.user;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row projects"},r.a.createElement("h1",{className:"title",id:"skills"},"Skills"),l.length>0&&l.map((function(e){return r.a.createElement(W,{key:e._id,skill:e})})),r.a.createElement(n.Fragment,null,b&&r.a.createElement("div",{className:"col l3 m6 s12"},r.a.createElement("div",{className:"card-panel card"},r.a.createElement("button",{"data-target":"modal2",className:"btn modal-trigger"},r.a.createElement("i",{className:"fa fa-plus"})))),r.a.createElement("div",{id:"modal2",className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("form",{onSubmit:function(e){return function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.next=3,s.a.awrap((t=p,void v.collection("skills").add(Object(i.a)({},t)).then((function(e){alert("Skill added with ID: ",e.id)})).catch((function(e){console.error("Error adding document: ",e)}))));case 3:o([].concat(Object(I.a)(l),[p])),f({name:"",photo:"",password:""});case 5:case"end":return a.stop()}var t}))}(e)}},r.a.createElement("p",null,"Add New Skill"),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",value:h,onChange:function(e){return g(e)},required:!0}),r.a.createElement("input",{type:"text",placeholder:"Enter a link to a photo for respresentation",name:"photo",value:E,onChange:function(e){return g(e)},required:!0}),r.a.createElement("span",null,"The link must be the url of a photo from the internet and not a file path on your machine"),r.a.createElement("input",{type:"submit",className:"modal-close btn-flat"})))))))},P=t(18),D=t.n(P),T=t(19),K=t.n(T),L=function(e){return r.a.createElement("div",{className:"row projects"},r.a.createElement("h1",{className:"title"},"Courses and Competitions"),r.a.createElement("div",{className:"col l3 m6 s12"},r.a.createElement("div",{class:"card cert-card"},r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{className:"card-title activator"},"Coding Marathon")),r.a.createElement("div",{class:"card-reveal cert"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:D.a,alt:""})),r.a.createElement("span",{className:"card-title"},r.a.createElement("i",{className:"fa fa-close right"}))))),r.a.createElement("div",{className:"col l3 m6 s12"},r.a.createElement("div",{class:"card cert-card"},r.a.createElement("div",{class:"card-content"},r.a.createElement("span",{className:"card-title activator"},"Udemy - MERN stack")),r.a.createElement("div",{class:"card-reveal cert"},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:K.a,alt:""})),r.a.createElement("span",{className:"card-title"},r.a.createElement("i",{className:"fa fa-close right"}))))))},U=function(){var e=Object(n.useState)(void 0),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(n.useEffect)((function(){var e=g.onAuthStateChanged((function(e){var a;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=12;break}return t.next=3,s.a.awrap(b(e));case 3:if(!(a=t.sent)){t.next=8;break}a.onSnapshot((function(e){return s.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.awrap(c(Object(i.a)({id:e.id},e.data())));case 2:case"end":return a.stop()}}))})),t.next=10;break;case 8:return t.next=10,s.a.awrap(c(void 0));case 10:t.next=14;break;case 12:return t.next=14,s.a.awrap(c(void 0));case 14:case"end":return t.stop()}}))}));return function(){e()}}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(S,{user:t}),r.a.createElement("div",{className:"header row"},r.a.createElement("div",{className:"col l3 m6 s12 center-align"},r.a.createElement("img",{src:f.a,alt:""})),r.a.createElement("div",{className:"col l9 m6 s12"},r.a.createElement("span",null,"Kenneth Rebello"),r.a.createElement("p",null,"Student at Fr. Conceicao Rodrigues College Of Engineering, Bandra"),r.a.createElement("p",null,"Third Year, Information Technology"),r.a.createElement("hr",null),r.a.createElement("p",null,"I am currently exploring the field of Web Development, focusing on the MERN stack and related technologies, and also have a keen interest in pursuing Web Security, a subject that I find most intriguing."),r.a.createElement("p",null,"I am not one for textbook knowledge and instead prefer to rely on learning by using my hands and my head, through trial and error. I am known to value my work and my time. When it comes to coding, I am passionate, relentless and absolutely love working with a keyboard at my fingertips."),r.a.createElement("p",null,"I will NOT rest until I've fixed that error! - Famous last words of many coders, but not me."),r.a.createElement("p",null,"Other than coding, I also enjoy reading, fiction mostly, and plan on writing something someday too! I also enjoy football and use it as a regular escape from coding."),r.a.createElement("p",null,"Have a look at my github to know more about what I do all day!"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:d.a,className:"cv",target:"_blank",rel:"noopener noreferrer"},"CV"),r.a.createElement("a",{href:"https://github.com/kenneth-rebello"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/kenneth-rebello-515043182/"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement("a",{href:"https://www.instagram.com/kenrebel07/"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement("a",{href:"https://www.facebook.com/kenneth.rebello.3?ref=bookmarks"},r.a.createElement("i",{className:"fab fa-facebook"})),r.a.createElement("a",{href:"https://twitter.com/KenRebel07"},r.a.createElement("i",{className:"fab fa-twitter"}))))),r.a.createElement(A,{user:t}),r.a.createElement(F,{user:t}),r.a.createElement(L,{user:t}),r.a.createElement("div",{className:"details",id:"details"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col l4 m6 s12"},r.a.createElement("p",{className:"center-align"},"Location: Mumbai, India")),r.a.createElement("div",{className:"col l4 m6 s12"},r.a.createElement("p",{className:"center-align"},"Contact No: 7021720320")),r.a.createElement("div",{className:"col l4 m6 s12"},r.a.createElement("p",{className:"center-align"},"Email ID: krebello07@gmail.com")),r.a.createElement("span",{className:"col l12 m12 s12  center-align "},"This website was created using React and Firebase for learning purposes"),r.a.createElement("small",{className:"col l12 m12 s12 white-text center-align "},"Copyright ",r.a.createElement("i",{className:"far fa-copyright"})," Kenneth 2019"))))};var q=function(){return r.a.createElement("div",null,r.a.createElement(U,null))},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(q,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolio","/service-worker.js");_?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(a,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.511b20e0.chunk.js.map