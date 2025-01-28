import React, { useState } from 'react';

const UserForm = ({ user, onClose, onSubmit }) => {
  const [formData, setFormData] = useState(
    user || { id: '', name: '', email: '', department: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </div>
        <div className="action-buttons">
          <button type="submit" className="button button-primary">
            Submit
          </button>
          <button
            type="button"
            onClick={onClose}
            className="button button-danger"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;