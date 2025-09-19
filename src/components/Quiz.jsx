import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const questionIndex = userAnswers.length;
    const isQuizOver = questionIndex === QUESTIONS.length;

    const handleClickAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(
        () => handleClickAnswer(null),
        [handleClickAnswer]
    );

    if (isQuizOver) {
        return <Summary userAnswers={userAnswers} />;
    }

    return (
        <div id="quiz">
            <Question
                key={questionIndex}
                index={questionIndex}
                handleSkipAnswer={handleSkipAnswer}
                handleClickAnswer={handleClickAnswer}
            />
        </div>
    );
}
