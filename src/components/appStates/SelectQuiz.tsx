import {CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Input} from "@/components/ui/input.tsx";
import defaultQuizData from "@/data/defaultQuiz.json";
import {Button} from "@/components/ui/button.tsx";
import {type ChangeEvent, useContext} from "react";
import {Item, ItemDescription, ItemTitle} from "@/components/ui/item.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import {type quiz, QuizContext, QuizStateContext, ScoreContext} from "@/components/contexts/Contexts.ts";

export function SelectQuiz() {

    const quizContext = useContext(QuizContext);
    const quizStateContext = useContext(QuizStateContext);
    const scoreContext = useContext(ScoreContext);

    if (!quizContext || !quizStateContext || !scoreContext) {
        throw new Error("SelectQuiz must be used within a QuizProvider, QuizStateProvider, and ScoreProvider");
    }

    const { quiz, setQuiz } = quizContext;
    const { setQuizState } = quizStateContext;
    const { setScore } = scoreContext;

    const defaultQuiz:quiz = defaultQuizData;

    function handleDefault() {
        setQuiz(defaultQuiz);
    }

   async function handleInput(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const fileJSON =JSON.parse(await file.text());
            setQuiz(fileJSON);
        }
    }

    function handleQuiz() {
        setQuizState("play");
        setScore(0);
    }

    return (
        <>
            <CardHeader>
                <CardTitle>Select quiz</CardTitle>
                <CardDescription>
                    Import your or use default one.
                </CardDescription>
                <CardAction><a target="_blank" href="https://github.com/cxnexion/quiz-app/blob/master/README.md"><Button variant="link">Custom quiz?</Button></a></CardAction>

            </CardHeader>
            <CardContent>
                {quiz ? <Item variant="outline" className="flex flex-col items-start">
                        <ItemTitle>{quiz.title}</ItemTitle>
                        <ItemDescription>{quiz.description}</ItemDescription>
                        <div className="flex gap-2">{quiz.badges.map((badge: string) => {
                            return <Badge variant="default" key={quiz.badges.indexOf(badge)}>{badge}</Badge>
                        })}</div>
                    </Item>
                    :
                    <Item variant="outline" className="flex flex-col items-start">
                        <Skeleton className="w-24 h-4"></Skeleton>
                        <Skeleton className="w-56 h-4"></Skeleton>
                        <Skeleton className="w-16 h-4"></Skeleton>
                    </Item>
                }
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
                <Input type="file" accept=".json" onChange={handleInput}/>
                <div className="w-full gap-2 flex flex-col">
                    <Button className="w-full" variant="outline" disabled={quiz === undefined} onClick={handleQuiz}>Play
                        Quiz</Button>
                    <Button className="w-full" variant="secondary" onClick={handleDefault}>Use default quiz</Button>
                </div>

            </CardFooter>

        </>
    )
}
