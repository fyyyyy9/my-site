import { motion } from 'framer-motion';

interface AboutSectionProps {
  content: string;
}

export default function AboutSection({ content }: AboutSectionProps) {
  return (
    <div id="about" className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-user text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">关于我</h2>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-300 leading-relaxed">
          {content}
        </p>
        
        <div className="mt-6 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
      </motion.div>
    </div>
  );
}