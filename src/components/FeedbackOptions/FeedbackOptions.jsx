import style from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, leaveFeedback }) => {
  const buttonElements = options.map(name => (
    <button onClick={() => leaveFeedback(name)} key={name}>
      {name}
    </button>
  ));
  return buttonElements;
};

export default FeedbackOptions;
