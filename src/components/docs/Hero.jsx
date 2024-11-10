import { motion } from "framer-motion"
import { Boxes } from "../ui/background-boxes"
import Image from "next/image"
import tradewebLogo from "../../../public/tradeweb.png"
import janestreetLogo from "../../../public/janestreet.png"
import dwrLogo from "../../../public/dwr.webp"
import flowTradersLogo from "../../../public/flowtraders.png"
import sigLogo from "../../../public/sig.png"
import sacLogo from "../../../public/sac.png"

const Hero = () => {
    const sponsors = [
        {
            id: 1,
            img: tradewebLogo,
            name: 'TradeWeb',
            width: 150,
            height: 40
        },
        {
            id: 2,
            img: janestreetLogo,
            name: 'Jane Street',
            width: 150,
            height: 40
        },
        {
            id: 3,
            img: dwrLogo,
            name: 'DWR',
            width: 150,
            height: 40
        },
        {
            id: 4,
            img: flowTradersLogo,
            name: 'Flow Traders',
            width: 150,
            height: 40
        },
        {
            id: 5,
            img: sigLogo,
            name: 'SIG',
            width: 150,
            height: 40
        },
        {
            id: 6,
            img: sacLogo,
            name: 'SAC',
            width: 150,
            height: 40
        }
    ]

    return (
        <div className="h-dvh relative w-full overflow-hidden bg-slate-900 flex flex-col items-center rounded-lg">
            <div className="absolute inset-0 w-full h-dvh bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes className='z-10' />
            
            <div className="flex flex-col items-center justify-center absolute top-[20%]">
                <h1 className="mt-8 relative z-30 items-center bg-gradient-to-br from-blue-300 to-red-400 py-4 bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl sm:text-5xl">
                    Welcome to <br />Penn Chess
                </h1>

                <p className="mt-5 max-w-[50%] relative z-30 items-center bg-gradient-to-br from-slate-100 to-slate-300 py-4 bg-clip-text text-center font-bold tracking-tight text-transparent md:text-lg sm:text-base">
                    &ldquo;The beauty of chess is it can be whatever you want it to be. It transcends language, age, race,
                    religion, politics, gender, and socioeconomic background. Whatever your circumstances, anyone can
                    enjoy a good fight to the death over the chess board.&rdquo;
                    – Simon Williams
                </p>
            </div>

            <div className="w-[100%] flex flex-col absolute z-30 bottom-[5%] items-center justify-center md:text-3xl">
                <div className='flex flex-wrap justify-center items-center gap-x-8 gap-y-0'>
                    {sponsors.map((sponsor) => (
                        <button 
                            key={sponsor.id}
                            className="button max-h-[9%] w-full min-w-[150px] max-w-[15%] flex justify-center items-center"
                        >
                            <span className="button_lg flex justify-center">
                                <span className="button_sl"></span>
                                <span className="button_text flex max-w-[180px] h-[40px] items-center">
                                    <Image 
                                        className='max-h-[100%]' 
                                        src={sponsor.img} 
                                        alt={sponsor.name}
                                        width={sponsor.width}
                                        height={sponsor.height}
                                    />
                                </span>
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero