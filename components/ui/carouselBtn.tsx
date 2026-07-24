'use client';
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

type ButtonProps = {
  emblaApi: EmblaCarouselType | undefined;
};

export  function ButtonLeft({emblaApi}:ButtonProps){

    return (
        <button  onClick={() => emblaApi?.scrollPrev()}
        
        >←</button>
    )
}
 export function ButtonRight({emblaApi}:ButtonProps){


    return (
        <button   onClick={() => emblaApi?.scrollNext()}
        
        >→</button>
    )
}