import React, {Component} from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import shortid from 'shortid';

import './App.css';

class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    if (this.state.contacts.length === 0) {
      const contacts = JSON.parse(localStorage.getItem('Contacts'));
      this.setState({contacts: contacts});
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      const contacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('Contacts', contacts);
    };
  };

  onStateUpdate = (obj) => {
    if (this.state.contacts.find(contact => contact.name === obj.name)) {
      alert(`${obj.name}is alredy in contacts`)
    } else {
      this.setState(PrevState => {
        return {
          contacts: [...PrevState.contacts, {
            id: shortid.generate(),
            name: obj.name,
            number: obj.number
          }]
        };
      });
    };
  };

  onDeleteContact = (contactId) => {
    this.setState(PrevState => {
      return {
        contacts: PrevState.contacts.filter(contact => contact.id !== contactId)
      };
    });
  };

  onSearchContacts = (e) => {
    this.setState(PrevState => {
      return {
        filter: e.target.value,
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const foundContacts = this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
    return (
      <section className="section">
        <h1>Phone Book</h1>
        <ContactForm onSubmit={this.onStateUpdate}/>
        <h2>Contacts</h2>
        <Filter onChange={this.onSearchContacts}/>
        <ContactList 
          foundContacts={foundContacts }
          state={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.onDeleteContact}
        />
        
      </section>
    )
  }
};

export default PhoneBook;