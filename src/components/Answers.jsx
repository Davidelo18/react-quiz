import { useRef } from "react";

export default function Answers({
    answers,
    answerState,
    selectedAnswer,
    handleClickAnswer,
}) {
    const shuffledAnswers = useRef();
    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                let cssClass = "";
                const isSelected = answer === selectedAnswer;

                if (answerState === "answered" && isSelected) {
                    cssClass = "selected";
                }

                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    cssClass = answerState;
                }

                return (
                    <li key={answer} className="answer">
                        <button
                            className={cssClass}
                            onClick={() => handleClickAnswer(answer)}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
