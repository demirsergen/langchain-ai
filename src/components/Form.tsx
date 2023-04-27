import React, { useState } from 'react';
import Button from './Button';

const Form = () => {
  const [formData, setFormData] = useState({
    market: '',
    audiance: '',
    goals: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form>
      <div>
        <label htmlFor="market">Market:</label>
        <input
          type="text"
          id="market"
          name="market"
          value={formData.market}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="audiance">Audiance:</label>
        <input
          type="text"
          id="audiance"
          name="audiance"
          value={formData.audiance}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goals">Goals:</label>
        <input
          type="text"
          id="goals"
          name="goals"
          value={formData.goals}
          onChange={handleChange}
        />
      </div>
      <Button text="Submit" callback={handleSubmit} />
    </form>
  );
};

export default Form;
