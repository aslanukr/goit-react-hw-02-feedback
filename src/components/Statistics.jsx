import PropTypes from 'prop-types';
import {
  Info,
  Total,
  InfoWrapper,
  StatsWrapper,
  Percentage,
} from 'components/Styles.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <InfoWrapper>
    <StatsWrapper>
      <Info>Good: {good}</Info>
      <Info>Neutral: {neutral}</Info>
      <Info>Bad: {bad}</Info>
    </StatsWrapper>
    <Total>TOTAL: {total}</Total>
    <Percentage>Positive feedback: {positivePercentage}%</Percentage>
  </InfoWrapper>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
