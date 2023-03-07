import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div >
        <Header />
        <main className='md:h-screen' >{children}</main>
        <Footer />
        </div>
    )
}
