import React, { useState } from 'react';
import styles from './TextAreaWithInstructions.module.css';

const TextAreaWithInstructions = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit(input); 
    setInput(''); 
  };
  return (
    <form onSubmit={handleSubmit} className="d-flex flex-wrap">
      <div className="left-column">
        <textarea
          className="form-control"
          rows="10"
          placeholder="Enter comma-separated numbers here..."
          value={input}
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="right-column">
        <div className="instructions">
          Enter a list of numbers separated by commas.<br />
          Example: 98980, 98981, 98982<br />
          More instructions here...
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
    </form>
  );
};

export default TextAreaWithInstructions;