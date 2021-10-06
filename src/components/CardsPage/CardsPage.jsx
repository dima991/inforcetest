import React, { useEffect, useReducer} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCard, fetchCards} from '../../redux/actions/card'
import CardItem from './CardsItem';
import { Box } from '@mui/system';
import {Button, TextField, Typography} from '@mui/material'
import Modal from '@mui/material/Modal';

const CardsPage = () => {
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






    const dispatch = useDispatch();
    const { cards, isLoading } = useSelector(
        (state) => state.cards,
    );
    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])
    const [info, setInfo] = useReducer((state, newState) => ({ ...state, ...newState }), {
        id: Math.floor(Math.random() * 10000),
        imageUrl: '',
        name: '',
        count:'',
        weight: '',

    });
    
    const handleInfoChange = (e) => {
        const { name, value } = e.target;
        setInfo({ [name]: value });
    };
    const addProduct = () => {
        dispatch(addCard(info))
        setOpen(false)

    }
  
    
    


    return (
        <>
        <Button variant="contained" onClick={handleOpen}>Add card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter current fields!
          </Typography>
          <Box>
            <Box display="inline">Enter pass of image :</Box>
            <TextField size="small" type="text" name='imageUrl' onChange={handleInfoChange} />
        </Box>
        <Box>
                <Box display="inline">Enter name of product:</Box>
                <TextField size="small" type="text" name='name' onChange={handleInfoChange} />
        </Box>
        <Box>
                <Box display="inline">Enter count of product:</Box>
                <TextField size="small" type="text" name='count' onChange={handleInfoChange} />
        </Box>
        <Box>
                <Box display="inline">Enter weight of product:</Box>
                <TextField size="small" type="text" name='weight' onChange={handleInfoChange} />
        </Box>
        <Box sx={{ m: 2 }}>
        <Button variant="contained" onClick={handleClose} >Cancle</Button>
        </Box>
        <Box sx={{ m: 2 }}>
        <Button variant="contained" onClick={addProduct} >Add</Button>
        </Box>
        </Box>
      </Modal>

        <Box>
        {isLoading && <div>Loading...</div>}
            {cards.map(card => <CardItem key={cards.id} card={card}/>)}
        </Box>
        
            
        </>
    )
}

export default CardsPage;