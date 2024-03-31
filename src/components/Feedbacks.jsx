import {motion} from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';


const FeedbackCard =({index,testimonial,name,designation,company,image}) =>(
  <motion.div variants={fadeIn("","spring",index *0.5,0.75)}
    className='bg-black-200 p-6 rounded-3xl xs:w-[300px] h-auto'
  >
    <p className='text-white font-black text-[40px]'>"</p>
    <div className='-mt-3'>
      <p className='text-white tracking-wider text-[15px]'>{testimonial}</p>
      <div className='mt-7 flex justify-between items-center gap-1'> 
      <div className='flex-1 flex flex-col  '>
        <p className=' text-white font-medium text-[13px]'>
          <span className='blue-text-grdient'>@</span> {name}
        </p>
        <p className='mt-1 text-secondary text-[12px] '>
          {designation} of {company}
        </p>
      </div>
      <img src={image} alt={`feedback-by-${name}`} 
        className='w-10 h-10 rounded-full object-cover'
      />
      </div>
    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-10 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[240px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-8 flex flex-wrap gap-9`}>
        {testimonials.map((testimonial,index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"");