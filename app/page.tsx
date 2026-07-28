
import  MobileNavlinks from '../components/layout/nav-links'
import { dancingScript } from "../components/ui/fonts";
import CountDown from "../components/ui/countdown";
import Image from 'next/image';
import Link from 'next/link';
import Annoucements from '../components/ui/announcements';
import EventsSnapshot from '../components/ui/eventsSnapshot';
import LiveAttendance from '../components/ui/liveAttendance';
import ImageCarousel from '../components/ui/imageCarousel';
import {Button} from '@/components/ui/button';

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

<div className={`${dancingScript.className} text-2xl flex fex-row justify-center`} >
  <h2>Marko & Lucja are getting married! </h2>
</div>

<section className='flex justify-center py-4' >
<Image
src='/corberon-horizontal.JPG'
alt='Hero image'
width={5472}
height={3648}
className='w-full h-auto md:w-4/5'
></Image>
</section>

<CountDown/>
<Link
href='/rsvp'
className=' animate-pulse rounded-full bg-olive-500 px-8 py-3 mt-3 mx-auto flex flex-row justify-center w-1/4 md:w-1/8 text-white'>RSVP</Link>

<Annoucements/>
<EventsSnapshot/>
<LiveAttendance/>
<ImageCarousel/>
<div className="flex-min-h-svh items-center justify-center bg-gray-700">

<Button/>
</div>

  </>



  );
}
//Thank you for your response! We look forward to seeing you..