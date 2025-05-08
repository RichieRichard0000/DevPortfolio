import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pb-32 md:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Devansh Baranwal</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A second-year Computer Science Engineering student at SRM Institute of Science and Technology, specializing in Software Engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-gradient-to-r from-primary to-primary-800 hover:shadow-lg transition-shadow duration-300"
              >
                View My Work
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-primary-500 text-base font-medium rounded-lg shadow-sm text-primary-600 bg-white hover:bg-primary-50 transition-colors duration-200"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex justify-center md:justify-end relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="/src/assets/1746514704561.jpg" 
                alt="Devansh Baranwal Portrait" 
                className="w-full h-full object-cover"
              />
              {/* Note: Replace with: src="/src/assets/1746514704561.jpg" when image is uploaded */}
            </div>
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, 0]
              }} 
              transition={{ 
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-primary-100 rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
