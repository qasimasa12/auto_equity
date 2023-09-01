import React, { useState } from 'react';
import './UserModal.css'; // Import the CSS file for styling

export default function ModalFn ({ closeModal, onSubmit, defaultValue,setSaved}) {


  const [formState, setFormState] = useState(defaultValue);
  console.log(formState)
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.userName && formState.email && formState.userType) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);
    setSaved((prev)=>!prev)
    closeModal();
  };

  return (
   <div
      className="modal-container12"
      onClick={(e) => {
        if (e.target.className === "modal-container12") closeModal();
      }}
    >
      <div className="modal12">
        <form>
          <div className="form-group12">
            <label htmlFor="userName">Username</label>
            <input name="userName" onChange={handleChange} value={formState.userName} />
          </div>
          <div className="form-group12">
            <label htmlFor="email">email</label>
            <input
              name="email"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="userType">Role</label>
            <input
              name="userType"
              onChange={handleChange}
              value={formState.userType}
            />
          </div>
          {errors && <div className="error12">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn12" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
