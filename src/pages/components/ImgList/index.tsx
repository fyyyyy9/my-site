import "./img-list.scss";
import ImageGallery from "./components/image-gallery";

export default function ImgList() {
  // const state = ["html", "json", "css", "js"];
  const imageData: ImageData[] = [
    { url: "app-1.png", category: "app", title: "H5-1", objectType: "contain" },
    { url: "app-2.png", category: "app", title: "H5-2", objectType: "contain" },
    { url: "app-3.png", category: "app", title: "H5-3", objectType: "contain" },
    { url: "web-1.png", category: "web", title: "网站", objectType: "contain" },
    { url: "web-2.png", category: "web", title: "大屏", objectType: "contain" },
    { url: "web-3.png", category: "web", title: "大屏", objectType: "contain" },
    { url: "web-4.png", category: "web", title: "大屏", objectType: "contain" },
    { url: "web-5.png", category: "web", title: "网站", objectType: "contain" },
  ];
  return (
    <div className="list  flex flex-wrap">
      <ImageGallery imageData={imageData} />

      {/* {state.map((item, index) => {
        return (
          <div key={index} className="list-item">
            {item}
          </div>
        );
      })} */}
    </div>
  );
}
