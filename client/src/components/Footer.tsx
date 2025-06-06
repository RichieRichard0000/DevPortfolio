import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-white font-heading font-bold text-xl">
              DB.
            </Link>
            <p className="mt-2 text-sm">© {currentYear} Devansh Baranwal. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.566 9.566 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white" aria-label="Instagram">
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
    </footer>
  );
}
