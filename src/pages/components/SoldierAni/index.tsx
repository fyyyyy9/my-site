import FirstSoldier from "@/components/FirstSoldier";
import SecondSoldier from "@/components/SecondSoldier";
import "./index.scss";
export default function SoldierAni() {
  return (
    <div className="soldier-ani " data-aos="fade-in">
      <div className="wrapper">
        <div className=" content">
          <h1>I am a considerate web front-end developer</h1>
        </div>
      </div>

      <div className="first">
        <FirstSoldier />
      </div>
      <div className="second">
        <SecondSoldier />
      </div>
    </div>
  );
}
