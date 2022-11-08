import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useLocaleStorage(startContacts);
  // const [filter, setFilter] = useState('');

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
