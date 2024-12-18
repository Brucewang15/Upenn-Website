"use client"
import React from 'react'
import Hero from '@/components/Hero';
import TeamMembers from '@/components/TeamMembers';
import AboutUs from '@/components/AboutUs';
    

export default function Home() {

    return (
        <main>
            <Hero />
            <AboutUs />
            <TeamMembers />
        </main>
    )
}
