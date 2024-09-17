"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNextJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Reprehenderit reprehenderit incididunt duis sunt aliqua magna nostrud irure ullamco magna officia sint. Sint qui tempor ipsum ipsum excepteur. Excepteur nulla nisi esse nisi labore et sit voluptate. Ea pariatur minim ex esse etsunt id mollit commodo nisi.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Safwan Rahimi Bin Suhaili",
    },
    {
      fieldName: "Phone",
      fieldValue: "+6011 563 70422",
    },
    {
      fieldName: "Experiance",
      fieldValue: "9 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "safwan.rahimi87@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malay",
    },
  ],
};

// experiance data
const experiance = {
  icon: "/assets/resume/badge.svg",
  title: "My experiance",
  description: "Lorem ipsum dolor",
  items: [
    {
      company: "Nagasari Kersani Trading & Services.",
      position: "Owner",
      duration: "2023 - Present",
    },
    {
      company: "Yayasan ABADA / Madrasah Misbah Assalam SDN BHD.",
      position: "Web Application Developer",
      duration: "2016 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor",
  items: [
    {
      institution: "Malaysia University of Science and Technology",
      certification: "Bachelor of Science in Information Technology",
      year: "2024",
    },
    {
      institution: "OneCodeCamp",
      certification: "Frontend Fundamentals",
      year: "2024",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  Description: "lorem ipsum",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNextJs />,
      name: "next.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay } }}
    >
      resume page
    </motion.div>
  );
};

export default Resume;
