"use client";

//we declare types that we expect to be passed from the parent component
type hamburgerBtnProps={
    isOpen:boolean;
    onClick:()=>void;
}

export default function HamburgerBtn({isOpen,onClick}:hamburgerBtnProps) {

  return (
    <button
      onClick={onClick}
      className="relative flex h-10 w-10 items-center justify-center"
      aria-label="Toggle menu"
    >
      <span
        className={`
          absolute h-1 w-8 rounded-full bg-black
          transition-all duration-300
          ${isOpen ? "rotate-45" : "-translate-y-2"}
        `}
      />

      <span
        className={`
          absolute h-1 w-8 rounded-full bg-black
          transition-all duration-300
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
      />

      <span
        className={`
          absolute h-1 w-8 rounded-full bg-black
          transition-all duration-300
          ${isOpen ? "-rotate-45" : "translate-y-2"}
        `}
      />
    </button>
  );
}