import {CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useContext} from "react";
import {QuizContext, QuizStateContext, ScoreContext} from "@/components/contexts/Contexts.ts";
import {Progress} from "@/components/ui/progress.tsx";
import {Button} from "@/components/ui/button.tsx";

export function ResultsQuiz() {

    const scoreContext = useContext(ScoreContext);
    const quizContext = useContext(QuizContext);
    const quizStateContext = useContext(QuizStateContext);

    if (!scoreContext || !quizContext || !quizStateContext) {
        throw new Error("ResultsQuiz must be used within a ScoreProvider, QuizProvider, and QuizStateProvider");
    }

    const { score } = scoreContext;
    const { quiz } = quizContext;
    const { setQuizState } = quizStateContext;

    if(!quiz){
        throw new Error("Quiz is null.")
    }

    const amountOfQuestions = quiz.questions.length;

    function handleAgain() {
        setQuizState("select");
    }

    return (
        <>
            <CardHeader>
                <CardTitle>Results</CardTitle>
                <CardDescription>Here is statistic of your answers.</CardDescription>
            </CardHeader>
            <CardContent className="gap-4 flex flex-col">
                <div className="flex justify-between items-center gap-8">
                    <p className="whitespace-nowrap">Your Score
                    is {score} of {amountOfQuestions} ({(score / amountOfQuestions * 100).toPrecision(4)}%)</p>
                    <Progress className="w-1/3" value={score / amountOfQuestions * 100}/>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <p className="whitespace-nowrap">Amount of correct answers is {score} of {amountOfQuestions}</p>
                    <Progress className="w-1/3" value={score / amountOfQuestions * 100}/>
                </div>
                <div className="flex justify-between items-center gap-8">
                    <p className="whitespace-nowrap">Amount of incorrect answers
                    is {amountOfQuestions - score} of {amountOfQuestions}</p>
                    <Progress className="w-1/3" value={(amountOfQuestions - score) / amountOfQuestions * 100}/>
                </div>
            </CardContent>
            <CardFooter className="flex gap-8">
                <p className="">So... Want to try</p>
                <Button variant="outline" className="w-auto grow" onClick={handleAgain}>Again?</Button>
            </CardFooter>
        </>
    )
}