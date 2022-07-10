import { motion,} from 'framer-motion'
import React from 'react'

export const Left = () => {

    
  return (
    <div className='flex flex-col space-y-10 justify-center items-center bg-[#071A84] bg-opacity-80 h-screen'>
        <div className='grid grid-cols-2 place-content-around place-items-center w-full gap-y-10'>
            <motion.div initial={{y:"-100vh",opacity:0}} animate={{y:0,opacity:1,transition:{
                duration:2,
                delay:0.1,
            }}} className='flex flex-col items-center justify-center border bg-white rounded-xl px-4 py-2 shadow-black shadow-lg'>
                <div>
                <img src="./assets/1.svg" className='h-28 w-28' alt="" />
                </div>
                <div className='text-xl text-center'>
                    Encrpyted with <br></br> Best Security
                </div>
                
            </motion.div>
            <motion.div initial={{y:"-100vh",opacity:0}} animate={{y:0,opacity:1,transition:{
                duration:2,
                delay:0.1,
            }}}  className='flex flex-col items-center justify-center border bg-white rounded-xl px-4 py-2 shadow-black shadow-lg'>
                <div>
                <img src="./assets/2.svg" className='h-28 w-28' alt="" />
                </div>
                <div className='text-xl text-center'>
                    Encrpyted with <br></br> Best Security
                </div>
                
            </motion.div>
            <motion.div initial={{y:"100vh",opacity:0}} animate={{y:0,opacity:1,transition:{
                duration:2,
                delay:0.1,
            }}}  className='flex flex-col items-center justify-center border bg-white rounded-xl px-4 py-2 shadow-black shadow-lg'>
                <div>
                <img src="./assets/3.svg" className='h-28 w-28' alt="" />
                </div>
                <div className='text-xl text-center'>
                    Encrpyted with <br></br> Best Security
                </div>
                
            </motion.div>
            <motion.div initial={{y:"100vh",opacity:0}} animate={{y:0,opacity:1,transition:{
                duration:2,
                delay:0.1,
            }}}  className='flex flex-col items-center justify-center border bg-white rounded-xl px-4 py-2 shadow-black shadow-lg'>
                <div>
                <img src="./assets/4.svg" className='h-28 w-28' alt="" />
                </div>
                <div className='text-xl text-center'>
                    Encrpyted with <br></br> Best Security
                </div>
                
            </motion.div>
          
        </div>
        <div className='pt-2'>
            <h1 className='text-white text-center text-2xl font-bold tracking-wider'>The Best Cloud Storage Platform</h1>
        </div>
    </div>
  )
}
