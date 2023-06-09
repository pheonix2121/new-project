import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] =useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length ===0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);

  };
  const inputBlurHandler = () => {
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label> Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} onBlur={inputBlurHandler} />
      </div>
      <Button type="submit" className={!isValid ? 'blur' : ''}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
