import { useEffect, useState } from "react";
import { useRef } from "react";
import CarouselComponent from "./CarouselComponent";

export default function Clocks(props) {
  const { clocksDescription } = props;
  const dialogRef = useRef(null);
  const [clockImages, setClockImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setClockImages([
        "src/assets/landing.png",
        "src/assets/shop.png",
        "src/assets/checkout.png",
        "src/assets/orders profile.png",
      ]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (clocksDescription && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [clocksDescription]);
  return (
    <div>
      <dialog
        ref={dialogRef}
        id="clocks"
        className="backdrop:bg-neutral-800 backdrop:opacity-80 bg-zinc-900 text-slate-200 p-4"
      >
        <div>
          <span className="flex justify-end">
            <button onClick={() => document.querySelector("#clocks").close()}>
              <i className="fa-regular fa-circle-xmark text-custom-green font-semibold"></i>
            </button>
          </span>

          <h3 className="text-xl sm:2xl mb-2">Clocks_Ke</h3>
          <div className="max-w-lg mx-auto">
            <CarouselComponent autoSlide={true} images={clockImages} />
          </div>

          <p className="mt-5 text-sm lg:text-xl">
            CLOCKS_KE is an online shopping platform for custom made resin
            Clocks. It has been built with Django, HTML, CSS, and
            Javascript(JQUERY). For the database it is using the default sqlite3
            provided by django by default.
          </p>

          <span className="flex items-center justify-center gap-4">
            {" "}
            <button className="mt-5 px-2 py-1 border border-custom-green">
              <a
                href="https://www.youtube.com/watch?v=x26AIcgGEYA"
                target="_blank"
              >
                Presentation
              </a>
            </button>
            <button className="mt-5 px-2 py-1 border border-custom-green">
              <a
                href="https://clockske-8ce98786bb8a.herokuapp.com/"
                target="_blank"
              >
                Visit
              </a>
            </button>
          </span>
        </div>
      </dialog>
    </div>
  );
}
