"use client"

import { Boxes } from '@/components/ui/background-boxes';
import './page.css'
import {GlareCard} from "@/components/ui/glare-card";
import Header from "../components/docs/Header";
import FrontPage from '../components/docs/FrontPage';
import TeamMembers from '../components/docs/TeamMembers';
import AboutUs from '../components/docs/AboutUs';

import { motion } from "framer-motion";
import {EvervaultCard, Icon } from "@/components/ui/evervault-card";
import {LampContainer} from "@/components/ui/lamp";
import {cn} from "@/lib/utils";  // Adjust the import path if necessary

export default function Home() {

    return (
        
        <div className="antialiased">

            <div className="relative z-50"><Header></Header></div>

            <FrontPage></FrontPage>
            <AboutUs></AboutUs>
            <TeamMembers></TeamMembers>

        </div>
    );
}