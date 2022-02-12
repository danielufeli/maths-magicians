import { PureComponent, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import './Cal.css';

class Button extends PureComponent {
  render() {
    const { classStr, title, onBtnClick } = this.props;
    return (
      <>
        <button type="button" className={classStr} onClick={() => onBtnClick(title)}>{title}</button>
      </>
    );
  }
}

Button.propTypes = {
  classStr: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
