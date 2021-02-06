import React from "react";

const TitleSection = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-8 pt-20 pb-10 mx-auto lg:px-4">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <h2 className="mb-1 text-xs font-semibold tracking-widest text-blue-600 uppercase title-font">
            Listen to your favorite stooge
          </h2>
          <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-blue-800 sm:text-5xl title-font">
            A soundboard of your favorite people on The Pat Mcafee Show
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-700 lg:w-2/3">
            This is a fanmade site. Check out the Pat Mcafee show's{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCxcTeAKWJca6XyJ37_ZoKIQ"
            >
              <span className="text-blue-600">Youtube</span>
            </a>{" "}
            and{" "}
            <a
              href="https://store.patmcafeeshow.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-blue-600">Store</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
