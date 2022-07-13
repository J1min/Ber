import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/days.scss"
import "../styles/project.scss";
import "../styles/post.scss";
import "../styles/slider.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
