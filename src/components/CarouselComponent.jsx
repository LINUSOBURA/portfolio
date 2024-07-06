import { useEffect, useState, useCallback } from "react";

export default function CarouselComponent({
  images = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  const next = useCallback(() =>
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1))
  );

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(next, autoSlideInterval);
    return () => clearInterval(interval);
  }, [next, autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative">
      {images.length > 0 ? (
        <>
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full">
                <img src={image} alt={`Slide ${index}`} className="w-full" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div className="absolute bottom-4 right-0 left-0 bg-black/50 w-fit mx-auto p-1 rounded-2xl">
            <div className="flex items-center justify-center gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all w-3 h-3 bg-white rounded-full ${
                    curr === index ? "p-2" : "bg-opacity-50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading images...</p>
      )}
    </div>
  );
}
