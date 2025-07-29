import logo from "@/assets/images/fyy.svg";
import "./header.scss";
export default function Header() {
  return (
    <div className="header wrapper">
      <img src={logo} alt="fyy" />
    </div>
  );
}
