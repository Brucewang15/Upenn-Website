"use client"

import './page.css'
import React from 'react'
import Header from "../components/docs/Header";
import Hero from '../components/docs/Hero';
import TeamMembers from '../components/docs/TeamMembers';
import AboutUs from '../components/docs/AboutUs';
    

export default function Home() {

    return <>
        
        <div className="antialiased">

            <div className="relative z-50"><Header /></div>
            <Hero />
            <AboutUs />
            <TeamMembers />

        </div>
    </>
}