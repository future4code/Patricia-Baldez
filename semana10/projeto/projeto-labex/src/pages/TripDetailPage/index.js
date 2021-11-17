import React from 'react'
import PageTitle from '../../components/PageTitle'
import CandidatesList from './CandidatesList'
import { ContentContainer } from './styles'
import TripInfoCard from './TripInfoCard'
import TripInfoItem from './TripInfoItem'

const TripDetailPage = () => {
    return <div>
    <PageTitle title={'Detalhes da viagem'}/>
    <ContentContainer>
      <TripInfoCard/>
      <CandidatesList/>
      <TripInfoItem/>
    </ContentContainer>
    </div>
    
}

export default TripDetailPage