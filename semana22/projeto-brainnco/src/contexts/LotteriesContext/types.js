interface LotteryOption {
    name: string;
    id: number;
  }
  
  interface LotteryDraw {
    lotteryName: string;
    lotteryId: number;
    contestId: string;
    numbers: Array<string>;
    date: string;
    color: string;
  }