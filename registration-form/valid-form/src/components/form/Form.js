import React, { useState } from 'react';
import './Form.css'; // You can put the CSS into a separate file for modularity

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    pin: '',
    state: '',
    qualification: '',
    specialization: {
      cs: false,
      it: false,
      arch: false,
      telecom: false
    },
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.mobile.length < 0 || isNaN(formData.mobile)) {
      newErrors.mobile = 'Mobile number must be valid';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    if (formData.pin.length !== 5 || isNaN(formData.pin)) {
      newErrors.pin = 'PIN code must be 5 digits';
    }

    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }

    if (!formData.qualification) {
      newErrors.qualification = 'Qualification is required';
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        specialization: {
          ...formData.specialization,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      alert('Form submitted successfully!');
    } else {
      console.log('Form validation failed.');
    }
  };

  return (
    <div>
      <header>
        <strong className='text'>Data Form Validation</strong>
      </header>
      <main>
        <form onSubmit={handleSubmit} className="form">
          <label>First Name:</label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <label>Last Name:</label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter a valid email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Mobile:</label>
          <input
            type="text"
            placeholder="Only digits allowed"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <label>Qualification:</label>
          <select
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          >
            <option>Select Qualification</option>
            <option>Bachelor's</option>
            <option>Master's</option>
            <option>PhD</option>
          </select>
          {errors.qualification && <p className="error">{errors.qualification}</p>}
          <label>Gender:</label>
          <div className="radio">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            <label>Male</label>

            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            <label>Female</label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <p className="error">{errors.dob}</p>}


          <label>Country:</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
          {errors.state && <p className="error">{errors.state}</p>}

          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
          <label>Address:</label>
          <textarea
            cols="60"
            rows="10"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}

          <label>PIN Code:</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
          {errors.pin && <p className="error">{errors.pin}</p>}


          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Register</button>
        </form>
      </main>
    </div>
  );
};

export default Form;
