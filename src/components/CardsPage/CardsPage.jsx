import React, { useEffect, useReducer} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCard, fetchCards} from '../../redux/actions/card'
import CardItem from './CardsItem';
import { Box } from '@mui/system';
import {Button, TextField, Typography} from '@mui/material'
import BasicModal from '../Modal/MainModal';

const CardsPage = () => {
    const dispatch = useDispatch();
    const { cards, isLoading } = useSelector(
        (state) => state.cards,
    );
    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])
    const [info, setInfo] = useReducer((state, newState) => ({ ...state, ...newState }), {
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
        
    }
  
    
    


    return (
        <>
      <BasicModal  action={addProduct}>
        
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
        {/* <Box sx={{ m: 2 }}>
        <Button variant="contained" onClick={handleClose} >Cancle</Button>
        </Box> */}
        <Box sx={{ m: 2 }}>
        {/* <Button variant="contained" onClick={addProduct} >Add</Button> */}
        </Box>
        </BasicModal>

        <Box>
        {isLoading && <div>Loading...</div>}
            {cards.map(card => <CardItem key={card.id} card={card}/>)}
        </Box>
        
            
        </>
    )
}

export default CardsPage;