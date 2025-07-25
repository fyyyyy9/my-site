import { motion } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import { useNavigate } from 'react-router-dom';

// 个人信息数据
const personalInfo = {
  statement: "我是一名对技术充满热情的初级前端开发工程师，拥有两年的Web开发经验，专注于使用React和Vue构建用户友好的交互式界面。我热衷于将设计师的创意精准地转化为高性能的网页应用，并不断学习前沿技术以提升自己。我是一个积极主动的问题解决者，期待能加入一个富有挑战和创造力的团队。"
};

export default function LandingPage() {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 星光背景 */}
      <StarryBackground />
      
      {/* 内容容器 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* 个人自述文字 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl text-center mb-16"
        >
          <p className="text-[clamp(1.5rem,5vw,2.5rem)] font-light text-gray-100 leading-relaxed">
            {personalInfo.statement}
          </p>
        </motion.div>
        
        {/* 进入简历按钮 */}
        <motion.button
          onClick={() => navigate('/resume')}
          whileHover={{ y: 5 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-12 flex flex-col items-center"
        >
          <span className="text-gray-200 mb-2 text-sm tracking-widest uppercase">
            进入简历
          </span>
          <motion.i 
            className="fa-solid fa-chevron-down text-gray-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          ></motion.i>
        </motion.button>
      </div>
    </div>
  );
}