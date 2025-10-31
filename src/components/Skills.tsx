import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Quantum",
    icon: Database,
    skills: ["IBM Qiskit", "Google Cirq", "D-Wave Ocean SDK"],
  },
  {
    title: "Web & Tools",
    icon: Wrench,
    skills: ["FastAPI", "React", "Streamlit", "Tailwind CSS"],
  },
];

const additionalSkills = [
  "Power BI",
  "MySQL",
  "Apache Spark",
  "Hadoop",
  "Git",
  "VS Code",
  "Azure",
  "Google Cloud",
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 card-glow hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Additional Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
