// 个人简历数据
export const resumeData = {
  name: "王明",
  title: "前端开发工程师",
  about: "我是一名对技术充满热情的初级前端开发工程师，拥有两年的Web开发经验，专注于使用React和Vue构建用户友好的交互式界面。我热衷于将设计师的创意精准地转化为高性能的网页应用，并不断学习前沿技术以提升自己。我是一个积极主动的问题解决者，期待能加入一个富有挑战和创造力的团队。",
  contact: {
    email: "wangming@example.com",
    phone: "138-0000-0000",
    github: "https://github.com/wangming",
  },
  skills: [
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "React", level: 4 },
    { name: "Vue", level: 3 },
    { name: "HTML5", level: 5 },
    { name: "CSS3", level: 5 },
    { name: "Sass", level: 4 },
    { name: "ECharts", level: 3 },
    { name: "Git", level: 5 },
    { name: "Figma", level: 3 },
  ],
  education: [
    {
      school: "上海交通大学",
      degree: "计算机科学与技术 (本科)",
      period: "2018.09 - 2022.06",
    },
  ],
  experience: [
    {
      id: "exp1",
      company: "字节跳动",
      position: "前端开发工程师",
      period: "2022.07 - 至今",
      achievements: [
        "负责公司内部数据可视化平台的前端开发与维护，使用React和ECharts。",
        "通过代码重构和性能优化，将关键页面的加载速度提升了30%。",
        "与产品经理和设计师紧密合作，快速迭代了超过10个版本的功能。",
      ],
    },
    {
      id: "exp2",
      company: "腾讯科技",
      position: "前端开发实习生",
      period: "2021.07 - 2021.12",
      achievements: [
        "协助开发微信小程序“城市服务”模块，主要负责UI组件的编写和API对接。",
        "参与了代码审查（Code Review），学习并遵循了团队的编码规范。",
      ],
    },
  ],
  projects: [
    {
      id: "proj1",
      name: "个人博客系统",
      description: "一个基于Vue.js和Nuxt.js构建的静态博客网站，实现了文章发布、标签分类、Markdown实时渲染和响应式布局。通过这个项目，我深入学习了服务端渲染（SSR）和SEO优化技术。",
      technologies: ["Vue.js", "Nuxt.js", "Markdown", "SSR", "SEO"],
      link: "#",
    },
  ],
  interests: ["摄影", "篮球", "阅读科幻小说"],
};