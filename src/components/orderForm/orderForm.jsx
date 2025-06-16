// import React, { useState } from 'react';
import "./orderForm.css"

import { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    city: '',
    address: '',
    orderName: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'city':
        if (!value.trim()) {
          error = 'City is required';
        } else if (/\d/.test(value)) {
          error = 'City name cannot contain numbers';
        } else if (value.trim().length < 2) {
          error = 'City name must be at least 2 characters';
        }
        break;

      case 'address':
        if (!value.trim()) {
          error = 'Address is required';
        } else if (value.trim().length < 10) {
          error = 'Please enter a complete address (minimum 10 characters)';
        }
        break;

      case 'orderName':
        if (!value.trim()) {
          error = 'Order name is required';
        } else if (/\d/.test(value)) {
          error = 'Order name cannot contain numbers';
        } else if (value.trim().length < 2) {
          error = 'Order name must be at least 2 characters';
        }
        break;

      case 'phoneNumber':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value.replace(/\s/g, ''))) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = () => {
    // Validate all fields
    const newErrors = {};
    const newTouched = {};

    Object.keys(formData).forEach(key => {
      newTouched[key] = true;
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    setTouched(newTouched);

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Order submitted successfully!');
      // Reset form
      setFormData({
        email: '',
        city: '',
        address: '',
        orderName: '',
        phoneNumber: ''
      });
      setErrors({});
      setTouched({});
    }
  };

  return (
      <div className="order-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your email"
            className={errors.email && touched.email ? 'error' : ''}
          />
          {errors.email && touched.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your city"
            className={errors.city && touched.city ? 'error' : ''}
          />
          {errors.city && touched.city && (
            <span className="error-message">{errors.city}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full address"
            rows="3"
            className={errors.address && touched.address ? 'error' : ''}
          />
          {errors.address && touched.address && (
            <span className="error-message">{errors.address}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="orderName">Order Name</label>
          <input
            type="text"
            id="orderName"
            name="orderName"
            value={formData.orderName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter order name"
            className={errors.orderName && touched.orderName ? 'error' : ''}
          />
          {errors.orderName && touched.orderName && (
            <span className="error-message">{errors.orderName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your phone number"
            className={errors.phoneNumber && touched.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <span className="error-message">{errors.phoneNumber}</span>
          )}
        </div>

        <button type="button" onClick={handleSubmit} className="submit-btn">
          Submit Order
        </button>
              </div>


  );
};

export default OrderForm;