import {Button} from "@/components/ui/button.tsx";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export function ErrorQuiz() {

    return (
        <>
            <Card className="w-xl max-w-[95vw] self-center shadow-lg">
                <CardHeader><CardTitle>Something went wrong</CardTitle>
<CardDescription>Some error happened. I don't know is it your fault or my fault.</CardDescription>

                </CardHeader>
                <CardFooter>
                    <a href=""><Button>Reload page</Button></a>
                </CardFooter>
            </Card>
        </>
    )
}