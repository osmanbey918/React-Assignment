// formSchema.js
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(3),
  email: Yup.string().email('Invalid email').required('Email is required'),
  number: Yup.number().required('Number is required'),
  RegNumber: Yup.string().required('RegNumber is required').min(5),
});

export default formSchema;
