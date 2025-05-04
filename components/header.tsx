"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop
      const headerOffset = 0 // Adjust based on your header height
      const totalOffset = offsetTop - headerOffset

      window.scrollTo({
        top: totalOffset,
        behavior: "smooth",
      })
    }
  }

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow to header when scrolled
      setScrolled(window.scrollY > 10)

      // Determine active section
      const sections = ["hero", "about", "projects", "skills", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) return false

        const rect = element.getBoundingClientRect()
        // Adjust the threshold based on your needs
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${scrolled ? "bg-background/95 shadow-md" : "bg-background/50"}`}
    >
      <div className="container flex h-16 items-center justify-around">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
              activeSection === "hero" ? "text-primary" : ""
            }`}
          >
            Home
            {activeSection === "hero" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
            )}
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
              activeSection === "about" ? "text-primary" : ""
            }`}
          >
            About
            {activeSection === "about" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
            )}
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
              activeSection === "projects" ? "text-primary" : ""
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
            )}
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
              activeSection === "skills" ? "text-primary" : ""
            }`}
          >
            Skills
            {activeSection === "skills" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
            )}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`text-sm font-medium transition-all duration-300 hover:text-primary relative ${
              activeSection === "contact" ? "text-primary" : ""
            }`}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300"></span>
            )}
          </button>
          <ModeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 bg-background/95 backdrop-blur-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-sm font-medium p-2 rounded-md transition-all duration-300 ${
                activeSection === "hero" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium p-2 rounded-md transition-all duration-300 ${
                activeSection === "about" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`text-sm font-medium p-2 rounded-md transition-all duration-300 ${
                activeSection === "projects" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`text-sm font-medium p-2 rounded-md transition-all duration-300 ${
                activeSection === "skills" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium p-2 rounded-md transition-all duration-300 ${
                activeSection === "contact" ? "bg-primary/10 text-primary" : "hover:bg-muted"
              }`}
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
