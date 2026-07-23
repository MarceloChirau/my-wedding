import { dancingScript } from "../../components/ui/fonts";
import  MobileNavlinks from '../../components/layout/nav-links'


export default function  Gallery(){
    return (<>
  <div className=' flex  flex-row justify-around  md:flex md:flex-row md:justify-around md:w-full md:items-center ' >
<h1 className={`${dancingScript.className}   font-semibold text-4xl  py-3 pb-3 text-olive-500 md:mt-5 `}>Gallery</h1>
    <div className="self-center">

    <MobileNavlinks/>
    </div>

    </div>
    </>
    )
}