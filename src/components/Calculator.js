import { PureComponent, Fragment } from 'react';
import Button from './Button';
import './Cal.css';

class Calculator extends PureComponent {
  render() {
    return (
      <>
        <div className="container">
          <div className="result">0</div>
          <div className="buttons">
            <Button classStr="button resetBtn" title="AC" />
            <Button classStr="button negative operator" title="+/-" />
            <Button classStr="button operator percent" title="%" />
            <Button classStr="button operator" title="÷" />
            <Button classStr="button number" title="7" />
            <Button classStr="button number" title="8" />
            <Button classStr="button number" title="9" />
            <Button classStr="button operator" title="x" />
            <Button classStr="button number" title="4" />
            <Button classStr="button number" title="5" />
            <Button classStr="button number" title="6" />
            <Button classStr="button operator" title="-" />
            <Button classStr="button number" title="1" />
            <Button classStr="button number" title="2" />
            <Button classStr="button number" title="3" />
            <Button classStr="button operator" title="+" />
            <Button classStr="button number zero-btn" title="0" />
            <Button classStr="button number dot" title="." />
            <Button classStr="button operator" title="=" />
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
