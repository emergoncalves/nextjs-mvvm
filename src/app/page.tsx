"use client";
import { motion } from "framer-motion";
import {
  HeroHighlight,
  Highlight,
} from "@/features/common/components/hero-highlight";
import { Button } from "@/features/common/components/ui/button";
import Link from "next/link";
import { HoverBorderGradient } from "@/features/common/components/ui/hover-border-animation";
import FooterCopyrights from "@/features/common/components/footer-copyrights";

export default function Home() {
  return (
    <>
      <HeroHighlight containerClassName="h-screen relative">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Template Next.js com MVVM, Vertical Slicing e Injeção de Dependências.
          <br />
          <Highlight className="text-black dark:text-white">
            Code com clareza, entregue com confiança.
          </Highlight>
        </motion.h1>
        <div className="flex justify-center mt-8">
          <Link href="/login">
            <HoverBorderGradient as={Button} className="rounded-full py-2 px-6">
              <span className="text-black dark:text-white text-lg">Login</span>
            </HoverBorderGradient>
          </Link>
        </div>
      </HeroHighlight>
      <div className="absolute bottom-0 w-full">
        <FooterCopyrights />
      </div>
    </>
  );
}
