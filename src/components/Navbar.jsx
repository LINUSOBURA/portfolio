export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-4 px-8 top-0 sticky z-50">
      <div className="flex items-center md:gap-6 lg:gap-8 xl:gap-10">
        <h2 className="text-1xl sm:text-2xl">
          <i className="fa-solid fa-laptop-code text-custom-green"></i>
        </h2>

        <ul className="flex justify-around gap-4 md:gap-5 lg:gap-6 xl:gap-7 text-0.5xl ml-20">
          <li className="hover:text-custom-green hidden sm:block">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-custom-green hidden sm:block">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-custom-green">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-custom-green mr-4">
            <a href="https://securelinus.blogspot.com/" target="_blank">Blog</a>
          </li>
        </ul>
      </div>

      <button className="border-2 border-gray-500 px-1 sm:px-4 py-1 sm:py-2 hover:border-custom-green text-0.2xl">
        <span className="hidden sm:inline">
          <a href="#contact">Get in Touch</a>
        </span>
        <span className="sm:hidden">Contact</span>
      </button>
    </div>
  );
}
