import Link from "next/link";
// import { useContext } from "react";



export default function Header() {


    return (
        <div className="w-full grid grid-cols-1 justify-center items-center  text-center bg-blue-900">
        
            <div className="flex justify-center align-center gap-8 py-4">
            <Link href="/gallery">
                <a className=" text-2xl text-green-500 hover:underline ">Gallery</a>
            </Link>
            
                <Link href="/">
                    <a className="text-4xl text-blue-50 text-bold ">Brave_Cards</a>
                </Link>
                
      
            
            <Link  href="/contact" >
                <a className="text-2xl text-blue-50 hover:underline hover:text-2xl">Contact</a>
                </Link>
            </div>
        </div>
    )
}

