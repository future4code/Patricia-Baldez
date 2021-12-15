import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { ThumbUpIcon } from '@material-ui/icons/ThumbUp'
import { ThumbDownIcon } from '@material-ui/icons/ThumbDown'

const CandidateItem =(props)=> {
    return<ListItem>
                <ListItemText
                primary={props.CandidateItem.name}
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={approveCandidate}>
                        <ThumbUpIcon/>
                        </IconButton>
                    <IconButton onClick={rejectCandidate}>
                        <ThumbDownIcon />
                    </IconButton >
                </ListItemSecondaryAction>
                </ListItem>
}
export default CandidateItem