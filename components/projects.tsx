"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/staticData";
import { Copy } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project: any) => project.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-gradient"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-0 dark:opacity-1"></div>

        {/* Gradient blobs */}
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-tr from-secondary/20 via-pink-500/10 to-primary/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-2xl"></div>

        {/* Animated gradient lines */}
      </div>
      <div className="container relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 md:text-4xl animate-on-scroll bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll">
          Explore my recent work and personal projects
        </p>

        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={setActiveTab}
        >
          {/* <div className="flex justify-center mb-8 animate-on-scroll">
            <TabsList className="transition-all duration-300 hover:shadow-md bg-background/50 backdrop-blur-sm">
              <TabsTrigger
                value="all"
                className="transition-all duration-300 data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="transition-all duration-300 data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground"
              >
                Web
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="transition-all duration-300 data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground"
              >
                Mobile
              </TabsTrigger>
            </TabsList>
          </div> */}

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    if (el) {
                      projectRefs.current[index] = el;
                    }
                  }}
                  className="opacity-1 translate-y-8 transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="overflow-hidden group h-full transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02] hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="transition-transform duration-700 ease-in-out group-hover:scale-110"
                        // className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-[0.5] group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 opacity-[0.5] group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {/* <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="transition-all duration-300 ease-in-out hover:border-primary/50 hover:bg-primary/5 hover:scale-105"
                      >
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button> */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-lg px-4 py-2 flex items-center"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                              {project.title}
                            </DialogTitle>
                            <DialogDescription className="mt-4 text-gray-600 dark:text-gray-300">
                              <ul className="list-disc list-inside space-y-2">
                                {project?.features?.map((item, i) => (
                                  <li
                                    key={i}
                                    className="text-sm leading-relaxed"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
