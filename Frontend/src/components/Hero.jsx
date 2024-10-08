import styles from "../style";
import { solvevarerobot, discount, robot, sr1 } from "../assets/assets";
import GetStarted from "./GetStarted";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
      once: true, // animation happens only once while scrolling down
    });
  }, []);

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 data-aos="fade-up" className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
            <span className="text-gradient">SOLVEVARE</span>{" "}
          </h1>
        </div>

        <h1 data-aos="fade-up" data-aos-delay="200" className="font-poppins font-bold ss:text-[28px] text-[28px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Solutions through software.
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We provide solutions with software.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <video src={sr1} className="w-[100%] h-[100%] relative z-[0]" autoPlay muted playsInline type="video/webm" loop></video>
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
