import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface GalleryProps {
  images: string[];
  alt: string;
}

export default function Gallery({ images, alt }: GalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      {/* Progress bar (story-style) */}
      {images.length > 1 && (
        <div className="flex gap-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className={`h-full bg-white rounded-full transition-all duration-300 ${
                  index <= selectedIndex ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>
      )}

      {/* Viewport Embla */}
      <div className="overflow-hidden rounded-[2rem]" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={src} className="flex-[0_0_100%] min-w-0">
              <div className="aspect-[4/3] w-full">
                <img
                  src={src}
                  alt={`${alt} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PREV / NEXT + counter */}
      {images.length > 1 && (
        <div className="flex items-center justify-between w-full mt-6">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="px-6 py-3 rounded-full border-[3px] border-white bg-transparent text-white font-label-md text-label-md uppercase transition-all hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <div className="font-display-xl-mobile md:font-display-xl text-white">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="px-6 py-3 rounded-full border-[3px] border-white bg-transparent text-white font-label-md text-label-md uppercase transition-all hover:translate-x-[2px] hover:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}