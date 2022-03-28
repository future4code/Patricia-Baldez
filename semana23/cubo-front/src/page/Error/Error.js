import { useNavigate } from "react-router-dom"
import { goToHome } from "../../router/coodinates"
import { ContainerError } from "./styled"

const Error = () => {
    const navigate = useNavigate()
    return <ContainerError>
        <h1>Pagina não encontrada</h1>
        <button onClick={() => goToHome(navigate)}>Ir para a Home</button>
    </ContainerError>
}
export default Error