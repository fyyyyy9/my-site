import { useEffect, useRef } from 'react';
import { motion, useAnimationFrame, useAnimation } from 'framer-motion';

// 星光宇宙背景组件
const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  
  // 创建星光背景
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置canvas尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // 生成随机星光
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number }[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        opacity: Math.random(),
        speed: Math.random() * 0.5 + 0.1
      });
    }
    
    // 绘制星光
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // 星光闪烁效果
        star.opacity += (Math.random() - 0.5) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        // 轻微移动效果
        star.x += star.speed * 0.05;
        if (star.x > canvas.width) star.x = 0;
      });
      
      requestAnimationFrame(drawStars);
    };
    
    drawStars();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="fixed inset-0 z-0">
      {/* 背景图片 */}
      <div className="absolute inset-0 bg-cover bg-center opacity-60" 
           style={{ 
             backgroundImage: 'url(https://lf3-static.bytednsdoc.com/obj/eden-cn/0077eh7fd/pngtree-pure-black-starry-minimalist-dreamy-business-background-picture-image_913719.jpg)' 
           }}
      />
      
      {/* 黑色半透明蒙版 */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      
      {/* 动态星光Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default StarryBackground;