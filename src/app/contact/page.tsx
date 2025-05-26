"use client";

import Link from "next/link";
import Navigation from "@/components/core/navbar";
import { HTMLInputTypeAttribute } from "react";

const InputField = ({ label, name, type = "text", placeholder, isTextArea = false }: { label: string, name: string, type?: HTMLInputTypeAttribute, placeholder: string, isTextArea?: boolean }) => (
    <div className="flex flex-col gap-1">
        <span>{label}</span>
        {isTextArea ? (
            <textarea
                name={name}
                placeholder={placeholder}
                required
                className="p-2 rounded-md border border-gray-300 h-32"
            />
        ) : (
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required
                className="p-2 rounded-md border border-gray-300"
            />
        )}
    </div>
);


export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <div className="grid p-5 gap-7">
                <div className="flex flex-col gap-3 text-lg">
                    <span className="font-bold text-4xl">Contact Us!</span>
                    <span>We are always open to new opportunities and collaborations. If you have any questions, feel free to reach out to us!</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Link href="https://www.instagram.com/fgc_Jamaica/" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-black rounded-md p-4 shadow-md">
                        <span className="font-bold text-xl">Instagram</span>
                        <span>Follow us on Instagram for the latest updates and behind-the-scenes content!</span>
                    </Link>
                    <Link href="https://www.x.com/JamaicaRobotics" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-3 bg-gradient-to-r from-[#1DA1F2] to-[#009ffc] text-black rounded-md p-4 shadow-md">
                        <span className="font-bold text-xl">Twitter</span>
                        <span>Follow our Twitter to stay connected with our community!</span>
                    </Link>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="font-bold text-3xl">Email the Team!</span>
                    <form
                        action="https://formspree.io/f/xjvowzqk"
                        method="POST"
                        className="flex flex-col gap-3 bg-white rounded p-4 text-black"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            <InputField label="Name" name="name" placeholder="John Doe" />
                            <InputField label="Email" name="email" type="email" placeholder="johndoe@gmail.com" />
                        </div>
                        <InputField label="Subject" name="subject" placeholder="Want to meet?" />
                        <InputField label="Message" name="message" placeholder="Let's discuss our robots!" isTextArea />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md active:translate-y-0.5 hover:bg-blue-600 transition">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
