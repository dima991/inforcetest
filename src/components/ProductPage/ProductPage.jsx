import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/product";
import { Box } from '@mui/system';
import {Avatar, Button, TextField, Typography} from '@mui/material'
import { addComment, fetchComments } from "../../redux/actions/comment";
import Comments from "./Comments";

const ProductPage = () => {
    const id = parseInt(window.location.href.split('/').pop());
    const dispatch = useDispatch()


    const { products: { product, isLoading }, comments} = useSelector((state) => state);
    const [comment, setComment] = useState('')
    const currentComments = comments.comments.filter(comment => comment.productId === id)


//Loading product (by id)
    useEffect(()=>{
        dispatch(fetchProduct(id))
    }, [id, dispatch])


    useEffect(() => {
        if (comments.isLoading) {
            dispatch(fetchComments())
        }
    }, [comments, dispatch]);

    const currentdate = new Date(); 
let datenow = currentdate.getHours() + ":" + currentdate.getMinutes() + " " +currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/" + currentdate.getFullYear();

    const onAddComment = () => {
        setComment('')
        dispatch(addComment({ description: comment, productId: id, date: datenow}))
    };



    return(
        <>
        {isLoading ? <Box>Loading...</Box> :
        <Box>
            <Avatar variant="rounded" sx={{width: 350, height:350 }} overflow="hidden" src={product.imageUrl} alt=""/>
            <Box>
                <Typography variant="h4">Name: {product.name}</Typography>
                <Typography variant="h4">Count: {product.count}</Typography>
                <Typography variant="h4">Weight: {product.weight}</Typography>
                <Box>

                </Box>
                <Box style={{ display: "flex", flexDirection: "column" }}>{currentComments.map(comment => <Comments key={comment.id} comment={comment} />)}</Box>
                <Box>
                    <TextField type="text" placegolder='add comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                    <Button variant="contained" onClick={onAddComment}>Add</Button>
                </Box>
            </Box>
        </Box>
        }
        </>
    )
}
export default ProductPage