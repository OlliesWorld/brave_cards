import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <div>
        <Header />
        <main className='h-full' >{children}</main>
        <Footer />
        </div>
    )
}
