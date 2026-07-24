'use client';
import { dancingScript } from "./fonts";
import Image from 'next/image';
import useEmblaCarousel from "embla-carousel-react";
import { ButtonLeft,ButtonRight } from "./carouselBtn";
// import Autoplay from 'embla-carousel-autoplay'


const images=[
  '/love.JPG',
  '/first-dance1.JPG',
  '/first-dance2.JPG',
]

/* {
  loop:true
},
[Autoplay()]
*/


export default function ImageCarousel(){
const[emblaRef,emblaApi]=useEmblaCarousel();

    return(
        <>
        <div className="overflow-hidden relative" ref={emblaRef} >

  <div className="flex ">

{images.map((src,index)=>(
  <div key={index} className='min-w-full flex justify-center' >
<Image src={src}
alt={`Photo ${index +1}`}
width={900}
height={600}
className='rounded-xl object-cover w-3/4 h-[350px] md:h-[500px]'
/>

  </div>
))} 
  </div>
  <div className="absolute left-4 top-1/2 -translate-y-1/2">
  <ButtonLeft emblaApi={emblaApi}/>
  </div>
  <div className="absolute right-4 top-1/2 -translate-y-1/2">
  <ButtonRight emblaApi={emblaApi} />
  </div>
</div>
        </>
    )
}