import React from "react"
import { LoadingContainer } from "./Loading.styles"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

const Loading = () => {
  return (
    <LoadingContainer>
      <ClimbingBoxLoader size={30} color={"#ffffff"} loading={true} />
    </LoadingContainer>
  )
}

export default Loading
