import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({ topic }) => {
    const { id, name, logo, total } = topic;
    // console.log(topic);
    return (
        <div>

            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

                <img className="rounded-t-lg bg-teal-100" src={logo} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Total Questions: {total}</p>
                    <Link to={`/quiz/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 rounded-lg mr-2 mb-2">
                        Take The Test
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Topics;