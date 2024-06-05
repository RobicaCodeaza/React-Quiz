import Options from './Options';
import { useQuiz } from './QuizContext';

function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options></Options>
    </div>
  );
}

export default Question;
