import { useContext } from "react";
import { LotteriesContext } from "../contexts/LotteriesContext";
import "../styles/result.scss";

export function Result() {
  const { currentLotteryDraw } = useContext(LotteriesContext);
  const width = currentLotteryDraw.numbers.length === 6 ? "700px" : "600px";
  return (
    <div className="result">
      <div></div>
      <div className="ball-group" style={{ maxWidth: width }}>
        {currentLotteryDraw.numbers.map((number, key) => {
          return (
            <div className="ball" key={key}>
              {number}
            </div>
          );
        })}
      </div>
      <div className="disclaimer">
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA.
      </div>
    </div>
  );
}