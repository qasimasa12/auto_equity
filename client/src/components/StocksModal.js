import React, { useState } from 'react';
import './StocksModal.css'; // Import the CSS file for styling

export default function ModalFn ({ closeModal, onSubmit, defaultValue }) {


  const [formState, setFormState] = useState(defaultValue);
  console.log(formState)
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.LEAD_NAME && formState.Address && formState.Model && formState.Reg_Number) {
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
            <label htmlFor="LEAD_NAME">LEAD_NAME</label>
            <input name="LEAD_NAME" onChange={handleChange} value={formState.LEAD_NAME} />
          </div>
          <div className="form-group12">
            <label htmlFor="Address">Address</label>
            <input
              name="Address"
              onChange={handleChange}
              value={formState.Address}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Model">Model</label>
            <input
              name="Model"
              onChange={handleChange}
              value={formState.Model}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Reg_Number">Reg_Number</label>
            <input
              name="Reg_Number"
              onChange={handleChange}
              value={formState.Reg_Number}
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
