import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";

export default () => {
  const [inputName, setInputName] = useState(null);
  const inputElement = useRef(null);

  const inputChange = (e) => {
    setInputName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const sendForm = async () => {
      const url = new URL("https://ergonauts.zajdzik.com/ranking");
      const params = { name: inputName, score: window.actualDistance };
      url.search = new URLSearchParams(params).toString();
      fetch(url);

      const response = await fetch(url, {
        method: "POST",
      });
      const data = await response.json();

      if (data.length) {
        window.location.reload();
      }
    };
    sendForm();
  };

  return (
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="modal-header"> CONGRATS! </div>
          <div className="content">
            You take's <strong>{window.actualDistance}</strong> points.
          </div>
          <div className="actions">
            Leave your nickname for Hall of fame!
            <br />
            <form className="form-wrapper" onSubmit={(e) => handleSubmit(e)}>
              <input
                required
                ref={inputElement}
                onChange={inputChange}
                type="text"
                name="name"
              ></input>
              <button type="submit" className="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </Popup>
  );
};
