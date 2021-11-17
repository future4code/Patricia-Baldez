export const goToLoginPage = () => {
    history.pushState("/login")
}

export const goToSingUp = () => {
    history.pushState("/cadastro")
}

export const goToAddRecipe = () => {
    history.pushState("/adcionar-receita")
}

export const goToRecipeDetail = () => {
    history.pushState(`/detalhe/${id}`)
}

export const goToRecipeList = () => {
    history.pushState("/")
}

