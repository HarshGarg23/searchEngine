import React, { useEffect } from 'react'
import useStorage from '../hooks/usestorage'
import { motion } from 'framer-motion';

const Progressbar = ({file,setfile}) => {
    const {url,progress}=useStorage(file);
    useEffect(()=>{
      if(url){
        setfile(null);
      }
    },[url,setfile])
    console.log(progress,url)
  return (
    <motion.div className="progress-bar"
    initial={{width:0}}
    animate={{width:progress + '%'}}
    ></motion.div>
   
  )
}

export default Progressbar