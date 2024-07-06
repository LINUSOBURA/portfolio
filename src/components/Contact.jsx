export default function Contact() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4 mt-auto"
      id="contact"
      style={{
        backgroundImage: "url('cover-about.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-center flex-grow">
        <h3 className="text-custom-green p-2">Collaboration</h3>
        <p className="text-2xl md:text-6xl text-center p-2">
          Lets talk about <br /> Collaboration
        </p>
        <span className=" flex gap-4 p-4">
          <button
            onClick={() =>
              (window.location.href =
                "mailto:linusobura@gmail.com?subject=Collaboration")
            }
            className="px-2 bg-custom-green border text-black hover:bg-inherit hover:text-white hover:border-zinc-500"
          >
            Contact
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "mailto:linusobura@gmail.com?subject=Job%20Offer&body=Hello%2C%20I%20would%20love%20to%20offer%20you%20an%20opportunity")
            }
            className="px-2 border border-zinc-500 hover:bg-custom-green hover:text-black"
          >
            Hire Me
          </button>
        </span>

        <div className="flex gap-4 text-xl mt-16">
          <a href="mailto:linusobura@gmail.com">
            <i className="fa-regular fa-envelope hover:text-custom-green"></i>
          </a>
          <a href="https://www.linkedin.com/in/linusobura/" target="_blank">
            <i className="fa-brands fa-linkedin-in  hover:text-custom-green"></i>
          </a>
          <a href="https://x.com/oburalinus" target="_blank">
            <i className="fa-brands fa-x-twitter  hover:text-custom-green"></i>
          </a>
        </div>
      </div>

      <div className="footer bottom-0 mt-auto">
        <p className="text-zinc-400 mb-4 text-center">
          Linus Obura | {new Date().getFullYear()} | linusobura@gmail.com
        </p>
      </div>
    </div>
  );
}
