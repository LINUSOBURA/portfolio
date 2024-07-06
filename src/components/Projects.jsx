import Clocks from "./Clocks";
import Getfit from "./Getfit";
import { useState } from "react";
import Apod from "./Apod";

export default function Projects() {
  const [clocksDescription, setClocksDescription] = useState(false);
  const [getfitDescription, setGetfitDescription] = useState(false);
  const [apodDescription, setApodDescription] = useState(false);

  return (
    <div>
      <section
        className="projects min-h-screen px-4 pt-14 bg-neutral-900 relative"
        id="projects"
      >
        <div className="pt-10 flex justify-between">
          <span>
            <h3 className="text-1xl sm:text-2xl text-custom-green">
              Portfolio
            </h3>
            <p className="text-xl sm:text-3xl font-bold">
              Selected Works <br /> 2022 - {new Date().getFullYear()}
            </p>
          </span>
          <span className="text-slate-300 text-xs sm:text-xl ">
            <p>
              Check out more <br /> of my projects on Github
            </p>
            <button className="border border-custom-green px-4 py-1 mt-5">
              <a href="https://github.com/linusobura" target="_blank">
                Here <i className="fa-solid fa-arrow-right"></i>
              </a>
            </button>
          </span>
        </div>

        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 mx-auto">
          <div className="bg-zinc-700 p-auto flex flex-col justify-center">
            <img
              src="src/assets/clocks.png"
              alt="clocks_ke"
              className="w-3/4 h-3/4 mx-auto"
            />

            <span className="flex justify-between p-4">
              <p className=" text-slate-300">Clocks_Ke</p>
              {clocksDescription && (
                <Clocks clocksDescription={clocksDescription} />
              )}
              <button onClick={() => setClocksDescription(!clocksDescription)}>
                <i className="fa-solid fa-eye text-custom-green"></i>
              </button>
            </span>
          </div>
          <div className="bg-zinc-700 p-auto flex flex-col justify-center">
            <img
              src="src/assets/getfit.png"
              alt="getfit"
              className="w-3/4 h-3/4 mx-auto"
            />
            <span className="flex justify-between p-4">
              <p className=" text-slate-300">GetFit</p>
              {getfitDescription && (
                <Getfit getfitDescription={getfitDescription} />
              )}
              <button onClick={() => setGetfitDescription(!getfitDescription)}>
                <i className="fa-solid fa-eye fa-fade text-custom-green"></i>
              </button>
            </span>
          </div>
          <div className="bg-zinc-700 p-auto flex flex-col justify-center">
            <img
              src="src/assets/apod.png"
              alt="Apod"
              className="w-3/4 h-3/4 mx-auto"
            />
            <span className="flex justify-between p-4">
              <p className=" text-slate-300">Apod</p>
              {apodDescription && <Apod apodDescription={apodDescription} />}
              <button onClick={() => setApodDescription(!apodDescription)}>
                <i className="fa-solid fa-eye fa-fade text-custom-green"></i>
              </button>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
