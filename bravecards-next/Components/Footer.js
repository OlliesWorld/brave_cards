

export default function Footer() {
    return (
        <div className="bg-blue-900 text-center py-2 text-blue-50">
            <h2>thanks for visiting!</h2>
             <p>Created with 💙 by <a href="https://roni.rocks/" target="_blank" rel="noreferrer"  className="text-green-800 text-xl font-bold">Roni</a> </p>
            <p>&copy; {new Date().getFullYear()}  Brave_Cards</p>
        </div>
    )
}
