(this.webpackJsonpclassx=this.webpackJsonpclassx||[]).push([[0],{50:function(t,e,s){},52:function(t,e,s){},53:function(t,e,s){},61:function(t,e,s){},65:function(t,e,s){},66:function(t,e,s){},67:function(t,e,s){},68:function(t,e,s){"use strict";s.r(e);var c=s(0),a=s.n(c),n=s(22),i=s.n(n),r=(s(50),s(11)),l=s(12),o=s(14),b=s(13),u=s(18),j=s(8),h=(s(51),s(52),s(53),s(73)),d=s(70),m=s(75),p=s(1),O=function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(h.a,{className:"navbar-container fixed-top",variant:"light",expand:"md",children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(h.a.Brand,{className:"brand-text",children:Object(p.jsx)(u.b,{to:"/",className:"navbar-links",children:"ClassX"})}),Object(p.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(h.a.Collapse,{className:"nav-links",id:"basic-navbar-nav",children:Object(p.jsxs)(m.a,{className:"me-auto",children:[Object(p.jsx)(m.a.Link,{className:"nav-items",children:Object(p.jsx)(u.b,{to:"/",className:"navbar-links",children:"Home"})}),Object(p.jsx)(m.a.Link,{className:"nav-items",children:Object(p.jsx)(u.b,{to:"/about",className:"navbar-links",children:"About"})})]})})]})})}}]),s}(a.a.Component),x=(s(61),s(72)),g=s(45),k=s(24),v=s(25),f=(s(65),s(76)),N=s(71),A=function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(f.a,{className:"subcard "+this.props.color,children:[Object(p.jsxs)("div",{className:"cover-container",children:[Object(p.jsx)("div",{className:"overlay"}),Object(p.jsx)(f.a.Img,{className:"cover",variant:"top",src:this.props.cover})]}),Object(p.jsxs)(f.a.Body,{children:[Object(p.jsxs)(f.a.Title,{className:"title",children:[Object(p.jsx)(k.a,{className:"fa-icon",icon:v.c}),this.props.name]}),Object(p.jsx)("hr",{}),Object(p.jsx)(u.b,{to:"/sub/"+this.props.sub,children:Object(p.jsxs)(N.a,{className:"btn",children:["Get Resources",Object(p.jsx)(k.a,{className:"fa-icon",icon:v.b})]})})]})]})}}]),s}(a.a.Component),y=(s(66),function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(d.a,{className:"dash-header-container",children:Object(p.jsxs)("h2",{className:"page-header",children:[Object(p.jsx)(u.b,{to:"/",className:"fa-icon",children:"/"!=window.location.pathname?Object(p.jsx)(k.a,{icon:v.a}):Object(p.jsx)(k.a,{icon:v.d})}),this.props.title]})})})}}]),s}(a.a.Component)),C=function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{title:"Home"}),Object(p.jsx)(d.a,{className:"",children:Object(p.jsx)(x.a,{className:"d-flex justify-content-center",children:this.props.subData.map((function(t,e){return Object(p.jsx)(g.a,{lg:4,md:6,sm:12,children:Object(p.jsx)(A,{name:t.name,sub:t.sub,cover:t.cover,color:t.color},e)})}))})})]})}}]),s}(a.a.Component),D=s(74),L=(s(67),function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(t){var c;return Object(r.a)(this,s),(c=e.call(this,t)).state={subject:{}},c}return Object(l.a)(s,[{key:"UNSAFE_componentWillMount",value:function(){for(var t=0;t<this.props.subData.length;t++)if(this.props.subData[t].sub===window.location.pathname.slice(5)){this.setState({subject:this.props.subData[t]});break}}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{title:this.state.subject.name+" ("+this.state.subject.classLinks.length+")"}),Object(p.jsxs)(d.a,{className:"subject-page-container",children:[Object(p.jsxs)(x.a,{className:"subject-header",children:[Object(p.jsx)(g.a,{className:"subject-col",children:"Date"}),Object(p.jsx)(g.a,{className:"subject-col",children:"Link"}),Object(p.jsx)(g.a,{className:"subject-col",children:"Action"})]}),this.state.subject.classLinks.map((function(t,e){return Object(p.jsxs)(x.a,{className:"subject-row",children:[Object(p.jsx)(g.a,{md:4,sm:12,className:"subject-col",children:t.date}),Object(p.jsx)(g.a,{md:4,sm:12,className:"subject-col",children:Object(p.jsx)(u.b,{to:"/lecturelink",children:Object(p.jsx)(N.a,{className:"btn",children:"View Class"})})}),Object(p.jsx)(g.a,{md:4,sm:12,className:"subject-col",children:Object(p.jsx)(D.a.Check,{type:"checkbox",label:"Watched"})})]})}))]})]})}}]),s}(a.a.Component)),w=(a.a.Component,s.p+"static/media/StudyBanner.ae5466bb.jpg"),S=[{name:"Compiler Design",sub:"cd",cover:w,color:"blue",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]},{name:"Operating System",sub:"os",cover:w,color:"red",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]},{name:"Differential Equations",sub:"de",cover:w,color:"green",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]},{name:"Computer Networks",sub:"cn",cover:w,color:"purple",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]},{name:"ISCP",sub:"iscp",cover:w,color:"orange",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]},{name:"CDC",sub:"cdc",cover:w,color:"pink",classLinks:[{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"},{date:"3rd August 2021",link:"https://github.com"}]}],B=function(t){Object(o.a)(s,t);var e=Object(b.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(O,{subData:S}),Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{exact:!0,path:"/",children:Object(p.jsx)(C,{subData:S})}),Object(p.jsx)(j.a,{path:"/sub",children:Object(p.jsx)(L,{subData:S})})]})]})}}]),s}(a.a.Component);i.a.render(Object(p.jsx)(B,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.701a3913.chunk.js.map