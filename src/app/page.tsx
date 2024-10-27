'use client'
import { Button } from "@nextui-org/button";
import Hero from "./components/main/Hero";
import { AspectRatio } from "@radix-ui/themes";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Page() {
  return (
    <div className="w-screen min-h-[calc(100vh-60px)]">
      <Hero />
    </div>
  );
}
