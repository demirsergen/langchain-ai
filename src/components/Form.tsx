import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
  const [formData, setFormData] = useState({
    market: '',
    audiance: '',
    goal: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const formStyles = 'p-2 bg-gray-400 w-1/3 rounded';
  const inputStyles = 'p-1 text-sm rounded w-2/3';
  const containerStyles = 'p-1 flex justify-between';
  const buttonStyles = 'p-1 rounded bg-gray-200 block mx-auto';
  return (
    <form className={formStyles}>
      <div className={containerStyles}>
        <label htmlFor="market">Market:</label>
        <input
          type="text"
          id="market"
          name="market"
          className={inputStyles}
          value={formData.market}
          onChange={handleChange}
        />
      </div>
      <div className={containerStyles}>
        <label htmlFor="audiance">Audiance:</label>
        <input
          type="text"
          id="audiance"
          name="audiance"
          className={inputStyles}
          value={formData.audiance}
          onChange={handleChange}
        />
      </div>
      <div className={containerStyles}>
        <label htmlFor="goal">Goal:</label>
        <input
          type="text"
          id="goal"
          name="goal"
          className={inputStyles}
          value={formData.goal}
          onChange={handleChange}
        />
      </div>
      <Button
        text="Submit"
        callback={handleSubmit}
        style={buttonStyles}
      />
    </form>
  );
};

export default Form;
