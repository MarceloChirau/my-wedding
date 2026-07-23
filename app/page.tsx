
import  MobileNavlinks from '../components/layout/nav-links'

import { dancingScript } from "../components/ui/fonts";

     {/* <div className="flex flex-col flex-1 items-center justify-center "> */}
      /* <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between   sm:items-start"> */
// <div className="md:hidden ">


export default function Home() {
  return (<>
  <div className=' flex  flex-row justify-around  md:flex md:flex-row md:justify-around md:w-full md:items-center ' >
<h1 className={`${dancingScript.className}   font-semibold text-4xl  py-3 pb-3 text-olive-500 md:mt-5 `}>My Wedding</h1>
<div className=' self-center  '>
<MobileNavlinks/>
</div>
</div>


  
  </>



  );
}
