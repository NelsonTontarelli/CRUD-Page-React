import "../styles/CreateForm.css";
import { useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

function CreateForm({ titles, sendDataF, changeCreateBtn }) {
  const [formData, setFormData] = useState({});

  function handleSave() {
    // enviarData(formData);
    //! PEDIR EXPLICACIÓN DE ESTO
    const formDataLength = Object.values(formData).length 
    const titleLength = Object.values(titles).length -1
    const formValidation = formDataLength === titleLength

    if (formValidation) {
      sendDataF(formData);
    } else {
      toast.error("Some fields are Empty!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Flip,
      });
    }
  }

  function handleChange(event) {
    //! PEDIR EXPLICACION A ESTO
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <>
      <div className="createForm-container">
        <ToastContainer />
        <form className="createForm-fm">
          <button
            className="btn-form cancel-btn"
            type="button"
            onClick={() => changeCreateBtn()}
          >
            Cancel
          </button>
          <button className="btn-form save-btn" type="button" onClick={handleSave}>
            Save
          </button>
          <div className="createForm-div">
            <h1 className="createForm-title">Creating a record</h1>
            {titles.map((title) =>
              title.val !== "ID" ? (
                <div
                  key={title.id}
                  className="createForm-input-container user-box"
                >
                  <input
                    type="text"
                    name={title.val}
                    className="createForm-input"
                    // placeholder={title.val}
                    onChange={handleChange}
                    required
                  />
                  <label key={title.id}>{title.val}</label>
                </div>
              ) : null
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateForm;
