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

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
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

      {/* Arrow prev/next — cuma muncul kalau lebih dari 1 foto */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black/70 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </>
      )}

      {/* Dot indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}