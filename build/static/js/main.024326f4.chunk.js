(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),a=t(3),o=t(2),u=t(0),i=function(e){return Object(u.jsxs)("div",{children:["filter shown with ",Object(u.jsx)("input",{value:e.newFilter,onChange:e.filter})]})},s=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:e.addPerson,children:[Object(u.jsxs)("div",{children:[" name: ",Object(u.jsx)("input",{value:e.newName,onChange:e.handleNewName})]}),Object(u.jsxs)("div",{children:[" number: ",Object(u.jsx)("input",{value:e.newNumber,onChange:e.handleNewNumber})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})})},d=function(e){return Object(u.jsxs)("span",{children:[e.name," ",e.number," "]})},l=function(e){return Object(u.jsx)("div",{children:e.persons.filter((function(n){return n.name.toLowerCase().startsWith(e.newFilter.toLowerCase())})).map((function(n){return Object(u.jsxs)("div",{children:[Object(u.jsx)(d,{name:n.name,number:n.number}),Object(u.jsx)("button",{onClick:function(){return e.deletePerson(n)},children:"delete"})]},n.name)}))})},j=t(4),b=t.n(j),m="/api/persons",f=function(){return b.a.get(m).then((function(e){return e.data}))},h=function(e){return b.a.post(m,e).then((function(e){return e.data}))},O=function(e){return b.a.delete("".concat(m,"/").concat(e)).then((function(e){return e.data}))},w=function(e,n){return b.a.put("".concat(m,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(u.jsx)("div",{className:n.messageClass,children:n.message})},x=function(){var e=Object(o.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),d=Object(a.a)(r,2),j=d[0],b=d[1],m=Object(o.useState)(""),x=Object(a.a)(m,2),v=x[0],g=x[1],C=Object(o.useState)(""),N=Object(a.a)(C,2),S=N[0],k=N[1],P=Object(o.useState)({message:"",messageClass:""}),F=Object(a.a)(P,2),L=F[0],y=F[1];Object(o.useEffect)((function(){f().then((function(e){c(e)}))}),[]);var A=function(e,n){y({message:e,messageClass:n}),setTimeout((function(){y(null)}),2500)};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),Object(u.jsx)(p,{message:L}),Object(u.jsx)(i,{newFilter:S,filter:function(e){k(e.target.value)}}),Object(u.jsx)("h2",{children:"Add a new "}),Object(u.jsx)(s,{newName:j,newNumber:v,addPerson:function(e){e.preventDefault();var n=t.filter((function(e){return e.name.toLowerCase()===j.toLowerCase()})).map((function(e){return e.id}));if(n.length>0){if(window.confirm("".concat(j," is already added to phonebook, replace the old number with a new one?"))){var r={name:j,number:v};w(n[0],r).then((function(e){c(t.map((function(t){return t.id!==n[0]?t:e}))),A("Updated number for ".concat(e.name),"success")})).catch((function(e){A("Something went wrong. Could not update number for ".concat(j),"error")}))}b(""),g("")}else{h({name:j,number:v}).then((function(e){c(t.concat(e)),A("Added ".concat(e.name),"success"),b(""),g("")})).catch((function(e){A("Something went wrong. Could not add ".concat(j),"error")}))}},handleNewName:function(e){b(e.target.value)},handleNewNumber:function(e){g(e.target.value)}}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(l,{persons:t,newFilter:S,deletePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&O(e.id).then((function(n){c(t.filter((function(n){return n.id!==e.id}))),A("Removed ".concat(e.name),"success")})).catch((function(n){A("Something went wrong. Could not remove ".concat(e.name),"error")}))}})]})};t(40);r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.024326f4.chunk.js.map