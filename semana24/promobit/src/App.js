import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from './App.styles'
import Loading from './components/Loading/Loading'
import Router from './routes/Router'


const App = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 2500)
}, [])

  return (
    <AppContainer>
    {
      isLoading ? <Loading />
      :
      <BrowserRouter>
        {/* <Header /> */}
        <Router />
      </BrowserRouter>
    }
    </AppContainer>
  )
}

export default App