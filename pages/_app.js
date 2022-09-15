import Head from 'next/head'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

// here _app we can define a common layout for the application
function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header>
        <NavBar />
      </header>

      {/* all pages will be replaced here */}
      <Component {...pageProps} />
    </>
  )
}

export default App;