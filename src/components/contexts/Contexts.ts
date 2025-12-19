import {createContext, type Dispatch, type SetStateAction} from "react";

export const QuizContext = createContext<QuizContextType | undefined>(undefined);
export const QuizStateContext = createContext<QuizStateContextType | undefined>(undefined);
export const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export type QuizContextType = {
    quiz: quiz | null;
    setQuiz: (newQuiz: quiz | null) => void;
};

export type QuizStateContextType = {
    quizState: quizState | null;
    setQuizState: (newQuizState:quizState) => void;
};

export type ScoreContextType = {
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
};

export type quizState = "select" | "play" | "results";

export type quiz = {
    title: string;
    description: string;
    badges: string[];
    questions: question[];
};

export type question = {
    text: string;
    answers: string[];
    correctAnswer: string;
};