import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    id="Services"
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
    data-aos="fade-right"
    data-aos-duration="800"
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-bold text-white text-[24px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
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
    <section id="features" className={layout.section} data-aos="fade-up" data-aos-duration="800">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          GO ONLINE , <br className="sm:block hidden" /> WITH <span className="text-gradient ">SOLVEVARE</span>
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          What sets us apart? It’s more than just design; it’s about trust. We understand the importance of building a solid relationship with our clients. Trust is the foundation upon which we create visually stunning designs that resonate with your brand identity. From concept to execution, we prioritise your vision, ensuring that the end result not only meets but exceeds your expectations.
        </p>
        <Button styles={`mt-10`} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Business;
