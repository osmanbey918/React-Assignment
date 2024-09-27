import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, setError } from '../../store/formSlice';
import formSchema from '../schema/schema';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const dispatch = useDispatch();
  const formError = useSelector((state) => state.form.error);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate form data with Yup
      await formSchema.validate(formData, { abortEarly: false });
      // If valid, submit the form via Redux
      dispatch(submitForm(formData));
    } catch (err) {
      // If validation fails, dispatch an error
      const validationErrors = err.inner.map((error) => error.message);
      dispatch(setError(validationErrors));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>

      {formError && (
        <div>
          {formError.map((error, index) => (
            <p key={index} style={{ color: 'red' }}>
              {error}
            </p>
          ))}
        </div>
      )}
    </form>
  );
}

export default Form;
