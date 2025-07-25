import { motion } from 'framer-motion';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';

interface RightColumnProps {
  education: {
    school: string;
    degree: string;
    period: string;
    description?: string;
  }[];
  experience: {
    id: string;
    company: string;
    position: string;
    period: string;
    achievements: string[];
    logo?: string;
  }[];
  projects: {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    link?: string;
  }[];
}

export default function RightColumn({ education, experience, projects }: RightColumnProps) {
  return (
    <>
      {/* 教育背景 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <EducationSection education={education} />
      </motion.div>
      
      {/* 工作经历 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ExperienceSection experience={experience} />
      </motion.div>
      
      {/* 个人项目 */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectsSection projects={projects} />
      </motion.div>
    </>
  );
}