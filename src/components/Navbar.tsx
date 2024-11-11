import Image from 'next/image'
import Link from 'next/link'
import PennLogo from '/public/upenn-logo.png'

const Navbar = () => {
    const navItems = [
        { label: 'About', href: '/about' },
        { label: 'Team', href: '/team' },
        { label: 'Updates', href: '/updates' },
        { label: 'Groups', href: '/groups' },
        { label: 'Join us', href: '/join' },
    ];

    return (
        <div className="flex justify-center z-50">
            <div className="w-[80%] h-[80px] items-center mx-auto flex flex-row fixed px-5 justify-between rounded-2xl z-50 box-border" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                <div className="flex items-center h-[60px]">
                    <Link href="/">
                        <Image className="h-[50px] w-auto hover:cursor-pointer"
                             src={PennLogo}
                             alt=""/>
                    </Link>
                </div>

                <div className="flex flex-row items-center gap-10 font-semibold">
                    {navItems.map((item) => (
                        <Link 
                            key={item.label} 
                            href={item.href}
                            className="min-w-4 hover:cursor-pointer"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar