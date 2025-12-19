import {useContext, useState} from "react";
import {QuizContext, QuizStateContext, ScoreContext} from "@/components/contexts/Contexts.ts";
import {CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft} from "lucide-react";
import {Progress} from "@/components/ui/progress.tsx";

export function PlayQuiz() {

    type answerState = "correct" | "incorrect" | "none";

    const quizContext = useContext(QuizContext);
    const quizStateContext = useContext(QuizStateContext);
    const scoreContext = useContext(ScoreContext);

    if (!quizContext || !quizStateContext || !scoreContext) {
        throw new Error("PlayQuiz must be used within a QuizProvider, QuizStateProvider, and ScoreProvider");
    }

    const { quiz } = quizContext;
    const { setQuizState } = quizStateContext;
    const {setScore } = scoreContext;

    const [index, setIndex] = useState(0);
    const [answerState, setAnswerState] = useState<answerState>("none");

    function handleBack() {
        setQuizState("select");
    }

    function handleAnswer(answerIndex: number) {
        if(answerState === "none"){
            if (quiz && answerIndex === Number(quiz.questions[index].correctAnswer)) {
                setAnswerState("correct");
                setScore((s: number) => s + 1);
            } else {
                setAnswerState("incorrect");
            }
        }
    }

    function handleNext() {
        if (quiz && index < quiz.questions.length - 1) {
            setIndex(i => i + 1);
            setAnswerState("none");
        } else {
            setQuizState("results");
        }
    }

    if(!quiz){
        throw new Error("Quiz is null.")
    }

    const question = quiz.questions[index];

    return (
        <>
            <CardHeader className="relative flex items-center gap-4 justify-center">
                <Button className="absolute left-4" variant="outline" size="icon"
                        onClick={handleBack}><ArrowLeft/></Button>
                <CardTitle>Answer the question!</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col items-center gap-8">
                <Progress value={(index + (answerState !== "none" ? 1 : 0)) / quiz.questions.length * 100}
                          className="h-2.5"/>
                <p className="justify-self-center text-3xl text-center leading-tight">{question.text}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {question.answers.map((answer:string) => {
                        return <Button
                            className="wrap-break-word whitespace-normal h-auto min-h-10"
                            variant={(answerState !== "none") ? Number(question.correctAnswer) === question.answers.indexOf(answer) ? "default" : "ghost" : "outline"}
                            size="lg" key={answer}
                            onClick={() => {
                                handleAnswer(question.answers.indexOf(answer))
                            }}>{answer}</Button>
                    })}
                </div>
                {answerState !== "none" ?
                    <Button className="w-full" variant="secondary" onClick={handleNext}>Next</Button> : null}
            </CardFooter>
        </>
    );
}