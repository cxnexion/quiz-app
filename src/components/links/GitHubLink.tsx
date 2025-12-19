import {Button} from "@/components/ui/button.tsx";
import {Star} from "lucide-react";

export function GitHubLink() {
    return (

        <a href="https://github.com/cxnexion/quiz-app" target="_blank">
            <Button variant="outline" size="icon">
                <Star/>
            </Button>
        </a>

    )
}