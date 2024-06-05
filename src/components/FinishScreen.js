import { useQuiz } from './QuizContext';

function FinishScreen() {
  const { maxPossiblePoints, points, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '✨';
  if (percentage >= 50 && percentage < 80) emoji = '🆙';
  if (percentage < 50) emoji = '🤦🏻‍♀️';

  return (
    <>
      <p className='result'>
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(highscore : {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
