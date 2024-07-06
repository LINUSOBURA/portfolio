export default function Stack() {
  return (
    <div>
      <div className="stack flex flex-col items-center justify-evenly">
        <h2 className="text-2xl mb-4">My Stack</h2>
        <div className="stack-icons flex border border-gray-400 text-1xl sm:text-2xl">
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/python.svg" alt="Python" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/react.svg" alt="react" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/nodejs.svg" alt="nodejs" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/mysql.svg" alt="mysql" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/html5.svg" alt="html" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/css3.svg" alt="css" />
          </span>
          <span className="border-x border-gray-400 px-4 py-2 hover:opacity-50">
            <img className="w-8 h-8" src="src/assets/figma.svg" alt="figma" />
          </span>
        </div>
      </div>
    </div>
  );
}
