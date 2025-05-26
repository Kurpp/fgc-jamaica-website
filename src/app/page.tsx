"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Navigation from "@/components/core/navbar";
import { ReactElement } from "react";
import { FaLongArrowAltRight } from "react-icons/fa"

const greetings = [
  "Hey! 👋",
  "¡Hola! 👋",              // Spanish
  "Bonjour! 👋",           // French
  "Ciao! 👋",               // Italian
  "Hallo! 👋",              // German
  "Olá! 👋",                // Portuguese
  "Hej! 👋",                // Swedish/Danish
  "Salut! 👋",              // Romanian/French informal
  "Merhaba! 👋",            // Turkish
  "नमस्ते! 👋",             // Hindi
  "سلام! 👋",               // Arabic
  "Здравствуйте! 👋",       // Russian
  "こんにちは！👋",            // Japanese
  "你好！👋",                 // Chinese
  "안녕하세요! 👋",            // Korean
  "สวัสดี! 👋",              // Thai
  "Halo! 👋",               // Indonesian
  "Γειά σας! 👋",            // Greek
  "שלום! 👋",                // Hebrew
  "Selam! 👋"                    // Amharic / Ethiopian
];


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

export default function Home() {
  return (
    <>
      <Navigation />
      <section className="flex flex-col min-h-screen -mt-17">
        <div className="flex flex-1 items-center justify-between mx-20">
          <div className="flex flex-col gap-2 justify-center">
            <div className="flex flex-col gap-2 text-5xl align-center">
              <TypeAnimation
                sequence={
                  greetings.flatMap((g) =>
                    [g, 1500]
                  )
                }
                wrapper="span"
                // @ts-expect-error some stupid typedef
                speed={175}
                repeat={Infinity}
              />
              <span>We&apos;re FIRST Global Jamaica!</span>
            </div>
            <span className="max-w-175">A group of young, passionate highschool students, who strive for excellence in aquiring new skills.</span>
            <Link href="/contact" className="flex items-center hover:underline transition active:translate-y-0.5">
              Get in Touch! We&apos;re waiting!&nbsp;<FaLongArrowAltRight />
            </Link>
          </div>

          <div className="bg-white text-black grid gap-4 rounded-md p-4 shadow-md">
            <Image
              src="/team2024.jpg"
              alt="FGC Logo"
              width={728}
              height={728}
              className="rounded-md shadow-md"
            />
            ~ Team FGC Jamaica 2024
          </div>
        </div>


      </section>
      <section id="about" className="flex min-h-screen">
        <div className="mt-17 p-7 flex flex-col gap-4">
          <span className="text-5xl">About Us</span>

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
      </section>
    </>
  );
}
