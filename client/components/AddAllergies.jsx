import React, { useState, useEffect } from 'react';

const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};

const AddAllergies = (props) => {
  const [allergy, allergyOnChange] = useInput('');
  // const [dish, dishOnChange] = useInput('');

  //we can either save this to a database, or just checkAllergies in the fetch request
  const saveAllergies = () => {
    if (allergy === '' || meal === '') console.log('invalid input');
    const body = {
      allergy,
      dish,
    };
    fetch('/api/postAllergies', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log('error checking allergies'));
  };
  return (
    <section className="postAllergies">
      <br />
      <label htmlFor="allergies"> Enter Allergies: </label>
      <br />
      <input
        name="name"
        placeholder="e.g., peanuts"
        value={allergy}
        onChange={allergyOnChange}
      />
      <br />
      {/* <label htmlFor="dish">Enter dish: </label>
      <br />
      <input
        name="dish"
        placeholder="Pad Thai"
        value={dish}
        onChange={dishOnChange}
      /> */}
      <button type="button" className="button" onClick={saveAllergies}>
        Save
      </button>
      <br />
      <br />
    </section>
  );
};

export default AddAllergies;
