(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(5),s=c.n(a),n=c(2),l=c(1),d=(c(10),c(11),c(4)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.handleOpenModal,a=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:!0===e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("far",{"fa-eye-slash":a&&e.id===a.id,"fa-eye":!a})})})})})]},e.id)}))})]})},j=function(e){var t=e.handleQueryChange,c=e.query,a=e.handleQueryDelete,s=e.handleFilterActive,n=e.handleFilterCompleted,l=e.handleFilterAll;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){switch(e.target.value){case"active":s();break;case"completed":n();break;default:l()}},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:t}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})};function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var b,u=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.handleCloseModal,c=e.selectedTodo,a=Object(l.useState)(null),s=Object(n.a)(a,2),d=s[0],i=s[1];return Object(l.useEffect)((function(){var e;(e=c.userId,h("/users/".concat(e))).then(i)}),[c]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),d?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:Object(o.jsx)("span",{children:"Todo #".concat(c.id)})}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",d?Object(o.jsx)("a",{href:"mailto:".concat(d.email),"data-cy":"todo",children:d.name}):Object(o.jsx)(u,{})]})]})]}):Object(o.jsx)(u,{})]})};!function(e){e.All="all",e.Completed="completed",e.Active="active"}(b||(b={}));var O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(l.useState)(""),d=Object(n.a)(s,2),i=d[0],O=d[1],x=Object(l.useState)(!0),f=Object(n.a)(x,2),p=f[0],v=f[1],N=Object(l.useState)(null),y=Object(n.a)(N,2),g=y[0],C=y[1],k=Object(l.useState)(b.All),A=Object(n.a)(k,2),w=A[0],S=A[1],T=function(e,t,c){return e.filter((function(e){switch(c){case b.Completed:return!0===e.completed;case b.Active:return!1===e.completed;case b.All:return!0;default:return!1}})).filter((function(e){if(t){var c=t.trim().toLowerCase();return e.title.toLowerCase().includes(c)}return!0}))}(c,i,w);return Object(l.useEffect)((function(){v(!0),setTimeout((function(){h("/todos").then((function(e){v(!1),a(e)}))}),500)}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{handleQueryChange:function(e){O(e.target.value)},query:i,handleQueryDelete:function(){O("")},handleFilterCompleted:function(){S(b.Completed)},handleFilterActive:function(){S(b.Active)},handleFilterAll:function(){S(b.All)}})}),Object(o.jsx)("div",{className:"block",children:p?Object(o.jsx)(u,{}):Object(o.jsx)(r,{todos:T,handleOpenModal:function(e){C(e)},selectedTodo:g})})]})})}),g&&!p&&Object(o.jsx)(m,{selectedTodo:g,handleCloseModal:function(){C(null)}})]})};s.a.render(Object(o.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.19920569.chunk.js.map