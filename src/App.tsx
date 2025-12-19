import {ThemePicker} from "@/components/theme/ThemePicker.tsx";
import {ThemeProvider} from "@/components/theme/ThemeProvider.tsx";
import {Quiz} from "@/components/appStates/Quiz.tsx";
import {GitHubLink} from "@/components/links/GitHubLink.tsx";
import {ErrorBoundary} from "react-error-boundary";
import {ErrorQuiz} from "@/components/appStates/ErrorQuiz.tsx";

function App() {

    return (
        <ThemeProvider>
            <div className={`w-screen h-screen bg-background p-2 flex flex-col gap-2`}>
                <ThemePicker/>
                <GitHubLink/>
                <ErrorBoundary fallback={<ErrorQuiz/>}>
                    <Quiz/>
                </ErrorBoundary>
            </div>
        </ThemeProvider>
    )
}

export default App