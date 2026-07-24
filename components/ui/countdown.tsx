import { dancingScript } from "./fonts";


export default  function CountDown(){
    return(
        <>
        <div className='flex flex-col items-center ' >
            <h2 className={`${dancingScript.className}  text-4xl text-olive-500  `}>Countdown</h2>

<div id='outer' className=' grid grid-rows-2 grid-cols-4 border-2 bg-olive-500 border-olive-500 justify-items-center items-center gap-1 w-screen   p-3 m-auto md:w-92 '>
<div><span className="text-white" >30</span></div>
<div><span className="text-white" >11</span></div>
<div><span className="text-white" >52</span></div>
<div><span className="text-white" >31</span></div>
<div><span className='text-xs text-white ${dancingScript.className} ' >DAYS</span></div>
<div><span className='text-xs text-white ${dancingScript.className}' >HOURS</span></div>
<div><span className='text-xs text-white ' >MINUTES</span></div>
<div><span className='text-xs text-red-600 '>SECONDS</span></div>

</div>





          

        </div>
        </>
    )
}

