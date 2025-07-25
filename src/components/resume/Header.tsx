import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin?: string;
  };
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ name, title, contact, activeSection, setActiveSection }: HeaderProps) {
  // 导航链接
  const navLinks = [
    { id: 'about', label: '关于我' },
    { id: 'skills', label: '技能' },
    { id: 'education', label: '教育' },
    { id: 'experience', label: '工作经历' },
    { id: 'projects', label: '项目' },
    { id: 'interests', label: '兴趣爱好' },
  ];
  
  // 滚动到指定区域
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/60 rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        {/* 姓名和职位 */}
        <div className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-100 tracking-tight"
          >
            {name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 mt-1"
          >
            {title}
          </motion.p>
        </div>
        
        {/* 联系方式 */}
        <div className="flex items-center justify-center md:justify-end space-x-6 mt-6 md:mt-0">
          <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-blue-400 transition-colors">
            <i className="fa-solid fa-envelope mr-1"></i>
            <span className="hidden sm:inline">{contact.email}</span>
          </a>
          <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors">
            <i className="fa-solid fa-phone mr-1"></i>
            <span className="hidden sm:inline">{contact.phone}</span>
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
            <i className="fa-brands fa-github mr-1"></i>
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
      
      {/* 导航菜单 */}
      <nav className="mt-8 overflow-x-auto pb-2">
        <ul className="flex space-x-1 md:space-x-4 justify-center min-w-max">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "px-3 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeSection === link.id
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-gray-400 hover:text-gray-100 hover:bg-gray-800/50"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}