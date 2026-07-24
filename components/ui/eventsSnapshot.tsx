import { dancingScript } from "./fonts";
import Link from 'next/link';

export default function EventsSnapshot(){
    return(
        <>
        <div className={`${dancingScript.className}  text-2xl flex flex-col self-center items-center p-6 mt-8 mb-8 text-dark-charcoal`}>
<h2 className="p-3 text-4xl" >Quick event Snapshot</h2>
<h3 >Date: <span className=" text-xl " >October 24,2026</span> </h3>
<h3 >Location: <span className="text-xl " >Cocktail II ,Sisak</span> </h3>
<a
  href="https://maps.app.goo.gl/ZQAWV7mEtLYaDrxq6"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-full bg-olive-500 p-3 text-white self-center mt-8 mb-8 hover:bg-olive-600"
>
   Open in Google Maps
</a>
        </div>
        </>
    )
}