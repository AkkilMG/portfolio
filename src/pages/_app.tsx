
import 'aos/dist/aos.css';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import AOS from 'aos';
import { useEffect } from 'react';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
