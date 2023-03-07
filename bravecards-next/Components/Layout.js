import Header from './Header'
import Footer from './Footer'

export default function Layout({children}) {
    return (
        <>
        <Header />
        <main className='h-screen'>{children}</main>
        <Footer />
        </>
    )
}
