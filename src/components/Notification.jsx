import PropTypes from 'prop-types';
import { Warning } from './Styles.styled';

export const Notification = ({ message }) => {
  return (
    <>
      <Warning>{message}</Warning>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
