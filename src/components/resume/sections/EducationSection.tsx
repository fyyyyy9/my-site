import { motion } from 'framer-motion';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description?: string;
}

interface EducationSectionProps {
  education: EducationItem[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <div id="education" className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-graduation-cap text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">教育背景</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-500/30"
          >
            <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-900"></div>
            
            <h3 className="text-xl font-semibold text-gray-100">{item.school}</h3>
            <p className="text-blue-400 mb-2">{item.degree}</p>
            <p className="text-gray-400 text-sm mb-3">{item.period}</p>
            
            {item.description && (
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}