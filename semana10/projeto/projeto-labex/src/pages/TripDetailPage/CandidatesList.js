import React from 'react'
import { Card, CardContent, List, Typography }  from '@material-ui/core'
import CandidateItem from './CandidateItem'

const CandidateList = (props) => {
    return<Card>
        <CardContent>
            <Typography variant = {'h5'} gutterBotton>
                 Lista de candiadatos
            </Typography>
            <List>
                {pros.candidates.map(candidate =>{
                    return<CandidateItem candidate={candidate} decideCandidate={props.decideCandidate}/>
                })}
            </List>
        </CardContent>
    </Card>  
}
export default CandidateList