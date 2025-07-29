import { motion } from 'framer-motion';


interface ProjectItem {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div id="projects" className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-project-diagram text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">个人项目</h2>
      </div>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* 项目截图占位区 */}
              <div className="md:w-2/5 relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 group-hover:border-blue-500/50 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>
                  
                  {/* 项目图片占位符 */}
                  <div className="text-center p-4">
                    <i className="fa-solid fa-image text-4xl text-gray-700 mb-2"></i>
                    <p className="text-gray-500 text-sm">项目截图</p>
                  </div>
                  
                  {/* 悬停效果 */}
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 transition-all"
                      >
                        <i className="fa-solid fa-external-link-alt mr-1"></i> 查看项目
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* 项目信息 */}
              <div className="md:w-3/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <i className="fa-solid fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* 技术栈标签 */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-200 text-xs rounded-full border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}