(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(39)},21:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),u=t.n(c),o=(t(21),t(14)),l=t(2),i=t(3),m=t.n(i),s="/api/persons",d=function(){return m.a.get(s).then(function(e){return e.data})},f=function(e){return m.a.post(s,e).then(function(e){return e.data})},h=function(e){return m.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return m.a.put("".concat(s,"/").concat(e),n).then(function(e){return e.data})},g=function(e){var n=e.value,t=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Filter shown with: "),r.a.createElement("form",null,r.a.createElement("input",{value:n,onChange:t})))},p=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,c=e.newNumber,u=e.handleNumberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:c,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},v=function(e){var n=e.persons,t=e.search,a=e.remove;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Numbers"),n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())}).map(function(e){return r.a.createElement(E,{key:e.id,person:e,remove:a(e)})}))},E=function(e){var n=e.person,t=e.remove;return r.a.createElement("div",null,r.a.createElement("span",null,n.name,": ",n.number),r.a.createElement("button",{onClick:t},"Remove"))},w=function(e){var n=e.message,t=e.type;return r.a.createElement("div",{style:"success"===t?{width:"80vw",fontSize:20,backgroundColor:"lightgray",color:"green",border:"2px solid green",padding:5}:{width:"80vw",fontSize:20,backgroundColor:"lightgray",color:"red",border:"2px solid red",padding:5}},n)},y=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],s=i[1],E=Object(a.useState)(""),y=Object(l.a)(E,2),C=y[0],j=y[1],O=Object(a.useState)(""),N=Object(l.a)(O,2),k=N[0],S=N[1],F=Object(a.useState)(null),x=Object(l.a)(F,2),P=x[0],z=x[1];Object(a.useEffect)(function(){d().then(function(e){c(e)})},[]);var D=function(e,n){z({message:e,type:n}),setTimeout(function(){z(null)},3e3)};return r.a.createElement("div",null,null!==P?r.a.createElement(w,{message:P.message,type:P.type}):"",r.a.createElement(g,{value:k,handleChange:function(e){S(e.target.value)}}),r.a.createElement(p,{addPerson:function(e){e.preventDefault();var n=t.find(function(e){return e.name===m});if(n)window.confirm("".concat(m," is already added to phonebook, replace the old number with a new one?"))&&b(n.id,Object(o.a)({},n,{number:C})).then(function(e){c(t.map(function(t){return t.id!==n.id?t:e})),s(""),j(""),D("".concat(n.name," was updated successfully"),"success")}).catch(function(e){console.log(e),c(t.filter(function(e){return e.id!==n.id})),s(""),j(""),D("".concat(n.name," has already been deleted!"),"error")});else{var a={name:m,number:C};f(a).then(function(e){c(t.concat(e)),s(""),j(""),D("".concat(a.name," was added successfully"),"success")})}},newName:m,handleNameChange:function(e){s(e.target.value)},newNumber:C,handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement(v,{persons:t,search:k,remove:function(e){return function(){window.confirm("Delete ".concat(e.name,"?"))&&h(e.id).then(function(n){c(t.filter(function(n){return n.id!==e.id})),D("".concat(e.name," was removed successfully"),"success")}).catch(function(n){console.log(n),c(t.filter(function(n){return n.id!==e.id})),D("".concat(e.name," has already been deleted!"),"error")})}}}))};u.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.728a8b23.chunk.js.map