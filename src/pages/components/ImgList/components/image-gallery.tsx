// src/components/ImageGallery.tsx
import React, { useState, useEffect, useMemo } from "react";

// 定义图片数据类型
interface ImageData {
  url: string;
  category: string;
  title: string;
}

// 预加载所有图片
const imageModules = import.meta.glob(
  "/src/assets/images/**/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;

// 图片画廊组件
const ImageGallery: React.FC<{ imageData: ImageData[] }> = ({ imageData }) => {
  const [images, setImages] = useState<{ data: ImageData; src: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // 处理图片数据
  useEffect(() => {
    const processedImages = imageData.map((item) => {
      // 构建图片路径
      const imagePath = `/src/assets/images/${item.category}/${item.url}`;
      // 查找匹配的图片

      const matchedImage = Object.entries(imageModules).find(([path]) =>
        path.includes(imagePath)
      );

      return {
        data: item,
        src: matchedImage ? matchedImage[1] : "",
      };
    });

    setImages(processedImages);
    setLoading(false);
  }, [imageData]);

  // 获取所有分类
  const categories = useMemo(() => {
    const cats = new Set(imageData.map((item) => item.category));
    return ["all", ...Array.from(cats)];
  }, [imageData]);

  // 过滤当前分类的图片
  const filteredImages = useMemo(() => {
    if (selectedCategory === "all") return images;
    return images.filter((img) => img.data.category === selectedCategory);
  }, [images, selectedCategory]);

  // 如果没有图片
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">动态图片画廊</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          基于JSON数据展示项目图片
        </p>
      </div>

      {/* 分类导航 */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* 图片展示区域 */}
      {filteredImages.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <div className="text-5xl mb-4">📷</div>
          <h3 className="text-xl font-medium text-gray-800">未找到图片</h3>
          <p className="text-gray-600 mt-2">
            {selectedCategory === "all"
              ? "当前没有任何图片数据"
              : `没有找到 ${selectedCategory} 分类的图片`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={`${img.data.category}-${img.data.url}-${index}`}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-[1.03] hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.data.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23f0f0f0"/><text x="50" y="50" font-family="Arial" font-size="10" fill="%23999" text-anchor="middle" dominant-baseline="middle">图片加载失败</text></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">图片未找到</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-bold text-lg truncate">
                    {img.data.title}
                  </h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {img.data.category}
                  </span>
                  <span className="text-xs text-gray-500">
                    {index + 1}/{filteredImages.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 统计信息 */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          总图片数: {images.length} | 当前分类: {selectedCategory} | 显示图片:{" "}
          {filteredImages.length}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;
