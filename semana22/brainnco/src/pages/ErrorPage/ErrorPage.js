import { useNavigate } from "react-router-dom"
import { goToHome } from "../../router/coodinates"
import { ContainerError } from "./styled"
 


const ErrorPage = ()=>{
    const navigate = useNavigate()
    return <ContainerError>
        <h1> Pagina nao encontrada </h1>
        <button onClick={()=>goToHome(navigate)}>Ir para a HomePage</button>
    </ContainerError>
}

export default ErrorPage