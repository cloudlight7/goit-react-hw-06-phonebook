import { useDispatch } from 'react-redux';
import { Input } from './FilterStyle';
import { addFilterAction } from 'store/filter/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const onChange = ({ target: { value } }) => {
    dispatch(addFilterAction(value));
  };

  //console.log(item);
  return (
    <>
      <p>Find contacts by name</p>
      <Input
        onChange={onChange}
        placeholder="Search..."
        name="filter"
        type="text"
      />
    </>
  );
};
export default Filter;
