import SoldierAni from "./components/SoldierAni";
import Header from "./components/Header";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <SoldierAni />
    </div>
  );
}
