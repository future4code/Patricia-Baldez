export const goToLoginPage = (history) => {
    history.push ("/login")
}

export const goToSignUp = (history) => {
    history.push ("/cadastro")
}

export const goToAddRecipes = (history) => {
    history.push ("/adcionar-receita")
}

export const goToRecipeDetail = (history, id) => {
    history.push (`/detalhe/${id}`)
}

export const goToRecipesList = (history) => {
    history.push ("/")
}

