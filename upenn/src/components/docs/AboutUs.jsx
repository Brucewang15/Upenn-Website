import { motion } from 'framer-motion'

const AboutUs = () => {

    return <>
        <div id='AboutUs' className="mx-[20%] w-[60%] flex flex-row justify-center">
            <div>
                <motion.h1
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, y: -50 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className="flex justify-center">
                    <div className="w-[50%] flex flex-wrap flex-col">
                        <div className="mt-24 bg-gradient-to-br from-slate-100 flex flex-col to-slate-400 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-6xl">
                            About Us
                        </div>
                        <div className="flex text-center md:text-lg">
                            Welcome to UPenn Chess Club.
                            Whether you’ve played chess your whole life or have no idea how the pieces move,
                            we encourage you to stop by our meetings and events.
                            Everyone  is welcome, including non-Penn students.
                        </div>

                    </div>

                </motion.h1>
            </div>
        </div>
    </>
}
export default AboutUs