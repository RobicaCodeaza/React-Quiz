import { useQuiz } from './QuizContext';

function Progress() {
  const { numQuestions, index, points, maxPossiblePoints, answer } = useQuiz();

  return (
    <header className='progress'>
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
