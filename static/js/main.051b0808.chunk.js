(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(2),l=c(8),i=c(1),d=(c(13),c(14),c(6)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.handleOpenModal,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:!0===e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":a&&e.id===a.id,"fa-eye":!a})})})})})]},e.id)}))})]})},h=function(e){var t=e.handleQueryChange,c=e.query,a=e.handleQueryDelete,s=e.handleFilterActive,n=e.handleFilterCompleted,l=e.handleFilterAll;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target.value;"active"===t?s():"completed"===t?n():l()},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:t}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})};function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var b=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.handleCloseModal,c=e.loading,a=e.setLoading,s=e.setModalVisible,l=e.selectedTodo,d=Object(i.useState)(null),o=Object(n.a)(d,2),j=o[0],h=o[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){a(!1)}),500);return function(){clearTimeout(e),s(!1)}}),[a,s]),Object(i.useEffect)((function(){var e;l&&l.userId&&(e=l.userId,u("/users/".concat(e))).then((function(e){h(e)})).catch((function(e){throw new Error(e)}))}),[l]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),c?Object(r.jsx)(b,{}):Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:Object(r.jsxs)("span",{children:["Todo"," ",l.id]})}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:l.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===l.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz",children:null===j||void 0===j?void 0:j.name})]})]})]})})]})};var O=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(""),d=Object(n.a)(s,2),o=d[0],O=d[1],x=function(e,t){var c=Object(l.a)(e);if(t){var a=t.trim().toLowerCase();c=c.filter((function(e){return e.title.toLowerCase().includes(a)}))}return c}(c,o),f=Object(i.useState)([]),p=Object(n.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(!0),g=Object(n.a)(y,2),C=g[0],k=g[1],S=Object(i.useState)(!0),T=Object(n.a)(S,2),w=T[0],F=T[1],A=Object(i.useState)(null),E=Object(n.a)(A,2),L=E[0],M=E[1];return Object(i.useEffect)((function(){setTimeout((function(){u("/todos").then((function(e){a(e),N(e),k(!1),F(!1)}))}),500)}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(h,{handleQueryChange:function(e){O(e.target.value)},query:o,handleQueryDelete:function(){O("")},handleFilterCompleted:function(){var e=v.filter((function(e){return!0===e.completed}));a(e)},handleFilterActive:function(){var e=v.filter((function(e){return!1===e.completed}));a(e)},handleFilterAll:function(){a(v)}})}),Object(r.jsx)("div",{className:"block",children:C?Object(r.jsx)(b,{}):Object(r.jsx)(j,{todos:x,handleOpenModal:function(e){F(!0),M(e)},selectedTodo:L})})]})})}),L&&w&&!C&&Object(r.jsx)(m,{selectedTodo:L,handleCloseModal:function(){F(!1),M(null)},loading:C,setLoading:k,setModalVisible:F})]})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.051b0808.chunk.js.map