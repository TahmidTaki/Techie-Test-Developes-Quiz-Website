import React from 'react';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mb-10 border-t border-b divide-y">
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                React Router
                            </a>
                            <p className="text-gray-600">5 Jan 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    Purpose of React Router
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            React router is a state container for the current location i.e, URL. It keeps track of the location and renders different Routes as it changes. It also gives tools to update the location using Links and the history API. Although Routing through pages can be done through 'a href' tags but React router allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. This makes the user experience smoother. While using Link in react router, only the changes in the DOM are rendered so the full page does not need to be loaded from the database/server. It improves efficiency both in client side and server side.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                Context Api
                            </a>
                            <p className="text-gray-600">15 Feb 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    How Context Api Works
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            Usually if we want to pass data from one component to another, like from parent component to child component, we do it via props. But if the hierrarchy is largely nested, then it becomes cumbersome to drill down props from one component to other. To solve that, context provides a way to share data with multiple components without the traditional drill down approach. Context is designed to share data that can be considered “global” for a tree of React Components. It sits next to React to props and state. <br />
                            After creating a context, that context now has two React components that are going to be used: Provider and Consumer. The Provider component is going to be used to wrap the components that are going to have access to our context. The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data. <br />
                            After you wrap all the components that are going to need access to the context with the Provider component, you need to tell which component is going to consume that data.

                            The Consumer component allows a React component to subscribe to the context changes. The component makes the data available using a render prop.
                        </p>
                    </div>
                </div>
                <div className="grid py-8 sm:grid-cols-4">
                    <div className="mb-4 sm:mb-0">
                        <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                            <a
                                href="/"
                                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                aria-label="Category"
                            >
                                useHref
                            </a>
                            <p className="text-gray-600">28 Sep 2022</p>
                        </div>
                    </div>
                    <div className="sm:col-span-3 lg:col-span-2">
                        <div className="mb-3">
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                    About the useHref Hook
                                </p>
                            </a>
                        </div>
                        <p className="text-gray-700">
                            The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. There are two main uses of the useRef hook.

                            The first being for interacting with the browser DOM directly to make changes, rather than letting React manage things through the virtual DOM. The second use you might see is for creating an object with values which persist between renders.

                            Each time a React component is rendered it is done so with fresh local variables, any values that were updated, that aren’t kept in state, get reset.

                            useRef creates an object that will hold on to values even when state changes and the component re-renders. This makes it very useful for doing things like tracking the previous state or counting how many times a state changes.

                            This use is sort of like using state but without the UI implications. For when you want to track a value that might change but isn’t going to change how your app looks at all.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;