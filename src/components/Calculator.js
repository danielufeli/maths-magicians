import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Cal.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({});
  useEffect(() => {
    setObj({
      total: '0',
      next: null,
      operation: null,
    });
  }, []);

  const onBtnClick = (title) => {
    setObj(calculate(obj, title));
  };
  const { total, next, operation } = obj;
  return (
    <>
      <div className="container">
        <div className="result">
          { total || '' }
          { operation || '' }
          { next || '' }
        </div>
        <div className="buttons">
          <Button classStr="button resetBtn" onBtnClick={onBtnClick} title="AC" />
          <Button classStr="button negative operator" onBtnClick={onBtnClick} title="+/-" />
          <Button classStr="button operator percent" onBtnClick={onBtnClick} title="%" />
          <Button classStr="button operator" onBtnClick={onBtnClick} title="÷" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="7" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="8" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="9" />
          <Button classStr="button operator" onBtnClick={onBtnClick} title="x" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="4" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="5" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="6" />
          <Button classStr="button operator" onBtnClick={onBtnClick} title="-" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="1" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="2" />
          <Button classStr="button number" onBtnClick={onBtnClick} title="3" />
          <Button classStr="button operator" onBtnClick={onBtnClick} title="+" />
          <Button classStr="button number zero-btn" onBtnClick={onBtnClick} title="0" />
          <Button classStr="button number dot" onBtnClick={onBtnClick} title="." />
          <Button classStr="button operator" onBtnClick={onBtnClick} title="=" />
        </div>
      </div>
    </>
  );
};

export default Calculator;
