import { useEffect, useState } from "react";
import { useRef } from "react";
import CarouselComponent from "./CarouselComponent";

export default function Getfit(props) {
  const { getfitDescription } = props;
  const dialogRef = useRef(null);
  const [clockImages, setClockImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setClockImages([
        "getfit-home.jpg",
        "getfit-generate.jpg",
        "getfit-work.jpg",
      ]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (getfitDescription && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [getfitDescription]);
  return (
    <div>
      <dialog
        ref={dialogRef}
        id="getfit"
        className="backdrop:bg-neutral-800 backdrop:opacity-80 bg-zinc-900 text-slate-200 p-4"
      >
        <div>
          <span className="flex justify-end">
            <button onClick={() => document.querySelector("#getfit").close()}>
              <i className="fa-regular fa-circle-xmark text-custom-green font-semibold"></i>
            </button>
          </span>

          <h3 className="text-xl sm:2xl mb-2">GetFit</h3>
          <div className="max-w-lg mx-auto">
            <CarouselComponent autoSlide={true} images={clockImages} />
          </div>

          <p className="mt-5 text-sm lg:text-xl">
            A Workout generator App Made with React and Tailwind CSS
          </p>

          <span className="flex items-center justify-center gap-4">
            {" "}
            <button className="mt-5 px-2 py-1 border border-custom-green">
              <a href="https://getfit-today.netlify.app/" target="_blank">
                Visit
              </a>
            </button>
          </span>
        </div>
      </dialog>
    </div>
  );
}
