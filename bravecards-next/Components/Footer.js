

export default function Footer() {
    return (
        <div className="bg-blue-900 text-center  text-blue-50">
            <h2>🙏 for visiting!</h2>
             <p>Created with 💙 by <a href="https://roni.rocks/"  rel="noreferrer"  className="text-green-800 text-xl font-bold">Roni</a> </p>
             {/* <a href="https://brave.sanity.studio/">Login</a> */}
            <p>&copy; {new Date().getFullYear()}  Brave_Cards</p>
        </div>
    )
}
