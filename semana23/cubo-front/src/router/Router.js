import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './../page/Home/Home'
import Error from './../page/Error/Error'

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
}

export default Router