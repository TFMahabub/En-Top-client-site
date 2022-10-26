import React from 'react';

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 text-darkBlue">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-2xl md:text-4xl font-bold leading-none text-center">------------Blog-----------</h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">1. What is cors?</h3>
            <p className="mt-1 text-darkLightBlue">CORS is implemented primarily in web browsers, but it can also be used in API clients as an option. It's present in all popular web browsers like Google Chrome, Firefox, Opera, and Safari.</p>
          </div>
          <div>
            <h3 className="font-semibold">2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className="mt-1 text-darkLightBlue">Firebase is a authentication platform. They are give us secure authentication system. It's a google base authentication system that's we can trust this site more than other site. Also it's very easy to use, firebase documentasion is very easy to learn.</p>
          </div>
          <div>
            <h3 className="font-semibold">3. How does the private route work?</h3>
            <p className="mt-1 text-darkLightBlue">If we need to secure any page of our web aplication in that case we use private route, we can set any conditional rendering in this route, for example if we want to set this 'if our user has login then we can open any page of our web aplication, otherwise we don't in that case private route work very well.</p>
          </div>
          <div>
            <h3 className="font-semibold">4. What is Node? How does Node work?</h3>
            <p className="mt-1 text-darkLightBlue">Node is server side run time, it works on google chrome v8 engine. Node has a many built-in modules to aid in interactions with the command line, the computer file system, and the Internet.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;