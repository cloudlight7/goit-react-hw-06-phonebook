//mport React from 'react';
import { FormCard, FormBox, InputName, Input, Button } from './FormStyle';
import { useDispatch } from 'react-redux';
import { addContactsAction } from 'store/contacts/contactSlice';
import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

/*
import { Formik, ErrorMessage } from 'formik';
import { FormStyled, FormButton, FormInput } from './ContactFormFormik.styled';
import { nanoid } from 'nanoid';

import * as yup from 'yup';
*/
const schema = Yup.object().shape({
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
});

const CreateContactForm = () => {
  const dispatch = useDispatch();
  //const nameId = nanoid();
  //const numberId = nanoid();
  const qwe = () => {
    console.log('qwe');
  };
  const handleSubmit = (values, actions) => {
    console.log('values');
    //await onSubmit(values);
    //actions.setSubmitting(false);
    actions.resetForm();
    dispatch(addContactsAction(values));
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormCard>
        <FormBox>
          <InputName htmlFor="name">
            Name
            <Input
              id="name"
              type="text"
              name="name"
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            ></Input>
            <ErrorMessage name="name" component="div" />
          </InputName>
        </FormBox>
        <FormBox>
          <InputName htmlFor="number">
            Number
            <Input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            ></Input>
            <ErrorMessage name="number" component="div" />
          </InputName>
        </FormBox>

        <Button type="submit">Add contact</Button>
      </FormCard>
    </Formik>
  );
};
export default CreateContactForm;
/* <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>*/
/*
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormCard>
        <FormBox>
          <InputName htmlFor="name">
            Name
            <Input
              id="name"
              type="text"
              name="name"
              required
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            ></Input>
            <ErrorMessage name="name" component="div" />
          </InputName>
        </FormBox>
        <FormBox>
          <InputName htmlFor="number">
            Number
            <Input
              id="number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            ></Input>
            <ErrorMessage name="number" component="div" />
          </InputName>
        </FormBox>

        <Button type="submit">Add contact</Button>
      </FormCard>
    </Formik>
    */
/*
const CreateContactForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: values => {
      formik.resetForm();
      dispatch(addContactsAction(values));
    },
    validate: values => { 
      yup.object().shape({
        name: yup
          .string()
          .min(2, 'Too Short!')
          .max(5, 'Too Long!')
          .required('Required name'),
        number: yup
          .number()
          .typeError("That doesn't look like a phone number")
          .positive("A phone number can't start with a minus")
          .integer("A phone number can't include a decimal point")
          .min(8)
          .required('A phone number is required'),
      });
    }
    /*validate: values => {
      let errors = {};
      if (!values.name) {
        errors.name = 'Required!';
      } else if (values.number.length > 0) {
        if (
          !/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/i.test(
            values.number
          )
        ) {
          errors.number = 'Invalid number format!';
        }
      }
      return errors;
    },
  });
  return (
    <FormCard>
      <form onSubmit={formik.handleSubmit}>
        <FormBox>
          <InputName htmlFor="firstName">Name</InputName>
          {formik.errors.name && (
            <div className="error">{formik.errors.name}</div>
          )}
          <Input
            style={formik.errors.name && { backgroundColor: 'red' }}
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormBox>
        <FormBox>
          <InputName htmlFor="lastName">Number</InputName>
          {formik.errors.number && (
            <div className="error">{formik.errors.number}</div>
          )}
          <Input
            style={formik.errors.number && { backgroundColor: 'red' }}
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
};*/
//export default CreateContactForm;
