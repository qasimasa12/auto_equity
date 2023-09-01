import React, { useState } from 'react';
import './Modal.css'; // Import the CSS file for styling

export default function ModalFn ({ closeModal, onSubmit, defaultValue }) {


  const [formState, setFormState] = useState(defaultValue);
  console.log(formState)
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.FIRST_NAME && formState.LAST_NAME && formState.Make && formState.Model && formState.Reg_Number&& formState.Muleage && formState.Colour) {
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
            <label htmlFor="FIRST_NAME">FIRST_NAME</label>
            <input name="FIRST_NAME" onChange={handleChange} value={formState.FIRST_NAME} />
          </div>
          <div className="form-group12">
            <label htmlFor="LAST_NAME">LAST_NAME</label>
            <input
              name="LAST_NAME"
              onChange={handleChange}
              value={formState.LAST_NAME}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Make">Make</label>
            <input
              name="Make"
              onChange={handleChange}
              value={formState.Make}
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
          <div className="form-group12">
            <label htmlFor="Muleage">Muleage</label>
            <input
              name="Muleage"
              onChange={handleChange}
              value={formState.Muleage}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Colour">Colour</label>
            <input
              name="Colour"
              onChange={handleChange}
              value={formState.Colour}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Price">Price</label>
            <input
              name="Price"
              onChange={handleChange}
              value={formState.Price}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Monthly_payment">Monthly_payment</label>
            <input
              name="MonthlyPayment"
              onChange={handleChange}
              value={formState.MonthlyPayment}
            />
          </div>
          <div className="form-group12">
            <label htmlFor="Camount_equity">Camount_equity</label>
            <input
              name="Camount_equity"
              onChange={handleChange}
              value={formState.Camount_equity}
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
