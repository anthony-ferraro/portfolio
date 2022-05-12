import '../styles/styles.css'
import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRouter } from 'next/router'
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return <>
    <NextNProgress color="#5FB4A2" options={{ showSpinner: false }}></NextNProgress>
    <Head>
      <title>Anthony</title>
    </Head>
    <div className="main">
      <div className="container">
        <Header router={router}></Header>
        <Component {...pageProps} router={router} />
        {router.pathname !== "/contact" &&
          <div className="call-to-action">
            <h3>Interested in doing a project together?</h3>
            <Link href="/contact">
              <button className="button-secondary">Contact Me</button>
            </Link>
          </div>
        }
      </div>
      <Footer></Footer>
    </div>
  </>

}

export default MyApp
