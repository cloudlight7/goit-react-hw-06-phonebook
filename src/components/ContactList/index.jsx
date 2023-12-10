//import { data} from './BoxButtonStyle'
import { useSelector } from 'react-redux';
import Contact from '../Contact';
const FeedbackOptions = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  // const data = useSelector(state => state);
  /* const normalizedFilter = filter.filter.toLowerCase();
  const data = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(data);*/
  //const contacts = [];
  /*const normalizedFilter = data.filter.toLowerCase();
  const contacts = data.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
    */
  const getFindContact = () => {
    const normalizedFilter = filter.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  //filter && console.log(getFindContact());
  return (
    <ul>
      {(filter ? getFindContact() : contacts).map(item => {
        return <Contact key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default FeedbackOptions;
