import React from "react";
import "./Form.css";

const Form = (props) => {
  const { submit, value, change } = props;
  return (
    <>
      <div className="form-wrap">
        <form onSubmit={submit}>
          <input
            type="text"
            value={value}
            onChange={change}
            placeholder="Wpisz Miasto"
          />
          <button>Wyszukaj</button>
        </form>
      </div>
    </>
  );
};

export default Form;
