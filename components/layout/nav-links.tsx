'use client';
import Link from 'next/link';
import HamburgerBtn from '../ui/hamburderBtn';
import { useState } from "react";
import { dancingScript } from "../ui/fonts";


const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "RSVP",
      href: "/rsvp",
    },
    {
      title: "Venue",
      href: "/venue",
    },
    {
      title: "Timeline",
      href: "/timeline",
    },
    {
      title: "Menu",
      href: "/menu",
    },
    {
      title: "Seating",
      href: "/seating",
    },
    {
      title: "Quiz",
      href: "/quiz",
    },
    {
      title: "Chat",
      href: "/chat",
    },
  ];

//flex flex-col gap-4 from link
  
  export default function MobileNavlinks(){
      const [isOpen, setIsOpen] = useState(false);

    return(
        <>
<HamburgerBtn
isOpen={isOpen}
onClick={()=>setIsOpen(!isOpen)}
/>

{isOpen && (
    <nav className="mt-6 flex flex-col gap-4">
 {links.map((link) => {

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={()=>setIsOpen(false)}
            className={`${dancingScript.className } text-lg font-medium text-[#FAF9F6 ]`}
          >

        {link.title}
          </Link>
        );
      })}

    </nav>
)}
        </>
    )
  }