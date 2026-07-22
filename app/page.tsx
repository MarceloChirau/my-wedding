
import  MobileNavlinks from '../components/layout/nav-links'

import { dancingScript } from "../components/ui/fonts";



export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
<h1 className={`${dancingScript.className} font-semibold text-4xl py-3 pb-3 text-olive-500 `}>My Wedding</h1>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between   sm:items-start">

<div className="md:hidden">

<MobileNavlinks/>
</div>
      </main>
    </div>
  );
}
