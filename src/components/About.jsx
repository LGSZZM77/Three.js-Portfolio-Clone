import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../style";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{max: 45, scale: 1, speed: 450}}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다. JavaScript에 깊은 이해와 웹 디자인에 대한 꾸준한
        관심을 바탕으로, 사용자에게 직관적이고 매력적인 경험을 제공하는 데 주력합니다. 이를 위해 React, Three.js와 같은
        주요 기술 스택을 능숙하게 활용하여 웹 애플리케이션을 개발합니다.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
