import React, { useState, useEffect } from 'react';
import './Cal.css';
import calculate from '../logic/calculate';
import Buttons from './Buttons';

const Calculator = () => {
  const [objectState, setObjectState] = useState({});
  useEffect(() => {
    setObjectState({
      total: '0',
      next: null,
      operation: null,
    });
  }, []);

  const onBtnClick = (title) => {
    setObjectState(calculate(objectState, title));
  };
  const { total, next, operation } = objectState;
  return (
    <>
      <div className="container">
        <h2 className="title"> Let&apos;s do some maths </h2>
        <div className="result">
          {total || ''}
          {operation || ''}
          {next || ''}
        </div>
        <div className="buttons">
          <Buttons onBtnClick={onBtnClick} />
        </div>
      </div>
    </>
  );
};

export default Calculator;
