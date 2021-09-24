import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8 ">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="https://twitter.com/Dru_ashley"
              target="_blank"
              rel="noreferrer"
            >
              Made by Druashley
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-blue-600 hover:text-blue-70 hover:underline  dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="https://github.com/Druashley"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterSection;
