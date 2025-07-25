import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useInView } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import Header from '@/components/resume/Header';
import LeftColumn from '@/components/resume/LeftColumn';
import RightColumn from '@/components/resume/RightColumn';
import { resumeData } from '@/data/resumeData';

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('about');
  const { scrollYProgress } = useScroll();
  
  // 监听滚动位置，更新活动区域
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'education', 'experience', 'projects', 'interests'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 星光背景 */}
      <StarryBackground />
      
      {/* 内容容器 */}
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-7xl">
        {/* 头部导航 */}
        <Header 
          name={resumeData.name} 
          title={resumeData.title}
          contact={resumeData.contact}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        
        {/* 主内容区 - 双栏布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* 左侧栏 */}
          <div className="lg:col-span-1 space-y-8">
            <LeftColumn 
              about={resumeData.about}
              skills={resumeData.skills}
              interests={resumeData.interests}
            />
          </div>
          
          {/* 右侧栏 */}
          <div className="lg:col-span-2 space-y-8">
            <RightColumn 
              education={resumeData.education}
              experience={resumeData.experience}
              projects={resumeData.projects}
            />
          </div>
        </div>
      </div>
      
      {/* 滚动进度指示器 */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}