import React from 'react';

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 text-darkBlue">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">1. What is cors?</h3>
            <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
          </div>
          <div>
            <h3 className="font-semibold">3. How does the private route work?</h3>
            <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
          </div>
          <div>
            <h3 className="font-semibold">4. What is Node? How does Node work?</h3>
            <p className="mt-1 dark:text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione, doloremque debitis? Fuga labore omnis minima, quisquam delectus culpa!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;