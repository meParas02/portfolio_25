"use client"

import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden min-h-screen">
      <Header />
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-secondary/30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary/30 via-pink-500/20 to-primary/30 blur-3xl"></div>

        {/* Additional gradient elements */}
        <div className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 h-60 w-60 rounded-full bg-gradient-to-l from-amber-500/10 to-pink-500/10 blur-2xl"></div>

        {/* Animated gradient lines */}
        {/* <div className="absolute top-[20%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse"></div> */}
        <div className="absolute bottom-[30%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent animate-pulse delay-700"></div>
      </div>
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center relative z-10">
        <div className="space-y-6 max-w-3xl animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-300% bg-clip-text text-transparent">
            Hi, I'm <span className="font-extrabold">Parasss Mehta...!</span>
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl animate-slide-up">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-slide-up animation-delay-200">
            <Button
              asChild
              size="lg"
              className="group transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:scale-105 bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-700"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                View My Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="transition-all duration-500 ease-in-out hover:shadow-md hover:scale-105 hover:border-primary/50 hover:bg-primary/5"
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Contact Me
              </Link>
            </Button>
          </div>
          <div className="flex justify-center gap-4 pt-6 animate-slide-up animation-delay-300">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary/10"
            >
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary/10"
            >
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:bg-primary/10"
            >
              <Link href="mailto:parasmehta1999@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-muted-foreground rounded-full animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
