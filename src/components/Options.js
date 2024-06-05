import { useQuiz } from './QuizContext';

function Options() {
  const { questions, answer, dispatch, index } = useQuiz();
  const hasAnswered = answer !== null;
  const question = questions[index];
  return (
    <div className='options'>
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
