import { Modal, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import { InputLabel, TextField } from "@mui/material";
import Dropdown from "./Dropdown";

function ModalComponent({ showModal, handleClose }) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={showModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ ...style, width: 500, height: 700 }}>

                <InputLabel>Enter the Name of the Segment</InputLabel>
                <TextField id="outlined-basic" placeholder="Name of the Segment" fullWidth size="small" variant="outlined" />

                <Typography variant="body1" gutterBottom marginTop={3}>
                To Save your segment, you need to add the schemas to build query.
                </Typography>

                <Dropdown>
                    
                </Dropdown>
            </Box>
        </Modal>
    )
}

export default ModalComponent;