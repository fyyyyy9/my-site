import { useEffect, useRef } from 'react';

// 自定义hook：创建星光粒子动画效果
export function useStarAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
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
    
    // 创建星光粒子
    interface Star {
      x: number;
      y: number;
      radius: number;
      opacity: number;
      speedX: number;
      speedY: number;
      twinkleSpeed: number;
    }
    
    const stars: Star[] = [];
    const starCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
        opacity: Math.random(),
        speedX: (Math.random() - 0.5) * 0.1,
        speedY: (Math.random() - 0.5) * 0.1,
        twinkleSpeed: Math.random() * 2 + 1
      });
    }
    
    // 动画循环
    let animationFrameId: number;
    
    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // 更新位置
        star.x += star.speedX;
        star.y += star.speedY;
        
        // 边界检查
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
        
        // 闪烁效果
        const time = Date.now() * 0.001;
        star.opacity = 0.5 + Math.sin(time * star.twinkleSpeed) * 0.5;
        
        // 绘制星星
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animateStars);
    };
    
    animateStars();
    
    // 清理
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return canvasRef;
}