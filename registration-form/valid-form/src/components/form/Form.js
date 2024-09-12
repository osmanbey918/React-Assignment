import React, { useState } from 'react';
import './Form.css';

function Form()  {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      age: '',
      gender: '',
      number: '',
      password: '',
      userId: '',
      zipCode: '',
      country: '',
      address: '',
      language: ''
    });
  
    const [errors, setErrors] = useState({
      name: '',
      email: '',
      age: '',
      gender: '',
      number: '',
      password: '',
      userId: '',
      zipCode: '',
      country: '',
      address: '',
      language: ''
    });
  
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const validate = () => {
      let valid = true;
      let newErrors = { ...errors };
  
      // Basic validation checks
      if (!formData.name || formData.name.length < 2) {
        newErrors.name = 'Name is required and must be at least 2 characters long';
        valid = false;
      }
  
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is required and must be a valid email address';
        valid = false;
      }
  
      if (!formData.age || isNaN(formData.age) || formData.age <= 0 || !Number.isInteger(Number(formData.age))) {
        newErrors.age = 'Age is required, must be a positive integer';
        valid = false;
      }
  
      if (!formData.gender) {
        newErrors.gender = 'Gender is required';
        valid = false;
      }
  
      if (!formData.number || !/^\d{10}$/.test(formData.number)) {
        newErrors.number = 'Phone number is required and must be 10 digits long';
        valid = false;
      }
  
      if (!formData.password || formData.password.length < 6) {
        newErrors.password = 'Password is required and must be at least 6 characters long';
        valid = false;
      }
  
      if (!formData.userId || formData.userId.length < 4) {
        newErrors.userId = 'User ID is required and must be at least 4 characters long';
        valid = false;
      }
  
      if (!formData.zipCode || !/^\d{5}$/.test(formData.zipCode)) {
        newErrors.zipCode = 'Zip code is required and must be 5 digits long';
        valid = false;
      }
  
      if (!formData.country) {
        newErrors.country = 'Country is required';
        valid = false;
      }
  
      if (!formData.address || formData.address.length < 10) {
        newErrors.address = 'Address is required and must be at least 10 characters long';
        valid = false;
      }
  
      if (!formData.language) {
        newErrors.language = 'Language is required';
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      if (validate()) {
        console.log('Form data submitted:', formData);
        // Handle form submission (e.g., send data to an API)
        setFormData({
          name: '',
          email: '',
          age: '',
          gender: '',
          number: '',
          password: '',
          userId: '',
          zipCode: '',
          country: '',
          address: '',
          language: ''
        }); // Reset form
      } else {
        setIsSubmitting(false);
      }
    };
  
    return (
      <div className="form-container">
        <h1>Extended Form</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>
  
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <input
              id="number"
              name="number"
              type="tel"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <p className="error-message">{errors.number}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              id="userId"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
            />
            {errors.userId && <p className="error-message">{errors.userId}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
            {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
            {errors.country && <p className="error-message">{errors.country}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>
  
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <input
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
            {errors.language && <p className="error-message">{errors.language}</p>}
          </div>
  
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      </div>
    );
  }
  
  export default  Form;
