import { useQuiz } from './QuizContext';

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className='start'>
      <h2>Welcome to the React QUIZ!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
