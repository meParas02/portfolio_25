"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"

// Define validation schema with Yup
const formSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  email: yup.string().required("Email is required").email("Must be a valid email"),
  subject: yup.string().required("Subject is required").min(5, "Subject must be at least 5 characters"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
})

type FormData = yup.InferType<typeof formSchema>

export default function Contact() {
  // Initialize the form with proper type casting for the resolver
  const form = useForm<FormData>({
    resolver: yupResolver(formSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = form

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    reset()
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Enhanced background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 animate-gradient"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>

        {/* Gradient borders */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        {/* Gradient blobs */}
        <div className="absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-primary/10 via-purple-500/5 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 h-60 w-60 rounded-full bg-gradient-to-tr from-secondary/10 via-pink-500/5 to-transparent blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4 md:text-4xl animate-fade-in bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              <Card className="transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a
                      href="mailto:parasmehta1999@gmail.com"
                      className="text-muted-foreground hover:underline"
                    >
                      parasmehta1999@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a
                      href="tel:9408613459"
                      className="text-muted-foreground hover:underline"
                    >
                      +91 94086 13459
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 hover:border-primary/50 bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Gujarat, India</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-slide-up animation-delay-200">
            <Card className="transition-all duration-500 ease-in-out hover:shadow-xl bg-gradient-to-br from-background to-muted/20 dark:from-background dark:to-muted/5 border-primary/10">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        {...register("name")}
                        aria-invalid={errors.name ? "true" : "false"}
                        className="transition-all duration-300 focus:border-primary/50 focus:ring-primary/50 hover:border-primary/30"
                      />
                      {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        {...register("email")}
                        aria-invalid={errors.email ? "true" : "false"}
                        className="transition-all duration-300 focus:border-primary/50 focus:ring-primary/50 hover:border-primary/30"
                      />
                      {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      {...register("subject")}
                      aria-invalid={errors.subject ? "true" : "false"}
                      className="transition-all duration-300 focus:border-primary/50 focus:ring-primary/50 hover:border-primary/30"
                    />
                    {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      rows={5}
                      {...register("message")}
                      aria-invalid={errors.message ? "true" : "false"}
                      className="transition-all duration-300 focus:border-primary/50 focus:ring-primary/50 hover:border-primary/30"
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-primary/20 hover:scale-105 bg-gradient-to-r from-primary to-purple-600 hover:from-primary hover:to-purple-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
