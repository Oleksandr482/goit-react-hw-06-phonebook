import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
// import { useState } from 'react';
// import { useLocaleStorage } from 'hooks/useLocaleStorage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // const [filter, setFilter] = useState(useSelector(getFilterValue));

  // const [contacts, setContacts] = useLocaleStorage(startContacts);

  // const filterInput = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const addContact = contact => {
  //   if (
  //     contacts.find(item => {
  //       return item.name === contact.name;
  //     })
  //   ) {
  //     return alert(`${contact.name} is already in contacts`);
  //   } else {
  //     setContacts(prevState => [...prevState, contact]);
  //   }
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  // const filteredContacts = contacts
  //   .filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   })
  //   .sort((f, s) => f.name.localeCompare(s.name));

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
