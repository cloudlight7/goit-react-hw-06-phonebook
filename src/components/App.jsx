import ContactForm from './Form/CreateContacts';
import ContactList from './ContactList';
import Filter from './Filter';
import { Sections } from './SectionStyle';
export const App = () => {
  return (
    <Sections>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Sections>
  );
};
