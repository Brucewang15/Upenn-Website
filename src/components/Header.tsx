'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import PennLogo from '/public/upenn-logo.png'
import MobileNav from './MobileNav'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => {
      document.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <motion.header
      className={`bg-background/30 fixed inset-x-0 top-4 z-40 mx-auto flex h-[70px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors ${
        isScrolled ? 'bg-background/80' : ''
      }`}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <a
        href='#skip-nav'
        className='bg-background focus-visible:ring-ring fixed left-4 top-4 -translate-y-20 rounded-sm border p-2 font-medium shadow-sm transition-transform focus-visible:translate-y-0 focus-visible:ring focus-visible:ring-offset-2'
      >
        Skip to main content
      </a>
      <Link href='/' className='flex items-center justify-center'>
        <Image src={PennLogo} alt="Logo" width={75} height={75} />
      </Link>
      <div className='flex items-center gap-2'>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.header>
  )
}

export default Header