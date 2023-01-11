import React, { useState } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const AddAllergy = (props) => {
  const [allergy, allergyOnChange] = useInput('');

  const saveAllergy = () => {
    if (allergy === '') console.log('invalid input');

    localStorage.setItem('allergy', allergy);
  };
  return (
    <section className="postAllergy">
      <br />
      <label htmlFor="allergy"> Enter Allergy: </label>
      <br />
      <input
        name="name"
        placeholder="e.g., peanut"
        value={allergy}
        onChange={allergyOnChange}
      />
      <br />
      <button type="button" className="button" onClick={saveAllergy}>
        Save
      </button>
      <br />
      <br />
    </section>
  );
};

export default AddAllergy;
