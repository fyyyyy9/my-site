import "./img-list.scss";
import ImageGallery from "./components/image-gallery";

export default function ImgList() {
  // const state = ["html", "json", "css", "js"];
  const imageData: ImageData[] = [
    { url: "111.png", category: "project", title: "项目1" },
    { url: "222.png", category: "design", title: "设计1" },
    { url: "111.png", category: "project", title: "项目3" },
    { url: "111.png", category: "project", title: "项目4" },
    { url: "111.png", category: "project", title: "项目5" },
    { url: "111.png", category: "project", title: "项目6" },
    { url: "111.png", category: "project", title: "项目7" },
    { url: "111.png", category: "project", title: "项目1" },
  ];
  return (
    <div className="list wrapper flex flex-wrap">
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
