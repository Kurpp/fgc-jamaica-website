"use client";

import Image from "next/image";
import Navigation from "@/components/core/navbar";
import { ReactElement } from "react";

function CoachCard({ name, image, description, specialties, portrait }:
    { name: string, image: string, description: string, specialties: string[], portrait?: "center" | "left" }): ReactElement {
    return (
        <div className="flex gap-4 bg-white text-black rounded-md p-4 shadow-md">
            <Image
                src={"/coaches" + image}
                alt={name}
                width={246.5}
                height={279}
                className={`rounded object-${portrait ? portrait : "center"} object-cover`}
            />
            <div className="flex flex-col gap-2">
                <span className="font-bold text-xl">{name}</span>
                <span>{description}</span>
                <div>
                    <span className="font-bold text-lg">Specialties</span>
                    <ul>
                        {specialties.map((specialty, index) => (
                            <li key={index} className="list-disc list-inside">{specialty}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="grid p-5 gap-7">
                <div className="flex flex-col gap-3 text-lg">
                    <span className="font-bold text-4xl">Who are we?</span>

                    We are a team of students, driven by our shared passion for STEM and robotics, across all regions of Jamaica, coming together and working to leave our mark on the First Global Competition
                </div>
                <div className="flex flex-col gap-5">
                    <span className="font-bold text-4xl">Meet our coaches!</span>
                    <div className="grid grid-cols-2 gap-4">
                        <CoachCard
                            name="Gavin Samuels"
                            image="/gavin-samuels.png"
                            description="Greetings! I'm Gavin, the Head coach. Jamaica College Alumnus. 8+ years of coaching experience."
                            specialties={["Judged Awards", "General Administration"]}
                        />
                        <CoachCard
                            name="Orville Daley"
                            image="/orville-daley.png"
                            portrait="left"
                            description="Hey! I'm Orville. Former Lead Programmer. From Jamaica College."
                            specialties={["Robot Programming"]}
                        />
                        <CoachCard
                            name="Paul Pounall"
                            image="/paul-pounall.png"
                            description="Howdy! I'm Pablo, the Engineer coach. Jamaica College Alumnus."
                            specialties={["Robot Design & Fabrication", "On-Field Strategy"]}
                        />
                        <CoachCard
                            name="Marc-Anthony Eaton"
                            image="/marc-anthony-eaton.png"
                            description="Hi! I'm Marc, I like to engineer sometimes. Also a Jamaica College Alumnus."
                            specialties={["Robot Engineering & Build"]}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
