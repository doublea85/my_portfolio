import React from "react";
import SchoolMaster from "../assets/portfolio/SchoolMaster.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import vegetables from "../assets/portfolio/vegetables.png";
import todolist from "../assets/todolist.jpeg";
import sociopedia from "../assets/portfolio/SocioPedia.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: SchoolMaster,
      link: "https://github.com/doublea85/MERN_SCHOOLMASTER",
      demo: "#"
    },
    {
      id: 2,
      src: weatherApp,
      link: "https://github.com/doublea85/WeatherApp",
      demo: "https://weatherapp-swart-sigma.vercel.app/"
    },
    {
      id: 3,
      src: vegetables,
      link: "https://github.com/doublea85/Vegetables",
      demo:"#"
    },
    {
      id: 4,
      src: todolist,
      link: "https://github.com/doublea85/todoListReactNative",
      demo: "#"
    },
    {
      id: 5,
      src: sociopedia,
      link: "https://github.com/doublea85/MERN-social-networ",
      demo: "#"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, demo }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={link} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-10">

      </div>
    </div>
  );
};

export default Portfolio;
