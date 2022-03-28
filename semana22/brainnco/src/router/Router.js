import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"



const Router = ()=> {
    return <BrowserRouter>
    <Routes>
        <Route path="/"element={HomePage}/>
        <Route path="*"element={ErrorPage}/>
    </Routes>
    </BrowserRouter>
}

export default Router