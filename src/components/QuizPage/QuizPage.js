import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizPage = () => {
    const data = useLoaderData();
    const quizDetails = data.data;
    // console.log(quizDetails);
    const { total, name, questions } = quizDetails;
    console.log(questions);

    return (
        <div className='bg-purple-50'>
            <h2>Quiz Page of {name}</h2>
            <h3>Total Questions: {total}</h3>
            {
                questions.map(questionDetail => <Questions key={questionDetail.id} questionDetail={questionDetail}></Questions>)
            }
        </div>
    );
};

export default QuizPage;