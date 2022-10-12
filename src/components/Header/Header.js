import React from 'react';

const Header = () => {

    return (
        <div>
            <div className="mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
                <div className="flex justify-center">
                    <iframe src="https://embed.lottiefiles.com/animation/112900" frameBorder="0" title='quizAnimate'></iframe>
                </div>
                <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                        Welcome to{' '}
                        <span className="inline-block text-teal-700">
                            Techie Tests
                        </span>
                    </h2>
                    <p className="mb-5 text-base text-gray-700 md:text-lg">
                        Test your programming knowledge with our React Quiz web application
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Header;