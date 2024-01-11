import styles from '../Statistics/Statistics.module.css';

const Statistics = ({
  goodValue,
  neutralValue,
  badValue,
  total,
  goodPercentage,
}) => {
  return (
    <>
      <p>Good: {goodValue}</p>
      <p>Neutral: {neutralValue}</p>
      <p>Bad: {badValue}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {goodPercentage}%</p>
    </>
  );
};

export default Statistics;
