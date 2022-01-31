const UseDateTreatmentBr = (date)=>{

    const actuallyDate = date.split("T")
  const time = actuallyDate[1].split(".")
  const revertDate = actuallyDate[0].split("-").reverse()
  const dateOk = `${revertDate[0]}/${revertDate[1]}/${revertDate[2]}, ${time[0]}`

  return(dateOk)
}
export default UseDateTreatmentBr