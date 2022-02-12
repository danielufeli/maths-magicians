import { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import Button from './Button';

const Buttons = (props) => {
  const { onBtnClick } = props;
  return (
    <>
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
    </>
  );
};

Buttons.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};

export default Buttons;
