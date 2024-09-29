import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, setError } from '../../store/formSlice';
import formSchema from '../schema/schema';

function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedDataList, setSubmittedDataList] = useState([]); // Array to store multiple submitted data
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

      // Add the submitted form data to the list
      setSubmittedDataList([...submittedDataList, formData]);

      // Reset form
      setFormData({ name: '', email: '' });
    } catch (err) {
      // If validation fails, dispatch an error
      const validationErrors = err.inner.map((error) => error.message);
      dispatch(setError(validationErrors));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>number</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
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

      {/* Display Submitted Data in Rows */}
      {submittedDataList.length > 0 && (
        <div>
          <h3>Submitted Data:</h3>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {submittedDataList.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;
