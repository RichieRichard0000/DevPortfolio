import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Globe, Send, FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Have a question or want to work together?</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Project Inquiry" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message here..." 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary-800 hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
          
          <div>
            <motion.div 
              variants={itemVariants} 
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 mb-8"
            >
              <h3 className="text-xl font-heading font-semibold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <a href="mailto:devansh.b@srmist.edu.in" className="text-base text-gray-900 hover:text-primary-600">devansh.b@srmist.edu.in</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Location</h4>
                    <p className="text-base text-gray-900">SRM Institute of Science and Technology, Kattankulathur, Chennai</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-gray-500">Social Profiles</h4>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="text-gray-500 hover:text-primary-600" aria-label="LinkedIn">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-primary-600" aria-label="GitHub">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.566 9.566 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-primary-600" aria-label="Twitter">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-primary-600" aria-label="Instagram">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.284 2 8.944 2.012 7.877 2.058 6.813 2.105 6.088 2.278 5.449 2.525c-.66.256-1.22.598-1.778 1.156-.557.558-.9 1.117-1.157 1.778-.247.639-.42 1.364-.467 2.428-.046 1.067-.058 1.407-.058 4.123s.012 3.056.058 4.123c.047 1.064.22 1.79.467 2.428.257.661.6 1.22 1.157 1.778.558.557 1.117.9 1.778 1.157.64.247 1.364.42 2.428.467 1.067.046 1.407.058 4.123.058s3.056-.012 4.123-.058c1.064-.047 1.79-.22 2.428-.467.661-.257 1.22-.6 1.778-1.157.557-.558.9-1.117 1.157-1.778.247-.639.42-1.364.467-2.428.046-1.067.058-1.407.058-4.123s-.012-3.056-.058-4.123c-.047-1.064-.22-1.79-.467-2.428-.257-.661-.6-1.22-1.157-1.778-.558-.558-1.117-.9-1.778-1.156-.639-.247-1.364-.42-2.428-.467-1.067-.046-1.407-.058-4.123-.058zm0 1.802c2.67 0 2.985.01 4.04.058.976.045 1.505.208 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.055.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344-.467-.182-.8-.399-1.15-.748-.35-.35-.566-.683-.748-1.15-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 15.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27z" />
                          <circle cx="17.338" cy="6.662" r="1.2" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="bg-primary-900 rounded-xl shadow-md p-8 text-white"
            >
              <h3 className="text-xl font-heading font-semibold mb-4">Let's Build Something Amazing</h3>
              <p className="mb-6">I'm currently available for freelance work or project collaborations. If you have a project that needs creative problem-solving, let's discuss how we can work together!</p>
              <a href="#" className="inline-flex items-center px-5 py-2 border border-white text-base font-medium rounded-lg hover:bg-white hover:text-primary-900 transition-colors duration-200">
                My Resume
                <FileText className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
