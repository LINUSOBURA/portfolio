import Stack from "./Stack";

export default function About() {
  return (
    <div
      className="about flex flex-col p-4 mt-20 min-h-screen bg-zinc-900 relative"
      id="about"
    >
      <Stack />
      <div className="about-me mt-20">
        <div className="flex justify-between px-5 sm:p-10">
          <span>
            <h3 className="text-1xl sm:text-2xl text-custom-green">About Me</h3>
            <p className="text-1xl sm:text-3xl w-3/4 font-bold">
              I can Deliver results that exceeds expectations
            </p>
          </span>
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rotate-90 align-baseline"
            src="src/assets/cube.svg"
            alt="cube"
          />
        </div>
        <div className="flex justify-between px-5 sm:p-10 mt-5">
          <img
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rotate-270 hidden sm:block"
            src="src/assets/cube.svg"
            alt="cube"
          />

          <div className="w-full sm:w-2/3">
            <span className="text-right text-slate-200">
              <p>
                I'm passionate about building robust and scalable web
                applications. I specialize in frameworks like Django and Flask
                for
                <u> backend</u> development. On the <u>frontend</u>, I leverage
                React.js to create intuitive user interfaces that enhance user
                experience. I also have experience with Node.js and FastAPI for
                building efficient and performant <u>APIs</u>. My database
                expertise includes MySQL, ensuring data integrity and efficient
                querying.
              </p>
            </span>

            <span className="text-slate-200 flex justify-center gap-5 pt-4 w-full">
              <p className="text-center">
                <span className="font-bold">
                  3<u>+</u>
                </span>{" "}
                <br />{" "}
                <span className="text-slate-400">Years of experience</span>
              </p>
              <p className="text-center">
                <span className="font-bold">
                  15<u>+</u>
                </span>{" "}
                <br /> <span className="text-slate-400">Projects Done</span>
              </p>
              <p className="text-center">
                <span className="font-bold">
                  20<u>+</u>
                </span>{" "}
                <br /> <span className="text-slate-400">Clients Served</span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 mt-4 hidden lg:block">
        <button onClick={() => (window.location.href = "#projects")}>
          <i className="fa-solid fa-toggle-off fa-rotate-90 text-custom-green text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
