import GlobalStyles from '../components/GlobalStyles'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <Toaster />
    </>
  )
}

export default MyApp
