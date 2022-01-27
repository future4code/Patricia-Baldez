import { app } from "./controller/app";
import { userRouter } from "./router/userRouter";


app.use("/user", userRouter)

