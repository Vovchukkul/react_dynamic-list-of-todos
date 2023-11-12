(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a=c(7),s=c.n(a),n=c(2),l=c(8),i=c(1),d=(c(13),c(14),c(6)),o=c.n(d),r=c(0),j=function(e){var t=e.todos,c=e.handleOpenModal,a=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:!0===e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye-slash":a&&e.id===a.id,"fa-eye":!a})})})})})]},e.id)}))})]})},h=function(e){var t=e.handleQueryChange,c=e.query,a=e.handleQueryDelete,s=e.handleFilterActive,n=e.handleFilterCompleted,l=e.handleFilterAll;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var t=e.target.value;"active"===t?s():"completed"===t?n():l()},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:t}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var u=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.handleCloseModal,c=e.setModalVisible,a=e.selectedTodo,s=Object(i.useState)(null),l=Object(n.a)(s,2),d=l[0],o=l[1],j=Object(i.useState)(!1),h=Object(n.a)(j,2),m=h[0],O=h[1];return Object(i.useEffect)((function(){var e,t;return a&&a.userId&&(O(!0),(t=a.userId,b("/users/".concat(t))).then((function(e){o(e)})).catch((function(e){throw new Error(e)})).finally((function(){e=setTimeout((function(){O(!1),c(!0)}),500)}))),function(){clearTimeout(e)}}),[a,O,c]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),m?Object(r.jsx)(u,{}):Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:Object(r.jsx)("span",{children:"Todo #".concat(a.id)})}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:t})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:a.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!0===a.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:Sincere@april.biz","data-cy":"todo",children:null===d||void 0===d?void 0:d.name})]})]})]})})]})};var O=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(""),d=Object(n.a)(s,2),o=d[0],O=d[1],x=function(e,t){var c=Object(l.a)(e);if(t){var a=t.trim().toLowerCase();c=c.filter((function(e){return e.title.toLowerCase().includes(a)}))}return c}(c,o),f=Object(i.useState)(!0),p=Object(n.a)(f,2),v=p[0],N=p[1],y=Object(i.useState)(!0),g=Object(n.a)(y,2),C=g[0],k=g[1],S=Object(i.useState)(null),T=Object(n.a)(S,2),w=T[0],F=T[1],A=Object(i.useState)("all"),M=Object(n.a)(A,2),E=M[0],_=M[1];return Object(i.useEffect)((function(){setTimeout((function(){b("/todos").then((function(e){N(!1),k(!1),a("completed"===E?e.filter((function(e){return!0===e.completed})):"active"===E?e.filter((function(e){return!1===e.completed})):e)}))}),500)}),[E]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(h,{handleQueryChange:function(e){O(e.target.value)},query:o,handleQueryDelete:function(){O("")},handleFilterCompleted:function(){_("completed")},handleFilterActive:function(){_("active")},handleFilterAll:function(){_("all")}})}),Object(r.jsx)("div",{className:"block",children:v?Object(r.jsx)(u,{}):Object(r.jsx)(j,{todos:x,handleOpenModal:function(e){k(!0),F(e)},selectedTodo:w})})]})})}),w&&C&&!v&&Object(r.jsx)(m,{selectedTodo:w,handleCloseModal:function(){k(!1),F(null)},setModalVisible:k})]})};s.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.35d6b32d.chunk.js.map