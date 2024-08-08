import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './style';
import { ScrollToTopButton, Graphicportfolio, Contatctform, Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Websiteportfolio } from "./components";
import Headroom from 'react-headroom';
import Encryption from './components/Encryption';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-10`}>
          <Headroom>
            <Navbar data-aos="fade-down" data-aos-delay="100" />
          </Headroom>
        </div>
      </div>
      <div className={`bg-primary p-6 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero data-aos="fade-up" data-aos-delay="200" />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div data-aos="fade-left" data-aos-delay="300">
            <Stats />
          </div>
            <Portfolio />
            <Business />
          <div data-aos="fade-left" data-aos-delay="600">
            <Billing />
          </div>
          <div data-aos="fade-down" data-aos-delay="700">
            <CTA />
          </div>
          <div data-aos="fade-left" data-aos-delay="800">
            <Encryption />
          </div>
          <div>
            <Testimonials />
          </div>
          <div data-aos="fade-up" data-aos-delay="1000">
            <Contatctform />
          </div>
          <div data-aos="fade-down" data-aos-delay="1100">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
