import '../styles/globals.css'
import AOS from "aos";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-toastify/dist/ReactToastify.css";
config.autoAddCss = false

import "aos/dist/aos.css";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [])

  return <Component {...pageProps} />

  
}

export default MyApp
