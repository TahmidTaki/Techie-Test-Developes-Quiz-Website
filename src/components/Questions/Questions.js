import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Questions = ({ questionDetail }) => {
    const element = <FontAwesomeIcon icon={faEye} />
    const { question, correctAnswer, options } = questionDetail;
    console.log(question);
    const showAns = () => {
        Swal.fire(
            'Confused? Correct answer is: ',
            ` ${correctAnswer}`,
            'question'
        )
    }

    return (
        <div className='shadow-lg w-5/6 md:w-3/5 lg:w-2/5 mx-auto my-12 p-4 rounded-lg'>
            <h2 className='text-purple-600'>Question: {question} <span onClick={showAns}>{element}</span></h2>
            <p>{options.map(op => <p className='border-2 border-emerald-900 p-4 m-4 rounded-lg hover:bg-orange-200'> {op}</p>)}</p>
        </div>
    );
};

export default Questions;