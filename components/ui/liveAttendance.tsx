import { dancingScript } from "./fonts";


export default function LiveAttendance(){
    return (
        <>
        <div className={`${dancingScript.className}  text-4xl flex flex-col self-center items-center p-6 mt-0 mb-0 text-dark-charcoal`}>
<h2>Live Attendance Board</h2>
<p className="text-2xl mt-2 text-dark-charcoal" >"112 Guests Attending | 8 spots remaining"</p>
        </div>
        
        </>
    )
}