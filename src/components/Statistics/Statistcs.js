import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const Statistcs = () => {
    const topicsData = useLoaderData();
    const data = topicsData.data;
    // const data=topics;
    // console.log(topics);
    return (
        <div className='place-items-center'>
            <h3 className='mb-12 mt-12'>Questions by Topic Category Statistics</h3>
            <LineChart className='mx-auto'
                width={370}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistcs;