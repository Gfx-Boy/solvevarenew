import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    AOS.refresh(); // Refresh AOS to ensure it works after the initial load
  }, []);

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[0]" data-aos="fade-right">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[0]">
        {feedback.map((card, index) => (
          <div key={card.id} data-aos="fade-right" data-aos-delay={index * 100}>
            <FeedbackCard {...card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
