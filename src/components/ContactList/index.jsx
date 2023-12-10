//import { data} from './BoxButtonStyle'
import { useSelector } from 'react-redux';
import Contact from '../Contact';
const FeedbackOptions = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const getFindContact = () => {
    const normalizedFilter = filter.filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul>
      {(filter ? getFindContact() : contacts).map(item => {
        return <Contact key={item.id} item={item} />;
      })}
    </ul>
  );
};
export default FeedbackOptions;
