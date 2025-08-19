import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import App from "./App.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/assets/styles/index.scss";
import "@/assets/styles/flex.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/my-site">
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>
);
// 在应用渲染前初始化AOS
AOS.init({
  duration: 800, // 动画持续时间(毫秒)
  easing: 'ease-in-out', // 动画缓动函数
  once: false, // 是否只执行一次动画
  mirror: true // 是否在元素滚动出视图时反向动画
});
