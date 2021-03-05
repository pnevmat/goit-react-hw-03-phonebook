(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{2:function(t,e,n){t.exports={contactList:"ContactList_contactList__3VAAy",contact_item:"ContactList_contact_item__2lOuP",contact_item_container:"ContactList_contact_item_container__1c04C",contact_name:"ContactList_contact_name__34_LD",contact_button:"ContactList_contact_button__2xZ6o"}},28:function(t,e,n){},3:function(t,e,n){t.exports={addContact_form:"ContactForm_addContact_form__2OWkt",addContact_label:"ContactForm_addContact_label__2w8A-",addContact_input:"ContactForm_addContact_input__15Cb6",input_text:"ContactForm_input_text__Spc1V",addContact_button:"ContactForm_addContact_button__1FM7i"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=n(14),i=n(5),l=n(6),u=n(8),m=n(7),_=n(12),d=n(3),b=n.n(d),h=n(0),j=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(_.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(){(0,t.props.onSubmit)(t.state)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("form",{className:b.a.addContact_form,onSubmit:function(e){e.preventDefault(),t.handleSubmit(),e.target.elements.name.value="",e.target.elements.number.value=""},children:[Object(h.jsxs)("label",{className:b.a.addContact_label,htmlFor:"",name:"contact",children:[Object(h.jsx)("span",{className:b.a.input_text,children:"Enter your name"}),Object(h.jsx)("input",{className:b.a.addContact_input,type:"text",placeholder:"name",name:"name",onChange:function(e){t.handleChange(e)}})]}),Object(h.jsxs)("label",{className:b.a.addContact_label,children:[Object(h.jsx)("span",{className:b.a.input_text,children:"Enter your phone number"}),Object(h.jsx)("input",{className:b.a.addContact_input,type:"tel",placeholder:"phone",name:"number",onChange:function(e){t.handleChange(e)}})]}),Object(h.jsx)("button",{className:b.a.addContact_button,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),p=n(9),f=n.n(p),C=function(t){return Object(h.jsxs)("label",{className:f.a.search_label,children:[Object(h.jsx)("span",{className:f.a.search_text,children:"Find contacts by name"}),Object(h.jsx)("input",{className:f.a.search_input,type:"text",placeholder:"name",onChange:function(e){e.preventDefault(),t.onChange(e)}})]})},x=n(2),O=n.n(x),g=function(t){return Object(h.jsx)("ul",{className:O.a.contactList,children:""===t.filter?t.state.map((function(e){return Object(h.jsx)("li",{className:O.a.contact_item,children:Object(h.jsxs)("div",{className:O.a.contact_item_container,children:[Object(h.jsxs)("p",{className:O.a.contact_name,children:[e.name,": ",e.number]}),Object(h.jsx)("button",{className:O.a.contact_button,type:"button",onClick:function(){return t.onDeleteContact(e.id)},children:"Delete"})]})},e.id)})):t.foundContacts.map((function(t){return Object(h.jsx)("li",{className:O.a.contact_item,children:Object(h.jsxs)("div",{className:O.a.contact_item_container,children:[Object(h.jsxs)("p",{className:O.a.contact_name,children:[t.name,": ",t.number]}),Object(h.jsx)("button",{className:O.a.contact_button,type:"button",children:"Delete"})]})},t.id)}))})},v=n(13),N=n.n(v),y=(n(28),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onStateUpdate=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name,"is alredy in contacts")):t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[{id:N.a.generate(),name:e.name,number:e.number}])}}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onSearchContacts=function(e){t.setState((function(t){return{filter:e.target.value}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){if(0===this.state.contacts.length){var t=JSON.parse(localStorage.getItem("Contacts"));this.setState({contacts:t})}}},{key:"componentDidUpdate",value:function(t,e){if(this.state.contacts!==e.contacts){var n=JSON.stringify(this.state.contacts);localStorage.setItem("Contacts",n)}}},{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(h.jsxs)("section",{className:"section",children:[Object(h.jsx)("h1",{children:"Phone Book"}),Object(h.jsx)(j,{onSubmit:this.onStateUpdate}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(C,{onChange:this.onSearchContacts}),Object(h.jsx)(g,{foundContacts:e,state:this.state.contacts,filter:this.state.filter,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component));n(29);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={search_label:"Filter_search_label__GPBU7",search_text:"Filter_search_text__2s5PD",search_input:"Filter_search_input__2xFlb"}}},[[30,1,2]]]);
//# sourceMappingURL=main.aecde3f7.chunk.js.map