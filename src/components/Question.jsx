import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
    questionTitle,
    answers,
    answerState,
    selectedAnswer,
    handleSkipAnswer,
    handleClickAnswer,
}) {
    return (
        <div id="question">
            <QuestionTimer timeout={15000} onTimeout={handleSkipAnswer} />
            <h2>{questionTitle}</h2>
            <Answers
                answers={answers}
                answerState={answerState}
                selectedAnswer={selectedAnswer}
                handleClickAnswer={handleClickAnswer}
            />
        </div>
    );
}
