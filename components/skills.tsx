"use client"

import { useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Palette, Server, Smartphone, Terminal, Workflow } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-8 w-8 text-primary" />,
    skills: ["HTML/CSS", "JavaScript", "React", "Next.js", "Angular v13", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8 text-primary" />,
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    skills: ["Responsive Design", "Progressive Web Apps", "React Native"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-8 w-8 text-primary" />,
    skills: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    title: "DevOps",
    icon: <Terminal className="h-8 w-8 text-primary" />,
    skills: ["Git", "Vercel", "Netlify"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ["JavaScript", "TypeScript", "CPP"],
  },
  {
    title: "Web Performance",
    icon: <Globe className="h-8 w-8 text-primary" />,
    skills: ["Webpack", "Vite", "W3 accesibility", "SEO"],
  },
  {
    title: "Project Management",
    icon: <Workflow className="h-8 w-8 text-primary" />,
    skills: ["Agile", "Scrum", "Jira", "Trello", "Team Collaboration"],
  },
]

export default function Skills() {
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.3] dark:opacity-[0.3]"></div>

        {/* Gradient borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Gradient blobs */}
        <div className="absolute top-1/3 left-1/4 h-60 w-60 rounded-full bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 h-40 w-40 rounded-full bg-gradient-to-tr from-secondary/10 via-pink-500/5 to-transparent blur-2xl"></div>
      </div>
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 md:text-4xl animate-on-scroll bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
          Technologies and tools I work with
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) {
                  skillRefs.current[index] = el;
                }
              }}
              className="opacity-1 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="transition-transform duration-300 hover:scale-110 bg-primary/10 p-3 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:translate-x-1"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
