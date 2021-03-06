(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{2:function(t,e,n){t.exports={contactList:"ContactList_contactList__3VAAy",contact_item:"ContactList_contact_item__2lOuP",contact_item_container:"ContactList_contact_item_container__1c04C",contact_name:"ContactList_contact_name__34_LD",contact_button:"ContactList_contact_button__2xZ6o"}},28:function(t,e,n){},3:function(t,e,n){t.exports={addContact_form:"ContactForm_addContact_form__2OWkt",addContact_label:"ContactForm_addContact_label__2w8A-",addContact_input:"ContactForm_addContact_input__15Cb6",input_text:"ContactForm_input_text__Spc1V",addContact_button:"ContactForm_addContact_button__1FM7i"}},30:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(11),s=n.n(o),r=n(14),i=n(5),l=n(6),u=n(8),m=n(7),d=n(12),_=n(3),h=n.n(_),b=n(0),j=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(d.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(){(0,t.props.onSubmit)(t.state)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsxs)("form",{className:h.a.addContact_form,onSubmit:function(e){e.preventDefault(),t.handleSubmit(),e.target.elements.name.value="",e.target.elements.number.value=""},children:[Object(b.jsxs)("label",{className:h.a.addContact_label,htmlFor:"",name:"contact",children:[Object(b.jsx)("span",{className:h.a.input_text,children:"Enter your name"}),Object(b.jsx)("input",{className:h.a.addContact_input,type:"text",placeholder:"name",name:"name",onChange:function(e){t.handleChange(e)}})]}),Object(b.jsxs)("label",{className:h.a.addContact_label,children:[Object(b.jsx)("span",{className:h.a.input_text,children:"Enter your phone number"}),Object(b.jsx)("input",{className:h.a.addContact_input,type:"tel",placeholder:"phone",name:"number",onChange:function(e){t.handleChange(e)}})]}),Object(b.jsx)("button",{className:h.a.addContact_button,type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),p=n(9),f=n.n(p),C=function(t){return Object(b.jsxs)("label",{className:f.a.search_label,children:[Object(b.jsx)("span",{className:f.a.search_text,children:"Find contacts by name"}),Object(b.jsx)("input",{className:f.a.search_input,type:"text",placeholder:"name",onChange:function(e){e.preventDefault(),t.onChange(e)}})]})},x=n(2),O=n.n(x),v=function(t){return Object(b.jsx)("ul",{className:O.a.contactList,children:""===t.filter?t.state.map((function(e){return Object(b.jsx)("li",{className:O.a.contact_item,children:Object(b.jsxs)("div",{className:O.a.contact_item_container,children:[Object(b.jsxs)("p",{className:O.a.contact_name,children:[e.name,": ",e.number]}),Object(b.jsx)("button",{className:O.a.contact_button,type:"button",onClick:function(){return t.onDeleteContact(e.id)},children:"Delete"})]})},e.id)})):t.foundContacts.map((function(t){return Object(b.jsx)("li",{className:O.a.contact_item,children:Object(b.jsxs)("div",{className:O.a.contact_item_container,children:[Object(b.jsxs)("p",{className:O.a.contact_name,children:[t.name,": ",t.number]}),Object(b.jsx)("button",{className:O.a.contact_button,type:"button",children:"Delete"})]})},t.id)}))})};v.defaultProps={avatar:{}};var g=v,N=n(13),y=n.n(N),S=(n(28),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.onStateUpdate=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name,"is alredy in contacts")):t.setState((function(t){return{contacts:[].concat(Object(r.a)(t.contacts),[{id:y.a.generate(),name:e.name,number:e.number}])}}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onSearchContacts=function(e){t.setState((function(t){return{filter:e.target.value}}))},t.contactsFinderHandler=function(){if(""!==t.state.filter){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))}},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("Contacts");if(0===this.state.contacts.length&&null!==t){var e=JSON.parse(t);this.setState({contacts:e})}}},{key:"componentDidUpdate",value:function(t,e){if(this.state.contacts!==e.contacts){var n=JSON.stringify(this.state.contacts);localStorage.setItem("Contacts",n)}}},{key:"render",value:function(){var t=this.contactsFinderHandler();return console.log(this.state.contacts),Object(b.jsxs)("section",{className:"section",children:[Object(b.jsx)("h1",{children:"Phone Book"}),Object(b.jsx)(j,{onSubmit:this.onStateUpdate}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(C,{onChange:this.onSearchContacts}),0!==this.state.contacts.length&&Object(b.jsx)(g,{foundContacts:t,state:this.state.contacts,filter:this.state.filter,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component));n(29);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={search_label:"Filter_search_label__GPBU7",search_text:"Filter_search_text__2s5PD",search_input:"Filter_search_input__2xFlb"}}},[[30,1,2]]]);
//# sourceMappingURL=main.a1078fc0.chunk.js.map