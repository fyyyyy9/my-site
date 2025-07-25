import { useState } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  period: string;
  achievements: string[];
  logo?: string;
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id || null);
  
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <div id="experience" className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-briefcase text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">工作经历</h2>
      </div>
      
      <div className="space-y-8">
        {experience.map((item, index) => {
          const isExpanded = expandedId === item.id;
          const companyInitials = item.company.split(' ').map(word => word[0]).join('').toUpperCase();
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-blue-500/30 last:before:hidden"
            >
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-gray-900 z-10"></div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  {/* 公司Logo占位符 */}
                  <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold text-lg mr-4 border border-blue-500/30">
                    {companyInitials}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">{item.company}</h3>
                    <p className="text-blue-400 mb-1">{item.position}</p>
                    <p className="text-gray-400 text-sm">{item.period}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-gray-400 hover:text-blue-400 transition-colors ml-4"
                >
                  <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
              </div>
              
              {/* 成就列表 */}
              <motion.ul
                className="mt-4 space-y-2 pl-16"
                initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <i className="fa-solid fa-star text-yellow-400 mt-1 mr-2 text-sm"></i>
                    <span>{achievement}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}