import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const HomePage = () => {
    const topicsData = useLoaderData();
    const topics = topicsData.data;
    // console.log(topics);

    return (
        <div>
            <Header></Header>
            <div className='container w-full flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center'>
                    {
                        topics.map(topic => <Topics key={topic.id} topic={topic}></Topics>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;