import Navbar from "./Navbar";

export default function Home() {
  return (
    <div
      className="home min-h-screen w-screen p-2 bg-center"
      style={{
        backgroundImage: "url('cover2 (5).png')",
        backgroundSize: "cover",
      }}
    >
      <Navbar />

      <div className="flex items-center max-h-screen w-full px-10 mt-60 md:mt-40 flex-col justify-center">
        <div>
          <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-slate-200 font-anton">
            Linus <br /> <span className="ml-10 md:ml-16">Obura</span>
          </h1>
          <h3 className="text-slate-400 mt-4 md:w-1/2">
            Hello, Welcome to my portfolio! I&apos;m a software Engineer with
            over three years of experience. Take a look around and I hope we
            connect.
          </h3>
        </div>
      </div>

      <div className="absolute bottom-10 right-10">
        <button onClick={() => (window.location.href = "#about")}>
          {" "}
          <i className="fa-solid fa-toggle-off fa-rotate-90 text-custom-green text-2xl"></i>
        </button>
      </div>
    </div>
  );
}
