import PropTypes from 'prop-types';
import { ButtonWrapper, FeedbackBtn } from 'components/Styles.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonWrapper>
    {options.map(option => (
      <FeedbackBtn
        key={option.toLowerCase()}
        type="button"
        name={option.toLowerCase()}
        onClick={e => onLeaveFeedback(e.target.name)}
      >
        {option}
      </FeedbackBtn>
    ))}
  </ButtonWrapper>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
