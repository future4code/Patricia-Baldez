import {createContext,ReactNode, useState, useEffect, useCallback} from "react";
import { colors, initialState } from "./constants";
import { formatDate } from "./utils";
import api from "../../services/api";

  interface LotteriesProviderProps {
    children: ReactNode;
  }
  
  interface LotteriesContextData {
    lotteries: Array<LotteryOption>;
    currentLotteryDraw: LotteryDraw;
    isLoading: boolean;
    handleLoterrySelection: (lotteryId: number) => Promise<void>;
  }
  
  export const LotteriesContext = createContext({} as LotteriesContextData);
  
  export const LotteriesProvider =() => ({ children }: LotteriesProviderProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [lotteries, setLotteries] = useState<LotteryOption[]>([]);
    const [currentLotteryDraw, setCurrentLotteryDraw] =
      useState<LotteryDraw>(initialState);
  
    const setIsLoadingDebounced = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    };
  
    async function getLotteries() {
      try {
        const { data } = await api.get("/loterias");
        return data.map((item: any) => {
          return {
            id: item.id,
            name: item.nome,
          };
        });
      } catch (error) {
        console.error(error);
      }
    }
  
    async function getLotteryContest(lotteryId: number) {
      try {
        const { data } = await api.get("/loterias-concursos");
        const contestId = data.find(
          (item: any) => item.loteriaId === lotteryId
        ).concursoId;
        return contestId;
      } catch (error) {
        console.error(error);
      }
    }
  
    async function getContest(contestId: string) {
      try {
        const { data } = await api.get(`concursos/${contestId}`);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  
    const handleLoterrySelection = useCallback(async (lotteryId: number) => {
      setIsLoading(true);
  
      const lotteries = await getLotteries();
      const contestId = await getLotteryContest(lotteryId);
      const contest = await getContest(contestId);
      const name = lotteries[lotteryId]?.name;
  
      setCurrentLotteryDraw({
        lotteryName: name ? name : "",
        lotteryId: lotteryId,
        contestId: contestId,
        numbers: contest.numeros,
        date: formatDate(contest.data),
        color: colors[lotteryId],
      });
  
      setIsLoadingDebounced();
    }, []);
  
    useEffect(() => {
      getLotteries().then((data) => {
        setLotteries(data);
      });
    }, []);

    return (
      <LotteriesContext.Provider 
      value={
        {lotteries,
          currentLotteryDraw,
          isLoading,
          handleLoterrySelection,}
        }
        >
        {children}
      </LotteriesContext.Provider>
    );
   }