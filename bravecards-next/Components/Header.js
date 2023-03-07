import Link from "next/link";
// import { useContext } from "react";



export default function Header() {


    return (
        <div className="bg-blue-900 text-center pt-8 md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-2 ">
         <Link href="/" className="m-auto col-span-2 text-4xl text-blue-50 text-bold ">Brave_Cards</Link>
        <div className="col-span-1">
            <Link href="/gallery" className="mr-4 text-2xl text-green-500 hover:underline ">Gallery</Link>
            <Link  href="/contact" className="text-2xl text-green-500 hover:underline ">Contact</Link>
            </div>
        </div>
    )
}

