import React from 'react';

const FAQ = () => {
  return (
    <section className="container mx-auto dark:bg-gray-800 text-darkBlue">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 mb-8">Some Quisten and answer about us :-</p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="text-lg font-medium px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">Is it online live class or recorded videos?</summary>
            <p className="text-lg px-4 py-6 pt-0 ml-4 -mt-4">You'll get lot's of importent recorded videos of the topic you want to learn also we provide live problem solveing system.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="text-lg font-medium px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">Is it mendeotry to have any spesific cetegory study background to get enroll to this course?</summary>
            <p className="text-lg px-4 py-6 pt-0 ml-4 -mt-4">We're so happy to know you that it's not nessesurry to have any specific cetegory study background to enroll this courses.</p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="text-lg font-medium px-4 py-6 focus:outline-none focus-visible:ring-violet-400 cursor-pointer">after how many day's will be finish this course?</summary>
            <p className="text-lg px-4 py-6 pt-0 ml-4 -mt-4">There're many courses time duration are 4-5months. If we have any problem/issue time willbe  </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;