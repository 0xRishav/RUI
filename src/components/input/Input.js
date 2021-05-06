import React from "react";
import "./Input.css";

function Input() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
        <label for="name" class="form__label">
          Input Field
        </label>
      </div>
    </div>
  );
}

export default Input;
