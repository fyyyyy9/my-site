import { motion } from 'framer-motion';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import InterestsSection from './sections/InterestsSection';

interface LeftColumnProps {
  about: string;
  skills: { name: string; level: number }[];
  interests: string[];
}

export default function LeftColumn({ about, skills, interests }: LeftColumnProps) {
  return (
    <>
      {/* 个人简介 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <AboutSection content={about} />
      </motion.div>
      
      {/* 技能 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <SkillsSection skills={skills} />
      </motion.div>
      
      {/* 兴趣爱好 */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <InterestsSection interests={interests} />
      </motion.div>
    </>
  );
}