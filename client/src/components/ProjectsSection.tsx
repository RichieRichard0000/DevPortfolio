import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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

  const cardHoverVariants = {
    hover: { 
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const projects = [
    {
      title: "AgriGuard",
      description: "An AI-powered crop disease detection system that helps farmers identify and treat plant diseases early using computer vision.",
      image: "https://pixabay.com/get/g4a5c518394fcccc0b5b5f673a541dbfa3d5e889606efa7976a08df80dfff8047a3b474e7ff0c8e1a24ee55ec7c59548b04f87ac3878547be021aa88cdbd1bcbe_1280.jpg",
      tags: ["Machine Learning", "Computer Vision", "Python", "TensorFlow"],
      tagColors: ["bg-green-100 text-green-800", "bg-yellow-100 text-yellow-800", "bg-blue-100 text-blue-800", "bg-purple-100 text-purple-800"]
    },
    {
      title: "E-LAB Completion Status",
      description: "View my comprehensive E-LAB completion progress, showcasing my practical programming skills and laboratory assignments completed throughout my academic journey.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Academic", "Laboratory", "Programming", "Assessment"],
      tagColors: ["bg-blue-100 text-blue-800", "bg-green-100 text-green-800", "bg-red-100 text-red-800", "bg-purple-100 text-purple-800"]
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">My Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600">Showcasing my recent work and innovations</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${project.tagColors[tagIndex]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <div className="flex space-x-2">
                    <a href="#" className="text-gray-500 hover:text-gray-800" aria-label="GitHub repository">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-800" aria-label="Live demo">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
