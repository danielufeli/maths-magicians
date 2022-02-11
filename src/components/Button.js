import { PureComponent, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import './Cal.css';

class Button extends PureComponent {
  render() {
    const { classStr, title } = this.props;
    return (
      <>
        <button type="button" className={classStr}>{title}</button>
      </>
    );
  }
}

Button.propTypes = {
  classStr: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
