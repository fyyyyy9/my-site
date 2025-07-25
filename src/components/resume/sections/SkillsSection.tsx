import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div id="skills" ref={ref} className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-code text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">技能栈</h2>
      </div>
      
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-200 font-medium">{skill.name}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.i
                    key={i}
                    className={`fa-solid fa-star ${i < skill.level ? 'text-yellow-400' : 'text-gray-700'}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 * index + 0.1 * i 
                    }}
                  ></motion.i>
                ))}
              </div>
            </div>
            
            <motion.div
              className="h-2 bg-gray-800 rounded-full overflow-hidden"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}