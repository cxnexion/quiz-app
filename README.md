# Quiz App

A simple and interactive quiz application built with React.

This project is a solution for the [Quiz App project](https://roadmap.sh/projects/quiz-app) on roadmap.sh.

## ✨ Features

- Interactive quiz interface
- Multiple-choice questions
- Immediate feedback on answers
- Score tracking

## 🛠️ Built With

- **Framework:** [React](https://react.dev/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Error Handling:** [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 📂 Data Structure

The quiz questions and data are sourced from `src/data/defaultQuiz.json`. The structure of the JSON is designed to be easily extensible.

Here's a breakdown of the `defaultQuiz.json` data structure:

*   `title`: (string) The main title of the quiz.
*   `description`: (string) A brief description of what the quiz is about.
*   `badges`: (array of strings) Keywords or tags related to the quiz topic.
*   `questions`: (array of objects) Contains the list of questions. Each question object has the following properties:
    *   `text`: (string) The question text.
    *   `answers`: (array of strings) A list of possible answers.
    *   `rightAnswer`: (string) The index of the correct answer within the `answers` array.

### Example JSON Structure

```json
{
  "title": "JavaScript Quiz",
  "description": "JavaScript Quiz to test you knowledge.",
  "badges": [
    "JavaScript"
  ],
  "questions": [
    {
      "text": "What is the output of `typeof null`?",
      "correctAnswer": "0",
      "answers": [
        "object",
        "null"
      ]
    }
  ]
}
```

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation
```bash
git clone https://github.com/cxnexion/quiz-app.git
cd quiz-app
npm install
npm run start
```

Or check it live: [GitHub Pages](https://cxnexion.github.io/quiz-app/)

And yeah, AI typed this readme.

It's my first time using TypeScript. I hope that I did it not bad.
