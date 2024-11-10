import { motion } from 'framer-motion'
import {EvervaultCard} from '../ui/evervault-card'
const TeamMembers = () => {

    const teamMembers = [
        {
            name: "John Doe",
            photo: "",
            description: "John is a software engineer specializing in frontend development."
        },
        {
            name: "Jane Smith",
            photo: "",
            description: "Jane is a backend developer with a passion for distributed systems."
        },
        {
            name: "Alex Johnson",
            photo: "",
            description: "Alex is a UX designer focused on creating delightful user experiences."
        }
    ];

    return <>
        <div id='AboutUs' className="mx-[20%] w-[60%] flex flex-row justify-center">
            <div>

                <motion.h1
                    initial={{ opacity: 0.5, y: 50 }}
                    whileInView={{ opacity: 1, y: -50 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col my-10 justify-center">

                    <div className="mt-8 bg-gradient-to-br from-slate-100 flex flex-col to-slate-400 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-6xl">Meet the Team</div>
                    <div className="flex flex-wrap gap-x-5 gap-y-5">

                        {teamMembers.map((member) => (
                            <div
                                key={member.name}
                                className="border border-white/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative max-h-[20%]">
                                <EvervaultCard className='Test' text={member.photo ? member.photo : 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png'} />
                                <h1 className="text-white">{member.name}</h1>
                                <h2 className="dark:text-white text-white mt-4 text-sm font-light">
                                    {member.description}
                                </h2>
                            </div>
                        ))}
                    </div>
                </motion.h1>
            </div>
        </div>  
    </>
}

export default TeamMembers