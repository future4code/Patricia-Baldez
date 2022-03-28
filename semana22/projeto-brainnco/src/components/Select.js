import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LotteriesContext } from "../contexts/LotteriesContext";

import "../styles/select.scss";
interface SelectProps {
  label: string;
}

export function Select(props: SelectProps) {
  const { lotteries } = useContext(LotteriesContext);
  const history = useHistory();

  const goToLotterySelected = (lotteryId: number) => {
    history.push(`/${lotteryId}`);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} className="m-1 select-btn">
        {props.label}
        <ArrowDropDownIcon />
      </div>
      <ul
        tabIndex={0}
        className="ml-1 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        {lotteries?.map((lottery) => {
          return (
            <li key={lottery.id}>
              <button
                title="Opção de loteria"
                aria-label={lottery.name}
                className="select-option-button"
                onClick={() => goToLotterySelected(lottery.id)}
              >
                {lottery.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}