import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Layout from '../Components/Layout'
// import { AuthProvider }from '../context/AuthContext'

function MyApp({ Component, pageProps: {session, ...pageProps}}) {
  return (
  <>
    {/* <AuthProvider> */}
    <Layout >
    <Component {...pageProps} />
    </Layout>
    {/* </AuthProvider> */}
    </>
  )
}

export default MyApp
