import Link from "next/link";
// import { useContext } from "react";



export default function Header() {


    return (
        <div className="bg-blue-900 text-center py-8 md:grid  md:grid-cols-2">
         <Link href="/" className="text-4xl text-blue-50 text-bold mb-4 md:mb-0">Brave_Cards</Link>
        <div className="w-2/3 md:w-1/3 m-auto grid grid-cols-2">
            <Link href="/gallery" className="text-2xl text-green-500 hover:underline ">Gallery</Link>
            <Link  href="/contact" className="text-2xl text-green-500 hover:underline ">Contact</Link>
            </div>
        </div>
    )
}

