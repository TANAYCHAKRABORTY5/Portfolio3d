import React,{ useState,useRef } from "react"
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";



const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading,setLoading] =useState(false);

  const handleChange =(e) => {
    const {target } =e;
    const {name,value} = e.target;

    setForm({...form,[name]:value})
  }

 
  // 9m4xA2k_0DtfHUMo9
// template_kfrajk4
// service_mzrb7hs


  const handleSubmit = (e) =>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_mzrb7hs',
      'template_kfrajk4',
      {
        from_name: form.name,
        to_name: 'Tanay',
        from_email: form.email,
        to_email: 'tanaywork56@gmail.com',
        message: form.message,
      },
      '9m4xA2k_0DtfHUMo9'
      )

      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      )
  }

  return (
    <div className={`xl:mt-1 xl:flex-row flex-col-reverse flex gap-2 overflow-hidden`}>
    <motion.div
      variants={slideIn('left','tween',0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <div className="flex g-4">
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
        </div>
        <form ref={formRef}
          onSubmit={handleSubmit}
         >
          <button 
              type="submit"
              className="bg-tertiary relative mt-[38px] ml-[120px] py-3 px-7  
              outline-none  text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-1 flex flex-col gap-4"
      >
        
        
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea 
            rows='6'
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"  
            className="bg-tertiary py-4 px-6 placeholder:text-secondary
            text-white rounded-lg outlined-none border-none font-medium"
          />
        </label>
        

      </form>
    </motion.div>

    <motion.div
      variants={slideIn('right','tween',0.2,1)}
      className="xl:flex-1 xl:h-auto md:h-[500px] h-[30px]"
    >
      <EarthCanvas />

    </motion.div>
    

    </div>
  )
}

export default SectionWrapper(Contact,"contact")