import { Select } from "./Select";
// import logoImg from "../assets/images/logo.svg";
import "../styles/sidebar.scss";
import { useContext } from "react";
import { LotteriesContext } from "../contexts/LotteriesContext";

export function Sidebar() {
  const { currentLotteryDraw } = useContext(LotteriesContext);

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: currentLotteryDraw.color }}
    >
      <Select label={currentLotteryDraw.lotteryName} />

      <div className="logo">
        <img src={logoImg} alt="Logo" width="50px" />
        <span>{currentLotteryDraw.lotteryName}</span>
      </div>

      <div className="contest">
        <span>Concurso</span>
        <span>
          {currentLotteryDraw.contestId} - {currentLotteryDraw.date}
        </span>
      </div>
    </div>
  );
}