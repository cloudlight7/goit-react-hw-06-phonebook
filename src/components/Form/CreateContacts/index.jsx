//mport React from 'react';
import { FormCard, FormBox, InputName, Input, Button } from './FormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction } from 'store/contacts/contactSlice';
import * as Yup from 'yup';
import { useFormik } from 'formik/dist';
const CreateContactForm = () => {
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(5, 'Too Long!')
        .required('Required name'),
      number: Yup.number()
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
        .required('A phone number is required'),
    }),
    onSubmit: values => {
      if (contacts.find(option => option.name === values.name)) {
        formik.resetForm();
        alert(`${values.name} is already in contact.`);
        return;
      }
      dispatch(addContactsAction(values));
      formik.resetForm();
      //alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <FormCard>
      <form onSubmit={formik.handleSubmit}>
        <FormBox>
          <InputName htmlFor="firstName">Name</InputName>
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <Input
            style={
              formik.touched.name && formik.errors.name
                ? { backgroundColor: 'red' }
                : null
            }
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormBox>
        <FormBox>
          <InputName htmlFor="lastName">Number</InputName>
          {formik.touched.number && formik.errors.number ? (
            <div className="error">{formik.errors.number}</div>
          ) : null}
          <Input
            style={
              formik.touched.number && formik.errors.number
                ? { backgroundColor: 'red' }
                : null
            }
            id="number"
            name="number"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </FormBox>
        <Button type="submit">Submit</Button>
      </form>
    </FormCard>
  );
};
export default CreateContactForm;
