import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Real-Time Fraud Detection System",
    description:
      "AI + Quantum hybrid system detecting fraudulent transactions with high accuracy using advanced machine learning algorithms and quantum computing techniques.",
    tags: ["FastAPI", "Qiskit", "Streamlit", "Scikit-learn"],
    github: "#",
    demo: "#",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "AI Movement Guidance System",
    description:
      "Real-time posture correction and movement guidance for athletes using computer vision and deep learning for precise motion analysis.",
    tags: ["TensorFlow", "OpenCV", "Streamlit"],
    github: "#",
    demo: "#",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "AI Chat Agent (MCP-style)",
    description:
      "Autonomous AI agent that performs tasks intelligently using open-source frameworks, natural language processing, and advanced reasoning capabilities.",
    tags: ["LangChain", "FastAPI", "OpenAI API"],
    github: "#",
    demo: "#",
    gradient: "from-cyan-600 to-green-600",
  },
  {
    title: "Quantum Algorithm Optimizer",
    description:
      "Quantum computing toolkit for optimizing complex algorithms using IBM Qiskit, featuring circuit visualization and performance benchmarking.",
    tags: ["Qiskit", "Python", "Jupyter"],
    github: "#",
    demo: "#",
    gradient: "from-green-600 to-purple-600",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mb-4"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my work in AI, quantum computing, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow hover:scale-[1.02] transition-all duration-300"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                    {index + 1}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
