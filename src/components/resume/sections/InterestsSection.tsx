import { motion } from 'framer-motion';

interface InterestsSectionProps {
  interests: string[];
}

// 兴趣爱好对应的图标
const interestIcons = {
  '摄影': 'camera',
  '篮球': 'basketball-ball',
  '阅读科幻小说': 'book',
  '旅行': 'plane',
  '音乐': 'music',
  '编程': 'laptop-code'
};

export default function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <div id="interests" className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800 shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
          <i className="fa-solid fa-heart text-blue-400"></i>
        </div>
        <h2 className="text-2xl font-bold text-gray-100">兴趣爱好</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {interests.map((interest, index) => {
          // 获取对应的图标类名，如果没有则使用默认图标
          const iconName = interestIcons[interest as keyof typeof interestIcons] || 'star';
          
          return (
            <motion.div
              key={interest}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex flex-col items-center justify-center p-4 bg-gray-800/40 rounded-lg border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/60 transition-all cursor-pointer group"
            >
              <i className={`fa-solid fa-${iconName} text-2xl text-blue-400 mb-2 group-hover:scale-110 transition-transform`}></i>
              <span className="text-gray-200 text-center text-sm">{interest}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}