import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import {motion, spring} from 'framer-motion';
import { fadeIn,textVariant } from "../utils/motion";
import {styles} from '../styles';



const Tech = () => {
  return (

    <><motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} ]`}>Technologies</p>
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10 mt-14">
      
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
          
        ))}
      </div></>
  )
}



export default SectionWrapper(Tech,"")