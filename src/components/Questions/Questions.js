import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Questions = ({ questionDetail, setWrongCount, setCorrectCount, wrongCount, correctCount }) => {
    const element = <FontAwesomeIcon icon={faEye} />
    const { question, correctAnswer, options } = questionDetail;
    // console.log(question);
    // const [correctCount, setCorrectCount] = useState(0);
    // const [wrongCount, setWrongCount] = useState(0);
    const showAns = () => {
        Swal.fire(
            'Confused? Correct answer is: ',
            ` ${correctAnswer}`,
            'question'
        )

    }

    const checkAns = (op) => {
        if (op === correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'WoW... You chose wisely.',
                showConfirmButton: true,
            })
            setCorrectCount(correctCount + 1)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...not the right answer',
                text: 'Try again!',
            })
            setWrongCount(wrongCount + 1)
        }
    }

    return (
        <div className='shadow-lg w-5/6 md:w-3/5 lg:w-2/5 mx-auto my-12 p-4 rounded-lg bg-white-500'>
            <h2 className='text-purple-600 italic font-semibold'>Question: {question} <span onClick={showAns}>{element}</span></h2>
            <p>{options.map(op => <p className='text-white font-semibold p-4 m-4 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:font-bold' onClick={() => checkAns(op)}> {op}</p>)}</p>
        </div>
    );
};

export default Questions;