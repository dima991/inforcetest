import React from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import { Avatar, Button, Typography } from '@mui/material'
import { removeCard } from '../../redux/actions/card';
import Modal from '@mui/material/Modal';

 const CardItem = ({card}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'purple',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



     const history = useHistory();
     const dispatch = useDispatch();
     const handleClick = (id) =>{
         history.push(`/product/${id}`)
     }
     const onRemoveClick = (id) => {
        dispatch(removeCard(id))
        setOpen(false)
    }



     
     return(
         <>
         <Box display="inline-block"   padding="25px">
         <Box >
                <Avatar variant="rounded" sx={{ width: 200, height: 200 }} overflow="hidden" src={card.imageUrl} alt={card.name} onClick={(e) => handleClick(card.id)}/>     
         </Box>
         <Typography variant="h6" color="purple"onClick={(e) => handleClick(card.id)}>{card.name}</Typography>
         <Box>
         <Button variant="contained" onClick={handleOpen}>Delete</Button>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you wanna delete card?
          </Typography>
          <Box sx={{ m: 2 }}>
          <Button variant="contained" onClick={handleClose}>Cancle</Button>
          </Box>
          <Box sx={{ m: 2 }}>
          <Button variant="contained" onClick={(e) => onRemoveClick(card.id)}>Remove</Button>
          </Box>
        </Box>

      </Modal>
         
         </Box>
         </Box>
        </>
     )
     
     
     
}
export default CardItem