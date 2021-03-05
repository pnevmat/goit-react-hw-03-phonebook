import React, {Component} from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import shortid from 'shortid';

import './App.css';

class PhoneBook extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

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