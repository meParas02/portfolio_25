import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.5] dark:opacity-[0.8]"></div>

        {/* Gradient borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Gradient blobs */}
        <div className="absolute top-1/4 right-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary/10 via-pink-500/5 to-transparent blur-2xl"></div>
      </div>
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 md:text-4xl animate-on-scroll bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
          Here's a bit about my background and what I do
        </p>
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="flex justify-center animate-on-scroll">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 transition-all duration-700 ease-in-out hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10"></div>
              <Image src="/ai-profile.webp?height=320&width=320" alt="Profile" fill className="object-cover" priority />
            </div>
          </div>
          <div className="space-y-4 animate-on-scroll animation-delay-200">
            <p className="text-lg">
              I'm a passionate Full Stack Developer with expertise in building modern web applications. With over 4
              years of experience, I specialize in creating responsive, user-friendly interfaces and robust backend
              systems.
            </p>
            <p className="text-lg">
              My journey in web development started when I built my first website in college. Since then, I've worked
              with various technologies and frameworks, always staying up-to-date with the latest industry trends.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary/50 bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10">
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    4+
                  </h3>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary/50 bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10">
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    6+ and counting...
                  </h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
