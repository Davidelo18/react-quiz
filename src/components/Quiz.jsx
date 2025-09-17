import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QuizOverImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
    const [answerState, setAnswerState] = useState("unanswered");
    const [userAnswers, setUserAnswers] = useState([]);
    const questionIndex =
        answerState === "unanswered"
            ? userAnswers.length
            : userAnswers.length - 1;
    const isQuizOver = questionIndex === QUESTIONS.length;

    if (isQuizOver) {
        return (
            <div id="summary">
                <img src={QuizOverImage} alt="quiz over" />
                <h2>Quiz completed!</h2>
            </div>
        );
    }

    const handleClickAnswer = useCallback(
        (selectedAnswer) => {
            setAnswerState("answered");
            const correctAnswer = QUESTIONS[questionIndex].answers[0];
            setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);

            setTimeout(() => {
                if (correctAnswer === selectedAnswer) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }
                setTimeout(() => {
                    setAnswerState("unanswered");
                }, 2500);
            }, 1000);
        },
        [questionIndex]
    );

    const handleSkipAnswer = useCallback(
        () => handleClickAnswer(null),
        [handleClickAnswer]
    );

    return (
        <div id="quiz">
            <Question
                key={questionIndex}
                questionTitle={QUESTIONS[questionIndex].text}
                answers={QUESTIONS[questionIndex].answers}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                handleSkipAnswer={handleSkipAnswer}
                handleClickAnswer={handleClickAnswer}
            />
        </div>
    );
}
