import { useEffect, useState } from "react";
import { useRef } from "react";
import CarouselComponent from "./CarouselComponent";

export default function Apod(props) {
  const { apodDescription } = props;
  const dialogRef = useRef(null);
  const [clockImages, setClockImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setClockImages(["src/assets/apod-home.jpg", "src/assets/apod-desc.jpg"]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (apodDescription && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [apodDescription]);
  return (
    <div>
      <dialog
        ref={dialogRef}
        id="apod"
        className="backdrop:bg-neutral-800 backdrop:opacity-80 bg-zinc-900 text-slate-200 p-4"
      >
        <div>
          <span className="flex justify-end">
            <button onClick={() => document.querySelector("#apod").close()}>
              <i className="fa-regular fa-circle-xmark text-custom-green font-semibold"></i>
            </button>
          </span>

          <h3 className="text-xl sm:2xl mb-2">Apod</h3>
          <div className="max-w-lg mx-auto">
            <CarouselComponent autoSlide={true} images={clockImages} />
          </div>

          <p className="mt-5 text-sm lg:text-xl">
            This is a simple react project which displays the ASTRONOMY PICTURE
            OF THE DAY, fetched from the NASA API.
          </p>

          <span className="flex items-center justify-center gap-4">
            {" "}
            <button className="mt-5 px-2 py-1 border border-custom-green">
              <a href="https://linus-nasa-apod.netlify.app/" target="_blank">
                Visit
              </a>
            </button>
          </span>
        </div>
      </dialog>
    </div>
  );
}
