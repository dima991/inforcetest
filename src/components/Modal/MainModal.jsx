import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
// import { useSelector } from 'react-redux';

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

const BasicModal = ({ action, children }) => {
  // const { modal } = useSelector(
  //     (state) => state.modal,
  // );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAction = () => {
    handleClose()
    action()
  }


  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>Add</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
          <Box sx={{ m: 2 }}>
            <Button variant="contained" onClick={handleClose} >Cancle</Button>

          </Box>
          <Box sx={{ m: 2 }}>
            <Button variant="contained" onClick={handleAction} >Add</Button>
          </Box>
        </Box>

      </Modal>
    </div>
  );
}
export default BasicModal
