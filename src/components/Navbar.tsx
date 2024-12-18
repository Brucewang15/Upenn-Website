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
        <div className="w-full items-center mx-auto flex flex-row px-5 justify-between rounded-2xl box-border">
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
    )
}

export default Navbar