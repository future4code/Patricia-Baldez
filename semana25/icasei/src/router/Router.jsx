import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import VideoPage from '../pages/VideoPage/VideoPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>

                <Route exact path='/video/:idVideo'>
                    <VideoPage/>
                </Route>

                <Route>
                    <div>Pagina não encontrada!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
