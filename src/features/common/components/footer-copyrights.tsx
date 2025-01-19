import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

function FooterCopyrights() {
  return (
    <div className="flex justify-center items-center w-full h-10 bg-slate-200/10 dark:bg-black/10 gap-8 md:gap-[10px]">
      <Link href="https://github.com/emergoncalves" target="_blank">
        <Github className="w-4 h-4 text-black/50 dark:text-white/50" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/emerson-goncalves-dev/"
        target="_blank"
      >
        <Linkedin className="w-4 h-4 text-black/50 dark:text-white/50" />
      </Link>
    </div>
  );
}

export default FooterCopyrights;
