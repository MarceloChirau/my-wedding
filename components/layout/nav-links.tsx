
import Link from 'next/link';

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

  export default function MobileNavlinks(){
    return(
        <>
 {links.map((link) => {

        return (
          <Link
            key={link.title}
            href={link.href}
            className="flex flex-col gap-4"
          >

            <p className=" md:hidden">{link.title}</p>
          </Link>
        );
      })}
        </>
    )
  }