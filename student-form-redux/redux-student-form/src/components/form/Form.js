import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm, setError } from '../../store/formSlice';
import formSchema from '../schema/schema';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    RegNumber: '',
    age: '',
    className: ''
  });

  const [submittedDataList, setSubmittedDataList] = useState([]); // Array to store multiple submitted data
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(''); // Holds the search value
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

      // If valid, prepare the data with serial number
      const newSerialNumber = submittedDataList.length + 1; // Auto-increment serial number

      const newData = {
        ...formData,
        serial: newSerialNumber // Add the serial number to the new data
      };
      
      // Submit the form via Redux
      dispatch(submitForm(newData));
      
      // Add the submitted form data to the list
      setSubmittedDataList([...submittedDataList, newData]);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        number: '',
        RegNumber: '',
        age: '',
        className: ''
      });
    } catch (err) {
      // If validation fails, dispatch an error
      const validationErrors = err.inner.map((error) => error.message);
      dispatch(setError(validationErrors));
    }
  };

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to handle the search and filter the data
  const handleSearchSubmit = () => {
    if (filter) {
      // Use includes() to match any part of the RegNumber
      return submittedDataList.filter(item => item.RegNumber.includes(filter));
    }
    return submittedDataList; // If no filter, return the full list
  };

  const filteredData = handleSearchSubmit(); // Get the filtered data

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
          <label>Phone</label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>RegNumber</label>
          <input
            type="text"
            name="RegNumber"
            value={formData.RegNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Class</label>
          <input
            type="text"
            name="className"
            value={formData.className}
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

      {/* Display Submitted Data and Search Functionality */}
      {submittedDataList.length > 0 && (
        <div>
          <h3>Submitted Data:</h3>
          <label>Search by Reg Number:</label>
          <input
            type="search"
            value={filter}
            onChange={handleInputChange}
            placeholder="Enter part of Reg Number"
          />
          <button onClick={handleSearchSubmit}>Search</button>

          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>No</th>  {/* Added Serial No column */}
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>RegNumber</th>
                <th>Age</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.serial}</td>         {/* Display serial number */}
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.number}</td>
                    <td>{data.RegNumber}</td>
                    <td>{data.age}</td>
                    <td>{data.className}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No student found with that RegNumber</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Form;
