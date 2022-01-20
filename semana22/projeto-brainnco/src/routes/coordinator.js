export const goToDiaDeSorteScreen = (history) => {
    history.push("/")

}
//ver se isto esta correto na hora de puchar as informações...
export const goToLotoFacilScreen = (history, name) => {
    history.push(`/LotoFacil/${name}`)

}

export const goToLotoManiaScreen = (history) => {
    history.push("/LotoMania")

}

export const goToMegaSenaScreen = (history) => {
    history.push("/MegaSena")

}

export const goToQuinaScreen = (history) => {
    history.push("/Quina")

}

export const goToTimeManiaScreen = (history) => {
    history.push("/TimeMania")

}