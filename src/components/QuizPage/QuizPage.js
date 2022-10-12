import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const data = useLoaderData();
    const quizDetails = data.data;
    // console.log(quizDetails);
    const { total, name, questions } = quizDetails;
    console.log(questions);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    return (
        <div className='bg-purple-50'>

            <h2>Quiz Page of {name}</h2>
            <h3>Total Questions: {total}</h3>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Correct Answer: {correctCount}</span>
            <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Wrong Answer: {wrongCount}</span>
            {
                questions.map(questionDetail => <Questions key={questionDetail.id} questionDetail={questionDetail} setCorrectCount={setCorrectCount} setWrongCount={setWrongCount} correctCount={correctCount} wrongCount={wrongCount}></Questions>)
            }
        </div>
    );
};

export default QuizPage;