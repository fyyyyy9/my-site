import logo from "@/assets/images/fyy.svg";
import "./header.scss";
export default function Header() {
  return (
    <div className="header wrapper">
      <div className="flex flex-middle">
        <img src={logo} alt="fyy" />
        <h2>finefish@foxmail.com</h2>
      </div>
    </div>
  );
}
