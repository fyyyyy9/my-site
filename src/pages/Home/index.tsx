import SoldierAni from "../components/SoldierAni";
import Header from "../components/Header";
import ImgList from "../components/ImgList";
import "./home.scss";
export default function HomePage() {
  return (
    <section className="home relative min-h-screen w-full overflow-hidden">
      <Header />
      <SoldierAni />
      <ImgList />
    </section>
  );
}
