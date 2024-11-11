import { useEffect, useState } from "react";
import { useRef } from "react";
import CarouselComponent from "./CarouselComponent";

export default function Kj(props) {
  const { kjDescription } = props;
  const dialogRef = useRef(null);
  const [kjImages, setKjImages] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setKjImages(["home.png", "vacants.png", "house.png", "post.png"]);
    }, 1000);
  }, []);

  useEffect(() => {
    if (kjDescription && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [kjDescription]);
  return (
    <div>
      <dialog
        ref={dialogRef}
        id="kj"
        className="backdrop:bg-neutral-800 backdrop:opacity-80 bg-zinc-900 text-slate-200 p-4"
      >
        <div>
          <span className="flex justify-end">
            <button onClick={() => document.querySelector("#kj").close()}>
              <i className="fa-regular fa-circle-xmark text-custom-green font-semibold"></i>
            </button>
          </span>

          <h3 className="text-xl sm:2xl mb-2">KejaVacant</h3>
          <div className="max-w-lg mx-auto">
            <CarouselComponent autoSlide={true} images={kjImages} />
          </div>

          <p className="mt-5 text-sm lg:text-xl">
            Keja Vacant is a platform that enables landloads and real estate
            agents to post their vacant houses and spaces, and enables users to
            easily find what they are looking for for a particular location and
            price range. This has been built using NextJs14 and is still under
            active development.
          </p>

          <span className="flex items-center justify-center gap-4">
            {" "}
            <button className="mt-5 px-2 py-1 border border-custom-green">
              <a
                href="https://youtu.be/Vmu2vXsv-i8?si=LKBoLOM2KBS2t0wP"
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
