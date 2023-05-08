import PropTypes from 'prop-types';
import { SectionName } from './Styles.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <SectionName>{title}</SectionName>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
