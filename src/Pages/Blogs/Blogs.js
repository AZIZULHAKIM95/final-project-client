import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div>
                <h2 className='text-xl font-medium' >How will you improve the performance of a React Application?</h2>
                <br />
                <p>
                Use the measurement tools available to analyze the performance of your React app and get a detailed report of what might be slowing it down. While you are still in development mode, you can use the Performance tab in the Chrome browser to visualize how React components mount, update, and unmount. React v16 was released with an additional API, a higher-order component called React.memo. This exists only as a performance optimization. In React single-page applications, we can bundle and minify all our JavaScript code into a single file. Splitting code assists with the browsers cache resources and with code that doesnot change often. Reacts documentation suggests using the minified production build when deploying your app.
                </p>
               
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2 className='text-xl font-medium' > What are the different ways to manage a state in a React application?</h2>
                <br />
                <p>
                    <p>There are four main types of state you need to properly manage in your React apps:</p>
                    <br />
                    <ul>
                        <li>Local state:- Local state is data we manage in one or another component.It is most often managed in React using the useState hook.</li>
                        <li>Global state:- Global state is data we manage across multiple components.It is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                        <li>Server state:- Data that comes from an external server that must be integrated with our UI state. It is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>
                        <li>URL state:- Data that exists on URLs including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL.</li>
                    </ul>
                </p>
            </div>

            <br />
            <br />
            <br />

            <div>
                <h2 className='text-xl font-medium'>How does prototypical inheritance work.?</h2>
                <br />


                <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Normally in order to get and set the Prototype of an object, use Object.getPrototypeOf and Object.setPrototypeOf.</p>

                <br />
                <br />
            
            </div>
            <div>
                <h2 className='text-xl font-medium'>Why you do not set the state directly in React? Why you do not set products[...] instead, you use the setProducts?</h2>
                <br />


                <p>If you try to update state directly then it won't re-render the component.

                Example: 

                this.state.message = 'Hello world'

                  Instead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering.

                  But When You Use like this 

                  this.setState( message: 'Hello World' )

                  You can directly assign to the state object either in constructor or using latest javascript's class field declaration syntax.


                 product[...] means there already an array exits. When you add n product this will add in array with previous products which are already exits in array. And when i change or do any action in products in will hit SetProducts and this will set this changes about product.
</p>

                <br />
                <br />
            
            </div>
            <div>
                <h2 className='text-xl font-medium'>What is a unit test? Why should write unit tests?</h2>
                <br />


                <p>A unit test is a way of testing a unit. The smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. Unit tests is a type of functional test, have reached majority adoption, they are simply how many development teams do business. The companies I advise tend to use unit tests sporadically, and with low coverage. While the development environment supports unit tests and most of the programmers know the basic frameworks and tools, they only use unit tests for easy and low-value instances.</p>

                <br />
                <br />
            
            </div>

        </div>
    );
};

export default Blogs;