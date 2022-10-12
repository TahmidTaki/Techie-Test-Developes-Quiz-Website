import React from 'react';

const Questions = ({ questionDetail }) => {
    const { question, correctAnswer, options } = questionDetail;
    console.log(question);
    return (
        <div className='shadow-lg w-5/6 md:w-3/5 lg:w-2/5 mx-auto my-12 p-4 rounded-lg'>
            <h2 className='text-purple-600'>Question: {question}</h2>
            <p>{options.map(op => <p className='border-2 border-emerald-900 p-4 m-4 rounded-lg hover:bg-orange-200'> {op}</p>)}</p>
        </div>
    );
};

export default Questions;