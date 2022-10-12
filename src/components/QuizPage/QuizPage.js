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
            <div className='relative'>

                <h2 className='text-3xl font-bold'>Quiz Page of <span className='italic text-fuchsia-500 '> {name}</span></h2>
                <h3 className='underline decoration-sky-500 text-xl'>Total Questions: {total}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-4 py-2 rounded dark:bg-blue-200 dark:text-blue-800 fixed top-18 right-0">Correct Answer: {correctCount}</span>
                <span class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-4 py-2 rounded dark:bg-red-200 dark:text-red-900 fixed top-20 right-0">Wrong Answer: {wrongCount}</span>
            </div>
            {
                questions.map(questionDetail => <Questions key={questionDetail.id} questionDetail={questionDetail} setCorrectCount={setCorrectCount} setWrongCount={setWrongCount} correctCount={correctCount} wrongCount={wrongCount}></Questions>)
            }
        </div>
    );
};

export default QuizPage;