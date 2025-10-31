import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Code2, BookOpen, Award } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:madagonihimamanth@gmail.com",
    color: "hover:text-red-400",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/himamanth-kumar",
    color: "hover:text-purple-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/himamanth-kumar-236929263/",
    color: "hover:text-blue-400",
  },
  {
    name: "LeetCode",
    icon: Code2,
    href: "https://leetcode.com/u/madagonihimamanth/",
    color: "hover:text-yellow-400",
  },
  {
    name: "Medium",
    icon: BookOpen,
    href: "https://medium.com/@madagonihimamanth",
    color: "hover:text-green-400",
  },
  {
    name: "Product Hunt",
    icon: Award,
    href: "https://www.producthunt.com/@m_himamanth_kumar",
    color: "hover:text-orange-400",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 px-6 mb-20" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Let's connect!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 card-glow"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center gap-3 p-6 bg-background border border-border rounded-xl transition-all duration-300 ${social.color} group`}
              >
                <social.icon className="h-8 w-8 text-muted-foreground group-hover:text-current transition-colors" />
                <span className="text-sm font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-border text-center"
          >
            <p className="text-muted-foreground mb-4">
              Prefer email? Reach out directly at
            </p>
            <a
              href="mailto:madagonihimamanth@gmail.com"
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              madagonihimamanth@gmail.com
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center text-muted-foreground"
        >
          <p>© 2025 Himamanth Kumar. Built with React, Tailwind CSS, and Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  );
};
