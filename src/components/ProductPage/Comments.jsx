import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeComment } from '../../redux/actions/comment'
import { Box } from '@mui/system';



const Comments = ({ comment }) => {
    const dispatch = useDispatch()

    const onBtnClick = () => {
        dispatch(removeComment(comment.id))
    }

    return (
        <Box>
            <Typography  margin="10px" > {comment.description} <Button variant="contained" size="small"onClick={onBtnClick}>Remove</Button></Typography>
            <Typography padding="10px">{comment.date}</Typography>
            
        </Box>
        
    )
}

export default Comments