import { ErrorImage, ErrorPageContainer } from "./ErrorPage.styles"
import errorImg from "../../images/page_not_found.svg"

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <ErrorImage src={errorImg} />
            <h2>Erro 404 - Página Não Encontrada</h2>
        </ErrorPageContainer>
    )
}

export default ErrorPage