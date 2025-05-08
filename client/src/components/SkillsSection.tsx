import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Layers, Wrench, Award, Medal, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import ELabModal from "./ELabModal";

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isELabModalOpen, setIsELabModalOpen] = useState(false);

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

  const programmingSkills = [
    { name: "C++", percentage: 95 },
    { name: "Java", percentage: 90 },
    { name: "Python", percentage: 85 },
    { name: "JavaScript", percentage: 80 }
  ];

  const frameworkSkills = [
    { name: "React", percentage: 85 },
    { name: "TensorFlow/PyTorch", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "Django", percentage: 70 }
  ];
  
  const toolSkills = [
    { name: "Git/GitHub", percentage: 90 },
    { name: "Docker", percentage: 75 },
    { name: "SQL/NoSQL Databases", percentage: 85 },
    { name: "AWS/Cloud Services", percentage: 70 }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">My Skills</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-5">
              <Code className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Programming Languages</h3>
            <p className="text-gray-600 mb-4">Strong proficiency in multiple programming languages with practical application experience.</p>
            
            <div className="mt-4 space-y-3">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-primary-500" />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Frameworks & Libraries Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
          >
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-5">
              <Layers className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Frameworks & Libraries</h3>
            <p className="text-gray-600 mb-4">Experience with various frameworks and libraries for efficient development.</p>
            
            <div className="mt-4 space-y-3">
              {frameworkSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-green-500" />
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 lg:col-span-1 md:col-span-2 lg:col-auto"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-5">
              <Wrench className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3 text-gray-900">Tools & Technologies</h3>
            <p className="text-gray-600 mb-4">Proficient with industry-standard tools and technologies for development workflows.</p>
            
            <div className="mt-4 space-y-3">
              {toolSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2 bg-purple-500" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Achievements & Certifications */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-2xl font-heading font-semibold mb-8 text-center text-gray-900">Achievements & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-center"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-medium text-gray-900">5-Star C++ Rating</h4>
                <p className="text-gray-600">HackerRank Certification</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex items-center"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Medal className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-heading font-medium text-gray-900">Elite NPTEL Certification</h4>
                <p className="text-gray-600">Java Programming</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 md:col-span-2 cursor-pointer"
              onClick={() => setIsELabModalOpen(true)}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="sm:w-2/3">
                  <h4 className="text-lg font-heading font-medium text-gray-900 mb-2">E-LAB Completion Status</h4>
                  <p className="text-gray-600 mb-4">View my comprehensive programming lab work progress, demonstrating practical skills developed through hands-on exercises and assignments.</p>
                  <button 
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center bg-transparent border-none p-0 cursor-pointer"
                  >
                    View Detailed Status
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
                <div className="sm:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                    alt="E-Lab Completion Status" 
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </motion.div>
            
            {/* E-LAB Modal */}
            <ELabModal 
              isOpen={isELabModalOpen} 
              onClose={() => setIsELabModalOpen(false)} 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
