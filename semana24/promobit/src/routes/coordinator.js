 export const goBack = (navigate) => {
     navigate.goBack()
}

export const goToHomePage = (navigate) => {
    navigate.push("/")
}

export const goToDetailsPage = (navigate, id) => {
    navigate.push(`/details/${id}`)
}



