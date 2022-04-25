import Link from "next/link";
// import { useContext } from "react";



export default function Header() {


    return (
        <div className="w-full grid grid-cols-1 justify-center items-center py-4 text-center bg-blue-900">
            <div >
                <Link href="/">
                    <a className="text-4xl text-blue-50 text-bold ">Brave_Cards</a>
                </Link>
                {/* <h2 className="text-2xl text-blue-50">When you need inspiration!</h2> */}
            </div>
            <div className="grid-row">
            <Link href="/gallery"><a className="text-2xl text-blue-50 hover:underline hover:bg-green-800 p-4 mr-4">Gallery</a></Link>
            
            <Link  href="/contact" ><a className="text-2xl text-blue-50 hover:underline hover:text-2xl">Contact</a></Link>
            </div>
        </div>
    )
}

