(this.webpackJsonpgithub_job_proj=this.webpackJsonpgithub_job_proj||[]).push([[0],{181:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),s=a.n(r),i=(a(80),a(81),a(6)),o=a(1);var j=function(){var e=Object(i.f)();return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.push("/jobs")},className:"m-5",children:[Object(o.jsx)("h3",{children:"Login"}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Email address*"}),Object(o.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",required:!0})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{children:"Password*"}),Object(o.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",required:!0})]}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(o.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(o.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Submit"})]})},l=a(26),b=a(33),d=a(12),u=a(22),h=a(23),m=a.n(h),x="make-request",O="get-data",p="error",f="update-has-next-page",g="https://jobs.github.com/positions.json";function y(e,t){switch(t.type){case x:return{loading:!0,jobs:[]};case O:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,jobs:t.payload.jobs});case p:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.payload.error,jobs:[]});case f:return Object(d.a)(Object(d.a)({},e),{},{hasNextPage:t.payload.hasNextPage});default:return e}}var v=a(185),N=a(188),k=a(183),C=a(184),P=a(186),w=a(72),S=a.n(w);function E(e){var t=e.job,a=Object(c.useState)(!1),n=Object(u.a)(a,2),r=n[0],s=n[1];return Object(o.jsx)(N.a,{className:"mb-3",children:Object(o.jsxs)(N.a.Body,{children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)(N.a.Title,{children:[t.title," - ",Object(o.jsx)("span",{className:"text-muted font-weight-light",children:t.company})]}),Object(o.jsx)(N.a.Subtitle,{className:"text-muted mb-2",children:new Date(t.created_at).toLocaleDateString()}),Object(o.jsx)(k.a,{variant:"secondary",className:"mr-2",children:t.type}),Object(o.jsx)(k.a,{variant:"secondary",children:t.location}),Object(o.jsx)("div",{style:{wordBreak:"break-all"}})]}),Object(o.jsx)("img",{className:"d-none d-md-block",height:"60",width:"120",alt:t.company,src:t.company_logo})]}),Object(o.jsx)(N.a.Text,{children:Object(o.jsx)(C.a,{className:"mt-4",onClick:function(){return s((function(e){return!e}))},variant:"primary",children:r?"Hide Details":"View Details"})}),Object(o.jsx)(P.a,{in:r,children:Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)(S.a,{source:t.description})})}),Object(o.jsx)(l.b,{to:"apply",children:Object(o.jsx)(C.a,{className:"mt-4",variant:"primary",children:"Apply"})})]})})}var F=a(189);function D(e){var t=e.page,a=e.setPage,c=e.hasNextPage;function n(e){a((function(t){return t+e}))}return Object(o.jsxs)(F.a,{children:[1!==t&&Object(o.jsx)(F.a.Prev,{onClick:function(){return n(-1)}}),1!==t&&Object(o.jsx)(F.a.Item,{onClick:function(){return a(1)},children:"1"}),t>2&&Object(o.jsx)(F.a.Ellipsis,{}),t>2&&Object(o.jsx)(F.a.Item,{onClick:function(){return n(-1)},children:t-1}),Object(o.jsx)(F.a.Item,{active:!0,children:t}),c&&Object(o.jsx)(F.a.Item,{onClick:function(){return n(1)},children:t+1}),c&&Object(o.jsx)(F.a.Next,{onClick:function(){return n(1)}})]})}var I=a(187),L=a(75);function T(e){var t=e.params,a=e.onParamChange;return Object(o.jsx)(I.a,{className:"mb-4",children:Object(o.jsx)(I.a.Row,{className:"align-items-end",children:Object(o.jsxs)(I.a.Group,{as:L.a,children:[Object(o.jsx)(I.a.Label,{children:"Description"}),Object(o.jsx)(I.a.Control,{onChange:a,value:t.description,name:"description",type:"text",placeholder:"Enter Your Skill"})]})})})}var q=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),s=Object(u.a)(r,2),i=s[0],j=s[1],l=function(e,t){var a=Object(c.useReducer)(y,{jobs:[],loading:!0}),n=Object(u.a)(a,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){var a=m.a.CancelToken.source();s({type:x}),m.a.get(g,{cancelToken:a.token,params:Object(d.a)({markdown:!0,page:t},e)}).then((function(e){s({type:O,payload:{jobs:e.data}})})).catch((function(e){m.a.isCancel(e)||s({type:p,payload:{error:e}})}));var c=m.a.CancelToken.source();return m.a.get(g,{cancelToken:c.token,params:Object(d.a)({markdown:!0,page:t+1},e)}).then((function(e){s({type:f,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){m.a.isCancel(e)||s({type:p,payload:{error:e}})})),function(){a.cancel(),c.cancel()}}),[e,t]),r}(a,i),h=l.jobs,N=l.loading,k=l.error,C=l.hasNextPage;return Object(o.jsxs)(v.a,{className:"my-4",children:[Object(o.jsx)("h1",{className:"mb-4",children:"Search Job"}),Object(o.jsx)(T,{params:a,onParamChange:function(e){var t=e.target.name,a=e.target.value;j(1),n((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(b.a)({},t,a))}))}}),Object(o.jsx)(D,{page:i,setPage:j,hasNextPage:C}),N&&Object(o.jsx)("h1",{children:"Loading... Do not press any key"}),k&&Object(o.jsx)("h1",{children:"Error. Try Refreshing."}),h.map((function(e){return Object(o.jsx)(E,{job:e},e.id)})),Object(o.jsx)(D,{page:i,setPage:j,hasNextPage:C})]})},B=a(48);a(180);var _=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(I.a,{onSubmit:function(e){e.preventDefault(),B.b.success("Applied Successfull")},children:[Object(o.jsxs)(I.a.Group,{controlId:"formBasic",children:[Object(o.jsx)(I.a.Label,{children:"Name:"}),Object(o.jsx)(I.a.Control,{type:"text",placeholder:"Enter Name",required:!0})]}),Object(o.jsxs)(I.a.Group,{controlId:"formBasicEmail",children:[Object(o.jsx)(I.a.Label,{children:"Email:"}),Object(o.jsx)(I.a.Control,{type:"email",placeholder:"Enter email",required:!0})]}),Object(o.jsxs)(I.a.Group,{controlId:"formBasicPassword",children:[Object(o.jsx)(I.a.Label,{children:"Skills"}),Object(o.jsx)(I.a.Control,{type:"text",placeholder:"Skills",required:!0})]}),Object(o.jsx)(I.a.Group,{children:Object(o.jsx)(I.a.File,{id:"exampleFormControlFile1",label:"Upload Resume",required:!0})}),Object(o.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"}),Object(o.jsx)(B.a,{})]})})};var G=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/jobs",children:Object(o.jsx)(q,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/apply",children:Object(o.jsx)(_,{})})]})})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(G,{})}),document.getElementById("root")),R()},80:function(e,t,a){},81:function(e,t,a){}},[[181,1,2]]]);
//# sourceMappingURL=main.bcd0ffb9.chunk.js.map