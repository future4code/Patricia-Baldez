import { Switch, Route } from "react-router-dom"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import ErrorPage from "../pages/Error/ErrorPage"
import HomePage from "../pages/HomePage/HomePage"


const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />    
            </Route>
            <Route exact path="/details/:id">
                <DetailsPage />
            </Route>
            <Route>
                <ErrorPage />   
            </Route>
        </Switch>
    )
}

export default Router