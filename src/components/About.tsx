import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student with a deep fascination for 
              <span className="text-primary font-semibold"> Artificial Intelligence</span> and 
              <span className="text-primary font-semibold"> Quantum Computing</span>. 
              My journey in tech is driven by curiosity and a desire to solve complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building intelligent systems that leverage cutting-edge technologies 
              like TensorFlow, PyTorch, and IBM Qiskit. Whether it's developing AI-powered 
              applications or exploring quantum algorithms, I'm always excited to push the 
              boundaries of what's possible.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy sharing knowledge through technical writing on Medium, 
              contributing to open-source projects, and staying updated with the latest 
              advancements in AI and quantum technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-border rounded-2xl p-8 card-glow"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Facts</h3>
            <div className="space-y-4">
              {[
                { label: "Location", value: "India" },
                { label: "Education", value: "Computer Science Student" },
                { label: "Focus Areas", value: "AI, ML, Quantum Computing" },
                { label: "Interests", value: "Full-Stack Dev, Data Science" },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex justify-between items-center border-b border-border pb-3"
                >
                  <span className="text-muted-foreground">{fact.label}</span>
                  <span className="text-foreground font-medium">{fact.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
