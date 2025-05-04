import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/20 dark:to-muted/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="/"
              className="text-xl font-bold transition-colors duration-300 hover:text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} Paras Mehta. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:parasmehta1999@gmail.com"
              className="rounded-full p-2 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
