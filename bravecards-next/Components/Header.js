import Link from "next/link";
// import { useContext } from "react";

// import AuthContext from "../context/AuthContext";
// import UploadModal from "./uploadModal";

export default function Header() {

    // const { user } = useContext(AuthContext)
    return (
        <div className="w-full grid grid-cols-2 justify-center items-center py-4 text-center bg-blue-900">
            <div>
                <Link href="/">
                    <a className="text-blue-50 text-bold text-6xl">Brave_Cards</a>
                </Link>
                <h2 className="text-2xl text-blue-50">When you need inspiration!</h2>
            </div>
            
            
            {/* <div className="text-purple-50">{user ? (
                <div >
                    
                <Link href="/account" >
                    <a className="mr-6">{user.email}</a>
                </Link>
                <UploadModal />
                </div>
            ) : (
                <Link href="/login">
                    <a>Login</a></Link>
            )}
                </div>
             */}
            <Link  href="/contact" ><a className="text-xl text-blue-50 hover:bg-blue-900 hover:text-2xl">Contact</a></Link>
        </div>
    )
}

