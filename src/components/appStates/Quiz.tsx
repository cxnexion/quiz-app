import {useState} from "react";
import {SelectQuiz} from "@/components/appStates/SelectQuiz.tsx";
import {Card} from "@/components/ui/card.tsx";
import {PlayQuiz} from "@/components/appStates/PlayQuiz.tsx";
import {ResultsQuiz} from "@/components/appStates/ResultsQuiz.tsx";
import {
    QuizContext,
    QuizStateContext,
    ScoreContext,
    type quizState,
    type quiz
} from "@/components/contexts/Contexts.ts";



export function Quiz() {

    const [quizState, setQuizState] = useState<quizState>("select");
    const [quiz, setQuiz] = useState<quiz | null>(null);
    const [score, setScore] = useState<number>(0);

    return (
        <QuizContext value={{quiz, setQuiz}}>
            <ScoreContext value={{score, setScore}}>
                <QuizStateContext value={{quizState, setQuizState}}>
                    <Card className="w-xl max-w-[95vw] self-center shadow-lg">
                        {quizState === "select" && <SelectQuiz/>}
                        {quizState === "play" && <PlayQuiz/>}
                        {quizState === "results" && <ResultsQuiz/>}
                    </Card>
                </QuizStateContext>
            </ScoreContext>
        </QuizContext>
    )
}